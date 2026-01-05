const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AdminDashboard-BFyOKaFo.js","assets/ai.service-fZyQ6x5c.js","assets/StudentDashboard-CD8gDDoU.js","assets/StudentDashboard-CAuvVr9R.css"])))=>i.map(i=>d[i]);
var Iw=Object.defineProperty;var Sw=(r,e,t)=>e in r?Iw(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var eg=(r,e,t)=>Sw(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function Aw(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var rd={exports:{}},Ra={},id={exports:{}},Ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tg;function Rw(){if(tg)return Ie;tg=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),T=Symbol.iterator;function S(V){return V===null||typeof V!="object"?null:(V=T&&V[T]||V["@@iterator"],typeof V=="function"?V:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,W={};function z(V,H,Ee){this.props=V,this.context=H,this.refs=W,this.updater=Ee||U}z.prototype.isReactComponent={},z.prototype.setState=function(V,H){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,H,"setState")},z.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function ae(){}ae.prototype=z.prototype;function fe(V,H,Ee){this.props=V,this.context=H,this.refs=W,this.updater=Ee||U}var Te=fe.prototype=new ae;Te.constructor=fe,$(Te,z.prototype),Te.isPureReactComponent=!0;var ke=Array.isArray,He=Object.prototype.hasOwnProperty,Ne={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function A(V,H,Ee){var we,Se={},Ae=null,be=null;if(H!=null)for(we in H.ref!==void 0&&(be=H.ref),H.key!==void 0&&(Ae=""+H.key),H)He.call(H,we)&&!k.hasOwnProperty(we)&&(Se[we]=H[we]);var Ve=arguments.length-2;if(Ve===1)Se.children=Ee;else if(1<Ve){for(var je=Array(Ve),zt=0;zt<Ve;zt++)je[zt]=arguments[zt+2];Se.children=je}if(V&&V.defaultProps)for(we in Ve=V.defaultProps,Ve)Se[we]===void 0&&(Se[we]=Ve[we]);return{$$typeof:r,type:V,key:Ae,ref:be,props:Se,_owner:Ne.current}}function C(V,H){return{$$typeof:r,type:V.type,key:H,ref:V.ref,props:V.props,_owner:V._owner}}function x(V){return typeof V=="object"&&V!==null&&V.$$typeof===r}function N(V){var H={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(Ee){return H[Ee]})}var O=/\/+/g;function R(V,H){return typeof V=="object"&&V!==null&&V.key!=null?N(""+V.key):H.toString(36)}function Be(V,H,Ee,we,Se){var Ae=typeof V;(Ae==="undefined"||Ae==="boolean")&&(V=null);var be=!1;if(V===null)be=!0;else switch(Ae){case"string":case"number":be=!0;break;case"object":switch(V.$$typeof){case r:case e:be=!0}}if(be)return be=V,Se=Se(be),V=we===""?"."+R(be,0):we,ke(Se)?(Ee="",V!=null&&(Ee=V.replace(O,"$&/")+"/"),Be(Se,H,Ee,"",function(zt){return zt})):Se!=null&&(x(Se)&&(Se=C(Se,Ee+(!Se.key||be&&be.key===Se.key?"":(""+Se.key).replace(O,"$&/")+"/")+V)),H.push(Se)),1;if(be=0,we=we===""?".":we+":",ke(V))for(var Ve=0;Ve<V.length;Ve++){Ae=V[Ve];var je=we+R(Ae,Ve);be+=Be(Ae,H,Ee,je,Se)}else if(je=S(V),typeof je=="function")for(V=je.call(V),Ve=0;!(Ae=V.next()).done;)Ae=Ae.value,je=we+R(Ae,Ve++),be+=Be(Ae,H,Ee,je,Se);else if(Ae==="object")throw H=String(V),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return be}function vt(V,H,Ee){if(V==null)return V;var we=[],Se=0;return Be(V,we,"","",function(Ae){return H.call(Ee,Ae,Se++)}),we}function Dt(V){if(V._status===-1){var H=V._result;H=H(),H.then(function(Ee){(V._status===0||V._status===-1)&&(V._status=1,V._result=Ee)},function(Ee){(V._status===0||V._status===-1)&&(V._status=2,V._result=Ee)}),V._status===-1&&(V._status=0,V._result=H)}if(V._status===1)return V._result.default;throw V._result}var Ye={current:null},J={transition:null},ce={ReactCurrentDispatcher:Ye,ReactCurrentBatchConfig:J,ReactCurrentOwner:Ne};function re(){throw Error("act(...) is not supported in production builds of React.")}return Ie.Children={map:vt,forEach:function(V,H,Ee){vt(V,function(){H.apply(this,arguments)},Ee)},count:function(V){var H=0;return vt(V,function(){H++}),H},toArray:function(V){return vt(V,function(H){return H})||[]},only:function(V){if(!x(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Ie.Component=z,Ie.Fragment=t,Ie.Profiler=o,Ie.PureComponent=fe,Ie.StrictMode=s,Ie.Suspense=g,Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,Ie.act=re,Ie.cloneElement=function(V,H,Ee){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var we=$({},V.props),Se=V.key,Ae=V.ref,be=V._owner;if(H!=null){if(H.ref!==void 0&&(Ae=H.ref,be=Ne.current),H.key!==void 0&&(Se=""+H.key),V.type&&V.type.defaultProps)var Ve=V.type.defaultProps;for(je in H)He.call(H,je)&&!k.hasOwnProperty(je)&&(we[je]=H[je]===void 0&&Ve!==void 0?Ve[je]:H[je])}var je=arguments.length-2;if(je===1)we.children=Ee;else if(1<je){Ve=Array(je);for(var zt=0;zt<je;zt++)Ve[zt]=arguments[zt+2];we.children=Ve}return{$$typeof:r,type:V.type,key:Se,ref:Ae,props:we,_owner:be}},Ie.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:u,_context:V},V.Consumer=V},Ie.createElement=A,Ie.createFactory=function(V){var H=A.bind(null,V);return H.type=V,H},Ie.createRef=function(){return{current:null}},Ie.forwardRef=function(V){return{$$typeof:m,render:V}},Ie.isValidElement=x,Ie.lazy=function(V){return{$$typeof:w,_payload:{_status:-1,_result:V},_init:Dt}},Ie.memo=function(V,H){return{$$typeof:_,type:V,compare:H===void 0?null:H}},Ie.startTransition=function(V){var H=J.transition;J.transition={};try{V()}finally{J.transition=H}},Ie.unstable_act=re,Ie.useCallback=function(V,H){return Ye.current.useCallback(V,H)},Ie.useContext=function(V){return Ye.current.useContext(V)},Ie.useDebugValue=function(){},Ie.useDeferredValue=function(V){return Ye.current.useDeferredValue(V)},Ie.useEffect=function(V,H){return Ye.current.useEffect(V,H)},Ie.useId=function(){return Ye.current.useId()},Ie.useImperativeHandle=function(V,H,Ee){return Ye.current.useImperativeHandle(V,H,Ee)},Ie.useInsertionEffect=function(V,H){return Ye.current.useInsertionEffect(V,H)},Ie.useLayoutEffect=function(V,H){return Ye.current.useLayoutEffect(V,H)},Ie.useMemo=function(V,H){return Ye.current.useMemo(V,H)},Ie.useReducer=function(V,H,Ee){return Ye.current.useReducer(V,H,Ee)},Ie.useRef=function(V){return Ye.current.useRef(V)},Ie.useState=function(V){return Ye.current.useState(V)},Ie.useSyncExternalStore=function(V,H,Ee){return Ye.current.useSyncExternalStore(V,H,Ee)},Ie.useTransition=function(){return Ye.current.useTransition()},Ie.version="18.3.1",Ie}var ng;function Kd(){return ng||(ng=1,id.exports=Rw()),id.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rg;function Cw(){if(rg)return Ra;rg=1;var r=Kd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,g,_){var w,T={},S=null,U=null;_!==void 0&&(S=""+_),g.key!==void 0&&(S=""+g.key),g.ref!==void 0&&(U=g.ref);for(w in g)s.call(g,w)&&!u.hasOwnProperty(w)&&(T[w]=g[w]);if(m&&m.defaultProps)for(w in g=m.defaultProps,g)T[w]===void 0&&(T[w]=g[w]);return{$$typeof:e,type:m,key:S,ref:U,props:T,_owner:o.current}}return Ra.Fragment=t,Ra.jsx=h,Ra.jsxs=h,Ra}var ig;function Pw(){return ig||(ig=1,rd.exports=Cw()),rd.exports}var Z=Pw(),et=Kd();const kw=Aw(et);var Au={},sd={exports:{}},Qt={},od={exports:{}},ad={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sg;function Nw(){return sg||(sg=1,function(r){function e(J,ce){var re=J.length;J.push(ce);e:for(;0<re;){var V=re-1>>>1,H=J[V];if(0<o(H,ce))J[V]=ce,J[re]=H,re=V;else break e}}function t(J){return J.length===0?null:J[0]}function s(J){if(J.length===0)return null;var ce=J[0],re=J.pop();if(re!==ce){J[0]=re;e:for(var V=0,H=J.length,Ee=H>>>1;V<Ee;){var we=2*(V+1)-1,Se=J[we],Ae=we+1,be=J[Ae];if(0>o(Se,re))Ae<H&&0>o(be,Se)?(J[V]=be,J[Ae]=re,V=Ae):(J[V]=Se,J[we]=re,V=we);else if(Ae<H&&0>o(be,re))J[V]=be,J[Ae]=re,V=Ae;else break e}}return ce}function o(J,ce){var re=J.sortIndex-ce.sortIndex;return re!==0?re:J.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();r.unstable_now=function(){return h.now()-m}}var g=[],_=[],w=1,T=null,S=3,U=!1,$=!1,W=!1,z=typeof setTimeout=="function"?setTimeout:null,ae=typeof clearTimeout=="function"?clearTimeout:null,fe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Te(J){for(var ce=t(_);ce!==null;){if(ce.callback===null)s(_);else if(ce.startTime<=J)s(_),ce.sortIndex=ce.expirationTime,e(g,ce);else break;ce=t(_)}}function ke(J){if(W=!1,Te(J),!$)if(t(g)!==null)$=!0,Dt(He);else{var ce=t(_);ce!==null&&Ye(ke,ce.startTime-J)}}function He(J,ce){$=!1,W&&(W=!1,ae(A),A=-1),U=!0;var re=S;try{for(Te(ce),T=t(g);T!==null&&(!(T.expirationTime>ce)||J&&!N());){var V=T.callback;if(typeof V=="function"){T.callback=null,S=T.priorityLevel;var H=V(T.expirationTime<=ce);ce=r.unstable_now(),typeof H=="function"?T.callback=H:T===t(g)&&s(g),Te(ce)}else s(g);T=t(g)}if(T!==null)var Ee=!0;else{var we=t(_);we!==null&&Ye(ke,we.startTime-ce),Ee=!1}return Ee}finally{T=null,S=re,U=!1}}var Ne=!1,k=null,A=-1,C=5,x=-1;function N(){return!(r.unstable_now()-x<C)}function O(){if(k!==null){var J=r.unstable_now();x=J;var ce=!0;try{ce=k(!0,J)}finally{ce?R():(Ne=!1,k=null)}}else Ne=!1}var R;if(typeof fe=="function")R=function(){fe(O)};else if(typeof MessageChannel<"u"){var Be=new MessageChannel,vt=Be.port2;Be.port1.onmessage=O,R=function(){vt.postMessage(null)}}else R=function(){z(O,0)};function Dt(J){k=J,Ne||(Ne=!0,R())}function Ye(J,ce){A=z(function(){J(r.unstable_now())},ce)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(J){J.callback=null},r.unstable_continueExecution=function(){$||U||($=!0,Dt(He))},r.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<J?Math.floor(1e3/J):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(J){switch(S){case 1:case 2:case 3:var ce=3;break;default:ce=S}var re=S;S=ce;try{return J()}finally{S=re}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(J,ce){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var re=S;S=J;try{return ce()}finally{S=re}},r.unstable_scheduleCallback=function(J,ce,re){var V=r.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?V+re:V):re=V,J){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=re+H,J={id:w++,callback:ce,priorityLevel:J,startTime:re,expirationTime:H,sortIndex:-1},re>V?(J.sortIndex=re,e(_,J),t(g)===null&&J===t(_)&&(W?(ae(A),A=-1):W=!0,Ye(ke,re-V))):(J.sortIndex=H,e(g,J),$||U||($=!0,Dt(He))),J},r.unstable_shouldYield=N,r.unstable_wrapCallback=function(J){var ce=S;return function(){var re=S;S=ce;try{return J.apply(this,arguments)}finally{S=re}}}}(ad)),ad}var og;function Dw(){return og||(og=1,od.exports=Nw()),od.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ag;function xw(){if(ag)return Qt;ag=1;var r=Kd(),e=Dw();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},T={};function S(n){return g.call(T,n)?!0:g.call(w,n)?!1:_.test(n)?T[n]=!0:(w[n]=!0,!1)}function U(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function $(n,i,a,c){if(i===null||typeof i>"u"||U(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function W(n,i,a,c,d,f,v){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=f,this.removeEmptyString=v}var z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){z[n]=new W(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];z[i]=new W(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){z[n]=new W(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){z[n]=new W(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){z[n]=new W(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){z[n]=new W(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){z[n]=new W(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){z[n]=new W(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){z[n]=new W(n,5,!1,n.toLowerCase(),null,!1,!1)});var ae=/[\-:]([a-z])/g;function fe(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(ae,fe);z[i]=new W(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(ae,fe);z[i]=new W(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(ae,fe);z[i]=new W(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){z[n]=new W(n,1,!1,n.toLowerCase(),null,!1,!1)}),z.xlinkHref=new W("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){z[n]=new W(n,1,!1,n.toLowerCase(),null,!0,!0)});function Te(n,i,a,c){var d=z.hasOwnProperty(i)?z[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&($(i,a,d,c)&&(a=null),c||d===null?S(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var ke=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,He=Symbol.for("react.element"),Ne=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),N=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),Be=Symbol.for("react.suspense_list"),vt=Symbol.for("react.memo"),Dt=Symbol.for("react.lazy"),Ye=Symbol.for("react.offscreen"),J=Symbol.iterator;function ce(n){return n===null||typeof n!="object"?null:(n=J&&n[J]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,V;function H(n){if(V===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);V=i&&i[1]||""}return`
`+V+n}var Ee=!1;function we(n,i){if(!n||Ee)return"";Ee=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(F){var c=F}Reflect.construct(n,[],i)}else{try{i.call()}catch(F){c=F}n.call(i.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var d=F.stack.split(`
`),f=c.stack.split(`
`),v=d.length-1,I=f.length-1;1<=v&&0<=I&&d[v]!==f[I];)I--;for(;1<=v&&0<=I;v--,I--)if(d[v]!==f[I]){if(v!==1||I!==1)do if(v--,I--,0>I||d[v]!==f[I]){var P=`
`+d[v].replace(" at new "," at ");return n.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",n.displayName)),P}while(1<=v&&0<=I);break}}}finally{Ee=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?H(n):""}function Se(n){switch(n.tag){case 5:return H(n.type);case 16:return H("Lazy");case 13:return H("Suspense");case 19:return H("SuspenseList");case 0:case 2:case 15:return n=we(n.type,!1),n;case 11:return n=we(n.type.render,!1),n;case 1:return n=we(n.type,!0),n;default:return""}}function Ae(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case Ne:return"Portal";case C:return"Profiler";case A:return"StrictMode";case R:return"Suspense";case Be:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case N:return(n.displayName||"Context")+".Consumer";case x:return(n._context.displayName||"Context")+".Provider";case O:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case vt:return i=n.displayName||null,i!==null?i:Ae(n.type)||"Memo";case Dt:i=n._payload,n=n._init;try{return Ae(n(i))}catch{}}return null}function be(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ae(i);case 8:return i===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ve(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function je(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function zt(n){var i=je(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,f=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,f.call(this,v)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Es(n){n._valueTracker||(n._valueTracker=zt(n))}function xo(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=je(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Mr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ws(n,i){var a=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function cl(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Ve(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ts(n,i){i=i.checked,i!=null&&Te(n,"checked",i,!1)}function Vi(n,i){Ts(n,i);var a=Ve(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?ut(n,i.type,a):i.hasOwnProperty("defaultValue")&&ut(n,i.type,Ve(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Vo(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ut(n,i,a){(i!=="number"||Mr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var st=Array.isArray;function Tn(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Ve(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Oo(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Lo(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(st(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Ve(a)}}function hl(n,i){var a=Ve(i.value),c=Ve(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function br(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Mo(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Is(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Mo(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Fr,dl=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Fr=Fr||document.createElement("div"),Fr.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Fr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Oi(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ur={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fl=["Webkit","ms","Moz","O"];Object.keys(Ur).forEach(function(n){fl.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ur[i]=Ur[n]})});function jr(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ur.hasOwnProperty(n)&&Ur[n]?(""+i).trim():i+"px"}function Ss(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=jr(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var bo=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function In(n,i){if(i){if(bo[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function As(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zr=null;function Rs(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ar=null,lr=null,nt=null;function Fo(n){if(n=ha(n)){if(typeof ar!="function")throw Error(t(280));var i=n.stateNode;i&&(i=jl(i),ar(n.stateNode,n.type,i))}}function Br(n){lr?nt?nt.push(n):nt=[n]:lr=n}function $r(){if(lr){var n=lr,i=nt;if(nt=lr=null,Fo(n),i)for(n=0;n<i.length;n++)Fo(i[n])}}function pl(n,i){return n(i)}function ml(){}var Ln=!1;function gl(n,i,a){if(Ln)return n(i,a);Ln=!0;try{return pl(n,i,a)}finally{Ln=!1,(lr!==null||nt!==null)&&(ml(),$r())}}function Li(n,i){var a=n.stateNode;if(a===null)return null;var c=jl(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var qr=!1;if(m)try{var Wr={};Object.defineProperty(Wr,"passive",{get:function(){qr=!0}}),window.addEventListener("test",Wr,Wr),window.removeEventListener("test",Wr,Wr)}catch{qr=!1}function yl(n,i,a,c,d,f,v,I,P){var F=Array.prototype.slice.call(arguments,3);try{i.apply(a,F)}catch(K){this.onError(K)}}var ur=!1,Mn=null,Cs=!1,hn=null,_l={onError:function(n){ur=!0,Mn=n}};function vl(n,i,a,c,d,f,v,I,P){ur=!1,Mn=null,yl.apply(_l,arguments)}function Uo(n,i,a,c,d,f,v,I,P){if(vl.apply(this,arguments),ur){if(ur){var F=Mn;ur=!1,Mn=null}else throw Error(t(198));Cs||(Cs=!0,hn=F)}}function Sn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function jo(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function El(n){if(Sn(n)!==n)throw Error(t(188))}function wl(n){var i=n.alternate;if(!i){if(i=Sn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var f=d.alternate;if(f===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===a)return El(d),n;if(f===c)return El(d),i;f=f.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=f;else{for(var v=!1,I=d.child;I;){if(I===a){v=!0,a=d,c=f;break}if(I===c){v=!0,c=d,a=f;break}I=I.sibling}if(!v){for(I=f.child;I;){if(I===a){v=!0,a=f,c=d;break}if(I===c){v=!0,c=f,a=d;break}I=I.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Tl(n){return n=wl(n),n!==null?Mi(n):null}function Mi(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Mi(n);if(i!==null)return i;n=n.sibling}return null}var zo=e.unstable_scheduleCallback,Ps=e.unstable_cancelCallback,bi=e.unstable_shouldYield,cr=e.unstable_requestPaint,Ge=e.unstable_now,Oc=e.unstable_getCurrentPriorityLevel,ks=e.unstable_ImmediatePriority,Bo=e.unstable_UserBlockingPriority,Fi=e.unstable_NormalPriority,$o=e.unstable_LowPriority,Ns=e.unstable_IdlePriority,Ui=null,Zt=null;function Il(n){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(Ui,n,void 0,(n.current.flags&128)===128)}catch{}}var en=Math.clz32?Math.clz32:ji,bn=Math.log,dn=Math.LN2;function ji(n){return n>>>=0,n===0?32:31-(bn(n)/dn|0)|0}var Fn=64,Hr=4194304;function Me(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function hr(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,f=n.pingedLanes,v=a&268435455;if(v!==0){var I=v&~d;I!==0?c=Me(I):(f&=v,f!==0&&(c=Me(f)))}else v=a&~d,v!==0?c=Me(v):f!==0&&(c=Me(f));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,f=i&-i,d>=f||d===16&&(f&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-en(i),d=1<<a,c|=n[a],i&=~d;return c}function zi(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bi(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,f=n.pendingLanes;0<f;){var v=31-en(f),I=1<<v,P=d[v];P===-1?((I&a)===0||(I&c)!==0)&&(d[v]=zi(I,i)):P<=i&&(n.expiredLanes|=I),f&=~I}}function qo(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Wo(){var n=Fn;return Fn<<=1,(Fn&4194240)===0&&(Fn=64),n}function Ho(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function $i(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-en(i),n[i]=a}function Lc(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-en(a),f=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~f}}function Go(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-en(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var De=0;function Un(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ko,Ds,Qo,Yo,Xo,jn=!1,xs=[],zn=null,Bn=null,St=null,qi=new Map,dr=new Map,tn=[],Sl="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gr(n,i){switch(n){case"focusin":case"focusout":zn=null;break;case"dragenter":case"dragleave":Bn=null;break;case"mouseover":case"mouseout":St=null;break;case"pointerover":case"pointerout":qi.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":dr.delete(i.pointerId)}}function An(n,i,a,c,d,f){return n===null||n.nativeEvent!==f?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:f,targetContainers:[d]},i!==null&&(i=ha(i),i!==null&&Ds(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Al(n,i,a,c,d){switch(i){case"focusin":return zn=An(zn,n,i,a,c,d),!0;case"dragenter":return Bn=An(Bn,n,i,a,c,d),!0;case"mouseover":return St=An(St,n,i,a,c,d),!0;case"pointerover":var f=d.pointerId;return qi.set(f,An(qi.get(f)||null,n,i,a,c,d)),!0;case"gotpointercapture":return f=d.pointerId,dr.set(f,An(dr.get(f)||null,n,i,a,c,d)),!0}return!1}function Vs(n){var i=Ki(n.target);if(i!==null){var a=Sn(i);if(a!==null){if(i=a.tag,i===13){if(i=jo(a),i!==null){n.blockedOn=i,Xo(n.priority,function(){Qo(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ze(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Os(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);zr=c,a.target.dispatchEvent(c),zr=null}else return i=ha(a),i!==null&&Ds(i),n.blockedOn=a,!1;i.shift()}return!0}function Rl(n,i,a){ze(n)&&a.delete(i)}function Mc(){jn=!1,zn!==null&&ze(zn)&&(zn=null),Bn!==null&&ze(Bn)&&(Bn=null),St!==null&&ze(St)&&(St=null),qi.forEach(Rl),dr.forEach(Rl)}function Kr(n,i){n.blockedOn===i&&(n.blockedOn=null,jn||(jn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Mc)))}function Qr(n){function i(d){return Kr(d,n)}if(0<xs.length){Kr(xs[0],n);for(var a=1;a<xs.length;a++){var c=xs[a];c.blockedOn===n&&(c.blockedOn=null)}}for(zn!==null&&Kr(zn,n),Bn!==null&&Kr(Bn,n),St!==null&&Kr(St,n),qi.forEach(i),dr.forEach(i),a=0;a<tn.length;a++)c=tn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<tn.length&&(a=tn[0],a.blockedOn===null);)Vs(a),a.blockedOn===null&&tn.shift()}var fr=ke.ReactCurrentBatchConfig,pr=!0;function $n(n,i,a,c){var d=De,f=fr.transition;fr.transition=null;try{De=1,Jo(n,i,a,c)}finally{De=d,fr.transition=f}}function Cl(n,i,a,c){var d=De,f=fr.transition;fr.transition=null;try{De=4,Jo(n,i,a,c)}finally{De=d,fr.transition=f}}function Jo(n,i,a,c){if(pr){var d=Os(n,i,a,c);if(d===null)Gc(n,i,c,qn,a),Gr(n,c);else if(Al(d,n,i,a,c))c.stopPropagation();else if(Gr(n,c),i&4&&-1<Sl.indexOf(n)){for(;d!==null;){var f=ha(d);if(f!==null&&Ko(f),f=Os(n,i,a,c),f===null&&Gc(n,i,c,qn,a),f===d)break;d=f}d!==null&&c.stopPropagation()}else Gc(n,i,c,null,a)}}var qn=null;function Os(n,i,a,c){if(qn=null,n=Rs(c),n=Ki(n),n!==null)if(i=Sn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=jo(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return qn=n,null}function Ls(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Oc()){case ks:return 1;case Bo:return 4;case Fi:case $o:return 16;case Ns:return 536870912;default:return 16}default:return 16}}var nn=null,Ms=null,mr=null;function Pl(){if(mr)return mr;var n,i=Ms,a=i.length,c,d="value"in nn?nn.value:nn.textContent,f=d.length;for(n=0;n<a&&i[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&i[a-c]===d[f-c];c++);return mr=d.slice(n,1<c?1-c:void 0)}function Wi(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Wn(){return!0}function Zo(){return!1}function xt(n){function i(a,c,d,f,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(f):f[I]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Wn:Zo,this.isPropagationStopped=Zo,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wn)},persist:function(){},isPersistent:Wn}),i}var Hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hi=xt(Hn),Yr=re({},Hn,{view:0,detail:0}),bs=xt(Yr),Fs,Us,rn,Gi=re({},Yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_e,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==rn&&(rn&&n.type==="mousemove"?(Fs=n.screenX-rn.screenX,Us=n.screenY-rn.screenY):Us=Fs=0,rn=n),Fs)},movementY:function(n){return"movementY"in n?n.movementY:Us}}),ea=xt(Gi),kl=re({},Gi,{dataTransfer:0}),Nl=xt(kl),js=re({},Yr,{relatedTarget:0}),At=xt(js),Dl=re({},Hn,{animationName:0,elapsedTime:0,pseudoElement:0}),xl=xt(Dl),Xr=re({},Hn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),l=xt(Xr),p=re({},Hn,{data:0}),y=xt(p),E={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function X(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=j[n])?!!i[n]:!1}function _e(){return X}var ot=re({},Yr,{key:function(n){if(n.key){var i=E[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Wi(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?M[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_e,charCode:function(n){return n.type==="keypress"?Wi(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Wi(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Ue=xt(ot),ct=re({},Gi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sn=xt(ct),gr=re({},Yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_e}),Gn=xt(gr),Kn=re({},Hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),zs=xt(Kn),ta=re({},Gi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),yE=xt(ta),_E=[9,13,27,32],bc=m&&"CompositionEvent"in window,na=null;m&&"documentMode"in document&&(na=document.documentMode);var vE=m&&"TextEvent"in window&&!na,Hf=m&&(!bc||na&&8<na&&11>=na),Gf=" ",Kf=!1;function Qf(n,i){switch(n){case"keyup":return _E.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Bs=!1;function EE(n,i){switch(n){case"compositionend":return Yf(i);case"keypress":return i.which!==32?null:(Kf=!0,Gf);case"textInput":return n=i.data,n===Gf&&Kf?null:n;default:return null}}function wE(n,i){if(Bs)return n==="compositionend"||!bc&&Qf(n,i)?(n=Pl(),mr=Ms=nn=null,Bs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Hf&&i.locale!=="ko"?null:i.data;default:return null}}var TE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!TE[n.type]:i==="textarea"}function Jf(n,i,a,c){Br(c),i=bl(i,"onChange"),0<i.length&&(a=new Hi("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var ra=null,ia=null;function IE(n){gp(n,0)}function Vl(n){var i=Gs(n);if(xo(i))return n}function SE(n,i){if(n==="change")return i}var Zf=!1;if(m){var Fc;if(m){var Uc="oninput"in document;if(!Uc){var ep=document.createElement("div");ep.setAttribute("oninput","return;"),Uc=typeof ep.oninput=="function"}Fc=Uc}else Fc=!1;Zf=Fc&&(!document.documentMode||9<document.documentMode)}function tp(){ra&&(ra.detachEvent("onpropertychange",np),ia=ra=null)}function np(n){if(n.propertyName==="value"&&Vl(ia)){var i=[];Jf(i,ia,n,Rs(n)),gl(IE,i)}}function AE(n,i,a){n==="focusin"?(tp(),ra=i,ia=a,ra.attachEvent("onpropertychange",np)):n==="focusout"&&tp()}function RE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Vl(ia)}function CE(n,i){if(n==="click")return Vl(i)}function PE(n,i){if(n==="input"||n==="change")return Vl(i)}function kE(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Rn=typeof Object.is=="function"?Object.is:kE;function sa(n,i){if(Rn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(i,d)||!Rn(n[d],i[d]))return!1}return!0}function rp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ip(n,i){var a=rp(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=rp(a)}}function sp(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?sp(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function op(){for(var n=window,i=Mr();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Mr(n.document)}return i}function jc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function NE(n){var i=op(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&sp(a.ownerDocument.documentElement,a)){if(c!==null&&jc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,f=Math.min(c.start,d);c=c.end===void 0?f:Math.min(c.end,d),!n.extend&&f>c&&(d=c,c=f,f=d),d=ip(a,f);var v=ip(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),f>c?(n.addRange(i),n.extend(v.node,v.offset)):(i.setEnd(v.node,v.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var DE=m&&"documentMode"in document&&11>=document.documentMode,$s=null,zc=null,oa=null,Bc=!1;function ap(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Bc||$s==null||$s!==Mr(c)||(c=$s,"selectionStart"in c&&jc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),oa&&sa(oa,c)||(oa=c,c=bl(zc,"onSelect"),0<c.length&&(i=new Hi("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=$s)))}function Ol(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var qs={animationend:Ol("Animation","AnimationEnd"),animationiteration:Ol("Animation","AnimationIteration"),animationstart:Ol("Animation","AnimationStart"),transitionend:Ol("Transition","TransitionEnd")},$c={},lp={};m&&(lp=document.createElement("div").style,"AnimationEvent"in window||(delete qs.animationend.animation,delete qs.animationiteration.animation,delete qs.animationstart.animation),"TransitionEvent"in window||delete qs.transitionend.transition);function Ll(n){if($c[n])return $c[n];if(!qs[n])return n;var i=qs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in lp)return $c[n]=i[a];return n}var up=Ll("animationend"),cp=Ll("animationiteration"),hp=Ll("animationstart"),dp=Ll("transitionend"),fp=new Map,pp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jr(n,i){fp.set(n,i),u(i,[n])}for(var qc=0;qc<pp.length;qc++){var Wc=pp[qc],xE=Wc.toLowerCase(),VE=Wc[0].toUpperCase()+Wc.slice(1);Jr(xE,"on"+VE)}Jr(up,"onAnimationEnd"),Jr(cp,"onAnimationIteration"),Jr(hp,"onAnimationStart"),Jr("dblclick","onDoubleClick"),Jr("focusin","onFocus"),Jr("focusout","onBlur"),Jr(dp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),OE=new Set("cancel close invalid load scroll toggle".split(" ").concat(aa));function mp(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Uo(c,i,void 0,n),n.currentTarget=null}function gp(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var f=void 0;if(i)for(var v=c.length-1;0<=v;v--){var I=c[v],P=I.instance,F=I.currentTarget;if(I=I.listener,P!==f&&d.isPropagationStopped())break e;mp(d,I,F),f=P}else for(v=0;v<c.length;v++){if(I=c[v],P=I.instance,F=I.currentTarget,I=I.listener,P!==f&&d.isPropagationStopped())break e;mp(d,I,F),f=P}}}if(Cs)throw n=hn,Cs=!1,hn=null,n}function Ke(n,i){var a=i[Zc];a===void 0&&(a=i[Zc]=new Set);var c=n+"__bubble";a.has(c)||(yp(i,n,2,!1),a.add(c))}function Hc(n,i,a){var c=0;i&&(c|=4),yp(a,n,c,i)}var Ml="_reactListening"+Math.random().toString(36).slice(2);function la(n){if(!n[Ml]){n[Ml]=!0,s.forEach(function(a){a!=="selectionchange"&&(OE.has(a)||Hc(a,!1,n),Hc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ml]||(i[Ml]=!0,Hc("selectionchange",!1,i))}}function yp(n,i,a,c){switch(Ls(i)){case 1:var d=$n;break;case 4:d=Cl;break;default:d=Jo}a=d.bind(null,i,a,n),d=void 0,!qr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Gc(n,i,a,c,d){var f=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var I=c.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var P=v.tag;if((P===3||P===4)&&(P=v.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;v=v.return}for(;I!==null;){if(v=Ki(I),v===null)return;if(P=v.tag,P===5||P===6){c=f=v;continue e}I=I.parentNode}}c=c.return}gl(function(){var F=f,K=Rs(a),Q=[];e:{var G=fp.get(n);if(G!==void 0){var te=Hi,se=n;switch(n){case"keypress":if(Wi(a)===0)break e;case"keydown":case"keyup":te=Ue;break;case"focusin":se="focus",te=At;break;case"focusout":se="blur",te=At;break;case"beforeblur":case"afterblur":te=At;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":te=ea;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":te=Nl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":te=Gn;break;case up:case cp:case hp:te=xl;break;case dp:te=zs;break;case"scroll":te=bs;break;case"wheel":te=yE;break;case"copy":case"cut":case"paste":te=l;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":te=sn}var oe=(i&4)!==0,at=!oe&&n==="scroll",L=oe?G!==null?G+"Capture":null:G;oe=[];for(var D=F,b;D!==null;){b=D;var Y=b.stateNode;if(b.tag===5&&Y!==null&&(b=Y,L!==null&&(Y=Li(D,L),Y!=null&&oe.push(ua(D,Y,b)))),at)break;D=D.return}0<oe.length&&(G=new te(G,se,null,a,K),Q.push({event:G,listeners:oe}))}}if((i&7)===0){e:{if(G=n==="mouseover"||n==="pointerover",te=n==="mouseout"||n==="pointerout",G&&a!==zr&&(se=a.relatedTarget||a.fromElement)&&(Ki(se)||se[yr]))break e;if((te||G)&&(G=K.window===K?K:(G=K.ownerDocument)?G.defaultView||G.parentWindow:window,te?(se=a.relatedTarget||a.toElement,te=F,se=se?Ki(se):null,se!==null&&(at=Sn(se),se!==at||se.tag!==5&&se.tag!==6)&&(se=null)):(te=null,se=F),te!==se)){if(oe=ea,Y="onMouseLeave",L="onMouseEnter",D="mouse",(n==="pointerout"||n==="pointerover")&&(oe=sn,Y="onPointerLeave",L="onPointerEnter",D="pointer"),at=te==null?G:Gs(te),b=se==null?G:Gs(se),G=new oe(Y,D+"leave",te,a,K),G.target=at,G.relatedTarget=b,Y=null,Ki(K)===F&&(oe=new oe(L,D+"enter",se,a,K),oe.target=b,oe.relatedTarget=at,Y=oe),at=Y,te&&se)t:{for(oe=te,L=se,D=0,b=oe;b;b=Ws(b))D++;for(b=0,Y=L;Y;Y=Ws(Y))b++;for(;0<D-b;)oe=Ws(oe),D--;for(;0<b-D;)L=Ws(L),b--;for(;D--;){if(oe===L||L!==null&&oe===L.alternate)break t;oe=Ws(oe),L=Ws(L)}oe=null}else oe=null;te!==null&&_p(Q,G,te,oe,!1),se!==null&&at!==null&&_p(Q,at,se,oe,!0)}}e:{if(G=F?Gs(F):window,te=G.nodeName&&G.nodeName.toLowerCase(),te==="select"||te==="input"&&G.type==="file")var le=SE;else if(Xf(G))if(Zf)le=PE;else{le=RE;var he=AE}else(te=G.nodeName)&&te.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(le=CE);if(le&&(le=le(n,F))){Jf(Q,le,a,K);break e}he&&he(n,G,F),n==="focusout"&&(he=G._wrapperState)&&he.controlled&&G.type==="number"&&ut(G,"number",G.value)}switch(he=F?Gs(F):window,n){case"focusin":(Xf(he)||he.contentEditable==="true")&&($s=he,zc=F,oa=null);break;case"focusout":oa=zc=$s=null;break;case"mousedown":Bc=!0;break;case"contextmenu":case"mouseup":case"dragend":Bc=!1,ap(Q,a,K);break;case"selectionchange":if(DE)break;case"keydown":case"keyup":ap(Q,a,K)}var de;if(bc)e:{switch(n){case"compositionstart":var ge="onCompositionStart";break e;case"compositionend":ge="onCompositionEnd";break e;case"compositionupdate":ge="onCompositionUpdate";break e}ge=void 0}else Bs?Qf(n,a)&&(ge="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ge="onCompositionStart");ge&&(Hf&&a.locale!=="ko"&&(Bs||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&Bs&&(de=Pl()):(nn=K,Ms="value"in nn?nn.value:nn.textContent,Bs=!0)),he=bl(F,ge),0<he.length&&(ge=new y(ge,n,null,a,K),Q.push({event:ge,listeners:he}),de?ge.data=de:(de=Yf(a),de!==null&&(ge.data=de)))),(de=vE?EE(n,a):wE(n,a))&&(F=bl(F,"onBeforeInput"),0<F.length&&(K=new y("onBeforeInput","beforeinput",null,a,K),Q.push({event:K,listeners:F}),K.data=de))}gp(Q,i)})}function ua(n,i,a){return{instance:n,listener:i,currentTarget:a}}function bl(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,f=d.stateNode;d.tag===5&&f!==null&&(d=f,f=Li(n,a),f!=null&&c.unshift(ua(n,f,d)),f=Li(n,i),f!=null&&c.push(ua(n,f,d))),n=n.return}return c}function Ws(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function _p(n,i,a,c,d){for(var f=i._reactName,v=[];a!==null&&a!==c;){var I=a,P=I.alternate,F=I.stateNode;if(P!==null&&P===c)break;I.tag===5&&F!==null&&(I=F,d?(P=Li(a,f),P!=null&&v.unshift(ua(a,P,I))):d||(P=Li(a,f),P!=null&&v.push(ua(a,P,I)))),a=a.return}v.length!==0&&n.push({event:i,listeners:v})}var LE=/\r\n?/g,ME=/\u0000|\uFFFD/g;function vp(n){return(typeof n=="string"?n:""+n).replace(LE,`
`).replace(ME,"")}function Fl(n,i,a){if(i=vp(i),vp(n)!==i&&a)throw Error(t(425))}function Ul(){}var Kc=null,Qc=null;function Yc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Xc=typeof setTimeout=="function"?setTimeout:void 0,bE=typeof clearTimeout=="function"?clearTimeout:void 0,Ep=typeof Promise=="function"?Promise:void 0,FE=typeof queueMicrotask=="function"?queueMicrotask:typeof Ep<"u"?function(n){return Ep.resolve(null).then(n).catch(UE)}:Xc;function UE(n){setTimeout(function(){throw n})}function Jc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Qr(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Qr(i)}function Zr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function wp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Hs=Math.random().toString(36).slice(2),Qn="__reactFiber$"+Hs,ca="__reactProps$"+Hs,yr="__reactContainer$"+Hs,Zc="__reactEvents$"+Hs,jE="__reactListeners$"+Hs,zE="__reactHandles$"+Hs;function Ki(n){var i=n[Qn];if(i)return i;for(var a=n.parentNode;a;){if(i=a[yr]||a[Qn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=wp(n);n!==null;){if(a=n[Qn])return a;n=wp(n)}return i}n=a,a=n.parentNode}return null}function ha(n){return n=n[Qn]||n[yr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Gs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function jl(n){return n[ca]||null}var eh=[],Ks=-1;function ei(n){return{current:n}}function Qe(n){0>Ks||(n.current=eh[Ks],eh[Ks]=null,Ks--)}function $e(n,i){Ks++,eh[Ks]=n.current,n.current=i}var ti={},Vt=ei(ti),qt=ei(!1),Qi=ti;function Qs(n,i){var a=n.type.contextTypes;if(!a)return ti;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},f;for(f in a)d[f]=i[f];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Wt(n){return n=n.childContextTypes,n!=null}function zl(){Qe(qt),Qe(Vt)}function Tp(n,i,a){if(Vt.current!==ti)throw Error(t(168));$e(Vt,i),$e(qt,a)}function Ip(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,be(n)||"Unknown",d));return re({},a,c)}function Bl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ti,Qi=Vt.current,$e(Vt,n),$e(qt,qt.current),!0}function Sp(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Ip(n,i,Qi),c.__reactInternalMemoizedMergedChildContext=n,Qe(qt),Qe(Vt),$e(Vt,n)):Qe(qt),$e(qt,a)}var _r=null,$l=!1,th=!1;function Ap(n){_r===null?_r=[n]:_r.push(n)}function BE(n){$l=!0,Ap(n)}function ni(){if(!th&&_r!==null){th=!0;var n=0,i=De;try{var a=_r;for(De=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}_r=null,$l=!1}catch(d){throw _r!==null&&(_r=_r.slice(n+1)),zo(ks,ni),d}finally{De=i,th=!1}}return null}var Ys=[],Xs=0,ql=null,Wl=0,fn=[],pn=0,Yi=null,vr=1,Er="";function Xi(n,i){Ys[Xs++]=Wl,Ys[Xs++]=ql,ql=n,Wl=i}function Rp(n,i,a){fn[pn++]=vr,fn[pn++]=Er,fn[pn++]=Yi,Yi=n;var c=vr;n=Er;var d=32-en(c)-1;c&=~(1<<d),a+=1;var f=32-en(i)+d;if(30<f){var v=d-d%5;f=(c&(1<<v)-1).toString(32),c>>=v,d-=v,vr=1<<32-en(i)+d|a<<d|c,Er=f+n}else vr=1<<f|a<<d|c,Er=n}function nh(n){n.return!==null&&(Xi(n,1),Rp(n,1,0))}function rh(n){for(;n===ql;)ql=Ys[--Xs],Ys[Xs]=null,Wl=Ys[--Xs],Ys[Xs]=null;for(;n===Yi;)Yi=fn[--pn],fn[pn]=null,Er=fn[--pn],fn[pn]=null,vr=fn[--pn],fn[pn]=null}var on=null,an=null,Xe=!1,Cn=null;function Cp(n,i){var a=_n(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Pp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,on=n,an=Zr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,on=n,an=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Yi!==null?{id:vr,overflow:Er}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=_n(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,on=n,an=null,!0):!1;default:return!1}}function ih(n){return(n.mode&1)!==0&&(n.flags&128)===0}function sh(n){if(Xe){var i=an;if(i){var a=i;if(!Pp(n,i)){if(ih(n))throw Error(t(418));i=Zr(a.nextSibling);var c=on;i&&Pp(n,i)?Cp(c,a):(n.flags=n.flags&-4097|2,Xe=!1,on=n)}}else{if(ih(n))throw Error(t(418));n.flags=n.flags&-4097|2,Xe=!1,on=n}}}function kp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;on=n}function Hl(n){if(n!==on)return!1;if(!Xe)return kp(n),Xe=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Yc(n.type,n.memoizedProps)),i&&(i=an)){if(ih(n))throw Np(),Error(t(418));for(;i;)Cp(n,i),i=Zr(i.nextSibling)}if(kp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){an=Zr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}an=null}}else an=on?Zr(n.stateNode.nextSibling):null;return!0}function Np(){for(var n=an;n;)n=Zr(n.nextSibling)}function Js(){an=on=null,Xe=!1}function oh(n){Cn===null?Cn=[n]:Cn.push(n)}var $E=ke.ReactCurrentBatchConfig;function da(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,f=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===f?i.ref:(i=function(v){var I=d.refs;v===null?delete I[f]:I[f]=v},i._stringRef=f,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Gl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Dp(n){var i=n._init;return i(n._payload)}function xp(n){function i(L,D){if(n){var b=L.deletions;b===null?(L.deletions=[D],L.flags|=16):b.push(D)}}function a(L,D){if(!n)return null;for(;D!==null;)i(L,D),D=D.sibling;return null}function c(L,D){for(L=new Map;D!==null;)D.key!==null?L.set(D.key,D):L.set(D.index,D),D=D.sibling;return L}function d(L,D){return L=ci(L,D),L.index=0,L.sibling=null,L}function f(L,D,b){return L.index=b,n?(b=L.alternate,b!==null?(b=b.index,b<D?(L.flags|=2,D):b):(L.flags|=2,D)):(L.flags|=1048576,D)}function v(L){return n&&L.alternate===null&&(L.flags|=2),L}function I(L,D,b,Y){return D===null||D.tag!==6?(D=Xh(b,L.mode,Y),D.return=L,D):(D=d(D,b),D.return=L,D)}function P(L,D,b,Y){var le=b.type;return le===k?K(L,D,b.props.children,Y,b.key):D!==null&&(D.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===Dt&&Dp(le)===D.type)?(Y=d(D,b.props),Y.ref=da(L,D,b),Y.return=L,Y):(Y=yu(b.type,b.key,b.props,null,L.mode,Y),Y.ref=da(L,D,b),Y.return=L,Y)}function F(L,D,b,Y){return D===null||D.tag!==4||D.stateNode.containerInfo!==b.containerInfo||D.stateNode.implementation!==b.implementation?(D=Jh(b,L.mode,Y),D.return=L,D):(D=d(D,b.children||[]),D.return=L,D)}function K(L,D,b,Y,le){return D===null||D.tag!==7?(D=ss(b,L.mode,Y,le),D.return=L,D):(D=d(D,b),D.return=L,D)}function Q(L,D,b){if(typeof D=="string"&&D!==""||typeof D=="number")return D=Xh(""+D,L.mode,b),D.return=L,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case He:return b=yu(D.type,D.key,D.props,null,L.mode,b),b.ref=da(L,null,D),b.return=L,b;case Ne:return D=Jh(D,L.mode,b),D.return=L,D;case Dt:var Y=D._init;return Q(L,Y(D._payload),b)}if(st(D)||ce(D))return D=ss(D,L.mode,b,null),D.return=L,D;Gl(L,D)}return null}function G(L,D,b,Y){var le=D!==null?D.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return le!==null?null:I(L,D,""+b,Y);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case He:return b.key===le?P(L,D,b,Y):null;case Ne:return b.key===le?F(L,D,b,Y):null;case Dt:return le=b._init,G(L,D,le(b._payload),Y)}if(st(b)||ce(b))return le!==null?null:K(L,D,b,Y,null);Gl(L,b)}return null}function te(L,D,b,Y,le){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return L=L.get(b)||null,I(D,L,""+Y,le);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case He:return L=L.get(Y.key===null?b:Y.key)||null,P(D,L,Y,le);case Ne:return L=L.get(Y.key===null?b:Y.key)||null,F(D,L,Y,le);case Dt:var he=Y._init;return te(L,D,b,he(Y._payload),le)}if(st(Y)||ce(Y))return L=L.get(b)||null,K(D,L,Y,le,null);Gl(D,Y)}return null}function se(L,D,b,Y){for(var le=null,he=null,de=D,ge=D=0,Tt=null;de!==null&&ge<b.length;ge++){de.index>ge?(Tt=de,de=null):Tt=de.sibling;var Le=G(L,de,b[ge],Y);if(Le===null){de===null&&(de=Tt);break}n&&de&&Le.alternate===null&&i(L,de),D=f(Le,D,ge),he===null?le=Le:he.sibling=Le,he=Le,de=Tt}if(ge===b.length)return a(L,de),Xe&&Xi(L,ge),le;if(de===null){for(;ge<b.length;ge++)de=Q(L,b[ge],Y),de!==null&&(D=f(de,D,ge),he===null?le=de:he.sibling=de,he=de);return Xe&&Xi(L,ge),le}for(de=c(L,de);ge<b.length;ge++)Tt=te(de,L,ge,b[ge],Y),Tt!==null&&(n&&Tt.alternate!==null&&de.delete(Tt.key===null?ge:Tt.key),D=f(Tt,D,ge),he===null?le=Tt:he.sibling=Tt,he=Tt);return n&&de.forEach(function(hi){return i(L,hi)}),Xe&&Xi(L,ge),le}function oe(L,D,b,Y){var le=ce(b);if(typeof le!="function")throw Error(t(150));if(b=le.call(b),b==null)throw Error(t(151));for(var he=le=null,de=D,ge=D=0,Tt=null,Le=b.next();de!==null&&!Le.done;ge++,Le=b.next()){de.index>ge?(Tt=de,de=null):Tt=de.sibling;var hi=G(L,de,Le.value,Y);if(hi===null){de===null&&(de=Tt);break}n&&de&&hi.alternate===null&&i(L,de),D=f(hi,D,ge),he===null?le=hi:he.sibling=hi,he=hi,de=Tt}if(Le.done)return a(L,de),Xe&&Xi(L,ge),le;if(de===null){for(;!Le.done;ge++,Le=b.next())Le=Q(L,Le.value,Y),Le!==null&&(D=f(Le,D,ge),he===null?le=Le:he.sibling=Le,he=Le);return Xe&&Xi(L,ge),le}for(de=c(L,de);!Le.done;ge++,Le=b.next())Le=te(de,L,ge,Le.value,Y),Le!==null&&(n&&Le.alternate!==null&&de.delete(Le.key===null?ge:Le.key),D=f(Le,D,ge),he===null?le=Le:he.sibling=Le,he=Le);return n&&de.forEach(function(Tw){return i(L,Tw)}),Xe&&Xi(L,ge),le}function at(L,D,b,Y){if(typeof b=="object"&&b!==null&&b.type===k&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case He:e:{for(var le=b.key,he=D;he!==null;){if(he.key===le){if(le=b.type,le===k){if(he.tag===7){a(L,he.sibling),D=d(he,b.props.children),D.return=L,L=D;break e}}else if(he.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===Dt&&Dp(le)===he.type){a(L,he.sibling),D=d(he,b.props),D.ref=da(L,he,b),D.return=L,L=D;break e}a(L,he);break}else i(L,he);he=he.sibling}b.type===k?(D=ss(b.props.children,L.mode,Y,b.key),D.return=L,L=D):(Y=yu(b.type,b.key,b.props,null,L.mode,Y),Y.ref=da(L,D,b),Y.return=L,L=Y)}return v(L);case Ne:e:{for(he=b.key;D!==null;){if(D.key===he)if(D.tag===4&&D.stateNode.containerInfo===b.containerInfo&&D.stateNode.implementation===b.implementation){a(L,D.sibling),D=d(D,b.children||[]),D.return=L,L=D;break e}else{a(L,D);break}else i(L,D);D=D.sibling}D=Jh(b,L.mode,Y),D.return=L,L=D}return v(L);case Dt:return he=b._init,at(L,D,he(b._payload),Y)}if(st(b))return se(L,D,b,Y);if(ce(b))return oe(L,D,b,Y);Gl(L,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,D!==null&&D.tag===6?(a(L,D.sibling),D=d(D,b),D.return=L,L=D):(a(L,D),D=Xh(b,L.mode,Y),D.return=L,L=D),v(L)):a(L,D)}return at}var Zs=xp(!0),Vp=xp(!1),Kl=ei(null),Ql=null,eo=null,ah=null;function lh(){ah=eo=Ql=null}function uh(n){var i=Kl.current;Qe(Kl),n._currentValue=i}function ch(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function to(n,i){Ql=n,ah=eo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Ht=!0),n.firstContext=null)}function mn(n){var i=n._currentValue;if(ah!==n)if(n={context:n,memoizedValue:i,next:null},eo===null){if(Ql===null)throw Error(t(308));eo=n,Ql.dependencies={lanes:0,firstContext:n}}else eo=eo.next=n;return i}var Ji=null;function hh(n){Ji===null?Ji=[n]:Ji.push(n)}function Op(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,hh(i)):(a.next=d.next,d.next=a),i.interleaved=a,wr(n,c)}function wr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ri=!1;function dh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Tr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function ii(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Oe&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,wr(n,a)}return d=c.interleaved,d===null?(i.next=i,hh(c)):(i.next=d.next,d.next=i),c.interleaved=i,wr(n,a)}function Yl(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Go(n,a)}}function Mp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};f===null?d=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?d=f=i:f=f.next=i}else d=f=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Xl(n,i,a,c){var d=n.updateQueue;ri=!1;var f=d.firstBaseUpdate,v=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var P=I,F=P.next;P.next=null,v===null?f=F:v.next=F,v=P;var K=n.alternate;K!==null&&(K=K.updateQueue,I=K.lastBaseUpdate,I!==v&&(I===null?K.firstBaseUpdate=F:I.next=F,K.lastBaseUpdate=P))}if(f!==null){var Q=d.baseState;v=0,K=F=P=null,I=f;do{var G=I.lane,te=I.eventTime;if((c&G)===G){K!==null&&(K=K.next={eventTime:te,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var se=n,oe=I;switch(G=i,te=a,oe.tag){case 1:if(se=oe.payload,typeof se=="function"){Q=se.call(te,Q,G);break e}Q=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=oe.payload,G=typeof se=="function"?se.call(te,Q,G):se,G==null)break e;Q=re({},Q,G);break e;case 2:ri=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,G=d.effects,G===null?d.effects=[I]:G.push(I))}else te={eventTime:te,lane:G,tag:I.tag,payload:I.payload,callback:I.callback,next:null},K===null?(F=K=te,P=Q):K=K.next=te,v|=G;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;G=I,I=G.next,G.next=null,d.lastBaseUpdate=G,d.shared.pending=null}}while(!0);if(K===null&&(P=Q),d.baseState=P,d.firstBaseUpdate=F,d.lastBaseUpdate=K,i=d.shared.interleaved,i!==null){d=i;do v|=d.lane,d=d.next;while(d!==i)}else f===null&&(d.shared.lanes=0);ts|=v,n.lanes=v,n.memoizedState=Q}}function bp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var fa={},Yn=ei(fa),pa=ei(fa),ma=ei(fa);function Zi(n){if(n===fa)throw Error(t(174));return n}function fh(n,i){switch($e(ma,i),$e(pa,n),$e(Yn,fa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Is(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Is(i,n)}Qe(Yn),$e(Yn,i)}function no(){Qe(Yn),Qe(pa),Qe(ma)}function Fp(n){Zi(ma.current);var i=Zi(Yn.current),a=Is(i,n.type);i!==a&&($e(pa,n),$e(Yn,a))}function ph(n){pa.current===n&&(Qe(Yn),Qe(pa))}var Je=ei(0);function Jl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var mh=[];function gh(){for(var n=0;n<mh.length;n++)mh[n]._workInProgressVersionPrimary=null;mh.length=0}var Zl=ke.ReactCurrentDispatcher,yh=ke.ReactCurrentBatchConfig,es=0,Ze=null,mt=null,Et=null,eu=!1,ga=!1,ya=0,qE=0;function Ot(){throw Error(t(321))}function _h(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Rn(n[a],i[a]))return!1;return!0}function vh(n,i,a,c,d,f){if(es=f,Ze=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Zl.current=n===null||n.memoizedState===null?KE:QE,n=a(c,d),ga){f=0;do{if(ga=!1,ya=0,25<=f)throw Error(t(301));f+=1,Et=mt=null,i.updateQueue=null,Zl.current=YE,n=a(c,d)}while(ga)}if(Zl.current=ru,i=mt!==null&&mt.next!==null,es=0,Et=mt=Ze=null,eu=!1,i)throw Error(t(300));return n}function Eh(){var n=ya!==0;return ya=0,n}function Xn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?Ze.memoizedState=Et=n:Et=Et.next=n,Et}function gn(){if(mt===null){var n=Ze.alternate;n=n!==null?n.memoizedState:null}else n=mt.next;var i=Et===null?Ze.memoizedState:Et.next;if(i!==null)Et=i,mt=n;else{if(n===null)throw Error(t(310));mt=n,n={memoizedState:mt.memoizedState,baseState:mt.baseState,baseQueue:mt.baseQueue,queue:mt.queue,next:null},Et===null?Ze.memoizedState=Et=n:Et=Et.next=n}return Et}function _a(n,i){return typeof i=="function"?i(n):i}function wh(n){var i=gn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=mt,d=c.baseQueue,f=a.pending;if(f!==null){if(d!==null){var v=d.next;d.next=f.next,f.next=v}c.baseQueue=d=f,a.pending=null}if(d!==null){f=d.next,c=c.baseState;var I=v=null,P=null,F=f;do{var K=F.lane;if((es&K)===K)P!==null&&(P=P.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var Q={lane:K,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};P===null?(I=P=Q,v=c):P=P.next=Q,Ze.lanes|=K,ts|=K}F=F.next}while(F!==null&&F!==f);P===null?v=c:P.next=I,Rn(c,i.memoizedState)||(Ht=!0),i.memoizedState=c,i.baseState=v,i.baseQueue=P,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do f=d.lane,Ze.lanes|=f,ts|=f,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Th(n){var i=gn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,f=i.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do f=n(f,v.action),v=v.next;while(v!==d);Rn(f,i.memoizedState)||(Ht=!0),i.memoizedState=f,i.baseQueue===null&&(i.baseState=f),a.lastRenderedState=f}return[f,c]}function Up(){}function jp(n,i){var a=Ze,c=gn(),d=i(),f=!Rn(c.memoizedState,d);if(f&&(c.memoizedState=d,Ht=!0),c=c.queue,Ih($p.bind(null,a,c,n),[n]),c.getSnapshot!==i||f||Et!==null&&Et.memoizedState.tag&1){if(a.flags|=2048,va(9,Bp.bind(null,a,c,d,i),void 0,null),wt===null)throw Error(t(349));(es&30)!==0||zp(a,i,d)}return d}function zp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Ze.updateQueue,i===null?(i={lastEffect:null,stores:null},Ze.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Bp(n,i,a,c){i.value=a,i.getSnapshot=c,qp(i)&&Wp(n)}function $p(n,i,a){return a(function(){qp(i)&&Wp(n)})}function qp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Rn(n,a)}catch{return!0}}function Wp(n){var i=wr(n,1);i!==null&&Dn(i,n,1,-1)}function Hp(n){var i=Xn();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:n},i.queue=n,n=n.dispatch=GE.bind(null,Ze,n),[i.memoizedState,n]}function va(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Ze.updateQueue,i===null?(i={lastEffect:null,stores:null},Ze.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Gp(){return gn().memoizedState}function tu(n,i,a,c){var d=Xn();Ze.flags|=n,d.memoizedState=va(1|i,a,void 0,c===void 0?null:c)}function nu(n,i,a,c){var d=gn();c=c===void 0?null:c;var f=void 0;if(mt!==null){var v=mt.memoizedState;if(f=v.destroy,c!==null&&_h(c,v.deps)){d.memoizedState=va(i,a,f,c);return}}Ze.flags|=n,d.memoizedState=va(1|i,a,f,c)}function Kp(n,i){return tu(8390656,8,n,i)}function Ih(n,i){return nu(2048,8,n,i)}function Qp(n,i){return nu(4,2,n,i)}function Yp(n,i){return nu(4,4,n,i)}function Xp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Jp(n,i,a){return a=a!=null?a.concat([n]):null,nu(4,4,Xp.bind(null,i,n),a)}function Sh(){}function Zp(n,i){var a=gn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&_h(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function em(n,i){var a=gn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&_h(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function tm(n,i,a){return(es&21)===0?(n.baseState&&(n.baseState=!1,Ht=!0),n.memoizedState=a):(Rn(a,i)||(a=Wo(),Ze.lanes|=a,ts|=a,n.baseState=!0),i)}function WE(n,i){var a=De;De=a!==0&&4>a?a:4,n(!0);var c=yh.transition;yh.transition={};try{n(!1),i()}finally{De=a,yh.transition=c}}function nm(){return gn().memoizedState}function HE(n,i,a){var c=li(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},rm(n))im(i,a);else if(a=Op(n,i,a,c),a!==null){var d=$t();Dn(a,n,c,d),sm(a,i,c)}}function GE(n,i,a){var c=li(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(rm(n))im(i,d);else{var f=n.alternate;if(n.lanes===0&&(f===null||f.lanes===0)&&(f=i.lastRenderedReducer,f!==null))try{var v=i.lastRenderedState,I=f(v,a);if(d.hasEagerState=!0,d.eagerState=I,Rn(I,v)){var P=i.interleaved;P===null?(d.next=d,hh(i)):(d.next=P.next,P.next=d),i.interleaved=d;return}}catch{}finally{}a=Op(n,i,d,c),a!==null&&(d=$t(),Dn(a,n,c,d),sm(a,i,c))}}function rm(n){var i=n.alternate;return n===Ze||i!==null&&i===Ze}function im(n,i){ga=eu=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function sm(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Go(n,a)}}var ru={readContext:mn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},KE={readContext:mn,useCallback:function(n,i){return Xn().memoizedState=[n,i===void 0?null:i],n},useContext:mn,useEffect:Kp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,tu(4194308,4,Xp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return tu(4194308,4,n,i)},useInsertionEffect:function(n,i){return tu(4,2,n,i)},useMemo:function(n,i){var a=Xn();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Xn();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=HE.bind(null,Ze,n),[c.memoizedState,n]},useRef:function(n){var i=Xn();return n={current:n},i.memoizedState=n},useState:Hp,useDebugValue:Sh,useDeferredValue:function(n){return Xn().memoizedState=n},useTransition:function(){var n=Hp(!1),i=n[0];return n=WE.bind(null,n[1]),Xn().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Ze,d=Xn();if(Xe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),wt===null)throw Error(t(349));(es&30)!==0||zp(c,i,a)}d.memoizedState=a;var f={value:a,getSnapshot:i};return d.queue=f,Kp($p.bind(null,c,f,n),[n]),c.flags|=2048,va(9,Bp.bind(null,c,f,a,i),void 0,null),a},useId:function(){var n=Xn(),i=wt.identifierPrefix;if(Xe){var a=Er,c=vr;a=(c&~(1<<32-en(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=ya++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=qE++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},QE={readContext:mn,useCallback:Zp,useContext:mn,useEffect:Ih,useImperativeHandle:Jp,useInsertionEffect:Qp,useLayoutEffect:Yp,useMemo:em,useReducer:wh,useRef:Gp,useState:function(){return wh(_a)},useDebugValue:Sh,useDeferredValue:function(n){var i=gn();return tm(i,mt.memoizedState,n)},useTransition:function(){var n=wh(_a)[0],i=gn().memoizedState;return[n,i]},useMutableSource:Up,useSyncExternalStore:jp,useId:nm,unstable_isNewReconciler:!1},YE={readContext:mn,useCallback:Zp,useContext:mn,useEffect:Ih,useImperativeHandle:Jp,useInsertionEffect:Qp,useLayoutEffect:Yp,useMemo:em,useReducer:Th,useRef:Gp,useState:function(){return Th(_a)},useDebugValue:Sh,useDeferredValue:function(n){var i=gn();return mt===null?i.memoizedState=n:tm(i,mt.memoizedState,n)},useTransition:function(){var n=Th(_a)[0],i=gn().memoizedState;return[n,i]},useMutableSource:Up,useSyncExternalStore:jp,useId:nm,unstable_isNewReconciler:!1};function Pn(n,i){if(n&&n.defaultProps){i=re({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Ah(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:re({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var iu={isMounted:function(n){return(n=n._reactInternals)?Sn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=$t(),d=li(n),f=Tr(c,d);f.payload=i,a!=null&&(f.callback=a),i=ii(n,f,d),i!==null&&(Dn(i,n,d,c),Yl(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=$t(),d=li(n),f=Tr(c,d);f.tag=1,f.payload=i,a!=null&&(f.callback=a),i=ii(n,f,d),i!==null&&(Dn(i,n,d,c),Yl(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=$t(),c=li(n),d=Tr(a,c);d.tag=2,i!=null&&(d.callback=i),i=ii(n,d,c),i!==null&&(Dn(i,n,c,a),Yl(i,n,c))}};function om(n,i,a,c,d,f,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,f,v):i.prototype&&i.prototype.isPureReactComponent?!sa(a,c)||!sa(d,f):!0}function am(n,i,a){var c=!1,d=ti,f=i.contextType;return typeof f=="object"&&f!==null?f=mn(f):(d=Wt(i)?Qi:Vt.current,c=i.contextTypes,f=(c=c!=null)?Qs(n,d):ti),i=new i(a,f),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=iu,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=f),i}function lm(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&iu.enqueueReplaceState(i,i.state,null)}function Rh(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},dh(n);var f=i.contextType;typeof f=="object"&&f!==null?d.context=mn(f):(f=Wt(i)?Qi:Vt.current,d.context=Qs(n,f)),d.state=n.memoizedState,f=i.getDerivedStateFromProps,typeof f=="function"&&(Ah(n,i,f,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&iu.enqueueReplaceState(d,d.state,null),Xl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function ro(n,i){try{var a="",c=i;do a+=Se(c),c=c.return;while(c);var d=a}catch(f){d=`
Error generating stack: `+f.message+`
`+f.stack}return{value:n,source:i,stack:d,digest:null}}function Ch(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Ph(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var XE=typeof WeakMap=="function"?WeakMap:Map;function um(n,i,a){a=Tr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){hu||(hu=!0,$h=c),Ph(n,i)},a}function cm(n,i,a){a=Tr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){Ph(n,i)}}var f=n.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(a.callback=function(){Ph(n,i),typeof c!="function"&&(oi===null?oi=new Set([this]):oi.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})}),a}function hm(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new XE;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=hw.bind(null,n,i,a),i.then(n,n))}function dm(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function fm(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Tr(-1,1),i.tag=2,ii(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var JE=ke.ReactCurrentOwner,Ht=!1;function Bt(n,i,a,c){i.child=n===null?Vp(i,null,a,c):Zs(i,n.child,a,c)}function pm(n,i,a,c,d){a=a.render;var f=i.ref;return to(i,d),c=vh(n,i,a,c,f,d),a=Eh(),n!==null&&!Ht?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Ir(n,i,d)):(Xe&&a&&nh(i),i.flags|=1,Bt(n,i,c,d),i.child)}function mm(n,i,a,c,d){if(n===null){var f=a.type;return typeof f=="function"&&!Yh(f)&&f.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=f,gm(n,i,f,c,d)):(n=yu(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(f=n.child,(n.lanes&d)===0){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:sa,a(v,c)&&n.ref===i.ref)return Ir(n,i,d)}return i.flags|=1,n=ci(f,c),n.ref=i.ref,n.return=i,i.child=n}function gm(n,i,a,c,d){if(n!==null){var f=n.memoizedProps;if(sa(f,c)&&n.ref===i.ref)if(Ht=!1,i.pendingProps=c=f,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Ht=!0);else return i.lanes=n.lanes,Ir(n,i,d)}return kh(n,i,a,c,d)}function ym(n,i,a){var c=i.pendingProps,d=c.children,f=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},$e(so,ln),ln|=a;else{if((a&1073741824)===0)return n=f!==null?f.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,$e(so,ln),ln|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=f!==null?f.baseLanes:a,$e(so,ln),ln|=c}else f!==null?(c=f.baseLanes|a,i.memoizedState=null):c=a,$e(so,ln),ln|=c;return Bt(n,i,d,a),i.child}function _m(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function kh(n,i,a,c,d){var f=Wt(a)?Qi:Vt.current;return f=Qs(i,f),to(i,d),a=vh(n,i,a,c,f,d),c=Eh(),n!==null&&!Ht?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Ir(n,i,d)):(Xe&&c&&nh(i),i.flags|=1,Bt(n,i,a,d),i.child)}function vm(n,i,a,c,d){if(Wt(a)){var f=!0;Bl(i)}else f=!1;if(to(i,d),i.stateNode===null)ou(n,i),am(i,a,c),Rh(i,a,c,d),c=!0;else if(n===null){var v=i.stateNode,I=i.memoizedProps;v.props=I;var P=v.context,F=a.contextType;typeof F=="object"&&F!==null?F=mn(F):(F=Wt(a)?Qi:Vt.current,F=Qs(i,F));var K=a.getDerivedStateFromProps,Q=typeof K=="function"||typeof v.getSnapshotBeforeUpdate=="function";Q||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==c||P!==F)&&lm(i,v,c,F),ri=!1;var G=i.memoizedState;v.state=G,Xl(i,c,v,d),P=i.memoizedState,I!==c||G!==P||qt.current||ri?(typeof K=="function"&&(Ah(i,a,K,c),P=i.memoizedState),(I=ri||om(i,a,I,c,G,P,F))?(Q||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(i.flags|=4194308)):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=P),v.props=c,v.state=P,v.context=F,c=I):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{v=i.stateNode,Lp(n,i),I=i.memoizedProps,F=i.type===i.elementType?I:Pn(i.type,I),v.props=F,Q=i.pendingProps,G=v.context,P=a.contextType,typeof P=="object"&&P!==null?P=mn(P):(P=Wt(a)?Qi:Vt.current,P=Qs(i,P));var te=a.getDerivedStateFromProps;(K=typeof te=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==Q||G!==P)&&lm(i,v,c,P),ri=!1,G=i.memoizedState,v.state=G,Xl(i,c,v,d);var se=i.memoizedState;I!==Q||G!==se||qt.current||ri?(typeof te=="function"&&(Ah(i,a,te,c),se=i.memoizedState),(F=ri||om(i,a,F,c,G,se,P)||!1)?(K||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,se,P),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,se,P)),typeof v.componentDidUpdate=="function"&&(i.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof v.componentDidUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=se),v.props=c,v.state=se,v.context=P,c=F):(typeof v.componentDidUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(i.flags|=1024),c=!1)}return Nh(n,i,a,c,f,d)}function Nh(n,i,a,c,d,f){_m(n,i);var v=(i.flags&128)!==0;if(!c&&!v)return d&&Sp(i,a,!1),Ir(n,i,f);c=i.stateNode,JE.current=i;var I=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&v?(i.child=Zs(i,n.child,null,f),i.child=Zs(i,null,I,f)):Bt(n,i,I,f),i.memoizedState=c.state,d&&Sp(i,a,!0),i.child}function Em(n){var i=n.stateNode;i.pendingContext?Tp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Tp(n,i.context,!1),fh(n,i.containerInfo)}function wm(n,i,a,c,d){return Js(),oh(d),i.flags|=256,Bt(n,i,a,c),i.child}var Dh={dehydrated:null,treeContext:null,retryLane:0};function xh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Tm(n,i,a){var c=i.pendingProps,d=Je.current,f=!1,v=(i.flags&128)!==0,I;if((I=v)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(f=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),$e(Je,d&1),n===null)return sh(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(v=c.children,n=c.fallback,f?(c=i.mode,f=i.child,v={mode:"hidden",children:v},(c&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=v):f=_u(v,c,0,null),n=ss(n,c,a,null),f.return=i,n.return=i,f.sibling=n,i.child=f,i.child.memoizedState=xh(a),i.memoizedState=Dh,n):Vh(i,v));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return ZE(n,i,v,c,I,d,a);if(f){f=c.fallback,v=i.mode,d=n.child,I=d.sibling;var P={mode:"hidden",children:c.children};return(v&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=P,i.deletions=null):(c=ci(d,P),c.subtreeFlags=d.subtreeFlags&14680064),I!==null?f=ci(I,f):(f=ss(f,v,a,null),f.flags|=2),f.return=i,c.return=i,c.sibling=f,i.child=c,c=f,f=i.child,v=n.child.memoizedState,v=v===null?xh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},f.memoizedState=v,f.childLanes=n.childLanes&~a,i.memoizedState=Dh,c}return f=n.child,n=f.sibling,c=ci(f,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Vh(n,i){return i=_u({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function su(n,i,a,c){return c!==null&&oh(c),Zs(i,n.child,null,a),n=Vh(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function ZE(n,i,a,c,d,f,v){if(a)return i.flags&256?(i.flags&=-257,c=Ch(Error(t(422))),su(n,i,v,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(f=c.fallback,d=i.mode,c=_u({mode:"visible",children:c.children},d,0,null),f=ss(f,d,v,null),f.flags|=2,c.return=i,f.return=i,c.sibling=f,i.child=c,(i.mode&1)!==0&&Zs(i,n.child,null,v),i.child.memoizedState=xh(v),i.memoizedState=Dh,f);if((i.mode&1)===0)return su(n,i,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var I=c.dgst;return c=I,f=Error(t(419)),c=Ch(f,c,void 0),su(n,i,v,c)}if(I=(v&n.childLanes)!==0,Ht||I){if(c=wt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==f.retryLane&&(f.retryLane=d,wr(n,d),Dn(c,n,d,-1))}return Qh(),c=Ch(Error(t(421))),su(n,i,v,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=dw.bind(null,n),d._reactRetry=i,null):(n=f.treeContext,an=Zr(d.nextSibling),on=i,Xe=!0,Cn=null,n!==null&&(fn[pn++]=vr,fn[pn++]=Er,fn[pn++]=Yi,vr=n.id,Er=n.overflow,Yi=i),i=Vh(i,c.children),i.flags|=4096,i)}function Im(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),ch(n.return,i,a)}function Oh(n,i,a,c,d){var f=n.memoizedState;f===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(f.isBackwards=i,f.rendering=null,f.renderingStartTime=0,f.last=c,f.tail=a,f.tailMode=d)}function Sm(n,i,a){var c=i.pendingProps,d=c.revealOrder,f=c.tail;if(Bt(n,i,c.children,a),c=Je.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Im(n,a,i);else if(n.tag===19)Im(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if($e(Je,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Jl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Oh(i,!1,d,a,f);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Jl(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Oh(i,!0,a,null,f);break;case"together":Oh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ou(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Ir(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),ts|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=ci(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=ci(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function ew(n,i,a){switch(i.tag){case 3:Em(i),Js();break;case 5:Fp(i);break;case 1:Wt(i.type)&&Bl(i);break;case 4:fh(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;$e(Kl,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?($e(Je,Je.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Tm(n,i,a):($e(Je,Je.current&1),n=Ir(n,i,a),n!==null?n.sibling:null);$e(Je,Je.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Sm(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),$e(Je,Je.current),c)break;return null;case 22:case 23:return i.lanes=0,ym(n,i,a)}return Ir(n,i,a)}var Am,Lh,Rm,Cm;Am=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Lh=function(){},Rm=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,Zi(Yn.current);var f=null;switch(a){case"input":d=ws(n,d),c=ws(n,c),f=[];break;case"select":d=re({},d,{value:void 0}),c=re({},c,{value:void 0}),f=[];break;case"textarea":d=Oo(n,d),c=Oo(n,c),f=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Ul)}In(a,c);var v;a=null;for(F in d)if(!c.hasOwnProperty(F)&&d.hasOwnProperty(F)&&d[F]!=null)if(F==="style"){var I=d[F];for(v in I)I.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(o.hasOwnProperty(F)?f||(f=[]):(f=f||[]).push(F,null));for(F in c){var P=c[F];if(I=d!=null?d[F]:void 0,c.hasOwnProperty(F)&&P!==I&&(P!=null||I!=null))if(F==="style")if(I){for(v in I)!I.hasOwnProperty(v)||P&&P.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in P)P.hasOwnProperty(v)&&I[v]!==P[v]&&(a||(a={}),a[v]=P[v])}else a||(f||(f=[]),f.push(F,a)),a=P;else F==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,I=I?I.__html:void 0,P!=null&&I!==P&&(f=f||[]).push(F,P)):F==="children"?typeof P!="string"&&typeof P!="number"||(f=f||[]).push(F,""+P):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(o.hasOwnProperty(F)?(P!=null&&F==="onScroll"&&Ke("scroll",n),f||I===P||(f=[])):(f=f||[]).push(F,P))}a&&(f=f||[]).push("style",a);var F=f;(i.updateQueue=F)&&(i.flags|=4)}},Cm=function(n,i,a,c){a!==c&&(i.flags|=4)};function Ea(n,i){if(!Xe)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Lt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function tw(n,i,a){var c=i.pendingProps;switch(rh(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(i),null;case 1:return Wt(i.type)&&zl(),Lt(i),null;case 3:return c=i.stateNode,no(),Qe(qt),Qe(Vt),gh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Hl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Cn!==null&&(Hh(Cn),Cn=null))),Lh(n,i),Lt(i),null;case 5:ph(i);var d=Zi(ma.current);if(a=i.type,n!==null&&i.stateNode!=null)Rm(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Lt(i),null}if(n=Zi(Yn.current),Hl(i)){c=i.stateNode,a=i.type;var f=i.memoizedProps;switch(c[Qn]=i,c[ca]=f,n=(i.mode&1)!==0,a){case"dialog":Ke("cancel",c),Ke("close",c);break;case"iframe":case"object":case"embed":Ke("load",c);break;case"video":case"audio":for(d=0;d<aa.length;d++)Ke(aa[d],c);break;case"source":Ke("error",c);break;case"img":case"image":case"link":Ke("error",c),Ke("load",c);break;case"details":Ke("toggle",c);break;case"input":cl(c,f),Ke("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!f.multiple},Ke("invalid",c);break;case"textarea":Lo(c,f),Ke("invalid",c)}In(a,f),d=null;for(var v in f)if(f.hasOwnProperty(v)){var I=f[v];v==="children"?typeof I=="string"?c.textContent!==I&&(f.suppressHydrationWarning!==!0&&Fl(c.textContent,I,n),d=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(f.suppressHydrationWarning!==!0&&Fl(c.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(v)&&I!=null&&v==="onScroll"&&Ke("scroll",c)}switch(a){case"input":Es(c),Vo(c,f,!0);break;case"textarea":Es(c),br(c);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(c.onclick=Ul)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Mo(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[Qn]=i,n[ca]=c,Am(n,i,!1,!1),i.stateNode=n;e:{switch(v=As(a,c),a){case"dialog":Ke("cancel",n),Ke("close",n),d=c;break;case"iframe":case"object":case"embed":Ke("load",n),d=c;break;case"video":case"audio":for(d=0;d<aa.length;d++)Ke(aa[d],n);d=c;break;case"source":Ke("error",n),d=c;break;case"img":case"image":case"link":Ke("error",n),Ke("load",n),d=c;break;case"details":Ke("toggle",n),d=c;break;case"input":cl(n,c),d=ws(n,c),Ke("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=re({},c,{value:void 0}),Ke("invalid",n);break;case"textarea":Lo(n,c),d=Oo(n,c),Ke("invalid",n);break;default:d=c}In(a,d),I=d;for(f in I)if(I.hasOwnProperty(f)){var P=I[f];f==="style"?Ss(n,P):f==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&dl(n,P)):f==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&Oi(n,P):typeof P=="number"&&Oi(n,""+P):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(o.hasOwnProperty(f)?P!=null&&f==="onScroll"&&Ke("scroll",n):P!=null&&Te(n,f,P,v))}switch(a){case"input":Es(n),Vo(n,c,!1);break;case"textarea":Es(n),br(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Ve(c.value));break;case"select":n.multiple=!!c.multiple,f=c.value,f!=null?Tn(n,!!c.multiple,f,!1):c.defaultValue!=null&&Tn(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Ul)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Lt(i),null;case 6:if(n&&i.stateNode!=null)Cm(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Zi(ma.current),Zi(Yn.current),Hl(i)){if(c=i.stateNode,a=i.memoizedProps,c[Qn]=i,(f=c.nodeValue!==a)&&(n=on,n!==null))switch(n.tag){case 3:Fl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Fl(c.nodeValue,a,(n.mode&1)!==0)}f&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Qn]=i,i.stateNode=c}return Lt(i),null;case 13:if(Qe(Je),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Xe&&an!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Np(),Js(),i.flags|=98560,f=!1;else if(f=Hl(i),c!==null&&c.dehydrated!==null){if(n===null){if(!f)throw Error(t(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(t(317));f[Qn]=i}else Js(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Lt(i),f=!1}else Cn!==null&&(Hh(Cn),Cn=null),f=!0;if(!f)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Je.current&1)!==0?gt===0&&(gt=3):Qh())),i.updateQueue!==null&&(i.flags|=4),Lt(i),null);case 4:return no(),Lh(n,i),n===null&&la(i.stateNode.containerInfo),Lt(i),null;case 10:return uh(i.type._context),Lt(i),null;case 17:return Wt(i.type)&&zl(),Lt(i),null;case 19:if(Qe(Je),f=i.memoizedState,f===null)return Lt(i),null;if(c=(i.flags&128)!==0,v=f.rendering,v===null)if(c)Ea(f,!1);else{if(gt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(v=Jl(n),v!==null){for(i.flags|=128,Ea(f,!1),c=v.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)f=a,n=c,f.flags&=14680066,v=f.alternate,v===null?(f.childLanes=0,f.lanes=n,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=v.childLanes,f.lanes=v.lanes,f.child=v.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=v.memoizedProps,f.memoizedState=v.memoizedState,f.updateQueue=v.updateQueue,f.type=v.type,n=v.dependencies,f.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return $e(Je,Je.current&1|2),i.child}n=n.sibling}f.tail!==null&&Ge()>oo&&(i.flags|=128,c=!0,Ea(f,!1),i.lanes=4194304)}else{if(!c)if(n=Jl(v),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ea(f,!0),f.tail===null&&f.tailMode==="hidden"&&!v.alternate&&!Xe)return Lt(i),null}else 2*Ge()-f.renderingStartTime>oo&&a!==1073741824&&(i.flags|=128,c=!0,Ea(f,!1),i.lanes=4194304);f.isBackwards?(v.sibling=i.child,i.child=v):(a=f.last,a!==null?a.sibling=v:i.child=v,f.last=v)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=Ge(),i.sibling=null,a=Je.current,$e(Je,c?a&1|2:a&1),i):(Lt(i),null);case 22:case 23:return Kh(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(ln&1073741824)!==0&&(Lt(i),i.subtreeFlags&6&&(i.flags|=8192)):Lt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function nw(n,i){switch(rh(i),i.tag){case 1:return Wt(i.type)&&zl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return no(),Qe(qt),Qe(Vt),gh(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return ph(i),null;case 13:if(Qe(Je),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Js()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Qe(Je),null;case 4:return no(),null;case 10:return uh(i.type._context),null;case 22:case 23:return Kh(),null;case 24:return null;default:return null}}var au=!1,Mt=!1,rw=typeof WeakSet=="function"?WeakSet:Set,ie=null;function io(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){rt(n,i,c)}else a.current=null}function Mh(n,i,a){try{a()}catch(c){rt(n,i,c)}}var Pm=!1;function iw(n,i){if(Kc=pr,n=op(),jc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,f=c.focusNode;c=c.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,I=-1,P=-1,F=0,K=0,Q=n,G=null;t:for(;;){for(var te;Q!==a||d!==0&&Q.nodeType!==3||(I=v+d),Q!==f||c!==0&&Q.nodeType!==3||(P=v+c),Q.nodeType===3&&(v+=Q.nodeValue.length),(te=Q.firstChild)!==null;)G=Q,Q=te;for(;;){if(Q===n)break t;if(G===a&&++F===d&&(I=v),G===f&&++K===c&&(P=v),(te=Q.nextSibling)!==null)break;Q=G,G=Q.parentNode}Q=te}a=I===-1||P===-1?null:{start:I,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Qc={focusedElem:n,selectionRange:a},pr=!1,ie=i;ie!==null;)if(i=ie,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,ie=n;else for(;ie!==null;){i=ie;try{var se=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(se!==null){var oe=se.memoizedProps,at=se.memoizedState,L=i.stateNode,D=L.getSnapshotBeforeUpdate(i.elementType===i.type?oe:Pn(i.type,oe),at);L.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var b=i.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Y){rt(i,i.return,Y)}if(n=i.sibling,n!==null){n.return=i.return,ie=n;break}ie=i.return}return se=Pm,Pm=!1,se}function wa(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var f=d.destroy;d.destroy=void 0,f!==void 0&&Mh(i,a,f)}d=d.next}while(d!==c)}}function lu(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function bh(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function km(n){var i=n.alternate;i!==null&&(n.alternate=null,km(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Qn],delete i[ca],delete i[Zc],delete i[jE],delete i[zE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Nm(n){return n.tag===5||n.tag===3||n.tag===4}function Dm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Nm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Fh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Ul));else if(c!==4&&(n=n.child,n!==null))for(Fh(n,i,a),n=n.sibling;n!==null;)Fh(n,i,a),n=n.sibling}function Uh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Uh(n,i,a),n=n.sibling;n!==null;)Uh(n,i,a),n=n.sibling}var Rt=null,kn=!1;function si(n,i,a){for(a=a.child;a!==null;)xm(n,i,a),a=a.sibling}function xm(n,i,a){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(Ui,a)}catch{}switch(a.tag){case 5:Mt||io(a,i);case 6:var c=Rt,d=kn;Rt=null,si(n,i,a),Rt=c,kn=d,Rt!==null&&(kn?(n=Rt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Rt.removeChild(a.stateNode));break;case 18:Rt!==null&&(kn?(n=Rt,a=a.stateNode,n.nodeType===8?Jc(n.parentNode,a):n.nodeType===1&&Jc(n,a),Qr(n)):Jc(Rt,a.stateNode));break;case 4:c=Rt,d=kn,Rt=a.stateNode.containerInfo,kn=!0,si(n,i,a),Rt=c,kn=d;break;case 0:case 11:case 14:case 15:if(!Mt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var f=d,v=f.destroy;f=f.tag,v!==void 0&&((f&2)!==0||(f&4)!==0)&&Mh(a,i,v),d=d.next}while(d!==c)}si(n,i,a);break;case 1:if(!Mt&&(io(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){rt(a,i,I)}si(n,i,a);break;case 21:si(n,i,a);break;case 22:a.mode&1?(Mt=(c=Mt)||a.memoizedState!==null,si(n,i,a),Mt=c):si(n,i,a);break;default:si(n,i,a)}}function Vm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new rw),i.forEach(function(c){var d=fw.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Nn(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var f=n,v=i,I=v;e:for(;I!==null;){switch(I.tag){case 5:Rt=I.stateNode,kn=!1;break e;case 3:Rt=I.stateNode.containerInfo,kn=!0;break e;case 4:Rt=I.stateNode.containerInfo,kn=!0;break e}I=I.return}if(Rt===null)throw Error(t(160));xm(f,v,d),Rt=null,kn=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(F){rt(d,i,F)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Om(i,n),i=i.sibling}function Om(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Nn(i,n),Jn(n),c&4){try{wa(3,n,n.return),lu(3,n)}catch(oe){rt(n,n.return,oe)}try{wa(5,n,n.return)}catch(oe){rt(n,n.return,oe)}}break;case 1:Nn(i,n),Jn(n),c&512&&a!==null&&io(a,a.return);break;case 5:if(Nn(i,n),Jn(n),c&512&&a!==null&&io(a,a.return),n.flags&32){var d=n.stateNode;try{Oi(d,"")}catch(oe){rt(n,n.return,oe)}}if(c&4&&(d=n.stateNode,d!=null)){var f=n.memoizedProps,v=a!==null?a.memoizedProps:f,I=n.type,P=n.updateQueue;if(n.updateQueue=null,P!==null)try{I==="input"&&f.type==="radio"&&f.name!=null&&Ts(d,f),As(I,v);var F=As(I,f);for(v=0;v<P.length;v+=2){var K=P[v],Q=P[v+1];K==="style"?Ss(d,Q):K==="dangerouslySetInnerHTML"?dl(d,Q):K==="children"?Oi(d,Q):Te(d,K,Q,F)}switch(I){case"input":Vi(d,f);break;case"textarea":hl(d,f);break;case"select":var G=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!f.multiple;var te=f.value;te!=null?Tn(d,!!f.multiple,te,!1):G!==!!f.multiple&&(f.defaultValue!=null?Tn(d,!!f.multiple,f.defaultValue,!0):Tn(d,!!f.multiple,f.multiple?[]:"",!1))}d[ca]=f}catch(oe){rt(n,n.return,oe)}}break;case 6:if(Nn(i,n),Jn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,f=n.memoizedProps;try{d.nodeValue=f}catch(oe){rt(n,n.return,oe)}}break;case 3:if(Nn(i,n),Jn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Qr(i.containerInfo)}catch(oe){rt(n,n.return,oe)}break;case 4:Nn(i,n),Jn(n);break;case 13:Nn(i,n),Jn(n),d=n.child,d.flags&8192&&(f=d.memoizedState!==null,d.stateNode.isHidden=f,!f||d.alternate!==null&&d.alternate.memoizedState!==null||(Bh=Ge())),c&4&&Vm(n);break;case 22:if(K=a!==null&&a.memoizedState!==null,n.mode&1?(Mt=(F=Mt)||K,Nn(i,n),Mt=F):Nn(i,n),Jn(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!K&&(n.mode&1)!==0)for(ie=n,K=n.child;K!==null;){for(Q=ie=K;ie!==null;){switch(G=ie,te=G.child,G.tag){case 0:case 11:case 14:case 15:wa(4,G,G.return);break;case 1:io(G,G.return);var se=G.stateNode;if(typeof se.componentWillUnmount=="function"){c=G,a=G.return;try{i=c,se.props=i.memoizedProps,se.state=i.memoizedState,se.componentWillUnmount()}catch(oe){rt(c,a,oe)}}break;case 5:io(G,G.return);break;case 22:if(G.memoizedState!==null){bm(Q);continue}}te!==null?(te.return=G,ie=te):bm(Q)}K=K.sibling}e:for(K=null,Q=n;;){if(Q.tag===5){if(K===null){K=Q;try{d=Q.stateNode,F?(f=d.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(I=Q.stateNode,P=Q.memoizedProps.style,v=P!=null&&P.hasOwnProperty("display")?P.display:null,I.style.display=jr("display",v))}catch(oe){rt(n,n.return,oe)}}}else if(Q.tag===6){if(K===null)try{Q.stateNode.nodeValue=F?"":Q.memoizedProps}catch(oe){rt(n,n.return,oe)}}else if((Q.tag!==22&&Q.tag!==23||Q.memoizedState===null||Q===n)&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===n)break e;for(;Q.sibling===null;){if(Q.return===null||Q.return===n)break e;K===Q&&(K=null),Q=Q.return}K===Q&&(K=null),Q.sibling.return=Q.return,Q=Q.sibling}}break;case 19:Nn(i,n),Jn(n),c&4&&Vm(n);break;case 21:break;default:Nn(i,n),Jn(n)}}function Jn(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Nm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Oi(d,""),c.flags&=-33);var f=Dm(n);Uh(n,f,d);break;case 3:case 4:var v=c.stateNode.containerInfo,I=Dm(n);Fh(n,I,v);break;default:throw Error(t(161))}}catch(P){rt(n,n.return,P)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function sw(n,i,a){ie=n,Lm(n)}function Lm(n,i,a){for(var c=(n.mode&1)!==0;ie!==null;){var d=ie,f=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||au;if(!v){var I=d.alternate,P=I!==null&&I.memoizedState!==null||Mt;I=au;var F=Mt;if(au=v,(Mt=P)&&!F)for(ie=d;ie!==null;)v=ie,P=v.child,v.tag===22&&v.memoizedState!==null?Fm(d):P!==null?(P.return=v,ie=P):Fm(d);for(;f!==null;)ie=f,Lm(f),f=f.sibling;ie=d,au=I,Mt=F}Mm(n)}else(d.subtreeFlags&8772)!==0&&f!==null?(f.return=d,ie=f):Mm(n)}}function Mm(n){for(;ie!==null;){var i=ie;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Mt||lu(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Mt)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Pn(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var f=i.updateQueue;f!==null&&bp(i,f,c);break;case 3:var v=i.updateQueue;if(v!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}bp(i,v,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var P=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var F=i.alternate;if(F!==null){var K=F.memoizedState;if(K!==null){var Q=K.dehydrated;Q!==null&&Qr(Q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mt||i.flags&512&&bh(i)}catch(G){rt(i,i.return,G)}}if(i===n){ie=null;break}if(a=i.sibling,a!==null){a.return=i.return,ie=a;break}ie=i.return}}function bm(n){for(;ie!==null;){var i=ie;if(i===n){ie=null;break}var a=i.sibling;if(a!==null){a.return=i.return,ie=a;break}ie=i.return}}function Fm(n){for(;ie!==null;){var i=ie;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{lu(4,i)}catch(P){rt(i,a,P)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(P){rt(i,d,P)}}var f=i.return;try{bh(i)}catch(P){rt(i,f,P)}break;case 5:var v=i.return;try{bh(i)}catch(P){rt(i,v,P)}}}catch(P){rt(i,i.return,P)}if(i===n){ie=null;break}var I=i.sibling;if(I!==null){I.return=i.return,ie=I;break}ie=i.return}}var ow=Math.ceil,uu=ke.ReactCurrentDispatcher,jh=ke.ReactCurrentOwner,yn=ke.ReactCurrentBatchConfig,Oe=0,wt=null,ht=null,Ct=0,ln=0,so=ei(0),gt=0,Ta=null,ts=0,cu=0,zh=0,Ia=null,Gt=null,Bh=0,oo=1/0,Sr=null,hu=!1,$h=null,oi=null,du=!1,ai=null,fu=0,Sa=0,qh=null,pu=-1,mu=0;function $t(){return(Oe&6)!==0?Ge():pu!==-1?pu:pu=Ge()}function li(n){return(n.mode&1)===0?1:(Oe&2)!==0&&Ct!==0?Ct&-Ct:$E.transition!==null?(mu===0&&(mu=Wo()),mu):(n=De,n!==0||(n=window.event,n=n===void 0?16:Ls(n.type)),n)}function Dn(n,i,a,c){if(50<Sa)throw Sa=0,qh=null,Error(t(185));$i(n,a,c),((Oe&2)===0||n!==wt)&&(n===wt&&((Oe&2)===0&&(cu|=a),gt===4&&ui(n,Ct)),Kt(n,c),a===1&&Oe===0&&(i.mode&1)===0&&(oo=Ge()+500,$l&&ni()))}function Kt(n,i){var a=n.callbackNode;Bi(n,i);var c=hr(n,n===wt?Ct:0);if(c===0)a!==null&&Ps(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Ps(a),i===1)n.tag===0?BE(jm.bind(null,n)):Ap(jm.bind(null,n)),FE(function(){(Oe&6)===0&&ni()}),a=null;else{switch(Un(c)){case 1:a=ks;break;case 4:a=Bo;break;case 16:a=Fi;break;case 536870912:a=Ns;break;default:a=Fi}a=Km(a,Um.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Um(n,i){if(pu=-1,mu=0,(Oe&6)!==0)throw Error(t(327));var a=n.callbackNode;if(ao()&&n.callbackNode!==a)return null;var c=hr(n,n===wt?Ct:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=gu(n,c);else{i=c;var d=Oe;Oe|=2;var f=Bm();(wt!==n||Ct!==i)&&(Sr=null,oo=Ge()+500,rs(n,i));do try{uw();break}catch(I){zm(n,I)}while(!0);lh(),uu.current=f,Oe=d,ht!==null?i=0:(wt=null,Ct=0,i=gt)}if(i!==0){if(i===2&&(d=qo(n),d!==0&&(c=d,i=Wh(n,d))),i===1)throw a=Ta,rs(n,0),ui(n,c),Kt(n,Ge()),a;if(i===6)ui(n,c);else{if(d=n.current.alternate,(c&30)===0&&!aw(d)&&(i=gu(n,c),i===2&&(f=qo(n),f!==0&&(c=f,i=Wh(n,f))),i===1))throw a=Ta,rs(n,0),ui(n,c),Kt(n,Ge()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:is(n,Gt,Sr);break;case 3:if(ui(n,c),(c&130023424)===c&&(i=Bh+500-Ge(),10<i)){if(hr(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){$t(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Xc(is.bind(null,n,Gt,Sr),i);break}is(n,Gt,Sr);break;case 4:if(ui(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var v=31-en(c);f=1<<v,v=i[v],v>d&&(d=v),c&=~f}if(c=d,c=Ge()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*ow(c/1960))-c,10<c){n.timeoutHandle=Xc(is.bind(null,n,Gt,Sr),c);break}is(n,Gt,Sr);break;case 5:is(n,Gt,Sr);break;default:throw Error(t(329))}}}return Kt(n,Ge()),n.callbackNode===a?Um.bind(null,n):null}function Wh(n,i){var a=Ia;return n.current.memoizedState.isDehydrated&&(rs(n,i).flags|=256),n=gu(n,i),n!==2&&(i=Gt,Gt=a,i!==null&&Hh(i)),n}function Hh(n){Gt===null?Gt=n:Gt.push.apply(Gt,n)}function aw(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],f=d.getSnapshot;d=d.value;try{if(!Rn(f(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ui(n,i){for(i&=~zh,i&=~cu,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-en(i),c=1<<a;n[a]=-1,i&=~c}}function jm(n){if((Oe&6)!==0)throw Error(t(327));ao();var i=hr(n,0);if((i&1)===0)return Kt(n,Ge()),null;var a=gu(n,i);if(n.tag!==0&&a===2){var c=qo(n);c!==0&&(i=c,a=Wh(n,c))}if(a===1)throw a=Ta,rs(n,0),ui(n,i),Kt(n,Ge()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,is(n,Gt,Sr),Kt(n,Ge()),null}function Gh(n,i){var a=Oe;Oe|=1;try{return n(i)}finally{Oe=a,Oe===0&&(oo=Ge()+500,$l&&ni())}}function ns(n){ai!==null&&ai.tag===0&&(Oe&6)===0&&ao();var i=Oe;Oe|=1;var a=yn.transition,c=De;try{if(yn.transition=null,De=1,n)return n()}finally{De=c,yn.transition=a,Oe=i,(Oe&6)===0&&ni()}}function Kh(){ln=so.current,Qe(so)}function rs(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,bE(a)),ht!==null)for(a=ht.return;a!==null;){var c=a;switch(rh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&zl();break;case 3:no(),Qe(qt),Qe(Vt),gh();break;case 5:ph(c);break;case 4:no();break;case 13:Qe(Je);break;case 19:Qe(Je);break;case 10:uh(c.type._context);break;case 22:case 23:Kh()}a=a.return}if(wt=n,ht=n=ci(n.current,null),Ct=ln=i,gt=0,Ta=null,zh=cu=ts=0,Gt=Ia=null,Ji!==null){for(i=0;i<Ji.length;i++)if(a=Ji[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,f=a.pending;if(f!==null){var v=f.next;f.next=d,c.next=v}a.pending=c}Ji=null}return n}function zm(n,i){do{var a=ht;try{if(lh(),Zl.current=ru,eu){for(var c=Ze.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}eu=!1}if(es=0,Et=mt=Ze=null,ga=!1,ya=0,jh.current=null,a===null||a.return===null){gt=1,Ta=i,ht=null;break}e:{var f=n,v=a.return,I=a,P=i;if(i=Ct,I.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var F=P,K=I,Q=K.tag;if((K.mode&1)===0&&(Q===0||Q===11||Q===15)){var G=K.alternate;G?(K.updateQueue=G.updateQueue,K.memoizedState=G.memoizedState,K.lanes=G.lanes):(K.updateQueue=null,K.memoizedState=null)}var te=dm(v);if(te!==null){te.flags&=-257,fm(te,v,I,f,i),te.mode&1&&hm(f,F,i),i=te,P=F;var se=i.updateQueue;if(se===null){var oe=new Set;oe.add(P),i.updateQueue=oe}else se.add(P);break e}else{if((i&1)===0){hm(f,F,i),Qh();break e}P=Error(t(426))}}else if(Xe&&I.mode&1){var at=dm(v);if(at!==null){(at.flags&65536)===0&&(at.flags|=256),fm(at,v,I,f,i),oh(ro(P,I));break e}}f=P=ro(P,I),gt!==4&&(gt=2),Ia===null?Ia=[f]:Ia.push(f),f=v;do{switch(f.tag){case 3:f.flags|=65536,i&=-i,f.lanes|=i;var L=um(f,P,i);Mp(f,L);break e;case 1:I=P;var D=f.type,b=f.stateNode;if((f.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(oi===null||!oi.has(b)))){f.flags|=65536,i&=-i,f.lanes|=i;var Y=cm(f,I,i);Mp(f,Y);break e}}f=f.return}while(f!==null)}qm(a)}catch(le){i=le,ht===a&&a!==null&&(ht=a=a.return);continue}break}while(!0)}function Bm(){var n=uu.current;return uu.current=ru,n===null?ru:n}function Qh(){(gt===0||gt===3||gt===2)&&(gt=4),wt===null||(ts&268435455)===0&&(cu&268435455)===0||ui(wt,Ct)}function gu(n,i){var a=Oe;Oe|=2;var c=Bm();(wt!==n||Ct!==i)&&(Sr=null,rs(n,i));do try{lw();break}catch(d){zm(n,d)}while(!0);if(lh(),Oe=a,uu.current=c,ht!==null)throw Error(t(261));return wt=null,Ct=0,gt}function lw(){for(;ht!==null;)$m(ht)}function uw(){for(;ht!==null&&!bi();)$m(ht)}function $m(n){var i=Gm(n.alternate,n,ln);n.memoizedProps=n.pendingProps,i===null?qm(n):ht=i,jh.current=null}function qm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=tw(a,i,ln),a!==null){ht=a;return}}else{if(a=nw(a,i),a!==null){a.flags&=32767,ht=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{gt=6,ht=null;return}}if(i=i.sibling,i!==null){ht=i;return}ht=i=n}while(i!==null);gt===0&&(gt=5)}function is(n,i,a){var c=De,d=yn.transition;try{yn.transition=null,De=1,cw(n,i,a,c)}finally{yn.transition=d,De=c}return null}function cw(n,i,a,c){do ao();while(ai!==null);if((Oe&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var f=a.lanes|a.childLanes;if(Lc(n,f),n===wt&&(ht=wt=null,Ct=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||du||(du=!0,Km(Fi,function(){return ao(),null})),f=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||f){f=yn.transition,yn.transition=null;var v=De;De=1;var I=Oe;Oe|=4,jh.current=null,iw(n,a),Om(a,n),NE(Qc),pr=!!Kc,Qc=Kc=null,n.current=a,sw(a),cr(),Oe=I,De=v,yn.transition=f}else n.current=a;if(du&&(du=!1,ai=n,fu=d),f=n.pendingLanes,f===0&&(oi=null),Il(a.stateNode),Kt(n,Ge()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(hu)throw hu=!1,n=$h,$h=null,n;return(fu&1)!==0&&n.tag!==0&&ao(),f=n.pendingLanes,(f&1)!==0?n===qh?Sa++:(Sa=0,qh=n):Sa=0,ni(),null}function ao(){if(ai!==null){var n=Un(fu),i=yn.transition,a=De;try{if(yn.transition=null,De=16>n?16:n,ai===null)var c=!1;else{if(n=ai,ai=null,fu=0,(Oe&6)!==0)throw Error(t(331));var d=Oe;for(Oe|=4,ie=n.current;ie!==null;){var f=ie,v=f.child;if((ie.flags&16)!==0){var I=f.deletions;if(I!==null){for(var P=0;P<I.length;P++){var F=I[P];for(ie=F;ie!==null;){var K=ie;switch(K.tag){case 0:case 11:case 15:wa(8,K,f)}var Q=K.child;if(Q!==null)Q.return=K,ie=Q;else for(;ie!==null;){K=ie;var G=K.sibling,te=K.return;if(km(K),K===F){ie=null;break}if(G!==null){G.return=te,ie=G;break}ie=te}}}var se=f.alternate;if(se!==null){var oe=se.child;if(oe!==null){se.child=null;do{var at=oe.sibling;oe.sibling=null,oe=at}while(oe!==null)}}ie=f}}if((f.subtreeFlags&2064)!==0&&v!==null)v.return=f,ie=v;else e:for(;ie!==null;){if(f=ie,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:wa(9,f,f.return)}var L=f.sibling;if(L!==null){L.return=f.return,ie=L;break e}ie=f.return}}var D=n.current;for(ie=D;ie!==null;){v=ie;var b=v.child;if((v.subtreeFlags&2064)!==0&&b!==null)b.return=v,ie=b;else e:for(v=D;ie!==null;){if(I=ie,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:lu(9,I)}}catch(le){rt(I,I.return,le)}if(I===v){ie=null;break e}var Y=I.sibling;if(Y!==null){Y.return=I.return,ie=Y;break e}ie=I.return}}if(Oe=d,ni(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(Ui,n)}catch{}c=!0}return c}finally{De=a,yn.transition=i}}return!1}function Wm(n,i,a){i=ro(a,i),i=um(n,i,1),n=ii(n,i,1),i=$t(),n!==null&&($i(n,1,i),Kt(n,i))}function rt(n,i,a){if(n.tag===3)Wm(n,n,a);else for(;i!==null;){if(i.tag===3){Wm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(oi===null||!oi.has(c))){n=ro(a,n),n=cm(i,n,1),i=ii(i,n,1),n=$t(),i!==null&&($i(i,1,n),Kt(i,n));break}}i=i.return}}function hw(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=$t(),n.pingedLanes|=n.suspendedLanes&a,wt===n&&(Ct&a)===a&&(gt===4||gt===3&&(Ct&130023424)===Ct&&500>Ge()-Bh?rs(n,0):zh|=a),Kt(n,i)}function Hm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Hr,Hr<<=1,(Hr&130023424)===0&&(Hr=4194304)));var a=$t();n=wr(n,i),n!==null&&($i(n,i,a),Kt(n,a))}function dw(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Hm(n,a)}function fw(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Hm(n,a)}var Gm;Gm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||qt.current)Ht=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Ht=!1,ew(n,i,a);Ht=(n.flags&131072)!==0}else Ht=!1,Xe&&(i.flags&1048576)!==0&&Rp(i,Wl,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;ou(n,i),n=i.pendingProps;var d=Qs(i,Vt.current);to(i,a),d=vh(null,i,c,n,d,a);var f=Eh();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Wt(c)?(f=!0,Bl(i)):f=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,dh(i),d.updater=iu,i.stateNode=d,d._reactInternals=i,Rh(i,c,n,a),i=Nh(null,i,c,!0,f,a)):(i.tag=0,Xe&&f&&nh(i),Bt(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(ou(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=mw(c),n=Pn(c,n),d){case 0:i=kh(null,i,c,n,a);break e;case 1:i=vm(null,i,c,n,a);break e;case 11:i=pm(null,i,c,n,a);break e;case 14:i=mm(null,i,c,Pn(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Pn(c,d),kh(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Pn(c,d),vm(n,i,c,d,a);case 3:e:{if(Em(i),n===null)throw Error(t(387));c=i.pendingProps,f=i.memoizedState,d=f.element,Lp(n,i),Xl(i,c,null,a);var v=i.memoizedState;if(c=v.element,f.isDehydrated)if(f={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},i.updateQueue.baseState=f,i.memoizedState=f,i.flags&256){d=ro(Error(t(423)),i),i=wm(n,i,c,a,d);break e}else if(c!==d){d=ro(Error(t(424)),i),i=wm(n,i,c,a,d);break e}else for(an=Zr(i.stateNode.containerInfo.firstChild),on=i,Xe=!0,Cn=null,a=Vp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Js(),c===d){i=Ir(n,i,a);break e}Bt(n,i,c,a)}i=i.child}return i;case 5:return Fp(i),n===null&&sh(i),c=i.type,d=i.pendingProps,f=n!==null?n.memoizedProps:null,v=d.children,Yc(c,d)?v=null:f!==null&&Yc(c,f)&&(i.flags|=32),_m(n,i),Bt(n,i,v,a),i.child;case 6:return n===null&&sh(i),null;case 13:return Tm(n,i,a);case 4:return fh(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Zs(i,null,c,a):Bt(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Pn(c,d),pm(n,i,c,d,a);case 7:return Bt(n,i,i.pendingProps,a),i.child;case 8:return Bt(n,i,i.pendingProps.children,a),i.child;case 12:return Bt(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,f=i.memoizedProps,v=d.value,$e(Kl,c._currentValue),c._currentValue=v,f!==null)if(Rn(f.value,v)){if(f.children===d.children&&!qt.current){i=Ir(n,i,a);break e}}else for(f=i.child,f!==null&&(f.return=i);f!==null;){var I=f.dependencies;if(I!==null){v=f.child;for(var P=I.firstContext;P!==null;){if(P.context===c){if(f.tag===1){P=Tr(-1,a&-a),P.tag=2;var F=f.updateQueue;if(F!==null){F=F.shared;var K=F.pending;K===null?P.next=P:(P.next=K.next,K.next=P),F.pending=P}}f.lanes|=a,P=f.alternate,P!==null&&(P.lanes|=a),ch(f.return,a,i),I.lanes|=a;break}P=P.next}}else if(f.tag===10)v=f.type===i.type?null:f.child;else if(f.tag===18){if(v=f.return,v===null)throw Error(t(341));v.lanes|=a,I=v.alternate,I!==null&&(I.lanes|=a),ch(v,a,i),v=f.sibling}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===i){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}Bt(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,to(i,a),d=mn(d),c=c(d),i.flags|=1,Bt(n,i,c,a),i.child;case 14:return c=i.type,d=Pn(c,i.pendingProps),d=Pn(c.type,d),mm(n,i,c,d,a);case 15:return gm(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Pn(c,d),ou(n,i),i.tag=1,Wt(c)?(n=!0,Bl(i)):n=!1,to(i,a),am(i,c,d),Rh(i,c,d,a),Nh(null,i,c,!0,n,a);case 19:return Sm(n,i,a);case 22:return ym(n,i,a)}throw Error(t(156,i.tag))};function Km(n,i){return zo(n,i)}function pw(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(n,i,a,c){return new pw(n,i,a,c)}function Yh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function mw(n){if(typeof n=="function")return Yh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===vt)return 14}return 2}function ci(n,i){var a=n.alternate;return a===null?(a=_n(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function yu(n,i,a,c,d,f){var v=2;if(c=n,typeof n=="function")Yh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case k:return ss(a.children,d,f,i);case A:v=8,d|=8;break;case C:return n=_n(12,a,i,d|2),n.elementType=C,n.lanes=f,n;case R:return n=_n(13,a,i,d),n.elementType=R,n.lanes=f,n;case Be:return n=_n(19,a,i,d),n.elementType=Be,n.lanes=f,n;case Ye:return _u(a,d,f,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case x:v=10;break e;case N:v=9;break e;case O:v=11;break e;case vt:v=14;break e;case Dt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=_n(v,a,i,d),i.elementType=n,i.type=c,i.lanes=f,i}function ss(n,i,a,c){return n=_n(7,n,c,i),n.lanes=a,n}function _u(n,i,a,c){return n=_n(22,n,c,i),n.elementType=Ye,n.lanes=a,n.stateNode={isHidden:!1},n}function Xh(n,i,a){return n=_n(6,n,null,i),n.lanes=a,n}function Jh(n,i,a){return i=_n(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function gw(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ho(0),this.expirationTimes=Ho(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ho(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Zh(n,i,a,c,d,f,v,I,P){return n=new gw(n,i,a,I,P),i===1?(i=1,f===!0&&(i|=8)):i=0,f=_n(3,null,null,i),n.current=f,f.stateNode=n,f.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},dh(f),n}function yw(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ne,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Qm(n){if(!n)return ti;n=n._reactInternals;e:{if(Sn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Wt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Wt(a))return Ip(n,a,i)}return i}function Ym(n,i,a,c,d,f,v,I,P){return n=Zh(a,c,!0,n,d,f,v,I,P),n.context=Qm(null),a=n.current,c=$t(),d=li(a),f=Tr(c,d),f.callback=i??null,ii(a,f,d),n.current.lanes=d,$i(n,d,c),Kt(n,c),n}function vu(n,i,a,c){var d=i.current,f=$t(),v=li(d);return a=Qm(a),i.context===null?i.context=a:i.pendingContext=a,i=Tr(f,v),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=ii(d,i,v),n!==null&&(Dn(n,d,v,f),Yl(n,d,v)),v}function Eu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Xm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function ed(n,i){Xm(n,i),(n=n.alternate)&&Xm(n,i)}function _w(){return null}var Jm=typeof reportError=="function"?reportError:function(n){console.error(n)};function td(n){this._internalRoot=n}wu.prototype.render=td.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));vu(n,i,null,null)},wu.prototype.unmount=td.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;ns(function(){vu(null,n,null,null)}),i[yr]=null}};function wu(n){this._internalRoot=n}wu.prototype.unstable_scheduleHydration=function(n){if(n){var i=Yo();n={blockedOn:null,target:n,priority:i};for(var a=0;a<tn.length&&i!==0&&i<tn[a].priority;a++);tn.splice(a,0,n),a===0&&Vs(n)}};function nd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Tu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Zm(){}function vw(n,i,a,c,d){if(d){if(typeof c=="function"){var f=c;c=function(){var F=Eu(v);f.call(F)}}var v=Ym(i,c,n,0,null,!1,!1,"",Zm);return n._reactRootContainer=v,n[yr]=v.current,la(n.nodeType===8?n.parentNode:n),ns(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var I=c;c=function(){var F=Eu(P);I.call(F)}}var P=Zh(n,0,!1,null,null,!1,!1,"",Zm);return n._reactRootContainer=P,n[yr]=P.current,la(n.nodeType===8?n.parentNode:n),ns(function(){vu(i,P,a,c)}),P}function Iu(n,i,a,c,d){var f=a._reactRootContainer;if(f){var v=f;if(typeof d=="function"){var I=d;d=function(){var P=Eu(v);I.call(P)}}vu(i,v,n,d)}else v=vw(a,i,n,d,c);return Eu(v)}Ko=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Me(i.pendingLanes);a!==0&&(Go(i,a|1),Kt(i,Ge()),(Oe&6)===0&&(oo=Ge()+500,ni()))}break;case 13:ns(function(){var c=wr(n,1);if(c!==null){var d=$t();Dn(c,n,1,d)}}),ed(n,1)}},Ds=function(n){if(n.tag===13){var i=wr(n,134217728);if(i!==null){var a=$t();Dn(i,n,134217728,a)}ed(n,134217728)}},Qo=function(n){if(n.tag===13){var i=li(n),a=wr(n,i);if(a!==null){var c=$t();Dn(a,n,i,c)}ed(n,i)}},Yo=function(){return De},Xo=function(n,i){var a=De;try{return De=n,i()}finally{De=a}},ar=function(n,i,a){switch(i){case"input":if(Vi(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=jl(c);if(!d)throw Error(t(90));xo(c),Vi(c,d)}}}break;case"textarea":hl(n,a);break;case"select":i=a.value,i!=null&&Tn(n,!!a.multiple,i,!1)}},pl=Gh,ml=ns;var Ew={usingClientEntryPoint:!1,Events:[ha,Gs,jl,Br,$r,Gh]},Aa={findFiberByHostInstance:Ki,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ww={bundleType:Aa.bundleType,version:Aa.version,rendererPackageName:Aa.rendererPackageName,rendererConfig:Aa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ke.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Tl(n),n===null?null:n.stateNode},findFiberByHostInstance:Aa.findFiberByHostInstance||_w,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Su=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Su.isDisabled&&Su.supportsFiber)try{Ui=Su.inject(ww),Zt=Su}catch{}}return Qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ew,Qt.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nd(i))throw Error(t(200));return yw(n,i,null,a)},Qt.createRoot=function(n,i){if(!nd(n))throw Error(t(299));var a=!1,c="",d=Jm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Zh(n,1,!1,null,null,a,!1,c,d),n[yr]=i.current,la(n.nodeType===8?n.parentNode:n),new td(i)},Qt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Tl(i),n=n===null?null:n.stateNode,n},Qt.flushSync=function(n){return ns(n)},Qt.hydrate=function(n,i,a){if(!Tu(i))throw Error(t(200));return Iu(null,n,i,!0,a)},Qt.hydrateRoot=function(n,i,a){if(!nd(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,f="",v=Jm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),i=Ym(i,null,n,1,a??null,d,!1,f,v),n[yr]=i.current,la(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new wu(i)},Qt.render=function(n,i,a){if(!Tu(i))throw Error(t(200));return Iu(null,n,i,!1,a)},Qt.unmountComponentAtNode=function(n){if(!Tu(n))throw Error(t(40));return n._reactRootContainer?(ns(function(){Iu(null,null,n,!1,function(){n._reactRootContainer=null,n[yr]=null})}),!0):!1},Qt.unstable_batchedUpdates=Gh,Qt.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Tu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Iu(n,i,a,!1,c)},Qt.version="18.3.1-next-f1338f8080-20240426",Qt}var lg;function Vw(){if(lg)return sd.exports;lg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),sd.exports=xw(),sd.exports}var ug;function Ow(){if(ug)return Au;ug=1;var r=Vw();return Au.createRoot=r.createRoot,Au.hydrateRoot=r.hydrateRoot,Au}var Lw=Ow();const Mw=r=>r instanceof Error?r.message+`
`+r.stack:JSON.stringify(r,null,2);class bw extends kw.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}render(){return this.state.hasError?Z.jsxs("div",{className:"p-4 border border-red-500 rounded",children:[Z.jsx("h2",{className:"text-red-500",children:"Something went wrong."}),Z.jsx("pre",{className:"mt-2 text-sm",children:Mw(this.state.error)})]}):this.props.children}}const Fw="modulepreload",Uw=function(r){return"/"+r},cg={},qy=function(e,t,s){let o=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),m=(h==null?void 0:h.nonce)||(h==null?void 0:h.getAttribute("nonce"));o=Promise.allSettled(t.map(g=>{if(g=Uw(g),g in cg)return;cg[g]=!0;const _=g.endsWith(".css"),w=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${g}"]${w}`))return;const T=document.createElement("link");if(T.rel=_?"stylesheet":Fw,_||(T.as="script"),T.crossOrigin="",T.href=g,m&&T.setAttribute("nonce",m),document.head.appendChild(T),_)return new Promise((S,U)=>{T.addEventListener("load",S),T.addEventListener("error",()=>U(new Error(`Unable to preload CSS for ${g}`)))})}))}function u(h){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=h,window.dispatchEvent(m),!m.defaultPrevented)throw h}return o.then(h=>{for(const m of h||[])m.status==="rejected"&&u(m.reason);return e().catch(u)})};/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jw=()=>{};var hg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},zw=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[t++],h=r[t++],m=r[t++],g=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},Hy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],h=o+1<r.length,m=h?r[o+1]:0,g=o+2<r.length,_=g?r[o+2]:0,w=u>>2,T=(u&3)<<4|m>>4;let S=(m&15)<<2|_>>6,U=_&63;g||(U=64,h||(S=64)),s.push(t[w],t[T],t[S],t[U])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Wy(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):zw(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=t[r.charAt(o++)],m=o<r.length?t[r.charAt(o)]:0;++o;const _=o<r.length?t[r.charAt(o)]:64;++o;const T=o<r.length?t[r.charAt(o)]:64;if(++o,u==null||m==null||_==null||T==null)throw new Bw;const S=u<<2|m>>4;if(s.push(S),_!==64){const U=m<<4&240|_>>2;if(s.push(U),T!==64){const $=_<<6&192|T;s.push($)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Bw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $w=function(r){const e=Wy(r);return Hy.encodeByteArray(e,!0)},$u=function(r){return $w(r).replace(/\./g,"")},Gy=function(r){try{return Hy.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww=()=>qw().__FIREBASE_DEFAULTS__,Hw=()=>{if(typeof process>"u"||typeof hg>"u")return;const r=hg.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Gw=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Gy(r[1]);return e&&JSON.parse(e)},cc=()=>{try{return jw()||Ww()||Hw()||Gw()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Ky=r=>{var e,t;return(t=(e=cc())==null?void 0:e.emulatorHosts)==null?void 0:t[r]},Kw=r=>{const e=Ky(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Qy=()=>{var r;return(r=cc())==null?void 0:r.config},Yy=r=>{var e;return(e=cc())==null?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Xy(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yw(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...r};return[$u(JSON.stringify(t)),$u(JSON.stringify(h)),""].join(".")}const Ma={};function Xw(){const r={prod:[],emulator:[]};for(const e of Object.keys(Ma))Ma[e]?r.emulator.push(e):r.prod.push(e);return r}function Jw(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let dg=!1;function Jy(r,e){if(typeof window>"u"||typeof document>"u"||!Ao(window.location.host)||Ma[r]===e||Ma[r]||dg)return;Ma[r]=e;function t(S){return`__firebase__banner__${S}`}const s="__firebase__banner",u=Xw().prod.length>0;function h(){const S=document.getElementById(s);S&&S.remove()}function m(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function g(S,U){S.setAttribute("width","24"),S.setAttribute("id",U),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function _(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{dg=!0,h()},S}function w(S,U){S.setAttribute("id",U),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function T(){const S=Jw(s),U=t("text"),$=document.getElementById(U)||document.createElement("span"),W=t("learnmore"),z=document.getElementById(W)||document.createElement("a"),ae=t("preprendIcon"),fe=document.getElementById(ae)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const Te=S.element;m(Te),w(z,W);const ke=_();g(fe,ae),Te.append(fe,$,z,ke),document.body.appendChild(Te)}u?($.innerText="Preview backend disconnected.",fe.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(fe.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,$.innerText="Preview backend running in this workspace."),$.setAttribute("id",U)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(jt())}function eT(){var e;const r=(e=cc())==null?void 0:e.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function tT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function nT(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function rT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function iT(){const r=jt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function sT(){return!eT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function oT(){try{return typeof indexedDB=="object"}catch{return!1}}function aT(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)==null?void 0:u.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT="FirebaseError";class Lr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=lT,Object.setPrototypeOf(this,Lr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xa.prototype.create)}}class Xa{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?uT(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new Lr(o,m,s)}}function uT(r,e){return r.replace(cT,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const cT=/\{\$([^}]+)}/g;function hT(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function hs(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=r[o],h=e[o];if(fg(u)&&fg(h)){if(!hs(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function fg(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function ka(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function Na(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function dT(r,e){const t=new fT(r,e);return t.subscribe.bind(t)}class fT{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");pT(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=ld),o.error===void 0&&(o.error=ld),o.complete===void 0&&(o.complete=ld);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pT(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function ld(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(r){return r&&r._delegate?r._delegate:r}class ds{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Qw;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yT(e))try{this.getOrInitializeService({instanceIdentifier:os})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=os){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=os){return this.instances.has(e)}getOptions(e=os){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:gT(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=os){return this.component?this.component.multipleInstances?e:os:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gT(r){return r===os?void 0:r}function yT(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new mT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Re||(Re={}));const vT={debug:Re.DEBUG,verbose:Re.VERBOSE,info:Re.INFO,warn:Re.WARN,error:Re.ERROR,silent:Re.SILENT},ET=Re.INFO,wT={[Re.DEBUG]:"log",[Re.VERBOSE]:"log",[Re.INFO]:"info",[Re.WARN]:"warn",[Re.ERROR]:"error"},TT=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=wT[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qd{constructor(e){this.name=e,this._logLevel=ET,this._logHandler=TT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Re.DEBUG,...e),this._logHandler(this,Re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Re.VERBOSE,...e),this._logHandler(this,Re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Re.INFO,...e),this._logHandler(this,Re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Re.WARN,...e),this._logHandler(this,Re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Re.ERROR,...e),this._logHandler(this,Re.ERROR,...e)}}const IT=(r,e)=>e.some(t=>r instanceof t);let pg,mg;function ST(){return pg||(pg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function AT(){return mg||(mg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zy=new WeakMap,wd=new WeakMap,e_=new WeakMap,ud=new WeakMap,Yd=new WeakMap;function RT(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",h)},u=()=>{t(yi(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Zy.set(t,r)}).catch(()=>{}),Yd.set(e,r),e}function CT(r){if(wd.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",h),r.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",h),r.addEventListener("abort",h)});wd.set(r,e)}let Td={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return wd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||e_.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return yi(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function PT(r){Td=r(Td)}function kT(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(cd(this),e,...t);return e_.set(s,e.sort?e.sort():[e]),yi(s)}:AT().includes(r)?function(...e){return r.apply(cd(this),e),yi(Zy.get(this))}:function(...e){return yi(r.apply(cd(this),e))}}function NT(r){return typeof r=="function"?kT(r):(r instanceof IDBTransaction&&CT(r),IT(r,ST())?new Proxy(r,Td):r)}function yi(r){if(r instanceof IDBRequest)return RT(r);if(ud.has(r))return ud.get(r);const e=NT(r);return e!==r&&(ud.set(r,e),Yd.set(e,r)),e}const cd=r=>Yd.get(r);function DT(r,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(r,e),m=yi(h);return s&&h.addEventListener("upgradeneeded",g=>{s(yi(h.result),g.oldVersion,g.newVersion,yi(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),m.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}const xT=["get","getKey","getAll","getAllKeys","count"],VT=["put","add","delete","clear"],hd=new Map;function gg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(hd.get(e))return hd.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=VT.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||xT.includes(t)))return;const u=async function(h,...m){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return s&&(_=_.index(m.shift())),(await Promise.all([_[t](...m),o&&g.done]))[0]};return hd.set(e,u),u}PT(r=>({...r,get:(e,t,s)=>gg(e,t)||r.get(e,t,s),has:(e,t)=>!!gg(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(LT(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function LT(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Id="@firebase/app",yg="0.14.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=new Qd("@firebase/app"),MT="@firebase/app-compat",bT="@firebase/analytics-compat",FT="@firebase/analytics",UT="@firebase/app-check-compat",jT="@firebase/app-check",zT="@firebase/auth",BT="@firebase/auth-compat",$T="@firebase/database",qT="@firebase/data-connect",WT="@firebase/database-compat",HT="@firebase/functions",GT="@firebase/functions-compat",KT="@firebase/installations",QT="@firebase/installations-compat",YT="@firebase/messaging",XT="@firebase/messaging-compat",JT="@firebase/performance",ZT="@firebase/performance-compat",eI="@firebase/remote-config",tI="@firebase/remote-config-compat",nI="@firebase/storage",rI="@firebase/storage-compat",iI="@firebase/firestore",sI="@firebase/ai",oI="@firebase/firestore-compat",aI="firebase",lI="12.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd="[DEFAULT]",uI={[Id]:"fire-core",[MT]:"fire-core-compat",[FT]:"fire-analytics",[bT]:"fire-analytics-compat",[jT]:"fire-app-check",[UT]:"fire-app-check-compat",[zT]:"fire-auth",[BT]:"fire-auth-compat",[$T]:"fire-rtdb",[qT]:"fire-data-connect",[WT]:"fire-rtdb-compat",[HT]:"fire-fn",[GT]:"fire-fn-compat",[KT]:"fire-iid",[QT]:"fire-iid-compat",[YT]:"fire-fcm",[XT]:"fire-fcm-compat",[JT]:"fire-perf",[ZT]:"fire-perf-compat",[eI]:"fire-rc",[tI]:"fire-rc-compat",[nI]:"fire-gcs",[rI]:"fire-gcs-compat",[iI]:"fire-fst",[oI]:"fire-fst-compat",[sI]:"fire-vertex","fire-js":"fire-js",[aI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu=new Map,cI=new Map,Ad=new Map;function _g(r,e){try{r.container.addComponent(e)}catch(t){Nr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function _o(r){const e=r.name;if(Ad.has(e))return Nr.debug(`There were multiple attempts to register component ${e}.`),!1;Ad.set(e,r);for(const t of qu.values())_g(t,r);for(const t of cI.values())_g(t,r);return!0}function Xd(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function un(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_i=new Xa("app","Firebase",hI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ds("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _i.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro=lI;function t_(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s={name:Sd,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw _i.create("bad-app-name",{appName:String(o)});if(t||(t=Qy()),!t)throw _i.create("no-options");const u=qu.get(o);if(u){if(hs(t,u.options)&&hs(s,u.config))return u;throw _i.create("duplicate-app",{appName:o})}const h=new _T(o);for(const g of Ad.values())h.addComponent(g);const m=new dI(t,s,h);return qu.set(o,m),m}function n_(r=Sd){const e=qu.get(r);if(!e&&r===Sd&&Qy())return t_();if(!e)throw _i.create("no-app",{appName:r});return e}function vi(r,e,t){let s=uI[r]??r;t&&(s+=`-${t}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nr.warn(h.join(" "));return}_o(new ds(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI="firebase-heartbeat-database",pI=1,Ba="firebase-heartbeat-store";let dd=null;function r_(){return dd||(dd=DT(fI,pI,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ba)}catch(t){console.warn(t)}}}}).catch(r=>{throw _i.create("idb-open",{originalErrorMessage:r.message})})),dd}async function mI(r){try{const t=(await r_()).transaction(Ba),s=await t.objectStore(Ba).get(i_(r));return await t.done,s}catch(e){if(e instanceof Lr)Nr.warn(e.message);else{const t=_i.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Nr.warn(t.message)}}}async function vg(r,e){try{const s=(await r_()).transaction(Ba,"readwrite");await s.objectStore(Ba).put(e,i_(r)),await s.done}catch(t){if(t instanceof Lr)Nr.warn(t.message);else{const s=_i.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Nr.warn(s.message)}}}function i_(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI=1024,yI=30;class _I{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new EI(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Eg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>yI){const h=wI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Nr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Eg(),{heartbeatsToSend:s,unsentEntries:o}=vI(this._heartbeatsCache.heartbeats),u=$u(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Nr.warn(t),""}}}function Eg(){return new Date().toISOString().substring(0,10)}function vI(r,e=gI){const t=[];let s=r.slice();for(const o of r){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),wg(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),wg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class EI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return oT()?aT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await mI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return vg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return vg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function wg(r){return $u(JSON.stringify({version:2,heartbeats:r})).length}function wI(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TI(r){_o(new ds("platform-logger",e=>new OT(e),"PRIVATE")),_o(new ds("heartbeat",e=>new _I(e),"PRIVATE")),vi(Id,yg,r),vi(Id,yg,"esm2020"),vi("fire-js","")}TI("");function s_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const II=s_,o_=new Xa("auth","Firebase",s_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu=new Qd("@firebase/auth");function SI(r,...e){Wu.logLevel<=Re.WARN&&Wu.warn(`Auth (${Ro}): ${r}`,...e)}function Vu(r,...e){Wu.logLevel<=Re.ERROR&&Wu.error(`Auth (${Ro}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(r,...e){throw Zd(r,...e)}function Vn(r,...e){return Zd(r,...e)}function Jd(r,e,t){const s={...II(),[e]:t};return new Xa("auth","Firebase",s).create(e,{appName:r.name})}function Pr(r){return Jd(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function AI(r,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&wn(r,"argument-error"),Jd(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Zd(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return o_.create(r,...e)}function pe(r,e,...t){if(!r)throw Zd(e,...t)}function Rr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Vu(e),new Error(e)}function Dr(r,e){r||Rr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function RI(){return Tg()==="http:"||Tg()==="https:"}function Tg(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(RI()||nT()||"connection"in navigator)?navigator.onLine:!0}function PI(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,t){this.shortDelay=e,this.longDelay=t,Dr(t>e,"Short delay should be less than long delay!"),this.isMobile=Zw()||rT()}get(){return CI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(r,e){Dr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],DI=new Za(3e4,6e4);function Pi(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function ki(r,e,t,s,o={}){return l_(r,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=Ja({key:r.config.apiKey,...h}).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const _={method:e,headers:g,...u};return tT()||(_.referrerPolicy="no-referrer"),r.emulatorConfig&&Ao(r.emulatorConfig.host)&&(_.credentials="include"),a_.fetch()(await u_(r,r.config.apiHost,t,m),_)})}async function l_(r,e,t){r._canInitEmulator=!1;const s={...kI,...e};try{const o=new VI(r),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw Ru(r,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[g,_]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ru(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Ru(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw Ru(r,"user-disabled",h);const w=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw Jd(r,w,_);wn(r,w)}}catch(o){if(o instanceof Lr)throw o;wn(r,"network-request-failed",{message:String(o)})}}async function el(r,e,t,s,o={}){const u=await ki(r,e,t,s,o);return"mfaPendingCredential"in u&&wn(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function u_(r,e,t,s){const o=`${e}${t}?${s}`,u=r,h=u.config.emulator?ef(r.config,o):`${r.config.apiScheme}://${o}`;return NI.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}function xI(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class VI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Vn(this.auth,"network-request-failed")),DI.get())})}}function Ru(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Vn(r,e,s);return o.customData._tokenResponse=t,o}function Ig(r){return r!==void 0&&r.enterprise!==void 0}class OI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return xI(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function LI(r,e){return ki(r,"GET","/v2/recaptchaConfig",Pi(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MI(r,e){return ki(r,"POST","/v1/accounts:delete",e)}async function Hu(r,e){return ki(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bI(r,e=!1){const t=_t(r),s=await t.getIdToken(e),o=tf(s);pe(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:ba(fd(o.auth_time)),issuedAtTime:ba(fd(o.iat)),expirationTime:ba(fd(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function fd(r){return Number(r)*1e3}function tf(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Vu("JWT malformed, contained fewer than 3 sections"),null;try{const o=Gy(t);return o?JSON.parse(o):(Vu("Failed to decode base64 JWT payload"),null)}catch(o){return Vu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Sg(r){const e=tf(r);return pe(e,"internal-error"),pe(typeof e.exp<"u","internal-error"),pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $a(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Lr&&FI(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function FI({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ba(this.lastLoginAt),this.creationTime=ba(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gu(r){var T;const e=r.auth,t=await r.getIdToken(),s=await $a(r,Hu(e,{idToken:t}));pe(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];r._notifyReloadListener(o);const u=(T=o.providerUserInfo)!=null&&T.length?c_(o.providerUserInfo):[],h=zI(r.providerData,u),m=r.isAnonymous,g=!(r.email&&o.passwordHash)&&!(h!=null&&h.length),_=m?g:!1,w={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new Cd(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(r,w)}async function jI(r){const e=_t(r);await Gu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zI(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function c_(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BI(r,e){const t=await l_(r,{},async()=>{const s=Ja({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,h=await u_(r,o,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:m,body:s};return r.emulatorConfig&&Ao(r.emulatorConfig.host)&&(g.credentials="include"),a_.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function $I(r,e){return ki(r,"POST","/v2/accounts:revokeToken",Pi(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pe(e.idToken,"internal-error"),pe(typeof e.idToken<"u","internal-error"),pe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){pe(e.length!==0,"internal-error");const t=Sg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(pe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await BI(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new po;return s&&(pe(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(pe(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(pe(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new po,this.toJSON())}_performRefresh(){return Rr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(r,e){pe(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class xn{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new UI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Cd(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await $a(this,this.stsTokenManager.getToken(this.auth,e));return pe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return bI(this,e)}reload(){return jI(this)}_assign(e){this!==e&&(pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new xn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Gu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(un(this.auth.app))return Promise.reject(Pr(this.auth));const e=await this.getIdToken();return await $a(this,MI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,u=t.phoneNumber??void 0,h=t.photoURL??void 0,m=t.tenantId??void 0,g=t._redirectEventId??void 0,_=t.createdAt??void 0,w=t.lastLoginAt??void 0,{uid:T,emailVerified:S,isAnonymous:U,providerData:$,stsTokenManager:W}=t;pe(T&&W,e,"internal-error");const z=po.fromJSON(this.name,W);pe(typeof T=="string",e,"internal-error"),di(s,e.name),di(o,e.name),pe(typeof S=="boolean",e,"internal-error"),pe(typeof U=="boolean",e,"internal-error"),di(u,e.name),di(h,e.name),di(m,e.name),di(g,e.name),di(_,e.name),di(w,e.name);const ae=new xn({uid:T,auth:e,email:o,emailVerified:S,displayName:s,isAnonymous:U,photoURL:h,phoneNumber:u,tenantId:m,stsTokenManager:z,createdAt:_,lastLoginAt:w});return $&&Array.isArray($)&&(ae.providerData=$.map(fe=>({...fe}))),g&&(ae._redirectEventId=g),ae}static async _fromIdTokenResponse(e,t,s=!1){const o=new po;o.updateFromServerResponse(t);const u=new xn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Gu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];pe(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?c_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new po;m.updateFromIdToken(s);const g=new xn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Cd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,_),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag=new Map;function Cr(r){Dr(r instanceof Function,"Expected a class definition");let e=Ag.get(r);return e?(Dr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Ag.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}h_.type="NONE";const Rg=h_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(r,e,t){return`firebase:${r}:${e}:${t}`}class mo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Ou(this.userKey,o.apiKey,u),this.fullPersistenceKey=Ou("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Hu(this.auth,{idToken:e}).catch(()=>{});return t?xn._fromGetAccountInfoResponse(this.auth,t,e):null}return xn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new mo(Cr(Rg),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=o[0]||Cr(Rg);const h=Ou(s,e.config.apiKey,e.name);let m=null;for(const _ of t)try{const w=await _._get(h);if(w){let T;if(typeof w=="string"){const S=await Hu(e,{idToken:w}).catch(()=>{});if(!S)break;T=await xn._fromGetAccountInfoResponse(e,S,w)}else T=xn._fromJSON(e,w);_!==u&&(m=T),u=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new mo(u,e,s):(u=g[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async _=>{if(_!==u)try{await _._remove(h)}catch{}})),new mo(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(m_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(d_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(y_(e))return"Blackberry";if(__(e))return"Webos";if(f_(e))return"Safari";if((e.includes("chrome/")||p_(e))&&!e.includes("edge/"))return"Chrome";if(g_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function d_(r=jt()){return/firefox\//i.test(r)}function f_(r=jt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function p_(r=jt()){return/crios\//i.test(r)}function m_(r=jt()){return/iemobile/i.test(r)}function g_(r=jt()){return/android/i.test(r)}function y_(r=jt()){return/blackberry/i.test(r)}function __(r=jt()){return/webos/i.test(r)}function nf(r=jt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function qI(r=jt()){var e;return nf(r)&&!!((e=window.navigator)!=null&&e.standalone)}function WI(){return iT()&&document.documentMode===10}function v_(r=jt()){return nf(r)||g_(r)||__(r)||y_(r)||/windows phone/i.test(r)||m_(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E_(r,e=[]){let t;switch(r){case"Browser":t=Cg(jt());break;case"Worker":t=`${Cg(jt())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ro}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const g=e(u);h(g)}catch(g){m(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GI(r,e={}){return ki(r,"GET","/v2/passwordPolicy",Pi(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI=6;class QI{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??KI,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pg(this),this.idTokenSubscription=new Pg(this),this.beforeStateQueue=new HI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=o_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Cr(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await mo.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Hu(this,{idToken:e}),s=await xn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(un(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(u=this.redirectUser)==null?void 0:u._redirectEventId,m=s==null?void 0:s._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===m)&&(g!=null&&g.user)&&(s=g.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(h){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Gu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=PI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(un(this.app))return Promise.reject(Pr(this));const t=e?_t(e):null;return t&&pe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return un(this.app)?Promise.reject(Pr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return un(this.app)?Promise.reject(Pr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Cr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await GI(this),t=new QI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Xa("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await $I(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Cr(e)||this._popupRedirectResolver;pe(t,this,"argument-error"),this.redirectPersistenceManager=await mo.create(this,[Cr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(pe(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=E_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(un(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&SI(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ni(r){return _t(r)}class Pg{constructor(e){this.auth=e,this.observer=null,this.addObserver=dT(t=>this.observer=t)}get next(){return pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function XI(r){hc=r}function w_(r){return hc.loadJS(r)}function JI(){return hc.recaptchaEnterpriseScript}function ZI(){return hc.gapiScript}function e0(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class t0{constructor(){this.enterprise=new n0}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class n0{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const r0="recaptcha-enterprise",T_="NO_RECAPTCHA";class i0{constructor(e){this.type=r0,this.auth=Ni(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,m)=>{LI(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const _=new OI(g);return u.tenantId==null?u._agentRecaptchaConfig=_:u._tenantRecaptchaConfigs[u.tenantId]=_,h(_.siteKey)}}).catch(g=>{m(g)})})}function o(u,h,m){const g=window.grecaptcha;Ig(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:e}).then(_=>{h(_)}).catch(()=>{h(T_)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new t0().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(m=>{if(!t&&Ig(window.grecaptcha))o(m,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=JI();g.length!==0&&(g+=m),w_(g).then(()=>{o(m,u,h)}).catch(_=>{h(_)})}}).catch(m=>{h(m)})})}}async function kg(r,e,t,s=!1,o=!1){const u=new i0(r);let h;if(o)h=T_;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const m={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const g=m.phoneEnrollmentInfo.phoneNumber,_=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const g=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:h}):Object.assign(m,{captchaResponse:h}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function Pd(r,e,t,s,o){var u;if((u=r._getRecaptchaConfig())!=null&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await kg(r,e,t,t==="getOobCode");return s(r,h)}else return s(r,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await kg(r,e,t,t==="getOobCode");return s(r,m)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s0(r,e){const t=Xd(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(hs(u,e??{}))return o;wn(o,"already-initialized")}return t.initialize({options:e})}function o0(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Cr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function a0(r,e,t){const s=Ni(r);pe(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=I_(e),{host:h,port:m}=l0(e),g=m===null?"":`:${m}`,_={url:`${u}//${h}${g}/`},w=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){pe(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),pe(hs(_,s.config.emulator)&&hs(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,Ao(h)?(Xy(`${u}//${h}${g}`),Jy("Auth",!0)):u0()}function I_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function l0(r){const e=I_(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:Ng(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:Ng(h)}}}function Ng(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function u0(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Rr("not implemented")}_getIdTokenResponse(e){return Rr("not implemented")}_linkToIdToken(e,t){return Rr("not implemented")}_getReauthenticationResolver(e){return Rr("not implemented")}}async function c0(r,e){return ki(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h0(r,e){return el(r,"POST","/v1/accounts:signInWithPassword",Pi(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d0(r,e){return el(r,"POST","/v1/accounts:signInWithEmailLink",Pi(r,e))}async function f0(r,e){return el(r,"POST","/v1/accounts:signInWithEmailLink",Pi(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa extends rf{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new qa(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new qa(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Pd(e,t,"signInWithPassword",h0);case"emailLink":return d0(e,{email:this._email,oobCode:this._password});default:wn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Pd(e,s,"signUpPassword",c0);case"emailLink":return f0(e,{idToken:t,email:this._email,oobCode:this._password});default:wn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function go(r,e){return el(r,"POST","/v1/accounts:signInWithIdp",Pi(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0="http://localhost";class fs extends rf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new fs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):wn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=t;if(!s||!o)return null;const h=new fs(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return go(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,go(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,go(e,t)}buildRequest(){const e={requestUri:p0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ja(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function g0(r){const e=ka(Na(r)).link,t=e?ka(Na(e)).deep_link_id:null,s=ka(Na(r)).deep_link_id;return(s?ka(Na(s)).link:null)||s||t||e||r}class sf{constructor(e){const t=ka(Na(e)),s=t.apiKey??null,o=t.oobCode??null,u=m0(t.mode??null);pe(s&&o&&u,"argument-error"),this.apiKey=s,this.operation=u,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=g0(e);try{return new sf(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(){this.providerId=Co.PROVIDER_ID}static credential(e,t){return qa._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=sf.parseLink(t);return pe(s,"argument-error"),qa._fromEmailAndCode(e,s.code,s.tenantId)}}Co.PROVIDER_ID="password";Co.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Co.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl extends of{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends tl{constructor(){super("facebook.com")}static credential(e){return fs._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fi.credentialFromTaggedObject(e)}static credentialFromError(e){return fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fi.credential(e.oauthAccessToken)}catch{return null}}}fi.FACEBOOK_SIGN_IN_METHOD="facebook.com";fi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar extends tl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return fs._fromParams({providerId:Ar.PROVIDER_ID,signInMethod:Ar.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ar.credentialFromTaggedObject(e)}static credentialFromError(e){return Ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Ar.credential(t,s)}catch{return null}}}Ar.GOOGLE_SIGN_IN_METHOD="google.com";Ar.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends tl{constructor(){super("github.com")}static credential(e){return fs._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pi.credentialFromTaggedObject(e)}static credentialFromError(e){return pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pi.credential(e.oauthAccessToken)}catch{return null}}}pi.GITHUB_SIGN_IN_METHOD="github.com";pi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi extends tl{constructor(){super("twitter.com")}static credential(e,t){return fs._fromParams({providerId:mi.PROVIDER_ID,signInMethod:mi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return mi.credentialFromTaggedObject(e)}static credentialFromError(e){return mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return mi.credential(t,s)}catch{return null}}}mi.TWITTER_SIGN_IN_METHOD="twitter.com";mi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y0(r,e){return el(r,"POST","/v1/accounts:signUp",Pi(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await xn._fromIdTokenResponse(e,s,o),h=Dg(s);return new ps({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Dg(s);return new ps({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Dg(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku extends Lr{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Ku.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Ku(e,t,s,o)}}function S_(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Ku._fromErrorAndOperation(r,u,e,s):u})}async function _0(r,e,t=!1){const s=await $a(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return ps._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v0(r,e,t=!1){const{auth:s}=r;if(un(s.app))return Promise.reject(Pr(s));const o="reauthenticate";try{const u=await $a(r,S_(s,o,e,r),t);pe(u.idToken,s,"internal-error");const h=tf(u.idToken);pe(h,s,"internal-error");const{sub:m}=h;return pe(r.uid===m,s,"user-mismatch"),ps._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&wn(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A_(r,e,t=!1){if(un(r.app))return Promise.reject(Pr(r));const s="signIn",o=await S_(r,s,e),u=await ps._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(u.user),u}async function E0(r,e){return A_(Ni(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R_(r){const e=Ni(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function w0(r,e,t){if(un(r.app))return Promise.reject(Pr(r));const s=Ni(r),h=await Pd(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",y0).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&R_(r),g}),m=await ps._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(m.user),m}function T0(r,e,t){return un(r.app)?Promise.reject(Pr(r)):E0(_t(r),Co.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&R_(r),s})}function I0(r,e,t,s){return _t(r).onIdTokenChanged(e,t,s)}function S0(r,e,t){return _t(r).beforeAuthStateChanged(e,t)}function A0(r,e,t,s){return _t(r).onAuthStateChanged(e,t,s)}function lo(r){return _t(r).signOut()}const Qu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Qu,"1"),this.storage.removeItem(Qu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0=1e3,C0=10;class P_ extends C_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=v_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);WI()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,C0):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},R0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}P_.type="LOCAL";const P0=P_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_ extends C_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}k_.type="SESSION";const N_=k_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k0(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new dc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async _=>_(t.origin,u)),g=await k0(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}dc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,g)=>{const _=af("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(T){const S=T;if(S.data.eventId===_)switch(S.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(S.data.response);break;default:clearTimeout(w),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(){return window}function D0(r){tr().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D_(){return typeof tr().WorkerGlobalScope<"u"&&typeof tr().importScripts=="function"}async function x0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function V0(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function O0(){return D_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_="firebaseLocalStorageDb",L0=1,Yu="firebaseLocalStorage",V_="fbase_key";class nl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function fc(r,e){return r.transaction([Yu],e?"readwrite":"readonly").objectStore(Yu)}function M0(){const r=indexedDB.deleteDatabase(x_);return new nl(r).toPromise()}function kd(){const r=indexedDB.open(x_,L0);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Yu,{keyPath:V_})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Yu)?e(s):(s.close(),await M0(),e(await kd()))})})}async function xg(r,e,t){const s=fc(r,!0).put({[V_]:e,value:t});return new nl(s).toPromise()}async function b0(r,e){const t=fc(r,!1).get(e),s=await new nl(t).toPromise();return s===void 0?null:s.value}function Vg(r,e){const t=fc(r,!0).delete(e);return new nl(t).toPromise()}const F0=800,U0=3;class O_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await kd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>U0)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return D_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=dc._getInstance(O0()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await x0(),!this.activeServiceWorker)return;this.sender=new N0(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||V0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await kd();return await xg(e,Qu,"1"),await Vg(e,Qu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>xg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>b0(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Vg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=fc(o,!1).getAll();return new nl(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),F0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}O_.type="LOCAL";const j0=O_;new Za(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(r,e){return e?Cr(e):(pe(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf extends rf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return go(e,this._buildIdpRequest())}_linkToIdToken(e,t){return go(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return go(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function z0(r){return A_(r.auth,new lf(r),r.bypassAuthState)}function B0(r){const{auth:e,user:t}=r;return pe(t,e,"internal-error"),v0(t,new lf(r),r.bypassAuthState)}async function $0(r){const{auth:e,user:t}=r;return pe(t,e,"internal-error"),_0(t,new lf(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return z0;case"linkViaPopup":case"linkViaRedirect":return $0;case"reauthViaPopup":case"reauthViaRedirect":return B0;default:wn(this.auth,"internal-error")}}resolve(e){Dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0=new Za(2e3,1e4);async function W0(r,e,t){if(un(r.app))return Promise.reject(Vn(r,"operation-not-supported-in-this-environment"));const s=Ni(r);AI(r,e,of);const o=L_(s,t);return new as(s,"signInViaPopup",e,o).executeNotNull()}class as extends M_{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,as.currentPopupAction&&as.currentPopupAction.cancel(),as.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return pe(e,this.auth,"internal-error"),e}async onExecution(){Dr(this.filter.length===1,"Popup operations only handle one event");const e=af();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Vn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Vn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,as.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Vn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,q0.get())};e()}}as.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0="pendingRedirect",Lu=new Map;class G0 extends M_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Lu.get(this.auth._key());if(!e){try{const s=await K0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Lu.set(this.auth._key(),e)}return this.bypassAuthState||Lu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function K0(r,e){const t=X0(e),s=Y0(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function Q0(r,e){Lu.set(r._key(),e)}function Y0(r){return Cr(r._redirectPersistence)}function X0(r){return Ou(H0,r.config.apiKey,r.name)}async function J0(r,e,t=!1){if(un(r.app))return Promise.reject(Pr(r));const s=Ni(r),o=L_(s,e),h=await new G0(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0=10*60*1e3;class eS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tS(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!b_(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(Vn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Z0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Og(e))}saveEventToCache(e){this.cachedEventUids.add(Og(e)),this.lastProcessedEventTime=Date.now()}}function Og(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function b_({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tS(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return b_(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nS(r,e={}){return ki(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iS=/^https?/;async function sS(r){if(r.config.emulator)return;const{authorizedDomains:e}=await nS(r);for(const t of e)try{if(oS(t))return}catch{}wn(r,"unauthorized-domain")}function oS(r){const e=Rd(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!iS.test(t))return!1;if(rS.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS=new Za(3e4,6e4);function Lg(){const r=tr().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function lS(r){return new Promise((e,t)=>{var o,u,h;function s(){Lg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Lg(),t(Vn(r,"network-request-failed"))},timeout:aS.get()})}if((u=(o=tr().gapi)==null?void 0:o.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((h=tr().gapi)!=null&&h.load)s();else{const m=e0("iframefcb");return tr()[m]=()=>{gapi.load?s():t(Vn(r,"network-request-failed"))},w_(`${ZI()}?onload=${m}`).catch(g=>t(g))}}).catch(e=>{throw Mu=null,e})}let Mu=null;function uS(r){return Mu=Mu||lS(r),Mu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS=new Za(5e3,15e3),hS="__/auth/iframe",dS="emulator/auth/iframe",fS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mS(r){const e=r.config;pe(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?ef(e,dS):`https://${r.config.authDomain}/${hS}`,s={apiKey:e.apiKey,appName:r.name,v:Ro},o=pS.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Ja(s).slice(1)}`}async function gS(r){const e=await uS(r),t=tr().gapi;return pe(t,r,"internal-error"),e.open({where:document.body,url:mS(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fS,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=Vn(r,"network-request-failed"),m=tr().setTimeout(()=>{u(h)},cS.get());function g(){tr().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{u(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_S=500,vS=600,ES="_blank",wS="http://localhost";class Mg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function TS(r,e,t,s=_S,o=vS){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g={...yS,width:s.toString(),height:o.toString(),top:u,left:h},_=jt().toLowerCase();t&&(m=p_(_)?ES:t),d_(_)&&(e=e||wS,g.scrollbars="yes");const w=Object.entries(g).reduce((S,[U,$])=>`${S}${U}=${$},`,"");if(qI(_)&&m!=="_self")return IS(e||"",m),new Mg(null);const T=window.open(e||"",m,w);pe(T,r,"popup-blocked");try{T.focus()}catch{}return new Mg(T)}function IS(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS="__/auth/handler",AS="emulator/auth/handler",RS=encodeURIComponent("fac");async function bg(r,e,t,s,o,u){pe(r.config.authDomain,r,"auth-domain-config-required"),pe(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:Ro,eventId:o};if(e instanceof of){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",hT(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,T]of Object.entries({}))h[w]=T}if(e instanceof tl){const w=e.getScopes().filter(T=>T!=="");w.length>0&&(h.scopes=w.join(","))}r.tenantId&&(h.tid=r.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const g=await r._getAppCheckToken(),_=g?`#${RS}=${encodeURIComponent(g)}`:"";return`${CS(r)}?${Ja(m).slice(1)}${_}`}function CS({config:r}){return r.emulator?ef(r,AS):`https://${r.authDomain}/${SS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd="webStorageSupport";class PS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=N_,this._completeRedirectFn=J0,this._overrideRedirectResult=Q0}async _openPopup(e,t,s,o){var h;Dr((h=this.eventManagers[e._key()])==null?void 0:h.manager,"_initialize() not called before _openPopup()");const u=await bg(e,t,s,Rd(),o);return TS(e,u,af())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await bg(e,t,s,Rd(),o);return D0(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Dr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await gS(e),s=new eS(e);return t.register("authEvent",o=>(pe(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(pd,{type:pd},o=>{var h;const u=(h=o==null?void 0:o[0])==null?void 0:h[pd];u!==void 0&&t(!!u),wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=sS(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return v_()||f_()||nf()}}const kS=PS;var Fg="@firebase/auth",Ug="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DS(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function xS(r){_o(new ds("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;pe(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:E_(r)},_=new YI(s,o,u,g);return o0(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),_o(new ds("auth-internal",e=>{const t=Ni(e.getProvider("auth").getImmediate());return(s=>new NS(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),vi(Fg,Ug,DS(r)),vi(Fg,Ug,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS=5*60,OS=Yy("authIdTokenMaxAge")||VS;let jg=null;const LS=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>OS)return;const o=t==null?void 0:t.token;jg!==o&&(jg=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function MS(r=n_()){const e=Xd(r,"auth");if(e.isInitialized())return e.getImmediate();const t=s0(r,{popupRedirectResolver:kS,persistence:[j0,P0,N_]}),s=Yy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=LS(u.toString());S0(t,h,()=>h(t.currentUser)),I0(t,m=>h(m))}}const o=Ky("auth");return o&&a0(t,`http://${o}`),t}function bS(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}XI({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const u=Vn("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",bS().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});xS("Browser");var FS="firebase",US="12.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vi(FS,US,"app");var zg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ei,F_;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,A){function C(){}C.prototype=A.prototype,k.F=A.prototype,k.prototype=new C,k.prototype.constructor=k,k.D=function(x,N,O){for(var R=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)R[Be-2]=arguments[Be];return A.prototype[N].apply(x,R)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(k,A,C){C||(C=0);const x=Array(16);if(typeof A=="string")for(var N=0;N<16;++N)x[N]=A.charCodeAt(C++)|A.charCodeAt(C++)<<8|A.charCodeAt(C++)<<16|A.charCodeAt(C++)<<24;else for(N=0;N<16;++N)x[N]=A[C++]|A[C++]<<8|A[C++]<<16|A[C++]<<24;A=k.g[0],C=k.g[1],N=k.g[2];let O=k.g[3],R;R=A+(O^C&(N^O))+x[0]+3614090360&4294967295,A=C+(R<<7&4294967295|R>>>25),R=O+(N^A&(C^N))+x[1]+3905402710&4294967295,O=A+(R<<12&4294967295|R>>>20),R=N+(C^O&(A^C))+x[2]+606105819&4294967295,N=O+(R<<17&4294967295|R>>>15),R=C+(A^N&(O^A))+x[3]+3250441966&4294967295,C=N+(R<<22&4294967295|R>>>10),R=A+(O^C&(N^O))+x[4]+4118548399&4294967295,A=C+(R<<7&4294967295|R>>>25),R=O+(N^A&(C^N))+x[5]+1200080426&4294967295,O=A+(R<<12&4294967295|R>>>20),R=N+(C^O&(A^C))+x[6]+2821735955&4294967295,N=O+(R<<17&4294967295|R>>>15),R=C+(A^N&(O^A))+x[7]+4249261313&4294967295,C=N+(R<<22&4294967295|R>>>10),R=A+(O^C&(N^O))+x[8]+1770035416&4294967295,A=C+(R<<7&4294967295|R>>>25),R=O+(N^A&(C^N))+x[9]+2336552879&4294967295,O=A+(R<<12&4294967295|R>>>20),R=N+(C^O&(A^C))+x[10]+4294925233&4294967295,N=O+(R<<17&4294967295|R>>>15),R=C+(A^N&(O^A))+x[11]+2304563134&4294967295,C=N+(R<<22&4294967295|R>>>10),R=A+(O^C&(N^O))+x[12]+1804603682&4294967295,A=C+(R<<7&4294967295|R>>>25),R=O+(N^A&(C^N))+x[13]+4254626195&4294967295,O=A+(R<<12&4294967295|R>>>20),R=N+(C^O&(A^C))+x[14]+2792965006&4294967295,N=O+(R<<17&4294967295|R>>>15),R=C+(A^N&(O^A))+x[15]+1236535329&4294967295,C=N+(R<<22&4294967295|R>>>10),R=A+(N^O&(C^N))+x[1]+4129170786&4294967295,A=C+(R<<5&4294967295|R>>>27),R=O+(C^N&(A^C))+x[6]+3225465664&4294967295,O=A+(R<<9&4294967295|R>>>23),R=N+(A^C&(O^A))+x[11]+643717713&4294967295,N=O+(R<<14&4294967295|R>>>18),R=C+(O^A&(N^O))+x[0]+3921069994&4294967295,C=N+(R<<20&4294967295|R>>>12),R=A+(N^O&(C^N))+x[5]+3593408605&4294967295,A=C+(R<<5&4294967295|R>>>27),R=O+(C^N&(A^C))+x[10]+38016083&4294967295,O=A+(R<<9&4294967295|R>>>23),R=N+(A^C&(O^A))+x[15]+3634488961&4294967295,N=O+(R<<14&4294967295|R>>>18),R=C+(O^A&(N^O))+x[4]+3889429448&4294967295,C=N+(R<<20&4294967295|R>>>12),R=A+(N^O&(C^N))+x[9]+568446438&4294967295,A=C+(R<<5&4294967295|R>>>27),R=O+(C^N&(A^C))+x[14]+3275163606&4294967295,O=A+(R<<9&4294967295|R>>>23),R=N+(A^C&(O^A))+x[3]+4107603335&4294967295,N=O+(R<<14&4294967295|R>>>18),R=C+(O^A&(N^O))+x[8]+1163531501&4294967295,C=N+(R<<20&4294967295|R>>>12),R=A+(N^O&(C^N))+x[13]+2850285829&4294967295,A=C+(R<<5&4294967295|R>>>27),R=O+(C^N&(A^C))+x[2]+4243563512&4294967295,O=A+(R<<9&4294967295|R>>>23),R=N+(A^C&(O^A))+x[7]+1735328473&4294967295,N=O+(R<<14&4294967295|R>>>18),R=C+(O^A&(N^O))+x[12]+2368359562&4294967295,C=N+(R<<20&4294967295|R>>>12),R=A+(C^N^O)+x[5]+4294588738&4294967295,A=C+(R<<4&4294967295|R>>>28),R=O+(A^C^N)+x[8]+2272392833&4294967295,O=A+(R<<11&4294967295|R>>>21),R=N+(O^A^C)+x[11]+1839030562&4294967295,N=O+(R<<16&4294967295|R>>>16),R=C+(N^O^A)+x[14]+4259657740&4294967295,C=N+(R<<23&4294967295|R>>>9),R=A+(C^N^O)+x[1]+2763975236&4294967295,A=C+(R<<4&4294967295|R>>>28),R=O+(A^C^N)+x[4]+1272893353&4294967295,O=A+(R<<11&4294967295|R>>>21),R=N+(O^A^C)+x[7]+4139469664&4294967295,N=O+(R<<16&4294967295|R>>>16),R=C+(N^O^A)+x[10]+3200236656&4294967295,C=N+(R<<23&4294967295|R>>>9),R=A+(C^N^O)+x[13]+681279174&4294967295,A=C+(R<<4&4294967295|R>>>28),R=O+(A^C^N)+x[0]+3936430074&4294967295,O=A+(R<<11&4294967295|R>>>21),R=N+(O^A^C)+x[3]+3572445317&4294967295,N=O+(R<<16&4294967295|R>>>16),R=C+(N^O^A)+x[6]+76029189&4294967295,C=N+(R<<23&4294967295|R>>>9),R=A+(C^N^O)+x[9]+3654602809&4294967295,A=C+(R<<4&4294967295|R>>>28),R=O+(A^C^N)+x[12]+3873151461&4294967295,O=A+(R<<11&4294967295|R>>>21),R=N+(O^A^C)+x[15]+530742520&4294967295,N=O+(R<<16&4294967295|R>>>16),R=C+(N^O^A)+x[2]+3299628645&4294967295,C=N+(R<<23&4294967295|R>>>9),R=A+(N^(C|~O))+x[0]+4096336452&4294967295,A=C+(R<<6&4294967295|R>>>26),R=O+(C^(A|~N))+x[7]+1126891415&4294967295,O=A+(R<<10&4294967295|R>>>22),R=N+(A^(O|~C))+x[14]+2878612391&4294967295,N=O+(R<<15&4294967295|R>>>17),R=C+(O^(N|~A))+x[5]+4237533241&4294967295,C=N+(R<<21&4294967295|R>>>11),R=A+(N^(C|~O))+x[12]+1700485571&4294967295,A=C+(R<<6&4294967295|R>>>26),R=O+(C^(A|~N))+x[3]+2399980690&4294967295,O=A+(R<<10&4294967295|R>>>22),R=N+(A^(O|~C))+x[10]+4293915773&4294967295,N=O+(R<<15&4294967295|R>>>17),R=C+(O^(N|~A))+x[1]+2240044497&4294967295,C=N+(R<<21&4294967295|R>>>11),R=A+(N^(C|~O))+x[8]+1873313359&4294967295,A=C+(R<<6&4294967295|R>>>26),R=O+(C^(A|~N))+x[15]+4264355552&4294967295,O=A+(R<<10&4294967295|R>>>22),R=N+(A^(O|~C))+x[6]+2734768916&4294967295,N=O+(R<<15&4294967295|R>>>17),R=C+(O^(N|~A))+x[13]+1309151649&4294967295,C=N+(R<<21&4294967295|R>>>11),R=A+(N^(C|~O))+x[4]+4149444226&4294967295,A=C+(R<<6&4294967295|R>>>26),R=O+(C^(A|~N))+x[11]+3174756917&4294967295,O=A+(R<<10&4294967295|R>>>22),R=N+(A^(O|~C))+x[2]+718787259&4294967295,N=O+(R<<15&4294967295|R>>>17),R=C+(O^(N|~A))+x[9]+3951481745&4294967295,k.g[0]=k.g[0]+A&4294967295,k.g[1]=k.g[1]+(N+(R<<21&4294967295|R>>>11))&4294967295,k.g[2]=k.g[2]+N&4294967295,k.g[3]=k.g[3]+O&4294967295}s.prototype.v=function(k,A){A===void 0&&(A=k.length);const C=A-this.blockSize,x=this.C;let N=this.h,O=0;for(;O<A;){if(N==0)for(;O<=C;)o(this,k,O),O+=this.blockSize;if(typeof k=="string"){for(;O<A;)if(x[N++]=k.charCodeAt(O++),N==this.blockSize){o(this,x),N=0;break}}else for(;O<A;)if(x[N++]=k[O++],N==this.blockSize){o(this,x),N=0;break}}this.h=N,this.o+=A},s.prototype.A=function(){var k=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);k[0]=128;for(var A=1;A<k.length-8;++A)k[A]=0;A=this.o*8;for(var C=k.length-8;C<k.length;++C)k[C]=A&255,A/=256;for(this.v(k),k=Array(16),A=0,C=0;C<4;++C)for(let x=0;x<32;x+=8)k[A++]=this.g[C]>>>x&255;return k};function u(k,A){var C=m;return Object.prototype.hasOwnProperty.call(C,k)?C[k]:C[k]=A(k)}function h(k,A){this.h=A;const C=[];let x=!0;for(let N=k.length-1;N>=0;N--){const O=k[N]|0;x&&O==A||(C[N]=O,x=!1)}this.g=C}var m={};function g(k){return-128<=k&&k<128?u(k,function(A){return new h([A|0],A<0?-1:0)}):new h([k|0],k<0?-1:0)}function _(k){if(isNaN(k)||!isFinite(k))return T;if(k<0)return z(_(-k));const A=[];let C=1;for(let x=0;k>=C;x++)A[x]=k/C|0,C*=4294967296;return new h(A,0)}function w(k,A){if(k.length==0)throw Error("number format error: empty string");if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(k.charAt(0)=="-")return z(w(k.substring(1),A));if(k.indexOf("-")>=0)throw Error('number format error: interior "-" character');const C=_(Math.pow(A,8));let x=T;for(let O=0;O<k.length;O+=8){var N=Math.min(8,k.length-O);const R=parseInt(k.substring(O,O+N),A);N<8?(N=_(Math.pow(A,N)),x=x.j(N).add(_(R))):(x=x.j(C),x=x.add(_(R)))}return x}var T=g(0),S=g(1),U=g(16777216);r=h.prototype,r.m=function(){if(W(this))return-z(this).m();let k=0,A=1;for(let C=0;C<this.g.length;C++){const x=this.i(C);k+=(x>=0?x:4294967296+x)*A,A*=4294967296}return k},r.toString=function(k){if(k=k||10,k<2||36<k)throw Error("radix out of range: "+k);if($(this))return"0";if(W(this))return"-"+z(this).toString(k);const A=_(Math.pow(k,6));var C=this;let x="";for(;;){const N=ke(C,A).g;C=ae(C,N.j(A));let O=((C.g.length>0?C.g[0]:C.h)>>>0).toString(k);if(C=N,$(C))return O+x;for(;O.length<6;)O="0"+O;x=O+x}},r.i=function(k){return k<0?0:k<this.g.length?this.g[k]:this.h};function $(k){if(k.h!=0)return!1;for(let A=0;A<k.g.length;A++)if(k.g[A]!=0)return!1;return!0}function W(k){return k.h==-1}r.l=function(k){return k=ae(this,k),W(k)?-1:$(k)?0:1};function z(k){const A=k.g.length,C=[];for(let x=0;x<A;x++)C[x]=~k.g[x];return new h(C,~k.h).add(S)}r.abs=function(){return W(this)?z(this):this},r.add=function(k){const A=Math.max(this.g.length,k.g.length),C=[];let x=0;for(let N=0;N<=A;N++){let O=x+(this.i(N)&65535)+(k.i(N)&65535),R=(O>>>16)+(this.i(N)>>>16)+(k.i(N)>>>16);x=R>>>16,O&=65535,R&=65535,C[N]=R<<16|O}return new h(C,C[C.length-1]&-2147483648?-1:0)};function ae(k,A){return k.add(z(A))}r.j=function(k){if($(this)||$(k))return T;if(W(this))return W(k)?z(this).j(z(k)):z(z(this).j(k));if(W(k))return z(this.j(z(k)));if(this.l(U)<0&&k.l(U)<0)return _(this.m()*k.m());const A=this.g.length+k.g.length,C=[];for(var x=0;x<2*A;x++)C[x]=0;for(x=0;x<this.g.length;x++)for(let N=0;N<k.g.length;N++){const O=this.i(x)>>>16,R=this.i(x)&65535,Be=k.i(N)>>>16,vt=k.i(N)&65535;C[2*x+2*N]+=R*vt,fe(C,2*x+2*N),C[2*x+2*N+1]+=O*vt,fe(C,2*x+2*N+1),C[2*x+2*N+1]+=R*Be,fe(C,2*x+2*N+1),C[2*x+2*N+2]+=O*Be,fe(C,2*x+2*N+2)}for(k=0;k<A;k++)C[k]=C[2*k+1]<<16|C[2*k];for(k=A;k<2*A;k++)C[k]=0;return new h(C,0)};function fe(k,A){for(;(k[A]&65535)!=k[A];)k[A+1]+=k[A]>>>16,k[A]&=65535,A++}function Te(k,A){this.g=k,this.h=A}function ke(k,A){if($(A))throw Error("division by zero");if($(k))return new Te(T,T);if(W(k))return A=ke(z(k),A),new Te(z(A.g),z(A.h));if(W(A))return A=ke(k,z(A)),new Te(z(A.g),A.h);if(k.g.length>30){if(W(k)||W(A))throw Error("slowDivide_ only works with positive integers.");for(var C=S,x=A;x.l(k)<=0;)C=He(C),x=He(x);var N=Ne(C,1),O=Ne(x,1);for(x=Ne(x,2),C=Ne(C,2);!$(x);){var R=O.add(x);R.l(k)<=0&&(N=N.add(C),O=R),x=Ne(x,1),C=Ne(C,1)}return A=ae(k,N.j(A)),new Te(N,A)}for(N=T;k.l(A)>=0;){for(C=Math.max(1,Math.floor(k.m()/A.m())),x=Math.ceil(Math.log(C)/Math.LN2),x=x<=48?1:Math.pow(2,x-48),O=_(C),R=O.j(A);W(R)||R.l(k)>0;)C-=x,O=_(C),R=O.j(A);$(O)&&(O=S),N=N.add(O),k=ae(k,R)}return new Te(N,k)}r.B=function(k){return ke(this,k).h},r.and=function(k){const A=Math.max(this.g.length,k.g.length),C=[];for(let x=0;x<A;x++)C[x]=this.i(x)&k.i(x);return new h(C,this.h&k.h)},r.or=function(k){const A=Math.max(this.g.length,k.g.length),C=[];for(let x=0;x<A;x++)C[x]=this.i(x)|k.i(x);return new h(C,this.h|k.h)},r.xor=function(k){const A=Math.max(this.g.length,k.g.length),C=[];for(let x=0;x<A;x++)C[x]=this.i(x)^k.i(x);return new h(C,this.h^k.h)};function He(k){const A=k.g.length+1,C=[];for(let x=0;x<A;x++)C[x]=k.i(x)<<1|k.i(x-1)>>>31;return new h(C,k.h)}function Ne(k,A){const C=A>>5;A%=32;const x=k.g.length-C,N=[];for(let O=0;O<x;O++)N[O]=A>0?k.i(O+C)>>>A|k.i(O+C+1)<<32-A:k.i(O+C);return new h(N,k.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,F_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=w,Ei=h}).apply(typeof zg<"u"?zg:typeof self<"u"?self:typeof window<"u"?window:{});var Cu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var U_,Da,j_,bu,Nd,z_,B_,$_;(function(){var r,e=Object.defineProperty;function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Cu=="object"&&Cu];for(var p=0;p<l.length;++p){var y=l[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(l,p){if(p)e:{var y=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var M=l[E];if(!(M in y))break e;y=y[M]}l=l[l.length-1],E=y[l],p=p(E),p!=E&&p!=null&&e(y,l,{configurable:!0,writable:!0,value:p})}}o("Symbol.dispose",function(l){return l||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(l){return l||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(l){return l||function(p){var y=[],E;for(E in p)Object.prototype.hasOwnProperty.call(p,E)&&y.push([E,p[E]]);return y}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function m(l){var p=typeof l;return p=="object"&&l!=null||p=="function"}function g(l,p,y){return l.call.apply(l.bind,arguments)}function _(l,p,y){return _=g,_.apply(null,arguments)}function w(l,p){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function T(l,p){function y(){}y.prototype=p.prototype,l.Z=p.prototype,l.prototype=new y,l.prototype.constructor=l,l.Ob=function(E,M,j){for(var X=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)X[_e-2]=arguments[_e];return p.prototype[M].apply(E,X)}}var S=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?l=>l&&AsyncContext.Snapshot.wrap(l):l=>l;function U(l){const p=l.length;if(p>0){const y=Array(p);for(let E=0;E<p;E++)y[E]=l[E];return y}return[]}function $(l,p){for(let E=1;E<arguments.length;E++){const M=arguments[E];var y=typeof M;if(y=y!="object"?y:M?Array.isArray(M)?"array":y:"null",y=="array"||y=="object"&&typeof M.length=="number"){y=l.length||0;const j=M.length||0;l.length=y+j;for(let X=0;X<j;X++)l[y+X]=M[X]}else l.push(M)}}class W{constructor(p,y){this.i=p,this.j=y,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function z(l){h.setTimeout(()=>{throw l},0)}function ae(){var l=k;let p=null;return l.g&&(p=l.g,l.g=l.g.next,l.g||(l.h=null),p.next=null),p}class fe{constructor(){this.h=this.g=null}add(p,y){const E=Te.get();E.set(p,y),this.h?this.h.next=E:this.g=E,this.h=E}}var Te=new W(()=>new ke,l=>l.reset());class ke{constructor(){this.next=this.g=this.h=null}set(p,y){this.h=p,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let He,Ne=!1,k=new fe,A=()=>{const l=Promise.resolve(void 0);He=()=>{l.then(C)}};function C(){for(var l;l=ae();){try{l.h.call(l.g)}catch(y){z(y)}var p=Te;p.j(l),p.h<100&&(p.h++,l.next=p.g,p.g=l)}Ne=!1}function x(){this.u=this.u,this.C=this.C}x.prototype.u=!1,x.prototype.dispose=function(){this.u||(this.u=!0,this.N())},x.prototype[Symbol.dispose]=function(){this.dispose()},x.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function N(l,p){this.type=l,this.g=this.target=p,this.defaultPrevented=!1}N.prototype.h=function(){this.defaultPrevented=!0};var O=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var l=!1,p=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const y=()=>{};h.addEventListener("test",y,p),h.removeEventListener("test",y,p)}catch{}return l}();function R(l){return/^[\s\xa0]*$/.test(l)}function Be(l,p){N.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l&&this.init(l,p)}T(Be,N),Be.prototype.init=function(l,p){const y=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;this.target=l.target||l.srcElement,this.g=p,p=l.relatedTarget,p||(y=="mouseover"?p=l.fromElement:y=="mouseout"&&(p=l.toElement)),this.relatedTarget=p,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=l.pointerType,this.state=l.state,this.i=l,l.defaultPrevented&&Be.Z.h.call(this)},Be.prototype.h=function(){Be.Z.h.call(this);const l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var vt="closure_listenable_"+(Math.random()*1e6|0),Dt=0;function Ye(l,p,y,E,M){this.listener=l,this.proxy=null,this.src=p,this.type=y,this.capture=!!E,this.ha=M,this.key=++Dt,this.da=this.fa=!1}function J(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function ce(l,p,y){for(const E in l)p.call(y,l[E],E,l)}function re(l,p){for(const y in l)p.call(void 0,l[y],y,l)}function V(l){const p={};for(const y in l)p[y]=l[y];return p}const H="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ee(l,p){let y,E;for(let M=1;M<arguments.length;M++){E=arguments[M];for(y in E)l[y]=E[y];for(let j=0;j<H.length;j++)y=H[j],Object.prototype.hasOwnProperty.call(E,y)&&(l[y]=E[y])}}function we(l){this.src=l,this.g={},this.h=0}we.prototype.add=function(l,p,y,E,M){const j=l.toString();l=this.g[j],l||(l=this.g[j]=[],this.h++);const X=Ae(l,p,E,M);return X>-1?(p=l[X],y||(p.fa=!1)):(p=new Ye(p,this.src,j,!!E,M),p.fa=y,l.push(p)),p};function Se(l,p){const y=p.type;if(y in l.g){var E=l.g[y],M=Array.prototype.indexOf.call(E,p,void 0),j;(j=M>=0)&&Array.prototype.splice.call(E,M,1),j&&(J(p),l.g[y].length==0&&(delete l.g[y],l.h--))}}function Ae(l,p,y,E){for(let M=0;M<l.length;++M){const j=l[M];if(!j.da&&j.listener==p&&j.capture==!!y&&j.ha==E)return M}return-1}var be="closure_lm_"+(Math.random()*1e6|0),Ve={};function je(l,p,y,E,M){if(Array.isArray(p)){for(let j=0;j<p.length;j++)je(l,p[j],y,E,M);return null}return y=Vo(y),l&&l[vt]?l.J(p,y,m(E)?!!E.capture:!1,M):zt(l,p,y,!1,E,M)}function zt(l,p,y,E,M,j){if(!p)throw Error("Invalid event type");const X=m(M)?!!M.capture:!!M;let _e=Ts(l);if(_e||(l[be]=_e=new we(l)),y=_e.add(p,y,E,X,j),y.proxy)return y;if(E=Es(),y.proxy=E,E.src=l,E.listener=y,l.addEventListener)O||(M=X),M===void 0&&(M=!1),l.addEventListener(p.toString(),E,M);else if(l.attachEvent)l.attachEvent(ws(p.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Es(){function l(y){return p.call(l.src,l.listener,y)}const p=cl;return l}function xo(l,p,y,E,M){if(Array.isArray(p))for(var j=0;j<p.length;j++)xo(l,p[j],y,E,M);else E=m(E)?!!E.capture:!!E,y=Vo(y),l&&l[vt]?(l=l.i,j=String(p).toString(),j in l.g&&(p=l.g[j],y=Ae(p,y,E,M),y>-1&&(J(p[y]),Array.prototype.splice.call(p,y,1),p.length==0&&(delete l.g[j],l.h--)))):l&&(l=Ts(l))&&(p=l.g[p.toString()],l=-1,p&&(l=Ae(p,y,E,M)),(y=l>-1?p[l]:null)&&Mr(y))}function Mr(l){if(typeof l!="number"&&l&&!l.da){var p=l.src;if(p&&p[vt])Se(p.i,l);else{var y=l.type,E=l.proxy;p.removeEventListener?p.removeEventListener(y,E,l.capture):p.detachEvent?p.detachEvent(ws(y),E):p.addListener&&p.removeListener&&p.removeListener(E),(y=Ts(p))?(Se(y,l),y.h==0&&(y.src=null,p[be]=null)):J(l)}}}function ws(l){return l in Ve?Ve[l]:Ve[l]="on"+l}function cl(l,p){if(l.da)l=!0;else{p=new Be(p,this);const y=l.listener,E=l.ha||l.src;l.fa&&Mr(l),l=y.call(E,p)}return l}function Ts(l){return l=l[be],l instanceof we?l:null}var Vi="__closure_events_fn_"+(Math.random()*1e9>>>0);function Vo(l){return typeof l=="function"?l:(l[Vi]||(l[Vi]=function(p){return l.handleEvent(p)}),l[Vi])}function ut(){x.call(this),this.i=new we(this),this.M=this,this.G=null}T(ut,x),ut.prototype[vt]=!0,ut.prototype.removeEventListener=function(l,p,y,E){xo(this,l,p,y,E)};function st(l,p){var y,E=l.G;if(E)for(y=[];E;E=E.G)y.push(E);if(l=l.M,E=p.type||p,typeof p=="string")p=new N(p,l);else if(p instanceof N)p.target=p.target||l;else{var M=p;p=new N(E,l),Ee(p,M)}M=!0;let j,X;if(y)for(X=y.length-1;X>=0;X--)j=p.g=y[X],M=Tn(j,E,!0,p)&&M;if(j=p.g=l,M=Tn(j,E,!0,p)&&M,M=Tn(j,E,!1,p)&&M,y)for(X=0;X<y.length;X++)j=p.g=y[X],M=Tn(j,E,!1,p)&&M}ut.prototype.N=function(){if(ut.Z.N.call(this),this.i){var l=this.i;for(const p in l.g){const y=l.g[p];for(let E=0;E<y.length;E++)J(y[E]);delete l.g[p],l.h--}}this.G=null},ut.prototype.J=function(l,p,y,E){return this.i.add(String(l),p,!1,y,E)},ut.prototype.K=function(l,p,y,E){return this.i.add(String(l),p,!0,y,E)};function Tn(l,p,y,E){if(p=l.i.g[String(p)],!p)return!0;p=p.concat();let M=!0;for(let j=0;j<p.length;++j){const X=p[j];if(X&&!X.da&&X.capture==y){const _e=X.listener,ot=X.ha||X.src;X.fa&&Se(l.i,X),M=_e.call(ot,E)!==!1&&M}}return M&&!E.defaultPrevented}function Oo(l,p){if(typeof l!="function")if(l&&typeof l.handleEvent=="function")l=_(l.handleEvent,l);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:h.setTimeout(l,p||0)}function Lo(l){l.g=Oo(()=>{l.g=null,l.i&&(l.i=!1,Lo(l))},l.l);const p=l.h;l.h=null,l.m.apply(null,p)}class hl extends x{constructor(p,y){super(),this.m=p,this.l=y,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Lo(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function br(l){x.call(this),this.h=l,this.g={}}T(br,x);var Mo=[];function Is(l){ce(l.g,function(p,y){this.g.hasOwnProperty(y)&&Mr(p)},l),l.g={}}br.prototype.N=function(){br.Z.N.call(this),Is(this)},br.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Fr=h.JSON.stringify,dl=h.JSON.parse,Oi=class{stringify(l){return h.JSON.stringify(l,void 0)}parse(l){return h.JSON.parse(l,void 0)}};function Ur(){}function fl(){}var jr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ss(){N.call(this,"d")}T(Ss,N);function bo(){N.call(this,"c")}T(bo,N);var In={},As=null;function zr(){return As=As||new ut}In.Ia="serverreachability";function Rs(l){N.call(this,In.Ia,l)}T(Rs,N);function ar(l){const p=zr();st(p,new Rs(p))}In.STAT_EVENT="statevent";function lr(l,p){N.call(this,In.STAT_EVENT,l),this.stat=p}T(lr,N);function nt(l){const p=zr();st(p,new lr(p,l))}In.Ja="timingevent";function Fo(l,p){N.call(this,In.Ja,l),this.size=p}T(Fo,N);function Br(l,p){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){l()},p)}function $r(){this.g=!0}$r.prototype.ua=function(){this.g=!1};function pl(l,p,y,E,M,j){l.info(function(){if(l.g)if(j){var X="",_e=j.split("&");for(let Ue=0;Ue<_e.length;Ue++){var ot=_e[Ue].split("=");if(ot.length>1){const ct=ot[0];ot=ot[1];const sn=ct.split("_");X=sn.length>=2&&sn[1]=="type"?X+(ct+"="+ot+"&"):X+(ct+"=redacted&")}}}else X=null;else X=j;return"XMLHTTP REQ ("+E+") [attempt "+M+"]: "+p+`
`+y+`
`+X})}function ml(l,p,y,E,M,j,X){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+M+"]: "+p+`
`+y+`
`+j+" "+X})}function Ln(l,p,y,E){l.info(function(){return"XMLHTTP TEXT ("+p+"): "+Li(l,y)+(E?" "+E:"")})}function gl(l,p){l.info(function(){return"TIMEOUT: "+p})}$r.prototype.info=function(){};function Li(l,p){if(!l.g)return p;if(!p)return null;try{const j=JSON.parse(p);if(j){for(l=0;l<j.length;l++)if(Array.isArray(j[l])){var y=j[l];if(!(y.length<2)){var E=y[1];if(Array.isArray(E)&&!(E.length<1)){var M=E[0];if(M!="noop"&&M!="stop"&&M!="close")for(let X=1;X<E.length;X++)E[X]=""}}}}return Fr(j)}catch{return p}}var qr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Wr={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},yl;function ur(){}T(ur,Ur),ur.prototype.g=function(){return new XMLHttpRequest},yl=new ur;function Mn(l){return encodeURIComponent(String(l))}function Cs(l){var p=1;l=l.split(":");const y=[];for(;p>0&&l.length;)y.push(l.shift()),p--;return l.length&&y.push(l.join(":")),y}function hn(l,p,y,E){this.j=l,this.i=p,this.l=y,this.S=E||1,this.V=new br(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new _l}function _l(){this.i=null,this.g="",this.h=!1}var vl={},Uo={};function Sn(l,p,y){l.M=1,l.A=hr(dn(p)),l.u=y,l.R=!0,jo(l,null)}function jo(l,p){l.F=Date.now(),Mi(l),l.B=dn(l.A);var y=l.B,E=l.S;Array.isArray(E)||(E=[String(E)]),Yo(y.i,"t",E),l.C=0,y=l.j.L,l.h=new _l,l.g=kl(l.j,y?p:null,!l.u),l.P>0&&(l.O=new hl(_(l.Y,l,l.g),l.P)),p=l.V,y=l.g,E=l.ba;var M="readystatechange";Array.isArray(M)||(M&&(Mo[0]=M.toString()),M=Mo);for(let j=0;j<M.length;j++){const X=je(y,M[j],E||p.handleEvent,!1,p.h||p);if(!X)break;p.g[X.key]=X}p=l.J?V(l.J):{},l.u?(l.v||(l.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.B,l.v,l.u,p)):(l.v="GET",l.g.ea(l.B,l.v,null,p)),ar(),pl(l.i,l.v,l.B,l.l,l.S,l.u)}hn.prototype.ba=function(l){l=l.target;const p=this.O;p&&$n(l)==3?p.j():this.Y(l)},hn.prototype.Y=function(l){try{if(l==this.g)e:{const _e=$n(this.g),ot=this.g.ya(),Ue=this.g.ca();if(!(_e<3)&&(_e!=3||this.g&&(this.h.h||this.g.la()||Cl(this.g)))){this.K||_e!=4||ot==7||(ot==8||Ue<=0?ar(3):ar(2)),Ps(this);var p=this.g.ca();this.X=p;var y=El(this);if(this.o=p==200,ml(this.i,this.v,this.B,this.l,this.S,_e,p),this.o){if(this.U&&!this.L){t:{if(this.g){var E,M=this.g;if((E=M.g?M.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(E)){var j=E;break t}}j=null}if(l=j)Ln(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ge(this,l);else{this.o=!1,this.m=3,nt(12),cr(this),bi(this);break e}}if(this.R){l=!0;let ct;for(;!this.K&&this.C<y.length;)if(ct=Tl(this,y),ct==Uo){_e==4&&(this.m=4,nt(14),l=!1),Ln(this.i,this.l,null,"[Incomplete Response]");break}else if(ct==vl){this.m=4,nt(15),Ln(this.i,this.l,y,"[Invalid Chunk]"),l=!1;break}else Ln(this.i,this.l,ct,null),Ge(this,ct);if(wl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_e!=4||y.length!=0||this.h.h||(this.m=1,nt(16),l=!1),this.o=this.o&&l,!l)Ln(this.i,this.l,y,"[Invalid Chunked Response]"),cr(this),bi(this);else if(y.length>0&&!this.W){this.W=!0;var X=this.j;X.g==this&&X.aa&&!X.P&&(X.j.info("Great, no buffering proxy detected. Bytes received: "+y.length),Hi(X),X.P=!0,nt(11))}}else Ln(this.i,this.l,y,null),Ge(this,y);_e==4&&cr(this),this.o&&!this.K&&(_e==4?Fs(this.j,this):(this.o=!1,Mi(this)))}else Jo(this.g),p==400&&y.indexOf("Unknown SID")>0?(this.m=3,nt(12)):(this.m=0,nt(13)),cr(this),bi(this)}}}catch{}finally{}};function El(l){if(!wl(l))return l.g.la();const p=Cl(l.g);if(p==="")return"";let y="";const E=p.length,M=$n(l.g)==4;if(!l.h.i){if(typeof TextDecoder>"u")return cr(l),bi(l),"";l.h.i=new h.TextDecoder}for(let j=0;j<E;j++)l.h.h=!0,y+=l.h.i.decode(p[j],{stream:!(M&&j==E-1)});return p.length=0,l.h.g+=y,l.C=0,l.h.g}function wl(l){return l.g?l.v=="GET"&&l.M!=2&&l.j.Aa:!1}function Tl(l,p){var y=l.C,E=p.indexOf(`
`,y);return E==-1?Uo:(y=Number(p.substring(y,E)),isNaN(y)?vl:(E+=1,E+y>p.length?Uo:(p=p.slice(E,E+y),l.C=E+y,p)))}hn.prototype.cancel=function(){this.K=!0,cr(this)};function Mi(l){l.T=Date.now()+l.H,zo(l,l.H)}function zo(l,p){if(l.D!=null)throw Error("WatchDog timer not null");l.D=Br(_(l.aa,l),p)}function Ps(l){l.D&&(h.clearTimeout(l.D),l.D=null)}hn.prototype.aa=function(){this.D=null;const l=Date.now();l-this.T>=0?(gl(this.i,this.B),this.M!=2&&(ar(),nt(17)),cr(this),this.m=2,bi(this)):zo(this,this.T-l)};function bi(l){l.j.I==0||l.K||Fs(l.j,l)}function cr(l){Ps(l);var p=l.O;p&&typeof p.dispose=="function"&&p.dispose(),l.O=null,Is(l.V),l.g&&(p=l.g,l.g=null,p.abort(),p.dispose())}function Ge(l,p){try{var y=l.j;if(y.I!=0&&(y.g==l||$o(y.h,l))){if(!l.L&&$o(y.h,l)&&y.I==3){try{var E=y.Ba.g.parse(p)}catch{E=null}if(Array.isArray(E)&&E.length==3){var M=E;if(M[0]==0){e:if(!y.v){if(y.g)if(y.g.F+3e3<l.F)bs(y),nn(y);else break e;Hn(y),nt(18)}}else y.xa=M[1],0<y.xa-y.K&&M[2]<37500&&y.F&&y.A==0&&!y.C&&(y.C=Br(_(y.Va,y),6e3));Fi(y.h)<=1&&y.ta&&(y.ta=void 0)}else rn(y,11)}else if((l.L||y.g==l)&&bs(y),!R(p))for(M=y.Ba.g.parse(p),p=0;p<M.length;p++){let Ue=M[p];const ct=Ue[0];if(!(ct<=y.K))if(y.K=ct,Ue=Ue[1],y.I==2)if(Ue[0]=="c"){y.M=Ue[1],y.ba=Ue[2];const sn=Ue[3];sn!=null&&(y.ka=sn,y.j.info("VER="+y.ka));const gr=Ue[4];gr!=null&&(y.za=gr,y.j.info("SVER="+y.za));const Gn=Ue[5];Gn!=null&&typeof Gn=="number"&&Gn>0&&(E=1.5*Gn,y.O=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const Kn=l.g;if(Kn){const zs=Kn.g?Kn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(zs){var j=E.h;j.g||zs.indexOf("spdy")==-1&&zs.indexOf("quic")==-1&&zs.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(Ns(j,j.h),j.h=null))}if(E.G){const ta=Kn.g?Kn.g.getResponseHeader("X-HTTP-Session-Id"):null;ta&&(E.wa=ta,Me(E.J,E.G,ta))}}y.I=3,y.l&&y.l.ra(),y.aa&&(y.T=Date.now()-l.F,y.j.info("Handshake RTT: "+y.T+"ms")),E=y;var X=l;if(E.na=ea(E,E.L?E.ba:null,E.W),X.L){Ui(E.h,X);var _e=X,ot=E.O;ot&&(_e.H=ot),_e.D&&(Ps(_e),Mi(_e)),E.g=X}else xt(E);y.i.length>0&&mr(y)}else Ue[0]!="stop"&&Ue[0]!="close"||rn(y,7);else y.I==3&&(Ue[0]=="stop"||Ue[0]=="close"?Ue[0]=="stop"?rn(y,7):Ls(y):Ue[0]!="noop"&&y.l&&y.l.qa(Ue),y.A=0)}}ar(4)}catch{}}var Oc=class{constructor(l,p){this.g=l,this.map=p}};function ks(l){this.l=l||10,h.PerformanceNavigationTiming?(l=h.performance.getEntriesByType("navigation"),l=l.length>0&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Bo(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Fi(l){return l.h?1:l.g?l.g.size:0}function $o(l,p){return l.h?l.h==p:l.g?l.g.has(p):!1}function Ns(l,p){l.g?l.g.add(p):l.h=p}function Ui(l,p){l.h&&l.h==p?l.h=null:l.g&&l.g.has(p)&&l.g.delete(p)}ks.prototype.cancel=function(){if(this.i=Zt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Zt(l){if(l.h!=null)return l.i.concat(l.h.G);if(l.g!=null&&l.g.size!==0){let p=l.i;for(const y of l.g.values())p=p.concat(y.G);return p}return U(l.i)}var Il=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function en(l,p){if(l){l=l.split("&");for(let y=0;y<l.length;y++){const E=l[y].indexOf("=");let M,j=null;E>=0?(M=l[y].substring(0,E),j=l[y].substring(E+1)):M=l[y],p(M,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function bn(l){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;l instanceof bn?(this.l=l.l,ji(this,l.j),this.o=l.o,this.g=l.g,Fn(this,l.u),this.h=l.h,Hr(this,Xo(l.i)),this.m=l.m):l&&(p=String(l).match(Il))?(this.l=!1,ji(this,p[1]||"",!0),this.o=zi(p[2]||""),this.g=zi(p[3]||"",!0),Fn(this,p[4]),this.h=zi(p[5]||"",!0),Hr(this,p[6]||"",!0),this.m=zi(p[7]||"")):(this.l=!1,this.i=new De(null,this.l))}bn.prototype.toString=function(){const l=[];var p=this.j;p&&l.push(Bi(p,Wo,!0),":");var y=this.g;return(y||p=="file")&&(l.push("//"),(p=this.o)&&l.push(Bi(p,Wo,!0),"@"),l.push(Mn(y).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.u,y!=null&&l.push(":",String(y))),(y=this.h)&&(this.g&&y.charAt(0)!="/"&&l.push("/"),l.push(Bi(y,y.charAt(0)=="/"?$i:Ho,!0))),(y=this.i.toString())&&l.push("?",y),(y=this.m)&&l.push("#",Bi(y,Go)),l.join("")},bn.prototype.resolve=function(l){const p=dn(this);let y=!!l.j;y?ji(p,l.j):y=!!l.o,y?p.o=l.o:y=!!l.g,y?p.g=l.g:y=l.u!=null;var E=l.h;if(y)Fn(p,l.u);else if(y=!!l.h){if(E.charAt(0)!="/")if(this.g&&!this.h)E="/"+E;else{var M=p.h.lastIndexOf("/");M!=-1&&(E=p.h.slice(0,M+1)+E)}if(M=E,M==".."||M==".")E="";else if(M.indexOf("./")!=-1||M.indexOf("/.")!=-1){E=M.lastIndexOf("/",0)==0,M=M.split("/");const j=[];for(let X=0;X<M.length;){const _e=M[X++];_e=="."?E&&X==M.length&&j.push(""):_e==".."?((j.length>1||j.length==1&&j[0]!="")&&j.pop(),E&&X==M.length&&j.push("")):(j.push(_e),E=!0)}E=j.join("/")}else E=M}return y?p.h=E:y=l.i.toString()!=="",y?Hr(p,Xo(l.i)):y=!!l.m,y&&(p.m=l.m),p};function dn(l){return new bn(l)}function ji(l,p,y){l.j=y?zi(p,!0):p,l.j&&(l.j=l.j.replace(/:$/,""))}function Fn(l,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);l.u=p}else l.u=null}function Hr(l,p,y){p instanceof De?(l.i=p,xs(l.i,l.l)):(y||(p=Bi(p,Lc)),l.i=new De(p,l.l))}function Me(l,p,y){l.i.set(p,y)}function hr(l){return Me(l,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),l}function zi(l,p){return l?p?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Bi(l,p,y){return typeof l=="string"?(l=encodeURI(l).replace(p,qo),y&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function qo(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Wo=/[#\/\?@]/g,Ho=/[#\?:]/g,$i=/[#\?]/g,Lc=/[#\?@]/g,Go=/#/g;function De(l,p){this.h=this.g=null,this.i=l||null,this.j=!!p}function Un(l){l.g||(l.g=new Map,l.h=0,l.i&&en(l.i,function(p,y){l.add(decodeURIComponent(p.replace(/\+/g," ")),y)}))}r=De.prototype,r.add=function(l,p){Un(this),this.i=null,l=jn(this,l);let y=this.g.get(l);return y||this.g.set(l,y=[]),y.push(p),this.h+=1,this};function Ko(l,p){Un(l),p=jn(l,p),l.g.has(p)&&(l.i=null,l.h-=l.g.get(p).length,l.g.delete(p))}function Ds(l,p){return Un(l),p=jn(l,p),l.g.has(p)}r.forEach=function(l,p){Un(this),this.g.forEach(function(y,E){y.forEach(function(M){l.call(p,M,E,this)},this)},this)};function Qo(l,p){Un(l);let y=[];if(typeof p=="string")Ds(l,p)&&(y=y.concat(l.g.get(jn(l,p))));else for(l=Array.from(l.g.values()),p=0;p<l.length;p++)y=y.concat(l[p]);return y}r.set=function(l,p){return Un(this),this.i=null,l=jn(this,l),Ds(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[p]),this.h+=1,this},r.get=function(l,p){return l?(l=Qo(this,l),l.length>0?String(l[0]):p):p};function Yo(l,p,y){Ko(l,p),y.length>0&&(l.i=null,l.g.set(jn(l,p),U(y)),l.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],p=Array.from(this.g.keys());for(let E=0;E<p.length;E++){var y=p[E];const M=Mn(y);y=Qo(this,y);for(let j=0;j<y.length;j++){let X=M;y[j]!==""&&(X+="="+Mn(y[j])),l.push(X)}}return this.i=l.join("&")};function Xo(l){const p=new De;return p.i=l.i,l.g&&(p.g=new Map(l.g),p.h=l.h),p}function jn(l,p){return p=String(p),l.j&&(p=p.toLowerCase()),p}function xs(l,p){p&&!l.j&&(Un(l),l.i=null,l.g.forEach(function(y,E){const M=E.toLowerCase();E!=M&&(Ko(this,E),Yo(this,M,y))},l)),l.j=p}function zn(l,p){const y=new $r;if(h.Image){const E=new Image;E.onload=w(St,y,"TestLoadImage: loaded",!0,p,E),E.onerror=w(St,y,"TestLoadImage: error",!1,p,E),E.onabort=w(St,y,"TestLoadImage: abort",!1,p,E),E.ontimeout=w(St,y,"TestLoadImage: timeout",!1,p,E),h.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else p(!1)}function Bn(l,p){const y=new $r,E=new AbortController,M=setTimeout(()=>{E.abort(),St(y,"TestPingServer: timeout",!1,p)},1e4);fetch(l,{signal:E.signal}).then(j=>{clearTimeout(M),j.ok?St(y,"TestPingServer: ok",!0,p):St(y,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(M),St(y,"TestPingServer: error",!1,p)})}function St(l,p,y,E,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),E(y)}catch{}}function qi(){this.g=new Oi}function dr(l){this.i=l.Sb||null,this.h=l.ab||!1}T(dr,Ur),dr.prototype.g=function(){return new tn(this.i,this.h)};function tn(l,p){ut.call(this),this.H=l,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}T(tn,ut),r=tn.prototype,r.open=function(l,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=l,this.D=p,this.readyState=1,An(this)},r.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};l&&(p.body=l),(this.H||h).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Gr(this)),this.readyState=0},r.Pa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,An(this)),this.g&&(this.readyState=3,An(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Sl(this)}else l.text().then(this.Oa.bind(this),this.ga.bind(this))};function Sl(l){l.j.read().then(l.Ma.bind(l)).catch(l.ga.bind(l))}r.Ma=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var p=l.value?l.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!l.done}))&&(this.response=this.responseText+=p)}l.done?Gr(this):An(this),this.readyState==3&&Sl(this)}},r.Oa=function(l){this.g&&(this.response=this.responseText=l,Gr(this))},r.Na=function(l){this.g&&(this.response=l,Gr(this))},r.ga=function(){this.g&&Gr(this)};function Gr(l){l.readyState=4,l.l=null,l.j=null,l.B=null,An(l)}r.setRequestHeader=function(l,p){this.A.append(l,p)},r.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],p=this.h.entries();for(var y=p.next();!y.done;)y=y.value,l.push(y[0]+": "+y[1]),y=p.next();return l.join(`\r
`)};function An(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(tn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Al(l){let p="";return ce(l,function(y,E){p+=E,p+=":",p+=y,p+=`\r
`}),p}function Vs(l,p,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=Al(y),typeof l=="string"?y!=null&&Mn(y):Me(l,p,y))}function ze(l){ut.call(this),this.headers=new Map,this.L=l||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}T(ze,ut);var Rl=/^https?$/i,Mc=["POST","PUT"];r=ze.prototype,r.Fa=function(l){this.H=l},r.ea=function(l,p,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);p=p?p.toUpperCase():"GET",this.D=l,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():yl.g(),this.g.onreadystatechange=S(_(this.Ca,this));try{this.B=!0,this.g.open(p,String(l),!0),this.B=!1}catch(j){Kr(this,j);return}if(l=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var M in E)y.set(M,E[M]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const j of E.keys())y.set(j,E.get(j));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(j=>j.toLowerCase()=="content-type"),M=h.FormData&&l instanceof h.FormData,!(Array.prototype.indexOf.call(Mc,p,void 0)>=0)||E||M||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,X]of y)this.g.setRequestHeader(j,X);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(l),this.v=!1}catch(j){Kr(this,j)}};function Kr(l,p){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=p,l.o=5,Qr(l),pr(l)}function Qr(l){l.A||(l.A=!0,st(l,"complete"),st(l,"error"))}r.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=l||7,st(this,"complete"),st(this,"abort"),pr(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),pr(this,!0)),ze.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?fr(this):this.Xa())},r.Xa=function(){fr(this)};function fr(l){if(l.h&&typeof u<"u"){if(l.v&&$n(l)==4)setTimeout(l.Ca.bind(l),0);else if(st(l,"readystatechange"),$n(l)==4){l.h=!1;try{const j=l.ca();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var y;if(!(y=p)){var E;if(E=j===0){let X=String(l.D).match(Il)[1]||null;!X&&h.self&&h.self.location&&(X=h.self.location.protocol.slice(0,-1)),E=!Rl.test(X?X.toLowerCase():"")}y=E}if(y)st(l,"complete"),st(l,"success");else{l.o=6;try{var M=$n(l)>2?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.ca()+"]",Qr(l)}}finally{pr(l)}}}}function pr(l,p){if(l.g){l.m&&(clearTimeout(l.m),l.m=null);const y=l.g;l.g=null,p||st(l,"ready");try{y.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function $n(l){return l.g?l.g.readyState:0}r.ca=function(){try{return $n(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(l){if(this.g){var p=this.g.responseText;return l&&p.indexOf(l)==0&&(p=p.substring(l.length)),dl(p)}};function Cl(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.F){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Jo(l){const p={};l=(l.g&&$n(l)>=2&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(R(l[E]))continue;var y=Cs(l[E]);const M=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const j=p[M]||[];p[M]=j,j.push(y)}re(p,function(E){return E.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function qn(l,p,y){return y&&y.internalChannelParams&&y.internalChannelParams[l]||p}function Os(l){this.za=0,this.i=[],this.j=new $r,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=qn("failFast",!1,l),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=qn("baseRetryDelayMs",5e3,l),this.Za=qn("retryDelaySeedMs",1e4,l),this.Ta=qn("forwardChannelMaxRetries",2,l),this.va=qn("forwardChannelRequestTimeoutMs",2e4,l),this.ma=l&&l.xmlHttpFactory||void 0,this.Ua=l&&l.Rb||void 0,this.Aa=l&&l.useFetchStreams||!1,this.O=void 0,this.L=l&&l.supportsCrossDomainXhr||!1,this.M="",this.h=new ks(l&&l.concurrentRequestLimit),this.Ba=new qi,this.S=l&&l.fastHandshake||!1,this.R=l&&l.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=l&&l.Pb||!1,l&&l.ua&&this.j.ua(),l&&l.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&l&&l.detectBufferingProxy||!1,this.ia=void 0,l&&l.longPollingTimeout&&l.longPollingTimeout>0&&(this.ia=l.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=Os.prototype,r.ka=8,r.I=1,r.connect=function(l,p,y,E){nt(0),this.W=l,this.H=p||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.J=ea(this,null,this.W),mr(this)};function Ls(l){if(Ms(l),l.I==3){var p=l.V++,y=dn(l.J);if(Me(y,"SID",l.M),Me(y,"RID",p),Me(y,"TYPE","terminate"),Wn(l,y),p=new hn(l,l.j,p),p.M=2,p.A=hr(dn(y)),y=!1,h.navigator&&h.navigator.sendBeacon)try{y=h.navigator.sendBeacon(p.A.toString(),"")}catch{}!y&&h.Image&&(new Image().src=p.A,y=!0),y||(p.g=kl(p.j,null),p.g.ea(p.A)),p.F=Date.now(),Mi(p)}Gi(l)}function nn(l){l.g&&(Hi(l),l.g.cancel(),l.g=null)}function Ms(l){nn(l),l.v&&(h.clearTimeout(l.v),l.v=null),bs(l),l.h.cancel(),l.m&&(typeof l.m=="number"&&h.clearTimeout(l.m),l.m=null)}function mr(l){if(!Bo(l.h)&&!l.m){l.m=!0;var p=l.Ea;He||A(),Ne||(He(),Ne=!0),k.add(p,l),l.D=0}}function Pl(l,p){return Fi(l.h)>=l.h.j-(l.m?1:0)?!1:l.m?(l.i=p.G.concat(l.i),!0):l.I==1||l.I==2||l.D>=(l.Sa?0:l.Ta)?!1:(l.m=Br(_(l.Ea,l,p),Us(l,l.D)),l.D++,!0)}r.Ea=function(l){if(this.m)if(this.m=null,this.I==1){if(!l){this.V=Math.floor(Math.random()*1e5),l=this.V++;const M=new hn(this,this.j,l);let j=this.o;if(this.U&&(j?(j=V(j),Ee(j,this.U)):j=this.U),this.u!==null||this.R||(M.J=j,j=null),this.S)e:{for(var p=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(p+=E,p>4096){p=y;break e}if(p===4096||y===this.i.length-1){p=y+1;break e}}p=1e3}else p=1e3;p=Zo(this,M,p),y=dn(this.J),Me(y,"RID",l),Me(y,"CVER",22),this.G&&Me(y,"X-HTTP-Session-Id",this.G),Wn(this,y),j&&(this.R?p="headers="+Mn(Al(j))+"&"+p:this.u&&Vs(y,this.u,j)),Ns(this.h,M),this.Ra&&Me(y,"TYPE","init"),this.S?(Me(y,"$req",p),Me(y,"SID","null"),M.U=!0,Sn(M,y,null)):Sn(M,y,p),this.I=2}}else this.I==3&&(l?Wi(this,l):this.i.length==0||Bo(this.h)||Wi(this))};function Wi(l,p){var y;p?y=p.l:y=l.V++;const E=dn(l.J);Me(E,"SID",l.M),Me(E,"RID",y),Me(E,"AID",l.K),Wn(l,E),l.u&&l.o&&Vs(E,l.u,l.o),y=new hn(l,l.j,y,l.D+1),l.u===null&&(y.J=l.o),p&&(l.i=p.G.concat(l.i)),p=Zo(l,y,1e3),y.H=Math.round(l.va*.5)+Math.round(l.va*.5*Math.random()),Ns(l.h,y),Sn(y,E,p)}function Wn(l,p){l.H&&ce(l.H,function(y,E){Me(p,E,y)}),l.l&&ce({},function(y,E){Me(p,E,y)})}function Zo(l,p,y){y=Math.min(l.i.length,y);const E=l.l?_(l.l.Ka,l.l,l):null;e:{var M=l.i;let _e=-1;for(;;){const ot=["count="+y];_e==-1?y>0?(_e=M[0].g,ot.push("ofs="+_e)):_e=0:ot.push("ofs="+_e);let Ue=!0;for(let ct=0;ct<y;ct++){var j=M[ct].g;const sn=M[ct].map;if(j-=_e,j<0)_e=Math.max(0,M[ct].g-100),Ue=!1;else try{j="req"+j+"_"||"";try{var X=sn instanceof Map?sn:Object.entries(sn);for(const[gr,Gn]of X){let Kn=Gn;m(Gn)&&(Kn=Fr(Gn)),ot.push(j+gr+"="+encodeURIComponent(Kn))}}catch(gr){throw ot.push(j+"type="+encodeURIComponent("_badmap")),gr}}catch{E&&E(sn)}}if(Ue){X=ot.join("&");break e}}X=void 0}return l=l.i.splice(0,y),p.G=l,X}function xt(l){if(!l.g&&!l.v){l.Y=1;var p=l.Da;He||A(),Ne||(He(),Ne=!0),k.add(p,l),l.A=0}}function Hn(l){return l.g||l.v||l.A>=3?!1:(l.Y++,l.v=Br(_(l.Da,l),Us(l,l.A)),l.A++,!0)}r.Da=function(){if(this.v=null,Yr(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var l=4*this.T;this.j.info("BP detection timer enabled: "+l),this.B=Br(_(this.Wa,this),l)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,nt(10),nn(this),Yr(this))};function Hi(l){l.B!=null&&(h.clearTimeout(l.B),l.B=null)}function Yr(l){l.g=new hn(l,l.j,"rpc",l.Y),l.u===null&&(l.g.J=l.o),l.g.P=0;var p=dn(l.na);Me(p,"RID","rpc"),Me(p,"SID",l.M),Me(p,"AID",l.K),Me(p,"CI",l.F?"0":"1"),!l.F&&l.ia&&Me(p,"TO",l.ia),Me(p,"TYPE","xmlhttp"),Wn(l,p),l.u&&l.o&&Vs(p,l.u,l.o),l.O&&(l.g.H=l.O);var y=l.g;l=l.ba,y.M=1,y.A=hr(dn(p)),y.u=null,y.R=!0,jo(y,l)}r.Va=function(){this.C!=null&&(this.C=null,nn(this),Hn(this),nt(19))};function bs(l){l.C!=null&&(h.clearTimeout(l.C),l.C=null)}function Fs(l,p){var y=null;if(l.g==p){bs(l),Hi(l),l.g=null;var E=2}else if($o(l.h,p))y=p.G,Ui(l.h,p),E=1;else return;if(l.I!=0){if(p.o)if(E==1){y=p.u?p.u.length:0,p=Date.now()-p.F;var M=l.D;E=zr(),st(E,new Fo(E,y)),mr(l)}else xt(l);else if(M=p.m,M==3||M==0&&p.X>0||!(E==1&&Pl(l,p)||E==2&&Hn(l)))switch(y&&y.length>0&&(p=l.h,p.i=p.i.concat(y)),M){case 1:rn(l,5);break;case 4:rn(l,10);break;case 3:rn(l,6);break;default:rn(l,2)}}}function Us(l,p){let y=l.Qa+Math.floor(Math.random()*l.Za);return l.isActive()||(y*=2),y*p}function rn(l,p){if(l.j.info("Error code "+p),p==2){var y=_(l.bb,l),E=l.Ua;const M=!E;E=new bn(E||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||ji(E,"https"),hr(E),M?zn(E.toString(),y):Bn(E.toString(),y)}else nt(2);l.I=0,l.l&&l.l.pa(p),Gi(l),Ms(l)}r.bb=function(l){l?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function Gi(l){if(l.I=0,l.ja=[],l.l){const p=Zt(l.h);(p.length!=0||l.i.length!=0)&&($(l.ja,p),$(l.ja,l.i),l.h.i.length=0,U(l.i),l.i.length=0),l.l.oa()}}function ea(l,p,y){var E=y instanceof bn?dn(y):new bn(y);if(E.g!="")p&&(E.g=p+"."+E.g),Fn(E,E.u);else{var M=h.location;E=M.protocol,p=p?p+"."+M.hostname:M.hostname,M=+M.port;const j=new bn(null);E&&ji(j,E),p&&(j.g=p),M&&Fn(j,M),y&&(j.h=y),E=j}return y=l.G,p=l.wa,y&&p&&Me(E,y,p),Me(E,"VER",l.ka),Wn(l,E),E}function kl(l,p,y){if(p&&!l.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=l.Aa&&!l.ma?new ze(new dr({ab:y})):new ze(l.ma),p.Fa(l.L),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Nl(){}r=Nl.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function js(){}js.prototype.g=function(l,p){return new At(l,p)};function At(l,p){ut.call(this),this.g=new Os(p),this.l=l,this.h=p&&p.messageUrlParams||null,l=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(l?l["X-WebChannel-Content-Type"]=p.messageContentType:l={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(l?l["X-WebChannel-Client-Profile"]=p.sa:l={"X-WebChannel-Client-Profile":p.sa}),this.g.U=l,(l=p&&p.Qb)&&!R(l)&&(this.g.u=l),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!R(p)&&(this.g.G=p,l=this.h,l!==null&&p in l&&(l=this.h,p in l&&delete l[p])),this.j=new Xr(this)}T(At,ut),At.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){Ls(this.g)},At.prototype.o=function(l){var p=this.g;if(typeof l=="string"){var y={};y.__data__=l,l=y}else this.v&&(y={},y.__data__=Fr(l),l=y);p.i.push(new Oc(p.Ya++,l)),p.I==3&&mr(p)},At.prototype.N=function(){this.g.l=null,delete this.j,Ls(this.g),delete this.g,At.Z.N.call(this)};function Dl(l){Ss.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var p=l.__sm__;if(p){e:{for(const y in p){l=y;break e}l=void 0}(this.i=l)&&(l=this.i,p=p!==null&&l in p?p[l]:void 0),this.data=p}else this.data=l}T(Dl,Ss);function xl(){bo.call(this),this.status=1}T(xl,bo);function Xr(l){this.g=l}T(Xr,Nl),Xr.prototype.ra=function(){st(this.g,"a")},Xr.prototype.qa=function(l){st(this.g,new Dl(l))},Xr.prototype.pa=function(l){st(this.g,new xl)},Xr.prototype.oa=function(){st(this.g,"b")},js.prototype.createWebChannel=js.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,$_=function(){return new js},B_=function(){return zr()},z_=In,Nd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},qr.NO_ERROR=0,qr.TIMEOUT=8,qr.HTTP_ERROR=6,bu=qr,Wr.COMPLETE="complete",j_=Wr,fl.EventType=jr,jr.OPEN="a",jr.CLOSE="b",jr.ERROR="c",jr.MESSAGE="d",ut.prototype.listen=ut.prototype.J,Da=fl,ze.prototype.listenOnce=ze.prototype.K,ze.prototype.getLastError=ze.prototype.Ha,ze.prototype.getLastErrorCode=ze.prototype.ya,ze.prototype.getStatus=ze.prototype.ca,ze.prototype.getResponseJson=ze.prototype.La,ze.prototype.getResponseText=ze.prototype.la,ze.prototype.send=ze.prototype.ea,ze.prototype.setWithCredentials=ze.prototype.Fa,U_=ze}).apply(typeof Cu<"u"?Cu:typeof self<"u"?self:typeof window<"u"?window:{});const Bg="@firebase/firestore",$g="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ft.UNAUTHENTICATED=new Ft(null),Ft.GOOGLE_CREDENTIALS=new Ft("google-credentials-uid"),Ft.FIRST_PARTY=new Ft("first-party-uid"),Ft.MOCK_USER=new Ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Po="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=new Qd("@firebase/firestore");function uo(){return ms.logLevel}function ne(r,...e){if(ms.logLevel<=Re.DEBUG){const t=e.map(uf);ms.debug(`Firestore (${Po}): ${r}`,...t)}}function xr(r,...e){if(ms.logLevel<=Re.ERROR){const t=e.map(uf);ms.error(`Firestore (${Po}): ${r}`,...t)}}function vo(r,...e){if(ms.logLevel<=Re.WARN){const t=e.map(uf);ms.warn(`Firestore (${Po}): ${r}`,...t)}}function uf(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,q_(r,s,t)}function q_(r,e,t){let s=`FIRESTORE (${Po}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw xr(s),new Error(s)}function Fe(r,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,r||q_(e,o,s)}function ve(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends Lr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class jS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ft.UNAUTHENTICATED))}shutdown(){}}class zS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class BS{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Fe(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let u=new kr;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new kr,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const g=u;e.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},m=g=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(g=>m(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new kr)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Fe(typeof s.accessToken=="string",31837,{l:s}),new W_(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string",2055,{h:e}),new Ft(e)}}class $S{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class qS{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new $S(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class WS{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,un(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Fe(this.o===void 0,3512);const s=u=>{u.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,ne("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new qg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Fe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new qg(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HS(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=HS(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Ce(r,e){return r<e?-1:r>e?1:0}function Dd(r,e){const t=Math.min(r.length,e.length);for(let s=0;s<t;s++){const o=r.charAt(s),u=e.charAt(s);if(o!==u)return md(o)===md(u)?Ce(o,u):md(o)?1:-1}return Ce(r.length,e.length)}const GS=55296,KS=57343;function md(r){const e=r.charCodeAt(0);return e>=GS&&e<=KS}function Eo(r,e,t){return r.length===e.length&&r.every((s,o)=>t(s,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg="__name__";class er{constructor(e,t,s){t===void 0?t=0:t>e.length&&me(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&me(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return er.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof er?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=er.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Ce(e.length,t.length)}static compareSegments(e,t){const s=er.isNumericId(e),o=er.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?er.extractNumericId(e).compare(er.extractNumericId(t)):Dd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ei.fromString(e.substring(4,e.length-2))}}class qe extends er{construct(e,t,s){return new qe(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ee(B.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new qe(t)}static emptyPath(){return new qe([])}}const QS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class kt extends er{construct(e,t,s){return new kt(e,t,s)}static isValidIdentifier(e){return QS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),kt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Wg}static keyField(){return new kt([Wg])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ee(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new ee(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ee(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new ee(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new kt(t)}static emptyPath(){return new kt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.path=e}static fromPath(e){return new ue(qe.fromString(e))}static fromName(e){return new ue(qe.fromString(e).popFirst(5))}static empty(){return new ue(qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return qe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ue(new qe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H_(r,e,t){if(!t)throw new ee(B.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function YS(r,e,t,s){if(e===!0&&s===!0)throw new ee(B.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Hg(r){if(!ue.isDocumentKey(r))throw new ee(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Gg(r){if(ue.isDocumentKey(r))throw new ee(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function G_(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function pc(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":me(12329,{type:typeof r})}function Jt(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ee(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=pc(r);throw new ee(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(r,e){const t={typeString:r};return e&&(t.value=e),t}function rl(r,e){if(!G_(r))throw new ee(B.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){t=`JSON missing required field: '${s}'`;break}const h=r[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new ee(B.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg=-62135596800,Qg=1e6;class We{static now(){return We.fromMillis(Date.now())}static fromDate(e){return We.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Qg);return new We(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ee(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ee(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Kg)throw new ee(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Qg}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:We._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(rl(e,We._jsonSchema))return new We(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Kg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}We._jsonSchemaVersion="firestore/timestamp/1.0",We._jsonSchema={type:pt("string",We._jsonSchemaVersion),seconds:pt("number"),nanoseconds:pt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{static fromTimestamp(e){return new ye(e)}static min(){return new ye(new We(0,0))}static max(){return new ye(new We(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa=-1;function XS(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=ye.fromTimestamp(s===1e9?new We(t+1,0):new We(t,s));return new Ti(o,ue.empty(),e)}function JS(r){return new Ti(r.readTime,r.key,Wa)}class Ti{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ti(ye.min(),ue.empty(),Wa)}static max(){return new Ti(ye.max(),ue.empty(),Wa)}}function ZS(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=ue.comparator(r.documentKey,e.documentKey),t!==0?t:Ce(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class t1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ko(r){if(r.code!==B.FAILED_PRECONDITION||r.message!==e1)throw r;ne("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&me(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new q((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof q?t:q.resolve(t)}catch(t){return q.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):q.reject(t)}static resolve(e){return new q((t,s)=>{t(e)})}static reject(e){return new q((t,s)=>{s(e)})}static waitFor(e){return new q((t,s)=>{let o=0,u=0,h=!1;e.forEach(m=>{++o,m.next(()=>{++u,h&&u===o&&t()},g=>s(g))}),h=!0,u===o&&t()})}static or(e){let t=q.resolve(!1);for(const s of e)t=t.next(o=>o?q.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,u)=>{s.push(t.call(this,o,u))}),this.waitFor(s)}static mapArray(e,t){return new q((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let g=0;g<u;g++){const _=g;t(e[_]).next(w=>{h[_]=w,++m,m===u&&s(h)},w=>o(w))}})}static doWhile(e,t){return new q((s,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):s()};u()})}}function n1(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function No(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}mc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf=-1;function gc(r){return r==null}function Xu(r){return r===0&&1/r==-1/0}function r1(r){return typeof r=="number"&&Number.isInteger(r)&&!Xu(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_="";function i1(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Yg(e)),e=s1(r.get(t),e);return Yg(e)}function s1(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":t+="";break;case K_:t+="";break;default:t+=u}}return t}function Yg(r){return r+K_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Di(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Q_(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,t){this.comparator=e,this.root=t||Pt.EMPTY}insert(e,t){return new tt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Pt.BLACK,null,null))}remove(e){return new tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pu(this.root,e,this.comparator,!0)}}class Pu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Pt.RED,this.left=o??Pt.EMPTY,this.right=u??Pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Pt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Pt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw me(43730,{key:this.key,value:this.value});if(this.right.isRed())throw me(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw me(27949);return e+(this.isRed()?0:1)}}Pt.EMPTY=null,Pt.RED=!0,Pt.BLACK=!1;Pt.EMPTY=new class{constructor(){this.size=0}get key(){throw me(57766)}get value(){throw me(16141)}get color(){throw me(16727)}get left(){throw me(29726)}get right(){throw me(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new Pt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.comparator=e,this.data=new tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Jg(this.data.getIterator())}getIteratorFrom(e){return new Jg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof yt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new yt(this.comparator);return t.data=e,t}}class Jg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.fields=e,e.sort(kt.comparator)}static empty(){return new cn([])}unionWith(e){let t=new yt(kt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new cn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Eo(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new Y_("Invalid base64 string: "+u):u}}(e);return new Nt(t)}static fromUint8Array(e){const t=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(e);return new Nt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Nt.EMPTY_BYTE_STRING=new Nt("");const o1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ii(r){if(Fe(!!r,39018),typeof r=="string"){let e=0;const t=o1.exec(r);if(Fe(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:lt(r.seconds),nanos:lt(r.nanos)}}function lt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Si(r){return typeof r=="string"?Nt.fromBase64String(r):Nt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_="server_timestamp",J_="__type__",Z_="__previous_value__",ev="__local_write_time__";function df(r){var t,s;return((s=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[J_])==null?void 0:s.stringValue)===X_}function yc(r){const e=r.mapValue.fields[Z_];return df(e)?yc(e):e}function Ha(r){const e=Ii(r.mapValue.fields[ev].timestampValue);return new We(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e,t,s,o,u,h,m,g,_,w){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=w}}const Ju="(default)";class Ga{constructor(e,t){this.projectId=e,this.database=t||Ju}static empty(){return new Ga("","")}get isDefaultDatabase(){return this.database===Ju}isEqual(e){return e instanceof Ga&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv="__type__",l1="__max__",ku={mapValue:{}},nv="__vector__",Zu="value";function Ai(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?df(r)?4:c1(r)?9007199254740991:u1(r)?10:11:me(28295,{value:r})}function or(r,e){if(r===e)return!0;const t=Ai(r);if(t!==Ai(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Ha(r).isEqual(Ha(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=Ii(o.timestampValue),m=Ii(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(o,u){return Si(o.bytesValue).isEqual(Si(u.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(o,u){return lt(o.geoPointValue.latitude)===lt(u.geoPointValue.latitude)&&lt(o.geoPointValue.longitude)===lt(u.geoPointValue.longitude)}(r,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return lt(o.integerValue)===lt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=lt(o.doubleValue),m=lt(u.doubleValue);return h===m?Xu(h)===Xu(m):isNaN(h)&&isNaN(m)}return!1}(r,e);case 9:return Eo(r.arrayValue.values||[],e.arrayValue.values||[],or);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(Xg(h)!==Xg(m))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(m[g]===void 0||!or(h[g],m[g])))return!1;return!0}(r,e);default:return me(52216,{left:r})}}function Ka(r,e){return(r.values||[]).find(t=>or(t,e))!==void 0}function wo(r,e){if(r===e)return 0;const t=Ai(r),s=Ai(e);if(t!==s)return Ce(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ce(r.booleanValue,e.booleanValue);case 2:return function(u,h){const m=lt(u.integerValue||u.doubleValue),g=lt(h.integerValue||h.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1}(r,e);case 3:return Zg(r.timestampValue,e.timestampValue);case 4:return Zg(Ha(r),Ha(e));case 5:return Dd(r.stringValue,e.stringValue);case 6:return function(u,h){const m=Si(u),g=Si(h);return m.compareTo(g)}(r.bytesValue,e.bytesValue);case 7:return function(u,h){const m=u.split("/"),g=h.split("/");for(let _=0;_<m.length&&_<g.length;_++){const w=Ce(m[_],g[_]);if(w!==0)return w}return Ce(m.length,g.length)}(r.referenceValue,e.referenceValue);case 8:return function(u,h){const m=Ce(lt(u.latitude),lt(h.latitude));return m!==0?m:Ce(lt(u.longitude),lt(h.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return ey(r.arrayValue,e.arrayValue);case 10:return function(u,h){var S,U,$,W;const m=u.fields||{},g=h.fields||{},_=(S=m[Zu])==null?void 0:S.arrayValue,w=(U=g[Zu])==null?void 0:U.arrayValue,T=Ce((($=_==null?void 0:_.values)==null?void 0:$.length)||0,((W=w==null?void 0:w.values)==null?void 0:W.length)||0);return T!==0?T:ey(_,w)}(r.mapValue,e.mapValue);case 11:return function(u,h){if(u===ku.mapValue&&h===ku.mapValue)return 0;if(u===ku.mapValue)return 1;if(h===ku.mapValue)return-1;const m=u.fields||{},g=Object.keys(m),_=h.fields||{},w=Object.keys(_);g.sort(),w.sort();for(let T=0;T<g.length&&T<w.length;++T){const S=Dd(g[T],w[T]);if(S!==0)return S;const U=wo(m[g[T]],_[w[T]]);if(U!==0)return U}return Ce(g.length,w.length)}(r.mapValue,e.mapValue);default:throw me(23264,{he:t})}}function Zg(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Ce(r,e);const t=Ii(r),s=Ii(e),o=Ce(t.seconds,s.seconds);return o!==0?o:Ce(t.nanos,s.nanos)}function ey(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=wo(t[o],s[o]);if(u)return u}return Ce(t.length,s.length)}function To(r){return xd(r)}function xd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const s=Ii(t);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return Si(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return ue.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=xd(u);return s+"]"}(r.arrayValue):"mapValue"in r?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${xd(t.fields[h])}`;return o+"}"}(r.mapValue):me(61005,{value:r})}function Fu(r){switch(Ai(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=yc(r);return e?16+Fu(e):16;case 5:return 2*r.stringValue.length;case 6:return Si(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+Fu(u),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return Di(s.fields,(u,h)=>{o+=u.length+Fu(h)}),o}(r.mapValue);default:throw me(13486,{value:r})}}function ty(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Vd(r){return!!r&&"integerValue"in r}function ff(r){return!!r&&"arrayValue"in r}function ny(r){return!!r&&"nullValue"in r}function ry(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Uu(r){return!!r&&"mapValue"in r}function u1(r){var t,s;return((s=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[tv])==null?void 0:s.stringValue)===nv}function Fa(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return Di(r.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Fa(s)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Fa(r.arrayValue.values[t]);return e}return{...r}}function c1(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===l1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.value=e}static empty(){return new Xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Uu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Fa(t)}setAll(e){let t=kt.emptyPath(),s={},o=[];e.forEach((h,m)=>{if(!t.isImmediateParentOf(m)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Fa(h):o.push(m.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Uu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return or(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Uu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Di(t,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new Xt(Fa(this.value))}}function rv(r){const e=[];return Di(r.fields,(t,s)=>{const o=new kt([t]);if(Uu(s)){const u=rv(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)}),new cn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Ut(e,0,ye.min(),ye.min(),ye.min(),Xt.empty(),0)}static newFoundDocument(e,t,s,o){return new Ut(e,1,t,ye.min(),s,o,0)}static newNoDocument(e,t){return new Ut(e,2,t,ye.min(),ye.min(),Xt.empty(),0)}static newUnknownDocument(e,t){return new Ut(e,3,t,ye.min(),ye.min(),Xt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ye.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ye.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,t){this.position=e,this.inclusive=t}}function iy(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const u=e[o],h=r.position[o];if(u.field.isKeyField()?s=ue.comparator(ue.fromName(h.referenceValue),t.key):s=wo(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function sy(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!or(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,t="asc"){this.field=e,this.dir=t}}function h1(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{}class ft extends iv{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new f1(e,t,s):t==="array-contains"?new g1(e,s):t==="in"?new y1(e,s):t==="not-in"?new _1(e,s):t==="array-contains-any"?new v1(e,s):new ft(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new p1(e,s):new m1(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(wo(t,this.value)):t!==null&&Ai(this.value)===Ai(t)&&this.matchesComparison(wo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class On extends iv{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new On(e,t)}matches(e){return sv(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function sv(r){return r.op==="and"}function ov(r){return d1(r)&&sv(r)}function d1(r){for(const e of r.filters)if(e instanceof On)return!1;return!0}function Od(r){if(r instanceof ft)return r.field.canonicalString()+r.op.toString()+To(r.value);if(ov(r))return r.filters.map(e=>Od(e)).join(",");{const e=r.filters.map(t=>Od(t)).join(",");return`${r.op}(${e})`}}function av(r,e){return r instanceof ft?function(s,o){return o instanceof ft&&s.op===o.op&&s.field.isEqual(o.field)&&or(s.value,o.value)}(r,e):r instanceof On?function(s,o){return o instanceof On&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,h,m)=>u&&av(h,o.filters[m]),!0):!1}(r,e):void me(19439)}function lv(r){return r instanceof ft?function(t){return`${t.field.canonicalString()} ${t.op} ${To(t.value)}`}(r):r instanceof On?function(t){return t.op.toString()+" {"+t.getFilters().map(lv).join(" ,")+"}"}(r):"Filter"}class f1 extends ft{constructor(e,t,s){super(e,t,s),this.key=ue.fromName(s.referenceValue)}matches(e){const t=ue.comparator(e.key,this.key);return this.matchesComparison(t)}}class p1 extends ft{constructor(e,t){super(e,"in",t),this.keys=uv("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class m1 extends ft{constructor(e,t){super(e,"not-in",t),this.keys=uv("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function uv(r,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(s=>ue.fromName(s.referenceValue))}class g1 extends ft{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ff(t)&&Ka(t.arrayValue,this.value)}}class y1 extends ft{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ka(this.value.arrayValue,t)}}class _1 extends ft{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ka(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ka(this.value.arrayValue,t)}}class v1 extends ft{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ff(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Ka(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.Te=null}}function oy(r,e=null,t=[],s=[],o=null,u=null,h=null){return new E1(r,e,t,s,o,u,h)}function pf(r){const e=ve(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Od(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),gc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>To(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>To(s)).join(",")),e.Te=t}return e.Te}function mf(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!h1(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!av(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!sy(r.startAt,e.startAt)&&sy(r.endAt,e.endAt)}function Ld(r){return ue.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=g,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function w1(r,e,t,s,o,u,h,m){return new il(r,e,t,s,o,u,h,m)}function _c(r){return new il(r)}function ay(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function cv(r){return r.collectionGroup!==null}function Ua(r){const e=ve(r);if(e.Ie===null){e.Ie=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new yt(kt.comparator);return h.filters.forEach(g=>{g.getFlattenedFilters().forEach(_=>{_.isInequality()&&(m=m.add(_.field))})}),m})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new tc(u,s))}),t.has(kt.keyField().canonicalString())||e.Ie.push(new tc(kt.keyField(),s))}return e.Ie}function nr(r){const e=ve(r);return e.Ee||(e.Ee=T1(e,Ua(r))),e.Ee}function T1(r,e){if(r.limitType==="F")return oy(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new tc(o.field,u)});const t=r.endAt?new ec(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new ec(r.startAt.position,r.startAt.inclusive):null;return oy(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function Md(r,e){const t=r.filters.concat([e]);return new il(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function bd(r,e,t){return new il(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function vc(r,e){return mf(nr(r),nr(e))&&r.limitType===e.limitType}function hv(r){return`${pf(nr(r))}|lt:${r.limitType}`}function co(r){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>lv(o)).join(", ")}]`),gc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>To(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>To(o)).join(",")),`Target(${s})`}(nr(r))}; limitType=${r.limitType})`}function Ec(r,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):ue.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(r,e)&&function(s,o){for(const u of Ua(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(r,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(r,e)&&function(s,o){return!(s.startAt&&!function(h,m,g){const _=iy(h,m,g);return h.inclusive?_<=0:_<0}(s.startAt,Ua(s),o)||s.endAt&&!function(h,m,g){const _=iy(h,m,g);return h.inclusive?_>=0:_>0}(s.endAt,Ua(s),o))}(r,e)}function I1(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function dv(r){return(e,t)=>{let s=!1;for(const o of Ua(r)){const u=S1(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function S1(r,e,t){const s=r.field.isKeyField()?ue.comparator(e.key,t.key):function(u,h,m){const g=h.data.field(u),_=m.data.field(u);return g!==null&&_!==null?wo(g,_):me(42886)}(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return me(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Di(this.inner,(t,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return Q_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A1=new tt(ue.comparator);function Vr(){return A1}const fv=new tt(ue.comparator);function xa(...r){let e=fv;for(const t of r)e=e.insert(t.key,t);return e}function pv(r){let e=fv;return r.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function ls(){return ja()}function mv(){return ja()}function ja(){return new ys(r=>r.toString(),(r,e)=>r.isEqual(e))}const R1=new tt(ue.comparator),C1=new yt(ue.comparator);function Pe(...r){let e=C1;for(const t of r)e=e.add(t);return e}const P1=new yt(Ce);function k1(){return P1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xu(e)?"-0":e}}function gv(r){return{integerValue:""+r}}function N1(r,e){return r1(e)?gv(e):gf(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(){this._=void 0}}function D1(r,e,t){return r instanceof nc?function(o,u){const h={fields:{[J_]:{stringValue:X_},[ev]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&df(u)&&(u=yc(u)),u&&(h.fields[Z_]=u),{mapValue:h}}(t,e):r instanceof Qa?_v(r,e):r instanceof Ya?vv(r,e):function(o,u){const h=yv(o,u),m=ly(h)+ly(o.Ae);return Vd(h)&&Vd(o.Ae)?gv(m):gf(o.serializer,m)}(r,e)}function x1(r,e,t){return r instanceof Qa?_v(r,e):r instanceof Ya?vv(r,e):t}function yv(r,e){return r instanceof rc?function(s){return Vd(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class nc extends wc{}class Qa extends wc{constructor(e){super(),this.elements=e}}function _v(r,e){const t=Ev(e);for(const s of r.elements)t.some(o=>or(o,s))||t.push(s);return{arrayValue:{values:t}}}class Ya extends wc{constructor(e){super(),this.elements=e}}function vv(r,e){let t=Ev(e);for(const s of r.elements)t=t.filter(o=>!or(o,s));return{arrayValue:{values:t}}}class rc extends wc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function ly(r){return lt(r.integerValue||r.doubleValue)}function Ev(r){return ff(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function V1(r,e){return r.field.isEqual(e.field)&&function(s,o){return s instanceof Qa&&o instanceof Qa||s instanceof Ya&&o instanceof Ya?Eo(s.elements,o.elements,or):s instanceof rc&&o instanceof rc?or(s.Ae,o.Ae):s instanceof nc&&o instanceof nc}(r.transform,e.transform)}class O1{constructor(e,t){this.version=e,this.transformResults=t}}class En{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new En}static exists(e){return new En(void 0,e)}static updateTime(e){return new En(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ju(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Tc{}function wv(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new yf(r.key,En.none()):new sl(r.key,r.data,En.none());{const t=r.data,s=Xt.empty();let o=new yt(kt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new xi(r.key,s,new cn(o.toArray()),En.none())}}function L1(r,e,t){r instanceof sl?function(o,u,h){const m=o.value.clone(),g=cy(o.fieldTransforms,u,h.transformResults);m.setAll(g),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(r,e,t):r instanceof xi?function(o,u,h){if(!ju(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=cy(o.fieldTransforms,u,h.transformResults),g=u.data;g.setAll(Tv(o)),g.setAll(m),u.convertToFoundDocument(h.version,g).setHasCommittedMutations()}(r,e,t):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function za(r,e,t,s){return r instanceof sl?function(u,h,m,g){if(!ju(u.precondition,h))return m;const _=u.value.clone(),w=hy(u.fieldTransforms,g,h);return _.setAll(w),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null}(r,e,t,s):r instanceof xi?function(u,h,m,g){if(!ju(u.precondition,h))return m;const _=hy(u.fieldTransforms,g,h),w=h.data;return w.setAll(Tv(u)),w.setAll(_),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(T=>T.field))}(r,e,t,s):function(u,h,m){return ju(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m}(r,e,t)}function M1(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),u=yv(s.transform,o||null);u!=null&&(t===null&&(t=Xt.empty()),t.set(s.field,u))}return t||null}function uy(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Eo(s,o,(u,h)=>V1(u,h))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class sl extends Tc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class xi extends Tc{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function Tv(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}}),e}function cy(r,e,t){const s=new Map;Fe(r.length===t.length,32656,{Re:t.length,Ve:r.length});for(let o=0;o<t.length;o++){const u=r[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,x1(h,m,t[o]))}return s}function hy(r,e,t){const s=new Map;for(const o of r){const u=o.transform,h=t.data.field(o.field);s.set(o.field,D1(u,h,e))}return s}class yf extends Tc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class b1 extends Tc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&L1(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=za(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=za(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=mv();return this.mutations.forEach(o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const g=wv(h,m);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(ye.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Pe())}isEqual(e){return this.batchId===e.batchId&&Eo(this.mutations,e.mutations,(t,s)=>uy(t,s))&&Eo(this.baseMutations,e.baseMutations,(t,s)=>uy(t,s))}}class _f{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Fe(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=function(){return R1}();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new _f(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dt,xe;function z1(r){switch(r){case B.OK:return me(64938);case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0;default:return me(15467,{code:r})}}function Iv(r){if(r===void 0)return xr("GRPC error has no .code"),B.UNKNOWN;switch(r){case dt.OK:return B.OK;case dt.CANCELLED:return B.CANCELLED;case dt.UNKNOWN:return B.UNKNOWN;case dt.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case dt.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case dt.INTERNAL:return B.INTERNAL;case dt.UNAVAILABLE:return B.UNAVAILABLE;case dt.UNAUTHENTICATED:return B.UNAUTHENTICATED;case dt.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case dt.NOT_FOUND:return B.NOT_FOUND;case dt.ALREADY_EXISTS:return B.ALREADY_EXISTS;case dt.PERMISSION_DENIED:return B.PERMISSION_DENIED;case dt.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case dt.ABORTED:return B.ABORTED;case dt.OUT_OF_RANGE:return B.OUT_OF_RANGE;case dt.UNIMPLEMENTED:return B.UNIMPLEMENTED;case dt.DATA_LOSS:return B.DATA_LOSS;default:return me(39323,{code:r})}}(xe=dt||(dt={}))[xe.OK=0]="OK",xe[xe.CANCELLED=1]="CANCELLED",xe[xe.UNKNOWN=2]="UNKNOWN",xe[xe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",xe[xe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",xe[xe.NOT_FOUND=5]="NOT_FOUND",xe[xe.ALREADY_EXISTS=6]="ALREADY_EXISTS",xe[xe.PERMISSION_DENIED=7]="PERMISSION_DENIED",xe[xe.UNAUTHENTICATED=16]="UNAUTHENTICATED",xe[xe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",xe[xe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",xe[xe.ABORTED=10]="ABORTED",xe[xe.OUT_OF_RANGE=11]="OUT_OF_RANGE",xe[xe.UNIMPLEMENTED=12]="UNIMPLEMENTED",xe[xe.INTERNAL=13]="INTERNAL",xe[xe.UNAVAILABLE=14]="UNAVAILABLE",xe[xe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B1(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1=new Ei([4294967295,4294967295],0);function dy(r){const e=B1().encode(r),t=new F_;return t.update(e),new Uint8Array(t.digest())}function fy(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new Ei([t,s],0),new Ei([o,u],0)]}class vf{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Va(`Invalid padding: ${t}`);if(s<0)throw new Va(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Va(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Va(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Ei.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(Ei.fromNumber(s)));return o.compare($1)===1&&(o=new Ei([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=dy(e),[s,o]=fy(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);if(!this.we(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new vf(u,o,t);return s.forEach(m=>h.insert(m)),h}insert(e){if(this.ge===0)return;const t=dy(e),[s,o]=fy(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);this.Se(h)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Va extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,ol.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Ic(ye.min(),o,new tt(Ce),Vr(),Pe())}}class ol{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new ol(s,t,Pe(),Pe(),Pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,t,s,o){this.be=e,this.removedTargetIds=t,this.key=s,this.De=o}}class Sv{constructor(e,t){this.targetId=e,this.Ce=t}}class Av{constructor(e,t,s=Nt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class py{constructor(){this.ve=0,this.Fe=my(),this.Me=Nt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Pe(),t=Pe(),s=Pe();return this.Fe.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:me(38017,{changeType:u})}}),new ol(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=my()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Fe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class q1{constructor(e){this.Ge=e,this.ze=new Map,this.je=Vr(),this.Je=Nu(),this.He=Nu(),this.Ye=new tt(Ce)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:me(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((s,o)=>{this.rt(o)&&t(o)})}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const u=o.target;if(Ld(u))if(s===0){const h=new ue(u.path);this.et(t,h,Ut.newNoDocument(h,ye.min()))}else Fe(s===1,20013,{expectedCount:s});else{const h=this._t(t);if(h!==s){const m=this.ut(e),g=m?this.ct(m,e,h):1;if(g!==0){this.it(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,_)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=Si(s).toUint8Array()}catch(g){if(g instanceof Y_)return vo("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new vf(h,o,u)}catch(g){return vo(g instanceof Va?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.ge===0?null:m}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach(u=>{const h=this.Ge.ht(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.et(t,u,null),o++)}),o}Tt(e){const t=new Map;this.ze.forEach((u,h)=>{const m=this.ot(h);if(m){if(u.current&&Ld(m.target)){const g=new ue(m.target.path);this.It(g).has(h)||this.Et(h,g)||this.et(h,g,Ut.newNoDocument(g,e))}u.Be&&(t.set(h,u.ke()),u.qe())}});let s=Pe();this.He.forEach((u,h)=>{let m=!0;h.forEachWhile(g=>{const _=this.ot(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.je.forEach((u,h)=>h.setReadTime(e));const o=new Ic(e,t,this.Ye,this.je,s);return this.je=Vr(),this.Je=Nu(),this.He=Nu(),this.Ye=new tt(Ce),o}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.Qe(t,1):o.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new py,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new yt(Ce),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new yt(Ce),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||ne("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new py),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Nu(){return new tt(ue.comparator)}function my(){return new tt(ue.comparator)}const W1={asc:"ASCENDING",desc:"DESCENDING"},H1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},G1={and:"AND",or:"OR"};class K1{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Fd(r,e){return r.useProto3Json||gc(e)?e:{value:e}}function ic(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Rv(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function Q1(r,e){return ic(r,e.toTimestamp())}function rr(r){return Fe(!!r,49232),ye.fromTimestamp(function(t){const s=Ii(t);return new We(s.seconds,s.nanos)}(r))}function Ef(r,e){return Ud(r,e).canonicalString()}function Ud(r,e){const t=function(o){return new qe(["projects",o.projectId,"databases",o.database])}(r).child("documents");return e===void 0?t:t.child(e)}function Cv(r){const e=qe.fromString(r);return Fe(xv(e),10190,{key:e.toString()}),e}function jd(r,e){return Ef(r.databaseId,e.path)}function gd(r,e){const t=Cv(e);if(t.get(1)!==r.databaseId.projectId)throw new ee(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new ee(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new ue(kv(t))}function Pv(r,e){return Ef(r.databaseId,e)}function Y1(r){const e=Cv(r);return e.length===4?qe.emptyPath():kv(e)}function zd(r){return new qe(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function kv(r){return Fe(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function gy(r,e,t){return{name:jd(r,e),fields:t.value.mapValue.fields}}function X1(r,e){let t;if("targetChange"in e){e.targetChange;const s=function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:me(39313,{state:_})}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(_,w){return _.useProto3Json?(Fe(w===void 0||typeof w=="string",58123),Nt.fromBase64String(w||"")):(Fe(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),Nt.fromUint8Array(w||new Uint8Array))}(r,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&function(_){const w=_.code===void 0?B.UNKNOWN:Iv(_.code);return new ee(w,_.message||"")}(h);t=new Av(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=gd(r,s.document.name),u=rr(s.document.updateTime),h=s.document.createTime?rr(s.document.createTime):ye.min(),m=new Xt({mapValue:{fields:s.document.fields}}),g=Ut.newFoundDocument(o,u,h,m),_=s.targetIds||[],w=s.removedTargetIds||[];t=new zu(_,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=gd(r,s.document),u=s.readTime?rr(s.readTime):ye.min(),h=Ut.newNoDocument(o,u),m=s.removedTargetIds||[];t=new zu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=gd(r,s.document),u=s.removedTargetIds||[];t=new zu([],u,o,null)}else{if(!("filter"in e))return me(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new j1(o,u),m=s.targetId;t=new Sv(m,h)}}return t}function J1(r,e){let t;if(e instanceof sl)t={update:gy(r,e.key,e.value)};else if(e instanceof yf)t={delete:jd(r,e.key)};else if(e instanceof xi)t={update:gy(r,e.key,e.data),updateMask:aA(e.fieldMask)};else{if(!(e instanceof b1))return me(16599,{Vt:e.type});t={verify:jd(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(u,h){const m=h.transform;if(m instanceof nc)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Qa)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Ya)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof rc)return{fieldPath:h.field.canonicalString(),increment:m.Ae};throw me(20930,{transform:h.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:Q1(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:me(27497)}(r,e.precondition)),t}function Z1(r,e){return r&&r.length>0?(Fe(e!==void 0,14353),r.map(t=>function(o,u){let h=o.updateTime?rr(o.updateTime):rr(u);return h.isEqual(ye.min())&&(h=rr(u)),new O1(h,o.transformResults||[])}(t,e))):[]}function eA(r,e){return{documents:[Pv(r,e.path)]}}function tA(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Pv(r,o);const u=function(_){if(_.length!==0)return Dv(On.create(_,"and"))}(e.filters);u&&(t.structuredQuery.where=u);const h=function(_){if(_.length!==0)return _.map(w=>function(S){return{field:ho(S.field),direction:iA(S.dir)}}(w))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=Fd(r,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=function(_){return{before:_.inclusive,values:_.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(_){return{before:!_.inclusive,values:_.position}}(e.endAt)),{ft:t,parent:o}}function nA(r){let e=Y1(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Fe(s===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let u=[];t.where&&(u=function(T){const S=Nv(T);return S instanceof On&&ov(S)?S.getFilters():[S]}(t.where));let h=[];t.orderBy&&(h=function(T){return T.map(S=>function($){return new tc(fo($.field),function(z){switch(z){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}($.direction))}(S))}(t.orderBy));let m=null;t.limit&&(m=function(T){let S;return S=typeof T=="object"?T.value:T,gc(S)?null:S}(t.limit));let g=null;t.startAt&&(g=function(T){const S=!!T.before,U=T.values||[];return new ec(U,S)}(t.startAt));let _=null;return t.endAt&&(_=function(T){const S=!T.before,U=T.values||[];return new ec(U,S)}(t.endAt)),w1(e,o,h,u,m,"F",g,_)}function rA(r,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me(28987,{purpose:o})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Nv(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=fo(t.unaryFilter.field);return ft.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=fo(t.unaryFilter.field);return ft.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=fo(t.unaryFilter.field);return ft.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=fo(t.unaryFilter.field);return ft.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return me(61313);default:return me(60726)}}(r):r.fieldFilter!==void 0?function(t){return ft.create(fo(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return me(58110);default:return me(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return On.create(t.compositeFilter.filters.map(s=>Nv(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return me(1026)}}(t.compositeFilter.op))}(r):me(30097,{filter:r})}function iA(r){return W1[r]}function sA(r){return H1[r]}function oA(r){return G1[r]}function ho(r){return{fieldPath:r.canonicalString()}}function fo(r){return kt.fromServerFormat(r.fieldPath)}function Dv(r){return r instanceof ft?function(t){if(t.op==="=="){if(ry(t.value))return{unaryFilter:{field:ho(t.field),op:"IS_NAN"}};if(ny(t.value))return{unaryFilter:{field:ho(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ry(t.value))return{unaryFilter:{field:ho(t.field),op:"IS_NOT_NAN"}};if(ny(t.value))return{unaryFilter:{field:ho(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ho(t.field),op:sA(t.op),value:t.value}}}(r):r instanceof On?function(t){const s=t.getFilters().map(o=>Dv(o));return s.length===1?s[0]:{compositeFilter:{op:oA(t.op),filters:s}}}(r):me(54877,{filter:r})}function aA(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function xv(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,t,s,o,u=ye.min(),h=ye.min(),m=Nt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new gi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new gi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e){this.yt=e}}function uA(r){const e=nA({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?bd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(){this.Cn=new hA}addToCollectionParentIndex(e,t){return this.Cn.add(t),q.resolve()}getCollectionParents(e,t){return q.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return q.resolve()}deleteFieldIndex(e,t){return q.resolve()}deleteAllFieldIndexes(e){return q.resolve()}createTargetIndexes(e,t){return q.resolve()}getDocumentsMatchingTarget(e,t){return q.resolve(null)}getIndexType(e,t){return q.resolve(0)}getFieldIndexes(e,t){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,t){return q.resolve(Ti.min())}getMinOffsetFromCollectionGroup(e,t){return q.resolve(Ti.min())}updateCollectionGroup(e,t,s){return q.resolve()}updateIndexEntries(e,t){return q.resolve()}}class hA{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new yt(qe.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new yt(qe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Vv=41943040;class Yt{static withCacheSize(e){return new Yt(e,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yt.DEFAULT_COLLECTION_PERCENTILE=10,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Yt.DEFAULT=new Yt(Vv,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Yt.DISABLED=new Yt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Io(0)}static cr(){return new Io(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y="LruGarbageCollector",dA=1048576;function vy([r,e],[t,s]){const o=Ce(r,t);return o===0?Ce(e,s):o}class fA{constructor(e){this.Ir=e,this.buffer=new yt(vy),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();vy(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class pA{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ne(_y,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){No(t)?ne(_y,"Ignoring IndexedDB error during garbage collection: ",t):await ko(t)}await this.Vr(3e5)})}}class mA{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return q.resolve(mc.ce);const s=new fA(t);return this.mr.forEachTarget(e,o=>s.Ar(o.sequenceNumber)).next(()=>this.mr.pr(e,o=>s.Ar(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),q.resolve(yy)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),yy):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,o,u,h,m,g,_;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,h=Date.now(),this.nthSequenceNumber(e,o))).next(T=>(s=T,m=Date.now(),this.removeTargets(e,s,t))).next(T=>(u=T,g=Date.now(),this.removeOrphanedDocuments(e,s))).next(T=>(_=Date.now(),uo()<=Re.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(g-m)+`ms
	Removed ${T} documents in `+(_-g)+`ms
Total Duration: ${_-w}ms`),q.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:T})))}}function gA(r,e){return new mA(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(){this.changes=new ys(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ut.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?q.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&za(s.mutation,o,cn.empty(),We.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Pe()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Pe()){const o=ls();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(u=>{let h=xa();return u.forEach((m,g)=>{h=h.insert(m,g.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=ls();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Pe()))}populateOverlays(e,t,s){const o=[];return s.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((h,m)=>{t.set(h,m)})})}computeViews(e,t,s,o){let u=Vr();const h=ja(),m=function(){return ja()}();return t.forEach((g,_)=>{const w=s.get(_.key);o.has(_.key)&&(w===void 0||w.mutation instanceof xi)?u=u.insert(_.key,_):w!==void 0?(h.set(_.key,w.mutation.getFieldMask()),za(w.mutation,_,w.mutation.getFieldMask(),We.now())):h.set(_.key,cn.empty())}),this.recalculateAndSaveOverlays(e,u).next(g=>(g.forEach((_,w)=>h.set(_,w)),t.forEach((_,w)=>m.set(_,new _A(w,h.get(_)??null))),m))}recalculateAndSaveOverlays(e,t){const s=ja();let o=new tt((h,m)=>h-m),u=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const m of h)m.keys().forEach(g=>{const _=t.get(g);if(_===null)return;let w=s.get(g)||cn.empty();w=m.applyToLocalView(_,w),s.set(g,w);const T=(o.get(m.batchId)||Pe()).add(g);o=o.insert(m.batchId,T)})}).next(()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),_=g.key,w=g.value,T=mv();w.forEach(S=>{if(!u.has(S)){const U=wv(t.get(S),s.get(S));U!==null&&T.set(S,U),u=u.add(S)}}),h.push(this.documentOverlayCache.saveOverlays(e,_,T))}return q.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return ue.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):cv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):q.resolve(ls());let m=Wa,g=u;return h.next(_=>q.forEach(_,(w,T)=>(m<T.largestBatchId&&(m=T.largestBatchId),u.get(w)?q.resolve():this.remoteDocumentCache.getEntry(e,w).next(S=>{g=g.insert(w,S)}))).next(()=>this.populateOverlays(e,_,u)).next(()=>this.computeViews(e,g,_,Pe())).next(w=>({batchId:m,changes:pv(w)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ue(t)).next(s=>{let o=xa();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=xa();return this.indexManager.getCollectionParents(e,u).next(m=>q.forEach(m,g=>{const _=function(T,S){return new il(S,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next(w=>{w.forEach((T,S)=>{h=h.insert(T,S)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o))).next(h=>{u.forEach((g,_)=>{const w=_.getKey();h.get(w)===null&&(h=h.insert(w,Ut.newInvalidDocument(w)))});let m=xa();return h.forEach((g,_)=>{const w=u.get(g);w!==void 0&&za(w.mutation,_,cn.empty(),We.now()),Ec(t,_)&&(m=m.insert(g,_))}),m})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return q.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:rr(o.createTime)}}(t)),q.resolve()}getNamedQuery(e,t){return q.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(o){return{name:o.name,query:uA(o.bundledQuery),readTime:rr(o.readTime)}}(t)),q.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(){this.overlays=new tt(ue.comparator),this.qr=new Map}getOverlay(e,t){return q.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ls();return q.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,u)=>{this.St(e,t,u)}),q.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.qr.delete(s)),q.resolve()}getOverlaysForCollection(e,t,s){const o=ls(),u=t.length+1,h=new ue(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const g=m.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return q.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new tt((_,w)=>_-w);const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let w=u.get(_.largestBatchId);w===null&&(w=ls(),u=u.insert(_.largestBatchId,w)),w.set(_.getKey(),_)}}const m=ls(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((_,w)=>m.set(_,w)),!(m.size()>=o)););return q.resolve(m)}St(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new U1(t,s));let u=this.qr.get(t);u===void 0&&(u=Pe(),this.qr.set(t,u)),this.qr.set(t,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(){this.sessionToken=Nt.EMPTY_BYTE_STRING}getSessionToken(e){return q.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,q.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(){this.Qr=new yt(It.$r),this.Ur=new yt(It.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new It(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Gr(new It(e,t))}zr(e,t){e.forEach(s=>this.removeReference(s,t))}jr(e){const t=new ue(new qe([])),s=new It(t,e),o=new It(t,e+1),u=[];return this.Ur.forEachInRange([s,o],h=>{this.Gr(h),u.push(h.key)}),u}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new ue(new qe([])),s=new It(t,e),o=new It(t,e+1);let u=Pe();return this.Ur.forEachInRange([s,o],h=>{u=u.add(h.key)}),u}containsKey(e){const t=new It(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class It{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return ue.comparator(e.key,t.key)||Ce(e.Yr,t.Yr)}static Kr(e,t){return Ce(e.Yr,t.Yr)||ue.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new yt(It.$r)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new F1(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Zr=this.Zr.add(new It(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return q.resolve(h)}lookupMutationBatch(e,t){return q.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.ei(s),u=o<0?0:o;return q.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?hf:this.tr-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new It(t,0),o=new It(t,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([s,o],h=>{const m=this.Xr(h.Yr);u.push(m)}),q.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new yt(Ce);return t.forEach(o=>{const u=new It(o,0),h=new It(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,h],m=>{s=s.add(m.Yr)})}),q.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;ue.isDocumentKey(u)||(u=u.child(""));const h=new It(new ue(u),0);let m=new yt(Ce);return this.Zr.forEachWhile(g=>{const _=g.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(m=m.add(g.Yr)),!0)},h),q.resolve(this.ti(m))}ti(e){const t=[];return e.forEach(s=>{const o=this.Xr(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Fe(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return q.forEach(t.mutations,o=>{const u=new It(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Zr=s})}ir(e){}containsKey(e,t){const s=new It(t,0),o=this.Zr.firstAfterOrEqual(s);return q.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e){this.ri=e,this.docs=function(){return new tt(ue.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return q.resolve(s?s.document.mutableCopy():Ut.newInvalidDocument(t))}getEntries(e,t){let s=Vr();return t.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Ut.newInvalidDocument(o))}),q.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Vr();const h=t.path,m=new ue(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:_,value:{document:w}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||ZS(JS(w),s)<=0||(o.has(w.key)||Ec(t,w))&&(u=u.insert(w.key,w.mutableCopy()))}return q.resolve(u)}getAllFromCollectionGroup(e,t,s,o){me(9500)}ii(e,t){return q.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new AA(this)}getSize(e){return q.resolve(this.size)}}class AA extends yA{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(s)}),q.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(e){this.persistence=e,this.si=new ys(t=>pf(t),mf),this.lastRemoteSnapshotVersion=ye.min(),this.highestTargetId=0,this.oi=0,this._i=new wf,this.targetCount=0,this.ai=Io.ur()}forEachTarget(e,t){return this.si.forEach((s,o)=>t(o)),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),q.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Io(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,q.resolve()}updateTargetData(e,t){return this.Pr(t),q.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.si.forEach((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.si.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)}),q.waitFor(u).next(()=>o)}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return q.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),q.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(h=>{u.push(o.markPotentiallyOrphaned(e,h))}),q.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),q.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return q.resolve(s)}containsKey(e,t){return q.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(e,t){this.ui={},this.overlays={},this.ci=new mc(0),this.li=!1,this.li=!0,this.hi=new TA,this.referenceDelegate=e(this),this.Pi=new RA(this),this.indexManager=new cA,this.remoteDocumentCache=function(o){return new SA(o)}(s=>this.referenceDelegate.Ti(s)),this.serializer=new lA(t),this.Ii=new EA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new wA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new IA(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){ne("MemoryPersistence","Starting transaction:",e);const o=new CA(this.ci.next());return this.referenceDelegate.Ei(),s(o).next(u=>this.referenceDelegate.di(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Ai(e,t){return q.or(Object.values(this.ui).map(s=>()=>s.containsKey(e,t)))}}class CA extends t1{constructor(e){super(),this.currentSequenceNumber=e}}class Tf{constructor(e){this.persistence=e,this.Ri=new wf,this.Vi=null}static mi(e){return new Tf(e)}get fi(){if(this.Vi)return this.Vi;throw me(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),q.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),q.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),q.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(o=>this.fi.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.fi.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.fi,s=>{const o=ue.fromPath(s);return this.gi(e,o).next(u=>{u||t.removeEntry(o,ye.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return q.or([()=>q.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class sc{constructor(e,t){this.persistence=e,this.pi=new ys(s=>i1(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=gA(this,t)}static mi(e,t){return new sc(e,t)}Ei(){}di(e){return q.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}wr(e){let t=0;return this.pr(e,s=>{t++}).next(()=>t)}pr(e,t){return q.forEach(this.pi,(s,o)=>this.br(e,s,o).next(u=>u?q.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(e,h=>this.br(e,h,t).next(m=>{m||(s++,u.removeEntry(h,ye.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),q.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),q.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),q.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),q.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Fu(e.data.value)),t}br(e,t,s){return q.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.pi.get(t);return q.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=o}static As(e,t){let s=Pe(),o=Pe();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new If(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return sT()?8:n1(jt())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.ys(e,t).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.ws(e,t,o,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new PA;return this.Ss(e,t,h).next(m=>{if(u.result=m,this.Vs)return this.bs(e,t,h,m.size)})}).next(()=>u.result)}bs(e,t,s,o){return s.documentReadCount<this.fs?(uo()<=Re.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",co(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),q.resolve()):(uo()<=Re.DEBUG&&ne("QueryEngine","Query:",co(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(uo()<=Re.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",co(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nr(t))):q.resolve())}ys(e,t){if(ay(t))return q.resolve(null);let s=nr(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=bd(t,null,"F"),s=nr(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=Pe(...u);return this.ps.getDocuments(e,h).next(m=>this.indexManager.getMinOffset(e,s).next(g=>{const _=this.Ds(t,m);return this.Cs(t,_,h,g.readTime)?this.ys(e,bd(t,null,"F")):this.vs(e,_,t,g)}))})))}ws(e,t,s,o){return ay(t)||o.isEqual(ye.min())?q.resolve(null):this.ps.getDocuments(e,s).next(u=>{const h=this.Ds(t,u);return this.Cs(t,h,s,o)?q.resolve(null):(uo()<=Re.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),co(t)),this.vs(e,h,t,XS(o,Wa)).next(m=>m))})}Ds(e,t){let s=new yt(dv(e));return t.forEach((o,u)=>{Ec(e,u)&&(s=s.add(u))}),s}Cs(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(e,t,s){return uo()<=Re.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",co(t)),this.ps.getDocumentsMatchingQuery(e,t,Ti.min(),s)}vs(e,t,s,o){return this.ps.getDocumentsMatchingQuery(e,s,o).next(u=>(t.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf="LocalStore",NA=3e8;class DA{constructor(e,t,s,o){this.persistence=e,this.Fs=t,this.serializer=o,this.Ms=new tt(Ce),this.xs=new ys(u=>pf(u),mf),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new vA(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function xA(r,e,t,s){return new DA(r,e,t,s)}async function Lv(r,e){const t=ve(r);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,t.Bs(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],m=[];let g=Pe();for(const _ of o){h.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}for(const _ of u){m.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(s,g).next(_=>({Ls:_,removedBatchIds:h,addedBatchIds:m}))})})}function VA(r,e){const t=ve(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=t.Ns.newChangeBuffer({trackRemovals:!0});return function(m,g,_,w){const T=_.batch,S=T.keys();let U=q.resolve();return S.forEach($=>{U=U.next(()=>w.getEntry(g,$)).next(W=>{const z=_.docVersions.get($);Fe(z!==null,48541),W.version.compareTo(z)<0&&(T.applyToRemoteDocument(W,_),W.isValidDocument()&&(W.setReadTime(_.commitVersion),w.addEntry(W)))})}),U.next(()=>m.mutationQueue.removeMutationBatch(g,T))}(t,s,e,u).next(()=>u.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(m){let g=Pe();for(let _=0;_<m.mutationResults.length;++_)m.mutationResults[_].transformResults.length>0&&(g=g.add(m.batch.mutations[_].key));return g}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function Mv(r){const e=ve(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function OA(r,e){const t=ve(r),s=e.snapshotVersion;let o=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=t.Ns.newChangeBuffer({trackRemovals:!0});o=t.Ms;const m=[];e.targetChanges.forEach((w,T)=>{const S=o.get(T);if(!S)return;m.push(t.Pi.removeMatchingKeys(u,w.removedDocuments,T).next(()=>t.Pi.addMatchingKeys(u,w.addedDocuments,T)));let U=S.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(T)!==null?U=U.withResumeToken(Nt.EMPTY_BYTE_STRING,ye.min()).withLastLimboFreeSnapshotVersion(ye.min()):w.resumeToken.approximateByteSize()>0&&(U=U.withResumeToken(w.resumeToken,s)),o=o.insert(T,U),function(W,z,ae){return W.resumeToken.approximateByteSize()===0||z.snapshotVersion.toMicroseconds()-W.snapshotVersion.toMicroseconds()>=NA?!0:ae.addedDocuments.size+ae.modifiedDocuments.size+ae.removedDocuments.size>0}(S,U,w)&&m.push(t.Pi.updateTargetData(u,U))});let g=Vr(),_=Pe();if(e.documentUpdates.forEach(w=>{e.resolvedLimboDocuments.has(w)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,w))}),m.push(LA(u,h,e.documentUpdates).next(w=>{g=w.ks,_=w.qs})),!s.isEqual(ye.min())){const w=t.Pi.getLastRemoteSnapshotVersion(u).next(T=>t.Pi.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(w)}return q.waitFor(m).next(()=>h.apply(u)).next(()=>t.localDocuments.getLocalViewOfDocuments(u,g,_)).next(()=>g)}).then(u=>(t.Ms=o,u))}function LA(r,e,t){let s=Pe(),o=Pe();return t.forEach(u=>s=s.add(u)),e.getEntries(r,s).next(u=>{let h=Vr();return t.forEach((m,g)=>{const _=u.get(m);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(ye.min())?(e.removeEntry(m,g.readTime),h=h.insert(m,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(m,g)):ne(Sf,"Ignoring outdated watch update for ",m,". Current version:",_.version," Watch version:",g.version)}),{ks:h,qs:o}})}function MA(r,e){const t=ve(r);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=hf),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function bA(r,e){const t=ve(r);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.Pi.getTargetData(s,e).next(u=>u?(o=u,q.resolve(o)):t.Pi.allocateTargetId(s).next(h=>(o=new gi(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s})}async function Bd(r,e,t){const s=ve(r),o=s.Ms.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!No(h))throw h;ne(Sf,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Ms=s.Ms.remove(e),s.xs.delete(o.target)}function Ey(r,e,t){const s=ve(r);let o=ye.min(),u=Pe();return s.persistence.runTransaction("Execute query","readwrite",h=>function(g,_,w){const T=ve(g),S=T.xs.get(w);return S!==void 0?q.resolve(T.Ms.get(S)):T.Pi.getTargetData(_,w)}(s,h,nr(e)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(h,m.targetId).next(g=>{u=g})}).next(()=>s.Fs.getDocumentsMatchingQuery(h,e,t?o:ye.min(),t?u:Pe())).next(m=>(FA(s,I1(e),m),{documents:m,Qs:u})))}function FA(r,e,t){let s=r.Os.get(e)||ye.min();t.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),r.Os.set(e,s)}class wy{constructor(){this.activeTargetIds=k1()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class UA{constructor(){this.Mo=new wy,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new wy,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty="ConnectivityMonitor";class Iy{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ne(Ty,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ne(Ty,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Du=null;function $d(){return Du===null?Du=function(){return 268435456+Math.round(2147483648*Math.random())}():Du++,"0x"+Du.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd="RestConnection",zA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class BA{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===Ju?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(e,t,s,o,u){const h=$d(),m=this.zo(e,t.toUriEncodedString());ne(yd,`Sending RPC '${e}' ${h}:`,m,s);const g={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(g,o,u);const{host:_}=new URL(m),w=Ao(_);return this.Jo(e,m,g,s,w).then(T=>(ne(yd,`Received RPC '${e}' ${h}: `,T),T),T=>{throw vo(yd,`RPC '${e}' ${h} failed with error: `,T,"url: ",m,"request:",s),T})}Ho(e,t,s,o,u,h){return this.Go(e,t,s,o,u)}jo(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Po}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}zo(e,t){const s=zA[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt="WebChannelConnection";class qA extends BA{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,o,u){const h=$d();return new Promise((m,g)=>{const _=new U_;_.setWithCredentials(!0),_.listenOnce(j_.COMPLETE,()=>{try{switch(_.getLastErrorCode()){case bu.NO_ERROR:const T=_.getResponseJson();ne(bt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(T)),m(T);break;case bu.TIMEOUT:ne(bt,`RPC '${e}' ${h} timed out`),g(new ee(B.DEADLINE_EXCEEDED,"Request time out"));break;case bu.HTTP_ERROR:const S=_.getStatus();if(ne(bt,`RPC '${e}' ${h} failed with status:`,S,"response text:",_.getResponseText()),S>0){let U=_.getResponseJson();Array.isArray(U)&&(U=U[0]);const $=U==null?void 0:U.error;if($&&$.status&&$.message){const W=function(ae){const fe=ae.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(fe)>=0?fe:B.UNKNOWN}($.status);g(new ee(W,$.message))}else g(new ee(B.UNKNOWN,"Server responded with status "+_.getStatus()))}else g(new ee(B.UNAVAILABLE,"Connection failed."));break;default:me(9055,{l_:e,streamId:h,h_:_.getLastErrorCode(),P_:_.getLastError()})}}finally{ne(bt,`RPC '${e}' ${h} completed.`)}});const w=JSON.stringify(o);ne(bt,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",w,s,15)})}T_(e,t,s){const o=$d(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=$_(),m=B_(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(g.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(g.useFetchStreams=!0),this.jo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const w=u.join("");ne(bt,`Creating RPC '${e}' stream ${o}: ${w}`,g);const T=h.createWebChannel(w,g);this.I_(T);let S=!1,U=!1;const $=new $A({Yo:z=>{U?ne(bt,`Not sending because RPC '${e}' stream ${o} is closed:`,z):(S||(ne(bt,`Opening RPC '${e}' stream ${o} transport.`),T.open(),S=!0),ne(bt,`RPC '${e}' stream ${o} sending:`,z),T.send(z))},Zo:()=>T.close()}),W=(z,ae,fe)=>{z.listen(ae,Te=>{try{fe(Te)}catch(ke){setTimeout(()=>{throw ke},0)}})};return W(T,Da.EventType.OPEN,()=>{U||(ne(bt,`RPC '${e}' stream ${o} transport opened.`),$.o_())}),W(T,Da.EventType.CLOSE,()=>{U||(U=!0,ne(bt,`RPC '${e}' stream ${o} transport closed`),$.a_(),this.E_(T))}),W(T,Da.EventType.ERROR,z=>{U||(U=!0,vo(bt,`RPC '${e}' stream ${o} transport errored. Name:`,z.name,"Message:",z.message),$.a_(new ee(B.UNAVAILABLE,"The operation could not be completed")))}),W(T,Da.EventType.MESSAGE,z=>{var ae;if(!U){const fe=z.data[0];Fe(!!fe,16349);const Te=fe,ke=(Te==null?void 0:Te.error)||((ae=Te[0])==null?void 0:ae.error);if(ke){ne(bt,`RPC '${e}' stream ${o} received error:`,ke);const He=ke.status;let Ne=function(C){const x=dt[C];if(x!==void 0)return Iv(x)}(He),k=ke.message;Ne===void 0&&(Ne=B.INTERNAL,k="Unknown error status: "+He+" with message "+ke.message),U=!0,$.a_(new ee(Ne,k)),T.close()}else ne(bt,`RPC '${e}' stream ${o} received:`,fe),$.u_(fe)}}),W(m,z_.STAT_EVENT,z=>{z.stat===Nd.PROXY?ne(bt,`RPC '${e}' stream ${o} detected buffering proxy`):z.stat===Nd.NOPROXY&&ne(bt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{$.__()},0),$}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function _d(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(r){return new K1(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&ne("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy="PersistentStream";class Fv{constructor(e,t,s,o,u,h,m,g){this.Mi=e,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new bv(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===B.RESOURCE_EXHAUSTED?(xr(t.toString()),xr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.D_===t&&this.G_(s,o)},s=>{e(()=>{const o=new ee(B.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)})})}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{s(()=>this.listener.Xo())}),this.stream.t_(()=>{s(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(o=>{s(()=>this.z_(o))}),this.stream.onMessage(o=>{s(()=>++this.F_==1?this.J_(o):this.onNext(o))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return ne(Sy,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(ne(Sy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class WA extends Fv{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=X1(this.serializer,e),s=function(u){if(!("targetChange"in u))return ye.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?ye.min():h.readTime?rr(h.readTime):ye.min()}(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=zd(this.serializer),t.addTarget=function(u,h){let m;const g=h.target;if(m=Ld(g)?{documents:eA(u,g)}:{query:tA(u,g).ft},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=Rv(u,h.resumeToken);const _=Fd(u,h.expectedCount);_!==null&&(m.expectedCount=_)}else if(h.snapshotVersion.compareTo(ye.min())>0){m.readTime=ic(u,h.snapshotVersion.toTimestamp());const _=Fd(u,h.expectedCount);_!==null&&(m.expectedCount=_)}return m}(this.serializer,e);const s=rA(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=zd(this.serializer),t.removeTarget=e,this.q_(t)}}class HA extends Fv{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Fe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Fe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Z1(e.writeResults,e.commitTime),s=rr(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=zd(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>J1(this.serializer,s))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{}class KA extends GA{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ee(B.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.Go(e,Ud(t,s),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ee(B.UNKNOWN,u.toString())})}Ho(e,t,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,m])=>this.connection.Ho(e,Ud(t,s),o,h,m,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ee(B.UNKNOWN,h.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class QA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(xr(t),this.aa=!1):ne("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs="RemoteStore";class YA{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo(h=>{s.enqueueAndForget(async()=>{_s(this)&&(ne(gs,"Restarting streams for network reachability change."),await async function(g){const _=ve(g);_.Ea.add(4),await al(_),_.Ra.set("Unknown"),_.Ea.delete(4),await Ac(_)}(this))})}),this.Ra=new QA(s,o)}}async function Ac(r){if(_s(r))for(const e of r.da)await e(!0)}async function al(r){for(const e of r.da)await e(!1)}function Uv(r,e){const t=ve(r);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Pf(t)?Cf(t):Do(t).O_()&&Rf(t,e))}function Af(r,e){const t=ve(r),s=Do(t);t.Ia.delete(e),s.O_()&&jv(t,e),t.Ia.size===0&&(s.O_()?s.L_():_s(t)&&t.Ra.set("Unknown"))}function Rf(r,e){if(r.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ye.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Do(r).Y_(e)}function jv(r,e){r.Va.Ue(e),Do(r).Z_(e)}function Cf(r){r.Va=new q1({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),Do(r).start(),r.Ra.ua()}function Pf(r){return _s(r)&&!Do(r).x_()&&r.Ia.size>0}function _s(r){return ve(r).Ea.size===0}function zv(r){r.Va=void 0}async function XA(r){r.Ra.set("Online")}async function JA(r){r.Ia.forEach((e,t)=>{Rf(r,e)})}async function ZA(r,e){zv(r),Pf(r)?(r.Ra.ha(e),Cf(r)):r.Ra.set("Unknown")}async function eR(r,e,t){if(r.Ra.set("Online"),e instanceof Av&&e.state===2&&e.cause)try{await async function(o,u){const h=u.cause;for(const m of u.targetIds)o.Ia.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ia.delete(m),o.Va.removeTarget(m))}(r,e)}catch(s){ne(gs,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await oc(r,s)}else if(e instanceof zu?r.Va.Ze(e):e instanceof Sv?r.Va.st(e):r.Va.tt(e),!t.isEqual(ye.min()))try{const s=await Mv(r.localStore);t.compareTo(s)>=0&&await function(u,h){const m=u.Va.Tt(h);return m.targetChanges.forEach((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const w=u.Ia.get(_);w&&u.Ia.set(_,w.withResumeToken(g.resumeToken,h))}}),m.targetMismatches.forEach((g,_)=>{const w=u.Ia.get(g);if(!w)return;u.Ia.set(g,w.withResumeToken(Nt.EMPTY_BYTE_STRING,w.snapshotVersion)),jv(u,g);const T=new gi(w.target,g,_,w.sequenceNumber);Rf(u,T)}),u.remoteSyncer.applyRemoteEvent(m)}(r,t)}catch(s){ne(gs,"Failed to raise snapshot:",s),await oc(r,s)}}async function oc(r,e,t){if(!No(e))throw e;r.Ea.add(1),await al(r),r.Ra.set("Offline"),t||(t=()=>Mv(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{ne(gs,"Retrying IndexedDB access"),await t(),r.Ea.delete(1),await Ac(r)})}function Bv(r,e){return e().catch(t=>oc(r,t,e))}async function Rc(r){const e=ve(r),t=Ri(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:hf;for(;tR(e);)try{const o=await MA(e.localStore,s);if(o===null){e.Ta.length===0&&t.L_();break}s=o.batchId,nR(e,o)}catch(o){await oc(e,o)}$v(e)&&qv(e)}function tR(r){return _s(r)&&r.Ta.length<10}function nR(r,e){r.Ta.push(e);const t=Ri(r);t.O_()&&t.X_&&t.ea(e.mutations)}function $v(r){return _s(r)&&!Ri(r).x_()&&r.Ta.length>0}function qv(r){Ri(r).start()}async function rR(r){Ri(r).ra()}async function iR(r){const e=Ri(r);for(const t of r.Ta)e.ea(t.mutations)}async function sR(r,e,t){const s=r.Ta.shift(),o=_f.from(s,e,t);await Bv(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await Rc(r)}async function oR(r,e){e&&Ri(r).X_&&await async function(s,o){if(function(h){return z1(h)&&h!==B.ABORTED}(o.code)){const u=s.Ta.shift();Ri(s).B_(),await Bv(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await Rc(s)}}(r,e),$v(r)&&qv(r)}async function Ay(r,e){const t=ve(r);t.asyncQueue.verifyOperationInProgress(),ne(gs,"RemoteStore received new credentials");const s=_s(t);t.Ea.add(3),await al(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Ac(t)}async function aR(r,e){const t=ve(r);e?(t.Ea.delete(2),await Ac(t)):e||(t.Ea.add(2),await al(t),t.Ra.set("Unknown"))}function Do(r){return r.ma||(r.ma=function(t,s,o){const u=ve(t);return u.sa(),new WA(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{Xo:XA.bind(null,r),t_:JA.bind(null,r),r_:ZA.bind(null,r),H_:eR.bind(null,r)}),r.da.push(async e=>{e?(r.ma.B_(),Pf(r)?Cf(r):r.Ra.set("Unknown")):(await r.ma.stop(),zv(r))})),r.ma}function Ri(r){return r.fa||(r.fa=function(t,s,o){const u=ve(t);return u.sa(),new HA(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:rR.bind(null,r),r_:oR.bind(null,r),ta:iR.bind(null,r),na:sR.bind(null,r)}),r.da.push(async e=>{e?(r.fa.B_(),await Rc(r)):(await r.fa.stop(),r.Ta.length>0&&(ne(gs,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))})),r.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new kr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new kf(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Nf(r,e){if(xr("AsyncQueue",`${e}: ${r}`),No(r))return new ee(B.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{static emptySet(e){return new yo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ue.comparator(t.key,s.key):(t,s)=>ue.comparator(t.key,s.key),this.keyedMap=xa(),this.sortedSet=new tt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof yo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`
`)+`
)`}copy(e,t){const s=new yo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(){this.ga=new tt(ue.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):me(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,s)=>{e.push(s)}),e}}class So{constructor(e,t,s,o,u,h,m,g,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach(m=>{h.push({type:0,doc:m})}),new So(e,t,yo.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&vc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class uR{constructor(){this.queries=Cy(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=ve(t),u=o.queries;o.queries=Cy(),u.forEach((h,m)=>{for(const g of m.Sa)g.onError(s)})})(this,new ee(B.ABORTED,"Firestore shutting down"))}}function Cy(){return new ys(r=>hv(r),vc)}async function Df(r,e){const t=ve(r);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.ba()&&e.Da()&&(s=2):(u=new lR,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await t.onListen(o,!0);break;case 1:u.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=Nf(h,`Initialization of query '${co(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.Sa.push(e),e.va(t.onlineState),u.wa&&e.Fa(u.wa)&&Vf(t)}async function xf(r,e){const t=ve(r),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.Sa.indexOf(e);h>=0&&(u.Sa.splice(h,1),u.Sa.length===0?o=e.Da()?0:1:!u.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function cR(r,e){const t=ve(r);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.Sa)m.Fa(o)&&(s=!0);h.wa=o}}s&&Vf(t)}function hR(r,e,t){const s=ve(r),o=s.queries.get(e);if(o)for(const u of o.Sa)u.onError(t);s.queries.delete(e)}function Vf(r){r.Ca.forEach(e=>{e.next()})}var qd,Py;(Py=qd||(qd={})).Ma="default",Py.Cache="cache";class Of{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new So(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=So.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==qd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(e){this.key=e}}class Hv{constructor(e){this.key=e}}class dR{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Pe(),this.mutatedKeys=Pe(),this.eu=dv(e),this.tu=new yo(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new Ry,o=t?t.tu:this.tu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((w,T)=>{const S=o.get(w),U=Ec(this.query,T)?T:null,$=!!S&&this.mutatedKeys.has(S.key),W=!!U&&(U.hasLocalMutations||this.mutatedKeys.has(U.key)&&U.hasCommittedMutations);let z=!1;S&&U?S.data.isEqual(U.data)?$!==W&&(s.track({type:3,doc:U}),z=!0):this.su(S,U)||(s.track({type:2,doc:U}),z=!0,(g&&this.eu(U,g)>0||_&&this.eu(U,_)<0)&&(m=!0)):!S&&U?(s.track({type:0,doc:U}),z=!0):S&&!U&&(s.track({type:1,doc:S}),z=!0,(g||_)&&(m=!0)),z&&(U?(h=h.add(U),u=W?u.add(w):u.delete(w)):(h=h.delete(w),u=u.delete(w)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),u=u.delete(w.key),s.track({type:1,doc:w})}return{tu:h,iu:s,Cs:m,mutatedKeys:u}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort((w,T)=>function(U,$){const W=z=>{switch(z){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me(20277,{Rt:z})}};return W(U)-W($)}(w.type,T.type)||this.eu(w.doc,T.doc)),this.ou(s),o=o??!1;const m=t&&!o?this._u():[],g=this.Xa.size===0&&this.current&&!o?1:0,_=g!==this.Za;return this.Za=g,h.length!==0||_?{snapshot:new So(this.query,e.tu,u,h,e.mutatedKeys,g===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Ry,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Pe(),this.tu.forEach(s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))});const t=[];return e.forEach(s=>{this.Xa.has(s)||t.push(new Hv(s))}),this.Xa.forEach(s=>{e.has(s)||t.push(new Wv(s))}),t}cu(e){this.Ya=e.Qs,this.Xa=Pe();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return So.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Lf="SyncEngine";class fR{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class pR{constructor(e){this.key=e,this.hu=!1}}class mR{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new ys(m=>hv(m),vc),this.Iu=new Map,this.Eu=new Set,this.du=new tt(ue.comparator),this.Au=new Map,this.Ru=new wf,this.Vu={},this.mu=new Map,this.fu=Io.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function gR(r,e,t=!0){const s=Jv(r);let o;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await Gv(s,e,t,!0),o}async function yR(r,e){const t=Jv(r);await Gv(t,e,!0,!1)}async function Gv(r,e,t,s){const o=await bA(r.localStore,nr(e)),u=o.targetId,h=r.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await _R(r,e,u,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&Uv(r.remoteStore,o),m}async function _R(r,e,t,s,o){r.pu=(T,S,U)=>async function(W,z,ae,fe){let Te=z.view.ru(ae);Te.Cs&&(Te=await Ey(W.localStore,z.query,!1).then(({documents:k})=>z.view.ru(k,Te)));const ke=fe&&fe.targetChanges.get(z.targetId),He=fe&&fe.targetMismatches.get(z.targetId)!=null,Ne=z.view.applyChanges(Te,W.isPrimaryClient,ke,He);return Ny(W,z.targetId,Ne.au),Ne.snapshot}(r,T,S,U);const u=await Ey(r.localStore,e,!0),h=new dR(e,u.Qs),m=h.ru(u.documents),g=ol.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),_=h.applyChanges(m,r.isPrimaryClient,g);Ny(r,t,_.au);const w=new fR(e,t,h);return r.Tu.set(e,w),r.Iu.has(t)?r.Iu.get(t).push(e):r.Iu.set(t,[e]),_.snapshot}async function vR(r,e,t){const s=ve(r),o=s.Tu.get(e),u=s.Iu.get(o.targetId);if(u.length>1)return s.Iu.set(o.targetId,u.filter(h=>!vc(h,e))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Bd(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Af(s.remoteStore,o.targetId),Wd(s,o.targetId)}).catch(ko)):(Wd(s,o.targetId),await Bd(s.localStore,o.targetId,!0))}async function ER(r,e){const t=ve(r),s=t.Tu.get(e),o=t.Iu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Af(t.remoteStore,s.targetId))}async function wR(r,e,t){const s=PR(r);try{const o=await function(h,m){const g=ve(h),_=We.now(),w=m.reduce((U,$)=>U.add($.key),Pe());let T,S;return g.persistence.runTransaction("Locally write mutations","readwrite",U=>{let $=Vr(),W=Pe();return g.Ns.getEntries(U,w).next(z=>{$=z,$.forEach((ae,fe)=>{fe.isValidDocument()||(W=W.add(ae))})}).next(()=>g.localDocuments.getOverlayedDocuments(U,$)).next(z=>{T=z;const ae=[];for(const fe of m){const Te=M1(fe,T.get(fe.key).overlayedDocument);Te!=null&&ae.push(new xi(fe.key,Te,rv(Te.value.mapValue),En.exists(!0)))}return g.mutationQueue.addMutationBatch(U,_,ae,m)}).next(z=>{S=z;const ae=z.applyToLocalDocumentSet(T,W);return g.documentOverlayCache.saveOverlays(U,z.batchId,ae)})}).then(()=>({batchId:S.batchId,changes:pv(T)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,m,g){let _=h.Vu[h.currentUser.toKey()];_||(_=new tt(Ce)),_=_.insert(m,g),h.Vu[h.currentUser.toKey()]=_}(s,o.batchId,t),await ll(s,o.changes),await Rc(s.remoteStore)}catch(o){const u=Nf(o,"Failed to persist write");t.reject(u)}}async function Kv(r,e){const t=ve(r);try{const s=await OA(t.localStore,e);e.targetChanges.forEach((o,u)=>{const h=t.Au.get(u);h&&(Fe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?Fe(h.hu,14607):o.removedDocuments.size>0&&(Fe(h.hu,42227),h.hu=!1))}),await ll(t,s,e)}catch(s){await ko(s)}}function ky(r,e,t){const s=ve(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Tu.forEach((u,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)}),function(h,m){const g=ve(h);g.onlineState=m;let _=!1;g.queries.forEach((w,T)=>{for(const S of T.Sa)S.va(m)&&(_=!0)}),_&&Vf(g)}(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function TR(r,e,t){const s=ve(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Au.get(e),u=o&&o.key;if(u){let h=new tt(ue.comparator);h=h.insert(u,Ut.newNoDocument(u,ye.min()));const m=Pe().add(u),g=new Ic(ye.min(),new Map,new tt(Ce),h,m);await Kv(s,g),s.du=s.du.remove(u),s.Au.delete(e),Mf(s)}else await Bd(s.localStore,e,!1).then(()=>Wd(s,e,t)).catch(ko)}async function IR(r,e){const t=ve(r),s=e.batch.batchId;try{const o=await VA(t.localStore,e);Yv(t,s,null),Qv(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await ll(t,o)}catch(o){await ko(o)}}async function SR(r,e,t){const s=ve(r);try{const o=await function(h,m){const g=ve(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",_=>{let w;return g.mutationQueue.lookupMutationBatch(_,m).next(T=>(Fe(T!==null,37113),w=T.keys(),g.mutationQueue.removeMutationBatch(_,T))).next(()=>g.mutationQueue.performConsistencyCheck(_)).next(()=>g.documentOverlayCache.removeOverlaysForBatchId(_,w,m)).next(()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,w)).next(()=>g.localDocuments.getDocuments(_,w))})}(s.localStore,e);Yv(s,e,t),Qv(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await ll(s,o)}catch(o){await ko(o)}}function Qv(r,e){(r.mu.get(e)||[]).forEach(t=>{t.resolve()}),r.mu.delete(e)}function Yv(r,e,t){const s=ve(r);let o=s.Vu[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Vu[s.currentUser.toKey()]=o}}function Wd(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Iu.get(e))r.Tu.delete(s),t&&r.Pu.yu(s,t);r.Iu.delete(e),r.isPrimaryClient&&r.Ru.jr(e).forEach(s=>{r.Ru.containsKey(s)||Xv(r,s)})}function Xv(r,e){r.Eu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(Af(r.remoteStore,t),r.du=r.du.remove(e),r.Au.delete(t),Mf(r))}function Ny(r,e,t){for(const s of t)s instanceof Wv?(r.Ru.addReference(s.key,e),AR(r,s)):s instanceof Hv?(ne(Lf,"Document no longer in limbo: "+s.key),r.Ru.removeReference(s.key,e),r.Ru.containsKey(s.key)||Xv(r,s.key)):me(19791,{wu:s})}function AR(r,e){const t=e.key,s=t.path.canonicalString();r.du.get(t)||r.Eu.has(s)||(ne(Lf,"New document in limbo: "+t),r.Eu.add(s),Mf(r))}function Mf(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const t=new ue(qe.fromString(e)),s=r.fu.next();r.Au.set(s,new pR(t)),r.du=r.du.insert(t,s),Uv(r.remoteStore,new gi(nr(_c(t.path)),s,"TargetPurposeLimboResolution",mc.ce))}}async function ll(r,e,t){const s=ve(r),o=[],u=[],h=[];s.Tu.isEmpty()||(s.Tu.forEach((m,g)=>{h.push(s.pu(g,e,t).then(_=>{var w;if((_||t)&&s.isPrimaryClient){const T=_?!_.fromCache:(w=t==null?void 0:t.targetChanges.get(g.targetId))==null?void 0:w.current;s.sharedClientState.updateQueryState(g.targetId,T?"current":"not-current")}if(_){o.push(_);const T=If.As(g.targetId,_);u.push(T)}}))}),await Promise.all(h),s.Pu.H_(o),await async function(g,_){const w=ve(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>q.forEach(_,S=>q.forEach(S.Es,U=>w.persistence.referenceDelegate.addReference(T,S.targetId,U)).next(()=>q.forEach(S.ds,U=>w.persistence.referenceDelegate.removeReference(T,S.targetId,U)))))}catch(T){if(!No(T))throw T;ne(Sf,"Failed to update sequence numbers: "+T)}for(const T of _){const S=T.targetId;if(!T.fromCache){const U=w.Ms.get(S),$=U.snapshotVersion,W=U.withLastLimboFreeSnapshotVersion($);w.Ms=w.Ms.insert(S,W)}}}(s.localStore,u))}async function RR(r,e){const t=ve(r);if(!t.currentUser.isEqual(e)){ne(Lf,"User change. New user:",e.toKey());const s=await Lv(t.localStore,e);t.currentUser=e,function(u,h){u.mu.forEach(m=>{m.forEach(g=>{g.reject(new ee(B.CANCELLED,h))})}),u.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ll(t,s.Ls)}}function CR(r,e){const t=ve(r),s=t.Au.get(e);if(s&&s.hu)return Pe().add(s.key);{let o=Pe();const u=t.Iu.get(e);if(!u)return o;for(const h of u){const m=t.Tu.get(h);o=o.unionWith(m.view.nu)}return o}}function Jv(r){const e=ve(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Kv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=CR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=TR.bind(null,e),e.Pu.H_=cR.bind(null,e.eventManager),e.Pu.yu=hR.bind(null,e.eventManager),e}function PR(r){const e=ve(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=IR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=SR.bind(null,e),e}class ac{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Sc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return xA(this.persistence,new kA,e.initialUser,this.serializer)}Cu(e){return new Ov(Tf.mi,this.serializer)}Du(e){return new UA}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ac.provider={build:()=>new ac};class kR extends ac{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Fe(this.persistence.referenceDelegate instanceof sc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new pA(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Yt.withCacheSize(this.cacheSizeBytes):Yt.DEFAULT;return new Ov(s=>sc.mi(s,t),this.serializer)}}class Hd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ky(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=RR.bind(null,this.syncEngine),await aR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new uR}()}createDatastore(e){const t=Sc(e.databaseInfo.databaseId),s=function(u){return new qA(u)}(e.databaseInfo);return function(u,h,m,g){return new KA(u,h,m,g)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,u,h,m){return new YA(s,o,u,h,m)}(this.localStore,this.datastore,e.asyncQueue,t=>ky(this.syncEngine,t,0),function(){return Iy.v()?new Iy:new jA}())}createSyncEngine(e,t){return function(o,u,h,m,g,_,w){const T=new mR(o,u,h,m,g,_);return w&&(T.gu=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const u=ve(o);ne(gs,"RemoteStore shutting down."),u.Ea.add(5),await al(u),u.Aa.shutdown(),u.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Hd.provider={build:()=>new Hd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):xr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci="FirestoreClient";class NR{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Ft.UNAUTHENTICATED,this.clientId=cf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{ne(Ci,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(ne(Ci,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new kr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Nf(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function vd(r,e){r.asyncQueue.verifyOperationInProgress(),ne(Ci,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await Lv(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function Dy(r,e){r.asyncQueue.verifyOperationInProgress();const t=await DR(r);ne(Ci,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(s=>Ay(e.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>Ay(e.remoteStore,o)),r._onlineComponents=e}async function DR(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ne(Ci,"Using user provided OfflineComponentProvider");try{await vd(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===B.FAILED_PRECONDITION||o.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;vo("Error using user provided cache. Falling back to memory cache: "+t),await vd(r,new ac)}}else ne(Ci,"Using default OfflineComponentProvider"),await vd(r,new kR(void 0));return r._offlineComponents}async function Zv(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ne(Ci,"Using user provided OnlineComponentProvider"),await Dy(r,r._uninitializedComponentsProvider._online)):(ne(Ci,"Using default OnlineComponentProvider"),await Dy(r,new Hd))),r._onlineComponents}function xR(r){return Zv(r).then(e=>e.syncEngine)}async function lc(r){const e=await Zv(r),t=e.eventManager;return t.onListen=gR.bind(null,e.syncEngine),t.onUnlisten=vR.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=yR.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=ER.bind(null,e.syncEngine),t}function VR(r,e,t={}){const s=new kr;return r.asyncQueue.enqueueAndForget(async()=>function(u,h,m,g,_){const w=new bf({next:S=>{w.Nu(),h.enqueueAndForget(()=>xf(u,T));const U=S.docs.has(m);!U&&S.fromCache?_.reject(new ee(B.UNAVAILABLE,"Failed to get document because the client is offline.")):U&&S.fromCache&&g&&g.source==="server"?_.reject(new ee(B.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(S)},error:S=>_.reject(S)}),T=new Of(_c(m.path),w,{includeMetadataChanges:!0,qa:!0});return Df(u,T)}(await lc(r),r.asyncQueue,e,t,s)),s.promise}function OR(r,e,t={}){const s=new kr;return r.asyncQueue.enqueueAndForget(async()=>function(u,h,m,g,_){const w=new bf({next:S=>{w.Nu(),h.enqueueAndForget(()=>xf(u,T)),S.fromCache&&g.source==="server"?_.reject(new ee(B.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(S)},error:S=>_.reject(S)}),T=new Of(m,w,{includeMetadataChanges:!0,qa:!0});return Df(u,T)}(await lc(r),r.asyncQueue,e,t,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eE(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE="firestore.googleapis.com",Vy=!0;class Oy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ee(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=tE,this.ssl=Vy}else this.host=e.host,this.ssl=e.ssl??Vy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Vv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<dA)throw new ee(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}YS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=eE(e.experimentalLongPollingOptions??{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ee(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ee(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ee(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Cc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Oy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ee(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Oy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new jS;switch(s.type){case"firstParty":return new qS(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ee(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=xy.get(t);s&&(ne("ComponentProvider","Removing Datastore"),xy.delete(t),s.terminate())}(this),Promise.resolve()}}function LR(r,e,t,s={}){var _;r=Jt(r,Cc);const o=Ao(e),u=r._getSettings(),h={...u,emulatorOptions:r._getEmulatorOptions()},m=`${e}:${t}`;o&&(Xy(`https://${m}`),Jy("Firestore",!0)),u.host!==tE&&u.host!==m&&vo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...u,host:m,ssl:o,emulatorOptions:s};if(!hs(g,h)&&(r._setSettings(g),s.mockUserToken)){let w,T;if(typeof s.mockUserToken=="string")w=s.mockUserToken,T=Ft.MOCK_USER;else{w=Yw(s.mockUserToken,(_=r._app)==null?void 0:_.options.projectId);const S=s.mockUserToken.sub||s.mockUserToken.user_id;if(!S)throw new ee(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new Ft(S)}r._authCredentials=new zS(new W_(w,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new vs(this.firestore,e,this._query)}}class it{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new it(this.firestore,e,this._key)}toJSON(){return{type:it._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(rl(t,it._jsonSchema))return new it(e,s||null,new ue(qe.fromString(t.referencePath)))}}it._jsonSchemaVersion="firestore/documentReference/1.0",it._jsonSchema={type:pt("string",it._jsonSchemaVersion),referencePath:pt("string")};class wi extends vs{constructor(e,t,s){super(e,t,_c(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new it(this.firestore,null,new ue(e))}withConverter(e){return new wi(this.firestore,e,this._path)}}function MR(r,e,...t){if(r=_t(r),H_("collection","path",e),r instanceof Cc){const s=qe.fromString(e,...t);return Gg(s),new wi(r,null,s)}{if(!(r instanceof it||r instanceof wi))throw new ee(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(qe.fromString(e,...t));return Gg(s),new wi(r.firestore,null,s)}}function Oa(r,e,...t){if(r=_t(r),arguments.length===1&&(e=cf.newId()),H_("doc","path",e),r instanceof Cc){const s=qe.fromString(e,...t);return Hg(s),new it(r,null,new ue(s))}{if(!(r instanceof it||r instanceof wi))throw new ee(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(qe.fromString(e,...t));return Hg(s),new it(r.firestore,r instanceof wi?r.converter:null,new ue(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly="AsyncQueue";class My{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new bv(this,"async_queue_retry"),this._c=()=>{const s=_d();s&&ne(Ly,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=_d();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=_d();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new kr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!No(e))throw e;ne(Ly,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(s=>{throw this.nc=s,this.rc=!1,xr("INTERNAL UNHANDLED ERROR: ",by(s)),s}).then(s=>(this.rc=!1,s))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=kf.createAndSchedule(this,e,t,s,u=>this.hc(u));return this.tc.push(o),o}uc(){this.nc&&me(47125,{Pc:by(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function by(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fy(r){return function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1}(r,["next","error","complete"])}class Or extends Cc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new My,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new My(e),this._firestoreClient=void 0,await e}}}function bR(r,e){const t=typeof r=="object"?r:n_(),s=typeof r=="string"?r:Ju,o=Xd(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=Kw("firestore");u&&LR(o,...u)}return o}function Pc(r){if(r._terminated)throw new ee(B.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||FR(r),r._firestoreClient}function FR(r){var s,o,u;const e=r._freezeSettings(),t=function(m,g,_,w){return new a1(m,g,_,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,eE(w.experimentalLongPollingOptions),w.useFetchStreams,w.isUsingEmulator)}(r._databaseId,((s=r._app)==null?void 0:s.options.appId)||"",r._persistenceKey,e);r._componentsProvider||(o=e.localCache)!=null&&o._offlineComponentProvider&&((u=e.localCache)!=null&&u._onlineComponentProvider)&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new NR(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&function(m){const g=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(g),_online:g}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vn(Nt.fromBase64String(e))}catch(t){throw new ee(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new vn(Nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:vn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(rl(e,vn._jsonSchema))return vn.fromBase64String(e.bytes)}}vn._jsonSchemaVersion="firestore/bytes/1.0",vn._jsonSchema={type:pt("string",vn._jsonSchemaVersion),bytes:pt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ee(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new kt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ee(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ee(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ir._jsonSchemaVersion}}static fromJSON(e){if(rl(e,ir._jsonSchema))return new ir(e.latitude,e.longitude)}}ir._jsonSchemaVersion="firestore/geoPoint/1.0",ir._jsonSchema={type:pt("string",ir._jsonSchemaVersion),latitude:pt("number"),longitude:pt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}toJSON(){return{type:sr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(rl(e,sr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new sr(e.vectorValues);throw new ee(B.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}sr._jsonSchemaVersion="firestore/vectorValue/1.0",sr._jsonSchema={type:pt("string",sr._jsonSchemaVersion),vectorValues:pt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UR=/^__.*__$/;class jR{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new xi(e,this.data,this.fieldMask,t,this.fieldTransforms):new sl(e,this.data,t,this.fieldTransforms)}}class nE{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new xi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function rE(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me(40011,{Ac:r})}}class Uf{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Uf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return uc(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(rE(this.Ac)&&UR.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class zR{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Sc(e)}Cc(e,t,s,o=!1){return new Uf({Ac:e,methodName:t,Dc:s,path:kt.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Nc(r){const e=r._freezeSettings(),t=Sc(r._databaseId);return new zR(r._databaseId,!!e.ignoreUndefinedProperties,t)}function iE(r,e,t,s,o,u={}){const h=r.Cc(u.merge||u.mergeFields?2:0,e,t,o);jf("Data must be an object, but it was:",h,s);const m=sE(s,h);let g,_;if(u.merge)g=new cn(h.fieldMask),_=h.fieldTransforms;else if(u.mergeFields){const w=[];for(const T of u.mergeFields){const S=Gd(e,T,t);if(!h.contains(S))throw new ee(B.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);aE(w,S)||w.push(S)}g=new cn(w),_=h.fieldTransforms.filter(T=>g.covers(T.field))}else g=null,_=h.fieldTransforms;return new jR(new Xt(m),g,_)}class Dc extends Ff{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Dc}}function BR(r,e,t,s){const o=r.Cc(1,e,t);jf("Data must be an object, but it was:",o,s);const u=[],h=Xt.empty();Di(s,(g,_)=>{const w=zf(e,g,t);_=_t(_);const T=o.yc(w);if(_ instanceof Dc)u.push(w);else{const S=ul(_,T);S!=null&&(u.push(w),h.set(w,S))}});const m=new cn(u);return new nE(h,m,o.fieldTransforms)}function $R(r,e,t,s,o,u){const h=r.Cc(1,e,t),m=[Gd(e,s,t)],g=[o];if(u.length%2!=0)throw new ee(B.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let S=0;S<u.length;S+=2)m.push(Gd(e,u[S])),g.push(u[S+1]);const _=[],w=Xt.empty();for(let S=m.length-1;S>=0;--S)if(!aE(_,m[S])){const U=m[S];let $=g[S];$=_t($);const W=h.yc(U);if($ instanceof Dc)_.push(U);else{const z=ul($,W);z!=null&&(_.push(U),w.set(U,z))}}const T=new cn(_);return new nE(w,T,h.fieldTransforms)}function qR(r,e,t,s=!1){return ul(t,r.Cc(s?4:3,e))}function ul(r,e){if(oE(r=_t(r)))return jf("Unsupported field value:",e,r),sE(r,e);if(r instanceof Ff)return function(s,o){if(!rE(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(s,o){const u=[];let h=0;for(const m of s){let g=ul(m,o.wc(h));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),h++}return{arrayValue:{values:u}}}(r,e)}return function(s,o){if((s=_t(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return N1(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=We.fromDate(s);return{timestampValue:ic(o.serializer,u)}}if(s instanceof We){const u=new We(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ic(o.serializer,u)}}if(s instanceof ir)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof vn)return{bytesValue:Rv(o.serializer,s._byteString)};if(s instanceof it){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.Sc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Ef(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof sr)return function(h,m){return{mapValue:{fields:{[tv]:{stringValue:nv},[Zu]:{arrayValue:{values:h.toArray().map(_=>{if(typeof _!="number")throw m.Sc("VectorValues must only contain numeric values.");return gf(m.serializer,_)})}}}}}}(s,o);throw o.Sc(`Unsupported field value: ${pc(s)}`)}(r,e)}function sE(r,e){const t={};return Q_(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Di(r,(s,o)=>{const u=ul(o,e.mc(s));u!=null&&(t[s]=u)}),{mapValue:{fields:t}}}function oE(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof We||r instanceof ir||r instanceof vn||r instanceof it||r instanceof Ff||r instanceof sr)}function jf(r,e,t){if(!oE(t)||!G_(t)){const s=pc(t);throw s==="an object"?e.Sc(r+" a custom object"):e.Sc(r+" "+s)}}function Gd(r,e,t){if((e=_t(e))instanceof kc)return e._internalPath;if(typeof e=="string")return zf(r,e);throw uc("Field path arguments must be of type string or ",r,!1,void 0,t)}const WR=new RegExp("[~\\*/\\[\\]]");function zf(r,e,t){if(e.search(WR)>=0)throw uc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new kc(...e.split("."))._internalPath}catch{throw uc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function uc(r,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(u||h)&&(g+=" (found",u&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new ee(B.INVALID_ARGUMENT,m+r+g)}function aE(r,e){return r.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new it(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new HR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Bf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class HR extends lE{data(){return super.data()}}function Bf(r,e){return typeof e=="string"?zf(r,e):e instanceof kc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uE(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ee(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class $f{}class GR extends $f{}function Uy(r,e,...t){let s=[];e instanceof $f&&s.push(e),s=s.concat(t),function(u){const h=u.filter(g=>g instanceof qf).length,m=u.filter(g=>g instanceof xc).length;if(h>1||h>0&&m>0)throw new ee(B.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)r=o._apply(r);return r}class xc extends GR{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new xc(e,t,s)}_apply(e){const t=this._parse(e);return cE(e._query,t),new vs(e.firestore,e.converter,Md(e._query,t))}_parse(e){const t=Nc(e.firestore);return function(u,h,m,g,_,w,T){let S;if(_.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new ee(B.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){zy(T,w);const $=[];for(const W of T)$.push(jy(g,u,W));S={arrayValue:{values:$}}}else S=jy(g,u,T)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||zy(T,w),S=qR(m,h,T,w==="in"||w==="not-in");return ft.create(_,w,S)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Ed(r,e,t){const s=e,o=Bf("where",r);return xc._create(o,s,t)}class qf extends $f{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new qf(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:On.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,u){let h=o;const m=u.getFlattenedFilters();for(const g of m)cE(h,g),h=Md(h,g)}(e._query,t),new vs(e.firestore,e.converter,Md(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function jy(r,e,t){if(typeof(t=_t(t))=="string"){if(t==="")throw new ee(B.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!cv(e)&&t.indexOf("/")!==-1)throw new ee(B.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(qe.fromString(t));if(!ue.isDocumentKey(s))throw new ee(B.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return ty(r,new ue(s))}if(t instanceof it)return ty(r,t._key);throw new ee(B.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${pc(t)}.`)}function zy(r,e){if(!Array.isArray(r)||r.length===0)throw new ee(B.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function cE(r,e){const t=function(o,u){for(const h of o)for(const m of h.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null}(r.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ee(B.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ee(B.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class KR{convertValue(e,t="none"){switch(Ai(e)){case 0:return null;case 1:return e.booleanValue;case 2:return lt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Si(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw me(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Di(e,(o,u)=>{s[o]=this.convertValue(u,t)}),s}convertVectorValue(e){var s,o,u;const t=(u=(o=(s=e.fields)==null?void 0:s[Zu].arrayValue)==null?void 0:o.values)==null?void 0:u.map(h=>lt(h.doubleValue));return new sr(t)}convertGeoPoint(e){return new ir(lt(e.latitude),lt(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=yc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ha(e));default:return null}}convertTimestamp(e){const t=Ii(e);return new We(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=qe.fromString(e);Fe(xv(s),9688,{name:e});const o=new Ga(s.get(1),s.get(3)),u=new ue(s.popFirst(5));return o.isEqual(t)||xr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(r,e,t){let s;return s=r?r.toFirestore(e):e,s}class La{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class us extends lE{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Bu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Bf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(B.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=us._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}us._jsonSchemaVersion="firestore/documentSnapshot/1.0",us._jsonSchema={type:pt("string",us._jsonSchemaVersion),bundleSource:pt("string","DocumentSnapshot"),bundleName:pt("string"),bundle:pt("string")};class Bu extends us{data(e={}){return super.data(e)}}class cs{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new La(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Bu(this._firestore,this._userDataWriter,s.key,s,new La(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ee(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(m=>{const g=new Bu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new La(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const g=new Bu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new La(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,w=-1;return m.type!==0&&(_=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),w=h.indexOf(m.doc.key)),{type:QR(m.type),doc:g,oldIndex:_,newIndex:w}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(B.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=cs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=cf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach(u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function QR(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me(61501,{type:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YR(r){r=Jt(r,it);const e=Jt(r.firestore,Or);return VR(Pc(e),r._key).then(t=>dE(e,r,t))}cs._jsonSchemaVersion="firestore/querySnapshot/1.0",cs._jsonSchema={type:pt("string",cs._jsonSchemaVersion),bundleSource:pt("string","QuerySnapshot"),bundleName:pt("string"),bundle:pt("string")};class Wf extends KR{constructor(e){super(),this.firestore=e}convertBytes(e){return new vn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new it(this.firestore,null,t)}}function XR(r){r=Jt(r,vs);const e=Jt(r.firestore,Or),t=Pc(e),s=new Wf(e);return uE(r._query),OR(t,r._query).then(o=>new cs(e,s,r,o))}function JR(r,e,t){r=Jt(r,it);const s=Jt(r.firestore,Or),o=hE(r.converter,e);return Vc(s,[iE(Nc(s),"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,En.none())])}function ZR(r,e,t,...s){r=Jt(r,it);const o=Jt(r.firestore,Or),u=Nc(o);let h;return h=typeof(e=_t(e))=="string"||e instanceof kc?$R(u,"updateDoc",r._key,e,t,s):BR(u,"updateDoc",r._key,e),Vc(o,[h.toMutation(r._key,En.exists(!0))])}function gC(r){return Vc(Jt(r.firestore,Or),[new yf(r._key,En.none())])}function yC(r,e){const t=Jt(r.firestore,Or),s=Oa(r),o=hE(r.converter,e);return Vc(t,[iE(Nc(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,En.exists(!1))]).then(()=>s)}function By(r,...e){var g,_,w;r=_t(r);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||Fy(e[s])||(t=e[s++]);const o={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Fy(e[s])){const T=e[s];e[s]=(g=T.next)==null?void 0:g.bind(T),e[s+1]=(_=T.error)==null?void 0:_.bind(T),e[s+2]=(w=T.complete)==null?void 0:w.bind(T)}let u,h,m;if(r instanceof it)h=Jt(r.firestore,Or),m=_c(r._key.path),u={next:T=>{e[s]&&e[s](dE(h,r,T))},error:e[s+1],complete:e[s+2]};else{const T=Jt(r,vs);h=Jt(T.firestore,Or),m=T._query;const S=new Wf(h);u={next:U=>{e[s]&&e[s](new cs(h,S,T,U))},error:e[s+1],complete:e[s+2]},uE(r._query)}return function(S,U,$,W){const z=new bf(W),ae=new Of(U,z,$);return S.asyncQueue.enqueueAndForget(async()=>Df(await lc(S),ae)),()=>{z.Nu(),S.asyncQueue.enqueueAndForget(async()=>xf(await lc(S),ae))}}(Pc(h),m,o,u)}function Vc(r,e){return function(s,o){const u=new kr;return s.asyncQueue.enqueueAndForget(async()=>wR(await xR(s),o,u)),u.promise}(Pc(r),e)}function dE(r,e,t){const s=t.docs.get(e._key),o=new Wf(r);return new us(r,o,e._key,s,new La(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){Po=o})(Ro),_o(new ds("firestore",(s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new Or(new BS(s.getProvider("auth-internal")),new WS(h,s.getProvider("app-check-internal")),function(_,w){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new ee(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ga(_.options.projectId,w)}(h,o),h);return u={useFetchStreams:t,...u},m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),vi(Bg,$g,e),vi(Bg,$g,"esm2020")})();const eC={apiKey:"AIzaSyBLeBmdJ85IhfeJ7sGBHOlSjUmYJ6V_YIY",authDomain:"thpt-chi-linh.firebaseapp.com",projectId:"thpt-chi-linh",storageBucket:"thpt-chi-linh.firebasestorage.app",messagingSenderId:"59436766218",appId:"1:59436766218:web:8621e33cc12f6129e6fbf3",measurementId:"G-442TZLSK9J"},fE=t_(eC),Zn=MS(fE),Ca=bR(fE),_C="",vC="https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent",Pa={USERS:"users",LESSONS:"lessons"};class tC{constructor(){eg(this,"collection",MR(Ca,Pa.USERS))}async createUser(e,t){const s=Oa(Ca,Pa.USERS,e);await JR(s,{uid:e,...t,joinedAt:We.now()})}async getUser(e){const t=Oa(Ca,Pa.USERS,e),s=await YR(t);return s.exists()?s.data():null}async updateUser(e,t){const s=Oa(Ca,Pa.USERS,e);await ZR(s,t)}subscribeToUser(e,t,s){const o=Oa(Ca,Pa.USERS,e);return By(o,h=>{h.exists()?t(h.data()):t(null)},h=>{console.error("Error subscribing to user:",h),s==null||s(h)})}async findUserByEmail(e){const t=Uy(this.collection,Ed("email","==",e)),s=await XR(t);if(!s.empty){const o=s.docs[0];return{uid:o.id,...o.data()}}return null}async whitelistStudent(e){const t=await this.findUserByEmail(e);if(!t)throw new Error("Không tìm thấy người dùng. Họ phải đăng nhập ít nhất 1 lần.");if(t.isWhitelisted)throw new Error("Tài khoản đã được kích hoạt trước đó.");return await this.updateUser(t.uid,{isWhitelisted:!0,role:"student"}),!0}async removeFromWhitelist(e){await this.updateUser(e,{isWhitelisted:!1})}subscribeToWhitelistedStudents(e,t){const s=Uy(this.collection,Ed("isWhitelisted","==",!0),Ed("role","==","student"));return By(s,u=>{const h=u.docs.map(m=>({uid:m.id,...m.data()}));e(h)},u=>{console.error("Error fetching whitelisted students:",u),t==null||t(u)})}}const xu=new tC,pE=et.createContext(void 0),nC=()=>{let r=sessionStorage.getItem("sessionId");return r||(r=crypto.randomUUID(),sessionStorage.setItem("sessionId",r)),r},rC=({children:r})=>{const[e,t]=et.useState(null),[s,o]=et.useState(!0),[u]=et.useState(nC),h=et.useCallback(async S=>{var U,$;try{const W=await xu.getUser(S.uid),z=S.email===void 0;if(W){const ae={};let fe=!1;return W.sessionId!==u&&(ae.sessionId=u,fe=!0),z&&(W.role!=="admin"||!W.isWhitelisted)&&(ae.role="admin",ae.isWhitelisted=!0,fe=!0),fe?(await xu.updateUser(S.uid,ae),{...W,...ae}):W}else{const ae={email:S.email||"",displayName:S.displayName||((U=S.email)==null?void 0:U.split("@")[0])||"User",photoURL:S.photoURL||`https://ui-avatars.com/api/?name=${($=S.email)==null?void 0:$[0]}&background=667eea&color=fff&size=200`,role:z?"admin":"student",isWhitelisted:z,sessionId:u,joinedAt:null};return await xu.createUser(S.uid,ae),{...ae,uid:S.uid}}}catch(W){return console.error("Error getting or creating user:",W),null}},[u]);et.useEffect(()=>{let S=null;const U=A0(Zn,async $=>{S&&(S(),S=null),$?(o(!0),await h($)?S=xu.subscribeToUser($.uid,z=>{if(z){if(z.sessionId!==u){alert("Tài khoản của bạn đã được đăng nhập từ một thiết bị khác. Phiên này sẽ được đăng xuất."),sessionStorage.removeItem("sessionId"),lo(Zn);return}if(z.isActive===!1){alert("Tài khoản của bạn đã bị vô hiệu hóa."),sessionStorage.removeItem("sessionId"),lo(Zn);return}t(z)}else console.warn(`User document for ${$.uid} not found or deleted.`),lo(Zn);o(!1)},z=>{console.error("Error in user subscription:",z),lo(Zn),o(!1)}):(lo(Zn),o(!1))):(t(null),o(!1))});return()=>{U(),S&&S()}},[h,u]);const m=et.useCallback(async()=>{const S=new Ar;try{await W0(Zn,S)}catch(U){console.error("Google sign in error:",U);let $=`Đăng nhập Google thất bại: ${U.message}`;throw U.code==="auth/popup-closed-by-user"?$="Đăng nhập bị hủy bởi người dùng.":U.code==="auth/operation-not-allowed"?$="Lỗi cấu hình Firebase: Phương thức Đăng nhập Google chưa được kích hoạt.":U.code==="auth/unauthorized-domain"&&($="Lỗi cấu hình Firebase: Tên miền ứng dụng chưa được thêm vào Authorized domains."),new Error($)}},[]),g=et.useCallback(async(S,U)=>{try{await T0(Zn,S,U)}catch($){console.error("Email sign in error:",$);let W="Đăng nhập thất bại.";throw $.code==="auth/user-not-found"||$.code==="auth/wrong-password"||$.code==="auth/invalid-credential"?W="Email hoặc mật khẩu không chính xác.":$.code==="auth/operation-not-allowed"&&(W="Lỗi cấu hình Firebase: Phương thức Đăng nhập Email/Password chưa được kích hoạt."),new Error(W)}},[]),_=et.useCallback(async(S,U)=>{try{await w0(Zn,S,U)}catch($){console.error("Email sign up error:",$);let W="Đăng ký thất bại.";throw $.code==="auth/weak-password"?W="Mật khẩu quá yếu (phải có ít nhất 6 ký tự).":$.code==="auth/email-already-in-use"?W="Email đã được sử dụng.":$.code==="auth/operation-not-allowed"&&(W="Lỗi cấu hình Firebase: Phương thức Đăng nhập Email/Password chưa được kích hoạt."),new Error(W)}},[]),w=et.useCallback(async()=>{sessionStorage.removeItem("sessionId"),await lo(Zn)},[]),T={user:e,loading:s,signInWithGoogle:m,signInWithEmail:g,signUpWithEmail:_,signOut:w};return Z.jsx(pE.Provider,{value:T,children:r})},mE=()=>{const r=et.useContext(pE);if(r===void 0)throw new Error("useAuth must be used within an AuthProvider");return r};/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var iC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sC=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gE=(r,e)=>{const t=et.forwardRef(({color:s="currentColor",size:o=24,strokeWidth:u=2,absoluteStrokeWidth:h,className:m="",children:g,..._},w)=>et.createElement("svg",{ref:w,...iC,width:o,height:o,stroke:s,strokeWidth:h?Number(u)*24/Number(o):u,className:["lucide",`lucide-${sC(r)}`,m].join(" "),..._},[...e.map(([T,S])=>et.createElement(T,S)),...Array.isArray(g)?g:[g]]));return t.displayName=`${r}`,t};/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oC=gE("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aC=gE("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]),lC=({isOpen:r,onClose:e,title:t="Thông báo",message:s})=>r?Z.jsx("div",{className:"modal fixed w-full h-full top-0 left-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4",children:Z.jsxs("div",{className:"modal-content glass p-8 rounded-2xl shadow-2xl w-full max-w-md",children:[Z.jsxs("div",{className:"flex items-start mb-6",children:[Z.jsx("div",{className:"flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4",children:Z.jsx(aC,{className:"w-6 h-6 text-blue-600"})}),Z.jsxs("div",{className:"flex-1",children:[Z.jsx("h3",{className:"text-xl font-bold text-slate-800 mb-2",children:t}),Z.jsx("p",{className:"text-slate-600",children:s})]})]}),Z.jsx("div",{className:"flex justify-end",children:Z.jsx("button",{onClick:e,className:"btn-primary px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all",children:"Đã hiểu"})})]})}):null,uC=()=>{const{signInWithGoogle:r,signInWithEmail:e,signUpWithEmail:t}=mE(),[s,o]=et.useState("login"),[u,h]=et.useState(""),[m,g]=et.useState(""),[_,w]=et.useState({isOpen:!1,title:"",message:""}),T=window.location.hostname,S=(z,ae="Thông báo")=>{w({isOpen:!0,title:ae,message:z})},U=async()=>{try{await r()}catch(z){S(z.message,"Lỗi")}},$=async z=>{z.preventDefault();try{await e(u,m)}catch(ae){S(ae.message,"Lỗi")}},W=async z=>{z.preventDefault();try{await t(u,m)}catch(ae){S(ae.message,"Lỗi")}};return Z.jsxs("div",{className:"flex items-center justify-center min-h-screen px-4 animate-fadeIn",children:[Z.jsxs("div",{className:"glass p-10 rounded-3xl shadow-2xl w-full max-w-md",children:[Z.jsxs("div",{className:"text-center mb-8",children:[Z.jsx("div",{className:"inline-block p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-4 animate-float",children:Z.jsx(oC,{className:"w-12 h-12 text-white"})}),Z.jsx("h1",{className:"text-4xl font-bold gradient-text mb-2",children:"Chào mừng!"}),Z.jsx("p",{className:"text-slate-600",children:"Đăng nhập để tiếp tục học tập"})]}),Z.jsxs("div",{id:"domain-warning",className:"hidden bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg mb-6 text-sm",children:[Z.jsx("p",{className:"font-bold",children:"Lỗi Đăng nhập Google?"}),Z.jsx("p",{className:"mb-2",children:'Nếu bạn đang gặp lỗi "auth/unauthorized-domain", hãy thực hiện các bước sau:'}),Z.jsxs("ol",{className:"list-decimal list-inside space-y-1",children:[Z.jsx("li",{children:"Truy cập Firebase Console (Authentication - Settings - Authorized domains)."}),Z.jsx("li",{children:"Nhấn Add domain."}),Z.jsxs("li",{children:["Sao chép và dán tên miền này:"," ",Z.jsx("code",{className:"font-mono text-xs bg-red-200 p-1 rounded-md mt-1 break-all",children:T})]}),Z.jsx("li",{children:"Lưu lại và thử đăng nhập lại."})]})]}),Z.jsx("div",{className:"mb-6 border-b border-slate-200",children:Z.jsxs("nav",{className:"flex space-x-1",children:[Z.jsx("button",{onClick:()=>o("login"),className:`flex-1 py-3 px-4 font-semibold transition-all ${s==="login"?"text-blue-600 border-b-2 border-blue-600":"text-slate-500 hover:text-slate-700"}`,children:"Đăng nhập"}),Z.jsx("button",{onClick:()=>o("register"),className:`flex-1 py-3 px-4 font-semibold transition-all ${s==="register"?"text-blue-600 border-b-2 border-blue-600":"text-slate-500 hover:text-slate-700"}`,children:"Đăng ký"})]})}),s==="login"&&Z.jsxs("form",{onSubmit:$,className:"space-y-5",children:[Z.jsxs("div",{children:[Z.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Email"}),Z.jsx("input",{type:"email",value:u,onChange:z=>h(z.target.value),required:!0,className:"input-custom w-full px-4 py-3 border-2 border-slate-200 rounded-xl transition-all"})]}),Z.jsxs("div",{children:[Z.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Mật khẩu"}),Z.jsx("input",{type:"password",value:m,onChange:z=>g(z.target.value),required:!0,className:"input-custom w-full px-4 py-3 border-2 border-slate-200 rounded-xl transition-all"})]}),Z.jsx("button",{type:"submit",className:"btn-primary w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all",children:"Đăng nhập"})]}),s==="register"&&Z.jsxs("form",{onSubmit:W,className:"space-y-5",children:[Z.jsxs("div",{children:[Z.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Email"}),Z.jsx("input",{type:"email",value:u,onChange:z=>h(z.target.value),required:!0,className:"input-custom w-full px-4 py-3 border-2 border-slate-200 rounded-xl transition-all"})]}),Z.jsxs("div",{children:[Z.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Mật khẩu"}),Z.jsx("input",{type:"password",value:m,onChange:z=>g(z.target.value),required:!0,placeholder:"Ít nhất 6 ký tự",className:"input-custom w-full px-4 py-3 border-2 border-slate-200 rounded-xl transition-all"})]}),Z.jsx("button",{type:"submit",className:"btn-primary w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all",children:"Đăng ký"})]}),Z.jsxs("div",{className:"my-8 flex items-center",children:[Z.jsx("div",{className:"flex-1 border-t border-slate-200"}),Z.jsx("span",{className:"px-4 text-sm text-slate-500 font-medium",children:"hoặc"}),Z.jsx("div",{className:"flex-1 border-t border-slate-200"})]}),Z.jsxs("button",{onClick:U,className:"w-full flex items-center justify-center px-4 py-4 bg-white border-2 border-slate-200 rounded-xl shadow-sm hover:shadow-md hover:border-blue-300 transition-all group",children:[Z.jsx("img",{className:"w-6 h-6 mr-3",src:"https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",alt:"Google"}),Z.jsx("span",{className:"text-base font-semibold text-slate-700 group-hover:text-blue-600 transition-colors",children:"Tiếp tục với Google"})]})]}),Z.jsx(lC,{isOpen:_.isOpen,onClose:()=>w({..._,isOpen:!1}),title:_.title,message:_.message})]})},$y=({message:r="Đang tải...",fullScreen:e=!1})=>{const t=e?"flex justify-center items-center min-h-screen":"flex justify-center items-center min-h-[80vh]";return Z.jsx("div",{className:t,children:Z.jsxs("div",{className:"text-center",children:[Z.jsx("div",{className:"loader mx-auto mb-6"}),Z.jsx("h2",{className:"text-2xl font-bold gradient-text mb-2",children:r}),Z.jsx("p",{className:"text-slate-500",children:"Vui lòng chờ giây lát"})]})})},EC=({size:r="md"})=>{const e=r==="sm"?"loader-sm":r==="lg"?"w-16 h-16":"";return Z.jsx("div",{className:`loader ${e}`})},cC=et.lazy(()=>qy(()=>import("./AdminDashboard-BFyOKaFo.js"),__vite__mapDeps([0,1])).then(r=>({default:r.AdminDashboard}))),hC=et.lazy(()=>qy(()=>import("./StudentDashboard-CD8gDDoU.js"),__vite__mapDeps([2,1,3])).then(r=>({default:r.StudentDashboard}))),dC=()=>{const{user:r,loading:e}=mE();return e?Z.jsx($y,{message:"Đang tải ứng dụng...",fullScreen:!0}):r?Z.jsx(et.Suspense,{fallback:Z.jsx($y,{message:"Đang tải giao diện...",fullScreen:!0}),children:r.role==="admin"?Z.jsx(cC,{}):Z.jsx(hC,{})}):Z.jsx(uC,{})};function fC(){return Z.jsx(rC,{children:Z.jsx("div",{className:"bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen",children:Z.jsx(dC,{})})})}Lw.createRoot(document.getElementById("root")).render(Z.jsx(et.StrictMode,{children:Z.jsx(bw,{children:Z.jsx(fC,{})})}));export{oC as B,Pa as C,_C as G,EC as L,lC as M,We as T,mE as a,MR as b,gE as c,yC as d,Oa as e,ZR as f,gC as g,Ca as h,vC as i,Z as j,By as o,Uy as q,et as r,xu as u};
