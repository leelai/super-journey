import{B as y,A as M}from"./BasicForm.7389292c.js";import{av as R,v as c,f,ah as A,i as d,a as _,cC as w,cU as O,bs as j,ax as r,o as U,j as V,z as t,n as p,E as q}from"./index.84f51bc6.js";import{P as H}from"./index.a11cdd95.js";import{o as B,t as b}from"./tree.029250c5.js";/* empty css              *//* empty css               */import"./index.e6d997b7.js";import"./index.e783d7a4.js";import"./Checkbox.29e5448e.js";import"./index.121070d7.js";import"./index.04f42628.js";import"./index.213e5fdf.js";import"./index.1482bccc.js";import"./index.51387801.js";import"./get.43c7e1f7.js";import"./index.830e2b13.js";import"./eagerComputed.fe6422a6.js";import"./index.7d48ba76.js";import"./_baseIteratee.b8f1e605.js";import"./DeleteOutlined.b2d33d4b.js";import"./index.cb8f3fac.js";import"./useRefs.5f3f03ad.js";import"./Form.9abcaf03.js";import"./Col.f571ced5.js";import"./useFlexGapSupport.9e6734b3.js";import"./useSize.57eaf44d.js";import"./index.fffc6c58.js";import"./index.245fc1fa.js";import"./useWindowSizeFn.25af7ad9.js";import"./FullscreenOutlined.b81ac762.js";import"./index.08310ad3.js";import"./index.1dff6863.js";import"./uuid.9bdf29ec.js";import"./download.2e77e37e.js";import"./base64Conver.08b9f4ec.js";import"./index.1e0cde80.js";import"./index.dfd27e00.js";import"./uniqBy.3d46ba2f.js";import"./index.1a6563d3.js";import"./index.3580ad56.js";import"./useContentViewHeight.b08eeddc.js";import"./ArrowLeftOutlined.bf033c89.js";import"./index.b8a6e61f.js";import"./transButton.4e91e859.js";const P=c([]),g=c([]),E=c([]);for(let e=1;e<10;e++)E.value.push({label:"\u9009\u9879"+e,value:`${e}`});const T=f(()=>A(d(E)).map(e=>(e.disabled=d(g).indexOf(e.value)!==-1,e))),G=f(()=>A(d(E)).map(e=>(e.disabled=d(P).indexOf(e.value)!==-1,e))),F=[{id:"guangdong",label:"\u5E7F\u4E1C\u7701",value:"1",key:"1"},{id:"jiangsu",label:"\u6C5F\u82CF\u7701",value:"2",key:"2"}],h={guangdong:[{label:"\u73E0\u6D77\u5E02",value:"1",key:"1"},{label:"\u6DF1\u5733\u5E02",value:"2",key:"2"},{label:"\u5E7F\u5DDE\u5E02",value:"3",key:"3"}],jiangsu:[{label:"\u5357\u4EAC\u5E02",value:"1",key:"1"},{label:"\u65E0\u9521\u5E02",value:"2",key:"2"},{label:"\u82CF\u5DDE\u5E02",value:"3",key:"3"}]},$=[{field:"divider-basic",component:"Divider",label:"\u57FA\u7840\u5B57\u6BB5",colProps:{span:24}},{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},componentProps:({schema:e,formModel:n})=>({placeholder:"\u81EA\u5B9A\u4E49placeholder",onChange:l=>{}}),renderComponentContent:()=>({prefix:()=>"pSlot",suffix:()=>"sSlot"})},{field:"field2",component:"Input",label:"\u5E26\u540E\u7F00",defaultValue:"111",colProps:{span:8},componentProps:{onChange:e=>{}},suffix:"\u5929"},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8}},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"\u5B57\u6BB55",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"\u5B57\u6BB57",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{field:"field8",component:"Checkbox",label:"\u5B57\u6BB58",colProps:{span:8},renderComponentContent:"Check"},{field:"field9",component:"Switch",label:"\u5B57\u6BB59",colProps:{span:8}},{field:"field10",component:"RadioButtonGroup",label:"\u5B57\u6BB510",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{field:"field11",component:"Cascader",label:"\u5B57\u6BB511",colProps:{span:8},componentProps:{options:[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}]}},{field:"divider-api-select",component:"Divider",label:"\u8FDC\u7A0B\u4E0B\u62C9\u6F14\u793A",colProps:{span:24}},{field:"field30",component:"ApiSelect",label:"\u61D2\u52A0\u8F7D\u8FDC\u7A0B\u4E0B\u62C9",required:!0,componentProps:{api:B,params:{id:1},resultField:"list",labelField:"name",valueField:"id",immediate:!1,onChange:e=>{},onOptionsChange:e=>{e.length}},colProps:{span:8},defaultValue:"0"},{field:"field31",component:"Input",label:"\u4E0B\u62C9\u672C\u5730\u641C\u7D22",helpMessage:["ApiSelect\u7EC4\u4EF6","\u8FDC\u7A0B\u6570\u636E\u6E90\u672C\u5730\u641C\u7D22","\u53EA\u53D1\u8D77\u4E00\u6B21\u8BF7\u6C42\u83B7\u53D6\u6240\u6709\u9009\u9879"],required:!0,slot:"localSearch",colProps:{span:8},defaultValue:"0"},{field:"field32",component:"Input",label:"\u4E0B\u62C9\u8FDC\u7A0B\u641C\u7D22",helpMessage:["ApiSelect\u7EC4\u4EF6","\u5C06\u5173\u952E\u8BCD\u53D1\u9001\u5230\u63A5\u53E3\u8FDB\u884C\u8FDC\u7A0B\u641C\u7D22"],required:!0,slot:"remoteSearch",colProps:{span:8},defaultValue:"0"},{field:"field33",component:"ApiTreeSelect",label:"\u8FDC\u7A0B\u4E0B\u62C9\u6811",helpMessage:["ApiTreeSelect\u7EC4\u4EF6","\u4F7F\u7528\u63A5\u53E3\u63D0\u4F9B\u7684\u6570\u636E\u751F\u6210\u9009\u9879"],required:!0,componentProps:{api:b,resultField:"list"},colProps:{span:8}},{field:"field34",component:"ApiRadioGroup",label:"\u8FDC\u7A0BRadio",helpMessage:["ApiRadioGroup\u7EC4\u4EF6","\u4F7F\u7528\u63A5\u53E3\u63D0\u4F9B\u7684\u6570\u636E\u751F\u6210\u9009\u9879"],required:!0,componentProps:{api:B,params:{count:2},resultField:"list",labelField:"name",valueField:"id"},defaultValue:"1",colProps:{span:8}},{field:"field35",component:"ApiRadioGroup",label:"\u8FDC\u7A0BRadio",helpMessage:["ApiRadioGroup\u7EC4\u4EF6","\u4F7F\u7528\u63A5\u53E3\u63D0\u4F9B\u7684\u6570\u636E\u751F\u6210\u9009\u9879"],required:!0,componentProps:{api:B,params:{count:2},resultField:"list",labelField:"name",valueField:"id",isBtn:!0},colProps:{span:8}},{field:"field36",component:"ApiTree",label:"\u8FDC\u7A0BTree",helpMessage:["ApiTree\u7EC4\u4EF6","\u4F7F\u7528\u63A5\u53E3\u63D0\u4F9B\u7684\u6570\u636E\u751F\u6210\u9009\u9879"],required:!0,componentProps:{api:b,params:{count:2},afterFetch:e=>e,resultField:"list"},colProps:{span:8}},{field:"divider-linked",component:"Divider",label:"\u5B57\u6BB5\u8054\u52A8",colProps:{span:24}},{field:"province",component:"Select",label:"\u7701\u4EFD",colProps:{span:8},componentProps:({formModel:e,formActionType:n})=>({options:F,placeholder:"\u7701\u4EFD\u4E0E\u57CE\u5E02\u8054\u52A8",onChange:l=>{let i=l==1?h[F[0].id]:h[F[1].id];l===void 0&&(i=[]),e.city=void 0;const{updateSchema:m}=n;m({field:"city",componentProps:{options:i}})}})},{field:"city",component:"Select",label:"\u57CE\u5E02",colProps:{span:8},componentProps:{options:[],placeholder:"\u7701\u4EFD\u4E0E\u57CE\u5E02\u8054\u52A8"}},{field:"divider-selects",component:"Divider",label:"\u4E92\u65A5\u591A\u9009",helpMessage:["\u4E24\u4E2ASelect\u5171\u7528\u6570\u636E\u6E90","\u4F46\u4E0D\u53EF\u9009\u62E9\u5BF9\u65B9\u5DF2\u9009\u4E2D\u7684\u9879\u76EE"],colProps:{span:24}},{field:"selectA",component:"Select",label:"\u4E92\u65A5SelectA",slot:"selectA",defaultValue:[],colProps:{span:8}},{field:"selectB",component:"Select",label:"\u4E92\u65A5SelectB",slot:"selectB",defaultValue:[],colProps:{span:8}},{field:"divider-deconstruct",component:"Divider",label:"\u5B57\u6BB5\u89E3\u6784",helpMessage:["\u5982\u679C\u7EC4\u4EF6\u7684\u503C\u662F array \u6216\u8005 object","\u53EF\u4EE5\u6839\u636E ES6 \u7684\u89E3\u6784\u8BED\u6CD5\u5206\u522B\u53D6\u503C"],colProps:{span:24}},{field:"[startTime, endTime]",label:"\u65F6\u95F4\u8303\u56F4",component:"RangePicker",componentProps:{format:"YYYY-MM-DD HH:mm:ss",placeholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"],showTime:{format:"HH:mm:ss"}}},{field:"divider-others",component:"Divider",label:"\u5176\u5B83",colProps:{span:24}},{field:"field20",component:"InputNumber",label:"\u5B57\u6BB520",required:!0,colProps:{span:8}},{field:"field21",component:"Slider",label:"\u5B57\u6BB521",componentProps:{min:0,max:100,range:!0,marks:{20:"20\xB0C",60:"60\xB0C"}},colProps:{span:8}},{field:"field22",component:"Rate",label:"\u5B57\u6BB522",defaultValue:3,colProps:{span:8},componentProps:{disabled:!1,allowHalf:!0}}],x=_({components:{BasicForm:y,CollapseContainer:w,PageWrapper:H,ApiSelect:M,ASelect:O},setup(){const e=c(null),{createMessage:n}=q(),l=c(""),i=f(()=>({keyword:d(l)}));function m(s){l.value=s}return{schemas:$,optionsListApi:B,optionsA:T,optionsB:G,valueSelectA:P,valueSelectB:g,onSearch:j(m,300),searchParams:i,handleReset:()=>{l.value=""},handleSubmit:s=>{n.success("click search,values:"+JSON.stringify(s))},check:e}}});function I(e,n,l,i,m,s){const v=r("a-select"),C=r("ApiSelect"),D=r("BasicForm"),S=r("CollapseContainer"),k=r("PageWrapper");return U(),V(k,{title:"\u8868\u5355\u57FA\u7840\u793A\u4F8B",contentFullHeight:""},{default:t(()=>[p(S,{title:"\u57FA\u7840\u793A\u4F8B"},{default:t(()=>[p(D,{autoFocusFirstItem:"",labelWidth:200,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit,onReset:e.handleReset},{selectA:t(({model:u,field:o})=>[p(v,{options:e.optionsA,mode:"multiple",value:u[o],"onUpdate:value":a=>u[o]=a,onChange:a=>e.valueSelectA=u[o],allowClear:""},null,8,["options","value","onUpdate:value","onChange"])]),selectB:t(({model:u,field:o})=>[p(v,{options:e.optionsB,mode:"multiple",value:u[o],"onUpdate:value":a=>u[o]=a,onChange:a=>e.valueSelectB=u[o],allowClear:""},null,8,["options","value","onUpdate:value","onChange"])]),localSearch:t(({model:u,field:o})=>[p(C,{api:e.optionsListApi,showSearch:"",value:u[o],"onUpdate:value":a=>u[o]=a,optionFilterProp:"label",resultField:"list",labelField:"name",valueField:"id"},null,8,["api","value","onUpdate:value"])]),remoteSearch:t(({model:u,field:o})=>[p(C,{api:e.optionsListApi,showSearch:"",value:u[o],"onUpdate:value":a=>u[o]=a,filterOption:!1,resultField:"list",labelField:"name",valueField:"id",params:e.searchParams,onSearch:e.onSearch},null,8,["api","value","onUpdate:value","params","onSearch"])]),_:1},8,["schemas","onSubmit","onReset"])]),_:1})]),_:1})}var je=R(x,[["render",I]]);export{je as default};
