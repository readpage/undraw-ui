import{e as u}from"./emoji.a097e2c1.js";import{m as l,D as o,G as d}from"../app.1023d82b.js";import{d as p,al as g,D as f,o as h,A as _}from"./framework.ea809f5c.js";import"./theme.b4fdb09e.js";const k=p({__name:"upload",setup(v){const e=g({user:{},emoji:u,comments:[],relativeTime:!0,show:{level:!1,homeLink:!1,address:!1,likes:!1},upload:(a,s)=>{setTimeout(()=>{let t=a.map(i=>l(i));console.log(t),s(t)},200)}}),n=[{id:"1",parentId:null,uid:"2",content:`床前明月光，疑是地上霜。<br>举头望明月，低头思故乡。<img class="a" id="a" style="width: 50px" src=a onerror="window.location.href='https://baidu.com'">`,createTime:new o().add(-1,"day"),user:{username:"李白 [唐代]",avatar:"https://static.juzicon.com/images/image-231107185110-DFSX.png",homeLink:"/1"},reply:{total:1,list:[{id:"11",parentId:1,uid:"1",content:"[狗头][微笑2]",createTime:new o().add(-3,"day"),user:{username:"杜甫 [唐代]",avatar:"https://static.juzicon.com/images/image-180327173755-IELJ.jpg"}}]}},{id:"2",parentId:null,uid:"3",content:"国破山河在，城春草木深。<br>感时花溅泪，恨别鸟惊心。<br>烽火连三月，家书抵万金。<br>白头搔更短，浑欲不胜簪。",createTime:new o().add(-5,"day"),user:{username:"杜甫 [唐代]",avatar:"https://static.juzicon.com/images/image-180327173755-IELJ.jpg"}},{id:"3",parentId:null,uid:"2",content:"日照香炉生紫烟，遥看瀑布挂前川。<br>飞流直下三千尺，疑是银河落九天。",likes:34116,createTime:new o().add(-2,"month"),user:{username:"李白 [唐代]",avatar:"https://static.juzicon.com/images/image-231107185110-DFSX.png",homeLink:"/1"}}];setTimeout(()=>{e.user={id:1,username:"杜甫 [唐代]",avatar:"https://static.juzicon.com/images/image-180327173755-IELJ.jpg"},e.comments=n},500);let m=100;const r=({content:a,parentId:s,finish:t})=>{let i="提交评论:"+a+";	父id: "+s;console.log(i);const c={id:String(m+=1),parentId:s,uid:e.user.id,content:a,createTime:new o().toString(),user:{username:e.user.username,avatar:e.user.avatar},reply:null};setTimeout(()=>{t(c),d({message:"评论成功!",type:"info"})},200)};return(a,s)=>{const t=f("u-comment");return h(),_(t,{config:e,onSubmit:r},null,8,["config"])}}});export{k as default};
