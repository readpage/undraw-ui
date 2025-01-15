import{_ as l,D as o,o as p,c as e,G as t,B as r,z as s,a,O as D}from"./chunks/framework.ea809f5c.js";const _=JSON.parse('{"title":"Form","description":"","frontmatter":{"title":"Form"},"headers":[],"relativePath":"components/form.md","lastUpdated":1725864272000}'),c={name:"components/form.md"},B=s("h1",{id:"form",tabindex:"-1"},[a("form "),s("a",{class:"header-anchor",href:"#form","aria-label":'Permalink to "form"'},"​")],-1),A=s("p",null,"自定义表单组件",-1),y=s("h2",{id:"基础用法",tabindex:"-1"},[a("基础用法 "),s("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),F=s("p",null,"form/basic",-1),i=D(`<h2 id="form-属性" tabindex="-1">form 属性 <a class="header-anchor" href="#form-属性" aria-label="Permalink to &quot;form 属性&quot;">​</a></h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>form</td><td>表单参数配置</td><td>FormApi</td><td>null</td></tr></tbody></table><h2 id="接口类型" tabindex="-1">接口类型 <a class="header-anchor" href="#接口类型" aria-label="Permalink to &quot;接口类型&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">interface</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ComponentApi</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">options</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#BABED8;">[] </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">[]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">interface</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ItemApi</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 标签文本</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">prop</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">// 字段</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#BABED8;">   </span><span style="color:#676E95;font-style:italic;">// 默认值</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">width</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">// 组件宽度</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">labelWidth</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 表单标签的宽度</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">component</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 组件</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">required</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 是否必填</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">rule</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Arrayable</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">FormItemRule</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 验证规则</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">group</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 分组显示</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">GroupApi</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tabs</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">collapse</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 分组类型</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">labels</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#BABED8;">[] </span><span style="color:#676E95;font-style:italic;">// 分组标签列表</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 默认值</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">interface</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">FormApi</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">items</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ItemApi</span><span style="color:#BABED8;">[] </span><span style="color:#676E95;font-style:italic;">// 表单项</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 数据</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">labelWidth</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">labelPosition</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">right</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">left</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">top</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 标签文本对齐方式</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">group</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">GroupApi</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 分组</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,4);function E(m,C,d,f,u,h){const n=o("Demo");return p(),e("div",null,[B,A,y,t(n,{source:"%3Ctemplate%3E%0D%0A%20%20%3Cu-form%20ref%3D%22formRef%22%20%3Aform%3D%22form%22%3E%0D%0A%20%20%20%20%3Ctemplate%20%23form-role%3D%22%7B%20item%2C%20data%20%7D%22%3E%0D%0A%20%20%20%20%20%20%3Cel-radio-group%20v-model%3D%22data.role%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cel-radio%20value%3D%22%E7%94%A8%E6%88%B7%22%20size%3D%22small%22%3E%E7%94%A8%E6%88%B7%3C%2Fel-radio%3E%0D%0A%20%20%20%20%20%20%20%20%3Cel-radio%20value%3D%22%E7%AE%A1%E7%90%86%E5%91%98%22%20size%3D%22small%22%3E%E7%AE%A1%E7%90%86%E5%91%98%3C%2Fel-radio%3E%0D%0A%20%20%20%20%20%20%3C%2Fel-radio-group%3E%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%3C%2Fu-form%3E%0D%0A%20%20%3Cdiv%3E%0D%0A%20%20%20%20%3Cel-button%20%40click%3D%22reset%22%3E%E9%87%8D%E7%BD%AE%3C%2Fel-button%3E%0D%0A%20%20%20%20%3Cel-button%20type%3D%22primary%22%20%40click%3D%22submit%22%3E%E6%8F%90%E4%BA%A4%3C%2Fel-button%3E%0D%0A%20%20%3C%2Fdiv%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20reactive%2C%20ref%20%7D%20from%20'vue'%0D%0Aimport%20%7B%20Time%2C%20FormApi%20%7D%20from%20'undraw-ui'%0D%0A%0D%0Aconst%20form%20%3D%20reactive%3CFormApi%3E(%7B%0D%0A%20%20data%3A%20%7B%7D%2C%0D%0A%20%20items%3A%20%5B%0D%0A%20%20%20%20%7B%0D%0A%20%20%20%20%20%20label%3A%20'%E7%94%A8%E6%88%B7%E5%90%8D'%2C%0D%0A%20%20%20%20%20%20prop%3A%20'username'%2C%0D%0A%20%20%20%20%20%20width%3A%20200%2C%0D%0A%20%20%20%20%20%20required%3A%20true%2C%0D%0A%20%20%20%20%20%20component%3A%20%7B%0D%0A%20%20%20%20%20%20%20%20name%3A%20'el-input'%0D%0A%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%7B%0D%0A%20%20%20%20%20%20label%3A%20'%E6%80%A7%E5%88%AB'%2C%0D%0A%20%20%20%20%20%20prop%3A%20'sex'%2C%0D%0A%20%20%20%20%20%20value%3A%20''%2C%0D%0A%20%20%20%20%20%20width%3A%20150%2C%0D%0A%20%20%20%20%20%20rule%3A%20%5B%7B%20required%3A%20true%2C%20message%3A%20'%E6%80%A7%E5%88%AB%E4%B8%8D%E8%83%BD%E4%B8%BA%E7%A9%BA'%2C%20trigger%3A%20'blur'%20%7D%5D%2C%0D%0A%20%20%20%20%20%20component%3A%20%7B%0D%0A%20%20%20%20%20%20%20%20name%3A%20'el-select'%2C%0D%0A%20%20%20%20%20%20%20%20options%3A%20%5B'%E7%94%B7'%2C%20'%E5%A5%B3'%5D%0D%0A%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%7B%0D%0A%20%20%20%20%20%20label%3A%20'%E8%A7%92%E8%89%B2'%2C%0D%0A%20%20%20%20%20%20prop%3A%20'role'%2C%0D%0A%20%20%20%20%20%20value%3A%20'%E7%94%A8%E6%88%B7'%2C%0D%0A%20%20%20%20%20%20group%3A%20'%E8%AF%A6%E7%BB%86%E4%BF%A1%E6%81%AF'%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%7B%0D%0A%20%20%20%20%20%20label%3A%20'%E5%B9%B4%E9%BE%84'%2C%0D%0A%20%20%20%20%20%20prop%3A%20'age'%2C%0D%0A%20%20%20%20%20%20value%3A%200%2C%0D%0A%20%20%20%20%20%20component%3A%20%7B%0D%0A%20%20%20%20%20%20%20%20name%3A%20'el-input'%0D%0A%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%7B%0D%0A%20%20%20%20%20%20label%3A%20'%E6%97%A5%E6%9C%9F'%2C%0D%0A%20%20%20%20%20%20prop%3A%20'date'%2C%0D%0A%20%20%20%20%20%20value%3A%20new%20Time().value%2C%0D%0A%20%20%20%20%20%20component%3A%20%7B%0D%0A%20%20%20%20%20%20%20%20name%3A%20'el-date'%0D%0A%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%7D%0D%0A%20%20%5D%0D%0A%7D)%0D%0A%0D%0Aconst%20formRef%20%3D%20ref()%0D%0A%0D%0Afunction%20reset()%20%7B%0D%0A%20%20formRef.value.resetFields()%0D%0A%7D%0D%0A%0D%0Aasync%20function%20submit()%20%7B%0D%0A%20%20formRef.value.validate((valid%3A%20boolean)%20%3D%3E%20%7B%0D%0A%20%20if%20(valid)%20%7B%0D%0A%20%20%20%20console.log(form.data)%0D%0A%20%20%7D%20else%20%7B%0D%0A%20%20%20%20console.log(valid)%0D%0A%20%20%7D%0D%0A%20%7D)%0D%0A%7D%0D%0A%3C%2Fscript%3E%0D%0A%0D%0A%3Cstyle%20lang%3D%22scss%22%3E%0D%0A.u-form%20%7B%0D%0A%20%20.el-form%20%7B%0D%0A%20%20%20%20display%3A%20grid%3B%0D%0A%20%20%20%20grid-template-columns%3A%20repeat(2%2C%201fr)%3B%0D%0A%20%20%20%20.form-role%20%7B%0D%0A%20%20%20%20%20%20grid-column%3A%201%20%2F%20-1%3B%0D%0A%20%20%20%20%7D%0D%0A%20%20%20%20%40media%20only%20screen%20and%20(max-width%3A%20768px)%20%7B%0D%0A%20%20%20%20%20%20grid-template-columns%3A%20repeat(1%2C%201fr)%3B%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D%0D%0A%3C%2Fstyle%3E%0D%0A",path:"form/basic",description:""},{default:r(()=>[F]),_:1}),i])}const g=l(c,[["render",E]]);export{_ as __pageData,g as default};
