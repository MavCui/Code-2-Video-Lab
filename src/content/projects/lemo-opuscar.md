---
id: "lemo-opuscar"
slug: "lemo-opuscar"
status: "published"
name: "Lemo Opuscar"
subtitle: "可挑选、可改造的影片风格库"
one_liner: "把数十套代码定义的影片风格做成可挑选、可改造的风格库，让 Agent 按风格语法执导成片。"
primary_category: "艺术与实验"
tags: {"scenario": ["艺术与实验", "媒体与出版"], "tech": ["HTML", "CSS", "SVG"], "type": ["作品"], "media_status": ["官方样片"]}
card_tags: ["风格库", "证据型影片", "艺术与实验"]
cover: {"file": "/media/lemo-opuscar/opuscar98.jpg", "alt": "Lemo OPUSCAR 98 官方主视觉：橙色方块角色与影片标题"}
preview_motion: "/media/lemo-opuscar/preview.mp4"
media_records: [{"file": "/media/lemo-opuscar/opuscar98.jpg", "kind": "官方样片画面（静帧）", "sample_name": "OPUSCAR 98 官方主视觉", "source_url": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/docs", "source_page": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/docs", "rights_holder": "lemomo-ai / Lemo", "usage_basis": "官方公开README 主推影片中用于展示项目效果的素材；本站以介绍性引用方式使用，已署名并保留来源回链；使用依据单独登记，不由仓库代码许可推导", "attribution": "Lemo Opuscar 官方 README「OPUSCAR 98」", "permission_note": "原始直链 docs/opuscar98.jpg 于 2026-11-16 复核时返回 404（仓库已调整该文件），本地副本为当日抓取快照；公开托管或商用分发前需向权利方单独确认"}, {"file": "/media/lemo-opuscar/styles-banner.jpg", "kind": "官方样片画面（静帧）", "sample_name": "全部风格缩略图横幅", "source_url": "https://raw.githubusercontent.com/lemomo-ai/lemo-opuscar/main/docs/cover.jpg", "source_page": "https://github.com/lemomo-ai/lemo-opuscar", "rights_holder": "lemomo-ai / Lemo", "usage_basis": "官方公开README 风格总览中用于展示项目效果的素材；本站以介绍性引用方式使用，已署名并保留来源回链；使用依据单独登记，不由仓库代码许可推导", "attribution": "Lemo Opuscar 官方 README 风格总览", "permission_note": "本地仅存展示用副本；公开托管或商用分发前需向权利方单独确认"}, {"file": "/media/lemo-opuscar/preview.mp4", "kind": "原视频片段（5 秒静音循环）", "sample_name": "Lemo Opuscar 动态预览", "source_url": "https://github.com/lemomo-ai/lemo-opuscar/releases/download/films/opuscar98.mp4", "source_page": "https://github.com/lemomo-ai/lemo-opuscar/tree/main/docs", "rights_holder": "lemomo-ai / Lemo", "usage_basis": "由作者原帖视频或官方影片截取 5 秒、静音、缩放后用于站内动态预览；以介绍性引用方式使用，已署名并保留原始来源回链，使用依据单独登记，不由代码或作品许可推导", "attribution": "Lemo Opuscar 官方 README「OPUSCAR 98」", "permission_note": "原始直链 docs/opuscar98.jpg 于 2026-11-16 复核时返回 404（仓库已调整该文件），本地副本为当日抓取快照；公开托管或商用分发前需向权利方单独确认"}]
code_license: {"spdx": "MIT", "source": "https://github.com/lemomo-ai/lemo-opuscar/blob/main/LICENSE", "note": "仅覆盖仓库代码；不覆盖官方预览图、样片、生成媒体与第三方服务，也不自动决定视频或截图能否被本站使用。样片为 CC BY 4.0 且 6 条特定旁白除外；代码 MIT 不自动覆盖样片、字体、配音与第三方素材。"}
links: {"website": "https://lemomo-ai.github.io/lemo-opuscar/", "github": "https://github.com/lemomo-ai/lemo-opuscar"}
overview: "Lemo Opuscar 把影片风格写成代码，做成一个可挑选也可改造的风格库：每套风格有导演指南与样片，使用者带自己的故事和素材，由编码 Agent 按风格语法执导。README 按日期记录新增内容，包括证据型影片、编辑与纪录片类风格、地铁图、白模投影、LiDAR、显微与档案核查等，覆盖数据实体化与信息图式的表达。"
limitations: ["官方主视觉与风格墙是精选样片，不代表任意输入都能达到同样效果。", "本站仅核对官方 README，未运行代码、未复现样片。", "README 明确风格为特定模型调优，其他模型可能难以复现。", "代码 MIT、样片 CC BY 4.0 且有 6 条旁白除外，字体、配音与第三方素材另算。", "证据型影片的数字与出处需自行复核，本站未核对片中数据。"]
author: "lemomo-ai / Lemo"
published_at: null
updated_at: "2026-11-09"
verification_note: "已核对官方 README / 项目页与许可文件，未运行代码、未复现样片"
source_note: "官方 README / 项目页（2026-11-09 读取）；核验条目底表「Lemo Opuscar」条目"
selection_note: "代表性上把「风格语法」而非单个模板作为复用单位，覆盖数据叙事与证据型影片；预览质量上有官方主视觉与全风格总览；来源完整度上官网、仓库、许可与逐条更新说明齐备。"
related: ["paper-to-animation", "math-to-manim", "sensenova-code2video"]
sort_weight: 40
---

> 以下是本站基于官方 README 与项目页整理的分析与判断，不代表作者原始结论。本站未运行代码、未复现样片。

### 怎么工作

先选一套风格或自建风格，带上故事与素材，让编码 Agent 按该风格的导演指南组织画面与节奏；每套风格有独立的说明与样片，也可以把自己的风格改完留存。README 用带日期的更新记录逐条列出新增风格与影片类型。

### 特点在哪里

它把风格做成可复用语法，而不是一次性提示词，因此画面之间的表演、节奏与声音有一致性。「证据型影片」要求每个数字有来源，把资料核查写进风格约束；「编辑与纪录片」则处理真实素材与文档，两者和纯动画风格不是一回事。

### 适合做什么

数据叙事、工程说明板、地图与交通、档案调查、科普与纪录片式讲解。若只需要一支标准产品发布片，通用镜头配方库可能更直接。

### 值得借鉴什么

风格、表演、声音拆开研究，比统计模板数量更有用；证据型内容要保留出处与页码，缺失证据不靠生成补全。许可分层也很典型：代码 MIT 与样片 CC BY 4.0 必须分别登记。
