import{au as f,a as E,bC as A,v,aw as c,o as _,j as C,z as s,m as a,n as l,h as F,az as B,t as D,F as k,B as u,i as $}from"./index.92107cb9.js";import{P as g}from"./index.3459e11c.js";import"./index.482f421c.js";import"./index.bf07ecfb.js";import"./useSize.dbe69be2.js";import"./eagerComputed.03379843.js";import"./useWindowSizeFn.bf8a40f0.js";import"./useContentViewHeight.dfe4b065.js";import"./ArrowLeftOutlined.54d94ecf.js";import"./index.c24fbde5.js";import"./transButton.ea02a1ac.js";const y=E({components:{ScrollContainer:A,PageWrapper:g},setup(){const t=v(null),o=()=>{const r=$(t);if(!r)throw new Error("scroll is Null");return r};function i(r){o().scrollTo(r)}function p(){o().scrollBottom()}return{scrollTo:i,scrollRef:t,scrollBottom:p}}}),T={class:"my-4"},b=u(" \u6EDA\u52A8\u5230100px\u4F4D\u7F6E "),w=u(" \u6EDA\u52A8\u5230800px\u4F4D\u7F6E "),S=u(" \u6EDA\u52A8\u5230\u9876\u90E8 "),x=u(" \u6EDA\u52A8\u5230\u5E95\u90E8 "),N={class:"scroll-wrap"},P={class:"p-3"};function h(t,o,i,p,r,V){const n=c("a-button"),m=c("ScrollContainer"),d=c("PageWrapper");return _(),C(d,{title:"\u6EDA\u52A8\u7EC4\u4EF6\u51FD\u6570\u793A\u4F8B",content:"\u57FA\u4E8Eel-scrollbar"},{default:s(()=>[a("div",T,[l(n,{onClick:o[0]||(o[0]=e=>t.scrollTo(100)),class:"mr-2"},{default:s(()=>[b]),_:1}),l(n,{onClick:o[1]||(o[1]=e=>t.scrollTo(800)),class:"mr-2"},{default:s(()=>[w]),_:1}),l(n,{onClick:o[2]||(o[2]=e=>t.scrollTo(0)),class:"mr-2"},{default:s(()=>[S]),_:1}),l(n,{onClick:o[3]||(o[3]=e=>t.scrollBottom()),class:"mr-2"},{default:s(()=>[x]),_:1})]),a("div",N,[l(m,{class:"mt-4",ref:"scrollRef"},{default:s(()=>[a("ul",P,[(_(),F(k,null,B(100,e=>a("li",{key:e,class:"p-2",style:{border:"1px solid #eee"}},D(e),1)),64))])]),_:1},512)])]),_:1})}var M=f(y,[["render",h],["__scopeId","data-v-0369ce10"]]);export{M as default};