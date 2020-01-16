(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{1234:function(t,e,r){"use strict";r.r(e),e.default="import * as _ from 'underscore';\r\nimport {IReduxActionsPayload} from '../../../ReactVapor';\r\nimport {IReduxAction} from '../../../utils/ReduxUtils';\r\nimport {ItemFilterActions} from './ItemFilterActions';\r\n\r\nexport interface IItemFilterState {\r\n    id: string;\r\n    item: string;\r\n}\r\n\r\nexport const itemFilterOriginalState: IItemFilterState = {\r\n    id: undefined,\r\n    item: '',\r\n};\r\n\r\nexport const itemFiltersOriginalState: IItemFilterState[] = [];\r\n\r\nexport const itemFilterReducer = (\r\n    state: IItemFilterState = itemFilterOriginalState,\r\n    action: IReduxAction<IReduxActionsPayload>\r\n): IItemFilterState => {\r\n    switch (action.type) {\r\n        case ItemFilterActions.add:\r\n            return {\r\n                id: action.payload.id,\r\n                item: state.item,\r\n            };\r\n        case ItemFilterActions.filter:\r\n            if (state.id !== action.payload.id) {\r\n                return state;\r\n            }\r\n\r\n            return {\r\n                id: action.payload.id,\r\n                item: action.payload.item,\r\n            };\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n\r\nexport const itemFiltersReducer = (\r\n    state: IItemFilterState[] = itemFiltersOriginalState,\r\n    action: IReduxAction<IReduxActionsPayload>\r\n): IItemFilterState[] => {\r\n    switch (action.type) {\r\n        case ItemFilterActions.add:\r\n            return [...state, itemFilterReducer(undefined, action)];\r\n        case ItemFilterActions.filter:\r\n            return state.map((itemFilter: IItemFilterState) => itemFilterReducer(itemFilter, action));\r\n        case ItemFilterActions.remove:\r\n            return _.reject(state, (itemFilter: IItemFilterState) => {\r\n                return action.payload.id === itemFilter.id;\r\n            });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n"}}]);
//# sourceMappingURL=132.bundle.js.map