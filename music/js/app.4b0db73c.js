(function(t){function e(e){for(var n,a,c=e[0],o=e[1],u=e[2],l=0,p=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&p.push(s[a][0]),s[a]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,u||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],n=!0,a=1;a<i.length;a++){var c=i[a];0!==s[c]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},a={app:0},s={app:0},r=[];function c(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"0c90157e"}[t]+".js"}function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.e=function(t){var e=[],i={about:1};a[t]?e.push(a[t]):0!==a[t]&&i[t]&&e.push(a[t]=new Promise((function(e,i){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"86b9c8c0"}[t]+".css",s=o.p+n,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var u=r[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===s))return e()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){u=p[c],l=u.getAttribute("data-href");if(l===n||l===s)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||s,r=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete a[t],d.parentNode.removeChild(d),i(r)},d.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){a[t]=0})));var n=s[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,i){n=s[t]=[e,i]}));e.push(n[2]=r);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=c(t);var p=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var i=s[t];if(0!==i){if(i){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",p.name="ChunkLoadError",p.type=n,p.request=a,i[1](p)}s[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var p=0;p<u.length;p++)e(u[p]);var d=l;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"00ef":function(t,e,i){"use strict";i("7af9")},"034f":function(t,e,i){"use strict";i("85ec")},"03f0":function(t,e,i){t.exports=i.p+"img/评论.a3cf6ed0.png"},"0c41":function(t,e,i){},"1d9b":function(t,e,i){t.exports=i.p+"img/分享.01954066.png"},3381:function(t,e,i){t.exports=i.p+"img/loading.a22513c3.gif"},"3f69":function(t,e,i){},"42f1":function(t,e,i){t.exports=i.p+"img/下箭头.ed3604ba.png"},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),a=(i("d3b7"),i("bc3a")),s=i.n(a),r={baseURL:"http://api.kele8.cn/agent/https://music.kele8.cn"},c=s.a.create(r);c.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),c.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t){t.axios=c,window.axios=c,Object.defineProperties(t.prototype,{axios:{get:function(){return c}},$axios:{get:function(){return c}}})},n["a"].use(Plugin);Plugin;var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[t.currentMusic?i("Play",{attrs:{currentMusic:t.currentMusic,playlist:t.playlist,currentIndex:t.currentIndex,playType:t.playType},on:{"update:paused":function(e){t.paused=e},"update:music":function(e){t.currentMusic=e.item,t.currentIndex=e.index}}}):t._e(),t.$route.meta.isShowNav?i("HomeNav"):t._e(),i("router-view",{attrs:{currentMusic:t.currentMusic,paused:t.paused},on:{"update:music":function(e){t.currentMusic=e.item,t.currentIndex=e.index},"update:playlist":function(e){t.playlist=e},"play-type":function(e){t.playType=e}}})],1)},u=[],l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{attrs:{id:"home-nav"}},[i("li",[i("router-link",{attrs:{to:"/"}},[t._v("推荐音乐")])],1),i("li",[i("router-link",{attrs:{to:"/hot"}},[t._v("热歌榜")])],1),i("li",[i("router-link",{attrs:{to:"/search"}},[t._v("搜索")])],1)])},p=[],d={},m=d,f=(i("cb0e"),i("2877")),h=Object(f["a"])(m,l,p,!1,null,"dec50f54",null),g=h.exports,y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"play",class:{paused:t.paused}},[i("audio",{ref:"audio",attrs:{src:"https://music.163.com/song/media/outer/url?id="+t.currentMusic.id+".mp3",autoplay:""}}),i("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animate__animated animate__slideInUp","leave-active-class":"animate__animated animate__slideOutDown"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowPlayBar,expression:"isShowPlayBar"}],staticClass:"play-bar",on:{click:function(e){t.isShowPlayBar=!1}}},[2===t.playType?[i("img",{attrs:{src:t.currentMusic.al.picUrl,alt:""}}),i("h5",[i("p",[t._v(t._s(t.currentMusic.name)+" -- "+t._s(t.currentMusic.ar[0].name))])])]:1===t.playType?[i("img",{attrs:{src:t.currentMusic.picUrl,alt:""}}),i("h5",[i("p",[t._v(" "+t._s(t.currentMusic.name)+" -- "+t._s(t.currentMusic.song.artists[0].name)+" ")])])]:t._e(),3===t.playType?[i("img",{attrs:{src:t.currentMusic.artists[0].img1v1Url,alt:""}}),i("h5",[i("p",[t._v(t._s(t.currentMusic.name)+" -- "+t._s(t.currentMusic.artists[0].name))])])]:t._e(),i("div",{staticClass:"control",on:{click:function(e){return e.stopPropagation(),t.togglePlayState(e)}}},[i("canvas",{ref:"circle",attrs:{width:"50",height:"50"}}),i("span",{staticClass:"icon"},[i("div")])])],2)]),i("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeOut"}},[t.isShowPlayBar?t._e():i("div",{staticClass:"play-full"},[1===t.playType?i("div",{staticClass:"play-fullbg",style:{backgroundImage:"url("+t.currentMusic.picUrl+"?imageView&thumbnail=50y50&quality=15&tostatic=0)",backgroundSize:"100% 100%",backgroundRepeat:"no-repeat"}}):3===t.playType?i("div",{staticClass:"play-fullbg",style:{backgroundImage:"url("+t.currentMusic.artists[0].img1v1Url+"?imageView&thumbnail=50y50&quality=15&tostatic=0)",backgroundSize:"100% 100%",backgroundRepeat:"no-repeat"}}):2===t.playType?i("div",{staticClass:"play-fullbg",style:{backgroundImage:"url("+t.currentMusic.al.picUrl+"?imageView&thumbnail=50y50&quality=15&tostatic=0)",backgroundSize:"100% 100%",backgroundRepeat:"no-repeat"}}):t._e(),i("PlayFullHeader",{attrs:{currentMusic:t.currentMusic,playType:t.playType},on:{"show-play-bar":function(e){t.isShowPlayBar=!0}}}),[t.isShowLyric?i("PlayFullLyric",{attrs:{currentTime:t.currentTime,audio:this.$refs.audio,currentWords:t.currentWords},on:{"toggle-show-lyric":function(e){t.isShowLyric=!t.isShowLyric}}}):i("PlayFullChart",{attrs:{paused:t.paused,currentMusic:t.currentMusic,playType:t.playType},on:{"toggle-show-lyric":function(e){t.isShowLyric=!t.isShowLyric}}})],i("PlayFullFooter",{attrs:{currentTime:t.currentTime,duration:t.duration},on:{"update:currentTime":function(e){t.$refs.audio.currentTime=e}}})],2)])],1)},v=[],I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"PlayFullHeader"},[n("span",{on:{click:function(e){return t.$emit("show-play-bar")}}},[n("img",{attrs:{src:i("42f1"),alt:""}})]),1===t.playType?n("span",[t._v(t._s(t.currentMusic.name)+" "),n("p",[t._v(t._s(t.currentMusic.song.artists[0].name)+">")])]):2===t.playType?n("span",[t._v(t._s(t.currentMusic.name)+" "),n("p",[t._v(t._s(t.currentMusic.ar[0].name)+">")])]):3===t.playType?n("span",[t._v(t._s(t.currentMusic.name)+" "),n("p",[t._v(t._s(t.currentMusic.artists[0].name)+">")])]):t._e(),t._m(0)])},A=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("img",{attrs:{src:i("1d9b"),alt:""}})])}],S={props:["currentMusic","playType"]},C=S,E=(i("fd47"),Object(f["a"])(C,I,A,!1,null,"2441d4c3",null)),b=E.exports,k=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("div",{staticClass:"xuanzhuan",on:{click:function(e){return t.$emit("toggle-show-lyric")}}},[1===t.playType?i("img",{class:[t.paused?"buzhuan":"zhuan"],attrs:{src:t.currentMusic.picUrl}}):2===t.playType?i("img",{class:[t.paused?"buzhuan":"zhuan"],attrs:{src:t.currentMusic.al.picUrl}}):3===t.playType?i("img",{class:[t.paused?"buzhuan":"zhuan"],attrs:{src:t.currentMusic.artists[0].img1v1Url}}):t._e()]),t._m(0)])},B=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bottom"},[n("div",[n("img",{attrs:{src:i("60e4"),alt:""}})]),n("div",[n("img",{attrs:{src:i("69d6"),alt:""}})]),n("div",[n("img",{attrs:{src:i("b5c4"),alt:""}})]),n("div",[n("img",{attrs:{src:i("03f0"),alt:""}})]),n("div",[n("img",{attrs:{src:i("994d"),alt:""}})])])}],x={props:["paused","currentMusic","playType"],watch:{paused:function(){this.paused?console.log("已暂停"):console.log("继续播放")}}},Q=x,w=(i("d40a"),Object(f["a"])(Q,k,B,!1,null,"c7f370e6",null)),R=w.exports,P=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"lyric",on:{click:function(e){return t.$emit("toggle-show-lyric")}}},[i("ul",{ref:"list"},t._l(t.lyric,(function(e,n){return i("li",{key:n},[t._v(t._s(e.text))])})),0)])},M=[],_=(i("4de4"),i("c740"),i("d81d"),i("a9e3"),i("ac1f"),i("466d"),i("5319"),i("1276"),{props:["currentWords","currentTime","audio"],computed:{lyric:function(){if(!this.currentWords)return[];var t=/\[\d{2}:\d{2}\.\d{2,3}\]/gi,e=this.currentWords.split("\n").filter((function(t){return t})).map((function(e){var i=e.match(t)[0].replace(/(\[|\])/gi,""),n=i.split(":");i=60*Number(n[0])+Number(n[1]);var a=e.replace(t,"");return{time:i,text:a}}));return e}},created:function(){console.log("created");var t=this;this.audio.ontimeupdate=function(){t.updateWords()}},updated:function(){console.log("update");var t=this;this.audio.ontimeupdate=function(){t.updateWords()}},mounted:function(){this.updateWords()},methods:{updateWords:function(){var t=this;if(0!=this.lyric[0].time&&this.lyric.unshift({time:0,text:""}),this.$refs.list){var e=this.lyric.findIndex((function(e){return e.time>t.currentTime}));if(-1===e)return;var i=this.$refs.list.querySelectorAll("li"),n=i[e-1].offsetHeight;this.$refs.list.style.marginTop=-n*(e-1)+208+"px";for(var a=0;a<i.length;a++)i[a].style.color="rgb(255,255,255)";i[e-1].style.color="rgb(30,204,148)"}}}}),j=_,O=(i("f86b"),Object(f["a"])(j,P,M,!1,null,"030cc13c",null)),L=O.exports,T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"play-full-footer"},[i("div",{staticClass:"ct"},[t._v(t._s(t.min)+":"+t._s(t.seconds))]),i("div",{staticClass:"dt"},[t._v(t._s(t.totalMin)+":"+t._s(t.totalSecond))]),i("input",{attrs:{type:"range",min:"0",max:t.duration,step:"1"},domProps:{value:t.currentTime},on:{input:t.getValue}}),i("div",{staticClass:"control"},[i("div",{staticClass:"prev",on:{click:function(e){return e.stopPropagation(),t.playPrev(e)}}}),this.$parent.paused?i("div",{staticClass:"paused1",on:{click:function(e){return e.stopPropagation(),t.togglePlayState(e)}}}):i("div",{staticClass:"paused2",on:{click:function(e){return e.stopPropagation(),t.togglePlayState(e)}}}),i("div",{staticClass:"next",on:{click:function(e){return e.stopPropagation(),t.playNext(e)}}})])])},H=[],U={props:["currentTime","duration","pasued","playType"],data:function(){return{min:0,seconds:0,totalMin:0,totalSecond:0}},methods:{getValue:function(t){console.log(t.target.value),this.$emit("update:currentTime",t.target.value)},togglePlayState:function(){this.$parent.togglePlayState()},playNext:function(){this.$parent.playNext()},playPrev:function(){this.$parent.playPrev()}},watch:{currentTime:function(){this.min=parseInt(this.currentTime/60),this.seconds=parseInt(this.currentTime%60)},duration:function(){this.totalMin=parseInt(this.duration/60),this.totalSecond=parseInt(this.duration%60)}},created:function(){this.totalMin=parseInt(this.duration/60),this.totalSecond=parseInt(this.duration%60)}},N=U,q=(i("be73"),Object(f["a"])(N,T,H,!1,null,"d685290a",null)),J=q.exports,z={props:["currentMusic","currentIndex","playlist","playType"],components:{PlayFullHeader:b,PlayFullChart:R,PlayFullLyric:L,PlayFullFooter:J},data:function(){return{paused:null,duration:0,currentTime:0,isShowLyric:!1,isShowPlayBar:!0,currentWords:null}},created:function(){var t=this;console.log(this.currentMusic),this.axios.get("/lyric?id="+this.currentMusic.id).then((function(e){console.log("创建"),t.currentWords=e.data.lrc.lyric,console.log(t.lyric)}))},mounted:function(){var t=this;console.log("mounted",this.$refs.audio);var e=this.$refs.audio;e.addEventListener("pause",(function(){console.log("暂停"),t.paused=!0})),e.addEventListener("play",(function(){console.log("播放"),t.paused=!1})),e.addEventListener("durationchange",(function(){t.duration=e.duration})),e.addEventListener("timeupdate",(function(){t.currentTime=e.currentTime,t.drawCircle(t.currentTime,t.duration)})),e.addEventListener("ended",(function(){t.playNext()}))},methods:{drawCircle:function(t,e){var i=this.$refs.circle,n=i.getContext("2d");n.clearRect(0,0,50,50),n.beginPath(),n.strokeStyle="rgba(0, 0, 0, 0.3)",n.arc(25,25,20,0,2*Math.PI,!1),n.stroke(),n.closePath(),n.beginPath(),n.strokeStyle="rgba(255, 0, 0, 0.6)",n.arc(25,25,19,-.5*Math.PI,Math.PI*(t/e*2-.5),!1),n.stroke(),n.closePath()},togglePlayState:function(){var t=this.$refs.audio;this.paused?t.play():t.pause()},calculateNext:function(){var t;return t=this.currentIndex<this.playlist.length-1?this.currentIndex+1:0,t},playNext:function(){console.log("下一曲");var t=this.calculateNext();this.$emit("update:music",{item:this.playlist[t],index:t})},playPrev:function(){console.log("上一曲");var t=this.calculatePrev();this.$emit("update:music",{item:this.playlist[t],index:t})},calculatePrev:function(){var t;return t=this.currentIndex-1,console.log(t),this.currentIndex<=0&&(t=this.playlist.length-1,console.log(t)),t}},watch:{paused:function(t){this.$emit("update:paused",t)},currentMusic:function(){var t=this;this.axios.get("/lyric?id="+this.currentMusic.id).then((function(e){console.log("换歌词"),t.currentWords=e.data.lrc.lyric,console.log(t.lyric)}))}}},G=z,K=(i("887f"),Object(f["a"])(G,y,v,!1,null,"7b4f303c",null)),V=K.exports,Z={components:{HomeNav:g,Play:V},data:function(){return{currentMusic:null,paused:null,playlist:[],currentIndex:0,playType:null}}},F=Z,W=(i("034f"),Object(f["a"])(F,o,u,!1,null,null,null)),D=W.exports,Y=i("8c4f"),X=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"search"},[i("Enter",{attrs:{hotWords:t.hotWords,isloading3:t.isloading3},on:{"update:music":function(e){return t.$emit("update:music",e)},"update:playlist":function(e){return t.$emit("update:playlist",e)},"play-type":function(e){return t.$emit("play-type",e)}}})],1)},$=[],tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"enter"},[n("div",{staticClass:"inputCover"},[n("i"),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.b,expression:"b",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"搜索歌曲、歌手、专辑"},domProps:{value:t.b},on:{input:[function(e){e.target.composing||(t.b=e.target.value.trim())},t.submit],blur:function(e){return t.$forceUpdate()}}}),n("span",{staticClass:"deleteAll",on:{click:t.dAll}},[t._v("X")])]),t.isloading3?n("img",{staticStyle:{display:"block",margin:"0 auto"},attrs:{src:i("3381")}}):n("ul",{directives:[{name:"show",rawName:"v-show",value:t.isShowList,expression:"isShowList"}],staticClass:"searchList"},t._l(t.results,(function(e,i){return n("li",{key:i,on:{click:function(i){return t.showDetail(e.name)}}},[n("i"),n("span",[t._v(t._s(e.name))])])})),0),n("ul",{directives:[{name:"show",rawName:"v-show",value:t.isShowDetail,expression:"isShowDetail"}],staticClass:"detailList"},[n("h3",[t._v("最佳匹配")]),t._l(t.deatil,(function(e,i){return n("li",{key:i,attrs:{item:e,index:i},on:{"update:music":function(e){return t.$emit("update:music",e)},"update:playlist":function(e){return t.$emit("update:playlist",t.hotSongs)},"play-type":function(e){return t.$emit("play-type",e)},click:function(n){t.$emit("update:music",{item:e,index:i}),t.$emit("update:playlist",t.deatil),t.$emit("play-type",3)}}},[n("div",{staticClass:"left"},[n("div",{staticClass:"top"},[n("span",{staticClass:"songName"},[t._v(t._s(e.name))])]),n("div",{staticClass:"bottom"},[n("i",{staticClass:"icon"}),n("span",[t._v(t._s(e.artists[0].name))]),t._v("--"),n("span",[t._v(" "+t._s(e.album.name))])])]),t._m(0,!0)])}))],2),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowHot,expression:"isShowHot"}],staticClass:"hotsearch"},[n("h3",[t._v("热门搜索")]),n("ul",t._l(t.hotWords,(function(e,i){return n("li",{key:i,on:{click:function(i){return t.fastSearch(e)}}},[n("a",{attrs:{href:"javascript:void(0);"}},[t._v(t._s(e))])])})),0)])])},et=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"right"},[i("span",{staticClass:"playIcon"})])}],it=(i("fb6a"),{props:["hotWords","isloading3"],methods:{submit:function(){var t=this;if(""==this.b||void 0==this.b||null==this.b)return this.isShowList=!1,this.isShowHot=!0,this.isShowDetail=!1,void clearTimeout(this.timeOut);this.timeOut||clearTimeout(this.timeOut),this.timeOut=setTimeout((function(){t.axios.get("/search?keywords="+t.b).then((function(e){console.log(e),t.deatil=e.data.result.songs,t.results=e.data.result.songs,t.results=t.results.slice(0,6)})),clearTimeout(t.timeOut)}),500),this.isShowList=!0,this.isShowDetail=!1,this.isShowHot=!1},showDetail:function(t){this.isShowDetail=!0,this.isShowList=!1,this.isShowHot=!1,this.b=t},fastSearch:function(t){this.b=t,this.submit(),this.isShowDetail=!0,this.isShowList=!1,this.isShowHot=!1},dAll:function(){this.b="",this.isShowDetail=!1,this.isShowHot=!0,this.isShowList=!1}},data:function(){return{results:[],timeOut:null,b:"",isShowDetail:!1,isShowList:!1,deatil:[],isShowHot:!0,currentMusic:null,searchSongs:[]}}}),nt=it,at=(i("5fd9"),Object(f["a"])(nt,tt,et,!1,null,"72401945",null)),st=at.exports,rt={components:{Enter:st},data:function(){return{hotWords:[],allSongs:[],isloading3:!0}},created:function(){var t=this;this.axios.get("/search/hot").then((function(e){for(var i=0;i<e.data.result.hots.length;i++)t.hotWords.push(e.data.result.hots[i].first)})).finally((function(){t.isloading3=!1}))}},ct=rt,ot=Object(f["a"])(ct,X,$,!1,null,null,null),ut=ot.exports,lt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"playlist"},[i("PlayListHead",{attrs:{currentPlayList:t.currentPlayList,userName:t.userName,userUrl:t.userUrl}}),i("h3",[t._v("歌曲列表")]),t._l(t.playListSong,(function(e,n){return i("PlayListList",{key:e.id,attrs:{playListSong:t.playListSong,item:e,index:n},on:{"update:music":function(e){return t.$emit("update:music",e)},"update:playlist":function(e){return t.$emit("update:playlist",t.playListSong)},"play-type":function(e){return t.$emit("play-type",e)}}})}))],2)},pt=[],dt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"playListHead",on:{click:t.b}},[i("div",{staticClass:"bg",style:{backgroundImage:"url("+t.currentPlayList.coverImgUrl+")",backgroundSize:"100% 100%",backgroundRepeat:"no-repeat"}}),i("div",{staticClass:"warp"},[i("div",{staticClass:"left"},[i("img",{attrs:{src:t.currentPlayList.coverImgUrl},on:{click:t.b}}),i("span",{staticClass:"icon"},[t._v("歌单")]),i("div",{staticClass:"listen"},[t._v(t._s(t._f("formatPlayCount")(t.currentPlayList.playCount)))]),i("div",{staticClass:"icon2"})]),i("div",{staticClass:"right"},[i("h2",[t._v(t._s(t.currentPlayList.name))]),i("div",{staticClass:"creator"},[i("div",{staticClass:"creatorHead"},[i("img",{attrs:{src:t.userUrl}})]),i("div",{staticClass:"creatorName"},[t._v(t._s(t.userName))])])])])])},mt=[],ft=(i("b680"),{props:["currentPlayList","userName","userUrl"],methods:{b:function(){console.log(this.currentPlayList.coverImgUrl)}},filters:{formatPlayCount:function(t){return(t/1e4).toFixed(1)+"万"}},created:function(){}}),ht=ft,gt=(i("bda3"),Object(f["a"])(ht,dt,mt,!1,null,"774f6c74",null)),yt=gt.exports,vt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"playListList"},[i("ul",[i("li",{on:{click:function(e){t.$emit("update:music",{item:t.item,index:t.index}),t.$emit("update:playlist"),t.$emit("play-type",2)}}},[i("div",{staticClass:"left"},[t._v(" "+t._s(t.index+1)+" ")]),i("div",{staticClass:"right"},[i("div",{staticClass:"right_top"},[t._v(" "+t._s(t.item.name)+" ")]),i("div",{staticClass:"right_bottom"},[t._v(" "+t._s(t.item.ar[0].name)+" - "+t._s(t.item.al.name)+" ")])])])])])},It=[],At={props:["playListSong","item","index"],methods:{}},St=At,Ct=(i("9b12"),Object(f["a"])(St,vt,It,!1,null,"2737d0ed",null)),Et=Ct.exports,bt={components:{PlayListList:Et,PlayListHead:yt},created:function(){var t=this;this.axios.get("/playlist/detail?id="+this.$route.query.id).then((function(e){console.log(e.data.playlist),t.currentPlayList=e.data.playlist;for(var i=0;i<e.data.playlist.trackIds.length;i++)t.songId.push(e.data.playlist.trackIds[i].id),t.axios.get("/song/detail?ids="+e.data.playlist.trackIds[i].id).then((function(e){t.playListSong.push(e.data.songs[0])}));t.axios.get("/user/detail?uid="+t.currentPlayList.userId).then((function(e){t.userName=e.data.profile.nickname,t.userUrl=e.data.profile.avatarUrl}))})),console.log(this.$route.query.id)},watch:{"this.$route.query.id":function(t){console.log(t)}},data:function(){return{currentPlayList:{},userId:"",userName:"",userUrl:"",playListSong:[],songId:[]}}},kt=bt,Bt=(i("00ef"),Object(f["a"])(kt,lt,pt,!1,null,"7c51a520",null)),xt=Bt.exports,Qt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"recommend"},[i("RecommendPlayList",{attrs:{currentRecommends:t.currentRecommends,isloading:t.isloading}},[t._v("推荐歌单")]),i("RecommendNewMusic",{attrs:{newSongs:t.newSongs,currentMusic:t.$attrs.currentMusic,paused:t.$attrs.paused,isloading:t.isloading},on:{"update:music":function(e){return t.$emit("update:music",e)},"update:playlist":function(e){return t.$emit("update:playlist",e)},"play-type":function(e){return t.$emit("play-type",e)}}},[t._v("最新音乐")])],1)},wt=[],Rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("BorderedTitle",[t._t("default")],2),t.isloading?n("img",{staticStyle:{display:"block",margin:"0 auto"},attrs:{src:i("3381")}}):n("ul",{staticClass:"playlist"},t._l(t.currentRecommends,(function(t,e){return n("PlayListItem",{key:e,attrs:{item:t}})})),1)],1)},Pt=[],Mt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h3",[t._t("default")],2)},_t=[],jt={},Ot=jt,Lt=(i("6946"),Object(f["a"])(Ot,Mt,_t,!1,null,"165ab44b",null)),Tt=Lt.exports,Ht=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"playlistitem",on:{click:function(e){return t.navigateToPlayList(t.item.id)}}},[i("div",{staticClass:"thumb"},[i("img",{attrs:{src:t.item.picUrl+"?imageView=1&type=webp&thumbnail=370x0",alt:""}}),i("span",{staticClass:"play-count"},[t._v(t._s(t._f("formatPlayCount")(t.item.playCount)))])]),i("h6",[t._v(t._s(t.item.name))])])},Ut=[],Nt={props:{item:{type:Object}},filters:{formatPlayCount:function(t){return(t/1e4).toFixed(1)+"万"}},methods:{navigateToPlayList:function(t){this.$router.push({path:"/playlist",query:{id:t}})}}},qt=Nt,Jt=(i("b1de"),Object(f["a"])(qt,Ht,Ut,!1,null,"701dec57",null)),zt=Jt.exports,Gt={props:{currentRecommends:{type:Array},isloading:{type:Boolean}},components:{BorderedTitle:Tt,PlayListItem:zt}},Kt=Gt,Vt=(i("c18f"),Object(f["a"])(Kt,Rt,Pt,!1,null,"579436e6",null)),Zt=Vt.exports,Ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("BorderedTitle",[t._t("default")],2),t.isloading?n("img",{staticStyle:{display:"block",margin:"0 auto"},attrs:{src:i("3381")}}):n("ul",t._l(t.newSongs,(function(e,i){return n("SongItem",{key:e.id,attrs:{item:e,index:i,currentMusic:t.$attrs.currentMusic,paused:t.$attrs.paused},on:{"update:music":function(e){return t.$emit("update:music",e)},"update:playlist":function(e){return t.$emit("update:playlist",t.newSongs)},"play-type":function(e){return t.$emit("play-type",e)}}})})),1)],1)},Wt=[],Dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"song-item",on:{click:function(e){t.$emit("update:music",{item:t.item,index:t.index}),t.$emit("update:playlist"),t.$emit("play-type",1)}}},[n("div",{staticClass:"info"},[n("h5",[n("p",{staticClass:"songName"},[t._v(t._s(t.item.name))])]),n("p",[n("span",{staticClass:"icon2"}),t._v(" "),t._l(t.item.song.artists,(function(e,i){return n("span",{key:i},[i?[t._v(" / ")]:t._e(),t._v(t._s(e.name)+" ")],2)})),t._v(" --"),n("span",{staticClass:"ablumName"},[t._v(t._s(t.item.song.album.name))])],2)]),n("div",{staticClass:"icon"},[t.currentMusic&&t.currentMusic.id===t.item.id?n("span",{staticClass:"playing",class:{paused:t.paused}},[n("i"),n("i"),n("i")]):n("span",[n("img",{attrs:{src:i("9567"),alt:""}})])])])},Yt=[],Xt={props:["item","index","currentMusic","paused"]},$t=Xt,te=(i("d2e5"),Object(f["a"])($t,Dt,Yt,!1,null,"29963c1c",null)),ee=te.exports,ie={props:{newSongs:{type:Array},isloading:{type:Boolean}},components:{BorderedTitle:Tt,SongItem:ee}},ne=ie,ae=Object(f["a"])(ne,Ft,Wt,!1,null,null,null),se=ae.exports,re={components:{RecommendPlayList:Zt,RecommendNewMusic:se},data:function(){return{recommends:[],newSongs:[],isloading:!0}},computed:{currentRecommends:function(){return this.recommends.slice(0,6)}},created:function(){var t=this;this.isloading=!0;var e=0;this.axios.get("/personalized").then((function(e){t.recommends=e.data.result})).finally((function(){e++,2==e&&(t.isloading=!1)})),this.axios.get("/personalized/newsong").then((function(e){t.newSongs=e.data.result})).finally((function(){e++,2==e&&(t.isloading=!1)}))}},ce=re,oe=Object(f["a"])(ce,Qt,wt,!1,null,null,null),ue=oe.exports;n["a"].use(Y["a"]);var le=[{path:"/",name:"Recommend",component:ue,meta:{isShowNav:!0}},{path:"/hot",name:"Hot",component:function(){return i.e("about").then(i.bind(null,"0b70"))},meta:{isShowNav:!0}},{path:"/search",name:"Search",component:ut,meta:{isShowNav:!0}},{path:"/playlist",name:"PlayList",component:xt}],pe=new Y["a"]({routes:le}),de=pe;n["a"].config.productionTip=!1,new n["a"]({router:de,render:function(t){return t(D)}}).$mount("#app")},"5fd9":function(t,e,i){"use strict";i("f2a8")},"60e4":function(t,e,i){t.exports=i.p+"img/like.aa44b06e.png"},6946:function(t,e,i){"use strict";i("0c41")},"69d6":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAL3klEQVR4Xu2deah9VRXH16IiooiQiAYioogwJIqIaCAjooiIQs0cMtPU1DRzzNTU5tHmzCZt+jVLI42kDTTTTINFI2XRSCNNrLi2X72ev/vu2uuce/Y+d33uXz94a5191ud7Pr9973v33KvCAwIQWEpAYQMBCCwngCBcHRDYhQCCcHlAAEG4BiAQI8AOEuNGVxICCJIkaMaMEUCQGDe6khBAkCRBM2aMAILEuNGVhACCJAmaMWMEECTGja4kBBAkSdCMGSOAIDFudCUhgCBJgmbMGAEEiXGjKwkBBEkSNGPGCCBIjBtdSQggSJKgGTNGAEFi3OhKQgBBkgTNmDECCBLjRlcSAgiSJGjGjBFAkBg3upIQQJAkQTNmjACCxLjRlYQAgiQJmjFjBBAkxo2uJAQQJEnQjBkjgCAxbnQlIYAgSYJmzBgBBIlxoysJAQRJEjRjxgggSIwbXUkIIEiSoBkzRgBBYtzoSkIAQZIEzZgxAggS40ZXEgIIkiRoxowRQJAYt9G6zOwKEdl/2QFVlYxGo11/IODXMxu1A0FGxTn6wRBkdKR1B0SQOl5TVyPI1MR3rIcgjQNYsTyCNM4HQRoHgCB9B4AgfefDDtI4HwRpHAA7SN8BIEjf+bCDNM4HQRoHwA7SdwAI0nc+7CCN80GQxgGwg/QdAIL0nQ87SON8EKRxAOwgfQeAIH3nww7SOB8EaRwAO0jfASBI3/mwgzTOB0EaB8AO0ncACNJ3PuwgjfNBkMYBsIP0HQCC9J0PO0jjfBCkcQDsIH0HgCB958MO0jgfBGkcADtI3wEgSN/5sIM0zgdBGgfADtJ3AAjSdz7sII3zQZDGAbCD9B0AgvSdDztI43wQpHEA7CB9B4AgfefDDtI4HwRpHAA7SN8BIEjf+bCDNM4HQRoHwA7SdwAI0nc+7CCN80GQxgGwg/QdAIL0nQ87SON8EKRxAOwgfQeAIH3nww7SOB8EaRwAO0jfASBI3/mwgzTOB0EaB8AO0ncACNJ3PuwgjfNBkMYBsIP0HQCC9J0PO0jjfBCkcQDsIP8jYGb7quq3eooEQXpK49rnkmYHMbN7icglInKQqn67l1jmJoiZXSAi11XVc3thuM7zSCGImT1YRF4tIrcUkW8WSb6zTrDeY89JkCLH+WW2i1T1NO+cc63beEHM7BARea2I3GBbSN8okny3dXBzEWSHHFvYLlbVE1ozXOf6Gy2ImR0nIq9cAvDrRZKr1gl41bHnIMgSObZGu1RVj1o151x/vrGCmNkZIvLcFcF8rUjyvVYB9i7ICjm2sO1R1cNaMVznuhspiJndSUTeLiL7OuB9tUjyfUft6CU9C+KUY4vJI1T1HaMDanzAjRRkwdTM9iuS3NHB+CsicqCq/sBRO2pJr4JUynGwqi7+Q9q4x8YKUiS5c5HkDo7kvlwk+aGjdrSSHgWplOORqvq20YB0dqCNFqRIcpciye0d7L9Unm79yFE7SklvglTKcYiqvnUUEJ0eZOMFKZLctUhyO0cOXyyS/NhRO7ikJ0Eq5ThUVd8yGEDnB0ghSJHkbkWS2zoy+UKR5CeO2kElvQhSKcdhqrpn0OAzaU4jSJHk7kWS2zjy+XyR5KeO2nBJD4JUynG4qr45PPDMGlMJUiS5R5Hk1o6sPldeuP/MURsqaS1IpRyPUtU3hQadaVM6QYok9yyS3MqR22eLJD931FaXtBSkUo4jVPWN1QPOvCGlIEWSexdJbuHI8DNFkqsdtVUlrQSplOPRqvqGqsE2pDitIEWS+xRJbu7I89PlNckvHLXukhaCIIc7HkktSJHkvkWSmzmwfapI8ktHratkakEq5ThSVV/vGmRDi9ILUiS5X5Hkpo6cP1mebv3KUbuyZEpBKuV4jKpetnKADS9AkBKwmd2/SLKPI/NPFEl+7ajdtWQqQSrlOEpVLx062yb0I8i2FM3sAUWSmzjCvbJI8htH7dKSKQSplONoVX3dkJk2qRdBdqRpZg8sktzYEfQVRZLfOmr3WrJuQSrleKyqLu6+5FEIIMheLgUze5CILO5tuJHjSvl4keR3jtprlaxTkEo5jlHV10Rm2OQeBFmSbvmgh8U9Djd0XAAfK7/d+r2j9v9K1iVIpRzHquriQy147CCAILtcEmb2kPJ0a/sHPizr+GjZSf5Qc5WtQ5BKOY5T1VfVnHOmWgRZkbaZPbRIcn3HhfGRIskfHbXXlIwtSKUcj1PVxWeF8VhCAEEcl4aZPaxIcj1H+YeLJH9y1I4qSKUcx6vqsk988Zx6ihoEccZsZg8vL9yv42j5UJHkz6tqx9pBKuU4QVUvXnVu/Fx4q0nNRWBmBxRJPP+xfLBI8pfd1hhDEOSoSbGu1hN03RE3vNrMDipPtzyTfqD8duuvy4qHClIpx4mq+grPiVPzHwIIErgSzOxgEfF+WMH7y07yt70tNUSQSjker6ovD4ybugVBgvGXz/z13pf9viLJ33cuFxWkUo6TVPVlwVFTtyHIgPjN7FAR8d6f/d4iyT+2LxkRpFKOk1X1pQPGTN2KIAPjN7PDRcR7K+p7iiT/3Fq2VpBKOZ6gqi8ZOGLqdgQZIX4zO0JEvDcWvbtI8q/F0jWCVMpxiqq+eITxUh8CQUaK38yOFBHvPRSXF0nMK0ilHE9U1ReNNFrqwyDIiPGb2eJ7MrxvF3+Xqh7oEaRSjlNV9YUjjpX6UAgycvxmdrSIeN82/k4RWdzmu/8up3GhiGx97dmqsz1NVS9aVcTP/QQQxM/KXWlmx4iI9x2yizsTdxPEuy5yeElV1CFIBaya0hVf/1ZzKE/t6ar6Ak8hNXUEEKSOV1W1mR0vIut+a8cZqvr8qhOj2E0AQdyoYoVmdqKIrOuv2Geq6vNiZ0aXhwCCeCgNrDGzk0Rk7D/YnaWqq76kdOCZ044gE10DZnayiIz1h7snqepzJjr11MsgyITxm9kpIjL0bxRnq+qzJzzt1EshyMTxm9mpIhL9jdOTVfVZE59y6uUQpEH8Zna6iNS+uD5HVZ/Z4HRTL4kgjeI3szNFxPs64lxVfUajU029LII0jN/MzhKRVa8nkKNhRgjSEP5iaTM7W0SWPXU6T1Wf3vgUUy8/W0HKO1yXhqeqF8wlWTM7R0R2ivAUVX3ajGbYlfec8tjOfM6CLD5Zfemb/FR1VrOZ2Xki8tQSzvmquvXvWTiyuLFllxO9UlUXX1I0u8esLqLtdD33UcwtDTO75m3tqrp4i/usHgjSWVybKEhniKtOB0GqcK2/GEHWz7hmBQSpoTVBLYJMALliCQSpgDVFKYJMQdm/BoL4WU1SiSCTYHYvgiBuVNMUIsg0nL2rIIiX1ER1CDIRaOcyCOIENVUZgkxF2rcOgvg4TVaFIJOhdi2EIC5M0xUhyHSsPSshiIfShDUIMiFsx1II4oA0ZQmCTEl79VoIsprRpBUIMinulYshyEpE0xasEkREZvn26mkpjrra4vaDZQ/e7j4qasfBHII4jkLJRAQQZCLQ/10GQaYmPmg9BBmEL9CMIAFo7VoQZGr2CDI18UHrIcggfIFmM7tERI4NtNIyPYHLVfWA6ZcdvuKc70mv+T7A4aQ4whACF/KpJkPwBXvNbI+IHBJsp20aArN9erXAM9sdZCvb8vlY+4nIPtPkzSpOAleLyFVz3Tm2Zpy9IM6wKINAiACChLDRlIUAgmRJmjlDBBAkhI2mLAQQJEvSzBkigCAhbDRlIYAgWZJmzhABBAlhoykLAQTJkjRzhgggSAgbTVkIIEiWpJkzRABBQthoykIAQbIkzZwhAggSwkZTFgIIkiVp5gwRQJAQNpqyEECQLEkzZ4gAgoSw0ZSFAIJkSZo5QwQQJISNpiwEECRL0swZIoAgIWw0ZSGAIFmSZs4QAQQJYaMpCwEEyZI0c4YIIEgIG01ZCCBIlqSZM0QAQULYaMpCAEGyJM2cIQIIEsJGUxYCCJIlaeYMEUCQEDaashBAkCxJM2eIAIKEsNGUhQCCZEmaOUMEECSEjaYsBBAkS9LMGSKAICFsNGUhgCBZkmbOEAEECWGjKQsBBMmSNHOGCPwbb2Ll9g8MnDAAAAAASUVORK5CYII="},"6cfc":function(t,e,i){},"6fee":function(t,e,i){},"7af9":function(t,e,i){},"80f7":function(t,e,i){},"85ec":function(t,e,i){},"887f":function(t,e,i){"use strict";i("88c5")},"88c5":function(t,e,i){},9567:function(t,e,i){t.exports=i.p+"img/bofang.f952b465.png"},"994d":function(t,e){t.exports="data:image/png;base64,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"},"9b12":function(t,e,i){"use strict";i("c8e8")},b01b:function(t,e,i){},b1de:function(t,e,i){"use strict";i("b01b")},b5c4:function(t,e,i){t.exports=i.p+"img/唱.7552f8fe.png"},ba21:function(t,e,i){},bda3:function(t,e,i){"use strict";i("ba21")},be73:function(t,e,i){"use strict";i("80f7")},bec3:function(t,e,i){},c18f:function(t,e,i){"use strict";i("3f69")},c367:function(t,e,i){},c8e8:function(t,e,i){},cb0e:function(t,e,i){"use strict";i("c367")},d2e5:function(t,e,i){"use strict";i("6cfc")},d40a:function(t,e,i){"use strict";i("6fee")},db15:function(t,e,i){},f2a8:function(t,e,i){},f86b:function(t,e,i){"use strict";i("db15")},fd47:function(t,e,i){"use strict";i("bec3")}});
//# sourceMappingURL=app.4b0db73c.js.map