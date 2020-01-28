(window.webpackJsonp=window.webpackJsonp||[]).push([[947],{2043:function(n,t,e){"use strict";e.r(t),t.default="import * as moment from 'moment';\r\nimport * as _ from 'underscore';\r\nimport {IDay} from '../components/calendar/CalendarDay';\r\n\r\nexport interface IDateComponents {\r\n    year?: number;\r\n    month?: number;\r\n    date?: number;\r\n    hours?: number;\r\n    minutes?: number;\r\n    seconds?: number;\r\n    milliseconds?: number;\r\n}\r\n\r\nexport const SIMPLE_DATE_FORMAT: string = 'MMM DD, YYYY';\r\nexport const LONG_DATE_FORMAT: string = SIMPLE_DATE_FORMAT + ', H:mm';\r\nexport const DATES_SEPARATOR: string = '%';\r\n\r\nexport class DateUtils {\r\n    static currentDate: Date = new Date();\r\n    static currentMonth: number = DateUtils.currentDate.getMonth();\r\n    static currentYear: number = DateUtils.currentDate.getFullYear();\r\n\r\n    static getPreviousYears(numberOfYears: number): string[] {\r\n        return _.range(DateUtils.currentYear - numberOfYears, DateUtils.currentYear).map(String);\r\n    }\r\n\r\n    static getNextYears(numberOfYears: number): string[] {\r\n        return _.range(DateUtils.currentYear + 1, DateUtils.currentYear + numberOfYears + 1).map(String);\r\n    }\r\n\r\n    static getMonthWeeks(firstDay: Date, startingDay: number): IDay[][] {\r\n        const weeks: IDay[][] = [];\r\n        let done = false;\r\n        let date = moment(firstDay)\r\n            .startOf('week')\r\n            .add(startingDay, 'day');\r\n        let monthIndex = date.month();\r\n        let count = 0;\r\n\r\n        while (!done) {\r\n            const days: IDay[] = [];\r\n            for (let i = 0; i < 7; i++) {\r\n                days.push({\r\n                    number: date.date(),\r\n                    isCurrentMonth: date.month() === firstDay.getMonth(),\r\n                    isToday: date.isSame(DateUtils.currentDate, 'day'),\r\n                    date: date,\r\n                });\r\n                date = date.clone();\r\n                date.add(1, 'day');\r\n            }\r\n            weeks.push(days);\r\n            done = count++ > 2 && monthIndex !== date.month();\r\n            monthIndex = date.month();\r\n        }\r\n\r\n        return weeks;\r\n    }\r\n\r\n    static getDateWithTimeString(date: Date): string {\r\n        const dateMoment = moment(date);\r\n        if (!date || !dateMoment.isValid()) {\r\n            return '';\r\n        }\r\n        return dateMoment.format(LONG_DATE_FORMAT);\r\n    }\r\n\r\n    static getDateFromTimeString(date: string): Date {\r\n        return DateUtils.getValidDate(date, true);\r\n    }\r\n\r\n    static getValidDate(date: string, fromTime: boolean = false): Date {\r\n        const momentDate: moment.Moment = moment(date, LONG_DATE_FORMAT, fromTime);\r\n        if (momentDate.isValid()) {\r\n            return momentDate.toDate();\r\n        }\r\n\r\n        return moment().toDate();\r\n    }\r\n\r\n    static getSimpleDate(date: Date): string {\r\n        const dateMoment = moment(date);\r\n        if (!date || !dateMoment.isValid()) {\r\n            return '';\r\n        }\r\n        return dateMoment.format(SIMPLE_DATE_FORMAT);\r\n    }\r\n\r\n    static getDateFromSimpleDateString(date: string): Date {\r\n        return moment(date, SIMPLE_DATE_FORMAT, true).toDate();\r\n    }\r\n\r\n    /**\r\n     * The difference between this function and using `moment.isSame` is in how null values are handled.\r\n     * * `!moment(null).isSame(null)` will return `true`\r\n     * * `DateUtils.isDifferent(null, null)` will return `false`\r\n     */\r\n    static isDifferent(\r\n        firstDate: moment.MomentInput,\r\n        secondDate: moment.MomentInput,\r\n        granularity?: moment.unitOfTime.StartOf\r\n    ): boolean {\r\n        return !moment(firstDate).isSame(secondDate, granularity) && (!!firstDate || !!secondDate);\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=947.bundle.js.map