import{a as C,v as R,w as T,f as c,i,a6 as B,M as I,ak as M,cO as k,n as o,cA as P,au as D,aD as L,aw as S,o as j,j as q,z as _,m as g,t as W,B as E}from"./index.92107cb9.js";import{D as z}from"./index.1300a4fd.js";import{P as O}from"./index.3459e11c.js";import"./index.482f421c.js";import"./index.bf07ecfb.js";import"./useSize.dbe69be2.js";import"./eagerComputed.03379843.js";import"./useWindowSizeFn.bf8a40f0.js";import"./useContentViewHeight.dfe4b065.js";import"./ArrowLeftOutlined.54d94ecf.js";import"./index.c24fbde5.js";import"./transButton.ea02a1ac.js";const U={height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String],bench:{type:[Number,String],default:0},itemHeight:{type:[Number,String],required:!0},items:{type:Array,default:()=>[]}},w="virtual-scroll";function s(t,a="px"){if(!(t==null||t===""))return isNaN(+t)?String(t):`${Number(t)}${a}`}var G=C({name:"VirtualScroll",props:U,setup(t,{slots:a}){const u=R(null),n=T({first:0,last:0,scrollTop:0}),p=c(()=>parseInt(t.bench,10)),m=c(()=>parseInt(t.itemHeight,10)),d=c(()=>Math.max(0,n.first-i(p))),f=c(()=>Math.min((t.items||[]).length,n.last+i(p))),v=c(()=>({height:s((t.items||[]).length*i(m))})),h=c(()=>{const e={},r=s(t.height),l=s(t.minHeight),H=s(t.minWidth),b=s(t.maxHeight),N=s(t.maxWidth),F=s(t.width);return r&&(e.height=r),l&&(e.minHeight=l),H&&(e.minWidth=H),b&&(e.maxHeight=b),N&&(e.maxWidth=N),F&&(e.width=F),e});B([()=>t.itemHeight,()=>t.height],()=>{x()});function y(e){const r=i(u);if(!r)return 0;const l=parseInt(t.height||0,10)||r.clientHeight;return e+Math.ceil(l/i(m))}function V(){return Math.floor(n.scrollTop/i(m))}function x(){const e=i(u);!e||(n.scrollTop=e.scrollTop,n.first=V(),n.last=y(n.first))}function $(){const{items:e=[]}=t;return e.slice(i(d),i(f)).map(A)}function A(e,r){r+=i(d);const l=s(r*i(m));return o("div",{class:`${w}__item`,style:{top:l},key:r},[P(a,"default",{index:r,item:e})])}return I(()=>{n.last=y(0),M(()=>{const e=i(u);!e||k({el:e,name:"scroll",listener:x,wait:0})})}),()=>o("div",{class:w,style:i(h),ref:u},[o("div",{class:`${w}__container`,style:i(v)},[$()])])}});var J=D(G,[["__scopeId","data-v-dd7becb6"]]);const K=L(J);const Q=(()=>{const t=[];for(let a=1;a<2e4;a++)t.push({title:"\u5217\u8868\u9879"+a});return t})(),X=C({components:{VScroll:K,Divider:z,PageWrapper:O},setup(){return{data:Q}}}),Y=E("\u57FA\u7840\u6EDA\u52A8\u793A\u4F8B"),Z={class:"virtual-scroll-demo-wrap"},tt={class:"virtual-scroll-demo__item"},et=E("\u5373\u4F7F\u4E0D\u53EF\u89C1\uFF0C\u4E5F\u9884\u5148\u52A0\u8F7D50\u6761\u6570\u636E\uFF0C\u9632\u6B62\u7A7A\u767D"),it={class:"virtual-scroll-demo-wrap"},rt={class:"virtual-scroll-demo__item"};function nt(t,a,u,n,p,m){const d=S("Divider"),f=S("VScroll"),v=S("PageWrapper");return j(),q(v,{class:"virtual-scroll-demo"},{default:_(()=>[o(d,null,{default:_(()=>[Y]),_:1}),g("div",Z,[o(f,{itemHeight:41,items:t.data,height:300,width:300},{default:_(({item:h})=>[g("div",tt,W(h.title),1)]),_:1},8,["items"])]),o(d,null,{default:_(()=>[et]),_:1}),g("div",it,[o(f,{itemHeight:41,items:t.data,height:300,width:300,bench:50},{default:_(({item:h})=>[g("div",rt,W(h.title),1)]),_:1},8,["items"])])]),_:1})}var pt=D(X,[["render",nt],["__scopeId","data-v-002a1a68"]]);export{pt as default};