(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0afe6a"],{"0ffd":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("fragment",[o("el-col",{attrs:{xs:24,sm:18,md:16,lg:14,xl:12}},[e.search?o("el-amap-search-box",{staticStyle:{height:"40px",width:"100%"},attrs:{"search-option":e.mSearchOption,"on-search-result":e.onSearchResult}}):e._e()],1),o("br"),o("el-col",{class:e.mClass},[o("el-amap",{attrs:{vid:"amap-vue",plugin:e.plugin,center:e.center,zoom:e.zoom,events:e.events}},[e._l(e.gPosition,function(t,n){return e.gPosition[0]?o("el-amap-marker",{key:(n+n+164)*n+46548,attrs:{vid:"component-marker",position:t.position,animation:t.animation,content:t.content,title:t.title}}):e._e()}),e._l(e.mPosition,function(t,n){return e.mPosition[0]?o("el-amap-marker",{key:n,attrs:{vid:"component-marker",position:t.position,animation:"AMAP_ANIMATION_BOUNCE",title:t.title}}):e._e()}),o("el-amap-marker",{attrs:{vid:"component-marker",position:e.center,animation:"AMAP_ANIMATION_BOUNCE",title:e.address}})],2)],1),o("el-col",[e.address?o("el-tag",[e._v(e._s(e.address))]):e._e()],1)],1)},i=[],a=(o("7f7f"),o("ac6a"),o("d073")),s=o("5aeb"),r=o.n(s),c={name:"MyMap",components:{AMap:r.a.initAMapApiLoader({key:"1781c47c1cd7be7028b0a1706715cf70",plugin:["AMap.Geolocation","AMap.Geocoder"]})},data:function(){var e=this;return{center:[121.607776,31.239684],zoom:18,plugin:[{enableHighAccuracy:!0,timeout:100,maximumAge:0,convert:!0,showButton:!0,buttonPosition:"RB",showMarker:!0,showCircle:!0,panToLocation:!0,zoomToAccuracy:!0,extensions:"all",pName:"Geolocation",events:{init:function(t){t.getCurrentPosition(function(t,o){o&&o.position&&(e.center=[o.position.lng,o.position.lat],e.$nextTick())})}}}],events:{click:function(t){e.center=[t.lnglat.lng,t.lnglat.lat],e.zoom=18,e.$nextTick();var o=new r.a.Geocoder({radius:1e3,extensions:"all"});o.getAddress(e.center,function(t,o){"complete"===t&&"OK"===o.info&&o&&o.regeocode&&(e.address=o.regeocode.formattedAddress,e.$emit("mMapClick",e.center,e.address),e.$nextTick())}),e.ResultHandle(!1)}},address:"",poisList:[]}},props:{mCenter:{type:Array,default:null},mAddress:{type:String,default:null},mClass:{type:String,default:"w100 h100"},mPosition:{type:Array,default:null},gPosition:{type:Array,default:null},mSearchOption:{type:Object,default:null},search:{type:Boolean,default:!0}},computed:{},watch:{mCenter:{handler:function(e,t){null!=e&&(this.center=e)},immediate:!0,deep:!0},mAddress:{handler:function(e,t){this.address=null!=e?e:"Backstage Management System"},immediate:!0,deep:!0},mPosition:{handler:function(e,t){this.$nextTick()},immediate:!0,deep:!0},gPosition:{handler:function(e,t){this.$nextTick()},immediate:!0,deep:!0},zoom:function(e,t){this.$nextTick()},center:{handler:function(e,t){},immediate:!0,deep:!0}},methods:{onSearchResult:function(e){var t=this;t.zoom=18,t.center=[e[0].lng,e[0].lat],t.$nextTick(),t.poisList=e,t.ResultHandle(!0)},ResultHandle:function(e){var t=this,o=[];t.poisList.forEach(function(e,n){var i=[e.lng,e.lat],s=e.name+":"+e.address;o.push({position:i,title:s});var r=Object(a["d"])(e.lng,e.lat,t.center[0],t.center[1]);t.mSwitch(parseInt(r))}),e&&t.$emit("mSearchResult",o)},mSwitch:function(e){switch(e=e<1?0:e<2?1:e<5?2:e<10?5:e<20?10:e<25?20:e<50?25:e<100?50:100,e){case 0:this.zoom=this.zoom<16?this.zoom:16;break;case 1:this.zoom=this.zoom<15?this.zoom:15;break;case 2:this.zoom=this.zoom<14?this.zoom:14;break;case 5:this.zoom=this.zoom<13?this.zoom:13;break;case 10:this.zoom=this.zoom<12?this.zoom:12;break;case 20:this.zoom=this.zoom<11?this.zoom:11;break;case 25:this.zoom=this.zoom<10?this.zoom:10;break;case 50:this.zoom=this.zoom<9?this.zoom:9;break;case 100:this.zoom=this.zoom<8?this.zoom:8;break;default:this.zoom=18;break}}},mounted:function(){}},l=c,m=o("2877"),d=Object(m["a"])(l,n,i,!1,null,null,null);t["default"]=d.exports}}]);