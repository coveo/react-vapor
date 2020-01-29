(window.webpackJsonp=window.webpackJsonp||[]).push([[705],{1804:function(n,r,s){"use strict";s.r(r),r.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\n\r\nimport {Svg} from '../svg/Svg';\r\n\r\n/**\r\n * @deprecated Use SideNavigationHeaderProps instead\r\n */\r\nexport interface ISideNavigationHeaderProps {\r\n    title: string;\r\n    svgName?: string;\r\n    svgClass?: string;\r\n    onClick?: () => void;\r\n}\r\n\r\n/**\r\n * @deprecated Will be removed in version 5\r\n */\r\nexport class SideNavigationHeader extends React.Component<ISideNavigationHeaderProps> {\r\n    private handleClick() {\r\n        if (this.props.onClick) {\r\n            this.props.onClick();\r\n        }\r\n    }\r\n\r\n    render() {\r\n        const svgClass = classNames(\r\n            'navigation-menu-section-header-icon icon mod-lg transparency-3',\r\n            this.props.svgClass\r\n        );\r\n        const icon = this.props.svgName ? (\r\n            <Svg svgName={this.props.svgName} svgClass={svgClass} />\r\n        ) : (\r\n            <span className=\"navigation-menu-section-header-icon\" />\r\n        );\r\n        return (\r\n            <div className=\"navigation-menu-section-header text-white\" onClick={() => this.handleClick()}>\r\n                {icon}\r\n                {this.props.title}\r\n                {this.props.children}\r\n            </div>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=705.bundle.js.map