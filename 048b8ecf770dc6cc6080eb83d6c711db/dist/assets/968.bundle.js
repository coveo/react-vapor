(window.webpackJsonp=window.webpackJsonp||[]).push([[968],{2064:function(p,r,n){"use strict";n.r(r),r.default="import * as _ from 'underscore';\r\n\r\nexport type ConfigSupplier<C = {}> = C | ((...args: any[]) => C);\r\n\r\nexport const HocUtils = {\r\n    supplyConfig: <C>(supplier: ConfigSupplier<C>): C => (_.isFunction(supplier) ? supplier() : supplier),\r\n};\r\n"}}]);
//# sourceMappingURL=968.bundle.js.map