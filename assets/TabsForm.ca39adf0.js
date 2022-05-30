var b=(a,n,r)=>new Promise((i,_)=>{var p=s=>{try{u(r.next(s))}catch(o){_(o)}},m=s=>{try{u(r.throw(s))}catch(o){_(o)}},u=s=>s.done?i(s.value):Promise.resolve(s.value).then(p,m);u((r=r.apply(a,n)).next())});import{au as C,a as k,cB as E,v as h,an as $,aw as f,bO as A,x as T,o as v,j as y,z as c,m as D,n as F,h as P,az as w,ax as K,F as V,dD as S,B as g,E as R}from"./index.00ded5ec.js";import{T as B}from"./index.1950974c.js";import{P as W}from"./index.9927dec8.js";import{B as j}from"./BasicForm.e2136524.js";import{u as M}from"./useForm.949127c8.js";import"./useRefs.35df9853.js";import"./PlusOutlined.caad6c7d.js";import"./index.3f27b734.js";import"./index.c32d3109.js";import"./useSize.ddff592e.js";import"./eagerComputed.5fd5be55.js";import"./useWindowSizeFn.8613736c.js";import"./useContentViewHeight.e5cdac7c.js";import"./ArrowLeftOutlined.d0c01883.js";import"./index.9f86c066.js";import"./transButton.c964a4e6.js";/* empty css              *//* empty css               */import"./index.b5127d68.js";import"./index.603fa52d.js";import"./Checkbox.e1e6f642.js";import"./index.00c8deee.js";import"./index.22208324.js";import"./index.b378a6aa.js";import"./index.bc3beb44.js";import"./index.6f890765.js";import"./get.e98c9102.js";import"./index.ca68839c.js";import"./index.a439fbd0.js";import"./_baseIteratee.5a800ee0.js";import"./DeleteOutlined.d374c42e.js";import"./index.39991b12.js";import"./Form.8bff5e4e.js";import"./Col.8d574553.js";import"./useFlexGapSupport.641c96d8.js";import"./index.47034b24.js";import"./index.fd3f14ec.js";import"./FullscreenOutlined.9fa31b99.js";import"./index.3ae0d52e.js";import"./index.fa69315c.js";import"./uuid.9bdf29ec.js";import"./download.1c38bf09.js";import"./base64Conver.08b9f4ec.js";import"./index.9306f112.js";import"./index.080dba7a.js";import"./uniqBy.f5f9fa77.js";const N=k({name:"TabsFormDemo",components:{Tabs:B,TabPane:B.TabPane,PageWrapper:W,CollapseContainer:E,BasicForm:j},setup(){const{createMessage:a}=R(),n=h("tabs2"),r=h(!1),i=[],_={showActionButtonGroup:!1,labelWidth:100},p={};for(let o=1;o<=5;++o){const e=`tabs${o}`,l=[],d={};for(let t=1;t<=8;++t)l.push({field:`${e}.field${t}`,label:`${e}-field${t}`,component:"Input",colProps:{span:24}}),d[`field${t}`]=`field: ${e}.field${t}, default value`;p[e]=d,i.push({key:e,tab:e,forceRender:!0,Form:M(Object.assign({schemas:l},_))})}function m(){return b(this,null,function*(){for(const o of i){const{resetFields:e}=o.Form[1];yield e()}})}function u(){return b(this,null,function*(){let o="";r.value=!0;try{const e={};for(const l of i){o=l.key;const{validate:d,getFieldsValue:t}=l.Form[1];yield d(),S(e,t())}a.success("\u63D0\u4EA4\u6210\u529F\uFF01\u8BF7\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B")}catch(e){n.value=o}finally{r.value=!1}})}function s(){return b(this,null,function*(){for(const o of i){const{setFieldsValue:e}=o.Form[1];yield e(p)}})}return{omit:$,loading:r,activeKey:n,tabsFormSchema:i,handleReset:m,handleSubmit:u,handleSetValues:s}}}),z={class:"mb-4"},O=g(" \u91CD\u7F6E\u8868\u5355 "),G=g(" \u8BBE\u7F6E\u9ED8\u8BA4\u503C "),I=g(" \u63D0\u4EA4\u8868\u5355 ");function L(a,n,r,i,_,p){const m=f("a-button"),u=f("BasicForm"),s=f("TabPane"),o=f("Tabs"),e=f("CollapseContainer"),l=f("PageWrapper"),d=A("loading");return T((v(),y(l,{title:"\u6807\u7B7E\u9875+\u591A\u7EA7field\u8868\u5355"},{default:c(()=>[D("div",z,[F(m,{onClick:a.handleReset,class:"mr-2"},{default:c(()=>[O]),_:1},8,["onClick"]),F(m,{onClick:a.handleSetValues,class:"mr-2"},{default:c(()=>[G]),_:1},8,["onClick"]),F(m,{onClick:a.handleSubmit,class:"mr-2",type:"primary"},{default:c(()=>[I]),_:1},8,["onClick"])]),F(e,{title:"\u6807\u7B7E\u9875+\u591A\u7EA7field\u8868\u5355"},{default:c(()=>[F(o,{activeKey:a.activeKey,"onUpdate:activeKey":n[0]||(n[0]=t=>a.activeKey=t)},{default:c(()=>[(v(!0),P(V,null,w(a.tabsFormSchema,t=>(v(),y(s,K({key:t.key},a.omit(t,["Form","key"])),{default:c(()=>[F(u,{onRegister:t.Form[0]},null,8,["onRegister"])]),_:2},1040))),128))]),_:1},8,["activeKey"])]),_:1})]),_:1})),[[d,a.loading]])}var Me=C(N,[["render",L]]);export{Me as default};