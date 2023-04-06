import{d as S,D as O,h as m,J as fe,b as pe,g as me,e as ve,i as _e,j as z,k as te,f as x,w as L,_ as Q,y as ge,z as $,a2 as he,o as b,c as I,K as ye,n as k,x as h,t as H,F as we,a3 as xe,a4 as ne,u as oe,s as be,a5 as Ce,a6 as Ee,r as P,A as Oe,T as B,a7 as V,a8 as U,Z as ke,I as N,a9 as Ie,l as Te,aa as Ae,ab as $e,ac as Pe,ad as Se,ae as De,af as Be,ag as Re,ah as Le,ai as He,aj as Ne,ak as Fe,al as Me,am as ze}from"./chunks/framework.97e1ae68.js";import{t as Qe}from"./chunks/theme.fdbbc588.js";const je={color:{type:String,default:"blue"},icon:{type:String,default:""},size:{type:String,default:"medium"},plain:{type:Boolean,default:!1},round:{type:Boolean,default:!1}},W=S({name:"Button",props:je,setup(e,{slots:t}){const n={small:{x:"2",y:"1",text:"sm"},medium:{x:"3",y:"1.5",text:"base"},large:{x:"4",y:"2",text:"lg"}};return()=>O("button",{class:`
          ${e.round?"rounded-full":"rounded-lg"}
          bg-${e.color}-${e.plain?"100":"500"}
          hover:bg-${e.color}-400
          border-${e.color}-${e.plain,"500"}
          cursor-pointer
          border-solid
          text-${e.plain?e.color+"-500":"white"}
          text-${n[e.size].text}
          hover:text-white
          transition duration-300 ease-in-out transform hover:scale-105
          mx-1
          my-1
          py-${n[e.size].y}
          px-${n[e.size].x}
        `},[e.icon!==""?O("i",{class:`i-ic-baseline-${e.icon} p-2`},null):"",t.default?t.default():""])}}),Ve={install(e){e.component(W.name,W)}};var G;const D=typeof window<"u",Ue=e=>typeof e=="string",F=()=>{};D&&((G=window==null?void 0:window.navigator)!=null&&G.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function T(e){return typeof e=="function"?e():pe(e)}function We(e,t){function n(...o){return new Promise((s,a)=>{Promise.resolve(e(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})).then(s).catch(a)})}return n}function Ge(e,t=!0,n=!0,o=!1){let s=0,a,r=!0,c=F,u;const d=()=>{a&&(clearTimeout(a),a=void 0,c(),c=F)};return v=>{const f=T(e),p=Date.now()-s,y=()=>u=v();return d(),f<=0?(s=Date.now(),y()):(p>f&&(n||!r)?(s=Date.now(),y()):t&&(u=new Promise((w,i)=>{c=o?i:w,a=setTimeout(()=>{s=Date.now(),r=!0,w(y()),d()},Math.max(0,f-p))})),!n&&!a&&(a=setTimeout(()=>r=!0,f)),r=!1,u)}}function Ke(e){return e}function ae(e){return me()?(ve(e),!0):!1}function Je(e,t=200,n=!1,o=!0,s=!1){return We(Ge(t,n,o,s),e)}function Ze(e,t=!0){_e()?z(e):t?e():te(e)}function qe(e,t,n={}){const{immediate:o=!0}=n,s=m(!1);let a=null;function r(){a&&(clearTimeout(a),a=null)}function c(){s.value=!1,r()}function u(...d){r(),s.value=!0,a=setTimeout(()=>{s.value=!1,a=null,e(...d)},T(t))}return o&&(s.value=!0,D&&u()),ae(c),{isPending:fe(s),start:u,stop:c}}function Xe(e){var t;const n=T(e);return(t=n==null?void 0:n.$el)!=null?t:n}const Ye=D?window:void 0,et=D?window.navigator:void 0;function tt(...e){let t,n,o,s;if(Ue(e[0])||Array.isArray(e[0])?([n,o,s]=e,t=Ye):[t,n,o,s]=e,!t)return F;Array.isArray(n)||(n=[n]),Array.isArray(o)||(o=[o]);const a=[],r=()=>{a.forEach(l=>l()),a.length=0},c=(l,v,f,p)=>(l.addEventListener(v,f,p),()=>l.removeEventListener(v,f,p)),u=L(()=>[Xe(t),T(s)],([l,v])=>{r(),l&&a.push(...n.flatMap(f=>o.map(p=>c(l,f,p,v))))},{immediate:!0,flush:"post"}),d=()=>{u(),r()};return ae(d),d}function nt(e,t=!1){const n=m(),o=()=>n.value=!!e();return o(),Ze(o,t),n}function ot(e={}){const{navigator:t=et,read:n=!1,source:o,copiedDuring:s=1500,legacy:a=!1}=e,r=["copy","cut"],c=nt(()=>t&&"clipboard"in t),u=x(()=>c.value||a),d=m(""),l=m(!1),v=qe(()=>l.value=!1,s);function f(){c.value?t.clipboard.readText().then(i=>{d.value=i}):d.value=w()}if(u.value&&n)for(const i of r)tt(i,f);async function p(i=T(o)){u.value&&i!=null&&(c.value?await t.clipboard.writeText(i):y(i),d.value=i,l.value=!0,v.start())}function y(i){const _=document.createElement("textarea");_.value=i??"",_.style.position="absolute",_.style.opacity="0",document.body.appendChild(_),_.select(),document.execCommand("copy"),_.remove()}function w(){var i,_,A;return(A=(_=(i=document==null?void 0:document.getSelection)==null?void 0:i.call(document))==null?void 0:_.toString())!=null?A:""}return{isSupported:u,text:d,copied:l,copy:p}}const K=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},J="__vueuse_ssr_handlers__";K[J]=K[J]||{};var Z;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Z||(Z={}));var at=Object.defineProperty,q=Object.getOwnPropertySymbols,st=Object.prototype.hasOwnProperty,rt=Object.prototype.propertyIsEnumerable,X=(e,t,n)=>t in e?at(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,lt=(e,t)=>{for(var n in t||(t={}))st.call(t,n)&&X(e,n,t[n]);if(q)for(var n of q(t))rt.call(t,n)&&X(e,n,t[n]);return e};const it={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};lt({linear:Ke},it);let ct=0;function ut(){return"message_"+ct++}const dt=S({setup(){const e=m([]);function t(o){const s=ut(),a={name:s,...o};e.value.push(a);const r=o.duration;setTimeout(()=>{n(s)},r*1e3)}function n(o){for(const[s,a]of e.value.entries())if(a.name===o){e.value.splice(s,1);break}}return{messages:e,add:t,remove:n}}}),ft={class:"demoblock-message-content"};function pt(e,t,n,o,s,a){return b(),ge(he,{name:"demoblock-fade",tag:"div",class:"demoblock-message-wrap"},{default:$(()=>[(b(!0),I(we,null,ye(e.messages,r=>(b(),I("div",{key:r.name,class:k(["demoblock-message",r.type?`demoblock-message-${r.type}`:""])},[h("div",ft,H(r.content),1)],2))),128))]),_:1})}const M=Q(dt,[["render",pt],["__scopeId","data-v-a43f2568"]]);M.newInstance=(e={})=>{const t=document.createElement("div"),s=xe({render(){return ne(M,{...e,ref:"messageRef"})}}).mount(t).$refs.messageRef;return document.body.appendChild(t.firstElementChild),{add(a){s.add(a)},remove(a){s.remove(a)}}};let R;function mt(){return R=R||M.newInstance(),R}function Y(e,{duration:t=3,type:n=""}){mt().add({content:e,duration:t,type:n})}const ee={info(e,t){return Y(e,{...t})},error(e,t){return Y(e,{...t,type:"error"})}};const vt={name:"Demo",props:{customClass:String,sourceCode:String},setup(e){const{copy:t}=ot(),n=oe(),o=be(),s=m(!1),a=m(!1),r=m(!1),c=m(null),u=m(null),d=m(null),l=m(null),v=m(null);L(r,g=>{if(d.value.style.height=g?`${ie.value+1}px`:"0",!g){a.value=!1,l.value.style.left="0",l.value.style.width="auto",y();return}setTimeout(()=>{window.addEventListener("scroll",p),window.addEventListener("resize",p),f()},300)}),z(()=>{te(()=>{u.value||(c.value.style.width="100%")})}),Ce(()=>{y()});const f=()=>{const{top:g,bottom:ce,left:ue}=d.value.getBoundingClientRect(),j=window.innerHeight||document.body.clientHeight;a.value=ce>j&&g+44<=j,l.value.style.left=a.value?`${ue}px`:"0";const de=a.value?1:2;l.value.style.width=`${v.value.offsetWidth-de}px`},p=Je(f,200),y=()=>{window.removeEventListener("scroll",p),window.removeEventListener("resize",p)};L(()=>o.path,g=>{w.value=g.split("/")});const w=m(o.path.split("/")),i=x(()=>w.value[w.value.length-1].split(".")[0]),_=x(()=>`demo-${i.value}`);Ee({});const A=()=>{},re=()=>{r.value=!r.value,s.value=r.value},E=x(()=>{var g;return((g=n.theme.value.demoblock)==null?void 0:g[n.localePath.value])??{"hide-text":"隐藏代码","show-text":"显示代码","copy-button-text":"复制代码片段","copy-success-text":"复制成功"}}),le=x(()=>r.value?E.value["hide-text"]:E.value["show-text"]),ie=x(()=>u.value?u.value.clientHeight+c.value.clientHeight+20:c.value.clientHeight);return{blockClass:_,hover:s,fixedControl:a,isExpanded:r,locale:E,controlText:le,onClickControl:re,highlight:c,description:u,meta:d,control:l,onCopy:async()=>{try{t(e.sourceCode),ee.info(E.value["copy-success-text"])}catch{ee.error(E.value["copy-success-text"])}},goCodepen:A,demoBlock:v}}},_t={class:"source"},gt={ref:"meta",class:"meta"},ht={key:0,ref:"description",class:"description"},yt={ref:"highlight",class:"highlight"},wt={class:"control-button-wrap"};function xt(e,t,n,o,s,a){return b(),I("div",{ref:"demoBlock",class:k(["demo-block",o.blockClass,n.customClass?n.customClass:"",{hover:o.hover}]),onMouseenter:t[2]||(t[2]=r=>o.hover=!0),onMouseleave:t[3]||(t[3]=r=>o.hover=!1)},[h("div",_t,[P(e.$slots,"default",{},void 0,!0)]),h("div",gt,[e.$slots.description?(b(),I("div",ht,[P(e.$slots,"description",{},void 0,!0)],512)):Oe("",!0),h("div",yt,[P(e.$slots,"highlight",{},void 0,!0)],512)],512),h("div",{ref:"control",class:k(["demo-block-control",{"is-fixed":o.fixedControl,"is-expanded":o.isExpanded}]),onClick:t[1]||(t[1]=(...r)=>o.onClickControl&&o.onClickControl(...r))},[O(B,{name:"arrow-slide"},{default:$(()=>[h("i",{class:k(["control-icon",{"icon-caret-down":!o.isExpanded,"icon-caret-up":o.isExpanded,hovering:o.hover}])},null,2)]),_:1}),O(B,{name:"text-slide"},{default:$(()=>[V(h("span",{class:"control-text"},H(o.controlText),513),[[U,o.hover]])]),_:1}),h("div",wt,[O(B,{name:"text-slide"},{default:$(()=>[V(h("span",{class:"control-button copy-button",onClick:t[0]||(t[0]=ke((...r)=>o.onCopy&&o.onCopy(...r),["stop"]))},H(o.locale&&o.locale["copy-button-text"]),513),[[U,o.isExpanded]])]),_:1})])],2)],34)}const bt=Q(vt,[["render",xt],["__scopeId","data-v-10125d58"]]);const Ct=S({name:"DemoBlock",props:{customClass:String}}),Et={class:"source"};function Ot(e,t,n,o,s,a){return b(),I("div",{class:k(["demo-block",[e.customClass?e.customClass:""]])},[h("div",Et,[P(e.$slots,"default",{},void 0,!0)])],2)}const kt=Q(Ct,[["render",Ot],["__scopeId","data-v-30a9d5dd"]]),It={...Qe,enhanceApp({app:e}){e.use(Ve),e.component("Demo",bt),e.component("DemoBlock",kt)}};function se(e){if(e.extends){const t=se(e.extends);return{...t,...e,async enhanceApp(n){t.enhanceApp&&await t.enhanceApp(n),e.enhanceApp&&await e.enhanceApp(n)}}}return e}const C=se(It),Tt=S({name:"VitePressApp",setup(){const{site:e}=oe();return z(()=>{Te(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),Ae(),$e(),Pe(),C.setup&&C.setup(),()=>ne(C.Layout)}});async function At(){const e=Pt(),t=$t();t.provide(Se,e);const n=De(e.route);return t.provide(Be,n),t.component("Content",Re),t.component("ClientOnly",Le),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),C.enhanceApp&&await C.enhanceApp({app:t,router:e,siteData:He}),{app:t,router:e,data:n}}function $t(){return Ne(Tt)}function Pt(){let e=N,t;return Fe(n=>{let o=Me(n);return e&&(t=o),(e||t===o)&&(o=o.replace(/\.js$/,".lean.js")),N&&(e=!1),ze(()=>import(o),[])},C.NotFound)}N&&At().then(({app:e,router:t,data:n})=>{t.go().then(()=>{Ie(t.route,n.site),e.mount("#app")})});export{At as createApp};