var x=(b,m,t)=>new Promise((e,p)=>{var u=r=>{try{a(t.next(r))}catch(s){p(s)}},f=r=>{try{a(t.throw(r))}catch(s){p(s)}},a=r=>r.done?e(r.value):Promise.resolve(r.value).then(u,f);a((t=t.apply(b,m)).next())});import{dF as C,a as k,v as E,c as T,fp as A,a7 as D,al as R,ah as B,ax as I,o as g,h as _,F as S,aA as V,x as j,y as F,n as i,i as o,z as n,B as y,t as h}from"./index.b2c8267b.js";import M from"./DetailModal.cdccb1aa.js";import{B as N}from"./TableImg.e1138ba5.js";import{j as $}from"./BasicForm.bc0f8fbd.js";import{u as z}from"./useTable.8eef876e.js";import{b as H}from"./index.3272a407.js";import{getColumns as q}from"./data.5f2da4c1.js";import"./index.96fda782.js";import"./index.d53b5372.js";import"./get.1d45560b.js";import"./useDescription.05acca97.js";import"./index.e8238668.js";import"./Checkbox.d390f37b.js";import"./index.d7bcac17.js";import"./index.11ebb1a6.js";import"./eagerComputed.c0ebbc1b.js";import"./useForm.7372232c.js";import"./index.81a31c0e.js";import"./index.9be49184.js";import"./index.e4d59aad.js";import"./useSize.1e7f957b.js";import"./useWindowSizeFn.e63f4fea.js";import"./useContentViewHeight.dee9462e.js";import"./ArrowLeftOutlined.adb1bdea.js";import"./index.161ccdd8.js";import"./transButton.c6a24c5f.js";import"./index.211c7c9b.js";import"./index.57aac341.js";import"./index.b09eff01.js";import"./uuid.9bdf29ec.js";import"./index.f4a2f498.js";import"./_baseIteratee.7354d7ba.js";import"./DeleteOutlined.c79b4ea5.js";import"./index.346f1070.js";import"./useRefs.ea975f28.js";import"./Form.b96a02a1.js";import"./Col.b384eb90.js";import"./useFlexGapSupport.727191ee.js";import"./index.a400d60a.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.93b7aba9.js";import"./FullscreenOutlined.f58a66ff.js";import"./index.78e4de31.js";import"./fromPairs.84aabb58.js";import"./scrollTo.e57392fa.js";import"./index.70c413eb.js";/* empty css              *//* empty css               */import"./index.5fb436a4.js";import"./index.a3f63598.js";import"./index.45745d3c.js";import"./download.59b447fa.js";import"./base64Conver.08b9f4ec.js";import"./index.c45668aa.js";import"./index.c86c9338.js";import"./uniqBy.b8dc3978.js";const G=()=>C.get({url:"/error"}),J={class:"p-4"},K=["src"],Wr=k({name:"index",setup(b){const m=E(),t=E([]),{t:e}=T(),p=A(),[u,{setTableData:f}]=z({title:e("sys.errorLog.tableTitle"),columns:q(),actionColumn:{width:80,title:"Action",dataIndex:"action",slots:{customRender:"action"}}}),[a,{openModal:r}]=H();D(()=>p.getErrorLogInfoList,l=>{R(()=>{f(B(l))})},{immediate:!0});function s(l){m.value=l,r(!0)}function L(){throw new Error("fire vue error!")}function v(){t.value.push(`${new Date().getTime()}.png`)}function w(){return x(this,null,function*(){yield G()})}return(l,O)=>{const d=I("a-button");return g(),_("div",J,[(g(!0),_(S,null,V(t.value,c=>j((g(),_("img",{key:c,src:c},null,8,K)),[[F,!1]])),128)),i(M,{info:m.value,onRegister:o(a)},null,8,["info","onRegister"]),i(o(N),{onRegister:o(u),class:"error-handle-table"},{toolbar:n(()=>[i(d,{onClick:L,type:"primary"},{default:n(()=>[y(h(o(e)("sys.errorLog.fireVueError")),1)]),_:1}),i(d,{onClick:v,type:"primary"},{default:n(()=>[y(h(o(e)("sys.errorLog.fireResourceError")),1)]),_:1}),i(d,{onClick:w,type:"primary"},{default:n(()=>[y(h(o(e)("sys.errorLog.fireAjaxError")),1)]),_:1})]),action:n(({record:c})=>[i(o($),{actions:[{label:o(e)("sys.errorLog.tableActionDesc"),onClick:s.bind(null,c)}]},null,8,["actions"])]),_:1},8,["onRegister"])])}}});export{Wr as default};
