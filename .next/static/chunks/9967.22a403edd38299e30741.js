(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9967],{12828:function(e,t,r){"use strict";const n=r(86900),o=r(80834),i=r(61269),c=new i({maxSize:1e5}),a=e=>"object"===typeof e&&null!==e&&!(e instanceof RegExp)&&!(e instanceof Error)&&!(e instanceof Date),s=(e,t)=>{if(!a(e))return e;t={deep:!1,pascalCase:!1,...t};const{exclude:r,pascalCase:i,stopPaths:s,deep:l}=t,u=new Set(s),d=e=>(t,s)=>{if(l&&a(s)){const r=void 0===e?t:`${e}.${t}`;u.has(r)||(s=n(s,d(r)))}if(!r||!((e,t)=>e.some((e=>"string"===typeof e?e===t:(e.lastIndex=0,e.test(t)))))(r,t)){const e=i?`${t}_`:t;if(c.has(e))t=c.get(e);else{const r=o(t,{pascalCase:i});t.length<100&&c.set(e,r),t=r}}return[t,s]};return n(e,d(void 0))};e.exports=(e,t)=>Array.isArray(e)?Object.keys(e).map((r=>s(e[r],t))):s(e,t)},80834:function(e){"use strict";const t=(e,t)=>{if("string"!==typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(t={pascalCase:!1,preserveConsecutiveUppercase:!1,...t},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";if(1===e.length)return t.pascalCase?e.toLocaleUpperCase(t.locale):e.toLocaleLowerCase(t.locale);return e!==e.toLocaleLowerCase(t.locale)&&(e=((e,t)=>{let r=!1,n=!1,o=!1;for(let i=0;i<e.length;i++){const c=e[i];r&&/[\p{Lu}]/u.test(c)?(e=e.slice(0,i)+"-"+e.slice(i),r=!1,o=n,n=!0,i++):n&&o&&/[\p{Ll}]/u.test(c)?(e=e.slice(0,i-1)+"-"+e.slice(i-1),o=n,n=!1,r=!0):(r=c.toLocaleLowerCase(t)===c&&c.toLocaleUpperCase(t)!==c,o=n,n=c.toLocaleUpperCase(t)===c&&c.toLocaleLowerCase(t)!==c)}return e})(e,t.locale)),e=e.replace(/^[_.\- ]+/,""),e=t.preserveConsecutiveUppercase?(e=>e.replace(/^[\p{Lu}](?![\p{Lu}])/gu,(e=>e.toLowerCase())))(e):e.toLocaleLowerCase(),t.pascalCase&&(e=e.charAt(0).toLocaleUpperCase(t.locale)+e.slice(1)),((e,t)=>e.replace(/[_.\- ]+([\p{Alpha}\p{N}_]|$)/gu,((e,r)=>r.toLocaleUpperCase(t.locale))).replace(/\d+([\p{Alpha}\p{N}_]|$)/gu,(e=>e.toLocaleUpperCase(t.locale))))(e,t)};e.exports=t,e.exports.default=t},41609:function(e,t,r){var n=r(280),o=r(64160),i=r(35694),c=r(1469),a=r(98612),s=r(44144),l=r(25726),u=r(36719),d=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(a(e)&&(c(e)||"string"==typeof e||"function"==typeof e.splice||s(e)||u(e)||i(e)))return!e.length;var t=o(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(l(e))return!n(e).length;for(var r in e)if(d.call(e,r))return!1;return!0}},86900:function(e){"use strict";const t=e=>"object"===typeof e&&null!==e,r=Symbol("skip"),n=e=>t(e)&&!(e instanceof RegExp)&&!(e instanceof Error)&&!(e instanceof Date),o=(e,t,i,c=new WeakMap)=>{if(i={deep:!1,target:{},...i},c.has(e))return c.get(e);c.set(e,i.target);const{target:a}=i;delete i.target;const s=e=>e.map((e=>n(e)?o(e,t,i,c):e));if(Array.isArray(e))return s(e);for(const[l,u]of Object.entries(e)){const d=t(l,u,e);if(d===r)continue;let[h,p,{shouldRecurse:f=!0}={}]=d;"__proto__"!==h&&(i.deep&&f&&n(p)&&(p=Array.isArray(p)?s(p):o(p,t,i,c)),a[h]=p)}return a};e.exports=(e,r,n)=>{if(!t(e))throw new TypeError(`Expected an object, got \`${e}\` (${typeof e})`);return o(e,r,n)},e.exports.mapObjectSkip=r},89967:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return L}});var n=r(92809),o=r(83789),i=r(94184),c=r.n(i),a=r(73795),s=r(33921),l=r(75335),u=r(38802),d=r(41038),h=r(10867),p=r(85893),f=function(e){var t,r,n,o,i,c,a=e.item,s=e.onClick,f=(0,h.$G)("common").t;return(0,p.jsxs)("div",{className:"relative w-full h-80 rounded-lg p-8 bg-light shadow-downfall-sm transition-shadow hover:shadow-downfall-lg group",onClick:s,role:"button",children:[(0,p.jsxs)("div",{className:"flex flex-col flex-1 h-full relative z-10",children:[(0,p.jsx)("h3",{className:"text-heading font-semibold text-lg mb-1",children:a.name}),(0,p.jsx)("span",{className:"text-body text-s",children:null!==a&&void 0!==a&&null!==(t=a.children)&&void 0!==t&&t.length?"".concat(null===a||void 0===a||null===(r=a.children)||void 0===r?void 0:r.length," ").concat((null===a||void 0===a||null===(n=a.children)||void 0===n?void 0:n.length)>1?f("text-categories"):f("text-category")):(0,d.U)(null===a||void 0===a?void 0:a.products_count,"Item")}),(0,p.jsx)("button",{className:"mt-auto flex text-accent font-semibold text-sm underline opacity-100 lg:opacity-0 transition-opacity group-hover:opacity-100",children:f("text-view-more")})]}),(0,p.jsx)("div",{className:"absolute bottom-0 end-0 w-full h-full rounded-lg overflow-hidden",children:(0,p.jsx)(l.E,{className:"w-full h-full",src:null!==(o=null===a||void 0===a||null===(i=a.image)||void 0===i?void 0:i.original)&&void 0!==o?o:u.Hb,alt:null!==(c=null===a||void 0===a?void 0:a.name)&&void 0!==c?c:"",layout:"responsive",width:432,height:336})})]})},g=r(11163),x=r(10219),y={src:"/_next/static/image/src/assets/arrow-forward.a0932ad04a4d1673fe4e0153e72bb2ec.png",height:32,width:18,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAAMFBMVEXt7e3w8PDy8vLh4eHV1dXm5ubn5+fs7Ozr6+va2trc3Nz39/fv7+/k5OTu7u7z8/Msao+fAAAADnRSTlMBYSGMDMLrVZdB9MPXsbS1pnsAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAqSURBVAiZBcEJAoAgCACwgXZoBf//bZvYC/M9J7I/iBq4+ibrwdHJqOAHEmEAwKN3a1MAAAAASUVORK5CYII="},m=function(e){var t=e.text,r=e.image,n=e.onClick;return(0,p.jsxs)("button",{className:c()("h-14 px-7 text-base font-semibold text-heading bg-light relative rounded-lg transition-shadow shadow-downfall-xs hover:shadow-downfall-sm",{"pe-24":r}),onClick:n,children:[(0,p.jsx)("span",{className:"whitespace-nowrap",children:t}),r&&(0,p.jsx)("span",{className:"absolute bottom-0 end-0 w-14 h-full rounded-lg rounded-s-none overflow-hidden",children:(0,p.jsx)(l.E,{className:"w-full h-full",src:null!==r&&void 0!==r?r:u.Hb,alt:null!==t&&void 0!==t?t:"",layout:"responsive",width:60,height:60})})]})},v=["category"],b=["category"];function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=function(e){var t=e.text,r=e.image,n=e.onClick;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("span",{className:"relative w-[18px] h-[32px] flex-shrink-0",children:(0,p.jsx)(l.E,{className:"w-full h-full",src:y,alt:">",layout:"responsive",width:18,height:32})}),(0,p.jsx)(m,{text:t,image:r,onClick:n})]})},P=function(e){var t=e.categories,r=(0,h.$G)("common").t,n=(0,g.useRouter)(),o=n.pathname,i=n.query;return(0,p.jsxs)("div",{className:"flex items-center space-s-5",children:[(0,p.jsx)(m,{text:r("text-all-categories"),onClick:function(){i.category;var e=(0,x.Z)(i,v);n.push({pathname:o,query:O({},e)},void 0,{scroll:!1})}}),null===t||void 0===t?void 0:t.map((function(e){var t;return(0,p.jsx)(w,{text:null===e||void 0===e?void 0:e.name,image:null===e||void 0===e||null===(t=e.image)||void 0===t?void 0:t.original,onClick:function(){return function(e){i.category;var t=(0,x.Z)(i,b);n.push({pathname:o,query:O(O({},t),{},{category:e})},void 0,{scroll:!1})}(null===e||void 0===e?void 0:e.slug)}},null===e||void 0===e?void 0:e.slug)}))]})},C=r(40168),A=r(41609),E=r.n(A),N=function e(t,r,n){return null===t||void 0===t?void 0:t.reduce((function(t,o){return t||(o.slug===r?o:o[n]?e(o[n],r,n):void 0)}),null)},k=r(73645);function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function D(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"id",n=[];if(t){var i=null===e||void 0===e?void 0:e.find((function(e){return e[r]===t}));n=null!==i&&void 0!==i&&i.parent_id?[].concat((0,o.Z)(D(e,i.parent_id)),[i],(0,o.Z)(n)):[i].concat((0,o.Z)(n))}return n}var L=function(e){var t=e.notFound,r=e.categories,n=e.loading,i=(0,h.$G)("common").t,l=(0,g.useRouter)(),u=l.pathname,d=l.query,x=Boolean(d.category)&&N(r,d.category,"children"),y=D(r,null===x||void 0===x?void 0:x.parent_id),m=Boolean(x)?null===x||void 0===x?void 0:x.children:null===r||void 0===r?void 0:r.filter((function(e){return!(null!==e&&void 0!==e&&e.parent_id)}));return n?(0,p.jsx)("div",{className:"hidden xl:block",children:(0,p.jsx)("div",{className:"w-72 mt-8 px-2",children:(0,p.jsx)(s.Z,{})})}):t?(0,p.jsx)("div",{className:"bg-light",children:(0,p.jsx)("div",{className:"min-h-full p-5 md:p-8 lg:p-12 2xl:p-16",children:(0,p.jsx)(a.Z,{text:"text-no-category",className:"h-96"})})}):(0,p.jsxs)("div",{className:"bg-light",children:[(0,p.jsx)("div",{className:"pt-3 md:pt-6 lg:pt-10 2xl:pt-14 px-3 md:px-6 lg:px-10 2xl:px-14",children:null!==d&&void 0!==d&&d.category?(0,p.jsx)(C.Z,{className:"w-full",children:(0,p.jsx)("div",{className:c()("pt-2 px-2 pb-7",{"border-b border-dashed divide-dashed border-gray-200 mb-8":null===d||void 0===d?void 0:d.category}),children:(0,p.jsx)(P,{categories:[].concat((0,o.Z)(y),[x])})})}):(0,p.jsx)("h3",{className:"text-heading font-semibold text-2xl mb-8 px-2 pt-2",children:i("text-all-categories")})}),(0,p.jsxs)("div",{className:"p-5 md:p-8 lg:p-12 2xl:p-16 !pt-0",children:[(0,p.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-6 gap-6",children:Array.isArray(m)&&(null===m||void 0===m?void 0:m.map((function(e,t){return(0,p.jsx)(f,{item:e,onClick:function(){return t=null===e||void 0===e?void 0:e.slug,void l.push({pathname:u,query:S(S({},d),{},{category:t})},void 0,{scroll:!1});var t}},t)})))}),E()(m)&&(0,p.jsx)(k.Z,{layout:"minimal"})]})]})}},33921:function(e,t,r){"use strict";var n=r(92809),o=r(24561),i=r(85893);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){return(0,i.jsxs)(o.ZP,a(a({speed:2,width:"100%",height:"100%",viewBox:"0 0 400 320",backgroundColor:"#e0e0e0",foregroundColor:"#cecece"},e),{},{children:[(0,i.jsx)("circle",{cx:"13",cy:"14",r:"10"}),(0,i.jsx)("rect",{x:"38",y:"4",rx:"5",ry:"5",width:"88%",height:"20"}),(0,i.jsx)("circle",{cx:"13",cy:"48",r:"10"}),(0,i.jsx)("rect",{x:"38",y:"38",rx:"5",ry:"5",width:"88%",height:"20"}),(0,i.jsx)("circle",{cx:"13",cy:"83",r:"10"}),(0,i.jsx)("rect",{x:"38",y:"73",rx:"5",ry:"5",width:"88%",height:"20"}),(0,i.jsx)("circle",{cx:"13",cy:"118",r:"10"}),(0,i.jsx)("rect",{x:"38",y:"108",rx:"5",ry:"5",width:"88%",height:"20"}),(0,i.jsx)("circle",{cx:"13",cy:"154",r:"10"}),(0,i.jsx)("rect",{x:"38",y:"144",rx:"5",ry:"5",width:"88%",height:"20"}),(0,i.jsx)("circle",{cx:"13",cy:"188",r:"10"}),(0,i.jsx)("rect",{x:"38",y:"178",rx:"5",ry:"5",width:"88%",height:"20"}),(0,i.jsx)("circle",{cx:"13",cy:"223",r:"10"}),(0,i.jsx)("rect",{x:"38",y:"213",rx:"5",ry:"5",width:"88%",height:"20"}),(0,i.jsx)("circle",{cx:"13",cy:"258",r:"10"}),(0,i.jsx)("rect",{x:"38",y:"248",rx:"5",ry:"5",width:"88%",height:"20"}),(0,i.jsx)("circle",{cx:"13",cy:"290",r:"10"}),(0,i.jsx)("rect",{x:"38",y:"280",rx:"5",ry:"5",width:"88%",height:"20"})]}))}},73795:function(e,t,r){"use strict";var n=r(94184),o=r.n(n),i=r(10867),c=r(75335),a=r(42128),s=r(85893);t.Z=function(e){var t=e.className,r=e.text,n=(0,i.$G)("common").t;return(0,s.jsxs)("div",{className:o()("flex flex-col items-center",t),children:[(0,s.jsx)("div",{className:"w-full h-full flex items-center justify-center",children:(0,s.jsx)(c.E,{src:a.Z,alt:n(r||"text-no-result-found"),className:"w-full h-full object-contain"})}),r&&(0,s.jsx)("h3",{className:"w-full text-center text-xl font-semibold text-body my-7",children:n(r)})]})}},90065:function(e,t,r){"use strict";r.d(t,{kN:function(){return O},FA:function(){return w}});var n=r(92809),o=r(10219),i=r(30266),c=r(68216),a=r(13444),s=r(50982),l=r(92953),u=r(809),d=r.n(u),h=r(7853),p=r(66449),f=r(63844),g=r(88767),x=["data"];function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,l.Z)(e);if(t){var o=(0,l.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,s.Z)(this,r)}}var b=new(function(e){(0,a.Z)(r,e);var t=v(r);function r(){return(0,c.Z)(this,r),t.apply(this,arguments)}return r}(h.b))(p.P.PRODUCTS),j=function(){var e=(0,i.Z)(d().mark((function e(t){var r,n,i,c,a,s,l;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.queryKey,n=t.pageParam,i=r[1],c={},!n){e.next=9;break}return e.next=6,b.get(n);case 6:c=e.sent,e.next=12;break;case 9:return e.next=11,b.find(i);case 11:c=e.sent;case 12:return s=(a=c).data,l=(0,o.Z)(a,x),e.abrupt("return",{data:s,paginatorInfo:(0,f.Q)(m({},l))});case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e,t){return(0,g.useInfiniteQuery)([p.P.PRODUCTS,e],j,m(m({},t),{},{getNextPageParam:function(e){return e.paginatorInfo.nextPageUrl}}))},w=function(e){return(0,g.useQuery)([p.P.PRODUCTS,e],(function(){return function(e){return b.findOne(e)}(e)}))}},73645:function(e,t,r){"use strict";r.d(t,{Z:function(){return A}});var n=r(92809),o=r(5152),i=r(11163),c=r(95903),a=r(90065),s=r(67294),l=r(94184),u=r.n(l),d=r(61553),h=r(73795),p=r(10867),f=r(39118),g=r(85893),x="md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7",y="lg:grid-cols-2 xl:grid-cols-4 3xl:grid-cols-6",m="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6",v="md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6",b=(0,o.default)((function(){return r.e(5644).then(r.bind(r,95644))}),{loadableGenerated:{webpack:function(){return[95644]},modules:["../components/products/grids/grid-with-loader.tsx -> @components/ui/loaders/product-loader"]}}),j=function(e){var t,r=e.showLoaders,o=e.limit,i=void 0===o?20:o,c=e.children,a=e.notFound,s=e.hasNextPage,l=e.onLoadMore,j=e.isLoadingMore,O=e.layout,w=(0,p.$G)("common").t;return a?(0,g.jsx)("div",{className:"bg-gray-100 w-full min-h-full pt-6 pb-8 px-4 lg:p-8",children:(0,g.jsx)(h.Z,{text:"text-not-found",className:"w-7/12 mx-auto"})}):(0,g.jsxs)("div",{className:u()("flex-1 bg-gray-100 pt-6 pb-8 px-4 lg:p-8 ",{"px-0 lg:px-0":"shop"===O||"modern"===O,"!bg-transparent !p-0":"minimal"===O}),children:[(0,g.jsx)("div",{className:u()("grid grid-cols-1 sm:grid-cols-2 gap-3",(t={},(0,n.Z)(t,x,"standard"===O),(0,n.Z)(t,y,"shop"===O),(0,n.Z)(t,m,"minimal"===O),(0,n.Z)(t,v,!O||"modern"===O),t)),children:r?(0,g.jsx)(g.Fragment,{children:(0,f.Z)(i,(function(e){return(0,g.jsx)(b,{uniqueKey:"product-".concat(e)},e)}))}):c}),s&&(0,g.jsx)("div",{className:"flex justify-center mt-8 lg:mt-12",children:(0,g.jsx)(d.Z,{loading:j,onClick:l,className:"text-sm md:text-base font-semibold h-11",children:w("text-load-more")})})]})},O=r(63585);function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var C=(0,o.default)((function(){return r.e(6205).then(r.bind(r,86205))}),{loadableGenerated:{webpack:function(){return[86205]},modules:["../framework/rest/products/products.tsx -> @components/products/cards/card"]}}),A=function(e){var t,r,n,o,l,u,d,h=e.shopId,p=e.layout,f=(0,i.useRouter)().query,x=(0,O.Z)().homePage,y=null!==(t=null===(r=f.pages)||void 0===r?void 0:r[0])&&void 0!==t?t:null===x||void 0===x?void 0:x.slug,m=(0,a.kN)(P(P({},Boolean(h)?{shop_id:Number(h)}:{type:y}),{},{name:null===f||void 0===f?void 0:f.text,categories:null===f||void 0===f?void 0:f.category}),{enabled:Boolean(y)}),v=m.isFetching,b=m.isFetchingNextPage,w=m.fetchNextPage,A=m.hasNextPage,E=m.isError,N=m.data,k=m.error;if(E&&k)return(0,g.jsx)(c.default,{message:k.message});return(0,g.jsx)(j,{notFound:!v&&!(null!==N&&void 0!==N&&null!==(n=N.pages)&&void 0!==n&&null!==(o=n[0])&&void 0!==o&&null!==(l=o.data)&&void 0!==l&&l.length),showLoaders:v&&!(null!==N&&void 0!==N&&null!==(u=N.pages)&&void 0!==u&&u.length),hasNextPage:Boolean(A),isLoadingMore:b,onLoadMore:function(){w()},layout:p,children:null===N||void 0===N||null===(d=N.pages)||void 0===d?void 0:d.map((function(e,t){var r;return(0,g.jsx)(s.Fragment,{children:null===e||void 0===e||null===(r=e.data)||void 0===r?void 0:r.map((function(e){return(0,g.jsx)("div",{children:(0,g.jsx)(C,{product:e})},e.id)}))},t)}))})}},63844:function(e,t,r){"use strict";r.d(t,{Q:function(){return s}});var n=r(92809),o=r(12828),i=r.n(o);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=function(e){var t=i()(e);return a(a({},t),{},{hasMorePages:t.lastPage!==t.currentPage})}},41038:function(e,t,r){"use strict";function n(e,t){return e&&e>1?"".concat(e," ").concat(t,"s"):"".concat(e," ").concat(t)}r.d(t,{U:function(){return n}})},39118:function(e,t,r){"use strict";function n(e,t){for(var r=[];e>r.length;)r.push(t(r.length));return r}r.d(t,{Z:function(){return n}})},42128:function(e,t){"use strict";t.Z={src:"/_next/static/image/src/assets/no-result.426db8cf1c09c49d3a03bc4b3502f9a7.svg",height:453,width:600}},61269:function(e){"use strict";class t{constructor(e={}){if(!(e.maxSize&&e.maxSize>0))throw new TypeError("`maxSize` must be a number greater than 0");this.maxSize=e.maxSize,this.onEviction=e.onEviction,this.cache=new Map,this.oldCache=new Map,this._size=0}_set(e,t){if(this.cache.set(e,t),this._size++,this._size>=this.maxSize){if(this._size=0,"function"===typeof this.onEviction)for(const[e,t]of this.oldCache.entries())this.onEviction(e,t);this.oldCache=this.cache,this.cache=new Map}}get(e){if(this.cache.has(e))return this.cache.get(e);if(this.oldCache.has(e)){const t=this.oldCache.get(e);return this.oldCache.delete(e),this._set(e,t),t}}set(e,t){return this.cache.has(e)?this.cache.set(e,t):this._set(e,t),this}has(e){return this.cache.has(e)||this.oldCache.has(e)}peek(e){return this.cache.has(e)?this.cache.get(e):this.oldCache.has(e)?this.oldCache.get(e):void 0}delete(e){const t=this.cache.delete(e);return t&&this._size--,this.oldCache.delete(e)||t}clear(){this.cache.clear(),this.oldCache.clear(),this._size=0}*keys(){for(const[e]of this)yield e}*values(){for(const[,e]of this)yield e}*[Symbol.iterator](){for(const e of this.cache)yield e;for(const e of this.oldCache){const[t]=e;this.cache.has(t)||(yield e)}}get size(){let e=0;for(const t of this.oldCache.keys())this.cache.has(t)||e++;return Math.min(this._size+e,this.maxSize)}}e.exports=t},24561:function(e,t,r){"use strict";var n=r(67294),o=function(){return(o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var i=function(e){var t=e.animate,r=e.backgroundColor,i=e.backgroundOpacity,c=e.baseUrl,a=e.children,s=e.foregroundColor,l=e.foregroundOpacity,u=e.gradientRatio,d=e.uniqueKey,h=e.interval,p=e.rtl,f=e.speed,g=e.style,x=e.title,y=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),m=d||Math.random().toString(36).substring(6),v=m+"-diff",b=m+"-animated-diff",j=m+"-aria",O=p?{transform:"scaleX(-1)"}:null,w="0; "+h+"; 1",P=f+"s";return(0,n.createElement)("svg",o({"aria-labelledby":j,role:"img",style:o(o({},g),O)},y),x?(0,n.createElement)("title",{id:j},x):null,(0,n.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+c+"#"+v+")",style:{fill:"url("+c+"#"+b+")"}}),(0,n.createElement)("defs",null,(0,n.createElement)("clipPath",{id:v},a),(0,n.createElement)("linearGradient",{id:b},(0,n.createElement)("stop",{offset:"0%",stopColor:r,stopOpacity:i},t&&(0,n.createElement)("animate",{attributeName:"offset",values:-u+"; "+-u+"; 1",keyTimes:w,dur:P,repeatCount:"indefinite"})),(0,n.createElement)("stop",{offset:"50%",stopColor:s,stopOpacity:l},t&&(0,n.createElement)("animate",{attributeName:"offset",values:-u/2+"; "+-u/2+"; "+(1+u/2),keyTimes:w,dur:P,repeatCount:"indefinite"})),(0,n.createElement)("stop",{offset:"100%",stopColor:r,stopOpacity:i},t&&(0,n.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+u),keyTimes:w,dur:P,repeatCount:"indefinite"})))))};i.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var c=function(e){return e.children?(0,n.createElement)(i,o({},e)):(0,n.createElement)(a,o({},e))},a=function(e){return(0,n.createElement)(c,o({viewBox:"0 0 476 124"},e),(0,n.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,n.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.ZP=c}}]);