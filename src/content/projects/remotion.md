---
id: "remotion"
slug: "remotion"
status: "published"
name: "Remotion"
subtitle: "React 按帧视频的通用基线"
one_liner: "用 React 组件按帧描述画面，Studio 可视化编辑、Player 网页预览，并支持批量与云端渲染。"
primary_category: "数据与工具"
tags: {"scenario": ["数据与工具", "品牌与营销"], "tech": ["React", "HTML", "CSS", "FFmpeg"], "type": ["框架"], "media_status": ["官方文档截图"]}
card_tags: ["React", "框架", "品牌与营销"]
cover: {"file": "/media/remotion/studio-hero.jpg", "alt": "Remotion 官方首屏画面：Studio 时间线、代码编辑器与成片同屏"}
preview_motion: null
media_records: [{"file": "/media/remotion/studio-hero.jpg", "kind": "官方文档截图（静帧）", "sample_name": "Remotion 官方首屏：Studio 与代码协作", "source_url": "https://remotion.media/homepage/readme-hero-light-f7ec8ed9562c.webp", "source_page": "https://github.com/remotion-dev/remotion", "rights_holder": "Remotion 团队", "usage_basis": "官方公开README 首屏中用于展示项目效果的素材；本站以介绍性引用方式使用，已署名并保留来源回链；使用依据单独登记，不由仓库代码许可推导", "attribution": "Remotion 官方 README 首屏", "permission_note": "本地仅存展示用副本；公开托管或商用分发前需向权利方单独确认"}]
code_license: {"spdx": "Remotion License（Free / Company 双层专用许可）", "source": "https://github.com/remotion-dev/remotion/blob/main/LICENSE.md", "note": "仅覆盖仓库代码；不覆盖官方预览图、样片、生成媒体与第三方服务，也不自动决定视频或截图能否被本站使用。个人与小型公司可免费使用，一定规模以上营利组织需公司许可；具体条款以官方 LICENSE.md 为准。"}
links: {"website": "https://www.remotion.dev/", "github": "https://github.com/remotion-dev/remotion", "demo": "https://www.remotion.dev/showcase"}
overview: "Remotion 把视频写成 React 组件树：组件读取当前帧号，由帧号与 props 决定这一帧的样子，渲染时逐帧截图并交给 FFmpeg 编码。围绕这条核心，它提供 Studio 时间线与属性编辑、可嵌入网页的 Player、云渲染与批量渲染能力，也支持把设计系统沉淀成可复用动画组件。面向的是程序化视频、批量个性化产片和需要长期维护的品牌资产，而不是一次性生成自然场景素材。"
limitations: ["官方首屏是界面与成片的组合展示，不代表任意输入都能达到同样效果。", "本站仅核对官方页面与许可文件，未运行代码、未复现样片。", "使用 Remotion License 双层专用许可，是否免费取决于组织规模与用途，需按官方条款核实。", "官方已提示 Remotion 5.0 许可将调整，现有条款不能当作长期不变。", "引擎与 Studio 能力不等于生成模型或云端渲染免费。"]
author: "Remotion 团队"
published_at: null
updated_at: "2026-11-09"
verification_note: "已核对官方 README / 项目页与许可文件，未运行代码、未复现样片"
source_note: "官方 README / 项目页（2026-11-09 读取）；核验条目底表「Remotion」条目"
selection_note: "代表性上是「React 按帧」这条主流路线的基线；预览质量上官方首屏清楚展示 Studio、代码与成片的关系；来源完整度上官网、仓库、LICENSE 与作品发现页齐备。"
related: ["hyperframes", "openfilm", "video-shotcraft"]
sort_weight: 20
---

> 以下是本站基于官方 README 与项目页整理的分析与判断，不代表作者原始结论。本站未运行代码、未复现样片。

### 怎么工作

以 React 组件树描述画面，useCurrentFrame 一类接口返回帧号，动画由帧号与参数的纯函数关系决定；渲染时逐帧取画面再编码成 MP4。Studio 提供时间线与属性面板，Player 把同一套组件嵌进网页，云渲染服务用于批量任务。因为帧号是显式输入，同一时刻的画面不应受访问顺序影响。

### 特点在哪里

它把画面变成可组合、可复用、可测试的组件，而不是一段不可改的时间线；同一套代码同时服务 Agent 写码、交互式编辑和程序化批量三条路径。与用一个 HTML 文件加 data attributes 的方案相比，类型与组件约束更强，代价是要求 React 工程能力。官方首屏把 Studio、代码与成片放在同屏，正好说明这种「代码即可编辑工程」的定位。

### 适合做什么

品牌动效、数据卡片、批量个性化视频、产品发布片，以及需要把设计系统沉淀为动画组件库的团队。符号、文字、数据与时序越明确，代码路线的优势越大；自然场景质感或真人口播素材仍需实拍或生成模型补充。

### 值得借鉴什么

帧号驱动的确定性、组件化设计系统、编辑器与渲染器分离，都是可被其他工程复用的思路。许可层面也提供了提醒：它是分层专用许可而非标准开源许可，展示台必须把代码条件与预览媒体使用依据分开登记。
