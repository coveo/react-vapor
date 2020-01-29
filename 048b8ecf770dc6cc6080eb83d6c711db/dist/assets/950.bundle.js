(window.webpackJsonp=window.webpackJsonp||[]).push([[950],{2046:function(e,n,r){"use strict";r.r(n),n.default="import * as React from 'react';\r\n\r\nexport interface WithServerSideProcessingProps {\r\n    isServer?: boolean;\r\n}\r\n\r\nexport function withServerSideProcessing<T extends object>(\r\n    Component: React.ComponentType<T>\r\n): React.ComponentType<T & WithServerSideProcessingProps> {\r\n    const WrappedComponent: React.FunctionComponent<T> = (props) => <Component {...props} isServer />;\r\n    WrappedComponent.displayName = `withServerSideProcessing(${Component.displayName})`;\r\n    return WrappedComponent;\r\n}\r\n"}}]);
//# sourceMappingURL=950.bundle.js.map