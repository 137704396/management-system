(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bcec4"],{"2a98":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shadow w100 h100",class:t.className,style:{height:t.height,width:t.width},attrs:{id:t.id}})},i=[],a=(n("96cf"),n("3b8d")),s={mixins:[],name:"ECharts",components:{},data:function(){return{MyChart:null}},props:{className:{type:String,default:"echarsCSS"},id:{type:String,required:!0},data:{type:Object,default:null},width:{type:String,default:"99.7%"},height:{type:String,default:"27.77777vh"}},computed:{},methods:{initChart:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this,t.next=3,n("164e").init(document.getElementById(e.id),"light");case 3:return e.MyChart=t.sent,t.next=6,e.MyChart.on("click",e.click);case 6:return t.next=8,window.addEventListener("resize",e.__resizeHandler);case 8:return t.next=10,e.setChart();case 10:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),click:function(t){var e=this,n=this.$avoid(t.data);e.$emit("clickECharts",Object.assign({},null,n))},clear:function(){this.MyChart.clear()},setChart:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this,t.next=3,e.clear();case 3:return t.next=5,e.MyChart.setOption(e.data,!0);case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),__resizeHandler:function(){this.MyChart&&(this.MyChart.resize(),this.setChart())}},watch:{data:{handler:function(t,e){JSON.stringify(t)!==JSON.stringify(e)&&this.setChart()},deep:!0}},mounted:function(){this.initChart()},beforeDestroy:function(){window.removeEventListener("resize",this.__resizeHandler),this.MyChart&&(this.MyChart.dispose(),this.MyChart=null)},activated:function(){var t=this;t.MyChart&&t.__resizeHandler()}},c=s,h=n("2877"),u=Object(h["a"])(c,r,i,!1,null,null,null);e["default"]=u.exports}}]);