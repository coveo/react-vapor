(window.webpackJsonp=window.webpackJsonp||[]).push([[298],{1394:function(e,r,t){"use strict";t.r(r),r.default="import {mount, ReactWrapper} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\nimport * as _ from 'underscore';\r\n\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {clearState} from '../../../utils/ReduxUtils';\r\nimport {TestUtils} from '../../../utils/tests/TestUtils';\r\nimport {Button} from '../../button/Button';\r\nimport {DEFAULT_YEARS, MONTH_PICKER_ID, YEAR_PICKER_ID} from '../../calendar/Calendar';\r\nimport {closeDropdown, toggleDropdown} from '../../dropdown/DropdownActions';\r\nimport {ModalFooter} from '../../modal/ModalFooter';\r\nimport {addOptionPicker, changeOptionPicker} from '../../optionPicker/OptionPickerActions';\r\nimport {addOptionsCycle, changeOptionsCycle} from '../../optionsCycle/OptionsCycleActions';\r\nimport {addDatePicker, applyDatePicker, changeDatePickerLowerLimit, DateLimits} from '../DatePickerActions';\r\nimport {DatePickerBox} from '../DatePickerBox';\r\nimport {DatePickerDropdown, IDatePickerDropdownProps} from '../DatePickerDropdown';\r\nimport {DatePickerDropdownConnected} from '../DatePickerDropdownConnected';\r\nimport {IDatePickerState} from '../DatePickerReducers';\r\n\r\ndescribe('Date picker', () => {\r\n    describe('<DatePickerDropdownConnected />', () => {\r\n        const DATE_PICKER_DROPDOWN_BASIC_PROPS: IDatePickerDropdownProps = {\r\n            id: 'dropdown',\r\n            datesSelectionBoxes: [],\r\n        };\r\n\r\n        let wrapper: ReactWrapper<any, any>;\r\n        let datePickerDropdown: ReactWrapper<IDatePickerDropdownProps, any>;\r\n        let store: Store<IReactVaporState>;\r\n\r\n        const mountWithProps = (props: IDatePickerDropdownProps) => {\r\n            wrapper = mount(\r\n                <Provider store={store}>\r\n                    <DatePickerDropdownConnected {...props} />\r\n                </Provider>,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n            datePickerDropdown = wrapper.find(DatePickerDropdown).first();\r\n        };\r\n\r\n        beforeEach(() => {\r\n            store = TestUtils.buildStore();\r\n\r\n            mountWithProps(DATE_PICKER_DROPDOWN_BASIC_PROPS);\r\n        });\r\n\r\n        afterEach(() => {\r\n            store.dispatch(clearState());\r\n            wrapper.detach();\r\n        });\r\n\r\n        it('should get an id as a prop', () => {\r\n            const idProp = datePickerDropdown.props().id;\r\n\r\n            expect(idProp).toBeDefined();\r\n            expect(idProp).toBe(DATE_PICKER_DROPDOWN_BASIC_PROPS.id);\r\n        });\r\n\r\n        it('should get if it is opened as a prop', () => {\r\n            const isOpenedProp = datePickerDropdown.props().isOpened;\r\n\r\n            expect(isOpenedProp).toBeDefined();\r\n            expect(isOpenedProp).toBe(false);\r\n        });\r\n\r\n        it('should get the date picker as a prop', () => {\r\n            const datePickerProp = datePickerDropdown.props().datePicker;\r\n\r\n            expect(datePickerProp).toBeDefined();\r\n            expect(datePickerProp).toBe(null);\r\n        });\r\n\r\n        it('should get if it has a redux state as a prop', () => {\r\n            const withReduxStateProp = datePickerDropdown.props().withReduxState;\r\n\r\n            expect(withReduxStateProp).toBeDefined();\r\n            expect(withReduxStateProp).toBe(true);\r\n        });\r\n\r\n        it('should get what to do on render as a prop', () => {\r\n            const onRenderProp = datePickerDropdown.props().onRender;\r\n\r\n            expect(onRenderProp).toBeDefined();\r\n        });\r\n\r\n        it('should get what to do on destroy as a prop', () => {\r\n            const onDestroyProp = datePickerDropdown.props().onDestroy;\r\n\r\n            expect(onDestroyProp).toBeDefined();\r\n        });\r\n\r\n        it('should get what to do on click as a prop', () => {\r\n            const onClickProp = datePickerDropdown.props().onClick;\r\n\r\n            expect(onClickProp).toBeDefined();\r\n        });\r\n\r\n        it('should get what to do on apply as a prop', () => {\r\n            const onApplyProp = datePickerDropdown.props().onApply;\r\n\r\n            expect(onApplyProp).toBeDefined();\r\n        });\r\n\r\n        it('should get what to do on cancel as a prop', () => {\r\n            const onCancelProp = datePickerDropdown.props().onCancel;\r\n\r\n            expect(onCancelProp).toBeDefined();\r\n        });\r\n\r\n        it('should get what to do on document click as a prop', () => {\r\n            const onDocumentClickProp = datePickerDropdown.props().onDocumentClick;\r\n\r\n            expect(onDocumentClickProp).toBeDefined();\r\n        });\r\n\r\n        it('should get what to do on clear as a prop', () => {\r\n            const onClearProp = datePickerDropdown.props().onClear;\r\n\r\n            expect(onClearProp).toBeDefined();\r\n        });\r\n\r\n        it('should return isOpen if the dropdown is opened', () => {\r\n            store.dispatch(toggleDropdown(DATE_PICKER_DROPDOWN_BASIC_PROPS.id));\r\n            wrapper.update();\r\n\r\n            expect(wrapper.find(DatePickerDropdown).props().isOpened).toBe(true);\r\n\r\n            store.dispatch(closeDropdown(DATE_PICKER_DROPDOWN_BASIC_PROPS.id));\r\n            wrapper.update();\r\n\r\n            expect(wrapper.find(DatePickerDropdown).props().isOpened).toBe(false);\r\n        });\r\n\r\n        it('should return the first date picker with the id starting with the dropdown id for the datePicker prop', () => {\r\n            const firstDatePickerId: string = DATE_PICKER_DROPDOWN_BASIC_PROPS.id + '6868';\r\n            store.dispatch(addDatePicker(firstDatePickerId, false));\r\n            store.dispatch(addDatePicker(DATE_PICKER_DROPDOWN_BASIC_PROPS.id + '32', false));\r\n            store.dispatch(addDatePicker('1', false));\r\n            wrapper.update();\r\n\r\n            expect(wrapper.find(DatePickerDropdown).props().datePicker.id).toBe(firstDatePickerId);\r\n        });\r\n\r\n        it('should call onRender prop when mounted', () => {\r\n            wrapper.unmount();\r\n            store.dispatch(clearState());\r\n\r\n            expect(store.getState().dropdowns.length).toBe(0);\r\n\r\n            wrapper.mount();\r\n\r\n            expect(store.getState().dropdowns.length).toBe(1);\r\n        });\r\n\r\n        it('should call onDestroy prop when will unmount', () => {\r\n            wrapper.unmount();\r\n\r\n            expect(store.getState().dropdowns.length).toBe(0);\r\n        });\r\n\r\n        it('should clear the selected limits of the dropdown when calling onClear prop', () => {\r\n            const pickerId: string = DATE_PICKER_DROPDOWN_BASIC_PROPS.id + '6868';\r\n            store.dispatch(addDatePicker(pickerId, true, undefined, '', 'some-calendar-id', undefined, true));\r\n\r\n            datePickerDropdown.props().onClear();\r\n            const datePickerState: IDatePickerState = _.findWhere(store.getState().datePickers, {id: pickerId});\r\n\r\n            expect(datePickerState.lowerLimit).toBeNull();\r\n            expect(datePickerState.upperLimit).toBeNull();\r\n            expect(datePickerState.inputLowerLimit).toBeNull();\r\n            expect(datePickerState.inputUpperLimit).toBeNull();\r\n            expect(datePickerState.selected).toBe(DateLimits.lower);\r\n        });\r\n\r\n        it('should toggle the open property of the dropdown when calling the onClick prop', () => {\r\n            expect(_.findWhere(store.getState().dropdowns, {id: DATE_PICKER_DROPDOWN_BASIC_PROPS.id}).opened).toBe(\r\n                false\r\n            );\r\n\r\n            datePickerDropdown.props().onClick(datePickerDropdown.props().datePicker);\r\n            expect(_.findWhere(store.getState().dropdowns, {id: DATE_PICKER_DROPDOWN_BASIC_PROPS.id}).opened).toBe(\r\n                true\r\n            );\r\n        });\r\n\r\n        it(`should select the date picker's lower limit when calling the onClick prop`, () => {\r\n            const pickerId: string = DATE_PICKER_DROPDOWN_BASIC_PROPS.id + '6868';\r\n\r\n            store.dispatch(addDatePicker(pickerId, false));\r\n            wrapper.update();\r\n            datePickerDropdown = wrapper.find(DatePickerDropdown);\r\n\r\n            expect(_.findWhere(store.getState().datePickers, {id: pickerId}).selected).toBe('');\r\n\r\n            datePickerDropdown.props().onClick(datePickerDropdown.props().datePicker);\r\n\r\n            expect(_.findWhere(store.getState().datePickers, {id: pickerId}).selected).toBe(DateLimits.lower);\r\n        });\r\n\r\n        it('should close the dropdown menu when calling onDocumentClick prop', () => {\r\n            store.dispatch(toggleDropdown(DATE_PICKER_DROPDOWN_BASIC_PROPS.id));\r\n            expect(_.findWhere(store.getState().dropdowns, {id: DATE_PICKER_DROPDOWN_BASIC_PROPS.id}).opened).toBe(\r\n                true\r\n            );\r\n\r\n            datePickerDropdown.props().onDocumentClick();\r\n            expect(_.findWhere(store.getState().dropdowns, {id: DATE_PICKER_DROPDOWN_BASIC_PROPS.id}).opened).toBe(\r\n                false\r\n            );\r\n        });\r\n\r\n        it('should apply the dates when calling onApply prop', () => {\r\n            const pickerId: string = DATE_PICKER_DROPDOWN_BASIC_PROPS.id + '6868';\r\n            const newLowerLimit: Date = new Date(new Date().setDate(new Date().getDate() - 20));\r\n\r\n            store.dispatch(addDatePicker(pickerId, false));\r\n            store.dispatch(changeDatePickerLowerLimit(pickerId, newLowerLimit));\r\n\r\n            datePickerDropdown.props().onApply();\r\n\r\n            expect(_.findWhere(store.getState().datePickers, {id: pickerId}).appliedLowerLimit).toEqual(newLowerLimit);\r\n        });\r\n\r\n        it('should reset the dates when calling onCancel prop', () => {\r\n            const pickerId: string = DATE_PICKER_DROPDOWN_BASIC_PROPS.id + '6868';\r\n            const newLowerLimit: Date = new Date(new Date().setDate(new Date().getDate() - 20));\r\n\r\n            store.dispatch(addDatePicker(pickerId, false));\r\n            store.dispatch(changeDatePickerLowerLimit(pickerId, newLowerLimit));\r\n\r\n            datePickerDropdown.props().onCancel(0, 0, true);\r\n\r\n            const datePicker: IDatePickerState = _.findWhere(store.getState().datePickers, {id: pickerId});\r\n            expect(datePicker.appliedLowerLimit).not.toEqual(newLowerLimit);\r\n            expect(datePicker.lowerLimit).toEqual(datePicker.appliedLowerLimit);\r\n        });\r\n\r\n        it('should close the dropdown when calling onApply prop', () => {\r\n            store.dispatch(toggleDropdown(DATE_PICKER_DROPDOWN_BASIC_PROPS.id));\r\n            expect(_.findWhere(store.getState().dropdowns, {id: DATE_PICKER_DROPDOWN_BASIC_PROPS.id}).opened).toBe(\r\n                true\r\n            );\r\n\r\n            datePickerDropdown.props().onApply();\r\n            expect(_.findWhere(store.getState().dropdowns, {id: DATE_PICKER_DROPDOWN_BASIC_PROPS.id}).opened).toBe(\r\n                false\r\n            );\r\n        });\r\n\r\n        it('should close the dropdown when calling onCancel prop', () => {\r\n            store.dispatch(toggleDropdown(DATE_PICKER_DROPDOWN_BASIC_PROPS.id));\r\n            expect(_.findWhere(store.getState().dropdowns, {id: DATE_PICKER_DROPDOWN_BASIC_PROPS.id}).opened).toBe(\r\n                true\r\n            );\r\n\r\n            datePickerDropdown.props().onCancel(1, 1, true);\r\n            expect(_.findWhere(store.getState().dropdowns, {id: DATE_PICKER_DROPDOWN_BASIC_PROPS.id}).opened).toBe(\r\n                false\r\n            );\r\n        });\r\n\r\n        it('should reset the option picker when calling onCancel prop', () => {\r\n            const pickerId: string = DATE_PICKER_DROPDOWN_BASIC_PROPS.id + '6868';\r\n            const newValue: string = 'selected value';\r\n            const newLabel: string = 'a label';\r\n\r\n            store.dispatch(addOptionPicker(pickerId));\r\n            store.dispatch(changeOptionPicker(pickerId, newLabel, newValue));\r\n\r\n            expect(_.findWhere(store.getState().optionPickers, {id: pickerId}).selectedValue).toBe(newValue);\r\n            expect(_.findWhere(store.getState().optionPickers, {id: pickerId}).selectedLabel).toBe(newLabel);\r\n\r\n            datePickerDropdown.props().onCancel(1, 1, true);\r\n\r\n            expect(_.findWhere(store.getState().optionPickers, {id: pickerId}).selectedValue).toBe('');\r\n            expect(_.findWhere(store.getState().optionPickers, {id: pickerId}).selectedLabel).toBe('');\r\n        });\r\n\r\n        it('should reset the month when calling onCancel prop', () => {\r\n            const cycleId: string = `calendar-${DATE_PICKER_DROPDOWN_BASIC_PROPS.id}${MONTH_PICKER_ID}`;\r\n\r\n            store.dispatch(addOptionsCycle(cycleId));\r\n            store.dispatch(changeOptionsCycle(cycleId, 7));\r\n\r\n            datePickerDropdown.props().onCancel(1, 1, true);\r\n\r\n            expect(_.findWhere(store.getState().optionsCycles, {id: cycleId}).currentOption).toBe(1);\r\n        });\r\n\r\n        it('should reset the year when calling onCancel prop', () => {\r\n            const cycleId: string = `calendar-${DATE_PICKER_DROPDOWN_BASIC_PROPS.id}${YEAR_PICKER_ID}`;\r\n\r\n            store.dispatch(addOptionsCycle(cycleId));\r\n            store.dispatch(changeOptionsCycle(cycleId, 0));\r\n\r\n            datePickerDropdown.props().onCancel(1, 1, true);\r\n\r\n            expect(_.findWhere(store.getState().optionsCycles, {id: cycleId}).currentOption).toBe(1);\r\n        });\r\n\r\n        it(\"should reset the month to the datepicker's lower limit when calling onCancelProp\", () => {\r\n            const propsIsOpen: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {\r\n                isOpened: true,\r\n            });\r\n            mountWithProps(propsIsOpen);\r\n\r\n            const pickerId: string = DATE_PICKER_DROPDOWN_BASIC_PROPS.id + '6868';\r\n            const newLowerLimit: Date = new Date(new Date().setDate(new Date().getDate() - 700));\r\n            const yearCycleId: string = `calendar-${DATE_PICKER_DROPDOWN_BASIC_PROPS.id}${YEAR_PICKER_ID}`;\r\n            const monthCycleId: string = `calendar-${DATE_PICKER_DROPDOWN_BASIC_PROPS.id}${MONTH_PICKER_ID}`;\r\n\r\n            store.dispatch(addDatePicker(pickerId, false, undefined));\r\n            store.dispatch(changeDatePickerLowerLimit(pickerId, newLowerLimit));\r\n            store.dispatch(applyDatePicker(pickerId));\r\n\r\n            store.dispatch(addOptionsCycle(monthCycleId));\r\n            store.dispatch(addOptionsCycle(yearCycleId));\r\n\r\n            store.dispatch(toggleDropdown(DATE_PICKER_DROPDOWN_BASIC_PROPS.id));\r\n\r\n            datePickerDropdown\r\n                .find(ModalFooter)\r\n                .find(Button)\r\n                .last()\r\n                .simulate('click');\r\n\r\n            expect(_.findWhere(store.getState().optionsCycles, {id: monthCycleId}).currentOption).toBe(\r\n                newLowerLimit.getMonth()\r\n            );\r\n            expect(_.findWhere(store.getState().optionsCycles, {id: yearCycleId}).currentOption).toBe(\r\n                DEFAULT_YEARS.indexOf(newLowerLimit.getFullYear().toString())\r\n            );\r\n        });\r\n\r\n        it('should not reset anything if the date picker dropdown is already closed', () => {\r\n            const monthCycleId: string = `calendar-${DATE_PICKER_DROPDOWN_BASIC_PROPS.id}${MONTH_PICKER_ID}`;\r\n            const yearCycleId: string = `calendar-${DATE_PICKER_DROPDOWN_BASIC_PROPS.id}${YEAR_PICKER_ID}`;\r\n            const pickerId: string = DATE_PICKER_DROPDOWN_BASIC_PROPS.id + '6868';\r\n            const newValue: string = 'selected value';\r\n            const newLabel: string = 'a label';\r\n            const expectedValue: number = 7;\r\n\r\n            store.dispatch(addOptionsCycle(monthCycleId));\r\n            store.dispatch(changeOptionsCycle(monthCycleId, expectedValue));\r\n\r\n            store.dispatch(addOptionsCycle(yearCycleId));\r\n            store.dispatch(changeOptionsCycle(yearCycleId, expectedValue));\r\n\r\n            store.dispatch(addOptionPicker(pickerId));\r\n            store.dispatch(changeOptionPicker(pickerId, newLabel, newValue));\r\n\r\n            datePickerDropdown.props().onCancel(1, 1, false);\r\n\r\n            expect(_.findWhere(store.getState().optionsCycles, {id: monthCycleId}).currentOption).toBe(expectedValue);\r\n            expect(_.findWhere(store.getState().optionsCycles, {id: yearCycleId}).currentOption).toBe(expectedValue);\r\n\r\n            expect(_.findWhere(store.getState().optionPickers, {id: pickerId}).selectedValue).toBe(newValue);\r\n        });\r\n\r\n        it('should display a <DatePickerBox /> with a \"withReduxState\" prop set to true when the dropdown is opened', () => {\r\n            const propsIsOpen: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {\r\n                isOpened: true,\r\n            });\r\n            mountWithProps(propsIsOpen);\r\n\r\n            expect(datePickerDropdown.find(DatePickerBox).props().withReduxState).toBe(true);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=298.bundle.js.map