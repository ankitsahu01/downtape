(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{140:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(10),r=n.n(i),c=n(192),l=n(193),s=n(37),d=n(11),u=n(13),j=n(177),p=n(179),b=n(180),m=n(181),h=n(172),x=n(175),O=n(98),g=n.n(O),y=n(176),w=n(182),f=n(95),v=n.n(f),D=n(96),L=n.n(D),N=n(97),k=n.n(N),C=n(105),F=n(2),T=Object(h.a)((function(e){return{root:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)},title:{flexGrow:1},navlink:{color:e.palette.light.main,textDecoration:"none"},activeNavLink:{borderBottom:"1px solid #ffffff"}}})),W=function(e){var t=e.children,n=e.window,a=T(),o=Object(x.a)({target:n?n():void 0,disableHysteresis:!0,threshold:100});return Object(F.jsx)(y.a,{in:o,children:Object(F.jsx)("div",{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",className:a.root,children:t})})},I=function(e){var t=e.children,n=e.window,a=Object(x.a)({target:n?n():void 0});return Object(F.jsx)(y.a,{appear:!1,direction:"down",in:!a,children:t})},V=function(e){var t=T();return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(I,Object(u.a)(Object(u.a)({},e),{},{children:Object(F.jsx)(j.a,{children:Object(F.jsxs)(p.a,{children:[Object(F.jsx)(b.a,{variant:"h6",component:"h1",className:t.title,children:Object(F.jsx)(s.b,{to:"/",className:t.navlink,children:"DOWNTAPE"})}),Object(F.jsx)(m.a,{color:"inherit",children:Object(F.jsx)(s.b,{to:"/youtube-video-downloader",className:t.navlink,activeClassName:t.activeNavLink,children:Object(F.jsx)(v.a,{})})}),Object(F.jsx)(m.a,{color:"inherit",children:Object(F.jsx)(s.b,{to:"/instagram-video-downloader",className:t.navlink,activeClassName:t.activeNavLink,children:Object(F.jsx)(L.a,{})})}),Object(F.jsx)(m.a,{color:"inherit",children:Object(F.jsx)(s.b,{to:"/twitter-video-downloader",className:t.navlink,activeClassName:t.activeNavLink,children:Object(F.jsx)(k.a,{})})}),Object(F.jsx)(m.a,{color:"inherit",children:Object(F.jsx)(s.b,{to:"/vimeo-video-downloader",className:t.navlink,activeClassName:t.activeNavLink,children:Object(F.jsx)(C.a,{children:Object(F.jsx)("path",{d:"M17.811,2.018c2.017,0.053,3.026,1.198,3.036,3.438c0,0.147-0.005,0.3-0.013,0.457c-0.089,1.899-1.502,4.486-4.245,7.76\r c-2.829,3.43-5.229,5.147-7.2,5.156c-1.226,0-2.244-1.05-3.061-3.151l-0.858-2.88L4.622,9.922C3.997,7.838,3.329,6.798,2.616,6.798\r c-0.156,0-0.697,0.304-1.626,0.91L0,6.537l1.536-1.276l1.511-1.263C4.4,2.914,5.429,2.328,6.135,2.241\r c0.094-0.01,0.188-0.013,0.284-0.013c1.449,0,2.354,1.041,2.709,3.124C9.326,6.54,9.49,7.506,9.623,8.248\r C9.752,8.992,9.86,9.51,9.946,9.805c0.479,1.97,0.995,2.96,1.55,2.968c0.426,0,1.082-0.642,1.968-1.926\r c0.866-1.319,1.332-2.296,1.392-2.932c0.019-0.129,0.026-0.25,0.026-0.362c0-0.861-0.474-1.29-1.418-1.29\r c-0.479,0-0.99,0.102-1.537,0.299c0.98-3.021,2.864-4.534,5.65-4.544C17.655,2.018,17.732,2.018,17.811,2.018z"})})})})]})})})),Object(F.jsx)(p.a,{id:"back-to-top-anchor"}),Object(F.jsx)(W,Object(u.a)(Object(u.a)({},e),{},{children:Object(F.jsx)(w.a,{color:"primary",size:"small","aria-label":"scroll back to top",children:Object(F.jsx)(g.a,{})})}))]})},q=n(16),S=n.n(q),E=n(29),A=n(36),B=n(38),Q=n(183),Y=n(184),P=n(198),z=n(188),M=n(195),R=n(194),G=n(197),J=n(185),_=n(186),H=n(187),U=n(191),K=n(51),X=n.n(K),Z=n(19),$=(n(62),n(39)),ee=n.n($),te=n(28),ne={toggleLoader:{display:"none"},url:"",toDownload:{itag:"",contentLength:""},details:{},formats:[]},ae=function(e,t){if(t.type&&"toDownload"===t.type){var n=parseInt(t.payload.itag),a=e.formats.filter((function(e){return e.itag===n})).map((function(e){return e.contentLength}))[0];e=Object(u.a)(Object(u.a)({},e),{},Object(te.a)({},t.type,{itag:n,contentLength:parseInt(a)}))}else t.type&&(e=Object(u.a)(Object(u.a)({},e),{},Object(te.a)({},t.type,t.payload)));return e},oe=function(e){var t=parseInt(e%60),n=e/60,a=parseInt(n/60);return(a=a<10?"0"+a:a)+":"+(n=(n=parseInt(n%60))<10?"0"+n:n)+":"+(t=t<10?"0"+t:t)},ie=function(e){return(e/1024/1024).toFixed(1)},re=Object(h.a)((function(e){return{paper:{marginTop:e.spacing(4),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(1)},btn:{marginTop:e.spacing(2),padding:e.spacing(1.9)},videoDetailsContainer:{marginTop:e.spacing(6),marginBottom:e.spacing(4)},formControl:{margin:e.spacing(1)},downloadDropdownForm:{display:"flex",flexDirection:"column",justifyContent:"center"}}})),ce=function(){var e=Object(a.useReducer)(ae,ne),t=Object(A.a)(e,2),n=t[0],o=t[1],i=re(),r=function(){var e=Object(E.a)(S.a.mark((function e(t){var a,i,r,c,l,s;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),o({type:"toggleLoader",payload:{display:"block"}}),e.next=5,ee.a.get("/api/youtube/info?url=".concat(n.url.trim()));case 5:a=e.sent,o({type:"toggleLoader",payload:{display:"none"}}),i=a.data,r=i.title,c=i.thumbnail,l=i.lengthSeconds,o({type:"details",payload:{title:r,thumbnail:c,duration:oe(l)}}),s=i.formats.filter((function(e){return e.hasVideo&&e.hasAudio})),o({type:"formats",payload:s}),o({type:"toDownload",payload:{itag:s[0].itag}}),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),o({type:"toggleLoader",payload:{display:"none"}}),404===e.t0.response.status?Z.b.error(e.t0.response.data):Z.b.error("Something Went Wrong, Try Later.");case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}(),c=function(){return n.formats.length?Object(F.jsx)(F.Fragment,{children:Object(F.jsx)(Q.a,{component:"main",maxWidth:"md",children:Object(F.jsx)("div",{className:i.videoDetailsContainer,children:Object(F.jsxs)(Y.a,{container:!0,spacing:1,children:[Object(F.jsx)(Y.a,{item:!0,xs:12,sm:6,children:Object(F.jsx)(J.a,{children:Object(F.jsxs)(_.a,{style:{width:"100%"},children:[Object(F.jsx)("img",{src:n.details.thumbnail,alt:n.details.title}),Object(F.jsx)(H.a,{title:n.details.title,subtitle:Object(F.jsx)("span",{children:n.details.duration})})]})})}),Object(F.jsxs)(Y.a,{item:!0,xs:12,sm:6,className:i.downloadDropdownForm,children:[Object(F.jsxs)(z.a,{variant:"outlined",className:i.formControl,children:[Object(F.jsx)(M.a,{htmlFor:"quality-dropdown",children:"Video Quality"}),Object(F.jsx)(R.a,{labelId:"quality-dropdown",value:n.toDownload.itag,label:"Video Quality",onChange:function(e){return o({type:"toDownload",payload:{itag:e.target.value}})},children:n.formats.map((function(e,t){return Object(F.jsxs)(G.a,{value:e.itag,children:[e.qualityLabel," ",e.contentLength?" - ".concat(ie(e.contentLength)," Mb"):""]},t)}))})]}),Object(F.jsxs)(w.a,{variant:"extended",size:"small",color:"secondary","aria-label":"download",onClick:l,className:i.btn,children:[Object(F.jsx)(X.a,{className:i.extendedIcon}),"Download"]})]})]})})})}):""},l=function(){var e=Object(E.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),window.location.href="".concat(window.location.origin,"/api/youtube/download?url=").concat(n.url,"&itag=").concat(n.toDownload.itag,"&clen=").concat(n.toDownload.contentLength,"&title=").concat(n.details.title);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)(B.a,{children:[Object(F.jsx)("title",{children:"YouTube Videos Downloader - DOWNTAPE Free YouTube Downloader Online"}),Object(F.jsx)("link",{rel:"canonical",href:"https://www.downtape.herokuapp.com/youtube-video-downloader"}),Object(F.jsx)("meta",{name:"description",content:"Download YouTube videos Online Free on DOWNTAPE. We provides you the best YouTube video downloader, In which you can download YouTube videos in mp4"}),Object(F.jsx)("meta",{name:"keywords",content:"youtube video download, youtube video download online, online youtube video download, free youtube video download, youtube video download by link, youtube video download free, save youtube video download, youtube video download pc, youtube video download link, youtube video download website, how to youtube video download, youtube video download site, youtube video download mp4, youtube video download online free, youtube video downloader, online youtube video downloader, youtube video downloader for pc, youtube video downloader free download, best youtube video downloader, free youtube video downloader, download youtube video, download youtube videos, how to download youtube video, how to download youtube video in laptop, how download youtube video, how to download youtube videos in mobile, download youtube video online, how to download youtube video online, download youtube video online free, how download youtube video online"})]}),Object(F.jsx)(Q.a,{component:"main",maxWidth:"md",children:Object(F.jsxs)("div",{className:i.paper,children:[Object(F.jsx)(b.a,{component:"h1",variant:"h5",children:"YouTube Video Downloader"}),Object(F.jsx)("form",{className:i.form,noValidate:!0,onSubmit:r,children:Object(F.jsxs)(Y.a,{container:!0,spacing:1,children:[Object(F.jsxs)(Y.a,{item:!0,xs:12,sm:10,children:[Object(F.jsx)(P.a,{type:"text",variant:"outlined",margin:"normal",fullWidth:!0,autoFocus:!0,required:!0,label:"Enter Link",placeholder:"e.g. https://www.youtube.com/watch?v=wAD9uO9YAQw",value:n.url,onChange:function(e){return o({type:"url",payload:e.target.value})}}),Object(F.jsx)(U.a,{style:n.toggleLoader})]}),Object(F.jsx)(Y.a,{item:!0,xs:12,sm:2,children:Object(F.jsx)(m.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:i.btn,children:"Get Video"})})]})})]})}),Object(F.jsx)(c,{}),Object(F.jsx)(Z.a,{position:"top-center"})]})},le=n(101),se=n.n(le),de=Object(h.a)((function(e){return{paper:{marginTop:e.spacing(4),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(1)},btn:{marginTop:e.spacing(2),padding:e.spacing(1.9)},videoDetailsContainer:{marginTop:e.spacing(6),marginBottom:e.spacing(4)},formControl:{margin:e.spacing(1)},downloadSection:{display:"flex",flexDirection:"column",justifyContent:"center"},seticons:{display:"flex",alignItems:"center",justifyContent:"space-evenly"},alignicons:{display:"flex",alignItems:"center"}}})),ue=function(){var e=Object(a.useState)(""),t=Object(A.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)({display:"none"}),r=Object(A.a)(i,2),c=r[0],l=r[1],s=de(),d=function(){var e=Object(E.a)(S.a.mark((function e(t){var a,o;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),l({display:"block"}),e.next=5,ee()("/api/insta/getLink?url=".concat(n));case 5:a=e.sent,o=a.data.downloadLink,o=encodeURIComponent(o),window.location.href="".concat(window.location.origin,"/api/insta/download?url=").concat(o),l({display:"none"}),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(0),l({display:"none"}),Z.b.error("Something Went Wrong. Try Later!"),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(B.a,{children:Object(F.jsx)("title",{children:"Instagram Videos Downloader - DOWNTAPE Free Instagram Downloader Online"})}),Object(F.jsx)(Q.a,{component:"main",maxWidth:"md",children:Object(F.jsxs)("div",{className:s.paper,children:[Object(F.jsx)(b.a,{component:"h1",variant:"h5",children:"Instagram Video Downloader"}),Object(F.jsx)("form",{className:s.form,noValidate:!0,onSubmit:d,children:Object(F.jsxs)(Y.a,{container:!0,spacing:1,children:[Object(F.jsxs)(Y.a,{item:!0,xs:12,sm:10,children:[Object(F.jsx)(P.a,{type:"text",variant:"outlined",margin:"normal",fullWidth:!0,autoFocus:!0,required:!0,label:"Enter Link",placeholder:"e.g. https://www.instagram.com/p/CB5d063pwo-/",value:n,onChange:function(e){return o(e.target.value)}}),Object(F.jsx)(U.a,{style:c})]}),Object(F.jsx)(Y.a,{item:!0,xs:12,sm:2,children:Object(F.jsxs)(m.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:s.btn,children:[Object(F.jsx)(se.a,{style:{marginRight:"4px"}}),"Download"]})})]})})]})}),Object(F.jsx)(Z.a,{position:"top-center"})]})},je={toggleLoader:{display:"none"},url:"",toDownload:{url:"",contentLength:""},details:{},formats:[]},pe=function(e,t){if(t.type&&"toDownload"===t.type){var n=t.payload.url,a=e.formats.filter((function(e){return e.url===n})).map((function(e){return e.contentLength}))[0];e=Object(u.a)(Object(u.a)({},e),{},Object(te.a)({},t.type,{url:n,contentLength:parseInt(a)}))}else t.type&&(e=Object(u.a)(Object(u.a)({},e),{},Object(te.a)({},t.type,t.payload)));return e},be=Object(h.a)((function(e){return{paper:{marginTop:e.spacing(4),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(1)},btn:{marginTop:e.spacing(2),padding:e.spacing(1.9)},videoDetailsContainer:{marginTop:e.spacing(6),marginBottom:e.spacing(4)},formControl:{margin:e.spacing(1)},downloadDropdownForm:{display:"flex",flexDirection:"column",justifyContent:"center"}}})),me=function(){var e=Object(a.useReducer)(pe,je),t=Object(A.a)(e,2),n=t[0],o=t[1],i=be(),r=function(){var e=Object(E.a)(S.a.mark((function e(t){var a,i,r,c,l,s;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),o({type:"toggleLoader",payload:{display:"block"}}),e.next=5,ee.a.get("/api/twitter/info?url=".concat(n.url.trim()));case 5:a=e.sent,o({type:"toggleLoader",payload:{display:"none"}}),i=a.data,r=i.title,c=i.thumbnail,l=i.duration_ms,s=i.formats,o({type:"details",payload:{title:r,thumbnail:c,duration:oe(l/1e3)}}),o({type:"formats",payload:s}),o({type:"toDownload",payload:{url:s[0].url}}),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),o({type:"toggleLoader",payload:{display:"none"}}),404===e.t0.response.status?Z.b.error(e.t0.response.data):Z.b.error("Something Went Wrong, Try Later.");case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),c=function(){return n.formats.length?Object(F.jsx)(F.Fragment,{children:Object(F.jsx)(Q.a,{component:"main",maxWidth:"md",children:Object(F.jsx)("div",{className:i.videoDetailsContainer,children:Object(F.jsxs)(Y.a,{container:!0,spacing:1,children:[Object(F.jsx)(Y.a,{item:!0,xs:12,sm:6,children:Object(F.jsx)(J.a,{children:Object(F.jsxs)(_.a,{style:{width:"100%"},children:[Object(F.jsx)("img",{src:n.details.thumbnail,alt:n.details.title}),Object(F.jsx)(H.a,{title:n.details.title,subtitle:Object(F.jsx)("span",{children:n.details.duration})})]})})}),Object(F.jsxs)(Y.a,{item:!0,xs:12,sm:6,className:i.downloadDropdownForm,children:[Object(F.jsxs)(z.a,{variant:"outlined",className:i.formControl,children:[Object(F.jsx)(M.a,{htmlFor:"quality-dropdown",children:"Video Quality"}),Object(F.jsx)(R.a,{labelId:"quality-dropdown",value:n.toDownload.url,label:"Video Quality",onChange:function(e){return o({type:"toDownload",payload:{url:e.target.value}})},children:n.formats.map((function(e,t){return Object(F.jsxs)(G.a,{value:e.url,children:[e.contentLength?" ".concat(ie(e.contentLength)," Mb"):""," \xa0\xa0 ",e.quality]},t)}))})]}),Object(F.jsxs)(w.a,{variant:"extended",size:"small",color:"secondary","aria-label":"download",onClick:l,className:i.btn,children:[Object(F.jsx)(X.a,{className:i.extendedIcon}),"Download"]})]})]})})})}):""},l=function(){var e=Object(E.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),window.location.href="".concat(window.location.origin,"/api/twitter/download?url=").concat(n.toDownload.url,"&clen=").concat(n.toDownload.contentLength,"&title=").concat(n.details.title);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(B.a,{children:Object(F.jsx)("title",{children:"Twitter Videos Downloader - DOWNTAPE Free Twitter Downloader Online"})}),Object(F.jsx)(Q.a,{component:"main",maxWidth:"md",children:Object(F.jsxs)("div",{className:i.paper,children:[Object(F.jsx)(b.a,{component:"h1",variant:"h5",children:"Twitter Video Downloader"}),Object(F.jsx)("form",{className:i.form,noValidate:!0,onSubmit:r,children:Object(F.jsxs)(Y.a,{container:!0,spacing:1,children:[Object(F.jsxs)(Y.a,{item:!0,xs:12,sm:10,children:[Object(F.jsx)(P.a,{type:"text",variant:"outlined",margin:"normal",fullWidth:!0,autoFocus:!0,required:!0,label:"Enter Link",placeholder:"e.g. https://twitter.com/i/status/1430466398069743617",value:n.url,onChange:function(e){return o({type:"url",payload:e.target.value})}}),Object(F.jsx)(U.a,{style:n.toggleLoader})]}),Object(F.jsx)(Y.a,{item:!0,xs:12,sm:2,children:Object(F.jsx)(m.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:i.btn,children:"Get Video"})})]})})]})}),Object(F.jsx)(c,{}),Object(F.jsx)(Z.a,{position:"top-center"})]})},he={toggleLoader:{display:"none"},url:"",toDownload:{url:"",contentLength:""},details:{},formats:[]},xe=function(e,t){if(t.type&&"toDownload"===t.type){var n=t.payload.url,a=e.formats.filter((function(e){return e.url===n})).map((function(e){return e.contentLength}))[0];e=Object(u.a)(Object(u.a)({},e),{},Object(te.a)({},t.type,{url:n,contentLength:parseInt(a)}))}else t.type&&(e=Object(u.a)(Object(u.a)({},e),{},Object(te.a)({},t.type,t.payload)));return e},Oe=Object(h.a)((function(e){return{paper:{marginTop:e.spacing(4),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(1)},btn:{marginTop:e.spacing(2),padding:e.spacing(1.9)},videoDetailsContainer:{marginTop:e.spacing(6),marginBottom:e.spacing(4)},formControl:{margin:e.spacing(1)},downloadDropdownForm:{display:"flex",flexDirection:"column",justifyContent:"center"}}})),ge=function(){var e=Object(a.useReducer)(xe,he),t=Object(A.a)(e,2),n=t[0],o=t[1],i=Oe(),r=function(){var e=Object(E.a)(S.a.mark((function e(t){var a,i,r,c,l,s;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),o({type:"toggleLoader",payload:{display:"block"}}),e.next=5,ee.a.get("/api/vimeo/info?url=".concat(n.url.trim()));case 5:a=e.sent,o({type:"toggleLoader",payload:{display:"none"}}),i=a.data,r=i.title,c=i.thumbnail,l=i.duration_sec,s=i.formats,o({type:"details",payload:{title:r,thumbnail:c,duration:oe(l)}}),o({type:"formats",payload:s}),o({type:"toDownload",payload:{url:s[0].url}}),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),o({type:"toggleLoader",payload:{display:"none"}}),404===e.t0.response.status?Z.b.error(e.t0.response.data):Z.b.error("Something Went Wrong, Try Later.");case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),c=function(){return n.formats.length?Object(F.jsx)(F.Fragment,{children:Object(F.jsx)(Q.a,{component:"main",maxWidth:"md",children:Object(F.jsx)("div",{className:i.videoDetailsContainer,children:Object(F.jsxs)(Y.a,{container:!0,spacing:1,children:[Object(F.jsx)(Y.a,{item:!0,xs:12,sm:6,children:Object(F.jsx)(J.a,{children:Object(F.jsxs)(_.a,{style:{width:"100%"},children:[Object(F.jsx)("img",{src:n.details.thumbnail,alt:n.details.title}),Object(F.jsx)(H.a,{title:n.details.title,subtitle:Object(F.jsx)("span",{children:n.details.duration})})]})})}),Object(F.jsxs)(Y.a,{item:!0,xs:12,sm:6,className:i.downloadDropdownForm,children:[Object(F.jsxs)(z.a,{variant:"outlined",className:i.formControl,children:[Object(F.jsx)(M.a,{htmlFor:"quality-dropdown",children:"Video Quality"}),Object(F.jsx)(R.a,{labelId:"quality-dropdown",value:n.toDownload.url,label:"Video Quality",onChange:function(e){return o({type:"toDownload",payload:{url:e.target.value}})},children:n.formats.map((function(e,t){return Object(F.jsxs)(G.a,{value:e.url,children:[e.contentLength?" ".concat(ie(e.contentLength)," Mb"):""," \xa0\xa0 ",e.quality]},t)}))})]}),Object(F.jsxs)(w.a,{variant:"extended",size:"small",color:"secondary","aria-label":"download",onClick:l,className:i.btn,children:[Object(F.jsx)(X.a,{className:i.extendedIcon}),"Download"]})]})]})})})}):""},l=function(){var e=Object(E.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),window.location.href="".concat(window.location.origin,"/api/vimeo/download?url=").concat(n.toDownload.url,"&clen=").concat(n.toDownload.contentLength,"&title=").concat(n.details.title);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(B.a,{children:Object(F.jsx)("title",{children:"Vimeo Videos Downloader - DOWNTAPE Free Vimeo Downloader Online"})}),Object(F.jsx)(Q.a,{component:"main",maxWidth:"md",children:Object(F.jsxs)("div",{className:i.paper,children:[Object(F.jsx)(b.a,{component:"h1",variant:"h5",children:"Vimeo Video Downloader"}),Object(F.jsx)("form",{className:i.form,noValidate:!0,onSubmit:r,children:Object(F.jsxs)(Y.a,{container:!0,spacing:1,children:[Object(F.jsxs)(Y.a,{item:!0,xs:12,sm:10,children:[Object(F.jsx)(P.a,{type:"text",variant:"outlined",margin:"normal",fullWidth:!0,autoFocus:!0,required:!0,label:"Enter Link",placeholder:"e.g. https://vimeo.com/147697561",value:n.url,onChange:function(e){return o({type:"url",payload:e.target.value})}}),Object(F.jsx)(U.a,{style:n.toggleLoader})]}),Object(F.jsx)(Y.a,{item:!0,xs:12,sm:2,children:Object(F.jsx)(m.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:i.btn,children:"Get Video"})})]})})]})}),Object(F.jsx)(c,{}),Object(F.jsx)(Z.a,{position:"top-center"})]})},ye=function(){return Object(F.jsx)("div",{children:Object(F.jsx)("img",{src:"https://i.vimeocdn.com/video/546434679.jpg",alt:"pic"})})},we=function(){return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(V,{}),Object(F.jsxs)(d.d,{children:[Object(F.jsx)(d.b,{path:"/",exact:!0,children:Object(F.jsx)(d.a,{to:"/youtube-video-downloader"})}),Object(F.jsx)(d.b,{path:"/youtube-video-downloader",children:Object(F.jsx)(ce,{})}),Object(F.jsx)(d.b,{path:"/instagram-video-downloader",children:Object(F.jsx)(ue,{})}),Object(F.jsx)(d.b,{path:"/twitter-video-downloader",children:Object(F.jsx)(me,{})}),Object(F.jsx)(d.b,{path:"/vimeo-video-downloader",children:Object(F.jsx)(ge,{})}),Object(F.jsx)(d.b,{path:"/test",children:Object(F.jsx)(ye,{})})]})]})},fe=n(71),ve=n(102),De=Object(ve.a)({palette:{primary:{main:"#556cd6"},success:{main:"#4caf50"},error:{main:fe.a.A400},light:{main:"#FFFFFF"},youtube:{main:"#FF0000"}}});r.a.render(Object(F.jsx)(o.a.StrictMode,{children:Object(F.jsx)(c.a,{theme:De,children:Object(F.jsxs)(s.a,{children:[Object(F.jsx)(l.a,{}),Object(F.jsx)(we,{})]})})}),document.getElementById("root"))}},[[140,1,2]]]);
//# sourceMappingURL=main.02e614d2.chunk.js.map