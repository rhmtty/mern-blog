(this["webpackJsonpmern-blog"]=this["webpackJsonpmern-blog"]||[]).push([[0],{25:function(e,t,a){e.exports=a.p+"static/media/registerBG.e93b0547.jpg"},26:function(e,t,a){e.exports=a.p+"static/media/loginBG.0f013031.jpg"},27:function(e,t,a){e.exports=a.p+"static/media/facebook.7efd3b80.svg"},28:function(e,t,a){e.exports=a.p+"static/media/instagram.e99a71c6.svg"},29:function(e,t,a){e.exports=a.p+"static/media/github.76d344f0.svg"},30:function(e,t,a){e.exports=a.p+"static/media/telegram.4c49693b.svg"},41:function(e,t,a){e.exports=a(84)},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(17),r=a.n(l),o=(a(46),a(47),a(9)),i=a(2),m=a(14),s=a(15),u=(a(48),["label"]),p=function(e){var t=e.label,a=Object(s.a)(e,u);return c.a.createElement("div",{className:"input-wrapper"},c.a.createElement("p",{className:"label"},t),c.a.createElement("input",Object.assign({className:"input"},a)))},g=(a(49),["title"]),d=function(e){var t=e.title,a=Object(s.a)(e,g);return c.a.createElement("button",Object.assign({className:"button"},a),t)},E=function(e){var t=e.width,a=e.height;return c.a.createElement("div",{style:{width:t,height:a}})},h=(a(50),function(e){var t=e.title,a=e.onClick;return c.a.createElement("p",{className:"link",onClick:a},t)}),f=(a(51),["img"]),b=function(e){var t=e.img,a=Object(s.a)(e,f);return c.a.createElement("div",{className:"upload"},t&&c.a.createElement("img",{className:"preview",src:t,alt:"preview"}),c.a.createElement("input",Object.assign({type:"file"},a)))},v=(a(52),function(e){var t=Object.assign({},e);return c.a.createElement("div",null,c.a.createElement("textarea",Object.assign({className:"text-area"},t)))}),O=(a(53),function(){var e=Object(i.f)();return c.a.createElement("div",{className:"header"},c.a.createElement("p",{className:"logo-app",onClick:function(){return e.push("/")}},"KOPI SOB-Blog"),c.a.createElement("p",{className:"menu-item",onClick:function(){return e.push("/login")}},"Logout"))}),N=a(25),k=a.n(N),j=a(26),y=a.n(j),w=a(27),P=a.n(w),C=a(28),A=a.n(C),_=a(29),B=a.n(_),T=a(30),D=a.n(T),R=(a(59),function(e){var t=e.img;return c.a.createElement("div",{className:"icon-wrapper"},c.a.createElement("img",{className:"icon-medsos",src:t,alt:"icon"}))}),S=function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"footer"},c.a.createElement("div",null,c.a.createElement("h3",{className:"logo"},"KOPI SOB")),c.a.createElement("div",{className:"social-wrapper"},c.a.createElement(R,{img:P.a}),c.a.createElement(R,{img:A.a}),c.a.createElement(R,{img:D.a}),c.a.createElement(R,{img:B.a}))),c.a.createElement("div",{className:"copyright"},c.a.createElement("p",null,"Copyright \xa9 2020 - KOPI SOB")))},x=(a(60),function(e){var t=Object(i.f)(),a=e.image,n=e.title,l=e.name,r=e.date,o=e.body,m=e._id,s=e.onDelete;return c.a.createElement("div",{className:"blog-item"},c.a.createElement("img",{className:"image-thumb",src:a,alt:"post"}),c.a.createElement("div",{className:"content-detail"},c.a.createElement("div",{className:"title-wrapper"},c.a.createElement("p",{className:"title"},n),c.a.createElement("div",{className:"edit-wrapper"},c.a.createElement("p",{className:"edit",onClick:function(){return t.push("/create-blog/".concat(m))}},"Edit")," | ",c.a.createElement("p",{className:"delete",onClick:function(){return s(m)}},"Delete"))),c.a.createElement("p",{className:"author"},l," - ",r),c.a.createElement("p",{className:"body"},o),c.a.createElement(h,{title:"Lihat Detail",onClick:function(){return t.push("/detail-blog/".concat(m))}})))}),U=(a(61),a(11)),G=a(10),I=a.n(G),L=function(e){return function(t){I.a.get("https://kopisob-api.herokuapp.com/v1/blog/posts?page=".concat(e,"&perPage=2"),{headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Content-Type, Authorization"}}).then((function(e){var a=e.data;t({type:"UPDATE_DATA_BLOG",payload:a.data}),t({type:"UPDATE_PAGE",payload:{currentPage:a.current_page,totalPage:Math.ceil(a.total_data/a.per_page)}})})).catch((function(e){console.log("error: ".concat(e))}))}},M=function(e,t){return{type:"SET_FORM_DATA",formType:e,formValue:t}},F=function(e){return{type:"SET_IMG_PREVIEW",payload:e}},K=a(39),V=(a(79),a(16)),W=function(){var e=Object(n.useState)(1),t=Object(m.a)(e,2),a=t[0],l=t[1],r=Object(U.c)((function(e){return e.homeReducer})),o=r.dataBlog,s=r.page,u=Object(U.b)();Object(n.useEffect)((function(){u(L(a))}),[a,u]);var p=Object(i.f)(),g=function(e){Object(K.confirmAlert)({title:"Confirm to delete",message:"Apakah Anda yakin menghapus post ini?.",buttons:[{label:"Ya",onClick:function(){I.a.delete("https://kopisob-api.herokuapp.com/v1/blog/post/".concat(e)).then((function(e){console.log("delete success ",e.data),h("Data berhasil di hapus"),u(L(a))})).catch((function(e){console.log("err ",e)}))}},{label:"Tidak",onClick:function(){return console.log("user tidak setuju")}}]})},h=function(e){return V.b.success(e,{duration:3e3})};return c.a.createElement("div",{className:"home-page-wrapper"},c.a.createElement("div",{className:"create-wrapper"},c.a.createElement(d,{title:"create blog",onClick:function(){return p.push("/create-blog")}})),c.a.createElement(E,{height:20}),c.a.createElement("div",{className:"content-wrapper"},o.map((function(e){return c.a.createElement(x,{key:e._id,image:"https://kopisob-api.herokuapp.com/".concat(e.image),title:e.title,name:e.author.name,date:e.createdAt,body:e.body,_id:e._id,onDelete:g})}))),c.a.createElement("div",{className:"pagination"},c.a.createElement(d,{title:"previous",onClick:function(){l(a<=1?1:a-1)}}),c.a.createElement(E,{width:20}),c.a.createElement("p",{className:"text-page"},s.currentPage," / ",s.totalPage),c.a.createElement(E,{width:20}),c.a.createElement(d,{title:"next",onClick:function(){l(a===s.totalPage?s.totalPage:a+1)}})),c.a.createElement(E,{height:20}),c.a.createElement(V.a,null))},J=function(){var e=Object(i.f)();return c.a.createElement("div",{className:"main-page"},c.a.createElement("div",{className:"left"},c.a.createElement("p",{className:"title"},"Login"),c.a.createElement(p,{label:"Email",placeholder:"Email"}),c.a.createElement(E,{height:20}),c.a.createElement(p,{label:"Password",placeholder:"Password"}),c.a.createElement(E,{height:50}),c.a.createElement(d,{title:"login",onClick:function(){return e.push("/create-blog")}}),c.a.createElement(E,{height:35}),c.a.createElement(h,{title:"Belum punya akun? daftar sekarang",onClick:function(){return e.push("/register")}})),c.a.createElement("div",{className:"right"},c.a.createElement("img",{src:y.a,className:"bg-image",alt:"imageBg"})))},Y=(a(80),function(){var e=Object(i.f)();return c.a.createElement("div",{className:"main-page"},c.a.createElement("div",{className:"left"},c.a.createElement("p",{className:"title"},"Register"),c.a.createElement(p,{label:"Full Name",placeholder:"Full Name"}),c.a.createElement(E,{height:20}),c.a.createElement(p,{label:"Email",placeholder:"Email"}),c.a.createElement(E,{height:20}),c.a.createElement(p,{label:"Password",placeholder:"Password"}),c.a.createElement(E,{height:50}),c.a.createElement(d,{title:"Register",onClick:function(){return e.push("/login")}}),c.a.createElement(E,{height:35}),c.a.createElement(h,{title:"Kembali ke halaman login",onClick:function(){return e.push("/login")}})),c.a.createElement("div",{className:"right"},c.a.createElement("img",{src:k.a,className:"bg-image",alt:"imageBg"})))}),z=(a(81),Object(i.g)((function(e){var t=Object(U.c)((function(e){return e.createBlogReducer})),a=t.form,l=t.imgPreview,r=a.title,o=a.body,s=Object(n.useState)(!1),u=Object(m.a)(s,2),g=u[0],f=u[1],O=Object(U.b)(),N=Object(i.f)();Object(n.useEffect)((function(){var t=e.match.params.id;t&&(f(!0),I.a.get("https://kopisob-api.herokuapp.com/v1/blog/post/".concat(t)).then((function(e){var t=e.data.data;console.log("res: ",t),O(M("title",t.title)),O(M("body",t.body)),O(F("https://kopisob-api.herokuapp.com/".concat(t.image)))})).catch((function(e){console.log("err: ",e)})))}),[e,O]);var k=function(e){return V.b.success(e,{duration:3e3})};return c.a.createElement("div",{className:"blog-post"},c.a.createElement(h,{title:"kembali",onClick:function(){return N.push("/")}}),c.a.createElement("p",{className:"title"},g?"Update":"Create New"," Blog Post"),c.a.createElement(p,{label:"Post Title",value:r,onChange:function(e){return O(M("title",e.target.value))}}),c.a.createElement(b,{onChange:function(e){return function(e){var t=e.target.files[0];O(M("image",t)),O(F(URL.createObjectURL(t)))}(e)},img:l}),c.a.createElement(v,{value:o,onChange:function(e){return O(M("body",e.target.value))}}),c.a.createElement(E,{height:20}),c.a.createElement("div",{className:"button-action"},c.a.createElement(d,{title:g?"Update":"Simpan",onClick:function(){var t=e.match.params.id;g?(console.log("update data"),function(e,t){var a=new FormData;a.append("title",e.title),a.append("body",e.body),a.append("image",e.image),I.a.put("https://kopisob-api.herokuapp.com/v1/blog/post/".concat(t),a,{headers:{"content-type":"multipart/form-data"}}).then((function(e){console.log("update success: ",e)})).catch((function(e){console.log("err: ",e)}))}(a,t),k("Data sukses di update.")):(console.log("create data"),function(e){var t=new FormData;t.append("title",e.title),t.append("body",e.body),t.append("image",e.image),I.a.post("https://kopisob-api.herokuapp.com/v1/blog/post",t,{headers:{"content-type":"multipart/form-data"}}).then((function(e){console.log("post success: ",e)})).catch((function(e){console.log("err: ",e)}))}(a),k("Data sukses di tambah."))}})),c.a.createElement(E,{height:60}),c.a.createElement(V.a,null))}))),H=(a(82),Object(i.g)((function(e){var t=Object(n.useState)({}),a=Object(m.a)(t,2),l=a[0],r=a[1];Object(n.useEffect)((function(){var t=e.match.params.id;I.a.get("https://kopisob-api.herokuapp.com/v1/blog/post/".concat(t)).then((function(e){console.log("success: ",e),r(e.data.data)})).catch((function(e){console.log("err: ",e)}))}),[e]);var o=Object(i.f)();return l.author?c.a.createElement("div",{className:"detail-blog-wrapper"},c.a.createElement("p",{className:"blog-title"},l.title),c.a.createElement("p",{className:"blog-author"},l.author.name," - ",l.createdAt),c.a.createElement("p",{className:"blog-body"},l.body),c.a.createElement(h,{title:"kembali ke home",onClick:function(){return o.push("/")}})):c.a.createElement("p",null,"Loading data...")}))),$=(a(83),function(){return c.a.createElement("div",{className:"main-app-wrapper"},c.a.createElement(O,null),c.a.createElement("div",{className:"content-wrapper"},c.a.createElement(o.a,null,c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/create-blog/:id?"},c.a.createElement(z,null)),c.a.createElement(i.a,{path:"/detail-blog/:id"},c.a.createElement(H,null)),c.a.createElement(i.a,{path:"/"},c.a.createElement(W,null))))),c.a.createElement(S,null))}),q=function(){return c.a.createElement(o.a,null,c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/register"},c.a.createElement(Y,null)),c.a.createElement(i.a,{path:"/login"},c.a.createElement(J,null)),c.a.createElement(i.a,{path:"/"},c.a.createElement($,null))))},Q=a(19),X=a(40),Z=a(3),ee={name:"Rhmt"},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;return"UPDATE_NAME"===t.type?Object(Z.a)(Object(Z.a)({},e),{},{name:"TY"}):e},ae={dataBlog:[],page:{currentPage:1,perPage:1}},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;return"UPDATE_DATA_BLOG"===t.type?Object(Z.a)(Object(Z.a)({},e),{},{dataBlog:t.payload}):"UPDATE_PAGE"===t.type?Object(Z.a)(Object(Z.a)({},e),{},{page:t.payload}):e},ce=a(13),le={form:{title:"",body:"",image:""},imgPreview:null},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;return"SET_FORM_DATA"===t.type?Object(Z.a)(Object(Z.a)({},e),{},{form:Object(Z.a)(Object(Z.a)({},e.form),{},Object(ce.a)({},t.formType,t.formValue))}):"SET_IMG_PREVIEW"===t.type?Object(Z.a)(Object(Z.a)({},e),{},{imgPreview:t.payload}):e},oe=Object(Q.b)({homeReducer:ne,globalReducer:te,createBlogReducer:re}),ie=Object(Q.c)(oe,Object(Q.a)(X.a));var me=function(){return c.a.createElement(U.a,{store:ie},c.a.createElement(q,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.b7fbc3f0.chunk.js.map