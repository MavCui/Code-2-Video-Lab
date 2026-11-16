---
num: "06"
slug: better-half-blender
status: "published"
title: "Better Half：约 28,000 行 Blender Python，4K 云渲染"
title_main: "Better Half"
title_sub: "约 28,000 行 Blender Python，4K 云渲染"
tag: "Blender 混合链路"
one_liner: "当质感要求超过浏览器渲染的上限，链路会主动退回 Blender——代价是代码量与算力。"
industry: "艺术与实验"
tech: ["Blender", "3D", "代码渲染"]
cover: {"file": "/media/studies/better-half-blender/cover.jpg", "alt": "Better Half 案例对照画面", "fit": "cover"}
hint: "看哪里。看蟹壳的半透明与次表面散射——这类材质基本只能靠渲染器算，不是靠提示词描述出来的。"
caption: "图 6｜“Better Half”中的螃蟹角色。来源：@JacobMolBio 原帖视频封面帧。"
meta: [{"k": "核心定位", "v": "用 Blender + Python 承担建模与渲染，模型团队写代码而不是写画面。"}, {"k": "适用场景", "v": "需要真实材质、复杂光照、可信动作的短片；浏览器管线做不出质感的场合。"}, {"k": "必备输入", "v": "Blender + Python 环境、fal 云端算力、ElevenLabs 音乐音效；多个 Fable 与 Opus agent 协同。"}, {"k": "标准流程", "v": "剧本与角色设定 → agent 团队写 Blender Python → 4K 云渲染 → 音乐与音效合成。"}, {"k": "AI职责", "v": "建模、绑定、动画、渲染脚本；人给设定与终审。"}, {"k": "关键指标", "v": "目标：1 分 25 秒短片。实际：约 28,000 行代码、4K 渲染、fal 云端算力（作者自述）。美元成本与渲染时长未披露。"}]
cost_table: []
cost_note: ""
take: [{"k": "可以迁移的", "v": "选链路先看质感上限：能被代码近似的走浏览器，需要真实材质的走 Blender。"}, {"k": "成立的条件", "v": "需要云渲染预算与版本管理；Blender 工程的返工粒度比网页工程粗。"}, {"k": "不能外推的", "v": "28,000 行不代表效率提升，只是复杂度转移；没有渲染时长与成本，无法评估单位产出。"}]
body: ["28,000 行是这条案例的门槛。同一个团队在纯 three.js 项目里写的是几千行级别的场景脚本；到了 Blender，代码量上一个量级，因为建模、绑定、材质节点、渲染设置全都要用 Python 描述。这也意味着更高的返工成本：改一个材质参数，可能要重跑一次 4K 渲染。", "退到 Blender 不是退步，是换赛道。浏览器渲染擅长图形化的、平面化的、可程序化生成的东西；一旦需要真实感材质和复杂光照，Blender 的物理渲染器更划算。判断标准应该是“质感是否可被代码近似”，而不是“是不是纯代码”。", "多 agent 协作在这里的作用是分工，不是加速。Fable 与 Opus 的 agent 团队分担建模、动画、渲染脚本，人负责角色设定与终审。代码量越大，分工带来的接口成本越高——这正是 28,000 行背后不常被提及的成本。"]
demo: {"label": "X 原帖（1:25，2026-11-12，18.7K 播放）", "url": "https://x.com/JacobMolBio/status/2120648796334178374", "type": "Demo 类型：单条成片（无对照版本）"}
sources: [{"text": "原帖（含成片）：https://x.com/JacobMolBio/status/2120648796334178374", "links": ["https://x.com/JacobMolBio/status/2120648796334178374"]}, {"text": "作品说明与工具：https://jasonzhu.ai/en/prompts/claude-opus-5-5/2120648796334178374", "links": ["https://jasonzhu.ai/en/prompts/claude-opus-5-5/2120648796334178374"]}, {"text": "发布时间与互动数据：2026-11-12（UTC+8）；18.7K 播放 / 374 赞，快照 2026-11-16", "links": []}, {"text": "证据缺口：渲染时长、fal 账单、agent 数量与分工、提示词均未披露。", "links": []}, {"text": "记录版本：原帖与媒体快照 2026-11-16；模型归属以作者自述为准，未独立复现。", "links": []}]
source_doc: {"name": "C2V_案例精读_24例_证据版", "url": "https://www.workbuddy.cn/space/d/brjgW58OaD25LBl8vBeJQl", "section": "Blender 混合链路"}
license: {"spdx": "未声明（作者保留权利）", "source": "https://x.com/JacobMolBio/status/2120648796334178374", "note": "作品本身未附开源许可文件；本栏只记录作品的权利状态，不推断任何画面或素材的使用权限。"}
media_records: [{"file": "/media/studies/better-half-blender/cover.jpg", "kind": "案例精读内嵌截图（静帧）", "sample_name": "Better Half 案例对照画面", "source_url": "https://x.com/JacobMolBio/status/2120648796334178374", "source_page": "https://www.workbuddy.cn/space/d/brjgW58OaD25LBl8vBeJQl", "rights_holder": "原作者（X 账号）", "usage_basis": "画面取自作者 X 原帖视频帧，经案例精读文档整理并内嵌；本站以介绍性引用方式使用，已署名并保留原帖回链，使用依据单独登记，不由代码或作品许可推导", "attribution": "Better Half · X 原帖作者", "permission_note": "本地仅存展示用副本；公开托管或商用分发前需向原作者单独确认"}, {"file": "/media/studies/better-half-blender/preview.mp4", "kind": "原视频片段（5 秒静音循环）", "sample_name": "Better Half：约 28,000 行 Blender Python，4K 云渲染 动态预览", "source_url": "https://x.com/JacobMolBio/status/2120648796334178374", "source_page": "https://www.workbuddy.cn/space/d/brjgW58OaD25LBl8vBeJQl", "rights_holder": "原作者（X 账号）", "usage_basis": "由作者原帖视频或官方影片截取 5 秒、静音、缩放后用于站内动态预览；以介绍性引用方式使用，已署名并保留原始来源回链，使用依据单独登记，不由代码或作品许可推导", "attribution": "Better Half · X 原帖作者", "permission_note": "本地仅存展示用副本；公开托管或商用分发前需向原作者单独确认"}]
updated_at: "2026-11-16"
verification_note: "数据与画面均来自案例精读文档及其标注的 X 原帖，作者自述口径；本站未独立复现任何一条链路。"
sort_weight: 206
related: ["cathedral-of-ice", "attention-131-agents", "83s-threejs-39-shots"]
preview_motion: "/media/studies/better-half-blender/preview.mp4"
---
