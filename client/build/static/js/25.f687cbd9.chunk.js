(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[25],{225:function(t,e,a){"use strict";a.r(e);var n=a(114),i=a(133),o=a(152),c=a(135),l=a(231),s=a(216),r=a(229),d=a(236),j=a(226),m=a(227),b=a(228),h=a(118),p=a(170),u=a.n(p),x=(a(136),a(131)),g=a(2),O=Object(n.a)((function(t){return{form:{width:"100%",marginTop:t.spacing(1)},btn:{marginTop:t.spacing(2),padding:t.spacing(1.9)},DetailsContainer:{marginTop:t.spacing(6),marginBottom:t.spacing(4)},formControl:{margin:t.spacing(1)},downloadDropdownForm:{display:"flex",flexDirection:"column",justifyContent:"center"}}}));e.default=function(t){var e=t.video,a=t.dispatch,n=t.downloadVideo,p=O();return e.formats.length?Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(i.a,{component:"main",maxWidth:"md",id:"search-result",children:Object(g.jsx)("div",{className:p.DetailsContainer,children:Object(g.jsxs)(o.a,{container:!0,spacing:1,children:[Object(g.jsx)(o.a,{item:!0,xs:12,sm:6,children:Object(g.jsx)(j.a,{children:Object(g.jsxs)(m.a,{style:{width:"100%"},children:[Object(g.jsx)("img",{src:e.details.thumbnail,alt:e.details.title}),Object(g.jsx)(b.a,{title:e.details.title,subtitle:Object(g.jsx)("span",{children:e.details.duration})})]})})}),Object(g.jsxs)(o.a,{item:!0,xs:12,sm:6,className:p.downloadDropdownForm,children:[Object(g.jsxs)(s.a,{variant:"outlined",className:p.formControl,children:[Object(g.jsx)(d.a,{htmlFor:"quality-dropdown",children:"Video Quality"}),Object(g.jsx)(l.a,{labelId:"quality-dropdown",value:e.toDownload.itag,label:"Video Quality",onChange:function(t){return a({type:"toDownload",payload:{itag:t.target.value}})},children:e.formats.map((function(t,e){return Object(g.jsx)(r.a,{value:t.itag,children:Object(g.jsxs)(c.a,{fontFamily:"Monospace",children:[" ",t.qualityLabel," ",t.contentLength?" - ".concat(Object(x.a)(t.contentLength)," Mb"):""]})},e)}))})]}),Object(g.jsxs)(h.a,{variant:"extended",size:"small",color:"secondary","aria-label":"download",onClick:n,className:p.btn,children:[Object(g.jsx)(u.a,{className:p.extendedIcon}),"Download"]})]})]})})})}):""}}}]);
//# sourceMappingURL=25.f687cbd9.chunk.js.map