import{D as f}from"./index.ec495087.js";import{B as _}from"./TableImg.1832050e.js";import"./BasicForm.6b4a9385.js";import{u as l}from"./useTable.5aa1bc15.js";import{P as T}from"./index.b45ead2e.js";import{av as h,a as g,ax as r,o as D,j as b,z as B,n as t}from"./index.1f2f64cc.js";import{D as c}from"./index.73178210.js";import{refundSchema as v,refundData as S,personSchema as y,personData as C,refundTableData as F,refundTableSchema as R,refundTimeTableSchema as E,refundTimeTableData as w}from"./data.cb7302c9.js";import"./index.47781ba5.js";import"./get.2e04779a.js";import"./index.d264169d.js";import"./Checkbox.ef64d3e6.js";import"./index.55bd6380.js";import"./index.5a7917e3.js";import"./eagerComputed.265fcbbd.js";import"./useForm.4c6a476e.js";import"./index.ec6bc0e2.js";import"./index.0b950b2c.js";import"./index.7e7a9d30.js";import"./uuid.9bdf29ec.js";import"./index.24351a94.js";import"./_baseIteratee.6ed626fd.js";import"./DeleteOutlined.a24e248d.js";import"./index.84b0a4b6.js";import"./useRefs.64459683.js";import"./Form.723281e3.js";import"./Col.57beb858.js";import"./useFlexGapSupport.5941dfc5.js";import"./useSize.a2dac83c.js";import"./useWindowSizeFn.50e314e7.js";import"./index.0f68943d.js";import"./FullscreenOutlined.2f1874a9.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.fc6e3696.js";import"./index.983477aa.js";import"./fromPairs.84aabb58.js";import"./scrollTo.223dfe99.js";import"./index.14f2b050.js";/* empty css              *//* empty css               */import"./index.bf9b1321.js";import"./index.a0f90bca.js";import"./index.8a25b293.js";import"./download.69b10efa.js";import"./base64Conver.08b9f4ec.js";import"./index.f2835988.js";import"./index.56ed6268.js";import"./uniqBy.6441c30c.js";import"./index.b7e23e5a.js";import"./index.d68860b8.js";import"./useContentViewHeight.490ce0c5.js";import"./ArrowLeftOutlined.f91dc397.js";import"./index.5fc65200.js";import"./transButton.e3875fe3.js";const x=g({components:{Description:f,BasicTable:_,PageWrapper:T,[c.name]:c},setup(){const[e]=l({title:"\u9000\u8D27\u5546\u54C1",dataSource:F,columns:R,pagination:!1,showIndexColumn:!1,scroll:{y:300},showSummary:!0,summaryFunc:n}),[p]=l({title:"\u9000\u8D27\u8FDB\u5EA6",columns:E,pagination:!1,dataSource:w,showIndexColumn:!1,scroll:{y:300}});function n(s){let a=0,i=0;return s.forEach(o=>{a+=o.t5,i+=o.t6}),[{t1:"\u603B\u8BA1",t5:a,t6:i}]}return{registerRefundTable:e,registerTimeTable:p,refundSchema:v,refundData:S,personSchema:y,personData:C}}});function P(e,p,n,s,a,i){const o=r("Description"),m=r("a-divider"),u=r("BasicTable"),d=r("PageWrapper");return D(),b(d,{title:"\u57FA\u7840\u8BE6\u60C5\u9875",contentBackground:""},{default:B(()=>[t(o,{size:"middle",title:"\u9000\u6B3E\u7533\u8BF7",bordered:!1,column:3,data:e.refundData,schema:e.refundSchema},null,8,["data","schema"]),t(m),t(o,{size:"middle",title:"\u7528\u6237\u4FE1\u606F",bordered:!1,column:3,data:e.personData,schema:e.personSchema},null,8,["data","schema"]),t(m),t(u,{onRegister:e.registerRefundTable},null,8,["onRegister"]),t(m),t(u,{onRegister:e.registerTimeTable},null,8,["onRegister"])]),_:1})}var $e=h(x,[["render",P],["__scopeId","data-v-33e8998f"]]);export{$e as default};
