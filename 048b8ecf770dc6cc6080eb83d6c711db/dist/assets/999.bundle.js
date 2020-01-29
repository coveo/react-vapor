(window.webpackJsonp=window.webpackJsonp||[]).push([[999],{2495:function(e,t,n){"use strict";n.r(t);var r,o=n(106),a=n(1),i=n(0),l=n(467),c=n(544),s=n(82),p=n(769),u=n(770),d=n(771),f=n(715),m=n(449),h=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),y=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r.state={id:l.a.generate(),data:[{name:"Pear",displayName:"Paris"}]},r}return h(t,e),t.prototype.render=function(){var e=this;return a.createElement(a.Fragment,null,a.createElement("div",{className:"my2"},a.createElement(m.a,{name:"Update initial data sent to the multiline box",onClick:function(){e.setState({data:[{name:"Banana",displayName:"Bahamas"},{name:"Tomato",displayName:"Tacoma"}]})}})),a.createElement(f.a,{id:this.state.id,data:this.state.data,renderBody:function(e,t){return i.map(e,(function(e){return a.createElement("div",{key:e.id},a.createElement(c.a,{id:e.id+"1",classes:"mt0 inline-block mx1",defaultValue:e.props.name,validate:function(t){return e.props.name===t},validateOnChange:!0,onChange:function(n){""!==n&&e.isLast&&t.addNewBox()}}),a.createElement(c.a,{id:e.id+"2",classes:"mt0 inline-block mx1",defaultValue:e.props.displayName}))}))},defaultProps:{name:"",displayName:""}}))},t}(a.Component);n.d(t,"MultilineBoxExamples",(function(){return w}));var g=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),b=function(e,t,n){return a.createElement("div",{key:t[n].id+"Container",className:"mod-border p1 flex"},e)},v=i.compose(Object(p.a)())(f.a),O=i.compose(Object(p.a)({containerNode:b}))(f.a),x=i.compose(Object(d.b)())(f.a),E=i.compose(Object(d.b)({containerNode:function(e,t){return a.createElement(a.Fragment,null,e,t({classes:[d.a,"flex-auto full-content-y"]}))}}),Object(p.a)({containerNode:function(e,t,n){return a.createElement("div",{key:t[n].id+"Container",className:"mod-border p1 flex",style:{width:"500px",height:"70px"}},e)}}))(f.a),P=i.compose(Object(d.b)({containerNode:function(e,t){return a.createElement(a.Fragment,null,e,t({classes:[d.a,"bg-light-grey full-content-y"]}))}}),Object(p.a)({containerNode:function(e,t,n){return a.createElement("div",{key:t[n].id+"Container",className:"p1 bg-light-grey"},e)}}),Object(d.b)(),Object(p.a)({containerNode:b}))(f.a),N=i.compose(Object(u.a)())(f.a),j=i.compose(Object(d.b)(),Object(u.a)(),Object(p.a)({containerNode:b}))(f.a),C=i.compose(Object(u.a)({DnDContainerProps:{draggableContainerProps:{className:"inline-flex center-align"}}}),Object(d.b)(),Object(p.a)({containerNode:b}))(f.a),_=i.compose(Object(u.a)({DnDContainerProps:{draggableContainerProps:{className:"inline-flex center-align"},icon:a.createElement(s.a,{svgName:o.svg.dragDrop.name,svgClass:"icon fill-medium-grey mod-lg"})}}),Object(d.b)(),Object(p.a)({containerNode:b}))(f.a),w=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return g(t,e),t.prototype.render=function(){return a.createElement("div",{className:"my2"},a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-control-label"},"Multiline box with initial data"),a.createElement(f.a,{id:l.a.generate(),data:[{name:"Poire",displayName:"Pear"}],renderBody:function(e,t){return i.map(e,(function(e){return a.createElement("div",{key:e.id},a.createElement(c.a,{id:e.id+"1",classes:"mt0 inline-block mx1",defaultValue:e.props.name,validate:function(t){return e.props.name===t},validateOnChange:!0,onChange:function(n){""!==n&&e.isLast&&t.addNewBox()}}),a.createElement(c.a,{id:e.id+"2",classes:"mt0 inline-block mx1",defaultValue:e.props.displayName}))}))},defaultProps:{name:"",displayName:""}})),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-control-label"},"Multiline box with initial data and a button to update data"),a.createElement(y,null)),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-control-label"},"Multiline box with a default container"),a.createElement(v,{id:l.a.generate(),data:[{name:"Poire",displayName:"Pear"}],renderBody:function(e,t){return i.map(e,(function(e){return a.createElement("div",{key:e.id},a.createElement(c.a,{id:e.id+"1",classes:"mt0 inline-block mx1",defaultValue:e.props.name,validate:function(t){return e.props.name===t},validateOnChange:!0,onChange:function(n){""!==n&&e.isLast&&t.addNewBox()}}),a.createElement(c.a,{id:e.id+"2",classes:"mt0 inline-block mx1",defaultValue:e.props.displayName}))}))},defaultProps:{name:"",displayName:""}})),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-control-label"},"Multiline box with default values"),a.createElement(f.a,{id:l.a.generate(),data:[{name:"Poire",displayName:"Pear"}],renderBody:function(e,t){return i.map(e,(function(e){return a.createElement("div",{key:e.id},a.createElement(c.a,{id:e.id+"1",classes:"mt0 inline-block mx1",defaultValue:e.props.name,validate:function(t){return e.props.name===t},validateOnChange:!0,onChange:function(n){""!==n&&e.isLast&&t.addNewBox()}}),a.createElement(c.a,{id:e.id+"2",classes:"mt0 inline-block mx1",defaultValue:e.props.displayName}))}))},defaultProps:{name:"Patate",displayName:"Pasdfsa"}})),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-control-label"},"Multiline box with a container"),a.createElement(O,{id:l.a.generate(),data:[{name:"Poire",displayName:"Pear"}],renderBody:function(e,t){return i.map(e,(function(e){return a.createElement(a.Fragment,{key:e.id},a.createElement(c.a,{id:e.id+"1",classes:"mt0 inline-block mx1",defaultValue:e.props.name,validate:function(t){return e.props.name===t},validateOnChange:!0,onChange:function(n){""!==n&&e.isLast&&t.addNewBox()}}),a.createElement(c.a,{id:e.id+"2",classes:"mt0 inline-block mx1",defaultValue:e.props.displayName}))}))},defaultProps:{name:"",displayName:""}})),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-control-label"},"Multiline box with a default hoc remove button"),a.createElement(x,{id:l.a.generate(),data:[{name:"Poire",displayName:"Pear"}],renderBody:function(e,t){return i.map(e,(function(e){return a.createElement(a.Fragment,{key:e.id},a.createElement(c.a,{id:e.id+"1",classes:"mt0 inline-block mx1",defaultValue:e.props.name,validate:function(t){return e.props.name===t},validateOnChange:!0,onChange:function(n){""!==n&&e.isLast&&t.addNewBox()}}),a.createElement(c.a,{id:e.id+"2",classes:"mt0 inline-block mx1",defaultValue:e.props.displayName}))}))}})),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-control-label"},"Multiline box with a hoc remove button wrapped in a container to style the button position right"),a.createElement(E,{id:l.a.generate(),data:[{name:"Poire",displayName:"Pear"}],renderBody:function(e,t){return i.map(e,(function(e){return a.createElement(a.Fragment,{key:e.id},a.createElement(c.a,{id:e.id+"1",classes:"mt0 inline-block mx1",defaultValue:e.props.name,validate:function(t){return e.props.name===t},validateOnChange:!0,onChange:function(n){""!==n&&e.isLast&&t.addNewBox()}}),a.createElement(c.a,{id:e.id+"2",classes:"mt0 inline-block mx1",defaultValue:e.props.displayName}))}))}})),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-control-label"},"Multiline box with 2 containers to wrap a remove button"),a.createElement(P,{id:l.a.generate(),data:[{name:"Poire",displayName:"Pear"}],renderBody:function(e,t){return i.map(e,(function(e){return a.createElement(a.Fragment,{key:e.id},a.createElement(c.a,{id:e.id+"1",classes:"mt0 inline-block mx1",defaultValue:e.props.name,validate:function(t){return e.props.name===t},validateOnChange:!0,onChange:function(n){""!==n&&e.isLast&&t.addNewBox()}}),a.createElement(c.a,{id:e.id+"2",classes:"mt0 inline-block mx1",defaultValue:e.props.displayName}))}))}})),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-control-label"},"Multiline box with drag and drop"),a.createElement(N,{id:l.a.generate(),data:[{name:"Poire",displayName:"Pear"}],renderBody:function(e,t){return i.map(e,(function(e){return a.createElement(a.Fragment,{key:e.id},a.createElement(c.a,{id:e.id+"1",classes:"mt0 inline-block mx1",defaultValue:e.props.name,validate:function(t){return e.props.name===t},validateOnChange:!0,onChange:function(n){""!==n&&e.isLast&&t.addNewBox()}}),a.createElement(c.a,{id:e.id+"2",classes:"mt0 inline-block mx1",defaultValue:e.props.displayName}))}))}})),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-control-label"},"Complex multiline box hoc"),a.createElement(j,{id:l.a.generate(),data:[{name:"Poire",displayName:"Pear"}],renderBody:function(e,t){return i.map(e,(function(e){return a.createElement(a.Fragment,{key:e.id},a.createElement(c.a,{id:e.id+"1",classes:"mt0 inline-block mx1",defaultValue:e.props.name,validate:function(t){return e.props.name===t},validateOnChange:!0,onChange:function(n){""!==n&&e.isLast&&t.addNewBox()}}),a.createElement(c.a,{id:e.id+"2",classes:"mt0 inline-block mx1",defaultValue:e.props.displayName}))}))}})),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-control-label"},"Complex multiline box hoc without icon when dragging"),a.createElement(C,{id:l.a.generate(),data:[{name:"Poire",displayName:"Pear"}],renderBody:function(e,t){return i.map(e,(function(e){return a.createElement(a.Fragment,{key:e.id},a.createElement(c.a,{id:e.id+"1",classes:"mt0 inline-block mx1",defaultValue:e.props.name,validate:function(n){return""!==n&&(e.isLast&&t.addNewBox(),!0)},labelProps:{invalidMessage:"Do not leave me empty"},validateOnChange:!0}),a.createElement(c.a,{id:e.id+"2",classes:"mt0 inline-block mx1",defaultValue:e.props.displayName}))}))}})),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-control-label"},"Complex multiline box hoc with a custom icon for the drag and drop"),a.createElement(_,{id:l.a.generate(),data:[{name:"Poire",displayName:"Pear"}],renderBody:function(e,t){return i.map(e,(function(e){return a.createElement(a.Fragment,{key:e.id},a.createElement(c.a,{id:e.id+"1",classes:"mt0 inline-block mx1",defaultValue:e.props.name,validate:function(n){return""!==n&&(e.isLast&&t.addNewBox(),!0)},labelProps:{invalidMessage:"Do not leave me empty"},validateOnChange:!0}),a.createElement(c.a,{id:e.id+"2",classes:"mt0 inline-block mx1",defaultValue:e.props.displayName}))}))}})))},t}(a.PureComponent)},449:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r,o=n(9),a=n(1),i=n(0),l=n(83),c=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},p=["small","classes","enabled","name","link","target","primary","tooltip","tooltipPlacement","hideDisabled","onClick"],u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.onClick=function(){this.props.onClick&&this.props.enabled&&this.props.onClick()},t.prototype.getTemplate=function(e){var t,n=this,r=s(s({},i.omit(this.props,p)),{disabled:!this.props.enabled,onClick:function(){return n.onClick()}});return this.props.link?(r=i.extend(r,{target:this.props.target,rel:"noopener noreferrer",href:this.props.link}),t=a.createElement("a",s({className:e+" btn-container"},r),this.props.name,this.props.children)):t=a.createElement("button",s({className:e},r),this.props.name,this.props.children),i.isEmpty(this.props.tooltip)?t:a.createElement(l.a,{title:this.props.tooltip,placement:this.props.tooltipPlacement,className:"btn-container"},t)},t.prototype.getClasses=function(){return o("btn",{"mod-primary":this.props.primary,"mod-small":this.props.small,"state-disabled disabled":!this.props.enabled,"text-medium-grey":!this.props.primary&&!this.props.enabled},this.props.classes)},t.prototype.render=function(){return this.getTemplate(this.getClasses())},t.defaultProps={enabled:!0,name:"",tooltip:"",primary:!1,small:!1,tooltipPlacement:"right",target:""},t}(a.Component)},457:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0),o={supplyConfig:function(e){return r.isFunction(e)?e():e}}},463:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var r,o=n(9),a=n(1),i=n(0),l=n(481),c=n(462),s=n(83),p=n(465),u=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),d=function(){return(d=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},f=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i},m=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(f(arguments[t]));return e},h=["number","text","password"],y=["id","classes","innerInputClasses","validate","labelTitle","labelProps","validateOnChange","disabledOnMount","validateOnMount","disabledTooltip","minimum","maximum","onBlur","defaultValue","valid","indeterminate","onDestroy","onRender","onChange","onClick"],g=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r.state={valid:r.props.valid},r}return u(t,e),t.prototype.componentWillMount=function(){if(this.props.onRender){var e=this.props.validateOnMount&&this.props.validate&&this.props.validate(this.props.defaultValue||"");this.props.onRender(this.props.defaultValue,e,this.props.disabledOnMount)}},t.prototype.componentWillUnmount=function(){this.props.onDestroy&&this.props.onDestroy()},t.prototype.componentDidUpdate=function(e){this.props.valid!==e.valid&&this.validate(),e.value!==this.props.value&&this.innerInput&&(this.innerInput.value=this.props.value)},t.prototype.reset=function(){this.innerInput.value=""},t.prototype.getInnerValue=function(){return this.innerInput&&this.innerInput.value||""},t.prototype.validate=function(){this.setState({valid:this.props.valid&&!(this.props.validate&&!this.props.validate(this.getInnerValue()))})},t.prototype.handleBlur=function(){this.props.onBlur&&this.props.onBlur(this.getInnerValue())},t.prototype.handleChange=function(){if(this.props.onChange){var e=this.props.validateOnChange&&this.props.validate&&this.props.validate(this.getInnerValue());this.props.onChange(this.getInnerValue(),e)}},t.prototype.handleClick=function(e){this.props.onClick&&this.props.onClick(e)},t.prototype.handleKeyUp=function(e){this.props.onKeyUp&&this.props.onKeyUp(e)},t.prototype.getLabel=function(){var e=this.props,t=e.labelProps,n=e.labelTitle;return"string"==typeof n?n||this.props.validate?a.createElement(p.a,d({key:this.props.id+"label",htmlFor:this.props.id},t),n):null:n},t.prototype.render=function(){var e=this,t=o("input-wrapper validate",{"input-field":Object(i.contains)(h,this.props.type)},this.props.classes),n=o({invalid:!this.state.valid&&Object(i.contains)(h,this.props.type)},this.props.innerInputClasses),r=[a.createElement("input",d({key:this.props.id,id:this.props.id,className:n,defaultValue:Object(i.isUndefined)(this.props.value)?this.props.defaultValue:this.props.value,ref:function(t){return e.innerInput=t},onBlur:function(){return e.handleBlur()},onChange:function(){return e.handleChange()},onKeyUp:function(t){return e.handleKeyUp(t)},min:this.props.minimum,max:this.props.maximum},i.omit(this.props,m(l.a.input,y)))),this.getLabel(),this.props.children];return this.props.disabled&&this.props.disabledTooltip?a.createElement("div",{className:t,onClick:function(t){return e.handleClick(t)}},a.createElement(s.a,{title:this.props.disabledTooltip,placement:c.a.Right},r)):a.createElement("div",{className:t,onClick:function(t){return e.handleClick(t)}},r)},t.defaultProps={id:Object(i.uniqueId)("input"),type:"text",valid:!0,labelTitle:"",required:!0},t}(a.Component)},465:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r,o=n(9),a=n(1),i=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){var e=o(this.props.classes),t=this.props,n=t.validMessage,r=t.invalidMessage,i=t.children,s=c(t,["validMessage","invalidMessage","children"]);return a.createElement("label",l({className:e,"data-valid-message":n,"data-invalid-message":r},s),i)},t}(a.Component)},467:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(){function e(){}return e.generate=function(){var e=Date.now();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===t?n:3&n|8).toString(16)}))},e}()},481:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i},o=["children","dangerouslySetInnerHTML"],a={internal:o,input:function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(r(arguments[t]));return e}(o,["defaultValue","onClick","onChange","onBlur","value","valid"])}},494:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r,o=n(491),a=n(1036),i=n.n(a),l=n(12),c=n(0),s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},p=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i},u=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(p(arguments[t]));return e},d={move:function(e,t,n,r){var o=n[e],a=u(n);a.splice(e,1),a.splice(t,0,o),r(a)},getBoxTarget:function(e){return{hover:function(e,t,n){var r=t.getItem().index,o=e.index;if(r!==o){var a=Object(l.findDOMNode)(n).getBoundingClientRect(),i=(a.bottom-a.top)/2,c=t.getClientOffset().y-a.top;r<o&&c<i||r>o&&c>i||(e.move(r,o),t.getItem().index=o)}},drop:function(t,n){n.getItem()[e]=null}}},getSelectedBoxSource:function(e){return{isDragging:function(t,n){return t.id===n.getItem()[e]},beginDrag:function(e){return s({},e)}}},parentDropTarget:{drop:c.noop},TagControlContext:function(e){return r||(r=Object(o.DragDropContext)(i.a)),r(e)}}},516:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(28),o=n(0),a=function(e,t){return o.findWhere(e.inputs,{id:t.id})},i={getValue:Object(r.a)(a,(function(e){return e&&e.value})),getIsValid:Object(r.a)(a,(function(e){return!!e&&e.valid})),getInput:a}},544:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(55),o=n(56),a=n(463),i=n(37),l=n(516),c=Object(r.b)((function(e,t){var n=l.a.getInput(e,{id:t.id});return{valid:n&&n.valid,value:n&&n.value,disabled:n&&n.disabled}}),(function(e,t){return{onRender:function(n,r,o){return void 0===n&&(n=""),void 0===r&&(r=!0),void 0===o&&(o=!1),e(Object(i.b)(t.id,n,r,o))},onDestroy:function(){return e(Object(i.d)(t.id))},onChange:function(n,r){return void 0===r&&(r=!0),e(Object(i.c)(t.id,n,r))}}}),o.c.mergeProps)(a.a)},553:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(28),o={id:void 0,list:[]},a={getIds:Object(r.a)((function(e,t){return e&&e.multilineIds&&e.multilineIds[t.id]||o}),(function(e){return e&&e.list||[]}))}},647:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return f}));var r,o=n(106),a=n(1),i=n(491),l=n(82),c=n(494),s=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),p=function(){return(p=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},u=function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},d="CONTAINER_BOX",f=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s(t,e),t.prototype.getIcon=function(){var e=a.createElement("div",p({style:{visibility:this.props.isDraggable?"visible":"hidden",cursor:this.props.isDraggable?"move":"default"}},this.props.draggableIconProps),this.props.icon);return this.props.isDraggable?this.props.connectDragSource(e):e},t.prototype.render=function(){var e=this.props.isDragging?0:1,t=a.createElement("div",p({},this.props.draggableContainerProps,{style:{opacity:e}}),this.getIcon(),this.props.child&&a.cloneElement(this.props.child,this.props.child.props));return this.props.isDraggable?this.props.connectDropTarget(this.props.connectDragPreview(t)):t},t.defaultProps={isDraggable:!0,draggableContainerProps:{className:"flex flex-center"},draggableIconProps:{},icon:a.createElement(l.a,{svgName:o.svg.dragDrop.name,svgClass:"icon"})},t=u([Object(i.DropTarget)(d,c.a.getBoxTarget("id"),(function(e){return{connectDropTarget:e.dropTarget()}})),Object(i.DragSource)(d,c.a.getSelectedBoxSource("id"),(function(e,t){return{connectDragSource:e.dragSource(),connectDragPreview:e.dragPreview(),isDragging:t.isDragging()}}))],t)}(a.Component)},715:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var r,o=n(1),a=n(28),i=n(0),l=n(33),c=n(26),s=n(56),p=n(467),u=n(553),d=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),f=function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},m=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},h=function(){var e=Object(a.b)({multilineBoxIds:u.a.getIds});return function(t,n){return e(t,{id:n.id})}},y=function(e,t){return{onMount:function(n){return e(Object(l.b)(t.id,n))},onUnmount:function(){return e(Object(l.d)(t.id))},removeBox:function(n){return e(Object(l.e)(t.id,n))},addNewBox:function(){return e(Object(l.c)(t.id,p.a.generate()))},updateBox:function(n){return e(Object(l.g)(t.id,n))}}},g=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r.initialData=r.getInitialDataMappedWithBoxIDs(),r}return d(t,e),t.prototype.getInitialDataMappedWithBoxIDs=function(){var e={};return i.each(this.props.data,(function(t){e[p.a.generate()]=t})),e},t.prototype.getInitialBoxesWithAnExtraBox=function(){var e=i.keys(this.initialData);return e.push(p.a.generate()),e},t.prototype.getLastBoxProps=function(){return Object(c.a)(this.props.defaultProps||{})},t.prototype.getData=function(){var e=this;return i.map(this.props.multilineBoxIds,(function(t,n){var r=e.initialData[t]||e.getLastBoxProps();return{id:t,isLast:n===e.props.multilineBoxIds.length-1,props:r}}))},t.prototype.getParentProps=function(){var e=this;return{removeBox:function(t){return e.props.removeBox(t)},addNewBox:function(){return e.props.addNewBox()},parentId:this.props.id}},t.prototype.componentDidUpdate=function(e){i.isEqual(e.data,this.props.data)||(this.initialData=this.getInitialDataMappedWithBoxIDs(),this.props.updateBox(this.getInitialBoxesWithAnExtraBox()))},t.prototype.componentDidMount=function(){this.props.onMount(this.getInitialBoxesWithAnExtraBox())},t.prototype.componentWillUnmount=function(){this.props.onUnmount()},t.prototype.render=function(){return this.props.renderBody(this.getData(),this.getParentProps())},t.defaultProps={renderBody:function(){return o.createElement("div",null)},defaultProps:{}},t=f([Object(s.b)(h,y),m("design:paramtypes",[Object,Object])],t)}(o.PureComponent)},769:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r,o=n(1),a=n(457),i=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c=function(e,t,n){return o.createElement("div",{key:(t.length&&t[n].id||n)+"Container"},e)},s=function(e){return void 0===e&&(e={containerNode:c}),function(t){return function(n){function r(){return null!==n&&n.apply(this,arguments)||this}return i(r,n),r.prototype.getWrapper=function(t,n){return o.Children.map(t,(function(t,r){return a.a.supplyConfig(e).containerNode(t,n,r)}))},r.prototype.render=function(){var e=this;return o.createElement(t,l({},this.props,{renderBody:function(t,n){return e.getWrapper(e.props.renderBody(t,n),t)}}),this.props.children)},r.defaultProps={renderBody:function(){return o.createElement("div",null)}},r}(o.PureComponent)}}},770:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var r,o=n(1),a=n(491),i=n(28),l=n(33),c=n(457),s=n(56),p=n(647),u=n(494),d=n(553),f=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),m=function(){return(m=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},h=function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},y=function(e){return void 0===e&&(e={}),function(t){var n=function(){var e=Object(i.b)({multilineBoxIds:d.a.getIds});return function(t,n){return e(t,{id:n.id})}},r=function(e,t){return{onReorder:function(n){return e(Object(l.f)(t.id,n))}}},y=function(i){function l(){return null!==i&&i.apply(this,arguments)||this}return f(l,i),l.prototype.getDnDWrapper=function(t,n){var r=this,a=m({DnDContainerProps:{}},c.a.supplyConfig(e));return o.Children.map(t,(function(e,t){var i=t===n.length-1,l=n.length&&n[t].id||t.toString();return o.createElement(p.a,m({id:l,key:l+"DnD",index:t,move:function(e,t){return u.a.move(e,t,r.props.multilineBoxIds,r.props.onReorder)},child:e,isDraggable:!i},a.DnDContainerProps))}))},l.prototype.render=function(){var e=this;return o.createElement(t,m({},this.props,{renderBody:function(t,n){return e.getDnDWrapper(e.props.renderBody(t,n),t)}}),this.props.children)},l.defaultProps={renderBody:function(){return o.createElement("div",null)}},l=h([Object(a.DropTarget)(p.b,u.a.parentDropTarget,(function(e){return{connectDropTarget:e.dropTarget()}})),Object(s.b)(n,r)],l)}(o.PureComponent);return u.a.TagControlContext(y)}}},771:function(e,t,n){"use strict";n.d(t,"a",(function(){return y})),n.d(t,"b",(function(){return g}));var r,o=n(9),a=n(106),i=n(1),l=n(33),c=n(457),s=n(56),p=n(449),u=n(82),d=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),f=function(){return(f=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},m=function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},h=function(e,t,n,r){return i.createElement(i.Fragment,{key:(n.length&&n[r].id||r)+"RemoveButton"},e,t())},y="center-align mod-no-border",g=function(e){return void 0===e&&(e={containerNode:h}),function(t){var n=function(e,t){return{removeBox:function(n){return e(Object(l.e)(t.id,n))}}};return function(r){function l(){return null!==r&&r.apply(this,arguments)||this}return d(l,r),l.prototype.getRemoveButtonNode=function(e,t){var n=this;return void 0===e&&(e={}),void 0===t&&(t={}),i.createElement(p.a,f({classes:[o(y,{"cursor-pointer":!e.isLast})],style:{visibility:e.isLast?"hidden":"visible"},onClick:function(){return!e.isLast&&n.props.removeBox(e.id)},enabled:!e.isLast},t),i.createElement(u.a,{svgName:a.svg.remove.name,className:"icon fill-medium-blue mod-18",style:{visibility:e.isLast?"hidden":"visible"}}))},l.prototype.getWrapper=function(t,n){var r=this;return i.Children.map(t,(function(t,o){return c.a.supplyConfig(e).containerNode(t,(function(e){return r.getRemoveButtonNode(n[o],e)}),n,o)}))},l.prototype.render=function(){var e=this;return i.createElement(t,f({},this.props,{renderBody:function(t,n){return e.getWrapper(e.props.renderBody(t,n),t)}}),this.props.children)},l.defaultProps={renderBody:function(){return i.createElement("div",null)}},l=m([Object(s.b)(null,n)],l)}(i.PureComponent)}}}}]);
//# sourceMappingURL=999.bundle.js.map