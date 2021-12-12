/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{473:function(t,r){var e={utf8:{stringToBytes:function(t){return e.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(e.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var r=[],i=0;i<t.length;i++)r.push(255&t.charCodeAt(i));return r},bytesToString:function(t){for(var r=[],i=0;i<t.length;i++)r.push(String.fromCharCode(t[i]));return r.join("")}}};t.exports=e},495:function(t,r,e){var o,n,c,d,l;o=e(496),n=e(473).utf8,c=e(497),d=e(473).bin,(l=function(t,r){t.constructor==String?t=r&&"binary"===r.encoding?d.stringToBytes(t):n.stringToBytes(t):c(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||t.constructor===Uint8Array||(t=t.toString());for(var e=o.bytesToWords(t),f=8*t.length,a=1732584193,b=-271733879,m=-1732584194,v=271733878,i=0;i<e.length;i++)e[i]=16711935&(e[i]<<8|e[i]>>>24)|4278255360&(e[i]<<24|e[i]>>>8);e[f>>>5]|=128<<f%32,e[14+(f+64>>>9<<4)]=f;var h=l._ff,w=l._gg,W=l._hh,x=l._ii;for(i=0;i<e.length;i+=16){var k=a,y=b,L=m,dd=v;a=h(a,b,m,v,e[i+0],7,-680876936),v=h(v,a,b,m,e[i+1],12,-389564586),m=h(m,v,a,b,e[i+2],17,606105819),b=h(b,m,v,a,e[i+3],22,-1044525330),a=h(a,b,m,v,e[i+4],7,-176418897),v=h(v,a,b,m,e[i+5],12,1200080426),m=h(m,v,a,b,e[i+6],17,-1473231341),b=h(b,m,v,a,e[i+7],22,-45705983),a=h(a,b,m,v,e[i+8],7,1770035416),v=h(v,a,b,m,e[i+9],12,-1958414417),m=h(m,v,a,b,e[i+10],17,-42063),b=h(b,m,v,a,e[i+11],22,-1990404162),a=h(a,b,m,v,e[i+12],7,1804603682),v=h(v,a,b,m,e[i+13],12,-40341101),m=h(m,v,a,b,e[i+14],17,-1502002290),a=w(a,b=h(b,m,v,a,e[i+15],22,1236535329),m,v,e[i+1],5,-165796510),v=w(v,a,b,m,e[i+6],9,-1069501632),m=w(m,v,a,b,e[i+11],14,643717713),b=w(b,m,v,a,e[i+0],20,-373897302),a=w(a,b,m,v,e[i+5],5,-701558691),v=w(v,a,b,m,e[i+10],9,38016083),m=w(m,v,a,b,e[i+15],14,-660478335),b=w(b,m,v,a,e[i+4],20,-405537848),a=w(a,b,m,v,e[i+9],5,568446438),v=w(v,a,b,m,e[i+14],9,-1019803690),m=w(m,v,a,b,e[i+3],14,-187363961),b=w(b,m,v,a,e[i+8],20,1163531501),a=w(a,b,m,v,e[i+13],5,-1444681467),v=w(v,a,b,m,e[i+2],9,-51403784),m=w(m,v,a,b,e[i+7],14,1735328473),a=W(a,b=w(b,m,v,a,e[i+12],20,-1926607734),m,v,e[i+5],4,-378558),v=W(v,a,b,m,e[i+8],11,-2022574463),m=W(m,v,a,b,e[i+11],16,1839030562),b=W(b,m,v,a,e[i+14],23,-35309556),a=W(a,b,m,v,e[i+1],4,-1530992060),v=W(v,a,b,m,e[i+4],11,1272893353),m=W(m,v,a,b,e[i+7],16,-155497632),b=W(b,m,v,a,e[i+10],23,-1094730640),a=W(a,b,m,v,e[i+13],4,681279174),v=W(v,a,b,m,e[i+0],11,-358537222),m=W(m,v,a,b,e[i+3],16,-722521979),b=W(b,m,v,a,e[i+6],23,76029189),a=W(a,b,m,v,e[i+9],4,-640364487),v=W(v,a,b,m,e[i+12],11,-421815835),m=W(m,v,a,b,e[i+15],16,530742520),a=x(a,b=W(b,m,v,a,e[i+2],23,-995338651),m,v,e[i+0],6,-198630844),v=x(v,a,b,m,e[i+7],10,1126891415),m=x(m,v,a,b,e[i+14],15,-1416354905),b=x(b,m,v,a,e[i+5],21,-57434055),a=x(a,b,m,v,e[i+12],6,1700485571),v=x(v,a,b,m,e[i+3],10,-1894986606),m=x(m,v,a,b,e[i+10],15,-1051523),b=x(b,m,v,a,e[i+1],21,-2054922799),a=x(a,b,m,v,e[i+8],6,1873313359),v=x(v,a,b,m,e[i+15],10,-30611744),m=x(m,v,a,b,e[i+6],15,-1560198380),b=x(b,m,v,a,e[i+13],21,1309151649),a=x(a,b,m,v,e[i+4],6,-145523070),v=x(v,a,b,m,e[i+11],10,-1120210379),m=x(m,v,a,b,e[i+2],15,718787259),b=x(b,m,v,a,e[i+9],21,-343485551),a=a+k>>>0,b=b+y>>>0,m=m+L>>>0,v=v+dd>>>0}return o.endian([a,b,m,v])})._ff=function(a,b,t,r,e,s,o){var n=a+(b&t|~b&r)+(e>>>0)+o;return(n<<s|n>>>32-s)+b},l._gg=function(a,b,t,r,e,s,o){var n=a+(b&r|t&~r)+(e>>>0)+o;return(n<<s|n>>>32-s)+b},l._hh=function(a,b,t,r,e,s,o){var n=a+(b^t^r)+(e>>>0)+o;return(n<<s|n>>>32-s)+b},l._ii=function(a,b,t,r,e,s,o){var n=a+(t^(b|~r))+(e>>>0)+o;return(n<<s|n>>>32-s)+b},l._blocksize=16,l._digestsize=16,t.exports=function(t,r){if(null==t)throw new Error("Illegal argument "+t);var e=o.wordsToBytes(l(t,r));return r&&r.asBytes?e:r&&r.asString?d.bytesToString(e):o.bytesToHex(e)}},496:function(t,r){var e,o;e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o={rotl:function(t,b){return t<<b|t>>>32-b},rotr:function(t,b){return t<<32-b|t>>>b},endian:function(t){if(t.constructor==Number)return 16711935&o.rotl(t,8)|4278255360&o.rotl(t,24);for(var i=0;i<t.length;i++)t[i]=o.endian(t[i]);return t},randomBytes:function(t){for(var r=[];t>0;t--)r.push(Math.floor(256*Math.random()));return r},bytesToWords:function(t){for(var r=[],i=0,b=0;i<t.length;i++,b+=8)r[b>>>5]|=t[i]<<24-b%32;return r},wordsToBytes:function(t){for(var r=[],b=0;b<32*t.length;b+=8)r.push(t[b>>>5]>>>24-b%32&255);return r},bytesToHex:function(t){for(var r=[],i=0;i<t.length;i++)r.push((t[i]>>>4).toString(16)),r.push((15&t[i]).toString(16));return r.join("")},hexToBytes:function(t){for(var r=[],e=0;e<t.length;e+=2)r.push(parseInt(t.substr(e,2),16));return r},bytesToBase64:function(t){for(var r=[],i=0;i<t.length;i+=3)for(var o=t[i]<<16|t[i+1]<<8|t[i+2],n=0;n<4;n++)8*i+6*n<=8*t.length?r.push(e.charAt(o>>>6*(3-n)&63)):r.push("=");return r.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var r=[],i=0,o=0;i<t.length;o=++i%4)0!=o&&r.push((e.indexOf(t.charAt(i-1))&Math.pow(2,-2*o+8)-1)<<2*o|e.indexOf(t.charAt(i))>>>6-2*o);return r}},t.exports=o},497:function(t,r){function e(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}t.exports=function(t){return null!=t&&(e(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&e(t.slice(0,0))}(t)||!!t._isBuffer)}},498:function(t,r,e){var content=e(617);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(4).default)("4b5065e8",content,!0,{sourceMap:!1})},532:function(t,r,e){t.exports=e.p+"img/2bacfb8.png"},614:function(t,r,e){t.exports=e.p+"img/28e33c6.png"},615:function(t,r,e){t.exports=e.p+"img/32a1861.png"},616:function(t,r,e){"use strict";var o=e(498);e.n(o).a},617:function(t,r,e){(t.exports=e(3)(!1)).push([t.i,".LoginWrap[data-v-3bf7dbea]{display:-webkit-box;display:flex;height:100vh;min-height:35rem;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;background:#eee;background-size:500% 500%;-webkit-transition:background 3s ease;transition:background 3s ease;background-position:50% 50%;font-family:Josefin Sans,sans-serif}@media (min-width:768px){.LoginWrap .content[data-v-3bf7dbea]{max-width:720px}.LoginWrap .cardWrap[data-v-3bf7dbea]{max-width:450px}}@media (min-width:576px){.LoginWrap .content[data-v-3bf7dbea]{max-width:540px}}@-webkit-keyframes InfoaAnimation-data-v-3bf7dbea{0%{-webkit-transform:scale(0);transform:scale(0)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes InfoaAnimation-data-v-3bf7dbea{0%{-webkit-transform:scale(0);transform:scale(0)}to{-webkit-transform:scale(1);transform:scale(1)}}.LoginWrap .ErrorWrap[data-v-3bf7dbea]{padding:1px 15px;background-color:#fff;box-shadow:0 1px 6px rgba(0,0,0,.2);box-shadow:1px;border-radius:30px;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;position:absolute;top:20px;-webkit-animation:InfoaAnimation-data-v-3bf7dbea .2s;animation:InfoaAnimation-data-v-3bf7dbea .2s}.LoginWrap .ErrorWrap img[data-v-3bf7dbea]{margin-left:5px;-webkit-transform:scale(.8);transform:scale(.8)}.LoginWrap .ErrorWrap span[data-v-3bf7dbea]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:14px;color:#000}.LoginWrap .ErrorWrap span.error[data-v-3bf7dbea]{color:red}.LoginWrap .content[data-v-3bf7dbea]{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.LoginWrap .content .cardWrap[data-v-3bf7dbea]{position:relative;margin:0 auto}.LoginWrap .content .cardWrap .card[data-v-3bf7dbea]{position:absolute;top:50%;left:50%;width:100%;padding-top:1rem;padding-bottom:1rem;-webkit-transition:all .2s ease-out .1s;transition:all .2s ease-out .1s;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,.125);border-radius:.25rem}.LoginWrap .content .cardWrap .card[data-v-3bf7dbea],.LoginWrap .content .cardWrap .card .card-body[data-v-3bf7dbea]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal}.LoginWrap .content .cardWrap .card .card-body[data-v-3bf7dbea]{flex-direction:column;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;text-align:center;-webkit-box-flex:1;flex:1 1 auto;padding:1.25rem}.LoginWrap .content .cardWrap .card .card-body h1[data-v-3bf7dbea]{color:#222831}.LoginWrap .content .cardWrap .card .card-body .card-title[data-v-3bf7dbea],.LoginWrap .content .cardWrap .card .card-body h1[data-v-3bf7dbea],.LoginWrap .content .cardWrap .card .card-body p[data-v-3bf7dbea]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.LoginWrap .content .cardWrap .card .card-body .card-title[data-v-3bf7dbea]{margin-bottom:.75rem;font-weight:700;font-size:1.8rem}.LoginWrap .content .cardWrap .card .card-body .card-message[data-v-3bf7dbea]{font-size:13px}.LoginWrap .content .cardWrap .card .card-body .form-wrap[data-v-3bf7dbea]{margin-top:10px}.LoginWrap .content .cardWrap .card .card-body .form-wrap .form-group[data-v-3bf7dbea]{margin-bottom:1rem}.LoginWrap .content .cardWrap .card .card-body .form-wrap .form-group .form-control[data-v-3bf7dbea]{display:block;width:100%;height:calc(2.25rem + 2px);padding:.375rem .75rem;font-size:1rem;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;-webkit-transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}.LoginWrap .content .cardWrap .card .card-body .form-wrap .form-group .form-control[data-v-3bf7dbea]:focus{outline:0}.LoginWrap .content .cardWrap .card .btn-wrap[data-v-3bf7dbea]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.LoginWrap .content .cardWrap .card .btn-wrap .btn[data-v-3bf7dbea]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;font-size:1rem;display:inline-block;font-weight:400;color:#000;width:10em;border-radius:20px;border:2px solid transparent;text-align:center;white-space:nowrap;vertical-align:middle;padding:10px 20px;margin:6px 0;-webkit-transition:.3s;transition:.3s}.LoginWrap .content .cardWrap .card .btn-wrap .btnRegiste[data-v-3bf7dbea]{margin-top:15px;background-color:rgba(57,62,70,.25098)}.LoginWrap .content .cardWrap .card .btn-wrap .btnRegiste[data-v-3bf7dbea]:hover{background-color:#eee;-webkit-transform:translateY(-4px);transform:translateY(-4px);box-shadow:0 .375em 1.5em -.375em rgba(0,0,0,.4)}.LoginWrap .content .cardWrap .card .btn-wrap .btnLogin[data-v-3bf7dbea]{background-color:rgba(57,62,70,.8);color:#fff}.LoginWrap .content .cardWrap .card .btn-wrap .btnLogin[data-v-3bf7dbea]:hover{background-color:#393e46;color:#fff;-webkit-transform:translateY(-2px);transform:translateY(-2px);box-shadow:0 .375em 1.5em -.375em rgba(0,0,0,.4)}.LoginWrap .content .cardWrap .card[data-v-3bf7dbea]:not(.isShow){opacity:0;-webkit-transform:translate(-50%,-50%) rotateX(95deg);transform:translate(-50%,-50%) rotateX(95deg)}.LoginWrap .content .cardWrap .CardRegiste .form-control[data-v-3bf7dbea]{border-color:rgba(57,62,70,.25098)}.LoginWrap .content .cardWrap .CardRegiste .form-control[data-v-3bf7dbea]:focus{box-shadow:0 0 0 .2rem rgba(57,62,70,.25098)}.LoginWrap .content .cardWrap .CardRegiste .btnRegiste[data-v-3bf7dbea]{color:#495057;width:10em;outline:none;cursor:pointer;-webkit-transition:all .4s;transition:all .4s;border-radius:20px;border:2px solid transparent;padding:.5rem 1rem;font-size:1.25rem;line-height:1.5}.LoginWrap .content .cardWrap .CardRegiste .btnRegiste[data-v-3bf7dbea]:hover{background-color:#fff;color:#000!important;font-weight:700;border:2px solid #000}.LoginWrap .content .cardWrap .CardRegiste .btn-back[data-v-3bf7dbea]{cursor:pointer;position:absolute;top:0;left:0;border-radius:0;width:3rem;height:3rem;font-size:1.5rem;border:0;background-color:#eee;outline:none;-webkit-transition:.4s;transition:.4s}.LoginWrap .content .cardWrap .CardRegiste .btn-back[data-v-3bf7dbea]:hover{background-color:#fff;color:#000;font-weight:700}.LoginWrap .content .cardWrap .CardRegiste .btn-back .RegisterIcon[data-v-3bf7dbea]{color:#495057;font-weight:700}.LoginWrap .content .cardWrap .CardLogin .form-control[data-v-3bf7dbea]{border-color:#393e46}.LoginWrap .content .cardWrap .CardLogin .form-control[data-v-3bf7dbea]:focus{box-shadow:0 0 0 .15rem #393e46}.LoginWrap .content .cardWrap .CardLogin .btnLogin[data-v-3bf7dbea]{background-color:rgba(57,62,70,.8);color:#fff;width:10em;outline:none;cursor:pointer;-webkit-transition:all .4s;transition:all .4s;border-radius:20px;border:2px solid transparent;padding:.5rem 1rem;font-size:1.25rem;line-height:1.5}.LoginWrap .content .cardWrap .CardLogin .btnLogin[data-v-3bf7dbea]:hover{background-color:#fff;color:#000!important;font-weight:700;border:2px solid rgba(57,62,70,.8)}.LoginWrap .content .cardWrap .CardLogin .btn-back[data-v-3bf7dbea]{cursor:pointer;position:absolute;top:0;left:0;border-radius:0;width:3rem;height:3rem;font-size:1.5rem;border:0;background-color:rgba(57,62,70,.8);outline:none;-webkit-transition:.4s;transition:.4s}.LoginWrap .content .cardWrap .CardLogin .btn-back[data-v-3bf7dbea]:hover{background-color:#fff;font-weight:700}.LoginWrap .content .cardWrap .CardLogin .btn-back:hover>.LoginIcon[data-v-3bf7dbea]{color:#000}.LoginWrap .content .cardWrap .CardLogin .btn-back .LoginIcon[data-v-3bf7dbea]{color:#fff;font-weight:700}.LoginWrap .content .cardWrap .shadow[data-v-3bf7dbea]{box-shadow:0 .5rem 1rem rgba(0,0,0,.15)!important}.LoginWrap .content .cardWrap .Noborder[data-v-3bf7dbea]{border:0!important}.LoginWrap .content .cardWrap .card.isShow[data-v-3bf7dbea]{opacity:1;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:5}.LoginWrap.isRegister[data-v-3bf7dbea]{background-position:100% 100%}.LoginWrap.isLogin[data-v-3bf7dbea]{background-position:0 100%}",""])},665:function(t,r,e){"use strict";e.r(r);e(46),e(24),e(20),e(12),e(37),e(48),e(78);var o=e(9),n=e(104),c=e(38),d=e(495),l=e.n(d);function f(object,t){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),r.push.apply(r,e)}return r}var m={layout:"login",data:function(){return{WelcomeVisible:!0,RegisterVisible:!1,LoginVisible:!1,username:"",password:"",name:"",showInf:!1,InfText:"",InfImg:"",error:!1}},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(source,!0).forEach((function(r){Object(o.a)(t,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(source).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(source,r))}))}return t}({},Object(c.b)({bindLogin:"login/handleUserLogin"}),{ShowRegister:function(){this.WelcomeVisible=!1,this.RegisterVisible=!0,this.LoginVisible=!1},ShowLogin:function(){this.WelcomeVisible=!1,this.RegisterVisible=!1,this.LoginVisible=!0},showWelcome:function(){this.WelcomeVisible=!0,this.RegisterVisible=!1,this.LoginVisible=!1,this.username="",this.password="",this.name=""},LoginUser:function(t){var r=this;t.preventDefault(),this.bindLogin({username:this.username,password:l()(this.password)}).then((function(t){if(200===t.code){var o=t.data.userInfo.name;r.InfImg=e(614),r.InfText="欢迎回来, ".concat(o),r.showInf=!0,r.$router.replace("/"),setTimeout((function(){r.showInf=!1}),2e3)}else r.InfImg=e(532),r.InfText="账号或者密码错误",r.error=!0,r.showInf=!0,setTimeout((function(){r.showInf=!1,r.error=!1}),2e3)}))},RegisterUser:function(t){var r=this;t.preventDefault(),Object(n.b)({username:this.username,password:l()(this.password),name:this.name}).then((function(t){200===t.code?(r.InfImg=e(615),r.InfText="注册成功,去登陆吧",r.showInf=!0,r.ShowLogin(),setTimeout((function(){r.showInf=!1}),2e3)):(r.InfImg=e(532),r.InfText=t.msg,r.error=!0,r.showInf=!0)})).catch((function(t){r.$Message.error("网络出现异常",t)}))}})},v=(e(616),e(5)),component=Object(v.a)(m,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticStyle:{height:"100%"}},[e("div",{staticClass:"LoginWrap",class:{isRegister:t.RegisterVisible,isLogin:t.LoginVisible}},[e("div",{staticClass:"content"},[e("div",{staticClass:"cardWrap"},[e("div",{staticClass:"card shadow Noborder CardWelcome",class:{isShow:t.WelcomeVisible}},[e("div",{staticClass:"card-body"},[e("h1",{staticClass:"card-title"},[t._v("遥近")]),t._v(" "),e("p",{staticClass:"card-message"},[t._v("不一样博客平台")]),t._v(" "),e("div",{staticClass:"btn-wrap"},[e("a",{staticClass:"btn btnRegiste js-btn",attrs:{"data-target":"register"},on:{click:t.ShowRegister}},[t._v("注册")]),t._v(" "),e("a",{staticClass:"btn btnLogin js-btn",attrs:{"data-target":"login"},on:{click:t.ShowLogin}},[t._v("登录")])])])]),t._v(" "),e("div",{staticClass:"card shadow Noborder CardRegiste",class:{isShow:t.RegisterVisible}},[e("div",{staticClass:"card-body"},[e("h2",{staticClass:"card-title"},[t._v("注册新用户")]),t._v(" "),e("p",{staticClass:"card-message"},[t._v("\n              欢迎你的到来，点赞、评价是对我最大的鼓励\n            ")]),t._v(" "),e("form",{staticClass:"form-wrap"},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"名称",required:"required",oninvalid:"setCustomValidity('名称不能为空')",oninput:"setCustomValidity('')"},domProps:{value:t.name},on:{input:function(r){r.target.composing||(t.name=r.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",placeholder:"账号",required:"required",oninvalid:"setCustomValidity('账号不能为空')",oninput:"setCustomValidity('')"},domProps:{value:t.username},on:{input:function(r){r.target.composing||(t.username=r.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"密码",required:"required",oninvalid:"setCustomValidity('密码不能为空')",oninput:"setCustomValidity('')"},domProps:{value:t.password},on:{input:function(r){r.target.composing||(t.password=r.target.value)}}})]),t._v(" "),e("button",{staticClass:"btn btnRegiste",on:{click:t.RegisterUser}},[t._v("\n                注册\n              ")])])]),t._v(" "),e("button",{staticClass:"btn-back",on:{click:t.showWelcome}},[e("Icon",{staticClass:"RegisterIcon",attrs:{type:"ios-arrow-back"}})],1)]),t._v(" "),e("div",{staticClass:"card shadow Noborder CardLogin",class:{isShow:t.LoginVisible}},[e("div",{staticClass:"card-body"},[e("h2",{staticClass:"card-title"},[t._v("登录账号")]),t._v(" "),e("p",{staticClass:"card-message"},[t._v("有你的贡献博客将会更强大")]),t._v(" "),e("form",{staticClass:"form-wrap"},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",placeholder:"账号",required:"required",nullmsg:"用户名不能为空"},domProps:{value:t.username},on:{input:function(r){r.target.composing||(t.username=r.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"密码",required:"required",nullmsg:"密码不能为空"},domProps:{value:t.password},on:{input:function(r){r.target.composing||(t.password=r.target.value)}}})]),t._v(" "),e("button",{staticClass:"btn btnLogin",on:{click:t.LoginUser}},[t._v("登录")])])]),t._v(" "),e("button",{staticClass:"btn-back",on:{click:t.showWelcome}},[e("Icon",{staticClass:"LoginIcon",attrs:{type:"ios-arrow-back"}})],1)])])]),t._v(" "),t.showInf?e("div",{staticClass:"ErrorWrap"},[e("span",{class:{error:t.error}},[t._v(t._s(t.InfText))]),t._v(" "),e("img",{attrs:{src:t.InfImg}})]):t._e()])])}),[],!1,null,"3bf7dbea",null);r.default=component.exports}}]);