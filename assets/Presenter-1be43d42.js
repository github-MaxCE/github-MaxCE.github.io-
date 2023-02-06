import{n as d,l as b,ai as e,A as y,as as H,t as v,f as T,h as B,j as E,at as S,au as h,ar as P,y as t,_ as z,av as A,aw as D,c as C,K as I,q as L,ax as R,ay as j,w as q,m as u,aj as F,al as x,az as M,aA as $,ap as O,af as U,aB as w,aC as G,F as K,d as N,aD as W,aE as Z,aF as J,aG as Q,aH as X,aI as Y,aq as V,aJ as ee,aK as te,aL as se,b as oe,an as ae,aM as ne,aN as le,aO as ie,aP as re}from"./nav-19d786eb.js";import{N as ce}from"./NoteViewer-9481d853.js";import ue from"./DrawingControls-4bc6516b.js";import{u as de}from"./index-2507167a.js";const _e={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},me=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),pe=[me];function he(a,l){return d(),b("svg",_e,pe)}const ve={name:"carbon-renew",render:he},fe={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ge=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),xe=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),we=[ge,xe];function ye(a,l){return d(),b("svg",fe,we)}const Se={name:"carbon-time",render:ye},be=""+new URL("logo-title-horizontal-96c3c915.png",import.meta.url).href;function ke(){const a=y(Date.now()),l=H({interval:1e3}),_=v(()=>{const s=(l.value-a.value)/1e3,n=Math.floor(s%60).toString().padStart(2,"0");return`${Math.floor(s/60).toString().padStart(2,"0")}:${n}`});function m(){a.value=l.value}return{timer:_,resetTimer:m}}const Ce=T({__name:"NoteStatic",props:{class:{type:String,required:!1}},setup(a){const l=a;B(E);const _=v(()=>{var s,n,o;return(o=(n=(s=S.value)==null?void 0:s.meta)==null?void 0:n.slide)==null?void 0:o.note}),m=v(()=>{var s,n,o;return(o=(n=(s=S.value)==null?void 0:s.meta)==null?void 0:n.slide)==null?void 0:o.notesHTML});return(s,n)=>(d(),h(ce,{class:P(l.class),note:t(_),"note-html":t(m)},null,8,["class","note","note-html"]))}}),Me=z(Ce,[["__file","/home/runner/work/github-MaxCE.github.io/github-MaxCE.github.io/node_modules/@slidev/client/internals/NoteStatic.vue"]]),f=a=>(ne("data-v-574fd206"),a=a(),le(),a),$e={class:"bg-main h-full slidev-presenter"},Ne={class:"grid-container"},Ve={class:"grid-section top flex"},Te=f(()=>e("img",{src:be,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2"},null,-1)),Be=f(()=>e("div",{class:"flex-auto"},null,-1)),Ee={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},Pe=f(()=>e("div",{class:"context"}," current ",-1)),ze=f(()=>e("div",{class:"context"}," next ",-1)),He={class:"grid-section note overflow-auto"},Ae={class:"grid-section bottom"},De={class:"progress-bar"},Ie=T({__name:"Presenter",setup(a){B(E);const l=y();A(),D(l);const _=C.titleTemplate.replace("%s",C.title||"Slidev");de({title:`Presenter - ${_}`});const{timer:m,resetTimer:s}=ke(),n=y([]),o=v(()=>N.value<W.value?{route:S.value,clicks:N.value+1}:Z.value?{route:J.value,clicks:0}:null);return I(()=>{const k=l.value.querySelector("#slide-content"),r=L(R()),g=j();q(()=>{if(!g.value||X.value||!Y.value)return;const c=k.getBoundingClientRect(),i=(r.x-c.left)/c.width*100,p=(r.y-c.top)/c.height*100;if(!(i<0||i>100||p<0||p>100))return{x:i,y:p}},c=>{Q.cursor=c})}),(k,r)=>{const g=Se,c=ve;return d(),b(K,null,[e("div",$e,[e("div",Ne,[e("div",Ve,[Te,Be,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:r[0]||(r[0]=(...i)=>t(s)&&t(s)(...i))},[u(g,{class:"absolute"}),u(c,{class:"absolute opacity-0"})]),e("div",Ee,F(t(m)),1)]),e("div",{ref_key:"main",ref:l,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:x(t(V))},[u($,{key:"main",class:"h-full w-full"},{default:M(()=>[u(ee,{context:"presenter"})]),_:1}),Pe],4),e("div",{class:"relative grid-section next flex flex-col p-2 lg:p-4",style:x(t(V))},[t(o)?(d(),h($,{key:"next",class:"h-full w-full"},{default:M(()=>{var i;return[u(t(se),{is:(i=t(o).route)==null?void 0:i.component,"clicks-elements":n.value,"onUpdate:clicksElements":r[1]||(r[1]=p=>n.value=p),clicks:t(o).clicks,"clicks-disabled":!1,class:P(t(te)(t(o).route)),route:t(o).route,context:"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):O("v-if",!0),ze],4),e("div",He,[(d(),h(Me,{key:1,class:"w-full h-full overflow-auto p-2 lg:p-4"}))]),e("div",Ae,[u(ie,{persist:!0})]),(d(),h(ue,{key:0}))]),e("div",De,[e("div",{class:"progress h-2px bg-primary transition-all",style:x({width:`${(t(oe)-1)/(t(ae)-1)*100}%`})},null,4)])]),u(re),u(G,{modelValue:t(w),"onUpdate:modelValue":r[2]||(r[2]=i=>U(w)?w.value=i:null)},null,8,["modelValue"])],64)}}});const Fe=z(Ie,[["__scopeId","data-v-574fd206"],["__file","/home/runner/work/github-MaxCE.github.io/github-MaxCE.github.io/node_modules/@slidev/client/internals/Presenter.vue"]]);export{Fe as default};