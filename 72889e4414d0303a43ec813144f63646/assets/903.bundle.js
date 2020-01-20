(window.webpackJsonp=window.webpackJsonp||[]).push([[903],{1989:function(t,e,n){"use strict";n.r(e),e.default="import {ComponentId} from '../../../utils/ComponentUtils';\r\nimport {WithDirtyActions} from '../withDirtyActions';\r\nimport {dirtyComponentsInitialState, withDirtyReducer} from '../withDirtyReducers';\r\n\r\ndescribe('withEditing', () => {\r\n    describe('withEditingReducers', () => {\r\n        const genericAction = {\r\n            type: 'DO_SOMETHING',\r\n            payload: {\r\n                id: 'some-checkbox',\r\n            },\r\n        };\r\n\r\n        it('should return the default state if the action is not defined and the state is undefined', () => {\r\n            const oldState: ComponentId[] = undefined;\r\n\r\n            expect(withDirtyReducer(oldState, genericAction)).toEqual(dirtyComponentsInitialState);\r\n        });\r\n\r\n        it('should return the old state when the action is not related', () => {\r\n            const oldState: ComponentId[] = ['someId'];\r\n\r\n            expect(withDirtyReducer(oldState, genericAction)).toEqual(oldState);\r\n        });\r\n\r\n        describe('toggleDirtyComponent with true', () => {\r\n            const payload: [ComponentId, boolean] = ['someId', true];\r\n\r\n            it('should return the oldState with the id passed in the payload', () => {\r\n                const oldState: ComponentId[] = [];\r\n                const expectedState: ComponentId[] = [payload[0]];\r\n\r\n                expect(withDirtyReducer(oldState, WithDirtyActions.toggle(payload[0], payload[1]))).toEqual(\r\n                    expectedState\r\n                );\r\n            });\r\n\r\n            it('should return the oldState if the id is already in the state', () => {\r\n                const oldState: ComponentId[] = [payload[0]];\r\n                const expectedState: ComponentId[] = [payload[0]];\r\n\r\n                expect(withDirtyReducer(oldState, WithDirtyActions.toggle(payload[0], payload[1]))).toEqual(\r\n                    expectedState\r\n                );\r\n            });\r\n        });\r\n\r\n        describe('WithDirtyActions.toggle with false', () => {\r\n            const payload: [ComponentId, boolean] = ['someId', false];\r\n\r\n            it('should return the oldState without the id passed in the payload', () => {\r\n                const oldState: ComponentId[] = [payload[0]];\r\n                const expectedState: ComponentId[] = [];\r\n\r\n                expect(withDirtyReducer(oldState, WithDirtyActions.toggle(payload[0], payload[1]))).toEqual(\r\n                    expectedState\r\n                );\r\n            });\r\n\r\n            it('should return the oldState if the id passed in the payload is not in the state', () => {\r\n                const oldState: ComponentId[] = [];\r\n                const expectedState: ComponentId[] = [];\r\n\r\n                expect(withDirtyReducer(oldState, WithDirtyActions.toggle(payload[0], payload[1]))).toEqual(\r\n                    expectedState\r\n                );\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=903.bundle.js.map