import classNames from 'classnames';
import * as React from 'react';
import {DropTarget, IDropTargetProps} from 'react-dnd';
import {createStructuredSelector} from 'reselect';
import * as _ from 'underscore';

import * as VaporSVG from 'coveo-styleguide';
import {convertItemsBoxToStringList, convertStringListToItemsBox} from '../../reusableState';
import {IDispatch, ReduxConnect} from '../../utils/ReduxUtils';
import {DnDUtils} from '../dragAndDrop/DnDUtils';
import {
    DraggableSelectedOption,
    DraggableSelectedOptionType,
} from '../dropdownSearch/MultiSelectDropdownSearch/DraggableSelectedOption';
import {SelectedOption} from '../dropdownSearch/MultiSelectDropdownSearch/SelectedOption';
import {IItemBoxProps} from '../itemBox/ItemBox';
import {clearListBoxOption, reorderListBoxOption, unselectListBoxOption} from '../listBox/ListBoxActions';
import {Svg} from '../svg/Svg';
import {Tooltip} from '../tooltip/Tooltip';
import {ISelectButtonProps, ISelectOwnProps, SelectConnected} from './SelectConnected';
import {SelectSelector} from './SelectSelector';

export interface IMultiSelectOwnProps extends Omit<ISelectOwnProps, 'button'>, IDropTargetProps {
    emptyPlaceholder?: string;
    deselectAllTooltipText?: string;
    sortable?: boolean;
    noDisabled?: boolean;
    multiSelectStyle?: React.CSSProperties;
    readOnly?: boolean;
    connectDropTarget?: any;
}

export interface IMultiSelectProps
    extends IMultiSelectOwnProps,
        ReturnType<ReturnType<typeof makeMapStateToProps>>,
        ReturnType<typeof mapDispatchToProps> {}

const selectPropsKeys = [
    'button',
    'classes',
    'disabled',
    'dropClasses',
    'dropOption',
    'footer',
    'hasFocusableChild',
    'id',
    'isLoading',
    'items',
    'multi',
    'noActive',
    'noResultItem',
    'onUpdate',
    'placeholder',
    'selectClasses',
    'toggleClasses',
    'wrapItems',
];

const makeMapStateToProps = () =>
    createStructuredSelector({
        selected: SelectSelector.getMultiSelectSelectedValues,
    });

const mapDispatchToProps = (dispatch: IDispatch, ownProps: IMultiSelectOwnProps) => ({
    onRemoveClick: (item: IItemBoxProps) => dispatch(unselectListBoxOption(ownProps.id, item.value)),
    onRemoveAll: () => dispatch(clearListBoxOption(ownProps.id)),
    onReorder: (values: string[]) => dispatch(reorderListBoxOption(ownProps.id, values)),
});

// This object is usefull when the drag happen outside of the DraggableSelectedOption,
// instead of making the child handle it, the parent catches the event
const parentDropTarget = {
    drop: _.noop,
};

@ReduxConnect(makeMapStateToProps, mapDispatchToProps)
@DropTarget(DraggableSelectedOptionType, parentDropTarget, (connect: any) => ({
    connectDropTarget: connect.dropTarget(),
}))
class MultiSelect extends React.PureComponent<IMultiSelectProps> {
    static defaultProps: Partial<IMultiSelectProps> = {
        placeholder: 'Select an option',
        emptyPlaceholder: 'No selected option',
        deselectAllTooltipText: 'Deselect All',
        sortable: false,
        noDisabled: false,
        multiSelectStyle: {},
    };

    render() {
        return (
            <SelectConnected
                id={this.props.id}
                key={this.props.id}
                {..._.pick(this.props, selectPropsKeys)}
                button={this.Toggle}
                multi
            >
                {this.props.children}
            </SelectConnected>
        );
    }

    private getSelectedOptionComponents(): React.ReactNode {
        const selected = this.getSelectedOptions();

        if (selected.length) {
            return selected.map((item: IItemBoxProps, index: number) =>
                this.props.sortable ? this.renderDraggableOption(item, index) : this.renderOption(item)
            );
        }
        return <span className="multiselect-empty">{this.props.emptyPlaceholder}</span>;
    }

    private renderOption(item: IItemBoxProps): JSX.Element {
        const displayValue = item.selectedDisplayValue ?? item.displayValue ?? item.value;
        return (
            <SelectedOption
                label={displayValue}
                selectedTooltip={item.selectedTooltip}
                value={item.value}
                key={item.value}
                onRemoveClick={() => this.props.onRemoveClick(item)}
                readOnly={this.props.readOnly}
            >
                {displayValue}
            </SelectedOption>
        );
    }

