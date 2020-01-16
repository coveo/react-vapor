(window.webpackJsonp=window.webpackJsonp||[]).push([[976],{2192:function(e,t,n){"use strict";n.r(t),n.d(t,"BlankSlateExample",(function(){return i}));var r,o=n(0),a=n(665),l=n(184),s=n(743),c=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.render=function(){return o.createElement("div",{className:"mt2"},o.createElement("div",{className:"form-group"},o.createElement("label",{className:"form-control-label"},"Default BlankSlate"),o.createElement(l.a,null)),o.createElement("div",{className:"form-group"},o.createElement("label",{className:"form-control-label"},"BlankSlate with title"),o.createElement(l.a,{title:"Title test"})),o.createElement("div",{className:"form-group"},o.createElement("label",{className:"form-control-label"},"BlankSlate with title and description"),o.createElement(l.a,{title:"Title test",description:"description test"})),o.createElement("div",{className:"form-group"},o.createElement("label",{className:"form-control-label"},"BlankSlate with title and description with a link"),o.createElement(l.a,{title:"Title test",description:o.createElement("span",null,"This is a description with a link to ",o.createElement("a",{href:"https//www.google.com"},"this website"))})),o.createElement("div",{className:"form-group"},o.createElement("label",{className:"form-control-label"},"BlankSlate to fit in a modal"),o.createElement(l.a,{title:"Title test",description:"Description test",withModal:!0})),o.createElement("div",{className:"form-group"},o.createElement("label",{className:"form-control-label"},"BlankSlate with a button"),o.createElement(l.a,{title:"Title test",buttons:[{name:"button",primary:!0,enabled:!0}]})),o.createElement("div",{className:"form-group"},o.createElement("label",{className:"form-control-label"},"BlankSlate with two button with one disabled"),o.createElement(l.a,{title:"Title test",buttons:[{name:"button 1",primary:!0,enabled:!0},{name:"button 2",enabled:!1,link:"link"}]})),o.createElement("div",{className:"form-group"},o.createElement("label",{className:"form-control-label"},"BlankSlate with an icon"),o.createElement(l.a,{title:"Title test",description:"description test",svgName:"tips",svgClass:"fill-orange"})),o.createElement("div",{className:"form-group"},o.createElement("label",{className:"form-control-label"},"BlankSlate in error"),o.createElement(s.a,{title:"Unable to retrieve X",description:"Super clear error message localized to ensure a good comprehension about the current error"})),o.createElement("div",{className:"form-group"},o.createElement("label",{className:"form-control-label"},"BlankSlate for a table row"),o.createElement("table",{className:"table"},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"Firstname"),o.createElement("th",null,"Lastname"),o.createElement("th",null,"Age"))),o.createElement("tbody",null,o.createElement(s.b,{title:"Title test",description:"description test",svgName:"tips",svgClass:"fill-orange"})))),o.createElement("div",{className:"form-group"},o.createElement("label",{className:"form-control-label"},"BlankSlate for a table in error"),o.createElement("table",{className:"table"},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"Firstname"),o.createElement("th",null,"Lastname"),o.createElement("th",null,"Age"))),o.createElement("tbody",null,o.createElement(s.c,{title:"Unable to retrieve X",description:"Super clear error message localized to ensure a good comprehension about the current error"})))),o.createElement("div",{className:"form-group"},o.createElement("label",{className:"form-control-label"},"BlankSlate for a table in error"),o.createElement("table",{className:"table"},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"Firstname"),o.createElement("th",null,"Lastname"),o.createElement("th",null,"Age"))),o.createElement("tbody",null,o.createElement(s.c,{title:"Unable to retrieve X",description:"Super clear error message localized to ensure a good comprehension about the current error",additionalSection:o.createElement(a.a,{id:"refresh",delay:10,callback:function(e){return setTimeout(e,2e3)},renderCount:function(e){return o.createElement("span",{className:"text-black small-text"},"Auto refresh in ",e," seconds")},button:{name:"Refresh",enabled:!0},buttonContainerProps:{className:"mb2"}})})))))},t}(o.Component)},590:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r,o=n(0),a=n(7),l=n(46),s=n(103),c=n(187),i=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={count:t.props.delay},t}return i(t,e),Object.defineProperty(t.prototype,"isInProgress",{get:function(){return 0===this.state.count&&this.props.status===c.a.inProgress},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isStopped",{get:function(){return this.props.status===c.a.stopped},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isStarted",{get:function(){return this.props.status===c.a.started},enumerable:!0,configurable:!0}),t.prototype.stopInterval=function(){clearInterval(this.activeInterval)},t.prototype.startInterval=function(){var e=this;this.activeInterval=window.setInterval((function(){e.setState((function(e){return{count:e.count-1}}))}),l.a.REFRESH_CALLBACK_INTERVAL_MS),this.props.inProgress()},t.prototype.componentDidMount=function(){this.startInterval()},t.prototype.componentDidUpdate=function(e,t){this.isStarted?(this.stopInterval(),this.setState({count:this.props.delay}),this.startInterval()):this.isStopped&&this.stopInterval()},t.prototype.componentWillUnmount=function(){this.stopInterval()},t.prototype.render=function(){var e,t;return this.isInProgress&&(this.stopInterval(),this.props.stop(),null===(t=(e=this.props).callback)||void 0===t||t.call(e,this.props.start)),this.props.renderCount(this.state.count)},t.defaultProps={delay:10,renderCount:function(e){return o.createElement("span",null,"Auto refresh in ",e," seconds")}},t}(o.PureComponent),p=Object(a.b)((function(e,t){return{status:c.b.getRefreshStatus(e,{id:t.id})}}),(function(e,t){return{start:function(){return e(s.a.start(t.id))},stop:function(){return e(s.a.stop(t.id))},inProgress:function(){return e(s.a.inProgress(t.id))}}}))(u)},665:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(0),o=n(7),a=n(94),l=n(103),s=n(590),c=n(187),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},p=function(e){return e!==c.a.stopped},m=Object(o.b)((function(e,t){return{status:c.b.getRefreshStatus(e,{id:t.id})}}),(function(e,t){return{start:function(){return e(l.a.start(t.id))},stop:function(){return e(l.a.stop(t.id))}}}))((function(e){var t=e.button,n=e.buttonContainerProps,o=e.status,l=e.start,c=e.stop,m=u(e,["button","buttonContainerProps","status","start","stop"]);return r.createElement(r.Fragment,null,r.createElement("div",i({},n||{}),r.createElement(a.a,i({},t,{onClick:function(){var e,t;c(),null===(t=(e=m).callback)||void 0===t||t.call(e,l)},enabled:p(o)}))),r.createElement(s.a,i({},m)))}))},666:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r,o=n(93),a=n(0),l=n(13),s=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},i=function(e){return function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return s(n,t),n.prototype.render=function(){return a.createElement(e,c({},this.props,{title:a.createElement("div",{className:"text-orange-8 flex center-align"},a.createElement(l.a,{svgName:o.svg.info.name,className:"icon mr1 fill-orange-8 flex center-align"}),this.props.title),description:a.createElement("span",{className:"text-black semibold"},this.props.description),classes:["border-color-orange-8 mod-error"]}),this.props.children)},n}(a.PureComponent)}},667:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r,o=n(0),a=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},c=function(e){return function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return a(n,t),n.prototype.render=function(){var t=this.props,n=t.numberOfColumn,r=s(t,["numberOfColumn"]);return o.createElement("tr",{className:"blankslate-row no-hover"},o.createElement("td",{colSpan:n},o.createElement(e,l({},r),this.props.children)))},n.defaultProps={numberOfColumn:20},n}(o.PureComponent)}},743:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(1),o=n(184),a=n(666),l=n(667),s=r.compose(l.a)(o.a),c=r.compose(l.a,a.a)(o.a),i=r.compose(a.a)(o.a)}}]);
//# sourceMappingURL=976.bundle.js.map