(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{122:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(10),i=n.n(o),c=n(176),l=n(177),s=n(24),d=n(161),p=n(163),j=n(164),u=n(156),b=n(159),m=n(83),h=n.n(m),g=n(160),x=n(165),O=n(3),f=Object(u.a)((function(t){return{root:{position:"fixed",bottom:t.spacing(2),right:t.spacing(2)}}}));function y(t){var e=t.children,n=t.window,a=f(),r=Object(b.a)({target:n?n():void 0,disableHysteresis:!0,threshold:100});return Object(O.jsx)(g.a,{in:r,children:Object(O.jsx)("div",{onClick:function(t){var e=(t.target.ownerDocument||document).querySelector("#back-to-top-anchor");e&&e.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",className:a.root,children:e})})}function w(t){var e=t.children,n=t.window,a=Object(b.a)({target:n?n():void 0});return Object(O.jsx)(g.a,{appear:!1,direction:"down",in:!a,children:e})}function v(t){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(w,Object(s.a)(Object(s.a)({},t),{},{children:Object(O.jsx)(d.a,{children:Object(O.jsx)(p.a,{children:Object(O.jsx)(j.a,{variant:"h6",children:"AIOV-Downloader"})})})})),Object(O.jsx)(p.a,{id:"back-to-top-anchor"}),Object(O.jsx)(y,Object(s.a)(Object(s.a)({},t),{},{children:Object(O.jsx)(x.a,{color:"primary",size:"small","aria-label":"scroll back to top",children:Object(O.jsx)(h.a,{})})}))]})}var D=n(25),L=n.n(D),I=n(39),k=n(56),C=n(166),F=n(167),T=n(182),N=n(174),q=n(171),S=n(179),W=n(178),A=n(181),V=n(168),B=n(169),Q=n(170),z=n(55),E=n.n(z),J=n(54),M=n.n(J),R=n(42),Y={toggleLoader:{display:"none"},url:"",toDownload:{itag:"",contentLength:""},details:{},formats:[]},H=function(t,e){if(e.type&&"toDownload"===e.type){var n=parseInt(e.payload.itag),a=t.formats.filter((function(t){return t.itag===n})).map((function(t){return t.contentLength}))[0];t=Object(s.a)(Object(s.a)({},t),{},Object(R.a)({},e.type,{itag:n,contentLength:parseInt(a)}))}else e.type&&(t=Object(s.a)(Object(s.a)({},t),{},Object(R.a)({},e.type,e.payload)));return t},U=function(t){var e=parseInt(t%60),n=t/60,a=parseInt(n/60);return(a=a<10?"0"+a:a)+":"+(n=(n=parseInt(n%60))<10?"0"+n:n)+":"+(e=e<10?"0"+e:e)},G=function(t){return(t/1024/1024).toFixed(1)};Object(u.a)((function(t){return{paper:{marginTop:t.spacing(4),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:t.spacing(1)},btn:{marginTop:t.spacing(2),padding:t.spacing(1.9)},videoDetailsContainer:{marginTop:t.spacing(6),marginBottom:t.spacing(4)},formControl:{margin:t.spacing(1)},downloadDropdownForm:{display:"flex",flexDirection:"column",justifyContent:"center"}}}));var K=n(175),P=n(58),X=(n(121),Object(u.a)((function(t){return{paper:{marginTop:t.spacing(4),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:t.spacing(1)},btn:{marginTop:t.spacing(2),padding:t.spacing(1.9)},videoDetailsContainer:{marginTop:t.spacing(6),marginBottom:t.spacing(4)},formControl:{margin:t.spacing(1)},downloadDropdownForm:{display:"flex",flexDirection:"column",justifyContent:"center"}}})));function Z(){var t=Object(a.useReducer)(H,Y),e=Object(k.a)(t,2),n=e[0],r=e[1],o=X(),i=function(){var t=Object(I.a)(L.a.mark((function t(e){var a,o,i,c,l,s;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.preventDefault(),r({type:"toggleLoader",payload:{display:"block"}}),t.next=5,M.a.get("/api/youtube/video-requiredInfo?url=".concat(n.url.trim()));case 5:a=t.sent,r({type:"toggleLoader",payload:{display:"none"}}),o=a.data,i=o.title,c=o.thumbnail,l=o.lengthSeconds,r({type:"details",payload:{title:i,thumbnail:c,duration:U(l)}}),s=o.formats.filter((function(t){return"mp4"===t.type&&t.hasVideo&&t.hasAudio})),r({type:"formats",payload:s}),r({type:"toDownload",payload:{itag:s[0].itag}}),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(0),r({type:"toggleLoader",payload:{display:"none"}}),404===t.t0.response.status?P.b.error(t.t0.response.data):P.b.error("Something Went Wrong, Try Later.");case 19:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(e){return t.apply(this,arguments)}}(),c=function(){return n.formats.length?Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(C.a,{component:"main",maxWidth:"md",children:Object(O.jsx)("div",{className:o.videoDetailsContainer,children:Object(O.jsxs)(F.a,{container:!0,spacing:1,children:[Object(O.jsx)(F.a,{item:!0,xs:12,sm:6,children:Object(O.jsx)(V.a,{children:Object(O.jsxs)(B.a,{style:{width:"100%"},children:[Object(O.jsx)("img",{src:n.details.thumbnail,alt:n.details.title}),Object(O.jsx)(Q.a,{title:n.details.title,subtitle:Object(O.jsxs)("span",{children:["Duration: ",n.details.duration]})})]})})}),Object(O.jsxs)(F.a,{item:!0,xs:12,sm:6,className:o.downloadDropdownForm,children:[Object(O.jsxs)(q.a,{variant:"outlined",className:o.formControl,children:[Object(O.jsx)(S.a,{htmlFor:"quality-dropdown",children:"Quality"}),Object(O.jsx)(W.a,{labelId:"quality-dropdown",value:n.toDownload.itag,label:"Quality",onChange:function(t){return r({type:"toDownload",payload:{itag:t.target.value}})},children:n.formats.map((function(t,e){return Object(O.jsxs)(A.a,{value:t.itag,children:[t.type," - ",t.qualityLabel," ",t.contentLength?" - ".concat(G(t.contentLength)," Mb"):""]},e)}))})]}),Object(O.jsxs)(x.a,{variant:"extended",size:"small",color:"secondary","aria-label":"download",onClick:l,className:o.btn,children:[Object(O.jsx)(E.a,{className:o.extendedIcon}),"Download"]})]})]})})})}):""},l=function(){var t=Object(I.a)(L.a.mark((function t(e){return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),window.location.href="".concat(window.location.href,"api/youtube/download?url=").concat(n.url,"&itag=").concat(n.toDownload.itag,"&clen=").concat(n.toDownload.contentLength,"&title=").concat(n.details.title);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(C.a,{component:"main",maxWidth:"md",children:Object(O.jsxs)("div",{className:o.paper,children:[Object(O.jsx)(j.a,{component:"h1",variant:"h5",children:"YouTube Video Downloader"}),Object(O.jsx)("form",{className:o.form,noValidate:!0,onSubmit:i,children:Object(O.jsxs)(F.a,{container:!0,spacing:1,children:[Object(O.jsxs)(F.a,{item:!0,xs:12,sm:10,children:[Object(O.jsx)(T.a,{type:"text",variant:"outlined",margin:"normal",fullWidth:!0,autoFocus:!0,required:!0,label:"Enter URL",placeholder:"e.g. https://www.youtube.com/watch?v=wAD9uO9YAQw",value:n.url,onChange:function(t){return r({type:"url",payload:t.target.value})}}),Object(O.jsx)(K.a,{style:n.toggleLoader})]}),Object(O.jsx)(F.a,{item:!0,xs:12,sm:2,children:Object(O.jsx)(N.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:o.btn,children:"Search"})})]})})]})}),Object(O.jsx)(c,{}),Object(O.jsx)(P.a,{position:"top-center"})]})}var $=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(v,{}),Object(O.jsx)(Z,{})]})},_=n(57),tt=n(84),et=Object(tt.a)({palette:{primary:{main:"#556cd6"},success:{main:"#4caf50"},error:{main:_.a.A400},youtube:{main:"#FF0000"}}});i.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsxs)(c.a,{theme:et,children:[Object(O.jsx)(l.a,{}),Object(O.jsx)($,{})]})}),document.getElementById("root"))}},[[122,1,2]]]);
//# sourceMappingURL=main.2d055717.chunk.js.map