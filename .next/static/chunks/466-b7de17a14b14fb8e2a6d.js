"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[466],{72275:function(e,t,n){n.d(t,{v:function(){return L}});var r=n(19642),o=n(67294),a=n(133),i=n(58529),s=n(57471),c=n(62659),u=n(79016),l=n(60852),f=n(92506),p=n(35057),d=n(24198),m=n(3980);function h(e){var t;if(e.type)return e.type;var n=null!=(t=e.as)?t:"button";return"string"===typeof n&&"button"===n.toLowerCase()?"button":void 0}function v(e,t){var n=(0,o.useState)((function(){return h(e)})),r=n[0],a=n[1];return(0,l.e)((function(){a(h(e))}),[e.type,e.as]),(0,l.e)((function(){r||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&a("button")}),[r,t]),r}var y,g=n(9472);function I(){var e=(0,o.useState)(g.k)[0];return(0,o.useEffect)((function(){return function(){return e.dispose()}}),[e]),e}function b(e,t){var n=t.resolveItems();if(n.length<=0)return null;var r=t.resolveActiveIndex(),o=null!=r?r:-1,a=function(){switch(e.focus){case y.First:return n.findIndex((function(e){return!t.resolveDisabled(e)}));case y.Previous:var r=n.slice().reverse().findIndex((function(e,n,r){return!(-1!==o&&r.length-n-1>=o)&&!t.resolveDisabled(e)}));return-1===r?r:n.length-1-r;case y.Next:return n.findIndex((function(e,n){return!(n<=o)&&!t.resolveDisabled(e)}));case y.Last:var a=n.slice().reverse().findIndex((function(e){return!t.resolveDisabled(e)}));return-1===a?a:n.length-1-a;case y.Specific:return n.findIndex((function(n){return t.resolveId(n)===e.id}));case y.Nothing:return null;default:!function(e){throw new Error("Unexpected object: "+e)}(e)}}();return-1===a?r:a}!function(e){e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing"}(y||(y={}));var C,x,S,R=n(61145);!function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(x||(x={})),function(e){e[e.OpenMenu=0]="OpenMenu",e[e.CloseMenu=1]="CloseMenu",e[e.GoToItem=2]="GoToItem",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterItem=5]="RegisterItem",e[e.UnregisterItem=6]="UnregisterItem"}(S||(S={}));var w=((C={})[S.CloseMenu]=function(e){return e.menuState===x.Closed?e:(0,r.gY)({},e,{activeItemIndex:null,menuState:x.Closed})},C[S.OpenMenu]=function(e){return e.menuState===x.Open?e:(0,r.gY)({},e,{menuState:x.Open})},C[S.GoToItem]=function(e,t){var n=b(t,{resolveItems:function(){return e.items},resolveActiveIndex:function(){return e.activeItemIndex},resolveId:function(e){return e.id},resolveDisabled:function(e){return e.dataRef.current.disabled}});return""===e.searchQuery&&e.activeItemIndex===n?e:(0,r.gY)({},e,{searchQuery:"",activeItemIndex:n})},C[S.Search]=function(e,t){var n=e.searchQuery+t.value.toLowerCase(),o=e.items.findIndex((function(e){var t;return(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(n))&&!e.dataRef.current.disabled}));return-1===o||o===e.activeItemIndex?(0,r.gY)({},e,{searchQuery:n}):(0,r.gY)({},e,{searchQuery:n,activeItemIndex:o})},C[S.ClearSearch]=function(e){return""===e.searchQuery?e:(0,r.gY)({},e,{searchQuery:""})},C[S.RegisterItem]=function(e,t){return(0,r.gY)({},e,{items:[].concat(e.items,[{id:t.id,dataRef:t.dataRef}])})},C[S.UnregisterItem]=function(e,t){var n=e.items.slice(),o=null!==e.activeItemIndex?n[e.activeItemIndex]:null,a=n.findIndex((function(e){return e.id===t.id}));return-1!==a&&n.splice(a,1),(0,r.gY)({},e,{items:n,activeItemIndex:a===e.activeItemIndex||null===o?null:n.indexOf(o)})},C),k=(0,o.createContext)(null);function E(e){var t=(0,o.useContext)(k);if(null===t){var n=new Error("<"+e+" /> is missing a parent <"+L.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,E),n}return t}function O(e,t){return(0,a.E)(t.type,w,e,t)}k.displayName="MenuContext";var M=o.Fragment;function L(e){var t,n=(0,o.useReducer)(O,{menuState:x.Closed,buttonRef:(0,o.createRef)(),itemsRef:(0,o.createRef)(),items:[],searchQuery:"",activeItemIndex:null}),r=n[0],s=r.menuState,c=r.itemsRef,u=r.buttonRef,l=n[1];(0,d.s)("mousedown",(function(e){var t,n,r,o=e.target;s===x.Open&&((null==(t=u.current)?void 0:t.contains(o))||(null==(n=c.current)?void 0:n.contains(o))||(l({type:S.CloseMenu}),(0,p.sP)(o,p.tJ.Loose)||(e.preventDefault(),null==(r=u.current)||r.focus())))}));var f=(0,o.useMemo)((function(){return{open:s===x.Open}}),[s]);return o.createElement(k.Provider,{value:n},o.createElement(m.up,{value:(0,a.E)(s,(t={},t[x.Open]=m.ZM.Open,t[x.Closed]=m.ZM.Closed,t))},(0,i.sY)({props:e,slot:f,defaultTag:M,name:"Menu"})))}var T=(0,i.yV)((function e(t,n){var a,l=E([L.name,e.name].join(".")),p=l[0],d=l[1],m=(0,s.T)(p.buttonRef,n),h="headlessui-menu-button-"+(0,f.M)(),g=I(),b=(0,o.useCallback)((function(e){switch(e.key){case c.R.Space:case c.R.Enter:case c.R.ArrowDown:e.preventDefault(),e.stopPropagation(),d({type:S.OpenMenu}),g.nextFrame((function(){return d({type:S.GoToItem,focus:y.First})}));break;case c.R.ArrowUp:e.preventDefault(),e.stopPropagation(),d({type:S.OpenMenu}),g.nextFrame((function(){return d({type:S.GoToItem,focus:y.Last})}))}}),[d,g]),C=(0,o.useCallback)((function(e){switch(e.key){case c.R.Space:e.preventDefault()}}),[]),R=(0,o.useCallback)((function(e){if((0,u.P)(e.currentTarget))return e.preventDefault();t.disabled||(p.menuState===x.Open?(d({type:S.CloseMenu}),g.nextFrame((function(){var e;return null==(e=p.buttonRef.current)?void 0:e.focus({preventScroll:!0})}))):(e.preventDefault(),e.stopPropagation(),d({type:S.OpenMenu})))}),[d,g,p,t.disabled]),w=(0,o.useMemo)((function(){return{open:p.menuState===x.Open}}),[p]),k=t,O={ref:m,id:h,type:v(t,p.buttonRef),"aria-haspopup":!0,"aria-controls":null==(a=p.itemsRef.current)?void 0:a.id,"aria-expanded":t.disabled?void 0:p.menuState===x.Open,onKeyDown:b,onKeyUp:C,onClick:R};return(0,i.sY)({props:(0,r.gY)({},k,O),slot:w,defaultTag:"button",name:"Menu.Button"})})),N=i.AN.RenderStrategy|i.AN.Static,P=(0,i.yV)((function e(t,n){var a,u,l=E([L.name,e.name].join(".")),p=l[0],d=l[1],h=(0,s.T)(p.itemsRef,n),v="headlessui-menu-items-"+(0,f.M)(),b=I(),C=(0,m.oJ)(),w=null!==C?C===m.ZM.Open:p.menuState===x.Open;(0,o.useEffect)((function(){var e=p.itemsRef.current;e&&p.menuState===x.Open&&e!==document.activeElement&&e.focus({preventScroll:!0})}),[p.menuState,p.itemsRef]),(0,R.B)({container:p.itemsRef.current,enabled:p.menuState===x.Open,accept:function(e){return"menuitem"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk:function(e){e.setAttribute("role","none")}});var k=(0,o.useCallback)((function(e){switch(b.dispose(),e.key){case c.R.Space:if(""!==p.searchQuery)return e.preventDefault(),e.stopPropagation(),d({type:S.Search,value:e.key});case c.R.Enter:if(e.preventDefault(),e.stopPropagation(),d({type:S.CloseMenu}),null!==p.activeItemIndex){var t,n=p.items[p.activeItemIndex].id;null==(t=document.getElementById(n))||t.click()}(0,g.k)().nextFrame((function(){var e;return null==(e=p.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));break;case c.R.ArrowDown:return e.preventDefault(),e.stopPropagation(),d({type:S.GoToItem,focus:y.Next});case c.R.ArrowUp:return e.preventDefault(),e.stopPropagation(),d({type:S.GoToItem,focus:y.Previous});case c.R.Home:case c.R.PageUp:return e.preventDefault(),e.stopPropagation(),d({type:S.GoToItem,focus:y.First});case c.R.End:case c.R.PageDown:return e.preventDefault(),e.stopPropagation(),d({type:S.GoToItem,focus:y.Last});case c.R.Escape:e.preventDefault(),e.stopPropagation(),d({type:S.CloseMenu}),(0,g.k)().nextFrame((function(){var e;return null==(e=p.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));break;case c.R.Tab:e.preventDefault(),e.stopPropagation();break;default:1===e.key.length&&(d({type:S.Search,value:e.key}),b.setTimeout((function(){return d({type:S.ClearSearch})}),350))}}),[d,b,p]),O=(0,o.useCallback)((function(e){switch(e.key){case c.R.Space:e.preventDefault()}}),[]),M=(0,o.useMemo)((function(){return{open:p.menuState===x.Open}}),[p]),T={"aria-activedescendant":null===p.activeItemIndex||null==(a=p.items[p.activeItemIndex])?void 0:a.id,"aria-labelledby":null==(u=p.buttonRef.current)?void 0:u.id,id:v,onKeyDown:k,onKeyUp:O,role:"menu",tabIndex:0,ref:h},P=t;return(0,i.sY)({props:(0,r.gY)({},P,T),slot:M,defaultTag:"div",features:N,visible:w,name:"Menu.Items"})})),D=o.Fragment;L.Button=T,L.Items=P,L.Item=function e(t){var n=t.disabled,a=void 0!==n&&n,s=t.onClick,c=(0,r.gK)(t,["disabled","onClick"]),u=E([L.name,e.name].join(".")),p=u[0],d=u[1],m="headlessui-menu-item-"+(0,f.M)(),h=null!==p.activeItemIndex&&p.items[p.activeItemIndex].id===m;(0,l.e)((function(){if(p.menuState===x.Open&&h){var e=(0,g.k)();return e.nextFrame((function(){var e;return null==(e=document.getElementById(m))||null==e.scrollIntoView?void 0:e.scrollIntoView({block:"nearest"})})),e.dispose}}),[m,h,p.menuState]);var v=(0,o.useRef)({disabled:a});(0,l.e)((function(){v.current.disabled=a}),[v,a]),(0,l.e)((function(){var e,t;v.current.textValue=null==(e=document.getElementById(m))||null==(t=e.textContent)?void 0:t.toLowerCase()}),[v,m]),(0,l.e)((function(){return d({type:S.RegisterItem,id:m,dataRef:v}),function(){return d({type:S.UnregisterItem,id:m})}}),[v,m]);var I=(0,o.useCallback)((function(e){return a?e.preventDefault():(d({type:S.CloseMenu}),(0,g.k)().nextFrame((function(){var e;return null==(e=p.buttonRef.current)?void 0:e.focus({preventScroll:!0})})),s?s(e):void 0)}),[d,p.buttonRef,a,s]),b=(0,o.useCallback)((function(){if(a)return d({type:S.GoToItem,focus:y.Nothing});d({type:S.GoToItem,focus:y.Specific,id:m})}),[a,m,d]),C=(0,o.useCallback)((function(){a||h||d({type:S.GoToItem,focus:y.Specific,id:m})}),[a,h,m,d]),R=(0,o.useCallback)((function(){a||h&&d({type:S.GoToItem,focus:y.Nothing})}),[a,h,d]),w=(0,o.useMemo)((function(){return{active:h,disabled:a}}),[h,a]),k={id:m,role:"menuitem",tabIndex:!0===a?void 0:-1,"aria-disabled":!0===a||void 0,disabled:void 0,onClick:I,onFocus:b,onPointerMove:C,onMouseMove:C,onPointerLeave:R,onMouseLeave:R};return(0,i.sY)({props:(0,r.gY)({},c,k),slot:w,defaultTag:D,name:"Menu.Item"})}},61145:function(e,t,n){n.d(t,{B:function(){return a}});var r=n(67294),o=n(60852);function a(e){var t=e.container,n=e.accept,a=e.walk,i=e.enabled,s=void 0===i||i,c=(0,r.useRef)(n),u=(0,r.useRef)(a);(0,r.useEffect)((function(){c.current=n,u.current=a}),[n,a]),(0,o.e)((function(){if(t&&s)for(var e=c.current,n=u.current,r=Object.assign((function(t){return e(t)}),{acceptNode:e}),o=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,r,!1);o.nextNode();)n(o.currentNode)}),[t,s,c,u])}},12828:function(e,t,n){const r=n(86900),o=n(80834),a=n(61269),i=new a({maxSize:1e5}),s=e=>"object"===typeof e&&null!==e&&!(e instanceof RegExp)&&!(e instanceof Error)&&!(e instanceof Date),c=(e,t)=>{if(!s(e))return e;t={deep:!1,pascalCase:!1,...t};const{exclude:n,pascalCase:a,stopPaths:c,deep:u}=t,l=new Set(c),f=e=>(t,c)=>{if(u&&s(c)){const n=void 0===e?t:`${e}.${t}`;l.has(n)||(c=r(c,f(n)))}if(!n||!((e,t)=>e.some((e=>"string"===typeof e?e===t:(e.lastIndex=0,e.test(t)))))(n,t)){const e=a?`${t}_`:t;if(i.has(e))t=i.get(e);else{const n=o(t,{pascalCase:a});t.length<100&&i.set(e,n),t=n}}return[t,c]};return r(e,f(void 0))};e.exports=(e,t)=>Array.isArray(e)?Object.keys(e).map((n=>c(e[n],t))):c(e,t)},80834:function(e){const t=(e,t)=>{if("string"!==typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(t={pascalCase:!1,preserveConsecutiveUppercase:!1,...t},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";if(1===e.length)return t.pascalCase?e.toLocaleUpperCase(t.locale):e.toLocaleLowerCase(t.locale);return e!==e.toLocaleLowerCase(t.locale)&&(e=((e,t)=>{let n=!1,r=!1,o=!1;for(let a=0;a<e.length;a++){const i=e[a];n&&/[\p{Lu}]/u.test(i)?(e=e.slice(0,a)+"-"+e.slice(a),n=!1,o=r,r=!0,a++):r&&o&&/[\p{Ll}]/u.test(i)?(e=e.slice(0,a-1)+"-"+e.slice(a-1),o=r,r=!1,n=!0):(n=i.toLocaleLowerCase(t)===i&&i.toLocaleUpperCase(t)!==i,o=r,r=i.toLocaleUpperCase(t)===i&&i.toLocaleLowerCase(t)!==i)}return e})(e,t.locale)),e=e.replace(/^[_.\- ]+/,""),e=t.preserveConsecutiveUppercase?(e=>e.replace(/^[\p{Lu}](?![\p{Lu}])/gu,(e=>e.toLowerCase())))(e):e.toLocaleLowerCase(),t.pascalCase&&(e=e.charAt(0).toLocaleUpperCase(t.locale)+e.slice(1)),((e,t)=>e.replace(/[_.\- ]+([\p{Alpha}\p{N}_]|$)/gu,((e,n)=>n.toLocaleUpperCase(t.locale))).replace(/\d+([\p{Alpha}\p{N}_]|$)/gu,(e=>e.toLocaleUpperCase(t.locale))))(e,t)};e.exports=t,e.exports.default=t},86900:function(e){const t=e=>"object"===typeof e&&null!==e,n=Symbol("skip"),r=e=>t(e)&&!(e instanceof RegExp)&&!(e instanceof Error)&&!(e instanceof Date),o=(e,t,a,i=new WeakMap)=>{if(a={deep:!1,target:{},...a},i.has(e))return i.get(e);i.set(e,a.target);const{target:s}=a;delete a.target;const c=e=>e.map((e=>r(e)?o(e,t,a,i):e));if(Array.isArray(e))return c(e);for(const[u,l]of Object.entries(e)){const f=t(u,l,e);if(f===n)continue;let[p,d,{shouldRecurse:m=!0}={}]=f;"__proto__"!==p&&(a.deep&&m&&r(d)&&(d=Array.isArray(d)?c(d):o(d,t,a,i)),s[p]=d)}return s};e.exports=(e,n,r)=>{if(!t(e))throw new TypeError(`Expected an object, got \`${e}\` (${typeof e})`);return o(e,n,r)},e.exports.mapObjectSkip=n},61269:function(e){class t{constructor(e={}){if(!(e.maxSize&&e.maxSize>0))throw new TypeError("`maxSize` must be a number greater than 0");this.maxSize=e.maxSize,this.onEviction=e.onEviction,this.cache=new Map,this.oldCache=new Map,this._size=0}_set(e,t){if(this.cache.set(e,t),this._size++,this._size>=this.maxSize){if(this._size=0,"function"===typeof this.onEviction)for(const[e,t]of this.oldCache.entries())this.onEviction(e,t);this.oldCache=this.cache,this.cache=new Map}}get(e){if(this.cache.has(e))return this.cache.get(e);if(this.oldCache.has(e)){const t=this.oldCache.get(e);return this.oldCache.delete(e),this._set(e,t),t}}set(e,t){return this.cache.has(e)?this.cache.set(e,t):this._set(e,t),this}has(e){return this.cache.has(e)||this.oldCache.has(e)}peek(e){return this.cache.has(e)?this.cache.get(e):this.oldCache.has(e)?this.oldCache.get(e):void 0}delete(e){const t=this.cache.delete(e);return t&&this._size--,this.oldCache.delete(e)||t}clear(){this.cache.clear(),this.oldCache.clear(),this._size=0}*keys(){for(const[e]of this)yield e}*values(){for(const[,e]of this)yield e}*[Symbol.iterator](){for(const e of this.cache)yield e;for(const e of this.oldCache){const[t]=e;this.cache.has(t)||(yield e)}}get size(){let e=0;for(const t of this.oldCache.keys())this.cache.has(t)||e++;return Math.min(this._size+e,this.maxSize)}}e.exports=t},44405:function(e,t,n){n.d(t,{w_:function(){return u}});var r=n(67294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(o),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function c(e){return e&&e.map((function(e,t){return r.createElement(e.tag,i({key:t},e.attr),c(e.child))}))}function u(e){return function(t){return r.createElement(l,i({attr:i({},e.attr)},t),c(e.child))}}function l(e){var t=function(t){var n,o=e.attr,a=e.size,c=e.title,u=s(e,["attr","size","title"]),l=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:n,style:i(i({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==a?r.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}}}]);