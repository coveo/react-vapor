(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{1283:function(n,t,o){"use strict";o.r(t),t.default="import {shallowWithState} from 'enzyme-redux';\nimport * as React from 'react';\nimport {IBlankSlateProps} from '../BlankSlate';\nimport {BlankSlateWithError} from '../BlankSlatesHOC';\n\ndescribe('BlankSlateWithError Tests', () => {\n    describe('<BlankSlateWithError>', () => {\n        const defaultProps: IBlankSlateProps = {\n            title: 'test',\n        };\n\n        it('should not throw on mount and unmount', () => {\n            expect(() => {\n                const component = shallowWithState(<BlankSlateWithError {...defaultProps} />, {});\n                component.unmount();\n            });\n        });\n    });\n});\n"}}]);
//# sourceMappingURL=171.bundle.js.map