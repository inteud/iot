var re=Object.defineProperty,le=Object.defineProperties;var se=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var $=(t,e,o)=>e in t?re(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,y=(t,e)=>{for(var o in e||(e={}))M.call(e,o)&&$(t,o,e[o]);if(O)for(var o of O(e))R.call(e,o)&&$(t,o,e[o]);return t},_=(t,e)=>le(t,se(e));var A=(t,e)=>{var o={};for(var i in t)M.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(t!=null&&O)for(var i of O(t))e.indexOf(i)<0&&R.call(t,i)&&(o[i]=t[i]);return o};import{r as c,j as m,k as W,p as Z,i as G,o as E,f as L,h as H,l as T,m as S,q as j,s as g,v as C,x as B,y as Q,z as ae,A as de,F as ue,B as ce,C as pe,D as X}from"./index.5543a323.js";let I=Symbol("map"),P=Symbol("api"),Y=Symbol("marker"),ee=Symbol("mapTilesLoaded"),K=c(null),k="click dblclick drag dragend dragstart mousedown mousemove mouseout mouseover mouseup rightclick".split(" ");var he=function t(e,o){if(e===o)return!0;if(e&&o&&typeof e=="object"&&typeof o=="object"){if(e.constructor!==o.constructor)return!1;var i;if(Array.isArray(e)){var r=e.length;if(r!=o.length)return!1;for(i=r;i--!==0;)if(!t(e[i],o[i]))return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();var d=Object.keys(e);if(r=d.length,r!==Object.keys(o).length)return!1;for(i=r;i--!==0;)if(!Object.prototype.hasOwnProperty.call(o,d[i]))return!1;for(i=r;i--!==0;)if(r=d[i],!t(e[r],o[r]))return!1;return!0}return e!==e&&o!==o};class f{constructor({apiKey:e,channel:o,client:i,id:r="__googleMapsScriptId",libraries:d=[],language:a,region:h,version:u,mapIds:v,nonce:l,retries:n=3,url:s="https://maps.googleapis.com/maps/api/js"}){if(this.CALLBACK="__googleMapsCallback",this.callbacks=[],this.loading=this.done=!1,this.errors=[],this.version=u,this.apiKey=e,this.channel=o,this.client=i,this.id=r||"__googleMapsScriptId",this.libraries=d,this.language=a,this.region=h,this.mapIds=v,this.nonce=l,this.retries=n,this.url=s,f.instance){if(!he(this.options,f.instance.options))throw Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(f.instance.options)}`);return f.instance}f.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url}}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let e=this.url;return e+=`?callback=${this.CALLBACK}`,this.apiKey&&(e+=`&key=${this.apiKey}`),this.channel&&(e+=`&channel=${this.channel}`),this.client&&(e+=`&client=${this.client}`),0<this.libraries.length&&(e+=`&libraries=${this.libraries.join(",")}`),this.language&&(e+=`&language=${this.language}`),this.region&&(e+=`&region=${this.region}`),this.version&&(e+=`&v=${this.version}`),this.mapIds&&(e+=`&map_ids=${this.mapIds.join(",")}`),e}deleteScript(){let e=document.getElementById(this.id);e&&e.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise((e,o)=>{this.loadCallback(i=>{i?o(i.error):e(window.google)})})}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){if(document.getElementById(this.id))this.callback();else{var e=this.createUrl(),o=document.createElement("script");o.id=this.id,o.type="text/javascript",o.src=e,o.onerror=this.loadErrorCallback.bind(this),o.defer=!0,o.async=!0,this.nonce&&(o.nonce=this.nonce),document.head.appendChild(o)}}reset(){this.deleteScript(),this.loading=this.done=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(e){this.errors.push(e),this.errors.length<=this.retries?(e=this.errors.length*Math.pow(2,this.errors.length),console.log(`Failed to load Google Maps script, retrying in ${e} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},e)):(this.onerrorEvent=e,this.callback())}setCallback(){window.__googleMapsCallback=this.callback.bind(this)}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach(e=>{e(this.onerrorEvent)}),this.callbacks=[]}execute(){this.resetIfRetryingFailed(),this.done?this.callback():window.google&&window.google.maps&&window.google.maps.version?(console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),this.callback()):this.loading||(this.loading=!0,this.setCallback(),this.setScript())}}let V="bounds_changed center_changed click dblclick drag dragend dragstart heading_changed idle maptypeid_changed mousemove mouseout mouseover projection_changed resize rightclick tilesloaded tilt_changed zoom_changed".split(" ");var te=m({props:{apiKey:{type:String,default:""},version:{type:String,default:"weekly"},libraries:{type:Array,default:()=>["places"]},region:{type:String,required:!1},language:{type:String,required:!1},backgroundColor:{type:String,required:!1},center:{type:Object,default:()=>({lat:0,lng:0})},clickableIcons:{type:Boolean,required:!1,default:void 0},controlSize:{type:Number,required:!1},disableDefaultUi:{type:Boolean,required:!1,default:void 0},disableDoubleClickZoom:{type:Boolean,required:!1,default:void 0},draggable:{type:Boolean,required:!1,default:void 0},draggableCursor:{type:String,required:!1},draggingCursor:{type:String,required:!1},fullscreenControl:{type:Boolean,required:!1,default:void 0},fullscreenControlPosition:{type:String,required:!1},gestureHandling:{type:String,required:!1},heading:{type:Number,required:!1},keyboardShortcuts:{type:Boolean,required:!1,default:void 0},mapTypeControl:{type:Boolean,required:!1,default:void 0},mapTypeControlOptions:{type:Object,required:!1},mapTypeId:{type:[Number,String],required:!1},maxZoom:{type:Number,required:!1},minZoom:{type:Number,required:!1},noClear:{type:Boolean,required:!1,default:void 0},panControl:{type:Boolean,required:!1,default:void 0},panControlPosition:{type:String,required:!1},restriction:{type:Object,required:!1},rotateControl:{type:Boolean,required:!1,default:void 0},rotateControlPosition:{type:String,required:!1},scaleControl:{type:Boolean,required:!1,default:void 0},scaleControlStyle:{type:Number,required:!1},scrollwheel:{type:Boolean,required:!1,default:void 0},streetView:{type:Object,required:!1},streetViewControl:{type:Boolean,required:!1,default:void 0},streetViewControlPosition:{type:String,required:!1},styles:{type:Array,required:!1},tilt:{type:Number,required:!1},zoom:{type:Number,required:!1},zoomControl:{type:Boolean,required:!1,default:void 0},zoomControlPosition:{type:String,required:!1}},emits:V,setup(t,{emit:e}){let o=c(null),i=c(!1),r=c(null),d=c(null),a=c(!1);j(I,r),j(P,d),j(ee,a);let h=()=>{const l=y({},t);Object.keys(l).forEach(s=>{l[s]===void 0&&delete l[s]});var n=s=>{var p;return s?{position:(p=d.value)===null||p===void 0?void 0:p.ControlPosition[s]}:{}};return n={scaleControlOptions:t.scaleControlStyle?{style:t.scaleControlStyle}:{},panControlOptions:n(t.panControlPosition),zoomControlOptions:n(t.zoomControlPosition),rotateControlOptions:n(t.rotateControlPosition),streetViewControlOptions:n(t.streetViewControlPosition),fullscreenControlOptions:n(t.fullscreenControlPosition),disableDefaultUI:t.disableDefaultUi},y(y({},l),n)},u=C([d,r],([l,n])=>{l&&n&&(l.event.addListenerOnce(n,"tilesloaded",()=>{a.value=!0}),setTimeout(u,0))},{immediate:!0}),v=()=>{try{const{apiKey:l,region:n,version:s,language:p,libraries:b}=t;K.value=new f({apiKey:l,region:n,version:s,language:p,libraries:b})}catch(l){console.error(l)}};return X(()=>{v(),K.value.load().then(()=>{d.value=google.maps,r.value=new google.maps.Map(o.value,h()),V.forEach(n=>{var s;(s=r.value)===null||s===void 0||s.addListener(n,p=>e(n,p))}),i.value=!0;let l=Object.keys(t).filter(n=>!["center","zoom"].includes(n)).map(n=>S(t,n));C([()=>t.center,()=>t.zoom,...l],([n,s],[p,b])=>{var w,N,x;let z=h(),{center:Se,zoom:we}=z,ne=A(z,["center","zoom"]);(w=r.value)===null||w===void 0||w.setOptions(ne),s!==void 0&&s!==b&&((N=r.value)===null||N===void 0||N.setZoom(s)),s=!p||n.lng!==p.lng||n.lat!==p.lat,n&&s&&((x=r.value)===null||x===void 0||x.panTo(n))})})}),B(()=>{var l;a.value=!1,r.value&&((l=d.value)===null||l===void 0||l.event.clearInstanceListeners(r.value))}),{mapRef:o,ready:i,map:r,api:d,mapTilesLoaded:a}}});function oe(t,e){if(e===void 0&&(e={}),e=e.insertAt,t&&typeof document!="undefined"){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",e==="top"&&o.firstChild?o.insertBefore(i,o.firstChild):o.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}oe(`
.mapdiv[data-v-177d06e3] {
  width: 100%;
  height: 100%;
}
`);let ve=W("data-v-177d06e3");Z("data-v-177d06e3");let ge={ref:"mapRef",class:"mapdiv"};G();let me=ve(t=>(E(),L("div",null,[H("div",ge,null,512),T(t.$slots,"default",{ready:t.ready,map:t.map,api:t.api,mapTilesLoaded:t.mapTilesLoaded},void 0,!0)])));te.render=me;te.__scopeId="data-v-177d06e3";let q=(t,e,o,i)=>{let r=null;const d=c(null),a=g(I,c(null)),h=g(P,c(null));return C([a,o],(u,[v,l])=>{u=JSON.stringify(o.value)!==JSON.stringify(l)||a.value!==v,a.value&&h.value&&u&&(r?(r.setOptions(o.value),r.setMap(a.value)):(d.value=r=new h.value[t](_(y({},o.value),{map:a.value})),e.forEach(n=>{r==null||r.addListener(n,s=>i(n,s))})))},{immediate:!0}),B(()=>{var u;r&&((u=h.value)===null||u===void 0||u.event.clearInstanceListeners(r),r.setMap(null))}),d},D="animation_changed click dblclick rightclick dragstart dragend drag mouseover mousedown mouseout mouseup draggable_changed clickable_changed contextmenu cursor_changed flat_changed rightclick zindex_changed icon_changed position_changed shape_changed title_changed visible_changed".split(" ");var _e=m({name:"Marker",props:{options:{type:Object,required:!0}},emits:D,setup(t,{emit:e,expose:o,slots:i}){return t=S(t,"options"),e=q("Marker",D,t,e),j(Y,e),o({marker:e}),()=>{var r;return(r=i.default)===null||r===void 0?void 0:r.call(i)}}});m({name:"Polyline",props:{options:{type:Object,required:!0}},emits:k,setup(t,{emit:e}){return t=S(t,"options"),{polyline:q("Polyline",k,t,e)}},render:()=>null});m({name:"Polygon",props:{options:{type:Object,required:!0}},emits:k,setup(t,{emit:e}){return t=S(t,"options"),{polygon:q("Polygon",k,t,e)}},render:()=>null});let U=k.concat(["bounds_changed"]);m({name:"Rectangle",props:{options:{type:Object,required:!0}},emits:U,setup(t,{emit:e}){return t=S(t,"options"),{rectangle:q("Rectangle",U,t,e)}},render:()=>null});let F=k.concat(["center_changed","radius_changed"]);m({name:"Circle",props:{options:{type:Object,required:!0}},emits:F,setup(t,{emit:e}){return t=S(t,"options"),{circle:q("Circle",F,t,e)}},render:()=>null});var ye=m({props:{position:{type:String,required:!0},index:{type:Number,default:1}},emits:["content:loaded"],setup(t,{emit:e}){let o=c(null),i=g(I,c(null)),r=g(P,c(null)),d=g(ee,c(!1)),a=c(!1),h=C([d,r,o],([l,n,s])=>{n&&l&&s&&(u(t.position),a.value=!0,e("content:loaded"),setTimeout(h,0))},{immediate:!0}),u=l=>{i.value&&r.value&&o.value&&i.value.controls[r.value.ControlPosition[l]].push(o.value)},v=l=>{if(i.value&&r.value){let n=null;l=r.value.ControlPosition[l],i.value.controls[l].forEach((s,p)=>{s===o.value&&(n=p)}),n!==null&&i.value.controls[l].removeAt(n)}};return B(()=>v(t.position)),C(()=>t.position,(l,n)=>{v(n),u(l)}),C(()=>t.index,l=>{l&&o.value&&(o.value.index=t.index)}),{controlRef:o,showContent:a}}});let fe={ref:"controlRef"};ye.render=function(t){return E(),L(ue,null,[Q(`
    v-show must be used instead of v-if otherwise there
    would be no rendered content pushed to the map controls
  `),ae(H("div",fe,[T(t.$slots,"default")],512),[[de,t.showContent]])],2112)};let J="closeclick content_changed domready position_changed visible zindex_changed".split(" ");var ie=m({props:{options:{type:Object,default:()=>({})}},emits:J,setup(t,{slots:e,emit:o}){let i,r=c(),d=c(),a=g(I,c(null)),h=g(P,c(null)),u=g(Y,c(null)),v,l=ce(()=>{var n;return(n=e.default)===null||n===void 0?void 0:n.call(e).some(s=>s.type!==pe)});return X(()=>{C([a,()=>t.options],([,n],[s,p])=>{s=JSON.stringify(n)!==JSON.stringify(p)||a.value!==s,a.value&&h.value&&s&&(i?(i.setOptions(_(y({},n),{content:l.value?d.value:n.content})),u.value||i.open({map:a.value})):(r.value=i=new h.value.InfoWindow(_(y({},n),{content:l.value?d.value:n.content})),u.value?v=u.value.addListener("click",()=>{i.open({map:a.value,anchor:u.value})}):i.open({map:a.value}),J.forEach(b=>{i==null||i.addListener(b,w=>o(b,w))})))},{immediate:!0})}),B(()=>{var n;v&&v.remove(),i&&((n=h.value)===null||n===void 0||n.event.clearInstanceListeners(i),i.close())}),{infoWindow:r,infoWindowRef:d,hasSlotContent:l,anchor:u}}});oe(`
.info-window-content[data-v-5b373d6e] {
  display: none;
}
.mapdiv .info-window-content[data-v-5b373d6e] {
  display: block;
}
`);let Ce=W("data-v-5b373d6e");Z("data-v-5b373d6e");let be={key:0,ref:"infoWindowRef",class:"info-window-content"};G();let ke=Ce(t=>t.hasSlotContent?(E(),L("div",be,[T(t.$slots,"default",{},void 0,!0)],512)):Q("v-if",!0));ie.render=ke;ie.__scopeId="data-v-5b373d6e";export{te as A,_e as H,ie as S};
