import{B as l}from"./TableImg.59701ff6.js";import{j as s}from"./BasicForm.71ea5698.js";import{u as d}from"./useTable.37703b69.js";import{d as c}from"./table.f8626c82.js";import{av as F,a as h,ax as r,o as b,h as f,n as a,z as A}from"./index.fc3faea8.js";import"./index.8ac702ef.js";import"./Checkbox.53f1a47d.js";import"./index.8b03d6dc.js";import"./index.68fb9a6c.js";import"./eagerComputed.10ebfcb8.js";import"./useForm.1a75448f.js";import"./index.97639897.js";import"./index.cdcfbae0.js";import"./index.e4a7772a.js";import"./useSize.4121dc7e.js";import"./useWindowSizeFn.f89b1927.js";import"./useContentViewHeight.34f2568f.js";import"./ArrowLeftOutlined.98c4fdfd.js";import"./index.e8af661d.js";import"./transButton.caf3278e.js";import"./index.fbe9f60e.js";import"./index.6c9a7918.js";import"./index.ce0ccac6.js";import"./uuid.9bdf29ec.js";import"./index.0b2a03dd.js";import"./_baseIteratee.c8657dae.js";import"./get.ba96f884.js";import"./DeleteOutlined.a26e9ab9.js";import"./index.cf002398.js";import"./useRefs.a8532142.js";import"./Form.cad30f1f.js";import"./Col.a69e5a89.js";import"./useFlexGapSupport.178e7204.js";import"./index.cfc9bad6.js";import"./FullscreenOutlined.66288ba9.js";import"./index.d77daf00.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.16b688f2.js";import"./index.87bd2c1a.js";import"./fromPairs.84aabb58.js";import"./scrollTo.921dc261.js";import"./index.d3eb2dec.js";/* empty css              *//* empty css               */import"./index.858bd649.js";import"./index.17b6973f.js";import"./index.6d18baa2.js";import"./download.9eb40c45.js";import"./base64Conver.08b9f4ec.js";import"./index.e72e760c.js";import"./index.f716c6d2.js";import"./uniqBy.ccecbfcd.js";const B=[{title:"\u7F16\u53F7",dataIndex:"no",width:100},{title:"\u59D3\u540D",dataIndex:"name",auth:"test"},{title:"\u72B6\u6001",dataIndex:"status"},{title:"\u5730\u5740",dataIndex:"address",auth:"super",ifShow:t=>!0},{title:"\u5F00\u59CB\u65F6\u95F4",dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime",width:200}],C=h({components:{BasicTable:l,TableAction:s},setup(){const[t]=d({title:"TableAction\u7EC4\u4EF6\u53CA\u56FA\u5B9A\u5217\u793A\u4F8B",api:c,columns:B,bordered:!0,actionColumn:{width:250,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});function e(i){}function n(i){}function u(i){}return{registerTable:t,handleEdit:e,handleDelete:n,handleOpen:u}}}),T={class:"p-4"};function _(t,e,n,u,i,w){const p=r("TableAction"),m=r("BasicTable");return b(),f("div",T,[a(m,{onRegister:t.registerTable},{action:A(({record:o})=>[a(p,{actions:[{label:"\u7F16\u8F91",onClick:t.handleEdit.bind(null,o),auth:"other"},{label:"\u5220\u9664",icon:"ic:outline-delete-outline",onClick:t.handleDelete.bind(null,o),auth:"super"}],dropDownActions:[{label:"\u542F\u7528",popConfirm:{title:"\u662F\u5426\u542F\u7528\uFF1F",confirm:t.handleOpen.bind(null,o)},ifShow:E=>o.status!=="enable"},{label:"\u7981\u7528",popConfirm:{title:"\u662F\u5426\u7981\u7528\uFF1F",confirm:t.handleOpen.bind(null,o)},ifShow:()=>o.status==="enable"},{label:"\u540C\u65F6\u63A7\u5236",popConfirm:{title:"\u662F\u5426\u52A8\u6001\u663E\u793A\uFF1F",confirm:t.handleOpen.bind(null,o)},auth:"super",ifShow:()=>!0}]},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister"])])}var wt=F(C,[["render",_]]);export{wt as default};