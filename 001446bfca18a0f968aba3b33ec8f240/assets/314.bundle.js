(window.webpackJsonp=window.webpackJsonp||[]).push([[314],{1403:function(e,t,r){"use strict";r.r(t),t.default="import {toggleCheckbox} from '../../checkbox/CheckboxActions';\r\nimport {DropActions} from '../redux/DropActions';\r\nimport {dropInitialState, dropReducer, DropSelectors} from '../redux/DropReducers';\r\n\r\ndescribe('dropReducer', () => {\r\n    describe('DROP_TOGGLE', () => {\r\n        const id = 'petit pied';\r\n        const groupId = 'groupTest';\r\n        const initialState = {[groupId]: {id, isOpen: false}};\r\n\r\n        it('should have the initial state by default if its not a drop action', () => {\r\n            expect(dropReducer(undefined, toggleCheckbox('a', true))).toBe(dropInitialState);\r\n        });\r\n\r\n        it('should create a new group if the groupId do not exist yet', () => {\r\n            const newGroup = 'el Dinosaure';\r\n            const newState = dropReducer(initialState, DropActions.toggle('big foot', newGroup, false));\r\n            expect(newState[newGroup]).toBeDefined();\r\n        });\r\n\r\n        it('should update the id in the group if the current id in the state is different from the id in the payload', () => {\r\n            const newId = 'Rox&Rouky';\r\n            expect(dropReducer(initialState, DropActions.toggle(newId, groupId))[groupId].id).toBe(newId);\r\n        });\r\n\r\n        it('should toggle the isOpen if the payload id is the same than the id in the group sent as argument', () => {\r\n            expect(dropReducer(initialState, DropActions.toggle(id, groupId))[groupId].isOpen).toBe(true);\r\n        });\r\n    });\r\n\r\n    describe('DropSelectors', () => {\r\n        const id = 'id';\r\n        const groupId = 'tomatos';\r\n        const mockState = {drop: {[groupId]: {id, isOpen: false}}};\r\n\r\n        describe('getDropByGroup', () => {\r\n            it('should return undefined if the the group do not exist', () => {\r\n                expect(DropSelectors.getByGroup(mockState, {groupId: 'notAGroupId'})).toBeUndefined();\r\n            });\r\n\r\n            it('should return the group if it exist', () => {\r\n                expect(DropSelectors.getByGroup(mockState, {groupId: groupId}).id).toEqual(id);\r\n            });\r\n        });\r\n\r\n        describe('isDropOpen', () => {\r\n            it('should return false if the group do not exist', () => {\r\n                expect(DropSelectors.isOpen(mockState, {id: 'test', groupId: 'notAGroupId'})).toBe(false);\r\n            });\r\n\r\n            it('should return false if the group exist but the element has a different id', () => {\r\n                expect(DropSelectors.isOpen(mockState, {id: 'test', groupId})).toBe(false);\r\n            });\r\n\r\n            it('should return the current isOpen boolean if the group exist and the payload id is the same than the group drop id', () => {\r\n                expect(DropSelectors.isOpen(mockState, {id, groupId})).toBe(false);\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=314.bundle.js.map