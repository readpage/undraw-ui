import{e as l}from"./emoji.51829739.js";import{c as p,U as _}from"../app.681ea904.js";import{d,ak as v,G as g,o as f,A as k,_ as j}from"./framework.347a35cb.js";import"./theme.c328b151.js";const h=d({__name:"user-info",setup(w){const e=v({user:{id:1,username:"jack",avatar:"https://static.juzicon.com/avatars/avatar-200602130320-HMR2.jpeg?x-oss-process=image/resize,w_100",likeIds:[1,2,3]},emoji:l,comments:[],total:10});let a=100;const n=({content:s,parentId:t,files:o,finish:c})=>{console.log("提交评论: "+s,t,o);let m=o.map(u=>p(u)).join("||");const i={id:String(a+=1),parentId:t,uid:e.user.id,address:"来自江苏",content:s,likes:0,createTime:"1分钟前",contentImg:m,user:{username:e.user.username,avatar:e.user.avatar,level:6,homeLink:`/${a+=1}`},reply:null};setTimeout(()=>{c(i),_({message:"评论成功!",type:"info"})},200)},r=(s,t)=>{console.log("点赞: "+s),setTimeout(()=>{t()},200)};return e.comments=[{id:"1",parentId:null,uid:"1",address:"来自上海",content:"缘生缘灭，缘起缘落，我在看别人的故事，别人何尝不是在看我的故事?别人在演绎人生，我又何尝不是在这场戏里?谁的眼神沧桑了谁?我的眼神，只是沧桑了自己[喝酒]",likes:2,contentImg:"https://gitee.com/undraw/undraw-ui/raw/master/public/docs/normal.webp",createTime:"1分钟前",user:{username:"落🤍尘",avatar:"https://static.juzicon.com/avatars/avatar-200602130320-HMR2.jpeg?x-oss-process=image/resize,w_100",level:6,homeLink:"/1"}}],(s,t)=>{const o=g("u-comment");return f(),k(o,{config:e,onSubmit:n,onLike:r},null,8,["config"])}}});const y=j(h,[["__scopeId","data-v-17571867"]]);export{y as default};