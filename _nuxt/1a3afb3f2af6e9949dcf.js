(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{209:function(t,e,n){var content=n(277);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("51449894",content,!0,{sourceMap:!1})},276:function(t,e,n){"use strict";var r=n(209);n.n(r).a},277:function(t,e,n){(e=n(22)(!1)).push([t.i,".container .heading[data-v-659edfea]{margin:16px;font-size:40px;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-size:32px;font:bolder 40px/43px Source Sans Pro}.container .allth[data-v-659edfea]{color:#000;width:auto}.container .allth .title[data-v-659edfea]{font-size:28px;color:#353434;display:inline-block;padding-bottom:12px;font-weight:700;margin-left:16px;border-bottom:4px solid #13a59b}.container .allth .img-wrapper[data-v-659edfea]{padding:10px}.container .allth .img-wrapper .img[data-v-659edfea]{display:inline-block;width:100%;border-radius:5px;transition:box-shadow .25s ease-in-out;box-sizing:border-box;box-shadow:0 0 10px hsla(0,0%,39.2%,.5);cursor:pointer}.container .allth .img-wrapper .img[data-v-659edfea]:hover{box-shadow:0 0 2px hsla(0,0%,39.2%,.5)}",""]),t.exports=e},356:function(t,e,n){"use strict";n.r(e);n(37);var r=n(4),o=n(38),l=n.n(o),c={fetch:function(t){var e=t.store;return l.a.get("https://raw.githubusercontent.com/stacsnssce/webdata/master/gallery.json").then(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(n){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return data=n.data,t.next=3,e.commit("Gallery",data.gallery);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).then((function(){}))},computed:{gallery:function(){return this.$store.state.gallery}},head:function(){return{title:"STACS Gallery",meta:[{hid:"description",name:"description",content:"Photo gallery showcasing events and activities of STACS"}]}}},d=(n(276),n(10)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",{staticClass:"heading"},[t._v("\n    Gallery\n  ")]),t._v(" "),t._l(t.gallery,(function(e){return n("section",{key:e.title,staticClass:"allth"},[n("h4",{staticClass:"title"},[t._v("\n      "+t._s(e.title)+"\n    ")]),t._v(" "),n("div",{staticClass:"allimg row"},t._l(e.images,(function(t){return n("div",{key:t,staticClass:"col s12 m4 l3 img-wrapper"},[n("img",{staticClass:"img",attrs:{src:t}})])})),0)])}))],2)}),[],!1,null,"659edfea",null);e.default=component.exports}}]);