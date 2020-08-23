module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=8)}([function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat["utils/string"]},,function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["components/DiscussionPage"]},function(t,e){t.exports=flarum.core.compat["components/Modal"]},function(t,e,r){"use strict";var n=r(7).htmlEscape;t.exports=function(t,e){if("string"!=typeof t)throw new TypeError("Expected a `string` in the first argument, got `"+typeof t+"`");if("object"!=typeof e)throw new TypeError("Expected an `object` or `Array` in the second argument, got `"+typeof e+"`");var r=/{{(.*?)}}/g;r.test(t)&&(t=t.replace(r,(function(t,r){var o=e,i=r.split("."),a=Array.isArray(i),s=0;for(i=a?i:i[Symbol.iterator]();;){var c;if(a){if(s>=i.length)break;c=i[s++]}else{if((s=i.next()).done)break;c=s.value}o=o?o[c]:""}return n(String(o))})));return t.replace(/{(.*?)}/g,(function(t,r){var n=e,o=r.split("."),i=Array.isArray(o),a=0;for(o=i?o:o[Symbol.iterator]();;){var s;if(i){if(a>=o.length)break;s=o[a++]}else{if((a=o.next()).done)break;s=a.value}n=n?n[s]:""}return String(n)}))}},function(t,e,r){"use strict";e.htmlEscape=function(t){return t.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},e.htmlUnescape=function(t){return t.replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&#0?39;/g,"'").replace(/&quot;/g,'"').replace(/&amp;/g,"&")},e.htmlEscapeTag=function(t){for(var r=t[0],n=0;n<(arguments.length<=1?0:arguments.length-1);n++)r=r+e.htmlEscape(String(n+1<1||arguments.length<=n+1?void 0:arguments[n+1]))+t[n+1];return r},e.htmlUnescapeTag=function(t){for(var r=t[0],n=0;n<(arguments.length<=1?0:arguments.length-1);n++)r=r+e.htmlUnescape(String(n+1<1||arguments.length<=n+1?void 0:arguments[n+1]))+t[n+1];return r}},function(t,e,r){"use strict";r.r(e);var n=r(3),o=r(4),i=r.n(o),a=r(0),s=r.n(a);var c=r(5),l=r.n(c),u=r(1),p=r(6),f=r.n(p),d={facebook:"//facebook.com/sharer/sharer.php?u={url}",twitter:"//twitter.com/share?url={url}&text={title}",linkedin:"//linkedin.com/shareArticle?mini=true&url={url}&title={title}&summary={description}",reddit:"//www.reddit.com/submit?url={url}&title={title}",whatsapp:"//wa.me/?text={title}%20{url}",vkontakte:"//vk.com/share.php?url={url}&title={title}&description={description}",odnoklassniki:"//connect.ok.ru/offer?url={url}",my_mail:"//connect.mail.ru/share?url={url}&title={title}&description={description}",qq:"//connect.qq.com/widget/shareqq/iframe_index.html?url={url}&title={title}",qzone:"//sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={url}&summary={description}&title={title}"},h={vkontakte:"fab fa-vk",my_mail:"fas fa-at",qq:"fab fa-qq",qzone:"fas fa-star"},g=function(t){var e,r;function n(){return t.apply(this,arguments)||this}r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var o=n.prototype;return o.init=function(){t.prototype.init.call(this),this.networks=this.props.networks,this.discussion=this.props.discussion},o.className=function(){return"FofShareSocialModal Modal--small"},o.title=function(){return app.translator.trans("fof-share-social.forum.modal.title")},o.content=function(){var t={url:encodeURIComponent(app.forum.attribute("baseUrl")+app.route("discussion",{id:this.discussion.id()})),title:encodeURIComponent(app.title),description:this.discussion.firstPost()?encodeURIComponent(Object(u.truncate)(Object(u.getPlainContent)(this.discussion.firstPost().contentHtml()),150,0)):""},e="width=1000, height= 500, top="+($(window).height()/2-250)+", left="+($(window).width()/2-500)+", status=no, scrollbars=no, resizable=no";return m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},m("div",{className:"Form-group"},this.networks.map((function(r){return s.a.component({className:"Button Button--rounded Button--block Share--"+r,icon:(h[r]||"fab fa-"+r)+" fa-lg fa-fw",children:app.translator.trans("fof-share-social.lib.networks."+r),onclick:function(){return window.open(f()(d[r],t),app.title,e)}})})))))},n}(l.a);app.initializers.add("fof/share-social",(function(){Object(n.extend)(i.a.prototype,"sidebarItems",(function(t){var e=this,r=Object.keys(app.data).filter((function(t){return t.startsWith("fof-share-social.networks.")&&Number(app.data[t])})).map((function(t){return t.replace("fof-share-social.networks.","")}));r.length&&t.add("share-social",s.a.component({className:"Button Button-icon Button--share",icon:"fas fa-share-alt",children:app.translator.trans("fof-share-social.forum.discussion.share_button"),onclick:function(){return app.modal.show(new g({networks:r,discussion:e.discussion}))}}),-1)}))}))}]);
//# sourceMappingURL=forum.js.map