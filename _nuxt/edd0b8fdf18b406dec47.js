(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{200:function(t,e,r){var content=r(259);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("f5dedf76",content,!0,{sourceMap:!1})},258:function(t,e,r){"use strict";var n=r(200);r.n(n).a},259:function(t,e,r){(e=r(22)(!1)).push([t.i,".activity-image{max-width:inherit!important}.activity-image,.activity-image *{padding:0!important}.activity-image .progressive-image-main,.activity-image .progressive-image-placeholder,.activity-image .progressive-image-wrapper{max-width:inherit!important;padding:0!important}.activity-image img{width:100%;-o-object-fit:cover;object-fit:cover}.activities-wrapper{box-sizing:border-box;min-width:200px;margin:0 auto;border-left:1px solid #eaecef;border-right:1px solid #eaecef;border-bottom:1px solid #eaecef;border-radius:25px}.page-title{color:#000;font:700 40px/43px Source Sans Pro}.activities{padding:10px}.activity-card{text-align:center;box-shadow:0 4px 8px 0 rgba(0,0,0,.2);cursor:pointer;border-radius:8px;padding:10px;max-width:450px}.activity-card:hover{transform:scale(.98,.99);box-shadow:0 0 10px #585a5a;transition:.3s}.act-card-title{color:#035f59}.act-card-date{color:#313131;font-weight:700}",""]),t.exports=e},350:function(t,e,r){"use strict";r.r(e);r(25),r(24),r(14),r(39),r(37);var n=r(4),c=r(38),o=r.n(c),d=r(192),l={fetch:function(t){var e=t.store;return o.a.get("https://api.github.com/repos/stacsnssce/webdata/contents/activities").then(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return data=r.data,t.t0=e,t.next=4,Promise.all(data.map(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(element){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get(element.download_url).then((function(t){var e=d(t.data);return{attribute:e.attributes,desc:element.sha,body:e.body,id:element.name.slice(0,-3)}}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 4:t.t1=t.sent,t.t0.commit.call(t.t0,"Activities",t.t1);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},computed:{activities:function(){return this.$store.state.activities}},head:function(){return{title:"Activities - STACS - NSS College of Engineering",meta:[{hid:"description",name:"description",content:"Activities and Events conducted by STACS to encourage students and give them more opportunities"}]}}},v=(r(258),r(10)),component=Object(v.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("h1",{staticClass:"page-title center-align"},[t._v("\n    Activities\n  ")]),t._v(" "),r("div",{staticClass:"container card activities-wrapper"},[r("div",{staticClass:"row activities m3"},t._l(t.activities.slice().reverse(),(function(e){return r("div",{key:e.id,staticClass:"col s12 m6"},[r("div",{staticClass:"card activity-card m4"},[r("nuxt-link",{attrs:{to:{name:"activities-desc",params:{desc:e.desc,id:e.id}}}},[r("div",{staticClass:"card-image"},[r("progressive-img",{staticClass:"activity-image center-align",attrs:{src:""+e.attribute.cover,placeholder:"/imageplaceholder8x5.png",blur:"30",delay:"200"}})],1),t._v(" "),r("div",{staticClass:"card-content"},[r("h5",{staticClass:"act-card-title"},[r("b",[t._v(t._s(e.attribute.title))])]),t._v(" "),r("h6",{staticClass:"act-card-date"},[t._v("\n              "+t._s(e.attribute.date)+"\n            ")])])])],1)])})),0)])])}),[],!1,null,null,null);e.default=component.exports}}]);