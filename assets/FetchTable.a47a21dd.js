import{B as c}from"./TableImg.1832050e.js";import"./BasicForm.6b4a9385.js";import{u as l}from"./useTable.5aa1bc15.js";import{getBasicColumns as d}from"./tableData.0a246808.js";import{P as _}from"./index.b45ead2e.js";import{d as f}from"./table.92d393fe.js";import{av as g,a as B,ax as e,o as C,j as h,z as t,n as i,B as n}from"./index.1f2f64cc.js";import"./index.d264169d.js";import"./Checkbox.ef64d3e6.js";import"./index.55bd6380.js";import"./index.5a7917e3.js";import"./eagerComputed.265fcbbd.js";import"./useForm.4c6a476e.js";import"./index.ec6bc0e2.js";import"./index.0b950b2c.js";import"./index.7e7a9d30.js";import"./uuid.9bdf29ec.js";import"./index.24351a94.js";import"./_baseIteratee.6ed626fd.js";import"./get.2e04779a.js";import"./DeleteOutlined.a24e248d.js";import"./index.84b0a4b6.js";import"./useRefs.64459683.js";import"./Form.723281e3.js";import"./Col.57beb858.js";import"./useFlexGapSupport.5941dfc5.js";import"./useSize.a2dac83c.js";import"./useWindowSizeFn.50e314e7.js";import"./index.0f68943d.js";import"./FullscreenOutlined.2f1874a9.js";import"./index.73178210.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.fc6e3696.js";import"./index.983477aa.js";import"./fromPairs.84aabb58.js";import"./scrollTo.223dfe99.js";import"./index.14f2b050.js";/* empty css              *//* empty css               */import"./index.bf9b1321.js";import"./index.a0f90bca.js";import"./index.8a25b293.js";import"./download.69b10efa.js";import"./base64Conver.08b9f4ec.js";import"./index.f2835988.js";import"./index.56ed6268.js";import"./uniqBy.6441c30c.js";import"./index.b7e23e5a.js";import"./index.d68860b8.js";import"./useContentViewHeight.490ce0c5.js";import"./ArrowLeftOutlined.f91dc397.js";import"./index.5fc65200.js";import"./transButton.e3875fe3.js";const b=B({components:{BasicTable:c,PageWrapper:_},setup(){const[o,{reload:r}]=l({title:"\u8FDC\u7A0B\u52A0\u8F7D\u793A\u4F8B",api:f,columns:d(),pagination:{pageSize:10}});function p(){r()}function m(){r({page:1})}return{registerTable:o,handleReloadCurrent:p,handleReload:m}}}),T=n(" \u5237\u65B0\u5F53\u524D\u9875 "),k=n(" \u5237\u65B0\u5E76\u8FD4\u56DE\u7B2C\u4E00\u9875 ");function F(o,r,p,m,R,x){const a=e("a-button"),s=e("BasicTable"),u=e("PageWrapper");return C(),h(u,{contentBackground:"",contentClass:"flex",dense:"",contentFullHeight:"",fixedHeight:""},{default:t(()=>[i(s,{onRegister:o.registerTable},{toolbar:t(()=>[i(a,{type:"primary",onClick:o.handleReloadCurrent},{default:t(()=>[T]),_:1},8,["onClick"]),i(a,{type:"primary",onClick:o.handleReload},{default:t(()=>[k]),_:1},8,["onClick"])]),_:1},8,["onRegister"])]),_:1})}var Do=g(b,[["render",F]]);export{Do as default};