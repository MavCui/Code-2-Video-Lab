---
id: "sensenova-code2video"
slug: "sensenova-code2video"
status: "published"
name: "SenseNova 6.8 Code2Video"
subtitle: "开放权重的代码视频模型"
one_liner: "以开放权重的代码模型产出可执行的视频代码，把「每帧由代码生成」做成模型能力而非工程模板。"
primary_category: "研究与模型"
tags: {"scenario": ["研究与模型", "教育与科普"], "tech": ["HTML", "CSS", "SVG"], "type": ["模型"], "media_status": ["官方样片"]}
card_tags: ["开放权重", "模型", "代码驱动"]
cover: {"file": "/media/sensenova-code2video/style-wall.jpg", "alt": "SenseNova 6.8 Code2Video 官方九部样片风格墙"}
preview_motion: "/media/sensenova-code2video/preview.mp4"
media_records: [{"file": "/media/sensenova-code2video/style-wall.jpg", "kind": "官方样片画面（抽帧）", "sample_name": "九部官方样片风格墙", "source_url": "https://raw.githubusercontent.com/OpenSenseNova/SenseNova-6.8-Code2Video/main/media/launch/wall.gif", "source_page": "https://github.com/OpenSenseNova/SenseNova-6.8-Code2Video", "rights_holder": "OpenSenseNova 团队", "usage_basis": "官方公开README 发布影片区中用于展示项目效果的素材；本站以介绍性引用方式使用，已署名并保留来源回链；使用依据单独登记，不由仓库代码许可推导", "attribution": "SenseNova 6.8 Code2Video 官方 README 发布区", "permission_note": "本地仅存展示用副本；公开托管或商用分发前需向权利方单独确认"}, {"file": "/media/sensenova-code2video/launch-title.jpg", "kind": "官方样片画面（抽帧）", "sample_name": "官方发布标题画面", "source_url": "https://raw.githubusercontent.com/OpenSenseNova/SenseNova-6.8-Code2Video/main/media/launch/title.gif", "source_page": "https://github.com/OpenSenseNova/SenseNova-6.8-Code2Video", "rights_holder": "OpenSenseNova 团队", "usage_basis": "官方公开README 标题动图中用于展示项目效果的素材；本站以介绍性引用方式使用，已署名并保留来源回链；使用依据单独登记，不由仓库代码许可推导", "attribution": "SenseNova 6.8 Code2Video 官方 README 标题", "permission_note": "本地仅存展示用副本；公开托管或商用分发前需向权利方单独确认"}, {"file": "/media/sensenova-code2video/preview.mp4", "kind": "原视频片段（5 秒静音循环）", "sample_name": "SenseNova 6.8 Code2Video 动态预览", "source_url": "https://raw.githubusercontent.com/OpenSenseNova/SenseNova-6.8-Code2Video/main/media/launch/title.gif", "source_page": "https://github.com/OpenSenseNova/SenseNova-6.8-Code2Video", "rights_holder": "OpenSenseNova 团队", "usage_basis": "由作者原帖视频或官方影片截取 5 秒、静音、缩放后用于站内动态预览；以介绍性引用方式使用，已署名并保留原始来源回链，使用依据单独登记，不由代码或作品许可推导", "attribution": "SenseNova 6.8 Code2Video 官方 README 发布区", "permission_note": "本地仅存展示用副本；公开托管或商用分发前需向权利方单独确认"}]
code_license: {"spdx": "未取得独立 LICENSE 文件（仓库为模型发布页）", "source": "https://github.com/OpenSenseNova/SenseNova-6.8-Code2Video", "note": "仅覆盖仓库代码；不覆盖官方预览图、样片、生成媒体与第三方服务，也不自动决定视频或截图能否被本站使用。模型权重、code-video Skill、harness 与渲染器的许可需分别核实；本栏不推断任何媒体使用权限。"}
links: {"website": "https://huggingface.co/sensenova/SenseNova-6.8-Code2Video", "github": "https://github.com/OpenSenseNova/SenseNova-6.8-Code2Video"}
overview: "这是面向研究者发布的开放权重模型，主张用小型代码模型驱动视频创作。README 用「生成模型的局限」做对照：黑盒采样能产出可信的光照与运动，却缺少来自方程与物理的约束；代码可以显式表达结构与运动，因此每一帧可检查、可修改。仓库同时给出发布片、多部样片、模型权重入口与 LightLLM / vLLM / SGLang 的部署说明。"
limitations: ["官方风格墙是精选样片，本站未播放视频、未部署模型。", "README 自称是「迈向代码驱动视频的第一步」，不应视为成熟产品背书。", "仓库未见独立 LICENSE 文件，权重、代码、Skill 与样片许可需分别核实。", "与 ShowLab 的同名 Code2Video 不是同一个项目，不混算能力。", "初剪与持续修改的效果依赖模型、harness 与渲染器组合，本站未做性能排名。"]
author: "OpenSenseNova 团队"
published_at: null
updated_at: "2026-11-09"
verification_note: "已核对官方 README / 项目页与许可文件，未运行代码、未复现样片"
source_note: "官方 README / 项目页（2026-11-09 读取）；核验条目底表「SenseNova 6.8 Code2Video」条目"
selection_note: "代表性上是唯一以「模型能力」而非工程模板或技能来承载代码视频路线的条目；预览质量上有官方九宫格样片墙与发布动图；来源完整度上有仓库、权重页与部署说明，许可待核已如实登记。"
related: ["video-talkcraft", "math-to-manim", "paper-to-animation"]
sort_weight: 80
---

> 以下是本站基于官方 README 与项目页整理的分析与判断，不代表作者原始结论。本站未运行代码、未复现样片。

### 怎么工作

模型输出可执行的视频代码，由代码定义每帧的结构与运动，再交给渲染器成片；仓库提供权重、code-video Skill 与基于 LightLLM、vLLM、SGLang 的部署路径，并展示初剪之后继续修改的对照。能力链被拆成模型、Skill、harness 与渲染器几层。

### 特点在哪里

与「Agent 写模板代码」的工程路线不同，这里被评估的是模型本身；与扩散式视频生成相比，它强调代码带来的可检查性与物理约束。官方对生成模型的批评集中在缺少 grounding：运动看着合理，物理上仍可能错。

### 适合做什么

更适合研究者评估代码驱动视频的可行性、对比不同 harness，以及做结构清晰的科学或数学可视化样片。把它当作可直接替代成熟制作管线的产品，超出了官方声明的范围。

### 值得借鉴什么

模型、Skill、harness、渲染器应分开评估；开放权重不等于开放许可，尤其要单独查权重与样片的权利。展示台也应把「README 自述」与「本站判断」分开写，不因同名项目混淆。
