import{B}from"./TableImg.0d16a1eb.js";import"./BasicForm.7389292c.js";import{getBasicColumns as v,getBasicData as h}from"./tableData.0a246808.js";import{av as b,a as A,v as e,ax as c,o as E,h as k,n as i,z as r,B as u,t as l}from"./index.84f51bc6.js";import"./index.e783d7a4.js";import"./Checkbox.29e5448e.js";import"./index.121070d7.js";import"./index.830e2b13.js";import"./eagerComputed.fe6422a6.js";import"./useForm.cd12ce3e.js";import"./index.a11cdd95.js";import"./index.1a6563d3.js";import"./index.3580ad56.js";import"./useSize.57eaf44d.js";import"./useWindowSizeFn.25af7ad9.js";import"./useContentViewHeight.b08eeddc.js";import"./ArrowLeftOutlined.bf033c89.js";import"./index.b8a6e61f.js";import"./transButton.4e91e859.js";import"./index.213e5fdf.js";import"./index.1482bccc.js";import"./index.04f42628.js";import"./uuid.9bdf29ec.js";import"./index.7d48ba76.js";import"./_baseIteratee.b8f1e605.js";import"./get.43c7e1f7.js";import"./DeleteOutlined.b2d33d4b.js";import"./index.cb8f3fac.js";import"./useRefs.5f3f03ad.js";import"./Form.9abcaf03.js";import"./Col.f571ced5.js";import"./useFlexGapSupport.9e6734b3.js";import"./index.245fc1fa.js";import"./FullscreenOutlined.b81ac762.js";import"./index.e6d997b7.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.571ed1e7.js";import"./index.1dff6863.js";import"./fromPairs.84aabb58.js";import"./scrollTo.94818188.js";import"./index.dd371c8d.js";/* empty css              *//* empty css               */import"./index.51387801.js";import"./index.fffc6c58.js";import"./index.08310ad3.js";import"./download.2e77e37e.js";import"./base64Conver.08b9f4ec.js";import"./index.1e0cde80.js";import"./index.dfd27e00.js";import"./uniqBy.3d46ba2f.js";const y=A({components:{BasicTable:B},setup(){const o=e(!1),a=e(!1),n=e(!0),p=e(!0),m=e(!1);function d(){o.value=!o.value}function t(){n.value=!n.value}function s(){a.value=!0,setTimeout(()=>{a.value=!1,m.value={pageSize:20}},3e3)}function g(){p.value=!p.value}function C(f){}return{columns:v(),data:h(),canResize:o,loading:a,striped:n,border:p,toggleStriped:t,toggleCanResize:d,toggleLoading:s,toggleBorder:g,pagination:m,handleColumnChange:C}}}),z={class:"p-4"},F=u(" \u5F00\u542Floading ");function R(o,a,n,p,m,d){const t=c("a-button"),s=c("BasicTable");return E(),k("div",z,[i(s,{title:"\u57FA\u7840\u793A\u4F8B",titleHelpMessage:"\u6E29\u99A8\u63D0\u9192",columns:o.columns,dataSource:o.data,canResize:o.canResize,loading:o.loading,striped:o.striped,bordered:o.border,showTableSetting:"",pagination:o.pagination,onColumnsChange:o.handleColumnChange},{toolbar:r(()=>[i(t,{type:"primary",onClick:o.toggleCanResize},{default:r(()=>[u(l(o.canResize?"\u53D6\u6D88\u81EA\u9002\u5E94":"\u81EA\u9002\u5E94\u9AD8\u5EA6"),1)]),_:1},8,["onClick"]),i(t,{type:"primary",onClick:o.toggleBorder},{default:r(()=>[u(l(o.border?"\u9690\u85CF\u8FB9\u6846":"\u663E\u793A\u8FB9\u6846"),1)]),_:1},8,["onClick"]),i(t,{type:"primary",onClick:o.toggleLoading},{default:r(()=>[F]),_:1},8,["onClick"]),i(t,{type:"primary",onClick:o.toggleStriped},{default:r(()=>[u(l(o.striped?"\u9690\u85CF\u6591\u9A6C\u7EB9":"\u663E\u793A\u6591\u9A6C\u7EB9"),1)]),_:1},8,["onClick"])]),_:1},8,["columns","dataSource","canResize","loading","striped","bordered","pagination","onColumnsChange"])])}var Fo=b(y,[["render",R]]);export{Fo as default};
