(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{201:function(e,r,t){var content=t(261);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(23).default)("c871421e",content,!0,{sourceMap:!1})},260:function(e,r,t){"use strict";var n=t(201);t.n(n).a},261:function(e,r,t){(r=t(22)(!1)).push([e.i,".wrapper[data-v-0f700ae7]{margin:12px auto}.wrapper .award-title[data-v-0f700ae7]{font-size:32px;font-weight:bolder;font:700 40px/43px Source Sans Pro}.wrapper .award-card[data-v-0f700ae7]{width:90%;padding:5%;cursor:pointer;transition:.2s linear;border-radius:25px;background-size:cover}.wrapper .award-card .card[data-v-0f700ae7]{max-height:250px!important}.wrapper .award-card .card[data-v-0f700ae7]:hover{transform:scale(1.01);box-shadow:0 0 20px #585a5a}.wrapper .award-card .card h5[data-v-0f700ae7]{font-size:20px}.wrapper .award-card .award-image[data-v-0f700ae7]{max-width:inherit!important;padding:0!important}.wrapper .award-card .award-image *[data-v-0f700ae7]{padding:0!important}.wrapper .award-card .award-image .progressive-image-main[data-v-0f700ae7],.wrapper .award-card .award-image .progressive-image-placeholder[data-v-0f700ae7],.wrapper .award-card .award-image .progressive-image-wrapper[data-v-0f700ae7]{max-width:inherit!important;padding:0!important}.wrapper .award-card .award-image img[data-v-0f700ae7]{width:100%;-o-object-fit:cover;object-fit:cover}.wrapper .award-card .card-content[data-v-0f700ae7]{background:transparent;padding:0 5px;margin:0;font-size:12px;font-weight:400;text-align:center;color:#504f4f}",""]),e.exports=r},351:function(e,r,t){"use strict";t.r(r);t(25),t(24),t(14),t(39),t(37);var n=t(4),d=t(38),c=t.n(d),o=t(192),w={fetch:function(e){var r=e.store;return c.a.get("https://api.github.com/repos/stacsnssce/webdata/contents/awards").then(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return data=t.data,e.t0=r,e.next=4,Promise.all(data.map(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(element){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.get(element.download_url).then((function(e){var r=o(e.data);return{attribute:r.attributes,desc:element.sha,body:r.body,id:element.name.slice(0,-3)}}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()));case 4:e.t1=e.sent,e.t0.commit.call(e.t0,"Awards",e.t1);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}())},computed:{awards:function(){return this.$store.state.awards}},head:function(){return{title:"Awards - STACS - NSS College of Engineering",meta:[{hid:"description",name:"description",content:"The Students Association of Computer Science (STACS) recognises the achievements of students and appreciate them for gaining the awards through their efforts and talents "}]}}},l=(t(260),t(10)),component=Object(l.a)(w,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("section",{staticClass:"wrapper container"},[t("h1",{staticClass:"award-title center-align"},[e._v("\n    Achievements\n  ")]),e._v(" "),t("div",{staticClass:"container award-card"},[t("div",{staticClass:"row"},e._l(e.awards.slice().reverse(),(function(r){return t("div",{key:r.id,staticClass:"col l4 m6 s12"},[t("div",{staticClass:"card small"},[t("nuxt-link",{attrs:{to:{name:"awards-desc",params:{desc:r.desc,id:r.id}}}},[t("div",{staticClass:"card-image"},[t("progressive-img",{staticClass:"award-image center-align",attrs:{src:""+r.attribute.cover,placeholder:"/imageplaceholder800x500.png",blur:"30",delay:"200"}})],1),e._v(" "),t("div",{staticClass:"card-content"},[t("h5",[t("b",[e._v(e._s(r.attribute.title))])])])])],1)])})),0)])])}),[],!1,null,"0f700ae7",null);r.default=component.exports}}]);