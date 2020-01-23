(window.webpackJsonp=window.webpackJsonp||[]).push([[1001],{2286:function(e,t,r){"use strict";r.r(t),r.d(t,"MultiStepBarExamples",(function(){return s}));var a,n=r(0),o=r(760),i=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),l=function(){return(l=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){var e=[{state:o.b.Done,tooltip:{title:"This step is done!",placement:"bottom",footer:"Here is some information about it!"}},{state:o.b.Warning,tooltip:{title:"This one finished with a warning",placement:"bottom",footer:"Better check your logs!"}},{state:o.b.Error,tooltip:{title:"An error occurred here",placement:"bottom",footer:"Somehow the execution continued"}},{state:o.b.Doing,tooltip:{title:"This step is currently in progress",placement:"bottom",footer:"Display some progress information here"}},{state:o.b.ToDo,tooltip:{title:"This step is not yet done",placement:"bottom",footer:"Currently waiting for the previous step"}}],t={steps:e.map((function(e,t){return l(l({},e),{text:"Step "+t})}))};return n.createElement("div",{className:"mt2"},n.createElement("div",{className:"form-group"},n.createElement("label",{className:"form-control-label"},"Multi Step Bar"),n.createElement(o.a,l({},t))),n.createElement("div",{className:"form-group"},n.createElement("label",{className:"form-control-label"},"Multi Step Bar with in-progress shine animation"),n.createElement(o.a,l({},t,{inProgressAnimation:"shine"}))),n.createElement("div",{className:"form-group"},n.createElement("label",{className:"form-control-label"},"Small Multi Step Bar with flare animation"),n.createElement(o.a,l({},t,{steps:e,small:!0,barAnimation:"flare"}))),n.createElement("div",{className:"form-group"},n.createElement("label",{className:"form-control-label"},"Small Multi Step Bar with in progress slide animation"),n.createElement(o.a,l({},t,{steps:e,small:!0,inProgressAnimation:"slide"}))),n.createElement("div",{className:"form-group"},n.createElement("label",{className:"form-control-label"},"Multi Step Bar with separator"),n.createElement(o.a,l({},t,{separator:!0}))))},t}(n.Component)},760:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return m}));var a,n=r(2),o=r(0),i=r(40),l=function(){return(l=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};!function(e){e.ToDo="to-do",e.Doing="doing",e.Done="done",e.Error="error",e.Warning="warning"}(a||(a={}));var s=function(e){return e.text?o.createElement("div",{className:"multi-step-bar-text"},e.text):null},m=function(e){var t=e.className,r=e.small,a=e.inProgressAnimation,m=e.barAnimation,c=e.separator,p=e.steps,u=n(t,{"multi-step-bar-container":!0,"mod-multi-step-bar-in-progress-sliding-animation":"slide"===a,"mod-multi-step-bar-in-progress-shine-animation":"shine"===a,"mod-multi-step-bar-flare-animation":"flare"===m,"mod-multi-step-bar-separated":c,"mod-small":r}),f=p.map(s);return o.createElement("div",{className:u},o.createElement("div",{className:"multi-step-bar-backdrop-container"},p.map((function(e,t){var r=n("multi-step-bar","multi-step-bar-"+e.state);return o.createElement("div",{key:"multi-step-bar-backdrop-"+t,className:r},f[t])}))),o.createElement("div",{className:"multi-step-bar-content-container"},p.map((function(e,t){var r="multi-step-bar-"+t,a=n("multi-step-bar");return e.tooltip&&e.tooltip.title?o.createElement(i.a,l({},e.tooltip,{key:r,className:a}),f[t]):o.createElement("span",{key:r,className:a},f[t])}))))}}}]);
//# sourceMappingURL=1001.bundle.js.map