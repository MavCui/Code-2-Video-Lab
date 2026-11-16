---
num: "22"
slug: 168-shots-open-mv
status: "published"
title: "6 分 13 秒、168 个镜头，源码公开：唯一能拆开看的 MV"
title_main: "6 分 13 秒、168 个镜头，源码公开"
title_sub: "唯一能拆开看的 MV"
tag: "可复现的音乐长片"
one_liner: "全篇唯一把工程放上 GitHub 的案例——它让“这条片子怎么来的”第一次可以被别人验证。"
industry: "艺术与实验"
tech: ["Canvas 2D", "WebGL", "Web Audio"]
cover: {"file": "/media/studies/168-shots-open-mv/cover.jpg", "alt": "6 分 13 秒、168 个镜头，源码公开 案例对照画面", "fit": "cover"}
hint: "看哪里。注意笔触的“湿润感”是否在长镜头里保持一致——自写 WebGL2 渲染器的稳定性，就体现在这里。"
caption: "图 22｜MV 中的笔触画面。来源：@eudaemonea 原帖视频封面帧。"
meta: [{"k": "核心定位", "v": "Canvas2D 底图 + 自写 WebGL2 笔触渲染器，按音乐节拍组织 168 个镜头。"}, {"k": "适用场景", "v": "音乐视频、长时段视觉专辑；需要可复现与二次开发的项目。"}, {"k": "必备输入", "v": "一首歌（更早阶段由 Claude 4.6 写词、Suno 制作）+ 项目源码 + 渲染环境。"}, {"k": "标准流程", "v": "先做歌词版 → 被作者否决 → 多轮反馈节奏与分镜 → 七个子代理并行完成后续章节。"}, {"k": "AI职责", "v": "画面、笔触渲染器、镜头组织；词曲在更早阶段由其他模型与工具完成。"}, {"k": "关键指标", "v": "目标：一首完整的 6 分钟 MV。实际：6 分 13 秒、168 个镜头、源码公开；制作轮次为多轮而非一次。"}]
cost_table: []
cost_note: ""
take: [{"k": "可以迁移的", "v": "长 MV 用“章节目录 + 子代理并行”推进；镜头数一旦上百，靠单轮生成必然失控。"}, {"k": "成立的条件", "v": "需要有源码级的维护能力；自写渲染器的调试成本高于调用现成库。"}, {"k": "不能外推的", "v": "音乐与画面分属不同工具，不能整体归因单一模型；成本未披露。"}]
body: ["源码公开改变了这条案例的性质。其他案例只能看片、读作者自述；这条可以打开仓库，看渲染器怎么写的、镜头怎么排的。对做工程的人来说，这比任何“效果惊艳”都有用。", "归因要拆成三段。词：Claude 4.6；曲：Suno；画面与渲染：Opus 5.5。把整条 MV 说成“Opus 做的”会失真——这是合集里少见的、作者自己就把边界写清楚的案例。", "168 个镜头不是一次生成的。作者先否决了歌词版，再逐轮调整节奏与分镜，最后用七个子代理并行推进后续章节。这条路径与“一句话出片”的叙事完全相反，也更接近真实生产。"]
demo: {"label": "X 原帖（6:13，2026-09-23，3,929 赞）", "url": "https://x.com/eudaemonea/status/2102610626321490404", "type": "Demo 类型：单条成片（附公开源码，可复现）"}
sources: [{"text": "原帖（含成片）：https://x.com/eudaemonea/status/2102610626321490404", "links": ["https://x.com/eudaemonea/status/2102610626321490404"]}, {"text": "项目源码：https://github.com/ledbetterljoshua/functional-emotions-video", "links": ["https://github.com/ledbetterljoshua/functional-emotions-video"]}, {"text": "合集出处：《Claude Opus 5.5｜400 个案例合集》影像·02-39", "links": []}, {"text": "发布时间与互动：2026-09-23 12:06（UTC+8）；3,929 赞，快照 2026-11-16", "links": []}, {"text": "证据缺口：制作总时长与费用未披露；七个子代理的分工细节未公开。", "links": []}, {"text": "记录版本：原帖与媒体快照 2026-11-16；模型归属以作者自述为准，未独立复现。", "links": []}]
source_doc: {"name": "C2V_案例精读_24例_证据版", "url": "https://www.workbuddy.cn/space/d/brjgW58OaD25LBl8vBeJQl", "section": "可复现的音乐长片"}
license: {"spdx": "未声明（作者保留权利）", "source": "https://x.com/eudaemonea/status/2102610626321490404", "note": "作品本身未附开源许可文件；本栏只记录作品的权利状态，不推断任何画面或素材的使用权限。"}
media_records: [{"file": "/media/studies/168-shots-open-mv/cover.jpg", "kind": "案例精读内嵌截图（静帧）", "sample_name": "6 分 13 秒、168 个镜头，源码公开 案例对照画面", "source_url": "https://x.com/eudaemonea/status/2102610626321490404", "source_page": "https://www.workbuddy.cn/space/d/brjgW58OaD25LBl8vBeJQl", "rights_holder": "原作者（X 账号）", "usage_basis": "画面取自作者 X 原帖视频帧，经案例精读文档整理并内嵌；本站以介绍性引用方式使用，已署名并保留原帖回链，使用依据单独登记，不由代码或作品许可推导", "attribution": "6 分 13 秒、168 个镜头，源码公开 · X 原帖作者", "permission_note": "本地仅存展示用副本；公开托管或商用分发前需向原作者单独确认"}, {"file": "/media/studies/168-shots-open-mv/preview.mp4", "kind": "原视频片段（5 秒静音循环）", "sample_name": "6 分 13 秒、168 个镜头，源码公开：唯一能拆开看的 MV 动态预览", "source_url": "https://x.com/eudaemonea/status/2102610626321490404", "source_page": "https://www.workbuddy.cn/space/d/brjgW58OaD25LBl8vBeJQl", "rights_holder": "原作者（X 账号）", "usage_basis": "由作者原帖视频或官方影片截取 5 秒、静音、缩放后用于站内动态预览；以介绍性引用方式使用，已署名并保留原始来源回链，使用依据单独登记，不由代码或作品许可推导", "attribution": "6 分 13 秒、168 个镜头，源码公开 · X 原帖作者", "permission_note": "本地仅存展示用副本；公开托管或商用分发前需向原作者单独确认"}]
updated_at: "2026-11-16"
verification_note: "数据与画面均来自案例精读文档及其标注的 X 原帖，作者自述口径；本站未独立复现任何一条链路。"
sort_weight: 222
related: ["cathedral-of-ice", "attention-131-agents", "83s-threejs-39-shots"]
preview_motion: "/media/studies/168-shots-open-mv/preview.mp4"
---
