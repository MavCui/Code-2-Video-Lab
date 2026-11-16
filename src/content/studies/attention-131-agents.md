---
num: "02"
slug: attention-131-agents
status: "published"
title: "ATTENTION IS ALL YOU NEED：131 个 agent、101 亿 token 做出 5 分 26 秒"
title_main: "ATTENTION IS ALL YOU NEED"
title_sub: "131 个 agent、101 亿 token 做出 5 分 26 秒"
tag: "多智能体长片"
one_liner: "片长一旦超过 3 分钟，瓶颈就从“生成”变成“编排”——这条案例把编排开销第一次量化到了 token 级。"
industry: "艺术与实验"
tech: ["多智能体", "视频模型", "Blender", "Suno"]
cover: {"file": "/media/studies/attention-131-agents/cover.jpg", "alt": "ATTENTION IS ALL YOU NEED 案例对照画面", "fit": "cover"}
hint: "看哪里。看片头标题卡：S1-01、A LECTURE IN 96 LAYERS，以及底部 <|endoftext|> 50256 的字幕——这是模型给自己写的元叙事，说明编排层在控制叙事结构，不只是堆画面。"
caption: "图 2｜片头：<|endoftext|> 50256 是模型的结束符 token，被当成片名元素使用。来源：@tetsuoai 原帖视频封面帧。"
meta: [{"k": "核心定位", "v": "把长片当工程调度：131 个 agent 分部门并行，用一个 token 总量衡量整条产线的规模。"}, {"k": "适用场景", "v": "有清晰词曲或分镜结构、可以拆成并行工段的长片、MV、纪录片式内容。"}, {"k": "必备输入", "v": "人写的钢琴旋律与歌词；外部素材模型（Grok Imagine Image 2.0 / Video 1.5、Qwen-Image 2.1）；Suno 音乐；Blender 承担 3D 段落。"}, {"k": "标准流程", "v": "词曲 → 分镜 → 131 个 agent 按部门并行生产素材 → Blender 段落地制作 → 统一剪辑与混音。"}, {"k": "AI职责", "v": "分镜、素材生成、3D、字幕、剪辑决策由 agent 承担；人负责作曲、歌词与终审。"}, {"k": "关键指标", "v": "目标：5 分 26 秒纪录片式 MV。实际：26 小时 51 分、10.1B token、23,354 次模型调用、131 个 agent（均为作者自述）。美元成本未披露。"}]
cost_table: []
cost_note: ""
take: [{"k": "可以迁移的", "v": "长片按“部门”拆 agent（画面、音乐、字幕、剪辑），而不是按镜头拆——按镜头拆会让 agent 数量爆炸而协作成本失控。"}, {"k": "成立的条件", "v": "需要一个能记录调用次数的编排层，否则连“花了多少”都无从统计。"}, {"k": "不能外推的", "v": "只有 token 总量、没有单价与账单，无法换算成钱；也无提示词与 runlog，不可复现。"}]
body: ["10.1B token 这个数字，比“131 个 agent”更值得记。如果把 token 当成产线的“耗材”，这条片子相当于烧掉了 101 亿个 token 才换来 5 分 26 秒。23,354 次模型调用除以 131 个 agent，平均每个 agent 调用约 178 次——真正的工作量不在单次生成，而在反复的调度与重试。这也解释了为什么长片的时间成本是超线性的。", "链路是混合的，不是纯代码。作者的清单里同时出现了 Grok Imagine 的图像与视频模型、Qwen-Image、Suno 和 Blender。这不是“代码生成视频”的原教旨做法，而是把视频模型当素材供应商、把代码当编排层。判断这类项目时，看的是编排层能不能稳定调度异构工具，而不是它有没有用到视频模型。", "人留下的那部分，恰好是最难被替代的。钢琴旋律由作者写、歌词由作者写，模型负责把它变成 96 层结构的影像。这条分工线很清楚：可结构化的部分交给 agent，需要作者性的部分留在人手上。"]
demo: {"label": "X 原帖（5:26，2026-11-08，72K 播放）", "url": "https://x.com/tetsuoai/status/2119341048367665201", "type": "Demo 类型：单条成片（无同题对照，作者另附制作说明）"}
sources: [{"text": "原帖（含成片与制作数据）：https://x.com/tetsuoai/status/2119341048367665201", "links": ["https://x.com/tetsuoai/status/2119341048367665201"]}, {"text": "工具清单与作品说明：https://jasonzhu.ai/en/prompts/claude-opus-5-5/2119341048367665201", "links": ["https://jasonzhu.ai/en/prompts/claude-opus-5-5/2119341048367665201"]}, {"text": "发布时间与互动数据：2026-11-08（UTC+8）；72K 播放 / 1.9K 赞，快照 2026-11-16", "links": []}, {"text": "证据缺口：美元成本、各模型 token 分配、失败重试比例、agent 编排框架均未披露。", "links": []}, {"text": "记录版本：原帖与媒体快照 2026-11-16；模型归属以作者自述为准，未独立复现。", "links": []}]
source_doc: {"name": "C2V_案例精读_24例_证据版", "url": "https://www.workbuddy.cn/space/d/brjgW58OaD25LBl8vBeJQl", "section": "多智能体长片"}
license: {"spdx": "未声明（作者保留权利）", "source": "https://x.com/tetsuoai/status/2119341048367665201", "note": "作品本身未附开源许可文件；本栏只记录作品的权利状态，不推断任何画面或素材的使用权限。"}
media_records: [{"file": "/media/studies/attention-131-agents/cover.jpg", "kind": "案例精读内嵌截图（静帧）", "sample_name": "ATTENTION IS ALL YOU NEED 案例对照画面", "source_url": "https://x.com/tetsuoai/status/2119341048367665201", "source_page": "https://www.workbuddy.cn/space/d/brjgW58OaD25LBl8vBeJQl", "rights_holder": "原作者（X 账号）", "usage_basis": "画面取自作者 X 原帖视频帧，经案例精读文档整理并内嵌；本站以介绍性引用方式使用，已署名并保留原帖回链，使用依据单独登记，不由代码或作品许可推导", "attribution": "ATTENTION IS ALL YOU NEED · X 原帖作者", "permission_note": "本地仅存展示用副本；公开托管或商用分发前需向原作者单独确认"}, {"file": "/media/studies/attention-131-agents/preview.mp4", "kind": "原视频片段（5 秒静音循环）", "sample_name": "ATTENTION IS ALL YOU NEED：131 个 agent、101 亿 token 做出 5 分 26 秒 动态预览", "source_url": "https://x.com/tetsuoai/status/2119341048367665201", "source_page": "https://www.workbuddy.cn/space/d/brjgW58OaD25LBl8vBeJQl", "rights_holder": "原作者（X 账号）", "usage_basis": "由作者原帖视频或官方影片截取 5 秒、静音、缩放后用于站内动态预览；以介绍性引用方式使用，已署名并保留原始来源回链，使用依据单独登记，不由代码或作品许可推导", "attribution": "ATTENTION IS ALL YOU NEED · X 原帖作者", "permission_note": "本地仅存展示用副本；公开托管或商用分发前需向原作者单独确认"}]
updated_at: "2026-11-16"
verification_note: "数据与画面均来自案例精读文档及其标注的 X 原帖，作者自述口径；本站未独立复现任何一条链路。"
sort_weight: 202
related: ["cathedral-of-ice", "83s-threejs-39-shots", "3492-char-anime-prompt"]
preview_motion: "/media/studies/attention-131-agents/preview.mp4"
---
