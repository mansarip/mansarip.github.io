(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/0+H":function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(r("q1tI")),o=r("lwAK");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,i=void 0!==n&&n,o=e.hasQuery;return r||i&&(void 0!==o&&o)}t.isInAmpMode=s,t.useAmp=function(){return s(i.default.useContext(o.AmpStateContext))}},"3niX":function(e,t,r){"use strict";t.__esModule=!0,t.flush=function(){var e=o.cssRules();return o.flush(),e},t.default=void 0;var n,i=r("q1tI");var o=new(((n=r("SevZ"))&&n.__esModule?n:{default:n}).default),s=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).prevProps={},r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.dynamic=function(e){return e.map((function(e){var t=e[0],r=e[1];return o.computeId(t,r)})).join(" ")};var i=n.prototype;return i.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},i.componentWillUnmount=function(){o.remove(this.props)},i.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&o.remove(this.prevProps),o.add(this.props),this.prevProps=this.props),null},n}(i.Component);t.default=s},"8Kt/":function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(r("q1tI")),o=n(r("Xuae")),s=r("lwAK"),a=r("FYa8"),u=r("/0+H");function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=c;var f=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var r=i.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(l,[]).reverse().concat(c(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(i){var o=!0;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){var s=i.key.slice(i.key.indexOf("$")+1);e.has(s)?o=!1:e.add(s)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(var a=0,u=f.length;a<u;a++){var c=f[a];if(i.props.hasOwnProperty(c))if("charSet"===c)r.has(c)?o=!1:r.add(c);else{var l=i.props[c],h=n[c]||new Set;h.has(l)?o=!1:(h.add(l),n[c]=h)}}}return o}}()).reverse().map((function(e,t){var r=e.key||t;return i.default.cloneElement(e,{key:r})}))}var d=o.default();function p(e){var t=e.children;return i.default.createElement(s.AmpStateContext.Consumer,null,(function(e){return i.default.createElement(a.HeadManagerContext.Consumer,null,(function(r){return i.default.createElement(d,{reduceComponentsToState:h,handleStateChange:r,inAmpMode:u.isInAmpMode(e)},t)}))}))}p.rewind=d.rewind,t.default=p},"8oxB":function(e,t){var r,n,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(r===setTimeout)return setTimeout(e,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:o}catch(e){r=o}try{n="function"===typeof clearTimeout?clearTimeout:s}catch(e){n=s}}();var u,c=[],l=!1,f=-1;function h(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&d())}function d(){if(!l){var e=a(h);l=!0;for(var t=c.length;t;){for(u=c,c=[];++f<t;)u&&u[f].run();f=-1,t=c.length}u=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new p(e,t)),1!==c.length||l||a(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},"9kyW":function(e,t,r){"use strict";e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},Ijbi:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}},MX0m:function(e,t,r){e.exports=r("3niX")},RIqP:function(e,t,r){var n=r("Ijbi"),i=r("EbDI"),o=r("Bnag");e.exports=function(e){return n(e)||i(e)||o()}},RNiq:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return d}));var n=r("MX0m"),i=r.n(n),o=r("q1tI"),s=r.n(o),a=r("YFqc"),u=r.n(a),c=r("XPCT"),l=r("8Kt/"),f=r.n(l),h=s.a.createElement;function d(e){var t=e.children;return h(s.a.Fragment,null,h(f.a,null,h("title",{className:"jsx-1505276071"},"Man Sarip")),h("div",{className:"jsx-1505276071 wrapper"},h(p,null),h("div",{className:"jsx-1505276071 body"},h(m,null),h(v,{content:t}))),h(i.a,{id:"1505276071"},[".wrapper.jsx-1505276071{margin:0 auto;width:900px;}",".body.jsx-1505276071{display:grid;grid-template-columns:150px 1fr;-webkit-column-gap:15px;column-gap:15px;}"]))}function p(){return h("div",{className:"jsx-4084947954 header"},h("h2",{className:"jsx-4084947954"},"Man Sarip"),h("p",{className:"jsx-4084947954"},"Luqman B. Shariffudin"),h(i.a,{id:"4084947954"},[".header.jsx-4084947954{padding:20px 0;border-bottom:1px solid #a4c5c6;margin-bottom:20px;}","h2.jsx-4084947954{margin:0;}","p.jsx-4084947954{margin:0;}"]))}function m(){return h("div",{className:"jsx-802862224 sidebar"},h("ul",{className:"jsx-802862224"},h("li",{className:"jsx-802862224"},h(u.a,{href:"/"},h("a",{className:"jsx-802862224"},"Muka Depan"))),h("li",{className:"jsx-802862224"},h(u.a,{href:"/siapa-saya"},h("a",{className:"jsx-802862224"},"Siapa Saya")))),h(i.a,{id:"802862224"},[".sidebar.jsx-802862224{background-color:#fff;padding:0;}","ul.jsx-802862224{list-style:none;padding:0;margin:0;}","li.jsx-802862224{margin-bottom:5px;}","a.jsx-802862224{-webkit-text-decoration:none;text-decoration:none;color:#138c8c;}","a.jsx-802862224:hover{-webkit-text-decoration:underline;text-decoration:underline;color:#de7119;}"]))}function v(e){var t=e.content,r=void 0===t?null:t;return h("div",{className:"jsx-2224408715 content"},r||h("table",{className:"jsx-2224408715"},h("tbody",{className:"jsx-2224408715"},c.map((function(e,t){return h("tr",{key:t,className:"jsx-2224408715"},h("td",{className:"jsx-2224408715 date"},e.date),h("td",{className:"jsx-2224408715"},h(u.a,{href:e.slug},h("a",{className:"jsx-2224408715"},e.title))))})))),h(i.a,{id:"2224408715"},[".content.jsx-2224408715{background-color:#fff;}","td.date.jsx-2224408715{padding-right:20px;}","a.jsx-2224408715{color:#b80d57;-webkit-text-decoration:none;text-decoration:none;}","a.jsx-2224408715:hover{-webkit-text-decoration:underline;text-decoration:underline;color:#005082;font-weight:bold;}"]))}},SevZ:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=o(r("9kyW")),i=o(r("bVZc"));function o(e){return e&&e.__esModule?e:{default:e}}var s=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,n=void 0===r?null:r,o=t.optimizeForSpeed,s=void 0!==o&&o,a=t.isBrowser,u=void 0===a?"undefined"!==typeof window:a;this._sheet=n||new i.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),n&&"boolean"===typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=u,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var r=this.getIdAndRules(e),n=r.styleId,i=r.rules;if(n in this._instancesCounts)this._instancesCounts[n]+=1;else{var o=i.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[n]=o,this._instancesCounts[n]=1}},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return r[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,r){if(!r)return"jsx-"+t;var i=String(r),o=t+i;return e[o]||(e[o]="jsx-"+(0,n.default)(t+"-"+i)),e[o]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(r,n){this._isBrowser||(n=n.replace(/\/style/gi,"\\/style"));var i=r+n;return t[i]||(t[i]=n.replace(e,r)),t[i]}},t.getIdAndRules=function(e){var t=this,r=e.children,n=e.dynamic,i=e.id;if(n){var o=this.computeId(i,n);return{styleId:o,rules:Array.isArray(r)?r.map((function(e){return t.computeSelector(o,e)})):[this.computeSelector(o,r)]}}return{styleId:this.computeId(i),rules:Array.isArray(r)?r:[r]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=s},XPCT:function(e){e.exports=JSON.parse('[{"date":"31-03-2020","title":"Kenapa saya menulis dalam JavaScript?","slug":"kenapa-saya-menulis-dalam-javascript"},{"date":"31-03-2020","title":"Bukan senang \'Work From Home\'","slug":"bukan-senang-work-from-home"}]')},Xuae:function(e,t,r){"use strict";var n=r("lwsE"),i=r("PJYZ"),o=r("W8MJ"),s=r("a1gu"),a=r("Nsbk"),u=r("7W2i"),c=r("RIqP");function l(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}Object.defineProperty(t,"__esModule",{value:!0});var f=r("q1tI"),h=!1;t.default=function(){var e,t=new Set;function r(r){e=r.props.reduceComponentsToState(c(t),r.props),r.props.handleStateChange&&r.props.handleStateChange(e)}return function(c){u(p,c);var f,d=(f=p,function(){var e,t=a(f);if(l()){var r=a(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return s(this,e)});function p(e){var o;return n(this,p),o=d.call(this,e),h&&(t.add(i(o)),r(i(o))),o}return o(p,null,[{key:"rewind",value:function(){var r=e;return e=void 0,t.clear(),r}}]),o(p,[{key:"componentDidMount",value:function(){t.add(this),r(this)}},{key:"componentDidUpdate",value:function(){r(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),r(this)}},{key:"render",value:function(){return null}}]),p}(f.Component)}},YFqc:function(e,t,r){e.exports=r("cTJO")},bVZc:function(e,t,r){"use strict";(function(e){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}t.__esModule=!0,t.default=void 0;var n="undefined"!==typeof e&&e.env&&!0,i=function(e){return"[object String]"===Object.prototype.toString.call(e)},o=function(){function e(e){var t=void 0===e?{}:e,r=t.name,o=void 0===r?"stylesheet":r,a=t.optimizeForSpeed,u=void 0===a?n:a,c=t.isBrowser,l=void 0===c?"undefined"!==typeof window:c;s(i(o),"`name` must be a string"),this._name=o,this._deletedRulePlaceholder="#"+o+"-deleted-rule____{}",s("boolean"===typeof u,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=u,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var f=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=f?f.getAttribute("content"):null}var t,o,a,u=e.prototype;return u.setOptimizeForSpeed=function(e){s("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),s(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},u.isOptimizeForSpeed=function(){return this._optimizeForSpeed},u.inject=function(){var e=this;if(s(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(n||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"===typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},u.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},u.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},u.insertRule=function(e,t){if(s(i(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!==typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(a){return n||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var o=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,o))}return this._rulesCount++},u.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var r=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(o){n||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];s(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},u.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];s(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},u.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},u.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},u.makeStyleTag=function(e,t,r){t&&s(i(t),"makeStyleTag acceps only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var o=document.head||document.getElementsByTagName("head")[0];return r?o.insertBefore(n,r):o.appendChild(n),n},t=e,(o=[{key:"length",get:function(){return this._rulesCount}}])&&r(t.prototype,o),a&&r(t,a),e}();function s(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=o}).call(this,r("8oxB"))},cTJO:function(e,t,r){"use strict";var n=r("lwsE"),i=r("W8MJ"),o=r("a1gu"),s=r("Nsbk"),a=r("7W2i");function u(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var c=r("TqRt"),l=r("284h");t.__esModule=!0,t.default=void 0;var f,h=l(r("q1tI")),d=r("QmWs"),p=r("g/15"),m=c(r("nOHt"));function v(e){return e&&"object"===typeof e?(0,p.formatWithValidation)(e):e}var y=new Map,_=window.IntersectionObserver,g={};function S(){return f||(_?f=new _((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var w=function(e){a(c,e);var t,r=(t=c,function(){var e,r=s(t);if(u()){var n=s(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return o(this,e)});function c(e){var t;return n(this,c),(t=r.call(this,e)).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(e){var t=null,r=null,n=null;return function(i,o){if(n&&i===t&&o===r)return n;var s=e(i,o);return t=i,r=o,n=s,s}}((function(e,t){return{href:v(e),as:t?v(t):t}})),t.linkClicked=function(e){var r=e.currentTarget,n=r.nodeName,i=r.target;if("A"!==n||!(i&&"_self"!==i||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=t.formatUrls(t.props.href,t.props.as),s=o.href,a=o.as;if(function(e){var t=(0,d.parse)(e,!1,!0),r=(0,d.parse)((0,p.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(s)){var u=window.location.pathname;s=(0,d.resolve)(u,s),a=a?(0,d.resolve)(u,a):s,e.preventDefault();var c=t.props.scroll;null==c&&(c=a.indexOf("#")<0),m.default[t.props.replace?"replace":"push"](s,a,{shallow:t.props.shallow}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},t.p=!1!==e.prefetch,t}return i(c,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),r=t.href,n=t.as,i=(0,d.resolve)(e,r);return[i,n?(0,d.resolve)(e,n):i]}},{key:"handleRef",value:function(e){var t=this;this.p&&_&&e&&e.tagName&&(this.cleanUpListeners(),g[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var r=S();return r?(r.observe(e),y.set(e,t),function(){try{r.unobserve(e)}catch(t){console.error(t)}y.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();m.default.prefetch(t[0],t[1],e).catch((function(e){0})),g[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,i=r.as;"string"===typeof t&&(t=h.default.createElement("a",null,t));var o=h.Children.only(t),s={ref:function(t){e.handleRef(t),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(t):"object"===typeof o.ref&&(o.ref.current=t))},onMouseEnter:function(t){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(s.href=i||n),h.default.cloneElement(o,s)}}]),c}(h.Component);t.default=w},lwAK:function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var i=n(r("q1tI"));t.AmpStateContext=i.createContext({})}}]);