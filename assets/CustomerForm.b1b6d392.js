import{B as C}from"./BasicForm.e2136524.js";import{u as B}from"./useForm.949127c8.js";import{au as E,a as g,cB as F,I as n,aw as e,o as h,j as b,z as p,n as i,bQ as v,E as A}from"./index.00ded5ec.js";import{P}from"./index.9927dec8.js";/* empty css              *//* empty css               */import"./index.b5127d68.js";import"./index.603fa52d.js";import"./Checkbox.e1e6f642.js";import"./index.00c8deee.js";import"./index.22208324.js";import"./index.b378a6aa.js";import"./index.bc3beb44.js";import"./index.6f890765.js";import"./get.e98c9102.js";import"./index.ca68839c.js";import"./eagerComputed.5fd5be55.js";import"./index.a439fbd0.js";import"./_baseIteratee.5a800ee0.js";import"./DeleteOutlined.d374c42e.js";import"./index.39991b12.js";import"./useRefs.35df9853.js";import"./Form.8bff5e4e.js";import"./Col.8d574553.js";import"./useFlexGapSupport.641c96d8.js";import"./useSize.ddff592e.js";import"./index.47034b24.js";import"./index.fd3f14ec.js";import"./useWindowSizeFn.8613736c.js";import"./FullscreenOutlined.9fa31b99.js";import"./index.3ae0d52e.js";import"./index.fa69315c.js";import"./uuid.9bdf29ec.js";import"./download.1c38bf09.js";import"./base64Conver.08b9f4ec.js";import"./index.9306f112.js";import"./index.080dba7a.js";import"./uniqBy.f5f9fa77.js";import"./index.3f27b734.js";import"./index.c32d3109.js";import"./useContentViewHeight.e5cdac7c.js";import"./ArrowLeftOutlined.d0c01883.js";import"./index.9f86c066.js";import"./transButton.c964a4e6.js";const u=[{field:"field1",component:"Input",label:"render\u65B9\u5F0F",colProps:{span:8},rules:[{required:!0}],render:({model:o,field:t})=>v(n,{placeholder:"\u8BF7\u8F93\u5165",value:o[t],onChange:r=>{o[t]=r.target.value}})},{field:"field2",component:"Input",label:"render\u7EC4\u4EF6slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"\u81EA\u5B9A\u4E49Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}],S=g({components:{BasicForm:C,CollapseContainer:F,PageWrapper:P,[n.name]:n},setup(){const{createMessage:o}=A(),[t,{setProps:r}]=B({labelWidth:120,schemas:u,actionColOptions:{span:24}});return{register:t,schemas:u,handleSubmit:a=>{o.success("click search,values:"+JSON.stringify(a))},setProps:r}}});function I(o,t,r,a,x,W){const l=e("a-input"),c=e("BasicForm"),d=e("CollapseContainer"),f=e("PageWrapper");return h(),b(f,{title:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u793A\u4F8B"},{default:p(()=>[i(d,{title:"\u81EA\u5B9A\u4E49\u8868\u5355"},{default:p(()=>[i(c,{onRegister:o.register,onSubmit:o.handleSubmit},{f3:p(({model:s,field:m})=>[i(l,{value:s[m],"onUpdate:value":_=>s[m]=_,placeholder:"\u81EA\u5B9A\u4E49slot"},null,8,["value","onUpdate:value"])]),_:1},8,["onRegister","onSubmit"])]),_:1})]),_:1})}var ho=E(S,[["render",I]]);export{ho as default};