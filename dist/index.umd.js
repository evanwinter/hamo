!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("react"),require("@studio-freight/tempus"),require("nanoid"),require("throttle-debounce")):"function"==typeof define&&define.amd?define(["exports","react","@studio-freight/tempus","nanoid","throttle-debounce"],n):n((e||self).hamo={},e.react,e.tempus,e.nanoid,e.throttleDebounce)}(this,function(e,n,t,r,u){var o="undefined"!=typeof window?n.useLayoutEffect:n.useEffect,c="undefined"!=typeof window?function(){var e=n.useState(document.readyState),t=e[0],r=e[1];return o(function(){function e(){r(document.readyState)}return r(document.readyState),document.addEventListener("readystatechange",e,!1),function(){return document.removeEventListener("readystatechange",e,!1)}},[]),t}:function(){},i=[],f=function(e){var n=e.type;"string"==typeof e&&(n=e);var t=[];t.push("string"==typeof e?{type:n}:e),i.forEach(function(e){var r=e[0],u=e[1];"string"==typeof r&&r!==n||("function"!=typeof r||r.apply(void 0,t))&&u.apply(void 0,t)})},s="undefined"!=typeof window,a=s?function(){var e=n.useCallback(function(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0},[]),t=n.useState(e()),r=t[0],u=t[1],o=n.useCallback(function(){u(e())},[e]);return useEffect(function(){return o(),window.addEventListener("resize",o,{passive:!0}),function(){window.removeEventListener("resize",o,{passive:!0})}},[o]),r}:function(){},d=s?function(e){var t=n.useMemo(function(){return window.matchMedia(e)},[e]),r=n.useState(t.matches),u=r[0],o=r[1],c=n.useCallback(function(e){o(e.matches)},[]);return useEffect(function(){return c(t),t.addEventListener("change",c,{passive:!0}),function(){t.removeEventListener("change",c,{passive:!0})}},[t,c]),u}:function(){};function v(){return v=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},v.apply(this,arguments)}function l(e,n){void 0===n&&(n=0);var t=n+e.offsetTop;return e.offsetParent?l(e.offsetParent,t):t}function p(e,n){void 0===n&&(n=0);var t=n+e.offsetLeft;return e.offsetParent?p(e.offsetParent,t):t}e.dispatch=f,e.useDebug=function(){return n.useMemo(function(){return"undefined"!=typeof window&&(window.location.href.includes("#debug")||"development"===process.env.NODE_ENV)},[])},e.useDocumentReadyState=c,e.useEventBus=function(e,t,r){return void 0===r&&(r=[]),n.useEffect(function(){return function(e,n){if(null!=e&&null!=n)return i=[].concat(i,[[e,n]]),function(){i=i.filter(function(e){return e[1]!==n})}}(e,t)},[].concat(r,[t,e])),f},e.useFrame=function(e,r){void 0===r&&(r=0),n.useEffect(function(){if(e){var n=t.raf.add(e,r);return function(){t.raf.remove(n)}}},[e,r])},e.useId=function(){return n.useMemo(function(){return r.nanoid()},[])},e.useInterval=function(e,t){var r=n.useRef();n.useEffect(function(){r.current=e}),n.useEffect(function(){if(null!==t){var e=setInterval(function(){r.current()},t);return function(){return clearInterval(e)}}},[t])},e.useIsTouchDevice=a,e.useIsVisible=function(e){var t=void 0===e?{}:e,r=t.root,u=void 0===r?null:r,o=t.rootMargin,c=void 0===o?"0px":o,i=t.threshold,f=void 0===i?1:i,s=t.once,a=void 0!==s&&s,d=n.useRef(),v=n.useRef(),l=n.useState(!1),p=l[0],h=l[1],m=n.useCallback(function(e){h(e[0].isIntersecting)},[]);return n.useEffect(function(){return d.current=new IntersectionObserver(m,{root:u,rootMargin:c,threshold:f}),v.current&&d.current.observe(v.current),function(){d.current.disconnect()}},[m]),n.useEffect(function(){a&&p&&d.current.disconnect()},[p]),{setRef:function(e){v.current||(v.current=e)},inView:p}},e.useLayoutEffect=o,e.useMediaQuery=d,e.useOutsideClickEvent=function(e,t){var r=n.useCallback(function(n){e.current&&!e.current.contains(n.target)&&t()},[e,t]);n.useEffect(function(){return document.addEventListener("mousedown",r),function(){document.removeEventListener("mousedown",r)}},[r])},e.useRect=function(e){var t=void 0===e?{}:e,r=t.lazy,o=void 0!==r&&r,c=t.debounce,i=void 0===c?1e3:c,f=n.useRef(),s=n.useRef(),a=n.useState({}),d=a[0],h=a[1],m=n.useRef(d),y=n.useCallback(function(){if(f.current){var e=l(f.current),n=p(f.current);m.current=v({},m.current,{top:e,left:n}),o||h(m.current)}},[o]);n.useEffect(function(){var e=u.throttle(i,y),n=new ResizeObserver(e);return n.observe(document.body),function(){n.disconnect(),e.cancel({upcomingOnly:!0})}},[i,y]);var b=n.useCallback(function(e){var n=e[0].contentRect;m.current=v({},m.current,{width:n.width,height:n.height}),o||h(m.current)},[o]),E=n.useCallback(function(){return m.current},[]);return n.useEffect(function(){return function(){var e;"development"!==process.env.NODE_ENV&&(null==(e=s.current)||e.disconnect())}},[]),[n.useCallback(function(e){var n;e&&e!==f.current&&(null==(n=s.current)||n.disconnect(),s.current=new ResizeObserver(b),s.current.observe(e),f.current=e)},[y]),o?E:d]},e.useSlots=function(e,t){void 0===e&&(e=[]),void 0===t&&(t=[]);var r=n.useMemo(function(){return t&&[t].flat()},[t]),u=n.useMemo(function(){return e&&[e].flat()},[e]),o=n.useMemo(function(){return r&&u&&u.map(function(e){var n;return null==(n=r.find(function(n){return n.type===e}))?void 0:n.props.children})},[r,u]);return e[0]?o:o[0]}});
//# sourceMappingURL=index.umd.js.map
