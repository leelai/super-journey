import{D as f}from"./index.56322d43.js";import{B as _}from"./TableImg.d86ccd39.js";import"./BasicForm.a337e69a.js";import{u as l}from"./useTable.0ffa4838.js";import{P as T}from"./index.122169c5.js";import{av as h,a as g,ax as r,o as D,j as b,z as B,n as t}from"./index.ba3b24b5.js";import{D as c}from"./index.db6619f8.js";import{refundSchema as v,refundData as S,personSchema as y,personData as C,refundTableData as F,refundTableSchema as R,refundTimeTableSchema as E,refundTimeTableData as w}from"./data.5f9d125e.js";import"./index.0c653991.js";import"./get.9b79196e.js";import"./index.c8f9caab.js";import"./Checkbox.0a927e66.js";import"./index.1e08f3b0.js";import"./index.ca8eef09.js";import"./eagerComputed.c7b4118f.js";import"./useForm.7b12087c.js";import"./index.13fcd19d.js";import"./index.2252f0e8.js";import"./index.1ce12471.js";import"./uuid.9bdf29ec.js";import"./index.c1378dd4.js";import"./_baseIteratee.59e381a2.js";import"./DeleteOutlined.17965553.js";import"./index.6e703ded.js";import"./useRefs.1a30c69a.js";import"./Form.5719daad.js";import"./Col.07a98f77.js";import"./useFlexGapSupport.2814e35a.js";import"./useSize.ef0d9e5e.js";import"./useWindowSizeFn.e706818d.js";import"./index.3f0076f0.js";import"./FullscreenOutlined.85275856.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.5fbae6ce.js";import"./index.811c44d7.js";import"./fromPairs.84aabb58.js";import"./scrollTo.8b760a04.js";import"./index.15fd00c8.js";/* empty css              *//* empty css               */import"./index.4cc19566.js";import"./index.f657386e.js";import"./index.8303bd01.js";import"./download.fba38a9c.js";import"./base64Conver.08b9f4ec.js";import"./index.7e18b2d6.js";import"./index.9e76bc71.js";import"./uniqBy.2019406b.js";import"./index.da51d99b.js";import"./index.ae0b5d6f.js";import"./useContentViewHeight.e95be732.js";import"./ArrowLeftOutlined.103c8414.js";import"./index.40f803a3.js";import"./transButton.cc95c8c5.js";const x=g({components:{Description:f,BasicTable:_,PageWrapper:T,[c.name]:c},setup(){const[e]=l({title:"\u9000\u8D27\u5546\u54C1",dataSource:F,columns:R,pagination:!1,showIndexColumn:!1,scroll:{y:300},showSummary:!0,summaryFunc:n}),[p]=l({title:"\u9000\u8D27\u8FDB\u5EA6",columns:E,pagination:!1,dataSource:w,showIndexColumn:!1,scroll:{y:300}});function n(s){let a=0,i=0;return s.forEach(o=>{a+=o.t5,i+=o.t6}),[{t1:"\u603B\u8BA1",t5:a,t6:i}]}return{registerRefundTable:e,registerTimeTable:p,refundSchema:v,refundData:S,personSchema:y,personData:C}}});function P(e,p,n,s,a,i){const o=r("Description"),m=r("a-divider"),u=r("BasicTable"),d=r("PageWrapper");return D(),b(d,{title:"\u57FA\u7840\u8BE6\u60C5\u9875",contentBackground:""},{default:B(()=>[t(o,{size:"middle",title:"\u9000\u6B3E\u7533\u8BF7",bordered:!1,column:3,data:e.refundData,schema:e.refundSchema},null,8,["data","schema"]),t(m),t(o,{size:"middle",title:"\u7528\u6237\u4FE1\u606F",bordered:!1,column:3,data:e.personData,schema:e.personSchema},null,8,["data","schema"]),t(m),t(u,{onRegister:e.registerRefundTable},null,8,["onRegister"]),t(m),t(u,{onRegister:e.registerTimeTable},null,8,["onRegister"])]),_:1})}var $e=h(x,[["render",P],["__scopeId","data-v-33e8998f"]]);export{$e as default};
