---
num: "04"
slug: 83s-threejs-39-shots
status: "published"
title: "83 秒、39 个镜头、1,992 帧：全程 three.js，3 小时交付"
title_main: "83 秒、39 个镜头、1,992 帧"
title_sub: "全程 three.js，3 小时交付"
tag: "纯代码动画"
one_liner: "零视频模型的极限样本：一旦画面全部由代码渲染，动画就变成了可以 diff、可以回滚的资产。"
industry: "艺术与实验"
tech: ["Three.js", "代码渲染"]
cover: {"file": "/media/studies/83s-threejs-39-shots/cover.jpg", "alt": "83 秒、39 个镜头、1,992 帧 案例对照画面", "fit": "cover"}
hint: "看哪里。注意 39 个镜头之间的转场是“切”而不是“融”——纯代码渲染没有素材重拍的成本，所以镜头可以更碎、更快。"
caption: "图 4｜巨口与鲸群的一帧（本站按原视频重抽，避免原封面帧为空画面）。来源：@0xMovez 原帖视频。"
meta: [{"k": "核心定位", "v": "用纯代码渲染替代视频模型，把“镜头”变成可版本管理的源文件。"}, {"k": "适用场景", "v": "风格化动作短片、需要逐帧精确控制与可复现的镜头段落。"}, {"k": "必备输入", "v": "83 秒片子的分镜意图；4,530 字符的提示词（公开）；8 个 agent 团队的并行调度。"}, {"k": "标准流程", "v": "分镜 → 8 个团队并行写 three.js → 逐帧渲染 → 合成音效 → 输出成片。"}, {"k": "AI职责", "v": "建模、绑定、镜头运动、渲染脚本、音效合成，全部由模型完成。"}, {"k": "关键指标", "v": "目标：83 秒成片。实际：3 小时内完成、8 个并行团队、39 个镜头、1,992 帧代码渲染（作者自述）。美元成本未披露。"}]
cost_table: []
cost_note: ""
take: [{"k": "可以迁移的", "v": "把“镜头”拆成独立可渲染单元，是并行化的前提；风格约束必须先于分工写成可共享的规格。"}, {"k": "成立的条件", "v": "需要能逐帧渲染的管线（three.js + headless 浏览器 + ffmpeg），且团队愿意维护代码资产。"}, {"k": "不能外推的", "v": "写实人脸、复杂布料、体积雾等效果，纯代码路线的性价比会迅速下降。"}]
body: ["39 个镜头 / 1,992 帧，是这条案例真正的工程指标。按 24fps 算，83 秒约 1,992 帧——与作者给的数字吻合。这意味着每一帧都是脚本算出来的，没有一帧来自视频模型。好处是任何一帧都可以定位到具体代码行；代价是画面复杂度受限于模型写代码的能力。", "8 个团队并行，说明镜头之间真的解耦了。并行不是把 8 个 agent 一起叫起来，而是要让每个团队只依赖镜头契约、不依赖别人的代码状态。能做到这一点，前提是先把美术风格、相机参数、材质规范写成可共享的约束——这部分没写进提示词，但从成片的一致性看得出来。", "“3 小时”是被低估的部分。作者强调的是 3 小时出片，但没说的是这 4,530 字符提示词本身是迭代出来的。把提示词当成资产看，真正的复利在第二次、第三次做同类片子时才会出现。"]
demo: {"label": "X 原帖（1:23，2026-11-04，72.6K 播放，提示词 4,530 字符公开）", "url": "https://x.com/0xMovez/status/2117987052419428576", "type": "Demo 类型：单条成片（作者称一次成片，未提供对照版本）"}
sources: [{"text": "原帖（含成片）：https://x.com/0xMovez/status/2117987052419428576", "links": ["https://x.com/0xMovez/status/2117987052419428576"]}, {"text": "提示词（4,530 字符，公开）：https://jasonzhu.ai/en/prompts/claude-opus-5-5/2117987052419428576", "links": ["https://jasonzhu.ai/en/prompts/claude-opus-5-5/2117987052419428576"]}, {"text": "发布时间与互动数据：2026-11-04（UTC+8）；72.6K 播放 / 919 赞，快照 2026-11-16", "links": []}, {"text": "证据缺口：3 小时是否含提示词迭代、渲染硬件、8 个团队的分工细节均未披露。", "links": []}, {"text": "记录版本：原帖与媒体快照 2026-11-16；模型归属以作者自述为准，未独立复现。", "links": []}]
source_doc: {"name": "C2V_案例精读_24例_证据版", "url": "https://www.workbuddy.cn/space/d/brjgW58OaD25LBl8vBeJQl", "section": "纯代码动画"}
license: {"spdx": "未声明（作者保留权利）", "source": "https://x.com/0xMovez/status/2117987052419428576", "note": "作品本身未附开源许可文件；本栏只记录作品的权利状态，不推断任何画面或素材的使用权限。"}
media_records: [{"file": "/media/studies/83s-threejs-39-shots/cover.jpg", "kind": "原视频抽帧（静帧）", "sample_name": "83 秒、39 个镜头、1,992 帧 案例对照画面", "source_url": "https://x.com/0xMovez/status/2117987052419428576", "source_page": "https://www.workbuddy.cn/space/d/brjgW58OaD25LBl8vBeJQl", "rights_holder": "原作者（X 账号）", "usage_basis": "画面由本站从作者 X 原帖视频重新抽取（案例精读文档中的原封面帧为空画面或转场），仅做缩放与裁切；以介绍性引用方式使用，已署名并保留原帖回链，使用依据单独登记，不由代码或作品许可推导", "attribution": "83 秒、39 个镜头、1,992 帧 · X 原帖作者", "permission_note": "本地仅存展示用副本；公开托管或商用分发前需向原作者单独确认"}, {"file": "/media/studies/83s-threejs-39-shots/preview.mp4", "kind": "原视频片段（5 秒静音循环）", "sample_name": "83 秒、39 个镜头、1,992 帧：全程 three.js，3 小时交付 动态预览", "source_url": "https://x.com/0xMovez/status/2117987052419428576", "source_page": "https://www.workbuddy.cn/space/d/brjgW58OaD25LBl8vBeJQl", "rights_holder": "原作者（X 账号）", "usage_basis": "由作者原帖视频或官方影片截取 5 秒、静音、缩放后用于站内动态预览；以介绍性引用方式使用，已署名并保留原始来源回链，使用依据单独登记，不由代码或作品许可推导", "attribution": "83 秒、39 个镜头、1,992 帧 · X 原帖作者", "permission_note": "本地仅存展示用副本；公开托管或商用分发前需向原作者单独确认"}]
updated_at: "2026-11-16"
verification_note: "数据与画面均来自案例精读文档及其标注的 X 原帖，作者自述口径；本站未独立复现任何一条链路。"
sort_weight: 204
related: ["cathedral-of-ice", "attention-131-agents", "3492-char-anime-prompt"]
preview_motion: "/media/studies/83s-threejs-39-shots/preview.mp4"
---
