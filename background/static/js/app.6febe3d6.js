(function(e){function t(t){for(var a,r,o=t[0],l=t[1],c=t[2],u=0,p=[];u<o.length;u++)r=o[u],i[r]&&p.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,r=1;r<n.length;r++){var l=n[r];0!==i[l]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},i={app:0},s=[];function r(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"1258fee5"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n=i[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,a){n=i[e]=[t,a]});t.push(n[2]=a);var s,l=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=r(e),s=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src,r=new Error("Loading chunk "+e+" failed.\n("+a+": "+s+")");r.type=a,r.request=s,n[1](r)}i[e]=void 0}};var u=setTimeout(function(){s({type:"timeout",target:c})},12e4);c.onerror=c.onload=s,l.appendChild(c)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("04f5"),i=n.n(a);i.a},"04f5":function(e,t,n){},"0c35":function(e,t,n){},1396:function(e,t,n){"use strict";var a=n("948e"),i=n.n(a);i.a},"1aae":function(e,t,n){},2700:function(e,t,n){},3616:function(e,t,n){"use strict";var a=n("2700"),i=n.n(a);i.a},"392a":function(e,t,n){"use strict";var a=n("5a1b"),i=n.n(a);i.a},"475e":function(e,t,n){"use strict";var a=n("0c35"),i=n.n(a);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":e.activeIndex,mode:"horizontal"},on:{select:e.handleSelect}},[n("el-menu-item",{attrs:{index:"1"}},[e._v("数据管理")]),n("el-menu-item",{attrs:{index:"2"}},[e._v("相似图片")]),n("el-menu-item",{attrs:{index:"3"}},[e._v("图片识别")]),n("el-menu-item",{attrs:{index:"4"}},[e._v("About")])],1),n("router-view")],1)},s=[],r={data:function(){return{activeIndex:"1"}},methods:{handleSelect:function(e){switch(console.log(e),e){case"1":this.$router.push("/DataManage");break;case"2":this.$router.push("/SearchLike");break;case"3":this.$router.push("/Identify");break;case"4":this.$router.push("/About");break}}}},o=r,l=(n("034f"),n("2877")),c=Object(l["a"])(o,i,s,!1,null,null,null),u=c.exports,d=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("ChooseList")],1)},f=[],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",{directives:[{name:"show",rawName:"v-show",value:0==e.pics.length,expression:"pics.length==0"}],staticClass:"hint"},[e._v("此处显示图片墙")]),e._l(e.pics,function(t,a){return n("div",{key:t,staticClass:"picwall-wrapper",on:{click:function(t){e.preview(a)}}},[n("img",{staticClass:"picwall-img",attrs:{src:t}})])}),n("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],2)},m=[],v={name:"PicWall",props:{pics:{type:Array,default:function(){return[]}}},data:function(){return{dialogVisible:!1,dialogImageUrl:""}},methods:{preview:function(e){this.dialogImageUrl=this.pics[e],this.dialogVisible=!0}}},g=v,b=(n("3616"),Object(l["a"])(g,h,m,!1,null,null,null)),w=b.exports,y={name:"home",components:{ChooseList:w}},x=y,C=Object(l["a"])(x,p,f,!1,null,null,null),_=C.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",{staticStyle:{height:"100%"}},[n("el-col",{staticClass:"class-picker",attrs:{span:6}},[n("div",[n("choose-list",{attrs:{data:e.classes,currentRow:e.currentClassIndex,name:"图片类别"},on:{"update:currentRow":function(t){e.currentClassIndex=t},delete:e.deleteClass}}),n("el-button",{staticClass:"add-button",attrs:{type:"success"}},[e._v("New Type"),n("em",[e._v("(Not Implement)")])])],1)]),n("el-col",{staticClass:"img-picker",attrs:{span:6}},[n("div",[n("choose-list",{attrs:{data:e.pictures,currentRow:e.currentPicIndex,name:"图片列表"},on:{"update:currentRow":function(t){e.currentPicIndex=t},delete:e.deletePic}}),n("el-button",{staticClass:"add-button",attrs:{type:"success"},on:{click:e.handleNewPicture}},[e._v("New Picture")])],1)]),n("el-col",{staticClass:"preview",attrs:{span:12}},[n("transition",{attrs:{name:"el-fade-in-linear"}},[e.preview?n("div",{staticStyle:{height:"100%"}},[n("preview",{staticClass:"preview-inner",attrs:{activeIndex:e.currentPicIndex,data:e.picUrls},on:{"update:activeIndex":function(t){e.currentPicIndex=t}}}),n("div",{staticStyle:{"margin-top":"50px"}},[n("el-button",{attrs:{type:"success",icon:"el-icon-edit"}},[e._v("Rename"),n("em",[e._v("(Not Implement)")])]),n("el-button",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:function(t){e.deletePic(e.currentPicIndex)}}},[e._v("Delete")])],1)],1):e._e()]),n("transition",{attrs:{name:"el-fade-in-linear"}},[e.uploading?n("div",[n("h2",[e._v('点击"+"以上传'+e._s(e.classes[e.currentClassIndex])+"的图片")]),n("up-loader",{staticClass:"uploader",attrs:{"auto-upload":!1,filelist:e.uploadList,"upload-url":e.uploadUrl},on:{"update:filelist":function(t){e.uploadList=t},remove:e.handleRemove}}),n("el-button",{staticClass:"add-button",attrs:{type:"success",icon:"el-icon-upload"},on:{click:e.upload}},[e._v("Upload")]),n("el-button",{staticClass:"add-button",attrs:{type:"danger",icon:"el-icon-cancle"},on:{click:e.handleCancleUpload}},[e._v("Cancle")])],1):e._e()])],1)],1)},L=[],k=(n("7f7f"),n("ac6a"),n("456d"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"cell title"},[e._v("\r\n    "+e._s(e.name)+"\r\n  ")]),e._l(e.data,function(t,a){return n("div",{key:t,staticClass:"cell item",class:{deep:e.isSelected(a)},on:{click:function(t){e.handleCurrentChange(a)},mouseover:function(t){e.handleMouseEnter(a)},mouseout:function(t){e.handleMouseLeave(a)}}},[n("div",[e._v("\r\n      "+e._s(t)+"\r\n      "),n("i",{directives:[{name:"show",rawName:"v-show",value:a==e.currentRow,expression:"index == currentRow"}],staticClass:"el-icon-arrow-right",staticStyle:{float:"right"}})]),n("transition",{attrs:{name:"el-zoom-in-top"}},[n("el-button",{directives:[{name:"show",rawName:"v-show",value:a==e.currentHoverRow&&a!=e.currentRow,expression:"index == currentHoverRow && index != currentRow"}],staticClass:"del-button",attrs:{size:"mini",type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(n){e.handleDelete(a,t)}}})],1)],1)})],2)}),I=[],P=(n("c5f6"),{props:{name:{type:String,default:"姓名"},data:{type:Array,default:function(){return["Tom","Amy","Jerry","Katalina"]}},currentRow:{type:Number}},data:function(){return{currentHoverRow:null,deleting:!1}},methods:{isSelected:function(e){return e==this.currentRow},handleCurrentChange:function(e){this.deleting?this.deleting=!1:this.$emit("update:currentRow",e)},handleDelete:function(e,t){this.deleting=!0,this.$emit("delete",e)},handleMouseEnter:function(e){this.currentHoverRow=e},handleMouseLeave:function(e){this.currentHoverRow=null}}}),U=P,j=(n("ee0c"),Object(l["a"])(U,k,I,!1,null,null,null)),E=j.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-carousel",{ref:"preview",attrs:{"indicator-position":"outside",autoplay:!1,height:"100%"},on:{change:e.onChange}},e._l(e.data,function(e,t){return n("el-carousel-item",{key:e+t},[n("img",{attrs:{width:"100%",height:"100%",src:e,alt:"ERROR!"}})])}))},R=[],S={name:"PreviewWindow",props:{data:{type:Array,default:function(){return["./static/dataset/puppy/2bddefa2-1687-38e2-9fd1-733cacdf1b93.jpg","./static/dataset/bird/3ab7163b-9578-3fa2-bcd0-d8eb4899.jpg","./static/dataset/car/7cacafca-b776-39c0-894e-ff97fba67190.jpg"]}},activeIndex:{type:Number,default:0}},data:function(){return{}},watch:{activeIndex:function(e){this.$refs.preview.setActiveItem(e)}},methods:{onChange:function(e){this.$emit("update:activeIndex",e)}}},D=S,T=(n("773a"),Object(l["a"])(D,O,R,!1,null,null,null)),M=T.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-upload",{ref:"upload",attrs:{"file-list":e.filelist,"on-change":e.change,action:e.uploadUrl,limit:e.limit,"list-type":"picture-card",data:e.otherData,"on-exceed":e.onExceed,"on-preview":e.handlePictureCardPreview,"on-remove":e.handleRemove,"auto-upload":e.autoUpload}},[n("i",{staticClass:"el-icon-plus"})]),n("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1)},V=[],A={name:"UpLoader",props:["otherData","uploadUrl","filelist","limit","onExceed","autoUpload"],data:function(){return{dialogImageUrl:"",dialogVisible:!1}},methods:{handleRemove:function(e,t){this.$emit("remove",e,t)},handlePictureCardPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0},change:function(e,t){this.$emit("update:filelist",t)}}},B=A,H=Object(l["a"])(B,N,V,!1,null,null,null),W=H.exports,z=window.bus=new a["default"]({data:function(){return{host:"http://127.0.0.1:8888"}}}),F={name:"DataManage",components:{ChooseList:E,Preview:M,UpLoader:W},mounted:function(){this.getListData()},data:function(){return{uploadList:[],uploadUrl:z.host+"/upload",preview:!0,uploading:!1,data:{dog:[{name:"dog1",url:"./static/dataset/puppy/2bddefa2-1687-38e2-9fd1-733cacdf1b93.jpg"},{url:"./static/dataset/puppy/2bddefa2-1687-38e2-9fd1-733cacdf1b93.jpg"},{name:"dog3",url:"./static/dataset/puppy/2bddefa2-1687-38e2-9fd1-733cacdf1b93.jpg"},{name:"dog4",url:"./static/dataset/puppy/2bddefa2-1687-38e2-9fd1-733cacdf1b93.jpg"}],cat:[],bird:[],tiger:[]},currentClassIndex:0,currentPicIndex:0}},watch:{currentPicIndex:function(e){console.log(this.data[this.currentClass][this.currentPicIndex].url),this.preview=!0,this.uploading=!1},currentClassIndex:function(e){this.uploadList=[]}},computed:{currentClass:function(){return this.classes[this.currentClassIndex]},classes:function(){return Object.keys(this.data)},pictures:function(){var e=this.data[this.currentClass];return e.map(function(e){var t=e.url,n=t.lastIndexOf("/"),a=t.substring(n+1);return e.name?e.name:a})},picUrls:function(){var e=this.data[this.currentClass];return e.map(function(e){return e.url})}},methods:{upload:function(){var e=this;this.uploadList.forEach(function(t){var n=new FormData;n.append("file",t.raw,t.name),n.append("class",e.currentClass),e.$axios.post(z.host+"/upload",n,{headers:{"Content-Type":"multipart/form-data"}}).then(function(){e.$message({type:"success",message:"上传成功!"}),e.getListData(),e.uploadList=[]})})},getListData:function(){var e=this;this.$axios.get(z.host+"/piclist").then(function(t){e.data=t.data}).catch(console.log)},handleRemove:function(e){this.pictures.indexOf(e.name)},onChangePreview:function(e){this.currentPicIndex=e},handleNewPicture:function(){this.uploading=!0,this.preview=!1},handleCancleUpload:function(){this.uploading=!1,this.preview=!0},deletePic:function(e){var t=this;this.$confirm("此操作将永久删除该图片, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$axios.delete(z.host+"/pic?url="+t.picUrls[e]).then(function(){t.$message({type:"success",message:"删除成功!"}),t.getListData()}).catch(function(e){t.$message({type:"error",message:"删除失败!"}),t.getListData()})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},deleteClass:function(e){var t=this;this.$confirm("此操作将永久删除该类所有图片, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$axios.delete(z.host+"/class?class="+t.classes[e]).then(function(){t.$message({type:"success",message:"删除成功!"}),t.getListData()}).catch(function(e){t.$message({type:"error",message:"删除失败!"}),t.getListData()})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})}}},J=F,q=(n("1396"),Object(l["a"])(J,$,L,!1,null,null,null)),K=q.exports,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-row",{staticStyle:{"text-align":"left"}},[n("h1",{staticClass:"hint"},[e._v("0.0")])]),n("el-row",[n("el-col",{staticStyle:{height:"100%","border-right":"solid 1px #e6e6e6"},attrs:{span:10}},[n("div",{staticClass:"upload-likepic"},[n("up-loader",{attrs:{filelist:e.fileList,"auto-upload":!1,limit:1,"on-exceed":e.onExceed,"upload-url":e.searchUrl},on:{"update:filelist":function(t){e.fileList=t}}}),n("el-button",{staticClass:"add-button",attrs:{type:"success",icon:"el-icon-upload"},on:{click:e.upload}},[e._v("Upload")])],1)]),n("el-col",{attrs:{span:14}},[n("div",{staticClass:"show-like"},[n("pic-wall",{attrs:{pics:e.pics}})],1)])],1)],1)},Q=[],X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"2"},on:{open:e.handleOpen,close:e.handleClose}},[n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-location"}),n("span",[e._v("puppy")])]),n("el-menu-item",{attrs:{index:"1-1"}},[e._v("puppy1")]),n("el-menu-item",{attrs:{index:"1-2"}},[e._v("puppy2")]),n("el-menu-item",{attrs:{index:"1-3"}},[e._v("puppy3")])],2)],1)},Y=[],Z={name:"ChooseTree",props:{},data:function(){return{}},methods:{handleOpen:function(e,t){console.log(e,t)},handleClose:function(e,t){console.log(e,t)}}},ee=Z,te=(n("392a"),Object(l["a"])(ee,X,Y,!1,null,null,null)),ne=te.exports,ae={name:"SearchLike",components:{ChooseTree:ne,PicWall:w,UpLoader:W},data:function(){return{fileList:[],dialogImageUrl:"",dialogVisible:!1,searchUrl:bus.host+"/searchlike",pics:[]}},methods:{onExceed:function(){this.$message({type:"error",message:"只能查找一个图片!"})},upload:function(){var e=this;this.fileList.forEach(function(t){var n=new FormData;n.append("file",t.raw,t.name),n.append("class",e.currentClass),e.$axios.post(bus.host+"/searchlike",n,{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){e.$message({type:"success",message:"上传成功!"}),e.pics=t.data,e.fileList=[]})})}}},ie=ae,se=(n("867b"),Object(l["a"])(ie,G,Q,!1,null,null,null)),re=se.exports,oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-row",{staticStyle:{"text-align":"left"}},[n("h1",{staticClass:"hint"},[e._v("0.0")])]),n("el-row",[n("el-col",{staticStyle:{height:"100%","border-right":"solid 1px #e6e6e6"},attrs:{span:10}},[n("div",{staticClass:"upload-likepic"},[n("up-loader",{attrs:{filelist:e.fileList,"auto-upload":!1,limit:1,"on-exceed":e.onExceed,"upload-url":e.searchUrl},on:{"update:filelist":function(t){e.fileList=t}}}),n("el-button",{staticClass:"add-button",attrs:{type:"success",icon:"el-icon-upload"},on:{click:e.upload}},[e._v("Upload")])],1)]),n("el-col",{attrs:{span:14}},[n("div",{staticClass:"show-like"},[""==e.result?n("h2",{staticClass:"hint"},[e._v("此处显示识别结果")]):n("h2",[e._v("这张图片是一个"+e._s(e.result))])])])],1)],1)},le=[],ce=(n("28a5"),{name:"SearchLike",components:{ChooseTree:ne,PicWall:w,UpLoader:W},data:function(){return{fileList:[],dialogImageUrl:"",dialogVisible:!1,searchUrl:bus.host+"/searchlike",result:""}},methods:{onExceed:function(){this.$message({type:"error",message:"只能查找一个图片!"})},upload:function(){var e=this;this.fileList.forEach(function(t){var n=new FormData;n.append("file",t.raw,t.name),n.append("class",e.currentClass),e.$axios.post(bus.host+"/searchlike",n,{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){e.$message({type:"success",message:"上传成功!"});var n=t.data[0];console.log(n),e.fileList=[],e.result=n.split("/")[2]})})}}}),ue=ce,de=(n("475e"),Object(l["a"])(ue,oe,le,!1,null,null,null)),pe=de.exports;a["default"].use(d["a"]);var fe=new d["a"]({routes:[{path:"/",name:"home",component:_},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/DataManage",name:"dataManage",component:K},{path:"/SearchLike",name:"SearchLike",component:re},{path:"/Identify",name:pe,component:pe}]}),he=n("bc3a"),me=n.n(he),ve=n("5c96"),ge=n.n(ve);n("0fae");a["default"].use(ge.a),a["default"].prototype.$axios=me.a,a["default"].config.productionTip=!1,new a["default"]({router:fe,render:function(e){return e(u)}}).$mount("#app")},"5a1b":function(e,t,n){},"773a":function(e,t,n){"use strict";var a=n("c79d"),i=n.n(a);i.a},"867b":function(e,t,n){"use strict";var a=n("a929"),i=n.n(a);i.a},"948e":function(e,t,n){},a929:function(e,t,n){},c79d:function(e,t,n){},ee0c:function(e,t,n){"use strict";var a=n("1aae"),i=n.n(a);i.a}});
//# sourceMappingURL=app.6febe3d6.js.map