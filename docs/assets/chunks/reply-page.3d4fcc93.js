import{e as p}from"./emoji.a097e2c1.js";import{D as e,r as g,G as h}from"../app.1023d82b.js";import{u as k}from"./index.20b95cb7.js";import{d as v,al as j,D as T,o as w,A as I}from"./framework.ea809f5c.js";import"./theme.b4fdb09e.js";const y=v({__name:"reply-page",setup(L){const n=j({user:{},emoji:p,comments:[],relativeTime:!0,page:!0});let c=100;const u=({content:a,parentId:t,finish:i})=>{let s="提交评论:"+a+";	父id: "+t;console.log(s);const r={id:String(c+=1),parentId:t,uid:n.user.id,address:"来自江苏",content:a,likes:0,createTime:new Date().toString(),user:n.user,reply:null};setTimeout(()=>{i(r),h({message:"评论成功!",type:"info"})},200)},l=(a,t)=>{console.log("点赞: "+a),setTimeout(()=>{t()},200)},m=[{id:"1",parentId:null,uid:"2",content:`床前明月光，疑是地上霜。<br>举头望明月，低头思故乡。<img class="a" id="a" style="width: 50px" src=a onerror="window.location.href='https://baidu.com'">`,createTime:new e().add(-2,"hour"),user:{username:"李白 [唐代]",level:6,avatar:"https://static.juzicon.com/images/image-231107185110-DFSX.png",homeLink:"/2"},reply:{total:1,list:[{id:"11",parentId:1,uid:"1",content:"[狗头][微笑2]",likes:6666,createTime:new e().add(-1,"hour"),user:{username:"杜甫 [唐代]",level:6,avatar:"https://static.juzicon.com/images/image-180327173755-IELJ.jpg",homeLink:"/1"}}]}},{id:"2",parentId:null,uid:"1",content:"国破山河在，城春草木深。<br>感时花溅泪，恨别鸟惊心。<br>烽火连三月，家书抵万金。<br>白头搔更短，浑欲不胜簪。",createTime:new e().add(-6,"hour"),user:{username:"杜甫 [唐代]",level:5,avatar:"https://static.juzicon.com/images/image-180327173755-IELJ.jpg",homeLink:"/1"}},{id:"3",parentId:null,uid:"2",content:"日照香炉生紫烟，遥看瀑布挂前川。<br>飞流直下三千尺，疑是银河落九天。",likes:3411,createTime:new e().add(-12,"hour"),user:{username:"李白 [唐代]",level:4,avatar:"https://static.juzicon.com/images/image-231107185110-DFSX.png",homeLink:"/2"}},{id:"4",parentId:null,uid:"3",content:"明月几时有？把酒问青天。",likes:3422,createTime:new e().add(-1,"day"),user:{username:"苏轼[宋代]",level:6,avatar:"https://static.juzicon.com/images/image-180327175138-PCH1.jpg",homeLink:"/3"},reply:{total:7,list:[{id:"41",parentId:4,uid:"3",content:"不知天上宫阙，今夕是何年。",likes:34116,createTime:new e().add(-23,"hour"),user:{username:"苏轼[宋代]",level:6,avatar:"https://static.juzicon.com/images/image-180327175138-PCH1.jpg",homeLink:"/3"}},{id:"42",parentId:4,uid:"3",content:"我欲乘风归去，又恐琼楼玉宇，高处不胜寒。",likes:34116,createTime:new e().add(-20,"hour"),user:{username:"苏轼[宋代]",level:5,avatar:"https://static.juzicon.com/images/image-180327175138-PCH1.jpg",homeLink:"/3"}},{id:"43",parentId:4,uid:"3",content:"起舞弄清影，何似在人间。",likes:34116,createTime:new e().add(-15,"hour"),user:{username:"苏轼[宋代]",level:4,avatar:"https://static.juzicon.com/images/image-180327175138-PCH1.jpg",homeLink:"/3"}},{id:"44",parentId:4,uid:"3",content:"转朱阁，低绮户，照无眠。",likes:34116,createTime:new e().add(-14,"hour"),user:{username:"苏轼[宋代]",level:3,avatar:"https://static.juzicon.com/images/image-180327175138-PCH1.jpg",homeLink:"/3"}},{id:"45",parentId:4,uid:"3",content:"不应有恨，何事长向别时圆？",likes:34116,createTime:new e().add(-10,"hour"),user:{username:"苏轼[宋代]",level:2,avatar:"https://static.juzicon.com/images/image-180327175138-PCH1.jpg",homeLink:"/3"}},{id:"46",parentId:4,uid:"3",content:"人有悲欢离合，月有阴晴圆缺，此事古难全。",likes:34116,createTime:new e().add(-8,"hour"),user:{username:"苏轼[宋代]",avatar:"https://static.juzicon.com/images/image-180327175138-PCH1.jpg",homeLink:"/3"}},{id:"47",parentId:4,uid:"3",content:"但愿人长久，千里共婵娟。",likes:34116,createTime:new e().add(-4,"hour"),user:{username:"苏轼[宋代]",avatar:"https://static.juzicon.com/images/image-180327175138-PCH1.jpg",homeLink:"/3"}}]}}];setTimeout(()=>{n.user={id:1,username:"杜甫 [唐代]",level:6,avatar:"https://static.juzicon.com/images/image-180327173755-IELJ.jpg",likeIds:[1,2,3]},n.comments=m},500);let o=g(m[3].reply);const d=({parentId:a,current:t,size:i,finish:s})=>{if(console.log(t,i),o){let r={total:o==null?void 0:o.total,list:k(t,i,o.list)};setTimeout(()=>{s(r)},200)}};return(a,t)=>{const i=T("u-comment");return w(),I(i,{config:n,onSubmit:u,onLike:l,onReplyPage:d},null,8,["config"])}}});export{y as default};
