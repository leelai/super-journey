import{I as x}from"./index.e6e58843.js";import{B as h}from"./TableImg.a3aee9d6.js";import"./BasicForm.e83ba16e.js";import{P as S}from"./index.3459e11c.js";import{au as E,a as F,v as I,aw as e,o as i,j as d,z as s,n as f,h as b,az as g,F as v,B as C}from"./index.92107cb9.js";import"./index.4d9c8153.js";import"./useWindowSizeFn.bf8a40f0.js";import"./FullscreenOutlined.89dc2d07.js";import"./useForm.26f23ee4.js";import"./index.ddb98860.js";import"./Checkbox.953f26bb.js";import"./index.6bad0fdd.js";import"./index.7f60acd0.js";import"./eagerComputed.03379843.js";import"./index.a50b6155.js";import"./index.ce265fd9.js";import"./index.de1f9621.js";import"./uuid.9bdf29ec.js";import"./index.96e364d1.js";import"./_baseIteratee.5e4ef3b2.js";import"./get.fc3c6b0a.js";import"./DeleteOutlined.b5258670.js";import"./index.55822c54.js";import"./useRefs.411c9bf5.js";import"./Form.dadf5038.js";import"./Col.44ed6be7.js";import"./useFlexGapSupport.3aa4df04.js";import"./useSize.dbe69be2.js";import"./index.1300a4fd.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.7d164866.js";import"./index.73e34a35.js";import"./fromPairs.84aabb58.js";import"./scrollTo.5ed8e082.js";import"./index.4a69c664.js";/* empty css              *//* empty css               */import"./index.7a6dc684.js";import"./index.de4f59c4.js";import"./index.448ecca2.js";import"./download.b3d81a2a.js";import"./base64Conver.08b9f4ec.js";import"./index.0ce0c2bf.js";import"./index.be334935.js";import"./uniqBy.6067f194.js";import"./index.482f421c.js";import"./index.bf07ecfb.js";import"./useContentViewHeight.dfe4b065.js";import"./ArrowLeftOutlined.54d94ecf.js";import"./index.c24fbde5.js";import"./transButton.ea02a1ac.js";const k=F({components:{BasicTable:h,ImpExcel:x,PageWrapper:S},setup(){const t=I([]);function c(p){t.value=[];for(const n of p){const{header:u,results:l,meta:{sheetName:m}}=n,o=[];for(const r of u)o.push({title:r,dataIndex:r});t.value.push({title:m,dataSource:l,columns:o})}}return{loadDataSuccess:c,tableListRef:t}}}),D=C(" \u5BFC\u5165Excel ");function P(t,c,p,n,u,l){const m=e("a-button"),o=e("ImpExcel"),r=e("BasicTable"),_=e("PageWrapper");return i(),d(_,{title:"excel\u6570\u636E\u5BFC\u5165\u793A\u4F8B"},{default:s(()=>[f(o,{onSuccess:t.loadDataSuccess,dateFormat:"YYYY-MM-DD"},{default:s(()=>[f(m,{class:"m-3"},{default:s(()=>[D]),_:1})]),_:1},8,["onSuccess"]),(i(!0),b(v,null,g(t.tableListRef,(a,B)=>(i(),d(r,{key:B,title:a.title,columns:a.columns,dataSource:a.dataSource},null,8,["title","columns","dataSource"]))),128))]),_:1})}var kt=E(k,[["render",P]]);export{kt as default};
