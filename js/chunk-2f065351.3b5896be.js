(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f065351"],{aa77:function(t,e,n){var a=n("5ca1"),i=n("be13"),o=n("79e5"),r=n("fdef"),l="["+r+"]",f="​",s=RegExp("^"+l+l+"*"),c=RegExp(l+l+"*$"),h=function(t,e,n){var i={},l=o(function(){return!!r[t]()||f[t]()!=f}),s=i[t]=l?e(g):r[t];n&&(i[n]=s),a(a.P+a.F*l,"String",i)},g=h.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(s,"")),2&e&&(t=t.replace(c,"")),t};t.exports=h},c5f6:function(t,e,n){"use strict";var a=n("7726"),i=n("69a8"),o=n("2d95"),r=n("5dbc"),l=n("6a99"),f=n("79e5"),s=n("9093").f,c=n("11e9").f,h=n("86cc").f,g=n("aa77").trim,u="Number",d=a[u],b=d,x=d.prototype,p=o(n("2aeb")(x))==u,m="trim"in String.prototype,k=function(t){var e=l(t,!1);if("string"==typeof e&&e.length>2){e=m?e.trim():g(e,3);var n,a,i,o=e.charCodeAt(0);if(43===o||45===o){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:a=2,i=49;break;case 79:case 111:a=8,i=55;break;default:return+e}for(var r,f=e.slice(2),s=0,c=f.length;s<c;s++)if(r=f.charCodeAt(s),r<48||r>i)return NaN;return parseInt(f,a)}}return+e};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof d&&(p?f(function(){x.valueOf.call(n)}):o(n)!=u)?r(new b(k(e)),n,d):k(e)};for(var v,N=n("9e1e")?s(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),j=0;N.length>j;j++)i(b,v=N[j])&&!i(d,v)&&h(d,v,c(b,v));d.prototype=x,x.constructor=d,n("2aba")(a,u,d)}},f1b2:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"VertRoll",staticClass:"shadow w100 h100",style:{height:t.DHeight},on:{mousewheel:t.VetMouseWheel,mouseleave:t.autoFun,mouseover:t.clearTimer}},[n("transition-group",t._l(t.data,function(e,a){return n("el-row",{key:e.index,staticClass:"list-complete-item w100",style:{height:t.height},attrs:{type:"flex",align:"middle"},nativeOn:{click:function(n){return t.liCilck(e)}}},[a<t.showNum?n("fragment",{key:e.index},t._l(e.obj,function(e,a){return n("el-col",{key:a,staticClass:"notLineFeed",style:{height:t.height,textAlign:e.align?e.align:"left",background:e.background?e.background:"",borderRadius:"0.26041vw",lineHeight:t.height},attrs:{span:e.length,offset:e.offset?e.offset:0}},[t._v(t._s(e.text))])}),1):t._e()],1)}),1)],1)},i=[],o=(n("c5f6"),{name:"VertRollS",data:function(){return{timer:null,s:0,data:[{index:1,obj:[{length:18,text:"这是隔6长18居中111",align:"center",offset:6,background:"#99a9bf"}]},{index:113132,obj:[{length:18,text:"这是隔6长18居中111",align:"center",offset:6,background:"#99a9bf"}]},{index:11321321,obj:[{length:18,text:"这是隔6长18居中111",align:"center",offset:6,background:"#99a9bf"}]},{index:1132132132121,obj:[{length:18,text:"这是隔6长18居中111",align:"center",offset:6,background:"#99a9bf"}]},{index:1333,obj:[{length:18,text:"这是隔6长18居中222",align:"center",offset:6,background:"#99a9bf"}]},{index:1444,obj:[{length:18,text:"这是隔6长18居中3333",align:"center",offset:6,background:"#99a9bf"}]},{index:2555,obj:[{length:6,text:"这是隔3长6居右44444",align:"right",offset:3,background:"#99a9bf"},{length:12,text:"这是隔3长12居左",align:"left",offset:3,background:"#99a9bf"}]},{index:3,obj:[{length:6,text:"这是隔2长6居左",align:"left",offset:2,background:"#99a9bf"},{length:6,text:"这是隔2长6居中",align:"center",offset:2,background:"#99a9bf"},{length:8,text:"这是隔0长8居右",align:"right",offset:0,background:"#99a9bf"}]},{index:4,obj:[{length:5,text:"这是隔1长5居右",align:"right",offset:1,background:"#99a9bf"},{length:6,text:"这是隔0长6居左1111111111111111111111111111111111111111111111111111111",align:"left",offset:0,background:"#99a9bf"},{length:4,text:"这是隔2长4居右",align:"right",offset:2,background:"#99a9bf"},{length:6,text:"这是隔0长6居右",align:"right",offset:0,background:"#99a9bf111111111"}]},{index:5,obj:[{length:18,text:"这是隔6长18居中11111111111111111111111111111111111111111111111111111111111111111111111",align:"center",offset:6,background:"#99a9bf5555555555"}]},{index:6,obj:[{length:18,text:"这是隔6长18居中",align:"center",offset:6,background:"#99a9bf444444444444444"}]},{index:7,obj:[{length:18,text:"这是隔6长18居中3333333333333",align:"center",offset:6,background:"#99a9bf"}]},{index:8,obj:[{length:18,text:"这是隔6长18居中2222222222",align:"center",offset:6,background:"#99a9bf"}]},{index:9,obj:[{length:18,text:"这是隔6长18居中1111111111111",align:"center",offset:6,background:"#99a9bf"}]},{index:10,obj:[{length:18,text:"这是隔6长18居中",align:"center",offset:6,background:"#99a9bf"}]},{index:11,obj:[{length:18,text:"这是隔6长18居中",align:"center",offset:6,background:"#99a9bf"}]},{index:12,obj:[{length:18,text:"这是隔6长18居中",align:"center",offset:6,background:"#99a9bf"}]},{index:13,obj:[{length:18,text:"这是隔6长18居中",align:"center",offset:6,background:"#99a9bf"}]},{index:14,obj:[{length:18,text:"这是隔6长18居中",align:"center",offset:6,background:"#99a9bf"}]},{index:15,obj:[{length:18,text:"这是隔6长18居中",align:"center",offset:6,background:"#99a9bf"}]},{index:16,obj:[{length:18,text:"这是隔6长18居中",align:"center",offset:6,background:"#99a9bf"}]}]}},props:{vShowNum:{type:Number,default:99},aniTime:{type:Number,default:4},height:{type:String,default:"2.77777vh"},DHeight:{type:String,default:"20vh"},vData:{type:Array,default:null}},computed:{showNum:{get:function(){return this.s},set:function(t){this.s=t}}},watch:{vShowNum:{handler:function(t,e){null!=t&&(this.s=t)},deep:!0,immediate:!0},vData:{handler:function(t,e){null!=t&&(this.data=t)},deep:!0,immediate:!0}},methods:{handlerHeight:function(){var t=parseFloat(this.DHeight),e=parseFloat(this.height),n=this.showNum,a=Math.floor(t/e);n>a&&(this.s=a)},shuffle:function(t){this.$addCSS(".list-complete-item{transition: all ".concat(t||4,"s;display: block;}"));var e=this.data[0];this.data.splice(this.data.length,0,e),this.data.splice(0,1)},adShuffle:function(){this.$addCSS(".list-complete-item{transition: all 0s;display: block;}");var t=this.data[this.data.length-1];this.data.splice(0,0,t),this.data.splice(this.data.length-1,1)},liCilck:function(t){this.$emit("onClick",t)},autoFun:function(){null==this.timer&&(this.handlerHeight(),this.showNum<this.data.length&&(this.timer=setInterval(this.shuffle,1e3*this.aniTime)))},clearTimer:function(){null!=this.timer&&clearInterval(this.timer),this.timer=null},VetMouseWheel:function(t){var e=t.deltaY>0;e?this.shuffle(.1):this.adShuffle()}},mounted:function(){this.autoFun()},beforeDestroy:function(){this.clearTimer()}}),r=o,l=n("2877"),f=Object(l["a"])(r,a,i,!1,null,null,null);e["default"]=f.exports},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);