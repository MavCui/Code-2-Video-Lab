---
num: "10"
slug: news-video-one-prompt
status: "published"
title: "吃瓜视频：一句话跑完“找素材—写稿—配音—成片”，中英两版"
title_main: "吃瓜视频"
title_sub: "一句话跑完“找素材—写稿—配音—成片”，中英两版"
tag: "中文全流程（10 月）"
one_liner: "中文语境下最完整的一条链路样本：模型负责生产，TTS 负责声音，人只提供话题和 Key。"
industry: "媒体与出版"
tech: ["视频模型", "Gemini TTS", "多智能体"]
cover: {"file": "/media/studies/news-video-one-prompt/cover.jpg", "alt": "吃瓜视频 案例对照画面", "fit": "contain"}
hint: "看哪里。对比中英两版的镜头顺序与信息密度：结构是同一套，文案与语速按语言重写——这说明可迁移的是结构，不是稿子。"
caption: "图 10｜中文版画面。来源：@dotey 原帖视频封面帧。"
meta: [{"k": "核心定位", "v": "把资讯类口播视频的全流程压成一句提示词，输出中英两个版本。"}, {"k": "适用场景", "v": "资讯、吃瓜、热点解读类口播视频；需要快速出双语版本的场合。"}, {"k": "必备输入", "v": "话题 +（可选）素材链接或截图 + Gemini 3.8 Flash TTS 的 API Key；去敏选项（人名替换）。"}, {"k": "标准流程", "v": "给话题 → 自行检索素材 → 写稿 → 外部 TTS 配音 → 剪辑成片 → 输出中英两版。"}, {"k": "AI职责", "v": "检索、写稿、剪辑；配音交给外部 TTS。"}, {"k": "关键指标", "v": "目标：一条 5 分 51 秒的视频、中英两版。实际：两版成片均已发布；制作时长与费用未披露。"}]
cost_table: []
cost_note: ""
take: [{"k": "可以迁移的", "v": "把流程拆成“结构模板 + 外挂专用模型”，比追求单模型端到端更现实。"}, {"k": "成立的条件", "v": "需要自备 TTS 的 API Key；素材检索的准确性仍需人工复核。"}, {"k": "不能外推的", "v": "没有时长与费用数据；事实核查环节完全依赖作者本人。"}]
body: ["这条链路的关键是“外挂 TTS”。作者明确写了配音用 Gemini 3.8 Flash TTS、并且自己提供了 API Key。这不是细节，而是架构选择：把声音交给专用模型，画面与剪辑留给主模型。评估这类方案时，要问的第一个问题是“哪些环节必须外挂”，而不是“能不能一句话搞定”。", "去敏选项是个被低估的设计。提示词里留了“去掉人名”的开关，说明作者在把这类视频当产品做，而不是当作品做。可发布性——尤其是合规——往往是资讯类视频真正的瓶颈。", "双语不是翻译，是重写。两版共享结构（开场钩子、事实铺陈、反转、收尾），但文案按语言重写。这也解释了为什么提示词里给的是“结构模板”而不是“逐字稿”。"]
demo: {"label": "X 原帖（5:51，2026-10-03，74.4K 播放，提示词公开）", "url": "https://x.com/dotey/status/2106144184449085474", "type": "Demo 类型：双语版本对照（同一话题，中英各一版）"}
sources: [{"text": "原帖（含成片与提示词）：https://x.com/dotey/status/2106144184449085474", "links": ["https://x.com/dotey/status/2106144184449085474"]}, {"text": "作品说明：https://jasonzhu.ai/en/prompts/claude-opus-5-5/2106144184449085474", "links": ["https://jasonzhu.ai/en/prompts/claude-opus-5-5/2106144184449085474"]}, {"text": "发布时间与互动数据：2026-10-03（UTC+8）；74.4K 播放 / 364 赞，快照 2026-11-16", "links": []}, {"text": "证据缺口：制作时长、TTS 费用、素材来源清单未披露。", "links": []}, {"text": "记录版本：原帖与媒体快照 2026-11-16；模型归属以作者自述为准，未独立复现。", "links": []}]
source_doc: {"name": "C2V_案例精读_24例_证据版", "url": "https://www.workbuddy.cn/space/d/brjgW58OaD25LBl8vBeJQl", "section": "中文全流程（10 月）"}
license: {"spdx": "未声明（作者保留权利）", "source": "https://x.com/dotey/status/2106144184449085474", "note": "作品本身未附开源许可文件；本栏只记录作品的权利状态，不推断任何画面或素材的使用权限。"}
media_records: [{"file": "/media/studies/news-video-one-prompt/cover.jpg", "kind": "案例精读内嵌截图（静帧）", "sample_name": "吃瓜视频 案例对照画面", "source_url": "https://x.com/dotey/status/2106144184449085474", "source_page": "https://www.workbuddy.cn/space/d/brjgW58OaD25LBl8vBeJQl", "rights_holder": "原作者（X 账号）", "usage_basis": "画面取自作者 X 原帖视频帧，经案例精读文档整理并内嵌；本站以介绍性引用方式使用，已署名并保留原帖回链，使用依据单独登记，不由代码或作品许可推导", "attribution": "吃瓜视频 · X 原帖作者", "permission_note": "本地仅存展示用副本；公开托管或商用分发前需向原作者单独确认"}, {"file": "/media/studies/news-video-one-prompt/preview.mp4", "kind": "原视频片段（5 秒静音循环）", "sample_name": "吃瓜视频：一句话跑完“找素材—写稿—配音—成片”，中英两版 动态预览", "source_url": "https://x.com/dotey/status/2106144184449085474", "source_page": "https://www.workbuddy.cn/space/d/brjgW58OaD25LBl8vBeJQl", "rights_holder": "原作者（X 账号）", "usage_basis": "由作者原帖视频或官方影片截取 5 秒、静音、缩放后用于站内动态预览；以介绍性引用方式使用，已署名并保留原始来源回链，使用依据单独登记，不由代码或作品许可推导", "attribution": "吃瓜视频 · X 原帖作者", "permission_note": "本地仅存展示用副本；公开托管或商用分发前需向原作者单独确认"}]
updated_at: "2026-11-16"
verification_note: "数据与画面均来自案例精读文档及其标注的 X 原帖，作者自述口径；本站未独立复现任何一条链路。"
sort_weight: 210
related: ["three-way-edit-compare", "render-progress-negative", "cathedral-of-ice"]
preview_motion: "/media/studies/news-video-one-prompt/preview.mp4"
---
