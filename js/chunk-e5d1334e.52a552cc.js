(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e5d1334e","chunk-2d0d6e89"],{"55ad":function(e,t,l){"use strict";l.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-row",[r("mt",[e._v(e._s(e.language[e.$options.name]))]),r("div",{staticClass:"margin1vw",staticStyle:{height:"80%"}},[e._v("\n    "+e._s(e.selectTableItem)+"\n    "),r("UiPageTable",{ref:"routeManagementTable",attrs:{tableData:e.dataList,TableConfig:e.TableConfig,PageConfig:e.PageConfig,DataConfig:l("750e").default()},on:{clickPage:e.clickPage,select:e.selectTable}})],1)],1)},n=[],a={mixins:[l("a496").default],name:"menuManagement",data:function(){return{TableConfig:{border:!0,stripe:!0,highlight:!0,single:!0,disabled:!1},page:1,pageSize:30,total:0,dataList:[{name:"rrrrlllllll1111111",url:"rrrrrllllllll111111111111",requestMode:"rrrrrllllll11111111111111"},{name:"rrrllllll2222",url:"rrrlllll2222",requestMode:"rrrllll2222"},{name:"rrrrllll3333",url:"rrrrllllll3333",requestMode:"rrrrllllll333333"}],selectTableItem:{}}},components:{UiPageTable:function(){return l.e("chunk-2d224900").then(l.bind(null,"e153"))}},props:{},computed:{PageConfig:function(){return{total:this.total,size:this.pageSize}}},watch:{},methods:{clickPage:function(e,t){this.page=e,this.pageSize=t,this.getRequest()},selectTable:function(e){this.selectTableItem=e.length>0?this.$avoid(e[0]):{}},getRequest:function(){var e=this,t=(this.userInfo.projectId,this.userInfo.userProject);this.get("/zone/1231321/".concat(t),{}).then(function(t){var l=t.Data;e.List=l})},postRequest:function(){var e=this;this.userInfo.projectId,this.userInfo.userProject;this.post("/auth/login",{}).then(function(t){var l=t.Data;e.List=l})}},mounted:function(){}},i=a,s=l("2877"),o=Object(s["a"])(i,r,n,!1,null,null,null);t["default"]=o.exports},"750e":function(e,t,l){"use strict";l.r(t),l.d(t,"default",function(){return n});var r=l("c0d6");function n(){var e=r["a"].getters.getLanguage,t=[{width:"220",prop:"name",align:"right",label:e.menuName,fixed:!0},{width:"220",prop:"url",align:"right",label:e.menuUrl,fixed:!0},{width:"220",prop:"requestMode",align:"right",label:e.requestMode,fixed:!0}];return t}}}]);