(window.webpackJsonp=window.webpackJsonp||[]).push([[352],{1448:function(n,e,r){"use strict";r.r(e),e.default="import {IDropdownOption} from '../DropdownSearch';\r\nimport {\r\n    selectOptionDropdownSearch,\r\n    selectOrSetNextActiveOption,\r\n    updateActiveOptionDropdownSearch,\r\n} from '../DropdownSearchActions';\r\nimport * as DropdownSearchUtils from '../DropdownSearchUtils';\r\n\r\ndescribe('DropdownSearch', () => {\r\n    describe('DropdownSearchActions', () => {\r\n        describe('selectOrSetNextActiveOption', () => {\r\n            const dropdownId = 'anywoulddo';\r\n            const keyCode = 1; // any would do\r\n            const activeOption: IDropdownOption = {value: 'anywoulddo', selected: false};\r\n\r\n            it('should return an action of type DropdownSearchActions.select if isSelectingOption returns true', () => {\r\n                spyOn(DropdownSearchUtils, 'isSelectingOption').and.returnValue(true);\r\n\r\n                expect(selectOrSetNextActiveOption(dropdownId, keyCode, activeOption)).toEqual(\r\n                    selectOptionDropdownSearch(dropdownId, activeOption, true)\r\n                );\r\n            });\r\n\r\n            it('should return an action of type DropdownSearchActions.active if isSelectingOption returns false', () => {\r\n                spyOn(DropdownSearchUtils, 'isSelectingOption').and.returnValue(false);\r\n\r\n                expect(selectOrSetNextActiveOption(dropdownId, keyCode, activeOption)).toEqual(\r\n                    updateActiveOptionDropdownSearch(dropdownId, keyCode, activeOption)\r\n                );\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=352.bundle.js.map