"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7992],{57992:function(e,r,t){t.r(r),t.d(r,{default:function(){return E}});var n=t(92809),s=t(80318),o=t(67294),a=t(31955),i=t(42283),l=t(24175),c=t(10867),u=t(28834),m=t(19501),d=t(68184),p=t(11163),f=t(99300),x=t(53158),b=t(61860),j=t(5555),h=t(61553),v=t(85893);function O(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function g(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?O(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var y=function(e){var r,t,n,s=e.errorMessage,o=e.onSubmit,a=e.loading,l=(0,c.$G)("common").t,u=(0,i.Gc)(),m=u.register,O=u.handleSubmit,y=u.formState.errors,w=(0,p.useRouter)(),N=(0,d.SO)(),P=N.closeModal,k=N.openModal;function S(e){w.push("/".concat(e)),P()}return(0,v.jsxs)("div",{className:"py-6 px-5 sm:p-8 bg-light w-screen md:max-w-[480px] min-h-screen md:min-h-0 h-full md:h-auto flex flex-col justify-center md:rounded-xl",children:[(0,v.jsx)("div",{className:"flex justify-center",children:(0,v.jsx)(f.Z,{})}),(0,v.jsxs)("p",{className:"text-center text-sm md:text-base leading-relaxed px-2 sm:px-0 text-body mt-4 sm:mt-5 mb-7 sm:mb-10",children:[l("registration-helper"),(0,v.jsx)("span",{onClick:function(){return S("terms")},className:"mx-1 underline cursor-pointer text-accent hover:no-underline",children:l("text-terms")}),"&",(0,v.jsx)("span",{onClick:function(){return S("privacy")},className:"ms-1 underline cursor-pointer text-accent hover:no-underline",children:l("text-policy")})]}),s&&(0,v.jsx)(x.Z,{variant:"error",message:l(s),className:"mb-6",closeable:!0}),(0,v.jsxs)("form",{onSubmit:O(o),noValidate:!0,children:[(0,v.jsx)(b.Z,g(g({label:l("text-name")},m("name")),{},{variant:"outline",className:"mb-5",error:l(null===(r=y.name)||void 0===r?void 0:r.message)})),(0,v.jsx)(b.Z,g(g({label:l("text-email")},m("email")),{},{type:"email",variant:"outline",className:"mb-5",error:l(null===(t=y.email)||void 0===t?void 0:t.message)})),(0,v.jsx)(j.Z,g(g({label:l("text-password")},m("password")),{},{error:l(null===(n=y.password)||void 0===n?void 0:n.message),variant:"outline",className:"mb-5"})),(0,v.jsx)("div",{className:"mt-8",children:(0,v.jsx)(h.Z,{className:"w-full h-12",loading:a,disabled:a,children:l("text-register")})})]}),(0,v.jsxs)("div",{className:"flex flex-col items-center justify-center relative text-sm text-heading mt-8 sm:mt-11 mb-6 sm:mb-8",children:[(0,v.jsx)("hr",{className:"w-full"}),(0,v.jsx)("span",{className:"absolute start-2/4 -top-2.5 px-2 -ms-4 bg-light",children:l("text-or")})]}),(0,v.jsxs)("div",{className:"text-sm sm:text-base text-body text-center",children:[l("text-already-account")," ",(0,v.jsx)("button",{onClick:function(){return k("LOGIN_VIEW")},className:"ms-1 underline text-accent font-semibold transition-colors duration-200 focus:outline-none hover:text-accent-hover focus:text-accent-hover hover:no-underline focus:no-underline",children:l("text-login")})]})]})},w=t(91131),N=t(87471),P=t(98404);function k(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function S(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?k(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var Z=m.Ry().shape({name:m.Z_().required("error-name-required"),email:m.Z_().email("error-email-format").required("error-email-required"),password:m.Z_().required("error-password-required")}),E=function(){var e=(0,c.$G)("common").t,r=(0,o.useState)(""),t=r[0],n=r[1],m=(0,w.KO)(N.O),p=(0,s.Z)(m,2),f=(p[0],p[1]),x=(0,d.SO)().closeModal,b=(0,i.cI)({resolver:(0,u.X)(Z)}),j=(0,l.l4)(),h=j.mutate,O=j.isLoading;return(0,v.jsx)(i.RV,S(S({},b),{},{children:(0,v.jsx)(y,{onSubmit:function(r){var t=r.name,s=r.email,o=r.password;h({name:t,email:s,password:o},{onSuccess:function(r){var t;if(null!==r&&void 0!==r&&r.token&&null!==r&&void 0!==r&&null!==(t=r.permissions)&&void 0!==t&&t.length)return a.Z.set(P.UA,r.token),f(!0),void x();r.token||n(e("error-credential-wrong"))},onError:function(e){var r=(null!==e&&void 0!==e?e:{}).response.data;Object.keys(r).forEach((function(e){b.setError(e,{type:"manual",message:r[e][0]})}))}})},loading:O,errorMessage:t})}))}}}]);