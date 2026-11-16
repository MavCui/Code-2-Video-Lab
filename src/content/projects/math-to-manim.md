---
id: "math-to-manim"
slug: "math-to-manim"
status: "published"
name: "Math-To-Manim"
subtitle: "可漫游的 3D 数学影片"
one_liner: "用 Manim 与 Agent 管线把数学论文、公式与猜想做成可漫游的 3D 解释动画与制作工程。"
primary_category: "教育与科普"
tags: {"scenario": ["教育与科普", "艺术与实验"], "tech": ["Manim", "3D", "FFmpeg"], "type": ["作品"], "media_status": ["官方样片"]}
card_tags: ["Manim", "3D 数学", "作品"]
cover: {"file": "/media/math-to-manim/showcase-collage.jpg", "alt": "Math-To-Manim 官方六格动画拼贴：几何与数学对象"}
preview_motion: "/media/math-to-manim/preview.mp4"
media_records: [{"file": "/media/math-to-manim/showcase-collage.jpg", "kind": "官方样片画面（静帧）", "sample_name": "六个数学动画示例拼贴", "source_url": "https://raw.githubusercontent.com/HarleyCoops/Math-To-Manim/main/docs/showcase/assets/showcase-collage-poster.png", "source_page": "https://github.com/HarleyCoops/Math-To-Manim", "rights_holder": "HarleyCoops", "usage_basis": "官方公开README 展示区中用于展示项目效果的素材；本站以介绍性引用方式使用，已署名并保留来源回链；使用依据单独登记，不由仓库代码许可推导", "attribution": "Math-To-Manim 官方 README 展示区", "permission_note": "本地仅存展示用副本；公开托管或商用分发前需向权利方单独确认"}, {"file": "/media/math-to-manim/contact-sheet.jpg", "kind": "官方样片画面（静帧）", "sample_name": "Score SDE 影片联系表", "source_url": "https://raw.githubusercontent.com/HarleyCoops/Math-To-Manim/main/docs/showcase/assets/score-sde-consistency-contact-sheet.png", "source_page": "https://github.com/HarleyCoops/Math-To-Manim", "rights_holder": "HarleyCoops", "usage_basis": "官方公开README 影片联系表中用于展示项目效果的素材；本站以介绍性引用方式使用，已署名并保留来源回链；使用依据单独登记，不由仓库代码许可推导", "attribution": "Math-To-Manim 官方 README 联系表", "permission_note": "本地仅存展示用副本；公开托管或商用分发前需向权利方单独确认"}, {"file": "/media/math-to-manim/preview.mp4", "kind": "原视频片段（5 秒静音循环）", "sample_name": "Math-To-Manim 动态预览", "source_url": "https://github.com/HarleyCoops/Math-To-Manim/releases/download/quasi-riemann-film-2026-10-07/quasi-riemann-720p.mp4", "source_page": "https://github.com/HarleyCoops/Math-To-Manim", "rights_holder": "HarleyCoops", "usage_basis": "由作者原帖视频或官方影片截取 5 秒、静音、缩放后用于站内动态预览；以介绍性引用方式使用，已署名并保留原始来源回链，使用依据单独登记，不由代码或作品许可推导", "attribution": "Math-To-Manim 官方 README 展示区", "permission_note": "本地仅存展示用副本；公开托管或商用分发前需向权利方单独确认"}]
code_license: {"spdx": "MIT", "source": "https://github.com/HarleyCoops/Math-To-Manim/blob/main/LICENSE", "note": "仅覆盖仓库代码；不覆盖官方预览图、样片、生成媒体与第三方服务，也不自动决定视频或截图能否被本站使用。仓库内影片、旁白与第三方素材许可需单独核；README 明确部分章节尚未完成渲染。"}
links: {"github": "https://github.com/HarleyCoops/Math-To-Manim"}
overview: "这是一组数学 3D 影片与制作工程的集合：Morse 理论、Hopf 纤维、平行移动、多面体几何、极小曲面，以及从 Score SDE 到一步一致性模型、zeta 零点等主题。README 记录了 Agent 管线如何把一个数学问题变成可以移动、可以从不同角度观察的几何世界，并附上分镜海报、联系表与成片入口。"
limitations: ["官方拼贴与联系表是精选帧，不代表任意数学主题都有同等完成度。", "本站仅核对官方 README，未运行代码、未播放成片。", "README 明确部分章节尚未完成渲染，且记录过本地环境启动失败，不能当作全部可用。", "数学公式与推导的正确性需专家核查，本站未验证。", "MIT 覆盖代码，不自动覆盖影片、旁白与第三方素材。"]
author: "HarleyCoops"
published_at: null
updated_at: "2026-11-09"
verification_note: "已核对官方 README / 项目页与许可文件，未运行代码、未复现样片"
source_note: "官方 README / 项目页（2026-11-09 读取）；核验条目底表「Math-To-Manim」条目"
selection_note: "代表性上把「论文 / 猜想 → 可漫游 3D 世界」做成与逐句换卡不同的数学讲解形态；预览质量上有官方动画拼贴与联系表；来源完整度上仓库、许可与制作过程记录齐备。"
related: ["fframes", "sensenova-code2video", "paper-to-animation"]
sort_weight: 100
---

> 以下是本站基于官方 README 与项目页整理的分析与判断，不代表作者原始结论。本站未运行代码、未复现样片。

### 怎么工作

从一个数学问题出发，先整理推导与可视化脚本，再由 Agent 管线组织 Manim 场景、3D 相机与对象动画，输出成片、分镜海报与联系表。README 还记录了某部影片如何由特定 Agent SDK 管线构建，把制作过程本身也作为资料保留下来。

### 特点在哪里

重点不是把公式贴到屏幕上，而是让几何对象在连续运动中保持身份与关系：对象恒常、相机连续、推导步骤与画面对应。它同时把未完成章节和失败记录写进 README，这种能力边界的透明度在作品型项目里比较少见。

### 适合做什么

数学定理、几何拓扑、物理与机器学习公式的可视化讲解，以及需要先审联系表再决定是否看全片的研究性内容。若目标是快速产出一支标准产品片，这类工程并不划算。

### 值得借鉴什么

先定义学习目标再决定动画形式；公式与推导交给专家核查；用联系表检查布局与切点，但不能替代全片试看。把未完成部分如实列出，比只展示精选样片更有助于判断真实能力。
