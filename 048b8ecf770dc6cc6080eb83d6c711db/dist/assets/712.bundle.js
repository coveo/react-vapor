(window.webpackJsonp=window.webpackJsonp||[]).push([[712],{1811:function(r,e,n){"use strict";n.r(e),e.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {ISideNavProps, SideNavigation} from '../SideNavigation';\r\n\r\ndescribe('<SideNavigation />', () => {\r\n    let wrapper: ReactWrapper<ISideNavProps, any>;\r\n\r\n    beforeEach(() => {\r\n        wrapper = mount(<SideNavigation />, {attachTo: document.getElementById('App')});\r\n    });\r\n\r\n    afterEach(() => {\r\n        wrapper.detach();\r\n    });\r\n\r\n    it('should render without errors', () => {\r\n        expect(() => {\r\n            shallow(<SideNavigation />);\r\n        }).not.toThrow();\r\n    });\r\n\r\n    it('should render a <SideNavigation /> with classes prop', () => {\r\n        const className = 'foo';\r\n        wrapper\r\n            .setProps({className})\r\n            .mount()\r\n            .update();\r\n        expect(\r\n            wrapper\r\n                .find('nav')\r\n                .first()\r\n                .hasClass(className)\r\n        ).toBe(true);\r\n    });\r\n\r\n    it('should not have class navigation-opened if opened prop is true and withReduxState prop is false.', () => {\r\n        const container = wrapper.find('nav').first();\r\n        expect(container.hasClass('navigation-opened')).toBe(true);\r\n\r\n        wrapper.setProps({opened: true});\r\n        wrapper.mount();\r\n        expect(container.hasClass('navigation-opened')).toBe(true);\r\n    });\r\n\r\n    it('should have class navigation-opened if opened prop is true and withReduxState prop is true.', () => {\r\n        wrapper.setProps({opened: false, withReduxState: true});\r\n        wrapper.update();\r\n        expect(wrapper.find('nav').hasClass('navigation-opened')).toBe(false);\r\n\r\n        wrapper.setProps({opened: true, withReduxState: true});\r\n        wrapper.update();\r\n        expect(wrapper.find('nav').hasClass('navigation-opened')).toBe(true);\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=712.bundle.js.map