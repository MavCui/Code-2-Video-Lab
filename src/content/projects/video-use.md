---
id: "video-use"
slug: "video-use"
status: "published"
name: "video-use"
subtitle: "转写驱动的实拍剪辑"
one_liner: "把原始素材交给编码 Agent，用转写生成 EDL、交给 FFmpeg 剪辑，并在每个切点做自检。"
primary_category: "媒体与出版"
tags: {"scenario": ["媒体与出版", "品牌与营销"], "tech": ["FFmpeg"], "type": ["工作流"], "media_status": ["官方文档截图"]}
card_tags: ["实拍剪辑", "EDL", "FFmpeg"]
cover: {"file": "/media/video-use/banner.jpg", "alt": "video-use 官方横幅：终端与剪辑工作流示意"}
preview_motion: null
media_records: [{"file": "/media/video-use/banner.jpg", "kind": "官方文档截图（静帧）", "sample_name": "video-use 官方横幅", "source_url": "https://raw.githubusercontent.com/browser-use/video-use/main/static/video-use-banner.png", "source_page": "https://github.com/browser-use/video-use", "rights_holder": "browser-use 团队", "usage_basis": "官方公开README 横幅中用于展示项目效果的素材；本站以介绍性引用方式使用，已署名并保留来源回链；使用依据单独登记，不由仓库代码许可推导", "attribution": "video-use 官方 README 横幅", "permission_note": "本地仅存展示用副本；公开托管或商用分发前需向权利方单独确认"}]
code_license: {"spdx": "MIT", "source": "https://github.com/browser-use/video-use/blob/main/LICENSE", "note": "仅覆盖仓库代码；不覆盖官方预览图、样片、生成媒体与第三方服务，也不自动决定视频或截图能否被本站使用。默认接入 ElevenLabs 等外部服务，开源工具不等于全流程免费；生成字幕与调色链需自行核依赖。"}
links: {"website": "https://video-use.com", "github": "https://github.com/browser-use/video-use"}
overview: "把原始素材放进一个文件夹，和编码 Agent 对话就能拿回成片。它先清点素材、提出剪辑策略并等待确认，再用转写结果驱动剪辑：去掉口头禅与废段、按策略调色、烧录字幕、在每个切点做 30ms 音频淡入淡出，最后对渲染结果的切点自检。适合口播、访谈、教程、旅行与蒙太奇，走的是「代码编排剪辑」而非「代码定义画面」的路线。"
limitations: ["官方横幅是工作流示意界面，不是成片画面。", "本站仅核对官方 README，未运行代码、未复现样片。", "默认接入 ElevenLabs 等付费服务，开源不等于全流程免费。", "转写不是稿子真值，剪辑不得改变受访者原意，需人工审片。", "真实素材的再发布授权与人物同意需单独确认。"]
author: "browser-use 团队"
published_at: null
updated_at: "2026-11-09"
verification_note: "已核对官方 README / 项目页与许可文件，未运行代码、未复现样片"
source_note: "官方 README / 项目页（2026-11-09 读取）；核验条目底表「video-use」条目"
selection_note: "代表性上补齐了「混合剪辑 / 实拍编辑」这条容易被忽略的路线；预览质量上有官方工作流示意与切点说明；来源完整度上官网、仓库与 MIT 许可可核。主分类按展示台策展维度归入产品演示（真实操作与教程演示）。"
related: ["video-shotcraft", "guizang-product-video-skill", "video-talkcraft"]
sort_weight: 120
---

> 以下是本站基于官方 README 与项目页整理的分析与判断，不代表作者原始结论。本站未运行代码、未复现样片。

### 怎么工作

输入是素材文件夹，Agent 清点后提出策略并等待确认；转写得到文字与时间信息，进而生成 EDL 与 FFmpeg 命令，执行去填充词、留白切除、调色、字幕与切点音频处理，产物落在 edit/final.mp4。官方还强调渲染后会在每个切点自检再交付。

### 特点在哪里

它不重新绘制画面，而是让代码决定剪辑与包装，素材仍是真实拍摄。用文字转写驱动比把整段视频逐帧灌给模型更省，也更容易解释「为什么在这里切」。这与代码渲染路线是互补关系，不应混为一谈。

### 适合做什么

口播、访谈、播客、教程、旅行与蒙太奇等以已有素材为主的场景；需要证明产品可用性的真实操作演示也合适。若要精确控制符号、公式或几何，代码渲染框架更合适。

### 值得借鉴什么

切点自检、音频边界淡入淡出、策略先确认再执行，都是低成本高收益的工程约束。也要记住两条边界：ASR 转写不是稿子真值；剪出来的语句不得改变原意，叠字不要遮住人脸。
