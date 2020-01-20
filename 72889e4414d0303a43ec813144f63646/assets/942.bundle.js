(window.webpackJsonp=window.webpackJsonp||[]).push([[942],{2028:function(e,t,n){"use strict";n.r(t),t.default="import {ReduxUtils} from './ReduxUtils';\r\n\r\ndescribe('ReduxUtils', () => {\r\n    it('should correctly merge all props when calling ReduxUtils.mergeProps is called', () => {\r\n        const expectedStateProps = {\r\n            a: 'something',\r\n            b: false,\r\n        };\r\n        const expectedDispatchProps = {\r\n            c: jasmine.createSpy('c'),\r\n        };\r\n        const expectedOwnProps = {\r\n            d: 'd',\r\n        };\r\n        const result = ReduxUtils.mergeProps(expectedStateProps, expectedDispatchProps, expectedOwnProps);\r\n\r\n        expect(result).toEqual(jasmine.objectContaining(expectedStateProps));\r\n        expect(result).toEqual(jasmine.objectContaining(expectedDispatchProps));\r\n        expect(result).toEqual(jasmine.objectContaining(expectedOwnProps));\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=942.bundle.js.map