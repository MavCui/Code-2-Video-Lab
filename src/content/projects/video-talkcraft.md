---
id: "video-talkcraft"
slug: "video-talkcraft"
status: "published"
name: "video-talkcraft"
subtitle: "先有声音，再锚动画"
one_liner: "口播稿与成品配音先做字级对齐，再把语义拍写进 SHOTBOOK 分镜，渲染锁在人声上的动效成片。"
primary_category: "教育与科普"
tags: {"scenario": ["教育与科普", "媒体与出版"], "tech": ["React", "FFmpeg"], "type": ["工作流"], "media_status": ["官方文档截图"]}
card_tags: ["字级对齐", "口播", "SHOTBOOK"]
cover: {"file": "/media/video-talkcraft/gallery-zh.jpg", "alt": "video-talkcraft 中文在线画廊：动效配方卡与工作台截图"}
preview_motion: null
media_records: [{"file": "/media/video-talkcraft/gallery-zh.jpg", "kind": "官方文档截图（静帧）", "sample_name": "中文在线画廊与动效配方预览", "source_url": "https://raw.githubusercontent.com/Vincentwei1021/video-talkcraft/main/assets/gallery-zh.png", "source_page": "https://github.com/Vincentwei1021/video-talkcraft", "rights_holder": "Vincent Wei", "usage_basis": "官方公开README 画廊中用于展示项目效果的素材；本站以介绍性引用方式使用，已署名并保留来源回链；使用依据单独登记，不由仓库代码许可推导", "attribution": "video-talkcraft 官方 README 画廊入口", "permission_note": "本地仅存展示用副本；公开托管或商用分发前需向权利方单独确认"}]
code_license: {"spdx": "PolyForm Noncommercial License 1.0.0", "source": "https://github.com/Vincentwei1021/video-talkcraft/blob/main/LICENSE", "note": "仅覆盖仓库代码；不覆盖官方预览图、样片、生成媒体与第三方服务，也不自动决定视频或截图能否被本站使用。非商用免费，商用须事先取得作者授权；许可只覆盖工具本身，生成视频归创作者；不覆盖第三方配音与音频。"}
links: {"website": "https://vincentwei1021.github.io/video-talkcraft/", "github": "https://github.com/Vincentwei1021/video-talkcraft"}
overview: "给它一份口播稿和一条成品配音，它在本机对齐字级时间戳，把每个语义拍写进 SHOTBOOK 分镜，再用 Remotion 渲染动态字卡、证据截图、运镜、素排字幕与音效，全部锁在人声上。它是 video-shotcraft 系列的口播篇，附带在线画廊、动效工作台、分段重渲、联系表与透明通道输出。"
limitations: ["官方画廊是动效配方预览集合，不代表任意口播稿都能达到同样效果。", "本站仅核对官方 README，未运行代码、未复现样片。", "采用 PolyForm Noncommercial 1.0.0，商用需作者事先授权，不能按姊妹项目的 Apache 许可推断。", "口播卡片数量在 README 正文与仓库简介口径不一致，本站不强行统一。", "依赖 Remotion 与可选配音服务，字级对齐精度需实际试听。"]
author: "Vincent Wei"
published_at: null
updated_at: "2026-11-09"
verification_note: "已核对官方 README / 项目页与许可文件，未运行代码、未复现样片"
source_note: "官方 README / 项目页（2026-11-09 读取）；核验条目底表「video-talkcraft」条目"
selection_note: "代表性上把「音频优先、字级锚点」做成完整工作流，与其他代码渲染路线差异明显；预览质量上有官方中文画廊截图；来源完整度上在线画廊、仓库与许可齐备。"
related: ["sensenova-code2video", "paper-to-animation", "video-shotcraft"]
sort_weight: 70
---

> 以下是本站基于官方 README 与项目页整理的分析与判断，不代表作者原始结论。本站未运行代码、未复现样片。

### 怎么工作

流程从成品配音开始：先做字级时间戳对齐，再按语义把稿子切成拍，写入 SHOTBOOK 分镜；镜头卡决定字卡、证据截图与运镜的落点，最后由 Remotion 渲染。支持分段重渲与联系表，改一句旁白不必重做全片。

### 特点在哪里

大多数流程把旁白当作最后贴上的一层，这里反过来用声音驱动画面。官方还提出「反 PPT 镜头系统」，避免逐句换一张卡；持续运动不是质量目标，关键是关键语句与画面同步。字级锚点让口播与动效的对应关系可被检查。

### 适合做什么

知识口播、课程讲解、带证据截图的解说与中文长稿成片。音乐片应以段落和拍点驱动，课程也可按概念推导驱动，不宜把所有类型都套进旁白优先。

### 值得借鉴什么

ASR 转写不是稿子真值，强制对齐必须试听；中文数字、英文缩写、单位与专名需要读音词典。先定旁白再锚动画、把分段重渲做成常规操作，都是可复用的工程经验。
