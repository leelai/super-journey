import{D as f}from"./index.65b7cb4e.js";import{B as _}from"./TableImg.0d16a1eb.js";import"./BasicForm.7389292c.js";import{u as l}from"./useTable.26defd71.js";import{P as T}from"./index.a11cdd95.js";import{av as h,a as g,ax as r,o as D,j as b,z as B,n as t}from"./index.84f51bc6.js";import{D as c}from"./index.e6d997b7.js";import{refundSchema as v,refundData as S,personSchema as y,personData as C,refundTableData as F,refundTableSchema as R,refundTimeTableSchema as E,refundTimeTableData as w}from"./data.f0070ff0.js";import"./index.eea23ff9.js";import"./get.43c7e1f7.js";import"./index.e783d7a4.js";import"./Checkbox.29e5448e.js";import"./index.121070d7.js";import"./index.830e2b13.js";import"./eagerComputed.fe6422a6.js";import"./useForm.cd12ce3e.js";import"./index.213e5fdf.js";import"./index.1482bccc.js";import"./index.04f42628.js";import"./uuid.9bdf29ec.js";import"./index.7d48ba76.js";import"./_baseIteratee.b8f1e605.js";import"./DeleteOutlined.b2d33d4b.js";import"./index.cb8f3fac.js";import"./useRefs.5f3f03ad.js";import"./Form.9abcaf03.js";import"./Col.f571ced5.js";import"./useFlexGapSupport.9e6734b3.js";import"./useSize.57eaf44d.js";import"./useWindowSizeFn.25af7ad9.js";import"./index.245fc1fa.js";import"./FullscreenOutlined.b81ac762.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.571ed1e7.js";import"./index.1dff6863.js";import"./fromPairs.84aabb58.js";import"./scrollTo.94818188.js";import"./index.dd371c8d.js";/* empty css              *//* empty css               */import"./index.51387801.js";import"./index.fffc6c58.js";import"./index.08310ad3.js";import"./download.2e77e37e.js";import"./base64Conver.08b9f4ec.js";import"./index.1e0cde80.js";import"./index.dfd27e00.js";import"./uniqBy.3d46ba2f.js";import"./index.1a6563d3.js";import"./index.3580ad56.js";import"./useContentViewHeight.b08eeddc.js";import"./ArrowLeftOutlined.bf033c89.js";import"./index.b8a6e61f.js";import"./transButton.4e91e859.js";const x=g({components:{Description:f,BasicTable:_,PageWrapper:T,[c.name]:c},setup(){const[e]=l({title:"\u9000\u8D27\u5546\u54C1",dataSource:F,columns:R,pagination:!1,showIndexColumn:!1,scroll:{y:300},showSummary:!0,summaryFunc:n}),[p]=l({title:"\u9000\u8D27\u8FDB\u5EA6",columns:E,pagination:!1,dataSource:w,showIndexColumn:!1,scroll:{y:300}});function n(s){let a=0,i=0;return s.forEach(o=>{a+=o.t5,i+=o.t6}),[{t1:"\u603B\u8BA1",t5:a,t6:i}]}return{registerRefundTable:e,registerTimeTable:p,refundSchema:v,refundData:S,personSchema:y,personData:C}}});function P(e,p,n,s,a,i){const o=r("Description"),m=r("a-divider"),u=r("BasicTable"),d=r("PageWrapper");return D(),b(d,{title:"\u57FA\u7840\u8BE6\u60C5\u9875",contentBackground:""},{default:B(()=>[t(o,{size:"middle",title:"\u9000\u6B3E\u7533\u8BF7",bordered:!1,column:3,data:e.refundData,schema:e.refundSchema},null,8,["data","schema"]),t(m),t(o,{size:"middle",title:"\u7528\u6237\u4FE1\u606F",bordered:!1,column:3,data:e.personData,schema:e.personSchema},null,8,["data","schema"]),t(m),t(u,{onRegister:e.registerRefundTable},null,8,["onRegister"]),t(m),t(u,{onRegister:e.registerTimeTable},null,8,["onRegister"])]),_:1})}var $e=h(x,[["render",P],["__scopeId","data-v-33e8998f"]]);export{$e as default};