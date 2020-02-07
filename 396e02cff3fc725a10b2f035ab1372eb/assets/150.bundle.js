(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{1263:function(t,n,a){"use strict";a.r(n),n.default="import * as _ from 'underscore';\r\nimport {IReduxAction} from '../../../utils/ReduxUtils';\r\nimport {selectListBoxOption} from '../../listBox/ListBoxActions';\r\nimport {turnOffLoading, turnOnLoading} from '../../loading/LoadingActions';\r\nimport {changePage} from '../../navigation/pagination/NavigationPaginationActions';\r\nimport {changePerPage} from '../../navigation/perPage/NavigationPerPageActions';\r\nimport {TableHOCUtils} from '../../table-hoc/utils/TableHOCUtils';\r\nimport {ActionBarActions, IActionBarPayload, IChangeActionBarActionsPayload} from '../ActionBarActions';\r\nimport {\r\n    actionBarInitialState,\r\n    actionBarReducer,\r\n    actionBarsInitialState,\r\n    actionBarsReducer,\r\n    IActionBarState,\r\n} from '../ActionBarReducers';\r\nimport {TableHOCRowActions} from './../../table-hoc/actions/TableHOCRowActions';\r\n\r\ndescribe('Actions', () => {\r\n    describe('actionBars', () => {\r\n        const genericAction: IReduxAction<IActionBarPayload> = {\r\n            type: 'DO_SOMETHING',\r\n            payload: {\r\n                id: 'some-action-bar',\r\n            },\r\n        };\r\n\r\n        it('should return the default state if the action is not defined and the state is undefined', () => {\r\n            const actionBarsState: IActionBarState[] = actionBarsReducer(undefined, genericAction);\r\n\r\n            expect(actionBarsState).toBe(actionBarsInitialState);\r\n        });\r\n\r\n        it('should return the default state if the action is not defined and the state is undefined for one action bar', () => {\r\n            const actionBarState: IActionBarState = actionBarReducer(undefined, genericAction);\r\n\r\n            expect(actionBarState).toBe(actionBarInitialState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined', () => {\r\n            const oldState: IActionBarState[] = [actionBarInitialState];\r\n            const actionBarsState: IActionBarState[] = actionBarsReducer(oldState, genericAction);\r\n\r\n            expect(actionBarsState).toBe(oldState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined for one action bar', () => {\r\n            const oldState: IActionBarState = actionBarInitialState;\r\n            const actionBarState: IActionBarState = actionBarReducer(oldState, genericAction);\r\n\r\n            expect(actionBarState).toBe(oldState);\r\n        });\r\n\r\n        it('should return the old state with one more ActionBarState when the action is \"ADD_ACTION_BAR\"', () => {\r\n            let oldState: IActionBarState[] = actionBarsInitialState;\r\n            const action: IReduxAction<IActionBarPayload> = {\r\n                type: ActionBarActions.add,\r\n                payload: {\r\n                    id: 'some-action-bar',\r\n                },\r\n            };\r\n            let actionBarsState: IActionBarState[] = actionBarsReducer(oldState, action);\r\n\r\n            expect(actionBarsState.length).toBe(oldState.length + 1);\r\n            expect(actionBarsState.filter((actionBar) => actionBar.id === action.payload.id).length).toBe(1);\r\n\r\n            oldState = actionBarsState;\r\n            action.payload.id = 'some-action-bar2';\r\n            actionBarsState = actionBarsReducer(oldState, action);\r\n\r\n            expect(actionBarsState.length).toBe(oldState.length + 1);\r\n            expect(actionBarsState.filter((actionBar) => actionBar.id === action.payload.id).length).toBe(1);\r\n        });\r\n\r\n        describe('with action bars in the state', () => {\r\n            let oldState: IActionBarState[];\r\n\r\n            beforeEach(() => {\r\n                oldState = [\r\n                    {\r\n                        id: 'some-action-bar2',\r\n                        actions: undefined,\r\n                        tableYPosition: 10,\r\n                    },\r\n                    {\r\n                        id: 'some-action-bar',\r\n                        actions: undefined,\r\n                        tableYPosition: 40,\r\n                    },\r\n                    {\r\n                        id: 'some-action-bar3',\r\n                        actions: undefined,\r\n                        tableYPosition: undefined,\r\n                    },\r\n                ];\r\n            });\r\n\r\n            it('should return the old state without the PromptState with the prompt id when the action is \"REMOVE_ACTION_BAR', () => {\r\n                const action: IReduxAction<IActionBarPayload> = {\r\n                    type: ActionBarActions.remove,\r\n                    payload: {\r\n                        id: oldState[1].id,\r\n                    },\r\n                };\r\n                let actionBarsState: IActionBarState[] = actionBarsReducer(oldState, action);\r\n\r\n                expect(actionBarsState.length).toBe(oldState.length - 1);\r\n                expect(actionBarsState.filter((actionBar) => actionBar.id === action.payload.id).length).toBe(0);\r\n\r\n                oldState = actionBarsState;\r\n                action.payload.id = oldState[0].id;\r\n                actionBarsState = actionBarsReducer(oldState, action);\r\n\r\n                expect(actionBarsState.length).toBe(oldState.length - 1);\r\n                expect(actionBarsState.filter((actionBar) => actionBar.id === action.payload.id).length).toBe(0);\r\n            });\r\n\r\n            it('should return the old state when the action is \"REMOVE_ACTION_BAR\" and the prompt id does not exist', () => {\r\n                const action: IReduxAction<IActionBarPayload> = {\r\n                    type: ActionBarActions.remove,\r\n                    payload: {\r\n                        id: 'i do not exist',\r\n                    },\r\n                };\r\n                const actionBarsState: IActionBarState[] = actionBarsReducer(oldState, action);\r\n\r\n                expect(actionBarsState.length).toBe(oldState.length);\r\n                expect(actionBarsState.filter((actionBar) => actionBar.id === action.payload.id).length).toBe(0);\r\n            });\r\n\r\n            it('should add the model (with its actions) to the action bar when the action is \"ADD_ACTIONS\"', () => {\r\n                const action: IReduxAction<IChangeActionBarActionsPayload> = {\r\n                    type: ActionBarActions.addActions,\r\n                    payload: {\r\n                        id: oldState[2].id,\r\n                        actions: [{enabled: true}],\r\n                    },\r\n                };\r\n\r\n                const actionBarsState: IActionBarState[] = actionBarsReducer(oldState, action);\r\n\r\n                expect(actionBarsState.length).toBe(oldState.length);\r\n                expect(\r\n                    actionBarsState.filter((actionBar) => actionBar.id === action.payload.id)[0].actions\r\n                ).toBeDefined();\r\n                expect(\r\n                    actionBarsState.filter((actionBar) => actionBar.id !== action.payload.id)[0].actions\r\n                ).toBeUndefined();\r\n            });\r\n\r\n            it('should set the actionbar isLoading prop to true when a loading action is dispatched and contain its id', () => {\r\n                const actionBarsState = actionBarsReducer(oldState, turnOnLoading([oldState[2].id]));\r\n\r\n                expect(_.findWhere(actionBarsState, {id: oldState[2].id}).isLoading).toBe(true);\r\n                expect(actionBarsState.filter((actionBar) => actionBar.id !== oldState[2].id)).toEqual(\r\n                    oldState.filter((actionBar) => actionBar.id !== oldState[2].id)\r\n                );\r\n            });\r\n\r\n            it('should set the actionbar isLoading prop to false when a loading action is dispatched and contain its id', () => {\r\n                const actionBarsState = actionBarsReducer(oldState, turnOffLoading([oldState[2].id]));\r\n\r\n                expect(_.findWhere(actionBarsState, {id: oldState[2].id}).isLoading).toBe(false);\r\n                expect(actionBarsState.filter((actionBar) => actionBar.id !== oldState[2].id)).toEqual(\r\n                    oldState.filter((actionBar) => actionBar.id !== oldState[2].id)\r\n                );\r\n            });\r\n\r\n            it('should remove the actions when remove row action is dispatched and selected', () => {\r\n                const actionBarsState = actionBarsReducer(\r\n                    oldState,\r\n                    TableHOCRowActions.remove('fieldId', oldState[2].id, true)\r\n                );\r\n\r\n                expect(_.findWhere(actionBarsState, {id: oldState[2].id}).actions).toEqual([]);\r\n            });\r\n\r\n            it('should not remove the actions when remove row action is dispatched and not selected', () => {\r\n                const actionBarsState = actionBarsReducer(\r\n                    oldState,\r\n                    TableHOCRowActions.remove('fieldId', oldState[2].id, false)\r\n                );\r\n\r\n                expect(_.findWhere(actionBarsState, {id: oldState[2].id}).actions).toEqual(oldState[2].actions);\r\n            });\r\n\r\n            it('should remove the actions when a change perPage action is dispatched and contain its id', () => {\r\n                const newPerPage = 5;\r\n                const actionBarsState = actionBarsReducer(oldState, changePerPage(oldState[2].id, newPerPage));\r\n\r\n                expect(_.findWhere(actionBarsState, {id: oldState[2].id}).actions).toEqual([]);\r\n            });\r\n\r\n            it('should remove the actions when a change page action is dispatched and contain its id', () => {\r\n                const newPage = 5;\r\n                const actionBarsState = actionBarsReducer(\r\n                    oldState,\r\n                    changePage(TableHOCUtils.getPaginationId(oldState[2].id), newPage)\r\n                );\r\n\r\n                expect(_.findWhere(actionBarsState, {id: oldState[2].id}).actions).toEqual([]);\r\n            });\r\n\r\n            it('should remove the actions when a change select action is dispatched and contain its id', () => {\r\n                const actionBarsState = actionBarsReducer(\r\n                    oldState,\r\n                    selectListBoxOption(oldState[2].id, false, 'new-value')\r\n                );\r\n\r\n                expect(_.findWhere(actionBarsState, {id: oldState[2].id}).actions).toEqual([]);\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=150.bundle.js.map