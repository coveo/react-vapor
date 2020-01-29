(window.webpackJsonp=window.webpackJsonp||[]).push([[1038],{2329:function(e,r,t){"use strict";t.r(r),t.d(r,"ColorBarExamples",(function(){return l}));var o=t(1),a=t(753),l=function(){return o.createElement("div",{className:"mt2"},o.createElement("div",{className:"form-group"},o.createElement("label",{className:"form-control-label"},"ColorBar with one color full"),o.createElement("div",{className:"form-control"},o.createElement(a.a,{widthPerColor:{blue:100}}))),o.createElement("div",{className:"form-group"},o.createElement("label",{className:"form-control-label"},"ColorBar with one color not full"),o.createElement("div",{className:"form-control"},o.createElement(a.a,{widthPerColor:{blue:75}}))),o.createElement("div",{className:"form-group"},o.createElement("label",{className:"form-control-label"},"ColorBar with multiple colors full"),o.createElement("div",{className:"form-control"},o.createElement(a.a,{widthPerColor:{blue:30,yellow:15,"#E94B3C":10,"#00A591":25,cyan:20}}))),o.createElement("div",{className:"form-group"},o.createElement("label",{className:"form-control-label"},"ColorBar with tooltip on specific colors (hover on blue and yellow)"),o.createElement("div",{className:"form-control"},o.createElement(a.a,{widthPerColor:{blue:30,yellow:15,"#E94B3C":10,"#00A591":25,cyan:20},tooltipPerColor:{blue:{title:"blue",placement:"top"},yellow:{title:"yello",placement:"top"}}}))),o.createElement("div",{className:"form-group"},o.createElement("label",{className:"form-control-label"},"ColorBar with multiple colors not full"),o.createElement("div",{className:"form-control"},o.createElement(a.a,{widthPerColor:{blue:20,yellow:5,"#E94B3C":10,"#00A591":5,cyan:20}}))),o.createElement("div",{className:"form-group"},o.createElement("label",{className:"form-control-label"},"ColorBar adjusted for width overflow (total width more than 100)"),o.createElement("div",{className:"form-control"},o.createElement(a.a,{widthPerColor:{blue:200,yellow:50,"#E94B3C":300,"#00A591":25,cyan:1e3}}))),o.createElement("div",{className:"form-group"},o.createElement("label",{className:"form-control-label"},"ColorBar in a Card"),o.createElement("div",{className:"form-control"},o.createElement("div",{className:"material-card",style:{width:"300px"}},o.createElement("h2",{className:"p2"},"I am a card and I have a cool ColorBar border"),o.createElement("div",{className:"px2 pb2"},"(No, it's not a real border, but don't tell anyone.)"),o.createElement(a.a,{className:"color-bar-border",widthPerColor:{blue:200,"#E94B3C":300,cyan:1e3}})))))}},480:function(e,r,t){"use strict";t.d(r,"b",(function(){return s})),t.d(r,"a",(function(){return i}));var o,a=t(9),l=t(1),n=t(0),c=(o=function(e,r){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)r.hasOwnProperty(t)&&(e[t]=r[t])})(e,r)},function(e,r){function t(){this.constructor=e}o(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)}),f=function(){return(f=Object.assign||function(e){for(var r,t=1,o=arguments.length;t<o;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e}).apply(this,arguments)},s=t(679),i=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return c(r,e),r.prototype.render=function(){var e,r=-1===n.keys(s).indexOf(this.props.color),t=r&&{backgroundColor:this.props.color}||{};return this.props.style&&(t=f(f({},t),this.props.style)),l.createElement("div",f({},n.omit(this.props,"color","hex"),{style:t,className:a(this.props.className,(e={},e["bg-"+this.props.color]=!r,e))}),this.props.children)},r.defaultprops={color:"pure-white"},r}(l.Component)},679:function(e,r){e.exports={"primary-colors":"category",mirage:"#1e253f","coveo-blue":"#004990","coveo-orange":"#f58020","secondary-colors":"category",azure:"#0d80ef",anakiwa:"#4ed6ff",java:"#26e8cc","primary-palette":"category","science-blue":"#0061c0","dodger-blue":"#3ca0ff","tropical-rain-forest":"#007766",observatory:"#028f7b","caribbean-green":"#05c3a2",lynch:"#5d7289","bali-hai":"#8097aa",nepal:"#94a9bf",heather:"#b5c4cf",tango:"#e56613","neon-carrot":"#ff9844","tan-hide":"#f8aa69","partners-palette":"category","coveo-sitecore-red":"#dc291e","coveo-salesforce-blue":"#009ddc","grey-palette":"category","oxford-blue":"#313a45","coveo-grey":"#94a9bf","grey-1":"#f7f8f9","grey-2":"#eff3f7","grey-3":"#e4eaed","grey-4":"#cfd9e0","grey-5":"#b5c4cf","grey-6":"#94a9bf","grey-7":"#8097aa","grey-8":"#5d7289","grey-9":"#4e5f71","grey-10":"#37424e","blue-palette":"category","blue-1":"#cde7ff","blue-2":"#8fc9ff","blue-3":"#3ca0ff","blue-4":"#0d80ef","blue-5":"#0061c0","blue-6":"#004990","blue-7":"#00305c","blue-8":"#00284b","blue-9":"#00203a","blue-10":"#00101e",astral:"#296896",matisse:"#257bab","curious-blue-1":"#218ec0","curious-blue-2":"#1da2d5","picton-blue":"#19b5ea",cerulean:"#90e5ff",onahau:"#c6f2ff","onahau-1":"#b6eeff","blue-purple-palette":"category","coveo-blue-purple":"#1e253f","blue-purple-1":"#3e5485","blue-purple-2":"#354878","blue-purple-3":"#2d385e","blue-purple-4":"#1e253f","blue-purple-5":"#101425","green-palette":"category","frosted-mint":"#d3fff8","frosted-mint-1":"#a9fff2","persian-green":"#00a78a",watercourse:"#066356",cyprus:"#004446","deep-teal":"#003530","orange-palette":"category","orange-1":"#ffbc86","orange-2":"#ff9844","orange-3":"#f58020","orange-4":"#ed731a","orange-5":"#e56613","orange-6":"#de590d","orange-7":"#d64c06","orange-8":"#ce3f00","carrot-orange":"#ec8c25","tahiti-gold":"#dc7704",buttercup:"#f39e08","my-sin":"#ffac23",amber:"#fbba06",sunglow:"#ffce44","school-bus-yellow":"#ffdf00",picasso:"#fff08f","lemon-chiffon":"#fff9cf",travertine:"#fffde9","red-pink-palette":"category","lonestar-2":"#550500","lonestar-1":"#720700","red-berry":"#8b0900",sangria:"#b10007","milano-red":"#d02b08",pomegranate:"#f7472e",persimmon:"#ff644e",bittersweet:"#ff8675","mona-lisa":"#ffa79b",melon:"#ffc4bc",status:"category",red:"#ce3f00",yellow:"#ecad00",green:"#009830",utilities:"category",transparent:"transparent","deprecated-palette":"category","darker-blue":"#193045","dark-blue":"#263e55","medium-blue":"#1d4f76","light-blue":"#296896","dark-grey":"#373737","dark-medium-grey":"#7a7d81","medium-grey":"#bcc3ca","light-grey":"#e6ecf0",white:"#f1f3f4","pure-white":"#ffffff",orange:"#f58020",stratos:"#08080e","purple-blue":"#1e2541","soft-red":"#edbcbf","soft-green":"#d0e9c4",blue:"#009ad9",black:"#000000",turquoise:"#26e8cc","salesforce-blue":"#009ddc","google-red":"#ce3f00","office365-red":"#ce3f00"}},753:function(e,r,t){"use strict";t.d(r,"a",(function(){return u}));var o,a=t(9),l=t(1),n=t(0),c=t(480),f=t(83),s=(o=function(e,r){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)r.hasOwnProperty(t)&&(e[t]=r[t])})(e,r)},function(e,r){function t(){this.constructor=e}o(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)}),i=function(){return(i=Object.assign||function(e){for(var r,t=1,o=arguments.length;t<o;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e}).apply(this,arguments)},u=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return s(r,e),r.prototype.render=function(){var e=this;return l.createElement("div",{className:a("full-content-x color-bar",this.props.className)},n.map(this.getAdjustedWidthPerColor(),(function(r,t){var o=l.createElement(c.a,{key:t,className:"inline-block color-bar-color",color:t,style:{height:e.props.height,width:r+"%"}});return e.props.tooltipPerColor[t]?l.createElement(f.a,i({key:t},e.props.tooltipPerColor[t]),o):o})))},r.prototype.getAdjustedWidthPerColor=function(){var e=n.omit(this.props.widthPerColor,(function(e){return!e})),r=n.reduce(e,(function(e,r){return r+e}),0);return 0===r?{transparent:100}:r<100?i(i({},e),{transparent:100-r}):100===r?e:n.mapObject(e,(function(e){return Math.round(e/r*100)}))},r.defaultProps={height:"5px",tooltipPerColor:{}},r}(l.Component)}}]);
//# sourceMappingURL=1038.bundle.js.map