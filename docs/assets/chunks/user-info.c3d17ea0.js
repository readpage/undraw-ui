import{e as p}from"./emoji.51829739.js";import{w as l,F as d}from"../app.aa6155c6.js";import{h as _,al as g,D as v,i as k,A as h}from"./framework.d2839b17.js";import"./theme.48aba2ee.js";const z=_({__name:"user-info",setup(j){const t=g({user:{id:1,username:"jack",avatar:"https://static.juzicon.com/avatars/avatar-200602130320-HMR2.jpeg?x-oss-process=image/resize,w_100",likeIds:[1,2,3]},emoji:p,comments:[],total:10});let s=100;const n=({content:o,parentId:a,files:e,finish:m})=>{console.log("提交评论: "+o,a,e);let i=e==null?void 0:e.map(u=>l(u)).join("||");s+=1;const c={id:String(s),parentId:a,uid:t.user.id,address:"来自江苏",content:o,likes:0,createTime:"2024-05-16",contentImg:i,user:{username:t.user.username,avatar:t.user.avatar,level:6,homeLink:`/${s}`},reply:null};setTimeout(()=>{m(c),d({message:"评论成功!",type:"info"})},200)},r=(o,a)=>{console.log("点赞: "+o),setTimeout(()=>{a()},200)};return t.comments=[{id:"1",parentId:null,uid:"1",address:"来自上海",content:"缘生缘灭，缘起缘落，我在看别人的故事，别人何尝不是在看我的故事?别人在演绎人生，我又何尝不是在这场戏里?谁的眼神沧桑了谁?我的眼神，只是沧桑了自己[喝酒]",likes:2,contentImg:"https://gitee.com/undraw/undraw-ui/raw/master/public/docs/normal.webp",createTime:"2024-05-16",user:{username:"落🤍尘",avatar:"https://static.juzicon.com/avatars/avatar-200602130320-HMR2.jpeg?x-oss-process=image/resize,w_100",level:6,homeLink:"/1"}}],(o,a)=>{const e=v("u-comment");return k(),h(e,{config:t,onSubmit:n,onLike:r},null,8,["config"])}}});export{z as default};