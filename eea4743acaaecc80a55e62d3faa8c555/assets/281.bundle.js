(window.webpackJsonp=window.webpackJsonp||[]).push([[281],{1372:function(e,r,t){"use strict";t.r(r),r.default="import * as _ from 'underscore';\r\nimport {IReactVaporState} from '../../ReactVapor';\r\nimport {IDatePickerState} from './DatePickerReducers';\r\n\r\nconst getDatePicker = (state: IReactVaporState, props: {id: string}): IDatePickerState => {\r\n    const datePickers: IDatePickerState[] = _.map(state.datePickers || [], (datePicker: IDatePickerState) => {\r\n        if (datePicker.id.indexOf(props.id) === 0) {\r\n            return datePicker;\r\n        }\r\n    }).filter(Boolean);\r\n    return (datePickers && datePickers[0]) || null;\r\n};\r\n\r\nconst getDatePickerLimits = (state: IReactVaporState, props: {id: string}): [Date, Date?] => {\r\n    const picker = DatePickerSelectors.getDatePicker(state, props);\r\n    return picker ? [picker.appliedLowerLimit, picker.appliedUpperLimit] : [null, null];\r\n};\r\n\r\nexport const DatePickerSelectors = {\r\n    getDatePicker,\r\n    getDatePickerLimits,\r\n};\r\n"}}]);
//# sourceMappingURL=281.bundle.js.map