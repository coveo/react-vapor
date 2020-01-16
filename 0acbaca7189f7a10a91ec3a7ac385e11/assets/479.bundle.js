(window.webpackJsonp=window.webpackJsonp||[]).push([[479],{1574:function(n,o,t){"use strict";t.r(o),o.default="import {IReduxAction} from '../../../utils/ReduxUtils';\r\n\r\nexport const ListBoxExampleActions = {\r\n    add: 'ADD_LIST_BOX_EXAMPLE',\r\n    remove: 'REMOVE_LIST_BOX_EXAMPLE',\r\n    update: 'UPDATE_LIST_BOX_EXAMPLE',\r\n};\r\n\r\nexport interface IListBoxExamplePayload {\r\n    id: string;\r\n    options?: string[];\r\n}\r\n\r\nexport const addListBoxExample = (id: string, options?: string[]): IReduxAction<IListBoxExamplePayload> => ({\r\n    type: ListBoxExampleActions.add,\r\n    payload: {id, options},\r\n});\r\n\r\nexport const removeListBoxExample = (id: string): IReduxAction<IListBoxExamplePayload> => ({\r\n    type: ListBoxExampleActions.remove,\r\n    payload: {id},\r\n});\r\n\r\nexport const updateListBoxExample = (id: string, options: string[]): IReduxAction<IListBoxExamplePayload> => ({\r\n    type: ListBoxExampleActions.update,\r\n    payload: {id, options},\r\n});\r\n"}}]);
//# sourceMappingURL=479.bundle.js.map