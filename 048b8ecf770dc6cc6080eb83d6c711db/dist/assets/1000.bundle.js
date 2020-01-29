(window.webpackJsonp=window.webpackJsonp||[]).push([[1e3],{1021:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(0),r={getIsDirty:function(e,t){return o.contains(e.dirtyComponents||[],t.id)}}},2346:function(e,t,n){"use strict";n.r(t),n.d(t,"ModalWindowExamples",(function(){return g}));var o=n(791),r=n(1),i=n(56),a=n(0),l=n(208),s=n(1021),p=n(449),c=n(468),u=n(456),d=n(82),m=n(83),f=n(771),h=n(36),y=n(633),v=n(772),g=function(){return r.createElement(u.a,{title:"Modal Window Examples"},r.createElement(C,null),r.createElement(O,{id:"UnsavedChangeModal"}),r.createElement(w,null))};g.title="Modal Window",g.description="Modal windows appear in front of the main page and disable it while they are visible. They act as a zoom in on an element of the main page that allows additionnal interaction or configuration. They make possible for users to focus on their content whilst avoiding leaving the context from which they have been called.";var b=function(e){return{open:function(t){return e(Object(h.e)(t))},close:function(t){return e(Object(h.c)(t))},toggleIsDirty:function(t,n){return e(l.b.toggle(t,n))}}},C=Object(i.b)(null,b)((function(e){var t=e.open,n=e.close,i=e.toggleIsDirty,a=function(e){n(e),i(e,!1)},l="Modal-Connected-#1";return r.createElement(u.a,{level:2,title:"Modals connected to the redux store"},r.createElement(u.a,{level:3,title:"A simple modal window connected"},r.createElement(p.a,{className:"btn",onClick:function(){return t(l)}},"Open Modal"),r.createElement(y.a,{id:l,title:"Modal composite",modalHeaderChildren:r.createElement(m.a,{title:"A tooltip for the title"},r.createElement(d.a,{svgName:"help",className:"icon mod-2x ml1",svgClass:"fill-orange"})),modalBodyChildren:r.createElement("div",{className:"mt2"},o({count:10})),modalFooterChildren:r.createElement(p.a,{className:"btn",onClick:function(){return a(l)}},"Close"),modalBodyClasses:["mod-header-padding","mod-form-top-bottom-padding"]})),r.createElement(u.a,{level:3,title:"A modal with additionnal configuration props"},r.createElement(p.a,{className:"btn",onClick:function(){return t("example-4")}},"Open Modal"),r.createElement(y.a,{id:"example-4",title:"Modal with addtional ReactModal props",classes:["mod-fade-in-scale"],modalBodyChildren:"This modal only closes by using the close button or the X.",modalFooterChildren:r.createElement(p.a,{className:"btn",onClick:function(){return a("example-4")}},"Close"),modalBodyClasses:["mod-header-padding","mod-form-top-bottom-padding"],docLink:{url:"https://www.coveo.com",tooltip:{title:"Go to coveo.com"}},shouldCloseOnEsc:!1,shouldCloseOnOverlayClick:!1,onAfterOpen:function(){return alert("The modal content has mounted and is ready to open.")},closeCallback:function(){return alert("The modal has closed.")}})))})),O=Object(i.b)((function(e,t){return{isDirty:s.a.getIsDirty(e,{id:t.id})}}),b)((function(e){var t=e.id,n=e.close,i=e.open,l=e.toggleIsDirty,s=e.isDirty,d=function(){n(t),l(t,!1)};return r.createElement(u.a,{level:3,title:"A modal implemented with the <UnsavedChangesModalProvider/>"},r.createElement(p.a,{className:"btn",onClick:function(){return i(t)}},"Open Modal"),r.createElement(v.a,{isDirty:s},(function(e){var n=e.promptBefore;return r.createElement(y.a,{id:t,title:"A modal with a dirty change discard prevention",classes:["mod-fade-in-scale"],modalBodyChildren:r.createElement("div",{className:"mt2"},r.createElement("div",{className:"mb2"},r.createElement(c.a,{id:"input",labelTitle:"Try to close me with dirty changes.",onChange:function(e){return l(t,!a.isEmpty(e))}})),o({count:10})),modalFooterChildren:r.createElement(p.a,{className:"btn",onClick:function(){return n((function(){return d()}))&&d()}},"Close"),validateShouldNavigate:function(){return n((function(){return d()}))},modalBodyClasses:["mod-header-padding","mod-form-top-bottom-padding"],docLink:{url:"https://www.coveo.com",tooltip:{title:"Go to coveo.com"}}})})))})),w=Object(i.b)(null,b)((function(e){var t=e.open;return r.createElement(u.a,{level:3,title:"A loading modal"},r.createElement(p.a,{className:"btn",onClick:function(){return t("Loading-modal-example")}},"Open Modal"),r.createElement(f.a,{id:"Loading-modal-example",title:"my loading title",openOnMount:!1}))}))},449:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var o,r=n(9),i=n(1),a=n(0),l=n(83),s=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),p=function(){return(p=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},c=["small","classes","enabled","name","link","target","primary","tooltip","tooltipPlacement","hideDisabled","onClick"],u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s(t,e),t.prototype.onClick=function(){this.props.onClick&&this.props.enabled&&this.props.onClick()},t.prototype.getTemplate=function(e){var t,n=this,o=p(p({},a.omit(this.props,c)),{disabled:!this.props.enabled,onClick:function(){return n.onClick()}});return this.props.link?(o=a.extend(o,{target:this.props.target,rel:"noopener noreferrer",href:this.props.link}),t=i.createElement("a",p({className:e+" btn-container"},o),this.props.name,this.props.children)):t=i.createElement("button",p({className:e},o),this.props.name,this.props.children),a.isEmpty(this.props.tooltip)?t:i.createElement(l.a,{title:this.props.tooltip,placement:this.props.tooltipPlacement,className:"btn-container"},t)},t.prototype.getClasses=function(){return r("btn",{"mod-primary":this.props.primary,"mod-small":this.props.small,"state-disabled disabled":!this.props.enabled,"text-medium-grey":!this.props.primary&&!this.props.enabled},this.props.classes)},t.prototype.render=function(){return this.getTemplate(this.getClasses())},t.defaultProps={enabled:!0,name:"",tooltip:"",primary:!1,small:!1,tooltipPlacement:"right",target:""},t}(i.Component)},456:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n(9),r=n(1),i=function(){return(i=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},a=function(e){var t=e.children,n=e.title,a=e.description,l=e.className,s=e.mods,p=e.level,c=void 0===p?1:p,u={className:"text-medium-blue mb1",children:n},d="h"+(c+1);return r.createElement("fieldset",{className:o(l,s,"level-"+c+" form-group mod-padding-children")},n&&r.createElement(d,i({},u)),a&&r.createElement("p",{className:"description"},a),t)}},468:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var o,r=n(9),i=n(1),a=n(0),l=n(470),s=n(459),p=n(83),c=n(471),u=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),d=function(){return(d=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},m=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var o,r,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(o=i.next()).done;)a.push(o.value)}catch(e){r={error:e}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}return a},f=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(m(arguments[t]));return e},h=["number","text","password"],y=["id","classes","innerInputClasses","validate","labelTitle","labelProps","validateOnChange","disabledOnMount","validateOnMount","disabledTooltip","minimum","maximum","onBlur","defaultValue","valid","indeterminate","onDestroy","onRender","onChange","onClick"],v=function(e){function t(t,n){var o=e.call(this,t,n)||this;return o.state={valid:o.props.valid},o}return u(t,e),t.prototype.componentWillMount=function(){if(this.props.onRender){var e=this.props.validateOnMount&&this.props.validate&&this.props.validate(this.props.defaultValue||"");this.props.onRender(this.props.defaultValue,e,this.props.disabledOnMount)}},t.prototype.componentWillUnmount=function(){this.props.onDestroy&&this.props.onDestroy()},t.prototype.componentDidUpdate=function(e){this.props.valid!==e.valid&&this.validate(),e.value!==this.props.value&&this.innerInput&&(this.innerInput.value=this.props.value)},t.prototype.reset=function(){this.innerInput.value=""},t.prototype.getInnerValue=function(){return this.innerInput&&this.innerInput.value||""},t.prototype.validate=function(){this.setState({valid:this.props.valid&&!(this.props.validate&&!this.props.validate(this.getInnerValue()))})},t.prototype.handleBlur=function(){this.props.onBlur&&this.props.onBlur(this.getInnerValue())},t.prototype.handleChange=function(){if(this.props.onChange){var e=this.props.validateOnChange&&this.props.validate&&this.props.validate(this.getInnerValue());this.props.onChange(this.getInnerValue(),e)}},t.prototype.handleClick=function(e){this.props.onClick&&this.props.onClick(e)},t.prototype.handleKeyUp=function(e){this.props.onKeyUp&&this.props.onKeyUp(e)},t.prototype.getLabel=function(){var e=this.props,t=e.labelProps,n=e.labelTitle;return"string"==typeof n?n||this.props.validate?i.createElement(c.a,d({key:this.props.id+"label",htmlFor:this.props.id},t),n):null:n},t.prototype.render=function(){var e=this,t=r("input-wrapper validate",{"input-field":Object(a.contains)(h,this.props.type)},this.props.classes),n=r({invalid:!this.state.valid&&Object(a.contains)(h,this.props.type)},this.props.innerInputClasses),o=[i.createElement("input",d({key:this.props.id,id:this.props.id,className:n,defaultValue:Object(a.isUndefined)(this.props.value)?this.props.defaultValue:this.props.value,ref:function(t){return e.innerInput=t},onBlur:function(){return e.handleBlur()},onChange:function(){return e.handleChange()},onKeyUp:function(t){return e.handleKeyUp(t)},min:this.props.minimum,max:this.props.maximum},a.omit(this.props,f(l.a.input,y)))),this.getLabel(),this.props.children];return this.props.disabled&&this.props.disabledTooltip?i.createElement("div",{className:t,onClick:function(t){return e.handleClick(t)}},i.createElement(p.a,{title:this.props.disabledTooltip,placement:s.a.Right},o)):i.createElement("div",{className:t,onClick:function(t){return e.handleClick(t)}},o)},t.defaultProps={id:Object(a.uniqueId)("input"),type:"text",valid:!0,labelTitle:"",required:!0},t}(i.Component)},470:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var o,r,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(o=i.next()).done;)a.push(o.value)}catch(e){r={error:e}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}return a},r=["children","dangerouslySetInnerHTML"],i={internal:r,input:function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(o(arguments[t]));return e}(r,["defaultValue","onClick","onChange","onBlur","value","valid"])}},471:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var o,r=n(9),i=n(1),a=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=function(){return(l=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},s=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n},p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.render=function(){var e=r(this.props.classes),t=this.props,n=t.validMessage,o=t.invalidMessage,a=t.children,p=s(t,["validMessage","invalidMessage","children"]);return i.createElement("label",l({className:e,"data-valid-message":n,"data-invalid-message":o},p),a)},t}(i.Component)},526:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o,r=n(9),i=n(1),a=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.render=function(){var e=r("modal-footer",this.props.classes);return i.createElement("div",{className:e},this.props.children)},t}(i.Component)},539:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var o,r=n(9),i=n(1),a=n(0),l=n(82),s=n(589),p=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(){return(c=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return p(t,e),t.prototype.componentDidMount=function(){this.canClose=this.props.lastOpened},t.prototype.componentDidUpdate=function(){var e=this;this.canClose=!1,a.defer((function(){return e.canClose=e.props.lastOpened}))},t.prototype.close=function(){var e,t;this.canClose&&(null===(t=(e=this.props).onClose)||void 0===t||t.call(e))},t.prototype.render=function(){var e=this,t=r("modal-header",this.props.classes),n=this.props.docLink?c({svg:{svgName:"help",svgClass:"fill-orange icon mod-20"}},this.props.docLink):null,o=null;return this.props.onClose&&(o=i.createElement("span",{className:"small-close",onClick:function(){e.close()}},i.createElement(l.a,{svgName:"close",className:"icon mod-lg fill-pure-white"}))),i.createElement("header",{className:t},i.createElement("div",{className:"truncate"},i.createElement(s.a,{text:this.props.title,documentationLink:n,classes:["regular"]})),this.props.children,o)},t.defaultProps={lastOpened:!0},t}(i.Component)},555:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var o,r=n(9),i=n(1),a=n(209),l=n(0),s=n(33),p=n(580),c=n(526),u=n(539),d=n(667),m=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),f=function(){return(f=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},h=["modalHeaderChildren","modalHeaderClasses","modalBodyChildren","modalBodyClasses","modalFooterChildren","modalFooterClasses","isPrompt","validateShouldNavigate","id","classes","closeCallback","closeTimeout","openOnMount","contentRef","title","docLink","displayFor","layer","withReduxState","isOpened","onDestroy","onRender","onClose"],y=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onRequestClose=function(e){var n,o,r,i;e.preventDefault(),e.stopPropagation(),t.props.validateShouldNavigate?t.props.validateShouldNavigate(t.props.isDirty)&&(null===(o=(n=t.props).onClose)||void 0===o||o.call(n)):null===(i=(r=t.props).onClose)||void 0===i||i.call(r)},t.getModalBody=function(){return t.props.modalBodyChildren&&i.createElement(p.a,{key:"modal-body",classes:t.props.modalBodyClasses},t.props.modalBodyChildren)},t.getModalFooter=function(){return t.props.modalFooterChildren&&i.createElement(c.a,{key:"modal-footer",classes:t.props.modalFooterClasses},t.props.modalFooterChildren)},t.getParent=function(){return document.querySelector(s.a.MODAL_ROOT)},t}return m(t,e),t.prototype.render=function(){var e,t=l.omit(this.props,h);return i.createElement(a,f({key:this.props.id,isOpen:this.props.isOpened,className:{base:r("modal-container --react-modal",this.props.classes),afterOpen:"opened",beforeClose:"closed"},overlayClassName:{base:r("modal-backdrop --react-modal",(e={},e["layer-"+this.props.layer]=this.props.layer>0,e)),afterOpen:"opened",beforeClose:"clear"},onRequestClose:this.onRequestClose,closeTimeoutMS:this.props.closeTimeout,contentRef:this.props.contentRef,parentSelector:this.getParent,onAfterClose:this.props.closeCallback},t),i.createElement("div",{className:"modal-content",id:this.props.id},this.getModalHeader(),this.getModalBody(),this.getModalFooter()))},t.prototype.componentDidMount=function(){var e,t;null===(t=(e=this.props).onRender)||void 0===t||t.call(e)},t.prototype.componentWillUnmount=function(){var e,t;null===(t=(e=this.props).onDestroy)||void 0===t||t.call(e)},t.prototype.getModalHeader=function(){var e={id:this.props.id,title:this.props.title,classes:this.props.modalHeaderClasses,docLink:this.props.docLink};return this.props.title?this.props.withReduxState?i.createElement(d.a,f({key:"modal-header"},e),this.props.modalHeaderChildren):i.createElement(u.a,f({key:"modal-header"},e,{onClose:this.props.onClose}),this.props.modalHeaderChildren):null},t.defaultProps={id:l.uniqueId("modal"),closeTimeout:s.a.MODAL_TIMEOUT},t}(i.PureComponent)},580:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o,r=n(9),i=n(1),a=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.render=function(){var e=r("modal-body relative",this.props.classes);return i.createElement("div",{className:e},this.props.children)},t}(i.Component)},633:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n(56),r=n(55),i=n(36),a=n(555),l=Object(o.b)((function(e,t){return{withReduxState:!0,isOpened:e.modals&&e.modals.some((function(e){return e.id===t.id&&e.isOpened})),layer:e.openModals?e.openModals.indexOf(t.id)+1:0}}),(function(e,t){return{onRender:function(){return e(Object(i.b)(t.id,t.openOnMount))},onDestroy:function(){return e(Object(i.f)(t.id))},onClose:function(){return e(Object(i.c)(t.id))}}}),r.c.mergeProps)(a.a)},667:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n(56),r=n(55),i=n(36),a=n(539),l=Object(o.b)(void 0,(function(e,t){return{onClose:function(){return e(Object(i.c)(t.id))}}}),r.c.mergeProps)(a.a)},771:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n(1),r=n(143),i=n(633),a=function(e){return o.createElement(i.a,{id:e.id,classes:"mod-prompt",modalBodyChildren:o.createElement("div",{className:"loading-prompt"},e.title?o.createElement("div",null,e.title):null,o.createElement(r.a,{fullContent:!0})),openOnMount:e.openOnMount,isPrompt:!0})};a.defaultProps={openOnMount:!0}},772:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(1),r=n(449),i=n(555),a=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var o,r,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(o=i.next()).done;)a.push(o.value)}catch(e){r={error:e}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}return a},l=["mod-prompt","mod-fade-in-scale"],s=function(e){var t=e.isDirty,n=e.children,s=e.modalTitle,p=void 0===s?"Unsaved Changes":s,c=e.className,u=void 0===c?l:c,d=e.unsavedChangesDescription,m=void 0===d?"Are you sure you want to leave this page without saving? All unsaved changes will be lost.":d,f=e.confirmButtonText,h=void 0===f?"Exit without applying changes":f,y=a(o.useState(!1),2),v=y[0],g=y[1],b=a(o.useState(null),2),C=b[0],O=b[1],w=function(){g(!1)};return o.createElement(o.Fragment,null,n({promptBefore:function(e){return!t||(g(!0),O((function(){return function(){e(),w()}})),!1)}}),o.createElement(i.a,{title:p,classes:u,modalHeaderClasses:["mod-confirmation"],modalBodyClasses:["mod-header-padding","mod-form-top-bottom-padding"],modalBodyChildren:o.createElement("div",null,m),modalFooterChildren:o.createElement(o.Fragment,null,o.createElement(r.a,{small:!0,name:h,onClick:C,primary:!0}),o.createElement(r.a,{small:!0,autoFocus:!0,name:"Cancel",onClick:w})),isOpen:v,onClose:w}))}},791:function(e,t,n){(function(t){function o(e){return-1===e.indexOf("s",e.length-1)?e+"s":e}e.exports=function(){var r=arguments.length?arguments[0]:{},i=r.count||1,a=r.units||"sentences",l=r.sentenceLowerBound||5,s=r.sentenceUpperBound||15,p=r.paragraphLowerBound||3,c=r.paragraphUpperBound||7,u=r.format||"plain",d=r.words||n(792).words,m=r.random||Math.random,f=r.suffix;if(!f){var h=e.exports,y="undefined"!=typeof product&&"ReactNative"===product.navigator,v=void 0!==t&&"win32"===t.platform;f=!y&&h&&v?"\r\n":"\n"}function g(e,t){return Math.floor(m()*(t-e+1)+e)}function b(e){return e[g(0,e.length-1)]}function C(e,t,n){for(var o="",r={min:0,max:g(t,n)};r.min<r.max;)o+=" "+b(e),r.min++;return o.length&&(o=(o=o.slice(1)).charAt(0).toUpperCase()+o.slice(1)),o}function O(e,t,n,o,r){for(var i="",a={min:0,max:g(t,n)};a.min<a.max;)i+=". "+C(e,o,r),a.min++;return i.length&&(i=i.slice(2),i+="."),i}a=o(a.toLowerCase());var w,E,_={min:0,max:i},k="";for("html"===u&&(w="<p>",E="</p>");_.min<_.max;){switch(a.toLowerCase()){case"words":k+=" "+b(d);break;case"sentences":k+=". "+C(d,l,s);break;case"paragraphs":var x=O(d,p,c,l,s);"html"===u?(x=w+x+E,_.min<_.max-1&&(x+=f)):_.min<_.max-1&&(x+=f+f),k+=x}_.min++}if(k.length){var M=0;0===k.indexOf(". ")?M=2:0!==k.indexOf(".")&&0!==k.indexOf(" ")||(M=1),k=k.slice(M),"sentences"===a&&(k+=".")}return k}}).call(this,n(823))},792:function(e,t){e.exports={words:["ad","adipisicing","aliqua","aliquip","amet","anim","aute","cillum","commodo","consectetur","consequat","culpa","cupidatat","deserunt","do","dolor","dolore","duis","ea","eiusmod","elit","enim","esse","est","et","eu","ex","excepteur","exercitation","fugiat","id","in","incididunt","ipsum","irure","labore","laboris","laborum","Lorem","magna","minim","mollit","nisi","non","nostrud","nulla","occaecat","officia","pariatur","proident","qui","quis","reprehenderit","sint","sit","sunt","tempor","ullamco","ut","velit","veniam","voluptate"]}}}]);
//# sourceMappingURL=1000.bundle.js.map