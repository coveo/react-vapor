(window.webpackJsonp=window.webpackJsonp||[]).push([[608],{1712:function(n,e,r){"use strict";r.r(e),e.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\n// tslint:disable-next-line:no-unused-variable\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {IOptionPickerProps, OptionPicker} from '../OptionPicker';\r\n\r\ndescribe('Option picker', () => {\r\n    const OPTION_PICKER_BASIC_PROPS: IOptionPickerProps = {\r\n        options: [\r\n            {\r\n                label: 'Option 1',\r\n                value: () => 'optionValue',\r\n            },\r\n            {\r\n                label: 'Option 2',\r\n                value: () => '1238',\r\n            },\r\n        ],\r\n    };\r\n\r\n    describe('<OptionPicker />', () => {\r\n        it('should render without errors', () => {\r\n            expect(() => {\r\n                shallow(<OptionPicker {...OPTION_PICKER_BASIC_PROPS} />);\r\n            }).not.toThrow();\r\n        });\r\n    });\r\n\r\n    describe('<OptionPicker />', () => {\r\n        let optionPicker: ReactWrapper<IOptionPickerProps, any>;\r\n        let optionPickerInstance: OptionPicker;\r\n\r\n        beforeEach(() => {\r\n            optionPicker = mount(<OptionPicker {...OPTION_PICKER_BASIC_PROPS} />, {\r\n                attachTo: document.getElementById('App'),\r\n            });\r\n            optionPickerInstance = optionPicker.instance() as OptionPicker;\r\n        });\r\n\r\n        afterEach(() => {\r\n            optionPicker.detach();\r\n        });\r\n\r\n        it('should get the options as a prop', () => {\r\n            const optionsProp = optionPicker.props().options;\r\n\r\n            expect(optionsProp).toBeDefined();\r\n            expect(optionsProp).toEqual(OPTION_PICKER_BASIC_PROPS.options);\r\n        });\r\n\r\n        it('should display as many <Option /> as there are options in the options prop', () => {\r\n            const moreOptionsProps: IOptionPickerProps = _.extend({}, OPTION_PICKER_BASIC_PROPS, {\r\n                options: [\r\n                    ...OPTION_PICKER_BASIC_PROPS.options,\r\n                    {\r\n                        label: 'Option 3',\r\n                        value: () => 'aaa',\r\n                    },\r\n                ],\r\n            });\r\n\r\n            expect(optionPicker.find('Option').length).toBe(OPTION_PICKER_BASIC_PROPS.options.length);\r\n\r\n            optionPicker.setProps(moreOptionsProps);\r\n\r\n            expect(optionPicker.find('Option').length).toBe(moreOptionsProps.options.length);\r\n        });\r\n\r\n        it('should call prop onRender on mounting if set', () => {\r\n            const renderSpy: jasmine.Spy = jasmine.createSpy('onRender');\r\n            const withRenderProps: IOptionPickerProps = _.extend({}, OPTION_PICKER_BASIC_PROPS, {onRender: renderSpy});\r\n\r\n            expect(() => optionPickerInstance.componentWillMount()).not.toThrow();\r\n\r\n            optionPicker.setProps(withRenderProps);\r\n            optionPicker.unmount();\r\n            optionPicker.mount();\r\n\r\n            expect(renderSpy).toHaveBeenCalledTimes(1);\r\n        });\r\n\r\n        it('should call prop onDestroy on unmounting if set', () => {\r\n            const destroySpy: jasmine.Spy = jasmine.createSpy('onDestroy');\r\n            const withDestroyProps: IOptionPickerProps = _.extend({}, OPTION_PICKER_BASIC_PROPS, {\r\n                onDestroy: destroySpy,\r\n            });\r\n\r\n            expect(() => optionPickerInstance.componentWillUnmount()).not.toThrow();\r\n\r\n            optionPicker.setProps(withDestroyProps);\r\n            optionPicker.mount();\r\n            optionPicker.unmount();\r\n\r\n            expect(destroySpy).toHaveBeenCalledTimes(1);\r\n        });\r\n\r\n        it('should call prop onClick on mounting if set when calling handleClick', () => {\r\n            const onClickSpy: jasmine.Spy = jasmine.createSpy('onClick');\r\n            const expectedValue: string = 'value';\r\n            const expectedLabel: string = 'label';\r\n            const withOnClickProps: IOptionPickerProps = _.extend({}, OPTION_PICKER_BASIC_PROPS, {onClick: onClickSpy});\r\n\r\n            expect(() =>\r\n                optionPickerInstance['handleClick'].call(optionPickerInstance, expectedValue, expectedLabel)\r\n            ).not.toThrow();\r\n            expect(onClickSpy).not.toHaveBeenCalled();\r\n\r\n            optionPicker.setProps(withOnClickProps);\r\n            optionPickerInstance['handleClick'].call(optionPickerInstance, expectedValue, expectedLabel);\r\n\r\n            expect(onClickSpy).toHaveBeenCalledWith(expectedValue, expectedLabel);\r\n        });\r\n\r\n        it('should call handleClick when clicking an option', () => {\r\n            const handleClickSpy: jasmine.Spy = spyOn<any>(optionPickerInstance, 'handleClick');\r\n\r\n            optionPicker\r\n                .find('Option')\r\n                .first()\r\n                .find('button')\r\n                .simulate('click');\r\n\r\n            expect(handleClickSpy).toHaveBeenCalledWith(\r\n                OPTION_PICKER_BASIC_PROPS.options[0].value(),\r\n                OPTION_PICKER_BASIC_PROPS.options[0].label\r\n            );\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=608.bundle.js.map