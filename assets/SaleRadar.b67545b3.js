import{av as r,a as i,v as s,a7 as n,ax as l,o as d,j as m,z as p,m as u,bl as c}from"./index.84f51bc6.js";import{C as f}from"./index.c0df5e04.js";import"./index.4274a0ce.js";/* empty css               */import{u as h}from"./useECharts.1108a85d.js";import"./index.f18c872d.js";import"./index.dfd27e00.js";import"./Col.f571ced5.js";import"./useFlexGapSupport.9e6734b3.js";import"./useRefs.5f3f03ad.js";import"./PlusOutlined.73c2527b.js";const g=i({components:{Card:f},props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"400px"}},setup(e){const a=s(null),{setOptions:t}=h(a);return n(()=>e.loading,()=>{e.loading||t({legend:{bottom:0,data:["Visits","Sales"]},tooltip:{},radar:{radius:"60%",splitNumber:8,indicator:[{name:"2017"},{name:"2017"},{name:"2018"},{name:"2019"},{name:"2020"},{name:"2021"}]},series:[{type:"radar",symbolSize:0,areaStyle:{shadowBlur:0,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1},data:[{value:[90,50,86,40,50,20],name:"Visits",itemStyle:{color:"#9f8ed7"}},{value:[70,75,70,76,20,85],name:"Sales",itemStyle:{color:"#1edec5"}}]}]})},{immediate:!0}),{chartRef:a}}});function y(e,a,t,S,w,C){const o=l("Card");return d(),m(o,{title:"\u9500\u552E\u7EDF\u8BA1",loading:e.loading},{default:p(()=>[u("div",{ref:"chartRef",style:c({width:e.width,height:e.height})},null,4)]),_:1},8,["loading"])}var k=r(g,[["render",y]]);export{k as default};
