---
num: "02"
slug: "ds-release-649"
status: "published"
title: "Digital Samba Release 649"
subtitle: "用产品源码重建界面，脚本驱动光标与镜头"
org: "Digital Samba"
one_liner: "从真实产品代码重建界面，再用脚本驱动光标、点击和镜头运动，为一次实际发版做说明片。"
industry: "品牌与营销"
tech: ["Claude Code", "React", "Remotion", "Qwen3-TTS", "FLUX", "FFmpeg"]
cover: {"file": "/media/practice/ds-release-649/cover.jpg", "alt": "Digital Samba Release 649 成片中的多路视频界面"}
summary: "企业产品的版本更新视频。制作方从产品源码重建界面，而不是录屏或画 mock；光标与点击由脚本驱动，语音和素材用 TTS 与图像模型补齐。案例仓库公开了源码、素材与构建命令。"
highlights: ["公开案例源码、素材和构建命令，可以核对「界面来自真实产品代码」", "明确区分真实内容与虚构内容：布局、文案、行为来自产品，人物与联系人等为虚构", "服务的是实际发版说明，不是概念片或品牌广告"]
meta: [{"k": "场景", "v": "企业视频 API 产品的版本更新说明"}, {"k": "技术栈", "v": "Claude Code + React/Remotion，Qwen3-TTS 配音，FLUX.2 生成素材"}, {"k": "披露程度", "v": "案例源码、素材与构建步骤公开"}, {"k": "交付物", "v": "发版说明视频与可重渲染工程"}, {"k": "口径提醒", "v": "界面来自真实产品代码，但人物与联系人等内容为虚构"}]
links: {"demo": "https://demos.digitalsamba.com/video/ds-release-649.mp4", "repo": "https://github.com/digitalsamba/claude-code-video-toolkit/tree/main/examples/ds-release-649"}
evidence_known: ["源码、素材与构建命令公开", "真实产品代码与虚构内容的边界写得清楚", "成片可直接下载核对"]
evidence_gaps: ["未披露制作工时与成本", "单次发版的流程不能直接套用到交互复杂的产品", "涉及的模型调用量没有记录"]
take: [{"k": "可以迁移的", "v": "把「录屏」换成「按源码重建」，界面就能进入版本管理"}, {"k": "成立的条件", "v": "产品本身可运行、界面结构稳定，重建才比录屏划算"}, {"k": "不能外推的", "v": "拖拽、实时协作这类复杂交互，重建成本可能高于直接录屏"}]
license: {"spdx": "未声明（作者/公司保留权利）", "source": "https://github.com/digitalsamba/claude-code-video-toolkit/tree/main/examples/ds-release-649", "note": "作品本身未附开源许可；本栏只记录权利状态，不推断任何画面或素材的使用权限。"}
media_records: [{"file": "/media/practice/ds-release-649/cover.jpg", "kind": "成片抽帧（静帧）", "sample_name": "多路视频界面一帧", "source_url": "https://demos.digitalsamba.com/video/ds-release-649.mp4", "source_page": "https://demos.digitalsamba.com/video/ds-release-649.mp4", "rights_holder": "Digital Samba", "usage_basis": "画面由本站从官方公开成片 ds-release-649.mp4 抽取一帧；以介绍性引用方式使用，已署名并保留成片回链，使用依据单独登记，不由代码许可推导", "attribution": "Digital Samba 官方案例 demos.digitalsamba.com", "permission_note": "本地仅存展示用副本；公开托管或商用分发前需向权利方单独确认"}, {"file": "/media/practice/ds-release-649/preview.mp4", "kind": "成片片段（5 秒静音循环）", "sample_name": "Release 649 成片片段", "source_url": "https://demos.digitalsamba.com/video/ds-release-649.mp4", "source_page": "https://demos.digitalsamba.com/video/ds-release-649.mp4", "rights_holder": "Digital Samba", "usage_basis": "由官方公开成片截取 5 秒、静音、缩放后作为动态预览；以介绍性引用方式使用，已署名并保留成片回链", "attribution": "Digital Samba 官方案例 demos.digitalsamba.com", "permission_note": "本地仅存展示用副本；公开托管或商用分发前需向权利方单独确认"}]
updated_at: "2026-11-16"
verification_note: "已核对官方页面、仓库与公开说明；数字均为作者或公司自述，本站未复现任何一条产线。"
sort_weight: 302
preview_motion: "/media/practice/ds-release-649/preview.mp4"
related: ["heygen-stripe", "match-day", "collectors"]
---

# Digital Samba Release 649

企业产品的版本更新视频。制作方从产品源码重建界面，而不是录屏或画 mock；光标与点击由脚本驱动，语音和素材用 TTS 与图像模型补齐。案例仓库公开了源码、素材与构建命令。
