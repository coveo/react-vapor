(window.webpackJsonp=window.webpackJsonp||[]).push([[664],{1753:function(e,t,n){"use strict";n.r(t),t.default="import * as classNames from 'classnames';\r\nimport * as VaporSVG from 'coveo-styleguide';\r\nimport * as React from 'react';\r\nimport {keys} from 'ts-transformer-keys';\r\nimport * as _ from 'underscore';\r\n\r\nimport {IReactVaporState} from '../../ReactVapor';\r\nimport {getReactNodeTextContent} from '../../utils/JSXUtils';\r\nimport {IDispatch, ReduxConnect} from '../../utils/ReduxUtils';\r\nimport {Content} from '../content/Content';\r\nimport {IItemBoxProps} from '../itemBox/ItemBox';\r\nimport {clearListBoxOption} from '../listBox/ListBoxActions';\r\nimport {Svg} from '../svg/Svg';\r\nimport {Tooltip} from '../tooltip/Tooltip';\r\nimport {ISelectButtonProps, ISelectOwnProps, ISelectProps, SelectConnected} from './SelectConnected';\r\nimport {SelectSelector} from './SelectSelector';\r\nimport * as styles from './styles/SingleSelect.scss';\r\n\r\nexport interface ISingleSelectOwnProps extends ISelectProps {\r\n    placeholder?: string;\r\n    toggleClasses?: string;\r\n    onSelectOptionCallback?: (option: string) => void;\r\n    items?: IItemBoxProps[];\r\n    buttonPrepend?: React.ReactNode;\r\n    noFixedWidth?: boolean;\r\n    canClear?: boolean;\r\n    deselectTooltipText?: string;\r\n    footer?: React.ReactNode;\r\n}\r\n\r\nconst selectPropsKeys = keys<ISelectOwnProps>();\r\n\r\nexport interface ISingleSelectStateProps {\r\n    selectedOption: string;\r\n}\r\n\r\nexport interface ISingleSelectDispatchProps {\r\n    deselect: () => void;\r\n}\r\n\r\nexport interface ISingleSelectProps\r\n    extends ISingleSelectOwnProps,\r\n        Partial<ISingleSelectStateProps>,\r\n        Partial<ISingleSelectDispatchProps> {}\r\n\r\nconst mapStateToProps = (state: IReactVaporState, ownProps: ISingleSelectOwnProps): ISingleSelectStateProps => {\r\n    const customSelected: string[] = SelectSelector.getListState(state, ownProps);\r\n    return {\r\n        selectedOption: customSelected.length\r\n            ? customSelected[customSelected.length - 1]\r\n            : SelectSelector.getListBoxSelected(state, ownProps)[0],\r\n    };\r\n};\r\n\r\nconst mapDispatchToProps = (dispatch: IDispatch, ownProps: ISingleSelectOwnProps): ISingleSelectDispatchProps => ({\r\n    deselect: () => dispatch(clearListBoxOption(ownProps.id)),\r\n});\r\n\r\n@ReduxConnect(mapStateToProps, mapDispatchToProps)\r\nexport class SingleSelectConnected extends React.PureComponent<\r\n    ISingleSelectProps & React.ButtonHTMLAttributes<HTMLButtonElement>\r\n> {\r\n    static defaultProps: Partial<ISingleSelectOwnProps>;\r\n\r\n    componentDidUpdate(prevProps: ISingleSelectProps) {\r\n        if (prevProps.selectedOption !== this.props.selectedOption) {\r\n            this.props.onSelectOptionCallback?.(this.props.selectedOption);\r\n        }\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <SelectConnected {..._.pick(this.props, selectPropsKeys)} button={this.getButton}>\r\n                {this.props.children}\r\n            </SelectConnected>\r\n        );\r\n    }\r\n\r\n    private getButton = (props: ISelectButtonProps): JSX.Element => {\r\n        const option = _.findWhere(this.props.items, {value: this.props.selectedOption});\r\n        const showClear = !!option && this.props.canClear && !this.props.disabled;\r\n        const buttonClasses = classNames('btn dropdown-toggle', this.props.toggleClasses, {\r\n            'dropdown-toggle-placeholder': !option,\r\n            [styles.singleSelectFixedWidth]: !this.props.noFixedWidth,\r\n            'mod-append': showClear,\r\n        });\r\n\r\n        return (\r\n            <button\r\n                className={buttonClasses}\r\n                type=\"button\"\r\n                onClick={props.onClick}\r\n                onKeyDown={props.onKeyDown}\r\n                onKeyUp={props.onKeyUp}\r\n                disabled={this.props.disabled}\r\n            >\r\n                {this.props.buttonPrepend}\r\n                {option && option.prepend ? <Content {...option.prepend} /> : null}\r\n                {this.getSelectedOptionElement(option)}\r\n                {option && option.append ? <Content {...option.append} /> : null}\r\n                <span className=\"dropdown-toggle-arrow\" />\r\n                {showClear && this.getDeselectOptionButton()}\r\n            </button>\r\n        );\r\n    };\r\n\r\n    private getSelectedOptionElement(option: IItemBoxProps): JSX.Element {\r\n        if (option) {\r\n            const displayValue =\r\n                option.selectedDisplayValue || getReactNodeTextContent(option.displayValue) || option.value;\r\n            return (\r\n                <span\r\n                    key={option.value}\r\n                    className=\"dropdown-selected-value flex-auto left-align\"\r\n                    data-value={option.value}\r\n                    title={displayValue}\r\n                >\r\n                    {displayValue}\r\n                </span>\r\n            );\r\n        }\r\n\r\n        return <span className=\"dropdown-no-value\">{this.props.placeholder}</span>;\r\n    }\r\n\r\n    private getDeselectOptionButton(): React.ReactNode {\r\n        return (\r\n            <Tooltip title={this.props.deselectTooltipText} placement=\"top\" noSpanWrapper onClick={this.handleDeselect}>\r\n                <Svg svgName={VaporSVG.svg.clear.name} svgClass=\"icon mod-12\" className=\"btn-append center-align\" />\r\n            </Tooltip>\r\n        );\r\n    }\r\n\r\n    private handleDeselect = () => {\r\n        if (!this.props.disabled) {\r\n            this.props.deselect();\r\n        }\r\n    };\r\n}\r\n\r\nSingleSelectConnected.defaultProps = {\r\n    placeholder: 'Select an option',\r\n    deselectTooltipText: 'Deselect',\r\n};\r\n"}}]);
//# sourceMappingURL=664.bundle.js.map