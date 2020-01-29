(window.webpackJsonp=window.webpackJsonp||[]).push([[1005],{2232:function(t,e,n){"use strict";n.r(e),n.d(e,"ItemFilterConnectedExamples",(function(){return p}));var o,r=n(1),i=n(165),a=n(476),c=n(61),l=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),s="item-filter-connected-example",p=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return l(e,t),e.prototype.componentDidMount=function(){i.a.dispatch(Object(c.c)(s,"Item")),i.a.dispatch(Object(c.c)(s+"1","Very looooooooooooong item")),i.a.dispatch(Object(c.c)(s+"2","Very looooooooooooong item"))},e.prototype.render=function(){return r.createElement("div",{className:"mt2"},r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"Action bar with an item filter and Redux state"),r.createElement(a.b,{id:s,itemFilterLabel:"Item filter",onClearItemFilter:function(){return alert("Item filter was cleared")}})),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"Action bar with an item filter cropped on the right and with Redux state"),r.createElement(a.b,{id:s+"1",itemFilterLabel:"Item filter",itemFilterCropLength:10,onClearItemFilter:function(){return alert("Item filter was cleared")}})),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"Action bar with an item filter cropped on the left and with Redux state"),r.createElement(a.b,{id:s+"2",itemFilterLabel:"Item filter",itemFilterCropLength:-10,onClearItemFilter:function(){return alert("Item filter was cleared")}})),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"Action bar with an item filter cropped on the left with Redux state and tooltip options"),r.createElement(a.b,{id:s+"3",itemFilterLabel:"Item filter",itemTooltipProps:{title:"tooltip",placement:"top"},itemFilterCropLength:-10,onClearItemFilter:function(){return alert("Item filter was cleared")}})))},e}(r.Component)},476:function(t,e,n){"use strict";n.d(e,"a",(function(){return g})),n.d(e,"b",(function(){return C}));var o,r=n(9),i=n(1),a=n(56),c=n(0),l=n(75),s=n(513),p=n(85),u=n(58),m=n(514),f=n(61),d=n(479),h=n(483),b=n(515),v=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),y=function(){return(y=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},g=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.Actions=function(){var t,n,o,r,a=null!=(n=null===(t=e.props.actions)||void 0===t?void 0:t.filter((function(t){return!!t.primary})).map((function(t,n){var o=e.props.withReduxState?i.createElement(h.a,{action:t,parentId:e.props.id}):i.createElement(d.a,{action:t});return i.createElement("div",{className:"action primary-action",key:"primary-"+n},o)})))?n:[],l=null!=(r=null===(o=e.props.actions)||void 0===o?void 0:o.filter((function(t){return!t.primary})))?r:[],s=null;c.isEmpty(l)||(s=i.createElement(b.a,{id:e.props.id,moreLabel:e.props.moreLabel,actions:l}));var p=e.props.prompt?i.createElement(e.Prompt,null):i.createElement(i.Fragment,null,a,s);return a.length||s||e.props.prompt?i.createElement("div",{className:"coveo-table-actions"},p):null},e.Prompt=function(){var t;return(null===(t=e.props.prompt)||void 0===t?void 0:t.options)?i.createElement("div",{className:"prompt"},i.createElement(s.a,y({},e.props.prompt))):null},e.Filter=function(){return e.props.itemFilter?i.createElement(m.a,{label:e.props.itemFilterLabel,item:e.props.itemFilter,itemTooltipProps:e.props.itemTooltipProps,onClear:e.props.clearItemFilter,crop:e.props.itemFilterCropLength}):null},e}return v(e,t),e.prototype.componentDidMount=function(){var t,e;null===(e=(t=this.props).onRender)||void 0===e||e.call(t)},e.prototype.componentWillUnmount=function(){var t,e;null===(e=(t=this.props).onDestroy)||void 0===e||e.call(t)},e.prototype.render=function(){var t=r(this.defaultClasses,this.props.extraContainerClasses,{"mod-deactivate-pointer":!!this.props.isLoading,"small-actions-container":this.props.withSmallActions}),e=this.props.prefixContent?i.createElement(l.a,y({},this.props.prefixContent)):null;return i.createElement("div",{className:t,style:this.props.width?{width:this.props.width}:null},e,i.createElement(this.Filter,null),i.createElement(this.Actions,null),this.props.children)},Object.defineProperty(e.prototype,"defaultClasses",{get:function(){return r(this.props.removeDefaultContainerClasses?"":e.defaultClasses)},enumerable:!0,configurable:!0}),e.defaultProps={extraContainerClasses:[],withSmallActions:!1},e.defaultClasses=["coveo-table-actions-container","mod-cancel-header-padding","mod-border-bottom","mod-align-header"],e}(i.PureComponent),C=Object(a.b)((function(t,e){var n,o,r,i,a,l,s=c.findWhere(t.actionBars,{id:e.id}),p=c.find(t.prompts,(function(t){return t.id.indexOf(e.id)>=0})),u=c.findWhere(t.itemFilters,{id:e.id});return{withReduxState:!0,actions:(o=null===(n=s)||void 0===n?void 0:n.actions.filter((function(t){var e=t.enabled,n=t.hideDisabled;return e||!1===n})),null!=o?o:[]),isLoading:(i=null===(r=s)||void 0===r?void 0:r.isLoading,null!=i&&i),prompt:p,itemFilter:(l=null===(a=u)||void 0===a?void 0:a.item,null!=l?l:"")}}),(function(t,e){return{onRender:function(){t(Object(u.b)(e.id)),e.itemFilterLabel&&t(Object(f.b)(e.id))},onDestroy:function(){t(Object(u.d)(e.id)),t(Object(f.d)(e.id)),t(Object(p.c)(e.id))},clearItemFilter:function(){var n,o;null===(o=(n=e).onClearItemFilter)||void 0===o||o.call(n),t(Object(f.c)(e.id,""))}}}))(g)},479:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var o,r=n(1),i=n(480),a=n(482),c=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return c(e,t),e.prototype.render=function(){var t=this.props.action.link?r.createElement(i.a,{action:this.props.action}):this.props.withReduxState?r.createElement(a.b,{action:this.props.action,parentId:this.props.parentId}):r.createElement(a.a,{action:this.props.action});return r.createElement("div",null,t)},e}(r.Component)},480:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o,r=n(9),i=n(1),a=n(481),c=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),l=function(){return(l=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return c(e,t),e.prototype.render=function(){var t=r({enabled:this.props.action.enabled,"state-disabled":!this.props.action.enabled&&!this.props.action.hideDisabled,"inline-flex flex-center":!this.props.simple}),e={children:i.createElement(a.a,{action:this.props.action,simple:this.props.simple})},n=this.props.action.enabled?this.props.action.link:void 0;return this.props.action.target&&(e.target=this.props.action.enabled?this.props.action.target:void 0,e.rel="noopener noreferrer"),i.createElement("a",l({className:t,href:n,title:this.props.action.name},e))},e}(i.Component)},481:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o,r=n(1),i=n(459),a=n(82),c=n(83),l=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return l(e,t),e.prototype.render=function(){var t=this.props.action,e=t.icon,n=t.id,o=t.name,l=t.tooltipPlacement,s=t.tooltip,p=e?r.createElement(a.a,{svgName:e,className:"action-icon",svgClass:"icon fill-medium-blue"}):r.createElement(a.a,{svgName:"more",className:"action-icon action-icon-more",svgClass:"icon icon-medium fill-medium-blue"}),u=this.props.simple?o:r.createElement("span",{className:"inline-flex flex-center"},p,r.createElement("span",{className:"action-label","data-trigger":n||o},o)),m=l||i.a.Right;return s?r.createElement(c.a,{title:s,placement:m},u):r.createElement("span",null,u)},e.defaultProps={hideDisabled:!0},e}(r.Component)},482:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return m}));var o,r=n(9),i=n(1),a=n(56),c=n(46),l=n(85),s=n(481),p=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return p(e,t),e.prototype.onTriggerAction=function(){var t=this,e=this.props.action.requiresConfirmation;if(e&&this.props.onTriggerConfirm){var n=this.props.confirmLabel||this.props.action.requiresConfirmation.confirmLabel||"Are you sure?",o=this.props.action.icon;this.props.onTriggerConfirm((function(){t.props.action.trigger&&t.props.action.trigger(),t.props.onConfirm&&t.props.onConfirm()}),{icon:o,description:n,cancel:e.buttonLabels.cancel,choices:{confirm:e.buttonLabels.confirm}},e.confirmType)}else this.props.action.trigger&&(this.props.action.trigger(),this.props.onCloseDropdown&&this.props.onCloseDropdown())},e.prototype.render=function(){var t=this,e=r({enabled:this.props.action.enabled,"state-disabled":!this.props.action.enabled&&(this.props.simple||!this.props.action.hideDisabled),disabled:!this.props.action.enabled&&!this.props.simple});return i.createElement("span",{onClick:function(){return t.props.action.enabled&&t.onTriggerAction()},className:e,title:this.props.action.name},i.createElement(s.a,{action:this.props.action,simple:this.props.simple}))},e}(i.Component),m=Object(a.b)(void 0,(function(t,e){return{onTriggerConfirm:function(n,o,r){t(Object(l.b)(e.parentId,{onClick:n,userChoice:o,isOpened:!1,className:r}))},onConfirm:function(){return t(Object(l.c)(e.parentId))},onCloseDropdown:function(){return t(Object(c.c)(e.parentId))}}}))(u)},483:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var o=n(56),r=n(55),i=n(479),a=Object(o.b)((function(){return{withReduxState:!0}}),(function(){return{}}),r.c.mergeProps)(i.a)},513:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o=n(9),r=n(1),i=n(56),a=n(0),c=n(82),l=n(85),s=Object(i.b)(null,(function(t,e){return{onCancel:function(){return t(Object(l.c)(e.id))}}}))((function(t){var e,n=t.options,i=t.onCancel,l=n.userChoice.icon?r.createElement(c.a,{svgName:n.userChoice.icon,className:"prompt-icon mr1",svgClass:"icon mod-2x fill-medium-blue"}):null,s=a.map(n.userChoice.choices,(function(t){return r.createElement("button",{type:"button",className:"btn action mod-danger prompt-action enabled",onClick:n.onClick,key:t},t)})),p=n.userChoice.description?r.createElement("span",{className:"description"},n.userChoice.description):null,u=n.userChoice.cancel?r.createElement("button",{type:"button",className:"btn cancel prompt-action enabled",onClick:i},n.userChoice.cancel):null,m=o("prompt-"+(null!=(e=n.className)?e:"info"),{opened:n.isOpened});return r.createElement("span",{className:m},r.createElement("span",{className:"label-confirmation"},l,p),s,u)}))},514:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o,r=n(1),i=n(82),a=n(83),c=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),l=function(){return(l=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return c(e,t),e.prototype.render=function(){var t=this,e=this.props.item;if(this.props.crop){var n=e.length;n>Math.abs(this.props.crop)&&(e=this.props.crop>0?e.substring(0,this.props.crop)+"...":"..."+e.substring(n+this.props.crop,n))}var o=this.props.itemTooltipProps?r.createElement(a.a,l({},this.props.itemTooltipProps),r.createElement("span",{className:"item-filter-item"},e)):r.createElement("span",{className:"item-filter-item"},e);return r.createElement("div",{className:"coveo-table-actions item-filter"},r.createElement("span",{className:"item-filter-label"},this.props.label,": "),o,r.createElement("button",{className:"item-filter-clear",onClick:function(){return t.props.onClear()}},r.createElement(i.a,{svgName:"clear",svgClass:"icon fill-dark-blue"})))},e}(r.Component)},515:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var o=n(1),r=n(0),i=n(516),a=n(483),c=function(t){var e,n=t.actions,c=t.id,l=t.moreLabel,s=null,p=n.filter((function(t){return t.separator||t.enabled||!1===t.hideDisabled})).filter((function(t){return!(t.separator&&(!t.separator||!s||s.separator))&&(s=t,!0)})).filter((function(t,e,n){return e<n.length-1||!t.separator}));if(Object(r.isEmpty)(p))return null;var u=1===(null===(e=p)||void 0===e?void 0:e.length)?o.createElement(a.a,{action:p[0],parentId:c}):o.createElement(i.a,{moreLabel:l,actions:p,id:c+"_actionsDropdown"});return o.createElement("div",{className:"dropdown action primary-action"},u)}},516:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var o=n(1),r=n(517),i=n(82),a=n(519),c=function(t){var e,n=t.actions,c=t.moreLabel,l=t.id,s=null===(e=n)||void 0===e?void 0:e.map((function(t,e){var n;return o.createElement(a.a,{key:"action-"+(n=t.id,null!=n?n:e),action:t,parentId:l})})),p=[o.createElement(i.a,{key:"action-dropdown-toggle-icon",svgName:"more",className:"action-icon",svgClass:"icon icon-medium fill-medium-blue"}),o.createElement("span",{key:"action-dropdown-toggle-label",className:"action-label","data-trigger":"more"},c||"More")];return o.createElement(r.a,{toggleContent:p,dropdownItems:s,id:l})}},517:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var o=n(56),r=n(0),i=n(55),a=n(518),c=n(46),l=Object(o.b)((function(t,e){var n=r.findWhere(t.dropdowns,{id:e.id});return{isOpened:n&&n.opened}}),(function(t,e){return{onRender:function(){return t(Object(c.b)(e.id))},onDestroy:function(){return t(Object(c.d)(e.id))},onClick:function(){return t(Object(c.e)(e.id))},onDocumentClick:function(){return t(Object(c.c)(e.id))}}}),i.c.mergeProps)(a.a)},518:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var o,r=n(9),i=n(1),a=n(12),c=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.handleClick=function(){e.props.onClick&&e.props.onClick()},e.handleDocumentClick=function(t){e.props.isOpened&&(a.findDOMNode(e.dropdown).contains(t.target)||e.props.onDocumentClick())},e}return c(e,t),e.prototype.componentWillMount=function(){this.props.onRender&&this.props.onRender(),this.props.onDocumentClick&&document.addEventListener("click",this.handleDocumentClick)},e.prototype.componentWillUnmount=function(){this.props.onDocumentClick&&document.removeEventListener("click",this.handleDocumentClick),this.props.onDestroy&&this.props.onDestroy()},e.prototype.render=function(){var t=this,e=r("dropdown",{open:this.props.isOpened},this.props.className);return i.createElement("div",{className:e,ref:function(e){return t.dropdown=e}},i.createElement("span",{className:"dropdown-toggle inline-flex flex-center",onClick:function(){return t.handleClick()}},this.props.toggleContent),i.createElement("ul",{className:"dropdown-menu normal-height"},this.props.dropdownItems))},e}(i.Component)},519:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var o=n(1),r=n(480),i=n(482),a=function(t){var e=t.parentId,n=t.action;return n.separator?o.createElement("li",{className:"divider"}):n.link?o.createElement("li",null,o.createElement(r.a,{action:n,simple:!0})):o.createElement("li",null,o.createElement(i.b,{action:n,simple:!0,parentId:e}))}}}]);
//# sourceMappingURL=1005.bundle.js.map