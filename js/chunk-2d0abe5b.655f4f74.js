(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0abe5b"],{"16dd":function(e,o,t){"use strict";t.r(o);var n=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{style:{backgroundColor:e.otherInfo.themeBackgroundColor}},[t("el-row",{staticClass:"hh5",attrs:{type:"flex",align:"middle"}},[t("el-col",{attrs:{xs:18,sm:18,md:20,lg:20,xl:20}},[t("i",{staticClass:"icon",class:e.iClassAsideVisible,style:{color:e.otherInfo.themeTextColor},on:{click:e.iClassAsideVisibleOnClick}}),t("i",{staticClass:"icon",class:e.iClassMenuCollapse,style:{color:e.otherInfo.themeTextColor},on:{click:e.iClassMenuCollapseOnClick}})]),t("el-col",{attrs:{xs:2,sm:2,md:1,lg:1,xl:1}},[e._v("\n       \n      "),t("mi",{style:{color:e.otherInfo.themeTextColor},attrs:{icon:"el-icon-setting",tooltip:e.language.openSetUp},on:{click:e.iClassDrawerCollapseOnClick}})],1),t("el-col",{attrs:{xs:2,sm:2,md:1,lg:1,xl:1}},[t("el-dropdown",{attrs:{size:e.otherInfo.menuCollapse?"medium":"default"},on:{command:e.noticeSelect}},[t("el-badge",{attrs:{"is-dot":""}},[t("i",{staticClass:"el-icon-bell icon",style:{color:e.otherInfo.themeTextColor}})]),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e._l(e.noticeMenuList,function(o){return t("el-dropdown-item",{key:o.command,attrs:{command:o.command,icon:"el-icon-chat-dot-square"}},[t("span",{staticClass:"emphasize"},[e._v(e._s(o.title))])])}),t("el-dropdown-item",{attrs:{command:"systemLog",divided:"",icon:"el-icon-chat-line-square"}},[t("span",{staticClass:"emphasize"},[e._v(e._s(e.language.systemLog))])])],2)],1)],1),t("el-col",{attrs:{xs:2,sm:2,md:2,lg:2,xl:2}},[t("el-dropdown",{attrs:{size:e.otherInfo.menuCollapse?"medium":"default"},on:{command:e.menuSelect}},[t("span",{staticClass:"emphasize",style:{color:e.otherInfo.themeTextColor}},[t("i",{staticClass:"el-icon-user icon"}),e._v("\n          "+e._s(e.userInfo.userName)+"\n        ")]),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},e._l(e.mainMenuList,function(o){return t("el-dropdown-item",{key:o.route,attrs:{command:o.route,icon:o.icon}},[t("span",{staticClass:"emphasize"},[e._v(e._s(e.language[o.title]))])])}),1)],1)],1)],1),e.otherInfo.drawerVisible?t("ConfigDrawer"):e._e()],1)},s=[],l=(t("a481"),{mixins:[t("a496").default],name:"mainHeader",data:function(){return{mainMenuList:[{icon:"el-icon-switch-button",title:"signOut",route:"login"}]}},components:{ConfigDrawer:function(){return t.e("chunk-2d0af4a9").then(t.bind(null,"0e64"))}},computed:{iClassAsideVisible:function(){return this.otherInfo.asideVisible?"el-icon-s-fold":"el-icon-s-unfold"},iClassMenuCollapse:function(){return this.otherInfo.menuCollapse?"el-icon-s-grid":"el-icon-menu"},noticeMenuList:function(){return[{title:this.language.unreadMessage,command:"read"}]}},watch:{"otherInfo.themeTextColor":{deep:!0,handler:function(e,o){this.$addCSS(".el-badge__content{ background-color:".concat(this.$ColorReverse(this.otherInfo.themeTextColor),";}"))}}},methods:{menuSelect:function(e){this.$router.replace({name:e})},noticeSelect:function(e){"systemLog"==e&&this.$router.replace({name:e})},iClassAsideVisibleOnClick:function(){this.setOtherInfo({asideVisible:!this.otherInfo.asideVisible})},iClassMenuCollapseOnClick:function(){this.setOtherInfo({menuCollapse:!this.otherInfo.menuCollapse})},iClassDrawerCollapseOnClick:function(){this.setOtherInfo({drawerVisible:!this.otherInfo.drawerVisible})}}}),i=l,a=t("2877"),r=Object(a["a"])(i,n,s,!1,null,null,null);o["default"]=r.exports}}]);