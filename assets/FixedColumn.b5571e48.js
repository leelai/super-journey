import{B as u}from"./TableImg.59701ff6.js";import{j as l}from"./BasicForm.71ea5698.js";import{u as s}from"./useTable.37703b69.js";import{d}from"./table.f8626c82.js";import{av as c,a as F,ax as n,o as f,h as b,n as p,z as h}from"./index.fc3faea8.js";import"./index.8ac702ef.js";import"./Checkbox.53f1a47d.js";import"./index.8b03d6dc.js";import"./index.68fb9a6c.js";import"./eagerComputed.10ebfcb8.js";import"./useForm.1a75448f.js";import"./index.97639897.js";import"./index.cdcfbae0.js";import"./index.e4a7772a.js";import"./useSize.4121dc7e.js";import"./useWindowSizeFn.f89b1927.js";import"./useContentViewHeight.34f2568f.js";import"./ArrowLeftOutlined.98c4fdfd.js";import"./index.e8af661d.js";import"./transButton.caf3278e.js";import"./index.fbe9f60e.js";import"./index.6c9a7918.js";import"./index.ce0ccac6.js";import"./uuid.9bdf29ec.js";import"./index.0b2a03dd.js";import"./_baseIteratee.c8657dae.js";import"./get.ba96f884.js";import"./DeleteOutlined.a26e9ab9.js";import"./index.cf002398.js";import"./useRefs.a8532142.js";import"./Form.cad30f1f.js";import"./Col.a69e5a89.js";import"./useFlexGapSupport.178e7204.js";import"./index.cfc9bad6.js";import"./FullscreenOutlined.66288ba9.js";import"./index.d77daf00.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.16b688f2.js";import"./index.87bd2c1a.js";import"./fromPairs.84aabb58.js";import"./scrollTo.921dc261.js";import"./index.d3eb2dec.js";/* empty css              *//* empty css               */import"./index.858bd649.js";import"./index.17b6973f.js";import"./index.6d18baa2.js";import"./download.9eb40c45.js";import"./base64Conver.08b9f4ec.js";import"./index.e72e760c.js";import"./index.f716c6d2.js";import"./uniqBy.ccecbfcd.js";const B=[{title:"ID",dataIndex:"id",fixed:"left",width:280},{title:"\u59D3\u540D",dataIndex:"name",width:260},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u7F16\u53F7",dataIndex:"no",width:300},{title:"\u5F00\u59CB\u65F6\u95F4",width:200,dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime",width:200}],A=F({components:{BasicTable:u,TableAction:l},setup(){const[t]=s({title:"TableAction\u7EC4\u4EF6\u53CA\u56FA\u5B9A\u5217\u793A\u4F8B",api:d,columns:B,rowSelection:{type:"radio"},bordered:!0,actionColumn:{width:160,title:"Action",dataIndex:"action"}});function i(o){}function e(o){}return{registerTable:t,handleDelete:i,handleOpen:e}}}),T={class:"p-4"};function _(t,i,e,o,x,w){const m=n("TableAction"),a=n("BasicTable");return f(),b("div",T,[p(a,{onRegister:t.registerTable},{action:h(({record:r})=>[p(m,{actions:[{label:"\u5220\u9664",icon:"ic:outline-delete-outline",onClick:t.handleDelete.bind(null,r)}],dropDownActions:[{label:"\u542F\u7528",popConfirm:{title:"\u662F\u5426\u542F\u7528\uFF1F",confirm:t.handleOpen.bind(null,r)}}]},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister"])])}var xt=c(A,[["render",_]]);export{xt as default};
