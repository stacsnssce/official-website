(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{330:function(t,n,e){"use strict";e.r(n);e(37);var r=e(5),c=e(38),o=e.n(c),d=e(192),l=e(206)({html:!0,typographer:!0}),h={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function n(){var e,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=t.params,!(r=t.payload)){n.next=5;break}return n.abrupt("return",{title:r.title,content:r.body});case 5:return n.next=7,o.a.get("https://raw.githubusercontent.com/stacsnssce/webdata/master/posts/".concat(e.id,".md")).then((function(t){var n=d(t.data);return{title:n.attributes,content:l.render(n.body)}}));case 7:return n.abrupt("return",n.sent);case 8:case"end":return n.stop()}}),n)})))()},data:function(){return{content:""}}},f=e(10),component=Object(f.a)(h,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("div",{staticClass:"container"},[this._v("\n    "+this._s()+"\n    "),n("div",{domProps:{innerHTML:this._s(this.content)}})])])}),[],!1,null,null,null);n.default=component.exports}}]);