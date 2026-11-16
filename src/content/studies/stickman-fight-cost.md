---
num: "14"
slug: stickman-fight-cost
status: "published"
title: "15 秒火柴人对打：没有材质、没有光照，成本仍差 2.14 倍"
title_main: "15 秒火柴人对打"
title_sub: "没有材质、没有光照，成本仍差 2.14 倍"
tag: "同题对照 · 极简题"
one_liner: "题面越简单，越能看出钱花在哪——这组对照里没有材质与光照可以背锅，差价只能来自模型本身。"
industry: "艺术与实验"
tech: ["Claude Fable 5.5", "Claude Opus 5.5"]
cover: {"file": "/media/studies/stickman-fight-cost/cover.jpg", "alt": "15 秒火柴人对打 案例对照画面", "fit": "contain"}
hint: "看哪里。注意 Fable 版中间那段慢动作——那不是提示词要求的，是模型自己加的编排。加分项和成本可能同源。"
caption: "图 14｜火柴人对打：两侧并排，动作编排与镜头节奏可直接比对。来源：@DanielZambrini 原帖视频封面帧。"
meta: [{"k": "核心定位", "v": "用最低复杂度的题面（火柴人、纯线条）剥离“渲染成本”，只看模型侧的推理开销。"}, {"k": "适用场景", "v": "判断“贵”到底贵在渲染还是贵在推理；也适合做同题盲测的素材。"}, {"k": "必备输入", "v": "一句火柴人对打的编排需求；两款模型各跑一次。"}, {"k": "标准流程", "v": "固定题面 → 两模型各出 15 秒 → 并排比对动作编排 → 记录账单。"}, {"k": "AI职责", "v": "动作编排、镜头切换、节奏；Fable 版还自行加入了慢动作。"}, {"k": "关键指标", "v": "目标：同题 15 秒对打。实际（作者自述）：Fable 为 $40.36，Opus 为 $18.88；耗时未披露。"}]
cost_table: [["项目", "Fable 5.2", "Opus 5.5", "备注"], ["账单", "$40.36", "$18.88", "Fable 为 2.14 倍"], ["画面元素", "线条 + 纯色", "线条 + 纯色", "无材质、无光照"], ["额外演出", "自行加入慢动作", "未提及", "作者未说明是否要求"]]
cost_note: ""
take: [{"k": "可以迁移的", "v": "要判断“贵在渲染还是贵在推理”，就用极简题面做对照，把渲染变量压到最低。"}, {"k": "成立的条件", "v": "同题面、同时长；作者只公开了成本，未公开耗时与 token。"}, {"k": "不能外推的", "v": "15 秒、单一动作类型；不能据此推断所有极简题材的价差。"}]
body: ["为什么这条比“大片对照”更有信息量。画面里只有线条和小人，几乎没有材质、光照、粒子可以消耗算力。在这种题面上仍然出现 2.14 倍的价差，说明差价主要来自模型侧，而不是画面复杂度。反过来说，越是复杂的题材，越难把价差归因清楚。", "“自己加慢动作”是个双刃信号。一方面它证明模型在做编排判断，而不只是执行；另一方面，未被要求的额外演出很可能也是成本上升的一部分。这一点作者没有拆开，只能作为推测标注。"]
demo: {"label": "X 原帖（0:15，2026-11-10，189 赞）", "url": "https://x.com/DanielZambrini/status/2119893834276507954", "type": "Demo 类型：同题对照（同题面、同时长，成本并排）"}
sources: [{"text": "原帖（含成片与成本）：https://x.com/DanielZambrini/status/2119893834276507954", "links": ["https://x.com/DanielZambrini/status/2119893834276507954"]}, {"text": "合集出处：《Claude Fable 5.2｜192 个案例合集》影像·04-15", "links": []}, {"text": "发布时间与互动：2026-11-10 04:44（UTC+8）；189 赞，快照 2026-11-16", "links": []}, {"text": "证据缺口：耗时、token、重试次数未披露；慢动作是否为提示要求未说明。", "links": []}, {"text": "记录版本：原帖与媒体快照 2026-11-16；模型归属以作者自述为准，未独立复现。", "links": []}]
source_doc: {"name": "C2V_案例精读_24例_证据版", "url": "https://www.workbuddy.cn/space/d/brjgW58OaD25LBl8vBeJQl", "section": "同题对照 · 极简题"}
license: {"spdx": "未声明（作者保留权利）", "source": "https://x.com/DanielZambrini/status/2119893834276507954", "note": "作品本身未附开源许可文件；本栏只记录作品的权利状态，不推断任何画面或素材的使用权限。"}
media_records: [{"file": "/media/studies/stickman-fight-cost/cover.jpg", "kind": "案例精读内嵌截图（静帧）", "sample_name": "15 秒火柴人对打 案例对照画面", "source_url": "https://x.com/DanielZambrini/status/2119893834276507954", "source_page": "https://www.workbuddy.cn/space/d/brjgW58OaD25LBl8vBeJQl", "rights_holder": "原作者（X 账号）", "usage_basis": "画面取自作者 X 原帖视频帧，经案例精读文档整理并内嵌；本站以介绍性引用方式使用，已署名并保留原帖回链，使用依据单独登记，不由代码或作品许可推导", "attribution": "15 秒火柴人对打 · X 原帖作者", "permission_note": "本地仅存展示用副本；公开托管或商用分发前需向原作者单独确认"}, {"file": "/media/studies/stickman-fight-cost/preview.mp4", "kind": "原视频片段（5 秒静音循环）", "sample_name": "15 秒火柴人对打：没有材质、没有光照，成本仍差 2.14 倍 动态预览", "source_url": "https://x.com/DanielZambrini/status/2119893834276507954", "source_page": "https://www.workbuddy.cn/space/d/brjgW58OaD25LBl8vBeJQl", "rights_holder": "原作者（X 账号）", "usage_basis": "由作者原帖视频或官方影片截取 5 秒、静音、缩放后用于站内动态预览；以介绍性引用方式使用，已署名并保留原始来源回链，使用依据单独登记，不由代码或作品许可推导", "attribution": "15 秒火柴人对打 · X 原帖作者", "permission_note": "本地仅存展示用副本；公开托管或商用分发前需向原作者单独确认"}]
updated_at: "2026-11-16"
verification_note: "数据与画面均来自案例精读文档及其标注的 X 原帖，作者自述口径；本站未独立复现任何一条链路。"
sort_weight: 214
related: ["cathedral-of-ice", "attention-131-agents", "83s-threejs-39-shots"]
preview_motion: "/media/studies/stickman-fight-cost/preview.mp4"
---
