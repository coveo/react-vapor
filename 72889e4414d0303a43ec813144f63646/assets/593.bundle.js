(window.webpackJsonp=window.webpackJsonp||[]).push([[593],{1688:function(t,r,e){"use strict";e.r(r),r.default="import * as React from 'react';\r\nimport {createSelector} from 'reselect';\r\nimport {IReactVaporState} from '../../ReactVapor';\r\nimport {initialNumericInputState, INumericInputState} from './NumericInputReducers';\r\n\r\nconst getNumericInput = (state: IReactVaporState, ownProps: {id: string}): INumericInputState => {\r\n    return (state && state.numericInputs[ownProps.id]) || initialNumericInputState;\r\n};\r\n\r\nconst getValue: (state: IReactVaporState, ownProps: {id: string}) => React.ReactText = createSelector(\r\n    getNumericInput,\r\n    (numericInput: INumericInputState) => numericInput.value\r\n);\r\n\r\nconst getHasError: (state: IReactVaporState, ownProps: {id: string}) => boolean = createSelector(\r\n    getNumericInput,\r\n    (numericInput: INumericInputState) => numericInput.hasError\r\n);\r\n\r\nexport const NumericInputSelectors = {\r\n    getValue,\r\n    getHasError,\r\n};\r\n"}}]);
//# sourceMappingURL=593.bundle.js.map