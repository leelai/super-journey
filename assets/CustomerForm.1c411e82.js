import{B as C}from"./BasicForm.bc0f8fbd.js";import{u as B}from"./useForm.7372232c.js";import{av as E,a as g,cC as F,I as n,ax as e,o as h,j as v,z as p,n as i,bR as b,E as A}from"./index.b2c8267b.js";import{P}from"./index.81a31c0e.js";/* empty css              *//* empty css               */import"./index.a400d60a.js";import"./index.e8238668.js";import"./Checkbox.d390f37b.js";import"./index.d7bcac17.js";import"./index.b09eff01.js";import"./index.211c7c9b.js";import"./index.57aac341.js";import"./index.5fb436a4.js";import"./get.1d45560b.js";import"./index.11ebb1a6.js";import"./eagerComputed.c0ebbc1b.js";import"./index.f4a2f498.js";import"./_baseIteratee.7354d7ba.js";import"./DeleteOutlined.c79b4ea5.js";import"./index.346f1070.js";import"./useRefs.ea975f28.js";import"./Form.b96a02a1.js";import"./Col.b384eb90.js";import"./useFlexGapSupport.727191ee.js";import"./useSize.1e7f957b.js";import"./index.a3f63598.js";import"./index.3272a407.js";import"./useWindowSizeFn.e63f4fea.js";import"./FullscreenOutlined.f58a66ff.js";import"./index.45745d3c.js";import"./index.78e4de31.js";import"./uuid.9bdf29ec.js";import"./download.59b447fa.js";import"./base64Conver.08b9f4ec.js";import"./index.c45668aa.js";import"./index.c86c9338.js";import"./uniqBy.b8dc3978.js";import"./index.9be49184.js";import"./index.e4d59aad.js";import"./useContentViewHeight.dee9462e.js";import"./ArrowLeftOutlined.adb1bdea.js";import"./index.161ccdd8.js";import"./transButton.c6a24c5f.js";const u=[{field:"field1",component:"Input",label:"render\u65B9\u5F0F",colProps:{span:8},rules:[{required:!0}],render:({model:o,field:t})=>b(n,{placeholder:"\u8BF7\u8F93\u5165",value:o[t],onChange:r=>{o[t]=r.target.value}})},{field:"field2",component:"Input",label:"render\u7EC4\u4EF6slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"\u81EA\u5B9A\u4E49Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}],S=g({components:{BasicForm:C,CollapseContainer:F,PageWrapper:P,[n.name]:n},setup(){const{createMessage:o}=A(),[t,{setProps:r}]=B({labelWidth:120,schemas:u,actionColOptions:{span:24}});return{register:t,schemas:u,handleSubmit:a=>{o.success("click search,values:"+JSON.stringify(a))},setProps:r}}});function x(o,t,r,a,I,W){const l=e("a-input"),c=e("BasicForm"),d=e("CollapseContainer"),f=e("PageWrapper");return h(),v(f,{title:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u793A\u4F8B"},{default:p(()=>[i(d,{title:"\u81EA\u5B9A\u4E49\u8868\u5355"},{default:p(()=>[i(c,{onRegister:o.register,onSubmit:o.handleSubmit},{f3:p(({model:s,field:m})=>[i(l,{value:s[m],"onUpdate:value":_=>s[m]=_,placeholder:"\u81EA\u5B9A\u4E49slot"},null,8,["value","onUpdate:value"])]),_:1},8,["onRegister","onSubmit"])]),_:1})]),_:1})}var ho=E(S,[["render",x]]);export{ho as default};
