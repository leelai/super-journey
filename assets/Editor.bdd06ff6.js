import{B as n}from"./BasicForm.e2136524.js";import{au as u,a as l,cB as c,aw as e,o as d,j as f,z as i,n as p,bQ as C,E as _}from"./index.00ded5ec.js";import{T as h}from"./index.99006a5d.js";import{P as B}from"./index.9927dec8.js";/* empty css              *//* empty css               */import"./index.b5127d68.js";import"./index.603fa52d.js";import"./Checkbox.e1e6f642.js";import"./index.00c8deee.js";import"./index.22208324.js";import"./index.b378a6aa.js";import"./index.bc3beb44.js";import"./index.6f890765.js";import"./get.e98c9102.js";import"./index.ca68839c.js";import"./eagerComputed.5fd5be55.js";import"./index.a439fbd0.js";import"./_baseIteratee.5a800ee0.js";import"./DeleteOutlined.d374c42e.js";import"./index.39991b12.js";import"./useRefs.35df9853.js";import"./Form.8bff5e4e.js";import"./Col.8d574553.js";import"./useFlexGapSupport.641c96d8.js";import"./useSize.ddff592e.js";import"./index.47034b24.js";import"./index.fd3f14ec.js";import"./useWindowSizeFn.8613736c.js";import"./FullscreenOutlined.9fa31b99.js";import"./index.3ae0d52e.js";import"./index.fa69315c.js";import"./uuid.9bdf29ec.js";import"./download.1c38bf09.js";import"./base64Conver.08b9f4ec.js";import"./index.9306f112.js";import"./index.080dba7a.js";import"./uniqBy.f5f9fa77.js";import"./index.3f27b734.js";import"./index.c32d3109.js";import"./useContentViewHeight.e5cdac7c.js";import"./ArrowLeftOutlined.d0c01883.js";import"./index.9f86c066.js";import"./transButton.c964a4e6.js";const b=[{field:"title",component:"Input",label:"title",defaultValue:"defaultValue",rules:[{required:!0}]},{field:"tinymce",component:"Input",label:"tinymce",defaultValue:"defaultValue",rules:[{required:!0}],render:({model:t,field:o})=>C(h,{value:t[o],onChange:r=>{t[o]=r}})}],g=l({components:{BasicForm:n,CollapseContainer:c,PageWrapper:B},setup(){const{createMessage:t}=_();return{schemas:b,handleSubmit:o=>{t.success("click search,values:"+JSON.stringify(o))}}}});function S(t,o,r,V,v,y){const m=e("BasicForm"),a=e("CollapseContainer"),s=e("PageWrapper");return d(),f(s,{title:"\u5BCC\u6587\u672C\u5D4C\u5165\u8868\u5355\u793A\u4F8B"},{default:i(()=>[p(a,{title:"\u5BCC\u6587\u672C\u8868\u5355"},{default:i(()=>[p(m,{labelWidth:100,schemas:t.schemas,actionColOptions:{span:24},onSubmit:t.handleSubmit},null,8,["schemas","onSubmit"])]),_:1})]),_:1})}var Ct=u(g,[["render",S]]);export{Ct as default};