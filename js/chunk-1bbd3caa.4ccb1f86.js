(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1bbd3caa","chunk-2d225df0"],{7880:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",[n("mt",[e._v(e._s(e.language[e.$options.name]))]),n("div",{staticClass:"margin1vw",staticStyle:{height:"80%"}},[n("UiPageTable",{ref:"newTable",attrs:{tableData:e.dataList,TableConfig:e.TableConfig,PageConfig:e.PageConfig,DataConfig:a("e5f0").default()},on:{clickPage:e.clickPage,select:e.selectTable}})],1)],1)},i=[],s={mixins:[a("a496").default],name:"tableBasicUsage",data:function(){return{TableConfig:{border:!0,stripe:!0,highlight:!0,single:!0,disabled:!1,button:{value:"state",display:"show",list:[{text:"add",type:"primary",value:[1]},{text:"success",type:"success",value:[1,2]},{text:"warning",type:"warning",value:[1,3]},{text:"delete",type:"danger",value:[2,3]}]}},page:1,pageSize:30,total:0,dataList:[{username:123,email:456,state:1},{username:123,email:456,state:2},{username:123,email:456,state:3},{username:123,email:456,state:4}],selectTableItem:{}}},components:{UiPageTable:function(){return a.e("chunk-2d224900").then(a.bind(null,"e153"))}},props:{},computed:{PageConfig:function(){return{total:this.total,size:this.pageSize}}},watch:{},methods:{clickPage:function(e,t){this.page=e,this.pageSize=t,this.getRequest()},selectTable:function(e){this.selectTableItem=e.length>0?this.$avoid(e[0]):{}},getRequest:function(){var e=this,t=(this.userInfo.projectId,this.userInfo.userProject);this.get("/zone/1231321/".concat(t),{}).then(function(t){var a=t.Data;e.List=a})},postRequest:function(){var e=this;this.userInfo.projectId,this.userInfo.userProject;this.post("/auth/login",{}).then(function(t){var a=t.Data;e.List=a})}},mounted:function(){}},l=s,u=a("2877"),r=Object(u["a"])(l,n,i,!1,null,null,null);t["default"]=r.exports},e5f0:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return i});var n=a("c0d6");function i(){var e=n["a"].getters.getLanguage,t=[{width:"220",prop:"username",align:"right",label:e.userName,fixed:!0},{width:"220",prop:"email",align:"right",label:e.email,fixed:!0}];return t}}}]);