"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[533],{80533:function(e,t,n){n.d(t,{h:function(){return B}});var o=n(94578),r=!("undefined"===typeof window||!window.document||!window.document.createElement);var i=void 0;function s(){return void 0===i&&(i=function(){if(!r)return!1;if(!window.addEventListener||!window.removeEventListener||!Object.defineProperty)return!1;var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}catch(o){}return e}()),i}function a(e){e.handlers===e.nextHandlers&&(e.nextHandlers=e.handlers.slice())}function l(e){this.target=e,this.events={}}l.prototype.getEventHandlers=function(e,t){var n,o=String(e)+" "+String((n=t)?!0===n?100:(n.capture<<0)+(n.passive<<1)+(n.once<<2):0);return this.events[o]||(this.events[o]={handlers:[],handleEvent:void 0},this.events[o].nextHandlers=this.events[o].handlers),this.events[o]},l.prototype.handleEvent=function(e,t,n){var o=this.getEventHandlers(e,t);o.handlers=o.nextHandlers,o.handlers.forEach((function(e){e&&e(n)}))},l.prototype.add=function(e,t,n){var o=this,r=this.getEventHandlers(e,n);a(r),0===r.nextHandlers.length&&(r.handleEvent=this.handleEvent.bind(this,e,n),this.target.addEventListener(e,r.handleEvent,n)),r.nextHandlers.push(t);var i=!0;return function(){if(i){i=!1,a(r);var s=r.nextHandlers.indexOf(t);r.nextHandlers.splice(s,1),0===r.nextHandlers.length&&(o.target&&o.target.removeEventListener(e,r.handleEvent,n),r.handleEvent=void 0)}}};var c="__consolidated_events_handlers__";function p(e,t,n,o){e[c]||(e[c]=new l(e));var r=function(e){if(e)return s()?e:!!e.capture}(o);return e[c].add(t,n,r)}n(45697);var u=n(67294),f=n(35834);function d(e,t){var n,o=(n=e,!isNaN(parseFloat(n))&&isFinite(n)?parseFloat(n):"px"===n.slice(-2)?parseFloat(n.slice(0,-2)):void 0);if("number"===typeof o)return o;var r=function(e){if("%"===e.slice(-1))return parseFloat(e.slice(0,-1))/100}(e);return"number"===typeof r?r*t:void 0}var v="above",h="inside",w="below",m="invisible";function y(e){return"string"===typeof e.type}var b;var g=[];function E(e){g.push(e),b||(b=setTimeout((function(){var e;for(b=null;e=g.shift();)e()}),0));var t=!0;return function(){if(t){t=!1;var n=g.indexOf(e);-1!==n&&(g.splice(n,1),!g.length&&b&&(clearTimeout(b),b=null))}}}var T="undefined"!==typeof window,_={debug:!1,scrollableAncestor:void 0,children:void 0,topOffset:"0px",bottomOffset:"0px",horizontal:!1,onEnter:function(){},onLeave:function(){},onPositionChange:function(){},fireOnRapidScroll:!0},B=function(e){function t(t){var n;return(n=e.call(this,t)||this).refElement=function(e){n._ref=e},n}(0,o.Z)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=this;T&&(this.cancelOnNextTick=E((function(){e.cancelOnNextTick=null;var t=e.props,n=t.children;t.debug;!function(e,t){if(e&&!y(e)&&!t)throw new Error("<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.\n\nSee https://goo.gl/LrBNgw for more info.")}(n,e._ref),e._handleScroll=e._handleScroll.bind(e),e.scrollableAncestor=e._findScrollableAncestor(),e.scrollEventListenerUnsubscribe=p(e.scrollableAncestor,"scroll",e._handleScroll,{passive:!0}),e.resizeEventListenerUnsubscribe=p(window,"resize",e._handleScroll,{passive:!0}),e._handleScroll(null)})))},r.componentDidUpdate=function(){var e=this;T&&this.scrollableAncestor&&(this.cancelOnNextTick||(this.cancelOnNextTick=E((function(){e.cancelOnNextTick=null,e._handleScroll(null)}))))},r.componentWillUnmount=function(){T&&(this.scrollEventListenerUnsubscribe&&this.scrollEventListenerUnsubscribe(),this.resizeEventListenerUnsubscribe&&this.resizeEventListenerUnsubscribe(),this.cancelOnNextTick&&this.cancelOnNextTick())},r._findScrollableAncestor=function(){var e=this.props,t=e.horizontal,o=e.scrollableAncestor;if(o)return function(e){return"window"===e?n.g.window:e}(o);for(var r=this._ref;r.parentNode;){if((r=r.parentNode)===document.body)return window;var i=window.getComputedStyle(r),s=(t?i.getPropertyValue("overflow-x"):i.getPropertyValue("overflow-y"))||i.getPropertyValue("overflow");if("auto"===s||"scroll"===s||"overlay"===s)return r}return window},r._handleScroll=function(e){if(this._ref){var t=this._getBounds(),n=function(e){return e.viewportBottom-e.viewportTop===0?m:e.viewportTop<=e.waypointTop&&e.waypointTop<=e.viewportBottom||e.viewportTop<=e.waypointBottom&&e.waypointBottom<=e.viewportBottom||e.waypointTop<=e.viewportTop&&e.viewportBottom<=e.waypointBottom?h:e.viewportBottom<e.waypointTop?w:e.waypointTop<e.viewportTop?v:m}(t),o=this._previousPosition,r=this.props,i=(r.debug,r.onPositionChange),s=r.onEnter,a=r.onLeave,l=r.fireOnRapidScroll;if(this._previousPosition=n,o!==n){var c={currentPosition:n,previousPosition:o,event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom};i.call(this,c),n===h?s.call(this,c):o===h&&a.call(this,c),l&&(o===w&&n===v||o===v&&n===w)&&(s.call(this,{currentPosition:h,previousPosition:o,event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom}),a.call(this,{currentPosition:n,previousPosition:h,event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom}))}}},r._getBounds=function(){var e,t,n=this.props,o=n.horizontal,r=(n.debug,this._ref.getBoundingClientRect()),i=r.left,s=r.top,a=r.right,l=r.bottom,c=o?i:s,p=o?a:l;this.scrollableAncestor===window?(e=o?window.innerWidth:window.innerHeight,t=0):(e=o?this.scrollableAncestor.offsetWidth:this.scrollableAncestor.offsetHeight,t=o?this.scrollableAncestor.getBoundingClientRect().left:this.scrollableAncestor.getBoundingClientRect().top);var u=this.props,f=u.bottomOffset;return{waypointTop:c,waypointBottom:p,viewportTop:t+d(u.topOffset,e),viewportBottom:t+e-d(f,e)}},r.render=function(){var e=this,t=this.props.children;if(!t)return u.createElement("span",{ref:this.refElement,style:{fontSize:0}});if(y(t)||(0,f.isForwardRef)(t)){return u.cloneElement(t,{ref:function(n){e.refElement(n),t.ref&&("function"===typeof t.ref?t.ref(n):t.ref.current=n)}})}return u.cloneElement(t,{innerRef:this.refElement})},t}(u.PureComponent);B.above=v,B.below=w,B.inside=h,B.invisible=m,B.defaultProps=_,B.displayName="Waypoint"},25058:function(e,t){var n=60103,o=60106,r=60107,i=60108,s=60114,a=60109,l=60110,c=60112,p=60113,u=60120,f=60115,d=60116,v=60121,h=60122,w=60117,m=60129,y=60131;if("function"===typeof Symbol&&Symbol.for){var b=Symbol.for;n=b("react.element"),o=b("react.portal"),r=b("react.fragment"),i=b("react.strict_mode"),s=b("react.profiler"),a=b("react.provider"),l=b("react.context"),c=b("react.forward_ref"),p=b("react.suspense"),u=b("react.suspense_list"),f=b("react.memo"),d=b("react.lazy"),v=b("react.block"),h=b("react.server.block"),w=b("react.fundamental"),m=b("react.debug_trace_mode"),y=b("react.legacy_hidden")}function g(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case r:case s:case i:case p:case u:return e;default:switch(e=e&&e.$$typeof){case l:case c:case d:case f:case a:return e;default:return t}}case o:return t}}}t.isForwardRef=function(e){return g(e)===c}},35834:function(e,t,n){e.exports=n(25058)}}]);