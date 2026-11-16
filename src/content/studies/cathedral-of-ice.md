---
num: "01"
slug: cathedral-of-ice
status: "published"
title: "Cathedral of Ice：同一句 brief，两个模型各出一条 25 秒片"
title_main: "Cathedral of Ice"
title_sub: "同一句 brief，两个模型各出一条 25 秒片"
tag: "同题双模型对照"
one_liner: "这组数字比画质对比更有决策价值——同一句 112 字符的 brief，快的那条反而贵 1.76 倍。"
industry: "艺术与实验"
tech: ["Three.js", "Claude Fable 5.2", "Claude Opus 5.5"]
cover: {"file": "/media/studies/cathedral-of-ice/cover.jpg", "alt": "Cathedral of Ice 案例对照画面", "fit": "contain"}
hint: "看哪里。看两栏顶部的 cost / time 标签——数字是作者直接压进成片画面的，不是事后在评论里补的；再看冰拱的通透度与船身水痕的处理差异。"
caption: "图 1｜成片封面本身就是对照：上半 Fable 5.2（$81.10 / 1h56m52s），下半 Opus 5.5（$45.97 / 3h11m26s）。来源：@EnvolDev 原帖视频封面帧。"
meta: [{"k": "核心定位", "v": "把“换模型”变成一次可计价的对照实验：同一 brief、同一场景、两条成片、两张账单。"}, {"k": "适用场景", "v": "需要在模型之间做取舍、或要给客户解释“为什么这条贵”的广告与短片团队。"}, {"k": "必备输入", "v": "一句场景 brief（约 112 字符：Three.js 场景 + 船只、海面、冰拱、极光，再渲染成片）；两个模型各自可用的额度与账单记录。"}, {"k": "标准流程", "v": "固定 brief → 两个模型分别写 Three.js 场景 → 各自渲染成片 → 记录 token 账单与墙钟时间 → 同框图内对比。"}, {"k": "AI职责", "v": "场景搭建、材质与光照、镜头运动、渲染脚本全部由模型产出；人只给 brief、看片、记账。"}, {"k": "关键指标", "v": "目标：同 brief 下可比的 25 秒成片。实际（作者自述，含 token 费与渲染时间）：Fable 5.2 为 $81.10 / 1 小时 56 分 52 秒；Opus 5.5 为 $45.97 / 3 小时 11 分 26 秒。是否含失败重试、输入输出如何计价均未说明。"}]
cost_table: [["项目", "Fable 5.2", "Opus 5.5", "口径"], ["账单金额", "$81.10", "$45.97", "作者自述，含 token 费"], ["端到端耗时", "1h 56m 52s", "3h 11m 26s", "作者自述，起止点未定义"], ["成片时长", "0:25", "0:25", "同一 brief"], ["是否含重试", "未说明", "未说明", "证据缺口"]]
cost_note: "下面这张表只复述作者给出的两个数，不做单价折算——因为原帖没有披露 token 用量与输入/输出拆分。"
take: [{"k": "可以迁移的", "v": "任何“换模型”的讨论，先固定一句 brief，再同时记录钱与时间；两个数字必须一起出现，否则结论会互相打架。"}, {"k": "成立的条件", "v": "同一场景、同一分辨率、同一渲染方式；作者这次的对照满足前两项，渲染参数未公开。"}, {"k": "不能外推的", "v": "单场景 25 秒不能推到长片与多镜头——镜头数一多，调度开销会盖过模型本身的差异。"}]
body: ["为什么用同一句 brief，而不是同一段完整提示词。作者公开的输入只有一句 112 字符的场景描述，不是几千字的工程提示词。这牺牲了“完全同输入”的严格性，换来一个更重要的性质：brief 是任何团队都能复述的最小单位。换句话说，这个实验回答的不是“哪个模型写代码更强”，而是“给同一句需求，两个模型各自要花多少钱和时间把片子交出来”。", "贵的那条更快，这条反直觉的地方才是重点。Fable 5.2 用 1 小时 57 分、$81.10；Opus 5.5 用 3 小时 11 分、$45.97。如果只看时间，Fable 快 1.6 倍；只看钱，Opus 省 43%。两个维度指向相反的结论，说明“模型单价”和“单任务成本”不是一回事：在这条对照里，快的那条单位时间的产出更贵。任何只报其中一个数的选型建议，都是不完整的。", "把成本烧进画面，是这次对照最值得抄的动作。封面帧上方直接印着 COST 与 TIME，观众不需要读文案就能理解对比。代价是它把“作者口径”也一起固化进了证据：账单怎么算的、有没有算重试、输入输出是否分开计价，画面里没有，原帖也没有。"]
demo: {"label": "X 原帖（0:25，2026-11-10，323.5K 播放）", "url": "https://x.com/EnvolDev/status/2119907318729245180", "type": "Demo 类型：同题对照（两个模型各一条，画面上直接烧录成本与耗时）"}
sources: [{"text": "原帖（含成片）：https://x.com/EnvolDev/status/2119907318729245180", "links": ["https://x.com/EnvolDev/status/2119907318729245180"]}, {"text": "提示词原文（作者在评论区给出）：https://jasonzhu.ai/en/prompts/claude-opus-5-5/2119907318729245180", "links": ["https://jasonzhu.ai/en/prompts/claude-opus-5-5/2119907318729245180"]}, {"text": "发布时间与互动数据：2026-11-10 05:37（UTC+8）；323.5K 播放 / 2.1K 赞，快照 2026-11-16", "links": []}, {"text": "证据缺口：token 用量、输入/输出单价、失败重试次数、渲染参数均未披露；成本无法与其他案例横向排名。", "links": []}, {"text": "记录版本：原帖与媒体快照 2026-11-16；模型归属以作者自述为准，未独立复现。", "links": []}]
source_doc: {"name": "C2V_案例精读_24例_证据版", "url": "https://www.workbuddy.cn/space/d/brjgW58OaD25LBl8vBeJQl", "section": "同题双模型对照"}
license: {"spdx": "未声明（作者保留权利）", "source": "https://x.com/EnvolDev/status/2119907318729245180", "note": "作品本身未附开源许可文件；本栏只记录作品的权利状态，不推断任何画面或素材的使用权限。"}
media_records: [{"file": "/media/studies/cathedral-of-ice/cover.jpg", "kind": "案例精读内嵌截图（静帧）", "sample_name": "Cathedral of Ice 案例对照画面", "source_url": "https://x.com/EnvolDev/status/2119907318729245180", "source_page": "https://www.workbuddy.cn/space/d/brjgW58OaD25LBl8vBeJQl", "rights_holder": "原作者（X 账号）", "usage_basis": "画面取自作者 X 原帖视频帧，经案例精读文档整理并内嵌；本站以介绍性引用方式使用，已署名并保留原帖回链，使用依据单独登记，不由代码或作品许可推导", "attribution": "Cathedral of Ice · X 原帖作者", "permission_note": "本地仅存展示用副本；公开托管或商用分发前需向原作者单独确认"}, {"file": "/media/studies/cathedral-of-ice/preview.mp4", "kind": "原视频片段（5 秒静音循环）", "sample_name": "Cathedral of Ice：同一句 brief，两个模型各出一条 25 秒片 动态预览", "source_url": "https://x.com/EnvolDev/status/2119907318729245180", "source_page": "https://www.workbuddy.cn/space/d/brjgW58OaD25LBl8vBeJQl", "rights_holder": "原作者（X 账号）", "usage_basis": "由作者原帖视频或官方影片截取 5 秒、静音、缩放后用于站内动态预览；以介绍性引用方式使用，已署名并保留原始来源回链，使用依据单独登记，不由代码或作品许可推导", "attribution": "Cathedral of Ice · X 原帖作者", "permission_note": "本地仅存展示用副本；公开托管或商用分发前需向原作者单独确认"}]
updated_at: "2026-11-16"
verification_note: "数据与画面均来自案例精读文档及其标注的 X 原帖，作者自述口径；本站未独立复现任何一条链路。"
sort_weight: 201
related: ["attention-131-agents", "83s-threejs-39-shots", "3492-char-anime-prompt"]
preview_motion: "/media/studies/cathedral-of-ice/preview.mp4"
---
