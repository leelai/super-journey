var m=(u,a,e)=>new Promise((r,p)=>{var i=o=>{try{n(e.next(o))}catch(l){p(l)}},s=o=>{try{n(e.throw(o))}catch(l){p(l)}},n=o=>o.done?r(o.value):Promise.resolve(o.value).then(i,s);n((e=e.apply(u,a)).next())});import{B as F}from"./BasicForm.e83ba16e.js";import{u as d}from"./useForm.26f23ee4.js";import{au as B,a as E,aw as c,o as C,j as b,z as f,n as A,E as _}from"./index.92107cb9.js";import{P}from"./index.3459e11c.js";/* empty css              *//* empty css               */import"./index.1300a4fd.js";import"./index.ddb98860.js";import"./Checkbox.953f26bb.js";import"./index.6bad0fdd.js";import"./index.de1f9621.js";import"./index.a50b6155.js";import"./index.ce265fd9.js";import"./index.7a6dc684.js";import"./get.fc3c6b0a.js";import"./index.7f60acd0.js";import"./eagerComputed.03379843.js";import"./index.96e364d1.js";import"./_baseIteratee.5e4ef3b2.js";import"./DeleteOutlined.b5258670.js";import"./index.55822c54.js";import"./useRefs.411c9bf5.js";import"./Form.dadf5038.js";import"./Col.44ed6be7.js";import"./useFlexGapSupport.3aa4df04.js";import"./useSize.dbe69be2.js";import"./index.de4f59c4.js";import"./index.4d9c8153.js";import"./useWindowSizeFn.bf8a40f0.js";import"./FullscreenOutlined.89dc2d07.js";import"./index.448ecca2.js";import"./index.73e34a35.js";import"./uuid.9bdf29ec.js";import"./download.b3d81a2a.js";import"./base64Conver.08b9f4ec.js";import"./index.0ce0c2bf.js";import"./index.be334935.js";import"./uniqBy.6067f194.js";import"./index.482f421c.js";import"./index.bf07ecfb.js";import"./useContentViewHeight.dfe4b065.js";import"./ArrowLeftOutlined.54d94ecf.js";import"./index.c24fbde5.js";import"./transButton.ea02a1ac.js";const t={span:8},D=[{field:"title",component:"Input",label:"\u6807\u9898",colProps:t,componentProps:{placeholder:"\u7ED9\u76EE\u6807\u8D77\u4E2A\u540D\u5B57"},required:!0},{field:"time",component:"RangePicker",label:"\u8D77\u6B62\u65E5\u671F",colProps:t,required:!0},{field:"client",component:"Input",colProps:t,label:"\u5BA2\u6237",helpMessage:"\u76EE\u6807\u7684\u670D\u52A1\u5BF9\u8C61",subLabel:"( \u9009\u586B )",componentProps:{placeholder:"\u8BF7\u63CF\u8FF0\u4F60\u670D\u52A1\u7684\u5BA2\u6237\uFF0C\u5185\u90E8\u5BA2\u6237\u76F4\u63A5 @\u59D3\u540D\uFF0F\u5DE5\u53F7"}},{field:"weights",component:"InputNumber",label:"\u6743\u91CD",colProps:t,subLabel:"( \u9009\u586B )",componentProps:{formatter:u=>u?`${u}%`:"",parser:u=>u.replace("%",""),placeholder:"\u8BF7\u8F93\u5165"}},{field:"target",component:"InputTextArea",label:"\u76EE\u6807\u63CF\u8FF0",colProps:t,componentProps:{placeholder:"\u8BF7\u8F93\u5165\u4F60\u7684\u9636\u6BB5\u6027\u5DE5\u4F5C\u76EE\u6807",rows:4},required:!0},{field:"metrics",component:"InputTextArea",label:"\u8861\u91CF\u6807\u51C6",colProps:t,componentProps:{placeholder:"\u8BF7\u8F93\u5165\u8861\u91CF\u6807\u51C6",rows:4},required:!0},{field:"inviteer",component:"Input",label:"\u9080\u8BC4\u4EBA",colProps:{span:8},subLabel:"( \u9009\u586B )",componentProps:{placeholder:"\u8BF7\u76F4\u63A5 @\u59D3\u540D\uFF0F\u5DE5\u53F7\uFF0C\u6700\u591A\u53EF\u9080\u8BF7 5 \u4EBA"}},{field:"disclosure",component:"RadioGroup",label:"\u76EE\u6807\u516C\u5F00",colProps:{span:16},itemProps:{extra:"\u5BA2\u6237\u3001\u9080\u8BC4\u4EBA\u9ED8\u8BA4\u88AB\u5206\u4EAB"},componentProps:{options:[{label:"\u516C\u5F00",value:"1"},{label:"\u90E8\u5206\u516C\u5F00",value:"2"},{label:"\u4E0D\u516C\u5F00",value:"3"}]}},{field:"disclosure",component:"Select",label:" ",colProps:{span:8},show:({model:u})=>u.disclosure==="2",componentProps:{placeholder:"\u516C\u5F00\u7ED9",mode:"multiple",options:[{label:"\u540C\u4E8B1",value:"1"},{label:"\u540C\u4E8B2",value:"2"},{label:"\u540C\u4E8B3",value:"3"}]}}];const g=E({name:"FormBasicPage",components:{BasicForm:F,PageWrapper:P},setup(){const{createMessage:u}=_(),[a,{validate:e,setProps:r}]=d({labelCol:{span:8},wrapperCol:{span:15},schemas:D,actionColOptions:{offset:8,span:23},submitButtonOptions:{text:"\u63D0\u4EA4"},submitFunc:p});function p(){return m(this,null,function*(){try{yield e(),r({submitButtonOptions:{loading:!0}}),setTimeout(()=>{r({submitButtonOptions:{loading:!1}}),u.success("\u63D0\u4EA4\u6210\u529F\uFF01")},2e3)}catch(i){}})}return{register:a}}});function h(u,a,e,r,p,i){const s=c("BasicForm"),n=c("PageWrapper");return C(),b(n,{title:"\u57FA\u7840\u8868\u5355",contentBackground:"",content:" \u8868\u5355\u9875\u7528\u4E8E\u5411\u7528\u6237\u6536\u96C6\u6216\u9A8C\u8BC1\u4FE1\u606F\uFF0C\u57FA\u7840\u8868\u5355\u5E38\u89C1\u4E8E\u6570\u636E\u9879\u8F83\u5C11\u7684\u8868\u5355\u573A\u666F\u3002",contentClass:"p-4"},{default:f(()=>[A(s,{onRegister:u.register},null,8,["onRegister"])]),_:1})}var Cu=B(g,[["render",h],["__scopeId","data-v-49ea136a"]]);export{Cu as default};