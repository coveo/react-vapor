(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{1223:function(r,t,o){"use strict";o.r(t),t.default="import * as React from 'react';\r\nimport {connect} from 'react-redux';\r\nimport {ReduxUtils} from '../../utils/ReduxUtils';\r\nimport {IPrimaryActionProps, IPrimaryActionStateProps, PrimaryAction} from './PrimaryAction';\r\n\r\nconst mapStateToProps = (): IPrimaryActionStateProps => ({\r\n    withReduxState: true,\r\n});\r\n\r\nconst mapDispatchToProps = () => ({});\r\n\r\nexport const PrimaryActionConnected: React.ComponentClass<IPrimaryActionProps> = connect(\r\n    mapStateToProps,\r\n    mapDispatchToProps,\r\n    ReduxUtils.mergeProps\r\n)(PrimaryAction);\r\n"}}]);
//# sourceMappingURL=123.bundle.js.map