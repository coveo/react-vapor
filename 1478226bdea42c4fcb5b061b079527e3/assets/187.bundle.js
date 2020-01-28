(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{1297:function(n,r,e){"use strict";e.r(r),r.default="import {Moment} from 'moment';\r\nimport * as React from 'react';\r\n\r\nexport interface IDay {\r\n    number: number;\r\n    isCurrentMonth: boolean;\r\n    isToday: boolean;\r\n    date: Moment;\r\n    isSelected?: boolean;\r\n    isLowerLimit?: boolean;\r\n    isUpperLimit?: boolean;\r\n    color?: string;\r\n    isSelectable?: boolean;\r\n}\r\n\r\nexport interface ICalendarDayProps extends React.ClassAttributes<CalendarDay> {\r\n    day: IDay;\r\n    onClick: (value: Date) => void;\r\n    onSelectUnselectable: () => void;\r\n}\r\n\r\nexport class CalendarDay extends React.Component<ICalendarDayProps, {}> {\r\n    static DEFAULT_DATE_CLASS: string = 'calendar-day';\r\n\r\n    private handleClick() {\r\n        if (this.props.day.isSelectable) {\r\n            this.props.onClick(this.props.day.date.toDate());\r\n        }\r\n    }\r\n\r\n    componentWillReceiveProps(nextProps: ICalendarDayProps) {\r\n        if (\r\n            !nextProps.day.isSelectable &&\r\n            nextProps.day.isSelected &&\r\n            (nextProps.day.isLowerLimit || nextProps.day.isUpperLimit)\r\n        ) {\r\n            nextProps.onSelectUnselectable();\r\n        }\r\n    }\r\n\r\n    render() {\r\n        const dayClasses: string[] = [];\r\n        const dayCellClasses: string[] = [CalendarDay.DEFAULT_DATE_CLASS];\r\n\r\n        if (!this.props.day.isCurrentMonth) {\r\n            dayClasses.push('other-month-date');\r\n        }\r\n\r\n        if (!this.props.day.isSelectable) {\r\n            dayCellClasses.push('un-selectable');\r\n        }\r\n\r\n        if (this.props.day.isToday) {\r\n            dayClasses.push('todays-date');\r\n        }\r\n\r\n        if (this.props.day.isSelected && this.props.day.isSelectable) {\r\n            dayClasses.push('selected-date');\r\n            dayClasses.push('bg-' + this.props.day.color);\r\n\r\n            if (this.props.day.isLowerLimit) {\r\n                dayClasses.push('lower-limit');\r\n            }\r\n\r\n            if (this.props.day.isUpperLimit) {\r\n                dayClasses.push('upper-limit');\r\n            }\r\n        }\r\n\r\n        const bothLimitsElement: JSX.Element =\r\n            this.props.day.isLowerLimit && this.props.day.isUpperLimit ? <span></span> : null;\r\n\r\n        return (\r\n            <td className={dayCellClasses.join(' ')} onClick={() => this.handleClick()}>\r\n                <span className={dayClasses.join(' ')}>\r\n                    {this.props.day.number}\r\n                    {bothLimitsElement}\r\n                </span>\r\n            </td>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=187.bundle.js.map