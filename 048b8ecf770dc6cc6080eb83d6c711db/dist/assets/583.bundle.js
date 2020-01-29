(window.webpackJsonp=window.webpackJsonp||[]).push([[583],{1688:function(e,r,t){"use strict";t.r(r),r.default="import * as _ from 'underscore';\r\nimport {IReduxActionsPayload} from '../../../ReactVapor';\r\nimport {IReduxAction} from '../../../utils/ReduxUtils';\r\nimport {PerPageActions} from './NavigationPerPageActions';\r\n\r\nexport interface IPerPageState {\r\n    id: string;\r\n    perPage: number;\r\n}\r\n\r\nexport const perPageInitialState: IPerPageState = {\r\n    id: undefined,\r\n    perPage: 10,\r\n};\r\n\r\nexport const perPageCompositeInitialState: IPerPageState[] = [];\r\n\r\nexport const perPageReducer = (\r\n    state: IPerPageState = perPageInitialState,\r\n    action: IReduxAction<IReduxActionsPayload>\r\n): IPerPageState => {\r\n    switch (action.type) {\r\n        case PerPageActions.add:\r\n            return {id: action.payload.id, perPage: action.payload.perPage};\r\n        case PerPageActions.change:\r\n            return state.id === action.payload.id ? {id: state.id, perPage: action.payload.perPage} : state;\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n\r\nexport const perPageCompositeReducer = (\r\n    state: IPerPageState[] = perPageCompositeInitialState,\r\n    action: IReduxAction<IReduxActionsPayload>\r\n): IPerPageState[] => {\r\n    switch (action.type) {\r\n        case PerPageActions.add:\r\n            return [...state, perPageReducer(undefined, action)];\r\n        case PerPageActions.remove:\r\n            return _.reject(state, (perPage: IPerPageState) => {\r\n                return perPage.id === action.payload.id;\r\n            });\r\n        case PerPageActions.change:\r\n            return state.map((perPage: IPerPageState) => perPageReducer(perPage, action));\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n"}}]);
//# sourceMappingURL=583.bundle.js.map