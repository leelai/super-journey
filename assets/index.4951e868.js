import{av as _,a as f,cC as C,v as g,bG as u,ax as l,o as h,j as k,z as o,n as t,B as n,t as F,m as w}from"./index.ba3b24b5.js";import{P as S}from"./index.122169c5.js";import"./index.da51d99b.js";import"./index.ae0b5d6f.js";import"./useSize.ef0d9e5e.js";import"./eagerComputed.c7b4118f.js";import"./useWindowSizeFn.e706818d.js";import"./useContentViewHeight.e95be732.js";import"./ArrowLeftOutlined.103c8414.js";import"./index.40f803a3.js";import"./transButton.cc95c8c5.js";const y=f({components:{CollapseContainer:C,PageWrapper:S},setup(){const e=g(null),{enter:s,toggle:a,exit:i,isFullscreen:c}=u(),{toggle:m}=u(e);return{enter:s,toggleDom:m,toggle:a,isFullscreen:c,exit:i,domRef:e}}}),x=n(" Enter Window Full Screen "),D=n(" Toggle Window Full Screen "),W=n(" Exit Window Full Screen "),b=n(" Enter Dom Full Screen "),v={ref:"domRef",class:"flex items-center justify-center w-1/2 h-64 mx-auto mt-10 bg-white rounded-md"},B=n(" Exit Dom Full Screen ");function E(e,s,a,i,c,m){const r=l("a-button"),p=l("CollapseContainer"),d=l("PageWrapper");return h(),k(d,{title:"\u5168\u5C4F\u793A\u4F8B"},{default:o(()=>[t(p,{class:"w-full h-32 bg-white rounded-md",title:"Window Full Screen"},{default:o(()=>[t(r,{type:"primary",onClick:e.enter,class:"mr-2"},{default:o(()=>[x]),_:1},8,["onClick"]),t(r,{color:"success",onClick:e.toggle,class:"mr-2"},{default:o(()=>[D]),_:1},8,["onClick"]),t(r,{color:"error",onClick:e.exit,class:"mr-2"},{default:o(()=>[W]),_:1},8,["onClick"]),n(" Current State: "+F(e.isFullscreen),1)]),_:1}),t(p,{class:"w-full mt-5 bg-white rounded-md",title:"Dom Full Screen"},{default:o(()=>[t(r,{type:"primary",onClick:e.toggleDom,class:"mr-2"},{default:o(()=>[b]),_:1},8,["onClick"])]),_:1}),w("div",v,[t(r,{type:"primary",onClick:e.toggleDom,class:"mr-2"},{default:o(()=>[B]),_:1},8,["onClick"])],512)]),_:1})}var H=_(y,[["render",E]]);export{H as default};