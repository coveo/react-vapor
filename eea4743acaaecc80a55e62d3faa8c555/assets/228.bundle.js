(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{1320:function(e,r,t){"use strict";t.r(r),r.default="import {mount, ReactWrapper} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\nimport * as _ from 'underscore';\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {clearState} from '../../../utils/ReduxUtils';\r\nimport {TestUtils} from '../../../utils/tests/TestUtils';\r\nimport {Checkbox} from '../Checkbox';\r\nimport {ICheckboxState} from '../CheckboxReducers';\r\nimport {GroupableCheckboxConnected, IGroupableCheckboxOwnProps} from '../GroupableCheckboxConnected';\r\nimport {IGroupableCheckboxesState} from '../GroupableCheckboxReducers';\r\nimport {divTemplateClasses, divTemplateForMultipleCheckbox} from './GroupableCheckboxTestUtils';\r\n\r\ndescribe('GroupableCheckbox', () => {\r\n    describe('<GroupableCheckboxConnected />', () => {\r\n        let groupableCheckbox: ReactWrapper<IGroupableCheckboxOwnProps, any>;\r\n        let wrapper: ReactWrapper<any, any>;\r\n        let store: Store<IReactVaporState>;\r\n        let groupableChekboxesState: IGroupableCheckboxesState[];\r\n        let groupableCheckboxState: IGroupableCheckboxesState;\r\n        const parentId = 'checkboxParent1';\r\n        const defaultElementApp = 'App';\r\n\r\n        const renderChildCheckbox = (\r\n            props: IGroupableCheckboxOwnProps = {},\r\n            attachToElementName: string = defaultElementApp\r\n        ) => {\r\n            wrapper = mount(\r\n                <Provider store={store}>\r\n                    <GroupableCheckboxConnected id={parentId + '1'} parentId={parentId} isParent={false} {...props} />\r\n                </Provider>,\r\n                {attachTo: document.getElementById(attachToElementName)}\r\n            );\r\n            groupableCheckbox = wrapper.find(Checkbox).first();\r\n\r\n            return wrapper;\r\n        };\r\n\r\n        const renderParentCheckbox = (\r\n            props: IGroupableCheckboxOwnProps = {},\r\n            attachToElementName: string = defaultElementApp\r\n        ) => {\r\n            wrapper = mount(\r\n                <Provider store={store}>\r\n                    <GroupableCheckboxConnected id={parentId} isParent={true} {...props} />\r\n                </Provider>,\r\n                {attachTo: document.getElementById(attachToElementName)}\r\n            );\r\n            groupableCheckbox = wrapper.find(Checkbox).first();\r\n\r\n            return wrapper;\r\n        };\r\n\r\n        const getCurrentGroupableCheckboxes = (currentStore: Store<IReactVaporState>): IGroupableCheckboxesState[] => {\r\n            return currentStore\r\n                .getState()\r\n                .groupableCheckboxes.filter((currentCheckbox) => currentCheckbox.parentId === parentId);\r\n        };\r\n\r\n        const getFirstGroupableCheckbox = (currentStore: Store<IReactVaporState>): IGroupableCheckboxesState => {\r\n            return currentStore\r\n                .getState()\r\n                .groupableCheckboxes.filter((currentCheckbox) => currentCheckbox.parentId === parentId)[0];\r\n        };\r\n\r\n        beforeEach(() => {\r\n            store = TestUtils.buildStore();\r\n        });\r\n\r\n        afterEach(() => {\r\n            store.dispatch(clearState());\r\n            wrapper.detach();\r\n        });\r\n\r\n        describe('Child checkbox', () => {\r\n            it('should get its id as a prop', () => {\r\n                renderChildCheckbox();\r\n                const idProp = groupableCheckbox.props().id;\r\n\r\n                expect(idProp).toBeDefined();\r\n                expect(idProp).toBe(parentId + '1');\r\n            });\r\n\r\n            it('should get its parentId as a prop', () => {\r\n                renderChildCheckbox();\r\n                const currentParentId = groupableCheckbox.props().parentId;\r\n\r\n                expect(currentParentId).toBeDefined();\r\n                expect(currentParentId).toBe(parentId);\r\n            });\r\n\r\n            it('should add the child groupableCheckbox in the store on render', () => {\r\n                renderChildCheckbox();\r\n                groupableChekboxesState = getCurrentGroupableCheckboxes(store);\r\n                expect(groupableChekboxesState.length).toBe(1);\r\n                expect(groupableChekboxesState[0].total).toBe(1);\r\n            });\r\n\r\n            it('should update the number selected if the child checkbox is checked', () => {\r\n                renderChildCheckbox({\r\n                    defaultChecked: true,\r\n                });\r\n                groupableChekboxesState = getCurrentGroupableCheckboxes(store);\r\n                expect(groupableChekboxesState.length).toBe(1);\r\n                expect(groupableChekboxesState[0].nbChecked).toBe(1);\r\n            });\r\n\r\n            it('should remove the child checkbox in the groupableChekboxeState', () => {\r\n                renderChildCheckbox();\r\n                groupableCheckbox.props().onDestroy();\r\n                groupableChekboxesState = getCurrentGroupableCheckboxes(store);\r\n                expect(groupableChekboxesState.length).toBe(1, 'state do not exist');\r\n                expect(groupableChekboxesState[0].checkboxes.length).toBe(\r\n                    0,\r\n                    'child checkbox was not removed on destroy'\r\n                );\r\n            });\r\n\r\n            it('should toggle the child checkbox on click witch checked true', () => {\r\n                renderChildCheckbox({\r\n                    defaultChecked: false,\r\n                });\r\n                groupableCheckbox.props().onClick({} as any);\r\n                groupableChekboxesState = getCurrentGroupableCheckboxes(store);\r\n                expect(groupableChekboxesState.length).toBe(1, 'checkboxes do not exist');\r\n                expect(groupableChekboxesState[0].checkboxes[0].checked).toBe(\r\n                    true,\r\n                    'child checkbox state checked was not updated on click'\r\n                );\r\n            });\r\n\r\n            it('should toggle the child checkbox on click witch checked false', () => {\r\n                renderChildCheckbox({\r\n                    defaultChecked: true,\r\n                });\r\n                groupableCheckbox.props().onClick({} as any);\r\n                groupableChekboxesState = getCurrentGroupableCheckboxes(store);\r\n                expect(groupableChekboxesState.length).toBe(1, 'checkboxes do not exist');\r\n                expect(groupableChekboxesState[0].checkboxes[0].checked).toBe(\r\n                    false,\r\n                    'child checkbox state checked was not updated on click'\r\n                );\r\n            });\r\n        });\r\n\r\n        describe('Parent checkbox', () => {\r\n            it('should get its id as a prop', () => {\r\n                renderParentCheckbox();\r\n                const idProp = groupableCheckbox.props().id;\r\n\r\n                expect(idProp).toBeDefined();\r\n                expect(idProp).toBe(parentId);\r\n            });\r\n\r\n            it('should have isParent to true', () => {\r\n                renderParentCheckbox();\r\n                const isParent = groupableCheckbox.props().isParent;\r\n\r\n                expect(isParent).toBeDefined();\r\n                expect(isParent).toBe(true);\r\n            });\r\n\r\n            it('should add the parent groupableCheckbox in the store on render', () => {\r\n                renderParentCheckbox();\r\n                groupableChekboxesState = getCurrentGroupableCheckboxes(store);\r\n                expect(groupableChekboxesState.length).toBe(1, 'groupableCheckbox not added on render in the state');\r\n                expect(groupableChekboxesState[0].parent).toBeDefined('parent is not defined in the store');\r\n            });\r\n\r\n            it('should remove all the groupableChekboxeState if the parent is deleted', () => {\r\n                renderParentCheckbox();\r\n                groupableCheckbox.props().onDestroy();\r\n                groupableChekboxesState = getCurrentGroupableCheckboxes(store);\r\n                expect(groupableChekboxesState.length).toBe(0, 'groupableCheckbox was not removed onDestroy');\r\n            });\r\n        });\r\n\r\n        describe('With child checkboxes and parent checkbox', () => {\r\n            let wrappers: Array<ReactWrapper<any, any>>;\r\n\r\n            beforeEach(() => {\r\n                document.body.innerHTML += divTemplateForMultipleCheckbox;\r\n\r\n                wrappers = [];\r\n                wrappers.push(renderChildCheckbox({}, divTemplateClasses.checkbox1));\r\n                wrappers.push(renderChildCheckbox({id: parentId + '2'}, divTemplateClasses.checkbox2));\r\n                wrappers.push(renderParentCheckbox({}, divTemplateClasses.checkbox3));\r\n            });\r\n\r\n            afterEach(() => {\r\n                _.each(wrappers, (currentWrapper: ReactWrapper<any, any>) => {\r\n                    currentWrapper.detach();\r\n                });\r\n            });\r\n\r\n            it('should add checkboxes and the parent checkbox event if the parent is added lastly', () => {\r\n                groupableChekboxesState = getCurrentGroupableCheckboxes(store);\r\n                groupableCheckboxState = groupableChekboxesState[0];\r\n\r\n                expect(groupableChekboxesState.length).toBe(1, 'groupableCheckbox not added on render in the state');\r\n                expect(groupableCheckboxState.checkboxes.length).toBe(\r\n                    2,\r\n                    'child groupableCheckbox not added on render in the state.checkboxes'\r\n                );\r\n                expect(groupableCheckboxState.parent).toBeDefined('parent id not added with is child checkboxes');\r\n            });\r\n\r\n            it('should have total equal to the number of child checkboxes added', () => {\r\n                groupableCheckboxState = getFirstGroupableCheckbox(store);\r\n                expect(groupableCheckboxState.total).toBe(2, 'total was not updated on add child checkbox');\r\n\r\n                wrappers.push(renderChildCheckbox({id: parentId + '4'}, divTemplateClasses.checkbox4));\r\n                groupableCheckboxState = getFirstGroupableCheckbox(store);\r\n                expect(groupableCheckboxState.total).toBe(3, 'total was not updated on add the last child checkbox');\r\n            });\r\n\r\n            it('should have nbChecked equal to the number of child checkboxes checked added', () => {\r\n                wrappers.push(\r\n                    renderChildCheckbox({id: parentId + '4', defaultChecked: true}, divTemplateClasses.checkbox4)\r\n                );\r\n                groupableChekboxesState = getCurrentGroupableCheckboxes(store);\r\n                groupableCheckboxState = groupableChekboxesState[0];\r\n                expect(groupableCheckboxState.nbChecked).toBe(1, 'nbChecked was not updated on add child checkbox');\r\n            });\r\n\r\n            it('should toggle all child checkbox on click parent checkbox true', () => {\r\n                groupableCheckbox.props().onClick({} as any);\r\n                groupableChekboxesState = getCurrentGroupableCheckboxes(store);\r\n                expect(\r\n                    _.every(groupableChekboxesState[0].checkboxes, (checkbox: ICheckboxState) => checkbox.checked)\r\n                ).toBe(true, 'all checkboxes are not checked on parent click');\r\n                expect(groupableChekboxesState[0].nbChecked).toBe(2);\r\n            });\r\n\r\n            it('should toggle all child checkbox on click parent checkbox false', () => {\r\n                groupableCheckbox.props().onClick({} as any);\r\n                groupableCheckbox.props().onClick({} as any);\r\n                groupableChekboxesState = getCurrentGroupableCheckboxes(store);\r\n                expect(\r\n                    _.every(groupableChekboxesState[0].checkboxes, (checkbox: ICheckboxState) => !checkbox.checked)\r\n                ).toBe(true, 'groupableCheckbox not added on render in the state');\r\n                expect(groupableChekboxesState[0].nbChecked).toBe(0);\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=228.bundle.js.map