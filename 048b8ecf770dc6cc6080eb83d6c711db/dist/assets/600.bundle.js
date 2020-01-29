(window.webpackJsonp=window.webpackJsonp||[]).push([[600],{1704:function(n,r,t){"use strict";t.r(r),r.default="import * as React from 'react';\r\n\r\nexport interface IOption {\r\n    label: string;\r\n    value: () => string;\r\n    [key: string]: any;\r\n}\r\n\r\nexport interface IOptionProps extends React.ClassAttributes<Option> {\r\n    option: IOption;\r\n    isActive: boolean;\r\n    onClick: (value: string, label: string) => void;\r\n}\r\n\r\nexport class Option extends React.Component<IOptionProps, any> {\r\n    render() {\r\n        const buttonClass = this.props.isActive ? 'active' : '';\r\n\r\n        return (\r\n            <button\r\n                type=\"button\"\r\n                className={buttonClass}\r\n                onClick={() => this.props.onClick(this.props.option.value(), this.props.option.label)}\r\n            >\r\n                {this.props.option.label}\r\n            </button>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=600.bundle.js.map