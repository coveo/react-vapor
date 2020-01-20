(window.webpackJsonp=window.webpackJsonp||[]).push([[917],{2003:function(r,n,t){"use strict";t.r(n),n.default="import {IReduxAction} from '../../utils/ReduxUtils';\r\n\r\nexport const StringListActions = {\r\n    add: 'ADD_STRING_LIST',\r\n    remove: 'REMOVE_STRING_LIST',\r\n    addValue: 'ADD_VALUE_STRING_LIST',\r\n    removeValue: 'REMOVE_VALUE_STRING_LIST',\r\n    updateValues: 'UPDATE_VALUES_STRING_LIST',\r\n    reorder: 'REORDER_STRING_LIST',\r\n};\r\n\r\nexport interface IStringListPayload {\r\n    id: string;\r\n    list?: string[];\r\n    value?: string;\r\n    reset?: boolean;\r\n}\r\n\r\nexport const addStringList = (id: string, list: string[] = []): IReduxAction<IStringListPayload> => ({\r\n    type: StringListActions.add,\r\n    payload: {id, list},\r\n});\r\n\r\nexport const removeStringList = (id: string): IReduxAction<IStringListPayload> => ({\r\n    type: StringListActions.remove,\r\n    payload: {id},\r\n});\r\n\r\nexport const addValueStringList = (\r\n    id: string,\r\n    value: string,\r\n    reset: boolean = false\r\n): IReduxAction<IStringListPayload> => ({\r\n    type: StringListActions.addValue,\r\n    payload: {id, value, reset},\r\n});\r\n\r\nexport const removeValueStringList = (id: string, value: string): IReduxAction<IStringListPayload> => ({\r\n    type: StringListActions.removeValue,\r\n    payload: {id, value},\r\n});\r\n\r\nexport const reorderStringList = (id: string, list: string[]): IReduxAction<IStringListPayload> => ({\r\n    type: StringListActions.reorder,\r\n    payload: {id, list},\r\n});\r\n\r\nexport const updateValueStringList = (id: string, list: string[]): IReduxAction<IStringListPayload> => ({\r\n    type: StringListActions.updateValues,\r\n    payload: {id, list},\r\n});\r\n"}}]);
//# sourceMappingURL=917.bundle.js.map