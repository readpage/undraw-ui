import{u as w,G as d}from"../app.1023d82b.js";import{d as v,D as n,o as h,A as g,B as e,G as t,a as c,z as p,M as x,N as y,_ as b}from"./framework.ea809f5c.js";import"./theme.b4fdb09e.js";const C=o=>(x("data-v-49b754f9"),o=o(),y(),o),k={class:"operation-warp"},B=C(()=>p("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[p("path",{d:"M586.624 234.624a74.624 74.624 0 1 1-149.184 0 74.624 74.624 0 0 1 149.12 0z m0 554.624a74.624 74.624 0 1 1-149.248 0 74.624 74.624 0 0 1 149.248 0zM512 586.624a74.624 74.624 0 1 0 0-149.248 74.624 74.624 0 0 0 0 149.248z",fill:"currentColor"})],-1)),z=v({__name:"operate",props:{comment:{}},emits:["remove"],setup(o,{emit:_}){const a=o,{copy:m}=w(),i=r=>{switch(r){case"remove":_("remove",a.comment);break;case"report":d({type:"info",message:"举报成功: "+a.comment.id});break;case"copy":m(a.comment.content),d({type:"info",message:"复制成功"})}};return(r,I)=>{const l=n("u-icon"),s=n("el-dropdown-item"),u=n("el-dropdown-menu"),f=n("el-dropdown");return h(),g(f,{trigger:"click",onCommand:i},{dropdown:e(()=>[t(u,null,{default:e(()=>[t(s,{command:"report"},{default:e(()=>[c("举报")]),_:1}),t(s,{command:"remove"},{default:e(()=>[c("删除")]),_:1}),t(s,{divided:"",command:"copy"},{default:e(()=>[c("复制")]),_:1})]),_:1})]),default:e(()=>[p("div",k,[t(l,null,{default:e(()=>[B]),_:1})])]),_:1})}}});const V=b(z,[["__scopeId","data-v-49b754f9"]]);export{V as default};
