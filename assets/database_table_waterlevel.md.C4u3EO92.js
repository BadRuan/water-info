import{_ as s,c as i,o as a,a2 as n}from"./chunks/framework.CQ12TVIp.js";const o=JSON.parse('{"title":"水位信息数据表","description":"","frontmatter":{},"headers":[],"relativePath":"database/table/waterlevel.md","filePath":"database/table/waterlevel.md"}'),l={name:"database/table/waterlevel.md"},p=n('<h1 id="水位信息数据表" tabindex="-1">水位信息数据表 <a class="header-anchor" href="#水位信息数据表" aria-label="Permalink to &quot;水位信息数据表&quot;">​</a></h1><h2 id="新建水位信息数据表" tabindex="-1">新建水位信息数据表 <a class="header-anchor" href="#新建水位信息数据表" aria-label="Permalink to &quot;新建水位信息数据表&quot;">​</a></h2><p>字段说明:</p><ol><li><code>ID</code>：序号，索引使用</li><li><code>STCD</code>: 水文站点代码</li><li><code>Z</code>: 水位高程</li><li><code>TM</code>: 具体时间</li></ol><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> TABLE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IF</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> NOT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> EXISTS</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `water_level`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    `ID`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">11</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NOT NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> AUTO_INCREMENT,</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    `STCD`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">11</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NOT NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    `Z`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NOT NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    `TM`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> datetime</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> COLLATE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> utf8_bin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NOT NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ,</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    PRIMARY KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`ID`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) ENGINE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">InnoDB </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DEFAULT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CHARSET</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">utf8mb4 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">COLLATE=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">utf8mb4_bin</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">AUTO_INCREMENT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>+-------+------------+------+-----+---------+----------------+</span></span>\n<span class="line"><span>| Field | Type       | Null | Key | Default | Extra          |</span></span>\n<span class="line"><span>+-------+------------+------+-----+---------+----------------+</span></span>\n<span class="line"><span>| ID    | int        | NO   | PRI | NULL    | auto_increment |</span></span>\n<span class="line"><span>| STCD  | int        | NO   |     | NULL    |                |</span></span>\n<span class="line"><span>| Z     | float(4,2) | NO   |     | NULL    |                |</span></span>\n<span class="line"><span>| TM    | datetime   | NO   | UNI | NULL    |                |</span></span>\n<span class="line"><span>+-------+------------+------+-----+---------+----------------+</span></span></code></pre></div><h2 id="清空数据表" tabindex="-1">清空数据表 <a class="header-anchor" href="#清空数据表" aria-label="Permalink to &quot;清空数据表&quot;">​</a></h2><p>TRUNCATE 关键字用于完全清空一个表。其语法格式如下：</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">TRUNCATE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [TABLE] 表名</span></span></code></pre></div><h2 id="插入水位信息数据" tabindex="-1">插入水位信息数据 <a class="header-anchor" href="#插入水位信息数据" aria-label="Permalink to &quot;插入水位信息数据&quot;">​</a></h2><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">INSERT INTO</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `water_level`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`STCD`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`Z`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`TM`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">VALUES</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (%s, %s, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`%s`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>示例数据:</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">INSERT INTO</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `water_level`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`STCD`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`Z`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`TM`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">VALUES</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">60115400</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">96</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2024-03-01 12:35&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="查找数据" tabindex="-1">查找数据 <a class="header-anchor" href="#查找数据" aria-label="Permalink to &quot;查找数据&quot;">​</a></h2><h3 id="查找某水文站指定数量的水位数据" tabindex="-1">查找某水文站指定数量的水位数据 <a class="header-anchor" href="#查找某水文站指定数量的水位数据" aria-label="Permalink to &quot;查找某水文站指定数量的水位数据&quot;">​</a></h3><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SELECT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `water_level`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> where</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `STCD`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> %s </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">LIMIT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> %s</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>+----+----------+------+---------------------+</span></span>\n<span class="line"><span>| ID | STCD     | Z    | TM                  |</span></span>\n<span class="line"><span>+----+----------+------+---------------------+</span></span>\n<span class="line"><span>|  1 | 60115400 | 5.92 | 2024-03-01 08:00:00 |</span></span>\n<span class="line"><span>|  2 | 60115400 | 5.91 | 2024-03-01 08:05:00 |</span></span>\n<span class="line"><span>|  3 | 60115400 | 5.90 | 2024-03-01 08:15:00 |</span></span>\n<span class="line"><span>|  4 | 60115400 | 5.89 | 2024-03-01 08:25:00 |</span></span>\n<span class="line"><span>|  5 | 60115400 | 5.88 | 2024-03-01 08:35:00 |</span></span>\n<span class="line"><span>|  6 | 60115400 | 5.87 | 2024-03-01 08:45:00 |</span></span>\n<span class="line"><span>|  7 | 60115400 | 5.86 | 2024-03-01 09:00:00 |</span></span>\n<span class="line"><span>|  8 | 60115400 | 5.85 | 2024-03-01 09:10:00 |</span></span>\n<span class="line"><span>|  9 | 60115400 | 5.84 | 2024-03-01 09:20:00 |</span></span>\n<span class="line"><span>| 10 | 60115400 | 5.83 | 2024-03-01 09:40:00 |</span></span>\n<span class="line"><span>+----+----------+------+---------------------+</span></span></code></pre></div>',17),h=[p];function t(e,k,E,d,r,g){return a(),i("div",null,h)}const y=s(l,[["render",t]]);export{o as __pageData,y as default};
