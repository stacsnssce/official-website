(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{214:function(t,e,n){var content=n(336);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("ab0818f6",content,!0,{sourceMap:!1})},335:function(t,e,n){"use strict";var r=n(214);n.n(r).a},336:function(t,e,n){(e=n(22)(!1)).push([t.i,".description{box-sizing:border-box;min-width:200px;margin:0 auto;padding:45px;border-left:1px solid #eaecef;border-right:1px solid #eaecef;border-bottom:1px solid #eaecef}.description h1{text-align:center;font-size:2em;font-weight:700}.description p{justify-content:center;text-align:justify;display:flex}.description img{max-width:100%}",""]),t.exports=e},358:function(t,e,n){"use strict";n.r(e);n(37);var r=n(4),o=n(38),c=n.n(o),d=n(192),l=n(198)({html:!0,typographer:!0}),f={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.params,!(r=t.payload)){e.next=5;break}return e.abrupt("return",{title:r.title,content:r.body});case 5:return e.next=7,c.a.get("https://raw.githubusercontent.com/stacsnssce/webdata/master/activities/".concat(n.id,".md")).then((function(t){var e=d(t.data);return{title:e.attributes,content:l.render(e.body)}}));case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))()},data:function(){return{activity:{}}}},h=(n(335),n(10)),component=Object(h.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"container"},[this._v("\n    "+this._s()+"\n    "),e("div",{staticClass:"description",domProps:{innerHTML:this._s(this.content)}})])])}),[],!1,null,null,null);e.default=component.exports}}]);