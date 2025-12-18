const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoginPage-DXuCRLab.js","assets/Modal-iqiXE7me.js","assets/createLucideIcon-DrKb9wxx.js","assets/AdminDashboard-DsFI9dBS.js","assets/ai.service-CXgTz47a.js","assets/StudentDashboard-CQTWIMS8.js","assets/StudentDashboard-CAuvVr9R.css"])))=>i.map(i=>d[i]);
var ww=Object.defineProperty;var Tw=(r,e,t)=>e in r?ww(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var ng=(r,e,t)=>Tw(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function Iw(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var sf={exports:{}},Ra={},of={exports:{}},Te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rg;function Sw(){if(rg)return Te;rg=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),T=Symbol.iterator;function A(O){return O===null||typeof O!="object"?null:(O=T&&O[T]||O["@@iterator"],typeof O=="function"?O:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,H={};function j(O,W,ve){this.props=O,this.context=W,this.refs=H,this.updater=ve||U}j.prototype.isReactComponent={},j.prototype.setState=function(O,W){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,W,"setState")},j.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function ae(){}ae.prototype=j.prototype;function fe(O,W,ve){this.props=O,this.context=W,this.refs=H,this.updater=ve||U}var we=fe.prototype=new ae;we.constructor=fe,q(we,j.prototype),we.isPureReactComponent=!0;var Pe=Array.isArray,We=Object.prototype.hasOwnProperty,ke={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function S(O,W,ve){var Ee,Ie={},Se=null,Me=null;if(W!=null)for(Ee in W.ref!==void 0&&(Me=W.ref),W.key!==void 0&&(Se=""+W.key),W)We.call(W,Ee)&&!k.hasOwnProperty(Ee)&&(Ie[Ee]=W[Ee]);var Ve=arguments.length-2;if(Ve===1)Ie.children=ve;else if(1<Ve){for(var Ue=Array(Ve),jt=0;jt<Ve;jt++)Ue[jt]=arguments[jt+2];Ie.children=Ue}if(O&&O.defaultProps)for(Ee in Ve=O.defaultProps,Ve)Ie[Ee]===void 0&&(Ie[Ee]=Ve[Ee]);return{$$typeof:r,type:O,key:Se,ref:Me,props:Ie,_owner:ke.current}}function C(O,W){return{$$typeof:r,type:O.type,key:W,ref:O.ref,props:O.props,_owner:O._owner}}function V(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function N(O){var W={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ve){return W[ve]})}var x=/\/+/g;function R(O,W){return typeof O=="object"&&O!==null&&O.key!=null?N(""+O.key):W.toString(36)}function je(O,W,ve,Ee,Ie){var Se=typeof O;(Se==="undefined"||Se==="boolean")&&(O=null);var Me=!1;if(O===null)Me=!0;else switch(Se){case"string":case"number":Me=!0;break;case"object":switch(O.$$typeof){case r:case e:Me=!0}}if(Me)return Me=O,Ie=Ie(Me),O=Ee===""?"."+R(Me,0):Ee,Pe(Ie)?(ve="",O!=null&&(ve=O.replace(x,"$&/")+"/"),je(Ie,W,ve,"",function(jt){return jt})):Ie!=null&&(V(Ie)&&(Ie=C(Ie,ve+(!Ie.key||Me&&Me.key===Ie.key?"":(""+Ie.key).replace(x,"$&/")+"/")+O)),W.push(Ie)),1;if(Me=0,Ee=Ee===""?".":Ee+":",Pe(O))for(var Ve=0;Ve<O.length;Ve++){Se=O[Ve];var Ue=Ee+R(Se,Ve);Me+=je(Se,W,ve,Ue,Ie)}else if(Ue=A(O),typeof Ue=="function")for(O=Ue.call(O),Ve=0;!(Se=O.next()).done;)Se=Se.value,Ue=Ee+R(Se,Ve++),Me+=je(Se,W,ve,Ue,Ie);else if(Se==="object")throw W=String(O),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.");return Me}function vt(O,W,ve){if(O==null)return O;var Ee=[],Ie=0;return je(O,Ee,"","",function(Se){return W.call(ve,Se,Ie++)}),Ee}function Dt(O){if(O._status===-1){var W=O._result;W=W(),W.then(function(ve){(O._status===0||O._status===-1)&&(O._status=1,O._result=ve)},function(ve){(O._status===0||O._status===-1)&&(O._status=2,O._result=ve)}),O._status===-1&&(O._status=0,O._result=W)}if(O._status===1)return O._result.default;throw O._result}var Ye={current:null},J={transition:null},ue={ReactCurrentDispatcher:Ye,ReactCurrentBatchConfig:J,ReactCurrentOwner:ke};function ne(){throw Error("act(...) is not supported in production builds of React.")}return Te.Children={map:vt,forEach:function(O,W,ve){vt(O,function(){W.apply(this,arguments)},ve)},count:function(O){var W=0;return vt(O,function(){W++}),W},toArray:function(O){return vt(O,function(W){return W})||[]},only:function(O){if(!V(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Te.Component=j,Te.Fragment=t,Te.Profiler=o,Te.PureComponent=fe,Te.StrictMode=s,Te.Suspense=g,Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,Te.act=ne,Te.cloneElement=function(O,W,ve){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Ee=q({},O.props),Ie=O.key,Se=O.ref,Me=O._owner;if(W!=null){if(W.ref!==void 0&&(Se=W.ref,Me=ke.current),W.key!==void 0&&(Ie=""+W.key),O.type&&O.type.defaultProps)var Ve=O.type.defaultProps;for(Ue in W)We.call(W,Ue)&&!k.hasOwnProperty(Ue)&&(Ee[Ue]=W[Ue]===void 0&&Ve!==void 0?Ve[Ue]:W[Ue])}var Ue=arguments.length-2;if(Ue===1)Ee.children=ve;else if(1<Ue){Ve=Array(Ue);for(var jt=0;jt<Ue;jt++)Ve[jt]=arguments[jt+2];Ee.children=Ve}return{$$typeof:r,type:O.type,key:Ie,ref:Se,props:Ee,_owner:Me}},Te.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:u,_context:O},O.Consumer=O},Te.createElement=S,Te.createFactory=function(O){var W=S.bind(null,O);return W.type=O,W},Te.createRef=function(){return{current:null}},Te.forwardRef=function(O){return{$$typeof:m,render:O}},Te.isValidElement=V,Te.lazy=function(O){return{$$typeof:w,_payload:{_status:-1,_result:O},_init:Dt}},Te.memo=function(O,W){return{$$typeof:_,type:O,compare:W===void 0?null:W}},Te.startTransition=function(O){var W=J.transition;J.transition={};try{O()}finally{J.transition=W}},Te.unstable_act=ne,Te.useCallback=function(O,W){return Ye.current.useCallback(O,W)},Te.useContext=function(O){return Ye.current.useContext(O)},Te.useDebugValue=function(){},Te.useDeferredValue=function(O){return Ye.current.useDeferredValue(O)},Te.useEffect=function(O,W){return Ye.current.useEffect(O,W)},Te.useId=function(){return Ye.current.useId()},Te.useImperativeHandle=function(O,W,ve){return Ye.current.useImperativeHandle(O,W,ve)},Te.useInsertionEffect=function(O,W){return Ye.current.useInsertionEffect(O,W)},Te.useLayoutEffect=function(O,W){return Ye.current.useLayoutEffect(O,W)},Te.useMemo=function(O,W){return Ye.current.useMemo(O,W)},Te.useReducer=function(O,W,ve){return Ye.current.useReducer(O,W,ve)},Te.useRef=function(O){return Ye.current.useRef(O)},Te.useState=function(O){return Ye.current.useState(O)},Te.useSyncExternalStore=function(O,W,ve){return Ye.current.useSyncExternalStore(O,W,ve)},Te.useTransition=function(){return Ye.current.useTransition()},Te.version="18.3.1",Te}var ig;function Yf(){return ig||(ig=1,of.exports=Sw()),of.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sg;function Aw(){if(sg)return Ra;sg=1;var r=Yf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,g,_){var w,T={},A=null,U=null;_!==void 0&&(A=""+_),g.key!==void 0&&(A=""+g.key),g.ref!==void 0&&(U=g.ref);for(w in g)s.call(g,w)&&!u.hasOwnProperty(w)&&(T[w]=g[w]);if(m&&m.defaultProps)for(w in g=m.defaultProps,g)T[w]===void 0&&(T[w]=g[w]);return{$$typeof:e,type:m,key:A,ref:U,props:T,_owner:o.current}}return Ra.Fragment=t,Ra.jsx=h,Ra.jsxs=h,Ra}var og;function Rw(){return og||(og=1,sf.exports=Aw()),sf.exports}var $e=Rw(),gt=Yf();const Cw=Iw(gt);var Au={},af={exports:{}},Qt={},lf={exports:{}},uf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ag;function Pw(){return ag||(ag=1,function(r){function e(J,ue){var ne=J.length;J.push(ue);e:for(;0<ne;){var O=ne-1>>>1,W=J[O];if(0<o(W,ue))J[O]=ue,J[ne]=W,ne=O;else break e}}function t(J){return J.length===0?null:J[0]}function s(J){if(J.length===0)return null;var ue=J[0],ne=J.pop();if(ne!==ue){J[0]=ne;e:for(var O=0,W=J.length,ve=W>>>1;O<ve;){var Ee=2*(O+1)-1,Ie=J[Ee],Se=Ee+1,Me=J[Se];if(0>o(Ie,ne))Se<W&&0>o(Me,Ie)?(J[O]=Me,J[Se]=ne,O=Se):(J[O]=Ie,J[Ee]=ne,O=Ee);else if(Se<W&&0>o(Me,ne))J[O]=Me,J[Se]=ne,O=Se;else break e}}return ue}function o(J,ue){var ne=J.sortIndex-ue.sortIndex;return ne!==0?ne:J.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();r.unstable_now=function(){return h.now()-m}}var g=[],_=[],w=1,T=null,A=3,U=!1,q=!1,H=!1,j=typeof setTimeout=="function"?setTimeout:null,ae=typeof clearTimeout=="function"?clearTimeout:null,fe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function we(J){for(var ue=t(_);ue!==null;){if(ue.callback===null)s(_);else if(ue.startTime<=J)s(_),ue.sortIndex=ue.expirationTime,e(g,ue);else break;ue=t(_)}}function Pe(J){if(H=!1,we(J),!q)if(t(g)!==null)q=!0,Dt(We);else{var ue=t(_);ue!==null&&Ye(Pe,ue.startTime-J)}}function We(J,ue){q=!1,H&&(H=!1,ae(S),S=-1),U=!0;var ne=A;try{for(we(ue),T=t(g);T!==null&&(!(T.expirationTime>ue)||J&&!N());){var O=T.callback;if(typeof O=="function"){T.callback=null,A=T.priorityLevel;var W=O(T.expirationTime<=ue);ue=r.unstable_now(),typeof W=="function"?T.callback=W:T===t(g)&&s(g),we(ue)}else s(g);T=t(g)}if(T!==null)var ve=!0;else{var Ee=t(_);Ee!==null&&Ye(Pe,Ee.startTime-ue),ve=!1}return ve}finally{T=null,A=ne,U=!1}}var ke=!1,k=null,S=-1,C=5,V=-1;function N(){return!(r.unstable_now()-V<C)}function x(){if(k!==null){var J=r.unstable_now();V=J;var ue=!0;try{ue=k(!0,J)}finally{ue?R():(ke=!1,k=null)}}else ke=!1}var R;if(typeof fe=="function")R=function(){fe(x)};else if(typeof MessageChannel<"u"){var je=new MessageChannel,vt=je.port2;je.port1.onmessage=x,R=function(){vt.postMessage(null)}}else R=function(){j(x,0)};function Dt(J){k=J,ke||(ke=!0,R())}function Ye(J,ue){S=j(function(){J(r.unstable_now())},ue)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(J){J.callback=null},r.unstable_continueExecution=function(){q||U||(q=!0,Dt(We))},r.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<J?Math.floor(1e3/J):5},r.unstable_getCurrentPriorityLevel=function(){return A},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(J){switch(A){case 1:case 2:case 3:var ue=3;break;default:ue=A}var ne=A;A=ue;try{return J()}finally{A=ne}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(J,ue){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var ne=A;A=J;try{return ue()}finally{A=ne}},r.unstable_scheduleCallback=function(J,ue,ne){var O=r.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?O+ne:O):ne=O,J){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=ne+W,J={id:w++,callback:ue,priorityLevel:J,startTime:ne,expirationTime:W,sortIndex:-1},ne>O?(J.sortIndex=ne,e(_,J),t(g)===null&&J===t(_)&&(H?(ae(S),S=-1):H=!0,Ye(Pe,ne-O))):(J.sortIndex=W,e(g,J),q||U||(q=!0,Dt(We))),J},r.unstable_shouldYield=N,r.unstable_wrapCallback=function(J){var ue=A;return function(){var ne=A;A=ue;try{return J.apply(this,arguments)}finally{A=ne}}}}(uf)),uf}var lg;function kw(){return lg||(lg=1,lf.exports=Pw()),lf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ug;function Nw(){if(ug)return Qt;ug=1;var r=Yf(),e=kw();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},T={};function A(n){return g.call(T,n)?!0:g.call(w,n)?!1:_.test(n)?T[n]=!0:(w[n]=!0,!1)}function U(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function q(n,i,a,c){if(i===null||typeof i>"u"||U(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function H(n,i,a,c,f,d,v){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=d,this.removeEmptyString=v}var j={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){j[n]=new H(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];j[i]=new H(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){j[n]=new H(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){j[n]=new H(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){j[n]=new H(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){j[n]=new H(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){j[n]=new H(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){j[n]=new H(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){j[n]=new H(n,5,!1,n.toLowerCase(),null,!1,!1)});var ae=/[\-:]([a-z])/g;function fe(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(ae,fe);j[i]=new H(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(ae,fe);j[i]=new H(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(ae,fe);j[i]=new H(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){j[n]=new H(n,1,!1,n.toLowerCase(),null,!1,!1)}),j.xlinkHref=new H("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){j[n]=new H(n,1,!1,n.toLowerCase(),null,!0,!0)});function we(n,i,a,c){var f=j.hasOwnProperty(i)?j[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(q(i,a,f,c)&&(a=null),c||f===null?A(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):f.mustUseProperty?n[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,c=f.attributeNamespace,a===null?n.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var Pe=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,We=Symbol.for("react.element"),ke=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),N=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),je=Symbol.for("react.suspense_list"),vt=Symbol.for("react.memo"),Dt=Symbol.for("react.lazy"),Ye=Symbol.for("react.offscreen"),J=Symbol.iterator;function ue(n){return n===null||typeof n!="object"?null:(n=J&&n[J]||n["@@iterator"],typeof n=="function"?n:null)}var ne=Object.assign,O;function W(n){if(O===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+n}var ve=!1;function Ee(n,i){if(!n||ve)return"";ve=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(F){var c=F}Reflect.construct(n,[],i)}else{try{i.call()}catch(F){c=F}n.call(i.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var f=F.stack.split(`
`),d=c.stack.split(`
`),v=f.length-1,I=d.length-1;1<=v&&0<=I&&f[v]!==d[I];)I--;for(;1<=v&&0<=I;v--,I--)if(f[v]!==d[I]){if(v!==1||I!==1)do if(v--,I--,0>I||f[v]!==d[I]){var P=`
`+f[v].replace(" at new "," at ");return n.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",n.displayName)),P}while(1<=v&&0<=I);break}}}finally{ve=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?W(n):""}function Ie(n){switch(n.tag){case 5:return W(n.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 2:case 15:return n=Ee(n.type,!1),n;case 11:return n=Ee(n.type.render,!1),n;case 1:return n=Ee(n.type,!0),n;default:return""}}function Se(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case ke:return"Portal";case C:return"Profiler";case S:return"StrictMode";case R:return"Suspense";case je:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case N:return(n.displayName||"Context")+".Consumer";case V:return(n._context.displayName||"Context")+".Provider";case x:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case vt:return i=n.displayName||null,i!==null?i:Se(n.type)||"Memo";case Dt:i=n._payload,n=n._init;try{return Se(n(i))}catch{}}return null}function Me(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(i);case 8:return i===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ve(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ue(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function jt(n){var i=Ue(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,d=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(v){c=""+v,d.call(this,v)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Es(n){n._valueTracker||(n._valueTracker=jt(n))}function Vo(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ue(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Mr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ws(n,i){var a=i.checked;return ne({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function cl(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Ve(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ts(n,i){i=i.checked,i!=null&&we(n,"checked",i,!1)}function Oi(n,i){Ts(n,i);var a=Ve(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?lt(n,i.type,a):i.hasOwnProperty("defaultValue")&&lt(n,i.type,Ve(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Oo(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function lt(n,i,a){(i!=="number"||Mr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var it=Array.isArray;function Tn(n,i,a,c){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Ve(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function xo(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ne({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Lo(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(it(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Ve(a)}}function hl(n,i){var a=Ve(i.value),c=Ve(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function br(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Mo(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Is(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Mo(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Fr,fl=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,f){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,f)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Fr=Fr||document.createElement("div"),Fr.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Fr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function xi(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ur={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dl=["Webkit","ms","Moz","O"];Object.keys(Ur).forEach(function(n){dl.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ur[i]=Ur[n]})});function zr(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ur.hasOwnProperty(n)&&Ur[n]?(""+i).trim():i+"px"}function Ss(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,f=zr(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,f):n[a]=f}}var bo=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function In(n,i){if(i){if(bo[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function As(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jr=null;function Rs(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ar=null,lr=null,tt=null;function Fo(n){if(n=ha(n)){if(typeof ar!="function")throw Error(t(280));var i=n.stateNode;i&&(i=zl(i),ar(n.stateNode,n.type,i))}}function Br(n){lr?tt?tt.push(n):tt=[n]:lr=n}function $r(){if(lr){var n=lr,i=tt;if(tt=lr=null,Fo(n),i)for(n=0;n<i.length;n++)Fo(i[n])}}function pl(n,i){return n(i)}function ml(){}var Ln=!1;function gl(n,i,a){if(Ln)return n(i,a);Ln=!0;try{return pl(n,i,a)}finally{Ln=!1,(lr!==null||tt!==null)&&(ml(),$r())}}function Li(n,i){var a=n.stateNode;if(a===null)return null;var c=zl(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var qr=!1;if(m)try{var Hr={};Object.defineProperty(Hr,"passive",{get:function(){qr=!0}}),window.addEventListener("test",Hr,Hr),window.removeEventListener("test",Hr,Hr)}catch{qr=!1}function yl(n,i,a,c,f,d,v,I,P){var F=Array.prototype.slice.call(arguments,3);try{i.apply(a,F)}catch(K){this.onError(K)}}var ur=!1,Mn=null,Cs=!1,hn=null,_l={onError:function(n){ur=!0,Mn=n}};function vl(n,i,a,c,f,d,v,I,P){ur=!1,Mn=null,yl.apply(_l,arguments)}function Uo(n,i,a,c,f,d,v,I,P){if(vl.apply(this,arguments),ur){if(ur){var F=Mn;ur=!1,Mn=null}else throw Error(t(198));Cs||(Cs=!0,hn=F)}}function Sn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function zo(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function El(n){if(Sn(n)!==n)throw Error(t(188))}function wl(n){var i=n.alternate;if(!i){if(i=Sn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var f=a.return;if(f===null)break;var d=f.alternate;if(d===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===a)return El(f),n;if(d===c)return El(f),i;d=d.sibling}throw Error(t(188))}if(a.return!==c.return)a=f,c=d;else{for(var v=!1,I=f.child;I;){if(I===a){v=!0,a=f,c=d;break}if(I===c){v=!0,c=f,a=d;break}I=I.sibling}if(!v){for(I=d.child;I;){if(I===a){v=!0,a=d,c=f;break}if(I===c){v=!0,c=d,a=f;break}I=I.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Tl(n){return n=wl(n),n!==null?Mi(n):null}function Mi(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Mi(n);if(i!==null)return i;n=n.sibling}return null}var jo=e.unstable_scheduleCallback,Ps=e.unstable_cancelCallback,bi=e.unstable_shouldYield,cr=e.unstable_requestPaint,Ge=e.unstable_now,Lc=e.unstable_getCurrentPriorityLevel,ks=e.unstable_ImmediatePriority,Bo=e.unstable_UserBlockingPriority,Fi=e.unstable_NormalPriority,$o=e.unstable_LowPriority,Ns=e.unstable_IdlePriority,Ui=null,Zt=null;function Il(n){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(Ui,n,void 0,(n.current.flags&128)===128)}catch{}}var en=Math.clz32?Math.clz32:zi,bn=Math.log,fn=Math.LN2;function zi(n){return n>>>=0,n===0?32:31-(bn(n)/fn|0)|0}var Fn=64,Wr=4194304;function Le(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function hr(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,f=n.suspendedLanes,d=n.pingedLanes,v=a&268435455;if(v!==0){var I=v&~f;I!==0?c=Le(I):(d&=v,d!==0&&(c=Le(d)))}else v=a&~f,v!==0?c=Le(v):d!==0&&(c=Le(d));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,d=i&-i,f>=d||f===16&&(d&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-en(i),f=1<<a,c|=n[a],i&=~f;return c}function ji(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bi(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,d=n.pendingLanes;0<d;){var v=31-en(d),I=1<<v,P=f[v];P===-1?((I&a)===0||(I&c)!==0)&&(f[v]=ji(I,i)):P<=i&&(n.expiredLanes|=I),d&=~I}}function qo(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ho(){var n=Fn;return Fn<<=1,(Fn&4194240)===0&&(Fn=64),n}function Wo(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function $i(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-en(i),n[i]=a}function Mc(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var f=31-en(a),d=1<<f;i[f]=0,c[f]=-1,n[f]=-1,a&=~d}}function Go(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-en(a),f=1<<c;f&i|n[c]&i&&(n[c]|=i),a&=~f}}var Ne=0;function Un(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ko,Ds,Qo,Yo,Xo,zn=!1,Vs=[],jn=null,Bn=null,St=null,qi=new Map,fr=new Map,tn=[],Sl="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gr(n,i){switch(n){case"focusin":case"focusout":jn=null;break;case"dragenter":case"dragleave":Bn=null;break;case"mouseover":case"mouseout":St=null;break;case"pointerover":case"pointerout":qi.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":fr.delete(i.pointerId)}}function An(n,i,a,c,f,d){return n===null||n.nativeEvent!==d?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:d,targetContainers:[f]},i!==null&&(i=ha(i),i!==null&&Ds(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function Al(n,i,a,c,f){switch(i){case"focusin":return jn=An(jn,n,i,a,c,f),!0;case"dragenter":return Bn=An(Bn,n,i,a,c,f),!0;case"mouseover":return St=An(St,n,i,a,c,f),!0;case"pointerover":var d=f.pointerId;return qi.set(d,An(qi.get(d)||null,n,i,a,c,f)),!0;case"gotpointercapture":return d=f.pointerId,fr.set(d,An(fr.get(d)||null,n,i,a,c,f)),!0}return!1}function Os(n){var i=Ki(n.target);if(i!==null){var a=Sn(i);if(a!==null){if(i=a.tag,i===13){if(i=zo(a),i!==null){n.blockedOn=i,Xo(n.priority,function(){Qo(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ze(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=xs(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);jr=c,a.target.dispatchEvent(c),jr=null}else return i=ha(a),i!==null&&Ds(i),n.blockedOn=a,!1;i.shift()}return!0}function Rl(n,i,a){ze(n)&&a.delete(i)}function bc(){zn=!1,jn!==null&&ze(jn)&&(jn=null),Bn!==null&&ze(Bn)&&(Bn=null),St!==null&&ze(St)&&(St=null),qi.forEach(Rl),fr.forEach(Rl)}function Kr(n,i){n.blockedOn===i&&(n.blockedOn=null,zn||(zn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,bc)))}function Qr(n){function i(f){return Kr(f,n)}if(0<Vs.length){Kr(Vs[0],n);for(var a=1;a<Vs.length;a++){var c=Vs[a];c.blockedOn===n&&(c.blockedOn=null)}}for(jn!==null&&Kr(jn,n),Bn!==null&&Kr(Bn,n),St!==null&&Kr(St,n),qi.forEach(i),fr.forEach(i),a=0;a<tn.length;a++)c=tn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<tn.length&&(a=tn[0],a.blockedOn===null);)Os(a),a.blockedOn===null&&tn.shift()}var dr=Pe.ReactCurrentBatchConfig,pr=!0;function $n(n,i,a,c){var f=Ne,d=dr.transition;dr.transition=null;try{Ne=1,Jo(n,i,a,c)}finally{Ne=f,dr.transition=d}}function Cl(n,i,a,c){var f=Ne,d=dr.transition;dr.transition=null;try{Ne=4,Jo(n,i,a,c)}finally{Ne=f,dr.transition=d}}function Jo(n,i,a,c){if(pr){var f=xs(n,i,a,c);if(f===null)Kc(n,i,c,qn,a),Gr(n,c);else if(Al(f,n,i,a,c))c.stopPropagation();else if(Gr(n,c),i&4&&-1<Sl.indexOf(n)){for(;f!==null;){var d=ha(f);if(d!==null&&Ko(d),d=xs(n,i,a,c),d===null&&Kc(n,i,c,qn,a),d===f)break;f=d}f!==null&&c.stopPropagation()}else Kc(n,i,c,null,a)}}var qn=null;function xs(n,i,a,c){if(qn=null,n=Rs(c),n=Ki(n),n!==null)if(i=Sn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=zo(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return qn=n,null}function Ls(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Lc()){case ks:return 1;case Bo:return 4;case Fi:case $o:return 16;case Ns:return 536870912;default:return 16}default:return 16}}var nn=null,Ms=null,mr=null;function Pl(){if(mr)return mr;var n,i=Ms,a=i.length,c,f="value"in nn?nn.value:nn.textContent,d=f.length;for(n=0;n<a&&i[n]===f[n];n++);var v=a-n;for(c=1;c<=v&&i[a-c]===f[d-c];c++);return mr=f.slice(n,1<c?1-c:void 0)}function Hi(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Hn(){return!0}function Zo(){return!1}function Vt(n){function i(a,c,f,d,v){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(d):d[I]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Hn:Zo,this.isPropagationStopped=Zo,this}return ne(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Hn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Hn)},persist:function(){},isPersistent:Hn}),i}var Wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wi=Vt(Wn),Yr=ne({},Wn,{view:0,detail:0}),bs=Vt(Yr),Fs,Us,rn,Gi=ne({},Yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ye,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==rn&&(rn&&n.type==="mousemove"?(Fs=n.screenX-rn.screenX,Us=n.screenY-rn.screenY):Us=Fs=0,rn=n),Fs)},movementY:function(n){return"movementY"in n?n.movementY:Us}}),ea=Vt(Gi),kl=ne({},Gi,{dataTransfer:0}),Nl=Vt(kl),zs=ne({},Yr,{relatedTarget:0}),At=Vt(zs),Dl=ne({},Wn,{animationName:0,elapsedTime:0,pseudoElement:0}),Vl=Vt(Dl),Xr=ne({},Wn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),l=Vt(Xr),p=ne({},Wn,{data:0}),y=Vt(p),E={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},z={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function X(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=z[n])?!!i[n]:!1}function ye(){return X}var st=ne({},Yr,{key:function(n){if(n.key){var i=E[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Hi(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?M[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ye,charCode:function(n){return n.type==="keypress"?Hi(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Hi(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Fe=Vt(st),ut=ne({},Gi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sn=Vt(ut),gr=ne({},Yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ye}),Gn=Vt(gr),Kn=ne({},Wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),js=Vt(Kn),ta=ne({},Gi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),mE=Vt(ta),gE=[9,13,27,32],Fc=m&&"CompositionEvent"in window,na=null;m&&"documentMode"in document&&(na=document.documentMode);var yE=m&&"TextEvent"in window&&!na,Kd=m&&(!Fc||na&&8<na&&11>=na),Qd=" ",Yd=!1;function Xd(n,i){switch(n){case"keyup":return gE.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Bs=!1;function _E(n,i){switch(n){case"compositionend":return Jd(i);case"keypress":return i.which!==32?null:(Yd=!0,Qd);case"textInput":return n=i.data,n===Qd&&Yd?null:n;default:return null}}function vE(n,i){if(Bs)return n==="compositionend"||!Fc&&Xd(n,i)?(n=Pl(),mr=Ms=nn=null,Bs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Kd&&i.locale!=="ko"?null:i.data;default:return null}}var EE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!EE[n.type]:i==="textarea"}function ep(n,i,a,c){Br(c),i=bl(i,"onChange"),0<i.length&&(a=new Wi("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var ra=null,ia=null;function wE(n){_p(n,0)}function Ol(n){var i=Gs(n);if(Vo(i))return n}function TE(n,i){if(n==="change")return i}var tp=!1;if(m){var Uc;if(m){var zc="oninput"in document;if(!zc){var np=document.createElement("div");np.setAttribute("oninput","return;"),zc=typeof np.oninput=="function"}Uc=zc}else Uc=!1;tp=Uc&&(!document.documentMode||9<document.documentMode)}function rp(){ra&&(ra.detachEvent("onpropertychange",ip),ia=ra=null)}function ip(n){if(n.propertyName==="value"&&Ol(ia)){var i=[];ep(i,ia,n,Rs(n)),gl(wE,i)}}function IE(n,i,a){n==="focusin"?(rp(),ra=i,ia=a,ra.attachEvent("onpropertychange",ip)):n==="focusout"&&rp()}function SE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ol(ia)}function AE(n,i){if(n==="click")return Ol(i)}function RE(n,i){if(n==="input"||n==="change")return Ol(i)}function CE(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Rn=typeof Object.is=="function"?Object.is:CE;function sa(n,i){if(Rn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!g.call(i,f)||!Rn(n[f],i[f]))return!1}return!0}function sp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function op(n,i){var a=sp(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=sp(a)}}function ap(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?ap(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function lp(){for(var n=window,i=Mr();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Mr(n.document)}return i}function jc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function PE(n){var i=lp(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&ap(a.ownerDocument.documentElement,a)){if(c!==null&&jc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=a.textContent.length,d=Math.min(c.start,f);c=c.end===void 0?d:Math.min(c.end,f),!n.extend&&d>c&&(f=c,c=d,d=f),f=op(a,d);var v=op(a,c);f&&v&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),d>c?(n.addRange(i),n.extend(v.node,v.offset)):(i.setEnd(v.node,v.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var kE=m&&"documentMode"in document&&11>=document.documentMode,$s=null,Bc=null,oa=null,$c=!1;function up(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;$c||$s==null||$s!==Mr(c)||(c=$s,"selectionStart"in c&&jc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),oa&&sa(oa,c)||(oa=c,c=bl(Bc,"onSelect"),0<c.length&&(i=new Wi("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=$s)))}function xl(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var qs={animationend:xl("Animation","AnimationEnd"),animationiteration:xl("Animation","AnimationIteration"),animationstart:xl("Animation","AnimationStart"),transitionend:xl("Transition","TransitionEnd")},qc={},cp={};m&&(cp=document.createElement("div").style,"AnimationEvent"in window||(delete qs.animationend.animation,delete qs.animationiteration.animation,delete qs.animationstart.animation),"TransitionEvent"in window||delete qs.transitionend.transition);function Ll(n){if(qc[n])return qc[n];if(!qs[n])return n;var i=qs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in cp)return qc[n]=i[a];return n}var hp=Ll("animationend"),fp=Ll("animationiteration"),dp=Ll("animationstart"),pp=Ll("transitionend"),mp=new Map,gp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jr(n,i){mp.set(n,i),u(i,[n])}for(var Hc=0;Hc<gp.length;Hc++){var Wc=gp[Hc],NE=Wc.toLowerCase(),DE=Wc[0].toUpperCase()+Wc.slice(1);Jr(NE,"on"+DE)}Jr(hp,"onAnimationEnd"),Jr(fp,"onAnimationIteration"),Jr(dp,"onAnimationStart"),Jr("dblclick","onDoubleClick"),Jr("focusin","onFocus"),Jr("focusout","onBlur"),Jr(pp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),VE=new Set("cancel close invalid load scroll toggle".split(" ").concat(aa));function yp(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Uo(c,i,void 0,n),n.currentTarget=null}function _p(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],f=c.event;c=c.listeners;e:{var d=void 0;if(i)for(var v=c.length-1;0<=v;v--){var I=c[v],P=I.instance,F=I.currentTarget;if(I=I.listener,P!==d&&f.isPropagationStopped())break e;yp(f,I,F),d=P}else for(v=0;v<c.length;v++){if(I=c[v],P=I.instance,F=I.currentTarget,I=I.listener,P!==d&&f.isPropagationStopped())break e;yp(f,I,F),d=P}}}if(Cs)throw n=hn,Cs=!1,hn=null,n}function Ke(n,i){var a=i[eh];a===void 0&&(a=i[eh]=new Set);var c=n+"__bubble";a.has(c)||(vp(i,n,2,!1),a.add(c))}function Gc(n,i,a){var c=0;i&&(c|=4),vp(a,n,c,i)}var Ml="_reactListening"+Math.random().toString(36).slice(2);function la(n){if(!n[Ml]){n[Ml]=!0,s.forEach(function(a){a!=="selectionchange"&&(VE.has(a)||Gc(a,!1,n),Gc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ml]||(i[Ml]=!0,Gc("selectionchange",!1,i))}}function vp(n,i,a,c){switch(Ls(i)){case 1:var f=$n;break;case 4:f=Cl;break;default:f=Jo}a=f.bind(null,i,a,n),f=void 0,!qr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function Kc(n,i,a,c,f){var d=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var I=c.stateNode.containerInfo;if(I===f||I.nodeType===8&&I.parentNode===f)break;if(v===4)for(v=c.return;v!==null;){var P=v.tag;if((P===3||P===4)&&(P=v.stateNode.containerInfo,P===f||P.nodeType===8&&P.parentNode===f))return;v=v.return}for(;I!==null;){if(v=Ki(I),v===null)return;if(P=v.tag,P===5||P===6){c=d=v;continue e}I=I.parentNode}}c=c.return}gl(function(){var F=d,K=Rs(a),Q=[];e:{var G=mp.get(n);if(G!==void 0){var ee=Wi,ie=n;switch(n){case"keypress":if(Hi(a)===0)break e;case"keydown":case"keyup":ee=Fe;break;case"focusin":ie="focus",ee=At;break;case"focusout":ie="blur",ee=At;break;case"beforeblur":case"afterblur":ee=At;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ee=ea;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ee=Nl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ee=Gn;break;case hp:case fp:case dp:ee=Vl;break;case pp:ee=js;break;case"scroll":ee=bs;break;case"wheel":ee=mE;break;case"copy":case"cut":case"paste":ee=l;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ee=sn}var se=(i&4)!==0,ot=!se&&n==="scroll",L=se?G!==null?G+"Capture":null:G;se=[];for(var D=F,b;D!==null;){b=D;var Y=b.stateNode;if(b.tag===5&&Y!==null&&(b=Y,L!==null&&(Y=Li(D,L),Y!=null&&se.push(ua(D,Y,b)))),ot)break;D=D.return}0<se.length&&(G=new ee(G,ie,null,a,K),Q.push({event:G,listeners:se}))}}if((i&7)===0){e:{if(G=n==="mouseover"||n==="pointerover",ee=n==="mouseout"||n==="pointerout",G&&a!==jr&&(ie=a.relatedTarget||a.fromElement)&&(Ki(ie)||ie[yr]))break e;if((ee||G)&&(G=K.window===K?K:(G=K.ownerDocument)?G.defaultView||G.parentWindow:window,ee?(ie=a.relatedTarget||a.toElement,ee=F,ie=ie?Ki(ie):null,ie!==null&&(ot=Sn(ie),ie!==ot||ie.tag!==5&&ie.tag!==6)&&(ie=null)):(ee=null,ie=F),ee!==ie)){if(se=ea,Y="onMouseLeave",L="onMouseEnter",D="mouse",(n==="pointerout"||n==="pointerover")&&(se=sn,Y="onPointerLeave",L="onPointerEnter",D="pointer"),ot=ee==null?G:Gs(ee),b=ie==null?G:Gs(ie),G=new se(Y,D+"leave",ee,a,K),G.target=ot,G.relatedTarget=b,Y=null,Ki(K)===F&&(se=new se(L,D+"enter",ie,a,K),se.target=b,se.relatedTarget=ot,Y=se),ot=Y,ee&&ie)t:{for(se=ee,L=ie,D=0,b=se;b;b=Hs(b))D++;for(b=0,Y=L;Y;Y=Hs(Y))b++;for(;0<D-b;)se=Hs(se),D--;for(;0<b-D;)L=Hs(L),b--;for(;D--;){if(se===L||L!==null&&se===L.alternate)break t;se=Hs(se),L=Hs(L)}se=null}else se=null;ee!==null&&Ep(Q,G,ee,se,!1),ie!==null&&ot!==null&&Ep(Q,ot,ie,se,!0)}}e:{if(G=F?Gs(F):window,ee=G.nodeName&&G.nodeName.toLowerCase(),ee==="select"||ee==="input"&&G.type==="file")var oe=TE;else if(Zd(G))if(tp)oe=RE;else{oe=SE;var ce=IE}else(ee=G.nodeName)&&ee.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(oe=AE);if(oe&&(oe=oe(n,F))){ep(Q,oe,a,K);break e}ce&&ce(n,G,F),n==="focusout"&&(ce=G._wrapperState)&&ce.controlled&&G.type==="number"&&lt(G,"number",G.value)}switch(ce=F?Gs(F):window,n){case"focusin":(Zd(ce)||ce.contentEditable==="true")&&($s=ce,Bc=F,oa=null);break;case"focusout":oa=Bc=$s=null;break;case"mousedown":$c=!0;break;case"contextmenu":case"mouseup":case"dragend":$c=!1,up(Q,a,K);break;case"selectionchange":if(kE)break;case"keydown":case"keyup":up(Q,a,K)}var he;if(Fc)e:{switch(n){case"compositionstart":var me="onCompositionStart";break e;case"compositionend":me="onCompositionEnd";break e;case"compositionupdate":me="onCompositionUpdate";break e}me=void 0}else Bs?Xd(n,a)&&(me="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(me="onCompositionStart");me&&(Kd&&a.locale!=="ko"&&(Bs||me!=="onCompositionStart"?me==="onCompositionEnd"&&Bs&&(he=Pl()):(nn=K,Ms="value"in nn?nn.value:nn.textContent,Bs=!0)),ce=bl(F,me),0<ce.length&&(me=new y(me,n,null,a,K),Q.push({event:me,listeners:ce}),he?me.data=he:(he=Jd(a),he!==null&&(me.data=he)))),(he=yE?_E(n,a):vE(n,a))&&(F=bl(F,"onBeforeInput"),0<F.length&&(K=new y("onBeforeInput","beforeinput",null,a,K),Q.push({event:K,listeners:F}),K.data=he))}_p(Q,i)})}function ua(n,i,a){return{instance:n,listener:i,currentTarget:a}}function bl(n,i){for(var a=i+"Capture",c=[];n!==null;){var f=n,d=f.stateNode;f.tag===5&&d!==null&&(f=d,d=Li(n,a),d!=null&&c.unshift(ua(n,d,f)),d=Li(n,i),d!=null&&c.push(ua(n,d,f))),n=n.return}return c}function Hs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Ep(n,i,a,c,f){for(var d=i._reactName,v=[];a!==null&&a!==c;){var I=a,P=I.alternate,F=I.stateNode;if(P!==null&&P===c)break;I.tag===5&&F!==null&&(I=F,f?(P=Li(a,d),P!=null&&v.unshift(ua(a,P,I))):f||(P=Li(a,d),P!=null&&v.push(ua(a,P,I)))),a=a.return}v.length!==0&&n.push({event:i,listeners:v})}var OE=/\r\n?/g,xE=/\u0000|\uFFFD/g;function wp(n){return(typeof n=="string"?n:""+n).replace(OE,`
`).replace(xE,"")}function Fl(n,i,a){if(i=wp(i),wp(n)!==i&&a)throw Error(t(425))}function Ul(){}var Qc=null,Yc=null;function Xc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Jc=typeof setTimeout=="function"?setTimeout:void 0,LE=typeof clearTimeout=="function"?clearTimeout:void 0,Tp=typeof Promise=="function"?Promise:void 0,ME=typeof queueMicrotask=="function"?queueMicrotask:typeof Tp<"u"?function(n){return Tp.resolve(null).then(n).catch(bE)}:Jc;function bE(n){setTimeout(function(){throw n})}function Zc(n,i){var a=i,c=0;do{var f=a.nextSibling;if(n.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(c===0){n.removeChild(f),Qr(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=f}while(a);Qr(i)}function Zr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Ip(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Ws=Math.random().toString(36).slice(2),Qn="__reactFiber$"+Ws,ca="__reactProps$"+Ws,yr="__reactContainer$"+Ws,eh="__reactEvents$"+Ws,FE="__reactListeners$"+Ws,UE="__reactHandles$"+Ws;function Ki(n){var i=n[Qn];if(i)return i;for(var a=n.parentNode;a;){if(i=a[yr]||a[Qn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Ip(n);n!==null;){if(a=n[Qn])return a;n=Ip(n)}return i}n=a,a=n.parentNode}return null}function ha(n){return n=n[Qn]||n[yr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Gs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function zl(n){return n[ca]||null}var th=[],Ks=-1;function ei(n){return{current:n}}function Qe(n){0>Ks||(n.current=th[Ks],th[Ks]=null,Ks--)}function Be(n,i){Ks++,th[Ks]=n.current,n.current=i}var ti={},Ot=ei(ti),qt=ei(!1),Qi=ti;function Qs(n,i){var a=n.type.contextTypes;if(!a)return ti;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},d;for(d in a)f[d]=i[d];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function Ht(n){return n=n.childContextTypes,n!=null}function jl(){Qe(qt),Qe(Ot)}function Sp(n,i,a){if(Ot.current!==ti)throw Error(t(168));Be(Ot,i),Be(qt,a)}function Ap(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(t(108,Me(n)||"Unknown",f));return ne({},a,c)}function Bl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ti,Qi=Ot.current,Be(Ot,n),Be(qt,qt.current),!0}function Rp(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Ap(n,i,Qi),c.__reactInternalMemoizedMergedChildContext=n,Qe(qt),Qe(Ot),Be(Ot,n)):Qe(qt),Be(qt,a)}var _r=null,$l=!1,nh=!1;function Cp(n){_r===null?_r=[n]:_r.push(n)}function zE(n){$l=!0,Cp(n)}function ni(){if(!nh&&_r!==null){nh=!0;var n=0,i=Ne;try{var a=_r;for(Ne=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}_r=null,$l=!1}catch(f){throw _r!==null&&(_r=_r.slice(n+1)),jo(ks,ni),f}finally{Ne=i,nh=!1}}return null}var Ys=[],Xs=0,ql=null,Hl=0,dn=[],pn=0,Yi=null,vr=1,Er="";function Xi(n,i){Ys[Xs++]=Hl,Ys[Xs++]=ql,ql=n,Hl=i}function Pp(n,i,a){dn[pn++]=vr,dn[pn++]=Er,dn[pn++]=Yi,Yi=n;var c=vr;n=Er;var f=32-en(c)-1;c&=~(1<<f),a+=1;var d=32-en(i)+f;if(30<d){var v=f-f%5;d=(c&(1<<v)-1).toString(32),c>>=v,f-=v,vr=1<<32-en(i)+f|a<<f|c,Er=d+n}else vr=1<<d|a<<f|c,Er=n}function rh(n){n.return!==null&&(Xi(n,1),Pp(n,1,0))}function ih(n){for(;n===ql;)ql=Ys[--Xs],Ys[Xs]=null,Hl=Ys[--Xs],Ys[Xs]=null;for(;n===Yi;)Yi=dn[--pn],dn[pn]=null,Er=dn[--pn],dn[pn]=null,vr=dn[--pn],dn[pn]=null}var on=null,an=null,Xe=!1,Cn=null;function kp(n,i){var a=_n(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Np(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,on=n,an=Zr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,on=n,an=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Yi!==null?{id:vr,overflow:Er}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=_n(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,on=n,an=null,!0):!1;default:return!1}}function sh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function oh(n){if(Xe){var i=an;if(i){var a=i;if(!Np(n,i)){if(sh(n))throw Error(t(418));i=Zr(a.nextSibling);var c=on;i&&Np(n,i)?kp(c,a):(n.flags=n.flags&-4097|2,Xe=!1,on=n)}}else{if(sh(n))throw Error(t(418));n.flags=n.flags&-4097|2,Xe=!1,on=n}}}function Dp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;on=n}function Wl(n){if(n!==on)return!1;if(!Xe)return Dp(n),Xe=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Xc(n.type,n.memoizedProps)),i&&(i=an)){if(sh(n))throw Vp(),Error(t(418));for(;i;)kp(n,i),i=Zr(i.nextSibling)}if(Dp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){an=Zr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}an=null}}else an=on?Zr(n.stateNode.nextSibling):null;return!0}function Vp(){for(var n=an;n;)n=Zr(n.nextSibling)}function Js(){an=on=null,Xe=!1}function ah(n){Cn===null?Cn=[n]:Cn.push(n)}var jE=Pe.ReactCurrentBatchConfig;function fa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var f=c,d=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===d?i.ref:(i=function(v){var I=f.refs;v===null?delete I[d]:I[d]=v},i._stringRef=d,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Gl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Op(n){var i=n._init;return i(n._payload)}function xp(n){function i(L,D){if(n){var b=L.deletions;b===null?(L.deletions=[D],L.flags|=16):b.push(D)}}function a(L,D){if(!n)return null;for(;D!==null;)i(L,D),D=D.sibling;return null}function c(L,D){for(L=new Map;D!==null;)D.key!==null?L.set(D.key,D):L.set(D.index,D),D=D.sibling;return L}function f(L,D){return L=ci(L,D),L.index=0,L.sibling=null,L}function d(L,D,b){return L.index=b,n?(b=L.alternate,b!==null?(b=b.index,b<D?(L.flags|=2,D):b):(L.flags|=2,D)):(L.flags|=1048576,D)}function v(L){return n&&L.alternate===null&&(L.flags|=2),L}function I(L,D,b,Y){return D===null||D.tag!==6?(D=Jh(b,L.mode,Y),D.return=L,D):(D=f(D,b),D.return=L,D)}function P(L,D,b,Y){var oe=b.type;return oe===k?K(L,D,b.props.children,Y,b.key):D!==null&&(D.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===Dt&&Op(oe)===D.type)?(Y=f(D,b.props),Y.ref=fa(L,D,b),Y.return=L,Y):(Y=yu(b.type,b.key,b.props,null,L.mode,Y),Y.ref=fa(L,D,b),Y.return=L,Y)}function F(L,D,b,Y){return D===null||D.tag!==4||D.stateNode.containerInfo!==b.containerInfo||D.stateNode.implementation!==b.implementation?(D=Zh(b,L.mode,Y),D.return=L,D):(D=f(D,b.children||[]),D.return=L,D)}function K(L,D,b,Y,oe){return D===null||D.tag!==7?(D=ss(b,L.mode,Y,oe),D.return=L,D):(D=f(D,b),D.return=L,D)}function Q(L,D,b){if(typeof D=="string"&&D!==""||typeof D=="number")return D=Jh(""+D,L.mode,b),D.return=L,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case We:return b=yu(D.type,D.key,D.props,null,L.mode,b),b.ref=fa(L,null,D),b.return=L,b;case ke:return D=Zh(D,L.mode,b),D.return=L,D;case Dt:var Y=D._init;return Q(L,Y(D._payload),b)}if(it(D)||ue(D))return D=ss(D,L.mode,b,null),D.return=L,D;Gl(L,D)}return null}function G(L,D,b,Y){var oe=D!==null?D.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return oe!==null?null:I(L,D,""+b,Y);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case We:return b.key===oe?P(L,D,b,Y):null;case ke:return b.key===oe?F(L,D,b,Y):null;case Dt:return oe=b._init,G(L,D,oe(b._payload),Y)}if(it(b)||ue(b))return oe!==null?null:K(L,D,b,Y,null);Gl(L,b)}return null}function ee(L,D,b,Y,oe){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return L=L.get(b)||null,I(D,L,""+Y,oe);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case We:return L=L.get(Y.key===null?b:Y.key)||null,P(D,L,Y,oe);case ke:return L=L.get(Y.key===null?b:Y.key)||null,F(D,L,Y,oe);case Dt:var ce=Y._init;return ee(L,D,b,ce(Y._payload),oe)}if(it(Y)||ue(Y))return L=L.get(b)||null,K(D,L,Y,oe,null);Gl(D,Y)}return null}function ie(L,D,b,Y){for(var oe=null,ce=null,he=D,me=D=0,Tt=null;he!==null&&me<b.length;me++){he.index>me?(Tt=he,he=null):Tt=he.sibling;var xe=G(L,he,b[me],Y);if(xe===null){he===null&&(he=Tt);break}n&&he&&xe.alternate===null&&i(L,he),D=d(xe,D,me),ce===null?oe=xe:ce.sibling=xe,ce=xe,he=Tt}if(me===b.length)return a(L,he),Xe&&Xi(L,me),oe;if(he===null){for(;me<b.length;me++)he=Q(L,b[me],Y),he!==null&&(D=d(he,D,me),ce===null?oe=he:ce.sibling=he,ce=he);return Xe&&Xi(L,me),oe}for(he=c(L,he);me<b.length;me++)Tt=ee(he,L,me,b[me],Y),Tt!==null&&(n&&Tt.alternate!==null&&he.delete(Tt.key===null?me:Tt.key),D=d(Tt,D,me),ce===null?oe=Tt:ce.sibling=Tt,ce=Tt);return n&&he.forEach(function(hi){return i(L,hi)}),Xe&&Xi(L,me),oe}function se(L,D,b,Y){var oe=ue(b);if(typeof oe!="function")throw Error(t(150));if(b=oe.call(b),b==null)throw Error(t(151));for(var ce=oe=null,he=D,me=D=0,Tt=null,xe=b.next();he!==null&&!xe.done;me++,xe=b.next()){he.index>me?(Tt=he,he=null):Tt=he.sibling;var hi=G(L,he,xe.value,Y);if(hi===null){he===null&&(he=Tt);break}n&&he&&hi.alternate===null&&i(L,he),D=d(hi,D,me),ce===null?oe=hi:ce.sibling=hi,ce=hi,he=Tt}if(xe.done)return a(L,he),Xe&&Xi(L,me),oe;if(he===null){for(;!xe.done;me++,xe=b.next())xe=Q(L,xe.value,Y),xe!==null&&(D=d(xe,D,me),ce===null?oe=xe:ce.sibling=xe,ce=xe);return Xe&&Xi(L,me),oe}for(he=c(L,he);!xe.done;me++,xe=b.next())xe=ee(he,L,me,xe.value,Y),xe!==null&&(n&&xe.alternate!==null&&he.delete(xe.key===null?me:xe.key),D=d(xe,D,me),ce===null?oe=xe:ce.sibling=xe,ce=xe);return n&&he.forEach(function(Ew){return i(L,Ew)}),Xe&&Xi(L,me),oe}function ot(L,D,b,Y){if(typeof b=="object"&&b!==null&&b.type===k&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case We:e:{for(var oe=b.key,ce=D;ce!==null;){if(ce.key===oe){if(oe=b.type,oe===k){if(ce.tag===7){a(L,ce.sibling),D=f(ce,b.props.children),D.return=L,L=D;break e}}else if(ce.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===Dt&&Op(oe)===ce.type){a(L,ce.sibling),D=f(ce,b.props),D.ref=fa(L,ce,b),D.return=L,L=D;break e}a(L,ce);break}else i(L,ce);ce=ce.sibling}b.type===k?(D=ss(b.props.children,L.mode,Y,b.key),D.return=L,L=D):(Y=yu(b.type,b.key,b.props,null,L.mode,Y),Y.ref=fa(L,D,b),Y.return=L,L=Y)}return v(L);case ke:e:{for(ce=b.key;D!==null;){if(D.key===ce)if(D.tag===4&&D.stateNode.containerInfo===b.containerInfo&&D.stateNode.implementation===b.implementation){a(L,D.sibling),D=f(D,b.children||[]),D.return=L,L=D;break e}else{a(L,D);break}else i(L,D);D=D.sibling}D=Zh(b,L.mode,Y),D.return=L,L=D}return v(L);case Dt:return ce=b._init,ot(L,D,ce(b._payload),Y)}if(it(b))return ie(L,D,b,Y);if(ue(b))return se(L,D,b,Y);Gl(L,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,D!==null&&D.tag===6?(a(L,D.sibling),D=f(D,b),D.return=L,L=D):(a(L,D),D=Jh(b,L.mode,Y),D.return=L,L=D),v(L)):a(L,D)}return ot}var Zs=xp(!0),Lp=xp(!1),Kl=ei(null),Ql=null,eo=null,lh=null;function uh(){lh=eo=Ql=null}function ch(n){var i=Kl.current;Qe(Kl),n._currentValue=i}function hh(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function to(n,i){Ql=n,lh=eo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Wt=!0),n.firstContext=null)}function mn(n){var i=n._currentValue;if(lh!==n)if(n={context:n,memoizedValue:i,next:null},eo===null){if(Ql===null)throw Error(t(308));eo=n,Ql.dependencies={lanes:0,firstContext:n}}else eo=eo.next=n;return i}var Ji=null;function fh(n){Ji===null?Ji=[n]:Ji.push(n)}function Mp(n,i,a,c){var f=i.interleaved;return f===null?(a.next=a,fh(i)):(a.next=f.next,f.next=a),i.interleaved=a,wr(n,c)}function wr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ri=!1;function dh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Tr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function ii(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Oe&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,wr(n,a)}return f=c.interleaved,f===null?(i.next=i,fh(c)):(i.next=f.next,f.next=i),c.interleaved=i,wr(n,a)}function Yl(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Go(n,a)}}function Fp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};d===null?f=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?f=d=i:d=d.next=i}else f=d=i;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Xl(n,i,a,c){var f=n.updateQueue;ri=!1;var d=f.firstBaseUpdate,v=f.lastBaseUpdate,I=f.shared.pending;if(I!==null){f.shared.pending=null;var P=I,F=P.next;P.next=null,v===null?d=F:v.next=F,v=P;var K=n.alternate;K!==null&&(K=K.updateQueue,I=K.lastBaseUpdate,I!==v&&(I===null?K.firstBaseUpdate=F:I.next=F,K.lastBaseUpdate=P))}if(d!==null){var Q=f.baseState;v=0,K=F=P=null,I=d;do{var G=I.lane,ee=I.eventTime;if((c&G)===G){K!==null&&(K=K.next={eventTime:ee,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var ie=n,se=I;switch(G=i,ee=a,se.tag){case 1:if(ie=se.payload,typeof ie=="function"){Q=ie.call(ee,Q,G);break e}Q=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=se.payload,G=typeof ie=="function"?ie.call(ee,Q,G):ie,G==null)break e;Q=ne({},Q,G);break e;case 2:ri=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,G=f.effects,G===null?f.effects=[I]:G.push(I))}else ee={eventTime:ee,lane:G,tag:I.tag,payload:I.payload,callback:I.callback,next:null},K===null?(F=K=ee,P=Q):K=K.next=ee,v|=G;if(I=I.next,I===null){if(I=f.shared.pending,I===null)break;G=I,I=G.next,G.next=null,f.lastBaseUpdate=G,f.shared.pending=null}}while(!0);if(K===null&&(P=Q),f.baseState=P,f.firstBaseUpdate=F,f.lastBaseUpdate=K,i=f.shared.interleaved,i!==null){f=i;do v|=f.lane,f=f.next;while(f!==i)}else d===null&&(f.shared.lanes=0);ts|=v,n.lanes=v,n.memoizedState=Q}}function Up(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],f=c.callback;if(f!==null){if(c.callback=null,c=a,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var da={},Yn=ei(da),pa=ei(da),ma=ei(da);function Zi(n){if(n===da)throw Error(t(174));return n}function ph(n,i){switch(Be(ma,i),Be(pa,n),Be(Yn,da),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Is(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Is(i,n)}Qe(Yn),Be(Yn,i)}function no(){Qe(Yn),Qe(pa),Qe(ma)}function zp(n){Zi(ma.current);var i=Zi(Yn.current),a=Is(i,n.type);i!==a&&(Be(pa,n),Be(Yn,a))}function mh(n){pa.current===n&&(Qe(Yn),Qe(pa))}var Je=ei(0);function Jl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var gh=[];function yh(){for(var n=0;n<gh.length;n++)gh[n]._workInProgressVersionPrimary=null;gh.length=0}var Zl=Pe.ReactCurrentDispatcher,_h=Pe.ReactCurrentBatchConfig,es=0,Ze=null,pt=null,Et=null,eu=!1,ga=!1,ya=0,BE=0;function xt(){throw Error(t(321))}function vh(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Rn(n[a],i[a]))return!1;return!0}function Eh(n,i,a,c,f,d){if(es=d,Ze=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Zl.current=n===null||n.memoizedState===null?WE:GE,n=a(c,f),ga){d=0;do{if(ga=!1,ya=0,25<=d)throw Error(t(301));d+=1,Et=pt=null,i.updateQueue=null,Zl.current=KE,n=a(c,f)}while(ga)}if(Zl.current=ru,i=pt!==null&&pt.next!==null,es=0,Et=pt=Ze=null,eu=!1,i)throw Error(t(300));return n}function wh(){var n=ya!==0;return ya=0,n}function Xn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?Ze.memoizedState=Et=n:Et=Et.next=n,Et}function gn(){if(pt===null){var n=Ze.alternate;n=n!==null?n.memoizedState:null}else n=pt.next;var i=Et===null?Ze.memoizedState:Et.next;if(i!==null)Et=i,pt=n;else{if(n===null)throw Error(t(310));pt=n,n={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},Et===null?Ze.memoizedState=Et=n:Et=Et.next=n}return Et}function _a(n,i){return typeof i=="function"?i(n):i}function Th(n){var i=gn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=pt,f=c.baseQueue,d=a.pending;if(d!==null){if(f!==null){var v=f.next;f.next=d.next,d.next=v}c.baseQueue=f=d,a.pending=null}if(f!==null){d=f.next,c=c.baseState;var I=v=null,P=null,F=d;do{var K=F.lane;if((es&K)===K)P!==null&&(P=P.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var Q={lane:K,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};P===null?(I=P=Q,v=c):P=P.next=Q,Ze.lanes|=K,ts|=K}F=F.next}while(F!==null&&F!==d);P===null?v=c:P.next=I,Rn(c,i.memoizedState)||(Wt=!0),i.memoizedState=c,i.baseState=v,i.baseQueue=P,a.lastRenderedState=c}if(n=a.interleaved,n!==null){f=n;do d=f.lane,Ze.lanes|=d,ts|=d,f=f.next;while(f!==n)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Ih(n){var i=gn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,f=a.pending,d=i.memoizedState;if(f!==null){a.pending=null;var v=f=f.next;do d=n(d,v.action),v=v.next;while(v!==f);Rn(d,i.memoizedState)||(Wt=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,c]}function jp(){}function Bp(n,i){var a=Ze,c=gn(),f=i(),d=!Rn(c.memoizedState,f);if(d&&(c.memoizedState=f,Wt=!0),c=c.queue,Sh(Hp.bind(null,a,c,n),[n]),c.getSnapshot!==i||d||Et!==null&&Et.memoizedState.tag&1){if(a.flags|=2048,va(9,qp.bind(null,a,c,f,i),void 0,null),wt===null)throw Error(t(349));(es&30)!==0||$p(a,i,f)}return f}function $p(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Ze.updateQueue,i===null?(i={lastEffect:null,stores:null},Ze.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function qp(n,i,a,c){i.value=a,i.getSnapshot=c,Wp(i)&&Gp(n)}function Hp(n,i,a){return a(function(){Wp(i)&&Gp(n)})}function Wp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Rn(n,a)}catch{return!0}}function Gp(n){var i=wr(n,1);i!==null&&Dn(i,n,1,-1)}function Kp(n){var i=Xn();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:n},i.queue=n,n=n.dispatch=HE.bind(null,Ze,n),[i.memoizedState,n]}function va(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Ze.updateQueue,i===null?(i={lastEffect:null,stores:null},Ze.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Qp(){return gn().memoizedState}function tu(n,i,a,c){var f=Xn();Ze.flags|=n,f.memoizedState=va(1|i,a,void 0,c===void 0?null:c)}function nu(n,i,a,c){var f=gn();c=c===void 0?null:c;var d=void 0;if(pt!==null){var v=pt.memoizedState;if(d=v.destroy,c!==null&&vh(c,v.deps)){f.memoizedState=va(i,a,d,c);return}}Ze.flags|=n,f.memoizedState=va(1|i,a,d,c)}function Yp(n,i){return tu(8390656,8,n,i)}function Sh(n,i){return nu(2048,8,n,i)}function Xp(n,i){return nu(4,2,n,i)}function Jp(n,i){return nu(4,4,n,i)}function Zp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function em(n,i,a){return a=a!=null?a.concat([n]):null,nu(4,4,Zp.bind(null,i,n),a)}function Ah(){}function tm(n,i){var a=gn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&vh(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function nm(n,i){var a=gn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&vh(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function rm(n,i,a){return(es&21)===0?(n.baseState&&(n.baseState=!1,Wt=!0),n.memoizedState=a):(Rn(a,i)||(a=Ho(),Ze.lanes|=a,ts|=a,n.baseState=!0),i)}function $E(n,i){var a=Ne;Ne=a!==0&&4>a?a:4,n(!0);var c=_h.transition;_h.transition={};try{n(!1),i()}finally{Ne=a,_h.transition=c}}function im(){return gn().memoizedState}function qE(n,i,a){var c=li(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},sm(n))om(i,a);else if(a=Mp(n,i,a,c),a!==null){var f=$t();Dn(a,n,c,f),am(a,i,c)}}function HE(n,i,a){var c=li(n),f={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(sm(n))om(i,f);else{var d=n.alternate;if(n.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var v=i.lastRenderedState,I=d(v,a);if(f.hasEagerState=!0,f.eagerState=I,Rn(I,v)){var P=i.interleaved;P===null?(f.next=f,fh(i)):(f.next=P.next,P.next=f),i.interleaved=f;return}}catch{}finally{}a=Mp(n,i,f,c),a!==null&&(f=$t(),Dn(a,n,c,f),am(a,i,c))}}function sm(n){var i=n.alternate;return n===Ze||i!==null&&i===Ze}function om(n,i){ga=eu=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function am(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Go(n,a)}}var ru={readContext:mn,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useInsertionEffect:xt,useLayoutEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useMutableSource:xt,useSyncExternalStore:xt,useId:xt,unstable_isNewReconciler:!1},WE={readContext:mn,useCallback:function(n,i){return Xn().memoizedState=[n,i===void 0?null:i],n},useContext:mn,useEffect:Yp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,tu(4194308,4,Zp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return tu(4194308,4,n,i)},useInsertionEffect:function(n,i){return tu(4,2,n,i)},useMemo:function(n,i){var a=Xn();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Xn();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=qE.bind(null,Ze,n),[c.memoizedState,n]},useRef:function(n){var i=Xn();return n={current:n},i.memoizedState=n},useState:Kp,useDebugValue:Ah,useDeferredValue:function(n){return Xn().memoizedState=n},useTransition:function(){var n=Kp(!1),i=n[0];return n=$E.bind(null,n[1]),Xn().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Ze,f=Xn();if(Xe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),wt===null)throw Error(t(349));(es&30)!==0||$p(c,i,a)}f.memoizedState=a;var d={value:a,getSnapshot:i};return f.queue=d,Yp(Hp.bind(null,c,d,n),[n]),c.flags|=2048,va(9,qp.bind(null,c,d,a,i),void 0,null),a},useId:function(){var n=Xn(),i=wt.identifierPrefix;if(Xe){var a=Er,c=vr;a=(c&~(1<<32-en(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=ya++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=BE++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},GE={readContext:mn,useCallback:tm,useContext:mn,useEffect:Sh,useImperativeHandle:em,useInsertionEffect:Xp,useLayoutEffect:Jp,useMemo:nm,useReducer:Th,useRef:Qp,useState:function(){return Th(_a)},useDebugValue:Ah,useDeferredValue:function(n){var i=gn();return rm(i,pt.memoizedState,n)},useTransition:function(){var n=Th(_a)[0],i=gn().memoizedState;return[n,i]},useMutableSource:jp,useSyncExternalStore:Bp,useId:im,unstable_isNewReconciler:!1},KE={readContext:mn,useCallback:tm,useContext:mn,useEffect:Sh,useImperativeHandle:em,useInsertionEffect:Xp,useLayoutEffect:Jp,useMemo:nm,useReducer:Ih,useRef:Qp,useState:function(){return Ih(_a)},useDebugValue:Ah,useDeferredValue:function(n){var i=gn();return pt===null?i.memoizedState=n:rm(i,pt.memoizedState,n)},useTransition:function(){var n=Ih(_a)[0],i=gn().memoizedState;return[n,i]},useMutableSource:jp,useSyncExternalStore:Bp,useId:im,unstable_isNewReconciler:!1};function Pn(n,i){if(n&&n.defaultProps){i=ne({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Rh(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ne({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var iu={isMounted:function(n){return(n=n._reactInternals)?Sn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=$t(),f=li(n),d=Tr(c,f);d.payload=i,a!=null&&(d.callback=a),i=ii(n,d,f),i!==null&&(Dn(i,n,f,c),Yl(i,n,f))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=$t(),f=li(n),d=Tr(c,f);d.tag=1,d.payload=i,a!=null&&(d.callback=a),i=ii(n,d,f),i!==null&&(Dn(i,n,f,c),Yl(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=$t(),c=li(n),f=Tr(a,c);f.tag=2,i!=null&&(f.callback=i),i=ii(n,f,c),i!==null&&(Dn(i,n,c,a),Yl(i,n,c))}};function lm(n,i,a,c,f,d,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,d,v):i.prototype&&i.prototype.isPureReactComponent?!sa(a,c)||!sa(f,d):!0}function um(n,i,a){var c=!1,f=ti,d=i.contextType;return typeof d=="object"&&d!==null?d=mn(d):(f=Ht(i)?Qi:Ot.current,c=i.contextTypes,d=(c=c!=null)?Qs(n,f):ti),i=new i(a,d),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=iu,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=d),i}function cm(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&iu.enqueueReplaceState(i,i.state,null)}function Ch(n,i,a,c){var f=n.stateNode;f.props=a,f.state=n.memoizedState,f.refs={},dh(n);var d=i.contextType;typeof d=="object"&&d!==null?f.context=mn(d):(d=Ht(i)?Qi:Ot.current,f.context=Qs(n,d)),f.state=n.memoizedState,d=i.getDerivedStateFromProps,typeof d=="function"&&(Rh(n,i,d,a),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&iu.enqueueReplaceState(f,f.state,null),Xl(n,a,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function ro(n,i){try{var a="",c=i;do a+=Ie(c),c=c.return;while(c);var f=a}catch(d){f=`
Error generating stack: `+d.message+`
`+d.stack}return{value:n,source:i,stack:f,digest:null}}function Ph(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function kh(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var QE=typeof WeakMap=="function"?WeakMap:Map;function hm(n,i,a){a=Tr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){hu||(hu=!0,qh=c),kh(n,i)},a}function fm(n,i,a){a=Tr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;a.payload=function(){return c(f)},a.callback=function(){kh(n,i)}}var d=n.stateNode;return d!==null&&typeof d.componentDidCatch=="function"&&(a.callback=function(){kh(n,i),typeof c!="function"&&(oi===null?oi=new Set([this]):oi.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})}),a}function dm(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new QE;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(a)||(f.add(a),n=uw.bind(null,n,i,a),i.then(n,n))}function pm(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function mm(n,i,a,c,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Tr(-1,1),i.tag=2,ii(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var YE=Pe.ReactCurrentOwner,Wt=!1;function Bt(n,i,a,c){i.child=n===null?Lp(i,null,a,c):Zs(i,n.child,a,c)}function gm(n,i,a,c,f){a=a.render;var d=i.ref;return to(i,f),c=Eh(n,i,a,c,d,f),a=wh(),n!==null&&!Wt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Ir(n,i,f)):(Xe&&a&&rh(i),i.flags|=1,Bt(n,i,c,f),i.child)}function ym(n,i,a,c,f){if(n===null){var d=a.type;return typeof d=="function"&&!Xh(d)&&d.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=d,_m(n,i,d,c,f)):(n=yu(a.type,null,c,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(d=n.child,(n.lanes&f)===0){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:sa,a(v,c)&&n.ref===i.ref)return Ir(n,i,f)}return i.flags|=1,n=ci(d,c),n.ref=i.ref,n.return=i,i.child=n}function _m(n,i,a,c,f){if(n!==null){var d=n.memoizedProps;if(sa(d,c)&&n.ref===i.ref)if(Wt=!1,i.pendingProps=c=d,(n.lanes&f)!==0)(n.flags&131072)!==0&&(Wt=!0);else return i.lanes=n.lanes,Ir(n,i,f)}return Nh(n,i,a,c,f)}function vm(n,i,a){var c=i.pendingProps,f=c.children,d=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Be(so,ln),ln|=a;else{if((a&1073741824)===0)return n=d!==null?d.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Be(so,ln),ln|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=d!==null?d.baseLanes:a,Be(so,ln),ln|=c}else d!==null?(c=d.baseLanes|a,i.memoizedState=null):c=a,Be(so,ln),ln|=c;return Bt(n,i,f,a),i.child}function Em(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Nh(n,i,a,c,f){var d=Ht(a)?Qi:Ot.current;return d=Qs(i,d),to(i,f),a=Eh(n,i,a,c,d,f),c=wh(),n!==null&&!Wt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Ir(n,i,f)):(Xe&&c&&rh(i),i.flags|=1,Bt(n,i,a,f),i.child)}function wm(n,i,a,c,f){if(Ht(a)){var d=!0;Bl(i)}else d=!1;if(to(i,f),i.stateNode===null)ou(n,i),um(i,a,c),Ch(i,a,c,f),c=!0;else if(n===null){var v=i.stateNode,I=i.memoizedProps;v.props=I;var P=v.context,F=a.contextType;typeof F=="object"&&F!==null?F=mn(F):(F=Ht(a)?Qi:Ot.current,F=Qs(i,F));var K=a.getDerivedStateFromProps,Q=typeof K=="function"||typeof v.getSnapshotBeforeUpdate=="function";Q||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==c||P!==F)&&cm(i,v,c,F),ri=!1;var G=i.memoizedState;v.state=G,Xl(i,c,v,f),P=i.memoizedState,I!==c||G!==P||qt.current||ri?(typeof K=="function"&&(Rh(i,a,K,c),P=i.memoizedState),(I=ri||lm(i,a,I,c,G,P,F))?(Q||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(i.flags|=4194308)):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=P),v.props=c,v.state=P,v.context=F,c=I):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{v=i.stateNode,bp(n,i),I=i.memoizedProps,F=i.type===i.elementType?I:Pn(i.type,I),v.props=F,Q=i.pendingProps,G=v.context,P=a.contextType,typeof P=="object"&&P!==null?P=mn(P):(P=Ht(a)?Qi:Ot.current,P=Qs(i,P));var ee=a.getDerivedStateFromProps;(K=typeof ee=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==Q||G!==P)&&cm(i,v,c,P),ri=!1,G=i.memoizedState,v.state=G,Xl(i,c,v,f);var ie=i.memoizedState;I!==Q||G!==ie||qt.current||ri?(typeof ee=="function"&&(Rh(i,a,ee,c),ie=i.memoizedState),(F=ri||lm(i,a,F,c,G,ie,P)||!1)?(K||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ie,P),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ie,P)),typeof v.componentDidUpdate=="function"&&(i.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof v.componentDidUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ie),v.props=c,v.state=ie,v.context=P,c=F):(typeof v.componentDidUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(i.flags|=1024),c=!1)}return Dh(n,i,a,c,d,f)}function Dh(n,i,a,c,f,d){Em(n,i);var v=(i.flags&128)!==0;if(!c&&!v)return f&&Rp(i,a,!1),Ir(n,i,d);c=i.stateNode,YE.current=i;var I=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&v?(i.child=Zs(i,n.child,null,d),i.child=Zs(i,null,I,d)):Bt(n,i,I,d),i.memoizedState=c.state,f&&Rp(i,a,!0),i.child}function Tm(n){var i=n.stateNode;i.pendingContext?Sp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Sp(n,i.context,!1),ph(n,i.containerInfo)}function Im(n,i,a,c,f){return Js(),ah(f),i.flags|=256,Bt(n,i,a,c),i.child}var Vh={dehydrated:null,treeContext:null,retryLane:0};function Oh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Sm(n,i,a){var c=i.pendingProps,f=Je.current,d=!1,v=(i.flags&128)!==0,I;if((I=v)||(I=n!==null&&n.memoizedState===null?!1:(f&2)!==0),I?(d=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Be(Je,f&1),n===null)return oh(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(v=c.children,n=c.fallback,d?(c=i.mode,d=i.child,v={mode:"hidden",children:v},(c&1)===0&&d!==null?(d.childLanes=0,d.pendingProps=v):d=_u(v,c,0,null),n=ss(n,c,a,null),d.return=i,n.return=i,d.sibling=n,i.child=d,i.child.memoizedState=Oh(a),i.memoizedState=Vh,n):xh(i,v));if(f=n.memoizedState,f!==null&&(I=f.dehydrated,I!==null))return XE(n,i,v,c,I,f,a);if(d){d=c.fallback,v=i.mode,f=n.child,I=f.sibling;var P={mode:"hidden",children:c.children};return(v&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=P,i.deletions=null):(c=ci(f,P),c.subtreeFlags=f.subtreeFlags&14680064),I!==null?d=ci(I,d):(d=ss(d,v,a,null),d.flags|=2),d.return=i,c.return=i,c.sibling=d,i.child=c,c=d,d=i.child,v=n.child.memoizedState,v=v===null?Oh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},d.memoizedState=v,d.childLanes=n.childLanes&~a,i.memoizedState=Vh,c}return d=n.child,n=d.sibling,c=ci(d,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function xh(n,i){return i=_u({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function su(n,i,a,c){return c!==null&&ah(c),Zs(i,n.child,null,a),n=xh(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function XE(n,i,a,c,f,d,v){if(a)return i.flags&256?(i.flags&=-257,c=Ph(Error(t(422))),su(n,i,v,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(d=c.fallback,f=i.mode,c=_u({mode:"visible",children:c.children},f,0,null),d=ss(d,f,v,null),d.flags|=2,c.return=i,d.return=i,c.sibling=d,i.child=c,(i.mode&1)!==0&&Zs(i,n.child,null,v),i.child.memoizedState=Oh(v),i.memoizedState=Vh,d);if((i.mode&1)===0)return su(n,i,v,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var I=c.dgst;return c=I,d=Error(t(419)),c=Ph(d,c,void 0),su(n,i,v,c)}if(I=(v&n.childLanes)!==0,Wt||I){if(c=wt,c!==null){switch(v&-v){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|v))!==0?0:f,f!==0&&f!==d.retryLane&&(d.retryLane=f,wr(n,f),Dn(c,n,f,-1))}return Yh(),c=Ph(Error(t(421))),su(n,i,v,c)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=cw.bind(null,n),f._reactRetry=i,null):(n=d.treeContext,an=Zr(f.nextSibling),on=i,Xe=!0,Cn=null,n!==null&&(dn[pn++]=vr,dn[pn++]=Er,dn[pn++]=Yi,vr=n.id,Er=n.overflow,Yi=i),i=xh(i,c.children),i.flags|=4096,i)}function Am(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),hh(n.return,i,a)}function Lh(n,i,a,c,f){var d=n.memoizedState;d===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=c,d.tail=a,d.tailMode=f)}function Rm(n,i,a){var c=i.pendingProps,f=c.revealOrder,d=c.tail;if(Bt(n,i,c.children,a),c=Je.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Am(n,a,i);else if(n.tag===19)Am(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Be(Je,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&Jl(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),Lh(i,!1,f,a,d);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&Jl(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}Lh(i,!0,a,null,d);break;case"together":Lh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ou(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Ir(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),ts|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=ci(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=ci(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function JE(n,i,a){switch(i.tag){case 3:Tm(i),Js();break;case 5:zp(i);break;case 1:Ht(i.type)&&Bl(i);break;case 4:ph(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;Be(Kl,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Be(Je,Je.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Sm(n,i,a):(Be(Je,Je.current&1),n=Ir(n,i,a),n!==null?n.sibling:null);Be(Je,Je.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Rm(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Be(Je,Je.current),c)break;return null;case 22:case 23:return i.lanes=0,vm(n,i,a)}return Ir(n,i,a)}var Cm,Mh,Pm,km;Cm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Mh=function(){},Pm=function(n,i,a,c){var f=n.memoizedProps;if(f!==c){n=i.stateNode,Zi(Yn.current);var d=null;switch(a){case"input":f=ws(n,f),c=ws(n,c),d=[];break;case"select":f=ne({},f,{value:void 0}),c=ne({},c,{value:void 0}),d=[];break;case"textarea":f=xo(n,f),c=xo(n,c),d=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Ul)}In(a,c);var v;a=null;for(F in f)if(!c.hasOwnProperty(F)&&f.hasOwnProperty(F)&&f[F]!=null)if(F==="style"){var I=f[F];for(v in I)I.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(o.hasOwnProperty(F)?d||(d=[]):(d=d||[]).push(F,null));for(F in c){var P=c[F];if(I=f!=null?f[F]:void 0,c.hasOwnProperty(F)&&P!==I&&(P!=null||I!=null))if(F==="style")if(I){for(v in I)!I.hasOwnProperty(v)||P&&P.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in P)P.hasOwnProperty(v)&&I[v]!==P[v]&&(a||(a={}),a[v]=P[v])}else a||(d||(d=[]),d.push(F,a)),a=P;else F==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,I=I?I.__html:void 0,P!=null&&I!==P&&(d=d||[]).push(F,P)):F==="children"?typeof P!="string"&&typeof P!="number"||(d=d||[]).push(F,""+P):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(o.hasOwnProperty(F)?(P!=null&&F==="onScroll"&&Ke("scroll",n),d||I===P||(d=[])):(d=d||[]).push(F,P))}a&&(d=d||[]).push("style",a);var F=d;(i.updateQueue=F)&&(i.flags|=4)}},km=function(n,i,a,c){a!==c&&(i.flags|=4)};function Ea(n,i){if(!Xe)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Lt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function ZE(n,i,a){var c=i.pendingProps;switch(ih(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(i),null;case 1:return Ht(i.type)&&jl(),Lt(i),null;case 3:return c=i.stateNode,no(),Qe(qt),Qe(Ot),yh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Wl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Cn!==null&&(Gh(Cn),Cn=null))),Mh(n,i),Lt(i),null;case 5:mh(i);var f=Zi(ma.current);if(a=i.type,n!==null&&i.stateNode!=null)Pm(n,i,a,c,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Lt(i),null}if(n=Zi(Yn.current),Wl(i)){c=i.stateNode,a=i.type;var d=i.memoizedProps;switch(c[Qn]=i,c[ca]=d,n=(i.mode&1)!==0,a){case"dialog":Ke("cancel",c),Ke("close",c);break;case"iframe":case"object":case"embed":Ke("load",c);break;case"video":case"audio":for(f=0;f<aa.length;f++)Ke(aa[f],c);break;case"source":Ke("error",c);break;case"img":case"image":case"link":Ke("error",c),Ke("load",c);break;case"details":Ke("toggle",c);break;case"input":cl(c,d),Ke("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!d.multiple},Ke("invalid",c);break;case"textarea":Lo(c,d),Ke("invalid",c)}In(a,d),f=null;for(var v in d)if(d.hasOwnProperty(v)){var I=d[v];v==="children"?typeof I=="string"?c.textContent!==I&&(d.suppressHydrationWarning!==!0&&Fl(c.textContent,I,n),f=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(d.suppressHydrationWarning!==!0&&Fl(c.textContent,I,n),f=["children",""+I]):o.hasOwnProperty(v)&&I!=null&&v==="onScroll"&&Ke("scroll",c)}switch(a){case"input":Es(c),Oo(c,d,!0);break;case"textarea":Es(c),br(c);break;case"select":case"option":break;default:typeof d.onClick=="function"&&(c.onclick=Ul)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{v=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Mo(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[Qn]=i,n[ca]=c,Cm(n,i,!1,!1),i.stateNode=n;e:{switch(v=As(a,c),a){case"dialog":Ke("cancel",n),Ke("close",n),f=c;break;case"iframe":case"object":case"embed":Ke("load",n),f=c;break;case"video":case"audio":for(f=0;f<aa.length;f++)Ke(aa[f],n);f=c;break;case"source":Ke("error",n),f=c;break;case"img":case"image":case"link":Ke("error",n),Ke("load",n),f=c;break;case"details":Ke("toggle",n),f=c;break;case"input":cl(n,c),f=ws(n,c),Ke("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=ne({},c,{value:void 0}),Ke("invalid",n);break;case"textarea":Lo(n,c),f=xo(n,c),Ke("invalid",n);break;default:f=c}In(a,f),I=f;for(d in I)if(I.hasOwnProperty(d)){var P=I[d];d==="style"?Ss(n,P):d==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&fl(n,P)):d==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&xi(n,P):typeof P=="number"&&xi(n,""+P):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(o.hasOwnProperty(d)?P!=null&&d==="onScroll"&&Ke("scroll",n):P!=null&&we(n,d,P,v))}switch(a){case"input":Es(n),Oo(n,c,!1);break;case"textarea":Es(n),br(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Ve(c.value));break;case"select":n.multiple=!!c.multiple,d=c.value,d!=null?Tn(n,!!c.multiple,d,!1):c.defaultValue!=null&&Tn(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=Ul)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Lt(i),null;case 6:if(n&&i.stateNode!=null)km(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Zi(ma.current),Zi(Yn.current),Wl(i)){if(c=i.stateNode,a=i.memoizedProps,c[Qn]=i,(d=c.nodeValue!==a)&&(n=on,n!==null))switch(n.tag){case 3:Fl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Fl(c.nodeValue,a,(n.mode&1)!==0)}d&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Qn]=i,i.stateNode=c}return Lt(i),null;case 13:if(Qe(Je),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Xe&&an!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Vp(),Js(),i.flags|=98560,d=!1;else if(d=Wl(i),c!==null&&c.dehydrated!==null){if(n===null){if(!d)throw Error(t(318));if(d=i.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(t(317));d[Qn]=i}else Js(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Lt(i),d=!1}else Cn!==null&&(Gh(Cn),Cn=null),d=!0;if(!d)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Je.current&1)!==0?mt===0&&(mt=3):Yh())),i.updateQueue!==null&&(i.flags|=4),Lt(i),null);case 4:return no(),Mh(n,i),n===null&&la(i.stateNode.containerInfo),Lt(i),null;case 10:return ch(i.type._context),Lt(i),null;case 17:return Ht(i.type)&&jl(),Lt(i),null;case 19:if(Qe(Je),d=i.memoizedState,d===null)return Lt(i),null;if(c=(i.flags&128)!==0,v=d.rendering,v===null)if(c)Ea(d,!1);else{if(mt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(v=Jl(n),v!==null){for(i.flags|=128,Ea(d,!1),c=v.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)d=a,n=c,d.flags&=14680066,v=d.alternate,v===null?(d.childLanes=0,d.lanes=n,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=v.childLanes,d.lanes=v.lanes,d.child=v.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=v.memoizedProps,d.memoizedState=v.memoizedState,d.updateQueue=v.updateQueue,d.type=v.type,n=v.dependencies,d.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Be(Je,Je.current&1|2),i.child}n=n.sibling}d.tail!==null&&Ge()>oo&&(i.flags|=128,c=!0,Ea(d,!1),i.lanes=4194304)}else{if(!c)if(n=Jl(v),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ea(d,!0),d.tail===null&&d.tailMode==="hidden"&&!v.alternate&&!Xe)return Lt(i),null}else 2*Ge()-d.renderingStartTime>oo&&a!==1073741824&&(i.flags|=128,c=!0,Ea(d,!1),i.lanes=4194304);d.isBackwards?(v.sibling=i.child,i.child=v):(a=d.last,a!==null?a.sibling=v:i.child=v,d.last=v)}return d.tail!==null?(i=d.tail,d.rendering=i,d.tail=i.sibling,d.renderingStartTime=Ge(),i.sibling=null,a=Je.current,Be(Je,c?a&1|2:a&1),i):(Lt(i),null);case 22:case 23:return Qh(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(ln&1073741824)!==0&&(Lt(i),i.subtreeFlags&6&&(i.flags|=8192)):Lt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function ew(n,i){switch(ih(i),i.tag){case 1:return Ht(i.type)&&jl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return no(),Qe(qt),Qe(Ot),yh(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return mh(i),null;case 13:if(Qe(Je),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Js()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Qe(Je),null;case 4:return no(),null;case 10:return ch(i.type._context),null;case 22:case 23:return Qh(),null;case 24:return null;default:return null}}var au=!1,Mt=!1,tw=typeof WeakSet=="function"?WeakSet:Set,re=null;function io(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){nt(n,i,c)}else a.current=null}function bh(n,i,a){try{a()}catch(c){nt(n,i,c)}}var Nm=!1;function nw(n,i){if(Qc=pr,n=lp(),jc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,d=c.focusNode;c=c.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var v=0,I=-1,P=-1,F=0,K=0,Q=n,G=null;t:for(;;){for(var ee;Q!==a||f!==0&&Q.nodeType!==3||(I=v+f),Q!==d||c!==0&&Q.nodeType!==3||(P=v+c),Q.nodeType===3&&(v+=Q.nodeValue.length),(ee=Q.firstChild)!==null;)G=Q,Q=ee;for(;;){if(Q===n)break t;if(G===a&&++F===f&&(I=v),G===d&&++K===c&&(P=v),(ee=Q.nextSibling)!==null)break;Q=G,G=Q.parentNode}Q=ee}a=I===-1||P===-1?null:{start:I,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Yc={focusedElem:n,selectionRange:a},pr=!1,re=i;re!==null;)if(i=re,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,re=n;else for(;re!==null;){i=re;try{var ie=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ie!==null){var se=ie.memoizedProps,ot=ie.memoizedState,L=i.stateNode,D=L.getSnapshotBeforeUpdate(i.elementType===i.type?se:Pn(i.type,se),ot);L.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var b=i.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Y){nt(i,i.return,Y)}if(n=i.sibling,n!==null){n.return=i.return,re=n;break}re=i.return}return ie=Nm,Nm=!1,ie}function wa(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var d=f.destroy;f.destroy=void 0,d!==void 0&&bh(i,a,d)}f=f.next}while(f!==c)}}function lu(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Fh(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Dm(n){var i=n.alternate;i!==null&&(n.alternate=null,Dm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Qn],delete i[ca],delete i[eh],delete i[FE],delete i[UE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Vm(n){return n.tag===5||n.tag===3||n.tag===4}function Om(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Vm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Uh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Ul));else if(c!==4&&(n=n.child,n!==null))for(Uh(n,i,a),n=n.sibling;n!==null;)Uh(n,i,a),n=n.sibling}function zh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(zh(n,i,a),n=n.sibling;n!==null;)zh(n,i,a),n=n.sibling}var Rt=null,kn=!1;function si(n,i,a){for(a=a.child;a!==null;)xm(n,i,a),a=a.sibling}function xm(n,i,a){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(Ui,a)}catch{}switch(a.tag){case 5:Mt||io(a,i);case 6:var c=Rt,f=kn;Rt=null,si(n,i,a),Rt=c,kn=f,Rt!==null&&(kn?(n=Rt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Rt.removeChild(a.stateNode));break;case 18:Rt!==null&&(kn?(n=Rt,a=a.stateNode,n.nodeType===8?Zc(n.parentNode,a):n.nodeType===1&&Zc(n,a),Qr(n)):Zc(Rt,a.stateNode));break;case 4:c=Rt,f=kn,Rt=a.stateNode.containerInfo,kn=!0,si(n,i,a),Rt=c,kn=f;break;case 0:case 11:case 14:case 15:if(!Mt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var d=f,v=d.destroy;d=d.tag,v!==void 0&&((d&2)!==0||(d&4)!==0)&&bh(a,i,v),f=f.next}while(f!==c)}si(n,i,a);break;case 1:if(!Mt&&(io(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){nt(a,i,I)}si(n,i,a);break;case 21:si(n,i,a);break;case 22:a.mode&1?(Mt=(c=Mt)||a.memoizedState!==null,si(n,i,a),Mt=c):si(n,i,a);break;default:si(n,i,a)}}function Lm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new tw),i.forEach(function(c){var f=hw.bind(null,n,c);a.has(c)||(a.add(c),c.then(f,f))})}}function Nn(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c];try{var d=n,v=i,I=v;e:for(;I!==null;){switch(I.tag){case 5:Rt=I.stateNode,kn=!1;break e;case 3:Rt=I.stateNode.containerInfo,kn=!0;break e;case 4:Rt=I.stateNode.containerInfo,kn=!0;break e}I=I.return}if(Rt===null)throw Error(t(160));xm(d,v,f),Rt=null,kn=!1;var P=f.alternate;P!==null&&(P.return=null),f.return=null}catch(F){nt(f,i,F)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Mm(i,n),i=i.sibling}function Mm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Nn(i,n),Jn(n),c&4){try{wa(3,n,n.return),lu(3,n)}catch(se){nt(n,n.return,se)}try{wa(5,n,n.return)}catch(se){nt(n,n.return,se)}}break;case 1:Nn(i,n),Jn(n),c&512&&a!==null&&io(a,a.return);break;case 5:if(Nn(i,n),Jn(n),c&512&&a!==null&&io(a,a.return),n.flags&32){var f=n.stateNode;try{xi(f,"")}catch(se){nt(n,n.return,se)}}if(c&4&&(f=n.stateNode,f!=null)){var d=n.memoizedProps,v=a!==null?a.memoizedProps:d,I=n.type,P=n.updateQueue;if(n.updateQueue=null,P!==null)try{I==="input"&&d.type==="radio"&&d.name!=null&&Ts(f,d),As(I,v);var F=As(I,d);for(v=0;v<P.length;v+=2){var K=P[v],Q=P[v+1];K==="style"?Ss(f,Q):K==="dangerouslySetInnerHTML"?fl(f,Q):K==="children"?xi(f,Q):we(f,K,Q,F)}switch(I){case"input":Oi(f,d);break;case"textarea":hl(f,d);break;case"select":var G=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!d.multiple;var ee=d.value;ee!=null?Tn(f,!!d.multiple,ee,!1):G!==!!d.multiple&&(d.defaultValue!=null?Tn(f,!!d.multiple,d.defaultValue,!0):Tn(f,!!d.multiple,d.multiple?[]:"",!1))}f[ca]=d}catch(se){nt(n,n.return,se)}}break;case 6:if(Nn(i,n),Jn(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,d=n.memoizedProps;try{f.nodeValue=d}catch(se){nt(n,n.return,se)}}break;case 3:if(Nn(i,n),Jn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Qr(i.containerInfo)}catch(se){nt(n,n.return,se)}break;case 4:Nn(i,n),Jn(n);break;case 13:Nn(i,n),Jn(n),f=n.child,f.flags&8192&&(d=f.memoizedState!==null,f.stateNode.isHidden=d,!d||f.alternate!==null&&f.alternate.memoizedState!==null||($h=Ge())),c&4&&Lm(n);break;case 22:if(K=a!==null&&a.memoizedState!==null,n.mode&1?(Mt=(F=Mt)||K,Nn(i,n),Mt=F):Nn(i,n),Jn(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!K&&(n.mode&1)!==0)for(re=n,K=n.child;K!==null;){for(Q=re=K;re!==null;){switch(G=re,ee=G.child,G.tag){case 0:case 11:case 14:case 15:wa(4,G,G.return);break;case 1:io(G,G.return);var ie=G.stateNode;if(typeof ie.componentWillUnmount=="function"){c=G,a=G.return;try{i=c,ie.props=i.memoizedProps,ie.state=i.memoizedState,ie.componentWillUnmount()}catch(se){nt(c,a,se)}}break;case 5:io(G,G.return);break;case 22:if(G.memoizedState!==null){Um(Q);continue}}ee!==null?(ee.return=G,re=ee):Um(Q)}K=K.sibling}e:for(K=null,Q=n;;){if(Q.tag===5){if(K===null){K=Q;try{f=Q.stateNode,F?(d=f.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none"):(I=Q.stateNode,P=Q.memoizedProps.style,v=P!=null&&P.hasOwnProperty("display")?P.display:null,I.style.display=zr("display",v))}catch(se){nt(n,n.return,se)}}}else if(Q.tag===6){if(K===null)try{Q.stateNode.nodeValue=F?"":Q.memoizedProps}catch(se){nt(n,n.return,se)}}else if((Q.tag!==22&&Q.tag!==23||Q.memoizedState===null||Q===n)&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===n)break e;for(;Q.sibling===null;){if(Q.return===null||Q.return===n)break e;K===Q&&(K=null),Q=Q.return}K===Q&&(K=null),Q.sibling.return=Q.return,Q=Q.sibling}}break;case 19:Nn(i,n),Jn(n),c&4&&Lm(n);break;case 21:break;default:Nn(i,n),Jn(n)}}function Jn(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Vm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(xi(f,""),c.flags&=-33);var d=Om(n);zh(n,d,f);break;case 3:case 4:var v=c.stateNode.containerInfo,I=Om(n);Uh(n,I,v);break;default:throw Error(t(161))}}catch(P){nt(n,n.return,P)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function rw(n,i,a){re=n,bm(n)}function bm(n,i,a){for(var c=(n.mode&1)!==0;re!==null;){var f=re,d=f.child;if(f.tag===22&&c){var v=f.memoizedState!==null||au;if(!v){var I=f.alternate,P=I!==null&&I.memoizedState!==null||Mt;I=au;var F=Mt;if(au=v,(Mt=P)&&!F)for(re=f;re!==null;)v=re,P=v.child,v.tag===22&&v.memoizedState!==null?zm(f):P!==null?(P.return=v,re=P):zm(f);for(;d!==null;)re=d,bm(d),d=d.sibling;re=f,au=I,Mt=F}Fm(n)}else(f.subtreeFlags&8772)!==0&&d!==null?(d.return=f,re=d):Fm(n)}}function Fm(n){for(;re!==null;){var i=re;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Mt||lu(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Mt)if(a===null)c.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:Pn(i.type,a.memoizedProps);c.componentDidUpdate(f,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var d=i.updateQueue;d!==null&&Up(i,d,c);break;case 3:var v=i.updateQueue;if(v!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Up(i,v,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var P=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var F=i.alternate;if(F!==null){var K=F.memoizedState;if(K!==null){var Q=K.dehydrated;Q!==null&&Qr(Q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mt||i.flags&512&&Fh(i)}catch(G){nt(i,i.return,G)}}if(i===n){re=null;break}if(a=i.sibling,a!==null){a.return=i.return,re=a;break}re=i.return}}function Um(n){for(;re!==null;){var i=re;if(i===n){re=null;break}var a=i.sibling;if(a!==null){a.return=i.return,re=a;break}re=i.return}}function zm(n){for(;re!==null;){var i=re;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{lu(4,i)}catch(P){nt(i,a,P)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(P){nt(i,f,P)}}var d=i.return;try{Fh(i)}catch(P){nt(i,d,P)}break;case 5:var v=i.return;try{Fh(i)}catch(P){nt(i,v,P)}}}catch(P){nt(i,i.return,P)}if(i===n){re=null;break}var I=i.sibling;if(I!==null){I.return=i.return,re=I;break}re=i.return}}var iw=Math.ceil,uu=Pe.ReactCurrentDispatcher,jh=Pe.ReactCurrentOwner,yn=Pe.ReactCurrentBatchConfig,Oe=0,wt=null,ct=null,Ct=0,ln=0,so=ei(0),mt=0,Ta=null,ts=0,cu=0,Bh=0,Ia=null,Gt=null,$h=0,oo=1/0,Sr=null,hu=!1,qh=null,oi=null,fu=!1,ai=null,du=0,Sa=0,Hh=null,pu=-1,mu=0;function $t(){return(Oe&6)!==0?Ge():pu!==-1?pu:pu=Ge()}function li(n){return(n.mode&1)===0?1:(Oe&2)!==0&&Ct!==0?Ct&-Ct:jE.transition!==null?(mu===0&&(mu=Ho()),mu):(n=Ne,n!==0||(n=window.event,n=n===void 0?16:Ls(n.type)),n)}function Dn(n,i,a,c){if(50<Sa)throw Sa=0,Hh=null,Error(t(185));$i(n,a,c),((Oe&2)===0||n!==wt)&&(n===wt&&((Oe&2)===0&&(cu|=a),mt===4&&ui(n,Ct)),Kt(n,c),a===1&&Oe===0&&(i.mode&1)===0&&(oo=Ge()+500,$l&&ni()))}function Kt(n,i){var a=n.callbackNode;Bi(n,i);var c=hr(n,n===wt?Ct:0);if(c===0)a!==null&&Ps(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Ps(a),i===1)n.tag===0?zE(Bm.bind(null,n)):Cp(Bm.bind(null,n)),ME(function(){(Oe&6)===0&&ni()}),a=null;else{switch(Un(c)){case 1:a=ks;break;case 4:a=Bo;break;case 16:a=Fi;break;case 536870912:a=Ns;break;default:a=Fi}a=Ym(a,jm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function jm(n,i){if(pu=-1,mu=0,(Oe&6)!==0)throw Error(t(327));var a=n.callbackNode;if(ao()&&n.callbackNode!==a)return null;var c=hr(n,n===wt?Ct:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=gu(n,c);else{i=c;var f=Oe;Oe|=2;var d=qm();(wt!==n||Ct!==i)&&(Sr=null,oo=Ge()+500,rs(n,i));do try{aw();break}catch(I){$m(n,I)}while(!0);uh(),uu.current=d,Oe=f,ct!==null?i=0:(wt=null,Ct=0,i=mt)}if(i!==0){if(i===2&&(f=qo(n),f!==0&&(c=f,i=Wh(n,f))),i===1)throw a=Ta,rs(n,0),ui(n,c),Kt(n,Ge()),a;if(i===6)ui(n,c);else{if(f=n.current.alternate,(c&30)===0&&!sw(f)&&(i=gu(n,c),i===2&&(d=qo(n),d!==0&&(c=d,i=Wh(n,d))),i===1))throw a=Ta,rs(n,0),ui(n,c),Kt(n,Ge()),a;switch(n.finishedWork=f,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:is(n,Gt,Sr);break;case 3:if(ui(n,c),(c&130023424)===c&&(i=$h+500-Ge(),10<i)){if(hr(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){$t(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=Jc(is.bind(null,n,Gt,Sr),i);break}is(n,Gt,Sr);break;case 4:if(ui(n,c),(c&4194240)===c)break;for(i=n.eventTimes,f=-1;0<c;){var v=31-en(c);d=1<<v,v=i[v],v>f&&(f=v),c&=~d}if(c=f,c=Ge()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*iw(c/1960))-c,10<c){n.timeoutHandle=Jc(is.bind(null,n,Gt,Sr),c);break}is(n,Gt,Sr);break;case 5:is(n,Gt,Sr);break;default:throw Error(t(329))}}}return Kt(n,Ge()),n.callbackNode===a?jm.bind(null,n):null}function Wh(n,i){var a=Ia;return n.current.memoizedState.isDehydrated&&(rs(n,i).flags|=256),n=gu(n,i),n!==2&&(i=Gt,Gt=a,i!==null&&Gh(i)),n}function Gh(n){Gt===null?Gt=n:Gt.push.apply(Gt,n)}function sw(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var f=a[c],d=f.getSnapshot;f=f.value;try{if(!Rn(d(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ui(n,i){for(i&=~Bh,i&=~cu,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-en(i),c=1<<a;n[a]=-1,i&=~c}}function Bm(n){if((Oe&6)!==0)throw Error(t(327));ao();var i=hr(n,0);if((i&1)===0)return Kt(n,Ge()),null;var a=gu(n,i);if(n.tag!==0&&a===2){var c=qo(n);c!==0&&(i=c,a=Wh(n,c))}if(a===1)throw a=Ta,rs(n,0),ui(n,i),Kt(n,Ge()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,is(n,Gt,Sr),Kt(n,Ge()),null}function Kh(n,i){var a=Oe;Oe|=1;try{return n(i)}finally{Oe=a,Oe===0&&(oo=Ge()+500,$l&&ni())}}function ns(n){ai!==null&&ai.tag===0&&(Oe&6)===0&&ao();var i=Oe;Oe|=1;var a=yn.transition,c=Ne;try{if(yn.transition=null,Ne=1,n)return n()}finally{Ne=c,yn.transition=a,Oe=i,(Oe&6)===0&&ni()}}function Qh(){ln=so.current,Qe(so)}function rs(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,LE(a)),ct!==null)for(a=ct.return;a!==null;){var c=a;switch(ih(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&jl();break;case 3:no(),Qe(qt),Qe(Ot),yh();break;case 5:mh(c);break;case 4:no();break;case 13:Qe(Je);break;case 19:Qe(Je);break;case 10:ch(c.type._context);break;case 22:case 23:Qh()}a=a.return}if(wt=n,ct=n=ci(n.current,null),Ct=ln=i,mt=0,Ta=null,Bh=cu=ts=0,Gt=Ia=null,Ji!==null){for(i=0;i<Ji.length;i++)if(a=Ji[i],c=a.interleaved,c!==null){a.interleaved=null;var f=c.next,d=a.pending;if(d!==null){var v=d.next;d.next=f,c.next=v}a.pending=c}Ji=null}return n}function $m(n,i){do{var a=ct;try{if(uh(),Zl.current=ru,eu){for(var c=Ze.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}eu=!1}if(es=0,Et=pt=Ze=null,ga=!1,ya=0,jh.current=null,a===null||a.return===null){mt=1,Ta=i,ct=null;break}e:{var d=n,v=a.return,I=a,P=i;if(i=Ct,I.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var F=P,K=I,Q=K.tag;if((K.mode&1)===0&&(Q===0||Q===11||Q===15)){var G=K.alternate;G?(K.updateQueue=G.updateQueue,K.memoizedState=G.memoizedState,K.lanes=G.lanes):(K.updateQueue=null,K.memoizedState=null)}var ee=pm(v);if(ee!==null){ee.flags&=-257,mm(ee,v,I,d,i),ee.mode&1&&dm(d,F,i),i=ee,P=F;var ie=i.updateQueue;if(ie===null){var se=new Set;se.add(P),i.updateQueue=se}else ie.add(P);break e}else{if((i&1)===0){dm(d,F,i),Yh();break e}P=Error(t(426))}}else if(Xe&&I.mode&1){var ot=pm(v);if(ot!==null){(ot.flags&65536)===0&&(ot.flags|=256),mm(ot,v,I,d,i),ah(ro(P,I));break e}}d=P=ro(P,I),mt!==4&&(mt=2),Ia===null?Ia=[d]:Ia.push(d),d=v;do{switch(d.tag){case 3:d.flags|=65536,i&=-i,d.lanes|=i;var L=hm(d,P,i);Fp(d,L);break e;case 1:I=P;var D=d.type,b=d.stateNode;if((d.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(oi===null||!oi.has(b)))){d.flags|=65536,i&=-i,d.lanes|=i;var Y=fm(d,I,i);Fp(d,Y);break e}}d=d.return}while(d!==null)}Wm(a)}catch(oe){i=oe,ct===a&&a!==null&&(ct=a=a.return);continue}break}while(!0)}function qm(){var n=uu.current;return uu.current=ru,n===null?ru:n}function Yh(){(mt===0||mt===3||mt===2)&&(mt=4),wt===null||(ts&268435455)===0&&(cu&268435455)===0||ui(wt,Ct)}function gu(n,i){var a=Oe;Oe|=2;var c=qm();(wt!==n||Ct!==i)&&(Sr=null,rs(n,i));do try{ow();break}catch(f){$m(n,f)}while(!0);if(uh(),Oe=a,uu.current=c,ct!==null)throw Error(t(261));return wt=null,Ct=0,mt}function ow(){for(;ct!==null;)Hm(ct)}function aw(){for(;ct!==null&&!bi();)Hm(ct)}function Hm(n){var i=Qm(n.alternate,n,ln);n.memoizedProps=n.pendingProps,i===null?Wm(n):ct=i,jh.current=null}function Wm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=ZE(a,i,ln),a!==null){ct=a;return}}else{if(a=ew(a,i),a!==null){a.flags&=32767,ct=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{mt=6,ct=null;return}}if(i=i.sibling,i!==null){ct=i;return}ct=i=n}while(i!==null);mt===0&&(mt=5)}function is(n,i,a){var c=Ne,f=yn.transition;try{yn.transition=null,Ne=1,lw(n,i,a,c)}finally{yn.transition=f,Ne=c}return null}function lw(n,i,a,c){do ao();while(ai!==null);if((Oe&6)!==0)throw Error(t(327));a=n.finishedWork;var f=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var d=a.lanes|a.childLanes;if(Mc(n,d),n===wt&&(ct=wt=null,Ct=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||fu||(fu=!0,Ym(Fi,function(){return ao(),null})),d=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||d){d=yn.transition,yn.transition=null;var v=Ne;Ne=1;var I=Oe;Oe|=4,jh.current=null,nw(n,a),Mm(a,n),PE(Yc),pr=!!Qc,Yc=Qc=null,n.current=a,rw(a),cr(),Oe=I,Ne=v,yn.transition=d}else n.current=a;if(fu&&(fu=!1,ai=n,du=f),d=n.pendingLanes,d===0&&(oi=null),Il(a.stateNode),Kt(n,Ge()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)f=i[a],c(f.value,{componentStack:f.stack,digest:f.digest});if(hu)throw hu=!1,n=qh,qh=null,n;return(du&1)!==0&&n.tag!==0&&ao(),d=n.pendingLanes,(d&1)!==0?n===Hh?Sa++:(Sa=0,Hh=n):Sa=0,ni(),null}function ao(){if(ai!==null){var n=Un(du),i=yn.transition,a=Ne;try{if(yn.transition=null,Ne=16>n?16:n,ai===null)var c=!1;else{if(n=ai,ai=null,du=0,(Oe&6)!==0)throw Error(t(331));var f=Oe;for(Oe|=4,re=n.current;re!==null;){var d=re,v=d.child;if((re.flags&16)!==0){var I=d.deletions;if(I!==null){for(var P=0;P<I.length;P++){var F=I[P];for(re=F;re!==null;){var K=re;switch(K.tag){case 0:case 11:case 15:wa(8,K,d)}var Q=K.child;if(Q!==null)Q.return=K,re=Q;else for(;re!==null;){K=re;var G=K.sibling,ee=K.return;if(Dm(K),K===F){re=null;break}if(G!==null){G.return=ee,re=G;break}re=ee}}}var ie=d.alternate;if(ie!==null){var se=ie.child;if(se!==null){ie.child=null;do{var ot=se.sibling;se.sibling=null,se=ot}while(se!==null)}}re=d}}if((d.subtreeFlags&2064)!==0&&v!==null)v.return=d,re=v;else e:for(;re!==null;){if(d=re,(d.flags&2048)!==0)switch(d.tag){case 0:case 11:case 15:wa(9,d,d.return)}var L=d.sibling;if(L!==null){L.return=d.return,re=L;break e}re=d.return}}var D=n.current;for(re=D;re!==null;){v=re;var b=v.child;if((v.subtreeFlags&2064)!==0&&b!==null)b.return=v,re=b;else e:for(v=D;re!==null;){if(I=re,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:lu(9,I)}}catch(oe){nt(I,I.return,oe)}if(I===v){re=null;break e}var Y=I.sibling;if(Y!==null){Y.return=I.return,re=Y;break e}re=I.return}}if(Oe=f,ni(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(Ui,n)}catch{}c=!0}return c}finally{Ne=a,yn.transition=i}}return!1}function Gm(n,i,a){i=ro(a,i),i=hm(n,i,1),n=ii(n,i,1),i=$t(),n!==null&&($i(n,1,i),Kt(n,i))}function nt(n,i,a){if(n.tag===3)Gm(n,n,a);else for(;i!==null;){if(i.tag===3){Gm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(oi===null||!oi.has(c))){n=ro(a,n),n=fm(i,n,1),i=ii(i,n,1),n=$t(),i!==null&&($i(i,1,n),Kt(i,n));break}}i=i.return}}function uw(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=$t(),n.pingedLanes|=n.suspendedLanes&a,wt===n&&(Ct&a)===a&&(mt===4||mt===3&&(Ct&130023424)===Ct&&500>Ge()-$h?rs(n,0):Bh|=a),Kt(n,i)}function Km(n,i){i===0&&((n.mode&1)===0?i=1:(i=Wr,Wr<<=1,(Wr&130023424)===0&&(Wr=4194304)));var a=$t();n=wr(n,i),n!==null&&($i(n,i,a),Kt(n,a))}function cw(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Km(n,a)}function hw(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Km(n,a)}var Qm;Qm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||qt.current)Wt=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Wt=!1,JE(n,i,a);Wt=(n.flags&131072)!==0}else Wt=!1,Xe&&(i.flags&1048576)!==0&&Pp(i,Hl,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;ou(n,i),n=i.pendingProps;var f=Qs(i,Ot.current);to(i,a),f=Eh(null,i,c,n,f,a);var d=wh();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Ht(c)?(d=!0,Bl(i)):d=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,dh(i),f.updater=iu,i.stateNode=f,f._reactInternals=i,Ch(i,c,n,a),i=Dh(null,i,c,!0,d,a)):(i.tag=0,Xe&&d&&rh(i),Bt(null,i,f,a),i=i.child),i;case 16:c=i.elementType;e:{switch(ou(n,i),n=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=dw(c),n=Pn(c,n),f){case 0:i=Nh(null,i,c,n,a);break e;case 1:i=wm(null,i,c,n,a);break e;case 11:i=gm(null,i,c,n,a);break e;case 14:i=ym(null,i,c,Pn(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Pn(c,f),Nh(n,i,c,f,a);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Pn(c,f),wm(n,i,c,f,a);case 3:e:{if(Tm(i),n===null)throw Error(t(387));c=i.pendingProps,d=i.memoizedState,f=d.element,bp(n,i),Xl(i,c,null,a);var v=i.memoizedState;if(c=v.element,d.isDehydrated)if(d={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){f=ro(Error(t(423)),i),i=Im(n,i,c,a,f);break e}else if(c!==f){f=ro(Error(t(424)),i),i=Im(n,i,c,a,f);break e}else for(an=Zr(i.stateNode.containerInfo.firstChild),on=i,Xe=!0,Cn=null,a=Lp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Js(),c===f){i=Ir(n,i,a);break e}Bt(n,i,c,a)}i=i.child}return i;case 5:return zp(i),n===null&&oh(i),c=i.type,f=i.pendingProps,d=n!==null?n.memoizedProps:null,v=f.children,Xc(c,f)?v=null:d!==null&&Xc(c,d)&&(i.flags|=32),Em(n,i),Bt(n,i,v,a),i.child;case 6:return n===null&&oh(i),null;case 13:return Sm(n,i,a);case 4:return ph(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Zs(i,null,c,a):Bt(n,i,c,a),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Pn(c,f),gm(n,i,c,f,a);case 7:return Bt(n,i,i.pendingProps,a),i.child;case 8:return Bt(n,i,i.pendingProps.children,a),i.child;case 12:return Bt(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,d=i.memoizedProps,v=f.value,Be(Kl,c._currentValue),c._currentValue=v,d!==null)if(Rn(d.value,v)){if(d.children===f.children&&!qt.current){i=Ir(n,i,a);break e}}else for(d=i.child,d!==null&&(d.return=i);d!==null;){var I=d.dependencies;if(I!==null){v=d.child;for(var P=I.firstContext;P!==null;){if(P.context===c){if(d.tag===1){P=Tr(-1,a&-a),P.tag=2;var F=d.updateQueue;if(F!==null){F=F.shared;var K=F.pending;K===null?P.next=P:(P.next=K.next,K.next=P),F.pending=P}}d.lanes|=a,P=d.alternate,P!==null&&(P.lanes|=a),hh(d.return,a,i),I.lanes|=a;break}P=P.next}}else if(d.tag===10)v=d.type===i.type?null:d.child;else if(d.tag===18){if(v=d.return,v===null)throw Error(t(341));v.lanes|=a,I=v.alternate,I!==null&&(I.lanes|=a),hh(v,a,i),v=d.sibling}else v=d.child;if(v!==null)v.return=d;else for(v=d;v!==null;){if(v===i){v=null;break}if(d=v.sibling,d!==null){d.return=v.return,v=d;break}v=v.return}d=v}Bt(n,i,f.children,a),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,to(i,a),f=mn(f),c=c(f),i.flags|=1,Bt(n,i,c,a),i.child;case 14:return c=i.type,f=Pn(c,i.pendingProps),f=Pn(c.type,f),ym(n,i,c,f,a);case 15:return _m(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Pn(c,f),ou(n,i),i.tag=1,Ht(c)?(n=!0,Bl(i)):n=!1,to(i,a),um(i,c,f),Ch(i,c,f,a),Dh(null,i,c,!0,n,a);case 19:return Rm(n,i,a);case 22:return vm(n,i,a)}throw Error(t(156,i.tag))};function Ym(n,i){return jo(n,i)}function fw(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(n,i,a,c){return new fw(n,i,a,c)}function Xh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function dw(n){if(typeof n=="function")return Xh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===x)return 11;if(n===vt)return 14}return 2}function ci(n,i){var a=n.alternate;return a===null?(a=_n(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function yu(n,i,a,c,f,d){var v=2;if(c=n,typeof n=="function")Xh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case k:return ss(a.children,f,d,i);case S:v=8,f|=8;break;case C:return n=_n(12,a,i,f|2),n.elementType=C,n.lanes=d,n;case R:return n=_n(13,a,i,f),n.elementType=R,n.lanes=d,n;case je:return n=_n(19,a,i,f),n.elementType=je,n.lanes=d,n;case Ye:return _u(a,f,d,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case V:v=10;break e;case N:v=9;break e;case x:v=11;break e;case vt:v=14;break e;case Dt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=_n(v,a,i,f),i.elementType=n,i.type=c,i.lanes=d,i}function ss(n,i,a,c){return n=_n(7,n,c,i),n.lanes=a,n}function _u(n,i,a,c){return n=_n(22,n,c,i),n.elementType=Ye,n.lanes=a,n.stateNode={isHidden:!1},n}function Jh(n,i,a){return n=_n(6,n,null,i),n.lanes=a,n}function Zh(n,i,a){return i=_n(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function pw(n,i,a,c,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wo(0),this.expirationTimes=Wo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wo(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function ef(n,i,a,c,f,d,v,I,P){return n=new pw(n,i,a,I,P),i===1?(i=1,d===!0&&(i|=8)):i=0,d=_n(3,null,null,i),n.current=d,d.stateNode=n,d.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},dh(d),n}function mw(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ke,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Xm(n){if(!n)return ti;n=n._reactInternals;e:{if(Sn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Ht(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Ht(a))return Ap(n,a,i)}return i}function Jm(n,i,a,c,f,d,v,I,P){return n=ef(a,c,!0,n,f,d,v,I,P),n.context=Xm(null),a=n.current,c=$t(),f=li(a),d=Tr(c,f),d.callback=i??null,ii(a,d,f),n.current.lanes=f,$i(n,f,c),Kt(n,c),n}function vu(n,i,a,c){var f=i.current,d=$t(),v=li(f);return a=Xm(a),i.context===null?i.context=a:i.pendingContext=a,i=Tr(d,v),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=ii(f,i,v),n!==null&&(Dn(n,f,v,d),Yl(n,f,v)),v}function Eu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Zm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function tf(n,i){Zm(n,i),(n=n.alternate)&&Zm(n,i)}function gw(){return null}var eg=typeof reportError=="function"?reportError:function(n){console.error(n)};function nf(n){this._internalRoot=n}wu.prototype.render=nf.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));vu(n,i,null,null)},wu.prototype.unmount=nf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;ns(function(){vu(null,n,null,null)}),i[yr]=null}};function wu(n){this._internalRoot=n}wu.prototype.unstable_scheduleHydration=function(n){if(n){var i=Yo();n={blockedOn:null,target:n,priority:i};for(var a=0;a<tn.length&&i!==0&&i<tn[a].priority;a++);tn.splice(a,0,n),a===0&&Os(n)}};function rf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Tu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function tg(){}function yw(n,i,a,c,f){if(f){if(typeof c=="function"){var d=c;c=function(){var F=Eu(v);d.call(F)}}var v=Jm(i,c,n,0,null,!1,!1,"",tg);return n._reactRootContainer=v,n[yr]=v.current,la(n.nodeType===8?n.parentNode:n),ns(),v}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var I=c;c=function(){var F=Eu(P);I.call(F)}}var P=ef(n,0,!1,null,null,!1,!1,"",tg);return n._reactRootContainer=P,n[yr]=P.current,la(n.nodeType===8?n.parentNode:n),ns(function(){vu(i,P,a,c)}),P}function Iu(n,i,a,c,f){var d=a._reactRootContainer;if(d){var v=d;if(typeof f=="function"){var I=f;f=function(){var P=Eu(v);I.call(P)}}vu(i,v,n,f)}else v=yw(a,i,n,f,c);return Eu(v)}Ko=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Le(i.pendingLanes);a!==0&&(Go(i,a|1),Kt(i,Ge()),(Oe&6)===0&&(oo=Ge()+500,ni()))}break;case 13:ns(function(){var c=wr(n,1);if(c!==null){var f=$t();Dn(c,n,1,f)}}),tf(n,1)}},Ds=function(n){if(n.tag===13){var i=wr(n,134217728);if(i!==null){var a=$t();Dn(i,n,134217728,a)}tf(n,134217728)}},Qo=function(n){if(n.tag===13){var i=li(n),a=wr(n,i);if(a!==null){var c=$t();Dn(a,n,i,c)}tf(n,i)}},Yo=function(){return Ne},Xo=function(n,i){var a=Ne;try{return Ne=n,i()}finally{Ne=a}},ar=function(n,i,a){switch(i){case"input":if(Oi(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var f=zl(c);if(!f)throw Error(t(90));Vo(c),Oi(c,f)}}}break;case"textarea":hl(n,a);break;case"select":i=a.value,i!=null&&Tn(n,!!a.multiple,i,!1)}},pl=Kh,ml=ns;var _w={usingClientEntryPoint:!1,Events:[ha,Gs,zl,Br,$r,Kh]},Aa={findFiberByHostInstance:Ki,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vw={bundleType:Aa.bundleType,version:Aa.version,rendererPackageName:Aa.rendererPackageName,rendererConfig:Aa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pe.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Tl(n),n===null?null:n.stateNode},findFiberByHostInstance:Aa.findFiberByHostInstance||gw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Su=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Su.isDisabled&&Su.supportsFiber)try{Ui=Su.inject(vw),Zt=Su}catch{}}return Qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_w,Qt.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rf(i))throw Error(t(200));return mw(n,i,null,a)},Qt.createRoot=function(n,i){if(!rf(n))throw Error(t(299));var a=!1,c="",f=eg;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=ef(n,1,!1,null,null,a,!1,c,f),n[yr]=i.current,la(n.nodeType===8?n.parentNode:n),new nf(i)},Qt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Tl(i),n=n===null?null:n.stateNode,n},Qt.flushSync=function(n){return ns(n)},Qt.hydrate=function(n,i,a){if(!Tu(i))throw Error(t(200));return Iu(null,n,i,!0,a)},Qt.hydrateRoot=function(n,i,a){if(!rf(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,f=!1,d="",v=eg;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(d=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),i=Jm(i,null,n,1,a??null,f,!1,d,v),n[yr]=i.current,la(n),c)for(n=0;n<c.length;n++)a=c[n],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new wu(i)},Qt.render=function(n,i,a){if(!Tu(i))throw Error(t(200));return Iu(null,n,i,!1,a)},Qt.unmountComponentAtNode=function(n){if(!Tu(n))throw Error(t(40));return n._reactRootContainer?(ns(function(){Iu(null,null,n,!1,function(){n._reactRootContainer=null,n[yr]=null})}),!0):!1},Qt.unstable_batchedUpdates=Kh,Qt.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Tu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Iu(n,i,a,!1,c)},Qt.version="18.3.1-next-f1338f8080-20240426",Qt}var cg;function Dw(){if(cg)return af.exports;cg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),af.exports=Nw(),af.exports}var hg;function Vw(){if(hg)return Au;hg=1;var r=Dw();return Au.createRoot=r.createRoot,Au.hydrateRoot=r.hydrateRoot,Au}var Ow=Vw();const xw=r=>r instanceof Error?r.message+`
`+r.stack:JSON.stringify(r,null,2);class Lw extends Cw.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}render(){return this.state.hasError?$e.jsxs("div",{className:"p-4 border border-red-500 rounded",children:[$e.jsx("h2",{className:"text-red-500",children:"Something went wrong."}),$e.jsx("pre",{className:"mt-2 text-sm",children:xw(this.state.error)})]}):this.props.children}}const Mw="modulepreload",bw=function(r){return"/"+r},fg={},Xf=function(e,t,s){let o=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),m=(h==null?void 0:h.nonce)||(h==null?void 0:h.getAttribute("nonce"));o=Promise.allSettled(t.map(g=>{if(g=bw(g),g in fg)return;fg[g]=!0;const _=g.endsWith(".css"),w=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${g}"]${w}`))return;const T=document.createElement("link");if(T.rel=_?"stylesheet":Mw,_||(T.as="script"),T.crossOrigin="",T.href=g,m&&T.setAttribute("nonce",m),document.head.appendChild(T),_)return new Promise((A,U)=>{T.addEventListener("load",A),T.addEventListener("error",()=>U(new Error(`Unable to preload CSS for ${g}`)))})}))}function u(h){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=h,window.dispatchEvent(m),!m.defaultPrevented)throw h}return o.then(h=>{for(const m of h||[])m.status==="rejected"&&u(m.reason);return e().catch(u)})};/**
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
 */const Fw=()=>{};var dg={};/**
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
 */const Hy=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},Uw=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[t++],h=r[t++],m=r[t++],g=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},Wy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],h=o+1<r.length,m=h?r[o+1]:0,g=o+2<r.length,_=g?r[o+2]:0,w=u>>2,T=(u&3)<<4|m>>4;let A=(m&15)<<2|_>>6,U=_&63;g||(U=64,h||(A=64)),s.push(t[w],t[T],t[A],t[U])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Hy(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Uw(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=t[r.charAt(o++)],m=o<r.length?t[r.charAt(o)]:0;++o;const _=o<r.length?t[r.charAt(o)]:64;++o;const T=o<r.length?t[r.charAt(o)]:64;if(++o,u==null||m==null||_==null||T==null)throw new zw;const A=u<<2|m>>4;if(s.push(A),_!==64){const U=m<<4&240|_>>2;if(s.push(U),T!==64){const q=_<<6&192|T;s.push(q)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class zw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jw=function(r){const e=Hy(r);return Wy.encodeByteArray(e,!0)},qu=function(r){return jw(r).replace(/\./g,"")},Gy=function(r){try{return Wy.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Bw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $w=()=>Bw().__FIREBASE_DEFAULTS__,qw=()=>{if(typeof process>"u"||typeof dg>"u")return;const r=dg.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Hw=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Gy(r[1]);return e&&JSON.parse(e)},hc=()=>{try{return Fw()||$w()||qw()||Hw()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Ky=r=>{var e,t;return(t=(e=hc())==null?void 0:e.emulatorHosts)==null?void 0:t[r]},Ww=r=>{const e=Ky(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Qy=()=>{var r;return(r=hc())==null?void 0:r.config},Yy=r=>{var e;return(e=hc())==null?void 0:e[`_${r}`]};/**
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
 */class Gw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Kw(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...r};return[qu(JSON.stringify(t)),qu(JSON.stringify(h)),""].join(".")}const Ma={};function Qw(){const r={prod:[],emulator:[]};for(const e of Object.keys(Ma))Ma[e]?r.emulator.push(e):r.prod.push(e);return r}function Yw(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let pg=!1;function Jy(r,e){if(typeof window>"u"||typeof document>"u"||!Ao(window.location.host)||Ma[r]===e||Ma[r]||pg)return;Ma[r]=e;function t(A){return`__firebase__banner__${A}`}const s="__firebase__banner",u=Qw().prod.length>0;function h(){const A=document.getElementById(s);A&&A.remove()}function m(A){A.style.display="flex",A.style.background="#7faaf0",A.style.position="fixed",A.style.bottom="5px",A.style.left="5px",A.style.padding=".5em",A.style.borderRadius="5px",A.style.alignItems="center"}function g(A,U){A.setAttribute("width","24"),A.setAttribute("id",U),A.setAttribute("height","24"),A.setAttribute("viewBox","0 0 24 24"),A.setAttribute("fill","none"),A.style.marginLeft="-6px"}function _(){const A=document.createElement("span");return A.style.cursor="pointer",A.style.marginLeft="16px",A.style.fontSize="24px",A.innerHTML=" &times;",A.onclick=()=>{pg=!0,h()},A}function w(A,U){A.setAttribute("id",U),A.innerText="Learn more",A.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",A.setAttribute("target","__blank"),A.style.paddingLeft="5px",A.style.textDecoration="underline"}function T(){const A=Yw(s),U=t("text"),q=document.getElementById(U)||document.createElement("span"),H=t("learnmore"),j=document.getElementById(H)||document.createElement("a"),ae=t("preprendIcon"),fe=document.getElementById(ae)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(A.created){const we=A.element;m(we),w(j,H);const Pe=_();g(fe,ae),we.append(fe,q,j,Pe),document.body.appendChild(we)}u?(q.innerText="Preview backend disconnected.",fe.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,q.innerText="Preview backend running in this workspace."),q.setAttribute("id",U)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
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
 */function zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zt())}function Jw(){var e;const r=(e=hc())==null?void 0:e.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Zw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function eT(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function tT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nT(){const r=zt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function rT(){return!Jw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function iT(){try{return typeof indexedDB=="object"}catch{return!1}}function sT(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)==null?void 0:u.message)||"")}}catch(t){e(t)}})}/**
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
 */const oT="FirebaseError";class Lr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=oT,Object.setPrototypeOf(this,Lr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xa.prototype.create)}}class Xa{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?aT(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new Lr(o,m,s)}}function aT(r,e){return r.replace(lT,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const lT=/\{\$([^}]+)}/g;function uT(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function hs(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=r[o],h=e[o];if(mg(u)&&mg(h)){if(!hs(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function mg(r){return r!==null&&typeof r=="object"}/**
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
 */function Ja(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function ka(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function Na(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function cT(r,e){const t=new hT(r,e);return t.subscribe.bind(t)}class hT{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");fT(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=cf),o.error===void 0&&(o.error=cf),o.complete===void 0&&(o.complete=cf);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fT(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function cf(){}/**
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
 */function _t(r){return r&&r._delegate?r._delegate:r}class fs{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class dT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Gw;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mT(e))try{this.getOrInitializeService({instanceIdentifier:os})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=os){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=os){return this.instances.has(e)}getOptions(e=os){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:pT(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=os){return this.component?this.component.multipleInstances?e:os:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pT(r){return r===os?void 0:r}function mT(r){return r.instantiationMode==="EAGER"}/**
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
 */class gT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new dT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ae;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ae||(Ae={}));const yT={debug:Ae.DEBUG,verbose:Ae.VERBOSE,info:Ae.INFO,warn:Ae.WARN,error:Ae.ERROR,silent:Ae.SILENT},_T=Ae.INFO,vT={[Ae.DEBUG]:"log",[Ae.VERBOSE]:"log",[Ae.INFO]:"info",[Ae.WARN]:"warn",[Ae.ERROR]:"error"},ET=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=vT[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jf{constructor(e){this.name=e,this._logLevel=_T,this._logHandler=ET,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ae.DEBUG,...e),this._logHandler(this,Ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ae.VERBOSE,...e),this._logHandler(this,Ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ae.INFO,...e),this._logHandler(this,Ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ae.WARN,...e),this._logHandler(this,Ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ae.ERROR,...e),this._logHandler(this,Ae.ERROR,...e)}}const wT=(r,e)=>e.some(t=>r instanceof t);let gg,yg;function TT(){return gg||(gg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function IT(){return yg||(yg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zy=new WeakMap,If=new WeakMap,e_=new WeakMap,hf=new WeakMap,Zf=new WeakMap;function ST(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",h)},u=()=>{t(yi(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Zy.set(t,r)}).catch(()=>{}),Zf.set(e,r),e}function AT(r){if(If.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",h),r.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",h),r.addEventListener("abort",h)});If.set(r,e)}let Sf={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return If.get(r);if(e==="objectStoreNames")return r.objectStoreNames||e_.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return yi(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function RT(r){Sf=r(Sf)}function CT(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(ff(this),e,...t);return e_.set(s,e.sort?e.sort():[e]),yi(s)}:IT().includes(r)?function(...e){return r.apply(ff(this),e),yi(Zy.get(this))}:function(...e){return yi(r.apply(ff(this),e))}}function PT(r){return typeof r=="function"?CT(r):(r instanceof IDBTransaction&&AT(r),wT(r,TT())?new Proxy(r,Sf):r)}function yi(r){if(r instanceof IDBRequest)return ST(r);if(hf.has(r))return hf.get(r);const e=PT(r);return e!==r&&(hf.set(r,e),Zf.set(e,r)),e}const ff=r=>Zf.get(r);function kT(r,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(r,e),m=yi(h);return s&&h.addEventListener("upgradeneeded",g=>{s(yi(h.result),g.oldVersion,g.newVersion,yi(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),m.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}const NT=["get","getKey","getAll","getAllKeys","count"],DT=["put","add","delete","clear"],df=new Map;function _g(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(df.get(e))return df.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=DT.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||NT.includes(t)))return;const u=async function(h,...m){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return s&&(_=_.index(m.shift())),(await Promise.all([_[t](...m),o&&g.done]))[0]};return df.set(e,u),u}RT(r=>({...r,get:(e,t,s)=>_g(e,t)||r.get(e,t,s),has:(e,t)=>!!_g(e,t)||r.has(e,t)}));/**
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
 */class VT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(OT(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function OT(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Af="@firebase/app",vg="0.14.5";/**
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
 */const Nr=new Jf("@firebase/app"),xT="@firebase/app-compat",LT="@firebase/analytics-compat",MT="@firebase/analytics",bT="@firebase/app-check-compat",FT="@firebase/app-check",UT="@firebase/auth",zT="@firebase/auth-compat",jT="@firebase/database",BT="@firebase/data-connect",$T="@firebase/database-compat",qT="@firebase/functions",HT="@firebase/functions-compat",WT="@firebase/installations",GT="@firebase/installations-compat",KT="@firebase/messaging",QT="@firebase/messaging-compat",YT="@firebase/performance",XT="@firebase/performance-compat",JT="@firebase/remote-config",ZT="@firebase/remote-config-compat",eI="@firebase/storage",tI="@firebase/storage-compat",nI="@firebase/firestore",rI="@firebase/ai",iI="@firebase/firestore-compat",sI="firebase",oI="12.5.0";/**
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
 */const Rf="[DEFAULT]",aI={[Af]:"fire-core",[xT]:"fire-core-compat",[MT]:"fire-analytics",[LT]:"fire-analytics-compat",[FT]:"fire-app-check",[bT]:"fire-app-check-compat",[UT]:"fire-auth",[zT]:"fire-auth-compat",[jT]:"fire-rtdb",[BT]:"fire-data-connect",[$T]:"fire-rtdb-compat",[qT]:"fire-fn",[HT]:"fire-fn-compat",[WT]:"fire-iid",[GT]:"fire-iid-compat",[KT]:"fire-fcm",[QT]:"fire-fcm-compat",[YT]:"fire-perf",[XT]:"fire-perf-compat",[JT]:"fire-rc",[ZT]:"fire-rc-compat",[eI]:"fire-gcs",[tI]:"fire-gcs-compat",[nI]:"fire-fst",[iI]:"fire-fst-compat",[rI]:"fire-vertex","fire-js":"fire-js",[sI]:"fire-js-all"};/**
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
 */const Hu=new Map,lI=new Map,Cf=new Map;function Eg(r,e){try{r.container.addComponent(e)}catch(t){Nr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function _o(r){const e=r.name;if(Cf.has(e))return Nr.debug(`There were multiple attempts to register component ${e}.`),!1;Cf.set(e,r);for(const t of Hu.values())Eg(t,r);for(const t of lI.values())Eg(t,r);return!0}function ed(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function un(r){return r==null?!1:r.settings!==void 0}/**
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
 */const uI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_i=new Xa("app","Firebase",uI);/**
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
 */class cI{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new fs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _i.create("app-deleted",{appName:this._name})}}/**
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
 */const Ro=oI;function t_(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s={name:Rf,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw _i.create("bad-app-name",{appName:String(o)});if(t||(t=Qy()),!t)throw _i.create("no-options");const u=Hu.get(o);if(u){if(hs(t,u.options)&&hs(s,u.config))return u;throw _i.create("duplicate-app",{appName:o})}const h=new gT(o);for(const g of Cf.values())h.addComponent(g);const m=new cI(t,s,h);return Hu.set(o,m),m}function n_(r=Rf){const e=Hu.get(r);if(!e&&r===Rf&&Qy())return t_();if(!e)throw _i.create("no-app",{appName:r});return e}function vi(r,e,t){let s=aI[r]??r;t&&(s+=`-${t}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nr.warn(h.join(" "));return}_o(new fs(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const hI="firebase-heartbeat-database",fI=1,Ba="firebase-heartbeat-store";let pf=null;function r_(){return pf||(pf=kT(hI,fI,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ba)}catch(t){console.warn(t)}}}}).catch(r=>{throw _i.create("idb-open",{originalErrorMessage:r.message})})),pf}async function dI(r){try{const t=(await r_()).transaction(Ba),s=await t.objectStore(Ba).get(i_(r));return await t.done,s}catch(e){if(e instanceof Lr)Nr.warn(e.message);else{const t=_i.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Nr.warn(t.message)}}}async function wg(r,e){try{const s=(await r_()).transaction(Ba,"readwrite");await s.objectStore(Ba).put(e,i_(r)),await s.done}catch(t){if(t instanceof Lr)Nr.warn(t.message);else{const s=_i.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Nr.warn(s.message)}}}function i_(r){return`${r.name}!${r.options.appId}`}/**
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
 */const pI=1024,mI=30;class gI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new _I(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Tg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>mI){const h=vI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Nr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Tg(),{heartbeatsToSend:s,unsentEntries:o}=yI(this._heartbeatsCache.heartbeats),u=qu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Nr.warn(t),""}}}function Tg(){return new Date().toISOString().substring(0,10)}function yI(r,e=pI){const t=[];let s=r.slice();for(const o of r){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),Ig(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Ig(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class _I{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return iT()?sT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await dI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return wg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return wg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ig(r){return qu(JSON.stringify({version:2,heartbeats:r})).length}function vI(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
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
 */function EI(r){_o(new fs("platform-logger",e=>new VT(e),"PRIVATE")),_o(new fs("heartbeat",e=>new gI(e),"PRIVATE")),vi(Af,vg,r),vi(Af,vg,"esm2020"),vi("fire-js","")}EI("");function s_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wI=s_,o_=new Xa("auth","Firebase",s_());/**
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
 */const Wu=new Jf("@firebase/auth");function TI(r,...e){Wu.logLevel<=Ae.WARN&&Wu.warn(`Auth (${Ro}): ${r}`,...e)}function xu(r,...e){Wu.logLevel<=Ae.ERROR&&Wu.error(`Auth (${Ro}): ${r}`,...e)}/**
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
 */function wn(r,...e){throw nd(r,...e)}function On(r,...e){return nd(r,...e)}function td(r,e,t){const s={...wI(),[e]:t};return new Xa("auth","Firebase",s).create(e,{appName:r.name})}function Pr(r){return td(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function II(r,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&wn(r,"argument-error"),td(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function nd(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return o_.create(r,...e)}function de(r,e,...t){if(!r)throw nd(e,...t)}function Rr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw xu(e),new Error(e)}function Dr(r,e){r||Rr(e)}/**
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
 */function Pf(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function SI(){return Sg()==="http:"||Sg()==="https:"}function Sg(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
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
 */function AI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(SI()||eT()||"connection"in navigator)?navigator.onLine:!0}function RI(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Za{constructor(e,t){this.shortDelay=e,this.longDelay=t,Dr(t>e,"Short delay should be less than long delay!"),this.isMobile=Xw()||tT()}get(){return AI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function rd(r,e){Dr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */const CI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const PI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],kI=new Za(3e4,6e4);function Pi(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function ki(r,e,t,s,o={}){return l_(r,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=Ja({key:r.config.apiKey,...h}).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const _={method:e,headers:g,...u};return Zw()||(_.referrerPolicy="no-referrer"),r.emulatorConfig&&Ao(r.emulatorConfig.host)&&(_.credentials="include"),a_.fetch()(await u_(r,r.config.apiHost,t,m),_)})}async function l_(r,e,t){r._canInitEmulator=!1;const s={...CI,...e};try{const o=new DI(r),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw Ru(r,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[g,_]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ru(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Ru(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw Ru(r,"user-disabled",h);const w=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw td(r,w,_);wn(r,w)}}catch(o){if(o instanceof Lr)throw o;wn(r,"network-request-failed",{message:String(o)})}}async function el(r,e,t,s,o={}){const u=await ki(r,e,t,s,o);return"mfaPendingCredential"in u&&wn(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function u_(r,e,t,s){const o=`${e}${t}?${s}`,u=r,h=u.config.emulator?rd(r.config,o):`${r.config.apiScheme}://${o}`;return PI.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}function NI(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class DI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(On(this.auth,"network-request-failed")),kI.get())})}}function Ru(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=On(r,e,s);return o.customData._tokenResponse=t,o}function Ag(r){return r!==void 0&&r.enterprise!==void 0}class VI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return NI(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function OI(r,e){return ki(r,"GET","/v2/recaptchaConfig",Pi(r,e))}/**
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
 */async function xI(r,e){return ki(r,"POST","/v1/accounts:delete",e)}async function Gu(r,e){return ki(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function ba(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function LI(r,e=!1){const t=_t(r),s=await t.getIdToken(e),o=id(s);de(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:ba(mf(o.auth_time)),issuedAtTime:ba(mf(o.iat)),expirationTime:ba(mf(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function mf(r){return Number(r)*1e3}function id(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return xu("JWT malformed, contained fewer than 3 sections"),null;try{const o=Gy(t);return o?JSON.parse(o):(xu("Failed to decode base64 JWT payload"),null)}catch(o){return xu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Rg(r){const e=id(r);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function $a(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Lr&&MI(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function MI({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class bI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class kf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ba(this.lastLoginAt),this.creationTime=ba(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ku(r){var T;const e=r.auth,t=await r.getIdToken(),s=await $a(r,Gu(e,{idToken:t}));de(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];r._notifyReloadListener(o);const u=(T=o.providerUserInfo)!=null&&T.length?c_(o.providerUserInfo):[],h=UI(r.providerData,u),m=r.isAnonymous,g=!(r.email&&o.passwordHash)&&!(h!=null&&h.length),_=m?g:!1,w={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new kf(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(r,w)}async function FI(r){const e=_t(r);await Ku(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function UI(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function c_(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function zI(r,e){const t=await l_(r,{},async()=>{const s=Ja({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,h=await u_(r,o,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:m,body:s};return r.emulatorConfig&&Ao(r.emulatorConfig.host)&&(g.credentials="include"),a_.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function jI(r,e){return ki(r,"POST","/v2/accounts:revokeToken",Pi(r,e))}/**
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
 */class po{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Rg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){de(e.length!==0,"internal-error");const t=Rg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(de(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await zI(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new po;return s&&(de(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(de(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(de(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new po,this.toJSON())}_performRefresh(){return Rr("not implemented")}}/**
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
 */function fi(r,e){de(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Vn{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new bI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new kf(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await $a(this,this.stsTokenManager.getToken(this.auth,e));return de(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return LI(this,e)}reload(){return FI(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Vn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Ku(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(un(this.auth.app))return Promise.reject(Pr(this.auth));const e=await this.getIdToken();return await $a(this,xI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,u=t.phoneNumber??void 0,h=t.photoURL??void 0,m=t.tenantId??void 0,g=t._redirectEventId??void 0,_=t.createdAt??void 0,w=t.lastLoginAt??void 0,{uid:T,emailVerified:A,isAnonymous:U,providerData:q,stsTokenManager:H}=t;de(T&&H,e,"internal-error");const j=po.fromJSON(this.name,H);de(typeof T=="string",e,"internal-error"),fi(s,e.name),fi(o,e.name),de(typeof A=="boolean",e,"internal-error"),de(typeof U=="boolean",e,"internal-error"),fi(u,e.name),fi(h,e.name),fi(m,e.name),fi(g,e.name),fi(_,e.name),fi(w,e.name);const ae=new Vn({uid:T,auth:e,email:o,emailVerified:A,displayName:s,isAnonymous:U,photoURL:h,phoneNumber:u,tenantId:m,stsTokenManager:j,createdAt:_,lastLoginAt:w});return q&&Array.isArray(q)&&(ae.providerData=q.map(fe=>({...fe}))),g&&(ae._redirectEventId=g),ae}static async _fromIdTokenResponse(e,t,s=!1){const o=new po;o.updateFromServerResponse(t);const u=new Vn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Ku(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];de(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?c_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new po;m.updateFromIdToken(s);const g=new Vn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new kf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,_),g}}/**
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
 */const Cg=new Map;function Cr(r){Dr(r instanceof Function,"Expected a class definition");let e=Cg.get(r);return e?(Dr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Cg.set(r,e),e)}/**
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
 */class h_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}h_.type="NONE";const Pg=h_;/**
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
 */function Lu(r,e,t){return`firebase:${r}:${e}:${t}`}class mo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Lu(this.userKey,o.apiKey,u),this.fullPersistenceKey=Lu("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Gu(this.auth,{idToken:e}).catch(()=>{});return t?Vn._fromGetAccountInfoResponse(this.auth,t,e):null}return Vn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new mo(Cr(Pg),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=o[0]||Cr(Pg);const h=Lu(s,e.config.apiKey,e.name);let m=null;for(const _ of t)try{const w=await _._get(h);if(w){let T;if(typeof w=="string"){const A=await Gu(e,{idToken:w}).catch(()=>{});if(!A)break;T=await Vn._fromGetAccountInfoResponse(e,A,w)}else T=Vn._fromJSON(e,w);_!==u&&(m=T),u=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new mo(u,e,s):(u=g[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async _=>{if(_!==u)try{await _._remove(h)}catch{}})),new mo(u,e,s))}}/**
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
 */function kg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(m_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(f_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(y_(e))return"Blackberry";if(__(e))return"Webos";if(d_(e))return"Safari";if((e.includes("chrome/")||p_(e))&&!e.includes("edge/"))return"Chrome";if(g_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function f_(r=zt()){return/firefox\//i.test(r)}function d_(r=zt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function p_(r=zt()){return/crios\//i.test(r)}function m_(r=zt()){return/iemobile/i.test(r)}function g_(r=zt()){return/android/i.test(r)}function y_(r=zt()){return/blackberry/i.test(r)}function __(r=zt()){return/webos/i.test(r)}function sd(r=zt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function BI(r=zt()){var e;return sd(r)&&!!((e=window.navigator)!=null&&e.standalone)}function $I(){return nT()&&document.documentMode===10}function v_(r=zt()){return sd(r)||g_(r)||__(r)||y_(r)||/windows phone/i.test(r)||m_(r)}/**
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
 */function E_(r,e=[]){let t;switch(r){case"Browser":t=kg(zt());break;case"Worker":t=`${kg(zt())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ro}/${s}`}/**
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
 */class qI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const g=e(u);h(g)}catch(g){m(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function HI(r,e={}){return ki(r,"GET","/v2/passwordPolicy",Pi(r,e))}/**
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
 */const WI=6;class GI{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??WI,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class KI{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ng(this),this.idTokenSubscription=new Ng(this),this.beforeStateQueue=new qI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=o_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Cr(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await mo.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Gu(this,{idToken:e}),s=await Vn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(un(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(u=this.redirectUser)==null?void 0:u._redirectEventId,m=s==null?void 0:s._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===m)&&(g!=null&&g.user)&&(s=g.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(h){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ku(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=RI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(un(this.app))return Promise.reject(Pr(this));const t=e?_t(e):null;return t&&de(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return un(this.app)?Promise.reject(Pr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return un(this.app)?Promise.reject(Pr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Cr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await HI(this),t=new GI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Xa("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await jI(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Cr(e)||this._popupRedirectResolver;de(t,this,"argument-error"),this.redirectPersistenceManager=await mo.create(this,[Cr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(de(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=E_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(un(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&TI(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ni(r){return _t(r)}class Ng{constructor(e){this.auth=e,this.observer=null,this.addObserver=cT(t=>this.observer=t)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let fc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function QI(r){fc=r}function w_(r){return fc.loadJS(r)}function YI(){return fc.recaptchaEnterpriseScript}function XI(){return fc.gapiScript}function JI(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class ZI{constructor(){this.enterprise=new e0}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class e0{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const t0="recaptcha-enterprise",T_="NO_RECAPTCHA";class n0{constructor(e){this.type=t0,this.auth=Ni(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,m)=>{OI(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const _=new VI(g);return u.tenantId==null?u._agentRecaptchaConfig=_:u._tenantRecaptchaConfigs[u.tenantId]=_,h(_.siteKey)}}).catch(g=>{m(g)})})}function o(u,h,m){const g=window.grecaptcha;Ag(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:e}).then(_=>{h(_)}).catch(()=>{h(T_)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ZI().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(m=>{if(!t&&Ag(window.grecaptcha))o(m,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=YI();g.length!==0&&(g+=m),w_(g).then(()=>{o(m,u,h)}).catch(_=>{h(_)})}}).catch(m=>{h(m)})})}}async function Dg(r,e,t,s=!1,o=!1){const u=new n0(r);let h;if(o)h=T_;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const m={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const g=m.phoneEnrollmentInfo.phoneNumber,_=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const g=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:h}):Object.assign(m,{captchaResponse:h}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function Nf(r,e,t,s,o){var u;if((u=r._getRecaptchaConfig())!=null&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await Dg(r,e,t,t==="getOobCode");return s(r,h)}else return s(r,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await Dg(r,e,t,t==="getOobCode");return s(r,m)}else return Promise.reject(h)})}/**
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
 */function r0(r,e){const t=ed(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(hs(u,e??{}))return o;wn(o,"already-initialized")}return t.initialize({options:e})}function i0(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Cr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function s0(r,e,t){const s=Ni(r);de(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=I_(e),{host:h,port:m}=o0(e),g=m===null?"":`:${m}`,_={url:`${u}//${h}${g}/`},w=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){de(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),de(hs(_,s.config.emulator)&&hs(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,Ao(h)?(Xy(`${u}//${h}${g}`),Jy("Auth",!0)):a0()}function I_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function o0(r){const e=I_(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:Vg(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:Vg(h)}}}function Vg(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function a0(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class od{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Rr("not implemented")}_getIdTokenResponse(e){return Rr("not implemented")}_linkToIdToken(e,t){return Rr("not implemented")}_getReauthenticationResolver(e){return Rr("not implemented")}}async function l0(r,e){return ki(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function u0(r,e){return el(r,"POST","/v1/accounts:signInWithPassword",Pi(r,e))}/**
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
 */async function c0(r,e){return el(r,"POST","/v1/accounts:signInWithEmailLink",Pi(r,e))}async function h0(r,e){return el(r,"POST","/v1/accounts:signInWithEmailLink",Pi(r,e))}/**
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
 */class qa extends od{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new qa(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new qa(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nf(e,t,"signInWithPassword",u0);case"emailLink":return c0(e,{email:this._email,oobCode:this._password});default:wn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nf(e,s,"signUpPassword",l0);case"emailLink":return h0(e,{idToken:t,email:this._email,oobCode:this._password});default:wn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */const f0="http://localhost";class ds extends od{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ds(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):wn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=t;if(!s||!o)return null;const h=new ds(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return go(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,go(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,go(e,t)}buildRequest(){const e={requestUri:f0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ja(t)}return e}}/**
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
 */function d0(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function p0(r){const e=ka(Na(r)).link,t=e?ka(Na(e)).deep_link_id:null,s=ka(Na(r)).deep_link_id;return(s?ka(Na(s)).link:null)||s||t||e||r}class ad{constructor(e){const t=ka(Na(e)),s=t.apiKey??null,o=t.oobCode??null,u=d0(t.mode??null);de(s&&o&&u,"argument-error"),this.apiKey=s,this.operation=u,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=p0(e);try{return new ad(t)}catch{return null}}}/**
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
 */class Co{constructor(){this.providerId=Co.PROVIDER_ID}static credential(e,t){return qa._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=ad.parseLink(t);return de(s,"argument-error"),qa._fromEmailAndCode(e,s.code,s.tenantId)}}Co.PROVIDER_ID="password";Co.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Co.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ld{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class tl extends ld{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class di extends tl{constructor(){super("facebook.com")}static credential(e){return ds._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return di.credential(e.oauthAccessToken)}catch{return null}}}di.FACEBOOK_SIGN_IN_METHOD="facebook.com";di.PROVIDER_ID="facebook.com";/**
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
 */class Ar extends tl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ds._fromParams({providerId:Ar.PROVIDER_ID,signInMethod:Ar.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ar.credentialFromTaggedObject(e)}static credentialFromError(e){return Ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Ar.credential(t,s)}catch{return null}}}Ar.GOOGLE_SIGN_IN_METHOD="google.com";Ar.PROVIDER_ID="google.com";/**
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
 */class pi extends tl{constructor(){super("github.com")}static credential(e){return ds._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pi.credentialFromTaggedObject(e)}static credentialFromError(e){return pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pi.credential(e.oauthAccessToken)}catch{return null}}}pi.GITHUB_SIGN_IN_METHOD="github.com";pi.PROVIDER_ID="github.com";/**
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
 */class mi extends tl{constructor(){super("twitter.com")}static credential(e,t){return ds._fromParams({providerId:mi.PROVIDER_ID,signInMethod:mi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return mi.credentialFromTaggedObject(e)}static credentialFromError(e){return mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return mi.credential(t,s)}catch{return null}}}mi.TWITTER_SIGN_IN_METHOD="twitter.com";mi.PROVIDER_ID="twitter.com";/**
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
 */async function m0(r,e){return el(r,"POST","/v1/accounts:signUp",Pi(r,e))}/**
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
 */class ps{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await Vn._fromIdTokenResponse(e,s,o),h=Og(s);return new ps({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Og(s);return new ps({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Og(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Qu extends Lr{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Qu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Qu(e,t,s,o)}}function S_(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Qu._fromErrorAndOperation(r,u,e,s):u})}async function g0(r,e,t=!1){const s=await $a(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return ps._forOperation(r,"link",s)}/**
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
 */async function y0(r,e,t=!1){const{auth:s}=r;if(un(s.app))return Promise.reject(Pr(s));const o="reauthenticate";try{const u=await $a(r,S_(s,o,e,r),t);de(u.idToken,s,"internal-error");const h=id(u.idToken);de(h,s,"internal-error");const{sub:m}=h;return de(r.uid===m,s,"user-mismatch"),ps._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&wn(s,"user-mismatch"),u}}/**
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
 */async function A_(r,e,t=!1){if(un(r.app))return Promise.reject(Pr(r));const s="signIn",o=await S_(r,s,e),u=await ps._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(u.user),u}async function _0(r,e){return A_(Ni(r),e)}/**
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
 */async function R_(r){const e=Ni(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function v0(r,e,t){if(un(r.app))return Promise.reject(Pr(r));const s=Ni(r),h=await Nf(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",m0).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&R_(r),g}),m=await ps._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(m.user),m}function E0(r,e,t){return un(r.app)?Promise.reject(Pr(r)):_0(_t(r),Co.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&R_(r),s})}function w0(r,e,t,s){return _t(r).onIdTokenChanged(e,t,s)}function T0(r,e,t){return _t(r).beforeAuthStateChanged(e,t)}function I0(r,e,t,s){return _t(r).onAuthStateChanged(e,t,s)}function lo(r){return _t(r).signOut()}const Yu="__sak";/**
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
 */class C_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Yu,"1"),this.storage.removeItem(Yu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const S0=1e3,A0=10;class P_ extends C_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=v_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);$I()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,A0):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},S0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}P_.type="LOCAL";const R0=P_;/**
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
 */function C0(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class dc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new dc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async _=>_(t.origin,u)),g=await C0(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}dc.receivers=[];/**
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
 */function ud(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class P0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,g)=>{const _=ud("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(T){const A=T;if(A.data.eventId===_)switch(A.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(A.data.response);break;default:clearTimeout(w),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function tr(){return window}function k0(r){tr().location.href=r}/**
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
 */function D_(){return typeof tr().WorkerGlobalScope<"u"&&typeof tr().importScripts=="function"}async function N0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function D0(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function V0(){return D_()?self:null}/**
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
 */const V_="firebaseLocalStorageDb",O0=1,Xu="firebaseLocalStorage",O_="fbase_key";class nl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function pc(r,e){return r.transaction([Xu],e?"readwrite":"readonly").objectStore(Xu)}function x0(){const r=indexedDB.deleteDatabase(V_);return new nl(r).toPromise()}function Df(){const r=indexedDB.open(V_,O0);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Xu,{keyPath:O_})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Xu)?e(s):(s.close(),await x0(),e(await Df()))})})}async function xg(r,e,t){const s=pc(r,!0).put({[O_]:e,value:t});return new nl(s).toPromise()}async function L0(r,e){const t=pc(r,!1).get(e),s=await new nl(t).toPromise();return s===void 0?null:s.value}function Lg(r,e){const t=pc(r,!0).delete(e);return new nl(t).toPromise()}const M0=800,b0=3;class x_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Df(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>b0)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return D_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=dc._getInstance(V0()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await N0(),!this.activeServiceWorker)return;this.sender=new P0(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||D0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Df();return await xg(e,Yu,"1"),await Lg(e,Yu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>xg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>L0(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Lg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=pc(o,!1).getAll();return new nl(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),M0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}x_.type="LOCAL";const F0=x_;new Za(3e4,6e4);/**
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
 */function L_(r,e){return e?Cr(e):(de(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class cd extends od{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return go(e,this._buildIdpRequest())}_linkToIdToken(e,t){return go(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return go(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function U0(r){return A_(r.auth,new cd(r),r.bypassAuthState)}function z0(r){const{auth:e,user:t}=r;return de(t,e,"internal-error"),y0(t,new cd(r),r.bypassAuthState)}async function j0(r){const{auth:e,user:t}=r;return de(t,e,"internal-error"),g0(t,new cd(r),r.bypassAuthState)}/**
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
 */class M_{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return U0;case"linkViaPopup":case"linkViaRedirect":return j0;case"reauthViaPopup":case"reauthViaRedirect":return z0;default:wn(this.auth,"internal-error")}}resolve(e){Dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const B0=new Za(2e3,1e4);async function $0(r,e,t){if(un(r.app))return Promise.reject(On(r,"operation-not-supported-in-this-environment"));const s=Ni(r);II(r,e,ld);const o=L_(s,t);return new as(s,"signInViaPopup",e,o).executeNotNull()}class as extends M_{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,as.currentPopupAction&&as.currentPopupAction.cancel(),as.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return de(e,this.auth,"internal-error"),e}async onExecution(){Dr(this.filter.length===1,"Popup operations only handle one event");const e=ud();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(On(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(On(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,as.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(On(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,B0.get())};e()}}as.currentPopupAction=null;/**
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
 */const q0="pendingRedirect",Mu=new Map;class H0 extends M_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Mu.get(this.auth._key());if(!e){try{const s=await W0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Mu.set(this.auth._key(),e)}return this.bypassAuthState||Mu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function W0(r,e){const t=Q0(e),s=K0(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function G0(r,e){Mu.set(r._key(),e)}function K0(r){return Cr(r._redirectPersistence)}function Q0(r){return Lu(q0,r.config.apiKey,r.name)}async function Y0(r,e,t=!1){if(un(r.app))return Promise.reject(Pr(r));const s=Ni(r),o=L_(s,e),h=await new H0(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const X0=10*60*1e3;class J0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Z0(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!b_(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(On(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=X0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mg(e))}saveEventToCache(e){this.cachedEventUids.add(Mg(e)),this.lastProcessedEventTime=Date.now()}}function Mg(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function b_({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Z0(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return b_(r);default:return!1}}/**
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
 */async function eS(r,e={}){return ki(r,"GET","/v1/projects",e)}/**
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
 */const tS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nS=/^https?/;async function rS(r){if(r.config.emulator)return;const{authorizedDomains:e}=await eS(r);for(const t of e)try{if(iS(t))return}catch{}wn(r,"unauthorized-domain")}function iS(r){const e=Pf(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!nS.test(t))return!1;if(tS.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const sS=new Za(3e4,6e4);function bg(){const r=tr().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function oS(r){return new Promise((e,t)=>{var o,u,h;function s(){bg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bg(),t(On(r,"network-request-failed"))},timeout:sS.get()})}if((u=(o=tr().gapi)==null?void 0:o.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((h=tr().gapi)!=null&&h.load)s();else{const m=JI("iframefcb");return tr()[m]=()=>{gapi.load?s():t(On(r,"network-request-failed"))},w_(`${XI()}?onload=${m}`).catch(g=>t(g))}}).catch(e=>{throw bu=null,e})}let bu=null;function aS(r){return bu=bu||oS(r),bu}/**
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
 */const lS=new Za(5e3,15e3),uS="__/auth/iframe",cS="emulator/auth/iframe",hS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dS(r){const e=r.config;de(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?rd(e,cS):`https://${r.config.authDomain}/${uS}`,s={apiKey:e.apiKey,appName:r.name,v:Ro},o=fS.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Ja(s).slice(1)}`}async function pS(r){const e=await aS(r),t=tr().gapi;return de(t,r,"internal-error"),e.open({where:document.body,url:dS(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hS,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=On(r,"network-request-failed"),m=tr().setTimeout(()=>{u(h)},lS.get());function g(){tr().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{u(h)})}))}/**
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
 */const mS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gS=500,yS=600,_S="_blank",vS="http://localhost";class Fg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ES(r,e,t,s=gS,o=yS){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g={...mS,width:s.toString(),height:o.toString(),top:u,left:h},_=zt().toLowerCase();t&&(m=p_(_)?_S:t),f_(_)&&(e=e||vS,g.scrollbars="yes");const w=Object.entries(g).reduce((A,[U,q])=>`${A}${U}=${q},`,"");if(BI(_)&&m!=="_self")return wS(e||"",m),new Fg(null);const T=window.open(e||"",m,w);de(T,r,"popup-blocked");try{T.focus()}catch{}return new Fg(T)}function wS(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const TS="__/auth/handler",IS="emulator/auth/handler",SS=encodeURIComponent("fac");async function Ug(r,e,t,s,o,u){de(r.config.authDomain,r,"auth-domain-config-required"),de(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:Ro,eventId:o};if(e instanceof ld){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",uT(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,T]of Object.entries({}))h[w]=T}if(e instanceof tl){const w=e.getScopes().filter(T=>T!=="");w.length>0&&(h.scopes=w.join(","))}r.tenantId&&(h.tid=r.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const g=await r._getAppCheckToken(),_=g?`#${SS}=${encodeURIComponent(g)}`:"";return`${AS(r)}?${Ja(m).slice(1)}${_}`}function AS({config:r}){return r.emulator?rd(r,IS):`https://${r.authDomain}/${TS}`}/**
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
 */const gf="webStorageSupport";class RS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=N_,this._completeRedirectFn=Y0,this._overrideRedirectResult=G0}async _openPopup(e,t,s,o){var h;Dr((h=this.eventManagers[e._key()])==null?void 0:h.manager,"_initialize() not called before _openPopup()");const u=await Ug(e,t,s,Pf(),o);return ES(e,u,ud())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await Ug(e,t,s,Pf(),o);return k0(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Dr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await pS(e),s=new J0(e);return t.register("authEvent",o=>(de(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(gf,{type:gf},o=>{var h;const u=(h=o==null?void 0:o[0])==null?void 0:h[gf];u!==void 0&&t(!!u),wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=rS(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return v_()||d_()||sd()}}const CS=RS;var zg="@firebase/auth",jg="1.11.1";/**
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
 */class PS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function kS(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function NS(r){_o(new fs("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;de(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:E_(r)},_=new KI(s,o,u,g);return i0(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),_o(new fs("auth-internal",e=>{const t=Ni(e.getProvider("auth").getImmediate());return(s=>new PS(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),vi(zg,jg,kS(r)),vi(zg,jg,"esm2020")}/**
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
 */const DS=5*60,VS=Yy("authIdTokenMaxAge")||DS;let Bg=null;const OS=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>VS)return;const o=t==null?void 0:t.token;Bg!==o&&(Bg=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function xS(r=n_()){const e=ed(r,"auth");if(e.isInitialized())return e.getImmediate();const t=r0(r,{popupRedirectResolver:CS,persistence:[F0,R0,N_]}),s=Yy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=OS(u.toString());T0(t,h,()=>h(t.currentUser)),w0(t,m=>h(m))}}const o=Ky("auth");return o&&s0(t,`http://${o}`),t}function LS(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}QI({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const u=On("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",LS().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});NS("Browser");var MS="firebase",bS="12.5.0";/**
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
 */vi(MS,bS,"app");var $g=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ei,F_;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,S){function C(){}C.prototype=S.prototype,k.F=S.prototype,k.prototype=new C,k.prototype.constructor=k,k.D=function(V,N,x){for(var R=Array(arguments.length-2),je=2;je<arguments.length;je++)R[je-2]=arguments[je];return S.prototype[N].apply(V,R)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(k,S,C){C||(C=0);const V=Array(16);if(typeof S=="string")for(var N=0;N<16;++N)V[N]=S.charCodeAt(C++)|S.charCodeAt(C++)<<8|S.charCodeAt(C++)<<16|S.charCodeAt(C++)<<24;else for(N=0;N<16;++N)V[N]=S[C++]|S[C++]<<8|S[C++]<<16|S[C++]<<24;S=k.g[0],C=k.g[1],N=k.g[2];let x=k.g[3],R;R=S+(x^C&(N^x))+V[0]+3614090360&4294967295,S=C+(R<<7&4294967295|R>>>25),R=x+(N^S&(C^N))+V[1]+3905402710&4294967295,x=S+(R<<12&4294967295|R>>>20),R=N+(C^x&(S^C))+V[2]+606105819&4294967295,N=x+(R<<17&4294967295|R>>>15),R=C+(S^N&(x^S))+V[3]+3250441966&4294967295,C=N+(R<<22&4294967295|R>>>10),R=S+(x^C&(N^x))+V[4]+4118548399&4294967295,S=C+(R<<7&4294967295|R>>>25),R=x+(N^S&(C^N))+V[5]+1200080426&4294967295,x=S+(R<<12&4294967295|R>>>20),R=N+(C^x&(S^C))+V[6]+2821735955&4294967295,N=x+(R<<17&4294967295|R>>>15),R=C+(S^N&(x^S))+V[7]+4249261313&4294967295,C=N+(R<<22&4294967295|R>>>10),R=S+(x^C&(N^x))+V[8]+1770035416&4294967295,S=C+(R<<7&4294967295|R>>>25),R=x+(N^S&(C^N))+V[9]+2336552879&4294967295,x=S+(R<<12&4294967295|R>>>20),R=N+(C^x&(S^C))+V[10]+4294925233&4294967295,N=x+(R<<17&4294967295|R>>>15),R=C+(S^N&(x^S))+V[11]+2304563134&4294967295,C=N+(R<<22&4294967295|R>>>10),R=S+(x^C&(N^x))+V[12]+1804603682&4294967295,S=C+(R<<7&4294967295|R>>>25),R=x+(N^S&(C^N))+V[13]+4254626195&4294967295,x=S+(R<<12&4294967295|R>>>20),R=N+(C^x&(S^C))+V[14]+2792965006&4294967295,N=x+(R<<17&4294967295|R>>>15),R=C+(S^N&(x^S))+V[15]+1236535329&4294967295,C=N+(R<<22&4294967295|R>>>10),R=S+(N^x&(C^N))+V[1]+4129170786&4294967295,S=C+(R<<5&4294967295|R>>>27),R=x+(C^N&(S^C))+V[6]+3225465664&4294967295,x=S+(R<<9&4294967295|R>>>23),R=N+(S^C&(x^S))+V[11]+643717713&4294967295,N=x+(R<<14&4294967295|R>>>18),R=C+(x^S&(N^x))+V[0]+3921069994&4294967295,C=N+(R<<20&4294967295|R>>>12),R=S+(N^x&(C^N))+V[5]+3593408605&4294967295,S=C+(R<<5&4294967295|R>>>27),R=x+(C^N&(S^C))+V[10]+38016083&4294967295,x=S+(R<<9&4294967295|R>>>23),R=N+(S^C&(x^S))+V[15]+3634488961&4294967295,N=x+(R<<14&4294967295|R>>>18),R=C+(x^S&(N^x))+V[4]+3889429448&4294967295,C=N+(R<<20&4294967295|R>>>12),R=S+(N^x&(C^N))+V[9]+568446438&4294967295,S=C+(R<<5&4294967295|R>>>27),R=x+(C^N&(S^C))+V[14]+3275163606&4294967295,x=S+(R<<9&4294967295|R>>>23),R=N+(S^C&(x^S))+V[3]+4107603335&4294967295,N=x+(R<<14&4294967295|R>>>18),R=C+(x^S&(N^x))+V[8]+1163531501&4294967295,C=N+(R<<20&4294967295|R>>>12),R=S+(N^x&(C^N))+V[13]+2850285829&4294967295,S=C+(R<<5&4294967295|R>>>27),R=x+(C^N&(S^C))+V[2]+4243563512&4294967295,x=S+(R<<9&4294967295|R>>>23),R=N+(S^C&(x^S))+V[7]+1735328473&4294967295,N=x+(R<<14&4294967295|R>>>18),R=C+(x^S&(N^x))+V[12]+2368359562&4294967295,C=N+(R<<20&4294967295|R>>>12),R=S+(C^N^x)+V[5]+4294588738&4294967295,S=C+(R<<4&4294967295|R>>>28),R=x+(S^C^N)+V[8]+2272392833&4294967295,x=S+(R<<11&4294967295|R>>>21),R=N+(x^S^C)+V[11]+1839030562&4294967295,N=x+(R<<16&4294967295|R>>>16),R=C+(N^x^S)+V[14]+4259657740&4294967295,C=N+(R<<23&4294967295|R>>>9),R=S+(C^N^x)+V[1]+2763975236&4294967295,S=C+(R<<4&4294967295|R>>>28),R=x+(S^C^N)+V[4]+1272893353&4294967295,x=S+(R<<11&4294967295|R>>>21),R=N+(x^S^C)+V[7]+4139469664&4294967295,N=x+(R<<16&4294967295|R>>>16),R=C+(N^x^S)+V[10]+3200236656&4294967295,C=N+(R<<23&4294967295|R>>>9),R=S+(C^N^x)+V[13]+681279174&4294967295,S=C+(R<<4&4294967295|R>>>28),R=x+(S^C^N)+V[0]+3936430074&4294967295,x=S+(R<<11&4294967295|R>>>21),R=N+(x^S^C)+V[3]+3572445317&4294967295,N=x+(R<<16&4294967295|R>>>16),R=C+(N^x^S)+V[6]+76029189&4294967295,C=N+(R<<23&4294967295|R>>>9),R=S+(C^N^x)+V[9]+3654602809&4294967295,S=C+(R<<4&4294967295|R>>>28),R=x+(S^C^N)+V[12]+3873151461&4294967295,x=S+(R<<11&4294967295|R>>>21),R=N+(x^S^C)+V[15]+530742520&4294967295,N=x+(R<<16&4294967295|R>>>16),R=C+(N^x^S)+V[2]+3299628645&4294967295,C=N+(R<<23&4294967295|R>>>9),R=S+(N^(C|~x))+V[0]+4096336452&4294967295,S=C+(R<<6&4294967295|R>>>26),R=x+(C^(S|~N))+V[7]+1126891415&4294967295,x=S+(R<<10&4294967295|R>>>22),R=N+(S^(x|~C))+V[14]+2878612391&4294967295,N=x+(R<<15&4294967295|R>>>17),R=C+(x^(N|~S))+V[5]+4237533241&4294967295,C=N+(R<<21&4294967295|R>>>11),R=S+(N^(C|~x))+V[12]+1700485571&4294967295,S=C+(R<<6&4294967295|R>>>26),R=x+(C^(S|~N))+V[3]+2399980690&4294967295,x=S+(R<<10&4294967295|R>>>22),R=N+(S^(x|~C))+V[10]+4293915773&4294967295,N=x+(R<<15&4294967295|R>>>17),R=C+(x^(N|~S))+V[1]+2240044497&4294967295,C=N+(R<<21&4294967295|R>>>11),R=S+(N^(C|~x))+V[8]+1873313359&4294967295,S=C+(R<<6&4294967295|R>>>26),R=x+(C^(S|~N))+V[15]+4264355552&4294967295,x=S+(R<<10&4294967295|R>>>22),R=N+(S^(x|~C))+V[6]+2734768916&4294967295,N=x+(R<<15&4294967295|R>>>17),R=C+(x^(N|~S))+V[13]+1309151649&4294967295,C=N+(R<<21&4294967295|R>>>11),R=S+(N^(C|~x))+V[4]+4149444226&4294967295,S=C+(R<<6&4294967295|R>>>26),R=x+(C^(S|~N))+V[11]+3174756917&4294967295,x=S+(R<<10&4294967295|R>>>22),R=N+(S^(x|~C))+V[2]+718787259&4294967295,N=x+(R<<15&4294967295|R>>>17),R=C+(x^(N|~S))+V[9]+3951481745&4294967295,k.g[0]=k.g[0]+S&4294967295,k.g[1]=k.g[1]+(N+(R<<21&4294967295|R>>>11))&4294967295,k.g[2]=k.g[2]+N&4294967295,k.g[3]=k.g[3]+x&4294967295}s.prototype.v=function(k,S){S===void 0&&(S=k.length);const C=S-this.blockSize,V=this.C;let N=this.h,x=0;for(;x<S;){if(N==0)for(;x<=C;)o(this,k,x),x+=this.blockSize;if(typeof k=="string"){for(;x<S;)if(V[N++]=k.charCodeAt(x++),N==this.blockSize){o(this,V),N=0;break}}else for(;x<S;)if(V[N++]=k[x++],N==this.blockSize){o(this,V),N=0;break}}this.h=N,this.o+=S},s.prototype.A=function(){var k=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);k[0]=128;for(var S=1;S<k.length-8;++S)k[S]=0;S=this.o*8;for(var C=k.length-8;C<k.length;++C)k[C]=S&255,S/=256;for(this.v(k),k=Array(16),S=0,C=0;C<4;++C)for(let V=0;V<32;V+=8)k[S++]=this.g[C]>>>V&255;return k};function u(k,S){var C=m;return Object.prototype.hasOwnProperty.call(C,k)?C[k]:C[k]=S(k)}function h(k,S){this.h=S;const C=[];let V=!0;for(let N=k.length-1;N>=0;N--){const x=k[N]|0;V&&x==S||(C[N]=x,V=!1)}this.g=C}var m={};function g(k){return-128<=k&&k<128?u(k,function(S){return new h([S|0],S<0?-1:0)}):new h([k|0],k<0?-1:0)}function _(k){if(isNaN(k)||!isFinite(k))return T;if(k<0)return j(_(-k));const S=[];let C=1;for(let V=0;k>=C;V++)S[V]=k/C|0,C*=4294967296;return new h(S,0)}function w(k,S){if(k.length==0)throw Error("number format error: empty string");if(S=S||10,S<2||36<S)throw Error("radix out of range: "+S);if(k.charAt(0)=="-")return j(w(k.substring(1),S));if(k.indexOf("-")>=0)throw Error('number format error: interior "-" character');const C=_(Math.pow(S,8));let V=T;for(let x=0;x<k.length;x+=8){var N=Math.min(8,k.length-x);const R=parseInt(k.substring(x,x+N),S);N<8?(N=_(Math.pow(S,N)),V=V.j(N).add(_(R))):(V=V.j(C),V=V.add(_(R)))}return V}var T=g(0),A=g(1),U=g(16777216);r=h.prototype,r.m=function(){if(H(this))return-j(this).m();let k=0,S=1;for(let C=0;C<this.g.length;C++){const V=this.i(C);k+=(V>=0?V:4294967296+V)*S,S*=4294967296}return k},r.toString=function(k){if(k=k||10,k<2||36<k)throw Error("radix out of range: "+k);if(q(this))return"0";if(H(this))return"-"+j(this).toString(k);const S=_(Math.pow(k,6));var C=this;let V="";for(;;){const N=Pe(C,S).g;C=ae(C,N.j(S));let x=((C.g.length>0?C.g[0]:C.h)>>>0).toString(k);if(C=N,q(C))return x+V;for(;x.length<6;)x="0"+x;V=x+V}},r.i=function(k){return k<0?0:k<this.g.length?this.g[k]:this.h};function q(k){if(k.h!=0)return!1;for(let S=0;S<k.g.length;S++)if(k.g[S]!=0)return!1;return!0}function H(k){return k.h==-1}r.l=function(k){return k=ae(this,k),H(k)?-1:q(k)?0:1};function j(k){const S=k.g.length,C=[];for(let V=0;V<S;V++)C[V]=~k.g[V];return new h(C,~k.h).add(A)}r.abs=function(){return H(this)?j(this):this},r.add=function(k){const S=Math.max(this.g.length,k.g.length),C=[];let V=0;for(let N=0;N<=S;N++){let x=V+(this.i(N)&65535)+(k.i(N)&65535),R=(x>>>16)+(this.i(N)>>>16)+(k.i(N)>>>16);V=R>>>16,x&=65535,R&=65535,C[N]=R<<16|x}return new h(C,C[C.length-1]&-2147483648?-1:0)};function ae(k,S){return k.add(j(S))}r.j=function(k){if(q(this)||q(k))return T;if(H(this))return H(k)?j(this).j(j(k)):j(j(this).j(k));if(H(k))return j(this.j(j(k)));if(this.l(U)<0&&k.l(U)<0)return _(this.m()*k.m());const S=this.g.length+k.g.length,C=[];for(var V=0;V<2*S;V++)C[V]=0;for(V=0;V<this.g.length;V++)for(let N=0;N<k.g.length;N++){const x=this.i(V)>>>16,R=this.i(V)&65535,je=k.i(N)>>>16,vt=k.i(N)&65535;C[2*V+2*N]+=R*vt,fe(C,2*V+2*N),C[2*V+2*N+1]+=x*vt,fe(C,2*V+2*N+1),C[2*V+2*N+1]+=R*je,fe(C,2*V+2*N+1),C[2*V+2*N+2]+=x*je,fe(C,2*V+2*N+2)}for(k=0;k<S;k++)C[k]=C[2*k+1]<<16|C[2*k];for(k=S;k<2*S;k++)C[k]=0;return new h(C,0)};function fe(k,S){for(;(k[S]&65535)!=k[S];)k[S+1]+=k[S]>>>16,k[S]&=65535,S++}function we(k,S){this.g=k,this.h=S}function Pe(k,S){if(q(S))throw Error("division by zero");if(q(k))return new we(T,T);if(H(k))return S=Pe(j(k),S),new we(j(S.g),j(S.h));if(H(S))return S=Pe(k,j(S)),new we(j(S.g),S.h);if(k.g.length>30){if(H(k)||H(S))throw Error("slowDivide_ only works with positive integers.");for(var C=A,V=S;V.l(k)<=0;)C=We(C),V=We(V);var N=ke(C,1),x=ke(V,1);for(V=ke(V,2),C=ke(C,2);!q(V);){var R=x.add(V);R.l(k)<=0&&(N=N.add(C),x=R),V=ke(V,1),C=ke(C,1)}return S=ae(k,N.j(S)),new we(N,S)}for(N=T;k.l(S)>=0;){for(C=Math.max(1,Math.floor(k.m()/S.m())),V=Math.ceil(Math.log(C)/Math.LN2),V=V<=48?1:Math.pow(2,V-48),x=_(C),R=x.j(S);H(R)||R.l(k)>0;)C-=V,x=_(C),R=x.j(S);q(x)&&(x=A),N=N.add(x),k=ae(k,R)}return new we(N,k)}r.B=function(k){return Pe(this,k).h},r.and=function(k){const S=Math.max(this.g.length,k.g.length),C=[];for(let V=0;V<S;V++)C[V]=this.i(V)&k.i(V);return new h(C,this.h&k.h)},r.or=function(k){const S=Math.max(this.g.length,k.g.length),C=[];for(let V=0;V<S;V++)C[V]=this.i(V)|k.i(V);return new h(C,this.h|k.h)},r.xor=function(k){const S=Math.max(this.g.length,k.g.length),C=[];for(let V=0;V<S;V++)C[V]=this.i(V)^k.i(V);return new h(C,this.h^k.h)};function We(k){const S=k.g.length+1,C=[];for(let V=0;V<S;V++)C[V]=k.i(V)<<1|k.i(V-1)>>>31;return new h(C,k.h)}function ke(k,S){const C=S>>5;S%=32;const V=k.g.length-C,N=[];for(let x=0;x<V;x++)N[x]=S>0?k.i(x+C)>>>S|k.i(x+C+1)<<32-S:k.i(x+C);return new h(N,k.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,F_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=w,Ei=h}).apply(typeof $g<"u"?$g:typeof self<"u"?self:typeof window<"u"?window:{});var Cu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var U_,Da,z_,Fu,Vf,j_,B_,$_;(function(){var r,e=Object.defineProperty;function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Cu=="object"&&Cu];for(var p=0;p<l.length;++p){var y=l[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(l,p){if(p)e:{var y=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var M=l[E];if(!(M in y))break e;y=y[M]}l=l[l.length-1],E=y[l],p=p(E),p!=E&&p!=null&&e(y,l,{configurable:!0,writable:!0,value:p})}}o("Symbol.dispose",function(l){return l||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(l){return l||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(l){return l||function(p){var y=[],E;for(E in p)Object.prototype.hasOwnProperty.call(p,E)&&y.push([E,p[E]]);return y}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function m(l){var p=typeof l;return p=="object"&&l!=null||p=="function"}function g(l,p,y){return l.call.apply(l.bind,arguments)}function _(l,p,y){return _=g,_.apply(null,arguments)}function w(l,p){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function T(l,p){function y(){}y.prototype=p.prototype,l.Z=p.prototype,l.prototype=new y,l.prototype.constructor=l,l.Ob=function(E,M,z){for(var X=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)X[ye-2]=arguments[ye];return p.prototype[M].apply(E,X)}}var A=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?l=>l&&AsyncContext.Snapshot.wrap(l):l=>l;function U(l){const p=l.length;if(p>0){const y=Array(p);for(let E=0;E<p;E++)y[E]=l[E];return y}return[]}function q(l,p){for(let E=1;E<arguments.length;E++){const M=arguments[E];var y=typeof M;if(y=y!="object"?y:M?Array.isArray(M)?"array":y:"null",y=="array"||y=="object"&&typeof M.length=="number"){y=l.length||0;const z=M.length||0;l.length=y+z;for(let X=0;X<z;X++)l[y+X]=M[X]}else l.push(M)}}class H{constructor(p,y){this.i=p,this.j=y,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function j(l){h.setTimeout(()=>{throw l},0)}function ae(){var l=k;let p=null;return l.g&&(p=l.g,l.g=l.g.next,l.g||(l.h=null),p.next=null),p}class fe{constructor(){this.h=this.g=null}add(p,y){const E=we.get();E.set(p,y),this.h?this.h.next=E:this.g=E,this.h=E}}var we=new H(()=>new Pe,l=>l.reset());class Pe{constructor(){this.next=this.g=this.h=null}set(p,y){this.h=p,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let We,ke=!1,k=new fe,S=()=>{const l=Promise.resolve(void 0);We=()=>{l.then(C)}};function C(){for(var l;l=ae();){try{l.h.call(l.g)}catch(y){j(y)}var p=we;p.j(l),p.h<100&&(p.h++,l.next=p.g,p.g=l)}ke=!1}function V(){this.u=this.u,this.C=this.C}V.prototype.u=!1,V.prototype.dispose=function(){this.u||(this.u=!0,this.N())},V.prototype[Symbol.dispose]=function(){this.dispose()},V.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function N(l,p){this.type=l,this.g=this.target=p,this.defaultPrevented=!1}N.prototype.h=function(){this.defaultPrevented=!0};var x=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var l=!1,p=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const y=()=>{};h.addEventListener("test",y,p),h.removeEventListener("test",y,p)}catch{}return l}();function R(l){return/^[\s\xa0]*$/.test(l)}function je(l,p){N.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l&&this.init(l,p)}T(je,N),je.prototype.init=function(l,p){const y=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;this.target=l.target||l.srcElement,this.g=p,p=l.relatedTarget,p||(y=="mouseover"?p=l.fromElement:y=="mouseout"&&(p=l.toElement)),this.relatedTarget=p,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=l.pointerType,this.state=l.state,this.i=l,l.defaultPrevented&&je.Z.h.call(this)},je.prototype.h=function(){je.Z.h.call(this);const l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var vt="closure_listenable_"+(Math.random()*1e6|0),Dt=0;function Ye(l,p,y,E,M){this.listener=l,this.proxy=null,this.src=p,this.type=y,this.capture=!!E,this.ha=M,this.key=++Dt,this.da=this.fa=!1}function J(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function ue(l,p,y){for(const E in l)p.call(y,l[E],E,l)}function ne(l,p){for(const y in l)p.call(void 0,l[y],y,l)}function O(l){const p={};for(const y in l)p[y]=l[y];return p}const W="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ve(l,p){let y,E;for(let M=1;M<arguments.length;M++){E=arguments[M];for(y in E)l[y]=E[y];for(let z=0;z<W.length;z++)y=W[z],Object.prototype.hasOwnProperty.call(E,y)&&(l[y]=E[y])}}function Ee(l){this.src=l,this.g={},this.h=0}Ee.prototype.add=function(l,p,y,E,M){const z=l.toString();l=this.g[z],l||(l=this.g[z]=[],this.h++);const X=Se(l,p,E,M);return X>-1?(p=l[X],y||(p.fa=!1)):(p=new Ye(p,this.src,z,!!E,M),p.fa=y,l.push(p)),p};function Ie(l,p){const y=p.type;if(y in l.g){var E=l.g[y],M=Array.prototype.indexOf.call(E,p,void 0),z;(z=M>=0)&&Array.prototype.splice.call(E,M,1),z&&(J(p),l.g[y].length==0&&(delete l.g[y],l.h--))}}function Se(l,p,y,E){for(let M=0;M<l.length;++M){const z=l[M];if(!z.da&&z.listener==p&&z.capture==!!y&&z.ha==E)return M}return-1}var Me="closure_lm_"+(Math.random()*1e6|0),Ve={};function Ue(l,p,y,E,M){if(Array.isArray(p)){for(let z=0;z<p.length;z++)Ue(l,p[z],y,E,M);return null}return y=Oo(y),l&&l[vt]?l.J(p,y,m(E)?!!E.capture:!1,M):jt(l,p,y,!1,E,M)}function jt(l,p,y,E,M,z){if(!p)throw Error("Invalid event type");const X=m(M)?!!M.capture:!!M;let ye=Ts(l);if(ye||(l[Me]=ye=new Ee(l)),y=ye.add(p,y,E,X,z),y.proxy)return y;if(E=Es(),y.proxy=E,E.src=l,E.listener=y,l.addEventListener)x||(M=X),M===void 0&&(M=!1),l.addEventListener(p.toString(),E,M);else if(l.attachEvent)l.attachEvent(ws(p.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Es(){function l(y){return p.call(l.src,l.listener,y)}const p=cl;return l}function Vo(l,p,y,E,M){if(Array.isArray(p))for(var z=0;z<p.length;z++)Vo(l,p[z],y,E,M);else E=m(E)?!!E.capture:!!E,y=Oo(y),l&&l[vt]?(l=l.i,z=String(p).toString(),z in l.g&&(p=l.g[z],y=Se(p,y,E,M),y>-1&&(J(p[y]),Array.prototype.splice.call(p,y,1),p.length==0&&(delete l.g[z],l.h--)))):l&&(l=Ts(l))&&(p=l.g[p.toString()],l=-1,p&&(l=Se(p,y,E,M)),(y=l>-1?p[l]:null)&&Mr(y))}function Mr(l){if(typeof l!="number"&&l&&!l.da){var p=l.src;if(p&&p[vt])Ie(p.i,l);else{var y=l.type,E=l.proxy;p.removeEventListener?p.removeEventListener(y,E,l.capture):p.detachEvent?p.detachEvent(ws(y),E):p.addListener&&p.removeListener&&p.removeListener(E),(y=Ts(p))?(Ie(y,l),y.h==0&&(y.src=null,p[Me]=null)):J(l)}}}function ws(l){return l in Ve?Ve[l]:Ve[l]="on"+l}function cl(l,p){if(l.da)l=!0;else{p=new je(p,this);const y=l.listener,E=l.ha||l.src;l.fa&&Mr(l),l=y.call(E,p)}return l}function Ts(l){return l=l[Me],l instanceof Ee?l:null}var Oi="__closure_events_fn_"+(Math.random()*1e9>>>0);function Oo(l){return typeof l=="function"?l:(l[Oi]||(l[Oi]=function(p){return l.handleEvent(p)}),l[Oi])}function lt(){V.call(this),this.i=new Ee(this),this.M=this,this.G=null}T(lt,V),lt.prototype[vt]=!0,lt.prototype.removeEventListener=function(l,p,y,E){Vo(this,l,p,y,E)};function it(l,p){var y,E=l.G;if(E)for(y=[];E;E=E.G)y.push(E);if(l=l.M,E=p.type||p,typeof p=="string")p=new N(p,l);else if(p instanceof N)p.target=p.target||l;else{var M=p;p=new N(E,l),ve(p,M)}M=!0;let z,X;if(y)for(X=y.length-1;X>=0;X--)z=p.g=y[X],M=Tn(z,E,!0,p)&&M;if(z=p.g=l,M=Tn(z,E,!0,p)&&M,M=Tn(z,E,!1,p)&&M,y)for(X=0;X<y.length;X++)z=p.g=y[X],M=Tn(z,E,!1,p)&&M}lt.prototype.N=function(){if(lt.Z.N.call(this),this.i){var l=this.i;for(const p in l.g){const y=l.g[p];for(let E=0;E<y.length;E++)J(y[E]);delete l.g[p],l.h--}}this.G=null},lt.prototype.J=function(l,p,y,E){return this.i.add(String(l),p,!1,y,E)},lt.prototype.K=function(l,p,y,E){return this.i.add(String(l),p,!0,y,E)};function Tn(l,p,y,E){if(p=l.i.g[String(p)],!p)return!0;p=p.concat();let M=!0;for(let z=0;z<p.length;++z){const X=p[z];if(X&&!X.da&&X.capture==y){const ye=X.listener,st=X.ha||X.src;X.fa&&Ie(l.i,X),M=ye.call(st,E)!==!1&&M}}return M&&!E.defaultPrevented}function xo(l,p){if(typeof l!="function")if(l&&typeof l.handleEvent=="function")l=_(l.handleEvent,l);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:h.setTimeout(l,p||0)}function Lo(l){l.g=xo(()=>{l.g=null,l.i&&(l.i=!1,Lo(l))},l.l);const p=l.h;l.h=null,l.m.apply(null,p)}class hl extends V{constructor(p,y){super(),this.m=p,this.l=y,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Lo(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function br(l){V.call(this),this.h=l,this.g={}}T(br,V);var Mo=[];function Is(l){ue(l.g,function(p,y){this.g.hasOwnProperty(y)&&Mr(p)},l),l.g={}}br.prototype.N=function(){br.Z.N.call(this),Is(this)},br.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Fr=h.JSON.stringify,fl=h.JSON.parse,xi=class{stringify(l){return h.JSON.stringify(l,void 0)}parse(l){return h.JSON.parse(l,void 0)}};function Ur(){}function dl(){}var zr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ss(){N.call(this,"d")}T(Ss,N);function bo(){N.call(this,"c")}T(bo,N);var In={},As=null;function jr(){return As=As||new lt}In.Ia="serverreachability";function Rs(l){N.call(this,In.Ia,l)}T(Rs,N);function ar(l){const p=jr();it(p,new Rs(p))}In.STAT_EVENT="statevent";function lr(l,p){N.call(this,In.STAT_EVENT,l),this.stat=p}T(lr,N);function tt(l){const p=jr();it(p,new lr(p,l))}In.Ja="timingevent";function Fo(l,p){N.call(this,In.Ja,l),this.size=p}T(Fo,N);function Br(l,p){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){l()},p)}function $r(){this.g=!0}$r.prototype.ua=function(){this.g=!1};function pl(l,p,y,E,M,z){l.info(function(){if(l.g)if(z){var X="",ye=z.split("&");for(let Fe=0;Fe<ye.length;Fe++){var st=ye[Fe].split("=");if(st.length>1){const ut=st[0];st=st[1];const sn=ut.split("_");X=sn.length>=2&&sn[1]=="type"?X+(ut+"="+st+"&"):X+(ut+"=redacted&")}}}else X=null;else X=z;return"XMLHTTP REQ ("+E+") [attempt "+M+"]: "+p+`
`+y+`
`+X})}function ml(l,p,y,E,M,z,X){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+M+"]: "+p+`
`+y+`
`+z+" "+X})}function Ln(l,p,y,E){l.info(function(){return"XMLHTTP TEXT ("+p+"): "+Li(l,y)+(E?" "+E:"")})}function gl(l,p){l.info(function(){return"TIMEOUT: "+p})}$r.prototype.info=function(){};function Li(l,p){if(!l.g)return p;if(!p)return null;try{const z=JSON.parse(p);if(z){for(l=0;l<z.length;l++)if(Array.isArray(z[l])){var y=z[l];if(!(y.length<2)){var E=y[1];if(Array.isArray(E)&&!(E.length<1)){var M=E[0];if(M!="noop"&&M!="stop"&&M!="close")for(let X=1;X<E.length;X++)E[X]=""}}}}return Fr(z)}catch{return p}}var qr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Hr={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},yl;function ur(){}T(ur,Ur),ur.prototype.g=function(){return new XMLHttpRequest},yl=new ur;function Mn(l){return encodeURIComponent(String(l))}function Cs(l){var p=1;l=l.split(":");const y=[];for(;p>0&&l.length;)y.push(l.shift()),p--;return l.length&&y.push(l.join(":")),y}function hn(l,p,y,E){this.j=l,this.i=p,this.l=y,this.S=E||1,this.V=new br(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new _l}function _l(){this.i=null,this.g="",this.h=!1}var vl={},Uo={};function Sn(l,p,y){l.M=1,l.A=hr(fn(p)),l.u=y,l.R=!0,zo(l,null)}function zo(l,p){l.F=Date.now(),Mi(l),l.B=fn(l.A);var y=l.B,E=l.S;Array.isArray(E)||(E=[String(E)]),Yo(y.i,"t",E),l.C=0,y=l.j.L,l.h=new _l,l.g=kl(l.j,y?p:null,!l.u),l.P>0&&(l.O=new hl(_(l.Y,l,l.g),l.P)),p=l.V,y=l.g,E=l.ba;var M="readystatechange";Array.isArray(M)||(M&&(Mo[0]=M.toString()),M=Mo);for(let z=0;z<M.length;z++){const X=Ue(y,M[z],E||p.handleEvent,!1,p.h||p);if(!X)break;p.g[X.key]=X}p=l.J?O(l.J):{},l.u?(l.v||(l.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.B,l.v,l.u,p)):(l.v="GET",l.g.ea(l.B,l.v,null,p)),ar(),pl(l.i,l.v,l.B,l.l,l.S,l.u)}hn.prototype.ba=function(l){l=l.target;const p=this.O;p&&$n(l)==3?p.j():this.Y(l)},hn.prototype.Y=function(l){try{if(l==this.g)e:{const ye=$n(this.g),st=this.g.ya(),Fe=this.g.ca();if(!(ye<3)&&(ye!=3||this.g&&(this.h.h||this.g.la()||Cl(this.g)))){this.K||ye!=4||st==7||(st==8||Fe<=0?ar(3):ar(2)),Ps(this);var p=this.g.ca();this.X=p;var y=El(this);if(this.o=p==200,ml(this.i,this.v,this.B,this.l,this.S,ye,p),this.o){if(this.U&&!this.L){t:{if(this.g){var E,M=this.g;if((E=M.g?M.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(E)){var z=E;break t}}z=null}if(l=z)Ln(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ge(this,l);else{this.o=!1,this.m=3,tt(12),cr(this),bi(this);break e}}if(this.R){l=!0;let ut;for(;!this.K&&this.C<y.length;)if(ut=Tl(this,y),ut==Uo){ye==4&&(this.m=4,tt(14),l=!1),Ln(this.i,this.l,null,"[Incomplete Response]");break}else if(ut==vl){this.m=4,tt(15),Ln(this.i,this.l,y,"[Invalid Chunk]"),l=!1;break}else Ln(this.i,this.l,ut,null),Ge(this,ut);if(wl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ye!=4||y.length!=0||this.h.h||(this.m=1,tt(16),l=!1),this.o=this.o&&l,!l)Ln(this.i,this.l,y,"[Invalid Chunked Response]"),cr(this),bi(this);else if(y.length>0&&!this.W){this.W=!0;var X=this.j;X.g==this&&X.aa&&!X.P&&(X.j.info("Great, no buffering proxy detected. Bytes received: "+y.length),Wi(X),X.P=!0,tt(11))}}else Ln(this.i,this.l,y,null),Ge(this,y);ye==4&&cr(this),this.o&&!this.K&&(ye==4?Fs(this.j,this):(this.o=!1,Mi(this)))}else Jo(this.g),p==400&&y.indexOf("Unknown SID")>0?(this.m=3,tt(12)):(this.m=0,tt(13)),cr(this),bi(this)}}}catch{}finally{}};function El(l){if(!wl(l))return l.g.la();const p=Cl(l.g);if(p==="")return"";let y="";const E=p.length,M=$n(l.g)==4;if(!l.h.i){if(typeof TextDecoder>"u")return cr(l),bi(l),"";l.h.i=new h.TextDecoder}for(let z=0;z<E;z++)l.h.h=!0,y+=l.h.i.decode(p[z],{stream:!(M&&z==E-1)});return p.length=0,l.h.g+=y,l.C=0,l.h.g}function wl(l){return l.g?l.v=="GET"&&l.M!=2&&l.j.Aa:!1}function Tl(l,p){var y=l.C,E=p.indexOf(`
`,y);return E==-1?Uo:(y=Number(p.substring(y,E)),isNaN(y)?vl:(E+=1,E+y>p.length?Uo:(p=p.slice(E,E+y),l.C=E+y,p)))}hn.prototype.cancel=function(){this.K=!0,cr(this)};function Mi(l){l.T=Date.now()+l.H,jo(l,l.H)}function jo(l,p){if(l.D!=null)throw Error("WatchDog timer not null");l.D=Br(_(l.aa,l),p)}function Ps(l){l.D&&(h.clearTimeout(l.D),l.D=null)}hn.prototype.aa=function(){this.D=null;const l=Date.now();l-this.T>=0?(gl(this.i,this.B),this.M!=2&&(ar(),tt(17)),cr(this),this.m=2,bi(this)):jo(this,this.T-l)};function bi(l){l.j.I==0||l.K||Fs(l.j,l)}function cr(l){Ps(l);var p=l.O;p&&typeof p.dispose=="function"&&p.dispose(),l.O=null,Is(l.V),l.g&&(p=l.g,l.g=null,p.abort(),p.dispose())}function Ge(l,p){try{var y=l.j;if(y.I!=0&&(y.g==l||$o(y.h,l))){if(!l.L&&$o(y.h,l)&&y.I==3){try{var E=y.Ba.g.parse(p)}catch{E=null}if(Array.isArray(E)&&E.length==3){var M=E;if(M[0]==0){e:if(!y.v){if(y.g)if(y.g.F+3e3<l.F)bs(y),nn(y);else break e;Wn(y),tt(18)}}else y.xa=M[1],0<y.xa-y.K&&M[2]<37500&&y.F&&y.A==0&&!y.C&&(y.C=Br(_(y.Va,y),6e3));Fi(y.h)<=1&&y.ta&&(y.ta=void 0)}else rn(y,11)}else if((l.L||y.g==l)&&bs(y),!R(p))for(M=y.Ba.g.parse(p),p=0;p<M.length;p++){let Fe=M[p];const ut=Fe[0];if(!(ut<=y.K))if(y.K=ut,Fe=Fe[1],y.I==2)if(Fe[0]=="c"){y.M=Fe[1],y.ba=Fe[2];const sn=Fe[3];sn!=null&&(y.ka=sn,y.j.info("VER="+y.ka));const gr=Fe[4];gr!=null&&(y.za=gr,y.j.info("SVER="+y.za));const Gn=Fe[5];Gn!=null&&typeof Gn=="number"&&Gn>0&&(E=1.5*Gn,y.O=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const Kn=l.g;if(Kn){const js=Kn.g?Kn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(js){var z=E.h;z.g||js.indexOf("spdy")==-1&&js.indexOf("quic")==-1&&js.indexOf("h2")==-1||(z.j=z.l,z.g=new Set,z.h&&(Ns(z,z.h),z.h=null))}if(E.G){const ta=Kn.g?Kn.g.getResponseHeader("X-HTTP-Session-Id"):null;ta&&(E.wa=ta,Le(E.J,E.G,ta))}}y.I=3,y.l&&y.l.ra(),y.aa&&(y.T=Date.now()-l.F,y.j.info("Handshake RTT: "+y.T+"ms")),E=y;var X=l;if(E.na=ea(E,E.L?E.ba:null,E.W),X.L){Ui(E.h,X);var ye=X,st=E.O;st&&(ye.H=st),ye.D&&(Ps(ye),Mi(ye)),E.g=X}else Vt(E);y.i.length>0&&mr(y)}else Fe[0]!="stop"&&Fe[0]!="close"||rn(y,7);else y.I==3&&(Fe[0]=="stop"||Fe[0]=="close"?Fe[0]=="stop"?rn(y,7):Ls(y):Fe[0]!="noop"&&y.l&&y.l.qa(Fe),y.A=0)}}ar(4)}catch{}}var Lc=class{constructor(l,p){this.g=l,this.map=p}};function ks(l){this.l=l||10,h.PerformanceNavigationTiming?(l=h.performance.getEntriesByType("navigation"),l=l.length>0&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Bo(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Fi(l){return l.h?1:l.g?l.g.size:0}function $o(l,p){return l.h?l.h==p:l.g?l.g.has(p):!1}function Ns(l,p){l.g?l.g.add(p):l.h=p}function Ui(l,p){l.h&&l.h==p?l.h=null:l.g&&l.g.has(p)&&l.g.delete(p)}ks.prototype.cancel=function(){if(this.i=Zt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Zt(l){if(l.h!=null)return l.i.concat(l.h.G);if(l.g!=null&&l.g.size!==0){let p=l.i;for(const y of l.g.values())p=p.concat(y.G);return p}return U(l.i)}var Il=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function en(l,p){if(l){l=l.split("&");for(let y=0;y<l.length;y++){const E=l[y].indexOf("=");let M,z=null;E>=0?(M=l[y].substring(0,E),z=l[y].substring(E+1)):M=l[y],p(M,z?decodeURIComponent(z.replace(/\+/g," ")):"")}}}function bn(l){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;l instanceof bn?(this.l=l.l,zi(this,l.j),this.o=l.o,this.g=l.g,Fn(this,l.u),this.h=l.h,Wr(this,Xo(l.i)),this.m=l.m):l&&(p=String(l).match(Il))?(this.l=!1,zi(this,p[1]||"",!0),this.o=ji(p[2]||""),this.g=ji(p[3]||"",!0),Fn(this,p[4]),this.h=ji(p[5]||"",!0),Wr(this,p[6]||"",!0),this.m=ji(p[7]||"")):(this.l=!1,this.i=new Ne(null,this.l))}bn.prototype.toString=function(){const l=[];var p=this.j;p&&l.push(Bi(p,Ho,!0),":");var y=this.g;return(y||p=="file")&&(l.push("//"),(p=this.o)&&l.push(Bi(p,Ho,!0),"@"),l.push(Mn(y).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.u,y!=null&&l.push(":",String(y))),(y=this.h)&&(this.g&&y.charAt(0)!="/"&&l.push("/"),l.push(Bi(y,y.charAt(0)=="/"?$i:Wo,!0))),(y=this.i.toString())&&l.push("?",y),(y=this.m)&&l.push("#",Bi(y,Go)),l.join("")},bn.prototype.resolve=function(l){const p=fn(this);let y=!!l.j;y?zi(p,l.j):y=!!l.o,y?p.o=l.o:y=!!l.g,y?p.g=l.g:y=l.u!=null;var E=l.h;if(y)Fn(p,l.u);else if(y=!!l.h){if(E.charAt(0)!="/")if(this.g&&!this.h)E="/"+E;else{var M=p.h.lastIndexOf("/");M!=-1&&(E=p.h.slice(0,M+1)+E)}if(M=E,M==".."||M==".")E="";else if(M.indexOf("./")!=-1||M.indexOf("/.")!=-1){E=M.lastIndexOf("/",0)==0,M=M.split("/");const z=[];for(let X=0;X<M.length;){const ye=M[X++];ye=="."?E&&X==M.length&&z.push(""):ye==".."?((z.length>1||z.length==1&&z[0]!="")&&z.pop(),E&&X==M.length&&z.push("")):(z.push(ye),E=!0)}E=z.join("/")}else E=M}return y?p.h=E:y=l.i.toString()!=="",y?Wr(p,Xo(l.i)):y=!!l.m,y&&(p.m=l.m),p};function fn(l){return new bn(l)}function zi(l,p,y){l.j=y?ji(p,!0):p,l.j&&(l.j=l.j.replace(/:$/,""))}function Fn(l,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);l.u=p}else l.u=null}function Wr(l,p,y){p instanceof Ne?(l.i=p,Vs(l.i,l.l)):(y||(p=Bi(p,Mc)),l.i=new Ne(p,l.l))}function Le(l,p,y){l.i.set(p,y)}function hr(l){return Le(l,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),l}function ji(l,p){return l?p?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Bi(l,p,y){return typeof l=="string"?(l=encodeURI(l).replace(p,qo),y&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function qo(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Ho=/[#\/\?@]/g,Wo=/[#\?:]/g,$i=/[#\?]/g,Mc=/[#\?@]/g,Go=/#/g;function Ne(l,p){this.h=this.g=null,this.i=l||null,this.j=!!p}function Un(l){l.g||(l.g=new Map,l.h=0,l.i&&en(l.i,function(p,y){l.add(decodeURIComponent(p.replace(/\+/g," ")),y)}))}r=Ne.prototype,r.add=function(l,p){Un(this),this.i=null,l=zn(this,l);let y=this.g.get(l);return y||this.g.set(l,y=[]),y.push(p),this.h+=1,this};function Ko(l,p){Un(l),p=zn(l,p),l.g.has(p)&&(l.i=null,l.h-=l.g.get(p).length,l.g.delete(p))}function Ds(l,p){return Un(l),p=zn(l,p),l.g.has(p)}r.forEach=function(l,p){Un(this),this.g.forEach(function(y,E){y.forEach(function(M){l.call(p,M,E,this)},this)},this)};function Qo(l,p){Un(l);let y=[];if(typeof p=="string")Ds(l,p)&&(y=y.concat(l.g.get(zn(l,p))));else for(l=Array.from(l.g.values()),p=0;p<l.length;p++)y=y.concat(l[p]);return y}r.set=function(l,p){return Un(this),this.i=null,l=zn(this,l),Ds(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[p]),this.h+=1,this},r.get=function(l,p){return l?(l=Qo(this,l),l.length>0?String(l[0]):p):p};function Yo(l,p,y){Ko(l,p),y.length>0&&(l.i=null,l.g.set(zn(l,p),U(y)),l.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],p=Array.from(this.g.keys());for(let E=0;E<p.length;E++){var y=p[E];const M=Mn(y);y=Qo(this,y);for(let z=0;z<y.length;z++){let X=M;y[z]!==""&&(X+="="+Mn(y[z])),l.push(X)}}return this.i=l.join("&")};function Xo(l){const p=new Ne;return p.i=l.i,l.g&&(p.g=new Map(l.g),p.h=l.h),p}function zn(l,p){return p=String(p),l.j&&(p=p.toLowerCase()),p}function Vs(l,p){p&&!l.j&&(Un(l),l.i=null,l.g.forEach(function(y,E){const M=E.toLowerCase();E!=M&&(Ko(this,E),Yo(this,M,y))},l)),l.j=p}function jn(l,p){const y=new $r;if(h.Image){const E=new Image;E.onload=w(St,y,"TestLoadImage: loaded",!0,p,E),E.onerror=w(St,y,"TestLoadImage: error",!1,p,E),E.onabort=w(St,y,"TestLoadImage: abort",!1,p,E),E.ontimeout=w(St,y,"TestLoadImage: timeout",!1,p,E),h.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else p(!1)}function Bn(l,p){const y=new $r,E=new AbortController,M=setTimeout(()=>{E.abort(),St(y,"TestPingServer: timeout",!1,p)},1e4);fetch(l,{signal:E.signal}).then(z=>{clearTimeout(M),z.ok?St(y,"TestPingServer: ok",!0,p):St(y,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(M),St(y,"TestPingServer: error",!1,p)})}function St(l,p,y,E,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),E(y)}catch{}}function qi(){this.g=new xi}function fr(l){this.i=l.Sb||null,this.h=l.ab||!1}T(fr,Ur),fr.prototype.g=function(){return new tn(this.i,this.h)};function tn(l,p){lt.call(this),this.H=l,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}T(tn,lt),r=tn.prototype,r.open=function(l,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=l,this.D=p,this.readyState=1,An(this)},r.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};l&&(p.body=l),(this.H||h).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Gr(this)),this.readyState=0},r.Pa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,An(this)),this.g&&(this.readyState=3,An(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Sl(this)}else l.text().then(this.Oa.bind(this),this.ga.bind(this))};function Sl(l){l.j.read().then(l.Ma.bind(l)).catch(l.ga.bind(l))}r.Ma=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var p=l.value?l.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!l.done}))&&(this.response=this.responseText+=p)}l.done?Gr(this):An(this),this.readyState==3&&Sl(this)}},r.Oa=function(l){this.g&&(this.response=this.responseText=l,Gr(this))},r.Na=function(l){this.g&&(this.response=l,Gr(this))},r.ga=function(){this.g&&Gr(this)};function Gr(l){l.readyState=4,l.l=null,l.j=null,l.B=null,An(l)}r.setRequestHeader=function(l,p){this.A.append(l,p)},r.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],p=this.h.entries();for(var y=p.next();!y.done;)y=y.value,l.push(y[0]+": "+y[1]),y=p.next();return l.join(`\r
`)};function An(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(tn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Al(l){let p="";return ue(l,function(y,E){p+=E,p+=":",p+=y,p+=`\r
`}),p}function Os(l,p,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=Al(y),typeof l=="string"?y!=null&&Mn(y):Le(l,p,y))}function ze(l){lt.call(this),this.headers=new Map,this.L=l||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}T(ze,lt);var Rl=/^https?$/i,bc=["POST","PUT"];r=ze.prototype,r.Fa=function(l){this.H=l},r.ea=function(l,p,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);p=p?p.toUpperCase():"GET",this.D=l,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():yl.g(),this.g.onreadystatechange=A(_(this.Ca,this));try{this.B=!0,this.g.open(p,String(l),!0),this.B=!1}catch(z){Kr(this,z);return}if(l=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var M in E)y.set(M,E[M]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const z of E.keys())y.set(z,E.get(z));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(z=>z.toLowerCase()=="content-type"),M=h.FormData&&l instanceof h.FormData,!(Array.prototype.indexOf.call(bc,p,void 0)>=0)||E||M||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[z,X]of y)this.g.setRequestHeader(z,X);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(l),this.v=!1}catch(z){Kr(this,z)}};function Kr(l,p){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=p,l.o=5,Qr(l),pr(l)}function Qr(l){l.A||(l.A=!0,it(l,"complete"),it(l,"error"))}r.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=l||7,it(this,"complete"),it(this,"abort"),pr(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),pr(this,!0)),ze.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?dr(this):this.Xa())},r.Xa=function(){dr(this)};function dr(l){if(l.h&&typeof u<"u"){if(l.v&&$n(l)==4)setTimeout(l.Ca.bind(l),0);else if(it(l,"readystatechange"),$n(l)==4){l.h=!1;try{const z=l.ca();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var y;if(!(y=p)){var E;if(E=z===0){let X=String(l.D).match(Il)[1]||null;!X&&h.self&&h.self.location&&(X=h.self.location.protocol.slice(0,-1)),E=!Rl.test(X?X.toLowerCase():"")}y=E}if(y)it(l,"complete"),it(l,"success");else{l.o=6;try{var M=$n(l)>2?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.ca()+"]",Qr(l)}}finally{pr(l)}}}}function pr(l,p){if(l.g){l.m&&(clearTimeout(l.m),l.m=null);const y=l.g;l.g=null,p||it(l,"ready");try{y.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function $n(l){return l.g?l.g.readyState:0}r.ca=function(){try{return $n(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(l){if(this.g){var p=this.g.responseText;return l&&p.indexOf(l)==0&&(p=p.substring(l.length)),fl(p)}};function Cl(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.F){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Jo(l){const p={};l=(l.g&&$n(l)>=2&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(R(l[E]))continue;var y=Cs(l[E]);const M=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const z=p[M]||[];p[M]=z,z.push(y)}ne(p,function(E){return E.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function qn(l,p,y){return y&&y.internalChannelParams&&y.internalChannelParams[l]||p}function xs(l){this.za=0,this.i=[],this.j=new $r,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=qn("failFast",!1,l),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=qn("baseRetryDelayMs",5e3,l),this.Za=qn("retryDelaySeedMs",1e4,l),this.Ta=qn("forwardChannelMaxRetries",2,l),this.va=qn("forwardChannelRequestTimeoutMs",2e4,l),this.ma=l&&l.xmlHttpFactory||void 0,this.Ua=l&&l.Rb||void 0,this.Aa=l&&l.useFetchStreams||!1,this.O=void 0,this.L=l&&l.supportsCrossDomainXhr||!1,this.M="",this.h=new ks(l&&l.concurrentRequestLimit),this.Ba=new qi,this.S=l&&l.fastHandshake||!1,this.R=l&&l.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=l&&l.Pb||!1,l&&l.ua&&this.j.ua(),l&&l.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&l&&l.detectBufferingProxy||!1,this.ia=void 0,l&&l.longPollingTimeout&&l.longPollingTimeout>0&&(this.ia=l.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=xs.prototype,r.ka=8,r.I=1,r.connect=function(l,p,y,E){tt(0),this.W=l,this.H=p||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.J=ea(this,null,this.W),mr(this)};function Ls(l){if(Ms(l),l.I==3){var p=l.V++,y=fn(l.J);if(Le(y,"SID",l.M),Le(y,"RID",p),Le(y,"TYPE","terminate"),Hn(l,y),p=new hn(l,l.j,p),p.M=2,p.A=hr(fn(y)),y=!1,h.navigator&&h.navigator.sendBeacon)try{y=h.navigator.sendBeacon(p.A.toString(),"")}catch{}!y&&h.Image&&(new Image().src=p.A,y=!0),y||(p.g=kl(p.j,null),p.g.ea(p.A)),p.F=Date.now(),Mi(p)}Gi(l)}function nn(l){l.g&&(Wi(l),l.g.cancel(),l.g=null)}function Ms(l){nn(l),l.v&&(h.clearTimeout(l.v),l.v=null),bs(l),l.h.cancel(),l.m&&(typeof l.m=="number"&&h.clearTimeout(l.m),l.m=null)}function mr(l){if(!Bo(l.h)&&!l.m){l.m=!0;var p=l.Ea;We||S(),ke||(We(),ke=!0),k.add(p,l),l.D=0}}function Pl(l,p){return Fi(l.h)>=l.h.j-(l.m?1:0)?!1:l.m?(l.i=p.G.concat(l.i),!0):l.I==1||l.I==2||l.D>=(l.Sa?0:l.Ta)?!1:(l.m=Br(_(l.Ea,l,p),Us(l,l.D)),l.D++,!0)}r.Ea=function(l){if(this.m)if(this.m=null,this.I==1){if(!l){this.V=Math.floor(Math.random()*1e5),l=this.V++;const M=new hn(this,this.j,l);let z=this.o;if(this.U&&(z?(z=O(z),ve(z,this.U)):z=this.U),this.u!==null||this.R||(M.J=z,z=null),this.S)e:{for(var p=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(p+=E,p>4096){p=y;break e}if(p===4096||y===this.i.length-1){p=y+1;break e}}p=1e3}else p=1e3;p=Zo(this,M,p),y=fn(this.J),Le(y,"RID",l),Le(y,"CVER",22),this.G&&Le(y,"X-HTTP-Session-Id",this.G),Hn(this,y),z&&(this.R?p="headers="+Mn(Al(z))+"&"+p:this.u&&Os(y,this.u,z)),Ns(this.h,M),this.Ra&&Le(y,"TYPE","init"),this.S?(Le(y,"$req",p),Le(y,"SID","null"),M.U=!0,Sn(M,y,null)):Sn(M,y,p),this.I=2}}else this.I==3&&(l?Hi(this,l):this.i.length==0||Bo(this.h)||Hi(this))};function Hi(l,p){var y;p?y=p.l:y=l.V++;const E=fn(l.J);Le(E,"SID",l.M),Le(E,"RID",y),Le(E,"AID",l.K),Hn(l,E),l.u&&l.o&&Os(E,l.u,l.o),y=new hn(l,l.j,y,l.D+1),l.u===null&&(y.J=l.o),p&&(l.i=p.G.concat(l.i)),p=Zo(l,y,1e3),y.H=Math.round(l.va*.5)+Math.round(l.va*.5*Math.random()),Ns(l.h,y),Sn(y,E,p)}function Hn(l,p){l.H&&ue(l.H,function(y,E){Le(p,E,y)}),l.l&&ue({},function(y,E){Le(p,E,y)})}function Zo(l,p,y){y=Math.min(l.i.length,y);const E=l.l?_(l.l.Ka,l.l,l):null;e:{var M=l.i;let ye=-1;for(;;){const st=["count="+y];ye==-1?y>0?(ye=M[0].g,st.push("ofs="+ye)):ye=0:st.push("ofs="+ye);let Fe=!0;for(let ut=0;ut<y;ut++){var z=M[ut].g;const sn=M[ut].map;if(z-=ye,z<0)ye=Math.max(0,M[ut].g-100),Fe=!1;else try{z="req"+z+"_"||"";try{var X=sn instanceof Map?sn:Object.entries(sn);for(const[gr,Gn]of X){let Kn=Gn;m(Gn)&&(Kn=Fr(Gn)),st.push(z+gr+"="+encodeURIComponent(Kn))}}catch(gr){throw st.push(z+"type="+encodeURIComponent("_badmap")),gr}}catch{E&&E(sn)}}if(Fe){X=st.join("&");break e}}X=void 0}return l=l.i.splice(0,y),p.G=l,X}function Vt(l){if(!l.g&&!l.v){l.Y=1;var p=l.Da;We||S(),ke||(We(),ke=!0),k.add(p,l),l.A=0}}function Wn(l){return l.g||l.v||l.A>=3?!1:(l.Y++,l.v=Br(_(l.Da,l),Us(l,l.A)),l.A++,!0)}r.Da=function(){if(this.v=null,Yr(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var l=4*this.T;this.j.info("BP detection timer enabled: "+l),this.B=Br(_(this.Wa,this),l)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,tt(10),nn(this),Yr(this))};function Wi(l){l.B!=null&&(h.clearTimeout(l.B),l.B=null)}function Yr(l){l.g=new hn(l,l.j,"rpc",l.Y),l.u===null&&(l.g.J=l.o),l.g.P=0;var p=fn(l.na);Le(p,"RID","rpc"),Le(p,"SID",l.M),Le(p,"AID",l.K),Le(p,"CI",l.F?"0":"1"),!l.F&&l.ia&&Le(p,"TO",l.ia),Le(p,"TYPE","xmlhttp"),Hn(l,p),l.u&&l.o&&Os(p,l.u,l.o),l.O&&(l.g.H=l.O);var y=l.g;l=l.ba,y.M=1,y.A=hr(fn(p)),y.u=null,y.R=!0,zo(y,l)}r.Va=function(){this.C!=null&&(this.C=null,nn(this),Wn(this),tt(19))};function bs(l){l.C!=null&&(h.clearTimeout(l.C),l.C=null)}function Fs(l,p){var y=null;if(l.g==p){bs(l),Wi(l),l.g=null;var E=2}else if($o(l.h,p))y=p.G,Ui(l.h,p),E=1;else return;if(l.I!=0){if(p.o)if(E==1){y=p.u?p.u.length:0,p=Date.now()-p.F;var M=l.D;E=jr(),it(E,new Fo(E,y)),mr(l)}else Vt(l);else if(M=p.m,M==3||M==0&&p.X>0||!(E==1&&Pl(l,p)||E==2&&Wn(l)))switch(y&&y.length>0&&(p=l.h,p.i=p.i.concat(y)),M){case 1:rn(l,5);break;case 4:rn(l,10);break;case 3:rn(l,6);break;default:rn(l,2)}}}function Us(l,p){let y=l.Qa+Math.floor(Math.random()*l.Za);return l.isActive()||(y*=2),y*p}function rn(l,p){if(l.j.info("Error code "+p),p==2){var y=_(l.bb,l),E=l.Ua;const M=!E;E=new bn(E||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||zi(E,"https"),hr(E),M?jn(E.toString(),y):Bn(E.toString(),y)}else tt(2);l.I=0,l.l&&l.l.pa(p),Gi(l),Ms(l)}r.bb=function(l){l?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function Gi(l){if(l.I=0,l.ja=[],l.l){const p=Zt(l.h);(p.length!=0||l.i.length!=0)&&(q(l.ja,p),q(l.ja,l.i),l.h.i.length=0,U(l.i),l.i.length=0),l.l.oa()}}function ea(l,p,y){var E=y instanceof bn?fn(y):new bn(y);if(E.g!="")p&&(E.g=p+"."+E.g),Fn(E,E.u);else{var M=h.location;E=M.protocol,p=p?p+"."+M.hostname:M.hostname,M=+M.port;const z=new bn(null);E&&zi(z,E),p&&(z.g=p),M&&Fn(z,M),y&&(z.h=y),E=z}return y=l.G,p=l.wa,y&&p&&Le(E,y,p),Le(E,"VER",l.ka),Hn(l,E),E}function kl(l,p,y){if(p&&!l.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=l.Aa&&!l.ma?new ze(new fr({ab:y})):new ze(l.ma),p.Fa(l.L),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Nl(){}r=Nl.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function zs(){}zs.prototype.g=function(l,p){return new At(l,p)};function At(l,p){lt.call(this),this.g=new xs(p),this.l=l,this.h=p&&p.messageUrlParams||null,l=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(l?l["X-WebChannel-Content-Type"]=p.messageContentType:l={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(l?l["X-WebChannel-Client-Profile"]=p.sa:l={"X-WebChannel-Client-Profile":p.sa}),this.g.U=l,(l=p&&p.Qb)&&!R(l)&&(this.g.u=l),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!R(p)&&(this.g.G=p,l=this.h,l!==null&&p in l&&(l=this.h,p in l&&delete l[p])),this.j=new Xr(this)}T(At,lt),At.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){Ls(this.g)},At.prototype.o=function(l){var p=this.g;if(typeof l=="string"){var y={};y.__data__=l,l=y}else this.v&&(y={},y.__data__=Fr(l),l=y);p.i.push(new Lc(p.Ya++,l)),p.I==3&&mr(p)},At.prototype.N=function(){this.g.l=null,delete this.j,Ls(this.g),delete this.g,At.Z.N.call(this)};function Dl(l){Ss.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var p=l.__sm__;if(p){e:{for(const y in p){l=y;break e}l=void 0}(this.i=l)&&(l=this.i,p=p!==null&&l in p?p[l]:void 0),this.data=p}else this.data=l}T(Dl,Ss);function Vl(){bo.call(this),this.status=1}T(Vl,bo);function Xr(l){this.g=l}T(Xr,Nl),Xr.prototype.ra=function(){it(this.g,"a")},Xr.prototype.qa=function(l){it(this.g,new Dl(l))},Xr.prototype.pa=function(l){it(this.g,new Vl)},Xr.prototype.oa=function(){it(this.g,"b")},zs.prototype.createWebChannel=zs.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,$_=function(){return new zs},B_=function(){return jr()},j_=In,Vf={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},qr.NO_ERROR=0,qr.TIMEOUT=8,qr.HTTP_ERROR=6,Fu=qr,Hr.COMPLETE="complete",z_=Hr,dl.EventType=zr,zr.OPEN="a",zr.CLOSE="b",zr.ERROR="c",zr.MESSAGE="d",lt.prototype.listen=lt.prototype.J,Da=dl,ze.prototype.listenOnce=ze.prototype.K,ze.prototype.getLastError=ze.prototype.Ha,ze.prototype.getLastErrorCode=ze.prototype.ya,ze.prototype.getStatus=ze.prototype.ca,ze.prototype.getResponseJson=ze.prototype.La,ze.prototype.getResponseText=ze.prototype.la,ze.prototype.send=ze.prototype.ea,ze.prototype.setWithCredentials=ze.prototype.Fa,U_=ze}).apply(typeof Cu<"u"?Cu:typeof self<"u"?self:typeof window<"u"?window:{});const qg="@firebase/firestore",Hg="4.9.2";/**
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
 */const ms=new Jf("@firebase/firestore");function uo(){return ms.logLevel}function te(r,...e){if(ms.logLevel<=Ae.DEBUG){const t=e.map(hd);ms.debug(`Firestore (${Po}): ${r}`,...t)}}function Vr(r,...e){if(ms.logLevel<=Ae.ERROR){const t=e.map(hd);ms.error(`Firestore (${Po}): ${r}`,...t)}}function vo(r,...e){if(ms.logLevel<=Ae.WARN){const t=e.map(hd);ms.warn(`Firestore (${Po}): ${r}`,...t)}}function hd(r){if(typeof r=="string")return r;try{/**
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
 */function pe(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,q_(r,s,t)}function q_(r,e,t){let s=`FIRESTORE (${Po}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Vr(s),new Error(s)}function be(r,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,r||q_(e,o,s)}function _e(r,e){return r}/**
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
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends Lr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class H_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class FS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ft.UNAUTHENTICATED))}shutdown(){}}class US{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class zS{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){be(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let u=new kr;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new kr,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const g=u;e.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},m=g=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(g=>m(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new kr)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(be(typeof s.accessToken=="string",31837,{l:s}),new H_(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string",2055,{h:e}),new Ft(e)}}class jS{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class BS{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new jS(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Wg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $S{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,un(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){be(this.o===void 0,3512);const s=u=>{u.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,te("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Wg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(be(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Wg(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function qS(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class fd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=qS(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Re(r,e){return r<e?-1:r>e?1:0}function Of(r,e){const t=Math.min(r.length,e.length);for(let s=0;s<t;s++){const o=r.charAt(s),u=e.charAt(s);if(o!==u)return yf(o)===yf(u)?Re(o,u):yf(o)?1:-1}return Re(r.length,e.length)}const HS=55296,WS=57343;function yf(r){const e=r.charCodeAt(0);return e>=HS&&e<=WS}function Eo(r,e,t){return r.length===e.length&&r.every((s,o)=>t(s,e[o]))}/**
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
 */const Gg="__name__";class er{constructor(e,t,s){t===void 0?t=0:t>e.length&&pe(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&pe(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return er.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof er?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=er.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Re(e.length,t.length)}static compareSegments(e,t){const s=er.isNumericId(e),o=er.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?er.extractNumericId(e).compare(er.extractNumericId(t)):Of(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ei.fromString(e.substring(4,e.length-2))}}class qe extends er{construct(e,t,s){return new qe(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new Z(B.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new qe(t)}static emptyPath(){return new qe([])}}const GS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class kt extends er{construct(e,t,s){return new kt(e,t,s)}static isValidIdentifier(e){return GS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),kt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Gg}static keyField(){return new kt([Gg])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new Z(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new Z(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new Z(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new Z(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new kt(t)}static emptyPath(){return new kt([])}}/**
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
 */class le{constructor(e){this.path=e}static fromPath(e){return new le(qe.fromString(e))}static fromName(e){return new le(qe.fromString(e).popFirst(5))}static empty(){return new le(qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return qe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new le(new qe(e.slice()))}}/**
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
 */function W_(r,e,t){if(!t)throw new Z(B.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function KS(r,e,t,s){if(e===!0&&s===!0)throw new Z(B.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Kg(r){if(!le.isDocumentKey(r))throw new Z(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Qg(r){if(le.isDocumentKey(r))throw new Z(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function G_(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function mc(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":pe(12329,{type:typeof r})}function Jt(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new Z(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=mc(r);throw new Z(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */function dt(r,e){const t={typeString:r};return e&&(t.value=e),t}function rl(r,e){if(!G_(r))throw new Z(B.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){t=`JSON missing required field: '${s}'`;break}const h=r[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new Z(B.INVALID_ARGUMENT,t);return!0}/**
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
 */const Yg=-62135596800,Xg=1e6;class He{static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Xg);return new He(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Z(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Z(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Yg)throw new Z(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Xg}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:He._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(rl(e,He._jsonSchema))return new He(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Yg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}He._jsonSchemaVersion="firestore/timestamp/1.0",He._jsonSchema={type:dt("string",He._jsonSchemaVersion),seconds:dt("number"),nanoseconds:dt("number")};/**
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
 */class ge{static fromTimestamp(e){return new ge(e)}static min(){return new ge(new He(0,0))}static max(){return new ge(new He(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ha=-1;function QS(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=ge.fromTimestamp(s===1e9?new He(t+1,0):new He(t,s));return new Ti(o,le.empty(),e)}function YS(r){return new Ti(r.readTime,r.key,Ha)}class Ti{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ti(ge.min(),le.empty(),Ha)}static max(){return new Ti(ge.max(),le.empty(),Ha)}}function XS(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=le.comparator(r.documentKey,e.documentKey),t!==0?t:Re(r.largestBatchId,e.largestBatchId))}/**
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
 */const JS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ZS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ko(r){if(r.code!==B.FAILED_PRECONDITION||r.message!==JS)throw r;te("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&pe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new $((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof $?t:$.resolve(t)}catch(t){return $.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):$.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):$.reject(t)}static resolve(e){return new $((t,s)=>{t(e)})}static reject(e){return new $((t,s)=>{s(e)})}static waitFor(e){return new $((t,s)=>{let o=0,u=0,h=!1;e.forEach(m=>{++o,m.next(()=>{++u,h&&u===o&&t()},g=>s(g))}),h=!0,u===o&&t()})}static or(e){let t=$.resolve(!1);for(const s of e)t=t.next(o=>o?$.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,u)=>{s.push(t.call(this,o,u))}),this.waitFor(s)}static mapArray(e,t){return new $((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let g=0;g<u;g++){const _=g;t(e[_]).next(w=>{h[_]=w,++m,m===u&&s(h)},w=>o(w))}})}static doWhile(e,t){return new $((s,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):s()};u()})}}function eA(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function No(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class gc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}gc.ce=-1;/**
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
 */const dd=-1;function yc(r){return r==null}function Ju(r){return r===0&&1/r==-1/0}function tA(r){return typeof r=="number"&&Number.isInteger(r)&&!Ju(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const K_="";function nA(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Jg(e)),e=rA(r.get(t),e);return Jg(e)}function rA(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":t+="";break;case K_:t+="";break;default:t+=u}}return t}function Jg(r){return r+K_+""}/**
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
 */function Zg(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Di(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Q_(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class et{constructor(e,t){this.comparator=e,this.root=t||Pt.EMPTY}insert(e,t){return new et(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Pt.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pu(this.root,e,this.comparator,!0)}}class Pu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Pt.RED,this.left=o??Pt.EMPTY,this.right=u??Pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Pt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Pt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw pe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw pe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw pe(27949);return e+(this.isRed()?0:1)}}Pt.EMPTY=null,Pt.RED=!0,Pt.BLACK=!1;Pt.EMPTY=new class{constructor(){this.size=0}get key(){throw pe(57766)}get value(){throw pe(16141)}get color(){throw pe(16727)}get left(){throw pe(29726)}get right(){throw pe(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new Pt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class yt{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ey(this.data.getIterator())}getIteratorFrom(e){return new ey(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof yt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new yt(this.comparator);return t.data=e,t}}class ey{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Nt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new Y_("Invalid base64 string: "+u):u}}(e);return new Nt(t)}static fromUint8Array(e){const t=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(e);return new Nt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Nt.EMPTY_BYTE_STRING=new Nt("");const iA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ii(r){if(be(!!r,39018),typeof r=="string"){let e=0;const t=iA.exec(r);if(be(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:at(r.seconds),nanos:at(r.nanos)}}function at(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Si(r){return typeof r=="string"?Nt.fromBase64String(r):Nt.fromUint8Array(r)}/**
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
 */const X_="server_timestamp",J_="__type__",Z_="__previous_value__",ev="__local_write_time__";function pd(r){var t,s;return((s=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[J_])==null?void 0:s.stringValue)===X_}function _c(r){const e=r.mapValue.fields[Z_];return pd(e)?_c(e):e}function Wa(r){const e=Ii(r.mapValue.fields[ev].timestampValue);return new He(e.seconds,e.nanos)}/**
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
 */class sA{constructor(e,t,s,o,u,h,m,g,_,w){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=w}}const Zu="(default)";class Ga{constructor(e,t){this.projectId=e,this.database=t||Zu}static empty(){return new Ga("","")}get isDefaultDatabase(){return this.database===Zu}isEqual(e){return e instanceof Ga&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const tv="__type__",oA="__max__",ku={mapValue:{}},nv="__vector__",ec="value";function Ai(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?pd(r)?4:lA(r)?9007199254740991:aA(r)?10:11:pe(28295,{value:r})}function or(r,e){if(r===e)return!0;const t=Ai(r);if(t!==Ai(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Wa(r).isEqual(Wa(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=Ii(o.timestampValue),m=Ii(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(o,u){return Si(o.bytesValue).isEqual(Si(u.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(o,u){return at(o.geoPointValue.latitude)===at(u.geoPointValue.latitude)&&at(o.geoPointValue.longitude)===at(u.geoPointValue.longitude)}(r,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return at(o.integerValue)===at(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=at(o.doubleValue),m=at(u.doubleValue);return h===m?Ju(h)===Ju(m):isNaN(h)&&isNaN(m)}return!1}(r,e);case 9:return Eo(r.arrayValue.values||[],e.arrayValue.values||[],or);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(Zg(h)!==Zg(m))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(m[g]===void 0||!or(h[g],m[g])))return!1;return!0}(r,e);default:return pe(52216,{left:r})}}function Ka(r,e){return(r.values||[]).find(t=>or(t,e))!==void 0}function wo(r,e){if(r===e)return 0;const t=Ai(r),s=Ai(e);if(t!==s)return Re(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Re(r.booleanValue,e.booleanValue);case 2:return function(u,h){const m=at(u.integerValue||u.doubleValue),g=at(h.integerValue||h.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1}(r,e);case 3:return ty(r.timestampValue,e.timestampValue);case 4:return ty(Wa(r),Wa(e));case 5:return Of(r.stringValue,e.stringValue);case 6:return function(u,h){const m=Si(u),g=Si(h);return m.compareTo(g)}(r.bytesValue,e.bytesValue);case 7:return function(u,h){const m=u.split("/"),g=h.split("/");for(let _=0;_<m.length&&_<g.length;_++){const w=Re(m[_],g[_]);if(w!==0)return w}return Re(m.length,g.length)}(r.referenceValue,e.referenceValue);case 8:return function(u,h){const m=Re(at(u.latitude),at(h.latitude));return m!==0?m:Re(at(u.longitude),at(h.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return ny(r.arrayValue,e.arrayValue);case 10:return function(u,h){var A,U,q,H;const m=u.fields||{},g=h.fields||{},_=(A=m[ec])==null?void 0:A.arrayValue,w=(U=g[ec])==null?void 0:U.arrayValue,T=Re(((q=_==null?void 0:_.values)==null?void 0:q.length)||0,((H=w==null?void 0:w.values)==null?void 0:H.length)||0);return T!==0?T:ny(_,w)}(r.mapValue,e.mapValue);case 11:return function(u,h){if(u===ku.mapValue&&h===ku.mapValue)return 0;if(u===ku.mapValue)return 1;if(h===ku.mapValue)return-1;const m=u.fields||{},g=Object.keys(m),_=h.fields||{},w=Object.keys(_);g.sort(),w.sort();for(let T=0;T<g.length&&T<w.length;++T){const A=Of(g[T],w[T]);if(A!==0)return A;const U=wo(m[g[T]],_[w[T]]);if(U!==0)return U}return Re(g.length,w.length)}(r.mapValue,e.mapValue);default:throw pe(23264,{he:t})}}function ty(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Re(r,e);const t=Ii(r),s=Ii(e),o=Re(t.seconds,s.seconds);return o!==0?o:Re(t.nanos,s.nanos)}function ny(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=wo(t[o],s[o]);if(u)return u}return Re(t.length,s.length)}function To(r){return xf(r)}function xf(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const s=Ii(t);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return Si(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return le.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=xf(u);return s+"]"}(r.arrayValue):"mapValue"in r?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${xf(t.fields[h])}`;return o+"}"}(r.mapValue):pe(61005,{value:r})}function Uu(r){switch(Ai(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=_c(r);return e?16+Uu(e):16;case 5:return 2*r.stringValue.length;case 6:return Si(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+Uu(u),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return Di(s.fields,(u,h)=>{o+=u.length+Uu(h)}),o}(r.mapValue);default:throw pe(13486,{value:r})}}function ry(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Lf(r){return!!r&&"integerValue"in r}function md(r){return!!r&&"arrayValue"in r}function iy(r){return!!r&&"nullValue"in r}function sy(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function zu(r){return!!r&&"mapValue"in r}function aA(r){var t,s;return((s=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[tv])==null?void 0:s.stringValue)===nv}function Fa(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return Di(r.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Fa(s)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Fa(r.arrayValue.values[t]);return e}return{...r}}function lA(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===oA}/**
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
 */class Xt{constructor(e){this.value=e}static empty(){return new Xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!zu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Fa(t)}setAll(e){let t=kt.emptyPath(),s={},o=[];e.forEach((h,m)=>{if(!t.isImmediateParentOf(m)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Fa(h):o.push(m.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());zu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return or(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];zu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Di(t,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new Xt(Fa(this.value))}}function rv(r){const e=[];return Di(r.fields,(t,s)=>{const o=new kt([t]);if(zu(s)){const u=rv(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)}),new cn(e)}/**
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
 */class Ut{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Ut(e,0,ge.min(),ge.min(),ge.min(),Xt.empty(),0)}static newFoundDocument(e,t,s,o){return new Ut(e,1,t,ge.min(),s,o,0)}static newNoDocument(e,t){return new Ut(e,2,t,ge.min(),ge.min(),Xt.empty(),0)}static newUnknownDocument(e,t){return new Ut(e,3,t,ge.min(),ge.min(),Xt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class tc{constructor(e,t){this.position=e,this.inclusive=t}}function oy(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const u=e[o],h=r.position[o];if(u.field.isKeyField()?s=le.comparator(le.fromName(h.referenceValue),t.key):s=wo(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function ay(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!or(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class nc{constructor(e,t="asc"){this.field=e,this.dir=t}}function uA(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class iv{}class ft extends iv{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new hA(e,t,s):t==="array-contains"?new pA(e,s):t==="in"?new mA(e,s):t==="not-in"?new gA(e,s):t==="array-contains-any"?new yA(e,s):new ft(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new fA(e,s):new dA(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(wo(t,this.value)):t!==null&&Ai(this.value)===Ai(t)&&this.matchesComparison(wo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return pe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xn extends iv{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new xn(e,t)}matches(e){return sv(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function sv(r){return r.op==="and"}function ov(r){return cA(r)&&sv(r)}function cA(r){for(const e of r.filters)if(e instanceof xn)return!1;return!0}function Mf(r){if(r instanceof ft)return r.field.canonicalString()+r.op.toString()+To(r.value);if(ov(r))return r.filters.map(e=>Mf(e)).join(",");{const e=r.filters.map(t=>Mf(t)).join(",");return`${r.op}(${e})`}}function av(r,e){return r instanceof ft?function(s,o){return o instanceof ft&&s.op===o.op&&s.field.isEqual(o.field)&&or(s.value,o.value)}(r,e):r instanceof xn?function(s,o){return o instanceof xn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,h,m)=>u&&av(h,o.filters[m]),!0):!1}(r,e):void pe(19439)}function lv(r){return r instanceof ft?function(t){return`${t.field.canonicalString()} ${t.op} ${To(t.value)}`}(r):r instanceof xn?function(t){return t.op.toString()+" {"+t.getFilters().map(lv).join(" ,")+"}"}(r):"Filter"}class hA extends ft{constructor(e,t,s){super(e,t,s),this.key=le.fromName(s.referenceValue)}matches(e){const t=le.comparator(e.key,this.key);return this.matchesComparison(t)}}class fA extends ft{constructor(e,t){super(e,"in",t),this.keys=uv("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class dA extends ft{constructor(e,t){super(e,"not-in",t),this.keys=uv("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function uv(r,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(s=>le.fromName(s.referenceValue))}class pA extends ft{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return md(t)&&Ka(t.arrayValue,this.value)}}class mA extends ft{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ka(this.value.arrayValue,t)}}class gA extends ft{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ka(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ka(this.value.arrayValue,t)}}class yA extends ft{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!md(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Ka(this.value.arrayValue,s))}}/**
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
 */class _A{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.Te=null}}function ly(r,e=null,t=[],s=[],o=null,u=null,h=null){return new _A(r,e,t,s,o,u,h)}function gd(r){const e=_e(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Mf(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),yc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>To(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>To(s)).join(",")),e.Te=t}return e.Te}function yd(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!uA(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!av(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!ay(r.startAt,e.startAt)&&ay(r.endAt,e.endAt)}function bf(r){return le.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class il{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=g,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function vA(r,e,t,s,o,u,h,m){return new il(r,e,t,s,o,u,h,m)}function vc(r){return new il(r)}function uy(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function cv(r){return r.collectionGroup!==null}function Ua(r){const e=_e(r);if(e.Ie===null){e.Ie=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new yt(kt.comparator);return h.filters.forEach(g=>{g.getFlattenedFilters().forEach(_=>{_.isInequality()&&(m=m.add(_.field))})}),m})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new nc(u,s))}),t.has(kt.keyField().canonicalString())||e.Ie.push(new nc(kt.keyField(),s))}return e.Ie}function nr(r){const e=_e(r);return e.Ee||(e.Ee=EA(e,Ua(r))),e.Ee}function EA(r,e){if(r.limitType==="F")return ly(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new nc(o.field,u)});const t=r.endAt?new tc(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new tc(r.startAt.position,r.startAt.inclusive):null;return ly(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function Ff(r,e){const t=r.filters.concat([e]);return new il(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function Uf(r,e,t){return new il(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Ec(r,e){return yd(nr(r),nr(e))&&r.limitType===e.limitType}function hv(r){return`${gd(nr(r))}|lt:${r.limitType}`}function co(r){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>lv(o)).join(", ")}]`),yc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>To(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>To(o)).join(",")),`Target(${s})`}(nr(r))}; limitType=${r.limitType})`}function wc(r,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):le.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(r,e)&&function(s,o){for(const u of Ua(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(r,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(r,e)&&function(s,o){return!(s.startAt&&!function(h,m,g){const _=oy(h,m,g);return h.inclusive?_<=0:_<0}(s.startAt,Ua(s),o)||s.endAt&&!function(h,m,g){const _=oy(h,m,g);return h.inclusive?_>=0:_>0}(s.endAt,Ua(s),o))}(r,e)}function wA(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function fv(r){return(e,t)=>{let s=!1;for(const o of Ua(r)){const u=TA(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function TA(r,e,t){const s=r.field.isKeyField()?le.comparator(e.key,t.key):function(u,h,m){const g=h.data.field(u),_=m.data.field(u);return g!==null&&_!==null?wo(g,_):pe(42886)}(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return pe(19790,{direction:r.dir})}}/**
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
 */const IA=new et(le.comparator);function Or(){return IA}const dv=new et(le.comparator);function Va(...r){let e=dv;for(const t of r)e=e.insert(t.key,t);return e}function pv(r){let e=dv;return r.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function ls(){return za()}function mv(){return za()}function za(){return new ys(r=>r.toString(),(r,e)=>r.isEqual(e))}const SA=new et(le.comparator),AA=new yt(le.comparator);function Ce(...r){let e=AA;for(const t of r)e=e.add(t);return e}const RA=new yt(Re);function CA(){return RA}/**
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
 */function _d(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ju(e)?"-0":e}}function gv(r){return{integerValue:""+r}}function PA(r,e){return tA(e)?gv(e):_d(r,e)}/**
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
 */class Tc{constructor(){this._=void 0}}function kA(r,e,t){return r instanceof rc?function(o,u){const h={fields:{[J_]:{stringValue:X_},[ev]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&pd(u)&&(u=_c(u)),u&&(h.fields[Z_]=u),{mapValue:h}}(t,e):r instanceof Qa?_v(r,e):r instanceof Ya?vv(r,e):function(o,u){const h=yv(o,u),m=cy(h)+cy(o.Ae);return Lf(h)&&Lf(o.Ae)?gv(m):_d(o.serializer,m)}(r,e)}function NA(r,e,t){return r instanceof Qa?_v(r,e):r instanceof Ya?vv(r,e):t}function yv(r,e){return r instanceof ic?function(s){return Lf(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class rc extends Tc{}class Qa extends Tc{constructor(e){super(),this.elements=e}}function _v(r,e){const t=Ev(e);for(const s of r.elements)t.some(o=>or(o,s))||t.push(s);return{arrayValue:{values:t}}}class Ya extends Tc{constructor(e){super(),this.elements=e}}function vv(r,e){let t=Ev(e);for(const s of r.elements)t=t.filter(o=>!or(o,s));return{arrayValue:{values:t}}}class ic extends Tc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function cy(r){return at(r.integerValue||r.doubleValue)}function Ev(r){return md(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function DA(r,e){return r.field.isEqual(e.field)&&function(s,o){return s instanceof Qa&&o instanceof Qa||s instanceof Ya&&o instanceof Ya?Eo(s.elements,o.elements,or):s instanceof ic&&o instanceof ic?or(s.Ae,o.Ae):s instanceof rc&&o instanceof rc}(r.transform,e.transform)}class VA{constructor(e,t){this.version=e,this.transformResults=t}}class En{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new En}static exists(e){return new En(void 0,e)}static updateTime(e){return new En(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ju(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Ic{}function wv(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new vd(r.key,En.none()):new sl(r.key,r.data,En.none());{const t=r.data,s=Xt.empty();let o=new yt(kt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new Vi(r.key,s,new cn(o.toArray()),En.none())}}function OA(r,e,t){r instanceof sl?function(o,u,h){const m=o.value.clone(),g=fy(o.fieldTransforms,u,h.transformResults);m.setAll(g),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(r,e,t):r instanceof Vi?function(o,u,h){if(!ju(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=fy(o.fieldTransforms,u,h.transformResults),g=u.data;g.setAll(Tv(o)),g.setAll(m),u.convertToFoundDocument(h.version,g).setHasCommittedMutations()}(r,e,t):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function ja(r,e,t,s){return r instanceof sl?function(u,h,m,g){if(!ju(u.precondition,h))return m;const _=u.value.clone(),w=dy(u.fieldTransforms,g,h);return _.setAll(w),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null}(r,e,t,s):r instanceof Vi?function(u,h,m,g){if(!ju(u.precondition,h))return m;const _=dy(u.fieldTransforms,g,h),w=h.data;return w.setAll(Tv(u)),w.setAll(_),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(T=>T.field))}(r,e,t,s):function(u,h,m){return ju(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m}(r,e,t)}function xA(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),u=yv(s.transform,o||null);u!=null&&(t===null&&(t=Xt.empty()),t.set(s.field,u))}return t||null}function hy(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Eo(s,o,(u,h)=>DA(u,h))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class sl extends Ic{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Vi extends Ic{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function Tv(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}}),e}function fy(r,e,t){const s=new Map;be(r.length===t.length,32656,{Re:t.length,Ve:r.length});for(let o=0;o<t.length;o++){const u=r[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,NA(h,m,t[o]))}return s}function dy(r,e,t){const s=new Map;for(const o of r){const u=o.transform,h=t.data.field(o.field);s.set(o.field,kA(u,h,e))}return s}class vd extends Ic{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class LA extends Ic{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class MA{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&OA(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=ja(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=ja(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=mv();return this.mutations.forEach(o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const g=wv(h,m);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(ge.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ce())}isEqual(e){return this.batchId===e.batchId&&Eo(this.mutations,e.mutations,(t,s)=>hy(t,s))&&Eo(this.baseMutations,e.baseMutations,(t,s)=>hy(t,s))}}class Ed{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){be(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=function(){return SA}();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new Ed(e,t,s,o)}}/**
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
 */class bA{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class FA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ht,De;function UA(r){switch(r){case B.OK:return pe(64938);case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0;default:return pe(15467,{code:r})}}function Iv(r){if(r===void 0)return Vr("GRPC error has no .code"),B.UNKNOWN;switch(r){case ht.OK:return B.OK;case ht.CANCELLED:return B.CANCELLED;case ht.UNKNOWN:return B.UNKNOWN;case ht.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case ht.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case ht.INTERNAL:return B.INTERNAL;case ht.UNAVAILABLE:return B.UNAVAILABLE;case ht.UNAUTHENTICATED:return B.UNAUTHENTICATED;case ht.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case ht.NOT_FOUND:return B.NOT_FOUND;case ht.ALREADY_EXISTS:return B.ALREADY_EXISTS;case ht.PERMISSION_DENIED:return B.PERMISSION_DENIED;case ht.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case ht.ABORTED:return B.ABORTED;case ht.OUT_OF_RANGE:return B.OUT_OF_RANGE;case ht.UNIMPLEMENTED:return B.UNIMPLEMENTED;case ht.DATA_LOSS:return B.DATA_LOSS;default:return pe(39323,{code:r})}}(De=ht||(ht={}))[De.OK=0]="OK",De[De.CANCELLED=1]="CANCELLED",De[De.UNKNOWN=2]="UNKNOWN",De[De.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",De[De.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",De[De.NOT_FOUND=5]="NOT_FOUND",De[De.ALREADY_EXISTS=6]="ALREADY_EXISTS",De[De.PERMISSION_DENIED=7]="PERMISSION_DENIED",De[De.UNAUTHENTICATED=16]="UNAUTHENTICATED",De[De.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",De[De.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",De[De.ABORTED=10]="ABORTED",De[De.OUT_OF_RANGE=11]="OUT_OF_RANGE",De[De.UNIMPLEMENTED=12]="UNIMPLEMENTED",De[De.INTERNAL=13]="INTERNAL",De[De.UNAVAILABLE=14]="UNAVAILABLE",De[De.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function zA(){return new TextEncoder}/**
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
 */const jA=new Ei([4294967295,4294967295],0);function py(r){const e=zA().encode(r),t=new F_;return t.update(e),new Uint8Array(t.digest())}function my(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new Ei([t,s],0),new Ei([o,u],0)]}class wd{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Oa(`Invalid padding: ${t}`);if(s<0)throw new Oa(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Oa(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Oa(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Ei.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(Ei.fromNumber(s)));return o.compare(jA)===1&&(o=new Ei([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=py(e),[s,o]=my(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);if(!this.we(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new wd(u,o,t);return s.forEach(m=>h.insert(m)),h}insert(e){if(this.ge===0)return;const t=py(e),[s,o]=my(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);this.Se(h)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Oa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Sc{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,ol.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Sc(ge.min(),o,new et(Re),Or(),Ce())}}class ol{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new ol(s,t,Ce(),Ce(),Ce())}}/**
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
 */class Bu{constructor(e,t,s,o){this.be=e,this.removedTargetIds=t,this.key=s,this.De=o}}class Sv{constructor(e,t){this.targetId=e,this.Ce=t}}class Av{constructor(e,t,s=Nt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class gy{constructor(){this.ve=0,this.Fe=yy(),this.Me=Nt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ce(),t=Ce(),s=Ce();return this.Fe.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:pe(38017,{changeType:u})}}),new ol(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=yy()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,be(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class BA{constructor(e){this.Ge=e,this.ze=new Map,this.je=Or(),this.Je=Nu(),this.He=Nu(),this.Ye=new et(Re)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:pe(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((s,o)=>{this.rt(o)&&t(o)})}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const u=o.target;if(bf(u))if(s===0){const h=new le(u.path);this.et(t,h,Ut.newNoDocument(h,ge.min()))}else be(s===1,20013,{expectedCount:s});else{const h=this._t(t);if(h!==s){const m=this.ut(e),g=m?this.ct(m,e,h):1;if(g!==0){this.it(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,_)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=Si(s).toUint8Array()}catch(g){if(g instanceof Y_)return vo("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new wd(h,o,u)}catch(g){return vo(g instanceof Oa?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.ge===0?null:m}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach(u=>{const h=this.Ge.ht(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.et(t,u,null),o++)}),o}Tt(e){const t=new Map;this.ze.forEach((u,h)=>{const m=this.ot(h);if(m){if(u.current&&bf(m.target)){const g=new le(m.target.path);this.It(g).has(h)||this.Et(h,g)||this.et(h,g,Ut.newNoDocument(g,e))}u.Be&&(t.set(h,u.ke()),u.qe())}});let s=Ce();this.He.forEach((u,h)=>{let m=!0;h.forEachWhile(g=>{const _=this.ot(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.je.forEach((u,h)=>h.setReadTime(e));const o=new Sc(e,t,this.Ye,this.je,s);return this.je=Or(),this.Je=Nu(),this.He=Nu(),this.Ye=new et(Re),o}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.Qe(t,1):o.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new gy,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new yt(Re),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new yt(Re),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||te("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new gy),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Nu(){return new et(le.comparator)}function yy(){return new et(le.comparator)}const $A={asc:"ASCENDING",desc:"DESCENDING"},qA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},HA={and:"AND",or:"OR"};class WA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function zf(r,e){return r.useProto3Json||yc(e)?e:{value:e}}function sc(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Rv(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function GA(r,e){return sc(r,e.toTimestamp())}function rr(r){return be(!!r,49232),ge.fromTimestamp(function(t){const s=Ii(t);return new He(s.seconds,s.nanos)}(r))}function Td(r,e){return jf(r,e).canonicalString()}function jf(r,e){const t=function(o){return new qe(["projects",o.projectId,"databases",o.database])}(r).child("documents");return e===void 0?t:t.child(e)}function Cv(r){const e=qe.fromString(r);return be(Vv(e),10190,{key:e.toString()}),e}function Bf(r,e){return Td(r.databaseId,e.path)}function _f(r,e){const t=Cv(e);if(t.get(1)!==r.databaseId.projectId)throw new Z(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new Z(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new le(kv(t))}function Pv(r,e){return Td(r.databaseId,e)}function KA(r){const e=Cv(r);return e.length===4?qe.emptyPath():kv(e)}function $f(r){return new qe(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function kv(r){return be(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function _y(r,e,t){return{name:Bf(r,e),fields:t.value.mapValue.fields}}function QA(r,e){let t;if("targetChange"in e){e.targetChange;const s=function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:pe(39313,{state:_})}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(_,w){return _.useProto3Json?(be(w===void 0||typeof w=="string",58123),Nt.fromBase64String(w||"")):(be(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),Nt.fromUint8Array(w||new Uint8Array))}(r,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&function(_){const w=_.code===void 0?B.UNKNOWN:Iv(_.code);return new Z(w,_.message||"")}(h);t=new Av(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=_f(r,s.document.name),u=rr(s.document.updateTime),h=s.document.createTime?rr(s.document.createTime):ge.min(),m=new Xt({mapValue:{fields:s.document.fields}}),g=Ut.newFoundDocument(o,u,h,m),_=s.targetIds||[],w=s.removedTargetIds||[];t=new Bu(_,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=_f(r,s.document),u=s.readTime?rr(s.readTime):ge.min(),h=Ut.newNoDocument(o,u),m=s.removedTargetIds||[];t=new Bu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=_f(r,s.document),u=s.removedTargetIds||[];t=new Bu([],u,o,null)}else{if(!("filter"in e))return pe(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new FA(o,u),m=s.targetId;t=new Sv(m,h)}}return t}function YA(r,e){let t;if(e instanceof sl)t={update:_y(r,e.key,e.value)};else if(e instanceof vd)t={delete:Bf(r,e.key)};else if(e instanceof Vi)t={update:_y(r,e.key,e.data),updateMask:s1(e.fieldMask)};else{if(!(e instanceof LA))return pe(16599,{Vt:e.type});t={verify:Bf(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(u,h){const m=h.transform;if(m instanceof rc)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Qa)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Ya)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof ic)return{fieldPath:h.field.canonicalString(),increment:m.Ae};throw pe(20930,{transform:h.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:GA(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:pe(27497)}(r,e.precondition)),t}function XA(r,e){return r&&r.length>0?(be(e!==void 0,14353),r.map(t=>function(o,u){let h=o.updateTime?rr(o.updateTime):rr(u);return h.isEqual(ge.min())&&(h=rr(u)),new VA(h,o.transformResults||[])}(t,e))):[]}function JA(r,e){return{documents:[Pv(r,e.path)]}}function ZA(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Pv(r,o);const u=function(_){if(_.length!==0)return Dv(xn.create(_,"and"))}(e.filters);u&&(t.structuredQuery.where=u);const h=function(_){if(_.length!==0)return _.map(w=>function(A){return{field:ho(A.field),direction:n1(A.dir)}}(w))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=zf(r,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=function(_){return{before:_.inclusive,values:_.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(_){return{before:!_.inclusive,values:_.position}}(e.endAt)),{ft:t,parent:o}}function e1(r){let e=KA(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){be(s===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let u=[];t.where&&(u=function(T){const A=Nv(T);return A instanceof xn&&ov(A)?A.getFilters():[A]}(t.where));let h=[];t.orderBy&&(h=function(T){return T.map(A=>function(q){return new nc(fo(q.field),function(j){switch(j){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(q.direction))}(A))}(t.orderBy));let m=null;t.limit&&(m=function(T){let A;return A=typeof T=="object"?T.value:T,yc(A)?null:A}(t.limit));let g=null;t.startAt&&(g=function(T){const A=!!T.before,U=T.values||[];return new tc(U,A)}(t.startAt));let _=null;return t.endAt&&(_=function(T){const A=!T.before,U=T.values||[];return new tc(U,A)}(t.endAt)),vA(e,o,h,u,m,"F",g,_)}function t1(r,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return pe(28987,{purpose:o})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Nv(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=fo(t.unaryFilter.field);return ft.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=fo(t.unaryFilter.field);return ft.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=fo(t.unaryFilter.field);return ft.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=fo(t.unaryFilter.field);return ft.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return pe(61313);default:return pe(60726)}}(r):r.fieldFilter!==void 0?function(t){return ft.create(fo(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return pe(58110);default:return pe(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return xn.create(t.compositeFilter.filters.map(s=>Nv(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return pe(1026)}}(t.compositeFilter.op))}(r):pe(30097,{filter:r})}function n1(r){return $A[r]}function r1(r){return qA[r]}function i1(r){return HA[r]}function ho(r){return{fieldPath:r.canonicalString()}}function fo(r){return kt.fromServerFormat(r.fieldPath)}function Dv(r){return r instanceof ft?function(t){if(t.op==="=="){if(sy(t.value))return{unaryFilter:{field:ho(t.field),op:"IS_NAN"}};if(iy(t.value))return{unaryFilter:{field:ho(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(sy(t.value))return{unaryFilter:{field:ho(t.field),op:"IS_NOT_NAN"}};if(iy(t.value))return{unaryFilter:{field:ho(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ho(t.field),op:r1(t.op),value:t.value}}}(r):r instanceof xn?function(t){const s=t.getFilters().map(o=>Dv(o));return s.length===1?s[0]:{compositeFilter:{op:i1(t.op),filters:s}}}(r):pe(54877,{filter:r})}function s1(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Vv(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class gi{constructor(e,t,s,o,u=ge.min(),h=ge.min(),m=Nt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new gi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new gi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class o1{constructor(e){this.yt=e}}function a1(r){const e=e1({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Uf(e,e.limit,"L"):e}/**
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
 */class l1{constructor(){this.Cn=new u1}addToCollectionParentIndex(e,t){return this.Cn.add(t),$.resolve()}getCollectionParents(e,t){return $.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return $.resolve()}deleteFieldIndex(e,t){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,t){return $.resolve()}getDocumentsMatchingTarget(e,t){return $.resolve(null)}getIndexType(e,t){return $.resolve(0)}getFieldIndexes(e,t){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,t){return $.resolve(Ti.min())}getMinOffsetFromCollectionGroup(e,t){return $.resolve(Ti.min())}updateCollectionGroup(e,t,s){return $.resolve()}updateIndexEntries(e,t){return $.resolve()}}class u1{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new yt(qe.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new yt(qe.comparator)).toArray()}}/**
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
 */const vy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ov=41943040;class Yt{static withCacheSize(e){return new Yt(e,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Yt.DEFAULT_COLLECTION_PERCENTILE=10,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Yt.DEFAULT=new Yt(Ov,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Yt.DISABLED=new Yt(-1,0,0);/**
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
 */const Ey="LruGarbageCollector",c1=1048576;function wy([r,e],[t,s]){const o=Re(r,t);return o===0?Re(e,s):o}class h1{constructor(e){this.Ir=e,this.buffer=new yt(wy),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();wy(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class f1{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){te(Ey,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){No(t)?te(Ey,"Ignoring IndexedDB error during garbage collection: ",t):await ko(t)}await this.Vr(3e5)})}}class d1{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return $.resolve(gc.ce);const s=new h1(t);return this.mr.forEachTarget(e,o=>s.Ar(o.sequenceNumber)).next(()=>this.mr.pr(e,o=>s.Ar(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(vy)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),vy):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,o,u,h,m,g,_;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,h=Date.now(),this.nthSequenceNumber(e,o))).next(T=>(s=T,m=Date.now(),this.removeTargets(e,s,t))).next(T=>(u=T,g=Date.now(),this.removeOrphanedDocuments(e,s))).next(T=>(_=Date.now(),uo()<=Ae.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(g-m)+`ms
	Removed ${T} documents in `+(_-g)+`ms
Total Duration: ${_-w}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:T})))}}function p1(r,e){return new d1(r,e)}/**
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
 */class m1{constructor(){this.changes=new ys(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ut.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?$.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class g1{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class y1{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&ja(s.mutation,o,cn.empty(),He.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Ce()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Ce()){const o=ls();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(u=>{let h=Va();return u.forEach((m,g)=>{h=h.insert(m,g.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=ls();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Ce()))}populateOverlays(e,t,s){const o=[];return s.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((h,m)=>{t.set(h,m)})})}computeViews(e,t,s,o){let u=Or();const h=za(),m=function(){return za()}();return t.forEach((g,_)=>{const w=s.get(_.key);o.has(_.key)&&(w===void 0||w.mutation instanceof Vi)?u=u.insert(_.key,_):w!==void 0?(h.set(_.key,w.mutation.getFieldMask()),ja(w.mutation,_,w.mutation.getFieldMask(),He.now())):h.set(_.key,cn.empty())}),this.recalculateAndSaveOverlays(e,u).next(g=>(g.forEach((_,w)=>h.set(_,w)),t.forEach((_,w)=>m.set(_,new g1(w,h.get(_)??null))),m))}recalculateAndSaveOverlays(e,t){const s=za();let o=new et((h,m)=>h-m),u=Ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const m of h)m.keys().forEach(g=>{const _=t.get(g);if(_===null)return;let w=s.get(g)||cn.empty();w=m.applyToLocalView(_,w),s.set(g,w);const T=(o.get(m.batchId)||Ce()).add(g);o=o.insert(m.batchId,T)})}).next(()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),_=g.key,w=g.value,T=mv();w.forEach(A=>{if(!u.has(A)){const U=wv(t.get(A),s.get(A));U!==null&&T.set(A,U),u=u.add(A)}}),h.push(this.documentOverlayCache.saveOverlays(e,_,T))}return $.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return le.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):cv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):$.resolve(ls());let m=Ha,g=u;return h.next(_=>$.forEach(_,(w,T)=>(m<T.largestBatchId&&(m=T.largestBatchId),u.get(w)?$.resolve():this.remoteDocumentCache.getEntry(e,w).next(A=>{g=g.insert(w,A)}))).next(()=>this.populateOverlays(e,_,u)).next(()=>this.computeViews(e,g,_,Ce())).next(w=>({batchId:m,changes:pv(w)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new le(t)).next(s=>{let o=Va();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=Va();return this.indexManager.getCollectionParents(e,u).next(m=>$.forEach(m,g=>{const _=function(T,A){return new il(A,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next(w=>{w.forEach((T,A)=>{h=h.insert(T,A)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o))).next(h=>{u.forEach((g,_)=>{const w=_.getKey();h.get(w)===null&&(h=h.insert(w,Ut.newInvalidDocument(w)))});let m=Va();return h.forEach((g,_)=>{const w=u.get(g);w!==void 0&&ja(w.mutation,_,cn.empty(),He.now()),wc(t,_)&&(m=m.insert(g,_))}),m})}}/**
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
 */class _1{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return $.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:rr(o.createTime)}}(t)),$.resolve()}getNamedQuery(e,t){return $.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(o){return{name:o.name,query:a1(o.bundledQuery),readTime:rr(o.readTime)}}(t)),$.resolve()}}/**
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
 */class v1{constructor(){this.overlays=new et(le.comparator),this.qr=new Map}getOverlay(e,t){return $.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ls();return $.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,u)=>{this.St(e,t,u)}),$.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.qr.delete(s)),$.resolve()}getOverlaysForCollection(e,t,s){const o=ls(),u=t.length+1,h=new le(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const g=m.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return $.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new et((_,w)=>_-w);const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let w=u.get(_.largestBatchId);w===null&&(w=ls(),u=u.insert(_.largestBatchId,w)),w.set(_.getKey(),_)}}const m=ls(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((_,w)=>m.set(_,w)),!(m.size()>=o)););return $.resolve(m)}St(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new bA(t,s));let u=this.qr.get(t);u===void 0&&(u=Ce(),this.qr.set(t,u)),this.qr.set(t,u.add(s.key))}}/**
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
 */class E1{constructor(){this.sessionToken=Nt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,$.resolve()}}/**
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
 */class Id{constructor(){this.Qr=new yt(It.$r),this.Ur=new yt(It.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new It(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Gr(new It(e,t))}zr(e,t){e.forEach(s=>this.removeReference(s,t))}jr(e){const t=new le(new qe([])),s=new It(t,e),o=new It(t,e+1),u=[];return this.Ur.forEachInRange([s,o],h=>{this.Gr(h),u.push(h.key)}),u}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new le(new qe([])),s=new It(t,e),o=new It(t,e+1);let u=Ce();return this.Ur.forEachInRange([s,o],h=>{u=u.add(h.key)}),u}containsKey(e){const t=new It(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class It{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return le.comparator(e.key,t.key)||Re(e.Yr,t.Yr)}static Kr(e,t){return Re(e.Yr,t.Yr)||le.comparator(e.key,t.key)}}/**
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
 */class w1{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new yt(It.$r)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new MA(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Zr=this.Zr.add(new It(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return $.resolve(h)}lookupMutationBatch(e,t){return $.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.ei(s),u=o<0?0:o;return $.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?dd:this.tr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new It(t,0),o=new It(t,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([s,o],h=>{const m=this.Xr(h.Yr);u.push(m)}),$.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new yt(Re);return t.forEach(o=>{const u=new It(o,0),h=new It(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,h],m=>{s=s.add(m.Yr)})}),$.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;le.isDocumentKey(u)||(u=u.child(""));const h=new It(new le(u),0);let m=new yt(Re);return this.Zr.forEachWhile(g=>{const _=g.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(m=m.add(g.Yr)),!0)},h),$.resolve(this.ti(m))}ti(e){const t=[];return e.forEach(s=>{const o=this.Xr(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){be(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return $.forEach(t.mutations,o=>{const u=new It(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Zr=s})}ir(e){}containsKey(e,t){const s=new It(t,0),o=this.Zr.firstAfterOrEqual(s);return $.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class T1{constructor(e){this.ri=e,this.docs=function(){return new et(le.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return $.resolve(s?s.document.mutableCopy():Ut.newInvalidDocument(t))}getEntries(e,t){let s=Or();return t.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Ut.newInvalidDocument(o))}),$.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Or();const h=t.path,m=new le(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:_,value:{document:w}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||XS(YS(w),s)<=0||(o.has(w.key)||wc(t,w))&&(u=u.insert(w.key,w.mutableCopy()))}return $.resolve(u)}getAllFromCollectionGroup(e,t,s,o){pe(9500)}ii(e,t){return $.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new I1(this)}getSize(e){return $.resolve(this.size)}}class I1 extends m1{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(s)}),$.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class S1{constructor(e){this.persistence=e,this.si=new ys(t=>gd(t),yd),this.lastRemoteSnapshotVersion=ge.min(),this.highestTargetId=0,this.oi=0,this._i=new Id,this.targetCount=0,this.ai=Io.ur()}forEachTarget(e,t){return this.si.forEach((s,o)=>t(o)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),$.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Io(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,$.resolve()}updateTargetData(e,t){return this.Pr(t),$.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.si.forEach((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.si.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)}),$.waitFor(u).next(()=>o)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return $.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),$.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(h=>{u.push(o.markPotentiallyOrphaned(e,h))}),$.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),$.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return $.resolve(s)}containsKey(e,t){return $.resolve(this._i.containsKey(t))}}/**
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
 */class xv{constructor(e,t){this.ui={},this.overlays={},this.ci=new gc(0),this.li=!1,this.li=!0,this.hi=new E1,this.referenceDelegate=e(this),this.Pi=new S1(this),this.indexManager=new l1,this.remoteDocumentCache=function(o){return new T1(o)}(s=>this.referenceDelegate.Ti(s)),this.serializer=new o1(t),this.Ii=new _1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new v1,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new w1(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){te("MemoryPersistence","Starting transaction:",e);const o=new A1(this.ci.next());return this.referenceDelegate.Ei(),s(o).next(u=>this.referenceDelegate.di(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Ai(e,t){return $.or(Object.values(this.ui).map(s=>()=>s.containsKey(e,t)))}}class A1 extends ZS{constructor(e){super(),this.currentSequenceNumber=e}}class Sd{constructor(e){this.persistence=e,this.Ri=new Id,this.Vi=null}static mi(e){return new Sd(e)}get fi(){if(this.Vi)return this.Vi;throw pe(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),$.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),$.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),$.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(o=>this.fi.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.fi.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.fi,s=>{const o=le.fromPath(s);return this.gi(e,o).next(u=>{u||t.removeEntry(o,ge.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return $.or([()=>$.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class oc{constructor(e,t){this.persistence=e,this.pi=new ys(s=>nA(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=p1(this,t)}static mi(e,t){return new oc(e,t)}Ei(){}di(e){return $.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}wr(e){let t=0;return this.pr(e,s=>{t++}).next(()=>t)}pr(e,t){return $.forEach(this.pi,(s,o)=>this.br(e,s,o).next(u=>u?$.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(e,h=>this.br(e,h,t).next(m=>{m||(s++,u.removeEntry(h,ge.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),$.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),$.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),$.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Uu(e.data.value)),t}br(e,t,s){return $.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.pi.get(t);return $.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Ad{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=o}static As(e,t){let s=Ce(),o=Ce();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Ad(e,t.fromCache,s,o)}}/**
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
 */class R1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class C1{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return rT()?8:eA(zt())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.ys(e,t).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.ws(e,t,o,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new R1;return this.Ss(e,t,h).next(m=>{if(u.result=m,this.Vs)return this.bs(e,t,h,m.size)})}).next(()=>u.result)}bs(e,t,s,o){return s.documentReadCount<this.fs?(uo()<=Ae.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",co(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),$.resolve()):(uo()<=Ae.DEBUG&&te("QueryEngine","Query:",co(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(uo()<=Ae.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",co(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nr(t))):$.resolve())}ys(e,t){if(uy(t))return $.resolve(null);let s=nr(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=Uf(t,null,"F"),s=nr(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=Ce(...u);return this.ps.getDocuments(e,h).next(m=>this.indexManager.getMinOffset(e,s).next(g=>{const _=this.Ds(t,m);return this.Cs(t,_,h,g.readTime)?this.ys(e,Uf(t,null,"F")):this.vs(e,_,t,g)}))})))}ws(e,t,s,o){return uy(t)||o.isEqual(ge.min())?$.resolve(null):this.ps.getDocuments(e,s).next(u=>{const h=this.Ds(t,u);return this.Cs(t,h,s,o)?$.resolve(null):(uo()<=Ae.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),co(t)),this.vs(e,h,t,QS(o,Ha)).next(m=>m))})}Ds(e,t){let s=new yt(fv(e));return t.forEach((o,u)=>{wc(e,u)&&(s=s.add(u))}),s}Cs(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(e,t,s){return uo()<=Ae.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",co(t)),this.ps.getDocumentsMatchingQuery(e,t,Ti.min(),s)}vs(e,t,s,o){return this.ps.getDocumentsMatchingQuery(e,s,o).next(u=>(t.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
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
 */const Rd="LocalStore",P1=3e8;class k1{constructor(e,t,s,o){this.persistence=e,this.Fs=t,this.serializer=o,this.Ms=new et(Re),this.xs=new ys(u=>gd(u),yd),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new y1(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function N1(r,e,t,s){return new k1(r,e,t,s)}async function Lv(r,e){const t=_e(r);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,t.Bs(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],m=[];let g=Ce();for(const _ of o){h.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}for(const _ of u){m.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(s,g).next(_=>({Ls:_,removedBatchIds:h,addedBatchIds:m}))})})}function D1(r,e){const t=_e(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=t.Ns.newChangeBuffer({trackRemovals:!0});return function(m,g,_,w){const T=_.batch,A=T.keys();let U=$.resolve();return A.forEach(q=>{U=U.next(()=>w.getEntry(g,q)).next(H=>{const j=_.docVersions.get(q);be(j!==null,48541),H.version.compareTo(j)<0&&(T.applyToRemoteDocument(H,_),H.isValidDocument()&&(H.setReadTime(_.commitVersion),w.addEntry(H)))})}),U.next(()=>m.mutationQueue.removeMutationBatch(g,T))}(t,s,e,u).next(()=>u.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(m){let g=Ce();for(let _=0;_<m.mutationResults.length;++_)m.mutationResults[_].transformResults.length>0&&(g=g.add(m.batch.mutations[_].key));return g}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function Mv(r){const e=_e(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function V1(r,e){const t=_e(r),s=e.snapshotVersion;let o=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=t.Ns.newChangeBuffer({trackRemovals:!0});o=t.Ms;const m=[];e.targetChanges.forEach((w,T)=>{const A=o.get(T);if(!A)return;m.push(t.Pi.removeMatchingKeys(u,w.removedDocuments,T).next(()=>t.Pi.addMatchingKeys(u,w.addedDocuments,T)));let U=A.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(T)!==null?U=U.withResumeToken(Nt.EMPTY_BYTE_STRING,ge.min()).withLastLimboFreeSnapshotVersion(ge.min()):w.resumeToken.approximateByteSize()>0&&(U=U.withResumeToken(w.resumeToken,s)),o=o.insert(T,U),function(H,j,ae){return H.resumeToken.approximateByteSize()===0||j.snapshotVersion.toMicroseconds()-H.snapshotVersion.toMicroseconds()>=P1?!0:ae.addedDocuments.size+ae.modifiedDocuments.size+ae.removedDocuments.size>0}(A,U,w)&&m.push(t.Pi.updateTargetData(u,U))});let g=Or(),_=Ce();if(e.documentUpdates.forEach(w=>{e.resolvedLimboDocuments.has(w)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,w))}),m.push(O1(u,h,e.documentUpdates).next(w=>{g=w.ks,_=w.qs})),!s.isEqual(ge.min())){const w=t.Pi.getLastRemoteSnapshotVersion(u).next(T=>t.Pi.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(w)}return $.waitFor(m).next(()=>h.apply(u)).next(()=>t.localDocuments.getLocalViewOfDocuments(u,g,_)).next(()=>g)}).then(u=>(t.Ms=o,u))}function O1(r,e,t){let s=Ce(),o=Ce();return t.forEach(u=>s=s.add(u)),e.getEntries(r,s).next(u=>{let h=Or();return t.forEach((m,g)=>{const _=u.get(m);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(ge.min())?(e.removeEntry(m,g.readTime),h=h.insert(m,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(m,g)):te(Rd,"Ignoring outdated watch update for ",m,". Current version:",_.version," Watch version:",g.version)}),{ks:h,qs:o}})}function x1(r,e){const t=_e(r);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=dd),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function L1(r,e){const t=_e(r);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.Pi.getTargetData(s,e).next(u=>u?(o=u,$.resolve(o)):t.Pi.allocateTargetId(s).next(h=>(o=new gi(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s})}async function qf(r,e,t){const s=_e(r),o=s.Ms.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!No(h))throw h;te(Rd,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Ms=s.Ms.remove(e),s.xs.delete(o.target)}function Ty(r,e,t){const s=_e(r);let o=ge.min(),u=Ce();return s.persistence.runTransaction("Execute query","readwrite",h=>function(g,_,w){const T=_e(g),A=T.xs.get(w);return A!==void 0?$.resolve(T.Ms.get(A)):T.Pi.getTargetData(_,w)}(s,h,nr(e)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(h,m.targetId).next(g=>{u=g})}).next(()=>s.Fs.getDocumentsMatchingQuery(h,e,t?o:ge.min(),t?u:Ce())).next(m=>(M1(s,wA(e),m),{documents:m,Qs:u})))}function M1(r,e,t){let s=r.Os.get(e)||ge.min();t.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),r.Os.set(e,s)}class Iy{constructor(){this.activeTargetIds=CA()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class b1{constructor(){this.Mo=new Iy,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Iy,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class F1{Oo(e){}shutdown(){}}/**
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
 */const Sy="ConnectivityMonitor";class Ay{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){te(Sy,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){te(Sy,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Du=null;function Hf(){return Du===null?Du=function(){return 268435456+Math.round(2147483648*Math.random())}():Du++,"0x"+Du.toString(16)}/**
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
 */const vf="RestConnection",U1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class z1{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===Zu?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(e,t,s,o,u){const h=Hf(),m=this.zo(e,t.toUriEncodedString());te(vf,`Sending RPC '${e}' ${h}:`,m,s);const g={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(g,o,u);const{host:_}=new URL(m),w=Ao(_);return this.Jo(e,m,g,s,w).then(T=>(te(vf,`Received RPC '${e}' ${h}: `,T),T),T=>{throw vo(vf,`RPC '${e}' ${h} failed with error: `,T,"url: ",m,"request:",s),T})}Ho(e,t,s,o,u,h){return this.Go(e,t,s,o,u)}jo(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Po}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}zo(e,t){const s=U1[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
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
 */class j1{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const bt="WebChannelConnection";class B1 extends z1{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,o,u){const h=Hf();return new Promise((m,g)=>{const _=new U_;_.setWithCredentials(!0),_.listenOnce(z_.COMPLETE,()=>{try{switch(_.getLastErrorCode()){case Fu.NO_ERROR:const T=_.getResponseJson();te(bt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(T)),m(T);break;case Fu.TIMEOUT:te(bt,`RPC '${e}' ${h} timed out`),g(new Z(B.DEADLINE_EXCEEDED,"Request time out"));break;case Fu.HTTP_ERROR:const A=_.getStatus();if(te(bt,`RPC '${e}' ${h} failed with status:`,A,"response text:",_.getResponseText()),A>0){let U=_.getResponseJson();Array.isArray(U)&&(U=U[0]);const q=U==null?void 0:U.error;if(q&&q.status&&q.message){const H=function(ae){const fe=ae.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(fe)>=0?fe:B.UNKNOWN}(q.status);g(new Z(H,q.message))}else g(new Z(B.UNKNOWN,"Server responded with status "+_.getStatus()))}else g(new Z(B.UNAVAILABLE,"Connection failed."));break;default:pe(9055,{l_:e,streamId:h,h_:_.getLastErrorCode(),P_:_.getLastError()})}}finally{te(bt,`RPC '${e}' ${h} completed.`)}});const w=JSON.stringify(o);te(bt,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",w,s,15)})}T_(e,t,s){const o=Hf(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=$_(),m=B_(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(g.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(g.useFetchStreams=!0),this.jo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const w=u.join("");te(bt,`Creating RPC '${e}' stream ${o}: ${w}`,g);const T=h.createWebChannel(w,g);this.I_(T);let A=!1,U=!1;const q=new j1({Yo:j=>{U?te(bt,`Not sending because RPC '${e}' stream ${o} is closed:`,j):(A||(te(bt,`Opening RPC '${e}' stream ${o} transport.`),T.open(),A=!0),te(bt,`RPC '${e}' stream ${o} sending:`,j),T.send(j))},Zo:()=>T.close()}),H=(j,ae,fe)=>{j.listen(ae,we=>{try{fe(we)}catch(Pe){setTimeout(()=>{throw Pe},0)}})};return H(T,Da.EventType.OPEN,()=>{U||(te(bt,`RPC '${e}' stream ${o} transport opened.`),q.o_())}),H(T,Da.EventType.CLOSE,()=>{U||(U=!0,te(bt,`RPC '${e}' stream ${o} transport closed`),q.a_(),this.E_(T))}),H(T,Da.EventType.ERROR,j=>{U||(U=!0,vo(bt,`RPC '${e}' stream ${o} transport errored. Name:`,j.name,"Message:",j.message),q.a_(new Z(B.UNAVAILABLE,"The operation could not be completed")))}),H(T,Da.EventType.MESSAGE,j=>{var ae;if(!U){const fe=j.data[0];be(!!fe,16349);const we=fe,Pe=(we==null?void 0:we.error)||((ae=we[0])==null?void 0:ae.error);if(Pe){te(bt,`RPC '${e}' stream ${o} received error:`,Pe);const We=Pe.status;let ke=function(C){const V=ht[C];if(V!==void 0)return Iv(V)}(We),k=Pe.message;ke===void 0&&(ke=B.INTERNAL,k="Unknown error status: "+We+" with message "+Pe.message),U=!0,q.a_(new Z(ke,k)),T.close()}else te(bt,`RPC '${e}' stream ${o} received:`,fe),q.u_(fe)}}),H(m,j_.STAT_EVENT,j=>{j.stat===Vf.PROXY?te(bt,`RPC '${e}' stream ${o} detected buffering proxy`):j.stat===Vf.NOPROXY&&te(bt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{q.__()},0),q}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function Ef(){return typeof document<"u"?document:null}/**
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
 */function Ac(r){return new WA(r,!0)}/**
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
 */class bv{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&te("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Ry="PersistentStream";class Fv{constructor(e,t,s,o,u,h,m,g){this.Mi=e,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new bv(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===B.RESOURCE_EXHAUSTED?(Vr(t.toString()),Vr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.D_===t&&this.G_(s,o)},s=>{e(()=>{const o=new Z(B.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)})})}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{s(()=>this.listener.Xo())}),this.stream.t_(()=>{s(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(o=>{s(()=>this.z_(o))}),this.stream.onMessage(o=>{s(()=>++this.F_==1?this.J_(o):this.onNext(o))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return te(Ry,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(te(Ry,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class $1 extends Fv{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=QA(this.serializer,e),s=function(u){if(!("targetChange"in u))return ge.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?ge.min():h.readTime?rr(h.readTime):ge.min()}(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=$f(this.serializer),t.addTarget=function(u,h){let m;const g=h.target;if(m=bf(g)?{documents:JA(u,g)}:{query:ZA(u,g).ft},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=Rv(u,h.resumeToken);const _=zf(u,h.expectedCount);_!==null&&(m.expectedCount=_)}else if(h.snapshotVersion.compareTo(ge.min())>0){m.readTime=sc(u,h.snapshotVersion.toTimestamp());const _=zf(u,h.expectedCount);_!==null&&(m.expectedCount=_)}return m}(this.serializer,e);const s=t1(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=$f(this.serializer),t.removeTarget=e,this.q_(t)}}class q1 extends Fv{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return be(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,be(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){be(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=XA(e.writeResults,e.commitTime),s=rr(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=$f(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>YA(this.serializer,s))};this.q_(t)}}/**
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
 */class H1{}class W1 extends H1{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new Z(B.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.Go(e,jf(t,s),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new Z(B.UNKNOWN,u.toString())})}Ho(e,t,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,m])=>this.connection.Ho(e,jf(t,s),o,h,m,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new Z(B.UNKNOWN,h.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class G1{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Vr(t),this.aa=!1):te("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const gs="RemoteStore";class K1{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo(h=>{s.enqueueAndForget(async()=>{_s(this)&&(te(gs,"Restarting streams for network reachability change."),await async function(g){const _=_e(g);_.Ea.add(4),await al(_),_.Ra.set("Unknown"),_.Ea.delete(4),await Rc(_)}(this))})}),this.Ra=new G1(s,o)}}async function Rc(r){if(_s(r))for(const e of r.da)await e(!0)}async function al(r){for(const e of r.da)await e(!1)}function Uv(r,e){const t=_e(r);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Nd(t)?kd(t):Do(t).O_()&&Pd(t,e))}function Cd(r,e){const t=_e(r),s=Do(t);t.Ia.delete(e),s.O_()&&zv(t,e),t.Ia.size===0&&(s.O_()?s.L_():_s(t)&&t.Ra.set("Unknown"))}function Pd(r,e){if(r.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ge.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Do(r).Y_(e)}function zv(r,e){r.Va.Ue(e),Do(r).Z_(e)}function kd(r){r.Va=new BA({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),Do(r).start(),r.Ra.ua()}function Nd(r){return _s(r)&&!Do(r).x_()&&r.Ia.size>0}function _s(r){return _e(r).Ea.size===0}function jv(r){r.Va=void 0}async function Q1(r){r.Ra.set("Online")}async function Y1(r){r.Ia.forEach((e,t)=>{Pd(r,e)})}async function X1(r,e){jv(r),Nd(r)?(r.Ra.ha(e),kd(r)):r.Ra.set("Unknown")}async function J1(r,e,t){if(r.Ra.set("Online"),e instanceof Av&&e.state===2&&e.cause)try{await async function(o,u){const h=u.cause;for(const m of u.targetIds)o.Ia.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ia.delete(m),o.Va.removeTarget(m))}(r,e)}catch(s){te(gs,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ac(r,s)}else if(e instanceof Bu?r.Va.Ze(e):e instanceof Sv?r.Va.st(e):r.Va.tt(e),!t.isEqual(ge.min()))try{const s=await Mv(r.localStore);t.compareTo(s)>=0&&await function(u,h){const m=u.Va.Tt(h);return m.targetChanges.forEach((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const w=u.Ia.get(_);w&&u.Ia.set(_,w.withResumeToken(g.resumeToken,h))}}),m.targetMismatches.forEach((g,_)=>{const w=u.Ia.get(g);if(!w)return;u.Ia.set(g,w.withResumeToken(Nt.EMPTY_BYTE_STRING,w.snapshotVersion)),zv(u,g);const T=new gi(w.target,g,_,w.sequenceNumber);Pd(u,T)}),u.remoteSyncer.applyRemoteEvent(m)}(r,t)}catch(s){te(gs,"Failed to raise snapshot:",s),await ac(r,s)}}async function ac(r,e,t){if(!No(e))throw e;r.Ea.add(1),await al(r),r.Ra.set("Offline"),t||(t=()=>Mv(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{te(gs,"Retrying IndexedDB access"),await t(),r.Ea.delete(1),await Rc(r)})}function Bv(r,e){return e().catch(t=>ac(r,t,e))}async function Cc(r){const e=_e(r),t=Ri(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:dd;for(;Z1(e);)try{const o=await x1(e.localStore,s);if(o===null){e.Ta.length===0&&t.L_();break}s=o.batchId,eR(e,o)}catch(o){await ac(e,o)}$v(e)&&qv(e)}function Z1(r){return _s(r)&&r.Ta.length<10}function eR(r,e){r.Ta.push(e);const t=Ri(r);t.O_()&&t.X_&&t.ea(e.mutations)}function $v(r){return _s(r)&&!Ri(r).x_()&&r.Ta.length>0}function qv(r){Ri(r).start()}async function tR(r){Ri(r).ra()}async function nR(r){const e=Ri(r);for(const t of r.Ta)e.ea(t.mutations)}async function rR(r,e,t){const s=r.Ta.shift(),o=Ed.from(s,e,t);await Bv(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await Cc(r)}async function iR(r,e){e&&Ri(r).X_&&await async function(s,o){if(function(h){return UA(h)&&h!==B.ABORTED}(o.code)){const u=s.Ta.shift();Ri(s).B_(),await Bv(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await Cc(s)}}(r,e),$v(r)&&qv(r)}async function Cy(r,e){const t=_e(r);t.asyncQueue.verifyOperationInProgress(),te(gs,"RemoteStore received new credentials");const s=_s(t);t.Ea.add(3),await al(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Rc(t)}async function sR(r,e){const t=_e(r);e?(t.Ea.delete(2),await Rc(t)):e||(t.Ea.add(2),await al(t),t.Ra.set("Unknown"))}function Do(r){return r.ma||(r.ma=function(t,s,o){const u=_e(t);return u.sa(),new $1(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{Xo:Q1.bind(null,r),t_:Y1.bind(null,r),r_:X1.bind(null,r),H_:J1.bind(null,r)}),r.da.push(async e=>{e?(r.ma.B_(),Nd(r)?kd(r):r.Ra.set("Unknown")):(await r.ma.stop(),jv(r))})),r.ma}function Ri(r){return r.fa||(r.fa=function(t,s,o){const u=_e(t);return u.sa(),new q1(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:tR.bind(null,r),r_:iR.bind(null,r),ta:nR.bind(null,r),na:rR.bind(null,r)}),r.da.push(async e=>{e?(r.fa.B_(),await Cc(r)):(await r.fa.stop(),r.Ta.length>0&&(te(gs,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))})),r.fa}/**
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
 */class Dd{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new kr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new Dd(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vd(r,e){if(Vr("AsyncQueue",`${e}: ${r}`),No(r))return new Z(B.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class yo{static emptySet(e){return new yo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||le.comparator(t.key,s.key):(t,s)=>le.comparator(t.key,s.key),this.keyedMap=Va(),this.sortedSet=new et(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof yo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Py{constructor(){this.ga=new et(le.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):pe(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,s)=>{e.push(s)}),e}}class So{constructor(e,t,s,o,u,h,m,g,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach(m=>{h.push({type:0,doc:m})}),new So(e,t,yo.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ec(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class oR{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class aR{constructor(){this.queries=ky(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=_e(t),u=o.queries;o.queries=ky(),u.forEach((h,m)=>{for(const g of m.Sa)g.onError(s)})})(this,new Z(B.ABORTED,"Firestore shutting down"))}}function ky(){return new ys(r=>hv(r),Ec)}async function Od(r,e){const t=_e(r);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.ba()&&e.Da()&&(s=2):(u=new oR,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await t.onListen(o,!0);break;case 1:u.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=Vd(h,`Initialization of query '${co(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.Sa.push(e),e.va(t.onlineState),u.wa&&e.Fa(u.wa)&&Ld(t)}async function xd(r,e){const t=_e(r),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.Sa.indexOf(e);h>=0&&(u.Sa.splice(h,1),u.Sa.length===0?o=e.Da()?0:1:!u.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function lR(r,e){const t=_e(r);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.Sa)m.Fa(o)&&(s=!0);h.wa=o}}s&&Ld(t)}function uR(r,e,t){const s=_e(r),o=s.queries.get(e);if(o)for(const u of o.Sa)u.onError(t);s.queries.delete(e)}function Ld(r){r.Ca.forEach(e=>{e.next()})}var Wf,Ny;(Ny=Wf||(Wf={})).Ma="default",Ny.Cache="cache";class Md{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new So(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=So.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Wf.Cache}}/**
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
 */class Hv{constructor(e){this.key=e}}class Wv{constructor(e){this.key=e}}class cR{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ce(),this.mutatedKeys=Ce(),this.eu=fv(e),this.tu=new yo(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new Py,o=t?t.tu:this.tu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((w,T)=>{const A=o.get(w),U=wc(this.query,T)?T:null,q=!!A&&this.mutatedKeys.has(A.key),H=!!U&&(U.hasLocalMutations||this.mutatedKeys.has(U.key)&&U.hasCommittedMutations);let j=!1;A&&U?A.data.isEqual(U.data)?q!==H&&(s.track({type:3,doc:U}),j=!0):this.su(A,U)||(s.track({type:2,doc:U}),j=!0,(g&&this.eu(U,g)>0||_&&this.eu(U,_)<0)&&(m=!0)):!A&&U?(s.track({type:0,doc:U}),j=!0):A&&!U&&(s.track({type:1,doc:A}),j=!0,(g||_)&&(m=!0)),j&&(U?(h=h.add(U),u=H?u.add(w):u.delete(w)):(h=h.delete(w),u=u.delete(w)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),u=u.delete(w.key),s.track({type:1,doc:w})}return{tu:h,iu:s,Cs:m,mutatedKeys:u}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort((w,T)=>function(U,q){const H=j=>{switch(j){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return pe(20277,{Rt:j})}};return H(U)-H(q)}(w.type,T.type)||this.eu(w.doc,T.doc)),this.ou(s),o=o??!1;const m=t&&!o?this._u():[],g=this.Xa.size===0&&this.current&&!o?1:0,_=g!==this.Za;return this.Za=g,h.length!==0||_?{snapshot:new So(this.query,e.tu,u,h,e.mutatedKeys,g===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Py,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ce(),this.tu.forEach(s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))});const t=[];return e.forEach(s=>{this.Xa.has(s)||t.push(new Wv(s))}),this.Xa.forEach(s=>{e.has(s)||t.push(new Hv(s))}),t}cu(e){this.Ya=e.Qs,this.Xa=Ce();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return So.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const bd="SyncEngine";class hR{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class fR{constructor(e){this.key=e,this.hu=!1}}class dR{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new ys(m=>hv(m),Ec),this.Iu=new Map,this.Eu=new Set,this.du=new et(le.comparator),this.Au=new Map,this.Ru=new Id,this.Vu={},this.mu=new Map,this.fu=Io.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function pR(r,e,t=!0){const s=Jv(r);let o;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await Gv(s,e,t,!0),o}async function mR(r,e){const t=Jv(r);await Gv(t,e,!0,!1)}async function Gv(r,e,t,s){const o=await L1(r.localStore,nr(e)),u=o.targetId,h=r.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await gR(r,e,u,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&Uv(r.remoteStore,o),m}async function gR(r,e,t,s,o){r.pu=(T,A,U)=>async function(H,j,ae,fe){let we=j.view.ru(ae);we.Cs&&(we=await Ty(H.localStore,j.query,!1).then(({documents:k})=>j.view.ru(k,we)));const Pe=fe&&fe.targetChanges.get(j.targetId),We=fe&&fe.targetMismatches.get(j.targetId)!=null,ke=j.view.applyChanges(we,H.isPrimaryClient,Pe,We);return Vy(H,j.targetId,ke.au),ke.snapshot}(r,T,A,U);const u=await Ty(r.localStore,e,!0),h=new cR(e,u.Qs),m=h.ru(u.documents),g=ol.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),_=h.applyChanges(m,r.isPrimaryClient,g);Vy(r,t,_.au);const w=new hR(e,t,h);return r.Tu.set(e,w),r.Iu.has(t)?r.Iu.get(t).push(e):r.Iu.set(t,[e]),_.snapshot}async function yR(r,e,t){const s=_e(r),o=s.Tu.get(e),u=s.Iu.get(o.targetId);if(u.length>1)return s.Iu.set(o.targetId,u.filter(h=>!Ec(h,e))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await qf(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Cd(s.remoteStore,o.targetId),Gf(s,o.targetId)}).catch(ko)):(Gf(s,o.targetId),await qf(s.localStore,o.targetId,!0))}async function _R(r,e){const t=_e(r),s=t.Tu.get(e),o=t.Iu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Cd(t.remoteStore,s.targetId))}async function vR(r,e,t){const s=RR(r);try{const o=await function(h,m){const g=_e(h),_=He.now(),w=m.reduce((U,q)=>U.add(q.key),Ce());let T,A;return g.persistence.runTransaction("Locally write mutations","readwrite",U=>{let q=Or(),H=Ce();return g.Ns.getEntries(U,w).next(j=>{q=j,q.forEach((ae,fe)=>{fe.isValidDocument()||(H=H.add(ae))})}).next(()=>g.localDocuments.getOverlayedDocuments(U,q)).next(j=>{T=j;const ae=[];for(const fe of m){const we=xA(fe,T.get(fe.key).overlayedDocument);we!=null&&ae.push(new Vi(fe.key,we,rv(we.value.mapValue),En.exists(!0)))}return g.mutationQueue.addMutationBatch(U,_,ae,m)}).next(j=>{A=j;const ae=j.applyToLocalDocumentSet(T,H);return g.documentOverlayCache.saveOverlays(U,j.batchId,ae)})}).then(()=>({batchId:A.batchId,changes:pv(T)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,m,g){let _=h.Vu[h.currentUser.toKey()];_||(_=new et(Re)),_=_.insert(m,g),h.Vu[h.currentUser.toKey()]=_}(s,o.batchId,t),await ll(s,o.changes),await Cc(s.remoteStore)}catch(o){const u=Vd(o,"Failed to persist write");t.reject(u)}}async function Kv(r,e){const t=_e(r);try{const s=await V1(t.localStore,e);e.targetChanges.forEach((o,u)=>{const h=t.Au.get(u);h&&(be(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?be(h.hu,14607):o.removedDocuments.size>0&&(be(h.hu,42227),h.hu=!1))}),await ll(t,s,e)}catch(s){await ko(s)}}function Dy(r,e,t){const s=_e(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Tu.forEach((u,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)}),function(h,m){const g=_e(h);g.onlineState=m;let _=!1;g.queries.forEach((w,T)=>{for(const A of T.Sa)A.va(m)&&(_=!0)}),_&&Ld(g)}(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function ER(r,e,t){const s=_e(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Au.get(e),u=o&&o.key;if(u){let h=new et(le.comparator);h=h.insert(u,Ut.newNoDocument(u,ge.min()));const m=Ce().add(u),g=new Sc(ge.min(),new Map,new et(Re),h,m);await Kv(s,g),s.du=s.du.remove(u),s.Au.delete(e),Fd(s)}else await qf(s.localStore,e,!1).then(()=>Gf(s,e,t)).catch(ko)}async function wR(r,e){const t=_e(r),s=e.batch.batchId;try{const o=await D1(t.localStore,e);Yv(t,s,null),Qv(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await ll(t,o)}catch(o){await ko(o)}}async function TR(r,e,t){const s=_e(r);try{const o=await function(h,m){const g=_e(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",_=>{let w;return g.mutationQueue.lookupMutationBatch(_,m).next(T=>(be(T!==null,37113),w=T.keys(),g.mutationQueue.removeMutationBatch(_,T))).next(()=>g.mutationQueue.performConsistencyCheck(_)).next(()=>g.documentOverlayCache.removeOverlaysForBatchId(_,w,m)).next(()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,w)).next(()=>g.localDocuments.getDocuments(_,w))})}(s.localStore,e);Yv(s,e,t),Qv(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await ll(s,o)}catch(o){await ko(o)}}function Qv(r,e){(r.mu.get(e)||[]).forEach(t=>{t.resolve()}),r.mu.delete(e)}function Yv(r,e,t){const s=_e(r);let o=s.Vu[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Vu[s.currentUser.toKey()]=o}}function Gf(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Iu.get(e))r.Tu.delete(s),t&&r.Pu.yu(s,t);r.Iu.delete(e),r.isPrimaryClient&&r.Ru.jr(e).forEach(s=>{r.Ru.containsKey(s)||Xv(r,s)})}function Xv(r,e){r.Eu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(Cd(r.remoteStore,t),r.du=r.du.remove(e),r.Au.delete(t),Fd(r))}function Vy(r,e,t){for(const s of t)s instanceof Hv?(r.Ru.addReference(s.key,e),IR(r,s)):s instanceof Wv?(te(bd,"Document no longer in limbo: "+s.key),r.Ru.removeReference(s.key,e),r.Ru.containsKey(s.key)||Xv(r,s.key)):pe(19791,{wu:s})}function IR(r,e){const t=e.key,s=t.path.canonicalString();r.du.get(t)||r.Eu.has(s)||(te(bd,"New document in limbo: "+t),r.Eu.add(s),Fd(r))}function Fd(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const t=new le(qe.fromString(e)),s=r.fu.next();r.Au.set(s,new fR(t)),r.du=r.du.insert(t,s),Uv(r.remoteStore,new gi(nr(vc(t.path)),s,"TargetPurposeLimboResolution",gc.ce))}}async function ll(r,e,t){const s=_e(r),o=[],u=[],h=[];s.Tu.isEmpty()||(s.Tu.forEach((m,g)=>{h.push(s.pu(g,e,t).then(_=>{var w;if((_||t)&&s.isPrimaryClient){const T=_?!_.fromCache:(w=t==null?void 0:t.targetChanges.get(g.targetId))==null?void 0:w.current;s.sharedClientState.updateQueryState(g.targetId,T?"current":"not-current")}if(_){o.push(_);const T=Ad.As(g.targetId,_);u.push(T)}}))}),await Promise.all(h),s.Pu.H_(o),await async function(g,_){const w=_e(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>$.forEach(_,A=>$.forEach(A.Es,U=>w.persistence.referenceDelegate.addReference(T,A.targetId,U)).next(()=>$.forEach(A.ds,U=>w.persistence.referenceDelegate.removeReference(T,A.targetId,U)))))}catch(T){if(!No(T))throw T;te(Rd,"Failed to update sequence numbers: "+T)}for(const T of _){const A=T.targetId;if(!T.fromCache){const U=w.Ms.get(A),q=U.snapshotVersion,H=U.withLastLimboFreeSnapshotVersion(q);w.Ms=w.Ms.insert(A,H)}}}(s.localStore,u))}async function SR(r,e){const t=_e(r);if(!t.currentUser.isEqual(e)){te(bd,"User change. New user:",e.toKey());const s=await Lv(t.localStore,e);t.currentUser=e,function(u,h){u.mu.forEach(m=>{m.forEach(g=>{g.reject(new Z(B.CANCELLED,h))})}),u.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ll(t,s.Ls)}}function AR(r,e){const t=_e(r),s=t.Au.get(e);if(s&&s.hu)return Ce().add(s.key);{let o=Ce();const u=t.Iu.get(e);if(!u)return o;for(const h of u){const m=t.Tu.get(h);o=o.unionWith(m.view.nu)}return o}}function Jv(r){const e=_e(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Kv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=AR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ER.bind(null,e),e.Pu.H_=lR.bind(null,e.eventManager),e.Pu.yu=uR.bind(null,e.eventManager),e}function RR(r){const e=_e(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=wR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=TR.bind(null,e),e}class lc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ac(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return N1(this.persistence,new C1,e.initialUser,this.serializer)}Cu(e){return new xv(Sd.mi,this.serializer)}Du(e){return new b1}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}lc.provider={build:()=>new lc};class CR extends lc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){be(this.persistence.referenceDelegate instanceof oc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new f1(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Yt.withCacheSize(this.cacheSizeBytes):Yt.DEFAULT;return new xv(s=>oc.mi(s,t),this.serializer)}}class Kf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Dy(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=SR.bind(null,this.syncEngine),await sR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new aR}()}createDatastore(e){const t=Ac(e.databaseInfo.databaseId),s=function(u){return new B1(u)}(e.databaseInfo);return function(u,h,m,g){return new W1(u,h,m,g)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,u,h,m){return new K1(s,o,u,h,m)}(this.localStore,this.datastore,e.asyncQueue,t=>Dy(this.syncEngine,t,0),function(){return Ay.v()?new Ay:new F1}())}createSyncEngine(e,t){return function(o,u,h,m,g,_,w){const T=new dR(o,u,h,m,g,_);return w&&(T.gu=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const u=_e(o);te(gs,"RemoteStore shutting down."),u.Ea.add(5),await al(u),u.Aa.shutdown(),u.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Kf.provider={build:()=>new Kf};/**
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
 */class Ud{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Vr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const Ci="FirestoreClient";class PR{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Ft.UNAUTHENTICATED,this.clientId=fd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{te(Ci,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(te(Ci,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new kr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Vd(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function wf(r,e){r.asyncQueue.verifyOperationInProgress(),te(Ci,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await Lv(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function Oy(r,e){r.asyncQueue.verifyOperationInProgress();const t=await kR(r);te(Ci,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(s=>Cy(e.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>Cy(e.remoteStore,o)),r._onlineComponents=e}async function kR(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){te(Ci,"Using user provided OfflineComponentProvider");try{await wf(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===B.FAILED_PRECONDITION||o.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;vo("Error using user provided cache. Falling back to memory cache: "+t),await wf(r,new lc)}}else te(Ci,"Using default OfflineComponentProvider"),await wf(r,new CR(void 0));return r._offlineComponents}async function Zv(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(te(Ci,"Using user provided OnlineComponentProvider"),await Oy(r,r._uninitializedComponentsProvider._online)):(te(Ci,"Using default OnlineComponentProvider"),await Oy(r,new Kf))),r._onlineComponents}function NR(r){return Zv(r).then(e=>e.syncEngine)}async function uc(r){const e=await Zv(r),t=e.eventManager;return t.onListen=pR.bind(null,e.syncEngine),t.onUnlisten=yR.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=mR.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=_R.bind(null,e.syncEngine),t}function DR(r,e,t={}){const s=new kr;return r.asyncQueue.enqueueAndForget(async()=>function(u,h,m,g,_){const w=new Ud({next:A=>{w.Nu(),h.enqueueAndForget(()=>xd(u,T));const U=A.docs.has(m);!U&&A.fromCache?_.reject(new Z(B.UNAVAILABLE,"Failed to get document because the client is offline.")):U&&A.fromCache&&g&&g.source==="server"?_.reject(new Z(B.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(A)},error:A=>_.reject(A)}),T=new Md(vc(m.path),w,{includeMetadataChanges:!0,qa:!0});return Od(u,T)}(await uc(r),r.asyncQueue,e,t,s)),s.promise}function VR(r,e,t={}){const s=new kr;return r.asyncQueue.enqueueAndForget(async()=>function(u,h,m,g,_){const w=new Ud({next:A=>{w.Nu(),h.enqueueAndForget(()=>xd(u,T)),A.fromCache&&g.source==="server"?_.reject(new Z(B.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(A)},error:A=>_.reject(A)}),T=new Md(m,w,{includeMetadataChanges:!0,qa:!0});return Od(u,T)}(await uc(r),r.asyncQueue,e,t,s)),s.promise}/**
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
 */const tE="firestore.googleapis.com",Ly=!0;class My{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new Z(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=tE,this.ssl=Ly}else this.host=e.host,this.ssl=e.ssl??Ly;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Ov;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<c1)throw new Z(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}KS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=eE(e.experimentalLongPollingOptions??{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Z(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Z(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Z(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Pc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new My({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Z(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Z(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new My(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new FS;switch(s.type){case"firstParty":return new BS(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new Z(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=xy.get(t);s&&(te("ComponentProvider","Removing Datastore"),xy.delete(t),s.terminate())}(this),Promise.resolve()}}function OR(r,e,t,s={}){var _;r=Jt(r,Pc);const o=Ao(e),u=r._getSettings(),h={...u,emulatorOptions:r._getEmulatorOptions()},m=`${e}:${t}`;o&&(Xy(`https://${m}`),Jy("Firestore",!0)),u.host!==tE&&u.host!==m&&vo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...u,host:m,ssl:o,emulatorOptions:s};if(!hs(g,h)&&(r._setSettings(g),s.mockUserToken)){let w,T;if(typeof s.mockUserToken=="string")w=s.mockUserToken,T=Ft.MOCK_USER;else{w=Kw(s.mockUserToken,(_=r._app)==null?void 0:_.options.projectId);const A=s.mockUserToken.sub||s.mockUserToken.user_id;if(!A)throw new Z(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new Ft(A)}r._authCredentials=new US(new H_(w,T))}}/**
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
 */class vs{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new vs(this.firestore,e,this._query)}}class rt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new rt(this.firestore,e,this._key)}toJSON(){return{type:rt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(rl(t,rt._jsonSchema))return new rt(e,s||null,new le(qe.fromString(t.referencePath)))}}rt._jsonSchemaVersion="firestore/documentReference/1.0",rt._jsonSchema={type:dt("string",rt._jsonSchemaVersion),referencePath:dt("string")};class wi extends vs{constructor(e,t,s){super(e,t,vc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new rt(this.firestore,null,new le(e))}withConverter(e){return new wi(this.firestore,e,this._path)}}function xR(r,e,...t){if(r=_t(r),W_("collection","path",e),r instanceof Pc){const s=qe.fromString(e,...t);return Qg(s),new wi(r,null,s)}{if(!(r instanceof rt||r instanceof wi))throw new Z(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(qe.fromString(e,...t));return Qg(s),new wi(r.firestore,null,s)}}function xa(r,e,...t){if(r=_t(r),arguments.length===1&&(e=fd.newId()),W_("doc","path",e),r instanceof Pc){const s=qe.fromString(e,...t);return Kg(s),new rt(r,null,new le(s))}{if(!(r instanceof rt||r instanceof wi))throw new Z(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(qe.fromString(e,...t));return Kg(s),new rt(r.firestore,r instanceof wi?r.converter:null,new le(s))}}/**
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
 */const by="AsyncQueue";class Fy{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new bv(this,"async_queue_retry"),this._c=()=>{const s=Ef();s&&te(by,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=Ef();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Ef();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new kr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!No(e))throw e;te(by,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(s=>{throw this.nc=s,this.rc=!1,Vr("INTERNAL UNHANDLED ERROR: ",Uy(s)),s}).then(s=>(this.rc=!1,s))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=Dd.createAndSchedule(this,e,t,s,u=>this.hc(u));return this.tc.push(o),o}uc(){this.nc&&pe(47125,{Pc:Uy(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Uy(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
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
 */function zy(r){return function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1}(r,["next","error","complete"])}class xr extends Pc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new Fy,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Fy(e),this._firestoreClient=void 0,await e}}}function LR(r,e){const t=typeof r=="object"?r:n_(),s=typeof r=="string"?r:Zu,o=ed(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=Ww("firestore");u&&OR(o,...u)}return o}function kc(r){if(r._terminated)throw new Z(B.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||MR(r),r._firestoreClient}function MR(r){var s,o,u;const e=r._freezeSettings(),t=function(m,g,_,w){return new sA(m,g,_,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,eE(w.experimentalLongPollingOptions),w.useFetchStreams,w.isUsingEmulator)}(r._databaseId,((s=r._app)==null?void 0:s.options.appId)||"",r._persistenceKey,e);r._componentsProvider||(o=e.localCache)!=null&&o._offlineComponentProvider&&((u=e.localCache)!=null&&u._onlineComponentProvider)&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new PR(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&function(m){const g=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(g),_online:g}}(r._componentsProvider))}/**
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
 */class vn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vn(Nt.fromBase64String(e))}catch(t){throw new Z(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new vn(Nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:vn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(rl(e,vn._jsonSchema))return vn.fromBase64String(e.bytes)}}vn._jsonSchemaVersion="firestore/bytes/1.0",vn._jsonSchema={type:dt("string",vn._jsonSchemaVersion),bytes:dt("string")};/**
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
 */class Nc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Z(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new kt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class zd{constructor(e){this._methodName=e}}/**
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
 */class ir{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Z(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Z(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ir._jsonSchemaVersion}}static fromJSON(e){if(rl(e,ir._jsonSchema))return new ir(e.latitude,e.longitude)}}ir._jsonSchemaVersion="firestore/geoPoint/1.0",ir._jsonSchema={type:dt("string",ir._jsonSchemaVersion),latitude:dt("number"),longitude:dt("number")};/**
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
 */class sr{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}toJSON(){return{type:sr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(rl(e,sr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new sr(e.vectorValues);throw new Z(B.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}sr._jsonSchemaVersion="firestore/vectorValue/1.0",sr._jsonSchema={type:dt("string",sr._jsonSchemaVersion),vectorValues:dt("object")};/**
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
 */const bR=/^__.*__$/;class FR{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Vi(e,this.data,this.fieldMask,t,this.fieldTransforms):new sl(e,this.data,t,this.fieldTransforms)}}class nE{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Vi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function rE(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw pe(40011,{Ac:r})}}class jd{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new jd({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return cc(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(rE(this.Ac)&&bR.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class UR{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Ac(e)}Cc(e,t,s,o=!1){return new jd({Ac:e,methodName:t,Dc:s,path:kt.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Dc(r){const e=r._freezeSettings(),t=Ac(r._databaseId);return new UR(r._databaseId,!!e.ignoreUndefinedProperties,t)}function iE(r,e,t,s,o,u={}){const h=r.Cc(u.merge||u.mergeFields?2:0,e,t,o);Bd("Data must be an object, but it was:",h,s);const m=sE(s,h);let g,_;if(u.merge)g=new cn(h.fieldMask),_=h.fieldTransforms;else if(u.mergeFields){const w=[];for(const T of u.mergeFields){const A=Qf(e,T,t);if(!h.contains(A))throw new Z(B.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);aE(w,A)||w.push(A)}g=new cn(w),_=h.fieldTransforms.filter(T=>g.covers(T.field))}else g=null,_=h.fieldTransforms;return new FR(new Xt(m),g,_)}class Vc extends zd{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Vc}}function zR(r,e,t,s){const o=r.Cc(1,e,t);Bd("Data must be an object, but it was:",o,s);const u=[],h=Xt.empty();Di(s,(g,_)=>{const w=$d(e,g,t);_=_t(_);const T=o.yc(w);if(_ instanceof Vc)u.push(w);else{const A=ul(_,T);A!=null&&(u.push(w),h.set(w,A))}});const m=new cn(u);return new nE(h,m,o.fieldTransforms)}function jR(r,e,t,s,o,u){const h=r.Cc(1,e,t),m=[Qf(e,s,t)],g=[o];if(u.length%2!=0)throw new Z(B.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<u.length;A+=2)m.push(Qf(e,u[A])),g.push(u[A+1]);const _=[],w=Xt.empty();for(let A=m.length-1;A>=0;--A)if(!aE(_,m[A])){const U=m[A];let q=g[A];q=_t(q);const H=h.yc(U);if(q instanceof Vc)_.push(U);else{const j=ul(q,H);j!=null&&(_.push(U),w.set(U,j))}}const T=new cn(_);return new nE(w,T,h.fieldTransforms)}function BR(r,e,t,s=!1){return ul(t,r.Cc(s?4:3,e))}function ul(r,e){if(oE(r=_t(r)))return Bd("Unsupported field value:",e,r),sE(r,e);if(r instanceof zd)return function(s,o){if(!rE(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(s,o){const u=[];let h=0;for(const m of s){let g=ul(m,o.wc(h));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),h++}return{arrayValue:{values:u}}}(r,e)}return function(s,o){if((s=_t(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return PA(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=He.fromDate(s);return{timestampValue:sc(o.serializer,u)}}if(s instanceof He){const u=new He(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:sc(o.serializer,u)}}if(s instanceof ir)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof vn)return{bytesValue:Rv(o.serializer,s._byteString)};if(s instanceof rt){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.Sc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Td(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof sr)return function(h,m){return{mapValue:{fields:{[tv]:{stringValue:nv},[ec]:{arrayValue:{values:h.toArray().map(_=>{if(typeof _!="number")throw m.Sc("VectorValues must only contain numeric values.");return _d(m.serializer,_)})}}}}}}(s,o);throw o.Sc(`Unsupported field value: ${mc(s)}`)}(r,e)}function sE(r,e){const t={};return Q_(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Di(r,(s,o)=>{const u=ul(o,e.mc(s));u!=null&&(t[s]=u)}),{mapValue:{fields:t}}}function oE(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof He||r instanceof ir||r instanceof vn||r instanceof rt||r instanceof zd||r instanceof sr)}function Bd(r,e,t){if(!oE(t)||!G_(t)){const s=mc(t);throw s==="an object"?e.Sc(r+" a custom object"):e.Sc(r+" "+s)}}function Qf(r,e,t){if((e=_t(e))instanceof Nc)return e._internalPath;if(typeof e=="string")return $d(r,e);throw cc("Field path arguments must be of type string or ",r,!1,void 0,t)}const $R=new RegExp("[~\\*/\\[\\]]");function $d(r,e,t){if(e.search($R)>=0)throw cc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Nc(...e.split("."))._internalPath}catch{throw cc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function cc(r,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(u||h)&&(g+=" (found",u&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new Z(B.INVALID_ARGUMENT,m+r+g)}function aE(r,e){return r.some(t=>t.isEqual(e))}/**
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
 */class lE{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(qd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class qR extends lE{data(){return super.data()}}function qd(r,e){return typeof e=="string"?$d(r,e):e instanceof Nc?e._internalPath:e._delegate._internalPath}/**
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
 */function uE(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new Z(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Hd{}class HR extends Hd{}function jy(r,e,...t){let s=[];e instanceof Hd&&s.push(e),s=s.concat(t),function(u){const h=u.filter(g=>g instanceof Wd).length,m=u.filter(g=>g instanceof Oc).length;if(h>1||h>0&&m>0)throw new Z(B.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)r=o._apply(r);return r}class Oc extends HR{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Oc(e,t,s)}_apply(e){const t=this._parse(e);return cE(e._query,t),new vs(e.firestore,e.converter,Ff(e._query,t))}_parse(e){const t=Dc(e.firestore);return function(u,h,m,g,_,w,T){let A;if(_.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new Z(B.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){$y(T,w);const q=[];for(const H of T)q.push(By(g,u,H));A={arrayValue:{values:q}}}else A=By(g,u,T)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||$y(T,w),A=BR(m,h,T,w==="in"||w==="not-in");return ft.create(_,w,A)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Tf(r,e,t){const s=e,o=qd("where",r);return Oc._create(o,s,t)}class Wd extends Hd{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Wd(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:xn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,u){let h=o;const m=u.getFlattenedFilters();for(const g of m)cE(h,g),h=Ff(h,g)}(e._query,t),new vs(e.firestore,e.converter,Ff(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function By(r,e,t){if(typeof(t=_t(t))=="string"){if(t==="")throw new Z(B.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!cv(e)&&t.indexOf("/")!==-1)throw new Z(B.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(qe.fromString(t));if(!le.isDocumentKey(s))throw new Z(B.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return ry(r,new le(s))}if(t instanceof rt)return ry(r,t._key);throw new Z(B.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${mc(t)}.`)}function $y(r,e){if(!Array.isArray(r)||r.length===0)throw new Z(B.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function cE(r,e){const t=function(o,u){for(const h of o)for(const m of h.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null}(r.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new Z(B.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Z(B.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class WR{convertValue(e,t="none"){switch(Ai(e)){case 0:return null;case 1:return e.booleanValue;case 2:return at(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Si(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw pe(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Di(e,(o,u)=>{s[o]=this.convertValue(u,t)}),s}convertVectorValue(e){var s,o,u;const t=(u=(o=(s=e.fields)==null?void 0:s[ec].arrayValue)==null?void 0:o.values)==null?void 0:u.map(h=>at(h.doubleValue));return new sr(t)}convertGeoPoint(e){return new ir(at(e.latitude),at(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=_c(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Wa(e));default:return null}}convertTimestamp(e){const t=Ii(e);return new He(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=qe.fromString(e);be(Vv(s),9688,{name:e});const o=new Ga(s.get(1),s.get(3)),u=new le(s.popFirst(5));return o.isEqual(t)||Vr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */function hE(r,e,t){let s;return s=r?r.toFirestore(e):e,s}class La{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class us extends lE{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new $u(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(qd("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Z(B.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=us._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}us._jsonSchemaVersion="firestore/documentSnapshot/1.0",us._jsonSchema={type:dt("string",us._jsonSchemaVersion),bundleSource:dt("string","DocumentSnapshot"),bundleName:dt("string"),bundle:dt("string")};class $u extends us{data(e={}){return super.data(e)}}class cs{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new La(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new $u(this._firestore,this._userDataWriter,s.key,s,new La(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Z(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(m=>{const g=new $u(o._firestore,o._userDataWriter,m.doc.key,m.doc,new La(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const g=new $u(o._firestore,o._userDataWriter,m.doc.key,m.doc,new La(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,w=-1;return m.type!==0&&(_=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),w=h.indexOf(m.doc.key)),{type:GR(m.type),doc:g,oldIndex:_,newIndex:w}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Z(B.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=cs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=fd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach(u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function GR(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return pe(61501,{type:r})}}/**
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
 */function KR(r){r=Jt(r,rt);const e=Jt(r.firestore,xr);return DR(kc(e),r._key).then(t=>fE(e,r,t))}cs._jsonSchemaVersion="firestore/querySnapshot/1.0",cs._jsonSchema={type:dt("string",cs._jsonSchemaVersion),bundleSource:dt("string","QuerySnapshot"),bundleName:dt("string"),bundle:dt("string")};class Gd extends WR{constructor(e){super(),this.firestore=e}convertBytes(e){return new vn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new rt(this.firestore,null,t)}}function QR(r){r=Jt(r,vs);const e=Jt(r.firestore,xr),t=kc(e),s=new Gd(e);return uE(r._query),VR(t,r._query).then(o=>new cs(e,s,r,o))}function YR(r,e,t){r=Jt(r,rt);const s=Jt(r.firestore,xr),o=hE(r.converter,e);return xc(s,[iE(Dc(s),"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,En.none())])}function XR(r,e,t,...s){r=Jt(r,rt);const o=Jt(r.firestore,xr),u=Dc(o);let h;return h=typeof(e=_t(e))=="string"||e instanceof Nc?jR(u,"updateDoc",r._key,e,t,s):zR(u,"updateDoc",r._key,e),xc(o,[h.toMutation(r._key,En.exists(!0))])}function cC(r){return xc(Jt(r.firestore,xr),[new vd(r._key,En.none())])}function hC(r,e){const t=Jt(r.firestore,xr),s=xa(r),o=hE(r.converter,e);return xc(t,[iE(Dc(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,En.exists(!1))]).then(()=>s)}function qy(r,...e){var g,_,w;r=_t(r);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||zy(e[s])||(t=e[s++]);const o={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(zy(e[s])){const T=e[s];e[s]=(g=T.next)==null?void 0:g.bind(T),e[s+1]=(_=T.error)==null?void 0:_.bind(T),e[s+2]=(w=T.complete)==null?void 0:w.bind(T)}let u,h,m;if(r instanceof rt)h=Jt(r.firestore,xr),m=vc(r._key.path),u={next:T=>{e[s]&&e[s](fE(h,r,T))},error:e[s+1],complete:e[s+2]};else{const T=Jt(r,vs);h=Jt(T.firestore,xr),m=T._query;const A=new Gd(h);u={next:U=>{e[s]&&e[s](new cs(h,A,T,U))},error:e[s+1],complete:e[s+2]},uE(r._query)}return function(A,U,q,H){const j=new Ud(H),ae=new Md(U,j,q);return A.asyncQueue.enqueueAndForget(async()=>Od(await uc(A),ae)),()=>{j.Nu(),A.asyncQueue.enqueueAndForget(async()=>xd(await uc(A),ae))}}(kc(h),m,o,u)}function xc(r,e){return function(s,o){const u=new kr;return s.asyncQueue.enqueueAndForget(async()=>vR(await NR(s),o,u)),u.promise}(kc(r),e)}function fE(r,e,t){const s=t.docs.get(e._key),o=new Gd(r);return new us(r,o,e._key,s,new La(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){Po=o})(Ro),_o(new fs("firestore",(s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new xr(new zS(s.getProvider("auth-internal")),new $S(h,s.getProvider("app-check-internal")),function(_,w){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new Z(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ga(_.options.projectId,w)}(h,o),h);return u={useFetchStreams:t,...u},m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),vi(qg,Hg,e),vi(qg,Hg,"esm2020")})();const JR={apiKey:"AIzaSyBLeBmdJ85IhfeJ7sGBHOlSjUmYJ6V_YIY",authDomain:"thpt-chi-linh.firebaseapp.com",projectId:"thpt-chi-linh",storageBucket:"thpt-chi-linh.firebasestorage.app",messagingSenderId:"59436766218",appId:"1:59436766218:web:8621e33cc12f6129e6fbf3",measurementId:"G-442TZLSK9J"},dE=t_(JR),Zn=xS(dE),Ca=LR(dE),fC="",dC="https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent",Pa={USERS:"users",LESSONS:"lessons"};class ZR{constructor(){ng(this,"collection",xR(Ca,Pa.USERS))}async createUser(e,t){const s=xa(Ca,Pa.USERS,e);await YR(s,{uid:e,...t,joinedAt:He.now()})}async getUser(e){const t=xa(Ca,Pa.USERS,e),s=await KR(t);return s.exists()?s.data():null}async updateUser(e,t){const s=xa(Ca,Pa.USERS,e);await XR(s,t)}subscribeToUser(e,t,s){const o=xa(Ca,Pa.USERS,e);return qy(o,h=>{h.exists()?t(h.data()):t(null)},h=>{console.error("Error subscribing to user:",h),s==null||s(h)})}async findUserByEmail(e){const t=jy(this.collection,Tf("email","==",e)),s=await QR(t);if(!s.empty){const o=s.docs[0];return{uid:o.id,...o.data()}}return null}async whitelistStudent(e){const t=await this.findUserByEmail(e);if(!t)throw new Error("Không tìm thấy người dùng. Họ phải đăng nhập ít nhất 1 lần.");if(t.isWhitelisted)throw new Error("Tài khoản đã được kích hoạt trước đó.");return await this.updateUser(t.uid,{isWhitelisted:!0,role:"student"}),!0}async removeFromWhitelist(e){await this.updateUser(e,{isWhitelisted:!1})}subscribeToWhitelistedStudents(e,t){const s=jy(this.collection,Tf("isWhitelisted","==",!0),Tf("role","==","student"));return qy(s,u=>{const h=u.docs.map(m=>({uid:m.id,...m.data()}));e(h)},u=>{console.error("Error fetching whitelisted students:",u),t==null||t(u)})}}const Vu=new ZR,pE=gt.createContext(void 0),eC=()=>{let r=sessionStorage.getItem("sessionId");return r||(r=crypto.randomUUID(),sessionStorage.setItem("sessionId",r)),r},tC=({children:r})=>{const[e,t]=gt.useState(null),[s,o]=gt.useState(!0),[u]=gt.useState(eC),h=gt.useCallback(async A=>{var U,q;try{const H=await Vu.getUser(A.uid),j=A.email===void 0;if(H){const ae={};let fe=!1;return H.sessionId!==u&&(ae.sessionId=u,fe=!0),j&&(H.role!=="admin"||!H.isWhitelisted)&&(ae.role="admin",ae.isWhitelisted=!0,fe=!0),fe?(await Vu.updateUser(A.uid,ae),{...H,...ae}):H}else{const ae={email:A.email||"",displayName:A.displayName||((U=A.email)==null?void 0:U.split("@")[0])||"User",photoURL:A.photoURL||`https://ui-avatars.com/api/?name=${(q=A.email)==null?void 0:q[0]}&background=667eea&color=fff&size=200`,role:j?"admin":"student",isWhitelisted:j,sessionId:u,joinedAt:null};return await Vu.createUser(A.uid,ae),{...ae,uid:A.uid}}}catch(H){return console.error("Error getting or creating user:",H),null}},[u]);gt.useEffect(()=>{let A=null;const U=I0(Zn,async q=>{A&&(A(),A=null),q?(o(!0),await h(q)?A=Vu.subscribeToUser(q.uid,j=>{if(j){if(j.sessionId!==u){alert("Tài khoản của bạn đã được đăng nhập từ một thiết bị khác. Phiên này sẽ được đăng xuất."),sessionStorage.removeItem("sessionId"),lo(Zn);return}if(j.isActive===!1){alert("Tài khoản của bạn đã bị vô hiệu hóa."),sessionStorage.removeItem("sessionId"),lo(Zn);return}t(j)}else console.warn(`User document for ${q.uid} not found or deleted.`),lo(Zn);o(!1)},j=>{console.error("Error in user subscription:",j),lo(Zn),o(!1)}):(lo(Zn),o(!1))):(t(null),o(!1))});return()=>{U(),A&&A()}},[h,u]);const m=gt.useCallback(async()=>{const A=new Ar;try{await $0(Zn,A)}catch(U){console.error("Google sign in error:",U);let q=`Đăng nhập Google thất bại: ${U.message}`;throw U.code==="auth/popup-closed-by-user"?q="Đăng nhập bị hủy bởi người dùng.":U.code==="auth/operation-not-allowed"?q="Lỗi cấu hình Firebase: Phương thức Đăng nhập Google chưa được kích hoạt.":U.code==="auth/unauthorized-domain"&&(q="Lỗi cấu hình Firebase: Tên miền ứng dụng chưa được thêm vào Authorized domains."),new Error(q)}},[]),g=gt.useCallback(async(A,U)=>{try{await E0(Zn,A,U)}catch(q){console.error("Email sign in error:",q);let H="Đăng nhập thất bại.";throw q.code==="auth/user-not-found"||q.code==="auth/wrong-password"||q.code==="auth/invalid-credential"?H="Email hoặc mật khẩu không chính xác.":q.code==="auth/operation-not-allowed"&&(H="Lỗi cấu hình Firebase: Phương thức Đăng nhập Email/Password chưa được kích hoạt."),new Error(H)}},[]),_=gt.useCallback(async(A,U)=>{try{await v0(Zn,A,U)}catch(q){console.error("Email sign up error:",q);let H="Đăng ký thất bại.";throw q.code==="auth/weak-password"?H="Mật khẩu quá yếu (phải có ít nhất 6 ký tự).":q.code==="auth/email-already-in-use"?H="Email đã được sử dụng.":q.code==="auth/operation-not-allowed"&&(H="Lỗi cấu hình Firebase: Phương thức Đăng nhập Email/Password chưa được kích hoạt."),new Error(H)}},[]),w=gt.useCallback(async()=>{sessionStorage.removeItem("sessionId"),await lo(Zn)},[]),T={user:e,loading:s,signInWithGoogle:m,signInWithEmail:g,signUpWithEmail:_,signOut:w};return $e.jsx(pE.Provider,{value:T,children:r})},nC=()=>{const r=gt.useContext(pE);if(r===void 0)throw new Error("useAuth must be used within an AuthProvider");return r},Ou=({message:r="Đang tải...",fullScreen:e=!1})=>{const t=e?"flex justify-center items-center min-h-screen":"flex justify-center items-center min-h-[80vh]";return $e.jsx("div",{className:t,children:$e.jsxs("div",{className:"text-center",children:[$e.jsx("div",{className:"loader mx-auto mb-6"}),$e.jsx("h2",{className:"text-2xl font-bold gradient-text mb-2",children:r}),$e.jsx("p",{className:"text-slate-500",children:"Vui lòng chờ giây lát"})]})})},pC=({size:r="md"})=>{const e=r==="sm"?"loader-sm":r==="lg"?"w-16 h-16":"";return $e.jsx("div",{className:`loader ${e}`})},rC=gt.lazy(()=>Xf(()=>import("./LoginPage-DXuCRLab.js"),__vite__mapDeps([0,1,2])).then(r=>({default:r.LoginPage}))),iC=gt.lazy(()=>Xf(()=>import("./AdminDashboard-DsFI9dBS.js"),__vite__mapDeps([3,4,2,1])).then(r=>({default:r.AdminDashboard}))),sC=gt.lazy(()=>Xf(()=>import("./StudentDashboard-CQTWIMS8.js"),__vite__mapDeps([5,4,2,6])).then(r=>({default:r.StudentDashboard}))),oC=()=>{const{user:r,loading:e}=nC();return e?$e.jsx(Ou,{message:"Đang tải ứng dụng...",fullScreen:!0}):r?r.role==="admin"?$e.jsx(gt.Suspense,{fallback:$e.jsx(Ou,{message:"Đang tải bảng điều khiển...",fullScreen:!0}),children:$e.jsx(iC,{})}):$e.jsx(gt.Suspense,{fallback:$e.jsx(Ou,{message:"Đang tải trang học tập...",fullScreen:!0}),children:$e.jsx(sC,{})}):$e.jsx(gt.Suspense,{fallback:$e.jsx(Ou,{message:"Đang tải trang đăng nhập...",fullScreen:!0}),children:$e.jsx(rC,{})})};function aC(){return $e.jsx(tC,{children:$e.jsx("div",{className:"bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen",children:$e.jsx(oC,{})})})}Ow.createRoot(document.getElementById("root")).render($e.jsx(gt.StrictMode,{children:$e.jsx(Lw,{children:$e.jsx(aC,{})})}));export{Pa as C,fC as G,pC as L,He as T,Vu as a,hC as b,xR as c,xa as d,XR as e,cC as f,Ca as g,dC as h,$e as j,qy as o,jy as q,gt as r,nC as u};
