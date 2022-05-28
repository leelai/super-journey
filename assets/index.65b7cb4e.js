var R=Object.defineProperty,V=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var P=(t,e,r)=>e in t?R(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,o=(t,e)=>{for(var r in e||(e={}))L.call(e,r)&&P(t,r,e[r]);if(j)for(var r of j(e))q.call(e,r)&&P(t,r,e[r]);return t},x=(t,e)=>V(t,k(e));import{a as F,v as G,b as H,cz as J,f as d,i as s,n as u,aw as C,cA as K,ay as Q,cB as T,cC as U,bb as X,aE as Y}from"./index.84f51bc6.js";import{D as w}from"./index.eea23ff9.js";import{g as Z}from"./get.43c7e1f7.js";function tt(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!K(t)}const et={useCollapse:{type:Boolean,default:!0},title:{type:String,default:""},size:{type:String,validator:t=>["small","default","middle",void 0].includes(t),default:"small"},bordered:{type:Boolean,default:!0},column:{type:[Number,Object],default:()=>({xxl:4,xl:3,lg:3,md:3,sm:2,xs:1})},collapseOptions:{type:Object,default:null},schema:{type:Array,default:()=>[]},data:{type:Object}};var nt=F({name:"Description",props:et,emits:["register"],setup(t,{slots:e,emit:r}){const m=G(null),{prefixCls:S}=H("description"),_=J(),g=d(()=>o(o({},t),s(m))),f=d(()=>x(o({},s(g)),{title:void 0})),E=d(()=>!!s(g).title),A=d(()=>o({canExpand:!1},s(f).collapseOptions)),B=d(()=>o(o({},s(_)),s(f)));function I(n){m.value=o(o({},s(m)),n)}function M({label:n,labelMinWidth:i,labelStyle:a}){if(!a&&!i)return n;const l=x(o({},a),{minWidth:`${i}px `});return u("div",{style:l},[n])}function N(){const{schema:n,data:i}=s(f);return s(n).map(a=>{const{render:l,field:h,span:$,show:b,contentMinWidth:D}=a;if(b&&C(b)&&!b(i))return null;const O=()=>{var v;const c=(v=s(f))==null?void 0:v.data;if(!c)return null;const p=Z(c,h);return p&&!X(c).hasOwnProperty(h)?C(l)?l("",c):"":C(l)?l(p,c):p!=null?p:""},z=D;return u(w.Item,{label:M(a),key:h,span:$},{default:()=>{if(!D)return O();const c={minWidth:`${z}px`};return u("div",{style:c},[O()])}})}).filter(a=>!!a)}const y=()=>{let n;return u(w,Q({class:`${S}`},s(B)),tt(n=N())?n:{default:()=>[n]})},W=()=>{const n=t.useCollapse?y():u("div",null,[y()]);if(!t.useCollapse)return n;const{canExpand:i,helpMessage:a}=s(A),{title:l}=s(g);return u(U,{title:l,canExpan:i,helpMessage:a},{default:()=>n,action:()=>T(e,"action")})};return r("register",{setDescProps:I}),()=>s(E)?W():y()}});const ct=Y(nt);export{ct as D};
