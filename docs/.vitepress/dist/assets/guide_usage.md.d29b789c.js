import{_ as n,o as s,c as a,j as t}from"./app.b9bcfbc4.js";const m='{"title":"\u4F7F\u7528","description":"","frontmatter":{},"headers":[],"relativePath":"guide/usage.md"}',p={},e=t(`<h1 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h1><ol><li>\u5728 <code>main.ts</code> \u4E2D\u5F15\u5165\u7EC4\u4EF6</li></ol><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>

<span class="token keyword">import</span> UndrawUi <span class="token keyword">from</span> <span class="token string">&#39;undraw-ui&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;undraw-ui/dist/style.css&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>UndrawUi<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span></code></pre></div>`,3),o=[e];function c(r,i,l,u,k,d){return s(),a("div",null,o)}var f=n(p,[["render",c]]);export{m as __pageData,f as default};
