"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5781],{5781:function(e,t,r){r.r(t);var n=r(92809),a=r(10219),c=r(54927),o=r(11163),u=r(10867),l=r(13953),p=r(85893),i=["label","variant"],s=["text"];function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(e){var t=e.label,r=e.variant,n=(0,a.Z)(e,i),f=(0,u.$G)().t,b=(0,o.useRouter)(),v=(0,l.Rx)(),O=v.searchTerm,y=v.updateSearchTerm;return(0,p.jsx)(c.Z,h({label:t,onSubmit:function(e){if(e.preventDefault(),O){var t=b.pathname,r=b.query;b.push({pathname:t,query:h(h({},r),{},{text:O})},void 0,{scroll:!1})}},onClearSearch:function(){y("");var e=b.pathname,t=b.query,r=t.text,n=(0,a.Z)(t,s);r&&b.push({pathname:e,query:h({},n)},void 0,{scroll:!1})},onChange:function(e){var t=e.target.value;y(t)},value:O,name:"search",placeholder:f("common:text-search-placeholder"),variant:r},n))}}}]);