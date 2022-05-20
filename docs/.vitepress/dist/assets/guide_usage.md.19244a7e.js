import{_ as n,o as s,c as a,j as p}from"./app.c782c3ed.js";const m='{"title":"\u4F7F\u7528","description":"","frontmatter":{},"headers":[],"relativePath":"guide/usage.md"}',t={},e=p(`<h1 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h1><ol><li>\u56E0\u4E3A\u672C\u7EC4\u4EF6\u662F\u57FA\u4E8E <code>element-plus</code> \u5F00\u53D1\u3002\u9996\u5148\u9700\u8981\u5F15\u5165 <code>element-plus</code>\u3002</li></ol><div class="language-bash"><pre><code><span class="token function">npm</span> i element-plus
</code></pre></div><ol start="2"><li>\u5728 <code>main.ts</code> \u4E2D\u5F15\u5165\u7EC4\u4EF6</li></ol><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>
<span class="token keyword">import</span> ElementPlus <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;element-plus/dist/index.css&#39;</span>

<span class="token keyword">import</span> UndrawUi <span class="token keyword">from</span> <span class="token string">&#39;undraw-ui&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;undraw-ui/dist/style.css&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementPlus<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>UndrawUi<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span></code></pre></div>`,5),o=[e];function c(l,i,r,u,k,d){return s(),a("div",null,o)}var f=n(t,[["render",c]]);export{m as __pageData,f as default};
