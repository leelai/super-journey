import{I as B}from"./index.85d41a83.js";import{B as h}from"./TableImg.6238bbda.js";import"./BasicForm.68b331ec.js";import{P as S}from"./index.f86f5c80.js";import{av as E,a as v,v as F,ax as e,o as i,j as d,z as s,n as f,h as I,aA as b,F as g,B as C}from"./index.4d85b9ad.js";import"./index.9e61abf2.js";import"./useWindowSizeFn.afdf8a26.js";import"./FullscreenOutlined.f1a6b6c8.js";import"./useForm.c250fa5e.js";import"./index.8266f8c6.js";import"./Checkbox.3d5c2365.js";import"./index.111db481.js";import"./index.d4e7f494.js";import"./eagerComputed.149e7d02.js";import"./index.0575c6f1.js";import"./index.16795e18.js";import"./index.0a32006d.js";import"./uuid.9bdf29ec.js";import"./index.0cb6114c.js";import"./_baseIteratee.bd01bacf.js";import"./get.f7e986a2.js";import"./DeleteOutlined.4692b2a1.js";import"./index.00f4b24d.js";import"./useRefs.7623701d.js";import"./Form.cdb065c0.js";import"./Col.1f2b70e9.js";import"./useFlexGapSupport.fb9477a4.js";import"./useSize.9786ace1.js";import"./index.d03897b8.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.046421cb.js";import"./index.f7bb9a50.js";import"./fromPairs.84aabb58.js";import"./scrollTo.9f53d5ee.js";import"./index.9dbec24a.js";/* empty css              *//* empty css               */import"./index.8c1a2f92.js";import"./index.0092bdce.js";import"./index.0ec5fc44.js";import"./download.cf25e0df.js";import"./base64Conver.08b9f4ec.js";import"./index.770007d0.js";import"./index.129699ce.js";import"./uniqBy.59f52759.js";import"./index.4accfc90.js";import"./index.a09fe34b.js";import"./useContentViewHeight.5e841096.js";import"./ArrowLeftOutlined.15bf599d.js";import"./index.94955cdb.js";import"./transButton.0006dd38.js";const k=v({components:{BasicTable:h,ImpExcel:B,PageWrapper:S},setup(){const t=F([]);function c(p){t.value=[];for(const n of p){const{header:u,results:l,meta:{sheetName:m}}=n,o=[];for(const r of u)o.push({title:r,dataIndex:r});t.value.push({title:m,dataSource:l,columns:o})}}return{loadDataSuccess:c,tableListRef:t}}}),D=C(" \u5BFC\u5165Excel ");function P(t,c,p,n,u,l){const m=e("a-button"),o=e("ImpExcel"),r=e("BasicTable"),_=e("PageWrapper");return i(),d(_,{title:"excel\u6570\u636E\u5BFC\u5165\u793A\u4F8B"},{default:s(()=>[f(o,{onSuccess:t.loadDataSuccess,dateFormat:"YYYY-MM-DD"},{default:s(()=>[f(m,{class:"m-3"},{default:s(()=>[D]),_:1})]),_:1},8,["onSuccess"]),(i(!0),I(g,null,b(t.tableListRef,(a,x)=>(i(),d(r,{key:x,title:a.title,columns:a.columns,dataSource:a.dataSource},null,8,["title","columns","dataSource"]))),128))]),_:1})}var kt=E(k,[["render",P]]);export{kt as default};
