import{au as B,a as h,ae as w,v as C,aw as r,o as _,j as y,z as a,n as u,aG as R,ak as $,B as n}from"./index.00ded5ec.js";import{A as T}from"./index.3ae0d52e.js";import{S as V}from"./index.47034b24.js";import{b as d}from"./index.fd3f14ec.js";import k from"./Modal1.5762ba25.js";import D from"./Modal2.4df401b7.js";import v from"./Modal3.3292d3e1.js";import b from"./Modal4.a03dd83c.js";import{P}from"./index.9927dec8.js";import"./useFlexGapSupport.641c96d8.js";import"./useWindowSizeFn.8613736c.js";import"./FullscreenOutlined.9fa31b99.js";import"./BasicForm.e2136524.js";/* empty css              *//* empty css               */import"./index.b5127d68.js";import"./index.603fa52d.js";import"./Checkbox.e1e6f642.js";import"./index.00c8deee.js";import"./index.22208324.js";import"./index.b378a6aa.js";import"./index.bc3beb44.js";import"./index.6f890765.js";import"./get.e98c9102.js";import"./index.ca68839c.js";import"./eagerComputed.5fd5be55.js";import"./index.a439fbd0.js";import"./_baseIteratee.5a800ee0.js";import"./DeleteOutlined.d374c42e.js";import"./index.39991b12.js";import"./useRefs.35df9853.js";import"./Form.8bff5e4e.js";import"./Col.8d574553.js";import"./useSize.ddff592e.js";import"./index.fa69315c.js";import"./uuid.9bdf29ec.js";import"./download.1c38bf09.js";import"./base64Conver.08b9f4ec.js";import"./index.9306f112.js";import"./index.080dba7a.js";import"./uniqBy.f5f9fa77.js";import"./useForm.949127c8.js";import"./index.3f27b734.js";import"./index.c32d3109.js";import"./useContentViewHeight.e5cdac7c.js";import"./ArrowLeftOutlined.d0c01883.js";import"./index.9f86c066.js";import"./transButton.c964a4e6.js";const S=h({components:{Alert:T,Modal1:k,Modal2:D,Modal3:v,Modal4:b,PageWrapper:P,ASpace:V},setup(){const o=w(null),[e,{openModal:F}]=d(),[f,{openModal:M}]=d(),[g,{openModal:i}]=d(),[t,{openModal:p}]=d(),l=C(!1),m=C(null);function c(){p(!0,{data:"content",info:"Info"})}function A(){F(!0)}function E(s){switch(s){case 1:o.value=k;break;case 2:o.value=D;break;case 3:o.value=v;break;default:o.value=b;break}$(()=>{m.value={data:Math.random(),info:"Info222"},l.value=!0})}return{register1:e,openModal1:F,register2:f,openModal2:M,register3:g,openModal3:i,register4:t,openModal4:p,modalVisible:l,userData:m,openTargetModal:E,send:c,currentModal:o,openModalLoading:A}}}),W=n(" \u6253\u5F00\u5F39\u7A97,\u52A0\u8F7D\u52A8\u6001\u6570\u636E\u5E76\u81EA\u52A8\u8C03\u6574\u9AD8\u5EA6(\u9ED8\u8BA4\u53EF\u4EE5\u62D6\u52A8/\u5168\u5C4F) "),I=n(" \u6253\u5F00\u5F39\u7A97 "),L=n(" \u6253\u5F00\u5F39\u7A97 "),N=n(" \u6253\u5F00\u5F39\u7A97\u5E76\u4F20\u9012\u6570\u636E "),j=n(" \u6253\u5F00\u5F39\u7A971 "),z=n(" \u6253\u5F00\u5F39\u7A972 "),G=n(" \u6253\u5F00\u5F39\u7A973 "),H=n(" \u6253\u5F00\u5F39\u7A974 ");function U(o,e,F,f,M,g){const i=r("Alert"),t=r("a-button"),p=r("a-space"),l=r("Modal1"),m=r("Modal2"),c=r("Modal3"),A=r("Modal4"),E=r("PageWrapper");return _(),y(E,{title:"modal\u7EC4\u4EF6\u4F7F\u7528\u793A\u4F8B"},{default:a(()=>[u(i,{message:`\u4F7F\u7528 useModal \u8FDB\u884C\u5F39\u7A97\u64CD\u4F5C\uFF0C\u9ED8\u8BA4\u53EF\u4EE5\u62D6\u52A8\uFF0C\u53EF\u4EE5\u901A\u8FC7 draggable
    \u53C2\u6570\u8FDB\u884C\u63A7\u5236\u662F\u5426\u53EF\u4EE5\u62D6\u52A8/\u5168\u5C4F\uFF0C\u5E76\u6F14\u793A\u4E86\u5728Modal\u5185\u52A8\u6001\u52A0\u8F7D\u5185\u5BB9\u5E76\u81EA\u52A8\u8C03\u6574\u9AD8\u5EA6`,"show-icon":""}),u(t,{type:"primary",class:"my-4",onClick:o.openModalLoading},{default:a(()=>[W]),_:1},8,["onClick"]),u(i,{message:"\u5185\u5916\u540C\u65F6\u540C\u65F6\u663E\u793A\u9690\u85CF","show-icon":""}),u(t,{type:"primary",class:"my-4",onClick:o.openModal2},{default:a(()=>[I]),_:1},8,["onClick"]),u(i,{message:"\u81EA\u9002\u5E94\u9AD8\u5EA6","show-icon":""}),u(t,{type:"primary",class:"my-4",onClick:o.openModal3},{default:a(()=>[L]),_:1},8,["onClick"]),u(i,{message:"\u5185\u5916\u6570\u636E\u4EA4\u4E92","show-icon":""}),u(t,{type:"primary",class:"my-4",onClick:o.send},{default:a(()=>[N]),_:1},8,["onClick"]),u(i,{message:"\u4F7F\u7528\u52A8\u6001\u7EC4\u4EF6\u7684\u65B9\u5F0F\u5728\u9875\u9762\u5185\u4F7F\u7528\u591A\u4E2A\u5F39\u7A97","show-icon":""}),u(p,null,{default:a(()=>[u(t,{type:"primary",class:"my-4",onClick:e[0]||(e[0]=s=>o.openTargetModal(1))},{default:a(()=>[j]),_:1}),u(t,{type:"primary",class:"my-4",onClick:e[1]||(e[1]=s=>o.openTargetModal(2))},{default:a(()=>[z]),_:1}),u(t,{type:"primary",class:"my-4",onClick:e[2]||(e[2]=s=>o.openTargetModal(3))},{default:a(()=>[G]),_:1}),u(t,{type:"primary",class:"my-4",onClick:e[3]||(e[3]=s=>o.openTargetModal(4))},{default:a(()=>[H]),_:1})]),_:1}),(_(),y(R(o.currentModal),{visible:o.modalVisible,"onUpdate:visible":e[4]||(e[4]=s=>o.modalVisible=s),userData:o.userData},null,40,["visible","userData"])),u(l,{onRegister:o.register1,minHeight:100},null,8,["onRegister"]),u(m,{onRegister:o.register2},null,8,["onRegister"]),u(c,{onRegister:o.register3},null,8,["onRegister"]),u(A,{onRegister:o.register4},null,8,["onRegister"])]),_:1})}var jo=B(S,[["render",U]]);export{jo as default};