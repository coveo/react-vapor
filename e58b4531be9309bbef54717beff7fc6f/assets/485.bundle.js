(window.webpackJsonp=window.webpackJsonp||[]).push([[485],{1573:function(n,o,e){"use strict";e.r(o),o.default="import {mount, ReactWrapper, shallow, ShallowWrapper} from 'enzyme';\r\n// tslint:disable-next-line:no-unused-variable\r\nimport * as React from 'react';\r\nimport {ILoadingProps, Loading} from '../Loading';\r\n\r\ndescribe('<Loading />', () => {\r\n    it('should render without errors', () => {\r\n        expect(() => {\r\n            shallow(<Loading />);\r\n        }).not.toThrow();\r\n    });\r\n\r\n    it('should render the spinner', () => {\r\n        const loading: ShallowWrapper<ILoadingProps, any> = shallow(<Loading />);\r\n        expect(loading.find('.spinner').length).toBe(1);\r\n    });\r\n\r\n    it('should render the optional classes if any in addition to the default spinner class', () => {\r\n        const loading: ShallowWrapper<ILoadingProps, any> = shallow(<Loading className=\"p2\" />);\r\n        expect(loading.find('.spinner.p2').length).toBe(1);\r\n    });\r\n\r\n    it('should call onRender if prop is set when mounting', () => {\r\n        const onRenderSpy = jasmine.createSpy('onRender');\r\n        const loading: ReactWrapper<ILoadingProps, any> = mount(<Loading onRender={onRenderSpy} />, {\r\n            attachTo: document.getElementById('App'),\r\n        });\r\n        expect(onRenderSpy).toHaveBeenCalled();\r\n        loading.unmount();\r\n        loading.detach();\r\n    });\r\n\r\n    it('should call onDestroy if prop is set when unmounting', () => {\r\n        const onDestroySpy = jasmine.createSpy('onDestroy');\r\n        const loading: ReactWrapper<ILoadingProps, any> = mount(<Loading onDestroy={onDestroySpy} />, {\r\n            attachTo: document.getElementById('App'),\r\n        });\r\n        loading.unmount();\r\n        expect(onDestroySpy).toHaveBeenCalled();\r\n        loading.detach();\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=485.bundle.js.map