exports.ids=[7],exports.modules={128:function(t,e,r){var content=r(162);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var d=r(4).default;t.exports.__inject__=function(t){d("704cfca2",content,!0,t)}},161:function(t,e,r){"use strict";r.r(e);var d=r(128),o=r.n(d);for(var n in d)"default"!==n&&function(t){r.d(e,t,(function(){return d[t]}))}(n);e.default=o.a},162:function(t,e,r){(t.exports=r(3)(!1)).push([t.i,".ArticleWrap[data-v-7b4d1e71]{padding:20px;background:#fff;margin:40px auto}.ArticleWrap .authorInfo[data-v-7b4d1e71]{display:flex}.ArticleWrap .authorInfo img[data-v-7b4d1e71]{width:50px;height:50px;border-radius:50%}.ArticleWrap .authorInfo .otherInfo[data-v-7b4d1e71]{text-align:left;margin-left:10px;flex-direction:column;display:flex;align-items:flex-start}.ArticleWrap .content[data-v-7b4d1e71]{margin-top:20px}.ArticleWrap .content .markdown-body[data-v-7b4d1e71]{z-index:0;border:none}",""])},181:function(t,e,r){"use strict";r.r(e);var article=r(28),d={layout:"blog",async asyncData({params:t,error:e}){try{const{data:data}=await Object(article.c)({id:t.id});return{detail:data}}catch(t){e({statusCode:404,message:"文章不存在"})}}},o=r(1);var component=Object(o.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ArticleWrap"},[t._ssrNode('<div class="ArticleDetail" data-v-7b4d1e71>',"</div>",[t._ssrNode('<h1 style="color: black; textAlign: center" data-v-7b4d1e71>'+t._ssrEscape(t._s(t.detail.title))+"</h1> "),t._ssrNode('<div class="authorInfo" data-v-7b4d1e71>',"</div>",[r("nuxt-link",{attrs:{to:"/home/"+t.detail.user_info.id}},[r("img",{attrs:{src:t.detail.user_info.avatar}})]),t._ssrNode(' <div class="otherInfo" data-v-7b4d1e71><p data-v-7b4d1e71>'+t._ssrEscape(t._s(t.detail.user_info.name))+"</p> <span data-v-7b4d1e71>"+t._ssrEscape(t._s(t._f("dateFormat")(t.detail.created)))+"</span></div>")],2),t._ssrNode(" "),t._ssrNode('<div class="content" data-v-7b4d1e71>',"</div>",[r("no-ssr",[r("mavon-editor",{ref:"md",staticClass:"mavonEditor",attrs:{toolbarsFlag:!1,subfield:!1,defaultOpen:"preview",boxShadow:!1,previewBackground:"#fff"},model:{value:t.detail.source,callback:function(e){t.$set(t.detail,"source",e)},expression:"detail.source"}})],1)],1)],2)])}),[],!1,(function(t){var e=r(161);e.__inject__&&e.__inject__(t)}),"7b4d1e71","78f628ec");e.default=component.exports}};