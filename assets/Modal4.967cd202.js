import{B as l,a as c}from"./index.cfc9bad6.js";import{B as d}from"./BasicForm.71ea5698.js";import{u}from"./useForm.1a75448f.js";import{a as f,v as B,av as g,al as h,ax as p,o as _,j as b,z as v,m as C,n as R,ay as V}from"./index.fc3faea8.js";import"./useWindowSizeFn.f89b1927.js";import"./FullscreenOutlined.66288ba9.js";/* empty css              *//* empty css               */import"./index.d77daf00.js";import"./index.8ac702ef.js";import"./Checkbox.53f1a47d.js";import"./index.8b03d6dc.js";import"./index.ce0ccac6.js";import"./index.fbe9f60e.js";import"./index.6c9a7918.js";import"./index.858bd649.js";import"./get.ba96f884.js";import"./index.68fb9a6c.js";import"./eagerComputed.10ebfcb8.js";import"./index.0b2a03dd.js";import"./_baseIteratee.c8657dae.js";import"./DeleteOutlined.a26e9ab9.js";import"./index.cf002398.js";import"./useRefs.a8532142.js";import"./Form.cad30f1f.js";import"./Col.a69e5a89.js";import"./useFlexGapSupport.178e7204.js";import"./useSize.4121dc7e.js";import"./index.17b6973f.js";import"./index.6d18baa2.js";import"./index.87bd2c1a.js";import"./uuid.9bdf29ec.js";import"./download.9eb40c45.js";import"./base64Conver.08b9f4ec.js";import"./index.e72e760c.js";import"./index.f716c6d2.js";import"./uniqBy.ccecbfcd.js";const n=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:24},defaultValue:"111"},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:24}}],F=f({components:{BasicModal:l,BasicForm:d},props:{userData:{type:Object}},setup(e){const t=B({}),[i,{}]=u({labelWidth:120,schemas:n,showActionButtonGroup:!1,actionColOptions:{span:24}}),[s]=c(o=>{o&&r(o)});function r(o){t.value={field2:o.data,field1:o.info}}function a(o){o&&e.userData&&h(()=>r(e.userData))}return{register:s,schemas:n,registerForm:i,model:t,handleVisibleChange:a}}}),M={class:"pt-3px pr-3px"};function D(e,t,i,s,r,a){const o=p("BasicForm"),m=p("BasicModal");return _(),b(m,V(e.$attrs,{onRegister:e.register,title:"Modal Title",onVisibleChange:e.handleVisibleChange}),{default:v(()=>[C("div",M,[R(o,{onRegister:e.registerForm,model:e.model},null,8,["onRegister","model"])])]),_:1},16,["onRegister","onVisibleChange"])}var lo=g(F,[["render",D]]);export{lo as default};
