import{B}from"./TableImg.a3aee9d6.js";import"./BasicForm.e83ba16e.js";import{getBasicColumns as h,getBasicData as v}from"./tableData.0a246808.js";import{au as b,a as A,v as e,aw as c,o as E,h as k,n as i,z as r,B as u,t as l}from"./index.92107cb9.js";import"./index.ddb98860.js";import"./Checkbox.953f26bb.js";import"./index.6bad0fdd.js";import"./index.7f60acd0.js";import"./eagerComputed.03379843.js";import"./useForm.26f23ee4.js";import"./index.3459e11c.js";import"./index.482f421c.js";import"./index.bf07ecfb.js";import"./useSize.dbe69be2.js";import"./useWindowSizeFn.bf8a40f0.js";import"./useContentViewHeight.dfe4b065.js";import"./ArrowLeftOutlined.54d94ecf.js";import"./index.c24fbde5.js";import"./transButton.ea02a1ac.js";import"./index.a50b6155.js";import"./index.ce265fd9.js";import"./index.de1f9621.js";import"./uuid.9bdf29ec.js";import"./index.96e364d1.js";import"./_baseIteratee.5e4ef3b2.js";import"./get.fc3c6b0a.js";import"./DeleteOutlined.b5258670.js";import"./index.55822c54.js";import"./useRefs.411c9bf5.js";import"./Form.dadf5038.js";import"./Col.44ed6be7.js";import"./useFlexGapSupport.3aa4df04.js";import"./index.4d9c8153.js";import"./FullscreenOutlined.89dc2d07.js";import"./index.1300a4fd.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.7d164866.js";import"./index.73e34a35.js";import"./fromPairs.84aabb58.js";import"./scrollTo.5ed8e082.js";import"./index.4a69c664.js";/* empty css              *//* empty css               */import"./index.7a6dc684.js";import"./index.de4f59c4.js";import"./index.448ecca2.js";import"./download.b3d81a2a.js";import"./base64Conver.08b9f4ec.js";import"./index.0ce0c2bf.js";import"./index.be334935.js";import"./uniqBy.6067f194.js";const y=A({components:{BasicTable:B},setup(){const o=e(!1),a=e(!1),n=e(!0),p=e(!0),m=e(!1);function d(){o.value=!o.value}function t(){n.value=!n.value}function s(){a.value=!0,setTimeout(()=>{a.value=!1,m.value={pageSize:20}},3e3)}function g(){p.value=!p.value}function C(f){}return{columns:h(),data:v(),canResize:o,loading:a,striped:n,border:p,toggleStriped:t,toggleCanResize:d,toggleLoading:s,toggleBorder:g,pagination:m,handleColumnChange:C}}}),z={class:"p-4"},F=u(" \u5F00\u542Floading ");function R(o,a,n,p,m,d){const t=c("a-button"),s=c("BasicTable");return E(),k("div",z,[i(s,{title:"\u57FA\u7840\u793A\u4F8B",titleHelpMessage:"\u6E29\u99A8\u63D0\u9192",columns:o.columns,dataSource:o.data,canResize:o.canResize,loading:o.loading,striped:o.striped,bordered:o.border,showTableSetting:"",pagination:o.pagination,onColumnsChange:o.handleColumnChange},{toolbar:r(()=>[i(t,{type:"primary",onClick:o.toggleCanResize},{default:r(()=>[u(l(o.canResize?"\u53D6\u6D88\u81EA\u9002\u5E94":"\u81EA\u9002\u5E94\u9AD8\u5EA6"),1)]),_:1},8,["onClick"]),i(t,{type:"primary",onClick:o.toggleBorder},{default:r(()=>[u(l(o.border?"\u9690\u85CF\u8FB9\u6846":"\u663E\u793A\u8FB9\u6846"),1)]),_:1},8,["onClick"]),i(t,{type:"primary",onClick:o.toggleLoading},{default:r(()=>[F]),_:1},8,["onClick"]),i(t,{type:"primary",onClick:o.toggleStriped},{default:r(()=>[u(l(o.striped?"\u9690\u85CF\u6591\u9A6C\u7EB9":"\u663E\u793A\u6591\u9A6C\u7EB9"),1)]),_:1},8,["onClick"])]),_:1},8,["columns","dataSource","canResize","loading","striped","bordered","pagination","onColumnsChange"])])}var Fo=b(y,[["render",R]]);export{Fo as default};