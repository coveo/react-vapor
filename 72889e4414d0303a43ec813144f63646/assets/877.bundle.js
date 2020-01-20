(window.webpackJsonp=window.webpackJsonp||[]).push([[877],{1965:function(e,t,a){"use strict";a.r(t),t.default="import {IReactVaporState} from '../../../ReactVapor';\r\nimport {TextAreaSelectors} from '../TextAreaSelectors';\r\n\r\ndescribe('TextAreaSelectors', () => {\r\n    it('should not throw and return an empty string when passing a falsy id', () => {\r\n        expect(TextAreaSelectors.getValue({} as IReactVaporState, undefined)).toBe('');\r\n        expect(TextAreaSelectors.getValue({} as IReactVaporState, null)).toBe('');\r\n        expect(TextAreaSelectors.getValue({} as IReactVaporState, '')).toBe('');\r\n    });\r\n\r\n    it('should return the textarea value at the specified id', () => {\r\n        const id = 'my-text-area';\r\n        const expectedValue = 'okansdjas ndkjna skjdnkjan skjdnoiuqwn eoinoiuqn fijuhwnbd ifniuzxn fdd';\r\n        const state = {\r\n            textAreas: [{id, value: expectedValue, disabled: false}],\r\n        };\r\n\r\n        expect(TextAreaSelectors.getValue(state, id)).toBe(expectedValue);\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=877.bundle.js.map