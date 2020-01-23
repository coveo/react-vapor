(window.webpackJsonp=window.webpackJsonp||[]).push([[495],{1583:function(e,n,t){"use strict";t.r(n),n.default="import {mount, ReactWrapper} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\n\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {clearState} from '../../../utils/ReduxUtils';\r\nimport {TestUtils} from '../../../utils/tests/TestUtils';\r\nimport {IItemBoxProps} from '../../itemBox/ItemBox';\r\nimport {Svg} from '../../svg/Svg';\r\nimport {IMenuProps, MenuConnected} from '../MenuConnected';\r\n\r\ndescribe('Menu', () => {\r\n    describe('<MenuConnected />', () => {\r\n        let wrapper: ReactWrapper<any, any>;\r\n        let menuWrapper: ReactWrapper<IMenuProps, void>;\r\n        let store: Store<IReactVaporState>;\r\n\r\n        const id: string = 'menu-test';\r\n\r\n        const mountMenuConnected = (items: IItemBoxProps[] = [], props: Partial<IMenuProps> = {}) => {\r\n            wrapper = mount(\r\n                <Provider store={store}>\r\n                    <MenuConnected id={id} {...props} />\r\n                </Provider>,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n            menuWrapper = wrapper.find(MenuConnected).first();\r\n        };\r\n\r\n        beforeEach(() => {\r\n            store = TestUtils.buildStore();\r\n        });\r\n\r\n        afterEach(() => {\r\n            store.dispatch(clearState());\r\n            wrapper.detach();\r\n        });\r\n\r\n        describe('mount and unmount', () => {\r\n            it('should not throw on mount', () => {\r\n                expect(() => mountMenuConnected()).not.toThrow();\r\n            });\r\n\r\n            it('should not throw on unmount', () => {\r\n                mountMenuConnected();\r\n                expect(() => wrapper.unmount()).not.toThrow();\r\n            });\r\n\r\n            it('should add the menu to the state when mounted', () => {\r\n                expect(store.getState().menus).toEqual({});\r\n\r\n                mountMenuConnected();\r\n\r\n                expect(store.getState().menus[id]).toBeDefined();\r\n            });\r\n\r\n            it('should remove the menu from the state when the component unmount', () => {\r\n                mountMenuConnected();\r\n\r\n                expect(store.getState().menus[id]).toBeDefined();\r\n                wrapper.unmount();\r\n\r\n                expect(store.getState().menus).toEqual({});\r\n            });\r\n        });\r\n\r\n        describe('custom props', () => {\r\n            it('should add a style right on the menu to set the position right', () => {\r\n                mountMenuConnected([], {positionRight: true});\r\n\r\n                menuWrapper.find('.menu-toggle').simulate('mouseUp');\r\n\r\n                expect((menuWrapper.find('.select-dropdown-container').instance() as any).style.right).toBe('8px');\r\n            });\r\n\r\n            it('should add custom classes on the element', () => {\r\n                mountMenuConnected([], {className: 'test'});\r\n\r\n                expect(menuWrapper.find('.dropdown').hasClass('test')).toBe(true);\r\n            });\r\n\r\n            it('should add custom classes on the toggle element', () => {\r\n                const expectedClass = 'test';\r\n                mountMenuConnected([], {toggleClassName: expectedClass});\r\n\r\n                expect(menuWrapper.find('.menu-toggle').hasClass(expectedClass)).toBe(true);\r\n            });\r\n\r\n            it('should add custom classes on the dropdown element', () => {\r\n                const expectedClass = 'test';\r\n                mountMenuConnected([], {dropdownClassName: expectedClass});\r\n\r\n                expect(menuWrapper.find('.select-dropdown-container').hasClass(expectedClass)).toBe(true);\r\n            });\r\n\r\n            it('should add the custom svg', () => {\r\n                mountMenuConnected([], {buttonSvg: <Svg svgName=\"add\" />});\r\n\r\n                expect(menuWrapper.find(Svg).props().svgName).toBe('add');\r\n            });\r\n        });\r\n\r\n        describe('click handler', () => {\r\n            beforeEach(() => {\r\n                const otherElement: HTMLDivElement = document.createElement('div');\r\n                otherElement.setAttribute('id', 'other');\r\n                document.body.appendChild(otherElement);\r\n            });\r\n\r\n            afterEach(() => document.getElementById('other').remove());\r\n\r\n            const clickOnEl = (el: Element = document.getElementById('other')) => {\r\n                const evt = new MouseEvent('mousedown', {\r\n                    view: window,\r\n                    bubbles: true,\r\n                    cancelable: true,\r\n                    clientX: 20,\r\n                });\r\n                el.dispatchEvent(evt);\r\n            };\r\n\r\n            it('should close the menu when the user click outside the menu and the menu is open', () => {\r\n                mountMenuConnected();\r\n\r\n                menuWrapper.find('.menu-toggle').simulate('mouseUp');\r\n                expect(store.getState().menus[id].open).toBe(true, '1');\r\n\r\n                clickOnEl(menuWrapper.find('.select-dropdown-container').getDOMNode());\r\n                expect(store.getState().menus[id].open).toBe(true, '2');\r\n\r\n                clickOnEl();\r\n                expect(store.getState().menus[id].open).toBe(false, '3');\r\n            });\r\n\r\n            it('should not open the menu when the user click outside the menu', () => {\r\n                mountMenuConnected();\r\n\r\n                expect(store.getState().menus[id].open).toBe(false);\r\n\r\n                clickOnEl();\r\n                expect(store.getState().menus[id].open).toBe(false);\r\n            });\r\n\r\n            it('should close the menu when the user click inside the menu and the menu is open', () => {\r\n                mountMenuConnected();\r\n\r\n                menuWrapper.find('.menu-toggle').simulate('mouseUp');\r\n                expect(store.getState().menus[id].open).toBe(true, 'open menu');\r\n\r\n                menuWrapper.find('.select-dropdown-container').simulate('click');\r\n                expect(store.getState().menus[id].open).toBe(false, 'close menu');\r\n            });\r\n\r\n            it('should not close the menu when the user click inside the menu and the menu is open if the props closeOnSelectItem is set to false', () => {\r\n                mountMenuConnected([], {closeOnSelectItem: false});\r\n\r\n                menuWrapper.find('.menu-toggle').simulate('mouseUp');\r\n                expect(store.getState().menus[id].open).toBe(true, 'open menu');\r\n\r\n                menuWrapper.find('.select-dropdown-container').simulate('click');\r\n                expect(store.getState().menus[id].open).toBe(true, 'menu keep open');\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=495.bundle.js.map