(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[11],{172:function(e,r,t){"use strict";t.r(r);var n=t(115),i=t(6),a=t(92),c=t(75),l=t(5),o=t(1);function s(){return(s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var u=Object(a.a)((function(e,r){var t=e.direction,n=e.align,i=e.justify,a=e.wrap,l=e.basis,u=e.grow,f=e.shrink,g=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["direction","align","justify","wrap","basis","grow","shrink"]),b={display:"flex",flexDirection:t,alignItems:n,justifyContent:i,flexWrap:a,flexBasis:l,flexGrow:u,flexShrink:f};return o.createElement(c.a.div,s({ref:r,__css:b},g))}));l.a&&(u.displayName="Flex");var f=t(177),g=t(25),b=t(104).b?o.useLayoutEffect:o.useEffect;function d(){return(d=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function p(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}var j=o.forwardRef((function(e,r){var t=e.htmlWidth,n=e.htmlHeight,i=e.alt,a=p(e,["htmlWidth","htmlHeight","alt"]);return o.createElement("img",d({width:t,height:n,ref:r,alt:i},a))})),m=Object(a.a)((function(e,r){var t=e.fallbackSrc,n=e.fallback,a=e.src,l=e.srcSet,s=e.align,u=e.fit,f=e.loading,m=e.ignoreFallback,h=e.crossOrigin,O=p(e,["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"]),v=null!=f||m||void 0===t&&void 0===n,x=function(e){var r=e.loading,t=e.src,n=e.srcSet,a=e.onLoad,c=e.onError,l=e.crossOrigin,s=e.sizes,u=e.ignoreFallback,f=Object(o.useState)("pending"),g=Object(i.a)(f,2),d=g[0],p=g[1];Object(o.useEffect)((function(){p(t?"loading":"pending")}),[t]);var j=Object(o.useRef)(),m=Object(o.useCallback)((function(){if(t){h();var e=new Image;e.src=t,l&&(e.crossOrigin=l),n&&(e.srcset=n),s&&(e.sizes=s),r&&(e.loading=r),e.onload=function(e){h(),p("loaded"),null==a||a(e)},e.onerror=function(e){h(),p("failed"),null==c||c(e)},j.current=e}}),[t,l,n,s,a,c,r]),h=function(){j.current&&(j.current.onload=null,j.current.onerror=null,j.current=null)};return b((function(){if(!u)return"loading"===d&&m(),function(){h()}}),[d,m,u]),u?"loaded":d}(d({},e,{ignoreFallback:v})),k=d({ref:r,objectFit:u,objectPosition:s},v?O:Object(g.f)(O,["onError","onLoad"]));return"loaded"!==x?n||o.createElement(c.a.img,d({as:j,className:"chakra-image__placeholder",src:t},k)):o.createElement(c.a.img,d({as:j,src:a,srcSet:l,crossOrigin:h,loading:f,className:"chakra-image"},k))}));l.a&&(m.displayName="Image");var h=t(180),O=t(146),v=t(11);r.default=function(){var e={cursor:"pointer",pos:"absolute",top:"50%",w:"auto",mt:"-22px",p:"16px",color:"white",fontWeight:"bold",fontSize:{base:"30px",md:"40px",lg:"50px"},transition:"0.6s ease",borderRadius:"0 3px 3px 0",userSelect:"none",_hover:{opacity:.8,bg:"black"}},r=[{img:"/img/carousel1.jpg"},{img:"/img/carousel2.jpg"},{img:"/img/carousel3.jpg"},{img:"/img/carousel4.jpg"},{img:"/img/carousel5.jpg"},{img:"/img/carousel6.jpg"},{img:"/img/carousel7.jpg"},{img:"/img/carousel8.jpg"},{img:"/img/carousel9.jpg"}],t=Object(o.useState)(0),a=Object(i.a)(t,2),c=a[0],l=a[1],s=r.length,g={transition:"all .5s",ml:"-".concat(100*c,"%")};return r.forEach((function(e){return O.a.read("/mutemini-website-v2"+e.img)})),Object(v.jsx)(u,{w:"full",p:5,alignItems:"center",justifyContent:"center",children:Object(v.jsxs)(u,{w:"full",overflow:"hidden",pos:"relative",border:"10px solid",borderColor:"palette.500",borderRadius:"10px",maxW:"1300px",children:[Object(v.jsx)(u,Object(n.a)(Object(n.a)({h:"calc(100% / (4/3))",w:"full"},g),{},{children:r.map((function(e,r){return Object(v.jsx)(f.a,{boxSize:"full",shadow:"md",flex:"none",children:Object(v.jsx)(m,{src:"/mutemini-website-v2"+e.img,boxSize:"full",backgroundSize:"cover"})},"slide-".concat(r))}))})),Object(v.jsx)(h.a,Object(n.a)(Object(n.a)({},e),{},{variant:"light",left:"0",onClick:function(){l((function(e){return 0===e?s-1:e-1}))},children:"\u276e"})),Object(v.jsx)(h.a,Object(n.a)(Object(n.a)({},e),{},{variant:"light",right:"0",onClick:function(){l((function(e){return e===s-1?0:e+1}))},children:"\u276f"}))]})})}}}]);
//# sourceMappingURL=11.c2ad8d22.chunk.js.map