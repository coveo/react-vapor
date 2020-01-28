(window.webpackJsonp=window.webpackJsonp||[]).push([[392],{1498:function(t,e,r){"use strict";r.r(e),e.default="import * as React from 'react';\r\nimport {connect} from 'react-redux';\r\nimport {IReactVaporState} from '../../ReactVapor';\r\nimport {IDispatch, ReduxUtils} from '../../utils/ReduxUtils';\r\nimport {\r\n    FlatSelect,\r\n    IFlatSelectDispatchProps,\r\n    IFlatSelectOwnProps,\r\n    IFlatSelectProps,\r\n    IFlatSelectStateProps,\r\n} from './FlatSelect';\r\nimport {addFlatSelect, removeFlatSelect, selectFlatSelect} from './FlatSelectActions';\r\nimport {IFlatSelectOptionProps} from './FlatSelectOption';\r\nimport {FlatSelectSelectors} from './FlatSelectSelectors';\r\n\r\nconst mapStateToProps = (state: IReactVaporState, ownProps: IFlatSelectOwnProps): IFlatSelectStateProps => {\r\n    return {\r\n        selectedOptionId: FlatSelectSelectors.getSelectedOptionId(state, ownProps),\r\n    };\r\n};\r\n\r\nconst mapDispatchToProps = (dispatch: IDispatch, ownProps: IFlatSelectOwnProps): IFlatSelectDispatchProps => ({\r\n    onRender: () =>\r\n        dispatch(\r\n            addFlatSelect(\r\n                ownProps.id,\r\n                ownProps.defaultSelectedOptionId || (ownProps.options.length && ownProps.options[0].id)\r\n            )\r\n        ),\r\n    onDestroy: () => dispatch(removeFlatSelect(ownProps.id)),\r\n    onOptionClick: (selected: IFlatSelectOptionProps) => dispatch(selectFlatSelect(ownProps.id, selected.id)),\r\n});\r\n\r\nexport const FlatSelectConnected: React.ComponentClass<IFlatSelectProps> = connect(\r\n    mapStateToProps,\r\n    mapDispatchToProps,\r\n    ReduxUtils.mergeProps\r\n)(FlatSelect);\r\n"}}]);
//# sourceMappingURL=392.bundle.js.map