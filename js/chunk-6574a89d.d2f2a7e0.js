(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6574a89d","chunk-2d22bcf2"],{"3fc8":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",[a("mt",[e._v(e._s(e.language[e.$options.name]))]),a("div",{staticClass:"margin1vw",staticStyle:{height:"80%"}},[e._v("\n    "+e._s(e.selectTableItem)+"\n    "),a("UiPageTable",{ref:"roleManagementTable",attrs:{tableData:e.dataList,TableConfig:e.TableConfig,PageConfig:e.PageConfig,DataConfig:n("f10a").default()},on:{clickPage:e.clickPage,select:e.selectTable}})],1)],1)},i=[],o={mixins:[n("a496").default],name:"roleManagement",data:function(){return{TableConfig:{border:!0,stripe:!0,highlight:!0,single:!0,disabled:!1},page:1,pageSize:30,total:0,dataList:[{rolename:"nnnnnnnnnnnnn"},{rolename:"nnnnnnn444444444"},{rolename:"n5555555555555"}],selectTableItem:{}}},components:{UiPageTable:function(){return n.e("chunk-2d224900").then(n.bind(null,"e153"))}},props:{},computed:{PageConfig:function(){return{total:this.total,size:this.pageSize}}},watch:{},methods:{clickPage:function(e,t){this.page=e,this.pageSize=t,this.getRequest()},selectTable:function(e){this.selectTableItem=e.length>0?this.$avoid(e[0]):{}},getRequest:function(){var e=this,t=(this.userInfo.projectId,this.userInfo.userProject);this.get("/zone/1231321/".concat(t),{}).then(function(t){var n=t.Data;e.List=n})},postRequest:function(){var e=this;this.userInfo.projectId,this.userInfo.userProject;this.post("/auth/login",{}).then(function(t){var n=t.Data;e.List=n})}},mounted:function(){}},s=o,l=n("2877"),r=Object(l["a"])(s,a,i,!1,null,null,null);t["default"]=r.exports},f10a:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return i});var a=n("c0d6");function i(){var e=a["a"].getters.getLanguage,t=[{width:"220",prop:"rolename",align:"right",label:e.roleName,fixed:!0}];return t}}}]);