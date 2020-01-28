(window.webpackJsonp=window.webpackJsonp||[]).push([[848],{1946:function(e,t,r){"use strict";r.r(t),t.default="import * as _ from 'underscore';\r\nimport {IReduxActionsPayload} from '../../ReactVapor';\r\nimport {IReduxAction} from '../../utils/ReduxUtils';\r\nimport {TableSortingOrder} from './TableConstants';\r\nimport {TableHeaderCellActions} from './TableHeaderCellActions';\r\nimport {getNextTableSortingOrder} from './TableUtils';\r\n\r\nexport interface ITableHeaderCellState {\r\n    id: string;\r\n    tableId: string;\r\n    sorted: TableSortingOrder;\r\n    attributeToSort?: string;\r\n}\r\n\r\nexport interface ITableHeaderCellsState {\r\n    [id: string]: ITableHeaderCellState;\r\n}\r\n\r\nexport const tableHeaderCellInitialState: ITableHeaderCellState = {\r\n    id: undefined,\r\n    tableId: undefined,\r\n    sorted: TableSortingOrder.UNSORTED,\r\n    attributeToSort: undefined,\r\n};\r\n\r\nexport const tableHeaderCellsInitialState: ITableHeaderCellsState = {};\r\n\r\nexport const tableHeaderCellReducer = (\r\n    state: ITableHeaderCellState = tableHeaderCellInitialState,\r\n    action: IReduxAction<IReduxActionsPayload>\r\n): ITableHeaderCellState => {\r\n    switch (action.type) {\r\n        case TableHeaderCellActions.add:\r\n            return {\r\n                id: action.payload.id,\r\n                tableId: action.payload.tableId,\r\n                sorted: TableSortingOrder.UNSORTED,\r\n                attributeToSort: action.payload.attributeToSort,\r\n            };\r\n        case TableHeaderCellActions.sort:\r\n            if (state.id !== action.payload.id) {\r\n                return state.tableId === action.payload.tableId\r\n                    ? {...state, sorted: TableSortingOrder.UNSORTED}\r\n                    : state;\r\n            }\r\n            return state.tableId === action.payload.tableId\r\n                ? {...state, sorted: getNextTableSortingOrder(state.sorted)}\r\n                : state;\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n\r\nexport const tableHeaderCellsReducer = (\r\n    state: ITableHeaderCellsState = tableHeaderCellsInitialState,\r\n    action: IReduxAction<IReduxActionsPayload>\r\n): ITableHeaderCellsState => {\r\n    switch (action.type) {\r\n        case TableHeaderCellActions.add:\r\n            return {\r\n                ...state,\r\n                [action.payload.id]: tableHeaderCellReducer(undefined, action),\r\n            };\r\n        case TableHeaderCellActions.remove:\r\n            return _.omit(state, action.payload.id);\r\n        case TableHeaderCellActions.sort:\r\n            return _.mapObject(state, (headerCell: ITableHeaderCellState) =>\r\n                tableHeaderCellReducer(headerCell, action)\r\n            );\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n"}}]);
//# sourceMappingURL=848.bundle.js.map