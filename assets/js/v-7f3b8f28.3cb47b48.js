(self.webpackChunkLunarVim_com=self.webpackChunkLunarVim_com||[]).push([[985],{971:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>t});const t={key:"v-7f3b8f28",path:"/configuration/05-autocommands.html",title:"Autocommands",lang:"en-US",frontmatter:{},excerpt:"",headers:[],filePathRelative:"configuration/05-autocommands.md",git:{updatedTime:1629703888e3,contributors:[]}}},4190:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>r});var t=a(6252);const e=(0,t.Wm)("h1",{id:"autocommands",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#autocommands","aria-hidden":"true"},"#"),(0,t.Uk)(" Autocommands")],-1),o=(0,t.Wm)("p",null,[(0,t.Uk)("To set up autocommands use "),(0,t.Wm)("code",null,"lvim.autocommands.custom_groups. Autocommands are defined in the form "),(0,t.Uk)("{Event, filetype, command }`. This will run a command at a given event for the given filetype.")],-1),u=(0,t.Wm)("p",null,[(0,t.Uk)("To view help on autocommands: "),(0,t.Wm)("code",null,":h autocmd")],-1),p=(0,t.Uk)("Here is a "),c={href:"https://tech.saigonist.com/b/code/list-all-vim-script-events.html",target:"_blank",rel:"noopener noreferrer"},l=(0,t.Uk)("list of events"),i=(0,t.uE)('<div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>autocommands<span class="token punctuation">.</span>custom_groups <span class="token operator">=</span> <span class="token punctuation">{</span>\n   <span class="token comment">-- On entering a lua file, set the tab spacing and shift width to 8</span>\n   <span class="token punctuation">{</span> <span class="token string">&quot;BufWinEnter&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;*.lua&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;setlocal ts=8 sw=8&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  <span class="token comment">-- On entering insert mode in any file, scroll the window so the cursor line is centered</span>\n  <span class="token punctuation">{</span><span class="token string">&quot;InsertEnter&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;:normal zz&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>',1),r={render:function(n,s){const a=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.j4)(t.HY,null,[e,o,u,(0,t.Wm)("p",null,[p,(0,t.Wm)("a",c,[l,(0,t.Wm)(a)])]),i],64)}}}}]);