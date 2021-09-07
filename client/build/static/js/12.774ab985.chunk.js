(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[12,24],{132:function(e,r,t){"use strict";var o=t(1),n=t(4),p=t(18),a=t(0),i=(t(3),t(6)),s=t(8),c=t(11),l=a.forwardRef((function(e,r){var t=e.classes,p=e.className,s=e.component,l=void 0===s?"div":s,d=e.disableGutters,u=void 0!==d&&d,m=e.fixed,f=void 0!==m&&m,b=e.maxWidth,h=void 0===b?"lg":b,g=Object(n.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return a.createElement(l,Object(o.a)({className:Object(i.a)(t.root,p,f&&t.fixed,u&&t.disableGutters,!1!==h&&t["maxWidth".concat(Object(c.a)(String(h)))]),ref:r},g))}));r.a=Object(s.a)((function(e){return{root:Object(p.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(r,t){var o=e.breakpoints.values[t];return 0!==o&&(r[e.breakpoints.up(t)]={maxWidth:o}),r}),{}),maxWidthXs:Object(p.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(p.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(p.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(p.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(p.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(l)},134:function(e,r,t){"use strict";var o=t(19),n=t(1),p=(t(3),t(29));function a(e,r){var t={};return Object.keys(e).forEach((function(o){-1===r.indexOf(o)&&(t[o]=e[o])})),t}function i(e){var r=function(r){var t=e(r);return r.css?Object(n.a)({},Object(p.a)(t,e(Object(n.a)({theme:r.theme},r.css))),a(r.css,[e.filterProps])):r.sx?Object(n.a)({},Object(p.a)(t,e(Object(n.a)({theme:r.theme},r.sx))),a(r.sx,[e.filterProps])):t};return r.propTypes={},r.filterProps=["css","sx"].concat(Object(o.a)(e.filterProps)),r}var s=i;var c=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var o=function(e){return r.reduce((function(r,t){var o=t(e);return o?Object(p.a)(r,o):r}),{})};return o.propTypes={},o.filterProps=r.reduce((function(e,r){return e.concat(r.filterProps)}),[]),o},l=t(18),d=t(51);function u(e,r){return r&&"string"===typeof r?r.split(".").reduce((function(e,r){return e&&e[r]?e[r]:null}),e):null}var m=function(e){var r=e.prop,t=e.cssProperty,o=void 0===t?e.prop:t,n=e.themeKey,p=e.transform,a=function(e){if(null==e[r])return null;var t=e[r],a=u(e.theme,n)||{};return Object(d.a)(e,t,(function(e){var r;return"function"===typeof a?r=a(e):Array.isArray(a)?r=a[e]||e:(r=u(a,e)||e,p&&(r=p(r))),!1===o?r:Object(l.a)({},o,r)}))};return a.propTypes={},a.filterProps=[r],a};function f(e){return"number"!==typeof e?e:"".concat(e,"px solid")}var b=c(m({prop:"border",themeKey:"borders",transform:f}),m({prop:"borderTop",themeKey:"borders",transform:f}),m({prop:"borderRight",themeKey:"borders",transform:f}),m({prop:"borderBottom",themeKey:"borders",transform:f}),m({prop:"borderLeft",themeKey:"borders",transform:f}),m({prop:"borderColor",themeKey:"palette"}),m({prop:"borderRadius",themeKey:"shape"})),h=c(m({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),m({prop:"display"}),m({prop:"overflow"}),m({prop:"textOverflow"}),m({prop:"visibility"}),m({prop:"whiteSpace"})),g=c(m({prop:"flexBasis"}),m({prop:"flexDirection"}),m({prop:"flexWrap"}),m({prop:"justifyContent"}),m({prop:"alignItems"}),m({prop:"alignContent"}),m({prop:"order"}),m({prop:"flex"}),m({prop:"flexGrow"}),m({prop:"flexShrink"}),m({prop:"alignSelf"}),m({prop:"justifyItems"}),m({prop:"justifySelf"})),j=c(m({prop:"gridGap"}),m({prop:"gridColumnGap"}),m({prop:"gridRowGap"}),m({prop:"gridColumn"}),m({prop:"gridRow"}),m({prop:"gridAutoFlow"}),m({prop:"gridAutoColumns"}),m({prop:"gridAutoRows"}),m({prop:"gridTemplateColumns"}),m({prop:"gridTemplateRows"}),m({prop:"gridTemplateAreas"}),m({prop:"gridArea"})),y=c(m({prop:"position"}),m({prop:"zIndex",themeKey:"zIndex"}),m({prop:"top"}),m({prop:"right"}),m({prop:"bottom"}),m({prop:"left"})),x=c(m({prop:"color",themeKey:"palette"}),m({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),v=m({prop:"boxShadow",themeKey:"shadows"});function O(e){return e<=1?"".concat(100*e,"%"):e}var w=m({prop:"width",transform:O}),k=m({prop:"maxWidth",transform:O}),W=m({prop:"minWidth",transform:O}),P=m({prop:"height",transform:O}),K=m({prop:"maxHeight",transform:O}),S=m({prop:"minHeight",transform:O}),T=(m({prop:"size",cssProperty:"width",transform:O}),m({prop:"size",cssProperty:"height",transform:O}),c(w,k,W,P,K,S,m({prop:"boxSizing"}))),R=t(125),N=c(m({prop:"fontFamily",themeKey:"typography"}),m({prop:"fontSize",themeKey:"typography"}),m({prop:"fontStyle",themeKey:"typography"}),m({prop:"fontWeight",themeKey:"typography"}),m({prop:"letterSpacing"}),m({prop:"lineHeight"}),m({prop:"textAlign"})),A=t(4),C=t(0),z=t.n(C),D=t(6),G=t(30),L=t.n(G),E=t(91);function F(e,r){var t={};return Object.keys(e).forEach((function(o){-1===r.indexOf(o)&&(t[o]=e[o])})),t}var H=t(20),q=function(e){var r=function(e){return function(r){var t,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},p=o.name,a=Object(A.a)(o,["name"]),i=p,s="function"===typeof r?function(e){return{root:function(t){return r(Object(n.a)({theme:e},t))}}}:{root:r},c=Object(E.a)(s,Object(n.a)({Component:e,name:p||e.displayName,classNamePrefix:i},a));r.filterProps&&(t=r.filterProps,delete r.filterProps),r.propTypes&&(r.propTypes,delete r.propTypes);var l=z.a.forwardRef((function(r,o){var p=r.children,a=r.className,i=r.clone,s=r.component,l=Object(A.a)(r,["children","className","clone","component"]),d=c(r),u=Object(D.a)(d.root,a),m=l;if(t&&(m=F(m,t)),i)return z.a.cloneElement(p,Object(n.a)({className:Object(D.a)(p.props.className,u)},m));if("function"===typeof p)return p(Object(n.a)({className:u},m));var f=s||e;return z.a.createElement(f,Object(n.a)({ref:o,className:u},m),p)}));return L()(l,e),l}}(e);return function(e,t){return r(e,Object(n.a)({defaultTheme:H.a},t))}},B=s(c(b,h,g,j,y,x,v,T,R.b,N)),I=q("div")(B,{name:"MuiBox"});r.a=I},213:function(e,r,t){"use strict";t.r(r);var o=t(0),n=t(49),p=t(132),a=t(122),i=t(134),s=t(90),c=t(23),l=t.n(c),d=t(2),u=Object(o.lazy)((function(){return Promise.all([t.e(2),t.e(18)]).then(t.bind(null,137))}));r.default=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(n.a,{children:Object(d.jsx)("title",{children:"DownTape Videos Downloader"})}),Object(d.jsx)(s.a,{component:i.a,square:!0,elevation:0,p:4,pt:5,children:Object(d.jsxs)(p.a,{maxWidth:"md",children:[Object(d.jsx)(a.a,{component:"h1",variant:"h4",align:"center",gutterBottom:!0,children:Object(d.jsx)(i.a,{children:"DownTape Videos Downloader"})}),Object(d.jsx)(a.a,{align:"justify",children:"DownTape Videos video downloader provides fastest service to download videos in mp4, mp3, SQ, HD, Full HD quality from Videos! For more convenient viewing on a large screen video can be saved in high quality. To watch videos on Android or iOS phones the medium quality will be enough."})]})}),Object(d.jsx)(o.Suspense,{fallback:Object(d.jsx)(l.a,{}),children:Object(d.jsx)(u,{})})]})}}}]);
//# sourceMappingURL=12.774ab985.chunk.js.map