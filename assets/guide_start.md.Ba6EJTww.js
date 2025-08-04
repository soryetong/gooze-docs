import{_ as a,c as n,o as i,ag as p}from"./chunks/framework.S-Qvb3wi.js";const e="/assets/gooze-starter.CUs8DfLm.png",k=JSON.parse('{"title":"快速开始","description":"","frontmatter":{},"headers":[],"relativePath":"guide/start.md","filePath":"guide/start.md"}'),l={name:"guide/start.md"};function t(o,s,c,h,d,r){return i(),n("div",null,s[0]||(s[0]=[p(`<h1 id="getting-started" tabindex="-1">快速开始 <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;快速开始 {#getting-started}&quot;">​</a></h1><h2 id="installation" tabindex="-1">安装 <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;安装 {#installation}&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>有两种方式可以快速使用</p><ol><li><p>使用 <code>gooze-cli</code> 一键生成一个优雅的 Go 项目结构</p></li><li><p>基于 <code>gooze-starter</code> 按照你的需求和爱好自行创建项目结构</p></li></ol></div><h3 id="prerequisites" tabindex="-1">要求 <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;要求 {#prerequisites}&quot;">​</a></h3><ul><li>Go 1.24 或更高版本</li></ul><h3 id="setup-wizard" tabindex="-1">安装向导 <a class="header-anchor" href="#setup-wizard" aria-label="Permalink to &quot;安装向导 {#setup-wizard}&quot;">​</a></h3><h3 id="_1-cli-生成" tabindex="-1">1. cli 生成 <a class="header-anchor" href="#_1-cli-生成" aria-label="Permalink to &quot;1. cli 生成&quot;">​</a></h3><p>可以使用以下命令创建一个新的 Go 项目：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> github.com/soryetong/gooze-cli@latest</span></span></code></pre></div><p>然后，<strong>进入你想存放的项目的目录中</strong>，运行以下命令：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gooze-cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果 <code>go install</code> 成功，却提示找不到 <code>gooze-cli</code> 命令，那么需要先添加环境变量</p></div><p>运行该命令后，会提示你输入项目名、项目类型等，按照提示输入即可</p><p>运行完成后，会按照 Go 社区的项目最佳实践来生成一个优雅的 Go 项目结构，并生成相应的代码文件。</p><p>关于 <code>gooze-cli</code> 的更多信息，请查看 <a href="./what-is-gooze-cli.html">gooze-cli</a></p><div class="tip custom-block" style="padding-top:8px;"><p>🎉 那么当前你的项目结构应该是这样的：</p></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>├─ your_project_name</span></span>
<span class="line"><span>├── api/                      # API 描述文件（如 user.api）</span></span>
<span class="line"><span>│   └── user.api</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── build/                    # 构建相关脚本（如 Dockerfile、CI 脚本）</span></span>
<span class="line"><span>│   ├── scripts/              # 启动/部署等辅助脚本（如 build.sh）</span></span>
<span class="line"><span>│   │   └── gen.sh            # 代码生成脚本</span></span>
<span class="line"><span>│   │   └── start.sh          # 项目启动脚本</span></span>
<span class="line"><span>│   └── docker/               # Dockerfile 或 compose 文件</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── cmd/                      # 程序入口</span></span>
<span class="line"><span>│   ├── server/               # 服务入口</span></span>
<span class="line"><span>│   │   └── main.go</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── configs/                  # 应用配置文件</span></span>
<span class="line"><span>│   └── config.yaml           # 主配置文件（可配合 .env 使用）</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── docs/                     # 文档入口</span></span>
<span class="line"><span>│   ├── swagger/              # Swagger 接口文档</span></span>
<span class="line"><span>│   │   └── user.yaml</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── internal/                 # 核心业务代码</span></span>
<span class="line"><span>│   ├── handler/              # 控制器层（接收请求，返回响应）</span></span>
<span class="line"><span>│   ├── dto/                  # 请求/响应的数据结构</span></span>
<span class="line"><span>│   ├── router/               # 路由定义</span></span>
<span class="line"><span>│   ├── service/              # 业务逻辑</span></span>
<span class="line"><span>│   └── bootstrap/            # 启动逻辑</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── pkg/                      # 可复用公共组件（非业务相关）</span></span>
<span class="line"><span>│   ├── model/                # 通用数据库模型</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── static/                   # 静态资源</span></span>
<span class="line"><span>│   ├── storage/              # 存放临时文件、用户上传文件、缓存等</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── test/                     # 单元测试 / 集成测试代码</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── .env                      # 环境变量文件（用于区分本地/测试/生产）</span></span>
<span class="line"><span>├── .gitignore                # Git 忽略文件</span></span>
<span class="line"><span>├── go.mod                    # Go 模块定义</span></span>
<span class="line"><span>├── go.sum                    # Go 依赖校验文件</span></span>
<span class="line"><span>└── README.md                 # 项目说明文档</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">不认可这个项目结构？</p><p>如果你认为 <code>gooze-cli</code> 生成的目录结构你不满意，那你完全可以使用 <code>gooze</code> 自行生成</p></div><br><h3 id="_2-自行使用" tabindex="-1">2. 自行使用 <a class="header-anchor" href="#_2-自行使用" aria-label="Permalink to &quot;2. 自行使用&quot;">​</a></h3><p>它只需要简单的几步就可以快速创建一个项目</p><ol><li>初始化你的项目文件夹</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mod</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> your_project_name</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> your_project_name</span></span></code></pre></div><ol start="2"><li>拉取 <code>gooze</code></li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> github.com/soryetong/gooze-starter</span></span></code></pre></div><ol start="3"><li>创建 <code>main.go</code></li></ol><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">package</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">github.com/soryetong/gooze-starter</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">func</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	gooze.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ol start="4"><li>更新依赖</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mod</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tidy</span></span></code></pre></div><ol start="5"><li>其他的目录、文件，你都可以按照你的需求和爱好来创建</li></ol><p>此时你运行 <code>go run main.go</code> 就会看到 <code>gooze</code> 的启动页</p><p><img src="`+e+`" alt="Gooze Starter" title="Gooze Starter" loading="lazy"></p><div class="tip custom-block" style="padding-top:8px;"><p>🎉 那么当前你的项目结构应该是这样的：</p></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>├─ your_project_name</span></span>
<span class="line"><span>│  ├─ .idea</span></span>
<span class="line"><span>│  ├─ go.sum</span></span>
<span class="line"><span>│  └─ main.go</span></span>
<span class="line"><span>│  └─ go.mod</span></span></code></pre></div>`,34)]))}const u=a(l,[["render",t]]);export{k as __pageData,u as default};
