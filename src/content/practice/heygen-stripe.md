---
num: "01"
slug: "heygen-stripe"
status: "published"
title: "HeyGen × Stripe 发布片"
subtitle: "把 AE 成片用代码重建，再逐帧对齐"
org: "HeyGen"
one_liner: "同一支 38.7 秒的片子，一边是 After Effects 成片，一边是代码重建，用 1161 帧逐帧比差异。"
industry: "品牌与营销"
tech: ["HyperFrames", "HTML", "CSS", "GSAP", "FFmpeg"]
cover: {"file": "/media/practice/heygen-stripe/cover.jpg", "alt": "HeyGen × Stripe 发布片的结尾 logo 帧"}
summary: "产品营销发布片。作者把已有的 After Effects 成片用 HyperFrames 重建，再把两份成片统一到同一时长、帧率与分辨率后逐帧对照，记录场景起止、字幕、光标形状、转场等差异，并给出修改优先级。"
highlights: ["公开工程、素材目录、交接记录与修订清单，能看清「改到对」的过程，而不只是结果", "有专门的逐帧对照文档：38.7 秒 / 30fps / 1920×1080 / 1161 帧，按场景列出起止时间与画面内容", "结论落到可执行项：光标是绿色水滴形而不是圆形，11.1 秒出现、约 0.9 秒消失，这类细节都写进了对照表"]
meta: [{"k": "场景", "v": "产品发布片，HeyGen 与 Stripe 的联合发布"}, {"k": "技术栈", "v": "HyperFrames + HTML/CSS + GSAP，FFmpeg 编码"}, {"k": "披露程度", "v": "工程源码、素材目录、交接记录、逐帧对照文档均公开"}, {"k": "交付物", "v": "38.7 秒成片与可重渲染的工程"}, {"k": "口径提醒", "v": "这是制作中的版本对照，不构成「代码方案已全面替代 AE」的结论"}]
links: {"demo": "https://hyperframes.dev/viewer/d6f7d40f-1e32-4b73-a551-af47cc19e8a2", "repo": "https://github.com/heygen-com/hyperframes-launches/tree/main/HF-heygen-stripe", "doc": "https://github.com/heygen-com/hyperframes-launches/blob/main/HF-heygen-stripe/STUDY-V12-vs-TAKE6.md"}
evidence_known: ["工程与逐帧对照文档可核对", "场景时间轴、光标形状、字幕文本均有逐条记录", "同规格（38.7s / 30fps / 1080p / 1161 帧）才做逐帧比较"]
evidence_gaps: ["未披露工时与成本", "官方播放页已 404，成片本身暂时无法直接观看", "单条 38.7 秒的对照不能外推到长片与多镜头"]
take: [{"k": "可以迁移的", "v": "把「像不像」拆成可测项：时长、帧率、分辨率、场景起止、光标、字幕"}, {"k": "成立的条件", "v": "两份素材必须同规格，否则逐帧比较失去意义"}, {"k": "不能外推的", "v": "一次 38.7 秒的对齐不能证明长片或多镜头也能量产"}]
license: {"spdx": "未声明（作者/公司保留权利）", "source": "https://github.com/heygen-com/hyperframes-launches/blob/main/HF-heygen-stripe/STUDY-V12-vs-TAKE6.md", "note": "作品本身未附开源许可；本栏只记录权利状态，不推断任何画面或素材的使用权限。"}
media_records: [{"file": "/media/practice/heygen-stripe/cover.jpg", "kind": "工程素材帧（静帧）", "sample_name": "结尾 logo 帧", "source_url": "https://media.githubusercontent.com/media/heygen-com/hyperframes-launches/main/HF-heygen-stripe/assets/end-card.mp4", "source_page": "https://github.com/heygen-com/hyperframes-launches/blob/main/HF-heygen-stripe/STUDY-V12-vs-TAKE6.md", "rights_holder": "HeyGen / HyperFrames 项目", "usage_basis": "画面由本站从官方工程仓库的 end-card 素材中抽取一帧，用于展示该片的结尾视觉；以介绍性引用方式使用，已署名并保留工程回链，使用依据单独登记，不由代码许可推导", "attribution": "HeyGen 官方工程仓库 HF-heygen-stripe", "permission_note": "本地仅存展示用副本；公开托管或商用分发前需向权利方单独确认"}, {"file": "/media/practice/heygen-stripe/preview.mp4", "kind": "工程素材片段（3 秒静音循环）", "sample_name": "结尾 logo 动画", "source_url": "https://media.githubusercontent.com/media/heygen-com/hyperframes-launches/main/HF-heygen-stripe/assets/end-card.mp4", "source_page": "https://github.com/heygen-com/hyperframes-launches/blob/main/HF-heygen-stripe/STUDY-V12-vs-TAKE6.md", "rights_holder": "HeyGen / HyperFrames 项目", "usage_basis": "由官方工程仓库的 end-card 素材截取 3 秒、静音、缩放后作为动态预览；非完整成片，以介绍性引用方式使用，已署名并保留工程回链", "attribution": "HeyGen 官方工程仓库 HF-heygen-stripe", "permission_note": "本地仅存展示用副本；公开托管或商用分发前需向权利方单独确认"}]
updated_at: "2026-11-16"
verification_note: "已核对官方页面、仓库与公开说明；数字均为作者或公司自述，本站未复现任何一条产线。"
sort_weight: 301
demo_note: "官方播放页在 2026-11-16 复核时返回 404，成片入口暂时打不开；工程与对照文档仍可访问。"
preview_motion: "/media/practice/heygen-stripe/preview.mp4"
related: ["ds-release-649", "match-day", "collectors"]
---

# HeyGen × Stripe 发布片

产品营销发布片。作者把已有的 After Effects 成片用 HyperFrames 重建，再把两份成片统一到同一时长、帧率与分辨率后逐帧对照，记录场景起止、字幕、光标形状、转场等差异，并给出修改优先级。
