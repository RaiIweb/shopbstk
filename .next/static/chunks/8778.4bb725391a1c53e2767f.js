"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8778,6269],{88778:function(n,e,t){t.r(e);var r=t(80318),a=t(23900),c=t(41038),o=t(53457),l=t(47349),u=t(28426),s=t(91131),i=t(10867),d=t(85893);e.default=function(){var n=(0,i.$G)().t,e=(0,u.jD)(),t=e.totalUniqueItems,m=e.total,f=(0,s.KO)(l.P),h=(0,r.Z)(f,2),x=(h[0],h[1]),p=(0,o.ZP)({amount:m}).price;return(0,d.jsxs)("button",{className:"hidden product-cart lg:flex flex-col items-center justify-center p-3 pt-3.5 fixed top-1/2 -mt-12 end-0 z-40 shadow-900 rounded rounded-te-none rounded-be-none bg-accent text-light text-sm font-semibold transition-colors duration-200 focus:outline-none hover:bg-accent-hover",onClick:function(){x({display:!0,view:"cart"})},children:[(0,d.jsxs)("span",{className:"flex pb-0.5",children:[(0,d.jsx)(a.Z,{className:"flex-shrink-0",width:14,height:16}),(0,d.jsx)("span",{className:"flex ms-2",children:(0,c.U)(t,n("common:text-item"))})]}),(0,d.jsx)("span",{className:"bg-light rounded w-full py-2 px-2 text-accent mt-3",children:p})]})}},23900:function(n,e,t){t(67294);var r=t(85893);e.Z=function(n){var e=n.width,t=n.height,a=n.className;return(0,r.jsx)("svg",{width:e,height:t,className:a,viewBox:"0 0 12.686 16",children:(0,r.jsxs)("g",{transform:"translate(-27.023 -2)",children:[(0,r.jsx)("g",{transform:"translate(27.023 5.156)",children:(0,r.jsx)("g",{children:(0,r.jsx)("path",{d:"M65.7,111.043l-.714-9A1.125,1.125,0,0,0,63.871,101H62.459V103.1a.469.469,0,1,1-.937,0V101H57.211V103.1a.469.469,0,1,1-.937,0V101H54.862a1.125,1.125,0,0,0-1.117,1.033l-.715,9.006a2.605,2.605,0,0,0,2.6,2.8H63.1a2.605,2.605,0,0,0,2.6-2.806Zm-4.224-4.585-2.424,2.424a.468.468,0,0,1-.663,0l-1.136-1.136a.469.469,0,0,1,.663-.663l.8.8,2.092-2.092a.469.469,0,1,1,.663.663Z",transform:"translate(-53.023 -101.005)",fill:"currentColor"})})}),(0,r.jsx)("g",{transform:"translate(30.274 2)",children:(0,r.jsx)("g",{children:(0,r.jsx)("path",{d:"M160.132,0a3.1,3.1,0,0,0-3.093,3.093v.063h.937V3.093a2.155,2.155,0,1,1,4.311,0v.063h.937V3.093A3.1,3.1,0,0,0,160.132,0Z",transform:"translate(-157.039)",fill:"currentColor"})})})]})})}},41038:function(n,e,t){function r(n,e){return n&&n>1?"".concat(n," ").concat(e,"s"):"".concat(n," ").concat(e)}t.d(e,{U:function(){return r}})},53457:function(n,e,t){t.d(e,{ZP:function(){return l}});var r=t(67294),a=t(49593),c=t(11163);function o(n){var e=n.amount,t=n.currencyCode,r=n.locale;return new Intl.NumberFormat(r,{style:"currency",currency:t}).format(e)}function l(n){var e=(0,a.rV)().currency,t=null!==n&&void 0!==n?n:{},l=t.amount,u=t.baseAmount,s=t.currencyCode,i=void 0===s?e:s,d=(0,c.useRouter)().locale,m=(0,r.useMemo)((function(){if("number"!==typeof l||!i)return"";var n=d||"en";return u?function(n){var e=n.amount,t=n.baseAmount,r=n.currencyCode,a=n.locale,c=t>e,l=new Intl.NumberFormat(a,{style:"percent"}),u=c?l.format((t-e)/t):null;return{price:o({amount:e,currencyCode:r,locale:a}),basePrice:c?o({amount:t,currencyCode:r,locale:a}):null,discount:u}}({amount:l,baseAmount:u,currencyCode:i,locale:n}):o({amount:l,currencyCode:i,locale:n})}),[l,u,i,d]);return"string"===typeof m?{price:m,basePrice:null,discount:null}:m}}}]);