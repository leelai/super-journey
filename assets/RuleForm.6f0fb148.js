var f=(e,u,t)=>new Promise((m,s)=>{var d=o=>{try{i(t.next(o))}catch(l){s(l)}},r=o=>{try{i(t.throw(o))}catch(l){s(l)}},i=o=>o.done?m(o.value):Promise.resolve(o.value).then(d,r);i((t=t.apply(e,u)).next())});import{B as _}from"./BasicForm.71ea5698.js";import{u as b}from"./useForm.1a75448f.js";import{av as g,a as A,cC as P,ax as B,o as E,j as h,z as n,m as v,n as p,E as k,B as c}from"./index.fc3faea8.js";import{P as D}from"./index.97639897.js";import{i as V}from"./system.a2f5c77c.js";/* empty css              *//* empty css               */import"./index.d77daf00.js";import"./index.8ac702ef.js";import"./Checkbox.53f1a47d.js";import"./index.8b03d6dc.js";import"./index.ce0ccac6.js";import"./index.fbe9f60e.js";import"./index.6c9a7918.js";import"./index.858bd649.js";import"./get.ba96f884.js";import"./index.68fb9a6c.js";import"./eagerComputed.10ebfcb8.js";import"./index.0b2a03dd.js";import"./_baseIteratee.c8657dae.js";import"./DeleteOutlined.a26e9ab9.js";import"./index.cf002398.js";import"./useRefs.a8532142.js";import"./Form.cad30f1f.js";import"./Col.a69e5a89.js";import"./useFlexGapSupport.178e7204.js";import"./useSize.4121dc7e.js";import"./index.17b6973f.js";import"./index.cfc9bad6.js";import"./useWindowSizeFn.f89b1927.js";import"./FullscreenOutlined.66288ba9.js";import"./index.6d18baa2.js";import"./index.87bd2c1a.js";import"./uuid.9bdf29ec.js";import"./download.9eb40c45.js";import"./base64Conver.08b9f4ec.js";import"./index.e72e760c.js";import"./index.f716c6d2.js";import"./uniqBy.ccecbfcd.js";import"./index.cdcfbae0.js";import"./index.e4a7772a.js";import"./useContentViewHeight.34f2568f.js";import"./ArrowLeftOutlined.98c4fdfd.js";import"./index.e8af661d.js";import"./transButton.caf3278e.js";const C=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},required:!0},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8},required:!0},{field:"id",label:"id",required:!0,defaultValue:0,component:"InputNumber",show:!1},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8},required:!0},{field:"field33",component:"DatePicker",label:"\u5B57\u6BB533",colProps:{span:8},componentProps:{valueFormat:"YYYY-MM-DD"},rules:[{required:!0,type:"string"}]},{field:"field44",component:"InputCountDown",label:"\u9A8C\u8BC1\u7801",colProps:{span:8},required:!0},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},componentProps:{mode:"multiple",options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]},rules:[{required:!0,message:"\u8BF7\u8F93\u5165aa",type:"array"}]},{field:"field441",component:"Input",label:"\u81EA\u5B9A\u4E49\u6821\u9A8C",colProps:{span:8},rules:[{required:!0,validator:(e,u)=>f(void 0,null,function*(){return u?u==="1"?Promise.reject("\u503C\u4E0D\u80FD\u4E3A1"):Promise.resolve():Promise.reject("\u503C\u4E0D\u80FD\u4E3A\u7A7A")}),trigger:"change"}]},{field:"field5",component:"CheckboxGroup",label:"\u5B57\u6BB55",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]},rules:[{required:!0}]},{field:"field7",component:"RadioGroup",label:"\u5B57\u6BB57",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]},rules:[{required:!0,message:"\u8986\u76D6\u9ED8\u8BA4\u751F\u6210\u7684\u6821\u9A8C\u4FE1\u606F"}]},{field:"field8",component:"Input",label:"\u540E\u7AEF\u5F02\u6B65\u9A8C\u8BC1",colProps:{span:8},helpMessage:["\u672C\u5B57\u6BB5\u6F14\u793A\u5F02\u6B65\u9A8C\u8BC1","\u672C\u5730\u89C4\u5219\uFF1A\u5FC5\u987B\u586B\u5199","\u540E\u7AEF\u89C4\u5219\uFF1A\u4E0D\u80FD\u5305\u542Badmin"],rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6570\u636E"},{validator(e,u){return new Promise((t,m)=>{V(u).then(()=>t()).catch(s=>{m(s.message||"\u9A8C\u8BC1\u5931\u8D25")})})}}]}],q=A({components:{BasicForm:_,CollapseContainer:P,PageWrapper:D},setup(){const{createMessage:e}=k(),[u,{validateFields:t,clearValidate:m,getFieldsValue:s,resetFields:d,setFieldsValue:r}]=b({labelWidth:120,schemas:C,actionColOptions:{span:24}});function i(){return f(this,null,function*(){try{const a=yield t()}catch(a){}})}function o(){return f(this,null,function*(){m()})}function l(){const a=s();e.success("values:"+JSON.stringify(a))}function F(){r({field1:1111,field5:["1"],field7:"1",field33:"2020-12-12",field3:"2020-12-12"})}return{register:u,schemas:C,handleSubmit:a=>{e.success("click search,values:"+JSON.stringify(a))},getFormValues:l,setFormValues:F,validateForm:i,resetValidate:o,resetFields:d}}}),y={class:"mb-4"},S=c(" \u624B\u52A8\u6821\u9A8C\u8868\u5355 "),I=c(" \u6E05\u7A7A\u6821\u9A8C\u4FE1\u606F "),N=c(" \u83B7\u53D6\u8868\u5355\u503C "),w=c(" \u8BBE\u7F6E\u8868\u5355\u503C "),M=c(" \u91CD\u7F6E ");function R(e,u,t,m,s,d){const r=B("a-button"),i=B("BasicForm"),o=B("CollapseContainer"),l=B("PageWrapper");return E(),h(l,{title:"\u8868\u5355\u6821\u9A8C\u793A\u4F8B"},{default:n(()=>[v("div",y,[p(r,{onClick:e.validateForm,class:"mr-2"},{default:n(()=>[S]),_:1},8,["onClick"]),p(r,{onClick:e.resetValidate,class:"mr-2"},{default:n(()=>[I]),_:1},8,["onClick"]),p(r,{onClick:e.getFormValues,class:"mr-2"},{default:n(()=>[N]),_:1},8,["onClick"]),p(r,{onClick:e.setFormValues,class:"mr-2"},{default:n(()=>[w]),_:1},8,["onClick"]),p(r,{onClick:e.resetFields,class:"mr-2"},{default:n(()=>[M]),_:1},8,["onClick"])]),p(o,{title:"\u8868\u5355\u6821\u9A8C"},{default:n(()=>[p(i,{onRegister:e.register,onSubmit:e.handleSubmit},null,8,["onRegister","onSubmit"])]),_:1})]),_:1})}var qe=g(q,[["render",R]]);export{qe as default};