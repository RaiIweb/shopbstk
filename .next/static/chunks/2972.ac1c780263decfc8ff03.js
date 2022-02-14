(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2972],{94113:function(e,t,r){"use strict";var n=r(92809),o=r(10219),i=r(94184),s=r.n(i),a=r(85893),c=["className"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.Z=function(e){var t=e.className,r=(0,o.Z)(e,c);return(0,a.jsx)("label",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({className:s()("block text-body-dark font-semibold text-sm leading-none mb-3",t)},r))}},60363:function(e,t,r){"use strict";var n=r(92809),o=r(10219),i=r(67294),s=r(94184),a=r.n(s),c=r(85893),l=["className","label","name","error","variant","shadow","inputClassName"];function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p={normal:"bg-gray-100 border border-border-base focus:shadow focus:bg-light focus:border-accent",solid:"bg-gray-100 border border-border-100 focus:bg-light focus:border-accent",outline:"border border-border-base focus:border-accent"},f=i.forwardRef((function(e,t){var r=e.className,n=e.label,i=e.name,s=e.error,u=e.variant,f=void 0===u?"normal":u,b=e.shadow,v=void 0!==b&&b,m=e.inputClassName,y=(0,o.Z)(e,l);return(0,c.jsxs)("div",{className:r,children:[n&&(0,c.jsx)("label",{htmlFor:i,className:"block text-body-dark font-semibold text-sm leading-none mb-3",children:n}),(0,c.jsx)("textarea",d({id:i,name:i,className:a()("px-4 py-3 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0",v&&"focus:shadow",p[f],m),autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",rows:4,ref:t},y)),s&&(0,c.jsx)("p",{className:"my-2 text-xs text-red-500",children:s})]})}));f.displayName="TextArea",t.Z=f},82972:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return k}});var n=r(92809),o=r(95993),i=r(68184),s=r(61553),a=r(61860),c=r(94113),l=r(10219),u=r(67294),d=r(87340),p=r.n(d),f=r(85893),b=["className","label","name","id","error"];function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=u.forwardRef((function(e,t){var r=e.className,n=e.label,o=e.name,i=e.id,s=e.error,a=(0,l.Z)(e,b);return(0,f.jsxs)("div",{className:r,children:[(0,f.jsxs)("div",{className:"flex items-center",children:[(0,f.jsx)("input",m({id:i,name:o,type:"radio",ref:t,className:p().radio_input},a)),(0,f.jsx)("label",{htmlFor:i,className:"text-body text-sm",children:n})]}),s&&(0,f.jsx)("p",{className:"my-2 text-xs text-end text-red-500",children:s})]})}));y.displayName="Radio";var O=y,h=r(60363),j=r(10867),g=r(19501),x=r(72975),P=r(94313);function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var N=g.Ry().shape({type:g.Z_().oneOf([P.D.Billing,P.D.Shipping]).required("error-type-required"),title:g.Z_().required("error-title-required"),address:g.Ry().shape({country:g.Z_().required("error-country-required"),city:g.Z_().required("error-city-required"),state:g.Z_().required("error-state-required"),zip:g.Z_().required("error-zip-required"),street_address:g.Z_().required("error-street-required")})}),D=function(e){var t,r,n=e.onSubmit,o=(0,j.$G)("common").t,l=(0,i.X9)().data,u=l.address,d=l.type;return(0,f.jsxs)("div",{className:"p-5 sm:p-8 bg-light md:rounded-xl min-h-screen md:min-h-0",children:[(0,f.jsxs)("h1",{className:"text-heading font-semibold text-lg text-center mb-4 sm:mb-6",children:[o(u?"text-update":"text-add-new")," ",o("text-address")]}),(0,f.jsx)(x.l,{onSubmit:n,className:"grid grid-cols-2 gap-5 h-full",validationSchema:N,options:{shouldUnregister:!0,defaultValues:Z({title:null!==(t=null===u||void 0===u?void 0:u.title)&&void 0!==t?t:"",type:null!==(r=null===u||void 0===u?void 0:u.type)&&void 0!==r?r:d},(null===u||void 0===u?void 0:u.address)&&u)},children:function(e){var t,r,n,i,l,d,p,b,v,m,y,j=e.register,g=e.formState.errors;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{children:[(0,f.jsx)(c.Z,{children:o("text-type")}),(0,f.jsxs)("div",{className:"space-s-4 flex items-center",children:[(0,f.jsx)(O,Z(Z({id:"billing"},j("type")),{},{type:"radio",value:P.D.Billing,label:o("text-billing")})),(0,f.jsx)(O,Z(Z({id:"shipping"},j("type")),{},{type:"radio",value:P.D.Shipping,label:o("text-shipping")}))]})]}),(0,f.jsx)(a.Z,Z(Z({label:o("text-title")},j("title")),{},{error:o(null===(t=g.title)||void 0===t?void 0:t.message),variant:"outline",className:"col-span-2"})),(0,f.jsx)(a.Z,Z(Z({label:o("text-country")},j("address.country")),{},{error:o(null===(r=g.address)||void 0===r||null===(n=r.country)||void 0===n?void 0:n.message),variant:"outline"})),(0,f.jsx)(a.Z,Z(Z({label:o("text-city")},j("address.city")),{},{error:o(null===(i=g.address)||void 0===i||null===(l=i.city)||void 0===l?void 0:l.message),variant:"outline"})),(0,f.jsx)(a.Z,Z(Z({label:o("text-state")},j("address.state")),{},{error:o(null===(d=g.address)||void 0===d||null===(p=d.state)||void 0===p?void 0:p.message),variant:"outline"})),(0,f.jsx)(a.Z,Z(Z({label:o("text-zip")},j("address.zip")),{},{error:o(null===(b=g.address)||void 0===b||null===(v=b.zip)||void 0===v?void 0:v.message),variant:"outline"})),(0,f.jsx)(h.Z,Z(Z({label:o("text-street-address")},j("address.street_address")),{},{error:o(null===(m=g.address)||void 0===m||null===(y=m.street_address)||void 0===y?void 0:y.message),variant:"outline",className:"col-span-2"})),(0,f.jsxs)(s.Z,{className:"w-full col-span-2",children:[o(u?"text-update":"text-save")," ",o("text-address")]})]})}})]})};function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var k=function(){var e=(0,i.X9)().data,t=e.customerId,r=e.address,n=(0,i.SO)().closeModal,s=(0,o.o)().mutate;return(0,f.jsx)(D,{onSubmit:function(e){var o={id:null===r||void 0===r?void 0:r.id,customer_id:t,title:e.title,type:e.type,address:_(_({},(null===r||void 0===r?void 0:r.id)&&{id:r.id}),e.address)};s({id:t,address:[o]}),n()}})}},95993:function(e,t,r){"use strict";r.d(t,{o:function(){return a},c:function(){return c}});var n=r(10867),o=r(88767),i=r(39249),s=r(5252),a=function(){var e=(0,o.useQueryClient)();return(0,o.useMutation)((function(e){return s.v.updateCustomer(e)}),{onSettled:function(){e.invalidateQueries("me")}})},c=function(){var e=(0,n.$G)("common").t;return(0,o.useMutation)((function(e){return s.v.contact(e)}),{onSuccess:function(t){t.success?i.Am.success(e(t.message)):i.Am.error(e(t.message))}})}},5252:function(e,t,r){"use strict";r.d(t,{v:function(){return d}});var n=r(68216),o=r(25997),i=r(13444),s=r(50982),a=r(92953),c=r(7853),l=r(66449);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,a.Z)(e);if(t){var o=(0,a.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,s.Z)(this,r)}}var d=new(function(e){(0,i.Z)(r,e);var t=u(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,o.Z)(r,[{key:"updateCustomer",value:function(e){return this.http.put(this.basePath+"/"+e.id,e).then((function(e){return e.data}))}},{key:"contact",value:function(e){return this.http.post(l.P.CONTACT,e).then((function(e){return e.data}))}},{key:"deleteAddress",value:function(e){var t=e.id;return this.http.delete("".concat(l.P.ADDRESS,"/").concat(t)).then((function(e){return e.data}))}}]),r}(c.b))(l.P.CUSTOMERS)},94313:function(e,t,r){"use strict";var n;r.d(t,{D:function(){return n}}),function(e){e.Billing="billing",e.Shipping="shipping"}(n||(n={}))},87340:function(e){e.exports={radio_input:"radio_radio_input__3cLhB"}}}]);