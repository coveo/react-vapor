(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{1239:function(r,n,t){"use strict";t.r(n),n.default="import {mount, ReactWrapper} from 'enzyme';\r\n// tslint:disable-next-line:no-unused-variable\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {clearState} from '../../../utils/ReduxUtils';\r\nimport {TestUtils} from '../../../utils/tests/TestUtils';\r\nimport {addPrompt} from '../../inlinePrompt/InlinePromptActions';\r\nimport {IActionOptions} from '../Action';\r\nimport {ITriggerActionProps, TriggerAction} from '../TriggerActionConnected';\r\nimport {TriggerActionConnected} from '../TriggerActionConnected';\r\n\r\ndescribe('Actions', () => {\r\n    describe('<TriggerActionConnected />', () => {\r\n        const action: IActionOptions = {\r\n            name: 'action',\r\n            trigger: jasmine.createSpy('triggerMethod'),\r\n            enabled: true,\r\n        };\r\n        const simple: boolean = false;\r\n        const parentId: string = 'parent';\r\n\r\n        let wrapper: ReactWrapper<any, any>;\r\n        let triggerAction: ReactWrapper<ITriggerActionProps, any>;\r\n        let store: Store<IReactVaporState>;\r\n\r\n        beforeEach(() => {\r\n            store = TestUtils.buildStore();\r\n\r\n            wrapper = mount(\r\n                <Provider store={store}>\r\n                    <TriggerActionConnected action={action} simple={simple} parentId={parentId} />\r\n                </Provider>,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n            triggerAction = wrapper.find(TriggerAction).first();\r\n        });\r\n\r\n        afterEach(() => {\r\n            store.dispatch(clearState());\r\n            wrapper.detach();\r\n        });\r\n\r\n        it('should get parentId as a prop', () => {\r\n            const parentIdProp = triggerAction.props().parentId;\r\n\r\n            expect(parentIdProp).toBeDefined();\r\n            expect(parentIdProp).toBe(parentId);\r\n        });\r\n\r\n        it('should get what to do when an action needs confirmation as a prop', () => {\r\n            const onTriggerConfirmProp = triggerAction.props().onTriggerConfirm;\r\n\r\n            expect(onTriggerConfirmProp).toBeDefined();\r\n        });\r\n\r\n        it('should get what to do after the confirmation of an action as a prop', () => {\r\n            const onConfirmProp = triggerAction.props().onConfirm;\r\n\r\n            expect(onConfirmProp).toBeDefined();\r\n        });\r\n\r\n        it('should get what to do onCloseDropdown', () => {\r\n            expect(triggerAction.props().onCloseDropdown).toBeDefined();\r\n            expect(() => triggerAction.props().onCloseDropdown()).not.toThrow();\r\n        });\r\n\r\n        it('should add a prompt onTriggerConfirm', () => {\r\n            expect(store.getState().prompts.length).toBe(0);\r\n            triggerAction.props().onTriggerConfirm(jasmine.createSpy('onClick'), {}, 'someClass');\r\n            expect(store.getState().prompts.length).toBe(1);\r\n        });\r\n\r\n        it('should remove the prompt onConfirm', () => {\r\n            store.dispatch(\r\n                addPrompt(parentId, {\r\n                    onClick: jasmine.createSpy('onClick'),\r\n                    userChoice: {},\r\n                    isOpened: false,\r\n                    className: 'someClass',\r\n                })\r\n            );\r\n            expect(store.getState().prompts.length).toBe(1);\r\n            triggerAction.props().onConfirm();\r\n            expect(store.getState().prompts.length).toBe(0);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=144.bundle.js.map