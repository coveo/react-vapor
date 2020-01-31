(window.webpackJsonp=window.webpackJsonp||[]).push([[950],{2047:function(e,t,r){"use strict";r.r(t),t.default="import * as React from 'react';\r\n\r\nimport {FilterUtils} from './FilterUtils';\r\n\r\ndescribe('FilterUtils', () => {\r\n    describe('matchesString', () => {\r\n        it('should return false if the string does not match the filter value', () => {\r\n            expect(FilterUtils.matchesString('abc', 'def')).toBe(false);\r\n            expect(FilterUtils.matchesString('abc', 'a')).toBe(false);\r\n        });\r\n\r\n        it('should return false if the string to compare is empty', () => {\r\n            expect(FilterUtils.matchesString('abc', '')).toBe(false, 'empty string');\r\n            expect(FilterUtils.matchesString('abc', null)).toBe(false, 'null string');\r\n            expect(FilterUtils.matchesString('abc', undefined)).toBe(false, 'undefined string');\r\n        });\r\n\r\n        it('should return true if the string matches the filter value', () => {\r\n            expect(FilterUtils.matchesString('abc', 'abc')).toBe(true, 'exact match');\r\n            expect(FilterUtils.matchesString('a', 'abc')).toBe(true, 'partial match');\r\n        });\r\n\r\n        it('should return true if the filter value is empty', () => {\r\n            expect(FilterUtils.matchesString('', 'abc')).toBe(true, 'empty filter');\r\n            expect(FilterUtils.matchesString(null, 'abc')).toBe(true, 'null filter');\r\n            expect(FilterUtils.matchesString(undefined, 'abc')).toBe(true, 'undefined filter');\r\n        });\r\n    });\r\n\r\n    describe('matchesNumber', () => {\r\n        it('should return false if the number does not match the filter value', () => {\r\n            expect(FilterUtils.matchesNumber('abc', 12)).toBe(false);\r\n            expect(FilterUtils.matchesNumber('23', 12)).toBe(false);\r\n            expect(FilterUtils.matchesNumber('123', 12)).toBe(false);\r\n        });\r\n\r\n        it('should return false if the number to compare is empty', () => {\r\n            expect(FilterUtils.matchesNumber('12', null)).toBe(false, 'null number');\r\n            expect(FilterUtils.matchesNumber('12', undefined)).toBe(false, 'undefined number');\r\n        });\r\n\r\n        it('should return true if the number matches the filter value', () => {\r\n            expect(FilterUtils.matchesNumber('123', 123)).toBe(true, 'exact match');\r\n            expect(FilterUtils.matchesNumber('0', 0)).toBe(true, 'exact match');\r\n            expect(FilterUtils.matchesNumber('12', 123)).toBe(true, 'partial match');\r\n        });\r\n\r\n        it('should return true if the filter value is empty', () => {\r\n            expect(FilterUtils.matchesNumber('', 123)).toBe(true, 'empty filter');\r\n            expect(FilterUtils.matchesNumber(null, 123)).toBe(true, 'null filter');\r\n            expect(FilterUtils.matchesNumber(undefined, 123)).toBe(true, 'undefined filter');\r\n        });\r\n    });\r\n\r\n    describe('matchesReactNode', () => {\r\n        it('should return false if the node does not contain the filter value anywhere in its rendering tree', () => {\r\n            expect(FilterUtils.matchesReactNode('💎', 'some string')).toBe(false);\r\n            expect(FilterUtils.matchesReactNode('💎', 42)).toBe(false);\r\n            expect(FilterUtils.matchesReactNode('💎', <div>not what you are looking for</div>)).toBe(false);\r\n        });\r\n\r\n        it('should return false is the node is empty', () => {\r\n            expect(FilterUtils.matchesReactNode('💎', '')).toBe(false);\r\n            expect(FilterUtils.matchesReactNode('💎', null)).toBe(false);\r\n            expect(FilterUtils.matchesReactNode('💎', undefined)).toBe(false);\r\n        });\r\n\r\n        it('should return true if the node contains the filter value somewhere in its rendering tree', () => {\r\n            expect(FilterUtils.matchesReactNode('💎', '💎')).toBe(true);\r\n            expect(FilterUtils.matchesReactNode('💎', <div>💎</div>)).toBe(true);\r\n            expect(\r\n                FilterUtils.matchesReactNode(\r\n                    '💎',\r\n                    <div>\r\n                        <h1>gotta dig to find diamonds</h1>\r\n                        <div>\r\n                            <p>we need to go deeper</p>\r\n                            <span>💎</span>\r\n                        </div>\r\n                    </div>\r\n                )\r\n            ).toBe(true);\r\n        });\r\n\r\n        it('should return true if the filter value is empty', () => {\r\n            expect(FilterUtils.matchesReactNode('', 123)).toBe(true, 'empty filter');\r\n            expect(FilterUtils.matchesReactNode(null, '123')).toBe(true, 'null filter');\r\n            expect(FilterUtils.matchesReactNode(undefined, <div>123</div>)).toBe(true, 'undefined filter');\r\n        });\r\n    });\r\n\r\n    describe('matchesArrayLength', () => {\r\n        it('should return false if the array length does not match the filter value', () => {\r\n            expect(FilterUtils.matchesArrayLength('abc', [])).toBe(false);\r\n            expect(FilterUtils.matchesArrayLength('1', [])).toBe(false);\r\n            expect(FilterUtils.matchesArrayLength('0', [1, 2, 3])).toBe(false);\r\n        });\r\n\r\n        it('should return false if the array does not exist', () => {\r\n            expect(FilterUtils.matchesArrayLength('1', undefined)).toBe(false);\r\n            expect(FilterUtils.matchesArrayLength('0', null)).toBe(false);\r\n        });\r\n\r\n        it('should return true if the filter value is empty', () => {\r\n            expect(FilterUtils.matchesArrayLength('10', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(true, 'exact match');\r\n            expect(FilterUtils.matchesArrayLength('1', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(true, 'partial match 1');\r\n            expect(FilterUtils.matchesArrayLength('0', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(true, 'partial match 0');\r\n        });\r\n\r\n        it('should return true if the filter value is empty', () => {\r\n            expect(FilterUtils.matchesArrayLength('', [])).toBe(true, 'empty filter');\r\n            expect(FilterUtils.matchesArrayLength(null, [1])).toBe(true, 'null filter');\r\n            expect(FilterUtils.matchesArrayLength(undefined, [1, 2])).toBe(true, 'undefined filter');\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=950.bundle.js.map