(window.webpackJsonp=window.webpackJsonp||[]).push([[1011,1013],{1048:function(e,t,n){"use strict";n.r(t),n.d(t,"TableHOCExamples",(function(){return N})),n.d(t,"generateDataWithFacker",(function(){return k})),n.d(t,"generateTableRow",(function(){return x}));var r=n(1182),a=n(14),o=n(1),i=n(55),c=n(0),s=n(76),l=n(467),u=n(1047),p=n(653),d=n(539),f=n(664),h=n(603),m=n(665),g=n(666),b=n(608),y=n(667),P=n(606),v=n(626),O=n(671),E=n(672),C=function(){return(C=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},w=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return i},j=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(w(arguments[t]));return e},N=function(){return o.createElement(d.a,{title:"Table HOC"},o.createElement(d.a,{level:2,title:"Table with Data"},o.createElement(R,{id:"TableWithActionsAndDataFiltering",data:_})),o.createElement(d.a,{level:2,title:"Table without data"},o.createElement(R,{id:"TableWithActionsAndDataFiltering2",data:[]})))},k=function(e){return c.map(c.range(e),(function(e){Object(r.seed)(e+1);var t=r.helpers.contextualCard();return{city:t.address.city,email:t.email,username:t.username,dateOfBirth:t.dob,id:l.a.generate()}}))},_=k(200),D=[{primary:!0,icon:"edit",name:"edit",enabled:!0,trigger:function(){return alert("trigger on action")},callOnDoubleClick:!0},{primary:!1,icon:"view",name:"view",enabled:!0},{primary:!1,icon:"copy",name:"copy",enabled:!0},{primary:!1,icon:"delete",name:"delete",enabled:!0,unrepeatable:!0,requiresConfirmation:{confirmLabel:"wanna do it ?",confirmType:"danger",buttonLabels:{confirm:"Confirm",cancel:"Cancel"}}}],x=function(e,t){return e.map((function(e){return o.createElement(m.a,{id:e.id,tableId:t,key:e.id,actions:D},o.createElement("td",{key:"city"},e.city),o.createElement("td",{key:"email"},e.email.toLowerCase()),o.createElement("td",{key:"username"},e.username.toLowerCase()),o.createElement("td",{key:"date-of-birth"},e.dateOfBirth.toLocaleDateString()))}))},S=function(){return{datesSelectionBoxes:u.e,matchDates:function(e,t,n){return c.isUndefined(n)||t<=e.dateOfBirth&&e.dateOfBirth<=n},years:j(s.b.getPreviousYears(100),[s.b.currentYear.toString()]),initialDateRange:[a().subtract(75,"years").toDate(),a().toDate()]}},L=function(e,t){var n=e===t.city,r=e===t.email;return!e||n||r},T=function(e,t,n,r){if(e){if(n[e]instanceof Date){var a=n[e]-r[e];return t?a:-1*a}var o=n[e].toLowerCase().localeCompare(r[e].toLowerCase());return t?o:-1*o}return 0},M={id:"firstPredicate",prepend:o.createElement("span",{className:"mr1 text-medium-grey"},"prepend:"),values:[{displayValue:"All",value:"",selected:!0},{displayValue:_[2].city,value:_[2].city},{displayValue:_[1].email,value:_[1].email}]},R=Object(i.b)(void 0,(function(e){return{resetFilter:function(t){return e(Object(p.b)(t,""))}}}))((function(e){var t,n=e.id,r=e.data,a=e.resetFilter,i=c.compose(Object(b.a)({title:"No data"}),Object(O.a)(C(C({},M),{matchPredicate:L})),Object(P.a)(),Object(b.a)({title:"No results",description:"Try reviewing the specified filters above or clearing all filters.",buttons:[{name:"Clear filter",enabled:!0,onClick:function(){return a(n)}}]}),Object(E.a)({sort:T}),y.a.apply(void 0,j(S)),Object(v.a)({perPageNumbers:[3,5,10]}),Object(g.a)())(h.a);return o.createElement(i,{id:n,className:"table",data:r,renderBody:function(e){return x(e,n)},tableHeader:(t=n,o.createElement("thead",null,o.createElement("tr",null,o.createElement(f.a,{id:"city",tableId:t},"City"),o.createElement(f.a,{id:"email",tableId:t},"Email"),o.createElement(f.a,{id:"username",tableId:t},"Username"),o.createElement("th",null,"Date of birth")))),showBorderTop:!0})}))},2483:function(e,t,n){"use strict";n.r(t),n.d(t,"TableHOCwithBlankSlateExamples",(function(){return u}));var r=n(1),a=n(0),o=n(455),i=n(603),c=n(608),s=n(606),l=n(1048),u=function(){return r.createElement(o.a,null,r.createElement(p,null))};u.title="TableHOC blankSlate";var p=function(){return r.createElement(o.a,null,r.createElement(d,{id:"tableWithBlankSlate",className:"table",data:Object(l.generateDataWithFacker)(0),renderBody:l.generateTableRow}))},d=a.compose(Object(c.a)({title:"No data caused the table to be empty"}),Object(s.a)({matchFilter:function(e,t){return-1!==t.username.toLowerCase().indexOf(e.toLowerCase())}}),Object(c.a)({title:"Filter caused the table to be empty"}))(i.a)},482:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r,a=n(1),o=n(0),i=n(82),c=n(511),s=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handlePageClick=function(e){var n,r;e>=0&&t.props.currentPage!==e&&(null===(r=(n=t.props).onPageClick)||void 0===r||r.call(n,e))},t}return s(t,e),t.prototype.componentDidUpdate=function(){this.props.currentPage>this.props.totalPages-1&&this.handlePageClick(this.props.totalPages-1)},t.prototype.componentDidMount=function(){var e,t;null===(t=(e=this.props).onRender)||void 0===t||t.call(e)},t.prototype.componentWillUnmount=function(){var e,t;null===(t=(e=this.props).onDestroy)||void 0===t||t.call(e)},t.prototype.render=function(){var e=this,t=this.props.currentPage||0,n=Math.abs((this.props.numberOfPagesToShow||7)-1),r=this.props.previousLabel||"Previous",s=this.props.nextLabel||"Next",l=0,u=n,p=this.props.totalPages-1,d="flat-select-option mod-link "+(0===t?"disabled":"selectable"),f="flat-select-option mod-link "+(t===p?"disabled":"selectable"),h=[];return this.props.hidePages||(t+n/2>p?(u=p,l=Math.max(p-n,0)):(l=Math.max(Math.floor(t-n/2),0),u=Math.min(l+n,p)),o.each(o.range(l,u+1),(function(n){h.push(a.createElement(c.a,{key:"page-"+n,onPageClick:e.handlePageClick,pageNb:n,selected:n===t}))}))),a.createElement("div",{className:"pagination"},a.createElement("div",{className:"flat-select"},a.createElement("a",{className:d,"data-page":t-1,onClick:function(){return e.handlePageClick(t-1)}},a.createElement(i.a,{svgName:"arrow-left-rounded",className:"pagination-icon",svgClass:"icon icon-small mod-lg"}),r),h,a.createElement("a",{className:f,"data-page":t+1,onClick:function(){return e.handlePageClick(t+1)}},s,a.createElement(i.a,{svgName:"arrow-right-rounded",className:"pagination-icon",svgClass:"icon icon-small mod-lg"}))))},t}(a.Component)},496:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(55),a=n(0),o=n(56),i=n(510),c=Object(r.b)((function(e,t){var n=a.findWhere(e.loadings,{id:"loading-"+t.id});return{isLoading:n&&n.isOn||!1,withReduxState:!0}}),void 0,o.c.mergeProps)(i.a)},509:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(55),a=n(56),o=n(143),i=n(13),c=Object(r.b)((function(){return{}}),(function(e,t){return{onRender:function(){return e(Object(i.b)(t.id))},onDestroy:function(){return e(Object(i.c)(t.id))}}}),a.c.mergeProps)(o.a)},510:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r,a=n(1),o=n(143),i=n(509),c=n(482),s=n(512),l=n(464),u=n(513),p=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),d=function(){return(d=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},f=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return p(t,e),t.prototype.render=function(){var e={totalPages:this.props.totalPages,numberOfPagesToShow:this.props.numberOfPagesToShow,previousLabel:this.props.previousLabel,nextLabel:this.props.nextLabel,hidePages:this.props.hidePages||!this.props.totalPages||1===this.props.totalPages},t=this.props.withReduxState?a.createElement(s.a,d({id:"pagination-"+this.props.id,loadingIds:this.props.loadingIds},e)):a.createElement(c.a,d({currentPage:this.props.currentPage,onPageClick:this.props.onPageClick},e)),n=this.props.totalPages>1?"":"hidden",r={label:this.props.perPageLabel,perPageNumbers:this.props.perPageNumbers,totalEntries:this.props.totalEntries,initialPosition:this.props.initialPosition};this.props.currentPerPage&&(r.currentPerPage=this.props.currentPerPage);var p=this.props.withReduxState?a.createElement(u.a,d({id:this.props.id,loadingIds:this.props.loadingIds},r)):a.createElement(l.a,d({onPerPageClick:this.props.onPerPageClick},r)),f=this.props.perPageNumbers.length&&this.props.totalEntries>this.props.perPageNumbers[0]?"":"hidden",h="pagination-container"+(this.props.isLoading?" loading-view":""),m=this.props.withReduxState?a.createElement(i.a,{id:"loading-"+this.props.id}):a.createElement(o.a,null);return a.createElement("div",{className:h},a.createElement("div",{className:f},p),a.createElement("div",{className:"flex-auto"},m),a.createElement("div",{className:n},t))},t.defaultProps={perPageNumbers:l.b},t}(a.Component)},511:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r,a=n(9),o=n(1),i=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){var e=this,t=a("flat-select-option",{selectable:!this.props.selected,disabled:this.props.disabled});return o.createElement("a",{className:t,"data-page":this.props.pageNb,onClick:function(){return e.props.onPageClick(e.props.pageNb)}},this.props.pageNb+1)},t}(o.Component)},512:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(55),a=n(0),o=n(56),i=n(482),c=n(22),s=Object(r.b)((function(e,t){var n=a.findWhere(e.paginationComposite,{id:t.id});return{currentPage:n?n.pageNb:0}}),(function(e,t){return{onRender:function(){return e(Object(c.c)(t.id))},onDestroy:function(){return e(Object(c.e)(t.id))},onPageClick:function(n){return e(Object(c.d)(t.id,n))}}}),o.c.mergeProps)(i.a)},513:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(55),a=n(0),o=n(56),i=n(22),c=n(464),s=n(31),l=Object(r.b)((function(e,t){var n=t.perPageNumbers||c.b,r=Math.ceil(n.length/2)-1,o=a.findWhere(e.perPageComposite,{id:t.id}),i=a.findWhere(e.paginationComposite,{id:"pagination-"+t.id}),s=a.isUndefined(t.initialPosition)?r:t.initialPosition;return{currentPerPage:o?o.perPage:n[s],currentPage:i?i.pageNb:0}}),(function(e,t){return{onRender:function(n){return e(Object(s.b)(t.id,n))},onDestroy:function(){return e(Object(s.d)(t.id))},onPerPageClick:function(n,r,a){e(Object(s.c)(t.id,n)),e(Object(i.d)("pagination-"+t.id,Math.floor(a*r/n)))}}}),o.c.mergeProps)(c.a)},539:function(e,t,n){"use strict";var r=n(455);n.d(t,"a",(function(){return r.a}))},626:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var r,a=n(1),o=n(55),i=n(0),c=n(457),s=n(13),l=n(496),u=n(532),p=n(89),d=n(470),f=n(57),h=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),m=function(){return(m=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},g=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return i},b=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(g(arguments[t]));return e},y=function(e,t){return{onMount:function(){e(Object(s.d)(["loading-"+t.id])),e(p.a.add(t.id))},onUnmount:function(){return e(p.a.remove(t.id))}}},P=["totalEntries","totalPages","pageNb","perPage"],v=function(e,t,n){return e.slice(t,n)},O=function(e){return void 0===e&&(e={}),function(t){var n=c.a.supplyConfig(e),r=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return h(r,e),r.prototype.componentDidMount=function(){this.props.onMount()},r.prototype.componentWillUnmount=function(){this.props.onUnmount()},r.prototype.componentDidUpdate=function(e){var t,n;e.pageNb===this.props.pageNb&&e.perPage===this.props.perPage||null===(n=(t=this.props).onUpdate)||void 0===n||n.call(t)},r.prototype.render=function(){var e=i.omit(this.props,b(P));return a.createElement(t,m({},e),a.createElement(l.a,m({id:this.props.id,loadingIds:[this.props.id]},n,i.pick(this.props,P))),this.props.children)},r}(a.Component);return Object(o.b)((function(e,t){var r=u.a.getPaginationPage(e,{id:f.a.getPaginationId(t.id)}),a=u.a.getPerPage(e,{id:t.id}),o=t.isServer||n.isServer,i=d.a.getDataCount(e,{id:t.id,data:t.data,isServer:o}),c=r*a,s=c+a;return{pageNb:r,perPage:a,totalEntries:i,totalPages:Math.max(Math.ceil(i/a),1),data:o?t.data:t.data&&v(t.data,c,s)}}),y)(r)}}}}]);
//# sourceMappingURL=1011.bundle.js.map