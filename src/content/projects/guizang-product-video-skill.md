---
id: "guizang-product-video-skill"
slug: "guizang-product-video-skill"
status: "published"
name: "归藏 product video skill"
subtitle: "代码库到中文宣传片"
one_liner: "把代码库交给 Agent，按真实组件与设计风格产出版本更新或产品介绍片，并交付可继续修改的工程。"
primary_category: "品牌与营销"
tags: {"scenario": ["品牌与营销", "媒体与出版"], "tech": ["HTML", "CSS", "GSAP", "FFmpeg"], "type": ["工作流"], "media_status": ["官方样片"]}
card_tags: ["真实组件", "中文流程", "品牌与营销"]
cover: {"file": "/media/guizang-product-video-skill/hero.jpg", "alt": "归藏 skill 官方主视觉：Ship it. Show it. 软件更新了，宣传片呢？"}
preview_motion: null
media_records: [{"file": "/media/guizang-product-video-skill/hero.jpg", "kind": "官方样片画面（静帧）", "sample_name": "官方主视觉画面", "source_url": "https://raw.githubusercontent.com/op7418/guizang-product-video-skill/main/assets/readme/hero.jpg", "source_page": "https://github.com/op7418/guizang-product-video-skill", "rights_holder": "归藏（op7418）", "usage_basis": "官方公开README 主视觉中用于展示项目效果的素材；本站以介绍性引用方式使用，已署名并保留来源回链；使用依据单独登记，不由仓库代码许可推导", "attribution": "归藏 product video skill 官方 README 主视觉", "permission_note": "本地仅存展示用副本；公开托管或商用分发前需向权利方单独确认"}, {"file": "/media/guizang-product-video-skill/components.jpg", "kind": "官方样片画面（静帧）", "sample_name": "真实组件与中英文排版演示", "source_url": "https://raw.githubusercontent.com/op7418/guizang-product-video-skill/main/assets/readme/components.jpg", "source_page": "https://github.com/op7418/guizang-product-video-skill", "rights_holder": "归藏（op7418）", "usage_basis": "官方公开README 组件展示中用于展示项目效果的素材；本站以介绍性引用方式使用，已署名并保留来源回链；使用依据单独登记，不由仓库代码许可推导", "attribution": "归藏 product video skill 官方 README", "permission_note": "本地仅存展示用副本；公开托管或商用分发前需向权利方单独确认"}]
code_license: {"spdx": "AGPL-3.0", "source": "https://github.com/op7418/guizang-product-video-skill/blob/main/LICENSE", "note": "仅覆盖仓库代码；不覆盖官方预览图、样片、生成媒体与第三方服务，也不自动决定视频或截图能否被本站使用。fallback 的 CodePilot 组件为 BSL，需与主许可分开核；不覆盖第三方素材与配音。"}
links: {"github": "https://github.com/op7418/guizang-product-video-skill"}
overview: "这是一个中文 Agent Skill：把代码库交给 AI，说明这次更新了什么，它会整理卖点、写文案、接入项目原有组件与设计风格、做动画、写配乐与音效，最后导出视频和可以继续修改的工程。作者把做 CodePilot 宣传片时反复打磨的流程沉淀成技能，重点放在「看起来像你的产品、听得懂你在讲什么、不拖沓」，并提供几种风格供先选再展开。"
limitations: ["官方样片基于作者自己的产品，不代表任意代码库都能达到同样效果。", "本站仅核对官方 README，未运行代码、未复现样片。", "主许可 AGPL-3.0，fallback 的 CodePilot 组件为 BSL，需分别核许可。", "首次使用会检查 Node.js、Python、FFmpeg 与渲染依赖，本站未验证安装流程。", "宣传片里的功能状态需与代码库实际版本一致，否则会误导观众。"]
author: "归藏（op7418）"
published_at: null
updated_at: "2026-11-09"
verification_note: "已核对官方 README / 项目页与许可文件，未运行代码、未复现样片"
source_note: "官方 README / 项目页（2026-11-09 读取）；核验条目底表「归藏 product video skill」条目"
selection_note: "代表性上是少见的中文语境产品片工作流，且明确接入真实组件；预览质量上有官方主视觉与组件排版演示；来源完整度上仓库与许可可核，虽无独立官网，但 README 给出完整流程与示例提示词。"
related: ["video-shotcraft", "video-use", "hyperframes"]
sort_weight: 60
---

> 以下是本站基于官方 README 与项目页整理的分析与判断，不代表作者原始结论。本站未运行代码、未复现样片。

### 怎么工作

先读代码库里的组件与设计风格，再整理卖点与文案；作者建议先给出几张关键画面供确认，通过后再做动画与声音，最后交付成片与可继续修改的工程。这个「先看关键帧再扩写」的顺序被写进使用提示词，而不是留给使用者自己摸索。

### 特点在哪里

中文语境与真实组件接入是它最明显的差异：画面里的 UI 来自项目自身，不是通用模板的仿制品。它还把配乐、动作音效与音乐让位当作流程的一部分，并提供几种风格让使用者先选，减少一次性生成带来的返工。

### 适合做什么

软件版本更新、产品发布、中文宣传片，以及需要让画面与实际界面保持一致的团队演示。若没有可读取的代码库组件，或要生成与产品无关的自然场景，这套流程并不占优。

### 值得借鉴什么

先审关键画面再扩写全片，是降低返工最直接的做法；把真实组件当证据、把声音按动作落点设计，也值得复用。许可上要分层看：主项目 AGPL，fallback 组件 BSL，第三方素材与配音另算。
