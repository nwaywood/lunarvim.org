(self.webpackChunkLunarVim_com=self.webpackChunkLunarVim_com||[]).push([[767],{9072:(a,n,e)=>{"use strict";e.r(n),e.d(n,{data:()=>s});const s={key:"v-36de2738",path:"/languages/json.html",title:"JSON",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Install Syntax Highlighting",slug:"install-syntax-highlighting",children:[]},{level:2,title:"Install Language Server",slug:"install-language-server",children:[]},{level:2,title:"Formatters",slug:"formatters",children:[]}],filePathRelative:"languages/json.md",git:{updatedTime:1629608318e3,contributors:[]}}},9965:(a,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>t});const s=(0,e(6252).uE)('<h1 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> JSON</h1><h2 id="install-syntax-highlighting" tabindex="-1"><a class="header-anchor" href="#install-syntax-highlighting" aria-hidden="true">#</a> Install Syntax Highlighting</h2><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>TSInstall json\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="install-language-server" tabindex="-1"><a class="header-anchor" href="#install-language-server" aria-hidden="true">#</a> Install Language Server</h2><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>LspInstall json\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="formatters" tabindex="-1"><a class="header-anchor" href="#formatters" aria-hidden="true">#</a> Formatters</h2><p>The configured formatter(s) must be installed separately.</p><p>Configuration in <code>~/.config/lvim/config.lua</code>:</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>json<span class="token punctuation">.</span>formatters <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">{</span> exe <span class="token operator">=</span> <span class="token string">&#39;json_tool│prettier│prettierd&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',9),t={render:function(a,n){return s}}}}]);