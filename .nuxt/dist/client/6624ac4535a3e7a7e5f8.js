(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{494:function(e,t,o){var content=o(616);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(4).default)("2aae2fd6",content,!0,{sourceMap:!1})},495:function(e,t,o){var content=o(618);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(4).default)("c0bad2a8",content,!0,{sourceMap:!1})},615:function(e,t,o){"use strict";var r=o(494);o.n(r).a},616:function(e,t,o){(e.exports=o(3)(!1)).push([e.i,".WriteWrap[data-v-030189cd]{padding-top:20px}.WriteWrap .ArticeTitle .title-input[data-v-030189cd]{margin:0;padding:0;font-size:32px;color:#000;border:none;outline:none;resize:none;overflow:hidden;width:100%;height:40px;background:#f6f7f8;text-align:center}.ArticleSet[data-v-030189cd]{padding:20px 0;text-align:right}.ArticleSet .issue[data-v-030189cd]{background:#e2e6ea;border-color:#e2e6ea;font-size:16px}.mask[data-v-030189cd]{position:fixed;left:0;top:0;right:0;bottom:0;z-index:9999;background-color:rgba(55,55,55,.6)}",""])},617:function(e,t,o){"use strict";var r=o(495);o.n(r).a},618:function(e,t,o){(e.exports=o(3)(!1)).push([e.i,".mavonEditor{width:100%;height:100%;padding-top:30px}.mavonEditor .v-note-wrapper{z-index:0;min-height:500px;max-height:500px}.mavonEditor ::v-deep.hljs span{font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace!important}.upload-img{background:#fff;border:1px dashed #dcdee2;border-radius:4px;text-align:center;cursor:pointer;position:relative;overflow:hidden;width:150px;height:150px;line-height:150px;background-repeat:no-repeat!important;background-size:cover!important}.ItemTitle{margin:10px 0}",""])},663:function(e,t,o){"use strict";o.r(t);o(77),o(24),o(20),o(11),o(45);var r=o(12),n=(o(46),o(37)),article=o(94),l=o(47),c=o(95);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}var h={layout:"blog",data:function(){return{baseUrl:"https://api.yjdzm.com",uploadType:["image/png","image/jpeg","image/jpg","image/gif"],coverUrl:"",draftId:"",source:"",content:"",isShow:!1,language:"Vue",title:"",toolbars:{bold:!0,italic:!0,header:!0,underline:!0,strikethrough:!0,mark:!0,superscript:!0,subscript:!0,quote:!0,ol:!0,ul:!0,link:!0,imagelink:!0,code:!0,table:!0,readmodel:!0,undo:!0,redo:!0,trash:!0,alignleft:!0,aligncenter:!0,alignright:!0,subfield:!0,preview:!0},loading:!1,SelectData:[{value:"Vue",label:"Vue"},{value:"React",label:"React"},{value:"JavaScript",label:"JavaScript"},{value:"小程序",label:"小程序"},{value:"移动端",label:"移动端"},{value:"Node",label:"Node"},{value:"TypeScript",label:"TypeScript"},{value:"Flutter",label:"Flutter"}]}},methods:{upLoadsuccess:function(e){this.loading=!1,200===e.code&&(this.coverUrl=e.data.url)},checkFile:function(e){if(this.loading=!0,!this.uploadType.some((function(t){return t===e.type&&e.size/1024/1024<=2})))return this.$Message.error("文件格式有误或过大"),this.loading=!1,!1},$imgAdd:function(e,t){var o=this,r=new FormData;r.append("file",t),Object(l.g)(r).then((function(t){200===t.code&&o.$refs.md.$img2Url(e,t.data.url)}))},setArticleDetail:function(){this.source&&this.title?this.isShow=!0:this.$Message.error("内容或者标题不能为空")},publish:function(e){var t=this;this.loading=!0;var o={source:this.source,content:this.content,category:this.language,title:this.title,status:e,cover:this.coverUrl};this.draftId?Object(article.j)({id:this.draftId},o).then((function(e){200===e.code&&(t.loading=!1),t.isShow=!1,t.$Message.success("修改成功"),t.$router.replace("/learn/article")})):Object(article.l)(o).then((function(o){200===o.code&&(t.loading=!1,t.isShow=!1,t.$Message.success("发布成功"),"online"===e?t.$router.replace("/learn/article"):t.$router.replace("/draft"))}))},changeValue:function(e,t){this.source=e,this.content=t}},components:{myButton:o(93).a,Modal:c.a},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(source,!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(source).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(n.c)({userInfo:function(e){return e.login.userInfo}}),{},Object(n.c)({UserToken:function(e){return e.login.UserToken}}),{header:function(){return{Authorization:"Bearer "+this.UserToken}}}),created:function(){var e=this;this.draftId=this.$route.query.draftId,this.draftId&&Object(article.f)({id:this.draftId},{isDraft:1}).then((function(t){200===t.code&&(e.source=t.data.source),e.title=t.data.title,e.language=t.data.category,e.content=t.data.content,e.status=t.data.status,e.coverUrl=t.data.cover}))},mounted:function(){this.UserToken||(this.$Message.error("需要登录才可以发布文章"),this.$router.replace("/login"))}},f=(o(615),o(617),o(5)),component=Object(f.a)(h,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"WriteWrap"},[o("div",{staticClass:"ArticeTitle"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],staticClass:"title-input",attrs:{placeholder:"输入标题...",spellcheck:"false",maxlength:"30",rows:"1"},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}})]),e._v(" "),o("div",{staticClass:"mavonEditor"},[o("client-only",[o("mavon-editor",{ref:"md",attrs:{placeholder:"目前仅支持MakeDown语法, 创作完成, 点击右下方按钮发布",toolbars:e.toolbars},on:{imgAdd:e.$imgAdd,change:e.changeValue},model:{value:e.source,callback:function(t){e.source=t},expression:"source"}})],1)],1),e._v(" "),o("div",{staticClass:"ArticleSet"},[o("myButton",{staticClass:"issue",attrs:{size:"large",type:"success"},on:{click:e.setArticleDetail}},[e._v("\n            发布文章\n        ")])],1),e._v(" "),o("Modal",{attrs:{visible:e.isShow,mask:!0,line:!0,title:"文章细节选择",okText:"确定发布",cancleText:"存草稿"},on:{onOk:function(t){e.isShow=!1},onCancle:function(t){e.isShow=!1}}},[o("p",{staticClass:"ItemTitle"},[e._v("选择文章分类")]),e._v(" "),o("Select",{staticStyle:{width:"200px"},model:{value:e.language,callback:function(t){e.language=t},expression:"language"}},e._l(e.SelectData,(function(t){return o("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])})),1),e._v(" "),o("p",{staticClass:"ItemTitle"},[e._v("文章封面")]),e._v(" "),o("Upload",{attrs:{action:e.baseUrl+"/upload",data:{dir:"cover/"},"show-upload-list":!1,"before-upload":e.checkFile,"on-success":e.upLoadsuccess,disabled:e.loading,headers:e.header,accept:""+e.uploadType.join(",")}},[o("div",{staticClass:"upload-img",style:{background:"url("+e.coverUrl+")"}})]),e._v(" "),o("template",{slot:"footer"},[o("myButton",{attrs:{loading:e.loading},on:{click:function(t){return e.publish("online")}}},[e._v("确定发布")]),e._v(" "),o("myButton",{attrs:{loading:e.loading},on:{click:function(t){return e.publish("draft")}}},[e._v("存草稿")])],1)],2)],1)}),[],!1,null,"030189cd",null);t.default=component.exports}}]);