webpackJsonp([6],{124:function(t,n,e){function o(t){e(281)}var r=e(0)(e(248),e(305),o,"data-v-9242b93c",null);t.exports=r.exports},130:function(t,n,e){var o=e(45)("wks"),r=e(48),i=e(3).Symbol,s="function"==typeof i;(t.exports=function(t){return o[t]||(o[t]=s&&i[t]||(s?i:r)("Symbol."+t))}).store=o},132:function(t,n){t.exports={}},133:function(t,n,e){"use strict";e.d(n,"b",function(){return o}),e.d(n,"c",function(){return r}),e.d(n,"a",function(){return i});var o={g_tk:5381,inCharset:"utf-8",outCharset:"utf-8",notice:0,format:"jsonp"},r={param:"jsonpCallback",name:"jsonp"+Math.random().toString(32).replace(".","")},i=0},134:function(t,n,e){"use strict";function o(t){var n,e;this.promise=new t(function(t,o){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=o}),this.resolve=r(n),this.reject=r(e)}var r=e(32);t.exports.f=function(t){return new o(t)}},135:function(t,n,e){var o=e(13).f,r=e(35),i=e(130)("toStringTag");t.exports=function(t,n,e){t&&!r(t=e?t:t.prototype,i)&&o(t,i,{configurable:!0,value:n})}},136:function(t,n,e){t.exports={default:e(153),__esModule:!0}},137:function(t,n,e){var o=e(33),r=e(130)("toStringTag"),i="Arguments"==o(function(){return arguments}()),s=function(t,n){try{return t[n]}catch(t){}};t.exports=function(t){var n,e,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=s(n=Object(t),r))?e:i?o(n):"Object"==(c=o(n))&&"function"==typeof n.callee?"Arguments":c}},138:function(t,n,e){var o=e(3).document;t.exports=o&&o.documentElement},139:function(t,n,e){"use strict";var o=e(140),r=e(12),i=e(168),s=e(31),c=e(35),a=e(132),u=e(160),l=e(135),A=e(166),f=e(130)("iterator"),p=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,n,e,h,v,m,g){u(e,n,h);var C,y,w,x=function(t){if(!p&&t in j)return j[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},b=n+" Iterator",B="values"==v,k=!1,j=t.prototype,O=j[f]||j["@@iterator"]||v&&j[v],L=!p&&O||x(v),E=v?B?x("entries"):L:void 0,R="Array"==n?j.entries||O:O;if(R&&(w=A(R.call(new t)))!==Object.prototype&&w.next&&(l(w,b,!0),o||c(w,f)||s(w,f,d)),B&&O&&"values"!==O.name&&(k=!0,L=function(){return O.call(this)}),o&&!g||!p&&!k&&j[f]||s(j,f,L),a[n]=L,a[b]=d,v)if(C={values:B?L:x("values"),keys:m?L:x("keys"),entries:E},g)for(y in C)y in j||i(j,y,C[y]);else r(r.P+r.F*(p||k),n,C);return C}},140:function(t,n){t.exports=!0},141:function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},142:function(t,n,e){var o=e(30),r=e(5),i=e(134);t.exports=function(t,n){if(o(t),r(n)&&n.constructor===t)return n;var e=i.f(t);return(0,e.resolve)(n),e.promise}},143:function(t,n,e){var o=e(30),r=e(32),i=e(130)("species");t.exports=function(t,n){var e,s=o(t).constructor;return void 0===s||void 0==(e=o(s)[i])?n:r(e)}},144:function(t,n,e){var o,r,i,s=e(34),c=e(157),a=e(138),u=e(37),l=e(3),A=l.process,f=l.setImmediate,p=l.clearImmediate,d=l.MessageChannel,h=l.Dispatch,v=0,m={},g=function(){var t=+this;if(m.hasOwnProperty(t)){var n=m[t];delete m[t],n()}},C=function(t){g.call(t.data)};f&&p||(f=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return m[++v]=function(){c("function"==typeof t?t:Function(t),n)},o(v),v},p=function(t){delete m[t]},"process"==e(33)(A)?o=function(t){A.nextTick(s(g,t,1))}:h&&h.now?o=function(t){h.now(s(g,t,1))}:d?(r=new d,i=r.port2,r.port1.onmessage=C,o=s(i.postMessage,i,1)):l.addEventListener&&"function"==typeof postMessage&&!l.importScripts?(o=function(t){l.postMessage(t+"","*")},l.addEventListener("message",C,!1)):o="onreadystatechange"in u("script")?function(t){a.appendChild(u("script")).onreadystatechange=function(){a.removeChild(this),g.call(t)}}:function(t){setTimeout(s(g,t,1),0)}),t.exports={set:f,clear:p}},146:function(t,n,e){"use strict";function o(t,n,e){var o=t+(t.indexOf("?")<0?"?":"&")+r(n);return new s.a(function(t,n){a()(o,e,function(e,o){e?n(e):t(o)})})}function r(t){var n=[];for(var e in t)n.push(e+"="+encodeURIComponent(t[e]));return n.length?n.join("&"):""}n.a=o;var i=e(136),s=e.n(i),c=e(183),a=e.n(c)},152:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={props:{title:{type:String,default:"正在加载..."}}}},153:function(t,n,e){e(173),e(175),e(178),e(174),e(176),e(177),t.exports=e(4).Promise},154:function(t,n){t.exports=function(){}},155:function(t,n){t.exports=function(t,n,e,o){if(!(t instanceof n)||void 0!==o&&o in t)throw TypeError(e+": incorrect invocation!");return t}},156:function(t,n,e){var o=e(34),r=e(159),i=e(158),s=e(30),c=e(46),a=e(171),u={},l={},n=t.exports=function(t,n,e,A,f){var p,d,h,v,m=f?function(){return t}:a(t),g=o(e,A,n?2:1),C=0;if("function"!=typeof m)throw TypeError(t+" is not iterable!");if(i(m)){for(p=c(t.length);p>C;C++)if((v=n?g(s(d=t[C])[0],d[1]):g(t[C]))===u||v===l)return v}else for(h=m.call(t);!(d=h.next()).done;)if((v=r(h,g,d.value,n))===u||v===l)return v};n.BREAK=u,n.RETURN=l},157:function(t,n){t.exports=function(t,n,e){var o=void 0===e;switch(n.length){case 0:return o?t():t.call(e);case 1:return o?t(n[0]):t.call(e,n[0]);case 2:return o?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return o?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return o?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}return t.apply(e,n)}},158:function(t,n,e){var o=e(132),r=e(130)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||i[r]===t)}},159:function(t,n,e){var o=e(30);t.exports=function(t,n,e,r){try{return r?n(o(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&o(i.call(t)),n}}},160:function(t,n,e){"use strict";var o=e(164),r=e(44),i=e(135),s={};e(31)(s,e(130)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=o(s,{next:r(1,e)}),i(t,n+" Iterator")}},161:function(t,n,e){var o=e(130)("iterator"),r=!1;try{var i=[7][o]();i.return=function(){r=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!r)return!1;var e=!1;try{var i=[7],s=i[o]();s.next=function(){return{done:e=!0}},i[o]=function(){return s},t(i)}catch(t){}return e}},162:function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},163:function(t,n,e){var o=e(3),r=e(144).set,i=o.MutationObserver||o.WebKitMutationObserver,s=o.process,c=o.Promise,a="process"==e(33)(s);t.exports=function(){var t,n,e,u=function(){var o,r;for(a&&(o=s.domain)&&o.exit();t;){r=t.fn,t=t.next;try{r()}catch(o){throw t?e():n=void 0,o}}n=void 0,o&&o.enter()};if(a)e=function(){s.nextTick(u)};else if(!i||o.navigator&&o.navigator.standalone)if(c&&c.resolve){var l=c.resolve();e=function(){l.then(u)}}else e=function(){r.call(o,u)};else{var A=!0,f=document.createTextNode("");new i(u).observe(f,{characterData:!0}),e=function(){f.data=A=!A}}return function(o){var r={fn:o,next:void 0};n&&(n.next=r),t||(t=r,e()),n=r}}},164:function(t,n,e){var o=e(30),r=e(165),i=e(42),s=e(38)("IE_PROTO"),c=function(){},a=function(){var t,n=e(37)("iframe"),o=i.length;for(n.style.display="none",e(138).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;o--;)delete a.prototype[i[o]];return a()};t.exports=Object.create||function(t,n){var e;return null!==t?(c.prototype=o(t),e=new c,c.prototype=null,e[s]=t):e=a(),void 0===n?e:r(e,n)}},165:function(t,n,e){var o=e(13),r=e(30),i=e(43);t.exports=e(1)?Object.defineProperties:function(t,n){r(t);for(var e,s=i(n),c=s.length,a=0;c>a;)o.f(t,e=s[a++],n[e]);return t}},166:function(t,n,e){var o=e(35),r=e(47),i=e(38)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),o(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},167:function(t,n,e){var o=e(31);t.exports=function(t,n,e){for(var r in n)e&&t[r]?t[r]=n[r]:o(t,r,n[r]);return t}},168:function(t,n,e){t.exports=e(31)},169:function(t,n,e){"use strict";var o=e(3),r=e(4),i=e(13),s=e(1),c=e(130)("species");t.exports=function(t){var n="function"==typeof r[t]?r[t]:o[t];s&&n&&!n[c]&&i.f(n,c,{configurable:!0,get:function(){return this}})}},170:function(t,n,e){var o=e(16),r=e(15);t.exports=function(t){return function(n,e){var i,s,c=String(r(n)),a=o(e),u=c.length;return a<0||a>=u?t?"":void 0:(i=c.charCodeAt(a),i<55296||i>56319||a+1===u||(s=c.charCodeAt(a+1))<56320||s>57343?t?c.charAt(a):i:t?c.slice(a,a+2):s-56320+(i-55296<<10)+65536)}}},171:function(t,n,e){var o=e(137),r=e(130)("iterator"),i=e(132);t.exports=e(4).getIteratorMethod=function(t){if(void 0!=t)return t[r]||t["@@iterator"]||i[o(t)]}},172:function(t,n,e){"use strict";var o=e(154),r=e(162),i=e(132),s=e(17);t.exports=e(139)(Array,"Array",function(t,n){this._t=s(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,r(1)):"keys"==n?r(0,e):"values"==n?r(0,t[e]):r(0,[e,t[e]])},"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},173:function(t,n){},174:function(t,n,e){"use strict";var o,r,i,s,c=e(140),a=e(3),u=e(34),l=e(137),A=e(12),f=e(5),p=e(32),d=e(155),h=e(156),v=e(143),m=e(144).set,g=e(163)(),C=e(134),y=e(141),w=e(142),x=a.TypeError,b=a.process,B=a.Promise,k="process"==l(b),j=function(){},O=r=C.f,L=!!function(){try{var t=B.resolve(1),n=(t.constructor={})[e(130)("species")]=function(t){t(j,j)};return(k||"function"==typeof PromiseRejectionEvent)&&t.then(j)instanceof n}catch(t){}}(),E=function(t){var n;return!(!f(t)||"function"!=typeof(n=t.then))&&n},R=function(t,n){if(!t._n){t._n=!0;var e=t._c;g(function(){for(var o=t._v,r=1==t._s,i=0;e.length>i;)!function(n){var e,i,s=r?n.ok:n.fail,c=n.resolve,a=n.reject,u=n.domain;try{s?(r||(2==t._h&&M(t),t._h=1),!0===s?e=o:(u&&u.enter(),e=s(o),u&&u.exit()),e===n.promise?a(x("Promise-chain cycle")):(i=E(e))?i.call(e,c,a):c(e)):a(o)}catch(t){a(t)}}(e[i++]);t._c=[],t._n=!1,n&&!t._h&&D(t)})}},D=function(t){m.call(a,function(){var n,e,o,r=t._v,i=S(t);if(i&&(n=y(function(){k?b.emit("unhandledRejection",r,t):(e=a.onunhandledrejection)?e({promise:t,reason:r}):(o=a.console)&&o.error&&o.error("Unhandled promise rejection",r)}),t._h=k||S(t)?2:1),t._a=void 0,i&&n.e)throw n.v})},S=function(t){return 1!==t._h&&0===(t._a||t._c).length},M=function(t){m.call(a,function(){var n;k?b.emit("rejectionHandled",t):(n=a.onrejectionhandled)&&n({promise:t,reason:t._v})})},I=function(t){var n=this;n._d||(n._d=!0,n=n._w||n,n._v=t,n._s=2,n._a||(n._a=n._c.slice()),R(n,!0))},T=function(t){var n,e=this;if(!e._d){e._d=!0,e=e._w||e;try{if(e===t)throw x("Promise can't be resolved itself");(n=E(t))?g(function(){var o={_w:e,_d:!1};try{n.call(t,u(T,o,1),u(I,o,1))}catch(t){I.call(o,t)}}):(e._v=t,e._s=1,R(e,!1))}catch(t){I.call({_w:e,_d:!1},t)}}};L||(B=function(t){d(this,B,"Promise","_h"),p(t),o.call(this);try{t(u(T,this,1),u(I,this,1))}catch(t){I.call(this,t)}},o=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},o.prototype=e(167)(B.prototype,{then:function(t,n){var e=O(v(this,B));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=k?b.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&R(this,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new o;this.promise=t,this.resolve=u(T,t,1),this.reject=u(I,t,1)},C.f=O=function(t){return t===B||t===s?new i(t):r(t)}),A(A.G+A.W+A.F*!L,{Promise:B}),e(135)(B,"Promise"),e(169)("Promise"),s=e(4).Promise,A(A.S+A.F*!L,"Promise",{reject:function(t){var n=O(this);return(0,n.reject)(t),n.promise}}),A(A.S+A.F*(c||!L),"Promise",{resolve:function(t){return w(c&&this===s?B:this,t)}}),A(A.S+A.F*!(L&&e(161)(function(t){B.all(t).catch(j)})),"Promise",{all:function(t){var n=this,e=O(n),o=e.resolve,r=e.reject,i=y(function(){var e=[],i=0,s=1;h(t,!1,function(t){var c=i++,a=!1;e.push(void 0),s++,n.resolve(t).then(function(t){a||(a=!0,e[c]=t,--s||o(e))},r)}),--s||o(e)});return i.e&&r(i.v),e.promise},race:function(t){var n=this,e=O(n),o=e.reject,r=y(function(){h(t,!1,function(t){n.resolve(t).then(e.resolve,o)})});return r.e&&o(r.v),e.promise}})},175:function(t,n,e){"use strict";var o=e(170)(!0);e(139)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=o(n,e),this._i+=t.length,{value:t,done:!1})})},176:function(t,n,e){"use strict";var o=e(12),r=e(4),i=e(3),s=e(143),c=e(142);o(o.P+o.R,"Promise",{finally:function(t){var n=s(this,r.Promise||i.Promise),e="function"==typeof t;return this.then(e?function(e){return c(n,t()).then(function(){return e})}:t,e?function(e){return c(n,t()).then(function(){throw e})}:t)}})},177:function(t,n,e){"use strict";var o=e(12),r=e(134),i=e(141);o(o.S,"Promise",{try:function(t){var n=r.f(this),e=i(t);return(e.e?n.reject:n.resolve)(e.v),n.promise}})},178:function(t,n,e){e(172);for(var o=e(3),r=e(31),i=e(132),s=e(130)("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),a=0;a<c.length;a++){var u=c[a],l=o[u],A=l&&l.prototype;A&&!A[s]&&r(A,s,u),i[u]=i.Array}},179:function(t,n,e){n=t.exports=e(119)(!0),n.push([t.i,".loading{width:100%;text-align:center}.loading .desc{line-height:20px;font-size:12px;color:hsla(0,0%,100%,.5)}","",{version:3,sources:["E:/study/vue-project/qqmusic/src/base/loading/loading.vue"],names:[],mappings:"AACA,SACE,WAAY,AACZ,iBAAmB,CACpB,AACD,eACE,iBAAkB,AAClB,eAAgB,AAChB,wBAAgC,CACjC",file:"loading.vue",sourcesContent:["/* 定义样式 颜色和字体大小*/\n.loading {\n  width: 100%;\n  text-align: center;\n}\n.loading .desc {\n  line-height: 20px;\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.5);\n}\n"],sourceRoot:""}])},180:function(t,n,e){(function(o){function r(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type)||("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function i(t){var e=this.useColors;if(t[0]=(e?"%c":"")+this.namespace+(e?" %c":" ")+t[0]+(e?"%c ":" ")+"+"+n.humanize(this.diff),e){var o="color: "+this.color;t.splice(1,0,o,"color: inherit");var r=0,i=0;t[0].replace(/%[a-zA-Z%]/g,function(t){"%%"!==t&&(r++,"%c"===t&&(i=r))}),t.splice(i,0,o)}}function s(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function c(t){try{null==t?n.storage.removeItem("debug"):n.storage.debug=t}catch(t){}}function a(){var t;try{t=n.storage.debug}catch(t){}return!t&&void 0!==o&&"env"in o&&(t=e.i({NODE_ENV:"production"}).DEBUG),t}n=t.exports=e(181),n.log=s,n.formatArgs=i,n.save=c,n.load=a,n.useColors=r,n.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(t){}}(),n.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],n.formatters.j=function(t){try{return JSON.stringify(t)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},n.enable(a())}).call(n,e(39))},181:function(t,n,e){function o(t){var e,o=0;for(e in t)o=(o<<5)-o+t.charCodeAt(e),o|=0;return n.colors[Math.abs(o)%n.colors.length]}function r(t){function e(){if(e.enabled){var t=e,o=+new Date,r=o-(u||o);t.diff=r,t.prev=u,t.curr=o,u=o;for(var i=new Array(arguments.length),s=0;s<i.length;s++)i[s]=arguments[s];i[0]=n.coerce(i[0]),"string"!=typeof i[0]&&i.unshift("%O");var c=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,function(e,o){if("%%"===e)return e;c++;var r=n.formatters[o];if("function"==typeof r){var s=i[c];e=r.call(t,s),i.splice(c,1),c--}return e}),n.formatArgs.call(t,i);(e.log||n.log||console.log.bind(console)).apply(t,i)}}return e.namespace=t,e.enabled=n.enabled(t),e.useColors=n.useColors(),e.color=o(t),"function"==typeof n.init&&n.init(e),e}function i(t){n.save(t),n.names=[],n.skips=[];for(var e=("string"==typeof t?t:"").split(/[\s,]+/),o=e.length,r=0;r<o;r++)e[r]&&(t=e[r].replace(/\*/g,".*?"),"-"===t[0]?n.skips.push(new RegExp("^"+t.substr(1)+"$")):n.names.push(new RegExp("^"+t+"$")))}function s(){n.enable("")}function c(t){var e,o;for(e=0,o=n.skips.length;e<o;e++)if(n.skips[e].test(t))return!1;for(e=0,o=n.names.length;e<o;e++)if(n.names[e].test(t))return!0;return!1}function a(t){return t instanceof Error?t.stack||t.message:t}n=t.exports=r.debug=r.default=r,n.coerce=a,n.disable=s,n.enable=i,n.enabled=c,n.humanize=e(184),n.names=[],n.skips=[],n.formatters={};var u},182:function(t,n,e){var o=e(179);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e(120)("20c12579",o,!0)},183:function(t,n,e){function o(){}function r(t,n,e){function r(){a.parentNode&&a.parentNode.removeChild(a),window[A]=o,u&&clearTimeout(u)}function c(){window[A]&&r()}"function"==typeof n&&(e=n,n={}),n||(n={});var a,u,l=n.prefix||"__jp",A=n.name||l+s++,f=n.param||"callback",p=null!=n.timeout?n.timeout:6e4,d=encodeURIComponent,h=document.getElementsByTagName("script")[0]||document.head;return p&&(u=setTimeout(function(){r(),e&&e(new Error("Timeout"))},p)),window[A]=function(t){i("jsonp got",t),r(),e&&e(null,t)},t+=(~t.indexOf("?")?"&":"?")+f+"="+d(A),t=t.replace("?&","?"),i('jsonp req "%s"',t),a=document.createElement("script"),a.src=t,h.parentNode.insertBefore(a,h),c}var i=e(180)("jsonp");t.exports=r;var s=0},184:function(t,n){function e(t){if(t=String(t),!(t.length>100)){var n=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(n){var e=parseFloat(n[1]);switch((n[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return e*l;case"days":case"day":case"d":return e*u;case"hours":case"hour":case"hrs":case"hr":case"h":return e*a;case"minutes":case"minute":case"mins":case"min":case"m":return e*c;case"seconds":case"second":case"secs":case"sec":case"s":return e*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return e;default:return}}}}function o(t){return t>=u?Math.round(t/u)+"d":t>=a?Math.round(t/a)+"h":t>=c?Math.round(t/c)+"m":t>=s?Math.round(t/s)+"s":t+"ms"}function r(t){return i(t,u,"day")||i(t,a,"hour")||i(t,c,"minute")||i(t,s,"second")||t+" ms"}function i(t,n,e){if(!(t<n))return t<1.5*n?Math.floor(t/n)+" "+e:Math.ceil(t/n)+" "+e+"s"}var s=1e3,c=60*s,a=60*c,u=24*a,l=365.25*u;t.exports=function(t,n){n=n||{};var i=typeof t;if("string"===i&&t.length>0)return e(t);if("number"===i&&!1===isNaN(t))return n.long?r(t):o(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}},185:function(t,n){t.exports="data:image/gif;base64,R0lGODlhZABkAKIEAN7e3rq6uv///5mZmQAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpBRjA4RUZDMDI3MjA2ODExODA4M0Y1OTQyMzVDRDM3MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCMzE0Rjk3NDdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCMzE0Rjk3MzdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDVBMTZDQjczOTIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUYwOEVGQzAyNzIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+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"},186:function(t,n,e){function o(t){e(182)}var r=e(0)(e(152),e(187),o,null,null);t.exports=r.exports},187:function(t,n,e){t.exports={render:function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"loading"},[o("img",{attrs:{src:e(185),height:"24",width:"24",alt:""}}),t._v(" "),o("p",{staticClass:"desc"},[t._v(t._s(t.title))])])},staticRenderFns:[]}},233:function(t,n,e){"use strict";function o(){var t=s()({},a.b,{g_tk:5381,notice:0,platform:"h5",needNewCode:1});return e.i(c.a)("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",t,a.c)}function r(t){var n=s()({},a.b,{platform:"h5",needNewCode:1,tpl:3,page:"detail",type:"top",topid:t});return e.i(c.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",n,a.c)}n.b=o,n.a=r;var i=e(40),s=e.n(i),c=e(146),a=e(133)},248:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(36),r=e.n(o),i=e(233),s=e(133),c=e(41),a=e.n(c),u=e(186),l=e.n(u),A=e(14);n.default={components:{Scroll:a.a,Loading:l.a},data:function(){return{toplist:[]}},created:function(){var t=this;setTimeout(function(){t._getTopList()},1e3)},methods:r()({goDetailTopList:function(t){this.$router.push({path:"/ranking/"+t.id}),this.setTopList(t)},_getTopList:function(){var t=this;e.i(i.b)().then(function(n){s.a==n.code&&(t.toplist=n.data.topList)})}},e.i(A.b)({setTopList:"SET_TOPLIST"}))}},266:function(t,n,e){n=t.exports=e(119)(!0),n.push([t.i,".rank[data-v-9242b93c]{position:fixed;width:100%;top:88px;bottom:0}.rank .toplist[data-v-9242b93c]{height:100%;overflow:hidden}.rank .toplist .item[data-v-9242b93c]{display:-webkit-box;display:-ms-flexbox;display:flex;margin:0 20px;padding-top:20px;height:100px}.rank .toplist .item[data-v-9242b93c]:last-child{padding-bottom:20px}.rank .toplist .item .icon[data-v-9242b93c]{-webkit-box-flex:0;-ms-flex:0 0 100px;flex:0 0 100px;width:100px;height:100px}.rank .toplist .item .songlist[data-v-9242b93c]{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:0 20px;height:100px;overflow:hidden;background:#333;color:hsla(0,0%,100%,.3);font-size:12px}.rank .toplist .item .songlist .song[data-v-9242b93c]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;line-height:26px}.rank .toplist .loading-container[data-v-9242b93c]{position:absolute;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}","",{version:3,sources:["E:/study/vue-project/qqmusic/src/views/Ranking.vue"],names:[],mappings:"AACA,uBACE,eAAgB,AAChB,WAAY,AACZ,SAAU,AACV,QAAU,CACX,AACD,gCACE,YAAa,AACb,eAAiB,CAClB,AACD,sCACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,cAAe,AACf,iBAAkB,AAClB,YAAc,CACf,AACD,iDACE,mBAAqB,CACtB,AACD,4CACE,mBAAoB,AAChB,mBAAoB,AAChB,eAAgB,AACxB,YAAa,AACb,YAAc,CACf,AACD,gDACE,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,sBAAuB,AAC/B,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,eAAgB,AAChB,aAAc,AACd,gBAAiB,AACjB,gBAAiB,AACjB,yBAAgC,AAChC,cAAgB,CACjB,AACD,sDACE,uBAAwB,AACxB,gBAAiB,AACjB,mBAAoB,AACpB,gBAAkB,CACnB,AACD,mDACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,mCAAoC,AAC5B,0BAA4B,CACrC",file:"Ranking.vue",sourcesContent:["/* 定义样式 颜色和字体大小*/\n.rank[data-v-9242b93c] {\n  position: fixed;\n  width: 100%;\n  top: 88px;\n  bottom: 0;\n}\n.rank .toplist[data-v-9242b93c] {\n  height: 100%;\n  overflow: hidden;\n}\n.rank .toplist .item[data-v-9242b93c] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0 20px;\n  padding-top: 20px;\n  height: 100px;\n}\n.rank .toplist .item[data-v-9242b93c]:last-child {\n  padding-bottom: 20px;\n}\n.rank .toplist .item .icon[data-v-9242b93c] {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 100px;\n          flex: 0 0 100px;\n  width: 100px;\n  height: 100px;\n}\n.rank .toplist .item .songlist[data-v-9242b93c] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 0 20px;\n  height: 100px;\n  overflow: hidden;\n  background: #333;\n  color: rgba(255, 255, 255, 0.3);\n  font-size: 12px;\n}\n.rank .toplist .item .songlist .song[data-v-9242b93c] {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  line-height: 26px;\n}\n.rank .toplist .loading-container[data-v-9242b93c] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n"],sourceRoot:""}])},281:function(t,n,e){var o=e(266);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e(120)("6c60382f",o,!0)},305:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"rank"},[e("Scroll",{staticClass:"toplist",attrs:{data:t.toplist}},[e("ul",t._l(t.toplist,function(n,o){return e("li",{staticClass:"item",on:{click:function(e){t.goDetailTopList(n)}}},[e("div",{staticClass:"icon"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n.picUrl,expression:"item.picUrl"}],attrs:{width:"100",height:"100",alt:""}})]),t._v(" "),e("ul",{staticClass:"songlist"},t._l(n.songList,function(n,o){return e("li",{staticClass:"song"},[e("span",[t._v(t._s(o+1)+".")]),t._v(" "),e("span",[t._v(t._s(n.songname)+t._s(n.singername))])])}))])})),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.toplist.length,expression:"!toplist.length"}],staticClass:"loading-container"},[e("Loading")],1)]),t._v(" "),e("router-view")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=6.fe9fedb0aa2e440f99d7.js.map