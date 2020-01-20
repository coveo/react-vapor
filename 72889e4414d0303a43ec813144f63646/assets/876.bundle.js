(window.webpackJsonp=window.webpackJsonp||[]).push([[876],{1964:function(e,t,a){"use strict";a.r(t),t.default="import {IReduxAction} from '../../../utils/ReduxUtils';\r\nimport {\r\n    addTextArea,\r\n    changeTextAreaValue,\r\n    ITextAreaActionPayload,\r\n    removeTextArea,\r\n    setDisabledTextArea,\r\n} from '../TextAreaActions';\r\nimport {ITextAreaState, textAreaInitialState, textAreasInitialState, textAreasReducer} from '../TextAreaReducers';\r\n\r\ndescribe('Reducers', () => {\r\n    let oldState: ITextAreaState[];\r\n\r\n    beforeEach(() => {\r\n        oldState = [\r\n            {\r\n                ...textAreaInitialState,\r\n            },\r\n        ];\r\n    });\r\n\r\n    describe('TextAreaReducers', () => {\r\n        const unrelatedAction: IReduxAction<any> = {\r\n            type: 'DO_SOMETHING',\r\n            payload: {id: ''},\r\n        };\r\n\r\n        it('should return the default state if the action is not related and the state is undefined ', () => {\r\n            expect(textAreasReducer(undefined, unrelatedAction)).toEqual(textAreasInitialState);\r\n        });\r\n\r\n        it('should return the old state when the action is unrelated to textArea containers', () => {\r\n            const newState: ITextAreaState[] = textAreasReducer(oldState, unrelatedAction);\r\n\r\n            expect(oldState).toEqual(newState);\r\n        });\r\n\r\n        describe('addTextArea', () => {\r\n            const getNewTextArea = (\r\n                state: ITextAreaState[],\r\n                action: IReduxAction<ITextAreaActionPayload>\r\n            ): ITextAreaState[] => state.filter((textArea) => textArea.id === action.payload.id);\r\n\r\n            it('should return the old state with one more TextArea', () => {\r\n                const action = addTextArea('new-textArea');\r\n                const newState = textAreasReducer(oldState, action);\r\n\r\n                expect(newState.length).toBe(oldState.length + 1);\r\n                expect(getNewTextArea(newState, action).length).toBe(1);\r\n            });\r\n\r\n            it('should return a textArea with the default value, valid, and disabled prop if not passed', () => {\r\n                const action = addTextArea('new-textArea');\r\n                const newState = textAreasReducer(oldState, action);\r\n                const newTextArea: ITextAreaState = getNewTextArea(newState, action)[0];\r\n\r\n                expect(newTextArea).toEqual(jasmine.objectContaining(action.payload));\r\n            });\r\n\r\n            it('should return a textArea with the value in the payload if passed', () => {\r\n                const testValue = 'testValue';\r\n                const action = addTextArea('new-textArea', testValue);\r\n                const newState = textAreasReducer(oldState, action);\r\n                const newTextArea = getNewTextArea(newState, action)[0];\r\n\r\n                expect(newTextArea.value).toBe(testValue);\r\n            });\r\n\r\n            it('should return a textArea with the disabled value in the payload if passed', () => {\r\n                const disabledValue = true;\r\n                const action = addTextArea('new-textArea', undefined, disabledValue);\r\n                const newState = textAreasReducer(oldState, action);\r\n                const newTextArea = getNewTextArea(newState, action)[0];\r\n\r\n                expect(newTextArea.disabled).toBe(disabledValue);\r\n            });\r\n        });\r\n\r\n        describe('changeTextAreaValue', () => {\r\n            describe('with a different id', () => {\r\n                it('should not change a textArea not having the id passed in the payload', () => {\r\n                    const action = changeTextAreaValue('a different id', 'a new value');\r\n                    expect(textAreasReducer(oldState, action)[0]).toEqual(oldState[0]);\r\n                });\r\n            });\r\n\r\n            describe('with the same id', () => {\r\n                it('should return a textArea with the default value if not passed', () => {\r\n                    oldState[0] = {...oldState[0], value: 'some non default value'};\r\n                    const action = changeTextAreaValue(oldState[0].id);\r\n                    const newState = textAreasReducer(oldState, action);\r\n\r\n                    expect(action.payload.value).toBe('');\r\n                    expect(newState[0].value).toBe(action.payload.value);\r\n                });\r\n\r\n                it('should return a textArea with the value in the payload if passed', () => {\r\n                    const action = changeTextAreaValue(oldState[0].id, 'some new value');\r\n                    const newState = textAreasReducer(oldState, action);\r\n\r\n                    expect(newState[0].value).toBe(action.payload.value);\r\n                });\r\n            });\r\n        });\r\n\r\n        it('should return the old state with one less TextArea when the action is TextAreaActions.remove', () => {\r\n            const action = removeTextArea(oldState[0].id);\r\n            const newState = textAreasReducer(oldState, action);\r\n\r\n            expect(newState.length).toBe(oldState.length - 1);\r\n            expect(newState.filter((textArea) => textArea.id === oldState[0].id).length).toBe(0);\r\n        });\r\n\r\n        it('should modify the disabled state for the TextArea having the same id as in the action payload', () => {\r\n            const setDisabledTrueAction = setDisabledTextArea(oldState[0].id, true);\r\n            const newState = textAreasReducer(oldState, setDisabledTrueAction);\r\n\r\n            expect(newState[0].disabled).toBe(true);\r\n\r\n            const setDisabledFalseAction = setDisabledTextArea(oldState[0].id, false);\r\n            const secondNewState = textAreasReducer(oldState, setDisabledFalseAction);\r\n\r\n            expect(secondNewState[0].disabled).toBe(false);\r\n        });\r\n\r\n        it('should not modify the disabled state for the TextArea having a different id as in the action payload', () => {\r\n            const setDisabledTrueAction = setDisabledTextArea('a different id', true);\r\n            const newState = textAreasReducer(oldState, setDisabledTrueAction);\r\n\r\n            expect(newState[0].disabled).toBe(oldState[0].disabled);\r\n            expect(oldState).toEqual(oldState);\r\n\r\n            const setDisabledFalseAction = setDisabledTextArea('a different id', false);\r\n            const secondNewState = textAreasReducer(oldState, setDisabledFalseAction);\r\n\r\n            expect(secondNewState[0].disabled).toBe(oldState[0].disabled);\r\n            expect(oldState).toEqual(oldState);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=876.bundle.js.map