import{B as C}from"./BasicForm.71ea5698.js";import{u as B}from"./useForm.1a75448f.js";import{av as E,a as g,cC as F,I as n,ax as e,o as h,j as v,z as p,n as i,bR as b,E as A}from"./index.fc3faea8.js";import{P}from"./index.97639897.js";/* empty css              *//* empty css               */import"./index.d77daf00.js";import"./index.8ac702ef.js";import"./Checkbox.53f1a47d.js";import"./index.8b03d6dc.js";import"./index.ce0ccac6.js";import"./index.fbe9f60e.js";import"./index.6c9a7918.js";import"./index.858bd649.js";import"./get.ba96f884.js";import"./index.68fb9a6c.js";import"./eagerComputed.10ebfcb8.js";import"./index.0b2a03dd.js";import"./_baseIteratee.c8657dae.js";import"./DeleteOutlined.a26e9ab9.js";import"./index.cf002398.js";import"./useRefs.a8532142.js";import"./Form.cad30f1f.js";import"./Col.a69e5a89.js";import"./useFlexGapSupport.178e7204.js";import"./useSize.4121dc7e.js";import"./index.17b6973f.js";import"./index.cfc9bad6.js";import"./useWindowSizeFn.f89b1927.js";import"./FullscreenOutlined.66288ba9.js";import"./index.6d18baa2.js";import"./index.87bd2c1a.js";import"./uuid.9bdf29ec.js";import"./download.9eb40c45.js";import"./base64Conver.08b9f4ec.js";import"./index.e72e760c.js";import"./index.f716c6d2.js";import"./uniqBy.ccecbfcd.js";import"./index.cdcfbae0.js";import"./index.e4a7772a.js";import"./useContentViewHeight.34f2568f.js";import"./ArrowLeftOutlined.98c4fdfd.js";import"./index.e8af661d.js";import"./transButton.caf3278e.js";const u=[{field:"field1",component:"Input",label:"render\u65B9\u5F0F",colProps:{span:8},rules:[{required:!0}],render:({model:o,field:t})=>b(n,{placeholder:"\u8BF7\u8F93\u5165",value:o[t],onChange:r=>{o[t]=r.target.value}})},{field:"field2",component:"Input",label:"render\u7EC4\u4EF6slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"\u81EA\u5B9A\u4E49Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}],S=g({components:{BasicForm:C,CollapseContainer:F,PageWrapper:P,[n.name]:n},setup(){const{createMessage:o}=A(),[t,{setProps:r}]=B({labelWidth:120,schemas:u,actionColOptions:{span:24}});return{register:t,schemas:u,handleSubmit:a=>{o.success("click search,values:"+JSON.stringify(a))},setProps:r}}});function x(o,t,r,a,I,W){const l=e("a-input"),c=e("BasicForm"),d=e("CollapseContainer"),f=e("PageWrapper");return h(),v(f,{title:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u793A\u4F8B"},{default:p(()=>[i(d,{title:"\u81EA\u5B9A\u4E49\u8868\u5355"},{default:p(()=>[i(c,{onRegister:o.register,onSubmit:o.handleSubmit},{f3:p(({model:s,field:m})=>[i(l,{value:s[m],"onUpdate:value":_=>s[m]=_,placeholder:"\u81EA\u5B9A\u4E49slot"},null,8,["value","onUpdate:value"])]),_:1},8,["onRegister","onSubmit"])]),_:1})]),_:1})}var ho=E(S,[["render",x]]);export{ho as default};