    private renderDraggableOption(item: IItemBoxProps, index: number): JSX.Element {
        return (
            <div
                className={classNames('flex flex-row flex-center sortable-selected-option', {
                    readOnly: this.props.readOnly,
                })}
                key={item.value}
            >
                <span className="mr1">{index + 1}</span>
                <DraggableSelectedOption
                    label={item.selectedDisplayValue ?? item.displayValue ?? item.value}
                    selectedTooltip={item.selectedTooltip}
                    value={item.value}
                    onRemoveClick={() => this.props.onRemoveClick(item)}
                    index={index}
                    move={(dragIndex: number, hoverIndex: number) => this.move(dragIndex, hoverIndex)}
                    readOnly={this.props.readOnly}
                />
            </div>
        );
    }

    private move(dragIndex: number, hoverIndex: number) {
        const moving = this.props.selected[dragIndex];
        const newOrder = [...this.props.selected];

        // Remove the element at position dragIndex
        newOrder.splice(dragIndex, 1);

        // Insert the moving element at hoverIndex
        newOrder.splice(hoverIndex, 0, moving);

        this.props.onReorder(newOrder);
    }

    private getRemoveAllSelectedOptionsButton(): JSX.Element {
        return this.getSelectedOptions().length > 1 && !this.props.readOnly ? (
            <Tooltip title={this.props.deselectAllTooltipText} placement="top" noSpanWrapper>
                <div
                    className="remove-all-selected-options ml1"
                    onClick={() => this.props.onRemoveAll()}
                    role="button"
                    aria-label={this.props.deselectAllTooltipText}
                >
                    <Svg svgName={VaporSVG.svg.clear.name} svgClass="icon" />
                </div>
            </Tooltip>
        ) : null;
    }

    private Toggle = ({onClick, onKeyDown, onKeyUp, isOpen}: ISelectButtonProps): JSX.Element => {
        const classes = classNames('multiselect-input', {
            'mod-sortable': this.props.sortable,
        });
        const buttonAttrs =
            !this.props.noDisabled && this.props.selected && this.props.selected.length === this.props.items.length
                ? {disabled: true}
                : {disabled: this.props.disabled};
        const buttonClasses = classNames(
            'btn dropdown-toggle multiselect-add dropdown-toggle-placeholder',
            this.props.toggleClasses
        );
        return (
            <div className={classes} style={this.props.multiSelectStyle}>
                {this.props.connectDropTarget(
                    <div className="multiselect-selected flex flex-center flex-auto full-content">
                        <div
                            className={classNames('selected-options-container truncate', {
                                readOnly: this.props.readOnly,
                            })}
                            role="list"
                        >
                            {this.getSelectedOptionComponents()}
                        </div>
                        {this.getRemoveAllSelectedOptionsButton()}
                    </div>
                )}
                {!this.props.readOnly && (
                    <button
                        className={buttonClasses}
                        type="button"
                        onKeyDown={onKeyDown}
                        onKeyUp={onKeyUp}
                        onClick={onClick}
                        {...buttonAttrs}
                    >
                        <span className="dropdown-no-value">{this.props.placeholder}</span>
                        <Svg
                            svgName={isOpen ? VaporSVG.svg.chartUp.name : VaporSVG.svg.chartDown.name}
                            svgClass="icon dropdown-toggle-arrow-style"
                        />
                    </button>
                )}
            </div>
        );
    };

    private getSelectedOptions(): IItemBoxProps[] {
        if (this.props.sortable) {
            return _.chain(this.props.selected)
                .map((selected: string) => _.findWhere(this.props.items, {value: selected}))
                .compact()
                .value();
        }

        const selectedItemsWithoutCustom: IItemBoxProps[] = this.props.items.filter((option: IItemBoxProps) =>
            _.contains(this.props.selected, option.value)
        );
        const selectedItemsWithoutCustomItems: string[] = convertItemsBoxToStringList(selectedItemsWithoutCustom);
        const customItemsValues: string[] = _.difference(this.props.selected, selectedItemsWithoutCustomItems);
        const customItems: IItemBoxProps[] = convertStringListToItemsBox(customItemsValues);
        const selectedItems: IItemBoxProps[] = selectedItemsWithoutCustom.concat(customItems);

        return selectedItems;
    }
}

export const MultiSelectConnected = DnDUtils.TagControlContext(MultiSelect);
