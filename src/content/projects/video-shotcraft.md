---
id: "video-shotcraft"
slug: "video-shotcraft"
status: "published"
name: "video-shotcraft"
subtitle: "真实页面驱动的镜头配方库"
one_liner: "捕获真实产品页面，从镜头配方库选镜头、排分镜，用 Remotion 做动效并对齐节拍与声音。"
primary_category: "品牌与营销"
tags: {"scenario": ["品牌与营销", "媒体与出版"], "tech": ["React", "HTML", "CSS", "FFmpeg"], "type": ["工作流"], "media_status": ["官方样片"]}
card_tags: ["真实页面", "镜头配方", "品牌与营销"]
cover: {"file": "/media/video-shotcraft/gallery-cover.jpg", "alt": "video-shotcraft 官方封面：六个真实页面镜头配方并排展示"}
preview_motion: null
media_records: [{"file": "/media/video-shotcraft/gallery-cover.jpg", "kind": "官方样片画面（静帧）", "sample_name": "六个镜头配方画面拼贴", "source_url": "https://raw.githubusercontent.com/Vincentwei1021/video-shotcraft/main/assets/readme/cover.webp", "source_page": "https://github.com/Vincentwei1021/video-shotcraft", "rights_holder": "Vincent Wei", "usage_basis": "官方公开README 封面中用于展示项目效果的素材；本站以介绍性引用方式使用，已署名并保留来源回链；使用依据单独登记，不由仓库代码许可推导", "attribution": "video-shotcraft 官方 README 封面", "permission_note": "本地仅存展示用副本；公开托管或商用分发前需向权利方单独确认"}]
code_license: {"spdx": "Apache-2.0", "source": "https://github.com/Vincentwei1021/video-shotcraft/blob/main/LICENSE", "note": "仅覆盖仓库代码；不覆盖官方预览图、样片、生成媒体与第三方服务，也不自动决定视频或截图能否被本站使用。Apache-2.0 不覆盖 Remotion 及第三方音频、字体与素材；镜头库数量以官方当期说明为准。"}
links: {"website": "https://vincentwei1021.github.io/video-shotcraft/", "github": "https://github.com/Vincentwei1021/video-shotcraft"}
overview: "给它一句「给我的产品做支宣传片」，Agent 会捕获真实页面，从经过调校的镜头配方库里选镜头，排出分镜，再用 Remotion 做动效、对齐节拍与声音，最后渲染并逐帧检查，交付可继续编辑的 MP4。官方特别强调它不是视频生成器：每一帧都由代码从你自己的截图和文案画出。配套还有 Motion Workbench 与可选的剪映工程导出。"
limitations: ["官方封面是多个镜头配方的拼贴，不是单一成片，也不代表任意产品的输出。", "本站仅核对官方 README，未运行代码、未复现样片。", "Apache-2.0 只覆盖本项目代码，Remotion、第三方音频与字体需分别核许可。", "镜头卡与演示数量持续更新，本站不统一不同口径的数字，以官方当期说明为准。", "真实页面捕获需要可复现的产品环境，页面状态变化会影响成片。"]
author: "Vincent Wei"
published_at: null
updated_at: "2026-11-09"
verification_note: "已核对官方 README / 项目页与许可文件，未运行代码、未复现样片"
source_note: "官方 README / 项目页（2026-11-09 读取）；核验条目底表「video-shotcraft」条目"
selection_note: "代表性上把「镜头配方」做成可调参数的知识库，属于与纯渲染框架不同的工作流路线；预览质量上官方提供真实页面镜头拼贴；来源完整度上在线画廊、仓库与许可齐备。"
related: ["guizang-product-video-skill", "video-use", "hyperframes"]
sort_weight: 30
---

> 以下是本站基于官方 README 与项目页整理的分析与判断，不代表作者原始结论。本站未运行代码、未复现样片。

### 怎么工作

先捕获真实页面与文案，再从镜头库挑配方（进入、变化、退出、时间窗、旁白锚点），排成分镜；随后用 Remotion 渲染动画，按节拍组织声音，渲染后做逐帧 QA 并输出 MP4。官方把「每帧由代码从自己的截图和文案画出」写进定位，用来与扩散式生成区分。

### 特点在哪里

真实 UI 是证据，不是重建出来的假界面；镜头配方把「这个镜头要证明什么、哪些参数可改、哪些禁改、怎样算失败」显式记录下来。相比一套通用模板，它更接近可复用的制作知识，且先做真实捕获再谈动效。

### 适合做什么

产品发布、版本更新、UI 演示、功能介绍与广告 A/B 变体。需要真实操作可信度的场景尤其合适；若没有可访问的产品页面，或需要自然场景素材，这条链路的优势会明显下降。

### 值得借鉴什么

镜头卡的信息结构值得直接借鉴：功能、主体、时间窗、来源、可改参数、禁改项、失败标准。另外它把声音与节拍放进流程而不是最后贴一层 BGM，也提醒展示台不要把音频当作装饰。
