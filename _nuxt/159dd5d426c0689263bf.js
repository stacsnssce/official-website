(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{208:function(e,t,r){var content=r(273);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(23).default)("68dc6bde",content,!0,{sourceMap:!1})},272:function(e,t,r){"use strict";var n=r(208);r.n(n).a},273:function(e,t,r){(t=r(22)(!1)).push([e.i,".wrapper{margin:12px auto}.wrapper .newsletter-title{font-size:32px;font-weight:bolder;font:bolder 40px/43px Source Sans Pro}.wrapper .newsletter-card{width:90%;padding:5%;cursor:pointer;box-shadow:0 0 20px rgba(73,72,72,.2);transition:.2s linear;border-radius:25px}.wrapper .newsletter-card .card{max-height:300px}.wrapper .newsletter-card .card:hover{transform:scale(1.01);box-shadow:0 0 20px hsla(0,0%,39.2%,.5)}.wrapper .newsletter-card .newsletter-image{max-width:inherit!important;padding:0!important}.wrapper .newsletter-card .newsletter-image *{padding:0!important}.wrapper .newsletter-card .newsletter-image .progressive-image-main,.wrapper .newsletter-card .newsletter-image .progressive-image-placeholder,.wrapper .newsletter-card .newsletter-image .progressive-image-wrapper{max-width:inherit!important;padding:0!important}.wrapper .newsletter-card .newsletter-image img{width:100%;-o-object-fit:cover;object-fit:cover}.wrapper .newsletter-card .card-content{background:transparent;padding:10px 5px;margin:0;font-size:18px;font-weight:400;text-align:center;color:#15927d}.wrapper .newsletter-card .card-content .date{font-weight:lighter;color:darnewsletterkslategray}",""]),e.exports=t},351:function(e,t,r){"use strict";r.r(t);r(25),r(24),r(14),r(39),r(37);var n=r(5),c=r(38),o=r.n(c),l=r(192),d={fetch:function(e){var t=e.store;return o.a.get("https://api.github.com/repos/stacsnssce/webdata/contents/newsletter").then(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(r){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return data=r.data,e.t0=t,e.next=4,Promise.all(data.map(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(element){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get(element.download_url).then((function(e){var t=l(e.data);return{attribute:t.attributes,desc:element.sha,body:t.body,id:element.name.slice(0,-3)}}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 4:e.t1=e.sent,e.t0.commit.call(e.t0,"Activities",e.t1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},computed:{newsletters:function(){return this.$store.state.activities}},head:function(){return{title:"Newsletter - STACS - NSS College of Engineering",meta:[{hid:"description",name:"description",content:"The Students Association of Computer Science (STACS) recognises the achievements of students and appreciate them for gaining the awards through their efforts and talents "}]}}},w=(r(272),r(10)),component=Object(w.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"wrapper container"},[r("h1",{staticClass:"newsletter-title center-align"},[e._v("Newsletter")]),e._v(" "),r("div",{staticClass:"container newsletter-card"},[r("div",{staticClass:"row"},e._l(e.newsletters,(function(t){return r("div",{key:t.id,staticClass:"col s16 m6 l4"},[r("div",{staticClass:"card small"},[r("nuxt-link",{attrs:{to:{name:"newsletter-newsletter",params:{newsletter:t.desc,id:t.id}}}},[r("div",{staticClass:"card-image"},[r("progressive-img",{staticClass:"newsletter-image center-align",attrs:{src:""+t.attribute.cover,placeholder:"/imageplaceholder250.png",blur:"30",delay:"200"}})],1),e._v(" "),r("div",{staticClass:"card-content"},[r("b",{staticClass:"date"},[e._v(e._s(t.attribute.year))]),e._v(" "),r("h5",[r("b",[e._v(e._s(t.attribute.name))])])])])],1)])})),0)])])}),[],!1,null,null,null);t.default=component.exports}}]);