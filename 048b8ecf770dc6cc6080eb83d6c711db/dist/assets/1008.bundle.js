(window.webpackJsonp=window.webpackJsonp||[]).push([[1008],{2326:function(e,t,n){"use strict";n.r(t),n.d(t,"CollapsibleExamples",(function(){return m}));var o=n(1),i=n(0),r=n(164),a=n(449),l=n(455),s=n(91),p=n(515),c=n(745),d=n(746),m=function(){return o.createElement(l.a,{title:"Collapsible Examples"},o.createElement(l.a,{level:3,title:"A basic collapsible"},o.createElement(p.a,{id:"collapsible-example-1",className:"bg-white",headerContent:o.createElement("h3",{className:"p2"},"Collapsible header")},"Collapsible content")),o.createElement(l.a,{level:2,title:"Collapsible info boxes"},o.createElement(l.a,{level:3,title:"A collapsible information box"},o.createElement(d.a,{id:"collapsible-info-box-example-1",title:"Lean more about collapsible info boxes."},"Some latin stuff: Lorem ipsum dolor sit amet.")),o.createElement(l.a,{level:3,title:"A collapsible information box for a page section"},o.createElement(d.a,{id:"collapsible-info-box-example-2",title:"Section A",sectionAdditionalContent:o.createElement("span",{style:{position:"relative",top:"8px",marginLeft:"20px"}},"Add anything here"),isSection:!0},"Lorem ipsum dolor sit amet.")),o.createElement(l.a,{level:3,title:"Collapsible information box for a page section with additional information only showing if the minute is\r\n                even"},o.createElement(d.a,{id:"collapsible-info-box-example-3",title:"Section A",sectionAdditionalContent:o.createElement("span",{style:{position:"relative",top:"8px",marginLeft:"20px"}},"Add anything here"),sectionAdditionalContentCondition:function(){return!((new Date).getMinutes()%2)},isSection:!0},"Lorem ipsum dolor sit amet."))),o.createElement(l.a,{level:2,title:"Collapsible containers"},o.createElement(l.a,{level:3,title:"Collapsible Container expanded on mount"},o.createElement(c.a,{id:"collapsible-container-example-1",title:"CollapsibleContainer expanded on mount",informationUrl:"http://coveo.github.io/vapor/",informationTooltip:{title:"I display information and if you click me you'll be led to a url that was provided to me.",placement:"top"},expandedOnMount:!0},"I am expanded on mount!")),o.createElement(l.a,{level:3,title:"Collapsible Container not expanded on mount"},o.createElement(c.a,{id:"collapsible-container-example-2",title:"CollapsibleContainer not expanded on mount",informationTooltip:{title:"I display information only since no url was given to me.",placement:"top"}},"I was not expanded on mount, but now I am! Thanks!")),o.createElement(l.a,{level:3,title:"CollapsibleContainer is expandable from outside the component."},o.createElement(a.a,{enabled:!0,small:!0,name:"Toggle Container",onClick:function(){var e=i.findWhere(r.a.getState().collapsibles,{id:"collapsible-container-example-3"});r.a.dispatch(Object(s.e)("collapsible-container-example-3",!e.expanded))}}),o.createElement(c.a,{id:"collapsible-container-example-3",title:"CollapsibleContainer"},"You just expanded me with a button!"))))}},449:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var o,i=n(9),r=n(1),a=n(0),l=n(83),s=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),p=function(){return(p=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},c=["small","classes","enabled","name","link","target","primary","tooltip","tooltipPlacement","hideDisabled","onClick"],d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s(t,e),t.prototype.onClick=function(){this.props.onClick&&this.props.enabled&&this.props.onClick()},t.prototype.getTemplate=function(e){var t,n=this,o=p(p({},a.omit(this.props,c)),{disabled:!this.props.enabled,onClick:function(){return n.onClick()}});return this.props.link?(o=a.extend(o,{target:this.props.target,rel:"noopener noreferrer",href:this.props.link}),t=r.createElement("a",p({className:e+" btn-container"},o),this.props.name,this.props.children)):t=r.createElement("button",p({className:e},o),this.props.name,this.props.children),a.isEmpty(this.props.tooltip)?t:r.createElement(l.a,{title:this.props.tooltip,placement:this.props.tooltipPlacement,className:"btn-container"},t)},t.prototype.getClasses=function(){return i("btn",{"mod-primary":this.props.primary,"mod-small":this.props.small,"state-disabled disabled":!this.props.enabled,"text-medium-grey":!this.props.primary&&!this.props.enabled},this.props.classes)},t.prototype.render=function(){return this.getTemplate(this.getClasses())},t.defaultProps={enabled:!0,name:"",tooltip:"",primary:!1,small:!1,tooltipPlacement:"right",target:""},t}(r.Component)},455:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n(9),i=n(1),r=function(){return(r=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},a=function(e){var t=e.children,n=e.title,a=e.description,l=e.className,s=e.mods,p=e.level,c=void 0===p?1:p,d={className:"text-medium-blue mb1",children:n},m="h"+(c+1);return i.createElement("fieldset",{className:o(l,s,"level-"+c+" form-group mod-padding-children")},n&&i.createElement(m,r({},d)),a&&i.createElement("p",{className:"description"},a),t)}},515:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(55),i=n(0),r=n(56),a=n(534),l=n(91),s=Object(o.b)((function(e,t){var n=Object(i.findWhere)(e.collapsibles,{id:t.id});return n?{expanded:n.expanded}:{expanded:t.expandedOnMount}}),(function(e,t){return{onMount:function(){return e(Object(l.b)(t.id,!!t.expandedOnMount))},onUnmount:function(){return e(Object(l.c)(t.id))},onToggleExpandedState:function(n){return e(Object(l.d)(t.id,!n))}}}),r.c.mergeProps)(a.a)},577:function(e,t,n){(t=e.exports=n(73)(!1)).push([e.i,"/* ----------- Deprecated Palette ----------- */\n.CollapsibleContainer-collapsible-3Xnefm3nu7QJpdNNBcOF9i {\n  margin-top: -1px; }\n\n.CollapsibleContainer-header-hsM-1Omgb-DsES_qBzjTp {\n  min-height: 50px; }\n\n.CollapsibleContainer-content-18SAr6ipBZGJCaW7ymVKtT {\n  padding: 20px 40px; }\n",""]),t.locals={collapsible:"CollapsibleContainer-collapsible-3Xnefm3nu7QJpdNNBcOF9i",header:"CollapsibleContainer-header-hsM-1Omgb-DsES_qBzjTp",content:"CollapsibleContainer-content-18SAr6ipBZGJCaW7ymVKtT"}},578:function(e,t,n){(t=e.exports=n(73)(!1)).push([e.i,"/* ----------- Deprecated Palette ----------- */\n.CollapsibleInfoBox-container-2AVLcrwnfIhiV96yxLJfIb {\n  transition: background-color 150ms ease-in-out; }\n  .CollapsibleInfoBox-container-2AVLcrwnfIhiV96yxLJfIb:hover {\n    background-color: #f1f3f4; }\n\n.CollapsibleInfoBox-alignWithIcon-3NwHWqKdQE7Gc1n9v4DLzL {\n  margin-left: calc(1rem + 20px); }\n",""]),t.locals={container:"CollapsibleInfoBox-container-2AVLcrwnfIhiV96yxLJfIb",alignWithIcon:"CollapsibleInfoBox-alignWithIcon-3NwHWqKdQE7Gc1n9v4DLzL"}},633:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var o,i=n(9),r=n(1),a=n(676),l=n(82),s=n(83),p=n(515),c=n(830),d=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),m=function(){return(m=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.getHeader=function(){var e=i("inline-flex flex-center text-medium-blue caps p2 bold ml3",t.props.collapsibleHeaderClassName);return r.createElement("div",{className:e},r.createElement("div",null,t.props.title),t.getCollapsibleHeaderIcon())},t}return d(t,e),t.prototype.render=function(){var e,t=i(((e={})[c.content]=!this.props.withoutContentPadding,e),this.props.collapsibleBodyClassName,"mod-border-bottom");return r.createElement(p.a,{id:this.props.id,className:i(this.props.className,c.collapsible),headerContent:this.getHeader(),expandedOnMount:this.props.expandedOnMount,headerClasses:i(c.header,this.props.expanded?"bg-light-grey":"bg-white"),toggleIconClassName:"fill-medium-blue mr4",withBorders:!0},r.createElement("div",{className:t},this.props.children))},t.prototype.getSvgClass=function(){return i("icon mod-lg ml1",{"fill-orange":!!this.props.informationUrl,"fill-medium-grey":!this.props.informationUrl})},t.prototype.getCollapsibleHeaderIcon=function(){if(!this.props.informationUrl&&!this.props.informationTooltip)return null;var e=m({placement:"right"},this.props.informationTooltip),t={svgName:this.props.informationUrl?"help":"info",svgClass:this.getSvgClass()},n=this.props.informationUrl?r.createElement(a.a,{url:this.props.informationUrl,target:"_blank",tooltip:e,svg:t}):r.createElement(s.a,m({},e),r.createElement(l.a,m({},t)));return r.createElement("span",{className:"round-contextual-help"},n)},t}(r.Component)},745:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n(55),i=n(0),r=n(56),a=n(633),l=Object(o.b)((function(e,t){var n=Object(i.findWhere)(e.collapsibles,{id:t.id});return{expanded:n&&n.expanded}}),void 0,r.c.mergeProps)(a.a)},746:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o,i=n(9),r=n(1),a=n(82),l=n(515),s=n(831),p=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return p(t,e),t.prototype.render=function(){return r.createElement(l.a,{id:this.props.id,className:i(s.container,"text-grey-9 mod-rounded-border-2"),headerClasses:"p1",toggleIconClassName:"fill-medium-blue",headerContent:this.getHeader(),expandedOnMount:this.props.expandedOnMount},r.createElement("div",{className:i(s.alignWithIcon,"px1 pb1 mr3")},this.props.children))},t.prototype.getHeader=function(){return this.props.isSection?r.createElement("div",{className:"flex pl1"},r.createElement("h2",{className:"text-medium-blue"},this.props.title),this.props.sectionAdditionalContent&&r.createElement("span",{className:this.getAdditionalInfoClasses()},this.props.sectionAdditionalContent)):r.createElement("div",{className:"inline-flex"},r.createElement(a.a,{svgName:"info",className:"icon mod-20 mx1 js-info-svg",svgClass:"fill-medium-grey"}),r.createElement("h3",{className:"text-medium-blue"},this.props.title))},t.prototype.getAdditionalInfoClasses=function(){return i(this.props.sectionAdditionalContentClasses,{hidden:this.props.sectionAdditionalContentCondition&&!this.props.sectionAdditionalContentCondition()})},t}(r.PureComponent)},830:function(e,t,n){var o=n(577);"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0},r=n(74)(o,i);o.locals&&(e.exports=o.locals),e.hot.accept(577,(function(){var t=n(577);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,o=0;for(n in e){if(!t||e[n]!==t[n])return!1;o++}for(n in t)o--;return 0===o}(o.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");r(t)})),e.hot.dispose((function(){r()}))},831:function(e,t,n){var o=n(578);"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0},r=n(74)(o,i);o.locals&&(e.exports=o.locals),e.hot.accept(578,(function(){var t=n(578);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,o=0;for(n in e){if(!t||e[n]!==t[n])return!1;o++}for(n in t)o--;return 0===o}(o.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");r(t)})),e.hot.dispose((function(){r()}))}}]);
//# sourceMappingURL=1008.bundle.js.map