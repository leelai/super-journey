import{B as s}from"./BasicForm.71ea5698.js";import{av as u,a as l,cC as c,ax as r,o as d,j as f,z as i,n as p,bR as C,E as _}from"./index.fc3faea8.js";import{M as h}from"./index.737d0951.js";import{P as b}from"./index.97639897.js";/* empty css              *//* empty css               */import"./index.d77daf00.js";import"./index.8ac702ef.js";import"./Checkbox.53f1a47d.js";import"./index.8b03d6dc.js";import"./index.ce0ccac6.js";import"./index.fbe9f60e.js";import"./index.6c9a7918.js";import"./index.858bd649.js";import"./get.ba96f884.js";import"./index.68fb9a6c.js";import"./eagerComputed.10ebfcb8.js";import"./index.0b2a03dd.js";import"./_baseIteratee.c8657dae.js";import"./DeleteOutlined.a26e9ab9.js";import"./index.cf002398.js";import"./useRefs.a8532142.js";import"./Form.cad30f1f.js";import"./Col.a69e5a89.js";import"./useFlexGapSupport.178e7204.js";import"./useSize.4121dc7e.js";import"./index.17b6973f.js";import"./index.cfc9bad6.js";import"./useWindowSizeFn.f89b1927.js";import"./FullscreenOutlined.66288ba9.js";import"./index.6d18baa2.js";import"./index.87bd2c1a.js";import"./uuid.9bdf29ec.js";import"./download.9eb40c45.js";import"./base64Conver.08b9f4ec.js";import"./index.e72e760c.js";import"./index.f716c6d2.js";import"./uniqBy.ccecbfcd.js";import"./index.cdcfbae0.js";import"./index.e4a7772a.js";import"./useContentViewHeight.34f2568f.js";import"./ArrowLeftOutlined.98c4fdfd.js";import"./index.e8af661d.js";import"./transButton.caf3278e.js";const g=[{field:"title",component:"Input",label:"title",defaultValue:"\u6807\u9898",rules:[{required:!0}]},{field:"markdown",component:"Input",label:"markdown",defaultValue:"defaultValue",rules:[{required:!0,trigger:"blur"}],render:({model:o,field:t})=>C(h,{value:o[t],onChange:e=>{o[t]=e}})}],k=l({components:{BasicForm:s,CollapseContainer:c,PageWrapper:b},setup(){const{createMessage:o}=_();return{schemas:g,handleSubmit:t=>{o.success("click search,values:"+JSON.stringify(t))}}}});function B(o,t,e,w,F,M){const a=r("BasicForm"),m=r("CollapseContainer"),n=r("PageWrapper");return d(),f(n,{title:"MarkDown\u7EC4\u4EF6\u5D4C\u5165Form\u793A\u4F8B"},{default:i(()=>[p(m,{title:"MarkDown\u8868\u5355"},{default:i(()=>[p(a,{labelWidth:100,schemas:o.schemas,actionColOptions:{span:24},onSubmit:o.handleSubmit},null,8,["schemas","onSubmit"])]),_:1})]),_:1})}var _o=u(k,[["render",B]]);export{_o as default};