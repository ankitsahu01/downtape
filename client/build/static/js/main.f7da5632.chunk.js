(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{133:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(10),i=n.n(c),r=n(187),d=n(188),l=n(41),s=n(11),u=n(29),b=n(172),j=n(174),p=n(175),h=n(176),m=n(167),x=n(170),O=n(90),w=n.n(O),v=n(171),g=n(177),y=n(3),f=Object(m.a)((function(e){return{root:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)},title:{flexGrow:1},navlink:{color:e.palette.light.main,textDecoration:"none"}}})),_=function(e){var t=e.children,n=e.window,o=f(),a=Object(x.a)({target:n?n():void 0,disableHysteresis:!0,threshold:100});return Object(y.jsx)(v.a,{in:a,children:Object(y.jsx)("div",{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",className:o.root,children:t})})},k=function(e){var t=e.children,n=e.window,o=Object(x.a)({target:n?n():void 0});return Object(y.jsx)(v.a,{appear:!1,direction:"down",in:!o,children:t})},D=function(e){var t=f();return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(k,Object(u.a)(Object(u.a)({},e),{},{children:Object(y.jsx)(b.a,{children:Object(y.jsxs)(j.a,{children:[Object(y.jsx)(p.a,{variant:"h6",component:"h1",className:t.title,children:Object(y.jsx)(l.b,{to:"/",className:t.navlink,children:"DOWNTAPE"})}),Object(y.jsx)(h.a,{color:"inherit",children:Object(y.jsx)(l.b,{to:"/youtube-video-downloader",className:t.navlink,children:"Download Youtube Video"})})]})})})),Object(y.jsx)(j.a,{id:"back-to-top-anchor"}),Object(y.jsx)(_,Object(u.a)(Object(u.a)({},e),{},{children:Object(y.jsx)(g.a,{color:"primary",size:"small","aria-label":"scroll back to top",children:Object(y.jsx)(w.a,{})})}))]})},A=n(32),F=n.n(A),L=n(51),B=n(52),C=n(91),N=n(178),T=n(179),I=n(193),V=n(183),W=n(190),E=n(189),S=n(192),Y=n(180),q=n(181),G=n(182),X=n(186),Q=n(94),H=n.n(Q),M=n(64),P=(n(114),n(62)),U=n.n(P),z=n(47),J={toggleLoader:{display:"none"},url:"",toDownload:{itag:"",contentLength:""},details:{},formats:[]},R=function(e,t){if(t.type&&"toDownload"===t.type){var n=parseInt(t.payload.itag),o=e.formats.filter((function(e){return e.itag===n})).map((function(e){return e.contentLength}))[0];e=Object(u.a)(Object(u.a)({},e),{},Object(z.a)({},t.type,{itag:n,contentLength:parseInt(o)}))}else t.type&&(e=Object(u.a)(Object(u.a)({},e),{},Object(z.a)({},t.type,t.payload)));return e},K=function(e){var t=parseInt(e%60),n=e/60,o=parseInt(n/60);return(o=o<10?"0"+o:o)+":"+(n=(n=parseInt(n%60))<10?"0"+n:n)+":"+(t=t<10?"0"+t:t)},Z=Object(m.a)((function(e){return{paper:{marginTop:e.spacing(4),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(1)},btn:{marginTop:e.spacing(2),padding:e.spacing(1.9)},videoDetailsContainer:{marginTop:e.spacing(6),marginBottom:e.spacing(4)},formControl:{margin:e.spacing(1)},downloadDropdownForm:{display:"flex",flexDirection:"column",justifyContent:"center"}}})),$=function(){var e=Object(o.useReducer)(R,J),t=Object(B.a)(e,2),n=t[0],a=t[1],c=Z(),i=function(){var e=Object(L.a)(F.a.mark((function e(t){var o,c,i,r,d,l;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),a({type:"toggleLoader",payload:{display:"block"}}),e.next=5,U.a.get("/api/youtube/info?url=".concat(n.url.trim()));case 5:o=e.sent,a({type:"toggleLoader",payload:{display:"none"}}),c=o.data,i=c.title,r=c.thumbnail,d=c.lengthSeconds,a({type:"details",payload:{title:i,thumbnail:r,duration:K(d)}}),l=c.formats.filter((function(e){return e.hasVideo&&e.hasAudio})),a({type:"formats",payload:l}),a({type:"toDownload",payload:{itag:l[0].itag}}),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),a({type:"toggleLoader",payload:{display:"none"}}),404===e.t0.response.status?M.b.error(e.t0.response.data):M.b.error("Something Went Wrong, Try Later.");case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}(),r=function(){return n.formats.length?Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(N.a,{component:"main",maxWidth:"md",children:Object(y.jsx)("div",{className:c.videoDetailsContainer,children:Object(y.jsxs)(T.a,{container:!0,spacing:1,children:[Object(y.jsx)(T.a,{item:!0,xs:12,sm:6,children:Object(y.jsx)(Y.a,{children:Object(y.jsxs)(q.a,{style:{width:"100%"},children:[Object(y.jsx)("img",{src:n.details.thumbnail,alt:n.details.title}),Object(y.jsx)(G.a,{title:n.details.title,subtitle:Object(y.jsx)("span",{children:n.details.duration})})]})})}),Object(y.jsxs)(T.a,{item:!0,xs:12,sm:6,className:c.downloadDropdownForm,children:[Object(y.jsxs)(V.a,{variant:"outlined",className:c.formControl,children:[Object(y.jsx)(W.a,{htmlFor:"quality-dropdown",children:"Video Quality"}),Object(y.jsx)(E.a,{labelId:"quality-dropdown",value:n.toDownload.itag,label:"Video Quality",onChange:function(e){return a({type:"toDownload",payload:{itag:e.target.value}})},children:n.formats.map((function(e,t){return Object(y.jsxs)(S.a,{value:e.itag,children:[e.qualityLabel," ",e.contentLength?" - ".concat((n=e.contentLength,(n/1024/1024).toFixed(1))," Mb"):""]},t);var n}))})]}),Object(y.jsxs)(g.a,{variant:"extended",size:"small",color:"secondary","aria-label":"download",onClick:d,className:c.btn,children:[Object(y.jsx)(H.a,{className:c.extendedIcon}),"Download"]})]})]})})})}):""},d=function(){var e=Object(L.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),window.location.href="".concat(window.location.href,"api/youtube/download?url=").concat(n.url,"&itag=").concat(n.toDownload.itag,"&clen=").concat(n.toDownload.contentLength,"&title=").concat(n.details.title);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(C.a,{children:[Object(y.jsx)("title",{children:"YouTube Videos Downloader - DOWNTAPE Free YouTube Downloader Online"}),Object(y.jsx)("link",{rel:"canonical",href:"https://www.downtape.herokuapp.com/youtube-video-downloader"}),Object(y.jsx)("meta",{name:"description",content:"Download YouTube videos Online Free on DOWNTAPE. We provides you the best YouTube video downloader, In which you can download YouTube videos in mp4"}),Object(y.jsx)("meta",{name:"keywords",content:"youtube video download, youtube video download online, online youtube video download, free youtube video download, youtube video download by link, youtube video download free, save youtube video download, youtube video download pc, youtube video download link, youtube video download website, how to youtube video download, youtube video download site, youtube video download mp4, youtube video download online free, youtube video downloader, online youtube video downloader, youtube video downloader for pc, youtube video downloader free download, best youtube video downloader, free youtube video downloader, download youtube video, download youtube videos, how to download youtube video, how to download youtube video in laptop, how download youtube video, how to download youtube videos in mobile, download youtube video online, how to download youtube video online, download youtube video online free, how download youtube video online"})]}),Object(y.jsx)(N.a,{component:"main",maxWidth:"md",children:Object(y.jsxs)("div",{className:c.paper,children:[Object(y.jsx)(p.a,{component:"h1",variant:"h5",children:"YouTube Video Downloader"}),Object(y.jsx)("form",{className:c.form,noValidate:!0,onSubmit:i,children:Object(y.jsxs)(T.a,{container:!0,spacing:1,children:[Object(y.jsxs)(T.a,{item:!0,xs:12,sm:10,children:[Object(y.jsx)(I.a,{type:"text",variant:"outlined",margin:"normal",fullWidth:!0,autoFocus:!0,required:!0,label:"Enter Link",placeholder:"e.g. https://www.youtube.com/watch?v=wAD9uO9YAQw",value:n.url,onChange:function(e){return a({type:"url",payload:e.target.value})}}),Object(y.jsx)(X.a,{style:n.toggleLoader})]}),Object(y.jsx)(T.a,{item:!0,xs:12,sm:2,children:Object(y.jsx)(h.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:c.btn,children:"Get Video"})})]})})]})}),Object(y.jsx)(r,{}),Object(y.jsx)(M.a,{position:"top-center"})]})},ee=function(){var e=Object(o.useState)("https://www.instagram.com/p/CB5d063pwo-/"),t=Object(B.a)(e,2),n=t[0],a=t[1],c=Object(o.useState)({videoLink:"",imgLink:"",caption:""}),i=Object(B.a)(c,2),r=i[0],d=i[1],l=function(){var e=Object(L.a)(F.a.mark((function e(){var t,o,a,c,i,r;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U()("/api/insta/info?url=".concat(n));case 3:t=e.sent,o=t.data,a=o.videoLink,c=o.imgName,i=o.caption,console.log("IMG Name "+c),r="http://localhost:5000/img/".concat(c),r="https://downtape.herokuapp.com/img/".concat(c),d({videoLink:a,imgLink:r,caption:i}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("h1",{children:"Testing Insta"}),Object(y.jsx)("input",{type:"text",value:n,onChange:function(e){return a(e.target.value)},placeholder:"Enter Insta video url"}),Object(y.jsx)("br",{}),Object(y.jsx)("button",{onClick:l,children:"Search"}),Object(y.jsx)("br",{}),Object(y.jsx)("video",{controls:!0,poster:"https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/e35/226533970_991515171608290_8124624967778992359_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=110&_nc_ohc=XHVBp88-EC8AX__BsGx&edm=AABBvjUBAAAA&ccb=7-4&oh=2e676b12c8551aa25a75c54216fca25c&oe=611C8D9B&_nc_sid=83d603",children:Object(y.jsx)("source",{src:"https://scontent-iad3-1.cdninstagram.com/v/t50.2886-16/10000000_787499208591130_9223319361261511444_n.mp4?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=110&_nc_ohc=jAisvksF53EAX-QxCoB&edm=AABBvjUBAAAA&ccb=7-4&oe=611CF10B&oh=e93c55f9a9923216215a98ce49f5683b&_nc_sid=83d603",type:"video/mp4"})}),Object(y.jsx)("img",{src:"https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/e35/226533970_991515171608290_8124624967778992359_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=110&_nc_ohc=XHVBp88-EC8AX__BsGx&edm=AABBvjUBAAAA&ccb=7-4&oh=2e676b12c8551aa25a75c54216fca25c&oe=611C8D9B&_nc_sid=83d603"}),Object(y.jsx)("br",{}),r.videoLink?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("img",{src:r.imgLink,style:{width:"300px"}}),Object(y.jsx)("br",{}),Object(y.jsx)("p",{children:r.caption}),Object(y.jsx)("a",{href:r.videoLink,children:"Download"})]}):""]})},te=function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(D,{}),Object(y.jsxs)(s.c,{children:[Object(y.jsx)(s.a,{path:"/",exact:!0,children:Object(y.jsx)($,{})}),Object(y.jsx)(s.a,{path:"/youtube-video-downloader",children:Object(y.jsx)($,{})}),Object(y.jsx)(s.a,{path:"/test",children:Object(y.jsx)(ee,{})})]})]})},ne=n(63),oe=n(95),ae=Object(oe.a)({palette:{primary:{main:"#556cd6"},success:{main:"#4caf50"},error:{main:ne.a.A400},light:{main:"#FFFFFF"},youtube:{main:"#FF0000"}}});i.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(r.a,{theme:ae,children:Object(y.jsxs)(l.a,{children:[Object(y.jsx)(d.a,{}),Object(y.jsx)(te,{})]})})}),document.getElementById("root"))}},[[133,1,2]]]);
//# sourceMappingURL=main.f7da5632.chunk.js.map