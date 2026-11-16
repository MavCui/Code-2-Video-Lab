---
num: "16"
slug: clay-render-video-model
status: "published"
title: "上半白模、下半成片：动作交给代码，角色交给视频模型"
title_main: "上半白模、下半成片"
title_sub: "动作交给代码，角色交给视频模型"
tag: "白模预演 + 证据边界"
one_liner: "这是全篇分工最干净的一条，也是最容易被误读的一条——有人已经替我们做了更正。"
industry: "艺术与实验"
tech: ["Claude Fable 5.2", "视频模型"]
cover: {"file": "/media/studies/clay-render-video-model/cover.jpg", "alt": "上半白模、下半成片 案例对照画面", "fit": "contain"}
hint: "看哪里。上半是灰模、下半是角色——注意两边的动作是否严格对齐，对齐程度决定了这套流程能不能进正式生产。"
caption: "图 16｜上下对照：上为代码生成的白模预演，下为视频模型角色化后的结果。来源：@akakuma0219 原帖视频封面帧。"
meta: [{"k": "核心定位", "v": "把“动作设计”与“角色渲染”拆成两段：白模由代码生成，角色化交给视频模型。"}, {"k": "适用场景", "v": "动画预演（previs）、动作设计、需要先把运动做对再谈质感的生产流程。"}, {"k": "必备输入", "v": "三个动作词（慢跑、全力冲刺、超高速冲刺）；白模渲染；视频模型接口（复现者用的是 Seedance）。"}, {"k": "标准流程", "v": "给动作词 → 模型生成三维白模动画 → 导出预演 → 交视频模型做角色化。"}, {"k": "AI职责", "v": "白模的动作、节奏、镜头由模型负责；角色画面由视频模型完成。"}, {"k": "关键指标", "v": "目标：三个动作的白模预演 + 角色化对照。实际：上半为 Fable 5.2 白模，下半为视频模型生成；时长与成本未披露。"}]
cost_table: []
cost_note: ""
take: [{"k": "可以迁移的", "v": "把“动作”与“质感”分成两道工序，白模先行；这样每次换风格都不用重做运动。"}, {"k": "成立的条件", "v": "需要白模与视频模型之间的动作对齐能力；复现者用 Seedance 验证了这条链路可跑通。"}, {"k": "不能外推的", "v": "没有时长与成本；白模的关节精度、是否手工修过均未说明。"}]
body: ["为什么这条必须配一条“更正”。原帖只说了“动作完全交给 Fable 5.2”，看片子很容易以为整段都是模型直出。另一位创作者复现后指出：上半的白模是 Fable 做的，下半的角色动画是调用视频模型生成的——他自己那条甚至自动调用了 Seedance 的 API。这条更正比原帖更有价值，因为它划出了归因的边界。", "白模是 C2V 最容易被低估的交付物。它不追求好看，追求“动作对不对”。一旦白模定稿，后面的角色化、材质、灯光都可以替换而不影响运动逻辑。这也是为什么预演环节值得单独用代码做：改一个关节角度，比重新生成一段视频便宜太多。"]
demo: {"label": "X 原帖（2026-11-10，1,397 赞）", "url": "https://x.com/akakuma0219/status/2120030634248929556", "type": "Demo 类型：上下同步对照（白模 / 角色化，同一动作序列）"}
sources: [{"text": "原帖（白模 + 角色化对照）：https://x.com/akakuma0219/status/2120030634248929556", "links": ["https://x.com/akakuma0219/status/2120030634248929556"]}, {"text": "复现与更正（指出下半段来自视频模型）：https://x.com/gorden_sun/status/2120175259303502252", "links": ["https://x.com/gorden_sun/status/2120175259303502252"]}, {"text": "合集出处：《Claude Fable 5.2｜192 个案例合集》影像·09-47", "links": []}, {"text": "证据缺口：白模的建模方式、两段的对齐方法、成本均未披露。", "links": []}, {"text": "记录版本：原帖与媒体快照 2026-11-16；模型归属以作者自述为准，未独立复现。", "links": []}]
source_doc: {"name": "C2V_案例精读_24例_证据版", "url": "https://www.workbuddy.cn/space/d/brjgW58OaD25LBl8vBeJQl", "section": "白模预演 + 证据边界"}
license: {"spdx": "未声明（作者保留权利）", "source": "https://x.com/akakuma0219/status/2120030634248929556", "note": "作品本身未附开源许可文件；本栏只记录作品的权利状态，不推断任何画面或素材的使用权限。"}
media_records: [{"file": "/media/studies/clay-render-video-model/cover.jpg", "kind": "案例精读内嵌截图（静帧）", "sample_name": "上半白模、下半成片 案例对照画面", "source_url": "https://x.com/akakuma0219/status/2120030634248929556", "source_page": "https://www.workbuddy.cn/space/d/brjgW58OaD25LBl8vBeJQl", "rights_holder": "原作者（X 账号）", "usage_basis": "画面取自作者 X 原帖视频帧，经案例精读文档整理并内嵌；本站以介绍性引用方式使用，已署名并保留原帖回链，使用依据单独登记，不由代码或作品许可推导", "attribution": "上半白模、下半成片 · X 原帖作者", "permission_note": "本地仅存展示用副本；公开托管或商用分发前需向原作者单独确认"}, {"file": "/media/studies/clay-render-video-model/preview.mp4", "kind": "原视频片段（5 秒静音循环）", "sample_name": "上半白模、下半成片：动作交给代码，角色交给视频模型 动态预览", "source_url": "https://x.com/akakuma0219/status/2120030634248929556", "source_page": "https://www.workbuddy.cn/space/d/brjgW58OaD25LBl8vBeJQl", "rights_holder": "原作者（X 账号）", "usage_basis": "由作者原帖视频或官方影片截取 5 秒、静音、缩放后用于站内动态预览；以介绍性引用方式使用，已署名并保留原始来源回链，使用依据单独登记，不由代码或作品许可推导", "attribution": "上半白模、下半成片 · X 原帖作者", "permission_note": "本地仅存展示用副本；公开托管或商用分发前需向原作者单独确认"}]
updated_at: "2026-11-16"
verification_note: "数据与画面均来自案例精读文档及其标注的 X 原帖，作者自述口径；本站未独立复现任何一条链路。"
sort_weight: 216
related: ["cathedral-of-ice", "attention-131-agents", "83s-threejs-39-shots"]
preview_motion: "/media/studies/clay-render-video-model/preview.mp4"
---
