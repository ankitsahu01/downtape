(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[13],{131:function(e,n,t){"use strict";var a=t(0),i=t(23),o=t.n(i),r=t(2),c=Object(a.lazy)((function(){return Promise.all([t.e(14),t.e(23)]).then(t.bind(null,146))})),s=Object(a.lazy)((function(){return Promise.all([t.e(2),t.e(24)]).then(t.bind(null,137))})),l=Object(a.lazy)((function(){return t.e(17).then(t.bind(null,147))}));n.a=function(e){var n=e.title,t=e.img,i=e.downloadSteps,d=e.description;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(c,{title:n,img:t,downloadSteps:i}),Object(r.jsxs)(a.Suspense,{fallback:Object(r.jsx)(o.a,{}),children:[Object(r.jsx)(s,{}),Object(r.jsx)(l,{title:n,description:d})]})]})}},197:function(e,n,t){"use strict";var a=t(71),i=t(72);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i(t(0)),r=(0,a(t(73)).default)(o.createElement("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"}),"GetApp");n.default=r},222:function(e,n,t){"use strict";t.r(n);var a=t(140),i=t.n(a),o=t(141),r=t(42),c=t(0),s=t(49),l=t(142),d=t.n(l),u=t(114),p=t(132),m=t(155),j=t(122),b=t(196),g=t(234),h=t(221),f=t(197),x=t.n(f),v=t(144),O=(t(143),t(131)),w=t(2),y=Object(u.a)((function(e){return{searchDiv:{marginTop:e.spacing(10),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(1)},btn:{marginTop:e.spacing(2),padding:e.spacing(1.9)},videoDetailsContainer:{marginTop:e.spacing(6),marginBottom:e.spacing(4)},formControl:{margin:e.spacing(1)},downloadSection:{display:"flex",flexDirection:"column",justifyContent:"center"},seticons:{display:"flex",alignItems:"center",justifyContent:"space-evenly"},alignicons:{display:"flex",alignItems:"center"},igTitle:{backgroundColor:e.palette.secondary.main,background:e.palette.instagram.main,backgroundSize:"100%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}}));n.default=function(){var e=Object(c.useState)(""),n=Object(r.a)(e,2),t=n[0],a=n[1],l=Object(c.useState)({display:"none"}),u=Object(r.a)(l,2),f=u[0],k=u[1],D=y(),C=function(){var e=Object(o.a)(i.a.mark((function e(n){var a,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n.preventDefault(),""!==t){e.next=5;break}return v.b.error("Please Enter Link!"),e.abrupt("return");case 5:return k({display:"block"}),e.next=8,d()("/api/insta/getLink?url=".concat(t));case 8:a=e.sent,o=a.data.downloadLink,o=encodeURIComponent(o),window.location.href="".concat(window.location.origin,"/api/insta/download?url=").concat(o),k({display:"none"}),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(0),k({display:"none"}),v.b.error("Something Went Wrong. Try Later!"),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(n){return e.apply(this,arguments)}}();return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(s.a,{children:Object(w.jsx)("title",{children:"Instagram Videos Downloader - DOWNTAPE Free Instagram Downloader Online"})}),Object(w.jsx)(p.a,{component:"main",maxWidth:"md",children:Object(w.jsxs)("div",{className:D.searchDiv,children:[Object(w.jsxs)(j.a,{component:"h1",variant:"h4",children:[Object(w.jsx)("span",{className:D.igTitle,children:"Instagram"})," Video Downloader"]}),Object(w.jsx)("form",{className:D.form,noValidate:!0,onSubmit:C,children:Object(w.jsxs)(m.a,{container:!0,spacing:1,children:[Object(w.jsxs)(m.a,{item:!0,xs:12,sm:10,children:[Object(w.jsx)(g.a,{type:"text",variant:"outlined",margin:"normal",fullWidth:!0,autoFocus:!0,required:!0,label:"Enter Link",placeholder:"e.g. https://www.instagram.com/p/CB5d063pwo-/",value:t,onChange:function(e){return a(e.target.value)}}),Object(w.jsx)(h.a,{style:f})]}),Object(w.jsx)(m.a,{item:!0,xs:12,sm:2,children:Object(w.jsxs)(b.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:D.btn,children:[Object(w.jsx)(x.a,{style:{marginRight:"4px"}}),"Download"]})})]})})]})}),Object(w.jsx)(O.a,{title:"Instagram",img:"instagram.jpg",downloadSteps:["Copy the URL of the video which you need to download.","Paste URL in the search field.","Click the \u201cDownload\u201d button to start downloading the file."],description:"DownTape Instagram video downloader provides fastest service to download\n  videos in mp4, mp3, SQ, HD, Full HD quality from Instagram! For more\n  convenient viewing on a large screen video can be saved in high\n  quality. To watch videos on Android or iOS phones the medium\n  quality will be enough."}),Object(w.jsx)(v.a,{position:"top-center"})]})}}}]);
//# sourceMappingURL=13.223c8e9a.chunk.js.map