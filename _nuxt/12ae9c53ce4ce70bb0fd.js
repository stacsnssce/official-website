(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{205:function(t,r,e){var content=e(269);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(23).default)("4fd8db60",content,!0,{sourceMap:!1})},206:function(t,r,e){var content=e(271);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(23).default)("6b1aa2d9",content,!0,{sourceMap:!1})},268:function(t,r,e){"use strict";var n=e(205);e.n(n).a},269:function(t,r,e){(r=e(22)(!1)).push([t.i,".contributor-img{min-height:50px!important;min-width:50px!important;width:100%!important;transition:transform .2s}.contributor-img img{width:100%;min-height:50px;-o-object-fit:cover;object-fit:cover;-webkit-filter:grayscale(90%);filter:grayscale(90%)}.contributor-img:hover{transform:scale(1.2);z-index:5}.contributor-img:hover img{-webkit-filter:none;filter:none}",""]),t.exports=r},270:function(t,r,e){"use strict";var n=e(206);e.n(n).a},271:function(t,r,e){(r=e(22)(!1)).push([t.i,"h4[data-v-281d6466]{font-size:32px;font:bolder 40px/43px Source Sans Pro}.text[data-v-281d6466]{font-weight:700;font-size:16px}.middle[data-v-281d6466],.text[data-v-281d6466]{text-align:center}.middle[data-v-281d6466]{position:absolute;font-size:28px;overflow:hidden}.git[data-v-281d6466]{color:#211f1f}",""]),t.exports=r},354:function(t,r,e){"use strict";e.r(r);e(37);var n=e(4),o=e(38),c=e.n(o),l={fetch:function(t){return Object(n.a)(regeneratorRuntime.mark((function r(){var e;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=t.store,r.next=3,c.a.get("https://api.github.com/repos/stacsnssce/official-website/contributors").then(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:data=r.data,e.commit("Contributors",data);case 2:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}());case 3:return r.abrupt("return",r.sent);case 4:case"end":return r.stop()}}),r)})))()},computed:{contributors:function(){return this.$store.state.contributors}},head:function(){return{title:"Contributors - STACS Website"}}},f=(e(268),e(270),e(10)),component=Object(f.a)(l,(function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"container"},[this._m(0),this._v(" "),r("br"),this._v(" "),r("br"),this._v(" "),r("div",{staticClass:"row"},this._l(this.contributors,(function(t){return r("section",{key:t.id},[r("a",{attrs:{href:t.html_url}},[r("div",{staticClass:"col s3 m2 l2"},[r("div",{staticClass:"card-image center-align"},[r("progressive-img",{staticClass:"contributor-img circle responsive-image",attrs:{src:""+(t.avatar_url||"/profilepic.png"),placeholder:"/profilepic.png",alt:""+t.login,blur:30}})],1)])])])})),0)])}),[function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"center-align"},[r("h4",[this._v("Contributors")])])}],!1,null,"281d6466",null);r.default=component.exports}}]);