var p=(t,n,r)=>new Promise((d,a)=>{var m=e=>{try{u(r.next(e))}catch(i){a(i)}},o=e=>{try{u(r.throw(e))}catch(i){a(i)}},u=e=>e.done?d(e.value):Promise.resolve(e.value).then(m,o);u((r=r.apply(t,n)).next())});import{B as s}from"./TableImg.a3aee9d6.js";import"./BasicForm.e83ba16e.js";import{u as l}from"./useTable.3ef1072b.js";import{o as c,t as F}from"./tree.96a2227a.js";import{d as C}from"./table.f6d04de2.js";import{au as E,a as f,aw as b,o as h,h as B,n as D,bQ as w,E as A}from"./index.92107cb9.js";import{P as _}from"./index.55822c54.js";import"./index.ddb98860.js";import"./Checkbox.953f26bb.js";import"./index.6bad0fdd.js";import"./index.7f60acd0.js";import"./eagerComputed.03379843.js";import"./useForm.26f23ee4.js";import"./index.3459e11c.js";import"./index.482f421c.js";import"./index.bf07ecfb.js";import"./useSize.dbe69be2.js";import"./useWindowSizeFn.bf8a40f0.js";import"./useContentViewHeight.dfe4b065.js";import"./ArrowLeftOutlined.54d94ecf.js";import"./index.c24fbde5.js";import"./transButton.ea02a1ac.js";import"./index.a50b6155.js";import"./index.ce265fd9.js";import"./index.de1f9621.js";import"./uuid.9bdf29ec.js";import"./index.96e364d1.js";import"./_baseIteratee.5e4ef3b2.js";import"./get.fc3c6b0a.js";import"./DeleteOutlined.b5258670.js";import"./Form.dadf5038.js";import"./Col.44ed6be7.js";import"./useFlexGapSupport.3aa4df04.js";import"./index.4d9c8153.js";import"./FullscreenOutlined.89dc2d07.js";import"./index.1300a4fd.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.7d164866.js";import"./index.73e34a35.js";import"./fromPairs.84aabb58.js";import"./scrollTo.5ed8e082.js";import"./index.4a69c664.js";/* empty css              *//* empty css               */import"./index.7a6dc684.js";import"./index.de4f59c4.js";import"./index.448ecca2.js";import"./download.b3d81a2a.js";import"./base64Conver.08b9f4ec.js";import"./index.0ce0c2bf.js";import"./useRefs.411c9bf5.js";import"./index.be334935.js";import"./uniqBy.6067f194.js";const x=[{title:"\u8F93\u5165\u6846",dataIndex:"name",edit:!0,editComponentProps:{prefix:"$"},width:200},{title:"\u9ED8\u8BA4\u8F93\u5165\u72B6\u6001",dataIndex:"name7",edit:!0,editable:!0,width:200},{title:"\u8F93\u5165\u6846\u6821\u9A8C",dataIndex:"name1",edit:!0,editRule:!0,width:200},{title:"\u8F93\u5165\u6846\u51FD\u6570\u6821\u9A8C",dataIndex:"name2",edit:!0,editRule:t=>p(void 0,null,function*(){return t==="2"?"\u4E0D\u80FD\u8F93\u5165\u8BE5\u503C":""}),width:200},{title:"\u6570\u5B57\u8F93\u5165\u6846",dataIndex:"id",edit:!0,editRule:!0,editComponent:"InputNumber",width:200,editComponentProps:()=>({max:100,min:0}),editRender:({text:t})=>w(_,{percent:Number(t)})},{title:"\u4E0B\u62C9\u6846",dataIndex:"name3",edit:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"}]},width:200},{title:"\u8FDC\u7A0B\u4E0B\u62C9",dataIndex:"name4",edit:!0,editComponent:"ApiSelect",editComponentProps:{api:c,resultField:"list",labelField:"name",valueField:"id"},width:200},{title:"\u8FDC\u7A0B\u4E0B\u62C9\u6811",dataIndex:"name71",edit:!0,editComponent:"ApiTreeSelect",editRule:!1,editComponentProps:{api:F,resultField:"list"},width:200},{title:"\u65E5\u671F\u9009\u62E9",dataIndex:"date",edit:!0,editComponent:"DatePicker",editComponentProps:{valueFormat:"YYYY-MM-DD",format:"YYYY-MM-DD"},width:200},{title:"\u65F6\u95F4\u9009\u62E9",dataIndex:"time",edit:!0,editComponent:"TimePicker",editComponentProps:{valueFormat:"HH:mm",format:"HH:mm"},width:200},{title:"\u52FE\u9009\u6846",dataIndex:"name5",edit:!0,editComponent:"Checkbox",editValueMap:t=>t?"\u662F":"\u5426",width:200},{title:"\u5F00\u5173",dataIndex:"name6",edit:!0,editComponent:"Switch",editValueMap:t=>t?"\u5F00":"\u5173",width:200}],I=f({components:{BasicTable:s},setup(){const[t]=l({title:"\u53EF\u7F16\u8F91\u5355\u5143\u683C\u793A\u4F8B",api:C,columns:x,showIndexColumn:!1,bordered:!0}),{createMessage:n}=A();function r({record:o,index:u,key:e,value:i}){return!1}function d({value:o,key:u,id:e}){return n.loading({content:`\u6B63\u5728\u6A21\u62DF\u4FDD\u5B58${u}`,key:"_save_fake_data",duration:0}),new Promise(i=>{setTimeout(()=>{o===""?(n.error({content:"\u4FDD\u5B58\u5931\u8D25\uFF1A\u4E0D\u80FD\u4E3A\u7A7A",key:"_save_fake_data",duration:2}),i(!1)):(n.success({content:`\u8BB0\u5F55${e}\u7684${u}\u5DF2\u4FDD\u5B58`,key:"_save_fake_data",duration:2}),i(!0))},2e3)})}function a(Tt){return p(this,arguments,function*({record:o,index:u,key:e,value:i}){return yield d({id:o.id,key:e,value:i})})}function m(){}return{registerTable:t,handleEditEnd:r,handleEditCancel:m,beforeEditSubmit:a}}}),P={class:"p-4"};function g(t,n,r,d,a,m){const o=b("BasicTable");return h(),B("div",P,[D(o,{onRegister:t.registerTable,onEditEnd:t.handleEditEnd,onEditCancel:t.handleEditCancel,beforeEditSubmit:t.beforeEditSubmit},null,8,["onRegister","onEditEnd","onEditCancel","beforeEditSubmit"])])}var kt=E(I,[["render",g]]);export{kt as default};