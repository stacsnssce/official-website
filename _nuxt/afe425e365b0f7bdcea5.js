(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{205:function(t,e,r){var content=r(269);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("4fd8db60",content,!0,{sourceMap:!1})},206:function(t,e,r){var content=r(271);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("90f3bcec",content,!0,{sourceMap:!1})},268:function(t,e,r){"use strict";var n=r(205);r.n(n).a},269:function(t,e,r){(e=r(22)(!1)).push([t.i,".contributor-img,.contributor-img img{width:225px!important;height:225px!important}.contributor-img img{-o-object-fit:cover;object-fit:cover}",""]),t.exports=e},270:function(t,e,r){"use strict";var n=r(206);r.n(n).a},271:function(t,e,r){(e=r(22)(!1)).push([t.i,"h4[data-v-54193d4d]{font-size:32px;font:bolder 40px/43px Source Sans Pro}.card-panel[data-v-54193d4d]{height:400px}.text[data-v-54193d4d]{font-weight:700;font-size:16px}.middle[data-v-54193d4d],.text[data-v-54193d4d]{text-align:center}.middle[data-v-54193d4d]{position:absolute;font-size:28px;overflow:hidden}.git[data-v-54193d4d]{color:#211f1f}",""]),t.exports=e},354:function(t,e,r){"use strict";r.r(e);r(37);var n=r(4),o=r(38),c=r.n(o),l={fetch:function(t){var e=t.store;return c.a.get("https://api.github.com/repos/stacsnssce/official-website/stats/contributors").then(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:data=r.data,e.commit("Contributors",data);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).then((function(){}))},computed:{contributors:function(){return this.$store.state.contributors}},head:function(){return{title:"Contributors - STACS Website"}}},d=(r(268),r(270),r(10)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[t._m(0),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("div",{staticClass:"row"},t._l(t.contributors.slice().reverse(),(function(e){return r("section",{key:e.author.id},[r("div",{staticClass:"col s12 m4 l4"},[r("div",{staticClass:"card-panel hoverable"},[r("div",{staticClass:"card-image center-align"},[r("progressive-img",{staticClass:"contributor-img circle responsive-image",attrs:{src:""+(e.author.avatar_url||"/profilepic.png"),placeholder:"/imageplaceholder1x1.png",alt:""+e.author.login,blur:30}})],1),t._v(" "),r("div",{staticClass:"card-content center-align text"},[e.author.login?r("p",{staticStyle:{"font-size":"20px"}},[t._v("\n              "+t._s(e.author.login)+"\n            ")]):r("p",{staticStyle:{"font-size":"20px"}},[t._v("\n              "+t._s(e.attribute.login)+"\n            ")]),t._v(" "),r("a",{attrs:{href:e.author.html_url}},[t._v("\n              View Profile\n              "),r("i",{staticClass:"fa fa-github git circle"})]),t._v("\n             \n          ")])])])])})),0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"center-align"},[e("h4",[this._v("Our Contributors")])])}],!1,null,"54193d4d",null);e.default=component.exports}}]);