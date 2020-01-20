(window.webpackJsonp=window.webpackJsonp||[]).push([[447],{1543:function(t,e,n){"use strict";n.r(e),e.default="import {createSelector} from 'reselect';\r\nimport * as _ from 'underscore';\r\n\r\nimport {IReactVaporState} from '../../ReactVapor';\r\nimport {IInputState} from './InputReducers';\r\n\r\nconst getInput = (state: IReactVaporState, props: {id: string}): IInputState =>\r\n    _.findWhere(state.inputs, {id: props.id});\r\n\r\nconst getValue = createSelector(getInput, (input: IInputState): string => input && input.value);\r\n\r\nconst getIsValid = createSelector(getInput, (input: IInputState): boolean => !!input && input.valid);\r\n\r\nexport const InputSelectors = {\r\n    getValue,\r\n    getIsValid,\r\n    getInput,\r\n};\r\n"}}]);
//# sourceMappingURL=447.bundle.js.map