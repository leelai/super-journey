import{D as f}from"./index.19466745.js";import{B as _}from"./TableImg.a3aee9d6.js";import"./BasicForm.e83ba16e.js";import{u as l}from"./useTable.3ef1072b.js";import{P as T}from"./index.3459e11c.js";import{au as h,a as g,aw as r,o as D,j as b,z as B,n as t}from"./index.92107cb9.js";import{D as c}from"./index.1300a4fd.js";import{refundSchema as S,refundData as v,personSchema as y,personData as C,refundTableData as F,refundTableSchema as R,refundTimeTableSchema as w,refundTimeTableData as E}from"./data.c2af67e3.js";import"./index.b2400ffe.js";import"./get.fc3c6b0a.js";import"./index.ddb98860.js";import"./Checkbox.953f26bb.js";import"./index.6bad0fdd.js";import"./index.7f60acd0.js";import"./eagerComputed.03379843.js";import"./useForm.26f23ee4.js";import"./index.a50b6155.js";import"./index.ce265fd9.js";import"./index.de1f9621.js";import"./uuid.9bdf29ec.js";import"./index.96e364d1.js";import"./_baseIteratee.5e4ef3b2.js";import"./DeleteOutlined.b5258670.js";import"./index.55822c54.js";import"./useRefs.411c9bf5.js";import"./Form.dadf5038.js";import"./Col.44ed6be7.js";import"./useFlexGapSupport.3aa4df04.js";import"./useSize.dbe69be2.js";import"./useWindowSizeFn.bf8a40f0.js";import"./index.4d9c8153.js";import"./FullscreenOutlined.89dc2d07.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.7d164866.js";import"./index.73e34a35.js";import"./fromPairs.84aabb58.js";import"./scrollTo.5ed8e082.js";import"./index.4a69c664.js";/* empty css              *//* empty css               */import"./index.7a6dc684.js";import"./index.de4f59c4.js";import"./index.448ecca2.js";import"./download.b3d81a2a.js";import"./base64Conver.08b9f4ec.js";import"./index.0ce0c2bf.js";import"./index.be334935.js";import"./uniqBy.6067f194.js";import"./index.482f421c.js";import"./index.bf07ecfb.js";import"./useContentViewHeight.dfe4b065.js";import"./ArrowLeftOutlined.54d94ecf.js";import"./index.c24fbde5.js";import"./transButton.ea02a1ac.js";const P=g({components:{Description:f,BasicTable:_,PageWrapper:T,[c.name]:c},setup(){const[e]=l({title:"\u9000\u8D27\u5546\u54C1",dataSource:F,columns:R,pagination:!1,showIndexColumn:!1,scroll:{y:300},showSummary:!0,summaryFunc:n}),[p]=l({title:"\u9000\u8D27\u8FDB\u5EA6",columns:w,pagination:!1,dataSource:E,showIndexColumn:!1,scroll:{y:300}});function n(s){let a=0,i=0;return s.forEach(o=>{a+=o.t5,i+=o.t6}),[{t1:"\u603B\u8BA1",t5:a,t6:i}]}return{registerRefundTable:e,registerTimeTable:p,refundSchema:S,refundData:v,personSchema:y,personData:C}}});function $(e,p,n,s,a,i){const o=r("Description"),m=r("a-divider"),u=r("BasicTable"),d=r("PageWrapper");return D(),b(d,{title:"\u57FA\u7840\u8BE6\u60C5\u9875",contentBackground:""},{default:B(()=>[t(o,{size:"middle",title:"\u9000\u6B3E\u7533\u8BF7",bordered:!1,column:3,data:e.refundData,schema:e.refundSchema},null,8,["data","schema"]),t(m),t(o,{size:"middle",title:"\u7528\u6237\u4FE1\u606F",bordered:!1,column:3,data:e.personData,schema:e.personSchema},null,8,["data","schema"]),t(m),t(u,{onRegister:e.registerRefundTable},null,8,["onRegister"]),t(m),t(u,{onRegister:e.registerTimeTable},null,8,["onRegister"])]),_:1})}var ke=h(P,[["render",$],["__scopeId","data-v-33e8998f"]]);export{ke as default};