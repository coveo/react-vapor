(window.webpackJsonp=window.webpackJsonp||[]).push([[665],{1756:function(e,t,r){"use strict";r.r(t),t.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport {DropTarget, IDropTargetProps} from 'react-dnd';\r\nimport {createStructuredSelector} from 'reselect';\r\nimport {keys} from 'ts-transformer-keys';\r\nimport * as _ from 'underscore';\r\n\r\nimport {IReactVaporState} from '../../ReactVapor';\r\nimport {IDispatch, ReduxConnect} from '../../utils/ReduxUtils';\r\nimport {DnDUtils} from '../dragAndDrop/DnDUtils';\r\nimport {\r\n    DraggableSelectedOption,\r\n    DraggableSelectedOptionType,\r\n} from '../dropdownSearch/MultiSelectDropdownSearch/DraggableSelectedOption';\r\nimport {SelectedOption} from '../dropdownSearch/MultiSelectDropdownSearch/SelectedOption';\r\nimport {IItemBoxProps} from '../itemBox/ItemBox';\r\nimport {clearListBoxOption, reorderListBoxOption, unselectListBoxOption} from '../listBox/ListBoxActions';\r\nimport {Svg} from '../svg/Svg';\r\nimport {Tooltip} from '../tooltip/Tooltip';\r\nimport {ISelectButtonProps, ISelectOwnProps, ISelectProps, SelectConnected} from './SelectConnected';\r\nimport {SelectSelector} from './SelectSelector';\r\n\r\nexport interface IMultiSelectOwnProps extends ISelectProps, IDropTargetProps {\r\n    placeholder?: string;\r\n    emptyPlaceholder?: string;\r\n    deselectAllTooltipText?: string;\r\n    sortable?: boolean;\r\n    noDisabled?: boolean;\r\n    multiSelectStyle?: React.CSSProperties;\r\n}\r\n\r\nexport interface IMultiSelectStateProps {\r\n    selected?: string[];\r\n}\r\n\r\nexport interface IMultiSelectDispatchProps {\r\n    onRemoveClick?: (item: IItemBoxProps) => void;\r\n    onRemoveAll?: () => void;\r\n    onReorder?: (values: string[]) => void;\r\n}\r\n\r\nexport interface IMultiSelectProps extends IMultiSelectOwnProps, IMultiSelectStateProps, IMultiSelectDispatchProps {}\r\n\r\nconst selectPropsKeys = keys<ISelectOwnProps>();\r\n\r\nconst makeMapStateToProps = () => {\r\n    const getStateProps = createStructuredSelector({\r\n        selected: SelectSelector.getMultiSelectSelectedValues,\r\n    });\r\n\r\n    return (state: IReactVaporState, ownProps: IMultiSelectOwnProps): IMultiSelectStateProps =>\r\n        getStateProps(state, ownProps);\r\n};\r\n\r\nconst mapDispatchToProps = (dispatch: IDispatch, ownProps: IMultiSelectOwnProps): IMultiSelectDispatchProps => ({\r\n    onRemoveClick: (item: IItemBoxProps) => dispatch(unselectListBoxOption(ownProps.id, item.value)),\r\n    onRemoveAll: () => dispatch(clearListBoxOption(ownProps.id)),\r\n    onReorder: (values: string[]) => dispatch(reorderListBoxOption(ownProps.id, values)),\r\n});\r\n\r\n// This object is usefull when the drag happen outside of the DraggableSelectedOption,\r\n// instead of making the child handle it, the parent catches the event\r\nconst parentDropTarget = {\r\n    drop: _.noop,\r\n};\r\n\r\n@ReduxConnect(makeMapStateToProps, mapDispatchToProps)\r\n@DropTarget(DraggableSelectedOptionType, parentDropTarget, (connect: any) => ({\r\n    connectDropTarget: connect.dropTarget(),\r\n}))\r\nclass MultiSelect extends React.PureComponent<IMultiSelectProps & React.ButtonHTMLAttributes<HTMLButtonElement>> {\r\n    static defaultProps: Partial<IMultiSelectProps> = {\r\n        placeholder: 'Select an option',\r\n        emptyPlaceholder: 'No selected option',\r\n        deselectAllTooltipText: 'Deselect All',\r\n        sortable: false,\r\n        noDisabled: false,\r\n        multiSelectStyle: {},\r\n    };\r\n\r\n    render() {\r\n        return (\r\n            <SelectConnected\r\n                id={this.props.id}\r\n                key={this.props.id}\r\n                {..._.pick(this.props, selectPropsKeys)}\r\n                button={this.getButton}\r\n                multi\r\n            >\r\n                {this.props.children}\r\n            </SelectConnected>\r\n        );\r\n    }\r\n\r\n    private getSelectedOptionComponents(): React.ReactNode {\r\n        const selected = this.getSelectedOptions();\r\n\r\n        if (selected.length) {\r\n            return selected.map((item: IItemBoxProps, index: number) =>\r\n                this.props.sortable ? this.renderDraggableOption(item, index) : this.renderOption(item)\r\n            );\r\n        }\r\n        return <span className=\"multiselect-empty\">{this.props.emptyPlaceholder}</span>;\r\n    }\r\n\r\n    private renderOption(item: IItemBoxProps): JSX.Element {\r\n        const displayValue = item.displayValue || item.value;\r\n        return (\r\n            <SelectedOption\r\n                label={displayValue}\r\n                value={item.value}\r\n                key={item.value}\r\n                onRemoveClick={() => this.props.onRemoveClick(item)}\r\n            >\r\n                {displayValue}\r\n            </SelectedOption>\r\n        );\r\n    }\r\n\r\n    private renderDraggableOption(item: IItemBoxProps, index: number): JSX.Element {\r\n        return (\r\n            <div className=\"flex flex-row flex-center sortable-selected-option\" key={item.value}>\r\n                <span className=\"mr1 text-medium-grey\">{index + 1}</span>\r\n                <DraggableSelectedOption\r\n                    label={item.displayValue || item.value}\r\n                    value={item.value}\r\n                    onRemoveClick={() => this.props.onRemoveClick(item)}\r\n                    index={index}\r\n                    move={(dragIndex: number, hoverIndex: number) => this.move(dragIndex, hoverIndex)}\r\n                />\r\n            </div>\r\n        );\r\n    }\r\n\r\n    private move(dragIndex: number, hoverIndex: number) {\r\n        const moving = this.props.selected[dragIndex];\r\n        const newOrder = [...this.props.selected];\r\n\r\n        // Remove the element at position dragIndex\r\n        newOrder.splice(dragIndex, 1);\r\n\r\n        // Insert the moving element at hoverIndex\r\n        newOrder.splice(hoverIndex, 0, moving);\r\n\r\n        this.props.onReorder(newOrder);\r\n    }\r\n\r\n    private getRemoveAllSelectedOptionsButton(): JSX.Element {\r\n        return this.getSelectedOptions().length > 1 ? (\r\n            <Tooltip title={this.props.deselectAllTooltipText} placement=\"top\" noSpanWrapper>\r\n                <div className=\"remove-all-selected-options ml1\" onClick={() => this.props.onRemoveAll()}>\r\n                    <Svg svgName=\"clear\" svgClass=\"icon fill-medium-blue\" />\r\n                </div>\r\n            </Tooltip>\r\n        ) : null;\r\n    }\r\n\r\n    private getButton = (props: ISelectButtonProps): JSX.Element => {\r\n        const classes = classNames('multiselect-input', {'mod-sortable': this.props.sortable});\r\n        const buttonAttrs =\r\n            !this.props.noDisabled && this.props.selected && this.props.selected.length === this.props.items.length\r\n                ? {disabled: true}\r\n                : {disabled: this.props.disabled};\r\n        return (\r\n            <div className={classes} style={this.props.multiSelectStyle}>\r\n                {this.props.connectDropTarget(\r\n                    <div className=\"multiselect-selected flex flex-center flex-auto full-content\">\r\n                        <div className=\"selected-options-container truncate\">{this.getSelectedOptionComponents()}</div>\r\n                        {this.getRemoveAllSelectedOptionsButton()}\r\n                    </div>\r\n                )}\r\n                <button\r\n                    className=\"btn dropdown-toggle multiselect-add dropdown-toggle-placeholder\"\r\n                    type=\"button\"\r\n                    onKeyDown={props.onKeyDown}\r\n                    onKeyUp={props.onKeyUp}\r\n                    onClick={props.onClick}\r\n                    {...buttonAttrs}\r\n                >\r\n                    <span className=\"dropdown-no-value\">{this.props.placeholder}</span>\r\n                    <span className=\"dropdown-toggle-arrow\" />\r\n                </button>\r\n            </div>\r\n        );\r\n    };\r\n\r\n    private getSelectedOptions(): IItemBoxProps[] {\r\n        if (this.props.sortable) {\r\n            return _.chain(this.props.selected)\r\n                .map((selected: string) => _.findWhere(this.props.items, {value: selected}))\r\n                .compact()\r\n                .value();\r\n        }\r\n\r\n        return this.props.items.filter((option: IItemBoxProps) => _.contains(this.props.selected, option.value));\r\n    }\r\n}\r\n\r\nexport const MultiSelectConnected: React.ComponentClass<IMultiSelectProps &\r\n    React.ButtonHTMLAttributes<HTMLButtonElement>> = DnDUtils.TagControlContext(MultiSelect);\r\n"}}]);
//# sourceMappingURL=665.bundle.js.map