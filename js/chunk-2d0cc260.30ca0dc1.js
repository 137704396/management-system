(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cc260"],{"4d60":function(e,n,t){"use strict";t.r(n);var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"mainOverallSituation"}},[e.RightClickMenuShow?t("RightClickMenu",{attrs:{RightClickMenu:e.RightClickMenu,PrintingEle:e.PrintingEle},on:{close:e.RightClickMenuClose}}):e._e(),t("el-container",{staticClass:"h9999"},[t("el-aside",{attrs:{width:e.asideWidth}},[t("MainMenu")],1),t("el-container",[t("el-header",{staticStyle:{padding:"0",height:"5%"}},[t("MainHeader")],1),t("el-header",{staticStyle:{padding:"0.4%","max-height":"4%",height:"auto"}},[t("MainTag")],1),t("el-main",{staticStyle:{padding:"0.4%",height:"90%"}},[t("MainApp")],1)],1)],1)],1)},u=[],a=t("d073"),h={mixins:[t("a496").default],name:"main-main",data:function(){return{RightClickMenu:{x:0,y:0},RightClickMenuShow:!1,PrintingEle:null}},components:{MainMenu:function(){return t.e("chunk-2d21da9f").then(t.bind(null,"d1ea"))},MainHeader:function(){return t.e("chunk-2d0abe5b").then(t.bind(null,"16dd"))},MainTag:function(){return t.e("chunk-2d0e5dae").then(t.bind(null,"95ea"))},MainApp:function(){return t.e("chunk-2d0a4b4e").then(t.bind(null,"081a"))},RightClickMenu:function(){return t.e("chunk-2d225d5e").then(t.bind(null,"e5a9"))}},computed:{asideWidth:function(){return this.otherInfo.asideVisible?this.otherInfo.menuCollapse?"auto":"11%":"0%"}},watch:{"otherInfo.rightClickMenu":{deep:!0,handler:function(e,n){this.registerRight(e)}}},methods:{RightClickMenuClose:function(){this.RightClickMenuShow=!1},beforeunloadFn:function(e){Object(a["l"])("userMemory",{userInfo:this.userInfo,otherInfo:this.otherInfo,language:this.language});var n="user-yun";return(e||window.event).returnValue=n,n},rightClick:function(e){e.preventDefault(),this.PrintingEle=e,this.$set(this.RightClickMenu,"x",e.x),this.$set(this.RightClickMenu,"y",e.y),this.RightClickMenuShow=!0},registerRight:function(e){var n=document.getElementById("mainOverallSituation");e&&n?n.addEventListener("contextmenu",this.rightClick,!0):n&&n.removeEventListener("contextmenu",this.rightClick,!0)}},mounted:function(){this.registerRight(this.otherInfo.rightClickMenu),window.addEventListener("beforeunload",this.beforeunloadFn,!0)},beforeDestroy:function(){window.removeEventListener("beforeunload",this.beforeunloadFn,!0)}},r=h,l=t("2877"),o=Object(l["a"])(r,i,u,!1,null,null,null);n["default"]=o.exports}}]);