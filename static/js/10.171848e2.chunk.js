(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[10],{183:function(e,t,r){"use strict";r.r(t);var a=r(117),n=r(6),c=r(174),i=r(191),o=r(185),l=r(173),s=r(1),u=r(126),f=r(10);t.default=function(){for(var e={cursor:"pointer",pos:"absolute",top:"50%",w:"auto",mt:"-30px",p:"16px",color:"white",fontWeight:"bold",fontSize:{base:"20px",md:"30px",lg:"50px"},transition:"0.6s ease",borderRadius:"3px",userSelect:"none",_hover:{bg:"rgba(0, 0, 0, 0.5)"}},t=Object(s.useState)(0),r=Object(n.a)(t,2),d=r[0],b=r[1],g={transition:"all .5s",ml:"-".concat(100*d,"%")},p=1;p<=9;p++)u.a.read("/mutemini-website-v2/img/carousel/carousel"+p+".jpg");return Object(f.jsx)(c.a,{w:"full",p:{base:1,md:5},alignItems:"center",justifyContent:"center",children:Object(f.jsxs)(c.a,{w:"full",overflow:"hidden",pos:"relative",border:{base:"5px solid var(--chakra-colors-palette-500)",md:"10px solid var(--chakra-colors-palette-500)"},borderRadius:{base:"10px",md:"20px"},maxW:"1100px",children:[Object(f.jsx)(c.a,Object(a.a)(Object(a.a)({h:"calc(100% / (4/3))",w:"full"},g),{},{children:Array(9).fill(1).map((function(e,t){return Object(f.jsx)(i.a,{boxSize:"full",shadow:"md",flex:"none",children:Object(f.jsx)(o.a,{src:"/mutemini-website-v2/img/carousel/carousel"+(t+1)+".jpg",boxSize:"full",backgroundSize:"cover"})},"slide-".concat(t))}))})),Object(f.jsx)(l.a,Object(a.a)(Object(a.a)({},e),{},{variant:"light",left:"0",onClick:function(){b((function(e){return 0===e?8:e-1}))},children:"\u276e"})),Object(f.jsx)(l.a,Object(a.a)(Object(a.a)({},e),{},{variant:"light",right:"0",onClick:function(){b((function(e){return 8===e?0:e+1}))},children:"\u276f"}))]})})}},185:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var a=r(84),n=r(66),c=r(12),i=r(5),o=r(1),l=r(6),s=r(108).b?o.useLayoutEffect:o.useEffect;function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}var d=o.forwardRef((function(e,t){var r=e.htmlWidth,a=e.htmlHeight,n=e.alt,c=f(e,["htmlWidth","htmlHeight","alt"]);return o.createElement("img",u({width:r,height:a,ref:t,alt:n},c))})),b=Object(a.a)((function(e,t){var r=e.fallbackSrc,a=e.fallback,i=e.src,b=e.srcSet,g=e.align,p=e.fit,h=e.loading,j=e.ignoreFallback,m=e.crossOrigin,O=f(e,["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"]),v=null!=h||j||void 0===r&&void 0===a,x=function(e){var t=e.loading,r=e.src,a=e.srcSet,n=e.onLoad,c=e.onError,i=e.crossOrigin,u=e.sizes,f=e.ignoreFallback,d=Object(o.useState)("pending"),b=Object(l.a)(d,2),g=b[0],p=b[1];Object(o.useEffect)((function(){p(r?"loading":"pending")}),[r]);var h=Object(o.useRef)(),j=Object(o.useCallback)((function(){if(r){m();var e=new Image;e.src=r,i&&(e.crossOrigin=i),a&&(e.srcset=a),u&&(e.sizes=u),t&&(e.loading=t),e.onload=function(e){m(),p("loaded"),null==n||n(e)},e.onerror=function(e){m(),p("failed"),null==c||c(e)},h.current=e}}),[r,i,a,u,n,c,t]),m=function(){h.current&&(h.current.onload=null,h.current.onerror=null,h.current=null)};return s((function(){if(!f)return"loading"===g&&j(),function(){m()}}),[g,j,f]),f?"loaded":g}(u({},e,{ignoreFallback:v})),k=u({ref:t,objectFit:p,objectPosition:g},v?O:Object(c.f)(O,["onError","onLoad"]));return"loaded"!==x?a||o.createElement(n.a.img,u({as:d,className:"chakra-image__placeholder",src:r},k)):o.createElement(n.a.img,u({as:d,src:i,srcSet:b,crossOrigin:m,loading:h,className:"chakra-image"},k))}));i.a&&(b.displayName="Image")}}]);
//# sourceMappingURL=10.171848e2.chunk.js.map