(window.webpackJsonp=window.webpackJsonp||[]).push([[754],{1842:function(r,n,t){"use strict";t.r(n),n.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\n\r\nimport {TooltipPlacement} from '../../utils/TooltipUtils';\r\nimport {Tooltip} from '../tooltip/Tooltip';\r\n\r\nexport interface ITabOwnProps {\r\n    groupId?: string;\r\n    id?: string;\r\n    title: string;\r\n    disabled?: boolean;\r\n    tooltip?: string;\r\n}\r\n\r\nexport interface ITabStateProps {\r\n    isActive: boolean;\r\n}\r\n\r\nexport interface ITabDispatchProps {\r\n    onRender: () => void;\r\n    onDestroy: () => void;\r\n    onSelect: (e: React.MouseEvent) => void;\r\n}\r\n\r\nexport interface ITabProps extends ITabOwnProps, Partial<ITabStateProps>, Partial<ITabDispatchProps> {}\r\n\r\nexport class Tab extends React.Component<ITabProps, any> {\r\n    render() {\r\n        const className = classNames('tab', {\r\n            enabled: !this.props.disabled,\r\n            disabled: this.props.disabled,\r\n            active: this.props.isActive,\r\n        });\r\n\r\n        return (\r\n            <div className={className} onClick={this.handleSelect}>\r\n                <Tooltip title={this.props.tooltip} placement={TooltipPlacement.Top}>\r\n                    {this.props.title}\r\n                </Tooltip>\r\n            </div>\r\n        );\r\n    }\r\n\r\n    componentDidMount() {\r\n        this.props.onRender?.();\r\n    }\r\n\r\n    componentWillUnmount() {\r\n        this.props.onDestroy?.();\r\n    }\r\n\r\n    private handleSelect = (e: React.MouseEvent) => {\r\n        if (!this.props.disabled) {\r\n            this.props.onSelect?.(e);\r\n        }\r\n    };\r\n}\r\n"}}]);
//# sourceMappingURL=754.bundle.js.map