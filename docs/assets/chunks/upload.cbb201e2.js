import{e as l}from"./emoji.51829739.js";import{w as p,F as d}from"../app.aa6155c6.js";import{h as _,al as v,D as g,i as k,A as f}from"./framework.d2839b17.js";import"./theme.48aba2ee.js";const z=_({__name:"upload",setup(j){const t=v({user:{id:1,username:"jack",avatar:"https://static.juzicon.com/avatars/avatar-200602130320-HMR2.jpeg?x-oss-process=image/resize,w_100",likeIds:[1,2,3]},emoji:l,comments:[]});let s=100;const n=({content:o,parentId:a,files:e,finish:r})=>{console.log("提交评论: "+o,a,e);let c=e==null?void 0:e.map(u=>p(u)).join("||");s+=1;const i={id:String(s),parentId:a,uid:t.user.id,address:"来自江苏",content:o,likes:0,createTime:"2024-05-16",contentImg:c,user:{username:t.user.username,avatar:t.user.avatar,level:6,homeLink:`/${s}`},reply:null};setTimeout(()=>{r(i),d({message:"评论成功!",type:"info"})},200)},m=(o,a)=>{console.log("点赞: "+o),setTimeout(()=>{a()},200)};return t.comments=[{id:"2",parentId:null,uid:"2",address:"来自苏州",content:"知道在学校为什么感觉这么困吗？[大笑2]因为学校，是梦开始的地方。[脱单doge]",likes:11,createTime:"2024-05-16",user:{username:"悟二空",avatar:"https://static.juzicon.com/user/avatar-bf22291e-ea5c-4280-850d-88bc288fcf5d-220408002256-ZBQQ.jpeg",level:1,homeLink:"/2"}}],(o,a)=>{const e=g("u-comment");return k(),f(e,{config:t,upload:"",onSubmit:n,onLike:m,"relative-time":""},null,8,["config"])}}});export{z as default};