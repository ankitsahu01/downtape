(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[11],{131:function(e,t,n){"use strict";var a=n(0),o=n(23),i=n.n(o),r=n(2),c=Object(a.lazy)((function(){return Promise.all([n.e(14),n.e(23)]).then(n.bind(null,146))})),l=Object(a.lazy)((function(){return Promise.all([n.e(2),n.e(24)]).then(n.bind(null,137))})),s=Object(a.lazy)((function(){return n.e(17).then(n.bind(null,147))}));t.a=function(e){var t=e.title,n=e.img,o=e.downloadSteps,d=e.description;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(c,{title:t,img:n,downloadSteps:o}),Object(r.jsxs)(a.Suspense,{fallback:Object(r.jsx)(i.a,{}),children:[Object(r.jsx)(l,{}),Object(r.jsx)(s,{title:t,description:d})]})]})}},135:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var a=function(e){var t=parseInt(e%60),n=e/60,a=parseInt(n/60);return(a=a<10?"0"+a:a)+":"+(n=(n=parseInt(n%60))<10?"0"+n:n)+":"+(t=t<10?"0"+t:t)},o=function(e){return(e/1024/1024).toFixed(1)}},230:function(e,t,n){"use strict";n.r(t);var a=n(140),o=n.n(a),i=n(141),r=n(42),c=n(0),l=n(49),s=n(114),d=n(142),u=n.n(d),p=n(132),b=n(155),j=n(134),h=n(122),m=n(234),g=n(196),y=n(229),f=n(217),O=n(220),w=n(233),x=n(214),v=n(215),D=n(216),T=n(221),L=n(118),k=n(158),F=n.n(k),C=n(144),N=(n(143),n(56)),I=n(43),S={toggleLoader:{display:"none"},url:"",toDownload:{itag:"",contentLength:""},details:{},formats:[]},V=function(e,t){if(t.type&&"toDownload"===t.type){var n=parseInt(t.payload.itag),a=e.formats.filter((function(e){return e.itag===n})).map((function(e){return e.contentLength}))[0];e=Object(I.a)(Object(I.a)({},e),{},Object(N.a)({},t.type,{itag:n,contentLength:parseInt(a)}))}else t.type&&(e=Object(I.a)(Object(I.a)({},e),{},Object(N.a)({},t.type,t.payload)));return e},Y=n(135),W=n(131),q=n(2),A=Object(s.a)((function(e){return{searchDiv:{marginTop:e.spacing(10),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(1)},btn:{marginTop:e.spacing(2),padding:e.spacing(1.9)},videoDetailsContainer:{marginTop:e.spacing(6),marginBottom:e.spacing(4)},formControl:{margin:e.spacing(1)},downloadDropdownForm:{display:"flex",flexDirection:"column",justifyContent:"center"},ytTitle:{color:e.palette.youtube.secondary}}}));t.default=function(){var e=Object(c.useReducer)(V,S),t=Object(r.a)(e,2),n=t[0],a=t[1],s=A(),d=function(){var e=Object(i.a)(o.a.mark((function e(t){var i,r,c,l,s,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t.preventDefault(),""!==n.url){e.next=5;break}return C.b.error("Please Enter Link!"),e.abrupt("return");case 5:return a({type:"toggleLoader",payload:{display:"block"}}),e.next=8,u.a.get("/api/youtube/info?url=".concat(n.url.trim()));case 8:i=e.sent,a({type:"toggleLoader",payload:{display:"none"}}),r=i.data,c=r.title,l=r.thumbnail,s=r.lengthSeconds,a({type:"details",payload:{title:c,thumbnail:l,duration:Object(Y.b)(s)}}),d=r.formats.filter((function(e){return e.hasVideo&&e.hasAudio})),a({type:"formats",payload:d}),a({type:"toDownload",payload:{itag:d[0].itag}}),document.querySelector("#search-result").scrollIntoView({behavior:"smooth",block:"center"}),e.next=24;break;case 20:e.prev=20,e.t0=e.catch(0),a({type:"toggleLoader",payload:{display:"none"}}),404===e.t0.response.status?C.b.error(e.t0.response.data):C.b.error("Something Went Wrong, Try Later.");case 24:case"end":return e.stop()}}),e,null,[[0,20]])})));return function(t){return e.apply(this,arguments)}}(),k=function(){return n.formats.length?Object(q.jsx)(q.Fragment,{children:Object(q.jsx)(p.a,{component:"main",maxWidth:"md",id:"search-result",children:Object(q.jsx)("div",{className:s.videoDetailsContainer,children:Object(q.jsxs)(b.a,{container:!0,spacing:1,children:[Object(q.jsx)(b.a,{item:!0,xs:12,sm:6,children:Object(q.jsx)(x.a,{children:Object(q.jsxs)(v.a,{style:{width:"100%"},children:[Object(q.jsx)("img",{src:n.details.thumbnail,alt:n.details.title}),Object(q.jsx)(D.a,{title:n.details.title,subtitle:Object(q.jsx)("span",{children:n.details.duration})})]})})}),Object(q.jsxs)(b.a,{item:!0,xs:12,sm:6,className:s.downloadDropdownForm,children:[Object(q.jsxs)(f.a,{variant:"outlined",className:s.formControl,children:[Object(q.jsx)(w.a,{htmlFor:"quality-dropdown",children:"Video Quality"}),Object(q.jsx)(y.a,{labelId:"quality-dropdown",value:n.toDownload.itag,label:"Video Quality",onChange:function(e){return a({type:"toDownload",payload:{itag:e.target.value}})},children:n.formats.map((function(e,t){return Object(q.jsx)(O.a,{value:e.itag,children:Object(q.jsxs)(j.a,{fontFamily:"Monospace",children:[" ",e.qualityLabel," ",e.contentLength?" - ".concat(Object(Y.a)(e.contentLength)," Mb"):""]})},t)}))})]}),Object(q.jsxs)(L.a,{variant:"extended",size:"small",color:"secondary","aria-label":"download",onClick:N,className:s.btn,children:[Object(q.jsx)(F.a,{className:s.extendedIcon}),"Download"]})]})]})})})}):""},N=function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),window.location.href="".concat(window.location.origin,"/api/youtube/download?url=").concat(n.url,"&itag=").concat(n.toDownload.itag,"&clen=").concat(n.toDownload.contentLength,"&title=").concat(n.details.title);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsxs)(l.a,{children:[Object(q.jsx)("title",{children:"YouTube Videos Downloader - DOWNTAPE Free YouTube Downloader Online"}),Object(q.jsx)("link",{rel:"canonical",href:"https://www.downtape.herokuapp.com/youtube-video-downloader"}),Object(q.jsx)("meta",{name:"description",content:"Download YouTube videos Online Free on DOWNTAPE. We provides you the best YouTube video downloader, In which you can download YouTube videos in mp4"})]}),Object(q.jsx)(p.a,{component:"main",maxWidth:"md",children:Object(q.jsxs)("div",{className:s.searchDiv,children:[Object(q.jsxs)(h.a,{component:"h1",variant:"h4",children:[Object(q.jsx)("span",{className:s.ytTitle,children:"YouTube"})," Video Downloader"]}),Object(q.jsx)("form",{className:s.form,noValidate:!0,onSubmit:d,children:Object(q.jsxs)(b.a,{container:!0,spacing:1,children:[Object(q.jsxs)(b.a,{item:!0,xs:12,md:9,children:[Object(q.jsx)(m.a,{type:"text",variant:"outlined",margin:"normal",fullWidth:!0,autoFocus:!0,required:!0,label:"Enter Link",placeholder:"e.g. https://www.youtube.com/watch?v=wAD9uO9YAQw",value:n.url,onChange:function(e){return a({type:"url",payload:e.target.value})}}),Object(q.jsx)(T.a,{style:n.toggleLoader})]}),Object(q.jsx)(b.a,{item:!0,xs:12,md:2,children:Object(q.jsx)(g.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:s.btn,children:"Get Video"})})]})})]})}),Object(q.jsx)(k,{}),Object(q.jsx)(W.a,{title:"YouTube",img:"youtube.jpg",downloadSteps:["Copy the URL of the video which you need to download.","Paste URL in the search field and click \u201cGet Video\u201d.","Choose the Video Quality that you want to Download.","Click the \u201cDownload\u201d button to start downloading the file."],description:"DownTape Youtube video downloader provides fastest service to download videos in mp4, mp3, SQ, HD, Full HD quality from YouTube! For more convenient viewing on a large screen video can be saved in high quality. To watch videos on Android or iOS phones the medium quality will be enough."}),Object(q.jsx)(C.a,{position:"top-center"})]})}}}]);
//# sourceMappingURL=11.6190c092.chunk.js.map