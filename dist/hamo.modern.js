import{useCallback as e,useEffect as t,useMemo as n,useLayoutEffect as r,useState as o,useRef as s}from"react";import{raf as c}from"@studio-freight/tempus";import{nanoid as u}from"nanoid";import{useLayoutEffect as i}from"@studio-freight/hamo";import{throttle as a}from"throttle-debounce";function d(n,r){const o=e(e=>{n.current&&!n.current.contains(e.target)&&r()},[n,r]);t(()=>(document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}),[o])}var f=()=>n(()=>"undefined"!=typeof window&&(window.location.href.includes("#debug")||"development"===process.env.NODE_ENV),[]);const v="undefined"!=typeof window?r:t;var l=v,m="undefined"!=typeof window?function(){const[e,t]=o(document.readyState);return v(()=>{function e(){t(document.readyState)}return t(document.readyState),document.addEventListener("readystatechange",e,!1),()=>document.removeEventListener("readystatechange",e,!1)},[]),e}:()=>{};let h=[];const p=e=>{let{type:t}=e;"string"==typeof e&&(t=e);const n=[];n.push("string"==typeof e?{type:t}:e),h.forEach(([e,r])=>{"string"==typeof e&&e!==t||("function"!=typeof e||e(...n))&&r(...n)})};var w=(e,n,r=[])=>(t(()=>((e,t)=>{if(null!=e&&null!=t)return h=[...h,[e,t]],()=>{h=h.filter(e=>e[1]!==t)}})(e,n),[...r,n,e]),p);function y(e,n=0){t(()=>{if(e){const t=c.add(e,n);return()=>{c.remove(t)}}},[e,n])}function g(){return n(()=>u(),[])}var b=(e,n)=>{const r=s();t(()=>{r.current=e}),t(()=>{if(null!==n){const e=setInterval(function(){r.current()},n);return()=>clearInterval(e)}},[n])},E=()=>{const[t,n]=o(void 0),r=e(()=>{n("ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)},[]);return v(()=>(r(),window.addEventListener("resize",r,!1),()=>{window.removeEventListener("resize",r,!1)}),[]),t},L=({root:n=null,rootMargin:r="0px",threshold:c=1}={})=>{const u=s(),[i,a]=o(!1),d=e(e=>{const[t]=e;a(t.isIntersecting)},[]);return t(()=>{const e=new IntersectionObserver(d,{root:n,rootMargin:r,threshold:c});return u.current&&e.observe(u.current),()=>{e.disconnect()}},[d]),{setRef:e=>{u.current||(u.current=e)},inView:i}},O=t=>{const[n,r]=o(void 0),s=e(e=>{r(e.matches)},[]);return v(()=>{const e=window.matchMedia(t);return s(e),e.addEventListener("change",s),()=>{e.removeEventListener("change",s)}}),n};function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},I.apply(this,arguments)}function P(e,t=0){const n=t+e.offsetTop;return e.offsetParent?P(e.offsetParent,n):n}function M(e,t=0){const n=t+e.offsetLeft;return e.offsetParent?M(e.offsetParent,n):n}function R({debounce:e=1e3}={}){const t=s(),[n,r]=o({top:void 0,left:void 0,width:void 0,height:void 0}),c=()=>{t.current&&r(e=>I({},e,{top:P(t.current),left:M(t.current)}))};i(()=>{const t=a(e,c),n=new ResizeObserver(t);return n.observe(document.body),()=>{n.disconnect(),t.cancel({upcomingOnly:!0})}},[e]);const u=([e])=>{const{width:t,height:n}=e.contentRect;r(e=>I({},e,{width:t,height:n}))},d=s();return[e=>{var n;e&&e!==t.current&&(null==(n=d.current)||n.disconnect(),d.current=new ResizeObserver(u),d.current.observe(e),t.current=e)},n,(e=0,t=0)=>n]}var S=(e=[],t=[])=>{const r=n(()=>t&&[t].flat(),[t]),o=n(()=>e&&[e].flat(),[e]),s=n(()=>r&&o&&o.map(e=>{var t;return null==(t=r.find(t=>t.type===e))?void 0:t.props.children}),[r,o]);return e[0]?s:s[0]};export{p as dispatch,f as useDebug,m as useDocumentReadyState,w as useEventBus,y as useFrame,g as useId,b as useInterval,E as useIsTouchDevice,L as useIsVisible,l as useLayoutEffect,O as useMediaQuery,d as useOutsideClickEvent,R as useRect,S as useSlots};
//# sourceMappingURL=hamo.modern.js.map