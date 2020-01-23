(window.webpackJsonp=window.webpackJsonp||[]).push([[754],{1835:function(r,t,e){"use strict";e.r(t),t.default="import {mount, ReactWrapper} from 'enzyme';\r\n// tslint:disable-next-line:no-unused-variable\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\nimport * as _ from 'underscore';\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {clearState} from '../../../utils/ReduxUtils';\r\nimport {TestUtils} from '../../../utils/tests/TestUtils';\r\nimport {ITabProps, Tab} from '../Tab';\r\nimport {addTab, selectTab} from '../TabActions';\r\nimport {TabConnected} from '../TabConnected';\r\nimport {DEFAULT_GROUP_ID, ITabGroupState, ITabState} from '../TabReducers';\r\n\r\ndescribe('Tab', () => {\r\n    describe('<TabConnected />', () => {\r\n        let tab: ReactWrapper<ITabProps, any>;\r\n        let id: string;\r\n        let title: string;\r\n        let wrapper: ReactWrapper<any, any>;\r\n        let store: Store<IReactVaporState>;\r\n\r\n        beforeEach(() => {\r\n            id = 'tab';\r\n            title = 'Title';\r\n\r\n            store = TestUtils.buildStore();\r\n\r\n            wrapper = mount(\r\n                <Provider store={store}>\r\n                    <TabConnected id={id} title={title} />\r\n                </Provider>,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n            tab = wrapper.find(Tab).first();\r\n        });\r\n\r\n        afterEach(() => {\r\n            store.dispatch(clearState());\r\n            wrapper.detach();\r\n        });\r\n\r\n        it('should get its id as a prop', () => {\r\n            const idProp = tab.props().id;\r\n\r\n            expect(idProp).toBeDefined();\r\n            expect(idProp).toBe(id);\r\n        });\r\n\r\n        it('should get its title as a prop', () => {\r\n            const titleProp = tab.props().title;\r\n\r\n            expect(titleProp).toBeDefined();\r\n            expect(titleProp).toBe(title);\r\n        });\r\n\r\n        it('should get isActive true as a prop', () => {\r\n            const isActive = tab.props().isActive;\r\n\r\n            expect(isActive).toBeDefined();\r\n            expect(isActive).toBe(true);\r\n        });\r\n\r\n        it('should get what to do on render as a prop', () => {\r\n            const onRenderProp = tab.props().onRender;\r\n\r\n            expect(onRenderProp).toBeDefined();\r\n        });\r\n\r\n        it('should get what to do on destroy as a prop', () => {\r\n            const onDestroyProp = tab.props().onDestroy;\r\n\r\n            expect(onDestroyProp).toBeDefined();\r\n        });\r\n\r\n        it('should get what to do on select as a prop', () => {\r\n            const onSelectProp = tab.props().onSelect;\r\n\r\n            expect(onSelectProp).toBeDefined();\r\n        });\r\n\r\n        it('should add the tab in the store on render', () => {\r\n            const tabGroup = _.find(\r\n                store.getState().tabs,\r\n                (currentTabGroup: ITabGroupState) => currentTabGroup.id === DEFAULT_GROUP_ID\r\n            );\r\n            expect(tabGroup.tabs.filter((currentTab: ITabState) => currentTab.id === id).length).toBe(1);\r\n        });\r\n\r\n        it('should select the tab in the store when dispatching a \"selectTab\" action', () => {\r\n            const tab2Id = 'tab2Id';\r\n            store.dispatch(addTab(tab2Id));\r\n            let tabGroup = _.find(\r\n                store.getState().tabs,\r\n                (currentTabGroup: ITabGroupState) => currentTabGroup.id === DEFAULT_GROUP_ID\r\n            );\r\n            expect(tabGroup.tabs.filter((currentTab) => currentTab.id === id).length).toBe(1);\r\n            expect(tabGroup.tabs.filter((currentTab) => currentTab.id === id)[0].isSelected).toBe(true);\r\n            expect(tabGroup.tabs.filter((currentTab) => currentTab.id === tab2Id).length).toBe(1);\r\n            expect(tabGroup.tabs.filter((currentTab) => currentTab.id === tab2Id)[0].isSelected).toBe(false);\r\n\r\n            store.dispatch(selectTab(tab2Id));\r\n            tabGroup = _.find(\r\n                store.getState().tabs,\r\n                (currentTabGroup: ITabGroupState) => currentTabGroup.id === DEFAULT_GROUP_ID\r\n            );\r\n            expect(tabGroup.tabs.filter((currentTab) => currentTab.id === id)[0].isSelected).toBe(false);\r\n            expect(tabGroup.tabs.filter((currentTab) => currentTab.id === tab2Id)[0].isSelected).toBe(true);\r\n        });\r\n\r\n        it('should select the tab when clicking on it', () => {\r\n            const tab2Id = 'tab2Id';\r\n            store.dispatch(addTab(tab2Id));\r\n            let tabGroup = _.find(\r\n                store.getState().tabs,\r\n                (currentTabGroup: ITabGroupState) => currentTabGroup.id === DEFAULT_GROUP_ID\r\n            );\r\n            expect(tabGroup.tabs.filter((currentTab) => currentTab.id === id).length).toBe(1);\r\n            expect(tabGroup.tabs.filter((currentTab) => currentTab.id === id)[0].isSelected).toBe(true);\r\n            expect(tabGroup.tabs.filter((currentTab) => currentTab.id === tab2Id).length).toBe(1);\r\n            expect(tabGroup.tabs.filter((currentTab) => currentTab.id === tab2Id)[0].isSelected).toBe(false);\r\n\r\n            store.dispatch(selectTab(tab2Id));\r\n            tab.simulate('click');\r\n            tabGroup = _.find(\r\n                store.getState().tabs,\r\n                (currentTabGroup: ITabGroupState) => currentTabGroup.id === DEFAULT_GROUP_ID\r\n            );\r\n            expect(tabGroup.tabs.filter((currentTab) => currentTab.id === id)[0].isSelected).toBe(true);\r\n            expect(tabGroup.tabs.filter((currentTab) => currentTab.id === tab2Id)[0].isSelected).toBe(false);\r\n        });\r\n\r\n        it('should remove the tab in the store on destroy', () => {\r\n            wrapper.unmount();\r\n            expect(\r\n                store.getState().tabs.filter((currentTabGroup) => currentTabGroup.id === DEFAULT_GROUP_ID).length\r\n            ).toBe(0);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=754.bundle.js.map