---
num: "08"
slug: teaching-plugin-manim
status: "published"
title: "模型会做动画，但不会教书：于是他写了一个插件"
title_main: "模型会做动画，但不会教书"
title_sub: "于是他写了一个插件"
tag: "缺陷修复"
one_liner: "这条案例最值钱的地方是失败判断——不是换模型，而是把缺失的教学结构外置成工具。"
industry: "教育与科普"
tech: ["Manim", "代码渲染"]
cover: {"file": "/media/studies/teaching-plugin-manim/cover.jpg", "alt": "模型会做动画，但不会教书 案例对照画面", "fit": "cover"}
hint: "看哪里。看讲解的推进顺序：先给直觉、再给形式化、最后给例子——这个顺序不是模型即兴安排的，是插件里的教学法模板。"
caption: "图 8｜ManimGL 渲染的讲解片段。来源：@alanchan_tw 原帖视频封面帧。"
meta: [{"k": "核心定位", "v": "承认模型在“教学法”上的短板，用自建插件补上结构，而不是继续加长提示词。"}, {"k": "适用场景", "v": "教材、论文、需要教学结构的科普讲解。"}, {"k": "必备输入", "v": "教材或论文原文；Heptabase + ManimGL + Codex；作者自建的转换插件。"}, {"k": "标准流程", "v": "文档 → 拆知识点 → 按教学法组织 → 生成 Manim 动画 → 成片。"}, {"k": "AI职责", "v": "动画与代码由模型承担；教学结构由插件约束。"}, {"k": "关键指标", "v": "目标：3Blue1Brown 风格的讲解片。实际：1 分 12 秒样例、55.4K 播放；作者明确表示 Opus 5.5 擅长动画、不擅长教学。"}]
cost_table: []
cost_note: ""
take: [{"k": "可以迁移的", "v": "当模型在某个环节持续表现差，先判断是“知识缺失”还是“结构缺失”；后者可以用工具补。"}, {"k": "成立的条件", "v": "需要有人愿意把领域方法论显式写下来，并维护插件。"}, {"k": "不能外推的", "v": "教学法模板与学科强相关；换学科需要重写模板，不是换个提示词就行。"}]
body: ["这是一条“负面能力”证据。作者的原话是：Opus 5.5 做动画很强，但教得不好。多数分享会停在这里，转而夸模型；他选择把“教得好”拆成可编程的结构——先讲什么、用哪种表征、什么时候给例子，然后写进插件。", "为什么插件比提示词更合适。提示词是一次性的，插件是可复用的约束。教学法一旦被固化，每次做新章节都不用重新描述“怎么教”，模型只需要负责“画出来”。这也让产出的稳定性从“看运气”变成“看模板”。", "ManimGL 的选择说明他不是在追新。3Blue1Brown 的 Manim 生态是数学动画的事实标准，选它意味着放弃一部分“模型自由发挥”，换来可预测的渲染结果。这是典型的工程取舍：宁可少一点惊喜，也要多一点可复现。"]
demo: {"label": "X 原帖（1:12，2026-11-10，55.4K 播放）", "url": "https://x.com/alanchan_tw/status/2120169953412202718", "type": "Demo 类型：单条成片（插件工作流未录屏）"}
sources: [{"text": "原帖：https://x.com/alanchan_tw/status/2120169953412202718", "links": ["https://x.com/alanchan_tw/status/2120169953412202718"]}, {"text": "作品说明与工具：https://jasonzhu.ai/en/prompts/claude-opus-5-5/2120169953412202718", "links": ["https://jasonzhu.ai/en/prompts/claude-opus-5-5/2120169953412202718"]}, {"text": "发布时间与互动数据：2026-11-10（UTC+8）；55.4K 播放 / 1.1K 赞，快照 2026-11-16", "links": []}, {"text": "证据缺口：插件未开源；单条样例不足以验证教学效果。", "links": []}, {"text": "记录版本：原帖与媒体快照 2026-11-16；模型归属以作者自述为准，未独立复现。", "links": []}]
source_doc: {"name": "C2V_案例精读_24例_证据版", "url": "https://www.workbuddy.cn/space/d/brjgW58OaD25LBl8vBeJQl", "section": "缺陷修复"}
license: {"spdx": "未声明（作者保留权利）", "source": "https://x.com/alanchan_tw/status/2120169953412202718", "note": "作品本身未附开源许可文件；本栏只记录作品的权利状态，不推断任何画面或素材的使用权限。"}
media_records: [{"file": "/media/studies/teaching-plugin-manim/cover.jpg", "kind": "案例精读内嵌截图（静帧）", "sample_name": "模型会做动画，但不会教书 案例对照画面", "source_url": "https://x.com/alanchan_tw/status/2120169953412202718", "source_page": "https://www.workbuddy.cn/space/d/brjgW58OaD25LBl8vBeJQl", "rights_holder": "原作者（X 账号）", "usage_basis": "画面取自作者 X 原帖视频帧，经案例精读文档整理并内嵌；本站以介绍性引用方式使用，已署名并保留原帖回链，使用依据单独登记，不由代码或作品许可推导", "attribution": "模型会做动画，但不会教书 · X 原帖作者", "permission_note": "本地仅存展示用副本；公开托管或商用分发前需向原作者单独确认"}, {"file": "/media/studies/teaching-plugin-manim/preview.mp4", "kind": "原视频片段（5 秒静音循环）", "sample_name": "模型会做动画，但不会教书：于是他写了一个插件 动态预览", "source_url": "https://x.com/alanchan_tw/status/2120169953412202718", "source_page": "https://www.workbuddy.cn/space/d/brjgW58OaD25LBl8vBeJQl", "rights_holder": "原作者（X 账号）", "usage_basis": "由作者原帖视频或官方影片截取 5 秒、静音、缩放后用于站内动态预览；以介绍性引用方式使用，已署名并保留原始来源回链，使用依据单独登记，不由代码或作品许可推导", "attribution": "模型会做动画，但不会教书 · X 原帖作者", "permission_note": "本地仅存展示用副本；公开托管或商用分发前需向原作者单独确认"}]
updated_at: "2026-11-16"
verification_note: "数据与画面均来自案例精读文档及其标注的 X 原帖，作者自述口径；本站未独立复现任何一条链路。"
sort_weight: 208
related: ["hyperframes-war-timeline", "20min-vs-1200h", "cathedral-of-ice"]
preview_motion: "/media/studies/teaching-plugin-manim/preview.mp4"
---
