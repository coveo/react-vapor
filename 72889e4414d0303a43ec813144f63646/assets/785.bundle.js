(window.webpackJsonp=window.webpackJsonp||[]).push([[785],{1873:function(e,l,o){"use strict";o.r(l),l.default="import {BasePayload, IReduxAction} from '../../../utils/ReduxUtils';\r\n\r\nexport const TableHOCRowActionsType = {\r\n    add: 'ADD_TABLE_ROW',\r\n    remove: 'REMOVE_TABLE_ROW',\r\n    select: 'SELECT_TABLE_ROW',\r\n    deselectAll: 'DESELECT_ALL_TABLE_ROW',\r\n    toggleCollapsible: 'TOGGLE_TABLE_COLLAPSIBLE_ROW',\r\n};\r\n\r\nexport interface ITableRowAddPayload extends BasePayload {\r\n    tableId: string;\r\n    isSelected?: boolean;\r\n}\r\n\r\nconst addTableRow = (id: string, tableId: string): IReduxAction<ITableRowAddPayload> => ({\r\n    type: TableHOCRowActionsType.add,\r\n    payload: {id, tableId},\r\n});\r\n\r\nconst removeTableRow = (id: string, tableId?: string, isSelected?: boolean): IReduxAction<ITableRowAddPayload> => ({\r\n    type: TableHOCRowActionsType.remove,\r\n    payload: {id, tableId, isSelected},\r\n});\r\n\r\nexport interface ITableRowSelectPayload extends BasePayload {\r\n    isMulti?: boolean;\r\n}\r\n\r\nconst selectRow = (id: string, isMulti: boolean = false): IReduxAction<ITableRowSelectPayload> => ({\r\n    type: TableHOCRowActionsType.select,\r\n    payload: {id, isMulti},\r\n});\r\n\r\nconst deselectAllRows = (id: string): IReduxAction<ITableRowSelectPayload> => ({\r\n    type: TableHOCRowActionsType.deselectAll,\r\n    payload: {id},\r\n});\r\n\r\nexport interface ITableRowToggleCollapsiblePayload extends BasePayload {\r\n    opened?: boolean;\r\n}\r\n\r\nconst toggleCollapsibleRow = (id: string, opened?: boolean): IReduxAction<ITableRowToggleCollapsiblePayload> => ({\r\n    type: TableHOCRowActionsType.toggleCollapsible,\r\n    payload: {id, opened},\r\n});\r\n\r\nexport const TableHOCRowActions = {\r\n    add: addTableRow,\r\n    remove: removeTableRow,\r\n    select: selectRow,\r\n    deselectAll: deselectAllRows,\r\n    toggleCollapsible: toggleCollapsibleRow,\r\n};\r\n"}}]);
//# sourceMappingURL=785.bundle.js.map