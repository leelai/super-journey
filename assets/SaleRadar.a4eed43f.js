import{a as i,v as r,a6 as s,o as l,j as n,z as m,m as d,bk as u,i as p}from"./index.00ded5ec.js";import{C as f}from"./index.8dbe5c78.js";import"./index.1950974c.js";/* empty css               */import{u as c}from"./useECharts.e293b2ac.js";import"./index.96c7a7d2.js";import"./index.080dba7a.js";import"./Col.8d574553.js";import"./useFlexGapSupport.641c96d8.js";import"./useRefs.35df9853.js";import"./PlusOutlined.caad6c7d.js";const O=i({name:"SaleRadar",props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"400px"}},setup(e){const a=e,t=r(null),{setOptions:o}=c(t);return s(()=>a.loading,()=>{a.loading||o({legend:{bottom:0,data:["Visits","Sales"]},tooltip:{},radar:{radius:"60%",splitNumber:8,indicator:[{name:"2017"},{name:"2017"},{name:"2018"},{name:"2019"},{name:"2020"},{name:"2021"}]},series:[{type:"radar",symbolSize:0,areaStyle:{shadowBlur:0,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1},data:[{value:[90,50,86,40,50,20],name:"Visits",itemStyle:{color:"#b6a2de"}},{value:[70,75,70,76,20,85],name:"Sales",itemStyle:{color:"#67e0e3"}}]}]})},{immediate:!0}),(h,g)=>(l(),n(p(f),{title:"\u9500\u552E\u7EDF\u8BA1",loading:e.loading},{default:m(()=>[d("div",{ref_key:"chartRef",ref:t,style:u({width:e.width,height:e.height})},null,4)]),_:1},8,["loading"]))}});export{O as default};