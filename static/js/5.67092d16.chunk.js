(this.webpackJsonpcv_react=this.webpackJsonpcv_react||[]).push([[5],{33:function(e,t,n){e.exports={BoxItem:"Box_BoxItem__3DVqx",Box:"Box_Box__3upeG",SlideInFwdCenter:"Box_SlideInFwdCenter__3TgXo","slide-in-fwd-center":"Box_slide-in-fwd-center__3_QO2"}},34:function(e,t,n){e.exports={BoxGrid:"BoxGrid_BoxGrid__3sh-J"}},35:function(e,t,n){"use strict";var r=n(1),a=(n(0),n(36)),i=n(33),s=n.n(i),c=new a.Howl({src:["assets/sounds/ui_tap-variant-01.wav"]}),o=function(e){return Object(r.jsx)("div",{className:s.a.BoxItem,children:Object(r.jsx)("a",{target:"_blank",rel:"noreferrer",href:null===e||void 0===e?void 0:e.href,onMouseEnter:function(){c.play()},className:s.a.SlideInFwdCenter,style:{animationDelay:"".concat(.2*e.idx,"s")},children:Object(r.jsx)("div",{className:s.a.Box,children:e.children})})})},l=n(34),d=n.n(l);t.a=function(e){return Object(r.jsx)("div",{className:d.a.BoxGrid,children:e.data.map((function(t,n){return Object(r.jsx)(o,{idx:n,href:t.link,children:Object(r.jsx)(e.component,{item:t})},n)}))})}},49:function(e,t,n){e.exports={LibraryBox:"Libraries_LibraryBox__3PE48",BoxTitle:"Libraries_BoxTitle__2vJak",BoxDescription:"Libraries_BoxDescription__D7nu9",BoxDownloads:"Libraries_BoxDownloads__C885n"}},54:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),i=n(35),s=n(37),c=n(46),o=n.n(c),l=n(48),d=n(52);function u(){return(u=Object(l.a)(o.a.mark((function e(t){var n,r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}throw new Error("No package name specified.");case 2:return"2012-01-15",n=Object(d.a)(new Date,"yyyy-MM-dd"),e.next=6,fetch("https://api.npmjs.org/downloads/point/".concat("2012-01-15",":").concat(n,"/").concat(t));case 6:return r=e.sent,e.next=9,r.json();case 9:return a=e.sent,e.abrupt("return",a.downloads);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x=function(e){var t=Object(a.useState)(0),n=Object(s.a)(t,2),r=n[0],i=n[1];return Object(a.useEffect)((function(){(function(e){return u.apply(this,arguments)})(e).then((function(e){i(e)}))}),[e]),r},p=[{link:"https://www.npmjs.com/package/ngx-unused-css",package:"ngx-unused-css",title:"Angular Unused CSS cleanup",description:"Detect unused CSS in Angular projects.",dateCreated:"2012-01-15"},{link:"https://www.npmjs.com/package/stylelint-regex",package:"stylelint-regex",title:"Stylelint Regex",description:"Full flexibility for stylelint rule creation using regex",dateCreated:"2012-01-15"},{link:"https://www.npmjs.com/package/stylelint-restrict",package:"stylelint-restrict",title:"Stylelint Restrict",description:"Restrict usage of color variables in SASS/SCSS only to certain files",dateCreated:"2012-01-15"}],f=n(49),j=n.n(f),_=function(e){var t=x(e.item.package);return Object(r.jsxs)("div",{className:j.a.LibraryBox,children:[Object(r.jsx)("span",{className:j.a.BoxTitle,children:e.item.title}),Object(r.jsx)("div",{className:j.a.BoxDescription,children:e.item.description}),Object(r.jsxs)("span",{className:j.a.BoxDownloads,children:[t," Downloads"]})]})};t.default=function(){return Object(r.jsx)(i.a,{data:p,component:_})}}}]);
//# sourceMappingURL=5.67092d16.chunk.js.map