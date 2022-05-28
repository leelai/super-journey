import{B as C}from"./BasicForm.7389292c.js";import{av as B,a as c,cC as E,v as P,ax as i,o as b,j as F,z as e,m as a,n as s,E as v,B as l}from"./index.84f51bc6.js";import{P as k}from"./index.a11cdd95.js";/* empty css              *//* empty css               */import"./index.e6d997b7.js";import"./index.e783d7a4.js";import"./Checkbox.29e5448e.js";import"./index.121070d7.js";import"./index.04f42628.js";import"./index.213e5fdf.js";import"./index.1482bccc.js";import"./index.51387801.js";import"./get.43c7e1f7.js";import"./index.830e2b13.js";import"./eagerComputed.fe6422a6.js";import"./index.7d48ba76.js";import"./_baseIteratee.b8f1e605.js";import"./DeleteOutlined.b2d33d4b.js";import"./index.cb8f3fac.js";import"./useRefs.5f3f03ad.js";import"./Form.9abcaf03.js";import"./Col.f571ced5.js";import"./useFlexGapSupport.9e6734b3.js";import"./useSize.57eaf44d.js";import"./index.fffc6c58.js";import"./index.245fc1fa.js";import"./useWindowSizeFn.25af7ad9.js";import"./FullscreenOutlined.b81ac762.js";import"./index.08310ad3.js";import"./index.1dff6863.js";import"./uuid.9bdf29ec.js";import"./download.2e77e37e.js";import"./base64Conver.08b9f4ec.js";import"./index.1e0cde80.js";import"./index.dfd27e00.js";import"./uniqBy.3d46ba2f.js";import"./index.1a6563d3.js";import"./index.3580ad56.js";import"./useContentViewHeight.b08eeddc.js";import"./ArrowLeftOutlined.bf033c89.js";import"./index.b8a6e61f.js";import"./transButton.4e91e859.js";const _=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},componentProps:{placeholder:"\u81EA\u5B9A\u4E49placeholder",onChange:t=>{}}},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8}},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"\u5B57\u6BB55",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"\u5B57\u6BB57",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}}],$=c({components:{BasicForm:C,CollapseContainer:E,PageWrapper:k},setup(){const t=P(null),{createMessage:o}=v();return{formElRef:t,schemas:_,handleSubmit:r=>{o.success("click search,values:"+JSON.stringify(r))},setProps(r){const p=t.value;!p||p.setProps(r)}}}}),D={class:"mb-4"},A=l(" \u66F4\u6539labelWidth "),g=l(" \u8FD8\u539FlabelWidth "),S=l(" \u66F4\u6539Size "),h=l(" \u8FD8\u539FSize "),w=l(" \u7981\u7528\u8868\u5355 "),W=l(" \u89E3\u9664\u7981\u7528 "),R=l(" \u7D27\u51D1\u8868\u5355 "),z=l(" \u8FD8\u539F\u6B63\u5E38\u95F4\u8DDD "),N=l(" \u64CD\u4F5C\u6309\u94AE\u4F4D\u7F6E "),O={class:"mb-4"},G=l(" \u9690\u85CF\u64CD\u4F5C\u6309\u94AE "),y=l(" \u663E\u793A\u64CD\u4F5C\u6309\u94AE "),V=l(" \u9690\u85CF\u91CD\u7F6E\u6309\u94AE "),I=l(" \u663E\u793A\u91CD\u7F6E\u6309\u94AE "),M=l(" \u9690\u85CF\u67E5\u8BE2\u6309\u94AE "),j=l(" \u663E\u793A\u67E5\u8BE2\u6309\u94AE "),J=l(" \u4FEE\u6539\u91CD\u7F6E\u6309\u94AE "),T=l(" \u4FEE\u6539\u67E5\u8BE2\u6309\u94AE ");function q(t,o,r,p,H,K){const u=i("a-button"),m=i("BasicForm"),d=i("CollapseContainer"),f=i("PageWrapper");return b(),F(f,{title:"Ref\u64CD\u4F5C\u793A\u4F8B"},{default:e(()=>[a("div",D,[s(u,{onClick:o[0]||(o[0]=n=>t.setProps({labelWidth:150})),class:"mr-2"},{default:e(()=>[A]),_:1}),s(u,{onClick:o[1]||(o[1]=n=>t.setProps({labelWidth:120})),class:"mr-2"},{default:e(()=>[g]),_:1}),s(u,{onClick:o[2]||(o[2]=n=>t.setProps({size:"large"})),class:"mr-2"},{default:e(()=>[S]),_:1}),s(u,{onClick:o[3]||(o[3]=n=>t.setProps({size:"default"})),class:"mr-2"},{default:e(()=>[h]),_:1}),s(u,{onClick:o[4]||(o[4]=n=>t.setProps({disabled:!0})),class:"mr-2"},{default:e(()=>[w]),_:1}),s(u,{onClick:o[5]||(o[5]=n=>t.setProps({disabled:!1})),class:"mr-2"},{default:e(()=>[W]),_:1}),s(u,{onClick:o[6]||(o[6]=n=>t.setProps({compact:!0})),class:"mr-2"},{default:e(()=>[R]),_:1}),s(u,{onClick:o[7]||(o[7]=n=>t.setProps({compact:!1})),class:"mr-2"},{default:e(()=>[z]),_:1}),s(u,{onClick:o[8]||(o[8]=n=>t.setProps({actionColOptions:{span:8}})),class:"mr-2"},{default:e(()=>[N]),_:1})]),a("div",O,[s(u,{onClick:o[9]||(o[9]=n=>t.setProps({showActionButtonGroup:!1})),class:"mr-2"},{default:e(()=>[G]),_:1}),s(u,{onClick:o[10]||(o[10]=n=>t.setProps({showActionButtonGroup:!0})),class:"mr-2"},{default:e(()=>[y]),_:1}),s(u,{onClick:o[11]||(o[11]=n=>t.setProps({showResetButton:!1})),class:"mr-2"},{default:e(()=>[V]),_:1}),s(u,{onClick:o[12]||(o[12]=n=>t.setProps({showResetButton:!0})),class:"mr-2"},{default:e(()=>[I]),_:1}),s(u,{onClick:o[13]||(o[13]=n=>t.setProps({showSubmitButton:!1})),class:"mr-2"},{default:e(()=>[M]),_:1}),s(u,{onClick:o[14]||(o[14]=n=>t.setProps({showSubmitButton:!0})),class:"mr-2"},{default:e(()=>[j]),_:1}),s(u,{onClick:o[15]||(o[15]=n=>t.setProps({resetButtonOptions:{disabled:!0,text:"\u91CD\u7F6ENew"}})),class:"mr-2"},{default:e(()=>[J]),_:1}),s(u,{onClick:o[16]||(o[16]=n=>t.setProps({submitButtonOptions:{disabled:!0,loading:!0}})),class:"mr-2"},{default:e(()=>[T]),_:1})]),s(d,{title:"\u4F7F\u7528ref\u8C03\u7528\u8868\u5355\u5185\u90E8\u51FD\u6570\u793A\u4F8B"},{default:e(()=>[s(m,{schemas:t.schemas,ref:"formElRef",labelWidth:100,onSubmit:t.handleSubmit,actionColOptions:{span:24}},null,8,["schemas","onSubmit"])]),_:1})]),_:1})}var yo=B($,[["render",q]]);export{yo as default};
