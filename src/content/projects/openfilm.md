---
id: "openfilm"
slug: "openfilm"
status: "published"
name: "OpenFilm"
subtitle: "一个 film.html 加一个 frame(t)"
one_liner: "用一个 film.html 排轨道、一个 frame(t) 画任意时刻，并配可在浏览器里手动改动的 Studio 编辑器。"
primary_category: "数据与工具"
tags: {"scenario": ["数据与工具", "品牌与营销"], "tech": ["HTML", "CSS", "SVG", "Three.js", "FFmpeg"], "type": ["框架"], "media_status": ["官方文档截图"]}
card_tags: ["frame(t)", "框架", "数据与工具"]
cover: {"file": "/media/openfilm/studio-timeline.jpg", "alt": "OpenFilm Studio 本地编辑器：网页画面、轨道与时间线同屏"}
preview_motion: null
media_records: [{"file": "/media/openfilm/studio-timeline.jpg", "kind": "官方文档截图（静帧）", "sample_name": "OpenFilm Studio 编辑器与时间线", "source_url": "https://raw.githubusercontent.com/openfilm/openfilm/main/docs/openfilm.webp", "source_page": "https://github.com/openfilm/openfilm", "rights_holder": "OpenFilm 项目", "usage_basis": "官方公开README 的 Studio 章节中用于展示项目效果的素材；本站以介绍性引用方式使用，已署名并保留来源回链；使用依据单独登记，不由仓库代码许可推导", "attribution": "OpenFilm 官方 README「Studio」", "permission_note": "本地仅存展示用副本；公开托管或商用分发前需向权利方单独确认"}]
code_license: {"spdx": "MIT", "source": "https://github.com/openfilm/openfilm/blob/main/LICENSE", "note": "仅覆盖仓库代码；不覆盖官方预览图、样片、生成媒体与第三方服务，也不自动决定视频或截图能否被本站使用。导出到剪辑软件的时间线不等于所有动态代码在目标软件里保持原生可编辑。"}
links: {"website": "https://openfilm.dev", "github": "https://github.com/openfilm/openfilm"}
overview: "OpenFilm 让编码 Agent 写影片，也让人接着改。一个 film.html 把动画网页、实拍、图片和声音排在轨道上，用 CSS 控制样式；每个镜头是一个网页，通过 frame(t) 画出任意时刻，浏览器能画的 three.js、WebGL、canvas、SVG 与视频都可直接使用，不引入额外框架。Studio 是跑在浏览器里的本地编辑器，可以移动、缩放、旋转元素，改文字、颜色与样式，并把改动回写工程。"
limitations: ["官方素材是 Studio 编辑器界面，不是最终成片画面，不能据此判断画面风格。", "本站仅核对官方 README，未运行代码、未复现样片。", "导出剪辑时间线不等于所有动态代码在目标剪辑软件中保持原生可编辑。", "确定性依赖每个 frame(t) 与调用顺序无关，需要自行做乱序抽帧检查。", "依赖本地浏览器渲染与编码环境，本站未验证部署条件。"]
author: "OpenFilm 项目"
published_at: null
updated_at: "2026-11-09"
verification_note: "已核对官方 README / 项目页与许可文件，未运行代码、未复现样片"
source_note: "官方 README / 项目页（2026-11-09 读取）；核验条目底表「OpenFilm」条目"
selection_note: "代表性上把中间表示压到「一个文件 + 一个函数」，与组件框架路线形成清楚对照；预览质量上官方 Studio 截图可直接说明编辑方式；来源完整度上官网、仓库与 MIT 许可齐备。"
related: ["hyperframes", "remotion", "video-shotcraft"]
sort_weight: 50
---

> 以下是本站基于官方 README 与项目页整理的分析与判断，不代表作者原始结论。本站未运行代码、未复现样片。

### 怎么工作

film.html 负责把网页、素材与声音排成轨道，每个 shot 是一个用 frame(t) 表达任意时刻的网页；渲染时按 t 求值取画面，再编码输出。官方还用「同一 look 乱序两次绘制」来检查确定性。Studio 在浏览器里显示成片过程，人工改动回写工程，形成 Agent 写、人改的闭环。

### 特点在哪里

极简是它最鲜明的取舍：没有 Remotion 或 HyperFrames 那样的框架层，浏览器原生能力就是绘图能力。更值得看的是回写闭环——生成不是定稿，编辑器里的移动、缩放、改字与改色都能回到工程里，局部修改不必重写整片。

### 适合做什么

需要频繁局部调整的品牌片、产品演示与教程，以及希望 Agent 起草但保留人工最后一道修改权的团队。若目标是多人协作的大型组件库或复杂批量渲染，更成熟的组件生态可能更省事。

### 值得借鉴什么

把确定性做成可验证的动作（乱序两次绘制），比口头承诺可靠；GUI 与代码双向回写比「生成即定稿」实用。也要注意边界：能导出剪辑时间线，不代表动态代码到了目标剪辑软件里还能原生编辑。
