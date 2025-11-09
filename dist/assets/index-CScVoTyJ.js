var kE=Object.defineProperty;var PE=(r,e,t)=>e in r?kE(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Na=(r,e,t)=>PE(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function xE(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var ud={exports:{}},Da={},cd={exports:{}},Ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ug;function NE(){if(ug)return Ae;ug=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),T=Symbol.iterator;function I(V){return V===null||typeof V!="object"?null:(V=T&&V[T]||V["@@iterator"],typeof V=="function"?V:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,q={};function B(V,G,Te){this.props=V,this.context=G,this.refs=q,this.updater=Te||U}B.prototype.isReactComponent={},B.prototype.setState=function(V,G){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,G,"setState")},B.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function ae(){}ae.prototype=B.prototype;function Z(V,G,Te){this.props=V,this.context=G,this.refs=q,this.updater=Te||U}var he=Z.prototype=new ae;he.constructor=Z,H(he,B.prototype),he.isPureReactComponent=!0;var Ce=Array.isArray,Be=Object.prototype.hasOwnProperty,Se={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function A(V,G,Te){var Ie,Re={},ke=null,Fe=null;if(G!=null)for(Ie in G.ref!==void 0&&(Fe=G.ref),G.key!==void 0&&(ke=""+G.key),G)Be.call(G,Ie)&&!x.hasOwnProperty(Ie)&&(Re[Ie]=G[Ie]);var Ve=arguments.length-2;if(Ve===1)Re.children=Te;else if(1<Ve){for(var $e=Array(Ve),zt=0;zt<Ve;zt++)$e[zt]=arguments[zt+2];Re.children=$e}if(V&&V.defaultProps)for(Ie in Ve=V.defaultProps,Ve)Re[Ie]===void 0&&(Re[Ie]=Ve[Ie]);return{$$typeof:r,type:V,key:ke,ref:Fe,props:Re,_owner:Se.current}}function k(V,G){return{$$typeof:r,type:V.type,key:G,ref:V.ref,props:V.props,_owner:V._owner}}function b(V){return typeof V=="object"&&V!==null&&V.$$typeof===r}function N(V){var G={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(Te){return G[Te]})}var O=/\/+/g;function R(V,G){return typeof V=="object"&&V!==null&&V.key!=null?N(""+V.key):G.toString(36)}function qe(V,G,Te,Ie,Re){var ke=typeof V;(ke==="undefined"||ke==="boolean")&&(V=null);var Fe=!1;if(V===null)Fe=!0;else switch(ke){case"string":case"number":Fe=!0;break;case"object":switch(V.$$typeof){case r:case e:Fe=!0}}if(Fe)return Fe=V,Re=Re(Fe),V=Ie===""?"."+R(Fe,0):Ie,Ce(Re)?(Te="",V!=null&&(Te=V.replace(O,"$&/")+"/"),qe(Re,G,Te,"",function(zt){return zt})):Re!=null&&(b(Re)&&(Re=k(Re,Te+(!Re.key||Fe&&Fe.key===Re.key?"":(""+Re.key).replace(O,"$&/")+"/")+V)),G.push(Re)),1;if(Fe=0,Ie=Ie===""?".":Ie+":",Ce(V))for(var Ve=0;Ve<V.length;Ve++){ke=V[Ve];var $e=Ie+R(ke,Ve);Fe+=qe(ke,G,Te,$e,Re)}else if($e=I(V),typeof $e=="function")for(V=$e.call(V),Ve=0;!(ke=V.next()).done;)ke=ke.value,$e=Ie+R(ke,Ve++),Fe+=qe(ke,G,Te,$e,Re);else if(ke==="object")throw G=String(V),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return Fe}function vt(V,G,Te){if(V==null)return V;var Ie=[],Re=0;return qe(V,Ie,"","",function(ke){return G.call(Te,ke,Re++)}),Ie}function Nt(V){if(V._status===-1){var G=V._result;G=G(),G.then(function(Te){(V._status===0||V._status===-1)&&(V._status=1,V._result=Te)},function(Te){(V._status===0||V._status===-1)&&(V._status=2,V._result=Te)}),V._status===-1&&(V._status=0,V._result=G)}if(V._status===1)return V._result.default;throw V._result}var Xe={current:null},ee={transition:null},de={ReactCurrentDispatcher:Xe,ReactCurrentBatchConfig:ee,ReactCurrentOwner:Se};function ie(){throw Error("act(...) is not supported in production builds of React.")}return Ae.Children={map:vt,forEach:function(V,G,Te){vt(V,function(){G.apply(this,arguments)},Te)},count:function(V){var G=0;return vt(V,function(){G++}),G},toArray:function(V){return vt(V,function(G){return G})||[]},only:function(V){if(!b(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Ae.Component=B,Ae.Fragment=t,Ae.Profiler=o,Ae.PureComponent=Z,Ae.StrictMode=s,Ae.Suspense=g,Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,Ae.act=ie,Ae.cloneElement=function(V,G,Te){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Ie=H({},V.props),Re=V.key,ke=V.ref,Fe=V._owner;if(G!=null){if(G.ref!==void 0&&(ke=G.ref,Fe=Se.current),G.key!==void 0&&(Re=""+G.key),V.type&&V.type.defaultProps)var Ve=V.type.defaultProps;for($e in G)Be.call(G,$e)&&!x.hasOwnProperty($e)&&(Ie[$e]=G[$e]===void 0&&Ve!==void 0?Ve[$e]:G[$e])}var $e=arguments.length-2;if($e===1)Ie.children=Te;else if(1<$e){Ve=Array($e);for(var zt=0;zt<$e;zt++)Ve[zt]=arguments[zt+2];Ie.children=Ve}return{$$typeof:r,type:V.type,key:Re,ref:ke,props:Ie,_owner:Fe}},Ae.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:l,_context:V},V.Consumer=V},Ae.createElement=A,Ae.createFactory=function(V){var G=A.bind(null,V);return G.type=V,G},Ae.createRef=function(){return{current:null}},Ae.forwardRef=function(V){return{$$typeof:m,render:V}},Ae.isValidElement=b,Ae.lazy=function(V){return{$$typeof:w,_payload:{_status:-1,_result:V},_init:Nt}},Ae.memo=function(V,G){return{$$typeof:_,type:V,compare:G===void 0?null:G}},Ae.startTransition=function(V){var G=ee.transition;ee.transition={};try{V()}finally{ee.transition=G}},Ae.unstable_act=ie,Ae.useCallback=function(V,G){return Xe.current.useCallback(V,G)},Ae.useContext=function(V){return Xe.current.useContext(V)},Ae.useDebugValue=function(){},Ae.useDeferredValue=function(V){return Xe.current.useDeferredValue(V)},Ae.useEffect=function(V,G){return Xe.current.useEffect(V,G)},Ae.useId=function(){return Xe.current.useId()},Ae.useImperativeHandle=function(V,G,Te){return Xe.current.useImperativeHandle(V,G,Te)},Ae.useInsertionEffect=function(V,G){return Xe.current.useInsertionEffect(V,G)},Ae.useLayoutEffect=function(V,G){return Xe.current.useLayoutEffect(V,G)},Ae.useMemo=function(V,G){return Xe.current.useMemo(V,G)},Ae.useReducer=function(V,G,Te){return Xe.current.useReducer(V,G,Te)},Ae.useRef=function(V){return Xe.current.useRef(V)},Ae.useState=function(V){return Xe.current.useState(V)},Ae.useSyncExternalStore=function(V,G,Te){return Xe.current.useSyncExternalStore(V,G,Te)},Ae.useTransition=function(){return Xe.current.useTransition()},Ae.version="18.3.1",Ae}var cg;function nf(){return cg||(cg=1,cd.exports=NE()),cd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hg;function DE(){if(hg)return Da;hg=1;var r=nf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(m,g,_){var w,T={},I=null,U=null;_!==void 0&&(I=""+_),g.key!==void 0&&(I=""+g.key),g.ref!==void 0&&(U=g.ref);for(w in g)s.call(g,w)&&!l.hasOwnProperty(w)&&(T[w]=g[w]);if(m&&m.defaultProps)for(w in g=m.defaultProps,g)T[w]===void 0&&(T[w]=g[w]);return{$$typeof:e,type:m,key:I,ref:U,props:T,_owner:o.current}}return Da.Fragment=t,Da.jsx=h,Da.jsxs=h,Da}var dg;function bE(){return dg||(dg=1,ud.exports=DE()),ud.exports}var C=bE(),ye=nf();const VE=xE(ye);var xu={},hd={exports:{}},Yt={},dd={exports:{}},fd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fg;function OE(){return fg||(fg=1,function(r){function e(ee,de){var ie=ee.length;ee.push(de);e:for(;0<ie;){var V=ie-1>>>1,G=ee[V];if(0<o(G,de))ee[V]=de,ee[ie]=G,ie=V;else break e}}function t(ee){return ee.length===0?null:ee[0]}function s(ee){if(ee.length===0)return null;var de=ee[0],ie=ee.pop();if(ie!==de){ee[0]=ie;e:for(var V=0,G=ee.length,Te=G>>>1;V<Te;){var Ie=2*(V+1)-1,Re=ee[Ie],ke=Ie+1,Fe=ee[ke];if(0>o(Re,ie))ke<G&&0>o(Fe,Re)?(ee[V]=Fe,ee[ke]=ie,V=ke):(ee[V]=Re,ee[Ie]=ie,V=Ie);else if(ke<G&&0>o(Fe,ie))ee[V]=Fe,ee[ke]=ie,V=ke;else break e}}return de}function o(ee,de){var ie=ee.sortIndex-de.sortIndex;return ie!==0?ie:ee.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,m=h.now();r.unstable_now=function(){return h.now()-m}}var g=[],_=[],w=1,T=null,I=3,U=!1,H=!1,q=!1,B=typeof setTimeout=="function"?setTimeout:null,ae=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function he(ee){for(var de=t(_);de!==null;){if(de.callback===null)s(_);else if(de.startTime<=ee)s(_),de.sortIndex=de.expirationTime,e(g,de);else break;de=t(_)}}function Ce(ee){if(q=!1,he(ee),!H)if(t(g)!==null)H=!0,Nt(Be);else{var de=t(_);de!==null&&Xe(Ce,de.startTime-ee)}}function Be(ee,de){H=!1,q&&(q=!1,ae(A),A=-1),U=!0;var ie=I;try{for(he(de),T=t(g);T!==null&&(!(T.expirationTime>de)||ee&&!N());){var V=T.callback;if(typeof V=="function"){T.callback=null,I=T.priorityLevel;var G=V(T.expirationTime<=de);de=r.unstable_now(),typeof G=="function"?T.callback=G:T===t(g)&&s(g),he(de)}else s(g);T=t(g)}if(T!==null)var Te=!0;else{var Ie=t(_);Ie!==null&&Xe(Ce,Ie.startTime-de),Te=!1}return Te}finally{T=null,I=ie,U=!1}}var Se=!1,x=null,A=-1,k=5,b=-1;function N(){return!(r.unstable_now()-b<k)}function O(){if(x!==null){var ee=r.unstable_now();b=ee;var de=!0;try{de=x(!0,ee)}finally{de?R():(Se=!1,x=null)}}else Se=!1}var R;if(typeof Z=="function")R=function(){Z(O)};else if(typeof MessageChannel<"u"){var qe=new MessageChannel,vt=qe.port2;qe.port1.onmessage=O,R=function(){vt.postMessage(null)}}else R=function(){B(O,0)};function Nt(ee){x=ee,Se||(Se=!0,R())}function Xe(ee,de){A=B(function(){ee(r.unstable_now())},de)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(ee){ee.callback=null},r.unstable_continueExecution=function(){H||U||(H=!0,Nt(Be))},r.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<ee?Math.floor(1e3/ee):5},r.unstable_getCurrentPriorityLevel=function(){return I},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(ee){switch(I){case 1:case 2:case 3:var de=3;break;default:de=I}var ie=I;I=de;try{return ee()}finally{I=ie}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(ee,de){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var ie=I;I=ee;try{return de()}finally{I=ie}},r.unstable_scheduleCallback=function(ee,de,ie){var V=r.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?V+ie:V):ie=V,ee){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=ie+G,ee={id:w++,callback:de,priorityLevel:ee,startTime:ie,expirationTime:G,sortIndex:-1},ie>V?(ee.sortIndex=ie,e(_,ee),t(g)===null&&ee===t(_)&&(q?(ae(A),A=-1):q=!0,Xe(Ce,ie-V))):(ee.sortIndex=G,e(g,ee),H||U||(H=!0,Nt(Be))),ee},r.unstable_shouldYield=N,r.unstable_wrapCallback=function(ee){var de=I;return function(){var ie=I;I=de;try{return ee.apply(this,arguments)}finally{I=ie}}}}(fd)),fd}var pg;function LE(){return pg||(pg=1,dd.exports=OE()),dd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mg;function ME(){if(mg)return Yt;mg=1;var r=nf(),e=LE();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},T={};function I(n){return g.call(T,n)?!0:g.call(w,n)?!1:_.test(n)?T[n]=!0:(w[n]=!0,!1)}function U(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function H(n,i,a,c){if(i===null||typeof i>"u"||U(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function q(n,i,a,c,d,f,v){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=f,this.removeEmptyString=v}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){B[n]=new q(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];B[i]=new q(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){B[n]=new q(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){B[n]=new q(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){B[n]=new q(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){B[n]=new q(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){B[n]=new q(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){B[n]=new q(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){B[n]=new q(n,5,!1,n.toLowerCase(),null,!1,!1)});var ae=/[\-:]([a-z])/g;function Z(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(ae,Z);B[i]=new q(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(ae,Z);B[i]=new q(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(ae,Z);B[i]=new q(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){B[n]=new q(n,1,!1,n.toLowerCase(),null,!1,!1)}),B.xlinkHref=new q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){B[n]=new q(n,1,!1,n.toLowerCase(),null,!0,!0)});function he(n,i,a,c){var d=B.hasOwnProperty(i)?B[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(H(i,a,d,c)&&(a=null),c||d===null?I(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var Ce=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Be=Symbol.for("react.element"),Se=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),N=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),qe=Symbol.for("react.suspense_list"),vt=Symbol.for("react.memo"),Nt=Symbol.for("react.lazy"),Xe=Symbol.for("react.offscreen"),ee=Symbol.iterator;function de(n){return n===null||typeof n!="object"?null:(n=ee&&n[ee]||n["@@iterator"],typeof n=="function"?n:null)}var ie=Object.assign,V;function G(n){if(V===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);V=i&&i[1]||""}return`
`+V+n}var Te=!1;function Ie(n,i){if(!n||Te)return"";Te=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(j){var c=j}Reflect.construct(n,[],i)}else{try{i.call()}catch(j){c=j}n.call(i.prototype)}else{try{throw Error()}catch(j){c=j}n()}}catch(j){if(j&&c&&typeof j.stack=="string"){for(var d=j.stack.split(`
`),f=c.stack.split(`
`),v=d.length-1,S=f.length-1;1<=v&&0<=S&&d[v]!==f[S];)S--;for(;1<=v&&0<=S;v--,S--)if(d[v]!==f[S]){if(v!==1||S!==1)do if(v--,S--,0>S||d[v]!==f[S]){var P=`
`+d[v].replace(" at new "," at ");return n.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",n.displayName)),P}while(1<=v&&0<=S);break}}}finally{Te=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?G(n):""}function Re(n){switch(n.tag){case 5:return G(n.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return n=Ie(n.type,!1),n;case 11:return n=Ie(n.type.render,!1),n;case 1:return n=Ie(n.type,!0),n;default:return""}}function ke(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case x:return"Fragment";case Se:return"Portal";case k:return"Profiler";case A:return"StrictMode";case R:return"Suspense";case qe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case N:return(n.displayName||"Context")+".Consumer";case b:return(n._context.displayName||"Context")+".Provider";case O:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case vt:return i=n.displayName||null,i!==null?i:ke(n.type)||"Memo";case Nt:i=n._payload,n=n._init;try{return ke(n(i))}catch{}}return null}function Fe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ke(i);case 8:return i===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ve(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function $e(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function zt(n){var i=$e(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,f=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,f.call(this,v)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function As(n){n._valueTracker||(n._valueTracker=zt(n))}function Mo(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=$e(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Mr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Cs(n,i){var a=i.checked;return ie({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function ml(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Ve(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Rs(n,i){i=i.checked,i!=null&&he(n,"checked",i,!1)}function Li(n,i){Rs(n,i);var a=Ve(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?ut(n,i.type,a):i.hasOwnProperty("defaultValue")&&ut(n,i.type,Ve(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Fo(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ut(n,i,a){(i!=="number"||Mr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var st=Array.isArray;function In(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Ve(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Uo(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ie({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function jo(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(st(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Ve(a)}}function gl(n,i){var a=Ve(i.value),c=Ve(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Fr(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function zo(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ks(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?zo(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ur,yl=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ur=Ur||document.createElement("div"),Ur.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ur.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Mi(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var jr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_l=["Webkit","ms","Moz","O"];Object.keys(jr).forEach(function(n){_l.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),jr[i]=jr[n]})});function zr(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||jr.hasOwnProperty(n)&&jr[n]?(""+i).trim():i+"px"}function Ps(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=zr(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Bo=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sn(n,i){if(i){if(Bo[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function xs(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Br=null;function Ns(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var lr=null,ur=null,nt=null;function $o(n){if(n=ga(n)){if(typeof lr!="function")throw Error(t(280));var i=n.stateNode;i&&(i=ql(i),lr(n.stateNode,n.type,i))}}function $r(n){ur?nt?nt.push(n):nt=[n]:ur=n}function Hr(){if(ur){var n=ur,i=nt;if(nt=ur=null,$o(n),i)for(n=0;n<i.length;n++)$o(i[n])}}function vl(n,i){return n(i)}function wl(){}var Ln=!1;function El(n,i,a){if(Ln)return n(i,a);Ln=!0;try{return vl(n,i,a)}finally{Ln=!1,(ur!==null||nt!==null)&&(wl(),Hr())}}function Fi(n,i){var a=n.stateNode;if(a===null)return null;var c=ql(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var qr=!1;if(m)try{var Wr={};Object.defineProperty(Wr,"passive",{get:function(){qr=!0}}),window.addEventListener("test",Wr,Wr),window.removeEventListener("test",Wr,Wr)}catch{qr=!1}function Tl(n,i,a,c,d,f,v,S,P){var j=Array.prototype.slice.call(arguments,3);try{i.apply(a,j)}catch(Q){this.onError(Q)}}var cr=!1,Mn=null,Ds=!1,dn=null,Il={onError:function(n){cr=!0,Mn=n}};function Sl(n,i,a,c,d,f,v,S,P){cr=!1,Mn=null,Tl.apply(Il,arguments)}function Ho(n,i,a,c,d,f,v,S,P){if(Sl.apply(this,arguments),cr){if(cr){var j=Mn;cr=!1,Mn=null}else throw Error(t(198));Ds||(Ds=!0,dn=j)}}function An(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function qo(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Al(n){if(An(n)!==n)throw Error(t(188))}function Cl(n){var i=n.alternate;if(!i){if(i=An(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var f=d.alternate;if(f===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===a)return Al(d),n;if(f===c)return Al(d),i;f=f.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=f;else{for(var v=!1,S=d.child;S;){if(S===a){v=!0,a=d,c=f;break}if(S===c){v=!0,c=d,a=f;break}S=S.sibling}if(!v){for(S=f.child;S;){if(S===a){v=!0,a=f,c=d;break}if(S===c){v=!0,c=f,a=d;break}S=S.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Rl(n){return n=Cl(n),n!==null?Ui(n):null}function Ui(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Ui(n);if(i!==null)return i;n=n.sibling}return null}var Wo=e.unstable_scheduleCallback,bs=e.unstable_cancelCallback,ji=e.unstable_shouldYield,hr=e.unstable_requestPaint,Ke=e.unstable_now,jc=e.unstable_getCurrentPriorityLevel,Vs=e.unstable_ImmediatePriority,Go=e.unstable_UserBlockingPriority,zi=e.unstable_NormalPriority,Ko=e.unstable_LowPriority,Os=e.unstable_IdlePriority,Bi=null,en=null;function kl(n){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(Bi,n,void 0,(n.current.flags&128)===128)}catch{}}var tn=Math.clz32?Math.clz32:$i,Fn=Math.log,fn=Math.LN2;function $i(n){return n>>>=0,n===0?32:31-(Fn(n)/fn|0)|0}var Un=64,Gr=4194304;function Me(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function dr(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,f=n.pingedLanes,v=a&268435455;if(v!==0){var S=v&~d;S!==0?c=Me(S):(f&=v,f!==0&&(c=Me(f)))}else v=a&~d,v!==0?c=Me(v):f!==0&&(c=Me(f));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,f=i&-i,d>=f||d===16&&(f&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-tn(i),d=1<<a,c|=n[a],i&=~d;return c}function Hi(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qi(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,f=n.pendingLanes;0<f;){var v=31-tn(f),S=1<<v,P=d[v];P===-1?((S&a)===0||(S&c)!==0)&&(d[v]=Hi(S,i)):P<=i&&(n.expiredLanes|=S),f&=~S}}function Qo(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Yo(){var n=Un;return Un<<=1,(Un&4194240)===0&&(Un=64),n}function Xo(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Wi(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-tn(i),n[i]=a}function zc(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-tn(a),f=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~f}}function Jo(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-tn(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var De=0;function jn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Zo,Ls,ea,ta,na,zn=!1,Ms=[],Bn=null,$n=null,St=null,Gi=new Map,fr=new Map,nn=[],Pl="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kr(n,i){switch(n){case"focusin":case"focusout":Bn=null;break;case"dragenter":case"dragleave":$n=null;break;case"mouseover":case"mouseout":St=null;break;case"pointerover":case"pointerout":Gi.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":fr.delete(i.pointerId)}}function Cn(n,i,a,c,d,f){return n===null||n.nativeEvent!==f?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:f,targetContainers:[d]},i!==null&&(i=ga(i),i!==null&&Ls(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function xl(n,i,a,c,d){switch(i){case"focusin":return Bn=Cn(Bn,n,i,a,c,d),!0;case"dragenter":return $n=Cn($n,n,i,a,c,d),!0;case"mouseover":return St=Cn(St,n,i,a,c,d),!0;case"pointerover":var f=d.pointerId;return Gi.set(f,Cn(Gi.get(f)||null,n,i,a,c,d)),!0;case"gotpointercapture":return f=d.pointerId,fr.set(f,Cn(fr.get(f)||null,n,i,a,c,d)),!0}return!1}function Fs(n){var i=Xi(n.target);if(i!==null){var a=An(i);if(a!==null){if(i=a.tag,i===13){if(i=qo(a),i!==null){n.blockedOn=i,na(n.priority,function(){ea(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function He(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Us(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Br=c,a.target.dispatchEvent(c),Br=null}else return i=ga(a),i!==null&&Ls(i),n.blockedOn=a,!1;i.shift()}return!0}function Nl(n,i,a){He(n)&&a.delete(i)}function Bc(){zn=!1,Bn!==null&&He(Bn)&&(Bn=null),$n!==null&&He($n)&&($n=null),St!==null&&He(St)&&(St=null),Gi.forEach(Nl),fr.forEach(Nl)}function Qr(n,i){n.blockedOn===i&&(n.blockedOn=null,zn||(zn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Bc)))}function Yr(n){function i(d){return Qr(d,n)}if(0<Ms.length){Qr(Ms[0],n);for(var a=1;a<Ms.length;a++){var c=Ms[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Bn!==null&&Qr(Bn,n),$n!==null&&Qr($n,n),St!==null&&Qr(St,n),Gi.forEach(i),fr.forEach(i),a=0;a<nn.length;a++)c=nn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<nn.length&&(a=nn[0],a.blockedOn===null);)Fs(a),a.blockedOn===null&&nn.shift()}var pr=Ce.ReactCurrentBatchConfig,mr=!0;function Hn(n,i,a,c){var d=De,f=pr.transition;pr.transition=null;try{De=1,ra(n,i,a,c)}finally{De=d,pr.transition=f}}function Dl(n,i,a,c){var d=De,f=pr.transition;pr.transition=null;try{De=4,ra(n,i,a,c)}finally{De=d,pr.transition=f}}function ra(n,i,a,c){if(mr){var d=Us(n,i,a,c);if(d===null)Zc(n,i,c,qn,a),Kr(n,c);else if(xl(d,n,i,a,c))c.stopPropagation();else if(Kr(n,c),i&4&&-1<Pl.indexOf(n)){for(;d!==null;){var f=ga(d);if(f!==null&&Zo(f),f=Us(n,i,a,c),f===null&&Zc(n,i,c,qn,a),f===d)break;d=f}d!==null&&c.stopPropagation()}else Zc(n,i,c,null,a)}}var qn=null;function Us(n,i,a,c){if(qn=null,n=Ns(c),n=Xi(n),n!==null)if(i=An(n),i===null)n=null;else if(a=i.tag,a===13){if(n=qo(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return qn=n,null}function js(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jc()){case Vs:return 1;case Go:return 4;case zi:case Ko:return 16;case Os:return 536870912;default:return 16}default:return 16}}var rn=null,zs=null,gr=null;function bl(){if(gr)return gr;var n,i=zs,a=i.length,c,d="value"in rn?rn.value:rn.textContent,f=d.length;for(n=0;n<a&&i[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&i[a-c]===d[f-c];c++);return gr=d.slice(n,1<c?1-c:void 0)}function Ki(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Wn(){return!0}function ia(){return!1}function Dt(n){function i(a,c,d,f,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var S in n)n.hasOwnProperty(S)&&(a=n[S],this[S]=a?a(f):f[S]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Wn:ia,this.isPropagationStopped=ia,this}return ie(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wn)},persist:function(){},isPersistent:Wn}),i}var Gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qi=Dt(Gn),Xr=ie({},Gn,{view:0,detail:0}),Bs=Dt(Xr),$s,Hs,sn,Yi=ie({},Xr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:we,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==sn&&(sn&&n.type==="mousemove"?($s=n.screenX-sn.screenX,Hs=n.screenY-sn.screenY):Hs=$s=0,sn=n),$s)},movementY:function(n){return"movementY"in n?n.movementY:Hs}}),sa=Dt(Yi),Vl=ie({},Yi,{dataTransfer:0}),Ol=Dt(Vl),qs=ie({},Xr,{relatedTarget:0}),At=Dt(qs),Ll=ie({},Gn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ml=Dt(Ll),Jr=ie({},Gn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),u=Dt(Jr),p=ie({},Gn,{data:0}),y=Dt(p),E={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},z={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function J(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=z[n])?!!i[n]:!1}function we(){return J}var ot=ie({},Xr,{key:function(n){if(n.key){var i=E[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ki(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?M[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:we,charCode:function(n){return n.type==="keypress"?Ki(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ki(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),je=Dt(ot),ct=ie({},Yi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),on=Dt(ct),yr=ie({},Xr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:we}),Kn=Dt(yr),Qn=ie({},Gn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ws=Dt(Qn),oa=ie({},Yi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Tw=Dt(oa),Iw=[9,13,27,32],$c=m&&"CompositionEvent"in window,aa=null;m&&"documentMode"in document&&(aa=document.documentMode);var Sw=m&&"TextEvent"in window&&!aa,tp=m&&(!$c||aa&&8<aa&&11>=aa),np=" ",rp=!1;function ip(n,i){switch(n){case"keyup":return Iw.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Gs=!1;function Aw(n,i){switch(n){case"compositionend":return sp(i);case"keypress":return i.which!==32?null:(rp=!0,np);case"textInput":return n=i.data,n===np&&rp?null:n;default:return null}}function Cw(n,i){if(Gs)return n==="compositionend"||!$c&&ip(n,i)?(n=bl(),gr=zs=rn=null,Gs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return tp&&i.locale!=="ko"?null:i.data;default:return null}}var Rw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function op(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Rw[n.type]:i==="textarea"}function ap(n,i,a,c){$r(c),i=Bl(i,"onChange"),0<i.length&&(a=new Qi("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var la=null,ua=null;function kw(n){Ap(n,0)}function Fl(n){var i=Js(n);if(Mo(i))return n}function Pw(n,i){if(n==="change")return i}var lp=!1;if(m){var Hc;if(m){var qc="oninput"in document;if(!qc){var up=document.createElement("div");up.setAttribute("oninput","return;"),qc=typeof up.oninput=="function"}Hc=qc}else Hc=!1;lp=Hc&&(!document.documentMode||9<document.documentMode)}function cp(){la&&(la.detachEvent("onpropertychange",hp),ua=la=null)}function hp(n){if(n.propertyName==="value"&&Fl(ua)){var i=[];ap(i,ua,n,Ns(n)),El(kw,i)}}function xw(n,i,a){n==="focusin"?(cp(),la=i,ua=a,la.attachEvent("onpropertychange",hp)):n==="focusout"&&cp()}function Nw(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Fl(ua)}function Dw(n,i){if(n==="click")return Fl(i)}function bw(n,i){if(n==="input"||n==="change")return Fl(i)}function Vw(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Rn=typeof Object.is=="function"?Object.is:Vw;function ca(n,i){if(Rn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(i,d)||!Rn(n[d],i[d]))return!1}return!0}function dp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function fp(n,i){var a=dp(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=dp(a)}}function pp(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?pp(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function mp(){for(var n=window,i=Mr();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Mr(n.document)}return i}function Wc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Ow(n){var i=mp(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&pp(a.ownerDocument.documentElement,a)){if(c!==null&&Wc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,f=Math.min(c.start,d);c=c.end===void 0?f:Math.min(c.end,d),!n.extend&&f>c&&(d=c,c=f,f=d),d=fp(a,f);var v=fp(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),f>c?(n.addRange(i),n.extend(v.node,v.offset)):(i.setEnd(v.node,v.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Lw=m&&"documentMode"in document&&11>=document.documentMode,Ks=null,Gc=null,ha=null,Kc=!1;function gp(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Kc||Ks==null||Ks!==Mr(c)||(c=Ks,"selectionStart"in c&&Wc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ha&&ca(ha,c)||(ha=c,c=Bl(Gc,"onSelect"),0<c.length&&(i=new Qi("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Ks)))}function Ul(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Qs={animationend:Ul("Animation","AnimationEnd"),animationiteration:Ul("Animation","AnimationIteration"),animationstart:Ul("Animation","AnimationStart"),transitionend:Ul("Transition","TransitionEnd")},Qc={},yp={};m&&(yp=document.createElement("div").style,"AnimationEvent"in window||(delete Qs.animationend.animation,delete Qs.animationiteration.animation,delete Qs.animationstart.animation),"TransitionEvent"in window||delete Qs.transitionend.transition);function jl(n){if(Qc[n])return Qc[n];if(!Qs[n])return n;var i=Qs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in yp)return Qc[n]=i[a];return n}var _p=jl("animationend"),vp=jl("animationiteration"),wp=jl("animationstart"),Ep=jl("transitionend"),Tp=new Map,Ip="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zr(n,i){Tp.set(n,i),l(i,[n])}for(var Yc=0;Yc<Ip.length;Yc++){var Xc=Ip[Yc],Mw=Xc.toLowerCase(),Fw=Xc[0].toUpperCase()+Xc.slice(1);Zr(Mw,"on"+Fw)}Zr(_p,"onAnimationEnd"),Zr(vp,"onAnimationIteration"),Zr(wp,"onAnimationStart"),Zr("dblclick","onDoubleClick"),Zr("focusin","onFocus"),Zr("focusout","onBlur"),Zr(Ep,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Uw=new Set("cancel close invalid load scroll toggle".split(" ").concat(da));function Sp(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Ho(c,i,void 0,n),n.currentTarget=null}function Ap(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var f=void 0;if(i)for(var v=c.length-1;0<=v;v--){var S=c[v],P=S.instance,j=S.currentTarget;if(S=S.listener,P!==f&&d.isPropagationStopped())break e;Sp(d,S,j),f=P}else for(v=0;v<c.length;v++){if(S=c[v],P=S.instance,j=S.currentTarget,S=S.listener,P!==f&&d.isPropagationStopped())break e;Sp(d,S,j),f=P}}}if(Ds)throw n=dn,Ds=!1,dn=null,n}function Qe(n,i){var a=i[sh];a===void 0&&(a=i[sh]=new Set);var c=n+"__bubble";a.has(c)||(Cp(i,n,2,!1),a.add(c))}function Jc(n,i,a){var c=0;i&&(c|=4),Cp(a,n,c,i)}var zl="_reactListening"+Math.random().toString(36).slice(2);function fa(n){if(!n[zl]){n[zl]=!0,s.forEach(function(a){a!=="selectionchange"&&(Uw.has(a)||Jc(a,!1,n),Jc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[zl]||(i[zl]=!0,Jc("selectionchange",!1,i))}}function Cp(n,i,a,c){switch(js(i)){case 1:var d=Hn;break;case 4:d=Dl;break;default:d=ra}a=d.bind(null,i,a,n),d=void 0,!qr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Zc(n,i,a,c,d){var f=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var S=c.stateNode.containerInfo;if(S===d||S.nodeType===8&&S.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var P=v.tag;if((P===3||P===4)&&(P=v.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;v=v.return}for(;S!==null;){if(v=Xi(S),v===null)return;if(P=v.tag,P===5||P===6){c=f=v;continue e}S=S.parentNode}}c=c.return}El(function(){var j=f,Q=Ns(a),Y=[];e:{var K=Tp.get(n);if(K!==void 0){var ne=Qi,oe=n;switch(n){case"keypress":if(Ki(a)===0)break e;case"keydown":case"keyup":ne=je;break;case"focusin":oe="focus",ne=At;break;case"focusout":oe="blur",ne=At;break;case"beforeblur":case"afterblur":ne=At;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ne=sa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ne=Ol;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ne=Kn;break;case _p:case vp:case wp:ne=Ml;break;case Ep:ne=Ws;break;case"scroll":ne=Bs;break;case"wheel":ne=Tw;break;case"copy":case"cut":case"paste":ne=u;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ne=on}var le=(i&4)!==0,at=!le&&n==="scroll",L=le?K!==null?K+"Capture":null:K;le=[];for(var D=j,F;D!==null;){F=D;var X=F.stateNode;if(F.tag===5&&X!==null&&(F=X,L!==null&&(X=Fi(D,L),X!=null&&le.push(pa(D,X,F)))),at)break;D=D.return}0<le.length&&(K=new ne(K,oe,null,a,Q),Y.push({event:K,listeners:le}))}}if((i&7)===0){e:{if(K=n==="mouseover"||n==="pointerover",ne=n==="mouseout"||n==="pointerout",K&&a!==Br&&(oe=a.relatedTarget||a.fromElement)&&(Xi(oe)||oe[_r]))break e;if((ne||K)&&(K=Q.window===Q?Q:(K=Q.ownerDocument)?K.defaultView||K.parentWindow:window,ne?(oe=a.relatedTarget||a.toElement,ne=j,oe=oe?Xi(oe):null,oe!==null&&(at=An(oe),oe!==at||oe.tag!==5&&oe.tag!==6)&&(oe=null)):(ne=null,oe=j),ne!==oe)){if(le=sa,X="onMouseLeave",L="onMouseEnter",D="mouse",(n==="pointerout"||n==="pointerover")&&(le=on,X="onPointerLeave",L="onPointerEnter",D="pointer"),at=ne==null?K:Js(ne),F=oe==null?K:Js(oe),K=new le(X,D+"leave",ne,a,Q),K.target=at,K.relatedTarget=F,X=null,Xi(Q)===j&&(le=new le(L,D+"enter",oe,a,Q),le.target=F,le.relatedTarget=at,X=le),at=X,ne&&oe)t:{for(le=ne,L=oe,D=0,F=le;F;F=Ys(F))D++;for(F=0,X=L;X;X=Ys(X))F++;for(;0<D-F;)le=Ys(le),D--;for(;0<F-D;)L=Ys(L),F--;for(;D--;){if(le===L||L!==null&&le===L.alternate)break t;le=Ys(le),L=Ys(L)}le=null}else le=null;ne!==null&&Rp(Y,K,ne,le,!1),oe!==null&&at!==null&&Rp(Y,at,oe,le,!0)}}e:{if(K=j?Js(j):window,ne=K.nodeName&&K.nodeName.toLowerCase(),ne==="select"||ne==="input"&&K.type==="file")var ue=Pw;else if(op(K))if(lp)ue=bw;else{ue=Nw;var fe=xw}else(ne=K.nodeName)&&ne.toLowerCase()==="input"&&(K.type==="checkbox"||K.type==="radio")&&(ue=Dw);if(ue&&(ue=ue(n,j))){ap(Y,ue,a,Q);break e}fe&&fe(n,K,j),n==="focusout"&&(fe=K._wrapperState)&&fe.controlled&&K.type==="number"&&ut(K,"number",K.value)}switch(fe=j?Js(j):window,n){case"focusin":(op(fe)||fe.contentEditable==="true")&&(Ks=fe,Gc=j,ha=null);break;case"focusout":ha=Gc=Ks=null;break;case"mousedown":Kc=!0;break;case"contextmenu":case"mouseup":case"dragend":Kc=!1,gp(Y,a,Q);break;case"selectionchange":if(Lw)break;case"keydown":case"keyup":gp(Y,a,Q)}var pe;if($c)e:{switch(n){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else Gs?ip(n,a)&&(_e="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&(tp&&a.locale!=="ko"&&(Gs||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&Gs&&(pe=bl()):(rn=Q,zs="value"in rn?rn.value:rn.textContent,Gs=!0)),fe=Bl(j,_e),0<fe.length&&(_e=new y(_e,n,null,a,Q),Y.push({event:_e,listeners:fe}),pe?_e.data=pe:(pe=sp(a),pe!==null&&(_e.data=pe)))),(pe=Sw?Aw(n,a):Cw(n,a))&&(j=Bl(j,"onBeforeInput"),0<j.length&&(Q=new y("onBeforeInput","beforeinput",null,a,Q),Y.push({event:Q,listeners:j}),Q.data=pe))}Ap(Y,i)})}function pa(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Bl(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,f=d.stateNode;d.tag===5&&f!==null&&(d=f,f=Fi(n,a),f!=null&&c.unshift(pa(n,f,d)),f=Fi(n,i),f!=null&&c.push(pa(n,f,d))),n=n.return}return c}function Ys(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Rp(n,i,a,c,d){for(var f=i._reactName,v=[];a!==null&&a!==c;){var S=a,P=S.alternate,j=S.stateNode;if(P!==null&&P===c)break;S.tag===5&&j!==null&&(S=j,d?(P=Fi(a,f),P!=null&&v.unshift(pa(a,P,S))):d||(P=Fi(a,f),P!=null&&v.push(pa(a,P,S)))),a=a.return}v.length!==0&&n.push({event:i,listeners:v})}var jw=/\r\n?/g,zw=/\u0000|\uFFFD/g;function kp(n){return(typeof n=="string"?n:""+n).replace(jw,`
`).replace(zw,"")}function $l(n,i,a){if(i=kp(i),kp(n)!==i&&a)throw Error(t(425))}function Hl(){}var eh=null,th=null;function nh(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var rh=typeof setTimeout=="function"?setTimeout:void 0,Bw=typeof clearTimeout=="function"?clearTimeout:void 0,Pp=typeof Promise=="function"?Promise:void 0,$w=typeof queueMicrotask=="function"?queueMicrotask:typeof Pp<"u"?function(n){return Pp.resolve(null).then(n).catch(Hw)}:rh;function Hw(n){setTimeout(function(){throw n})}function ih(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Yr(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Yr(i)}function ei(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function xp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Xs=Math.random().toString(36).slice(2),Yn="__reactFiber$"+Xs,ma="__reactProps$"+Xs,_r="__reactContainer$"+Xs,sh="__reactEvents$"+Xs,qw="__reactListeners$"+Xs,Ww="__reactHandles$"+Xs;function Xi(n){var i=n[Yn];if(i)return i;for(var a=n.parentNode;a;){if(i=a[_r]||a[Yn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=xp(n);n!==null;){if(a=n[Yn])return a;n=xp(n)}return i}n=a,a=n.parentNode}return null}function ga(n){return n=n[Yn]||n[_r],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Js(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function ql(n){return n[ma]||null}var oh=[],Zs=-1;function ti(n){return{current:n}}function Ye(n){0>Zs||(n.current=oh[Zs],oh[Zs]=null,Zs--)}function We(n,i){Zs++,oh[Zs]=n.current,n.current=i}var ni={},bt=ti(ni),qt=ti(!1),Ji=ni;function eo(n,i){var a=n.type.contextTypes;if(!a)return ni;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},f;for(f in a)d[f]=i[f];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Wt(n){return n=n.childContextTypes,n!=null}function Wl(){Ye(qt),Ye(bt)}function Np(n,i,a){if(bt.current!==ni)throw Error(t(168));We(bt,i),We(qt,a)}function Dp(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,Fe(n)||"Unknown",d));return ie({},a,c)}function Gl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ni,Ji=bt.current,We(bt,n),We(qt,qt.current),!0}function bp(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Dp(n,i,Ji),c.__reactInternalMemoizedMergedChildContext=n,Ye(qt),Ye(bt),We(bt,n)):Ye(qt),We(qt,a)}var vr=null,Kl=!1,ah=!1;function Vp(n){vr===null?vr=[n]:vr.push(n)}function Gw(n){Kl=!0,Vp(n)}function ri(){if(!ah&&vr!==null){ah=!0;var n=0,i=De;try{var a=vr;for(De=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}vr=null,Kl=!1}catch(d){throw vr!==null&&(vr=vr.slice(n+1)),Wo(Vs,ri),d}finally{De=i,ah=!1}}return null}var to=[],no=0,Ql=null,Yl=0,pn=[],mn=0,Zi=null,wr=1,Er="";function es(n,i){to[no++]=Yl,to[no++]=Ql,Ql=n,Yl=i}function Op(n,i,a){pn[mn++]=wr,pn[mn++]=Er,pn[mn++]=Zi,Zi=n;var c=wr;n=Er;var d=32-tn(c)-1;c&=~(1<<d),a+=1;var f=32-tn(i)+d;if(30<f){var v=d-d%5;f=(c&(1<<v)-1).toString(32),c>>=v,d-=v,wr=1<<32-tn(i)+d|a<<d|c,Er=f+n}else wr=1<<f|a<<d|c,Er=n}function lh(n){n.return!==null&&(es(n,1),Op(n,1,0))}function uh(n){for(;n===Ql;)Ql=to[--no],to[no]=null,Yl=to[--no],to[no]=null;for(;n===Zi;)Zi=pn[--mn],pn[mn]=null,Er=pn[--mn],pn[mn]=null,wr=pn[--mn],pn[mn]=null}var an=null,ln=null,Je=!1,kn=null;function Lp(n,i){var a=vn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Mp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,an=n,ln=ei(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,an=n,ln=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Zi!==null?{id:wr,overflow:Er}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=vn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,an=n,ln=null,!0):!1;default:return!1}}function ch(n){return(n.mode&1)!==0&&(n.flags&128)===0}function hh(n){if(Je){var i=ln;if(i){var a=i;if(!Mp(n,i)){if(ch(n))throw Error(t(418));i=ei(a.nextSibling);var c=an;i&&Mp(n,i)?Lp(c,a):(n.flags=n.flags&-4097|2,Je=!1,an=n)}}else{if(ch(n))throw Error(t(418));n.flags=n.flags&-4097|2,Je=!1,an=n}}}function Fp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;an=n}function Xl(n){if(n!==an)return!1;if(!Je)return Fp(n),Je=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!nh(n.type,n.memoizedProps)),i&&(i=ln)){if(ch(n))throw Up(),Error(t(418));for(;i;)Lp(n,i),i=ei(i.nextSibling)}if(Fp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){ln=ei(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}ln=null}}else ln=an?ei(n.stateNode.nextSibling):null;return!0}function Up(){for(var n=ln;n;)n=ei(n.nextSibling)}function ro(){ln=an=null,Je=!1}function dh(n){kn===null?kn=[n]:kn.push(n)}var Kw=Ce.ReactCurrentBatchConfig;function ya(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,f=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===f?i.ref:(i=function(v){var S=d.refs;v===null?delete S[f]:S[f]=v},i._stringRef=f,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Jl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function jp(n){var i=n._init;return i(n._payload)}function zp(n){function i(L,D){if(n){var F=L.deletions;F===null?(L.deletions=[D],L.flags|=16):F.push(D)}}function a(L,D){if(!n)return null;for(;D!==null;)i(L,D),D=D.sibling;return null}function c(L,D){for(L=new Map;D!==null;)D.key!==null?L.set(D.key,D):L.set(D.index,D),D=D.sibling;return L}function d(L,D){return L=hi(L,D),L.index=0,L.sibling=null,L}function f(L,D,F){return L.index=F,n?(F=L.alternate,F!==null?(F=F.index,F<D?(L.flags|=2,D):F):(L.flags|=2,D)):(L.flags|=1048576,D)}function v(L){return n&&L.alternate===null&&(L.flags|=2),L}function S(L,D,F,X){return D===null||D.tag!==6?(D=rd(F,L.mode,X),D.return=L,D):(D=d(D,F),D.return=L,D)}function P(L,D,F,X){var ue=F.type;return ue===x?Q(L,D,F.props.children,X,F.key):D!==null&&(D.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===Nt&&jp(ue)===D.type)?(X=d(D,F.props),X.ref=ya(L,D,F),X.return=L,X):(X=Tu(F.type,F.key,F.props,null,L.mode,X),X.ref=ya(L,D,F),X.return=L,X)}function j(L,D,F,X){return D===null||D.tag!==4||D.stateNode.containerInfo!==F.containerInfo||D.stateNode.implementation!==F.implementation?(D=id(F,L.mode,X),D.return=L,D):(D=d(D,F.children||[]),D.return=L,D)}function Q(L,D,F,X,ue){return D===null||D.tag!==7?(D=ls(F,L.mode,X,ue),D.return=L,D):(D=d(D,F),D.return=L,D)}function Y(L,D,F){if(typeof D=="string"&&D!==""||typeof D=="number")return D=rd(""+D,L.mode,F),D.return=L,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Be:return F=Tu(D.type,D.key,D.props,null,L.mode,F),F.ref=ya(L,null,D),F.return=L,F;case Se:return D=id(D,L.mode,F),D.return=L,D;case Nt:var X=D._init;return Y(L,X(D._payload),F)}if(st(D)||de(D))return D=ls(D,L.mode,F,null),D.return=L,D;Jl(L,D)}return null}function K(L,D,F,X){var ue=D!==null?D.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return ue!==null?null:S(L,D,""+F,X);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case Be:return F.key===ue?P(L,D,F,X):null;case Se:return F.key===ue?j(L,D,F,X):null;case Nt:return ue=F._init,K(L,D,ue(F._payload),X)}if(st(F)||de(F))return ue!==null?null:Q(L,D,F,X,null);Jl(L,F)}return null}function ne(L,D,F,X,ue){if(typeof X=="string"&&X!==""||typeof X=="number")return L=L.get(F)||null,S(D,L,""+X,ue);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case Be:return L=L.get(X.key===null?F:X.key)||null,P(D,L,X,ue);case Se:return L=L.get(X.key===null?F:X.key)||null,j(D,L,X,ue);case Nt:var fe=X._init;return ne(L,D,F,fe(X._payload),ue)}if(st(X)||de(X))return L=L.get(F)||null,Q(D,L,X,ue,null);Jl(D,X)}return null}function oe(L,D,F,X){for(var ue=null,fe=null,pe=D,_e=D=0,Tt=null;pe!==null&&_e<F.length;_e++){pe.index>_e?(Tt=pe,pe=null):Tt=pe.sibling;var Le=K(L,pe,F[_e],X);if(Le===null){pe===null&&(pe=Tt);break}n&&pe&&Le.alternate===null&&i(L,pe),D=f(Le,D,_e),fe===null?ue=Le:fe.sibling=Le,fe=Le,pe=Tt}if(_e===F.length)return a(L,pe),Je&&es(L,_e),ue;if(pe===null){for(;_e<F.length;_e++)pe=Y(L,F[_e],X),pe!==null&&(D=f(pe,D,_e),fe===null?ue=pe:fe.sibling=pe,fe=pe);return Je&&es(L,_e),ue}for(pe=c(L,pe);_e<F.length;_e++)Tt=ne(pe,L,_e,F[_e],X),Tt!==null&&(n&&Tt.alternate!==null&&pe.delete(Tt.key===null?_e:Tt.key),D=f(Tt,D,_e),fe===null?ue=Tt:fe.sibling=Tt,fe=Tt);return n&&pe.forEach(function(di){return i(L,di)}),Je&&es(L,_e),ue}function le(L,D,F,X){var ue=de(F);if(typeof ue!="function")throw Error(t(150));if(F=ue.call(F),F==null)throw Error(t(151));for(var fe=ue=null,pe=D,_e=D=0,Tt=null,Le=F.next();pe!==null&&!Le.done;_e++,Le=F.next()){pe.index>_e?(Tt=pe,pe=null):Tt=pe.sibling;var di=K(L,pe,Le.value,X);if(di===null){pe===null&&(pe=Tt);break}n&&pe&&di.alternate===null&&i(L,pe),D=f(di,D,_e),fe===null?ue=di:fe.sibling=di,fe=di,pe=Tt}if(Le.done)return a(L,pe),Je&&es(L,_e),ue;if(pe===null){for(;!Le.done;_e++,Le=F.next())Le=Y(L,Le.value,X),Le!==null&&(D=f(Le,D,_e),fe===null?ue=Le:fe.sibling=Le,fe=Le);return Je&&es(L,_e),ue}for(pe=c(L,pe);!Le.done;_e++,Le=F.next())Le=ne(pe,L,_e,Le.value,X),Le!==null&&(n&&Le.alternate!==null&&pe.delete(Le.key===null?_e:Le.key),D=f(Le,D,_e),fe===null?ue=Le:fe.sibling=Le,fe=Le);return n&&pe.forEach(function(RE){return i(L,RE)}),Je&&es(L,_e),ue}function at(L,D,F,X){if(typeof F=="object"&&F!==null&&F.type===x&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case Be:e:{for(var ue=F.key,fe=D;fe!==null;){if(fe.key===ue){if(ue=F.type,ue===x){if(fe.tag===7){a(L,fe.sibling),D=d(fe,F.props.children),D.return=L,L=D;break e}}else if(fe.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===Nt&&jp(ue)===fe.type){a(L,fe.sibling),D=d(fe,F.props),D.ref=ya(L,fe,F),D.return=L,L=D;break e}a(L,fe);break}else i(L,fe);fe=fe.sibling}F.type===x?(D=ls(F.props.children,L.mode,X,F.key),D.return=L,L=D):(X=Tu(F.type,F.key,F.props,null,L.mode,X),X.ref=ya(L,D,F),X.return=L,L=X)}return v(L);case Se:e:{for(fe=F.key;D!==null;){if(D.key===fe)if(D.tag===4&&D.stateNode.containerInfo===F.containerInfo&&D.stateNode.implementation===F.implementation){a(L,D.sibling),D=d(D,F.children||[]),D.return=L,L=D;break e}else{a(L,D);break}else i(L,D);D=D.sibling}D=id(F,L.mode,X),D.return=L,L=D}return v(L);case Nt:return fe=F._init,at(L,D,fe(F._payload),X)}if(st(F))return oe(L,D,F,X);if(de(F))return le(L,D,F,X);Jl(L,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,D!==null&&D.tag===6?(a(L,D.sibling),D=d(D,F),D.return=L,L=D):(a(L,D),D=rd(F,L.mode,X),D.return=L,L=D),v(L)):a(L,D)}return at}var io=zp(!0),Bp=zp(!1),Zl=ti(null),eu=null,so=null,fh=null;function ph(){fh=so=eu=null}function mh(n){var i=Zl.current;Ye(Zl),n._currentValue=i}function gh(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function oo(n,i){eu=n,fh=so=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Gt=!0),n.firstContext=null)}function gn(n){var i=n._currentValue;if(fh!==n)if(n={context:n,memoizedValue:i,next:null},so===null){if(eu===null)throw Error(t(308));so=n,eu.dependencies={lanes:0,firstContext:n}}else so=so.next=n;return i}var ts=null;function yh(n){ts===null?ts=[n]:ts.push(n)}function $p(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,yh(i)):(a.next=d.next,d.next=a),i.interleaved=a,Tr(n,c)}function Tr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ii=!1;function _h(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ir(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function si(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Oe&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Tr(n,a)}return d=c.interleaved,d===null?(i.next=i,yh(c)):(i.next=d.next,d.next=i),c.interleaved=i,Tr(n,a)}function tu(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Jo(n,a)}}function qp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};f===null?d=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?d=f=i:f=f.next=i}else d=f=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function nu(n,i,a,c){var d=n.updateQueue;ii=!1;var f=d.firstBaseUpdate,v=d.lastBaseUpdate,S=d.shared.pending;if(S!==null){d.shared.pending=null;var P=S,j=P.next;P.next=null,v===null?f=j:v.next=j,v=P;var Q=n.alternate;Q!==null&&(Q=Q.updateQueue,S=Q.lastBaseUpdate,S!==v&&(S===null?Q.firstBaseUpdate=j:S.next=j,Q.lastBaseUpdate=P))}if(f!==null){var Y=d.baseState;v=0,Q=j=P=null,S=f;do{var K=S.lane,ne=S.eventTime;if((c&K)===K){Q!==null&&(Q=Q.next={eventTime:ne,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var oe=n,le=S;switch(K=i,ne=a,le.tag){case 1:if(oe=le.payload,typeof oe=="function"){Y=oe.call(ne,Y,K);break e}Y=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=le.payload,K=typeof oe=="function"?oe.call(ne,Y,K):oe,K==null)break e;Y=ie({},Y,K);break e;case 2:ii=!0}}S.callback!==null&&S.lane!==0&&(n.flags|=64,K=d.effects,K===null?d.effects=[S]:K.push(S))}else ne={eventTime:ne,lane:K,tag:S.tag,payload:S.payload,callback:S.callback,next:null},Q===null?(j=Q=ne,P=Y):Q=Q.next=ne,v|=K;if(S=S.next,S===null){if(S=d.shared.pending,S===null)break;K=S,S=K.next,K.next=null,d.lastBaseUpdate=K,d.shared.pending=null}}while(!0);if(Q===null&&(P=Y),d.baseState=P,d.firstBaseUpdate=j,d.lastBaseUpdate=Q,i=d.shared.interleaved,i!==null){d=i;do v|=d.lane,d=d.next;while(d!==i)}else f===null&&(d.shared.lanes=0);is|=v,n.lanes=v,n.memoizedState=Y}}function Wp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var _a={},Xn=ti(_a),va=ti(_a),wa=ti(_a);function ns(n){if(n===_a)throw Error(t(174));return n}function vh(n,i){switch(We(wa,i),We(va,n),We(Xn,_a),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ks(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=ks(i,n)}Ye(Xn),We(Xn,i)}function ao(){Ye(Xn),Ye(va),Ye(wa)}function Gp(n){ns(wa.current);var i=ns(Xn.current),a=ks(i,n.type);i!==a&&(We(va,n),We(Xn,a))}function wh(n){va.current===n&&(Ye(Xn),Ye(va))}var Ze=ti(0);function ru(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Eh=[];function Th(){for(var n=0;n<Eh.length;n++)Eh[n]._workInProgressVersionPrimary=null;Eh.length=0}var iu=Ce.ReactCurrentDispatcher,Ih=Ce.ReactCurrentBatchConfig,rs=0,et=null,mt=null,wt=null,su=!1,Ea=!1,Ta=0,Qw=0;function Vt(){throw Error(t(321))}function Sh(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Rn(n[a],i[a]))return!1;return!0}function Ah(n,i,a,c,d,f){if(rs=f,et=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,iu.current=n===null||n.memoizedState===null?Zw:eE,n=a(c,d),Ea){f=0;do{if(Ea=!1,Ta=0,25<=f)throw Error(t(301));f+=1,wt=mt=null,i.updateQueue=null,iu.current=tE,n=a(c,d)}while(Ea)}if(iu.current=lu,i=mt!==null&&mt.next!==null,rs=0,wt=mt=et=null,su=!1,i)throw Error(t(300));return n}function Ch(){var n=Ta!==0;return Ta=0,n}function Jn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?et.memoizedState=wt=n:wt=wt.next=n,wt}function yn(){if(mt===null){var n=et.alternate;n=n!==null?n.memoizedState:null}else n=mt.next;var i=wt===null?et.memoizedState:wt.next;if(i!==null)wt=i,mt=n;else{if(n===null)throw Error(t(310));mt=n,n={memoizedState:mt.memoizedState,baseState:mt.baseState,baseQueue:mt.baseQueue,queue:mt.queue,next:null},wt===null?et.memoizedState=wt=n:wt=wt.next=n}return wt}function Ia(n,i){return typeof i=="function"?i(n):i}function Rh(n){var i=yn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=mt,d=c.baseQueue,f=a.pending;if(f!==null){if(d!==null){var v=d.next;d.next=f.next,f.next=v}c.baseQueue=d=f,a.pending=null}if(d!==null){f=d.next,c=c.baseState;var S=v=null,P=null,j=f;do{var Q=j.lane;if((rs&Q)===Q)P!==null&&(P=P.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),c=j.hasEagerState?j.eagerState:n(c,j.action);else{var Y={lane:Q,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};P===null?(S=P=Y,v=c):P=P.next=Y,et.lanes|=Q,is|=Q}j=j.next}while(j!==null&&j!==f);P===null?v=c:P.next=S,Rn(c,i.memoizedState)||(Gt=!0),i.memoizedState=c,i.baseState=v,i.baseQueue=P,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do f=d.lane,et.lanes|=f,is|=f,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function kh(n){var i=yn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,f=i.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do f=n(f,v.action),v=v.next;while(v!==d);Rn(f,i.memoizedState)||(Gt=!0),i.memoizedState=f,i.baseQueue===null&&(i.baseState=f),a.lastRenderedState=f}return[f,c]}function Kp(){}function Qp(n,i){var a=et,c=yn(),d=i(),f=!Rn(c.memoizedState,d);if(f&&(c.memoizedState=d,Gt=!0),c=c.queue,Ph(Jp.bind(null,a,c,n),[n]),c.getSnapshot!==i||f||wt!==null&&wt.memoizedState.tag&1){if(a.flags|=2048,Sa(9,Xp.bind(null,a,c,d,i),void 0,null),Et===null)throw Error(t(349));(rs&30)!==0||Yp(a,i,d)}return d}function Yp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=et.updateQueue,i===null?(i={lastEffect:null,stores:null},et.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Xp(n,i,a,c){i.value=a,i.getSnapshot=c,Zp(i)&&em(n)}function Jp(n,i,a){return a(function(){Zp(i)&&em(n)})}function Zp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Rn(n,a)}catch{return!0}}function em(n){var i=Tr(n,1);i!==null&&Dn(i,n,1,-1)}function tm(n){var i=Jn();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ia,lastRenderedState:n},i.queue=n,n=n.dispatch=Jw.bind(null,et,n),[i.memoizedState,n]}function Sa(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=et.updateQueue,i===null?(i={lastEffect:null,stores:null},et.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function nm(){return yn().memoizedState}function ou(n,i,a,c){var d=Jn();et.flags|=n,d.memoizedState=Sa(1|i,a,void 0,c===void 0?null:c)}function au(n,i,a,c){var d=yn();c=c===void 0?null:c;var f=void 0;if(mt!==null){var v=mt.memoizedState;if(f=v.destroy,c!==null&&Sh(c,v.deps)){d.memoizedState=Sa(i,a,f,c);return}}et.flags|=n,d.memoizedState=Sa(1|i,a,f,c)}function rm(n,i){return ou(8390656,8,n,i)}function Ph(n,i){return au(2048,8,n,i)}function im(n,i){return au(4,2,n,i)}function sm(n,i){return au(4,4,n,i)}function om(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function am(n,i,a){return a=a!=null?a.concat([n]):null,au(4,4,om.bind(null,i,n),a)}function xh(){}function lm(n,i){var a=yn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Sh(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function um(n,i){var a=yn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Sh(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function cm(n,i,a){return(rs&21)===0?(n.baseState&&(n.baseState=!1,Gt=!0),n.memoizedState=a):(Rn(a,i)||(a=Yo(),et.lanes|=a,is|=a,n.baseState=!0),i)}function Yw(n,i){var a=De;De=a!==0&&4>a?a:4,n(!0);var c=Ih.transition;Ih.transition={};try{n(!1),i()}finally{De=a,Ih.transition=c}}function hm(){return yn().memoizedState}function Xw(n,i,a){var c=ui(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},dm(n))fm(i,a);else if(a=$p(n,i,a,c),a!==null){var d=$t();Dn(a,n,c,d),pm(a,i,c)}}function Jw(n,i,a){var c=ui(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(dm(n))fm(i,d);else{var f=n.alternate;if(n.lanes===0&&(f===null||f.lanes===0)&&(f=i.lastRenderedReducer,f!==null))try{var v=i.lastRenderedState,S=f(v,a);if(d.hasEagerState=!0,d.eagerState=S,Rn(S,v)){var P=i.interleaved;P===null?(d.next=d,yh(i)):(d.next=P.next,P.next=d),i.interleaved=d;return}}catch{}finally{}a=$p(n,i,d,c),a!==null&&(d=$t(),Dn(a,n,c,d),pm(a,i,c))}}function dm(n){var i=n.alternate;return n===et||i!==null&&i===et}function fm(n,i){Ea=su=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function pm(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Jo(n,a)}}var lu={readContext:gn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},Zw={readContext:gn,useCallback:function(n,i){return Jn().memoizedState=[n,i===void 0?null:i],n},useContext:gn,useEffect:rm,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,ou(4194308,4,om.bind(null,i,n),a)},useLayoutEffect:function(n,i){return ou(4194308,4,n,i)},useInsertionEffect:function(n,i){return ou(4,2,n,i)},useMemo:function(n,i){var a=Jn();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Jn();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Xw.bind(null,et,n),[c.memoizedState,n]},useRef:function(n){var i=Jn();return n={current:n},i.memoizedState=n},useState:tm,useDebugValue:xh,useDeferredValue:function(n){return Jn().memoizedState=n},useTransition:function(){var n=tm(!1),i=n[0];return n=Yw.bind(null,n[1]),Jn().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=et,d=Jn();if(Je){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Et===null)throw Error(t(349));(rs&30)!==0||Yp(c,i,a)}d.memoizedState=a;var f={value:a,getSnapshot:i};return d.queue=f,rm(Jp.bind(null,c,f,n),[n]),c.flags|=2048,Sa(9,Xp.bind(null,c,f,a,i),void 0,null),a},useId:function(){var n=Jn(),i=Et.identifierPrefix;if(Je){var a=Er,c=wr;a=(c&~(1<<32-tn(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ta++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Qw++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},eE={readContext:gn,useCallback:lm,useContext:gn,useEffect:Ph,useImperativeHandle:am,useInsertionEffect:im,useLayoutEffect:sm,useMemo:um,useReducer:Rh,useRef:nm,useState:function(){return Rh(Ia)},useDebugValue:xh,useDeferredValue:function(n){var i=yn();return cm(i,mt.memoizedState,n)},useTransition:function(){var n=Rh(Ia)[0],i=yn().memoizedState;return[n,i]},useMutableSource:Kp,useSyncExternalStore:Qp,useId:hm,unstable_isNewReconciler:!1},tE={readContext:gn,useCallback:lm,useContext:gn,useEffect:Ph,useImperativeHandle:am,useInsertionEffect:im,useLayoutEffect:sm,useMemo:um,useReducer:kh,useRef:nm,useState:function(){return kh(Ia)},useDebugValue:xh,useDeferredValue:function(n){var i=yn();return mt===null?i.memoizedState=n:cm(i,mt.memoizedState,n)},useTransition:function(){var n=kh(Ia)[0],i=yn().memoizedState;return[n,i]},useMutableSource:Kp,useSyncExternalStore:Qp,useId:hm,unstable_isNewReconciler:!1};function Pn(n,i){if(n&&n.defaultProps){i=ie({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Nh(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ie({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var uu={isMounted:function(n){return(n=n._reactInternals)?An(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=$t(),d=ui(n),f=Ir(c,d);f.payload=i,a!=null&&(f.callback=a),i=si(n,f,d),i!==null&&(Dn(i,n,d,c),tu(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=$t(),d=ui(n),f=Ir(c,d);f.tag=1,f.payload=i,a!=null&&(f.callback=a),i=si(n,f,d),i!==null&&(Dn(i,n,d,c),tu(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=$t(),c=ui(n),d=Ir(a,c);d.tag=2,i!=null&&(d.callback=i),i=si(n,d,c),i!==null&&(Dn(i,n,c,a),tu(i,n,c))}};function mm(n,i,a,c,d,f,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,f,v):i.prototype&&i.prototype.isPureReactComponent?!ca(a,c)||!ca(d,f):!0}function gm(n,i,a){var c=!1,d=ni,f=i.contextType;return typeof f=="object"&&f!==null?f=gn(f):(d=Wt(i)?Ji:bt.current,c=i.contextTypes,f=(c=c!=null)?eo(n,d):ni),i=new i(a,f),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=uu,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=f),i}function ym(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&uu.enqueueReplaceState(i,i.state,null)}function Dh(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},_h(n);var f=i.contextType;typeof f=="object"&&f!==null?d.context=gn(f):(f=Wt(i)?Ji:bt.current,d.context=eo(n,f)),d.state=n.memoizedState,f=i.getDerivedStateFromProps,typeof f=="function"&&(Nh(n,i,f,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&uu.enqueueReplaceState(d,d.state,null),nu(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function lo(n,i){try{var a="",c=i;do a+=Re(c),c=c.return;while(c);var d=a}catch(f){d=`
Error generating stack: `+f.message+`
`+f.stack}return{value:n,source:i,stack:d,digest:null}}function bh(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Vh(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var nE=typeof WeakMap=="function"?WeakMap:Map;function _m(n,i,a){a=Ir(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){gu||(gu=!0,Qh=c),Vh(n,i)},a}function vm(n,i,a){a=Ir(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){Vh(n,i)}}var f=n.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(a.callback=function(){Vh(n,i),typeof c!="function"&&(ai===null?ai=new Set([this]):ai.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})}),a}function wm(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new nE;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=gE.bind(null,n,i,a),i.then(n,n))}function Em(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Tm(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Ir(-1,1),i.tag=2,si(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var rE=Ce.ReactCurrentOwner,Gt=!1;function Bt(n,i,a,c){i.child=n===null?Bp(i,null,a,c):io(i,n.child,a,c)}function Im(n,i,a,c,d){a=a.render;var f=i.ref;return oo(i,d),c=Ah(n,i,a,c,f,d),a=Ch(),n!==null&&!Gt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Sr(n,i,d)):(Je&&a&&lh(i),i.flags|=1,Bt(n,i,c,d),i.child)}function Sm(n,i,a,c,d){if(n===null){var f=a.type;return typeof f=="function"&&!nd(f)&&f.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=f,Am(n,i,f,c,d)):(n=Tu(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(f=n.child,(n.lanes&d)===0){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:ca,a(v,c)&&n.ref===i.ref)return Sr(n,i,d)}return i.flags|=1,n=hi(f,c),n.ref=i.ref,n.return=i,i.child=n}function Am(n,i,a,c,d){if(n!==null){var f=n.memoizedProps;if(ca(f,c)&&n.ref===i.ref)if(Gt=!1,i.pendingProps=c=f,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Gt=!0);else return i.lanes=n.lanes,Sr(n,i,d)}return Oh(n,i,a,c,d)}function Cm(n,i,a){var c=i.pendingProps,d=c.children,f=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(co,un),un|=a;else{if((a&1073741824)===0)return n=f!==null?f.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,We(co,un),un|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=f!==null?f.baseLanes:a,We(co,un),un|=c}else f!==null?(c=f.baseLanes|a,i.memoizedState=null):c=a,We(co,un),un|=c;return Bt(n,i,d,a),i.child}function Rm(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Oh(n,i,a,c,d){var f=Wt(a)?Ji:bt.current;return f=eo(i,f),oo(i,d),a=Ah(n,i,a,c,f,d),c=Ch(),n!==null&&!Gt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Sr(n,i,d)):(Je&&c&&lh(i),i.flags|=1,Bt(n,i,a,d),i.child)}function km(n,i,a,c,d){if(Wt(a)){var f=!0;Gl(i)}else f=!1;if(oo(i,d),i.stateNode===null)hu(n,i),gm(i,a,c),Dh(i,a,c,d),c=!0;else if(n===null){var v=i.stateNode,S=i.memoizedProps;v.props=S;var P=v.context,j=a.contextType;typeof j=="object"&&j!==null?j=gn(j):(j=Wt(a)?Ji:bt.current,j=eo(i,j));var Q=a.getDerivedStateFromProps,Y=typeof Q=="function"||typeof v.getSnapshotBeforeUpdate=="function";Y||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==c||P!==j)&&ym(i,v,c,j),ii=!1;var K=i.memoizedState;v.state=K,nu(i,c,v,d),P=i.memoizedState,S!==c||K!==P||qt.current||ii?(typeof Q=="function"&&(Nh(i,a,Q,c),P=i.memoizedState),(S=ii||mm(i,a,S,c,K,P,j))?(Y||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(i.flags|=4194308)):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=P),v.props=c,v.state=P,v.context=j,c=S):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{v=i.stateNode,Hp(n,i),S=i.memoizedProps,j=i.type===i.elementType?S:Pn(i.type,S),v.props=j,Y=i.pendingProps,K=v.context,P=a.contextType,typeof P=="object"&&P!==null?P=gn(P):(P=Wt(a)?Ji:bt.current,P=eo(i,P));var ne=a.getDerivedStateFromProps;(Q=typeof ne=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==Y||K!==P)&&ym(i,v,c,P),ii=!1,K=i.memoizedState,v.state=K,nu(i,c,v,d);var oe=i.memoizedState;S!==Y||K!==oe||qt.current||ii?(typeof ne=="function"&&(Nh(i,a,ne,c),oe=i.memoizedState),(j=ii||mm(i,a,j,c,K,oe,P)||!1)?(Q||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,oe,P),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,oe,P)),typeof v.componentDidUpdate=="function"&&(i.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof v.componentDidUpdate!="function"||S===n.memoizedProps&&K===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&K===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=oe),v.props=c,v.state=oe,v.context=P,c=j):(typeof v.componentDidUpdate!="function"||S===n.memoizedProps&&K===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&K===n.memoizedState||(i.flags|=1024),c=!1)}return Lh(n,i,a,c,f,d)}function Lh(n,i,a,c,d,f){Rm(n,i);var v=(i.flags&128)!==0;if(!c&&!v)return d&&bp(i,a,!1),Sr(n,i,f);c=i.stateNode,rE.current=i;var S=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&v?(i.child=io(i,n.child,null,f),i.child=io(i,null,S,f)):Bt(n,i,S,f),i.memoizedState=c.state,d&&bp(i,a,!0),i.child}function Pm(n){var i=n.stateNode;i.pendingContext?Np(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Np(n,i.context,!1),vh(n,i.containerInfo)}function xm(n,i,a,c,d){return ro(),dh(d),i.flags|=256,Bt(n,i,a,c),i.child}var Mh={dehydrated:null,treeContext:null,retryLane:0};function Fh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Nm(n,i,a){var c=i.pendingProps,d=Ze.current,f=!1,v=(i.flags&128)!==0,S;if((S=v)||(S=n!==null&&n.memoizedState===null?!1:(d&2)!==0),S?(f=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),We(Ze,d&1),n===null)return hh(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(v=c.children,n=c.fallback,f?(c=i.mode,f=i.child,v={mode:"hidden",children:v},(c&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=v):f=Iu(v,c,0,null),n=ls(n,c,a,null),f.return=i,n.return=i,f.sibling=n,i.child=f,i.child.memoizedState=Fh(a),i.memoizedState=Mh,n):Uh(i,v));if(d=n.memoizedState,d!==null&&(S=d.dehydrated,S!==null))return iE(n,i,v,c,S,d,a);if(f){f=c.fallback,v=i.mode,d=n.child,S=d.sibling;var P={mode:"hidden",children:c.children};return(v&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=P,i.deletions=null):(c=hi(d,P),c.subtreeFlags=d.subtreeFlags&14680064),S!==null?f=hi(S,f):(f=ls(f,v,a,null),f.flags|=2),f.return=i,c.return=i,c.sibling=f,i.child=c,c=f,f=i.child,v=n.child.memoizedState,v=v===null?Fh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},f.memoizedState=v,f.childLanes=n.childLanes&~a,i.memoizedState=Mh,c}return f=n.child,n=f.sibling,c=hi(f,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Uh(n,i){return i=Iu({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function cu(n,i,a,c){return c!==null&&dh(c),io(i,n.child,null,a),n=Uh(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function iE(n,i,a,c,d,f,v){if(a)return i.flags&256?(i.flags&=-257,c=bh(Error(t(422))),cu(n,i,v,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(f=c.fallback,d=i.mode,c=Iu({mode:"visible",children:c.children},d,0,null),f=ls(f,d,v,null),f.flags|=2,c.return=i,f.return=i,c.sibling=f,i.child=c,(i.mode&1)!==0&&io(i,n.child,null,v),i.child.memoizedState=Fh(v),i.memoizedState=Mh,f);if((i.mode&1)===0)return cu(n,i,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var S=c.dgst;return c=S,f=Error(t(419)),c=bh(f,c,void 0),cu(n,i,v,c)}if(S=(v&n.childLanes)!==0,Gt||S){if(c=Et,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==f.retryLane&&(f.retryLane=d,Tr(n,d),Dn(c,n,d,-1))}return td(),c=bh(Error(t(421))),cu(n,i,v,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=yE.bind(null,n),d._reactRetry=i,null):(n=f.treeContext,ln=ei(d.nextSibling),an=i,Je=!0,kn=null,n!==null&&(pn[mn++]=wr,pn[mn++]=Er,pn[mn++]=Zi,wr=n.id,Er=n.overflow,Zi=i),i=Uh(i,c.children),i.flags|=4096,i)}function Dm(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),gh(n.return,i,a)}function jh(n,i,a,c,d){var f=n.memoizedState;f===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(f.isBackwards=i,f.rendering=null,f.renderingStartTime=0,f.last=c,f.tail=a,f.tailMode=d)}function bm(n,i,a){var c=i.pendingProps,d=c.revealOrder,f=c.tail;if(Bt(n,i,c.children,a),c=Ze.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Dm(n,a,i);else if(n.tag===19)Dm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(We(Ze,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&ru(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),jh(i,!1,d,a,f);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&ru(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}jh(i,!0,a,null,f);break;case"together":jh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function hu(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Sr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),is|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=hi(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=hi(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function sE(n,i,a){switch(i.tag){case 3:Pm(i),ro();break;case 5:Gp(i);break;case 1:Wt(i.type)&&Gl(i);break;case 4:vh(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;We(Zl,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(We(Ze,Ze.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Nm(n,i,a):(We(Ze,Ze.current&1),n=Sr(n,i,a),n!==null?n.sibling:null);We(Ze,Ze.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return bm(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),We(Ze,Ze.current),c)break;return null;case 22:case 23:return i.lanes=0,Cm(n,i,a)}return Sr(n,i,a)}var Vm,zh,Om,Lm;Vm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},zh=function(){},Om=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,ns(Xn.current);var f=null;switch(a){case"input":d=Cs(n,d),c=Cs(n,c),f=[];break;case"select":d=ie({},d,{value:void 0}),c=ie({},c,{value:void 0}),f=[];break;case"textarea":d=Uo(n,d),c=Uo(n,c),f=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Hl)}Sn(a,c);var v;a=null;for(j in d)if(!c.hasOwnProperty(j)&&d.hasOwnProperty(j)&&d[j]!=null)if(j==="style"){var S=d[j];for(v in S)S.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(o.hasOwnProperty(j)?f||(f=[]):(f=f||[]).push(j,null));for(j in c){var P=c[j];if(S=d!=null?d[j]:void 0,c.hasOwnProperty(j)&&P!==S&&(P!=null||S!=null))if(j==="style")if(S){for(v in S)!S.hasOwnProperty(v)||P&&P.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in P)P.hasOwnProperty(v)&&S[v]!==P[v]&&(a||(a={}),a[v]=P[v])}else a||(f||(f=[]),f.push(j,a)),a=P;else j==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,S=S?S.__html:void 0,P!=null&&S!==P&&(f=f||[]).push(j,P)):j==="children"?typeof P!="string"&&typeof P!="number"||(f=f||[]).push(j,""+P):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(o.hasOwnProperty(j)?(P!=null&&j==="onScroll"&&Qe("scroll",n),f||S===P||(f=[])):(f=f||[]).push(j,P))}a&&(f=f||[]).push("style",a);var j=f;(i.updateQueue=j)&&(i.flags|=4)}},Lm=function(n,i,a,c){a!==c&&(i.flags|=4)};function Aa(n,i){if(!Je)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Ot(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function oE(n,i,a){var c=i.pendingProps;switch(uh(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(i),null;case 1:return Wt(i.type)&&Wl(),Ot(i),null;case 3:return c=i.stateNode,ao(),Ye(qt),Ye(bt),Th(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Xl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,kn!==null&&(Jh(kn),kn=null))),zh(n,i),Ot(i),null;case 5:wh(i);var d=ns(wa.current);if(a=i.type,n!==null&&i.stateNode!=null)Om(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Ot(i),null}if(n=ns(Xn.current),Xl(i)){c=i.stateNode,a=i.type;var f=i.memoizedProps;switch(c[Yn]=i,c[ma]=f,n=(i.mode&1)!==0,a){case"dialog":Qe("cancel",c),Qe("close",c);break;case"iframe":case"object":case"embed":Qe("load",c);break;case"video":case"audio":for(d=0;d<da.length;d++)Qe(da[d],c);break;case"source":Qe("error",c);break;case"img":case"image":case"link":Qe("error",c),Qe("load",c);break;case"details":Qe("toggle",c);break;case"input":ml(c,f),Qe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!f.multiple},Qe("invalid",c);break;case"textarea":jo(c,f),Qe("invalid",c)}Sn(a,f),d=null;for(var v in f)if(f.hasOwnProperty(v)){var S=f[v];v==="children"?typeof S=="string"?c.textContent!==S&&(f.suppressHydrationWarning!==!0&&$l(c.textContent,S,n),d=["children",S]):typeof S=="number"&&c.textContent!==""+S&&(f.suppressHydrationWarning!==!0&&$l(c.textContent,S,n),d=["children",""+S]):o.hasOwnProperty(v)&&S!=null&&v==="onScroll"&&Qe("scroll",c)}switch(a){case"input":As(c),Fo(c,f,!0);break;case"textarea":As(c),Fr(c);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(c.onclick=Hl)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=zo(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[Yn]=i,n[ma]=c,Vm(n,i,!1,!1),i.stateNode=n;e:{switch(v=xs(a,c),a){case"dialog":Qe("cancel",n),Qe("close",n),d=c;break;case"iframe":case"object":case"embed":Qe("load",n),d=c;break;case"video":case"audio":for(d=0;d<da.length;d++)Qe(da[d],n);d=c;break;case"source":Qe("error",n),d=c;break;case"img":case"image":case"link":Qe("error",n),Qe("load",n),d=c;break;case"details":Qe("toggle",n),d=c;break;case"input":ml(n,c),d=Cs(n,c),Qe("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ie({},c,{value:void 0}),Qe("invalid",n);break;case"textarea":jo(n,c),d=Uo(n,c),Qe("invalid",n);break;default:d=c}Sn(a,d),S=d;for(f in S)if(S.hasOwnProperty(f)){var P=S[f];f==="style"?Ps(n,P):f==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&yl(n,P)):f==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&Mi(n,P):typeof P=="number"&&Mi(n,""+P):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(o.hasOwnProperty(f)?P!=null&&f==="onScroll"&&Qe("scroll",n):P!=null&&he(n,f,P,v))}switch(a){case"input":As(n),Fo(n,c,!1);break;case"textarea":As(n),Fr(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Ve(c.value));break;case"select":n.multiple=!!c.multiple,f=c.value,f!=null?In(n,!!c.multiple,f,!1):c.defaultValue!=null&&In(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Hl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Ot(i),null;case 6:if(n&&i.stateNode!=null)Lm(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=ns(wa.current),ns(Xn.current),Xl(i)){if(c=i.stateNode,a=i.memoizedProps,c[Yn]=i,(f=c.nodeValue!==a)&&(n=an,n!==null))switch(n.tag){case 3:$l(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&$l(c.nodeValue,a,(n.mode&1)!==0)}f&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Yn]=i,i.stateNode=c}return Ot(i),null;case 13:if(Ye(Ze),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Je&&ln!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Up(),ro(),i.flags|=98560,f=!1;else if(f=Xl(i),c!==null&&c.dehydrated!==null){if(n===null){if(!f)throw Error(t(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(t(317));f[Yn]=i}else ro(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ot(i),f=!1}else kn!==null&&(Jh(kn),kn=null),f=!0;if(!f)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Ze.current&1)!==0?gt===0&&(gt=3):td())),i.updateQueue!==null&&(i.flags|=4),Ot(i),null);case 4:return ao(),zh(n,i),n===null&&fa(i.stateNode.containerInfo),Ot(i),null;case 10:return mh(i.type._context),Ot(i),null;case 17:return Wt(i.type)&&Wl(),Ot(i),null;case 19:if(Ye(Ze),f=i.memoizedState,f===null)return Ot(i),null;if(c=(i.flags&128)!==0,v=f.rendering,v===null)if(c)Aa(f,!1);else{if(gt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(v=ru(n),v!==null){for(i.flags|=128,Aa(f,!1),c=v.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)f=a,n=c,f.flags&=14680066,v=f.alternate,v===null?(f.childLanes=0,f.lanes=n,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=v.childLanes,f.lanes=v.lanes,f.child=v.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=v.memoizedProps,f.memoizedState=v.memoizedState,f.updateQueue=v.updateQueue,f.type=v.type,n=v.dependencies,f.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return We(Ze,Ze.current&1|2),i.child}n=n.sibling}f.tail!==null&&Ke()>ho&&(i.flags|=128,c=!0,Aa(f,!1),i.lanes=4194304)}else{if(!c)if(n=ru(v),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Aa(f,!0),f.tail===null&&f.tailMode==="hidden"&&!v.alternate&&!Je)return Ot(i),null}else 2*Ke()-f.renderingStartTime>ho&&a!==1073741824&&(i.flags|=128,c=!0,Aa(f,!1),i.lanes=4194304);f.isBackwards?(v.sibling=i.child,i.child=v):(a=f.last,a!==null?a.sibling=v:i.child=v,f.last=v)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=Ke(),i.sibling=null,a=Ze.current,We(Ze,c?a&1|2:a&1),i):(Ot(i),null);case 22:case 23:return ed(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(un&1073741824)!==0&&(Ot(i),i.subtreeFlags&6&&(i.flags|=8192)):Ot(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function aE(n,i){switch(uh(i),i.tag){case 1:return Wt(i.type)&&Wl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ao(),Ye(qt),Ye(bt),Th(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return wh(i),null;case 13:if(Ye(Ze),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ro()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ye(Ze),null;case 4:return ao(),null;case 10:return mh(i.type._context),null;case 22:case 23:return ed(),null;case 24:return null;default:return null}}var du=!1,Lt=!1,lE=typeof WeakSet=="function"?WeakSet:Set,se=null;function uo(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){rt(n,i,c)}else a.current=null}function Bh(n,i,a){try{a()}catch(c){rt(n,i,c)}}var Mm=!1;function uE(n,i){if(eh=mr,n=mp(),Wc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,f=c.focusNode;c=c.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,S=-1,P=-1,j=0,Q=0,Y=n,K=null;t:for(;;){for(var ne;Y!==a||d!==0&&Y.nodeType!==3||(S=v+d),Y!==f||c!==0&&Y.nodeType!==3||(P=v+c),Y.nodeType===3&&(v+=Y.nodeValue.length),(ne=Y.firstChild)!==null;)K=Y,Y=ne;for(;;){if(Y===n)break t;if(K===a&&++j===d&&(S=v),K===f&&++Q===c&&(P=v),(ne=Y.nextSibling)!==null)break;Y=K,K=Y.parentNode}Y=ne}a=S===-1||P===-1?null:{start:S,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(th={focusedElem:n,selectionRange:a},mr=!1,se=i;se!==null;)if(i=se,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,se=n;else for(;se!==null;){i=se;try{var oe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(oe!==null){var le=oe.memoizedProps,at=oe.memoizedState,L=i.stateNode,D=L.getSnapshotBeforeUpdate(i.elementType===i.type?le:Pn(i.type,le),at);L.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var F=i.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(X){rt(i,i.return,X)}if(n=i.sibling,n!==null){n.return=i.return,se=n;break}se=i.return}return oe=Mm,Mm=!1,oe}function Ca(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var f=d.destroy;d.destroy=void 0,f!==void 0&&Bh(i,a,f)}d=d.next}while(d!==c)}}function fu(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function $h(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Fm(n){var i=n.alternate;i!==null&&(n.alternate=null,Fm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Yn],delete i[ma],delete i[sh],delete i[qw],delete i[Ww])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Um(n){return n.tag===5||n.tag===3||n.tag===4}function jm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Um(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Hh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Hl));else if(c!==4&&(n=n.child,n!==null))for(Hh(n,i,a),n=n.sibling;n!==null;)Hh(n,i,a),n=n.sibling}function qh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(qh(n,i,a),n=n.sibling;n!==null;)qh(n,i,a),n=n.sibling}var Ct=null,xn=!1;function oi(n,i,a){for(a=a.child;a!==null;)zm(n,i,a),a=a.sibling}function zm(n,i,a){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(Bi,a)}catch{}switch(a.tag){case 5:Lt||uo(a,i);case 6:var c=Ct,d=xn;Ct=null,oi(n,i,a),Ct=c,xn=d,Ct!==null&&(xn?(n=Ct,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Ct.removeChild(a.stateNode));break;case 18:Ct!==null&&(xn?(n=Ct,a=a.stateNode,n.nodeType===8?ih(n.parentNode,a):n.nodeType===1&&ih(n,a),Yr(n)):ih(Ct,a.stateNode));break;case 4:c=Ct,d=xn,Ct=a.stateNode.containerInfo,xn=!0,oi(n,i,a),Ct=c,xn=d;break;case 0:case 11:case 14:case 15:if(!Lt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var f=d,v=f.destroy;f=f.tag,v!==void 0&&((f&2)!==0||(f&4)!==0)&&Bh(a,i,v),d=d.next}while(d!==c)}oi(n,i,a);break;case 1:if(!Lt&&(uo(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(S){rt(a,i,S)}oi(n,i,a);break;case 21:oi(n,i,a);break;case 22:a.mode&1?(Lt=(c=Lt)||a.memoizedState!==null,oi(n,i,a),Lt=c):oi(n,i,a);break;default:oi(n,i,a)}}function Bm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new lE),i.forEach(function(c){var d=_E.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Nn(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var f=n,v=i,S=v;e:for(;S!==null;){switch(S.tag){case 5:Ct=S.stateNode,xn=!1;break e;case 3:Ct=S.stateNode.containerInfo,xn=!0;break e;case 4:Ct=S.stateNode.containerInfo,xn=!0;break e}S=S.return}if(Ct===null)throw Error(t(160));zm(f,v,d),Ct=null,xn=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(j){rt(d,i,j)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)$m(i,n),i=i.sibling}function $m(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Nn(i,n),Zn(n),c&4){try{Ca(3,n,n.return),fu(3,n)}catch(le){rt(n,n.return,le)}try{Ca(5,n,n.return)}catch(le){rt(n,n.return,le)}}break;case 1:Nn(i,n),Zn(n),c&512&&a!==null&&uo(a,a.return);break;case 5:if(Nn(i,n),Zn(n),c&512&&a!==null&&uo(a,a.return),n.flags&32){var d=n.stateNode;try{Mi(d,"")}catch(le){rt(n,n.return,le)}}if(c&4&&(d=n.stateNode,d!=null)){var f=n.memoizedProps,v=a!==null?a.memoizedProps:f,S=n.type,P=n.updateQueue;if(n.updateQueue=null,P!==null)try{S==="input"&&f.type==="radio"&&f.name!=null&&Rs(d,f),xs(S,v);var j=xs(S,f);for(v=0;v<P.length;v+=2){var Q=P[v],Y=P[v+1];Q==="style"?Ps(d,Y):Q==="dangerouslySetInnerHTML"?yl(d,Y):Q==="children"?Mi(d,Y):he(d,Q,Y,j)}switch(S){case"input":Li(d,f);break;case"textarea":gl(d,f);break;case"select":var K=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!f.multiple;var ne=f.value;ne!=null?In(d,!!f.multiple,ne,!1):K!==!!f.multiple&&(f.defaultValue!=null?In(d,!!f.multiple,f.defaultValue,!0):In(d,!!f.multiple,f.multiple?[]:"",!1))}d[ma]=f}catch(le){rt(n,n.return,le)}}break;case 6:if(Nn(i,n),Zn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,f=n.memoizedProps;try{d.nodeValue=f}catch(le){rt(n,n.return,le)}}break;case 3:if(Nn(i,n),Zn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Yr(i.containerInfo)}catch(le){rt(n,n.return,le)}break;case 4:Nn(i,n),Zn(n);break;case 13:Nn(i,n),Zn(n),d=n.child,d.flags&8192&&(f=d.memoizedState!==null,d.stateNode.isHidden=f,!f||d.alternate!==null&&d.alternate.memoizedState!==null||(Kh=Ke())),c&4&&Bm(n);break;case 22:if(Q=a!==null&&a.memoizedState!==null,n.mode&1?(Lt=(j=Lt)||Q,Nn(i,n),Lt=j):Nn(i,n),Zn(n),c&8192){if(j=n.memoizedState!==null,(n.stateNode.isHidden=j)&&!Q&&(n.mode&1)!==0)for(se=n,Q=n.child;Q!==null;){for(Y=se=Q;se!==null;){switch(K=se,ne=K.child,K.tag){case 0:case 11:case 14:case 15:Ca(4,K,K.return);break;case 1:uo(K,K.return);var oe=K.stateNode;if(typeof oe.componentWillUnmount=="function"){c=K,a=K.return;try{i=c,oe.props=i.memoizedProps,oe.state=i.memoizedState,oe.componentWillUnmount()}catch(le){rt(c,a,le)}}break;case 5:uo(K,K.return);break;case 22:if(K.memoizedState!==null){Wm(Y);continue}}ne!==null?(ne.return=K,se=ne):Wm(Y)}Q=Q.sibling}e:for(Q=null,Y=n;;){if(Y.tag===5){if(Q===null){Q=Y;try{d=Y.stateNode,j?(f=d.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(S=Y.stateNode,P=Y.memoizedProps.style,v=P!=null&&P.hasOwnProperty("display")?P.display:null,S.style.display=zr("display",v))}catch(le){rt(n,n.return,le)}}}else if(Y.tag===6){if(Q===null)try{Y.stateNode.nodeValue=j?"":Y.memoizedProps}catch(le){rt(n,n.return,le)}}else if((Y.tag!==22&&Y.tag!==23||Y.memoizedState===null||Y===n)&&Y.child!==null){Y.child.return=Y,Y=Y.child;continue}if(Y===n)break e;for(;Y.sibling===null;){if(Y.return===null||Y.return===n)break e;Q===Y&&(Q=null),Y=Y.return}Q===Y&&(Q=null),Y.sibling.return=Y.return,Y=Y.sibling}}break;case 19:Nn(i,n),Zn(n),c&4&&Bm(n);break;case 21:break;default:Nn(i,n),Zn(n)}}function Zn(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Um(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Mi(d,""),c.flags&=-33);var f=jm(n);qh(n,f,d);break;case 3:case 4:var v=c.stateNode.containerInfo,S=jm(n);Hh(n,S,v);break;default:throw Error(t(161))}}catch(P){rt(n,n.return,P)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function cE(n,i,a){se=n,Hm(n)}function Hm(n,i,a){for(var c=(n.mode&1)!==0;se!==null;){var d=se,f=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||du;if(!v){var S=d.alternate,P=S!==null&&S.memoizedState!==null||Lt;S=du;var j=Lt;if(du=v,(Lt=P)&&!j)for(se=d;se!==null;)v=se,P=v.child,v.tag===22&&v.memoizedState!==null?Gm(d):P!==null?(P.return=v,se=P):Gm(d);for(;f!==null;)se=f,Hm(f),f=f.sibling;se=d,du=S,Lt=j}qm(n)}else(d.subtreeFlags&8772)!==0&&f!==null?(f.return=d,se=f):qm(n)}}function qm(n){for(;se!==null;){var i=se;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Lt||fu(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Lt)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Pn(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var f=i.updateQueue;f!==null&&Wp(i,f,c);break;case 3:var v=i.updateQueue;if(v!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Wp(i,v,a)}break;case 5:var S=i.stateNode;if(a===null&&i.flags&4){a=S;var P=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var j=i.alternate;if(j!==null){var Q=j.memoizedState;if(Q!==null){var Y=Q.dehydrated;Y!==null&&Yr(Y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Lt||i.flags&512&&$h(i)}catch(K){rt(i,i.return,K)}}if(i===n){se=null;break}if(a=i.sibling,a!==null){a.return=i.return,se=a;break}se=i.return}}function Wm(n){for(;se!==null;){var i=se;if(i===n){se=null;break}var a=i.sibling;if(a!==null){a.return=i.return,se=a;break}se=i.return}}function Gm(n){for(;se!==null;){var i=se;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{fu(4,i)}catch(P){rt(i,a,P)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(P){rt(i,d,P)}}var f=i.return;try{$h(i)}catch(P){rt(i,f,P)}break;case 5:var v=i.return;try{$h(i)}catch(P){rt(i,v,P)}}}catch(P){rt(i,i.return,P)}if(i===n){se=null;break}var S=i.sibling;if(S!==null){S.return=i.return,se=S;break}se=i.return}}var hE=Math.ceil,pu=Ce.ReactCurrentDispatcher,Wh=Ce.ReactCurrentOwner,_n=Ce.ReactCurrentBatchConfig,Oe=0,Et=null,ht=null,Rt=0,un=0,co=ti(0),gt=0,Ra=null,is=0,mu=0,Gh=0,ka=null,Kt=null,Kh=0,ho=1/0,Ar=null,gu=!1,Qh=null,ai=null,yu=!1,li=null,_u=0,Pa=0,Yh=null,vu=-1,wu=0;function $t(){return(Oe&6)!==0?Ke():vu!==-1?vu:vu=Ke()}function ui(n){return(n.mode&1)===0?1:(Oe&2)!==0&&Rt!==0?Rt&-Rt:Kw.transition!==null?(wu===0&&(wu=Yo()),wu):(n=De,n!==0||(n=window.event,n=n===void 0?16:js(n.type)),n)}function Dn(n,i,a,c){if(50<Pa)throw Pa=0,Yh=null,Error(t(185));Wi(n,a,c),((Oe&2)===0||n!==Et)&&(n===Et&&((Oe&2)===0&&(mu|=a),gt===4&&ci(n,Rt)),Qt(n,c),a===1&&Oe===0&&(i.mode&1)===0&&(ho=Ke()+500,Kl&&ri()))}function Qt(n,i){var a=n.callbackNode;qi(n,i);var c=dr(n,n===Et?Rt:0);if(c===0)a!==null&&bs(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&bs(a),i===1)n.tag===0?Gw(Qm.bind(null,n)):Vp(Qm.bind(null,n)),$w(function(){(Oe&6)===0&&ri()}),a=null;else{switch(jn(c)){case 1:a=Vs;break;case 4:a=Go;break;case 16:a=zi;break;case 536870912:a=Os;break;default:a=zi}a=rg(a,Km.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Km(n,i){if(vu=-1,wu=0,(Oe&6)!==0)throw Error(t(327));var a=n.callbackNode;if(fo()&&n.callbackNode!==a)return null;var c=dr(n,n===Et?Rt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Eu(n,c);else{i=c;var d=Oe;Oe|=2;var f=Xm();(Et!==n||Rt!==i)&&(Ar=null,ho=Ke()+500,os(n,i));do try{pE();break}catch(S){Ym(n,S)}while(!0);ph(),pu.current=f,Oe=d,ht!==null?i=0:(Et=null,Rt=0,i=gt)}if(i!==0){if(i===2&&(d=Qo(n),d!==0&&(c=d,i=Xh(n,d))),i===1)throw a=Ra,os(n,0),ci(n,c),Qt(n,Ke()),a;if(i===6)ci(n,c);else{if(d=n.current.alternate,(c&30)===0&&!dE(d)&&(i=Eu(n,c),i===2&&(f=Qo(n),f!==0&&(c=f,i=Xh(n,f))),i===1))throw a=Ra,os(n,0),ci(n,c),Qt(n,Ke()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:as(n,Kt,Ar);break;case 3:if(ci(n,c),(c&130023424)===c&&(i=Kh+500-Ke(),10<i)){if(dr(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){$t(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=rh(as.bind(null,n,Kt,Ar),i);break}as(n,Kt,Ar);break;case 4:if(ci(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var v=31-tn(c);f=1<<v,v=i[v],v>d&&(d=v),c&=~f}if(c=d,c=Ke()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*hE(c/1960))-c,10<c){n.timeoutHandle=rh(as.bind(null,n,Kt,Ar),c);break}as(n,Kt,Ar);break;case 5:as(n,Kt,Ar);break;default:throw Error(t(329))}}}return Qt(n,Ke()),n.callbackNode===a?Km.bind(null,n):null}function Xh(n,i){var a=ka;return n.current.memoizedState.isDehydrated&&(os(n,i).flags|=256),n=Eu(n,i),n!==2&&(i=Kt,Kt=a,i!==null&&Jh(i)),n}function Jh(n){Kt===null?Kt=n:Kt.push.apply(Kt,n)}function dE(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],f=d.getSnapshot;d=d.value;try{if(!Rn(f(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ci(n,i){for(i&=~Gh,i&=~mu,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-tn(i),c=1<<a;n[a]=-1,i&=~c}}function Qm(n){if((Oe&6)!==0)throw Error(t(327));fo();var i=dr(n,0);if((i&1)===0)return Qt(n,Ke()),null;var a=Eu(n,i);if(n.tag!==0&&a===2){var c=Qo(n);c!==0&&(i=c,a=Xh(n,c))}if(a===1)throw a=Ra,os(n,0),ci(n,i),Qt(n,Ke()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,as(n,Kt,Ar),Qt(n,Ke()),null}function Zh(n,i){var a=Oe;Oe|=1;try{return n(i)}finally{Oe=a,Oe===0&&(ho=Ke()+500,Kl&&ri())}}function ss(n){li!==null&&li.tag===0&&(Oe&6)===0&&fo();var i=Oe;Oe|=1;var a=_n.transition,c=De;try{if(_n.transition=null,De=1,n)return n()}finally{De=c,_n.transition=a,Oe=i,(Oe&6)===0&&ri()}}function ed(){un=co.current,Ye(co)}function os(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Bw(a)),ht!==null)for(a=ht.return;a!==null;){var c=a;switch(uh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Wl();break;case 3:ao(),Ye(qt),Ye(bt),Th();break;case 5:wh(c);break;case 4:ao();break;case 13:Ye(Ze);break;case 19:Ye(Ze);break;case 10:mh(c.type._context);break;case 22:case 23:ed()}a=a.return}if(Et=n,ht=n=hi(n.current,null),Rt=un=i,gt=0,Ra=null,Gh=mu=is=0,Kt=ka=null,ts!==null){for(i=0;i<ts.length;i++)if(a=ts[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,f=a.pending;if(f!==null){var v=f.next;f.next=d,c.next=v}a.pending=c}ts=null}return n}function Ym(n,i){do{var a=ht;try{if(ph(),iu.current=lu,su){for(var c=et.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}su=!1}if(rs=0,wt=mt=et=null,Ea=!1,Ta=0,Wh.current=null,a===null||a.return===null){gt=1,Ra=i,ht=null;break}e:{var f=n,v=a.return,S=a,P=i;if(i=Rt,S.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var j=P,Q=S,Y=Q.tag;if((Q.mode&1)===0&&(Y===0||Y===11||Y===15)){var K=Q.alternate;K?(Q.updateQueue=K.updateQueue,Q.memoizedState=K.memoizedState,Q.lanes=K.lanes):(Q.updateQueue=null,Q.memoizedState=null)}var ne=Em(v);if(ne!==null){ne.flags&=-257,Tm(ne,v,S,f,i),ne.mode&1&&wm(f,j,i),i=ne,P=j;var oe=i.updateQueue;if(oe===null){var le=new Set;le.add(P),i.updateQueue=le}else oe.add(P);break e}else{if((i&1)===0){wm(f,j,i),td();break e}P=Error(t(426))}}else if(Je&&S.mode&1){var at=Em(v);if(at!==null){(at.flags&65536)===0&&(at.flags|=256),Tm(at,v,S,f,i),dh(lo(P,S));break e}}f=P=lo(P,S),gt!==4&&(gt=2),ka===null?ka=[f]:ka.push(f),f=v;do{switch(f.tag){case 3:f.flags|=65536,i&=-i,f.lanes|=i;var L=_m(f,P,i);qp(f,L);break e;case 1:S=P;var D=f.type,F=f.stateNode;if((f.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(ai===null||!ai.has(F)))){f.flags|=65536,i&=-i,f.lanes|=i;var X=vm(f,S,i);qp(f,X);break e}}f=f.return}while(f!==null)}Zm(a)}catch(ue){i=ue,ht===a&&a!==null&&(ht=a=a.return);continue}break}while(!0)}function Xm(){var n=pu.current;return pu.current=lu,n===null?lu:n}function td(){(gt===0||gt===3||gt===2)&&(gt=4),Et===null||(is&268435455)===0&&(mu&268435455)===0||ci(Et,Rt)}function Eu(n,i){var a=Oe;Oe|=2;var c=Xm();(Et!==n||Rt!==i)&&(Ar=null,os(n,i));do try{fE();break}catch(d){Ym(n,d)}while(!0);if(ph(),Oe=a,pu.current=c,ht!==null)throw Error(t(261));return Et=null,Rt=0,gt}function fE(){for(;ht!==null;)Jm(ht)}function pE(){for(;ht!==null&&!ji();)Jm(ht)}function Jm(n){var i=ng(n.alternate,n,un);n.memoizedProps=n.pendingProps,i===null?Zm(n):ht=i,Wh.current=null}function Zm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=oE(a,i,un),a!==null){ht=a;return}}else{if(a=aE(a,i),a!==null){a.flags&=32767,ht=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{gt=6,ht=null;return}}if(i=i.sibling,i!==null){ht=i;return}ht=i=n}while(i!==null);gt===0&&(gt=5)}function as(n,i,a){var c=De,d=_n.transition;try{_n.transition=null,De=1,mE(n,i,a,c)}finally{_n.transition=d,De=c}return null}function mE(n,i,a,c){do fo();while(li!==null);if((Oe&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var f=a.lanes|a.childLanes;if(zc(n,f),n===Et&&(ht=Et=null,Rt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||yu||(yu=!0,rg(zi,function(){return fo(),null})),f=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||f){f=_n.transition,_n.transition=null;var v=De;De=1;var S=Oe;Oe|=4,Wh.current=null,uE(n,a),$m(a,n),Ow(th),mr=!!eh,th=eh=null,n.current=a,cE(a),hr(),Oe=S,De=v,_n.transition=f}else n.current=a;if(yu&&(yu=!1,li=n,_u=d),f=n.pendingLanes,f===0&&(ai=null),kl(a.stateNode),Qt(n,Ke()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(gu)throw gu=!1,n=Qh,Qh=null,n;return(_u&1)!==0&&n.tag!==0&&fo(),f=n.pendingLanes,(f&1)!==0?n===Yh?Pa++:(Pa=0,Yh=n):Pa=0,ri(),null}function fo(){if(li!==null){var n=jn(_u),i=_n.transition,a=De;try{if(_n.transition=null,De=16>n?16:n,li===null)var c=!1;else{if(n=li,li=null,_u=0,(Oe&6)!==0)throw Error(t(331));var d=Oe;for(Oe|=4,se=n.current;se!==null;){var f=se,v=f.child;if((se.flags&16)!==0){var S=f.deletions;if(S!==null){for(var P=0;P<S.length;P++){var j=S[P];for(se=j;se!==null;){var Q=se;switch(Q.tag){case 0:case 11:case 15:Ca(8,Q,f)}var Y=Q.child;if(Y!==null)Y.return=Q,se=Y;else for(;se!==null;){Q=se;var K=Q.sibling,ne=Q.return;if(Fm(Q),Q===j){se=null;break}if(K!==null){K.return=ne,se=K;break}se=ne}}}var oe=f.alternate;if(oe!==null){var le=oe.child;if(le!==null){oe.child=null;do{var at=le.sibling;le.sibling=null,le=at}while(le!==null)}}se=f}}if((f.subtreeFlags&2064)!==0&&v!==null)v.return=f,se=v;else e:for(;se!==null;){if(f=se,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:Ca(9,f,f.return)}var L=f.sibling;if(L!==null){L.return=f.return,se=L;break e}se=f.return}}var D=n.current;for(se=D;se!==null;){v=se;var F=v.child;if((v.subtreeFlags&2064)!==0&&F!==null)F.return=v,se=F;else e:for(v=D;se!==null;){if(S=se,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:fu(9,S)}}catch(ue){rt(S,S.return,ue)}if(S===v){se=null;break e}var X=S.sibling;if(X!==null){X.return=S.return,se=X;break e}se=S.return}}if(Oe=d,ri(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(Bi,n)}catch{}c=!0}return c}finally{De=a,_n.transition=i}}return!1}function eg(n,i,a){i=lo(a,i),i=_m(n,i,1),n=si(n,i,1),i=$t(),n!==null&&(Wi(n,1,i),Qt(n,i))}function rt(n,i,a){if(n.tag===3)eg(n,n,a);else for(;i!==null;){if(i.tag===3){eg(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ai===null||!ai.has(c))){n=lo(a,n),n=vm(i,n,1),i=si(i,n,1),n=$t(),i!==null&&(Wi(i,1,n),Qt(i,n));break}}i=i.return}}function gE(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=$t(),n.pingedLanes|=n.suspendedLanes&a,Et===n&&(Rt&a)===a&&(gt===4||gt===3&&(Rt&130023424)===Rt&&500>Ke()-Kh?os(n,0):Gh|=a),Qt(n,i)}function tg(n,i){i===0&&((n.mode&1)===0?i=1:(i=Gr,Gr<<=1,(Gr&130023424)===0&&(Gr=4194304)));var a=$t();n=Tr(n,i),n!==null&&(Wi(n,i,a),Qt(n,a))}function yE(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),tg(n,a)}function _E(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),tg(n,a)}var ng;ng=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||qt.current)Gt=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Gt=!1,sE(n,i,a);Gt=(n.flags&131072)!==0}else Gt=!1,Je&&(i.flags&1048576)!==0&&Op(i,Yl,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;hu(n,i),n=i.pendingProps;var d=eo(i,bt.current);oo(i,a),d=Ah(null,i,c,n,d,a);var f=Ch();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Wt(c)?(f=!0,Gl(i)):f=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,_h(i),d.updater=uu,i.stateNode=d,d._reactInternals=i,Dh(i,c,n,a),i=Lh(null,i,c,!0,f,a)):(i.tag=0,Je&&f&&lh(i),Bt(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(hu(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=wE(c),n=Pn(c,n),d){case 0:i=Oh(null,i,c,n,a);break e;case 1:i=km(null,i,c,n,a);break e;case 11:i=Im(null,i,c,n,a);break e;case 14:i=Sm(null,i,c,Pn(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Pn(c,d),Oh(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Pn(c,d),km(n,i,c,d,a);case 3:e:{if(Pm(i),n===null)throw Error(t(387));c=i.pendingProps,f=i.memoizedState,d=f.element,Hp(n,i),nu(i,c,null,a);var v=i.memoizedState;if(c=v.element,f.isDehydrated)if(f={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},i.updateQueue.baseState=f,i.memoizedState=f,i.flags&256){d=lo(Error(t(423)),i),i=xm(n,i,c,a,d);break e}else if(c!==d){d=lo(Error(t(424)),i),i=xm(n,i,c,a,d);break e}else for(ln=ei(i.stateNode.containerInfo.firstChild),an=i,Je=!0,kn=null,a=Bp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ro(),c===d){i=Sr(n,i,a);break e}Bt(n,i,c,a)}i=i.child}return i;case 5:return Gp(i),n===null&&hh(i),c=i.type,d=i.pendingProps,f=n!==null?n.memoizedProps:null,v=d.children,nh(c,d)?v=null:f!==null&&nh(c,f)&&(i.flags|=32),Rm(n,i),Bt(n,i,v,a),i.child;case 6:return n===null&&hh(i),null;case 13:return Nm(n,i,a);case 4:return vh(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=io(i,null,c,a):Bt(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Pn(c,d),Im(n,i,c,d,a);case 7:return Bt(n,i,i.pendingProps,a),i.child;case 8:return Bt(n,i,i.pendingProps.children,a),i.child;case 12:return Bt(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,f=i.memoizedProps,v=d.value,We(Zl,c._currentValue),c._currentValue=v,f!==null)if(Rn(f.value,v)){if(f.children===d.children&&!qt.current){i=Sr(n,i,a);break e}}else for(f=i.child,f!==null&&(f.return=i);f!==null;){var S=f.dependencies;if(S!==null){v=f.child;for(var P=S.firstContext;P!==null;){if(P.context===c){if(f.tag===1){P=Ir(-1,a&-a),P.tag=2;var j=f.updateQueue;if(j!==null){j=j.shared;var Q=j.pending;Q===null?P.next=P:(P.next=Q.next,Q.next=P),j.pending=P}}f.lanes|=a,P=f.alternate,P!==null&&(P.lanes|=a),gh(f.return,a,i),S.lanes|=a;break}P=P.next}}else if(f.tag===10)v=f.type===i.type?null:f.child;else if(f.tag===18){if(v=f.return,v===null)throw Error(t(341));v.lanes|=a,S=v.alternate,S!==null&&(S.lanes|=a),gh(v,a,i),v=f.sibling}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===i){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}Bt(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,oo(i,a),d=gn(d),c=c(d),i.flags|=1,Bt(n,i,c,a),i.child;case 14:return c=i.type,d=Pn(c,i.pendingProps),d=Pn(c.type,d),Sm(n,i,c,d,a);case 15:return Am(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Pn(c,d),hu(n,i),i.tag=1,Wt(c)?(n=!0,Gl(i)):n=!1,oo(i,a),gm(i,c,d),Dh(i,c,d,a),Lh(null,i,c,!0,n,a);case 19:return bm(n,i,a);case 22:return Cm(n,i,a)}throw Error(t(156,i.tag))};function rg(n,i){return Wo(n,i)}function vE(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(n,i,a,c){return new vE(n,i,a,c)}function nd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function wE(n){if(typeof n=="function")return nd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===vt)return 14}return 2}function hi(n,i){var a=n.alternate;return a===null?(a=vn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Tu(n,i,a,c,d,f){var v=2;if(c=n,typeof n=="function")nd(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case x:return ls(a.children,d,f,i);case A:v=8,d|=8;break;case k:return n=vn(12,a,i,d|2),n.elementType=k,n.lanes=f,n;case R:return n=vn(13,a,i,d),n.elementType=R,n.lanes=f,n;case qe:return n=vn(19,a,i,d),n.elementType=qe,n.lanes=f,n;case Xe:return Iu(a,d,f,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case b:v=10;break e;case N:v=9;break e;case O:v=11;break e;case vt:v=14;break e;case Nt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=vn(v,a,i,d),i.elementType=n,i.type=c,i.lanes=f,i}function ls(n,i,a,c){return n=vn(7,n,c,i),n.lanes=a,n}function Iu(n,i,a,c){return n=vn(22,n,c,i),n.elementType=Xe,n.lanes=a,n.stateNode={isHidden:!1},n}function rd(n,i,a){return n=vn(6,n,null,i),n.lanes=a,n}function id(n,i,a){return i=vn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function EE(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xo(0),this.expirationTimes=Xo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xo(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function sd(n,i,a,c,d,f,v,S,P){return n=new EE(n,i,a,S,P),i===1?(i=1,f===!0&&(i|=8)):i=0,f=vn(3,null,null,i),n.current=f,f.stateNode=n,f.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},_h(f),n}function TE(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Se,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function ig(n){if(!n)return ni;n=n._reactInternals;e:{if(An(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Wt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Wt(a))return Dp(n,a,i)}return i}function sg(n,i,a,c,d,f,v,S,P){return n=sd(a,c,!0,n,d,f,v,S,P),n.context=ig(null),a=n.current,c=$t(),d=ui(a),f=Ir(c,d),f.callback=i??null,si(a,f,d),n.current.lanes=d,Wi(n,d,c),Qt(n,c),n}function Su(n,i,a,c){var d=i.current,f=$t(),v=ui(d);return a=ig(a),i.context===null?i.context=a:i.pendingContext=a,i=Ir(f,v),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=si(d,i,v),n!==null&&(Dn(n,d,v,f),tu(n,d,v)),v}function Au(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function og(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function od(n,i){og(n,i),(n=n.alternate)&&og(n,i)}function IE(){return null}var ag=typeof reportError=="function"?reportError:function(n){console.error(n)};function ad(n){this._internalRoot=n}Cu.prototype.render=ad.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Su(n,i,null,null)},Cu.prototype.unmount=ad.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;ss(function(){Su(null,n,null,null)}),i[_r]=null}};function Cu(n){this._internalRoot=n}Cu.prototype.unstable_scheduleHydration=function(n){if(n){var i=ta();n={blockedOn:null,target:n,priority:i};for(var a=0;a<nn.length&&i!==0&&i<nn[a].priority;a++);nn.splice(a,0,n),a===0&&Fs(n)}};function ld(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ru(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function lg(){}function SE(n,i,a,c,d){if(d){if(typeof c=="function"){var f=c;c=function(){var j=Au(v);f.call(j)}}var v=sg(i,c,n,0,null,!1,!1,"",lg);return n._reactRootContainer=v,n[_r]=v.current,fa(n.nodeType===8?n.parentNode:n),ss(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var S=c;c=function(){var j=Au(P);S.call(j)}}var P=sd(n,0,!1,null,null,!1,!1,"",lg);return n._reactRootContainer=P,n[_r]=P.current,fa(n.nodeType===8?n.parentNode:n),ss(function(){Su(i,P,a,c)}),P}function ku(n,i,a,c,d){var f=a._reactRootContainer;if(f){var v=f;if(typeof d=="function"){var S=d;d=function(){var P=Au(v);S.call(P)}}Su(i,v,n,d)}else v=SE(a,i,n,d,c);return Au(v)}Zo=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Me(i.pendingLanes);a!==0&&(Jo(i,a|1),Qt(i,Ke()),(Oe&6)===0&&(ho=Ke()+500,ri()))}break;case 13:ss(function(){var c=Tr(n,1);if(c!==null){var d=$t();Dn(c,n,1,d)}}),od(n,1)}},Ls=function(n){if(n.tag===13){var i=Tr(n,134217728);if(i!==null){var a=$t();Dn(i,n,134217728,a)}od(n,134217728)}},ea=function(n){if(n.tag===13){var i=ui(n),a=Tr(n,i);if(a!==null){var c=$t();Dn(a,n,i,c)}od(n,i)}},ta=function(){return De},na=function(n,i){var a=De;try{return De=n,i()}finally{De=a}},lr=function(n,i,a){switch(i){case"input":if(Li(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=ql(c);if(!d)throw Error(t(90));Mo(c),Li(c,d)}}}break;case"textarea":gl(n,a);break;case"select":i=a.value,i!=null&&In(n,!!a.multiple,i,!1)}},vl=Zh,wl=ss;var AE={usingClientEntryPoint:!1,Events:[ga,Js,ql,$r,Hr,Zh]},xa={findFiberByHostInstance:Xi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},CE={bundleType:xa.bundleType,version:xa.version,rendererPackageName:xa.rendererPackageName,rendererConfig:xa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ce.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Rl(n),n===null?null:n.stateNode},findFiberByHostInstance:xa.findFiberByHostInstance||IE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pu.isDisabled&&Pu.supportsFiber)try{Bi=Pu.inject(CE),en=Pu}catch{}}return Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=AE,Yt.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ld(i))throw Error(t(200));return TE(n,i,null,a)},Yt.createRoot=function(n,i){if(!ld(n))throw Error(t(299));var a=!1,c="",d=ag;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=sd(n,1,!1,null,null,a,!1,c,d),n[_r]=i.current,fa(n.nodeType===8?n.parentNode:n),new ad(i)},Yt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Rl(i),n=n===null?null:n.stateNode,n},Yt.flushSync=function(n){return ss(n)},Yt.hydrate=function(n,i,a){if(!Ru(i))throw Error(t(200));return ku(null,n,i,!0,a)},Yt.hydrateRoot=function(n,i,a){if(!ld(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,f="",v=ag;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),i=sg(i,null,n,1,a??null,d,!1,f,v),n[_r]=i.current,fa(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Cu(i)},Yt.render=function(n,i,a){if(!Ru(i))throw Error(t(200));return ku(null,n,i,!1,a)},Yt.unmountComponentAtNode=function(n){if(!Ru(n))throw Error(t(40));return n._reactRootContainer?(ss(function(){ku(null,null,n,!1,function(){n._reactRootContainer=null,n[_r]=null})}),!0):!1},Yt.unstable_batchedUpdates=Zh,Yt.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Ru(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ku(n,i,a,!1,c)},Yt.version="18.3.1-next-f1338f8080-20240426",Yt}var gg;function FE(){if(gg)return hd.exports;gg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),hd.exports=ME(),hd.exports}var yg;function UE(){if(yg)return xu;yg=1;var r=FE();return xu.createRoot=r.createRoot,xu.hydrateRoot=r.hydrateRoot,xu}var jE=UE();const zE=r=>r instanceof Error?r.message+`
`+r.stack:JSON.stringify(r,null,2);class BE extends VE.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}render(){return this.state.hasError?C.jsxs("div",{className:"p-4 border border-red-500 rounded",children:[C.jsx("h2",{className:"text-red-500",children:"Something went wrong."}),C.jsx("pre",{className:"mt-2 text-sm",children:zE(this.state.error)})]}):this.props.children}}const $E=()=>{};var _g={};/**
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
 */const Ky=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},HE=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],h=r[t++],m=r[t++],g=((o&7)<<18|(l&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const l=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},Qy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const l=r[o],h=o+1<r.length,m=h?r[o+1]:0,g=o+2<r.length,_=g?r[o+2]:0,w=l>>2,T=(l&3)<<4|m>>4;let I=(m&15)<<2|_>>6,U=_&63;g||(U=64,h||(I=64)),s.push(t[w],t[T],t[I],t[U])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Ky(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):HE(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],m=o<r.length?t[r.charAt(o)]:0;++o;const _=o<r.length?t[r.charAt(o)]:64;++o;const T=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||m==null||_==null||T==null)throw new qE;const I=l<<2|m>>4;if(s.push(I),_!==64){const U=m<<4&240|_>>2;if(s.push(U),T!==64){const H=_<<6&192|T;s.push(H)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class qE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const WE=function(r){const e=Ky(r);return Qy.encodeByteArray(e,!0)},Ku=function(r){return WE(r).replace(/\./g,"")},Yy=function(r){try{return Qy.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function GE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const KE=()=>GE().__FIREBASE_DEFAULTS__,QE=()=>{if(typeof process>"u"||typeof _g>"u")return;const r=_g.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},YE=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Yy(r[1]);return e&&JSON.parse(e)},mc=()=>{try{return $E()||KE()||QE()||YE()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Xy=r=>{var e,t;return(t=(e=mc())==null?void 0:e.emulatorHosts)==null?void 0:t[r]},XE=r=>{const e=Xy(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Jy=()=>{var r;return(r=mc())==null?void 0:r.config},Zy=r=>{var e;return(e=mc())==null?void 0:e[`_${r}`]};/**
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
 */class JE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function xo(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function e_(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function ZE(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Ku(JSON.stringify(t)),Ku(JSON.stringify(h)),""].join(".")}const ja={};function e0(){const r={prod:[],emulator:[]};for(const e of Object.keys(ja))ja[e]?r.emulator.push(e):r.prod.push(e);return r}function t0(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let vg=!1;function t_(r,e){if(typeof window>"u"||typeof document>"u"||!xo(window.location.host)||ja[r]===e||ja[r]||vg)return;ja[r]=e;function t(I){return`__firebase__banner__${I}`}const s="__firebase__banner",l=e0().prod.length>0;function h(){const I=document.getElementById(s);I&&I.remove()}function m(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function g(I,U){I.setAttribute("width","24"),I.setAttribute("id",U),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function _(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{vg=!0,h()},I}function w(I,U){I.setAttribute("id",U),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function T(){const I=t0(s),U=t("text"),H=document.getElementById(U)||document.createElement("span"),q=t("learnmore"),B=document.getElementById(q)||document.createElement("a"),ae=t("preprendIcon"),Z=document.getElementById(ae)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const he=I.element;m(he),w(B,q);const Ce=_();g(Z,ae),he.append(Z,H,B,Ce),document.body.appendChild(he)}l?(H.innerText="Preview backend disconnected.",Z.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Z.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,H.innerText="Preview backend running in this workspace."),H.setAttribute("id",U)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
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
 */function jt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function n0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(jt())}function r0(){var e;const r=(e=mc())==null?void 0:e.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function i0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function s0(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function o0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function a0(){const r=jt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function l0(){return!r0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function u0(){try{return typeof indexedDB=="object"}catch{return!1}}function c0(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)==null?void 0:l.message)||"")}}catch(t){e(t)}})}/**
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
 */const h0="FirebaseError";class Lr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=h0,Object.setPrototypeOf(this,Lr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nl.prototype.create)}}class nl{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?d0(l,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new Lr(o,m,s)}}function d0(r,e){return r.replace(f0,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const f0=/\{\$([^}]+)}/g;function p0(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function gs(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const l=r[o],h=e[o];if(wg(l)&&wg(h)){if(!gs(l,h))return!1}else if(l!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function wg(r){return r!==null&&typeof r=="object"}/**
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
 */function rl(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function ba(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,l]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Va(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function m0(r,e){const t=new g0(r,e);return t.subscribe.bind(t)}class g0{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");y0(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=pd),o.error===void 0&&(o.error=pd),o.complete===void 0&&(o.complete=pd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function y0(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function pd(){}/**
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
 */function _t(r){return r&&r._delegate?r._delegate:r}class ys{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const us="[DEFAULT]";/**
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
 */class _0{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new JE;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(w0(e))try{this.getOrInitializeService({instanceIdentifier:us})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=us){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=us){return this.instances.has(e)}getOptions(e=us){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(l);s===m&&h.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const l=this.instances.get(s);return l&&e(l,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:v0(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=us){return this.component?this.component.multipleInstances?e:us:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function v0(r){return r===us?void 0:r}function w0(r){return r.instantiationMode==="EAGER"}/**
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
 */class E0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new _0(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Pe;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Pe||(Pe={}));const T0={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},I0=Pe.INFO,S0={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},A0=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=S0[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class rf{constructor(e){this.name=e,this._logLevel=I0,this._logHandler=A0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?T0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const C0=(r,e)=>e.some(t=>r instanceof t);let Eg,Tg;function R0(){return Eg||(Eg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function k0(){return Tg||(Tg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const n_=new WeakMap,Rd=new WeakMap,r_=new WeakMap,md=new WeakMap,sf=new WeakMap;function P0(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",h)},l=()=>{t(wi(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&n_.set(t,r)}).catch(()=>{}),sf.set(e,r),e}function x0(r){if(Rd.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",h),r.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",h),r.addEventListener("abort",h)});Rd.set(r,e)}let kd={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Rd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||r_.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return wi(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function N0(r){kd=r(kd)}function D0(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(gd(this),e,...t);return r_.set(s,e.sort?e.sort():[e]),wi(s)}:k0().includes(r)?function(...e){return r.apply(gd(this),e),wi(n_.get(this))}:function(...e){return wi(r.apply(gd(this),e))}}function b0(r){return typeof r=="function"?D0(r):(r instanceof IDBTransaction&&x0(r),C0(r,R0())?new Proxy(r,kd):r)}function wi(r){if(r instanceof IDBRequest)return P0(r);if(md.has(r))return md.get(r);const e=b0(r);return e!==r&&(md.set(r,e),sf.set(e,r)),e}const gd=r=>sf.get(r);function V0(r,e,{blocked:t,upgrade:s,blocking:o,terminated:l}={}){const h=indexedDB.open(r,e),m=wi(h);return s&&h.addEventListener("upgradeneeded",g=>{s(wi(h.result),g.oldVersion,g.newVersion,wi(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),m.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}const O0=["get","getKey","getAll","getAllKeys","count"],L0=["put","add","delete","clear"],yd=new Map;function Ig(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(yd.get(e))return yd.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=L0.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||O0.includes(t)))return;const l=async function(h,...m){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return s&&(_=_.index(m.shift())),(await Promise.all([_[t](...m),o&&g.done]))[0]};return yd.set(e,l),l}N0(r=>({...r,get:(e,t,s)=>Ig(e,t)||r.get(e,t,s),has:(e,t)=>!!Ig(e,t)||r.has(e,t)}));/**
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
 */class M0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(F0(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function F0(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Pd="@firebase/app",Sg="0.14.5";/**
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
 */const Nr=new rf("@firebase/app"),U0="@firebase/app-compat",j0="@firebase/analytics-compat",z0="@firebase/analytics",B0="@firebase/app-check-compat",$0="@firebase/app-check",H0="@firebase/auth",q0="@firebase/auth-compat",W0="@firebase/database",G0="@firebase/data-connect",K0="@firebase/database-compat",Q0="@firebase/functions",Y0="@firebase/functions-compat",X0="@firebase/installations",J0="@firebase/installations-compat",Z0="@firebase/messaging",eT="@firebase/messaging-compat",tT="@firebase/performance",nT="@firebase/performance-compat",rT="@firebase/remote-config",iT="@firebase/remote-config-compat",sT="@firebase/storage",oT="@firebase/storage-compat",aT="@firebase/firestore",lT="@firebase/ai",uT="@firebase/firestore-compat",cT="firebase",hT="12.5.0";/**
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
 */const xd="[DEFAULT]",dT={[Pd]:"fire-core",[U0]:"fire-core-compat",[z0]:"fire-analytics",[j0]:"fire-analytics-compat",[$0]:"fire-app-check",[B0]:"fire-app-check-compat",[H0]:"fire-auth",[q0]:"fire-auth-compat",[W0]:"fire-rtdb",[G0]:"fire-data-connect",[K0]:"fire-rtdb-compat",[Q0]:"fire-fn",[Y0]:"fire-fn-compat",[X0]:"fire-iid",[J0]:"fire-iid-compat",[Z0]:"fire-fcm",[eT]:"fire-fcm-compat",[tT]:"fire-perf",[nT]:"fire-perf-compat",[rT]:"fire-rc",[iT]:"fire-rc-compat",[sT]:"fire-gcs",[oT]:"fire-gcs-compat",[aT]:"fire-fst",[uT]:"fire-fst-compat",[lT]:"fire-vertex","fire-js":"fire-js",[cT]:"fire-js-all"};/**
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
 */const Qu=new Map,fT=new Map,Nd=new Map;function Ag(r,e){try{r.container.addComponent(e)}catch(t){Nr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Io(r){const e=r.name;if(Nd.has(e))return Nr.debug(`There were multiple attempts to register component ${e}.`),!1;Nd.set(e,r);for(const t of Qu.values())Ag(t,r);for(const t of fT.values())Ag(t,r);return!0}function of(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function cn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const pT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ei=new nl("app","Firebase",pT);/**
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
 */class mT{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ys("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ei.create("app-deleted",{appName:this._name})}}/**
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
 */const No=hT;function i_(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s={name:xd,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw Ei.create("bad-app-name",{appName:String(o)});if(t||(t=Jy()),!t)throw Ei.create("no-options");const l=Qu.get(o);if(l){if(gs(t,l.options)&&gs(s,l.config))return l;throw Ei.create("duplicate-app",{appName:o})}const h=new E0(o);for(const g of Nd.values())h.addComponent(g);const m=new mT(t,s,h);return Qu.set(o,m),m}function s_(r=xd){const e=Qu.get(r);if(!e&&r===xd&&Jy())return i_();if(!e)throw Ei.create("no-app",{appName:r});return e}function Ti(r,e,t){let s=dT[r]??r;t&&(s+=`-${t}`);const o=s.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&l&&h.push("and"),l&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nr.warn(h.join(" "));return}Io(new ys(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const gT="firebase-heartbeat-database",yT=1,Wa="firebase-heartbeat-store";let _d=null;function o_(){return _d||(_d=V0(gT,yT,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Wa)}catch(t){console.warn(t)}}}}).catch(r=>{throw Ei.create("idb-open",{originalErrorMessage:r.message})})),_d}async function _T(r){try{const t=(await o_()).transaction(Wa),s=await t.objectStore(Wa).get(a_(r));return await t.done,s}catch(e){if(e instanceof Lr)Nr.warn(e.message);else{const t=Ei.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Nr.warn(t.message)}}}async function Cg(r,e){try{const s=(await o_()).transaction(Wa,"readwrite");await s.objectStore(Wa).put(e,a_(r)),await s.done}catch(t){if(t instanceof Lr)Nr.warn(t.message);else{const s=Ei.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Nr.warn(s.message)}}}function a_(r){return`${r.name}!${r.options.appId}`}/**
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
 */const vT=1024,wT=30;class ET{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new IT(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Rg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>wT){const h=ST(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Nr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Rg(),{heartbeatsToSend:s,unsentEntries:o}=TT(this._heartbeatsCache.heartbeats),l=Ku(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Nr.warn(t),""}}}function Rg(){return new Date().toISOString().substring(0,10)}function TT(r,e=vT){const t=[];let s=r.slice();for(const o of r){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),kg(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),kg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class IT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return u0()?c0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await _T(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Cg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Cg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function kg(r){return Ku(JSON.stringify({version:2,heartbeats:r})).length}function ST(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
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
 */function AT(r){Io(new ys("platform-logger",e=>new M0(e),"PRIVATE")),Io(new ys("heartbeat",e=>new ET(e),"PRIVATE")),Ti(Pd,Sg,r),Ti(Pd,Sg,"esm2020"),Ti("fire-js","")}AT("");function l_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const CT=l_,u_=new nl("auth","Firebase",l_());/**
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
 */const Yu=new rf("@firebase/auth");function RT(r,...e){Yu.logLevel<=Pe.WARN&&Yu.warn(`Auth (${No}): ${r}`,...e)}function Mu(r,...e){Yu.logLevel<=Pe.ERROR&&Yu.error(`Auth (${No}): ${r}`,...e)}/**
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
 */function Tn(r,...e){throw lf(r,...e)}function Vn(r,...e){return lf(r,...e)}function af(r,e,t){const s={...CT(),[e]:t};return new nl("auth","Firebase",s).create(e,{appName:r.name})}function Pr(r){return af(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function kT(r,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Tn(r,"argument-error"),af(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function lf(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return u_.create(r,...e)}function me(r,e,...t){if(!r)throw lf(e,...t)}function Rr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Mu(e),new Error(e)}function Dr(r,e){r||Rr(e)}/**
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
 */function Dd(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function PT(){return Pg()==="http:"||Pg()==="https:"}function Pg(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
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
 */function xT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(PT()||s0()||"connection"in navigator)?navigator.onLine:!0}function NT(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class il{constructor(e,t){this.shortDelay=e,this.longDelay=t,Dr(t>e,"Short delay should be less than long delay!"),this.isMobile=n0()||o0()}get(){return xT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function uf(r,e){Dr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class c_{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const DT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const bT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],VT=new il(3e4,6e4);function Ni(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function Di(r,e,t,s,o={}){return h_(r,o,async()=>{let l={},h={};s&&(e==="GET"?h=s:l={body:JSON.stringify(s)});const m=rl({key:r.config.apiKey,...h}).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const _={method:e,headers:g,...l};return i0()||(_.referrerPolicy="no-referrer"),r.emulatorConfig&&xo(r.emulatorConfig.host)&&(_.credentials="include"),c_.fetch()(await d_(r,r.config.apiHost,t,m),_)})}async function h_(r,e,t){r._canInitEmulator=!1;const s={...DT,...e};try{const o=new LT(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Nu(r,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const m=l.ok?h.errorMessage:h.error.message,[g,_]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Nu(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Nu(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw Nu(r,"user-disabled",h);const w=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw af(r,w,_);Tn(r,w)}}catch(o){if(o instanceof Lr)throw o;Tn(r,"network-request-failed",{message:String(o)})}}async function sl(r,e,t,s,o={}){const l=await Di(r,e,t,s,o);return"mfaPendingCredential"in l&&Tn(r,"multi-factor-auth-required",{_serverResponse:l}),l}async function d_(r,e,t,s){const o=`${e}${t}?${s}`,l=r,h=l.config.emulator?uf(r.config,o):`${r.config.apiScheme}://${o}`;return bT.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}function OT(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class LT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Vn(this.auth,"network-request-failed")),VT.get())})}}function Nu(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Vn(r,e,s);return o.customData._tokenResponse=t,o}function xg(r){return r!==void 0&&r.enterprise!==void 0}class MT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return OT(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function FT(r,e){return Di(r,"GET","/v2/recaptchaConfig",Ni(r,e))}/**
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
 */async function UT(r,e){return Di(r,"POST","/v1/accounts:delete",e)}async function Xu(r,e){return Di(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function za(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jT(r,e=!1){const t=_t(r),s=await t.getIdToken(e),o=cf(s);me(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:s,authTime:za(vd(o.auth_time)),issuedAtTime:za(vd(o.iat)),expirationTime:za(vd(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function vd(r){return Number(r)*1e3}function cf(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Mu("JWT malformed, contained fewer than 3 sections"),null;try{const o=Yy(t);return o?JSON.parse(o):(Mu("Failed to decode base64 JWT payload"),null)}catch(o){return Mu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Ng(r){const e=cf(r);return me(e,"internal-error"),me(typeof e.exp<"u","internal-error"),me(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ga(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Lr&&zT(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function zT({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class BT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class bd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=za(this.lastLoginAt),this.creationTime=za(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ju(r){var T;const e=r.auth,t=await r.getIdToken(),s=await Ga(r,Xu(e,{idToken:t}));me(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];r._notifyReloadListener(o);const l=(T=o.providerUserInfo)!=null&&T.length?f_(o.providerUserInfo):[],h=HT(r.providerData,l),m=r.isAnonymous,g=!(r.email&&o.passwordHash)&&!(h!=null&&h.length),_=m?g:!1,w={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new bd(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(r,w)}async function $T(r){const e=_t(r);await Ju(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function HT(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function f_(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function qT(r,e){const t=await h_(r,{},async()=>{const s=rl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,h=await d_(r,o,"/v1/token",`key=${l}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:m,body:s};return r.emulatorConfig&&xo(r.emulatorConfig.host)&&(g.credentials="include"),c_.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function WT(r,e){return Di(r,"POST","/v2/accounts:revokeToken",Ni(r,e))}/**
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
 */class vo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){me(e.idToken,"internal-error"),me(typeof e.idToken<"u","internal-error"),me(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ng(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){me(e.length!==0,"internal-error");const t=Ng(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(me(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:l}=await qT(e,t);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:l}=t,h=new vo;return s&&(me(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(me(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(me(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vo,this.toJSON())}_performRefresh(){return Rr("not implemented")}}/**
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
 */function fi(r,e){me(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class bn{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new BT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new bd(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Ga(this,this.stsTokenManager.getToken(this.auth,e));return me(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return jT(this,e)}reload(){return $T(this)}_assign(e){this!==e&&(me(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new bn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){me(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Ju(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(cn(this.auth.app))return Promise.reject(Pr(this.auth));const e=await this.getIdToken();return await Ga(this,UT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,l=t.phoneNumber??void 0,h=t.photoURL??void 0,m=t.tenantId??void 0,g=t._redirectEventId??void 0,_=t.createdAt??void 0,w=t.lastLoginAt??void 0,{uid:T,emailVerified:I,isAnonymous:U,providerData:H,stsTokenManager:q}=t;me(T&&q,e,"internal-error");const B=vo.fromJSON(this.name,q);me(typeof T=="string",e,"internal-error"),fi(s,e.name),fi(o,e.name),me(typeof I=="boolean",e,"internal-error"),me(typeof U=="boolean",e,"internal-error"),fi(l,e.name),fi(h,e.name),fi(m,e.name),fi(g,e.name),fi(_,e.name),fi(w,e.name);const ae=new bn({uid:T,auth:e,email:o,emailVerified:I,displayName:s,isAnonymous:U,photoURL:h,phoneNumber:l,tenantId:m,stsTokenManager:B,createdAt:_,lastLoginAt:w});return H&&Array.isArray(H)&&(ae.providerData=H.map(Z=>({...Z}))),g&&(ae._redirectEventId=g),ae}static async _fromIdTokenResponse(e,t,s=!1){const o=new vo;o.updateFromServerResponse(t);const l=new bn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Ju(l),l}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];me(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?f_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),m=new vo;m.updateFromIdToken(s);const g=new bn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new bd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(g,_),g}}/**
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
 */const Dg=new Map;function kr(r){Dr(r instanceof Function,"Expected a class definition");let e=Dg.get(r);return e?(Dr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Dg.set(r,e),e)}/**
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
 */class p_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}p_.type="NONE";const bg=p_;/**
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
 */function Fu(r,e,t){return`firebase:${r}:${e}:${t}`}class wo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=Fu(this.userKey,o.apiKey,l),this.fullPersistenceKey=Fu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Xu(this.auth,{idToken:e}).catch(()=>{});return t?bn._fromGetAccountInfoResponse(this.auth,t,e):null}return bn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new wo(kr(bg),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let l=o[0]||kr(bg);const h=Fu(s,e.config.apiKey,e.name);let m=null;for(const _ of t)try{const w=await _._get(h);if(w){let T;if(typeof w=="string"){const I=await Xu(e,{idToken:w}).catch(()=>{});if(!I)break;T=await bn._fromGetAccountInfoResponse(e,I,w)}else T=bn._fromJSON(e,w);_!==l&&(m=T),l=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new wo(l,e,s):(l=g[0],m&&await l._set(h,m.toJSON()),await Promise.all(t.map(async _=>{if(_!==l)try{await _._remove(h)}catch{}})),new wo(l,e,s))}}/**
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
 */function Vg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(__(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(m_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(w_(e))return"Blackberry";if(E_(e))return"Webos";if(g_(e))return"Safari";if((e.includes("chrome/")||y_(e))&&!e.includes("edge/"))return"Chrome";if(v_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function m_(r=jt()){return/firefox\//i.test(r)}function g_(r=jt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function y_(r=jt()){return/crios\//i.test(r)}function __(r=jt()){return/iemobile/i.test(r)}function v_(r=jt()){return/android/i.test(r)}function w_(r=jt()){return/blackberry/i.test(r)}function E_(r=jt()){return/webos/i.test(r)}function hf(r=jt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function GT(r=jt()){var e;return hf(r)&&!!((e=window.navigator)!=null&&e.standalone)}function KT(){return a0()&&document.documentMode===10}function T_(r=jt()){return hf(r)||v_(r)||E_(r)||w_(r)||/windows phone/i.test(r)||__(r)}/**
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
 */function I_(r,e=[]){let t;switch(r){case"Browser":t=Vg(jt());break;case"Worker":t=`${Vg(jt())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${No}/${s}`}/**
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
 */class QT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((h,m)=>{try{const g=e(l);h(g)}catch(g){m(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function YT(r,e={}){return Di(r,"GET","/v2/passwordPolicy",Ni(r,e))}/**
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
 */const XT=6;class JT{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??XT,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class ZT{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Og(this),this.idTokenSubscription=new Og(this),this.beforeStateQueue=new QT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=kr(t)),this._initializationPromise=this.queue(async()=>{var s,o,l;if(!this._deleted&&(this.persistenceManager=await wo.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)==null?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Xu(this,{idToken:e}),s=await bn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var l;if(cn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(l=this.redirectUser)==null?void 0:l._redirectEventId,m=s==null?void 0:s._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===m)&&(g!=null&&g.user)&&(s=g.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(h){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return me(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ju(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=NT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(cn(this.app))return Promise.reject(Pr(this));const t=e?_t(e):null;return t&&me(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&me(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return cn(this.app)?Promise.reject(Pr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return cn(this.app)?Promise.reject(Pr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await YT(this),t=new JT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new nl("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await WT(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&kr(e)||this._popupRedirectResolver;me(t,this,"argument-error"),this.redirectPersistenceManager=await wo.create(this,[kr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(me(m,this,"internal-error"),m.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return me(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=I_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(cn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&RT(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function bi(r){return _t(r)}class Og{constructor(e){this.auth=e,this.observer=null,this.addObserver=m0(t=>this.observer=t)}get next(){return me(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let gc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function eI(r){gc=r}function S_(r){return gc.loadJS(r)}function tI(){return gc.recaptchaEnterpriseScript}function nI(){return gc.gapiScript}function rI(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class iI{constructor(){this.enterprise=new sI}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class sI{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const oI="recaptcha-enterprise",A_="NO_RECAPTCHA";class aI{constructor(e){this.type=oI,this.auth=bi(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,m)=>{FT(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const _=new MT(g);return l.tenantId==null?l._agentRecaptchaConfig=_:l._tenantRecaptchaConfigs[l.tenantId]=_,h(_.siteKey)}}).catch(g=>{m(g)})})}function o(l,h,m){const g=window.grecaptcha;xg(g)?g.enterprise.ready(()=>{g.enterprise.execute(l,{action:e}).then(_=>{h(_)}).catch(()=>{h(A_)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new iI().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{s(this.auth).then(m=>{if(!t&&xg(window.grecaptcha))o(m,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=tI();g.length!==0&&(g+=m),S_(g).then(()=>{o(m,l,h)}).catch(_=>{h(_)})}}).catch(m=>{h(m)})})}}async function Lg(r,e,t,s=!1,o=!1){const l=new aI(r);let h;if(o)h=A_;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const m={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const g=m.phoneEnrollmentInfo.phoneNumber,_=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const g=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:h}):Object.assign(m,{captchaResponse:h}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function Vd(r,e,t,s,o){var l;if((l=r._getRecaptchaConfig())!=null&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await Lg(r,e,t,t==="getOobCode");return s(r,h)}else return s(r,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await Lg(r,e,t,t==="getOobCode");return s(r,m)}else return Promise.reject(h)})}/**
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
 */function lI(r,e){const t=of(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(gs(l,e??{}))return o;Tn(o,"already-initialized")}return t.initialize({options:e})}function uI(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(kr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function cI(r,e,t){const s=bi(r);me(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=C_(e),{host:h,port:m}=hI(e),g=m===null?"":`:${m}`,_={url:`${l}//${h}${g}/`},w=Object.freeze({host:h,port:m,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){me(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),me(gs(_,s.config.emulator)&&gs(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,xo(h)?(e_(`${l}//${h}${g}`),t_("Auth",!0)):dI()}function C_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function hI(r){const e=C_(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:Mg(s.substr(l.length+1))}}else{const[l,h]=s.split(":");return{host:l,port:Mg(h)}}}function Mg(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function dI(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class df{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Rr("not implemented")}_getIdTokenResponse(e){return Rr("not implemented")}_linkToIdToken(e,t){return Rr("not implemented")}_getReauthenticationResolver(e){return Rr("not implemented")}}async function fI(r,e){return Di(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function pI(r,e){return sl(r,"POST","/v1/accounts:signInWithPassword",Ni(r,e))}/**
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
 */async function mI(r,e){return sl(r,"POST","/v1/accounts:signInWithEmailLink",Ni(r,e))}async function gI(r,e){return sl(r,"POST","/v1/accounts:signInWithEmailLink",Ni(r,e))}/**
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
 */class Ka extends df{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Ka(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Ka(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vd(e,t,"signInWithPassword",pI);case"emailLink":return mI(e,{email:this._email,oobCode:this._password});default:Tn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vd(e,s,"signUpPassword",fI);case"emailLink":return gI(e,{idToken:t,email:this._email,oobCode:this._password});default:Tn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Eo(r,e){return sl(r,"POST","/v1/accounts:signInWithIdp",Ni(r,e))}/**
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
 */const yI="http://localhost";class _s extends df{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new _s(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Tn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...l}=t;if(!s||!o)return null;const h=new _s(s,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Eo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Eo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Eo(e,t)}buildRequest(){const e={requestUri:yI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=rl(t)}return e}}/**
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
 */function _I(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function vI(r){const e=ba(Va(r)).link,t=e?ba(Va(e)).deep_link_id:null,s=ba(Va(r)).deep_link_id;return(s?ba(Va(s)).link:null)||s||t||e||r}class ff{constructor(e){const t=ba(Va(e)),s=t.apiKey??null,o=t.oobCode??null,l=_I(t.mode??null);me(s&&o&&l,"argument-error"),this.apiKey=s,this.operation=l,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=vI(e);try{return new ff(t)}catch{return null}}}/**
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
 */class Do{constructor(){this.providerId=Do.PROVIDER_ID}static credential(e,t){return Ka._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=ff.parseLink(t);return me(s,"argument-error"),Ka._fromEmailAndCode(e,s.code,s.tenantId)}}Do.PROVIDER_ID="password";Do.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Do.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class pf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ol extends pf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class pi extends ol{constructor(){super("facebook.com")}static credential(e){return _s._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pi.credentialFromTaggedObject(e)}static credentialFromError(e){return pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pi.credential(e.oauthAccessToken)}catch{return null}}}pi.FACEBOOK_SIGN_IN_METHOD="facebook.com";pi.PROVIDER_ID="facebook.com";/**
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
 */class Cr extends ol{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return _s._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Cr.credential(t,s)}catch{return null}}}Cr.GOOGLE_SIGN_IN_METHOD="google.com";Cr.PROVIDER_ID="google.com";/**
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
 */class mi extends ol{constructor(){super("github.com")}static credential(e){return _s._fromParams({providerId:mi.PROVIDER_ID,signInMethod:mi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mi.credentialFromTaggedObject(e)}static credentialFromError(e){return mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mi.credential(e.oauthAccessToken)}catch{return null}}}mi.GITHUB_SIGN_IN_METHOD="github.com";mi.PROVIDER_ID="github.com";/**
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
 */class gi extends ol{constructor(){super("twitter.com")}static credential(e,t){return _s._fromParams({providerId:gi.PROVIDER_ID,signInMethod:gi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return gi.credentialFromTaggedObject(e)}static credentialFromError(e){return gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return gi.credential(t,s)}catch{return null}}}gi.TWITTER_SIGN_IN_METHOD="twitter.com";gi.PROVIDER_ID="twitter.com";/**
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
 */async function wI(r,e){return sl(r,"POST","/v1/accounts:signUp",Ni(r,e))}/**
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
 */class vs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const l=await bn._fromIdTokenResponse(e,s,o),h=Fg(s);return new vs({user:l,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Fg(s);return new vs({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Fg(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Zu extends Lr{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Zu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Zu(e,t,s,o)}}function R_(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Zu._fromErrorAndOperation(r,l,e,s):l})}async function EI(r,e,t=!1){const s=await Ga(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return vs._forOperation(r,"link",s)}/**
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
 */async function TI(r,e,t=!1){const{auth:s}=r;if(cn(s.app))return Promise.reject(Pr(s));const o="reauthenticate";try{const l=await Ga(r,R_(s,o,e,r),t);me(l.idToken,s,"internal-error");const h=cf(l.idToken);me(h,s,"internal-error");const{sub:m}=h;return me(r.uid===m,s,"user-mismatch"),vs._forOperation(r,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Tn(s,"user-mismatch"),l}}/**
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
 */async function k_(r,e,t=!1){if(cn(r.app))return Promise.reject(Pr(r));const s="signIn",o=await R_(r,s,e),l=await vs._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(l.user),l}async function II(r,e){return k_(bi(r),e)}/**
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
 */async function P_(r){const e=bi(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function SI(r,e,t){if(cn(r.app))return Promise.reject(Pr(r));const s=bi(r),h=await Vd(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",wI).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&P_(r),g}),m=await vs._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(m.user),m}function AI(r,e,t){return cn(r.app)?Promise.reject(Pr(r)):II(_t(r),Do.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&P_(r),s})}function CI(r,e,t,s){return _t(r).onIdTokenChanged(e,t,s)}function RI(r,e,t){return _t(r).beforeAuthStateChanged(e,t)}function kI(r,e,t,s){return _t(r).onAuthStateChanged(e,t,s)}function po(r){return _t(r).signOut()}const ec="__sak";/**
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
 */class x_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ec,"1"),this.storage.removeItem(ec),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const PI=1e3,xI=10;class N_ extends x_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=T_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},l=this.storage.getItem(s);KT()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,xI):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},PI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}N_.type="LOCAL";const NI=N_;/**
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
 */class D_ extends x_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}D_.type="SESSION";const b_=D_;/**
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
 */function DI(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class yc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new yc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async _=>_(t.origin,l)),g=await DI(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yc.receivers=[];/**
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
 */function mf(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class bI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((m,g)=>{const _=mf("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(T){const I=T;if(I.data.eventId===_)switch(I.data.status){case"ack":clearTimeout(w),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),m(I.data.response);break;default:clearTimeout(w),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function nr(){return window}function VI(r){nr().location.href=r}/**
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
 */function V_(){return typeof nr().WorkerGlobalScope<"u"&&typeof nr().importScripts=="function"}async function OI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function LI(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function MI(){return V_()?self:null}/**
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
 */const O_="firebaseLocalStorageDb",FI=1,tc="firebaseLocalStorage",L_="fbase_key";class al{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function _c(r,e){return r.transaction([tc],e?"readwrite":"readonly").objectStore(tc)}function UI(){const r=indexedDB.deleteDatabase(O_);return new al(r).toPromise()}function Od(){const r=indexedDB.open(O_,FI);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(tc,{keyPath:L_})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(tc)?e(s):(s.close(),await UI(),e(await Od()))})})}async function Ug(r,e,t){const s=_c(r,!0).put({[L_]:e,value:t});return new al(s).toPromise()}async function jI(r,e){const t=_c(r,!1).get(e),s=await new al(t).toPromise();return s===void 0?null:s.value}function jg(r,e){const t=_c(r,!0).delete(e);return new al(t).toPromise()}const zI=800,BI=3;class M_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Od(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>BI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return V_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yc._getInstance(MI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await OI(),!this.activeServiceWorker)return;this.sender=new bI(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||LI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Od();return await Ug(e,ec,"1"),await jg(e,ec),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ug(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>jI(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>jg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=_c(o,!1).getAll();return new al(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}M_.type="LOCAL";const $I=M_;new il(3e4,6e4);/**
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
 */function F_(r,e){return e?kr(e):(me(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class gf extends df{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Eo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Eo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Eo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function HI(r){return k_(r.auth,new gf(r),r.bypassAuthState)}function qI(r){const{auth:e,user:t}=r;return me(t,e,"internal-error"),TI(t,new gf(r),r.bypassAuthState)}async function WI(r){const{auth:e,user:t}=r;return me(t,e,"internal-error"),EI(t,new gf(r),r.bypassAuthState)}/**
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
 */class U_{constructor(e,t,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:l,error:h,type:m}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return HI;case"linkViaPopup":case"linkViaRedirect":return WI;case"reauthViaPopup":case"reauthViaRedirect":return qI;default:Tn(this.auth,"internal-error")}}resolve(e){Dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const GI=new il(2e3,1e4);async function KI(r,e,t){if(cn(r.app))return Promise.reject(Vn(r,"operation-not-supported-in-this-environment"));const s=bi(r);kT(r,e,pf);const o=F_(s,t);return new cs(s,"signInViaPopup",e,o).executeNotNull()}class cs extends U_{constructor(e,t,s,o,l){super(e,t,o,l),this.provider=s,this.authWindow=null,this.pollId=null,cs.currentPopupAction&&cs.currentPopupAction.cancel(),cs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return me(e,this.auth,"internal-error"),e}async onExecution(){Dr(this.filter.length===1,"Popup operations only handle one event");const e=mf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Vn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Vn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Vn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,GI.get())};e()}}cs.currentPopupAction=null;/**
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
 */const QI="pendingRedirect",Uu=new Map;class YI extends U_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Uu.get(this.auth._key());if(!e){try{const s=await XI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Uu.set(this.auth._key(),e)}return this.bypassAuthState||Uu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function XI(r,e){const t=e1(e),s=ZI(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function JI(r,e){Uu.set(r._key(),e)}function ZI(r){return kr(r._redirectPersistence)}function e1(r){return Fu(QI,r.config.apiKey,r.name)}async function t1(r,e,t=!1){if(cn(r.app))return Promise.reject(Pr(r));const s=bi(r),o=F_(s,e),h=await new YI(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const n1=10*60*1e3;class r1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!i1(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!j_(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(Vn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=n1&&this.cachedEventUids.clear(),this.cachedEventUids.has(zg(e))}saveEventToCache(e){this.cachedEventUids.add(zg(e)),this.lastProcessedEventTime=Date.now()}}function zg(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function j_({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function i1(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return j_(r);default:return!1}}/**
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
 */async function s1(r,e={}){return Di(r,"GET","/v1/projects",e)}/**
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
 */const o1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,a1=/^https?/;async function l1(r){if(r.config.emulator)return;const{authorizedDomains:e}=await s1(r);for(const t of e)try{if(u1(t))return}catch{}Tn(r,"unauthorized-domain")}function u1(r){const e=Dd(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!a1.test(t))return!1;if(o1.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const c1=new il(3e4,6e4);function Bg(){const r=nr().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function h1(r){return new Promise((e,t)=>{var o,l,h;function s(){Bg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bg(),t(Vn(r,"network-request-failed"))},timeout:c1.get()})}if((l=(o=nr().gapi)==null?void 0:o.iframes)!=null&&l.Iframe)e(gapi.iframes.getContext());else if((h=nr().gapi)!=null&&h.load)s();else{const m=rI("iframefcb");return nr()[m]=()=>{gapi.load?s():t(Vn(r,"network-request-failed"))},S_(`${nI()}?onload=${m}`).catch(g=>t(g))}}).catch(e=>{throw ju=null,e})}let ju=null;function d1(r){return ju=ju||h1(r),ju}/**
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
 */const f1=new il(5e3,15e3),p1="__/auth/iframe",m1="emulator/auth/iframe",g1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},y1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _1(r){const e=r.config;me(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?uf(e,m1):`https://${r.config.authDomain}/${p1}`,s={apiKey:e.apiKey,appName:r.name,v:No},o=y1.get(r.config.apiHost);o&&(s.eid=o);const l=r._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${rl(s).slice(1)}`}async function v1(r){const e=await d1(r),t=nr().gapi;return me(t,r,"internal-error"),e.open({where:document.body,url:_1(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:g1,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const h=Vn(r,"network-request-failed"),m=nr().setTimeout(()=>{l(h)},f1.get());function g(){nr().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{l(h)})}))}/**
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
 */const w1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},E1=500,T1=600,I1="_blank",S1="http://localhost";class $g{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function A1(r,e,t,s=E1,o=T1){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g={...w1,width:s.toString(),height:o.toString(),top:l,left:h},_=jt().toLowerCase();t&&(m=y_(_)?I1:t),m_(_)&&(e=e||S1,g.scrollbars="yes");const w=Object.entries(g).reduce((I,[U,H])=>`${I}${U}=${H},`,"");if(GT(_)&&m!=="_self")return C1(e||"",m),new $g(null);const T=window.open(e||"",m,w);me(T,r,"popup-blocked");try{T.focus()}catch{}return new $g(T)}function C1(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const R1="__/auth/handler",k1="emulator/auth/handler",P1=encodeURIComponent("fac");async function Hg(r,e,t,s,o,l){me(r.config.authDomain,r,"auth-domain-config-required"),me(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:No,eventId:o};if(e instanceof pf){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",p0(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,T]of Object.entries({}))h[w]=T}if(e instanceof ol){const w=e.getScopes().filter(T=>T!=="");w.length>0&&(h.scopes=w.join(","))}r.tenantId&&(h.tid=r.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const g=await r._getAppCheckToken(),_=g?`#${P1}=${encodeURIComponent(g)}`:"";return`${x1(r)}?${rl(m).slice(1)}${_}`}function x1({config:r}){return r.emulator?uf(r,k1):`https://${r.authDomain}/${R1}`}/**
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
 */const wd="webStorageSupport";class N1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=b_,this._completeRedirectFn=t1,this._overrideRedirectResult=JI}async _openPopup(e,t,s,o){var h;Dr((h=this.eventManagers[e._key()])==null?void 0:h.manager,"_initialize() not called before _openPopup()");const l=await Hg(e,t,s,Dd(),o);return A1(e,l,mf())}async _openRedirect(e,t,s,o){await this._originValidation(e);const l=await Hg(e,t,s,Dd(),o);return VI(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Dr(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await v1(e),s=new r1(e);return t.register("authEvent",o=>(me(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(wd,{type:wd},o=>{var h;const l=(h=o==null?void 0:o[0])==null?void 0:h[wd];l!==void 0&&t(!!l),Tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=l1(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return T_()||g_()||hf()}}const D1=N1;var qg="@firebase/auth",Wg="1.11.1";/**
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
 */class b1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){me(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function V1(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function O1(r){Io(new ys("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;me(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:I_(r)},_=new ZT(s,o,l,g);return uI(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Io(new ys("auth-internal",e=>{const t=bi(e.getProvider("auth").getImmediate());return(s=>new b1(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ti(qg,Wg,V1(r)),Ti(qg,Wg,"esm2020")}/**
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
 */const L1=5*60,M1=Zy("authIdTokenMaxAge")||L1;let Gg=null;const F1=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>M1)return;const o=t==null?void 0:t.token;Gg!==o&&(Gg=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function U1(r=s_()){const e=of(r,"auth");if(e.isInitialized())return e.getImmediate();const t=lI(r,{popupRedirectResolver:D1,persistence:[$I,NI,b_]}),s=Zy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const h=F1(l.toString());RI(t,h,()=>h(t.currentUser)),CI(t,m=>h(m))}}const o=Xy("auth");return o&&cI(t,`http://${o}`),t}function j1(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}eI({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const l=Vn("internal-error");l.customData=o,t(l)},s.type="text/javascript",s.charset="UTF-8",j1().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});O1("Browser");var z1="firebase",B1="12.5.0";/**
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
 */Ti(z1,B1,"app");var Kg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ii,z_;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,A){function k(){}k.prototype=A.prototype,x.F=A.prototype,x.prototype=new k,x.prototype.constructor=x,x.D=function(b,N,O){for(var R=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)R[qe-2]=arguments[qe];return A.prototype[N].apply(b,R)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(x,A,k){k||(k=0);const b=Array(16);if(typeof A=="string")for(var N=0;N<16;++N)b[N]=A.charCodeAt(k++)|A.charCodeAt(k++)<<8|A.charCodeAt(k++)<<16|A.charCodeAt(k++)<<24;else for(N=0;N<16;++N)b[N]=A[k++]|A[k++]<<8|A[k++]<<16|A[k++]<<24;A=x.g[0],k=x.g[1],N=x.g[2];let O=x.g[3],R;R=A+(O^k&(N^O))+b[0]+3614090360&4294967295,A=k+(R<<7&4294967295|R>>>25),R=O+(N^A&(k^N))+b[1]+3905402710&4294967295,O=A+(R<<12&4294967295|R>>>20),R=N+(k^O&(A^k))+b[2]+606105819&4294967295,N=O+(R<<17&4294967295|R>>>15),R=k+(A^N&(O^A))+b[3]+3250441966&4294967295,k=N+(R<<22&4294967295|R>>>10),R=A+(O^k&(N^O))+b[4]+4118548399&4294967295,A=k+(R<<7&4294967295|R>>>25),R=O+(N^A&(k^N))+b[5]+1200080426&4294967295,O=A+(R<<12&4294967295|R>>>20),R=N+(k^O&(A^k))+b[6]+2821735955&4294967295,N=O+(R<<17&4294967295|R>>>15),R=k+(A^N&(O^A))+b[7]+4249261313&4294967295,k=N+(R<<22&4294967295|R>>>10),R=A+(O^k&(N^O))+b[8]+1770035416&4294967295,A=k+(R<<7&4294967295|R>>>25),R=O+(N^A&(k^N))+b[9]+2336552879&4294967295,O=A+(R<<12&4294967295|R>>>20),R=N+(k^O&(A^k))+b[10]+4294925233&4294967295,N=O+(R<<17&4294967295|R>>>15),R=k+(A^N&(O^A))+b[11]+2304563134&4294967295,k=N+(R<<22&4294967295|R>>>10),R=A+(O^k&(N^O))+b[12]+1804603682&4294967295,A=k+(R<<7&4294967295|R>>>25),R=O+(N^A&(k^N))+b[13]+4254626195&4294967295,O=A+(R<<12&4294967295|R>>>20),R=N+(k^O&(A^k))+b[14]+2792965006&4294967295,N=O+(R<<17&4294967295|R>>>15),R=k+(A^N&(O^A))+b[15]+1236535329&4294967295,k=N+(R<<22&4294967295|R>>>10),R=A+(N^O&(k^N))+b[1]+4129170786&4294967295,A=k+(R<<5&4294967295|R>>>27),R=O+(k^N&(A^k))+b[6]+3225465664&4294967295,O=A+(R<<9&4294967295|R>>>23),R=N+(A^k&(O^A))+b[11]+643717713&4294967295,N=O+(R<<14&4294967295|R>>>18),R=k+(O^A&(N^O))+b[0]+3921069994&4294967295,k=N+(R<<20&4294967295|R>>>12),R=A+(N^O&(k^N))+b[5]+3593408605&4294967295,A=k+(R<<5&4294967295|R>>>27),R=O+(k^N&(A^k))+b[10]+38016083&4294967295,O=A+(R<<9&4294967295|R>>>23),R=N+(A^k&(O^A))+b[15]+3634488961&4294967295,N=O+(R<<14&4294967295|R>>>18),R=k+(O^A&(N^O))+b[4]+3889429448&4294967295,k=N+(R<<20&4294967295|R>>>12),R=A+(N^O&(k^N))+b[9]+568446438&4294967295,A=k+(R<<5&4294967295|R>>>27),R=O+(k^N&(A^k))+b[14]+3275163606&4294967295,O=A+(R<<9&4294967295|R>>>23),R=N+(A^k&(O^A))+b[3]+4107603335&4294967295,N=O+(R<<14&4294967295|R>>>18),R=k+(O^A&(N^O))+b[8]+1163531501&4294967295,k=N+(R<<20&4294967295|R>>>12),R=A+(N^O&(k^N))+b[13]+2850285829&4294967295,A=k+(R<<5&4294967295|R>>>27),R=O+(k^N&(A^k))+b[2]+4243563512&4294967295,O=A+(R<<9&4294967295|R>>>23),R=N+(A^k&(O^A))+b[7]+1735328473&4294967295,N=O+(R<<14&4294967295|R>>>18),R=k+(O^A&(N^O))+b[12]+2368359562&4294967295,k=N+(R<<20&4294967295|R>>>12),R=A+(k^N^O)+b[5]+4294588738&4294967295,A=k+(R<<4&4294967295|R>>>28),R=O+(A^k^N)+b[8]+2272392833&4294967295,O=A+(R<<11&4294967295|R>>>21),R=N+(O^A^k)+b[11]+1839030562&4294967295,N=O+(R<<16&4294967295|R>>>16),R=k+(N^O^A)+b[14]+4259657740&4294967295,k=N+(R<<23&4294967295|R>>>9),R=A+(k^N^O)+b[1]+2763975236&4294967295,A=k+(R<<4&4294967295|R>>>28),R=O+(A^k^N)+b[4]+1272893353&4294967295,O=A+(R<<11&4294967295|R>>>21),R=N+(O^A^k)+b[7]+4139469664&4294967295,N=O+(R<<16&4294967295|R>>>16),R=k+(N^O^A)+b[10]+3200236656&4294967295,k=N+(R<<23&4294967295|R>>>9),R=A+(k^N^O)+b[13]+681279174&4294967295,A=k+(R<<4&4294967295|R>>>28),R=O+(A^k^N)+b[0]+3936430074&4294967295,O=A+(R<<11&4294967295|R>>>21),R=N+(O^A^k)+b[3]+3572445317&4294967295,N=O+(R<<16&4294967295|R>>>16),R=k+(N^O^A)+b[6]+76029189&4294967295,k=N+(R<<23&4294967295|R>>>9),R=A+(k^N^O)+b[9]+3654602809&4294967295,A=k+(R<<4&4294967295|R>>>28),R=O+(A^k^N)+b[12]+3873151461&4294967295,O=A+(R<<11&4294967295|R>>>21),R=N+(O^A^k)+b[15]+530742520&4294967295,N=O+(R<<16&4294967295|R>>>16),R=k+(N^O^A)+b[2]+3299628645&4294967295,k=N+(R<<23&4294967295|R>>>9),R=A+(N^(k|~O))+b[0]+4096336452&4294967295,A=k+(R<<6&4294967295|R>>>26),R=O+(k^(A|~N))+b[7]+1126891415&4294967295,O=A+(R<<10&4294967295|R>>>22),R=N+(A^(O|~k))+b[14]+2878612391&4294967295,N=O+(R<<15&4294967295|R>>>17),R=k+(O^(N|~A))+b[5]+4237533241&4294967295,k=N+(R<<21&4294967295|R>>>11),R=A+(N^(k|~O))+b[12]+1700485571&4294967295,A=k+(R<<6&4294967295|R>>>26),R=O+(k^(A|~N))+b[3]+2399980690&4294967295,O=A+(R<<10&4294967295|R>>>22),R=N+(A^(O|~k))+b[10]+4293915773&4294967295,N=O+(R<<15&4294967295|R>>>17),R=k+(O^(N|~A))+b[1]+2240044497&4294967295,k=N+(R<<21&4294967295|R>>>11),R=A+(N^(k|~O))+b[8]+1873313359&4294967295,A=k+(R<<6&4294967295|R>>>26),R=O+(k^(A|~N))+b[15]+4264355552&4294967295,O=A+(R<<10&4294967295|R>>>22),R=N+(A^(O|~k))+b[6]+2734768916&4294967295,N=O+(R<<15&4294967295|R>>>17),R=k+(O^(N|~A))+b[13]+1309151649&4294967295,k=N+(R<<21&4294967295|R>>>11),R=A+(N^(k|~O))+b[4]+4149444226&4294967295,A=k+(R<<6&4294967295|R>>>26),R=O+(k^(A|~N))+b[11]+3174756917&4294967295,O=A+(R<<10&4294967295|R>>>22),R=N+(A^(O|~k))+b[2]+718787259&4294967295,N=O+(R<<15&4294967295|R>>>17),R=k+(O^(N|~A))+b[9]+3951481745&4294967295,x.g[0]=x.g[0]+A&4294967295,x.g[1]=x.g[1]+(N+(R<<21&4294967295|R>>>11))&4294967295,x.g[2]=x.g[2]+N&4294967295,x.g[3]=x.g[3]+O&4294967295}s.prototype.v=function(x,A){A===void 0&&(A=x.length);const k=A-this.blockSize,b=this.C;let N=this.h,O=0;for(;O<A;){if(N==0)for(;O<=k;)o(this,x,O),O+=this.blockSize;if(typeof x=="string"){for(;O<A;)if(b[N++]=x.charCodeAt(O++),N==this.blockSize){o(this,b),N=0;break}}else for(;O<A;)if(b[N++]=x[O++],N==this.blockSize){o(this,b),N=0;break}}this.h=N,this.o+=A},s.prototype.A=function(){var x=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);x[0]=128;for(var A=1;A<x.length-8;++A)x[A]=0;A=this.o*8;for(var k=x.length-8;k<x.length;++k)x[k]=A&255,A/=256;for(this.v(x),x=Array(16),A=0,k=0;k<4;++k)for(let b=0;b<32;b+=8)x[A++]=this.g[k]>>>b&255;return x};function l(x,A){var k=m;return Object.prototype.hasOwnProperty.call(k,x)?k[x]:k[x]=A(x)}function h(x,A){this.h=A;const k=[];let b=!0;for(let N=x.length-1;N>=0;N--){const O=x[N]|0;b&&O==A||(k[N]=O,b=!1)}this.g=k}var m={};function g(x){return-128<=x&&x<128?l(x,function(A){return new h([A|0],A<0?-1:0)}):new h([x|0],x<0?-1:0)}function _(x){if(isNaN(x)||!isFinite(x))return T;if(x<0)return B(_(-x));const A=[];let k=1;for(let b=0;x>=k;b++)A[b]=x/k|0,k*=4294967296;return new h(A,0)}function w(x,A){if(x.length==0)throw Error("number format error: empty string");if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(x.charAt(0)=="-")return B(w(x.substring(1),A));if(x.indexOf("-")>=0)throw Error('number format error: interior "-" character');const k=_(Math.pow(A,8));let b=T;for(let O=0;O<x.length;O+=8){var N=Math.min(8,x.length-O);const R=parseInt(x.substring(O,O+N),A);N<8?(N=_(Math.pow(A,N)),b=b.j(N).add(_(R))):(b=b.j(k),b=b.add(_(R)))}return b}var T=g(0),I=g(1),U=g(16777216);r=h.prototype,r.m=function(){if(q(this))return-B(this).m();let x=0,A=1;for(let k=0;k<this.g.length;k++){const b=this.i(k);x+=(b>=0?b:4294967296+b)*A,A*=4294967296}return x},r.toString=function(x){if(x=x||10,x<2||36<x)throw Error("radix out of range: "+x);if(H(this))return"0";if(q(this))return"-"+B(this).toString(x);const A=_(Math.pow(x,6));var k=this;let b="";for(;;){const N=Ce(k,A).g;k=ae(k,N.j(A));let O=((k.g.length>0?k.g[0]:k.h)>>>0).toString(x);if(k=N,H(k))return O+b;for(;O.length<6;)O="0"+O;b=O+b}},r.i=function(x){return x<0?0:x<this.g.length?this.g[x]:this.h};function H(x){if(x.h!=0)return!1;for(let A=0;A<x.g.length;A++)if(x.g[A]!=0)return!1;return!0}function q(x){return x.h==-1}r.l=function(x){return x=ae(this,x),q(x)?-1:H(x)?0:1};function B(x){const A=x.g.length,k=[];for(let b=0;b<A;b++)k[b]=~x.g[b];return new h(k,~x.h).add(I)}r.abs=function(){return q(this)?B(this):this},r.add=function(x){const A=Math.max(this.g.length,x.g.length),k=[];let b=0;for(let N=0;N<=A;N++){let O=b+(this.i(N)&65535)+(x.i(N)&65535),R=(O>>>16)+(this.i(N)>>>16)+(x.i(N)>>>16);b=R>>>16,O&=65535,R&=65535,k[N]=R<<16|O}return new h(k,k[k.length-1]&-2147483648?-1:0)};function ae(x,A){return x.add(B(A))}r.j=function(x){if(H(this)||H(x))return T;if(q(this))return q(x)?B(this).j(B(x)):B(B(this).j(x));if(q(x))return B(this.j(B(x)));if(this.l(U)<0&&x.l(U)<0)return _(this.m()*x.m());const A=this.g.length+x.g.length,k=[];for(var b=0;b<2*A;b++)k[b]=0;for(b=0;b<this.g.length;b++)for(let N=0;N<x.g.length;N++){const O=this.i(b)>>>16,R=this.i(b)&65535,qe=x.i(N)>>>16,vt=x.i(N)&65535;k[2*b+2*N]+=R*vt,Z(k,2*b+2*N),k[2*b+2*N+1]+=O*vt,Z(k,2*b+2*N+1),k[2*b+2*N+1]+=R*qe,Z(k,2*b+2*N+1),k[2*b+2*N+2]+=O*qe,Z(k,2*b+2*N+2)}for(x=0;x<A;x++)k[x]=k[2*x+1]<<16|k[2*x];for(x=A;x<2*A;x++)k[x]=0;return new h(k,0)};function Z(x,A){for(;(x[A]&65535)!=x[A];)x[A+1]+=x[A]>>>16,x[A]&=65535,A++}function he(x,A){this.g=x,this.h=A}function Ce(x,A){if(H(A))throw Error("division by zero");if(H(x))return new he(T,T);if(q(x))return A=Ce(B(x),A),new he(B(A.g),B(A.h));if(q(A))return A=Ce(x,B(A)),new he(B(A.g),A.h);if(x.g.length>30){if(q(x)||q(A))throw Error("slowDivide_ only works with positive integers.");for(var k=I,b=A;b.l(x)<=0;)k=Be(k),b=Be(b);var N=Se(k,1),O=Se(b,1);for(b=Se(b,2),k=Se(k,2);!H(b);){var R=O.add(b);R.l(x)<=0&&(N=N.add(k),O=R),b=Se(b,1),k=Se(k,1)}return A=ae(x,N.j(A)),new he(N,A)}for(N=T;x.l(A)>=0;){for(k=Math.max(1,Math.floor(x.m()/A.m())),b=Math.ceil(Math.log(k)/Math.LN2),b=b<=48?1:Math.pow(2,b-48),O=_(k),R=O.j(A);q(R)||R.l(x)>0;)k-=b,O=_(k),R=O.j(A);H(O)&&(O=I),N=N.add(O),x=ae(x,R)}return new he(N,x)}r.B=function(x){return Ce(this,x).h},r.and=function(x){const A=Math.max(this.g.length,x.g.length),k=[];for(let b=0;b<A;b++)k[b]=this.i(b)&x.i(b);return new h(k,this.h&x.h)},r.or=function(x){const A=Math.max(this.g.length,x.g.length),k=[];for(let b=0;b<A;b++)k[b]=this.i(b)|x.i(b);return new h(k,this.h|x.h)},r.xor=function(x){const A=Math.max(this.g.length,x.g.length),k=[];for(let b=0;b<A;b++)k[b]=this.i(b)^x.i(b);return new h(k,this.h^x.h)};function Be(x){const A=x.g.length+1,k=[];for(let b=0;b<A;b++)k[b]=x.i(b)<<1|x.i(b-1)>>>31;return new h(k,x.h)}function Se(x,A){const k=A>>5;A%=32;const b=x.g.length-k,N=[];for(let O=0;O<b;O++)N[O]=A>0?x.i(O+k)>>>A|x.i(O+k+1)<<32-A:x.i(O+k);return new h(N,x.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,z_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=w,Ii=h}).apply(typeof Kg<"u"?Kg:typeof self<"u"?self:typeof window<"u"?window:{});var Du=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var B_,Oa,$_,zu,Ld,H_,q_,W_;(function(){var r,e=Object.defineProperty;function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Du=="object"&&Du];for(var p=0;p<u.length;++p){var y=u[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(u,p){if(p)e:{var y=s;u=u.split(".");for(var E=0;E<u.length-1;E++){var M=u[E];if(!(M in y))break e;y=y[M]}u=u[u.length-1],E=y[u],p=p(E),p!=E&&p!=null&&e(y,u,{configurable:!0,writable:!0,value:p})}}o("Symbol.dispose",function(u){return u||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(u){return u||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(u){return u||function(p){var y=[],E;for(E in p)Object.prototype.hasOwnProperty.call(p,E)&&y.push([E,p[E]]);return y}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},h=this||self;function m(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function g(u,p,y){return u.call.apply(u.bind,arguments)}function _(u,p,y){return _=g,_.apply(null,arguments)}function w(u,p){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function T(u,p){function y(){}y.prototype=p.prototype,u.Z=p.prototype,u.prototype=new y,u.prototype.constructor=u,u.Ob=function(E,M,z){for(var J=Array(arguments.length-2),we=2;we<arguments.length;we++)J[we-2]=arguments[we];return p.prototype[M].apply(E,J)}}var I=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?u=>u&&AsyncContext.Snapshot.wrap(u):u=>u;function U(u){const p=u.length;if(p>0){const y=Array(p);for(let E=0;E<p;E++)y[E]=u[E];return y}return[]}function H(u,p){for(let E=1;E<arguments.length;E++){const M=arguments[E];var y=typeof M;if(y=y!="object"?y:M?Array.isArray(M)?"array":y:"null",y=="array"||y=="object"&&typeof M.length=="number"){y=u.length||0;const z=M.length||0;u.length=y+z;for(let J=0;J<z;J++)u[y+J]=M[J]}else u.push(M)}}class q{constructor(p,y){this.i=p,this.j=y,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function B(u){h.setTimeout(()=>{throw u},0)}function ae(){var u=x;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class Z{constructor(){this.h=this.g=null}add(p,y){const E=he.get();E.set(p,y),this.h?this.h.next=E:this.g=E,this.h=E}}var he=new q(()=>new Ce,u=>u.reset());class Ce{constructor(){this.next=this.g=this.h=null}set(p,y){this.h=p,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Be,Se=!1,x=new Z,A=()=>{const u=Promise.resolve(void 0);Be=()=>{u.then(k)}};function k(){for(var u;u=ae();){try{u.h.call(u.g)}catch(y){B(y)}var p=he;p.j(u),p.h<100&&(p.h++,u.next=p.g,p.g=u)}Se=!1}function b(){this.u=this.u,this.C=this.C}b.prototype.u=!1,b.prototype.dispose=function(){this.u||(this.u=!0,this.N())},b.prototype[Symbol.dispose]=function(){this.dispose()},b.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function N(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}N.prototype.h=function(){this.defaultPrevented=!0};var O=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const y=()=>{};h.addEventListener("test",y,p),h.removeEventListener("test",y,p)}catch{}return u}();function R(u){return/^[\s\xa0]*$/.test(u)}function qe(u,p){N.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u&&this.init(u,p)}T(qe,N),qe.prototype.init=function(u,p){const y=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget,p||(y=="mouseover"?p=u.fromElement:y=="mouseout"&&(p=u.toElement)),this.relatedTarget=p,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=u.pointerType,this.state=u.state,this.i=u,u.defaultPrevented&&qe.Z.h.call(this)},qe.prototype.h=function(){qe.Z.h.call(this);const u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var vt="closure_listenable_"+(Math.random()*1e6|0),Nt=0;function Xe(u,p,y,E,M){this.listener=u,this.proxy=null,this.src=p,this.type=y,this.capture=!!E,this.ha=M,this.key=++Nt,this.da=this.fa=!1}function ee(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function de(u,p,y){for(const E in u)p.call(y,u[E],E,u)}function ie(u,p){for(const y in u)p.call(void 0,u[y],y,u)}function V(u){const p={};for(const y in u)p[y]=u[y];return p}const G="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Te(u,p){let y,E;for(let M=1;M<arguments.length;M++){E=arguments[M];for(y in E)u[y]=E[y];for(let z=0;z<G.length;z++)y=G[z],Object.prototype.hasOwnProperty.call(E,y)&&(u[y]=E[y])}}function Ie(u){this.src=u,this.g={},this.h=0}Ie.prototype.add=function(u,p,y,E,M){const z=u.toString();u=this.g[z],u||(u=this.g[z]=[],this.h++);const J=ke(u,p,E,M);return J>-1?(p=u[J],y||(p.fa=!1)):(p=new Xe(p,this.src,z,!!E,M),p.fa=y,u.push(p)),p};function Re(u,p){const y=p.type;if(y in u.g){var E=u.g[y],M=Array.prototype.indexOf.call(E,p,void 0),z;(z=M>=0)&&Array.prototype.splice.call(E,M,1),z&&(ee(p),u.g[y].length==0&&(delete u.g[y],u.h--))}}function ke(u,p,y,E){for(let M=0;M<u.length;++M){const z=u[M];if(!z.da&&z.listener==p&&z.capture==!!y&&z.ha==E)return M}return-1}var Fe="closure_lm_"+(Math.random()*1e6|0),Ve={};function $e(u,p,y,E,M){if(Array.isArray(p)){for(let z=0;z<p.length;z++)$e(u,p[z],y,E,M);return null}return y=Fo(y),u&&u[vt]?u.J(p,y,m(E)?!!E.capture:!1,M):zt(u,p,y,!1,E,M)}function zt(u,p,y,E,M,z){if(!p)throw Error("Invalid event type");const J=m(M)?!!M.capture:!!M;let we=Rs(u);if(we||(u[Fe]=we=new Ie(u)),y=we.add(p,y,E,J,z),y.proxy)return y;if(E=As(),y.proxy=E,E.src=u,E.listener=y,u.addEventListener)O||(M=J),M===void 0&&(M=!1),u.addEventListener(p.toString(),E,M);else if(u.attachEvent)u.attachEvent(Cs(p.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function As(){function u(y){return p.call(u.src,u.listener,y)}const p=ml;return u}function Mo(u,p,y,E,M){if(Array.isArray(p))for(var z=0;z<p.length;z++)Mo(u,p[z],y,E,M);else E=m(E)?!!E.capture:!!E,y=Fo(y),u&&u[vt]?(u=u.i,z=String(p).toString(),z in u.g&&(p=u.g[z],y=ke(p,y,E,M),y>-1&&(ee(p[y]),Array.prototype.splice.call(p,y,1),p.length==0&&(delete u.g[z],u.h--)))):u&&(u=Rs(u))&&(p=u.g[p.toString()],u=-1,p&&(u=ke(p,y,E,M)),(y=u>-1?p[u]:null)&&Mr(y))}function Mr(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[vt])Re(p.i,u);else{var y=u.type,E=u.proxy;p.removeEventListener?p.removeEventListener(y,E,u.capture):p.detachEvent?p.detachEvent(Cs(y),E):p.addListener&&p.removeListener&&p.removeListener(E),(y=Rs(p))?(Re(y,u),y.h==0&&(y.src=null,p[Fe]=null)):ee(u)}}}function Cs(u){return u in Ve?Ve[u]:Ve[u]="on"+u}function ml(u,p){if(u.da)u=!0;else{p=new qe(p,this);const y=u.listener,E=u.ha||u.src;u.fa&&Mr(u),u=y.call(E,p)}return u}function Rs(u){return u=u[Fe],u instanceof Ie?u:null}var Li="__closure_events_fn_"+(Math.random()*1e9>>>0);function Fo(u){return typeof u=="function"?u:(u[Li]||(u[Li]=function(p){return u.handleEvent(p)}),u[Li])}function ut(){b.call(this),this.i=new Ie(this),this.M=this,this.G=null}T(ut,b),ut.prototype[vt]=!0,ut.prototype.removeEventListener=function(u,p,y,E){Mo(this,u,p,y,E)};function st(u,p){var y,E=u.G;if(E)for(y=[];E;E=E.G)y.push(E);if(u=u.M,E=p.type||p,typeof p=="string")p=new N(p,u);else if(p instanceof N)p.target=p.target||u;else{var M=p;p=new N(E,u),Te(p,M)}M=!0;let z,J;if(y)for(J=y.length-1;J>=0;J--)z=p.g=y[J],M=In(z,E,!0,p)&&M;if(z=p.g=u,M=In(z,E,!0,p)&&M,M=In(z,E,!1,p)&&M,y)for(J=0;J<y.length;J++)z=p.g=y[J],M=In(z,E,!1,p)&&M}ut.prototype.N=function(){if(ut.Z.N.call(this),this.i){var u=this.i;for(const p in u.g){const y=u.g[p];for(let E=0;E<y.length;E++)ee(y[E]);delete u.g[p],u.h--}}this.G=null},ut.prototype.J=function(u,p,y,E){return this.i.add(String(u),p,!1,y,E)},ut.prototype.K=function(u,p,y,E){return this.i.add(String(u),p,!0,y,E)};function In(u,p,y,E){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();let M=!0;for(let z=0;z<p.length;++z){const J=p[z];if(J&&!J.da&&J.capture==y){const we=J.listener,ot=J.ha||J.src;J.fa&&Re(u.i,J),M=we.call(ot,E)!==!1&&M}}return M&&!E.defaultPrevented}function Uo(u,p){if(typeof u!="function")if(u&&typeof u.handleEvent=="function")u=_(u.handleEvent,u);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:h.setTimeout(u,p||0)}function jo(u){u.g=Uo(()=>{u.g=null,u.i&&(u.i=!1,jo(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class gl extends b{constructor(p,y){super(),this.m=p,this.l=y,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:jo(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fr(u){b.call(this),this.h=u,this.g={}}T(Fr,b);var zo=[];function ks(u){de(u.g,function(p,y){this.g.hasOwnProperty(y)&&Mr(p)},u),u.g={}}Fr.prototype.N=function(){Fr.Z.N.call(this),ks(this)},Fr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ur=h.JSON.stringify,yl=h.JSON.parse,Mi=class{stringify(u){return h.JSON.stringify(u,void 0)}parse(u){return h.JSON.parse(u,void 0)}};function jr(){}function _l(){}var zr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ps(){N.call(this,"d")}T(Ps,N);function Bo(){N.call(this,"c")}T(Bo,N);var Sn={},xs=null;function Br(){return xs=xs||new ut}Sn.Ia="serverreachability";function Ns(u){N.call(this,Sn.Ia,u)}T(Ns,N);function lr(u){const p=Br();st(p,new Ns(p))}Sn.STAT_EVENT="statevent";function ur(u,p){N.call(this,Sn.STAT_EVENT,u),this.stat=p}T(ur,N);function nt(u){const p=Br();st(p,new ur(p,u))}Sn.Ja="timingevent";function $o(u,p){N.call(this,Sn.Ja,u),this.size=p}T($o,N);function $r(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){u()},p)}function Hr(){this.g=!0}Hr.prototype.ua=function(){this.g=!1};function vl(u,p,y,E,M,z){u.info(function(){if(u.g)if(z){var J="",we=z.split("&");for(let je=0;je<we.length;je++){var ot=we[je].split("=");if(ot.length>1){const ct=ot[0];ot=ot[1];const on=ct.split("_");J=on.length>=2&&on[1]=="type"?J+(ct+"="+ot+"&"):J+(ct+"=redacted&")}}}else J=null;else J=z;return"XMLHTTP REQ ("+E+") [attempt "+M+"]: "+p+`
`+y+`
`+J})}function wl(u,p,y,E,M,z,J){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+M+"]: "+p+`
`+y+`
`+z+" "+J})}function Ln(u,p,y,E){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+Fi(u,y)+(E?" "+E:"")})}function El(u,p){u.info(function(){return"TIMEOUT: "+p})}Hr.prototype.info=function(){};function Fi(u,p){if(!u.g)return p;if(!p)return null;try{const z=JSON.parse(p);if(z){for(u=0;u<z.length;u++)if(Array.isArray(z[u])){var y=z[u];if(!(y.length<2)){var E=y[1];if(Array.isArray(E)&&!(E.length<1)){var M=E[0];if(M!="noop"&&M!="stop"&&M!="close")for(let J=1;J<E.length;J++)E[J]=""}}}}return Ur(z)}catch{return p}}var qr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Wr={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Tl;function cr(){}T(cr,jr),cr.prototype.g=function(){return new XMLHttpRequest},Tl=new cr;function Mn(u){return encodeURIComponent(String(u))}function Ds(u){var p=1;u=u.split(":");const y=[];for(;p>0&&u.length;)y.push(u.shift()),p--;return u.length&&y.push(u.join(":")),y}function dn(u,p,y,E){this.j=u,this.i=p,this.l=y,this.S=E||1,this.V=new Fr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Il}function Il(){this.i=null,this.g="",this.h=!1}var Sl={},Ho={};function An(u,p,y){u.M=1,u.A=dr(fn(p)),u.u=y,u.R=!0,qo(u,null)}function qo(u,p){u.F=Date.now(),Ui(u),u.B=fn(u.A);var y=u.B,E=u.S;Array.isArray(E)||(E=[String(E)]),ta(y.i,"t",E),u.C=0,y=u.j.L,u.h=new Il,u.g=Vl(u.j,y?p:null,!u.u),u.P>0&&(u.O=new gl(_(u.Y,u,u.g),u.P)),p=u.V,y=u.g,E=u.ba;var M="readystatechange";Array.isArray(M)||(M&&(zo[0]=M.toString()),M=zo);for(let z=0;z<M.length;z++){const J=$e(y,M[z],E||p.handleEvent,!1,p.h||p);if(!J)break;p.g[J.key]=J}p=u.J?V(u.J):{},u.u?(u.v||(u.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.B,u.v,u.u,p)):(u.v="GET",u.g.ea(u.B,u.v,null,p)),lr(),vl(u.i,u.v,u.B,u.l,u.S,u.u)}dn.prototype.ba=function(u){u=u.target;const p=this.O;p&&Hn(u)==3?p.j():this.Y(u)},dn.prototype.Y=function(u){try{if(u==this.g)e:{const we=Hn(this.g),ot=this.g.ya(),je=this.g.ca();if(!(we<3)&&(we!=3||this.g&&(this.h.h||this.g.la()||Dl(this.g)))){this.K||we!=4||ot==7||(ot==8||je<=0?lr(3):lr(2)),bs(this);var p=this.g.ca();this.X=p;var y=Al(this);if(this.o=p==200,wl(this.i,this.v,this.B,this.l,this.S,we,p),this.o){if(this.U&&!this.L){t:{if(this.g){var E,M=this.g;if((E=M.g?M.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(E)){var z=E;break t}}z=null}if(u=z)Ln(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ke(this,u);else{this.o=!1,this.m=3,nt(12),hr(this),ji(this);break e}}if(this.R){u=!0;let ct;for(;!this.K&&this.C<y.length;)if(ct=Rl(this,y),ct==Ho){we==4&&(this.m=4,nt(14),u=!1),Ln(this.i,this.l,null,"[Incomplete Response]");break}else if(ct==Sl){this.m=4,nt(15),Ln(this.i,this.l,y,"[Invalid Chunk]"),u=!1;break}else Ln(this.i,this.l,ct,null),Ke(this,ct);if(Cl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),we!=4||y.length!=0||this.h.h||(this.m=1,nt(16),u=!1),this.o=this.o&&u,!u)Ln(this.i,this.l,y,"[Invalid Chunked Response]"),hr(this),ji(this);else if(y.length>0&&!this.W){this.W=!0;var J=this.j;J.g==this&&J.aa&&!J.P&&(J.j.info("Great, no buffering proxy detected. Bytes received: "+y.length),Qi(J),J.P=!0,nt(11))}}else Ln(this.i,this.l,y,null),Ke(this,y);we==4&&hr(this),this.o&&!this.K&&(we==4?$s(this.j,this):(this.o=!1,Ui(this)))}else ra(this.g),p==400&&y.indexOf("Unknown SID")>0?(this.m=3,nt(12)):(this.m=0,nt(13)),hr(this),ji(this)}}}catch{}finally{}};function Al(u){if(!Cl(u))return u.g.la();const p=Dl(u.g);if(p==="")return"";let y="";const E=p.length,M=Hn(u.g)==4;if(!u.h.i){if(typeof TextDecoder>"u")return hr(u),ji(u),"";u.h.i=new h.TextDecoder}for(let z=0;z<E;z++)u.h.h=!0,y+=u.h.i.decode(p[z],{stream:!(M&&z==E-1)});return p.length=0,u.h.g+=y,u.C=0,u.h.g}function Cl(u){return u.g?u.v=="GET"&&u.M!=2&&u.j.Aa:!1}function Rl(u,p){var y=u.C,E=p.indexOf(`
`,y);return E==-1?Ho:(y=Number(p.substring(y,E)),isNaN(y)?Sl:(E+=1,E+y>p.length?Ho:(p=p.slice(E,E+y),u.C=E+y,p)))}dn.prototype.cancel=function(){this.K=!0,hr(this)};function Ui(u){u.T=Date.now()+u.H,Wo(u,u.H)}function Wo(u,p){if(u.D!=null)throw Error("WatchDog timer not null");u.D=$r(_(u.aa,u),p)}function bs(u){u.D&&(h.clearTimeout(u.D),u.D=null)}dn.prototype.aa=function(){this.D=null;const u=Date.now();u-this.T>=0?(El(this.i,this.B),this.M!=2&&(lr(),nt(17)),hr(this),this.m=2,ji(this)):Wo(this,this.T-u)};function ji(u){u.j.I==0||u.K||$s(u.j,u)}function hr(u){bs(u);var p=u.O;p&&typeof p.dispose=="function"&&p.dispose(),u.O=null,ks(u.V),u.g&&(p=u.g,u.g=null,p.abort(),p.dispose())}function Ke(u,p){try{var y=u.j;if(y.I!=0&&(y.g==u||Ko(y.h,u))){if(!u.L&&Ko(y.h,u)&&y.I==3){try{var E=y.Ba.g.parse(p)}catch{E=null}if(Array.isArray(E)&&E.length==3){var M=E;if(M[0]==0){e:if(!y.v){if(y.g)if(y.g.F+3e3<u.F)Bs(y),rn(y);else break e;Gn(y),nt(18)}}else y.xa=M[1],0<y.xa-y.K&&M[2]<37500&&y.F&&y.A==0&&!y.C&&(y.C=$r(_(y.Va,y),6e3));zi(y.h)<=1&&y.ta&&(y.ta=void 0)}else sn(y,11)}else if((u.L||y.g==u)&&Bs(y),!R(p))for(M=y.Ba.g.parse(p),p=0;p<M.length;p++){let je=M[p];const ct=je[0];if(!(ct<=y.K))if(y.K=ct,je=je[1],y.I==2)if(je[0]=="c"){y.M=je[1],y.ba=je[2];const on=je[3];on!=null&&(y.ka=on,y.j.info("VER="+y.ka));const yr=je[4];yr!=null&&(y.za=yr,y.j.info("SVER="+y.za));const Kn=je[5];Kn!=null&&typeof Kn=="number"&&Kn>0&&(E=1.5*Kn,y.O=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const Qn=u.g;if(Qn){const Ws=Qn.g?Qn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ws){var z=E.h;z.g||Ws.indexOf("spdy")==-1&&Ws.indexOf("quic")==-1&&Ws.indexOf("h2")==-1||(z.j=z.l,z.g=new Set,z.h&&(Os(z,z.h),z.h=null))}if(E.G){const oa=Qn.g?Qn.g.getResponseHeader("X-HTTP-Session-Id"):null;oa&&(E.wa=oa,Me(E.J,E.G,oa))}}y.I=3,y.l&&y.l.ra(),y.aa&&(y.T=Date.now()-u.F,y.j.info("Handshake RTT: "+y.T+"ms")),E=y;var J=u;if(E.na=sa(E,E.L?E.ba:null,E.W),J.L){Bi(E.h,J);var we=J,ot=E.O;ot&&(we.H=ot),we.D&&(bs(we),Ui(we)),E.g=J}else Dt(E);y.i.length>0&&gr(y)}else je[0]!="stop"&&je[0]!="close"||sn(y,7);else y.I==3&&(je[0]=="stop"||je[0]=="close"?je[0]=="stop"?sn(y,7):js(y):je[0]!="noop"&&y.l&&y.l.qa(je),y.A=0)}}lr(4)}catch{}}var jc=class{constructor(u,p){this.g=u,this.map=p}};function Vs(u){this.l=u||10,h.PerformanceNavigationTiming?(u=h.performance.getEntriesByType("navigation"),u=u.length>0&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Go(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function zi(u){return u.h?1:u.g?u.g.size:0}function Ko(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function Os(u,p){u.g?u.g.add(p):u.h=p}function Bi(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}Vs.prototype.cancel=function(){if(this.i=en(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function en(u){if(u.h!=null)return u.i.concat(u.h.G);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const y of u.g.values())p=p.concat(y.G);return p}return U(u.i)}var kl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tn(u,p){if(u){u=u.split("&");for(let y=0;y<u.length;y++){const E=u[y].indexOf("=");let M,z=null;E>=0?(M=u[y].substring(0,E),z=u[y].substring(E+1)):M=u[y],p(M,z?decodeURIComponent(z.replace(/\+/g," ")):"")}}}function Fn(u){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;u instanceof Fn?(this.l=u.l,$i(this,u.j),this.o=u.o,this.g=u.g,Un(this,u.u),this.h=u.h,Gr(this,na(u.i)),this.m=u.m):u&&(p=String(u).match(kl))?(this.l=!1,$i(this,p[1]||"",!0),this.o=Hi(p[2]||""),this.g=Hi(p[3]||"",!0),Un(this,p[4]),this.h=Hi(p[5]||"",!0),Gr(this,p[6]||"",!0),this.m=Hi(p[7]||"")):(this.l=!1,this.i=new De(null,this.l))}Fn.prototype.toString=function(){const u=[];var p=this.j;p&&u.push(qi(p,Yo,!0),":");var y=this.g;return(y||p=="file")&&(u.push("//"),(p=this.o)&&u.push(qi(p,Yo,!0),"@"),u.push(Mn(y).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.u,y!=null&&u.push(":",String(y))),(y=this.h)&&(this.g&&y.charAt(0)!="/"&&u.push("/"),u.push(qi(y,y.charAt(0)=="/"?Wi:Xo,!0))),(y=this.i.toString())&&u.push("?",y),(y=this.m)&&u.push("#",qi(y,Jo)),u.join("")},Fn.prototype.resolve=function(u){const p=fn(this);let y=!!u.j;y?$i(p,u.j):y=!!u.o,y?p.o=u.o:y=!!u.g,y?p.g=u.g:y=u.u!=null;var E=u.h;if(y)Un(p,u.u);else if(y=!!u.h){if(E.charAt(0)!="/")if(this.g&&!this.h)E="/"+E;else{var M=p.h.lastIndexOf("/");M!=-1&&(E=p.h.slice(0,M+1)+E)}if(M=E,M==".."||M==".")E="";else if(M.indexOf("./")!=-1||M.indexOf("/.")!=-1){E=M.lastIndexOf("/",0)==0,M=M.split("/");const z=[];for(let J=0;J<M.length;){const we=M[J++];we=="."?E&&J==M.length&&z.push(""):we==".."?((z.length>1||z.length==1&&z[0]!="")&&z.pop(),E&&J==M.length&&z.push("")):(z.push(we),E=!0)}E=z.join("/")}else E=M}return y?p.h=E:y=u.i.toString()!=="",y?Gr(p,na(u.i)):y=!!u.m,y&&(p.m=u.m),p};function fn(u){return new Fn(u)}function $i(u,p,y){u.j=y?Hi(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function Un(u,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);u.u=p}else u.u=null}function Gr(u,p,y){p instanceof De?(u.i=p,Ms(u.i,u.l)):(y||(p=qi(p,zc)),u.i=new De(p,u.l))}function Me(u,p,y){u.i.set(p,y)}function dr(u){return Me(u,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),u}function Hi(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function qi(u,p,y){return typeof u=="string"?(u=encodeURI(u).replace(p,Qo),y&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Qo(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Yo=/[#\/\?@]/g,Xo=/[#\?:]/g,Wi=/[#\?]/g,zc=/[#\?@]/g,Jo=/#/g;function De(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function jn(u){u.g||(u.g=new Map,u.h=0,u.i&&tn(u.i,function(p,y){u.add(decodeURIComponent(p.replace(/\+/g," ")),y)}))}r=De.prototype,r.add=function(u,p){jn(this),this.i=null,u=zn(this,u);let y=this.g.get(u);return y||this.g.set(u,y=[]),y.push(p),this.h+=1,this};function Zo(u,p){jn(u),p=zn(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function Ls(u,p){return jn(u),p=zn(u,p),u.g.has(p)}r.forEach=function(u,p){jn(this),this.g.forEach(function(y,E){y.forEach(function(M){u.call(p,M,E,this)},this)},this)};function ea(u,p){jn(u);let y=[];if(typeof p=="string")Ls(u,p)&&(y=y.concat(u.g.get(zn(u,p))));else for(u=Array.from(u.g.values()),p=0;p<u.length;p++)y=y.concat(u[p]);return y}r.set=function(u,p){return jn(this),this.i=null,u=zn(this,u),Ls(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},r.get=function(u,p){return u?(u=ea(this,u),u.length>0?String(u[0]):p):p};function ta(u,p,y){Zo(u,p),y.length>0&&(u.i=null,u.g.set(zn(u,p),U(y)),u.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(let E=0;E<p.length;E++){var y=p[E];const M=Mn(y);y=ea(this,y);for(let z=0;z<y.length;z++){let J=M;y[z]!==""&&(J+="="+Mn(y[z])),u.push(J)}}return this.i=u.join("&")};function na(u){const p=new De;return p.i=u.i,u.g&&(p.g=new Map(u.g),p.h=u.h),p}function zn(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function Ms(u,p){p&&!u.j&&(jn(u),u.i=null,u.g.forEach(function(y,E){const M=E.toLowerCase();E!=M&&(Zo(this,E),ta(this,M,y))},u)),u.j=p}function Bn(u,p){const y=new Hr;if(h.Image){const E=new Image;E.onload=w(St,y,"TestLoadImage: loaded",!0,p,E),E.onerror=w(St,y,"TestLoadImage: error",!1,p,E),E.onabort=w(St,y,"TestLoadImage: abort",!1,p,E),E.ontimeout=w(St,y,"TestLoadImage: timeout",!1,p,E),h.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else p(!1)}function $n(u,p){const y=new Hr,E=new AbortController,M=setTimeout(()=>{E.abort(),St(y,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:E.signal}).then(z=>{clearTimeout(M),z.ok?St(y,"TestPingServer: ok",!0,p):St(y,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(M),St(y,"TestPingServer: error",!1,p)})}function St(u,p,y,E,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),E(y)}catch{}}function Gi(){this.g=new Mi}function fr(u){this.i=u.Sb||null,this.h=u.ab||!1}T(fr,jr),fr.prototype.g=function(){return new nn(this.i,this.h)};function nn(u,p){ut.call(this),this.H=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}T(nn,ut),r=nn.prototype,r.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=u,this.D=p,this.readyState=1,Cn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};u&&(p.body=u),(this.H||h).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Kr(this)),this.readyState=0},r.Pa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Cn(this)),this.g&&(this.readyState=3,Cn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Pl(this)}else u.text().then(this.Oa.bind(this),this.ga.bind(this))};function Pl(u){u.j.read().then(u.Ma.bind(u)).catch(u.ga.bind(u))}r.Ma=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?Kr(this):Cn(this),this.readyState==3&&Pl(this)}},r.Oa=function(u){this.g&&(this.response=this.responseText=u,Kr(this))},r.Na=function(u){this.g&&(this.response=u,Kr(this))},r.ga=function(){this.g&&Kr(this)};function Kr(u){u.readyState=4,u.l=null,u.j=null,u.B=null,Cn(u)}r.setRequestHeader=function(u,p){this.A.append(u,p)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var y=p.next();!y.done;)y=y.value,u.push(y[0]+": "+y[1]),y=p.next();return u.join(`\r
`)};function Cn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(nn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function xl(u){let p="";return de(u,function(y,E){p+=E,p+=":",p+=y,p+=`\r
`}),p}function Fs(u,p,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=xl(y),typeof u=="string"?y!=null&&Mn(y):Me(u,p,y))}function He(u){ut.call(this),this.headers=new Map,this.L=u||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}T(He,ut);var Nl=/^https?$/i,Bc=["POST","PUT"];r=He.prototype,r.Fa=function(u){this.H=u},r.ea=function(u,p,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Tl.g(),this.g.onreadystatechange=I(_(this.Ca,this));try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(z){Qr(this,z);return}if(u=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var M in E)y.set(M,E[M]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const z of E.keys())y.set(z,E.get(z));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(z=>z.toLowerCase()=="content-type"),M=h.FormData&&u instanceof h.FormData,!(Array.prototype.indexOf.call(Bc,p,void 0)>=0)||E||M||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[z,J]of y)this.g.setRequestHeader(z,J);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(u),this.v=!1}catch(z){Qr(this,z)}};function Qr(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.o=5,Yr(u),mr(u)}function Yr(u){u.A||(u.A=!0,st(u,"complete"),st(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=u||7,st(this,"complete"),st(this,"abort"),mr(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),mr(this,!0)),He.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?pr(this):this.Xa())},r.Xa=function(){pr(this)};function pr(u){if(u.h&&typeof l<"u"){if(u.v&&Hn(u)==4)setTimeout(u.Ca.bind(u),0);else if(st(u,"readystatechange"),Hn(u)==4){u.h=!1;try{const z=u.ca();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var y;if(!(y=p)){var E;if(E=z===0){let J=String(u.D).match(kl)[1]||null;!J&&h.self&&h.self.location&&(J=h.self.location.protocol.slice(0,-1)),E=!Nl.test(J?J.toLowerCase():"")}y=E}if(y)st(u,"complete"),st(u,"success");else{u.o=6;try{var M=Hn(u)>2?u.g.statusText:""}catch{M=""}u.l=M+" ["+u.ca()+"]",Yr(u)}}finally{mr(u)}}}}function mr(u,p){if(u.g){u.m&&(clearTimeout(u.m),u.m=null);const y=u.g;u.g=null,p||st(u,"ready");try{y.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function Hn(u){return u.g?u.g.readyState:0}r.ca=function(){try{return Hn(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),yl(p)}};function Dl(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.F){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function ra(u){const p={};u=(u.g&&Hn(u)>=2&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(R(u[E]))continue;var y=Ds(u[E]);const M=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const z=p[M]||[];p[M]=z,z.push(y)}ie(p,function(E){return E.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function qn(u,p,y){return y&&y.internalChannelParams&&y.internalChannelParams[u]||p}function Us(u){this.za=0,this.i=[],this.j=new Hr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=qn("failFast",!1,u),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=qn("baseRetryDelayMs",5e3,u),this.Za=qn("retryDelaySeedMs",1e4,u),this.Ta=qn("forwardChannelMaxRetries",2,u),this.va=qn("forwardChannelRequestTimeoutMs",2e4,u),this.ma=u&&u.xmlHttpFactory||void 0,this.Ua=u&&u.Rb||void 0,this.Aa=u&&u.useFetchStreams||!1,this.O=void 0,this.L=u&&u.supportsCrossDomainXhr||!1,this.M="",this.h=new Vs(u&&u.concurrentRequestLimit),this.Ba=new Gi,this.S=u&&u.fastHandshake||!1,this.R=u&&u.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=u&&u.Pb||!1,u&&u.ua&&this.j.ua(),u&&u.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&u&&u.detectBufferingProxy||!1,this.ia=void 0,u&&u.longPollingTimeout&&u.longPollingTimeout>0&&(this.ia=u.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=Us.prototype,r.ka=8,r.I=1,r.connect=function(u,p,y,E){nt(0),this.W=u,this.H=p||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.J=sa(this,null,this.W),gr(this)};function js(u){if(zs(u),u.I==3){var p=u.V++,y=fn(u.J);if(Me(y,"SID",u.M),Me(y,"RID",p),Me(y,"TYPE","terminate"),Wn(u,y),p=new dn(u,u.j,p),p.M=2,p.A=dr(fn(y)),y=!1,h.navigator&&h.navigator.sendBeacon)try{y=h.navigator.sendBeacon(p.A.toString(),"")}catch{}!y&&h.Image&&(new Image().src=p.A,y=!0),y||(p.g=Vl(p.j,null),p.g.ea(p.A)),p.F=Date.now(),Ui(p)}Yi(u)}function rn(u){u.g&&(Qi(u),u.g.cancel(),u.g=null)}function zs(u){rn(u),u.v&&(h.clearTimeout(u.v),u.v=null),Bs(u),u.h.cancel(),u.m&&(typeof u.m=="number"&&h.clearTimeout(u.m),u.m=null)}function gr(u){if(!Go(u.h)&&!u.m){u.m=!0;var p=u.Ea;Be||A(),Se||(Be(),Se=!0),x.add(p,u),u.D=0}}function bl(u,p){return zi(u.h)>=u.h.j-(u.m?1:0)?!1:u.m?(u.i=p.G.concat(u.i),!0):u.I==1||u.I==2||u.D>=(u.Sa?0:u.Ta)?!1:(u.m=$r(_(u.Ea,u,p),Hs(u,u.D)),u.D++,!0)}r.Ea=function(u){if(this.m)if(this.m=null,this.I==1){if(!u){this.V=Math.floor(Math.random()*1e5),u=this.V++;const M=new dn(this,this.j,u);let z=this.o;if(this.U&&(z?(z=V(z),Te(z,this.U)):z=this.U),this.u!==null||this.R||(M.J=z,z=null),this.S)e:{for(var p=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(p+=E,p>4096){p=y;break e}if(p===4096||y===this.i.length-1){p=y+1;break e}}p=1e3}else p=1e3;p=ia(this,M,p),y=fn(this.J),Me(y,"RID",u),Me(y,"CVER",22),this.G&&Me(y,"X-HTTP-Session-Id",this.G),Wn(this,y),z&&(this.R?p="headers="+Mn(xl(z))+"&"+p:this.u&&Fs(y,this.u,z)),Os(this.h,M),this.Ra&&Me(y,"TYPE","init"),this.S?(Me(y,"$req",p),Me(y,"SID","null"),M.U=!0,An(M,y,null)):An(M,y,p),this.I=2}}else this.I==3&&(u?Ki(this,u):this.i.length==0||Go(this.h)||Ki(this))};function Ki(u,p){var y;p?y=p.l:y=u.V++;const E=fn(u.J);Me(E,"SID",u.M),Me(E,"RID",y),Me(E,"AID",u.K),Wn(u,E),u.u&&u.o&&Fs(E,u.u,u.o),y=new dn(u,u.j,y,u.D+1),u.u===null&&(y.J=u.o),p&&(u.i=p.G.concat(u.i)),p=ia(u,y,1e3),y.H=Math.round(u.va*.5)+Math.round(u.va*.5*Math.random()),Os(u.h,y),An(y,E,p)}function Wn(u,p){u.H&&de(u.H,function(y,E){Me(p,E,y)}),u.l&&de({},function(y,E){Me(p,E,y)})}function ia(u,p,y){y=Math.min(u.i.length,y);const E=u.l?_(u.l.Ka,u.l,u):null;e:{var M=u.i;let we=-1;for(;;){const ot=["count="+y];we==-1?y>0?(we=M[0].g,ot.push("ofs="+we)):we=0:ot.push("ofs="+we);let je=!0;for(let ct=0;ct<y;ct++){var z=M[ct].g;const on=M[ct].map;if(z-=we,z<0)we=Math.max(0,M[ct].g-100),je=!1;else try{z="req"+z+"_"||"";try{var J=on instanceof Map?on:Object.entries(on);for(const[yr,Kn]of J){let Qn=Kn;m(Kn)&&(Qn=Ur(Kn)),ot.push(z+yr+"="+encodeURIComponent(Qn))}}catch(yr){throw ot.push(z+"type="+encodeURIComponent("_badmap")),yr}}catch{E&&E(on)}}if(je){J=ot.join("&");break e}}J=void 0}return u=u.i.splice(0,y),p.G=u,J}function Dt(u){if(!u.g&&!u.v){u.Y=1;var p=u.Da;Be||A(),Se||(Be(),Se=!0),x.add(p,u),u.A=0}}function Gn(u){return u.g||u.v||u.A>=3?!1:(u.Y++,u.v=$r(_(u.Da,u),Hs(u,u.A)),u.A++,!0)}r.Da=function(){if(this.v=null,Xr(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var u=4*this.T;this.j.info("BP detection timer enabled: "+u),this.B=$r(_(this.Wa,this),u)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,nt(10),rn(this),Xr(this))};function Qi(u){u.B!=null&&(h.clearTimeout(u.B),u.B=null)}function Xr(u){u.g=new dn(u,u.j,"rpc",u.Y),u.u===null&&(u.g.J=u.o),u.g.P=0;var p=fn(u.na);Me(p,"RID","rpc"),Me(p,"SID",u.M),Me(p,"AID",u.K),Me(p,"CI",u.F?"0":"1"),!u.F&&u.ia&&Me(p,"TO",u.ia),Me(p,"TYPE","xmlhttp"),Wn(u,p),u.u&&u.o&&Fs(p,u.u,u.o),u.O&&(u.g.H=u.O);var y=u.g;u=u.ba,y.M=1,y.A=dr(fn(p)),y.u=null,y.R=!0,qo(y,u)}r.Va=function(){this.C!=null&&(this.C=null,rn(this),Gn(this),nt(19))};function Bs(u){u.C!=null&&(h.clearTimeout(u.C),u.C=null)}function $s(u,p){var y=null;if(u.g==p){Bs(u),Qi(u),u.g=null;var E=2}else if(Ko(u.h,p))y=p.G,Bi(u.h,p),E=1;else return;if(u.I!=0){if(p.o)if(E==1){y=p.u?p.u.length:0,p=Date.now()-p.F;var M=u.D;E=Br(),st(E,new $o(E,y)),gr(u)}else Dt(u);else if(M=p.m,M==3||M==0&&p.X>0||!(E==1&&bl(u,p)||E==2&&Gn(u)))switch(y&&y.length>0&&(p=u.h,p.i=p.i.concat(y)),M){case 1:sn(u,5);break;case 4:sn(u,10);break;case 3:sn(u,6);break;default:sn(u,2)}}}function Hs(u,p){let y=u.Qa+Math.floor(Math.random()*u.Za);return u.isActive()||(y*=2),y*p}function sn(u,p){if(u.j.info("Error code "+p),p==2){var y=_(u.bb,u),E=u.Ua;const M=!E;E=new Fn(E||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||$i(E,"https"),dr(E),M?Bn(E.toString(),y):$n(E.toString(),y)}else nt(2);u.I=0,u.l&&u.l.pa(p),Yi(u),zs(u)}r.bb=function(u){u?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function Yi(u){if(u.I=0,u.ja=[],u.l){const p=en(u.h);(p.length!=0||u.i.length!=0)&&(H(u.ja,p),H(u.ja,u.i),u.h.i.length=0,U(u.i),u.i.length=0),u.l.oa()}}function sa(u,p,y){var E=y instanceof Fn?fn(y):new Fn(y);if(E.g!="")p&&(E.g=p+"."+E.g),Un(E,E.u);else{var M=h.location;E=M.protocol,p=p?p+"."+M.hostname:M.hostname,M=+M.port;const z=new Fn(null);E&&$i(z,E),p&&(z.g=p),M&&Un(z,M),y&&(z.h=y),E=z}return y=u.G,p=u.wa,y&&p&&Me(E,y,p),Me(E,"VER",u.ka),Wn(u,E),E}function Vl(u,p,y){if(p&&!u.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Aa&&!u.ma?new He(new fr({ab:y})):new He(u.ma),p.Fa(u.L),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ol(){}r=Ol.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function qs(){}qs.prototype.g=function(u,p){return new At(u,p)};function At(u,p){ut.call(this),this.g=new Us(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(u?u["X-WebChannel-Client-Profile"]=p.sa:u={"X-WebChannel-Client-Profile":p.sa}),this.g.U=u,(u=p&&p.Qb)&&!R(u)&&(this.g.u=u),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!R(p)&&(this.g.G=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new Jr(this)}T(At,ut),At.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){js(this.g)},At.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var y={};y.__data__=u,u=y}else this.v&&(y={},y.__data__=Ur(u),u=y);p.i.push(new jc(p.Ya++,u)),p.I==3&&gr(p)},At.prototype.N=function(){this.g.l=null,delete this.j,js(this.g),delete this.g,At.Z.N.call(this)};function Ll(u){Ps.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const y in p){u=y;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}T(Ll,Ps);function Ml(){Bo.call(this),this.status=1}T(Ml,Bo);function Jr(u){this.g=u}T(Jr,Ol),Jr.prototype.ra=function(){st(this.g,"a")},Jr.prototype.qa=function(u){st(this.g,new Ll(u))},Jr.prototype.pa=function(u){st(this.g,new Ml)},Jr.prototype.oa=function(){st(this.g,"b")},qs.prototype.createWebChannel=qs.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,W_=function(){return new qs},q_=function(){return Br()},H_=Sn,Ld={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},qr.NO_ERROR=0,qr.TIMEOUT=8,qr.HTTP_ERROR=6,zu=qr,Wr.COMPLETE="complete",$_=Wr,_l.EventType=zr,zr.OPEN="a",zr.CLOSE="b",zr.ERROR="c",zr.MESSAGE="d",ut.prototype.listen=ut.prototype.J,Oa=_l,He.prototype.listenOnce=He.prototype.K,He.prototype.getLastError=He.prototype.Ha,He.prototype.getLastErrorCode=He.prototype.ya,He.prototype.getStatus=He.prototype.ca,He.prototype.getResponseJson=He.prototype.La,He.prototype.getResponseText=He.prototype.la,He.prototype.send=He.prototype.ea,He.prototype.setWithCredentials=He.prototype.Fa,B_=He}).apply(typeof Du<"u"?Du:typeof self<"u"?self:typeof window<"u"?window:{});const Qg="@firebase/firestore",Yg="4.9.2";/**
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
 */let bo="12.3.0";/**
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
 */const ws=new rf("@firebase/firestore");function mo(){return ws.logLevel}function re(r,...e){if(ws.logLevel<=Pe.DEBUG){const t=e.map(yf);ws.debug(`Firestore (${bo}): ${r}`,...t)}}function br(r,...e){if(ws.logLevel<=Pe.ERROR){const t=e.map(yf);ws.error(`Firestore (${bo}): ${r}`,...t)}}function So(r,...e){if(ws.logLevel<=Pe.WARN){const t=e.map(yf);ws.warn(`Firestore (${bo}): ${r}`,...t)}}function yf(r){if(typeof r=="string")return r;try{/**
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
 */function ge(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,G_(r,s,t)}function G_(r,e,t){let s=`FIRESTORE (${bo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw br(s),new Error(s)}function Ue(r,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,r||G_(e,o,s)}function Ee(r,e){return r}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends Lr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class xr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class K_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class $1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ft.UNAUTHENTICATED))}shutdown(){}}class H1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class q1{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ue(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let l=new xr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new xr,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const g=l;e.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},m=g=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(g=>m(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new xr)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ue(typeof s.accessToken=="string",31837,{l:s}),new K_(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string",2055,{h:e}),new Ft(e)}}class W1{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class G1{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new W1(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Xg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class K1{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,cn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ue(this.o===void 0,3512);const s=l=>{l.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,re("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>s(l))};const o=l=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Xg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ue(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Xg(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Q1(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class _f{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=Q1(40);for(let l=0;l<o.length;++l)s.length<20&&o[l]<t&&(s+=e.charAt(o[l]%62))}return s}}function xe(r,e){return r<e?-1:r>e?1:0}function Md(r,e){const t=Math.min(r.length,e.length);for(let s=0;s<t;s++){const o=r.charAt(s),l=e.charAt(s);if(o!==l)return Ed(o)===Ed(l)?xe(o,l):Ed(o)?1:-1}return xe(r.length,e.length)}const Y1=55296,X1=57343;function Ed(r){const e=r.charCodeAt(0);return e>=Y1&&e<=X1}function Ao(r,e,t){return r.length===e.length&&r.every((s,o)=>t(s,e[o]))}/**
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
 */const Jg="__name__";class tr{constructor(e,t,s){t===void 0?t=0:t>e.length&&ge(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&ge(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return tr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof tr?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const l=tr.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return xe(e.length,t.length)}static compareSegments(e,t){const s=tr.isNumericId(e),o=tr.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?tr.extractNumericId(e).compare(tr.extractNumericId(t)):Md(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ii.fromString(e.substring(4,e.length-2))}}class Ge extends tr{construct(e,t,s){return new Ge(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new te($.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new Ge(t)}static emptyPath(){return new Ge([])}}const J1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pt extends tr{construct(e,t,s){return new Pt(e,t,s)}static isValidIdentifier(e){return J1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Jg}static keyField(){return new Pt([Jg])}static fromServerFormat(e){const t=[];let s="",o=0;const l=()=>{if(s.length===0)throw new te($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new te($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new te($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(l(),o++)}if(l(),h)throw new te($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pt(t)}static emptyPath(){return new Pt([])}}/**
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
 */class ce{constructor(e){this.path=e}static fromPath(e){return new ce(Ge.fromString(e))}static fromName(e){return new ce(Ge.fromString(e).popFirst(5))}static empty(){return new ce(Ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ge.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ce(new Ge(e.slice()))}}/**
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
 */function Q_(r,e,t){if(!t)throw new te($.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function Z1(r,e,t,s){if(e===!0&&s===!0)throw new te($.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Zg(r){if(!ce.isDocumentKey(r))throw new te($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function ey(r){if(ce.isDocumentKey(r))throw new te($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Y_(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function vc(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":ge(12329,{type:typeof r})}function Zt(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new te($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=vc(r);throw new te($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */function pt(r,e){const t={typeString:r};return e&&(t.value=e),t}function ll(r,e){if(!Y_(r))throw new te($.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){t=`JSON missing required field: '${s}'`;break}const h=r[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new te($.INVALID_ARGUMENT,t);return!0}/**
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
 */const ty=-62135596800,ny=1e6;class ze{static now(){return ze.fromMillis(Date.now())}static fromDate(e){return ze.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*ny);return new ze(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new te($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new te($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ty)throw new te($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ny}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ze._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ll(e,ze._jsonSchema))return new ze(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ty;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ze._jsonSchemaVersion="firestore/timestamp/1.0",ze._jsonSchema={type:pt("string",ze._jsonSchemaVersion),seconds:pt("number"),nanoseconds:pt("number")};/**
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
 */class ve{static fromTimestamp(e){return new ve(e)}static min(){return new ve(new ze(0,0))}static max(){return new ve(new ze(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Qa=-1;function eS(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=ve.fromTimestamp(s===1e9?new ze(t+1,0):new ze(t,s));return new Ai(o,ce.empty(),e)}function tS(r){return new Ai(r.readTime,r.key,Qa)}class Ai{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ai(ve.min(),ce.empty(),Qa)}static max(){return new Ai(ve.max(),ce.empty(),Qa)}}function nS(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=ce.comparator(r.documentKey,e.documentKey),t!==0?t:xe(r.largestBatchId,e.largestBatchId))}/**
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
 */const rS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class iS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Vo(r){if(r.code!==$.FAILED_PRECONDITION||r.message!==rS)throw r;re("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ge(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new W((s,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof W?t:W.resolve(t)}catch(t){return W.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):W.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):W.reject(t)}static resolve(e){return new W((t,s)=>{t(e)})}static reject(e){return new W((t,s)=>{s(e)})}static waitFor(e){return new W((t,s)=>{let o=0,l=0,h=!1;e.forEach(m=>{++o,m.next(()=>{++l,h&&l===o&&t()},g=>s(g))}),h=!0,l===o&&t()})}static or(e){let t=W.resolve(!1);for(const s of e)t=t.next(o=>o?W.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,l)=>{s.push(t.call(this,o,l))}),this.waitFor(s)}static mapArray(e,t){return new W((s,o)=>{const l=e.length,h=new Array(l);let m=0;for(let g=0;g<l;g++){const _=g;t(e[_]).next(w=>{h[_]=w,++m,m===l&&s(h)},w=>o(w))}})}static doWhile(e,t){return new W((s,o)=>{const l=()=>{e()===!0?t().next(()=>{l()},o):s()};l()})}}function sS(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Oo(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class wc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}wc.ce=-1;/**
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
 */const vf=-1;function Ec(r){return r==null}function nc(r){return r===0&&1/r==-1/0}function oS(r){return typeof r=="number"&&Number.isInteger(r)&&!nc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const X_="";function aS(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=ry(e)),e=lS(r.get(t),e);return ry(e)}function lS(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const l=r.charAt(o);switch(l){case"\0":t+="";break;case X_:t+="";break;default:t+=l}}return t}function ry(r){return r+X_+""}/**
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
 */function iy(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Vi(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function J_(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class tt{constructor(e,t){this.comparator=e,this.root=t||kt.EMPTY}insert(e,t){return new tt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,kt.BLACK,null,null))}remove(e){return new tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,kt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new bu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new bu(this.root,e,this.comparator,!1)}getReverseIterator(){return new bu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new bu(this.root,e,this.comparator,!0)}}class bu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class kt{constructor(e,t,s,o,l){this.key=e,this.value=t,this.color=s??kt.RED,this.left=o??kt.EMPTY,this.right=l??kt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,l){return new kt(e??this.key,t??this.value,s??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const l=s(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,s),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return kt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return kt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,kt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,kt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ge(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ge(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ge(27949);return e+(this.isRed()?0:1)}}kt.EMPTY=null,kt.RED=!0,kt.BLACK=!1;kt.EMPTY=new class{constructor(){this.size=0}get key(){throw ge(57766)}get value(){throw ge(16141)}get color(){throw ge(16727)}get left(){throw ge(29726)}get right(){throw ge(36894)}copy(e,t,s,o,l){return this}insert(e,t,s){return new kt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class yt{constructor(e){this.comparator=e,this.data=new tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new sy(this.data.getIterator())}getIteratorFrom(e){return new sy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof yt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new yt(this.comparator);return t.data=e,t}}class sy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class hn{constructor(e){this.fields=e,e.sort(Pt.comparator)}static empty(){return new hn([])}unionWith(e){let t=new yt(Pt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new hn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ao(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class Z_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class xt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Z_("Invalid base64 string: "+l):l}}(e);return new xt(t)}static fromUint8Array(e){const t=function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l}(e);return new xt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xt.EMPTY_BYTE_STRING=new xt("");const uS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ci(r){if(Ue(!!r,39018),typeof r=="string"){let e=0;const t=uS.exec(r);if(Ue(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:lt(r.seconds),nanos:lt(r.nanos)}}function lt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Ri(r){return typeof r=="string"?xt.fromBase64String(r):xt.fromUint8Array(r)}/**
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
 */const ev="server_timestamp",tv="__type__",nv="__previous_value__",rv="__local_write_time__";function wf(r){var t,s;return((s=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[tv])==null?void 0:s.stringValue)===ev}function Tc(r){const e=r.mapValue.fields[nv];return wf(e)?Tc(e):e}function Ya(r){const e=Ci(r.mapValue.fields[rv].timestampValue);return new ze(e.seconds,e.nanos)}/**
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
 */class cS{constructor(e,t,s,o,l,h,m,g,_,w){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=w}}const rc="(default)";class Xa{constructor(e,t){this.projectId=e,this.database=t||rc}static empty(){return new Xa("","")}get isDefaultDatabase(){return this.database===rc}isEqual(e){return e instanceof Xa&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const iv="__type__",hS="__max__",Vu={mapValue:{}},sv="__vector__",ic="value";function ki(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?wf(r)?4:fS(r)?9007199254740991:dS(r)?10:11:ge(28295,{value:r})}function ar(r,e){if(r===e)return!0;const t=ki(r);if(t!==ki(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Ya(r).isEqual(Ya(e));case 3:return function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Ci(o.timestampValue),m=Ci(l.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(o,l){return Ri(o.bytesValue).isEqual(Ri(l.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(o,l){return lt(o.geoPointValue.latitude)===lt(l.geoPointValue.latitude)&&lt(o.geoPointValue.longitude)===lt(l.geoPointValue.longitude)}(r,e);case 2:return function(o,l){if("integerValue"in o&&"integerValue"in l)return lt(o.integerValue)===lt(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=lt(o.doubleValue),m=lt(l.doubleValue);return h===m?nc(h)===nc(m):isNaN(h)&&isNaN(m)}return!1}(r,e);case 9:return Ao(r.arrayValue.values||[],e.arrayValue.values||[],ar);case 10:case 11:return function(o,l){const h=o.mapValue.fields||{},m=l.mapValue.fields||{};if(iy(h)!==iy(m))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(m[g]===void 0||!ar(h[g],m[g])))return!1;return!0}(r,e);default:return ge(52216,{left:r})}}function Ja(r,e){return(r.values||[]).find(t=>ar(t,e))!==void 0}function Co(r,e){if(r===e)return 0;const t=ki(r),s=ki(e);if(t!==s)return xe(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return xe(r.booleanValue,e.booleanValue);case 2:return function(l,h){const m=lt(l.integerValue||l.doubleValue),g=lt(h.integerValue||h.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1}(r,e);case 3:return oy(r.timestampValue,e.timestampValue);case 4:return oy(Ya(r),Ya(e));case 5:return Md(r.stringValue,e.stringValue);case 6:return function(l,h){const m=Ri(l),g=Ri(h);return m.compareTo(g)}(r.bytesValue,e.bytesValue);case 7:return function(l,h){const m=l.split("/"),g=h.split("/");for(let _=0;_<m.length&&_<g.length;_++){const w=xe(m[_],g[_]);if(w!==0)return w}return xe(m.length,g.length)}(r.referenceValue,e.referenceValue);case 8:return function(l,h){const m=xe(lt(l.latitude),lt(h.latitude));return m!==0?m:xe(lt(l.longitude),lt(h.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return ay(r.arrayValue,e.arrayValue);case 10:return function(l,h){var I,U,H,q;const m=l.fields||{},g=h.fields||{},_=(I=m[ic])==null?void 0:I.arrayValue,w=(U=g[ic])==null?void 0:U.arrayValue,T=xe(((H=_==null?void 0:_.values)==null?void 0:H.length)||0,((q=w==null?void 0:w.values)==null?void 0:q.length)||0);return T!==0?T:ay(_,w)}(r.mapValue,e.mapValue);case 11:return function(l,h){if(l===Vu.mapValue&&h===Vu.mapValue)return 0;if(l===Vu.mapValue)return 1;if(h===Vu.mapValue)return-1;const m=l.fields||{},g=Object.keys(m),_=h.fields||{},w=Object.keys(_);g.sort(),w.sort();for(let T=0;T<g.length&&T<w.length;++T){const I=Md(g[T],w[T]);if(I!==0)return I;const U=Co(m[g[T]],_[w[T]]);if(U!==0)return U}return xe(g.length,w.length)}(r.mapValue,e.mapValue);default:throw ge(23264,{he:t})}}function oy(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return xe(r,e);const t=Ci(r),s=Ci(e),o=xe(t.seconds,s.seconds);return o!==0?o:xe(t.nanos,s.nanos)}function ay(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const l=Co(t[o],s[o]);if(l)return l}return xe(t.length,s.length)}function Ro(r){return Fd(r)}function Fd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const s=Ci(t);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return Ri(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return ce.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let s="[",o=!0;for(const l of t.values||[])o?o=!1:s+=",",s+=Fd(l);return s+"]"}(r.arrayValue):"mapValue"in r?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of s)l?l=!1:o+=",",o+=`${h}:${Fd(t.fields[h])}`;return o+"}"}(r.mapValue):ge(61005,{value:r})}function Bu(r){switch(ki(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Tc(r);return e?16+Bu(e):16;case 5:return 2*r.stringValue.length;case 6:return Ri(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,l)=>o+Bu(l),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return Vi(s.fields,(l,h)=>{o+=l.length+Bu(h)}),o}(r.mapValue);default:throw ge(13486,{value:r})}}function ly(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Ud(r){return!!r&&"integerValue"in r}function Ef(r){return!!r&&"arrayValue"in r}function uy(r){return!!r&&"nullValue"in r}function cy(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function $u(r){return!!r&&"mapValue"in r}function dS(r){var t,s;return((s=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[iv])==null?void 0:s.stringValue)===sv}function Ba(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return Vi(r.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Ba(s)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ba(r.arrayValue.values[t]);return e}return{...r}}function fS(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===hS}/**
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
 */class Jt{constructor(e){this.value=e}static empty(){return new Jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!$u(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ba(t)}setAll(e){let t=Pt.emptyPath(),s={},o=[];e.forEach((h,m)=>{if(!t.isImmediateParentOf(m)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Ba(h):o.push(m.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,s,o)}delete(e){const t=this.field(e.popLast());$u(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ar(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];$u(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Vi(t,(o,l)=>e[o]=l);for(const o of s)delete e[o]}clone(){return new Jt(Ba(this.value))}}function ov(r){const e=[];return Vi(r.fields,(t,s)=>{const o=new Pt([t]);if($u(s)){const l=ov(s.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)}),new hn(e)}/**
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
 */class Ut{constructor(e,t,s,o,l,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=l,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Ut(e,0,ve.min(),ve.min(),ve.min(),Jt.empty(),0)}static newFoundDocument(e,t,s,o){return new Ut(e,1,t,ve.min(),s,o,0)}static newNoDocument(e,t){return new Ut(e,2,t,ve.min(),ve.min(),Jt.empty(),0)}static newUnknownDocument(e,t){return new Ut(e,3,t,ve.min(),ve.min(),Jt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class sc{constructor(e,t){this.position=e,this.inclusive=t}}function hy(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const l=e[o],h=r.position[o];if(l.field.isKeyField()?s=ce.comparator(ce.fromName(h.referenceValue),t.key):s=Co(h,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function dy(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!ar(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class oc{constructor(e,t="asc"){this.field=e,this.dir=t}}function pS(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class av{}class ft extends av{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new gS(e,t,s):t==="array-contains"?new vS(e,s):t==="in"?new wS(e,s):t==="not-in"?new ES(e,s):t==="array-contains-any"?new TS(e,s):new ft(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new yS(e,s):new _S(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Co(t,this.value)):t!==null&&ki(this.value)===ki(t)&&this.matchesComparison(Co(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ge(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class On extends av{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new On(e,t)}matches(e){return lv(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function lv(r){return r.op==="and"}function uv(r){return mS(r)&&lv(r)}function mS(r){for(const e of r.filters)if(e instanceof On)return!1;return!0}function jd(r){if(r instanceof ft)return r.field.canonicalString()+r.op.toString()+Ro(r.value);if(uv(r))return r.filters.map(e=>jd(e)).join(",");{const e=r.filters.map(t=>jd(t)).join(",");return`${r.op}(${e})`}}function cv(r,e){return r instanceof ft?function(s,o){return o instanceof ft&&s.op===o.op&&s.field.isEqual(o.field)&&ar(s.value,o.value)}(r,e):r instanceof On?function(s,o){return o instanceof On&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((l,h,m)=>l&&cv(h,o.filters[m]),!0):!1}(r,e):void ge(19439)}function hv(r){return r instanceof ft?function(t){return`${t.field.canonicalString()} ${t.op} ${Ro(t.value)}`}(r):r instanceof On?function(t){return t.op.toString()+" {"+t.getFilters().map(hv).join(" ,")+"}"}(r):"Filter"}class gS extends ft{constructor(e,t,s){super(e,t,s),this.key=ce.fromName(s.referenceValue)}matches(e){const t=ce.comparator(e.key,this.key);return this.matchesComparison(t)}}class yS extends ft{constructor(e,t){super(e,"in",t),this.keys=dv("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class _S extends ft{constructor(e,t){super(e,"not-in",t),this.keys=dv("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function dv(r,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(s=>ce.fromName(s.referenceValue))}class vS extends ft{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ef(t)&&Ja(t.arrayValue,this.value)}}class wS extends ft{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ja(this.value.arrayValue,t)}}class ES extends ft{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ja(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ja(this.value.arrayValue,t)}}class TS extends ft{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ef(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Ja(this.value.arrayValue,s))}}/**
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
 */class IS{constructor(e,t=null,s=[],o=[],l=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=l,this.startAt=h,this.endAt=m,this.Te=null}}function fy(r,e=null,t=[],s=[],o=null,l=null,h=null){return new IS(r,e,t,s,o,l,h)}function Tf(r){const e=Ee(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>jd(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(l){return l.field.canonicalString()+l.dir}(s)).join(","),Ec(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Ro(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Ro(s)).join(",")),e.Te=t}return e.Te}function If(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!pS(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!cv(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!dy(r.startAt,e.startAt)&&dy(r.endAt,e.endAt)}function zd(r){return ce.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class ul{constructor(e,t=null,s=[],o=[],l=null,h="F",m=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=l,this.limitType=h,this.startAt=m,this.endAt=g,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function SS(r,e,t,s,o,l,h,m){return new ul(r,e,t,s,o,l,h,m)}function Ic(r){return new ul(r)}function py(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function fv(r){return r.collectionGroup!==null}function $a(r){const e=Ee(r);if(e.Ie===null){e.Ie=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new yt(Pt.comparator);return h.filters.forEach(g=>{g.getFlattenedFilters().forEach(_=>{_.isInequality()&&(m=m.add(_.field))})}),m})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new oc(l,s))}),t.has(Pt.keyField().canonicalString())||e.Ie.push(new oc(Pt.keyField(),s))}return e.Ie}function rr(r){const e=Ee(r);return e.Ee||(e.Ee=AS(e,$a(r))),e.Ee}function AS(r,e){if(r.limitType==="F")return fy(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(o=>{const l=o.dir==="desc"?"asc":"desc";return new oc(o.field,l)});const t=r.endAt?new sc(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new sc(r.startAt.position,r.startAt.inclusive):null;return fy(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function Bd(r,e){const t=r.filters.concat([e]);return new ul(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function $d(r,e,t){return new ul(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Sc(r,e){return If(rr(r),rr(e))&&r.limitType===e.limitType}function pv(r){return`${Tf(rr(r))}|lt:${r.limitType}`}function go(r){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>hv(o)).join(", ")}]`),Ec(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>Ro(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>Ro(o)).join(",")),`Target(${s})`}(rr(r))}; limitType=${r.limitType})`}function Ac(r,e){return e.isFoundDocument()&&function(s,o){const l=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):ce.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)}(r,e)&&function(s,o){for(const l of $a(s))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0}(r,e)&&function(s,o){for(const l of s.filters)if(!l.matches(o))return!1;return!0}(r,e)&&function(s,o){return!(s.startAt&&!function(h,m,g){const _=hy(h,m,g);return h.inclusive?_<=0:_<0}(s.startAt,$a(s),o)||s.endAt&&!function(h,m,g){const _=hy(h,m,g);return h.inclusive?_>=0:_>0}(s.endAt,$a(s),o))}(r,e)}function CS(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function mv(r){return(e,t)=>{let s=!1;for(const o of $a(r)){const l=RS(o,e,t);if(l!==0)return l;s=s||o.field.isKeyField()}return 0}}function RS(r,e,t){const s=r.field.isKeyField()?ce.comparator(e.key,t.key):function(l,h,m){const g=h.data.field(l),_=m.data.field(l);return g!==null&&_!==null?Co(g,_):ge(42886)}(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return ge(19790,{direction:r.dir})}}/**
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
 */class Ts{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,l]of s)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Vi(this.inner,(t,s)=>{for(const[o,l]of s)e(o,l)})}isEmpty(){return J_(this.inner)}size(){return this.innerSize}}/**
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
 */const kS=new tt(ce.comparator);function Vr(){return kS}const gv=new tt(ce.comparator);function La(...r){let e=gv;for(const t of r)e=e.insert(t.key,t);return e}function yv(r){let e=gv;return r.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function hs(){return Ha()}function _v(){return Ha()}function Ha(){return new Ts(r=>r.toString(),(r,e)=>r.isEqual(e))}const PS=new tt(ce.comparator),xS=new yt(ce.comparator);function Ne(...r){let e=xS;for(const t of r)e=e.add(t);return e}const NS=new yt(xe);function DS(){return NS}/**
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
 */function Sf(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nc(e)?"-0":e}}function vv(r){return{integerValue:""+r}}function bS(r,e){return oS(e)?vv(e):Sf(r,e)}/**
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
 */class Cc{constructor(){this._=void 0}}function VS(r,e,t){return r instanceof ac?function(o,l){const h={fields:{[tv]:{stringValue:ev},[rv]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&wf(l)&&(l=Tc(l)),l&&(h.fields[nv]=l),{mapValue:h}}(t,e):r instanceof Za?Ev(r,e):r instanceof el?Tv(r,e):function(o,l){const h=wv(o,l),m=my(h)+my(o.Ae);return Ud(h)&&Ud(o.Ae)?vv(m):Sf(o.serializer,m)}(r,e)}function OS(r,e,t){return r instanceof Za?Ev(r,e):r instanceof el?Tv(r,e):t}function wv(r,e){return r instanceof lc?function(s){return Ud(s)||function(l){return!!l&&"doubleValue"in l}(s)}(e)?e:{integerValue:0}:null}class ac extends Cc{}class Za extends Cc{constructor(e){super(),this.elements=e}}function Ev(r,e){const t=Iv(e);for(const s of r.elements)t.some(o=>ar(o,s))||t.push(s);return{arrayValue:{values:t}}}class el extends Cc{constructor(e){super(),this.elements=e}}function Tv(r,e){let t=Iv(e);for(const s of r.elements)t=t.filter(o=>!ar(o,s));return{arrayValue:{values:t}}}class lc extends Cc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function my(r){return lt(r.integerValue||r.doubleValue)}function Iv(r){return Ef(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function LS(r,e){return r.field.isEqual(e.field)&&function(s,o){return s instanceof Za&&o instanceof Za||s instanceof el&&o instanceof el?Ao(s.elements,o.elements,ar):s instanceof lc&&o instanceof lc?ar(s.Ae,o.Ae):s instanceof ac&&o instanceof ac}(r.transform,e.transform)}class MS{constructor(e,t){this.version=e,this.transformResults=t}}class En{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new En}static exists(e){return new En(void 0,e)}static updateTime(e){return new En(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Hu(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Rc{}function Sv(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Af(r.key,En.none()):new cl(r.key,r.data,En.none());{const t=r.data,s=Jt.empty();let o=new yt(Pt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?s.delete(l):s.set(l,h),o=o.add(l)}return new Oi(r.key,s,new hn(o.toArray()),En.none())}}function FS(r,e,t){r instanceof cl?function(o,l,h){const m=o.value.clone(),g=yy(o.fieldTransforms,l,h.transformResults);m.setAll(g),l.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(r,e,t):r instanceof Oi?function(o,l,h){if(!Hu(o.precondition,l))return void l.convertToUnknownDocument(h.version);const m=yy(o.fieldTransforms,l,h.transformResults),g=l.data;g.setAll(Av(o)),g.setAll(m),l.convertToFoundDocument(h.version,g).setHasCommittedMutations()}(r,e,t):function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function qa(r,e,t,s){return r instanceof cl?function(l,h,m,g){if(!Hu(l.precondition,h))return m;const _=l.value.clone(),w=_y(l.fieldTransforms,g,h);return _.setAll(w),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null}(r,e,t,s):r instanceof Oi?function(l,h,m,g){if(!Hu(l.precondition,h))return m;const _=_y(l.fieldTransforms,g,h),w=h.data;return w.setAll(Av(l)),w.setAll(_),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(r,e,t,s):function(l,h,m){return Hu(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m}(r,e,t)}function US(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),l=wv(s.transform,o||null);l!=null&&(t===null&&(t=Jt.empty()),t.set(s.field,l))}return t||null}function gy(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Ao(s,o,(l,h)=>LS(l,h))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class cl extends Rc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Oi extends Rc{constructor(e,t,s,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function Av(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}}),e}function yy(r,e,t){const s=new Map;Ue(r.length===t.length,32656,{Re:t.length,Ve:r.length});for(let o=0;o<t.length;o++){const l=r[o],h=l.transform,m=e.data.field(l.field);s.set(l.field,OS(h,m,t[o]))}return s}function _y(r,e,t){const s=new Map;for(const o of r){const l=o.transform,h=t.data.field(o.field);s.set(o.field,VS(l,h,e))}return s}class Af extends Rc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jS extends Rc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class zS{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&FS(l,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=qa(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=qa(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=_v();return this.mutations.forEach(o=>{const l=e.get(o.key),h=l.overlayedDocument;let m=this.applyToLocalView(h,l.mutatedFields);m=t.has(o.key)?null:m;const g=Sv(h,m);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(ve.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ne())}isEqual(e){return this.batchId===e.batchId&&Ao(this.mutations,e.mutations,(t,s)=>gy(t,s))&&Ao(this.baseMutations,e.baseMutations,(t,s)=>gy(t,s))}}class Cf{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Ue(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=function(){return PS}();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,s[h].version);return new Cf(e,t,s,o)}}/**
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
 */class BS{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class $S{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var dt,be;function HS(r){switch(r){case $.OK:return ge(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return ge(15467,{code:r})}}function Cv(r){if(r===void 0)return br("GRPC error has no .code"),$.UNKNOWN;switch(r){case dt.OK:return $.OK;case dt.CANCELLED:return $.CANCELLED;case dt.UNKNOWN:return $.UNKNOWN;case dt.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case dt.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case dt.INTERNAL:return $.INTERNAL;case dt.UNAVAILABLE:return $.UNAVAILABLE;case dt.UNAUTHENTICATED:return $.UNAUTHENTICATED;case dt.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case dt.NOT_FOUND:return $.NOT_FOUND;case dt.ALREADY_EXISTS:return $.ALREADY_EXISTS;case dt.PERMISSION_DENIED:return $.PERMISSION_DENIED;case dt.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case dt.ABORTED:return $.ABORTED;case dt.OUT_OF_RANGE:return $.OUT_OF_RANGE;case dt.UNIMPLEMENTED:return $.UNIMPLEMENTED;case dt.DATA_LOSS:return $.DATA_LOSS;default:return ge(39323,{code:r})}}(be=dt||(dt={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function qS(){return new TextEncoder}/**
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
 */const WS=new Ii([4294967295,4294967295],0);function vy(r){const e=qS().encode(r),t=new z_;return t.update(e),new Uint8Array(t.digest())}function wy(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Ii([t,s],0),new Ii([o,l],0)]}class Rf{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Ma(`Invalid padding: ${t}`);if(s<0)throw new Ma(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ma(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Ma(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Ii.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(Ii.fromNumber(s)));return o.compare(WS)===1&&(o=new Ii([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=vy(e),[s,o]=wy(t);for(let l=0;l<this.hashCount;l++){const h=this.ye(s,o,l);if(!this.we(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new Rf(l,o,t);return s.forEach(m=>h.insert(m)),h}insert(e){if(this.ge===0)return;const t=vy(e),[s,o]=wy(t);for(let l=0;l<this.hashCount;l++){const h=this.ye(s,o,l);this.Se(h)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Ma extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class kc{constructor(e,t,s,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,hl.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new kc(ve.min(),o,new tt(xe),Vr(),Ne())}}class hl{constructor(e,t,s,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new hl(s,t,Ne(),Ne(),Ne())}}/**
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
 */class qu{constructor(e,t,s,o){this.be=e,this.removedTargetIds=t,this.key=s,this.De=o}}class Rv{constructor(e,t){this.targetId=e,this.Ce=t}}class kv{constructor(e,t,s=xt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class Ey{constructor(){this.ve=0,this.Fe=Ty(),this.Me=xt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ne(),t=Ne(),s=Ne();return this.Fe.forEach((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:ge(38017,{changeType:l})}}),new hl(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=Ty()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ue(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class GS{constructor(e){this.Ge=e,this.ze=new Map,this.je=Vr(),this.Je=Ou(),this.He=Ou(),this.Ye=new tt(xe)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:ge(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((s,o)=>{this.rt(o)&&t(o)})}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const l=o.target;if(zd(l))if(s===0){const h=new ce(l.path);this.et(t,h,Ut.newNoDocument(h,ve.min()))}else Ue(s===1,20013,{expectedCount:s});else{const h=this._t(t);if(h!==s){const m=this.ut(e),g=m?this.ct(m,e,h):1;if(g!==0){this.it(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,_)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:l=0}=t;let h,m;try{h=Ri(s).toUint8Array()}catch(g){if(g instanceof Z_)return So("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new Rf(h,o,l)}catch(g){return So(g instanceof Ma?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.ge===0?null:m}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach(l=>{const h=this.Ge.ht(),m=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(m)||(this.et(t,l,null),o++)}),o}Tt(e){const t=new Map;this.ze.forEach((l,h)=>{const m=this.ot(h);if(m){if(l.current&&zd(m.target)){const g=new ce(m.target.path);this.It(g).has(h)||this.Et(h,g)||this.et(h,g,Ut.newNoDocument(g,e))}l.Be&&(t.set(h,l.ke()),l.qe())}});let s=Ne();this.He.forEach((l,h)=>{let m=!0;h.forEachWhile(g=>{const _=this.ot(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(l))}),this.je.forEach((l,h)=>h.setReadTime(e));const o=new kc(e,t,this.Ye,this.je,s);return this.je=Vr(),this.Je=Ou(),this.He=Ou(),this.Ye=new tt(xe),o}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.Qe(t,1):o.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Ey,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new yt(xe),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new yt(xe),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||re("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Ey),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Ou(){return new tt(ce.comparator)}function Ty(){return new tt(ce.comparator)}const KS={asc:"ASCENDING",desc:"DESCENDING"},QS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},YS={and:"AND",or:"OR"};class XS{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Hd(r,e){return r.useProto3Json||Ec(e)?e:{value:e}}function uc(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Pv(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function JS(r,e){return uc(r,e.toTimestamp())}function ir(r){return Ue(!!r,49232),ve.fromTimestamp(function(t){const s=Ci(t);return new ze(s.seconds,s.nanos)}(r))}function kf(r,e){return qd(r,e).canonicalString()}function qd(r,e){const t=function(o){return new Ge(["projects",o.projectId,"databases",o.database])}(r).child("documents");return e===void 0?t:t.child(e)}function xv(r){const e=Ge.fromString(r);return Ue(Ov(e),10190,{key:e.toString()}),e}function Wd(r,e){return kf(r.databaseId,e.path)}function Td(r,e){const t=xv(e);if(t.get(1)!==r.databaseId.projectId)throw new te($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new te($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new ce(Dv(t))}function Nv(r,e){return kf(r.databaseId,e)}function ZS(r){const e=xv(r);return e.length===4?Ge.emptyPath():Dv(e)}function Gd(r){return new Ge(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Dv(r){return Ue(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Iy(r,e,t){return{name:Wd(r,e),fields:t.value.mapValue.fields}}function eA(r,e){let t;if("targetChange"in e){e.targetChange;const s=function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:ge(39313,{state:_})}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=function(_,w){return _.useProto3Json?(Ue(w===void 0||typeof w=="string",58123),xt.fromBase64String(w||"")):(Ue(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),xt.fromUint8Array(w||new Uint8Array))}(r,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&function(_){const w=_.code===void 0?$.UNKNOWN:Cv(_.code);return new te(w,_.message||"")}(h);t=new kv(s,o,l,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Td(r,s.document.name),l=ir(s.document.updateTime),h=s.document.createTime?ir(s.document.createTime):ve.min(),m=new Jt({mapValue:{fields:s.document.fields}}),g=Ut.newFoundDocument(o,l,h,m),_=s.targetIds||[],w=s.removedTargetIds||[];t=new qu(_,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Td(r,s.document),l=s.readTime?ir(s.readTime):ve.min(),h=Ut.newNoDocument(o,l),m=s.removedTargetIds||[];t=new qu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Td(r,s.document),l=s.removedTargetIds||[];t=new qu([],l,o,null)}else{if(!("filter"in e))return ge(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:l}=s,h=new $S(o,l),m=s.targetId;t=new Rv(m,h)}}return t}function tA(r,e){let t;if(e instanceof cl)t={update:Iy(r,e.key,e.value)};else if(e instanceof Af)t={delete:Wd(r,e.key)};else if(e instanceof Oi)t={update:Iy(r,e.key,e.data),updateMask:cA(e.fieldMask)};else{if(!(e instanceof jS))return ge(16599,{Vt:e.type});t={verify:Wd(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(l,h){const m=h.transform;if(m instanceof ac)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Za)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof el)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof lc)return{fieldPath:h.field.canonicalString(),increment:m.Ae};throw ge(20930,{transform:h.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,l){return l.updateTime!==void 0?{updateTime:JS(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:ge(27497)}(r,e.precondition)),t}function nA(r,e){return r&&r.length>0?(Ue(e!==void 0,14353),r.map(t=>function(o,l){let h=o.updateTime?ir(o.updateTime):ir(l);return h.isEqual(ve.min())&&(h=ir(l)),new MS(h,o.transformResults||[])}(t,e))):[]}function rA(r,e){return{documents:[Nv(r,e.path)]}}function iA(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Nv(r,o);const l=function(_){if(_.length!==0)return Vv(On.create(_,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const h=function(_){if(_.length!==0)return _.map(w=>function(I){return{field:yo(I.field),direction:aA(I.dir)}}(w))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=Hd(r,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=function(_){return{before:_.inclusive,values:_.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(_){return{before:!_.inclusive,values:_.position}}(e.endAt)),{ft:t,parent:o}}function sA(r){let e=ZS(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Ue(s===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let l=[];t.where&&(l=function(T){const I=bv(T);return I instanceof On&&uv(I)?I.getFilters():[I]}(t.where));let h=[];t.orderBy&&(h=function(T){return T.map(I=>function(H){return new oc(_o(H.field),function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(H.direction))}(I))}(t.orderBy));let m=null;t.limit&&(m=function(T){let I;return I=typeof T=="object"?T.value:T,Ec(I)?null:I}(t.limit));let g=null;t.startAt&&(g=function(T){const I=!!T.before,U=T.values||[];return new sc(U,I)}(t.startAt));let _=null;return t.endAt&&(_=function(T){const I=!T.before,U=T.values||[];return new sc(U,I)}(t.endAt)),SS(e,o,h,l,m,"F",g,_)}function oA(r,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ge(28987,{purpose:o})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function bv(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=_o(t.unaryFilter.field);return ft.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=_o(t.unaryFilter.field);return ft.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=_o(t.unaryFilter.field);return ft.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=_o(t.unaryFilter.field);return ft.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ge(61313);default:return ge(60726)}}(r):r.fieldFilter!==void 0?function(t){return ft.create(_o(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ge(58110);default:return ge(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return On.create(t.compositeFilter.filters.map(s=>bv(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ge(1026)}}(t.compositeFilter.op))}(r):ge(30097,{filter:r})}function aA(r){return KS[r]}function lA(r){return QS[r]}function uA(r){return YS[r]}function yo(r){return{fieldPath:r.canonicalString()}}function _o(r){return Pt.fromServerFormat(r.fieldPath)}function Vv(r){return r instanceof ft?function(t){if(t.op==="=="){if(cy(t.value))return{unaryFilter:{field:yo(t.field),op:"IS_NAN"}};if(uy(t.value))return{unaryFilter:{field:yo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(cy(t.value))return{unaryFilter:{field:yo(t.field),op:"IS_NOT_NAN"}};if(uy(t.value))return{unaryFilter:{field:yo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:yo(t.field),op:lA(t.op),value:t.value}}}(r):r instanceof On?function(t){const s=t.getFilters().map(o=>Vv(o));return s.length===1?s[0]:{compositeFilter:{op:uA(t.op),filters:s}}}(r):ge(54877,{filter:r})}function cA(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Ov(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class vi{constructor(e,t,s,o,l=ve.min(),h=ve.min(),m=xt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new vi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new vi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new vi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new vi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class hA{constructor(e){this.yt=e}}function dA(r){const e=sA({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?$d(e,e.limit,"L"):e}/**
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
 */class fA{constructor(){this.Cn=new pA}addToCollectionParentIndex(e,t){return this.Cn.add(t),W.resolve()}getCollectionParents(e,t){return W.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return W.resolve()}deleteFieldIndex(e,t){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,t){return W.resolve()}getDocumentsMatchingTarget(e,t){return W.resolve(null)}getIndexType(e,t){return W.resolve(0)}getFieldIndexes(e,t){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,t){return W.resolve(Ai.min())}getMinOffsetFromCollectionGroup(e,t){return W.resolve(Ai.min())}updateCollectionGroup(e,t,s){return W.resolve()}updateIndexEntries(e,t){return W.resolve()}}class pA{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new yt(Ge.comparator),l=!o.has(s);return this.index[t]=o.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new yt(Ge.comparator)).toArray()}}/**
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
 */const Sy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Lv=41943040;class Xt{static withCacheSize(e){return new Xt(e,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Xt.DEFAULT_COLLECTION_PERCENTILE=10,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xt.DEFAULT=new Xt(Lv,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xt.DISABLED=new Xt(-1,0,0);/**
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
 */class ko{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new ko(0)}static cr(){return new ko(-1)}}/**
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
 */const Ay="LruGarbageCollector",mA=1048576;function Cy([r,e],[t,s]){const o=xe(r,t);return o===0?xe(e,s):o}class gA{constructor(e){this.Ir=e,this.buffer=new yt(Cy),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Cy(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class yA{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){re(Ay,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Oo(t)?re(Ay,"Ignoring IndexedDB error during garbage collection: ",t):await Vo(t)}await this.Vr(3e5)})}}class _A{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return W.resolve(wc.ce);const s=new gA(t);return this.mr.forEachTarget(e,o=>s.Ar(o.sequenceNumber)).next(()=>this.mr.pr(e,o=>s.Ar(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(re("LruGarbageCollector","Garbage collection skipped; disabled"),W.resolve(Sy)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(re("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Sy):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,o,l,h,m,g,_;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,h=Date.now(),this.nthSequenceNumber(e,o))).next(T=>(s=T,m=Date.now(),this.removeTargets(e,s,t))).next(T=>(l=T,g=Date.now(),this.removeOrphanedDocuments(e,s))).next(T=>(_=Date.now(),mo()<=Pe.DEBUG&&re("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${l} targets in `+(g-m)+`ms
	Removed ${T} documents in `+(_-g)+`ms
Total Duration: ${_-w}ms`),W.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T})))}}function vA(r,e){return new _A(r,e)}/**
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
 */class wA{constructor(){this.changes=new Ts(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ut.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?W.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class EA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class TA{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&qa(s.mutation,o,hn.empty(),ze.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Ne()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Ne()){const o=hs();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(l=>{let h=La();return l.forEach((m,g)=>{h=h.insert(m,g.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=hs();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Ne()))}populateOverlays(e,t,s){const o=[];return s.forEach(l=>{t.has(l)||o.push(l)}),this.documentOverlayCache.getOverlays(e,o).next(l=>{l.forEach((h,m)=>{t.set(h,m)})})}computeViews(e,t,s,o){let l=Vr();const h=Ha(),m=function(){return Ha()}();return t.forEach((g,_)=>{const w=s.get(_.key);o.has(_.key)&&(w===void 0||w.mutation instanceof Oi)?l=l.insert(_.key,_):w!==void 0?(h.set(_.key,w.mutation.getFieldMask()),qa(w.mutation,_,w.mutation.getFieldMask(),ze.now())):h.set(_.key,hn.empty())}),this.recalculateAndSaveOverlays(e,l).next(g=>(g.forEach((_,w)=>h.set(_,w)),t.forEach((_,w)=>m.set(_,new EA(w,h.get(_)??null))),m))}recalculateAndSaveOverlays(e,t){const s=Ha();let o=new tt((h,m)=>h-m),l=Ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const m of h)m.keys().forEach(g=>{const _=t.get(g);if(_===null)return;let w=s.get(g)||hn.empty();w=m.applyToLocalView(_,w),s.set(g,w);const T=(o.get(m.batchId)||Ne()).add(g);o=o.insert(m.batchId,T)})}).next(()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),_=g.key,w=g.value,T=_v();w.forEach(I=>{if(!l.has(I)){const U=Sv(t.get(I),s.get(I));U!==null&&T.set(I,U),l=l.add(I)}}),h.push(this.documentOverlayCache.saveOverlays(e,_,T))}return W.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return ce.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):fv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-l.size):W.resolve(hs());let m=Qa,g=l;return h.next(_=>W.forEach(_,(w,T)=>(m<T.largestBatchId&&(m=T.largestBatchId),l.get(w)?W.resolve():this.remoteDocumentCache.getEntry(e,w).next(I=>{g=g.insert(w,I)}))).next(()=>this.populateOverlays(e,_,l)).next(()=>this.computeViews(e,g,_,Ne())).next(w=>({batchId:m,changes:yv(w)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ce(t)).next(s=>{let o=La();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const l=t.collectionGroup;let h=La();return this.indexManager.getCollectionParents(e,l).next(m=>W.forEach(m,g=>{const _=function(T,I){return new ul(I,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next(w=>{w.forEach((T,I)=>{h=h.insert(T,I)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,o))).next(h=>{l.forEach((g,_)=>{const w=_.getKey();h.get(w)===null&&(h=h.insert(w,Ut.newInvalidDocument(w)))});let m=La();return h.forEach((g,_)=>{const w=l.get(g);w!==void 0&&qa(w.mutation,_,hn.empty(),ze.now()),Ac(t,_)&&(m=m.insert(g,_))}),m})}}/**
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
 */class IA{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return W.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:ir(o.createTime)}}(t)),W.resolve()}getNamedQuery(e,t){return W.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(o){return{name:o.name,query:dA(o.bundledQuery),readTime:ir(o.readTime)}}(t)),W.resolve()}}/**
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
 */class SA{constructor(){this.overlays=new tt(ce.comparator),this.qr=new Map}getOverlay(e,t){return W.resolve(this.overlays.get(t))}getOverlays(e,t){const s=hs();return W.forEach(t,o=>this.getOverlay(e,o).next(l=>{l!==null&&s.set(o,l)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,l)=>{this.St(e,t,l)}),W.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach(l=>this.overlays=this.overlays.remove(l)),this.qr.delete(s)),W.resolve()}getOverlaysForCollection(e,t,s){const o=hs(),l=t.length+1,h=new ce(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const g=m.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===l&&g.largestBatchId>s&&o.set(g.getKey(),g)}return W.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let l=new tt((_,w)=>_-w);const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let w=l.get(_.largestBatchId);w===null&&(w=hs(),l=l.insert(_.largestBatchId,w)),w.set(_.getKey(),_)}}const m=hs(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((_,w)=>m.set(_,w)),!(m.size()>=o)););return W.resolve(m)}St(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new BS(t,s));let l=this.qr.get(t);l===void 0&&(l=Ne(),this.qr.set(t,l)),this.qr.set(t,l.add(s.key))}}/**
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
 */class AA{constructor(){this.sessionToken=xt.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,W.resolve()}}/**
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
 */class Pf{constructor(){this.Qr=new yt(It.$r),this.Ur=new yt(It.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new It(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Gr(new It(e,t))}zr(e,t){e.forEach(s=>this.removeReference(s,t))}jr(e){const t=new ce(new Ge([])),s=new It(t,e),o=new It(t,e+1),l=[];return this.Ur.forEachInRange([s,o],h=>{this.Gr(h),l.push(h.key)}),l}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new ce(new Ge([])),s=new It(t,e),o=new It(t,e+1);let l=Ne();return this.Ur.forEachInRange([s,o],h=>{l=l.add(h.key)}),l}containsKey(e){const t=new It(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class It{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return ce.comparator(e.key,t.key)||xe(e.Yr,t.Yr)}static Kr(e,t){return xe(e.Yr,t.Yr)||ce.comparator(e.key,t.key)}}/**
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
 */class CA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new yt(It.$r)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const l=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new zS(l,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Zr=this.Zr.add(new It(m.key,l)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return W.resolve(h)}lookupMutationBatch(e,t){return W.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.ei(s),l=o<0?0:o;return W.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?vf:this.tr-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new It(t,0),o=new It(t,Number.POSITIVE_INFINITY),l=[];return this.Zr.forEachInRange([s,o],h=>{const m=this.Xr(h.Yr);l.push(m)}),W.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new yt(xe);return t.forEach(o=>{const l=new It(o,0),h=new It(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([l,h],m=>{s=s.add(m.Yr)})}),W.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let l=s;ce.isDocumentKey(l)||(l=l.child(""));const h=new It(new ce(l),0);let m=new yt(xe);return this.Zr.forEachWhile(g=>{const _=g.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(m=m.add(g.Yr)),!0)},h),W.resolve(this.ti(m))}ti(e){const t=[];return e.forEach(s=>{const o=this.Xr(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Ue(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return W.forEach(t.mutations,o=>{const l=new It(o.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Zr=s})}ir(e){}containsKey(e,t){const s=new It(t,0),o=this.Zr.firstAfterOrEqual(s);return W.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class RA{constructor(e){this.ri=e,this.docs=function(){return new tt(ce.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),l=o?o.size:0,h=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return W.resolve(s?s.document.mutableCopy():Ut.newInvalidDocument(t))}getEntries(e,t){let s=Vr();return t.forEach(o=>{const l=this.docs.get(o);s=s.insert(o,l?l.document.mutableCopy():Ut.newInvalidDocument(o))}),W.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let l=Vr();const h=t.path,m=new ce(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:_,value:{document:w}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||nS(tS(w),s)<=0||(o.has(w.key)||Ac(t,w))&&(l=l.insert(w.key,w.mutableCopy()))}return W.resolve(l)}getAllFromCollectionGroup(e,t,s,o){ge(9500)}ii(e,t){return W.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new kA(this)}getSize(e){return W.resolve(this.size)}}class kA extends wA{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(s)}),W.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class PA{constructor(e){this.persistence=e,this.si=new Ts(t=>Tf(t),If),this.lastRemoteSnapshotVersion=ve.min(),this.highestTargetId=0,this.oi=0,this._i=new Pf,this.targetCount=0,this.ai=ko.ur()}forEachTarget(e,t){return this.si.forEach((s,o)=>t(o)),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),W.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new ko(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,W.resolve()}updateTargetData(e,t){return this.Pr(t),W.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,t,s){let o=0;const l=[];return this.si.forEach((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.si.delete(h),l.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)}),W.waitFor(l).next(()=>o)}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return W.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),W.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach(h=>{l.push(o.markPotentiallyOrphaned(e,h))}),W.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),W.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return W.resolve(s)}containsKey(e,t){return W.resolve(this._i.containsKey(t))}}/**
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
 */class Mv{constructor(e,t){this.ui={},this.overlays={},this.ci=new wc(0),this.li=!1,this.li=!0,this.hi=new AA,this.referenceDelegate=e(this),this.Pi=new PA(this),this.indexManager=new fA,this.remoteDocumentCache=function(o){return new RA(o)}(s=>this.referenceDelegate.Ti(s)),this.serializer=new hA(t),this.Ii=new IA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new SA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new CA(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){re("MemoryPersistence","Starting transaction:",e);const o=new xA(this.ci.next());return this.referenceDelegate.Ei(),s(o).next(l=>this.referenceDelegate.di(o).next(()=>l)).toPromise().then(l=>(o.raiseOnCommittedEvent(),l))}Ai(e,t){return W.or(Object.values(this.ui).map(s=>()=>s.containsKey(e,t)))}}class xA extends iS{constructor(e){super(),this.currentSequenceNumber=e}}class xf{constructor(e){this.persistence=e,this.Ri=new Pf,this.Vi=null}static mi(e){return new xf(e)}get fi(){if(this.Vi)return this.Vi;throw ge(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),W.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),W.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),W.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(o=>this.fi.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(l=>this.fi.add(l.toString()))}).next(()=>s.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.fi,s=>{const o=ce.fromPath(s);return this.gi(e,o).next(l=>{l||t.removeEntry(o,ve.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return W.or([()=>W.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class cc{constructor(e,t){this.persistence=e,this.pi=new Ts(s=>aS(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=vA(this,t)}static mi(e,t){return new cc(e,t)}Ei(){}di(e){return W.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}wr(e){let t=0;return this.pr(e,s=>{t++}).next(()=>t)}pr(e,t){return W.forEach(this.pi,(s,o)=>this.br(e,s,o).next(l=>l?W.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ii(e,h=>this.br(e,h,t).next(m=>{m||(s++,l.removeEntry(h,ve.min()))})).next(()=>l.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),W.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),W.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),W.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),W.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Bu(e.data.value)),t}br(e,t,s){return W.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.pi.get(t);return W.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Nf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=o}static As(e,t){let s=Ne(),o=Ne();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Nf(e,t.fromCache,s,o)}}/**
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
 */class NA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class DA{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return l0()?8:sS(jt())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const l={result:null};return this.ys(e,t).next(h=>{l.result=h}).next(()=>{if(!l.result)return this.ws(e,t,o,s).next(h=>{l.result=h})}).next(()=>{if(l.result)return;const h=new NA;return this.Ss(e,t,h).next(m=>{if(l.result=m,this.Vs)return this.bs(e,t,h,m.size)})}).next(()=>l.result)}bs(e,t,s,o){return s.documentReadCount<this.fs?(mo()<=Pe.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",go(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),W.resolve()):(mo()<=Pe.DEBUG&&re("QueryEngine","Query:",go(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(mo()<=Pe.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",go(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,rr(t))):W.resolve())}ys(e,t){if(py(t))return W.resolve(null);let s=rr(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=$d(t,null,"F"),s=rr(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(l=>{const h=Ne(...l);return this.ps.getDocuments(e,h).next(m=>this.indexManager.getMinOffset(e,s).next(g=>{const _=this.Ds(t,m);return this.Cs(t,_,h,g.readTime)?this.ys(e,$d(t,null,"F")):this.vs(e,_,t,g)}))})))}ws(e,t,s,o){return py(t)||o.isEqual(ve.min())?W.resolve(null):this.ps.getDocuments(e,s).next(l=>{const h=this.Ds(t,l);return this.Cs(t,h,s,o)?W.resolve(null):(mo()<=Pe.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),go(t)),this.vs(e,h,t,eS(o,Qa)).next(m=>m))})}Ds(e,t){let s=new yt(mv(e));return t.forEach((o,l)=>{Ac(e,l)&&(s=s.add(l))}),s}Cs(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}Ss(e,t,s){return mo()<=Pe.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",go(t)),this.ps.getDocumentsMatchingQuery(e,t,Ai.min(),s)}vs(e,t,s,o){return this.ps.getDocumentsMatchingQuery(e,s,o).next(l=>(t.forEach(h=>{l=l.insert(h.key,h)}),l))}}/**
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
 */const Df="LocalStore",bA=3e8;class VA{constructor(e,t,s,o){this.persistence=e,this.Fs=t,this.serializer=o,this.Ms=new tt(xe),this.xs=new Ts(l=>Tf(l),If),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new TA(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function OA(r,e,t,s){return new VA(r,e,t,s)}async function Fv(r,e){const t=Ee(r);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(l=>(o=l,t.Bs(e),t.mutationQueue.getAllMutationBatches(s))).next(l=>{const h=[],m=[];let g=Ne();for(const _ of o){h.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}for(const _ of l){m.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(s,g).next(_=>({Ls:_,removedBatchIds:h,addedBatchIds:m}))})})}function LA(r,e){const t=Ee(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),l=t.Ns.newChangeBuffer({trackRemovals:!0});return function(m,g,_,w){const T=_.batch,I=T.keys();let U=W.resolve();return I.forEach(H=>{U=U.next(()=>w.getEntry(g,H)).next(q=>{const B=_.docVersions.get(H);Ue(B!==null,48541),q.version.compareTo(B)<0&&(T.applyToRemoteDocument(q,_),q.isValidDocument()&&(q.setReadTime(_.commitVersion),w.addEntry(q)))})}),U.next(()=>m.mutationQueue.removeMutationBatch(g,T))}(t,s,e,l).next(()=>l.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(m){let g=Ne();for(let _=0;_<m.mutationResults.length;++_)m.mutationResults[_].transformResults.length>0&&(g=g.add(m.batch.mutations[_].key));return g}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function Uv(r){const e=Ee(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function MA(r,e){const t=Ee(r),s=e.snapshotVersion;let o=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const h=t.Ns.newChangeBuffer({trackRemovals:!0});o=t.Ms;const m=[];e.targetChanges.forEach((w,T)=>{const I=o.get(T);if(!I)return;m.push(t.Pi.removeMatchingKeys(l,w.removedDocuments,T).next(()=>t.Pi.addMatchingKeys(l,w.addedDocuments,T)));let U=I.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?U=U.withResumeToken(xt.EMPTY_BYTE_STRING,ve.min()).withLastLimboFreeSnapshotVersion(ve.min()):w.resumeToken.approximateByteSize()>0&&(U=U.withResumeToken(w.resumeToken,s)),o=o.insert(T,U),function(q,B,ae){return q.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-q.snapshotVersion.toMicroseconds()>=bA?!0:ae.addedDocuments.size+ae.modifiedDocuments.size+ae.removedDocuments.size>0}(I,U,w)&&m.push(t.Pi.updateTargetData(l,U))});let g=Vr(),_=Ne();if(e.documentUpdates.forEach(w=>{e.resolvedLimboDocuments.has(w)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(l,w))}),m.push(FA(l,h,e.documentUpdates).next(w=>{g=w.ks,_=w.qs})),!s.isEqual(ve.min())){const w=t.Pi.getLastRemoteSnapshotVersion(l).next(T=>t.Pi.setTargetsMetadata(l,l.currentSequenceNumber,s));m.push(w)}return W.waitFor(m).next(()=>h.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,g,_)).next(()=>g)}).then(l=>(t.Ms=o,l))}function FA(r,e,t){let s=Ne(),o=Ne();return t.forEach(l=>s=s.add(l)),e.getEntries(r,s).next(l=>{let h=Vr();return t.forEach((m,g)=>{const _=l.get(m);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(ve.min())?(e.removeEntry(m,g.readTime),h=h.insert(m,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(m,g)):re(Df,"Ignoring outdated watch update for ",m,". Current version:",_.version," Watch version:",g.version)}),{ks:h,qs:o}})}function UA(r,e){const t=Ee(r);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=vf),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function jA(r,e){const t=Ee(r);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.Pi.getTargetData(s,e).next(l=>l?(o=l,W.resolve(o)):t.Pi.allocateTargetId(s).next(h=>(o=new vi(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s})}async function Kd(r,e,t){const s=Ee(r),o=s.Ms.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!Oo(h))throw h;re(Df,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Ms=s.Ms.remove(e),s.xs.delete(o.target)}function Ry(r,e,t){const s=Ee(r);let o=ve.min(),l=Ne();return s.persistence.runTransaction("Execute query","readwrite",h=>function(g,_,w){const T=Ee(g),I=T.xs.get(w);return I!==void 0?W.resolve(T.Ms.get(I)):T.Pi.getTargetData(_,w)}(s,h,rr(e)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(h,m.targetId).next(g=>{l=g})}).next(()=>s.Fs.getDocumentsMatchingQuery(h,e,t?o:ve.min(),t?l:Ne())).next(m=>(zA(s,CS(e),m),{documents:m,Qs:l})))}function zA(r,e,t){let s=r.Os.get(e)||ve.min();t.forEach((o,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)}),r.Os.set(e,s)}class ky{constructor(){this.activeTargetIds=DS()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class BA{constructor(){this.Mo=new ky,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new ky,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class $A{Oo(e){}shutdown(){}}/**
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
 */const Py="ConnectivityMonitor";class xy{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){re(Py,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){re(Py,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Lu=null;function Qd(){return Lu===null?Lu=function(){return 268435456+Math.round(2147483648*Math.random())}():Lu++,"0x"+Lu.toString(16)}/**
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
 */const Id="RestConnection",HA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class qA{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===rc?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(e,t,s,o,l){const h=Qd(),m=this.zo(e,t.toUriEncodedString());re(Id,`Sending RPC '${e}' ${h}:`,m,s);const g={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(g,o,l);const{host:_}=new URL(m),w=xo(_);return this.Jo(e,m,g,s,w).then(T=>(re(Id,`Received RPC '${e}' ${h}: `,T),T),T=>{throw So(Id,`RPC '${e}' ${h} failed with error: `,T,"url: ",m,"request:",s),T})}Ho(e,t,s,o,l,h){return this.Go(e,t,s,o,l)}jo(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+bo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((o,l)=>e[l]=o),s&&s.headers.forEach((o,l)=>e[l]=o)}zo(e,t){const s=HA[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
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
 */class WA{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Mt="WebChannelConnection";class GA extends qA{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,o,l){const h=Qd();return new Promise((m,g)=>{const _=new B_;_.setWithCredentials(!0),_.listenOnce($_.COMPLETE,()=>{try{switch(_.getLastErrorCode()){case zu.NO_ERROR:const T=_.getResponseJson();re(Mt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(T)),m(T);break;case zu.TIMEOUT:re(Mt,`RPC '${e}' ${h} timed out`),g(new te($.DEADLINE_EXCEEDED,"Request time out"));break;case zu.HTTP_ERROR:const I=_.getStatus();if(re(Mt,`RPC '${e}' ${h} failed with status:`,I,"response text:",_.getResponseText()),I>0){let U=_.getResponseJson();Array.isArray(U)&&(U=U[0]);const H=U==null?void 0:U.error;if(H&&H.status&&H.message){const q=function(ae){const Z=ae.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(Z)>=0?Z:$.UNKNOWN}(H.status);g(new te(q,H.message))}else g(new te($.UNKNOWN,"Server responded with status "+_.getStatus()))}else g(new te($.UNAVAILABLE,"Connection failed."));break;default:ge(9055,{l_:e,streamId:h,h_:_.getLastErrorCode(),P_:_.getLastError()})}}finally{re(Mt,`RPC '${e}' ${h} completed.`)}});const w=JSON.stringify(o);re(Mt,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",w,s,15)})}T_(e,t,s){const o=Qd(),l=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=W_(),m=q_(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(g.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(g.useFetchStreams=!0),this.jo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const w=l.join("");re(Mt,`Creating RPC '${e}' stream ${o}: ${w}`,g);const T=h.createWebChannel(w,g);this.I_(T);let I=!1,U=!1;const H=new WA({Yo:B=>{U?re(Mt,`Not sending because RPC '${e}' stream ${o} is closed:`,B):(I||(re(Mt,`Opening RPC '${e}' stream ${o} transport.`),T.open(),I=!0),re(Mt,`RPC '${e}' stream ${o} sending:`,B),T.send(B))},Zo:()=>T.close()}),q=(B,ae,Z)=>{B.listen(ae,he=>{try{Z(he)}catch(Ce){setTimeout(()=>{throw Ce},0)}})};return q(T,Oa.EventType.OPEN,()=>{U||(re(Mt,`RPC '${e}' stream ${o} transport opened.`),H.o_())}),q(T,Oa.EventType.CLOSE,()=>{U||(U=!0,re(Mt,`RPC '${e}' stream ${o} transport closed`),H.a_(),this.E_(T))}),q(T,Oa.EventType.ERROR,B=>{U||(U=!0,So(Mt,`RPC '${e}' stream ${o} transport errored. Name:`,B.name,"Message:",B.message),H.a_(new te($.UNAVAILABLE,"The operation could not be completed")))}),q(T,Oa.EventType.MESSAGE,B=>{var ae;if(!U){const Z=B.data[0];Ue(!!Z,16349);const he=Z,Ce=(he==null?void 0:he.error)||((ae=he[0])==null?void 0:ae.error);if(Ce){re(Mt,`RPC '${e}' stream ${o} received error:`,Ce);const Be=Ce.status;let Se=function(k){const b=dt[k];if(b!==void 0)return Cv(b)}(Be),x=Ce.message;Se===void 0&&(Se=$.INTERNAL,x="Unknown error status: "+Be+" with message "+Ce.message),U=!0,H.a_(new te(Se,x)),T.close()}else re(Mt,`RPC '${e}' stream ${o} received:`,Z),H.u_(Z)}}),q(m,H_.STAT_EVENT,B=>{B.stat===Ld.PROXY?re(Mt,`RPC '${e}' stream ${o} detected buffering proxy`):B.stat===Ld.NOPROXY&&re(Mt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{H.__()},0),H}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function Sd(){return typeof document<"u"?document:null}/**
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
 */function Pc(r){return new XS(r,!0)}/**
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
 */class jv{constructor(e,t,s=1e3,o=1.5,l=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=o,this.R_=l,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&re("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Ny="PersistentStream";class zv{constructor(e,t,s,o,l,h,m,g){this.Mi=e,this.S_=s,this.b_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new jv(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===$.RESOURCE_EXHAUSTED?(br(t.toString()),br("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.D_===t&&this.G_(s,o)},s=>{e(()=>{const o=new te($.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)})})}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{s(()=>this.listener.Xo())}),this.stream.t_(()=>{s(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(o=>{s(()=>this.z_(o))}),this.stream.onMessage(o=>{s(()=>++this.F_==1?this.J_(o):this.onNext(o))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return re(Ny,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(re(Ny,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class KA extends zv{constructor(e,t,s,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=eA(this.serializer,e),s=function(l){if(!("targetChange"in l))return ve.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?ve.min():h.readTime?ir(h.readTime):ve.min()}(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=Gd(this.serializer),t.addTarget=function(l,h){let m;const g=h.target;if(m=zd(g)?{documents:rA(l,g)}:{query:iA(l,g).ft},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=Pv(l,h.resumeToken);const _=Hd(l,h.expectedCount);_!==null&&(m.expectedCount=_)}else if(h.snapshotVersion.compareTo(ve.min())>0){m.readTime=uc(l,h.snapshotVersion.toTimestamp());const _=Hd(l,h.expectedCount);_!==null&&(m.expectedCount=_)}return m}(this.serializer,e);const s=oA(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=Gd(this.serializer),t.removeTarget=e,this.q_(t)}}class QA extends zv{constructor(e,t,s,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Ue(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ue(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ue(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=nA(e.writeResults,e.commitTime),s=ir(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=Gd(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>tA(this.serializer,s))};this.q_(t)}}/**
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
 */class YA{}class XA extends YA{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new te($.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,h])=>this.connection.Go(e,qd(t,s),o,l,h)).catch(l=>{throw l.name==="FirebaseError"?(l.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new te($.UNKNOWN,l.toString())})}Ho(e,t,s,o,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,m])=>this.connection.Ho(e,qd(t,s),o,h,m,l)).catch(h=>{throw h.name==="FirebaseError"?(h.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new te($.UNKNOWN,h.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class JA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(br(t),this.aa=!1):re("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Es="RemoteStore";class ZA{constructor(e,t,s,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=l,this.Aa.Oo(h=>{s.enqueueAndForget(async()=>{Is(this)&&(re(Es,"Restarting streams for network reachability change."),await async function(g){const _=Ee(g);_.Ea.add(4),await dl(_),_.Ra.set("Unknown"),_.Ea.delete(4),await xc(_)}(this))})}),this.Ra=new JA(s,o)}}async function xc(r){if(Is(r))for(const e of r.da)await e(!0)}async function dl(r){for(const e of r.da)await e(!1)}function Bv(r,e){const t=Ee(r);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Lf(t)?Of(t):Lo(t).O_()&&Vf(t,e))}function bf(r,e){const t=Ee(r),s=Lo(t);t.Ia.delete(e),s.O_()&&$v(t,e),t.Ia.size===0&&(s.O_()?s.L_():Is(t)&&t.Ra.set("Unknown"))}function Vf(r,e){if(r.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ve.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Lo(r).Y_(e)}function $v(r,e){r.Va.Ue(e),Lo(r).Z_(e)}function Of(r){r.Va=new GS({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),Lo(r).start(),r.Ra.ua()}function Lf(r){return Is(r)&&!Lo(r).x_()&&r.Ia.size>0}function Is(r){return Ee(r).Ea.size===0}function Hv(r){r.Va=void 0}async function eC(r){r.Ra.set("Online")}async function tC(r){r.Ia.forEach((e,t)=>{Vf(r,e)})}async function nC(r,e){Hv(r),Lf(r)?(r.Ra.ha(e),Of(r)):r.Ra.set("Unknown")}async function rC(r,e,t){if(r.Ra.set("Online"),e instanceof kv&&e.state===2&&e.cause)try{await async function(o,l){const h=l.cause;for(const m of l.targetIds)o.Ia.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ia.delete(m),o.Va.removeTarget(m))}(r,e)}catch(s){re(Es,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await hc(r,s)}else if(e instanceof qu?r.Va.Ze(e):e instanceof Rv?r.Va.st(e):r.Va.tt(e),!t.isEqual(ve.min()))try{const s=await Uv(r.localStore);t.compareTo(s)>=0&&await function(l,h){const m=l.Va.Tt(h);return m.targetChanges.forEach((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const w=l.Ia.get(_);w&&l.Ia.set(_,w.withResumeToken(g.resumeToken,h))}}),m.targetMismatches.forEach((g,_)=>{const w=l.Ia.get(g);if(!w)return;l.Ia.set(g,w.withResumeToken(xt.EMPTY_BYTE_STRING,w.snapshotVersion)),$v(l,g);const T=new vi(w.target,g,_,w.sequenceNumber);Vf(l,T)}),l.remoteSyncer.applyRemoteEvent(m)}(r,t)}catch(s){re(Es,"Failed to raise snapshot:",s),await hc(r,s)}}async function hc(r,e,t){if(!Oo(e))throw e;r.Ea.add(1),await dl(r),r.Ra.set("Offline"),t||(t=()=>Uv(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{re(Es,"Retrying IndexedDB access"),await t(),r.Ea.delete(1),await xc(r)})}function qv(r,e){return e().catch(t=>hc(r,t,e))}async function Nc(r){const e=Ee(r),t=Pi(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:vf;for(;iC(e);)try{const o=await UA(e.localStore,s);if(o===null){e.Ta.length===0&&t.L_();break}s=o.batchId,sC(e,o)}catch(o){await hc(e,o)}Wv(e)&&Gv(e)}function iC(r){return Is(r)&&r.Ta.length<10}function sC(r,e){r.Ta.push(e);const t=Pi(r);t.O_()&&t.X_&&t.ea(e.mutations)}function Wv(r){return Is(r)&&!Pi(r).x_()&&r.Ta.length>0}function Gv(r){Pi(r).start()}async function oC(r){Pi(r).ra()}async function aC(r){const e=Pi(r);for(const t of r.Ta)e.ea(t.mutations)}async function lC(r,e,t){const s=r.Ta.shift(),o=Cf.from(s,e,t);await qv(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await Nc(r)}async function uC(r,e){e&&Pi(r).X_&&await async function(s,o){if(function(h){return HS(h)&&h!==$.ABORTED}(o.code)){const l=s.Ta.shift();Pi(s).B_(),await qv(s,()=>s.remoteSyncer.rejectFailedWrite(l.batchId,o)),await Nc(s)}}(r,e),Wv(r)&&Gv(r)}async function Dy(r,e){const t=Ee(r);t.asyncQueue.verifyOperationInProgress(),re(Es,"RemoteStore received new credentials");const s=Is(t);t.Ea.add(3),await dl(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await xc(t)}async function cC(r,e){const t=Ee(r);e?(t.Ea.delete(2),await xc(t)):e||(t.Ea.add(2),await dl(t),t.Ra.set("Unknown"))}function Lo(r){return r.ma||(r.ma=function(t,s,o){const l=Ee(t);return l.sa(),new KA(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(r.datastore,r.asyncQueue,{Xo:eC.bind(null,r),t_:tC.bind(null,r),r_:nC.bind(null,r),H_:rC.bind(null,r)}),r.da.push(async e=>{e?(r.ma.B_(),Lf(r)?Of(r):r.Ra.set("Unknown")):(await r.ma.stop(),Hv(r))})),r.ma}function Pi(r){return r.fa||(r.fa=function(t,s,o){const l=Ee(t);return l.sa(),new QA(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:oC.bind(null,r),r_:uC.bind(null,r),ta:aC.bind(null,r),na:lC.bind(null,r)}),r.da.push(async e=>{e?(r.fa.B_(),await Nc(r)):(await r.fa.stop(),r.Ta.length>0&&(re(Es,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))})),r.fa}/**
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
 */class Mf{constructor(e,t,s,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=l,this.deferred=new xr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,l){const h=Date.now()+s,m=new Mf(e,t,h,o,l);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ff(r,e){if(br("AsyncQueue",`${e}: ${r}`),Oo(r))return new te($.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class To{static emptySet(e){return new To(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ce.comparator(t.key,s.key):(t,s)=>ce.comparator(t.key,s.key),this.keyedMap=La(),this.sortedSet=new tt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof To)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new To;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class by{constructor(){this.ga=new tt(ce.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):ge(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,s)=>{e.push(s)}),e}}class Po{constructor(e,t,s,o,l,h,m,g,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,l){const h=[];return t.forEach(m=>{h.push({type:0,doc:m})}),new Po(e,t,To.emptySet(t),h,s,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Sc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class hC{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class dC{constructor(){this.queries=Vy(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=Ee(t),l=o.queries;o.queries=Vy(),l.forEach((h,m)=>{for(const g of m.Sa)g.onError(s)})})(this,new te($.ABORTED,"Firestore shutting down"))}}function Vy(){return new Ts(r=>pv(r),Sc)}async function Uf(r,e){const t=Ee(r);let s=3;const o=e.query;let l=t.queries.get(o);l?!l.ba()&&e.Da()&&(s=2):(l=new hC,s=e.Da()?0:1);try{switch(s){case 0:l.wa=await t.onListen(o,!0);break;case 1:l.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=Ff(h,`Initialization of query '${go(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,l),l.Sa.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&zf(t)}async function jf(r,e){const t=Ee(r),s=e.query;let o=3;const l=t.queries.get(s);if(l){const h=l.Sa.indexOf(e);h>=0&&(l.Sa.splice(h,1),l.Sa.length===0?o=e.Da()?0:1:!l.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function fC(r,e){const t=Ee(r);let s=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const m of h.Sa)m.Fa(o)&&(s=!0);h.wa=o}}s&&zf(t)}function pC(r,e,t){const s=Ee(r),o=s.queries.get(e);if(o)for(const l of o.Sa)l.onError(t);s.queries.delete(e)}function zf(r){r.Ca.forEach(e=>{e.next()})}var Yd,Oy;(Oy=Yd||(Yd={})).Ma="default",Oy.Cache="cache";class Bf{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Po(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Po.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Yd.Cache}}/**
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
 */class Kv{constructor(e){this.key=e}}class Qv{constructor(e){this.key=e}}class mC{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ne(),this.mutatedKeys=Ne(),this.eu=mv(e),this.tu=new To(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new by,o=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((w,T)=>{const I=o.get(w),U=Ac(this.query,T)?T:null,H=!!I&&this.mutatedKeys.has(I.key),q=!!U&&(U.hasLocalMutations||this.mutatedKeys.has(U.key)&&U.hasCommittedMutations);let B=!1;I&&U?I.data.isEqual(U.data)?H!==q&&(s.track({type:3,doc:U}),B=!0):this.su(I,U)||(s.track({type:2,doc:U}),B=!0,(g&&this.eu(U,g)>0||_&&this.eu(U,_)<0)&&(m=!0)):!I&&U?(s.track({type:0,doc:U}),B=!0):I&&!U&&(s.track({type:1,doc:I}),B=!0,(g||_)&&(m=!0)),B&&(U?(h=h.add(U),l=q?l.add(w):l.delete(w)):(h=h.delete(w),l=l.delete(w)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),l=l.delete(w.key),s.track({type:1,doc:w})}return{tu:h,iu:s,Cs:m,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort((w,T)=>function(U,H){const q=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ge(20277,{Rt:B})}};return q(U)-q(H)}(w.type,T.type)||this.eu(w.doc,T.doc)),this.ou(s),o=o??!1;const m=t&&!o?this._u():[],g=this.Xa.size===0&&this.current&&!o?1:0,_=g!==this.Za;return this.Za=g,h.length!==0||_?{snapshot:new Po(this.query,e.tu,l,h,e.mutatedKeys,g===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new by,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ne(),this.tu.forEach(s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))});const t=[];return e.forEach(s=>{this.Xa.has(s)||t.push(new Qv(s))}),this.Xa.forEach(s=>{e.has(s)||t.push(new Kv(s))}),t}cu(e){this.Ya=e.Qs,this.Xa=Ne();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Po.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const $f="SyncEngine";class gC{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class yC{constructor(e){this.key=e,this.hu=!1}}class _C{constructor(e,t,s,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new Ts(m=>pv(m),Sc),this.Iu=new Map,this.Eu=new Set,this.du=new tt(ce.comparator),this.Au=new Map,this.Ru=new Pf,this.Vu={},this.mu=new Map,this.fu=ko.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function vC(r,e,t=!0){const s=tw(r);let o;const l=s.Tu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.lu()):o=await Yv(s,e,t,!0),o}async function wC(r,e){const t=tw(r);await Yv(t,e,!0,!1)}async function Yv(r,e,t,s){const o=await jA(r.localStore,rr(e)),l=o.targetId,h=r.sharedClientState.addLocalQueryTarget(l,t);let m;return s&&(m=await EC(r,e,l,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&Bv(r.remoteStore,o),m}async function EC(r,e,t,s,o){r.pu=(T,I,U)=>async function(q,B,ae,Z){let he=B.view.ru(ae);he.Cs&&(he=await Ry(q.localStore,B.query,!1).then(({documents:x})=>B.view.ru(x,he)));const Ce=Z&&Z.targetChanges.get(B.targetId),Be=Z&&Z.targetMismatches.get(B.targetId)!=null,Se=B.view.applyChanges(he,q.isPrimaryClient,Ce,Be);return My(q,B.targetId,Se.au),Se.snapshot}(r,T,I,U);const l=await Ry(r.localStore,e,!0),h=new mC(e,l.Qs),m=h.ru(l.documents),g=hl.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),_=h.applyChanges(m,r.isPrimaryClient,g);My(r,t,_.au);const w=new gC(e,t,h);return r.Tu.set(e,w),r.Iu.has(t)?r.Iu.get(t).push(e):r.Iu.set(t,[e]),_.snapshot}async function TC(r,e,t){const s=Ee(r),o=s.Tu.get(e),l=s.Iu.get(o.targetId);if(l.length>1)return s.Iu.set(o.targetId,l.filter(h=>!Sc(h,e))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Kd(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&bf(s.remoteStore,o.targetId),Xd(s,o.targetId)}).catch(Vo)):(Xd(s,o.targetId),await Kd(s.localStore,o.targetId,!0))}async function IC(r,e){const t=Ee(r),s=t.Tu.get(e),o=t.Iu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),bf(t.remoteStore,s.targetId))}async function SC(r,e,t){const s=NC(r);try{const o=await function(h,m){const g=Ee(h),_=ze.now(),w=m.reduce((U,H)=>U.add(H.key),Ne());let T,I;return g.persistence.runTransaction("Locally write mutations","readwrite",U=>{let H=Vr(),q=Ne();return g.Ns.getEntries(U,w).next(B=>{H=B,H.forEach((ae,Z)=>{Z.isValidDocument()||(q=q.add(ae))})}).next(()=>g.localDocuments.getOverlayedDocuments(U,H)).next(B=>{T=B;const ae=[];for(const Z of m){const he=US(Z,T.get(Z.key).overlayedDocument);he!=null&&ae.push(new Oi(Z.key,he,ov(he.value.mapValue),En.exists(!0)))}return g.mutationQueue.addMutationBatch(U,_,ae,m)}).next(B=>{I=B;const ae=B.applyToLocalDocumentSet(T,q);return g.documentOverlayCache.saveOverlays(U,B.batchId,ae)})}).then(()=>({batchId:I.batchId,changes:yv(T)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,m,g){let _=h.Vu[h.currentUser.toKey()];_||(_=new tt(xe)),_=_.insert(m,g),h.Vu[h.currentUser.toKey()]=_}(s,o.batchId,t),await fl(s,o.changes),await Nc(s.remoteStore)}catch(o){const l=Ff(o,"Failed to persist write");t.reject(l)}}async function Xv(r,e){const t=Ee(r);try{const s=await MA(t.localStore,e);e.targetChanges.forEach((o,l)=>{const h=t.Au.get(l);h&&(Ue(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?Ue(h.hu,14607):o.removedDocuments.size>0&&(Ue(h.hu,42227),h.hu=!1))}),await fl(t,s,e)}catch(s){await Vo(s)}}function Ly(r,e,t){const s=Ee(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Tu.forEach((l,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)}),function(h,m){const g=Ee(h);g.onlineState=m;let _=!1;g.queries.forEach((w,T)=>{for(const I of T.Sa)I.va(m)&&(_=!0)}),_&&zf(g)}(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function AC(r,e,t){const s=Ee(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Au.get(e),l=o&&o.key;if(l){let h=new tt(ce.comparator);h=h.insert(l,Ut.newNoDocument(l,ve.min()));const m=Ne().add(l),g=new kc(ve.min(),new Map,new tt(xe),h,m);await Xv(s,g),s.du=s.du.remove(l),s.Au.delete(e),Hf(s)}else await Kd(s.localStore,e,!1).then(()=>Xd(s,e,t)).catch(Vo)}async function CC(r,e){const t=Ee(r),s=e.batch.batchId;try{const o=await LA(t.localStore,e);Zv(t,s,null),Jv(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await fl(t,o)}catch(o){await Vo(o)}}async function RC(r,e,t){const s=Ee(r);try{const o=await function(h,m){const g=Ee(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",_=>{let w;return g.mutationQueue.lookupMutationBatch(_,m).next(T=>(Ue(T!==null,37113),w=T.keys(),g.mutationQueue.removeMutationBatch(_,T))).next(()=>g.mutationQueue.performConsistencyCheck(_)).next(()=>g.documentOverlayCache.removeOverlaysForBatchId(_,w,m)).next(()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,w)).next(()=>g.localDocuments.getDocuments(_,w))})}(s.localStore,e);Zv(s,e,t),Jv(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await fl(s,o)}catch(o){await Vo(o)}}function Jv(r,e){(r.mu.get(e)||[]).forEach(t=>{t.resolve()}),r.mu.delete(e)}function Zv(r,e,t){const s=Ee(r);let o=s.Vu[s.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),s.Vu[s.currentUser.toKey()]=o}}function Xd(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Iu.get(e))r.Tu.delete(s),t&&r.Pu.yu(s,t);r.Iu.delete(e),r.isPrimaryClient&&r.Ru.jr(e).forEach(s=>{r.Ru.containsKey(s)||ew(r,s)})}function ew(r,e){r.Eu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(bf(r.remoteStore,t),r.du=r.du.remove(e),r.Au.delete(t),Hf(r))}function My(r,e,t){for(const s of t)s instanceof Kv?(r.Ru.addReference(s.key,e),kC(r,s)):s instanceof Qv?(re($f,"Document no longer in limbo: "+s.key),r.Ru.removeReference(s.key,e),r.Ru.containsKey(s.key)||ew(r,s.key)):ge(19791,{wu:s})}function kC(r,e){const t=e.key,s=t.path.canonicalString();r.du.get(t)||r.Eu.has(s)||(re($f,"New document in limbo: "+t),r.Eu.add(s),Hf(r))}function Hf(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const t=new ce(Ge.fromString(e)),s=r.fu.next();r.Au.set(s,new yC(t)),r.du=r.du.insert(t,s),Bv(r.remoteStore,new vi(rr(Ic(t.path)),s,"TargetPurposeLimboResolution",wc.ce))}}async function fl(r,e,t){const s=Ee(r),o=[],l=[],h=[];s.Tu.isEmpty()||(s.Tu.forEach((m,g)=>{h.push(s.pu(g,e,t).then(_=>{var w;if((_||t)&&s.isPrimaryClient){const T=_?!_.fromCache:(w=t==null?void 0:t.targetChanges.get(g.targetId))==null?void 0:w.current;s.sharedClientState.updateQueryState(g.targetId,T?"current":"not-current")}if(_){o.push(_);const T=Nf.As(g.targetId,_);l.push(T)}}))}),await Promise.all(h),s.Pu.H_(o),await async function(g,_){const w=Ee(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>W.forEach(_,I=>W.forEach(I.Es,U=>w.persistence.referenceDelegate.addReference(T,I.targetId,U)).next(()=>W.forEach(I.ds,U=>w.persistence.referenceDelegate.removeReference(T,I.targetId,U)))))}catch(T){if(!Oo(T))throw T;re(Df,"Failed to update sequence numbers: "+T)}for(const T of _){const I=T.targetId;if(!T.fromCache){const U=w.Ms.get(I),H=U.snapshotVersion,q=U.withLastLimboFreeSnapshotVersion(H);w.Ms=w.Ms.insert(I,q)}}}(s.localStore,l))}async function PC(r,e){const t=Ee(r);if(!t.currentUser.isEqual(e)){re($f,"User change. New user:",e.toKey());const s=await Fv(t.localStore,e);t.currentUser=e,function(l,h){l.mu.forEach(m=>{m.forEach(g=>{g.reject(new te($.CANCELLED,h))})}),l.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await fl(t,s.Ls)}}function xC(r,e){const t=Ee(r),s=t.Au.get(e);if(s&&s.hu)return Ne().add(s.key);{let o=Ne();const l=t.Iu.get(e);if(!l)return o;for(const h of l){const m=t.Tu.get(h);o=o.unionWith(m.view.nu)}return o}}function tw(r){const e=Ee(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Xv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=xC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=AC.bind(null,e),e.Pu.H_=fC.bind(null,e.eventManager),e.Pu.yu=pC.bind(null,e.eventManager),e}function NC(r){const e=Ee(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=CC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=RC.bind(null,e),e}class dc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Pc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return OA(this.persistence,new DA,e.initialUser,this.serializer)}Cu(e){return new Mv(xf.mi,this.serializer)}Du(e){return new BA}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}dc.provider={build:()=>new dc};class DC extends dc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Ue(this.persistence.referenceDelegate instanceof cc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new yA(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Xt.withCacheSize(this.cacheSizeBytes):Xt.DEFAULT;return new Mv(s=>cc.mi(s,t),this.serializer)}}class Jd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Ly(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=PC.bind(null,this.syncEngine),await cC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new dC}()}createDatastore(e){const t=Pc(e.databaseInfo.databaseId),s=function(l){return new GA(l)}(e.databaseInfo);return function(l,h,m,g){return new XA(l,h,m,g)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,l,h,m){return new ZA(s,o,l,h,m)}(this.localStore,this.datastore,e.asyncQueue,t=>Ly(this.syncEngine,t,0),function(){return xy.v()?new xy:new $A}())}createSyncEngine(e,t){return function(o,l,h,m,g,_,w){const T=new _C(o,l,h,m,g,_);return w&&(T.gu=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const l=Ee(o);re(Es,"RemoteStore shutting down."),l.Ea.add(5),await dl(l),l.Aa.shutdown(),l.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Jd.provider={build:()=>new Jd};/**
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
 */class qf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):br("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const xi="FirestoreClient";class bC{constructor(e,t,s,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Ft.UNAUTHENTICATED,this.clientId=_f.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,async h=>{re(xi,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(re(xi,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new xr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Ff(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Ad(r,e){r.asyncQueue.verifyOperationInProgress(),re(xi,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await Fv(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function Fy(r,e){r.asyncQueue.verifyOperationInProgress();const t=await VC(r);re(xi,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(s=>Dy(e.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>Dy(e.remoteStore,o)),r._onlineComponents=e}async function VC(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){re(xi,"Using user provided OfflineComponentProvider");try{await Ad(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===$.FAILED_PRECONDITION||o.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;So("Error using user provided cache. Falling back to memory cache: "+t),await Ad(r,new dc)}}else re(xi,"Using default OfflineComponentProvider"),await Ad(r,new DC(void 0));return r._offlineComponents}async function nw(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(re(xi,"Using user provided OnlineComponentProvider"),await Fy(r,r._uninitializedComponentsProvider._online)):(re(xi,"Using default OnlineComponentProvider"),await Fy(r,new Jd))),r._onlineComponents}function OC(r){return nw(r).then(e=>e.syncEngine)}async function fc(r){const e=await nw(r),t=e.eventManager;return t.onListen=vC.bind(null,e.syncEngine),t.onUnlisten=TC.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=wC.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=IC.bind(null,e.syncEngine),t}function LC(r,e,t={}){const s=new xr;return r.asyncQueue.enqueueAndForget(async()=>function(l,h,m,g,_){const w=new qf({next:I=>{w.Nu(),h.enqueueAndForget(()=>jf(l,T));const U=I.docs.has(m);!U&&I.fromCache?_.reject(new te($.UNAVAILABLE,"Failed to get document because the client is offline.")):U&&I.fromCache&&g&&g.source==="server"?_.reject(new te($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(I)},error:I=>_.reject(I)}),T=new Bf(Ic(m.path),w,{includeMetadataChanges:!0,qa:!0});return Uf(l,T)}(await fc(r),r.asyncQueue,e,t,s)),s.promise}function MC(r,e,t={}){const s=new xr;return r.asyncQueue.enqueueAndForget(async()=>function(l,h,m,g,_){const w=new qf({next:I=>{w.Nu(),h.enqueueAndForget(()=>jf(l,T)),I.fromCache&&g.source==="server"?_.reject(new te($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(I)},error:I=>_.reject(I)}),T=new Bf(m,w,{includeMetadataChanges:!0,qa:!0});return Uf(l,T)}(await fc(r),r.asyncQueue,e,t,s)),s.promise}/**
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
 */function rw(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const Uy=new Map;/**
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
 */const iw="firestore.googleapis.com",jy=!0;class zy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new te($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=iw,this.ssl=jy}else this.host=e.host,this.ssl=e.ssl??jy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Lv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<mA)throw new te($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Z1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=rw(e.experimentalLongPollingOptions??{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new te($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new te($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new te($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Dc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new $1;switch(s.type){case"firstParty":return new G1(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new te($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=Uy.get(t);s&&(re("ComponentProvider","Removing Datastore"),Uy.delete(t),s.terminate())}(this),Promise.resolve()}}function FC(r,e,t,s={}){var _;r=Zt(r,Dc);const o=xo(e),l=r._getSettings(),h={...l,emulatorOptions:r._getEmulatorOptions()},m=`${e}:${t}`;o&&(e_(`https://${m}`),t_("Firestore",!0)),l.host!==iw&&l.host!==m&&So("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...l,host:m,ssl:o,emulatorOptions:s};if(!gs(g,h)&&(r._setSettings(g),s.mockUserToken)){let w,T;if(typeof s.mockUserToken=="string")w=s.mockUserToken,T=Ft.MOCK_USER;else{w=ZE(s.mockUserToken,(_=r._app)==null?void 0:_.options.projectId);const I=s.mockUserToken.sub||s.mockUserToken.user_id;if(!I)throw new te($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new Ft(I)}r._authCredentials=new H1(new K_(w,T))}}/**
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
 */class Ss{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ss(this.firestore,e,this._query)}}class it{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Si(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new it(this.firestore,e,this._key)}toJSON(){return{type:it._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(ll(t,it._jsonSchema))return new it(e,s||null,new ce(Ge.fromString(t.referencePath)))}}it._jsonSchemaVersion="firestore/documentReference/1.0",it._jsonSchema={type:pt("string",it._jsonSchemaVersion),referencePath:pt("string")};class Si extends Ss{constructor(e,t,s){super(e,t,Ic(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new it(this.firestore,null,new ce(e))}withConverter(e){return new Si(this.firestore,e,this._path)}}function sw(r,e,...t){if(r=_t(r),Q_("collection","path",e),r instanceof Dc){const s=Ge.fromString(e,...t);return ey(s),new Si(r,null,s)}{if(!(r instanceof it||r instanceof Si))throw new te($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Ge.fromString(e,...t));return ey(s),new Si(r.firestore,null,s)}}function ds(r,e,...t){if(r=_t(r),arguments.length===1&&(e=_f.newId()),Q_("doc","path",e),r instanceof Dc){const s=Ge.fromString(e,...t);return Zg(s),new it(r,null,new ce(s))}{if(!(r instanceof it||r instanceof Si))throw new te($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Ge.fromString(e,...t));return Zg(s),new it(r.firestore,r instanceof Si?r.converter:null,new ce(s))}}/**
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
 */const By="AsyncQueue";class $y{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new jv(this,"async_queue_retry"),this._c=()=>{const s=Sd();s&&re(By,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=Sd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Sd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new xr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Oo(e))throw e;re(By,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(s=>{throw this.nc=s,this.rc=!1,br("INTERNAL UNHANDLED ERROR: ",Hy(s)),s}).then(s=>(this.rc=!1,s))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=Mf.createAndSchedule(this,e,t,s,l=>this.hc(l));return this.tc.push(o),o}uc(){this.nc&&ge(47125,{Pc:Hy(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Hy(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
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
 */function qy(r){return function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of s)if(l in o&&typeof o[l]=="function")return!0;return!1}(r,["next","error","complete"])}class Or extends Dc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new $y,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new $y(e),this._firestoreClient=void 0,await e}}}function UC(r,e){const t=typeof r=="object"?r:s_(),s=typeof r=="string"?r:rc,o=of(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const l=XE("firestore");l&&FC(o,...l)}return o}function bc(r){if(r._terminated)throw new te($.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||jC(r),r._firestoreClient}function jC(r){var s,o,l;const e=r._freezeSettings(),t=function(m,g,_,w){return new cS(m,g,_,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,rw(w.experimentalLongPollingOptions),w.useFetchStreams,w.isUsingEmulator)}(r._databaseId,((s=r._app)==null?void 0:s.options.appId)||"",r._persistenceKey,e);r._componentsProvider||(o=e.localCache)!=null&&o._offlineComponentProvider&&((l=e.localCache)!=null&&l._onlineComponentProvider)&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new bC(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&function(m){const g=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(g),_online:g}}(r._componentsProvider))}/**
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
 */class wn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new wn(xt.fromBase64String(e))}catch(t){throw new te($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new wn(xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:wn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ll(e,wn._jsonSchema))return wn.fromBase64String(e.bytes)}}wn._jsonSchemaVersion="firestore/bytes/1.0",wn._jsonSchema={type:pt("string",wn._jsonSchemaVersion),bytes:pt("string")};/**
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
 */class Vc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new te($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Wf{constructor(e){this._methodName=e}}/**
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
 */class sr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new te($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new te($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:sr._jsonSchemaVersion}}static fromJSON(e){if(ll(e,sr._jsonSchema))return new sr(e.latitude,e.longitude)}}sr._jsonSchemaVersion="firestore/geoPoint/1.0",sr._jsonSchema={type:pt("string",sr._jsonSchemaVersion),latitude:pt("number"),longitude:pt("number")};/**
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
 */class or{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==o[l])return!1;return!0}(this._values,e._values)}toJSON(){return{type:or._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ll(e,or._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new or(e.vectorValues);throw new te($.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}or._jsonSchemaVersion="firestore/vectorValue/1.0",or._jsonSchema={type:pt("string",or._jsonSchemaVersion),vectorValues:pt("object")};/**
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
 */const zC=/^__.*__$/;class BC{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Oi(e,this.data,this.fieldMask,t,this.fieldTransforms):new cl(e,this.data,t,this.fieldTransforms)}}class ow{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Oi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function aw(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ge(40011,{Ac:r})}}class Gf{constructor(e,t,s,o,l,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,l===void 0&&this.Rc(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Gf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return pc(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(aw(this.Ac)&&zC.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class $C{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Pc(e)}Cc(e,t,s,o=!1){return new Gf({Ac:e,methodName:t,Dc:s,path:Pt.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Oc(r){const e=r._freezeSettings(),t=Pc(r._databaseId);return new $C(r._databaseId,!!e.ignoreUndefinedProperties,t)}function lw(r,e,t,s,o,l={}){const h=r.Cc(l.merge||l.mergeFields?2:0,e,t,o);Kf("Data must be an object, but it was:",h,s);const m=uw(s,h);let g,_;if(l.merge)g=new hn(h.fieldMask),_=h.fieldTransforms;else if(l.mergeFields){const w=[];for(const T of l.mergeFields){const I=Zd(e,T,t);if(!h.contains(I))throw new te($.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);hw(w,I)||w.push(I)}g=new hn(w),_=h.fieldTransforms.filter(T=>g.covers(T.field))}else g=null,_=h.fieldTransforms;return new BC(new Jt(m),g,_)}class Lc extends Wf{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Lc}}function HC(r,e,t,s){const o=r.Cc(1,e,t);Kf("Data must be an object, but it was:",o,s);const l=[],h=Jt.empty();Vi(s,(g,_)=>{const w=Qf(e,g,t);_=_t(_);const T=o.yc(w);if(_ instanceof Lc)l.push(w);else{const I=pl(_,T);I!=null&&(l.push(w),h.set(w,I))}});const m=new hn(l);return new ow(h,m,o.fieldTransforms)}function qC(r,e,t,s,o,l){const h=r.Cc(1,e,t),m=[Zd(e,s,t)],g=[o];if(l.length%2!=0)throw new te($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<l.length;I+=2)m.push(Zd(e,l[I])),g.push(l[I+1]);const _=[],w=Jt.empty();for(let I=m.length-1;I>=0;--I)if(!hw(_,m[I])){const U=m[I];let H=g[I];H=_t(H);const q=h.yc(U);if(H instanceof Lc)_.push(U);else{const B=pl(H,q);B!=null&&(_.push(U),w.set(U,B))}}const T=new hn(_);return new ow(w,T,h.fieldTransforms)}function WC(r,e,t,s=!1){return pl(t,r.Cc(s?4:3,e))}function pl(r,e){if(cw(r=_t(r)))return Kf("Unsupported field value:",e,r),uw(r,e);if(r instanceof Wf)return function(s,o){if(!aw(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(o);l&&o.fieldTransforms.push(l)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(s,o){const l=[];let h=0;for(const m of s){let g=pl(m,o.wc(h));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),h++}return{arrayValue:{values:l}}}(r,e)}return function(s,o){if((s=_t(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return bS(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=ze.fromDate(s);return{timestampValue:uc(o.serializer,l)}}if(s instanceof ze){const l=new ze(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:uc(o.serializer,l)}}if(s instanceof sr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof wn)return{bytesValue:Pv(o.serializer,s._byteString)};if(s instanceof it){const l=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(l))throw o.Sc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:kf(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof or)return function(h,m){return{mapValue:{fields:{[iv]:{stringValue:sv},[ic]:{arrayValue:{values:h.toArray().map(_=>{if(typeof _!="number")throw m.Sc("VectorValues must only contain numeric values.");return Sf(m.serializer,_)})}}}}}}(s,o);throw o.Sc(`Unsupported field value: ${vc(s)}`)}(r,e)}function uw(r,e){const t={};return J_(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Vi(r,(s,o)=>{const l=pl(o,e.mc(s));l!=null&&(t[s]=l)}),{mapValue:{fields:t}}}function cw(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ze||r instanceof sr||r instanceof wn||r instanceof it||r instanceof Wf||r instanceof or)}function Kf(r,e,t){if(!cw(t)||!Y_(t)){const s=vc(t);throw s==="an object"?e.Sc(r+" a custom object"):e.Sc(r+" "+s)}}function Zd(r,e,t){if((e=_t(e))instanceof Vc)return e._internalPath;if(typeof e=="string")return Qf(r,e);throw pc("Field path arguments must be of type string or ",r,!1,void 0,t)}const GC=new RegExp("[~\\*/\\[\\]]");function Qf(r,e,t){if(e.search(GC)>=0)throw pc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Vc(...e.split("."))._internalPath}catch{throw pc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function pc(r,e,t,s,o){const l=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(l||h)&&(g+=" (found",l&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new te($.INVALID_ARGUMENT,m+r+g)}function hw(r,e){return r.some(t=>t.isEqual(e))}/**
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
 */class dw{constructor(e,t,s,o,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new it(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new KC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Yf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class KC extends dw{data(){return super.data()}}function Yf(r,e){return typeof e=="string"?Qf(r,e):e instanceof Vc?e._internalPath:e._delegate._internalPath}/**
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
 */function fw(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new te($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Xf{}class QC extends Xf{}function ef(r,e,...t){let s=[];e instanceof Xf&&s.push(e),s=s.concat(t),function(l){const h=l.filter(g=>g instanceof Jf).length,m=l.filter(g=>g instanceof Mc).length;if(h>1||h>0&&m>0)throw new te($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)r=o._apply(r);return r}class Mc extends QC{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Mc(e,t,s)}_apply(e){const t=this._parse(e);return pw(e._query,t),new Ss(e.firestore,e.converter,Bd(e._query,t))}_parse(e){const t=Oc(e.firestore);return function(l,h,m,g,_,w,T){let I;if(_.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new te($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){Gy(T,w);const H=[];for(const q of T)H.push(Wy(g,l,q));I={arrayValue:{values:H}}}else I=Wy(g,l,T)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||Gy(T,w),I=WC(m,h,T,w==="in"||w==="not-in");return ft.create(_,w,I)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Cd(r,e,t){const s=e,o=Yf("where",r);return Mc._create(o,s,t)}class Jf extends Xf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Jf(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:On.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,l){let h=o;const m=l.getFlattenedFilters();for(const g of m)pw(h,g),h=Bd(h,g)}(e._query,t),new Ss(e.firestore,e.converter,Bd(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Wy(r,e,t){if(typeof(t=_t(t))=="string"){if(t==="")throw new te($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!fv(e)&&t.indexOf("/")!==-1)throw new te($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(Ge.fromString(t));if(!ce.isDocumentKey(s))throw new te($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return ly(r,new ce(s))}if(t instanceof it)return ly(r,t._key);throw new te($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${vc(t)}.`)}function Gy(r,e){if(!Array.isArray(r)||r.length===0)throw new te($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function pw(r,e){const t=function(o,l){for(const h of o)for(const m of h.getFlattenedFilters())if(l.indexOf(m.op)>=0)return m.op;return null}(r.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new te($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new te($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class YC{convertValue(e,t="none"){switch(ki(e)){case 0:return null;case 1:return e.booleanValue;case 2:return lt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ri(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ge(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Vi(e,(o,l)=>{s[o]=this.convertValue(l,t)}),s}convertVectorValue(e){var s,o,l;const t=(l=(o=(s=e.fields)==null?void 0:s[ic].arrayValue)==null?void 0:o.values)==null?void 0:l.map(h=>lt(h.doubleValue));return new or(t)}convertGeoPoint(e){return new sr(lt(e.latitude),lt(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Tc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ya(e));default:return null}}convertTimestamp(e){const t=Ci(e);return new ze(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ge.fromString(e);Ue(Ov(s),9688,{name:e});const o=new Xa(s.get(1),s.get(3)),l=new ce(s.popFirst(5));return o.isEqual(t)||br(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function mw(r,e,t){let s;return s=r?r.toFirestore(e):e,s}class Fa{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ps extends dw{constructor(e,t,s,o,l,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Wu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Yf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new te($.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ps._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ps._jsonSchemaVersion="firestore/documentSnapshot/1.0",ps._jsonSchema={type:pt("string",ps._jsonSchemaVersion),bundleSource:pt("string","DocumentSnapshot"),bundleName:pt("string"),bundle:pt("string")};class Wu extends ps{data(e={}){return super.data(e)}}class ms{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Fa(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Wu(this._firestore,this._userDataWriter,s.key,s,new Fa(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new te($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(m=>{const g=new Wu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Fa(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>l||m.type!==3).map(m=>{const g=new Wu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Fa(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,w=-1;return m.type!==0&&(_=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),w=h.indexOf(m.doc.key)),{type:XC(m.type),doc:g,oldIndex:_,newIndex:w}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new te($.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ms._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=_f.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach(l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function XC(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ge(61501,{type:r})}}/**
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
 */function JC(r){r=Zt(r,it);const e=Zt(r.firestore,Or);return LC(bc(e),r._key).then(t=>yw(e,r,t))}ms._jsonSchemaVersion="firestore/querySnapshot/1.0",ms._jsonSchema={type:pt("string",ms._jsonSchemaVersion),bundleSource:pt("string","QuerySnapshot"),bundleName:pt("string"),bundle:pt("string")};class Zf extends YC{constructor(e){super(),this.firestore=e}convertBytes(e){return new wn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new it(this.firestore,null,t)}}function ZC(r){r=Zt(r,Ss);const e=Zt(r.firestore,Or),t=bc(e),s=new Zf(e);return fw(r._query),MC(t,r._query).then(o=>new ms(e,s,r,o))}function eR(r,e,t){r=Zt(r,it);const s=Zt(r.firestore,Or),o=mw(r.converter,e);return Fc(s,[lw(Oc(s),"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,En.none())])}function gw(r,e,t,...s){r=Zt(r,it);const o=Zt(r.firestore,Or),l=Oc(o);let h;return h=typeof(e=_t(e))=="string"||e instanceof Vc?qC(l,"updateDoc",r._key,e,t,s):HC(l,"updateDoc",r._key,e),Fc(o,[h.toMutation(r._key,En.exists(!0))])}function tR(r){return Fc(Zt(r.firestore,Or),[new Af(r._key,En.none())])}function nR(r,e){const t=Zt(r.firestore,Or),s=ds(r),o=mw(r.converter,e);return Fc(t,[lw(Oc(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,En.exists(!1))]).then(()=>s)}function tf(r,...e){var g,_,w;r=_t(r);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||qy(e[s])||(t=e[s++]);const o={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(qy(e[s])){const T=e[s];e[s]=(g=T.next)==null?void 0:g.bind(T),e[s+1]=(_=T.error)==null?void 0:_.bind(T),e[s+2]=(w=T.complete)==null?void 0:w.bind(T)}let l,h,m;if(r instanceof it)h=Zt(r.firestore,Or),m=Ic(r._key.path),l={next:T=>{e[s]&&e[s](yw(h,r,T))},error:e[s+1],complete:e[s+2]};else{const T=Zt(r,Ss);h=Zt(T.firestore,Or),m=T._query;const I=new Zf(h);l={next:U=>{e[s]&&e[s](new ms(h,I,T,U))},error:e[s+1],complete:e[s+2]},fw(r._query)}return function(I,U,H,q){const B=new qf(q),ae=new Bf(U,B,H);return I.asyncQueue.enqueueAndForget(async()=>Uf(await fc(I),ae)),()=>{B.Nu(),I.asyncQueue.enqueueAndForget(async()=>jf(await fc(I),ae))}}(bc(h),m,o,l)}function Fc(r,e){return function(s,o){const l=new xr;return s.asyncQueue.enqueueAndForget(async()=>SC(await OC(s),o,l)),l.promise}(bc(r),e)}function yw(r,e,t){const s=t.docs.get(e._key),o=new Zf(r);return new ps(r,o,e._key,s,new Fa(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){bo=o})(No),Io(new ys("firestore",(s,{instanceIdentifier:o,options:l})=>{const h=s.getProvider("app").getImmediate(),m=new Or(new q1(s.getProvider("auth-internal")),new K1(h,s.getProvider("app-check-internal")),function(_,w){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new te($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xa(_.options.projectId,w)}(h,o),h);return l={useFetchStreams:t,...l},m._setSettings(l),m},"PUBLIC").setMultipleInstances(!0)),Ti(Qg,Yg,e),Ti(Qg,Yg,"esm2020")})();const rR={apiKey:"AIzaSyBLeBmdJ85IhfeJ7sGBHOlSjUmYJ6V_YIY",authDomain:"thpt-chi-linh.firebaseapp.com",projectId:"thpt-chi-linh",storageBucket:"thpt-chi-linh.firebasestorage.app",messagingSenderId:"59436766218",appId:"1:59436766218:web:8621e33cc12f6129e6fbf3",measurementId:"G-442TZLSK9J"},_w=i_(rR),er=U1(_w),yi=UC(_w),iR="AIzaSyBbn4TTcIaMV11waJ4wQd2wCy6Hk9EcVi4",sR="https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent",_i={USERS:"users",LESSONS:"lessons"};class oR{constructor(){Na(this,"collection",sw(yi,_i.USERS))}async createUser(e,t){const s=ds(yi,_i.USERS,e);await eR(s,{uid:e,...t,joinedAt:ze.now()})}async getUser(e){const t=ds(yi,_i.USERS,e),s=await JC(t);return s.exists()?s.data():null}async updateUser(e,t){const s=ds(yi,_i.USERS,e);await gw(s,t)}subscribeToUser(e,t,s){const o=ds(yi,_i.USERS,e);return tf(o,h=>{h.exists()?t(h.data()):t(null)},h=>{console.error("Error subscribing to user:",h),s==null||s(h)})}async findUserByEmail(e){const t=ef(this.collection,Cd("email","==",e)),s=await ZC(t);if(!s.empty){const o=s.docs[0];return{uid:o.id,...o.data()}}return null}async whitelistStudent(e){const t=await this.findUserByEmail(e);if(!t)throw new Error("Không tìm thấy người dùng. Họ phải đăng nhập ít nhất 1 lần.");if(t.isWhitelisted)throw new Error("Tài khoản đã được kích hoạt trước đó.");return await this.updateUser(t.uid,{isWhitelisted:!0,role:"student"}),!0}async removeFromWhitelist(e){await this.updateUser(e,{isWhitelisted:!1})}subscribeToWhitelistedStudents(e,t){const s=ef(this.collection,Cd("isWhitelisted","==",!0),Cd("role","==","student"));return tf(s,l=>{const h=l.docs.map(m=>({uid:m.id,...m.data()}));e(h)},l=>{console.error("Error fetching whitelisted students:",l),t==null||t(l)})}}const fs=new oR,vw=ye.createContext(void 0),aR=()=>{let r=sessionStorage.getItem("sessionId");return r||(r=crypto.randomUUID(),sessionStorage.setItem("sessionId",r)),r},lR=({children:r})=>{const[e,t]=ye.useState(null),[s,o]=ye.useState(!0),[l]=ye.useState(aR),h=ye.useCallback(async I=>{var U,H;try{const q=await fs.getUser(I.uid),B=I.email==="thanhphucn06@gmail.com";if(q){const ae={};let Z=!1;return q.sessionId!==l&&(ae.sessionId=l,Z=!0),B&&(q.role!=="admin"||!q.isWhitelisted)&&(ae.role="admin",ae.isWhitelisted=!0,Z=!0),Z?(await fs.updateUser(I.uid,ae),{...q,...ae}):q}else{const ae={email:I.email||"",displayName:I.displayName||((U=I.email)==null?void 0:U.split("@")[0])||"User",photoURL:I.photoURL||`https://ui-avatars.com/api/?name=${(H=I.email)==null?void 0:H[0]}&background=667eea&color=fff&size=200`,role:B?"admin":"student",isWhitelisted:B,sessionId:l,joinedAt:null};return await fs.createUser(I.uid,ae),{...ae,uid:I.uid}}}catch(q){return console.error("Error getting or creating user:",q),null}},[l]);ye.useEffect(()=>{let I=null;const U=kI(er,async H=>{I&&(I(),I=null),H?(o(!0),await h(H)?I=fs.subscribeToUser(H.uid,B=>{if(B){if(B.sessionId!==l){alert("Tài khoản của bạn đã được đăng nhập từ một thiết bị khác. Phiên này sẽ được đăng xuất."),sessionStorage.removeItem("sessionId"),po(er);return}if(B.isActive===!1){alert("Tài khoản của bạn đã bị vô hiệu hóa."),sessionStorage.removeItem("sessionId"),po(er);return}t(B)}else console.warn(`User document for ${H.uid} not found or deleted.`),po(er);o(!1)},B=>{console.error("Error in user subscription:",B),po(er),o(!1)}):(po(er),o(!1))):(t(null),o(!1))});return()=>{U(),I&&I()}},[h,l]);const m=ye.useCallback(async()=>{const I=new Cr;try{await KI(er,I)}catch(U){console.error("Google sign in error:",U);let H=`Đăng nhập Google thất bại: ${U.message}`;throw U.code==="auth/popup-closed-by-user"?H="Đăng nhập bị hủy bởi người dùng.":U.code==="auth/operation-not-allowed"?H="Lỗi cấu hình Firebase: Phương thức Đăng nhập Google chưa được kích hoạt.":U.code==="auth/unauthorized-domain"&&(H="Lỗi cấu hình Firebase: Tên miền ứng dụng chưa được thêm vào Authorized domains."),new Error(H)}},[]),g=ye.useCallback(async(I,U)=>{try{await AI(er,I,U)}catch(H){console.error("Email sign in error:",H);let q="Đăng nhập thất bại.";throw H.code==="auth/user-not-found"||H.code==="auth/wrong-password"||H.code==="auth/invalid-credential"?q="Email hoặc mật khẩu không chính xác.":H.code==="auth/operation-not-allowed"&&(q="Lỗi cấu hình Firebase: Phương thức Đăng nhập Email/Password chưa được kích hoạt."),new Error(q)}},[]),_=ye.useCallback(async(I,U)=>{try{await SI(er,I,U)}catch(H){console.error("Email sign up error:",H);let q="Đăng ký thất bại.";throw H.code==="auth/weak-password"?q="Mật khẩu quá yếu (phải có ít nhất 6 ký tự).":H.code==="auth/email-already-in-use"?q="Email đã được sử dụng.":H.code==="auth/operation-not-allowed"&&(q="Lỗi cấu hình Firebase: Phương thức Đăng nhập Email/Password chưa được kích hoạt."),new Error(q)}},[]),w=ye.useCallback(async()=>{sessionStorage.removeItem("sessionId"),await po(er)},[]),T={user:e,loading:s,signInWithGoogle:m,signInWithEmail:g,signUpWithEmail:_,signOut:w};return C.jsx(vw.Provider,{value:T,children:r})},Uc=()=>{const r=ye.useContext(vw);if(r===void 0)throw new Error("useAuth must be used within an AuthProvider");return r};/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var uR={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cR=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ht=(r,e)=>{const t=ye.forwardRef(({color:s="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:h,className:m="",children:g,..._},w)=>ye.createElement("svg",{ref:w,...uR,width:o,height:o,stroke:s,strokeWidth:h?Number(l)*24/Number(o):l,className:["lucide",`lucide-${cR(r)}`,m].join(" "),..._},[...e.map(([T,I])=>ye.createElement(T,I)),...Array.isArray(g)?g:[g]]));return t.displayName=`${r}`,t};/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hR=Ht("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=Ht("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dR=Ht("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fR=Ht("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pR=Ht("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mR=Ht("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gR=Ht("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yR=Ht("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _R=Ht("Minimize",[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vR=Ht("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wR=Ht("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ER=Ht("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TR=Ht("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IR=Ht("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SR=Ht("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),ep=({isOpen:r,onClose:e,title:t="Thông báo",message:s})=>r?C.jsx("div",{className:"modal fixed w-full h-full top-0 left-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4",children:C.jsxs("div",{className:"modal-content glass p-8 rounded-2xl shadow-2xl w-full max-w-md",children:[C.jsxs("div",{className:"flex items-start mb-6",children:[C.jsx("div",{className:"flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4",children:C.jsx(mR,{className:"w-6 h-6 text-blue-600"})}),C.jsxs("div",{className:"flex-1",children:[C.jsx("h3",{className:"text-xl font-bold text-slate-800 mb-2",children:t}),C.jsx("p",{className:"text-slate-600",children:s})]})]}),C.jsx("div",{className:"flex justify-end",children:C.jsx("button",{onClick:e,className:"btn-primary px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all",children:"Đã hiểu"})})]})}):null,AR=()=>{const{signInWithGoogle:r,signInWithEmail:e,signUpWithEmail:t}=Uc(),[s,o]=ye.useState("login"),[l,h]=ye.useState(""),[m,g]=ye.useState(""),[_,w]=ye.useState({isOpen:!1,title:"",message:""}),T=window.location.hostname,I=(B,ae="Thông báo")=>{w({isOpen:!0,title:ae,message:B})},U=async()=>{try{await r()}catch(B){I(B.message,"Lỗi")}},H=async B=>{B.preventDefault();try{await e(l,m)}catch(ae){I(ae.message,"Lỗi")}},q=async B=>{B.preventDefault();try{await t(l,m)}catch(ae){I(ae.message,"Lỗi")}};return C.jsxs("div",{className:"flex items-center justify-center min-h-screen px-4 animate-fadeIn",children:[C.jsxs("div",{className:"glass p-10 rounded-3xl shadow-2xl w-full max-w-md",children:[C.jsxs("div",{className:"text-center mb-8",children:[C.jsx("div",{className:"inline-block p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-4 animate-float",children:C.jsx(ww,{className:"w-12 h-12 text-white"})}),C.jsx("h1",{className:"text-4xl font-bold gradient-text mb-2",children:"Chào mừng!"}),C.jsx("p",{className:"text-slate-600",children:"Đăng nhập để tiếp tục học tập"})]}),C.jsxs("div",{id:"domain-warning",className:"hidden bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg mb-6 text-sm",children:[C.jsx("p",{className:"font-bold",children:"Lỗi Đăng nhập Google?"}),C.jsx("p",{className:"mb-2",children:'Nếu bạn đang gặp lỗi "auth/unauthorized-domain", hãy thực hiện các bước sau:'}),C.jsxs("ol",{className:"list-decimal list-inside space-y-1",children:[C.jsx("li",{children:"Truy cập Firebase Console (Authentication - Settings - Authorized domains)."}),C.jsx("li",{children:"Nhấn Add domain."}),C.jsxs("li",{children:["Sao chép và dán tên miền này:"," ",C.jsx("code",{className:"font-mono text-xs bg-red-200 p-1 rounded-md mt-1 break-all",children:T})]}),C.jsx("li",{children:"Lưu lại và thử đăng nhập lại."})]})]}),C.jsx("div",{className:"mb-6 border-b border-slate-200",children:C.jsxs("nav",{className:"flex space-x-1",children:[C.jsx("button",{onClick:()=>o("login"),className:`flex-1 py-3 px-4 font-semibold transition-all ${s==="login"?"text-blue-600 border-b-2 border-blue-600":"text-slate-500 hover:text-slate-700"}`,children:"Đăng nhập"}),C.jsx("button",{onClick:()=>o("register"),className:`flex-1 py-3 px-4 font-semibold transition-all ${s==="register"?"text-blue-600 border-b-2 border-blue-600":"text-slate-500 hover:text-slate-700"}`,children:"Đăng ký"})]})}),s==="login"&&C.jsxs("form",{onSubmit:H,className:"space-y-5",children:[C.jsxs("div",{children:[C.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Email"}),C.jsx("input",{type:"email",value:l,onChange:B=>h(B.target.value),required:!0,className:"input-custom w-full px-4 py-3 border-2 border-slate-200 rounded-xl transition-all"})]}),C.jsxs("div",{children:[C.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Mật khẩu"}),C.jsx("input",{type:"password",value:m,onChange:B=>g(B.target.value),required:!0,className:"input-custom w-full px-4 py-3 border-2 border-slate-200 rounded-xl transition-all"})]}),C.jsx("button",{type:"submit",className:"btn-primary w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all",children:"Đăng nhập"})]}),s==="register"&&C.jsxs("form",{onSubmit:q,className:"space-y-5",children:[C.jsxs("div",{children:[C.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Email"}),C.jsx("input",{type:"email",value:l,onChange:B=>h(B.target.value),required:!0,className:"input-custom w-full px-4 py-3 border-2 border-slate-200 rounded-xl transition-all"})]}),C.jsxs("div",{children:[C.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Mật khẩu"}),C.jsx("input",{type:"password",value:m,onChange:B=>g(B.target.value),required:!0,placeholder:"Ít nhất 6 ký tự",className:"input-custom w-full px-4 py-3 border-2 border-slate-200 rounded-xl transition-all"})]}),C.jsx("button",{type:"submit",className:"btn-primary w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all",children:"Đăng ký"})]}),C.jsxs("div",{className:"my-8 flex items-center",children:[C.jsx("div",{className:"flex-1 border-t border-slate-200"}),C.jsx("span",{className:"px-4 text-sm text-slate-500 font-medium",children:"hoặc"}),C.jsx("div",{className:"flex-1 border-t border-slate-200"})]}),C.jsxs("button",{onClick:U,className:"w-full flex items-center justify-center px-4 py-4 bg-white border-2 border-slate-200 rounded-xl shadow-sm hover:shadow-md hover:border-blue-300 transition-all group",children:[C.jsx("img",{className:"w-6 h-6 mr-3",src:"https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",alt:"Google"}),C.jsx("span",{className:"text-base font-semibold text-slate-700 group-hover:text-blue-600 transition-colors",children:"Tiếp tục với Google"})]})]}),C.jsx(ep,{isOpen:_.isOpen,onClose:()=>w({..._,isOpen:!1}),title:_.title,message:_.message})]})},Gu=({title:r})=>{const{user:e,signOut:t}=Uc(),s=async()=>{try{await t()}catch(o){console.error("Lỗi khi đăng xuất:",o),alert("Đăng xuất thất bại. Vui lòng thử lại.")}};return C.jsx("header",{className:"glass rounded-2xl mb-8 p-6 shadow-xl animate-slideIn",children:C.jsxs("div",{className:"flex justify-between items-center",children:[C.jsxs("div",{className:"flex items-center",children:[C.jsx("img",{src:e==null?void 0:e.photoURL,alt:"Avatar",className:"w-14 h-14 rounded-2xl mr-4 border-4 border-white shadow-lg"}),C.jsxs("div",{children:[C.jsx("h1",{className:"text-2xl font-bold gradient-text",children:r}),C.jsx("p",{className:"text-sm text-slate-500 font-medium",children:e==null?void 0:e.email})]})]}),C.jsxs("button",{onClick:s,className:"btn-primary px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all flex items-center gap-2",children:[C.jsx(gR,{className:"w-5 h-5"}),"Đăng xuất"]})]})})};class CR{constructor(){Na(this,"collection",sw(yi,_i.LESSONS))}async createLesson(e){const t={...e,createdAt:ze.now(),updatedAt:ze.now()};await nR(this.collection,t)}async updateLesson(e,t){const s=ds(yi,_i.LESSONS,e);await gw(s,{...t,updatedAt:ze.now()})}async deleteLesson(e){const t=ds(yi,_i.LESSONS,e);await tR(t)}subscribeToLessons(e,t){const s=ef(this.collection);return tf(s,l=>{const h=l.docs.map(m=>({id:m.id,...m.data()}));h.sort((m,g)=>g.updatedAt.toMillis()-m.updatedAt.toMillis()),e(h)},l=>{console.error("Error fetching lessons:",l),t==null||t(l)})}}const Ua=new CR;class RR{constructor(){Na(this,"apiKey");Na(this,"apiUrl");this.apiKey=iR,this.apiUrl=sR}async generateContent(e,t){var h,m,g,_,w,T;const s={contents:[{parts:[{text:e}]}]};t&&(s.systemInstruction={parts:[{text:t}]});const o=3;let l=1e3;for(let I=0;I<o;I++)try{const U=await fetch(`${this.apiUrl}?key=${this.apiKey}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(U.status===429&&I<o-1){await this.sleep(l),l*=2;continue}if(!U.ok){const B=await U.json();throw new Error(`API call failed: ${U.status} - ${((h=B.error)==null?void 0:h.message)||"Unknown error"}`)}return((T=(w=(_=(g=(m=(await U.json()).candidates)==null?void 0:m[0])==null?void 0:g.content)==null?void 0:_.parts)==null?void 0:w[0])==null?void 0:T.text)||"Không thể tạo nội dung."}catch(U){if(console.error("Gemini API Error:",U),I===o-1)throw U}throw new Error("API call failed after multiple retries.")}async suggestLessonDescription(e){const t="Bạn là trợ lý soạn thảo nội dung giáo dục. Hãy tạo một mô tả ngắn gọn (tối đa 30 từ) bằng tiếng Việt, mang tính thu hút và cung cấp tóm tắt nội dung chính cho một bài học.",s=`Đề xuất mô tả cho bài học: "${e}"`;return this.generateContent(s,t)}async chatWithLesson(e,t){const s=`Bạn là Trợ lý Học tập AI. Nhiệm vụ của bạn là trả lời các câu hỏi của học sinh về Bài học "${e}". Hãy giữ câu trả lời ngắn gọn, chính xác, mang tính giáo dục và sử dụng ngôn ngữ tiếng Việt thân thiện.`;return this.generateContent(t,s)}sleep(e){return new Promise(t=>setTimeout(t,e))}}const Ew=new RR,kR=({message:r="Đang tải...",fullScreen:e=!1})=>{const t=e?"flex justify-center items-center min-h-screen":"flex justify-center items-center min-h-[80vh]";return C.jsx("div",{className:t,children:C.jsxs("div",{className:"text-center",children:[C.jsx("div",{className:"loader mx-auto mb-6"}),C.jsx("h2",{className:"text-2xl font-bold gradient-text mb-2",children:r}),C.jsx("p",{className:"text-slate-500",children:"Vui lòng chờ giây lát"})]})})},tl=({size:r="md"})=>{const e=r==="sm"?"loader-sm":r==="lg"?"w-16 h-16":"";return C.jsx("div",{className:`loader ${e}`})},PR=()=>{const[r,e]=ye.useState([]),[t,s]=ye.useState(!0),[o,l]=ye.useState({id:"",name:"",description:"",embedCode:""}),[h,m]=ye.useState(!1),[g,_]=ye.useState(!1),[w,T]=ye.useState({isOpen:!1,title:"",message:""});ye.useEffect(()=>{const Z=Ua.subscribeToLessons(he=>{e(he),s(!1)},he=>{console.error("Error loading lessons:",he),s(!1)});return()=>Z()},[]);const I=(Z,he="Thông báo")=>{T({isOpen:!0,title:he,message:Z})},U=async Z=>{if(Z.preventDefault(),!o.name||!o.embedCode){I("Tên bài học và Mã nhúng là bắt buộc.","Lỗi");return}try{h&&o.id?(await Ua.updateLesson(o.id,{name:o.name,description:o.description,embedCode:o.embedCode}),I("Cập nhật bài học thành công!")):(await Ua.createLesson({name:o.name,description:o.description,embedCode:o.embedCode}),I("Thêm bài học thành công!")),B()}catch(he){I(`Lỗi: ${he.message}`,"Lỗi")}},H=Z=>{l({id:Z.id||"",name:Z.name,description:Z.description,embedCode:Z.embedCode}),m(!0),window.scrollTo({top:0,behavior:"smooth"})},q=async Z=>{try{await Ua.deleteLesson(Z),I("Đã xóa bài học.")}catch(he){I(`Lỗi: ${he.message}`,"Lỗi")}},B=()=>{l({id:"",name:"",description:"",embedCode:""}),m(!1)},ae=async()=>{if(!o.name){I("Vui lòng nhập Tên bài học trước khi đề xuất mô tả.","Lưu ý");return}_(!0);try{const Z=await Ew.suggestLessonDescription(o.name);l({...o,description:Z.trim()})}catch{I("Lỗi khi kết nối với AI. Vui lòng thử lại.","Lỗi AI")}finally{_(!1)}};return C.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[C.jsx("div",{className:"lg:col-span-1",children:C.jsxs("form",{onSubmit:U,className:"bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border-2 border-blue-100",children:[C.jsx("h3",{className:"text-xl font-bold mb-6 gradient-text",children:h?"Chỉnh sửa Bài học":"Thêm Bài học Mới"}),C.jsxs("div",{className:"mb-4",children:[C.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Tên bài học"}),C.jsx("input",{type:"text",value:o.name,onChange:Z=>l({...o,name:Z.target.value}),className:"input-custom w-full px-4 py-3 border-2 border-slate-200 rounded-xl",required:!0})]}),C.jsxs("div",{className:"mb-4",children:[C.jsxs("div",{className:"flex justify-between items-center mb-2",children:[C.jsx("label",{className:"block text-sm font-semibold text-slate-700",children:"Mô tả"}),C.jsx("button",{type:"button",onClick:ae,disabled:g,className:"text-xs text-indigo-600 font-medium hover:underline flex items-center transition-opacity hover:opacity-80 disabled:opacity-50",children:g?C.jsx(tl,{size:"sm"}):C.jsxs(C.Fragment,{children:[C.jsx(ER,{className:"w-4 h-4 mr-1"}),"Đề xuất Mô tả"]})})]}),C.jsx("textarea",{value:o.description,onChange:Z=>l({...o,description:Z.target.value}),rows:3,className:"input-custom w-full px-4 py-3 border-2 border-slate-200 rounded-xl"})]}),C.jsxs("div",{className:"mb-6",children:[C.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Mã nhúng (HTML/iframe)"}),C.jsx("textarea",{value:o.embedCode,onChange:Z=>l({...o,embedCode:Z.target.value}),rows:5,className:"input-custom w-full px-4 py-3 border-2 border-slate-200 rounded-xl font-mono text-sm",placeholder:"Lưu ý: Chỉ chấp nhận mã HTML an toàn (ví dụ: iframe).",required:!0})]}),C.jsxs("div",{className:"flex space-x-3",children:[C.jsx("button",{type:"submit",className:"btn-primary flex-1 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all",children:h?"Cập nhật":"Thêm"}),h&&C.jsx("button",{type:"button",onClick:B,className:"flex-1 py-3 bg-slate-200 text-slate-700 rounded-xl font-semibold hover:bg-slate-300 transition-all",children:"Hủy"})]})]})}),C.jsxs("div",{className:"lg:col-span-2",children:[C.jsx("h3",{className:"text-xl font-bold mb-6 text-slate-800",children:"Danh sách Bài học"}),C.jsx("div",{className:"space-y-4 max-h-[65vh] overflow-y-auto pr-2",children:t?C.jsx("div",{className:"flex justify-center py-12",children:C.jsx(tl,{})}):r.length===0?C.jsxs("div",{className:"text-center py-12",children:[C.jsx("div",{className:"text-6xl mb-4 text-slate-300",children:"📚"}),C.jsx("p",{className:"text-slate-500 font-medium",children:"Chưa có bài học nào được tạo"})]}):r.map(Z=>C.jsx("div",{className:"card-hover bg-white p-6 rounded-2xl border-2 border-slate-100 shadow-md",children:C.jsxs("div",{className:"flex justify-between items-start min-w-0",children:[C.jsxs("div",{className:"flex-1 min-w-0 mr-4",children:[C.jsx("h4",{className:"text-lg font-bold text-slate-800 mb-2 truncate",children:Z.name}),C.jsx("p",{className:"text-sm text-slate-600 mb-3 line-clamp-2",children:Z.description||"Không có mô tả"}),C.jsx("div",{className:"bg-slate-50 p-3 rounded-xl",children:(()=>{var Se;const he=(Se=Z.embedCode)==null?void 0:Se.includes("<iframe"),Ce=he?"📹 Video/Iframe Content":"📄 HTML Content",Be=he?"Contains embedded video or interactive content":"Contains HTML content";return C.jsxs("div",{className:"flex items-center justify-between",children:[C.jsx("span",{className:"text-sm font-medium text-slate-600",children:Ce}),C.jsx("span",{className:"text-xs text-slate-400 truncate ml-2",children:Be})]})})()})]}),C.jsxs("div",{className:"flex flex-col gap-2 flex-shrink-0",style:{minWidth:"80px"},children:[C.jsxs("button",{onClick:()=>H(Z),className:"flex items-center justify-center gap-1 px-3 py-2 text-sm bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 font-semibold transition-all whitespace-nowrap",children:[C.jsx(vR,{className:"w-4 h-4"}),C.jsx("span",{className:"hidden sm:inline",children:"Sửa"})]}),C.jsxs("button",{onClick:()=>Z.id&&q(Z.id),className:"flex items-center justify-center gap-1 px-3 py-2 text-sm bg-red-100 text-red-700 rounded-lg hover:bg-red-200 font-semibold transition-all whitespace-nowrap",children:[C.jsx(TR,{className:"w-4 h-4"}),C.jsx("span",{className:"hidden sm:inline",children:"Xóa"})]})]})]})},Z.id))})]}),C.jsx(ep,{isOpen:w.isOpen,onClose:()=>T({...w,isOpen:!1}),title:w.title,message:w.message})]})},xR=()=>{const[r,e]=ye.useState([]),[t,s]=ye.useState(!0),[o,l]=ye.useState(""),[h,m]=ye.useState({isOpen:!1,title:"",message:""});ye.useEffect(()=>{const T=fs.subscribeToWhitelistedStudents(I=>{e(I),s(!1)},I=>{console.error("Error loading whitelisted students:",I),s(!1)});return()=>T()},[]);const g=(T,I="Thông báo")=>{m({isOpen:!0,title:I,message:T})},_=async T=>{if(T.preventDefault(),!!o.trim())try{await fs.whitelistStudent(o.trim()),g(`Đã kích hoạt tài khoản cho ${o}!`),l("")}catch(I){g(I.message,"Lỗi")}},w=async T=>{try{await fs.removeFromWhitelist(T),g("Đã gỡ kích hoạt tài khoản.")}catch(I){g(`Lỗi: ${I.message}`,"Lỗi")}};return C.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[C.jsx("div",{className:"lg:col-span-1",children:C.jsxs("form",{onSubmit:_,className:"bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border-2 border-green-100",children:[C.jsx("h3",{className:"text-xl font-bold mb-6 text-green-700",children:"Thêm Học sinh vào Danh sách"}),C.jsxs("div",{className:"mb-6",children:[C.jsx("label",{className:"block text-sm font-semibold text-slate-700 mb-2",children:"Email Học sinh"}),C.jsx("input",{type:"email",value:o,onChange:T=>l(T.target.value),className:"input-custom w-full px-4 py-3 border-2 border-slate-200 rounded-xl",placeholder:"hocsinh@gmail.com",required:!0}),C.jsx("p",{className:"text-xs text-slate-500 mt-1",children:"Học sinh phải đăng nhập ít nhất 1 lần để được tìm thấy."})]}),C.jsx("button",{type:"submit",className:"btn-primary w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all",children:"Kích hoạt Tài khoản"})]})}),C.jsxs("div",{className:"lg:col-span-2",children:[C.jsx("h3",{className:"text-xl font-bold mb-6 text-slate-800",children:"Danh sách Học sinh đã Kích hoạt"}),C.jsx("div",{className:"space-y-4 max-h-[65vh] overflow-y-auto pr-2",children:t?C.jsx("div",{className:"flex justify-center py-12",children:C.jsx(tl,{})}):r.length===0?C.jsxs("div",{className:"text-center py-12",children:[C.jsx("div",{className:"text-6xl mb-4 text-slate-300",children:"👥"}),C.jsx("p",{className:"text-slate-500 font-medium",children:"Chưa có học sinh nào được kích hoạt"})]}):r.map(T=>C.jsx("div",{className:"card-hover bg-white p-5 rounded-2xl border-2 border-slate-100 shadow-md",children:C.jsxs("div",{className:"flex justify-between items-center",children:[C.jsxs("div",{className:"flex items-center flex-1",children:[C.jsx("img",{src:T.photoURL||"https://ui-avatars.com/api/?name=User&background=667eea&color=fff",alt:"Avatar",className:"w-12 h-12 rounded-xl mr-4 border-2 border-slate-200"}),C.jsxs("div",{className:"truncate",children:[C.jsx("p",{className:"font-bold text-slate-800 truncate",children:T.displayName}),C.jsx("p",{className:"text-sm text-slate-500 truncate",children:T.email})]})]}),C.jsxs("button",{onClick:()=>w(T.uid),className:"flex items-center gap-2 px-5 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 font-semibold transition-all flex-shrink-0 ml-4",children:[C.jsx(SR,{className:"w-4 h-4"}),"Xóa"]})]})},T.uid))})]}),C.jsx(ep,{isOpen:h.isOpen,onClose:()=>m({...h,isOpen:!1}),title:h.title,message:h.message})]})},NR=()=>{const[r,e]=ye.useState("lessons");return C.jsxs("div",{className:"container mx-auto px-4 py-8 min-h-screen",children:[C.jsx(Gu,{title:"Quản lý Hệ thống"}),C.jsxs("div",{className:"glass p-8 rounded-2xl shadow-xl animate-fadeIn",children:[C.jsx("div",{className:"border-b border-slate-200 mb-6",children:C.jsxs("nav",{className:"flex space-x-2",children:[C.jsxs("button",{onClick:()=>e("lessons"),className:`flex items-center gap-2 px-6 py-3 font-semibold transition-all ${r==="lessons"?"text-blue-600 border-b-2 border-blue-600":"text-slate-500 hover:text-slate-700"}`,children:[C.jsx(ww,{className:"w-5 h-5"}),"Quản lý Bài học"]}),C.jsxs("button",{onClick:()=>e("whitelist"),className:`flex items-center gap-2 px-6 py-3 font-semibold transition-all ${r==="whitelist"?"text-blue-600 border-b-2 border-blue-600":"text-slate-500 hover:text-slate-700"}`,children:[C.jsx(IR,{className:"w-5 h-5"}),"Quản lý Học sinh"]})]})}),C.jsx("div",{children:r==="lessons"?C.jsx(PR,{}):C.jsx(xR,{})})]})]})},DR=({onSelectLesson:r})=>{const[e,t]=ye.useState([]),[s,o]=ye.useState(!0);return ye.useEffect(()=>{const l=Ua.subscribeToLessons(h=>{t(h),o(!1)},h=>{console.error("Error loading lessons:",h),o(!1)});return()=>l()},[]),s?C.jsx("div",{className:"flex justify-center col-span-full py-12",children:C.jsx(tl,{})}):e.length===0?C.jsxs("div",{className:"col-span-full text-center py-16",children:[C.jsx("div",{className:"text-6xl mb-4 text-slate-300",children:"📚"}),C.jsx("p",{className:"text-slate-500 font-medium",children:"Hiện chưa có bài học nào được chia sẻ"})]}):C.jsx(C.Fragment,{children:e.map(l=>C.jsxs("div",{onClick:()=>r(l),className:"card-hover bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer border-2 border-transparent hover:border-blue-500 transition-all",children:[C.jsx("div",{className:"h-2 bg-gradient-to-r from-blue-500 to-indigo-600"}),C.jsxs("div",{className:"p-6",children:[C.jsx("div",{className:"w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4",children:C.jsx(pR,{className:"w-8 h-8 text-white"})}),C.jsx("h3",{className:"text-xl font-bold text-slate-800 mb-2",children:l.name}),C.jsx("p",{className:"text-slate-600 text-sm mb-4 line-clamp-2",children:l.description||"Không có mô tả"})]}),C.jsx("div",{className:"px-6 py-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-t border-slate-100",children:C.jsxs("span",{className:"text-sm font-bold text-blue-600 flex items-center",children:["Bắt đầu học",C.jsx(dR,{className:"w-4 h-4 ml-2"})]})})]},l.id))})},bR=({lessonName:r})=>{const[e,t]=ye.useState([{role:"assistant",content:"Chào bạn! Tôi có thể giúp bạn trả lời bất kỳ câu hỏi nào về bài học này. Hãy hỏi tôi nhé!"}]),[s,o]=ye.useState(""),[l,h]=ye.useState(!1),m=ye.useRef(null);ye.useEffect(()=>{m.current&&(m.current.scrollTop=m.current.scrollHeight)},[e]);const g=async()=>{const w=s.trim();if(!(!w||l)){o(""),t(T=>[...T,{role:"user",content:w}]),h(!0);try{const T=await Ew.chatWithLesson(r,w);t(I=>[...I,{role:"assistant",content:T}])}catch{t(I=>[...I,{role:"assistant",content:"Xin lỗi, đã xảy ra lỗi khi kết nối với Trợ lý AI."}])}finally{h(!1)}}},_=w=>{w.key==="Enter"&&!w.shiftKey&&(w.preventDefault(),g())};return C.jsxs("div",{className:"lg:col-span-1 glass p-6 rounded-2xl shadow-xl animate-fadeIn",children:[C.jsxs("h3",{className:"text-xl font-bold text-slate-800 mb-4 flex items-center",children:["🤖 Trợ lý AI Học tập",C.jsx("span",{className:"ml-2 text-xs text-blue-500 font-medium",children:"(Gemini)"})]}),C.jsxs("div",{ref:m,className:"ai-chat-box bg-slate-50 p-3 rounded-xl border border-slate-200 mb-4 h-[350px]",children:[e.map((w,T)=>C.jsx("div",{className:`flex ${w.role==="user"?"justify-end":"justify-start"}`,children:C.jsx("div",{className:`p-3 rounded-xl max-w-[80%] shadow-md ${w.role==="user"?"bg-indigo-600 text-white rounded-tr-none":"bg-white border border-slate-100 text-slate-800 rounded-tl-none"}`,children:w.content})},T)),l&&C.jsx("div",{className:"flex justify-start",children:C.jsxs("div",{className:"bg-slate-200 text-slate-700 p-3 rounded-xl rounded-tl-none max-w-[80%] shadow-md flex items-center",children:[C.jsx(tl,{size:"sm"}),C.jsx("span",{className:"ml-2",children:"Đang trả lời..."})]})})]}),C.jsxs("div",{className:"flex",children:[C.jsx("input",{type:"text",value:s,onChange:w=>o(w.target.value),onKeyPress:_,placeholder:"Hỏi AI về bài học...",className:"input-custom w-full px-4 py-3 border-2 border-slate-200 rounded-xl rounded-r-none transition-all",disabled:l}),C.jsx("button",{onClick:g,disabled:l||!s.trim(),className:"btn-primary flex-shrink-0 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl rounded-l-none font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed",children:C.jsx(wR,{className:"w-5 h-5"})})]})]})},VR=(r=1024)=>{const[e,t]=ye.useState(!1);return ye.useEffect(()=>{const s=()=>{t(window.innerWidth<r)};return s(),window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}},[r]),e},OR=r=>{const e=/<iframe\s+([^>]*?)src="([^"]+)"([^>]*?)>/i,t=r.match(e);if(!t)return{src:"",otherProps:{}};const s=t[2],o=(t[1]+t[3]).trim(),l=/(\w+)="([^"]*)"/g;let h;const m={};for(;(h=l.exec(o))!==null;){const g=h[1],_=h[2],w=g.replace(/-([a-z])/g,T=>T[1].toUpperCase());m[w]=_}return{src:s,otherProps:m}},LR=({lesson:r,onBack:e})=>{const t=ye.useRef(null),[s,o]=ye.useState(!1),l=VR(),{src:h,otherProps:m}=ye.useMemo(()=>OR(r.embedCode),[r.embedCode]),g=()=>{const w=t.current;w&&(document.fullscreenElement?document.exitFullscreen():w.requestFullscreen().catch(T=>{alert(`Error attempting to enable full-screen mode: ${T.message} (${T.name})`)}))};ye.useEffect(()=>{const w=()=>{const T=!!document.fullscreenElement;o(T)};return document.addEventListener("fullscreenchange",w),()=>{document.removeEventListener("fullscreenchange",w)}},[]);const _=s&&l;return C.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[C.jsxs("div",{className:`lg:col-span-2 glass p-6 md:p-8 rounded-2xl shadow-xl animate-fadeIn ${s?"fullscreen-mode-active":""}`,children:[C.jsxs("div",{className:`flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 ${_?"hidden":""}`,children:[C.jsxs("button",{onClick:e,className:"px-6 py-3 bg-gradient-to-r from-slate-200 to-slate-300 text-slate-700 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all flex items-center gap-2 w-full sm:w-auto justify-center",children:[C.jsx(hR,{className:"w-5 h-5"}),"Quay lại"]}),C.jsxs("button",{onClick:g,className:"px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all flex items-center gap-2 w-full sm:w-auto justify-center",children:[s?C.jsx(_R,{className:"w-5 h-5"}):C.jsx(yR,{className:"w-5 h-5"}),s?"Thoát":"Toàn màn hình"]})]}),C.jsxs("div",{className:`mb-6 ${_?"hidden":""}`,children:[C.jsx("h2",{className:"text-3xl md:text-4xl font-bold gradient-text mb-3",children:r.name}),C.jsx("p",{className:"text-slate-600 text-base md:text-lg",children:r.description||"Không có mô tả"})]}),C.jsx("div",{ref:t,id:"embed-container",className:`relative bg-white border-4 border-slate-100 rounded-2xl overflow-hidden shadow-xl ${s?"fullscreen-embed-active":"min-h-[600px]"}`,children:h&&C.jsx("div",{className:`iframe-container ${s?"fullscreen-scroll":""}`,children:C.jsx("iframe",{src:h,title:m.title||r.name,className:"iframe-embed",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0,...m},h)})})]}),C.jsx("div",{className:_?"hidden":"",children:C.jsx(bR,{lessonName:r.name})})]})},MR=()=>{const{user:r}=Uc(),[e,t]=ye.useState(null);return r!=null&&r.isWhitelisted?e?C.jsxs("div",{className:"container mx-auto px-4 py-8 min-h-screen",children:[C.jsx(Gu,{title:e.name}),C.jsx(LR,{lesson:e,onBack:()=>t(null)})]}):C.jsxs("div",{className:"container mx-auto px-4 py-8 min-h-screen",children:[C.jsx(Gu,{title:"Trang học tập"}),C.jsxs("div",{className:"glass p-8 rounded-2xl shadow-xl animate-fadeIn",children:[C.jsx("h2",{className:"text-3xl font-bold gradient-text mb-8",children:"Danh sách Bài học"}),C.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",children:C.jsx(DR,{onSelectLesson:t})})]})]}):C.jsxs("div",{className:"container mx-auto px-4 py-8 min-h-screen",children:[C.jsx(Gu,{title:"Trang học tập"}),C.jsx("div",{className:"glass p-8 rounded-2xl shadow-xl animate-fadeIn",children:C.jsxs("div",{className:"text-center py-16",children:[C.jsx("div",{className:"inline-block p-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl mb-6 animate-float",children:C.jsx(fR,{className:"w-16 h-16 text-white"})}),C.jsxs("h2",{className:"text-3xl font-bold gradient-text mb-4",children:["Chào mừng, ",r==null?void 0:r.displayName,"!"]}),C.jsx("p",{className:"text-slate-700 text-lg mb-2 font-semibold",children:"Tài khoản của bạn chưa được kích hoạt"}),C.jsx("p",{className:"text-slate-500",children:"Vui lòng liên hệ Admin để được phê duyệt truy cập vào các bài học."}),C.jsx("div",{className:"mt-8 inline-block bg-blue-50 px-6 py-3 rounded-xl border border-blue-200",children:C.jsxs("p",{className:"text-sm text-slate-600",children:["Email đã đăng ký:"," ",C.jsx("span",{className:"font-bold text-blue-600",children:r==null?void 0:r.email})]})})]})})]})},FR=()=>{const{user:r,loading:e}=Uc();return e?C.jsx(kR,{message:"Đang tải ứng dụng...",fullScreen:!0}):r?r.role==="admin"?C.jsx(NR,{}):C.jsx(MR,{}):C.jsx(AR,{})};function UR(){return C.jsx(lR,{children:C.jsx("div",{className:"bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen",children:C.jsx(FR,{})})})}jE.createRoot(document.getElementById("root")).render(C.jsx(ye.StrictMode,{children:C.jsx(BE,{children:C.jsx(UR,{})})}));
