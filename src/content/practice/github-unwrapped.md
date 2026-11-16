---
num: "03"
slug: "github-unwrapped"
status: "published"
title: "GitHub Unwrapped"
subtitle: "从数据到视频，再到并发与缓存"
org: "GitHub × Remotion"
one_liner: "把一年的提交数据变成个性化年度回顾视频：不只是渲染，还有并发、缓存、监控和扩容。"
industry: "数据与工具"
tech: ["React", "Remotion", "AWS", "MongoDB", "TypeScript"]
cover: {"file": "/media/practice/github-unwrapped/cover.jpg", "alt": "GitHub Unwrapped 官方页面：Your coding year in review"}
summary: "个性化年度回顾应用。用户授权后读取 GitHub 数据，按个人贡献生成一支视频，再通过云函数并发渲染、缓存结果并对外提供下载。公开仓库包含应用源码、部署脚本与扩容思路。"
highlights: ["公开的是完整应用，不是一条片子：数据获取、渲染、缓存、并发都在里面", "适合讲批量生产架构，而不是单条创意", "个性化视频的瓶颈通常在队列与缓存，不在画面本身"]
meta: [{"k": "场景", "v": "面向开发者的个性化年度回顾"}, {"k": "技术栈", "v": "Vite + React + Remotion，AWS Lambda 渲染，MongoDB 缓存"}, {"k": "披露程度", "v": "应用源码、部署与扩容策略公开"}, {"k": "交付物", "v": "可访问的年度回顾应用与批量渲染管线"}, {"k": "口径提醒", "v": "属于代码驱动视频应用，不是 LLM 自动创作案例"}]
links: {"demo": "https://www.githubunwrapped.com/", "repo": "https://github.com/remotion-dev/github-unwrapped"}
evidence_known: ["应用源码与部署脚本公开", "数据来源明确（GitHub API）", "有并发与缓存的工程实现"]
evidence_gaps: ["未披露单条视频的渲染成本", "没有公开峰值并发下的实际耗时", "属于应用工程，不能当作 LLM 创作案例"]
take: [{"k": "可以迁移的", "v": "批量个性化视频要先解决并发与缓存，再解决画面"}, {"k": "成立的条件", "v": "数据可以结构化，且模板能参数化"}, {"k": "不能外推的", "v": "个人向短视频的架构不能直接用于长片或高画质交付"}]
license: {"spdx": "未声明（作者/公司保留权利）", "source": "https://github.com/remotion-dev/github-unwrapped", "note": "作品本身未附开源许可；本栏只记录权利状态，不推断任何画面或素材的使用权限。"}
media_records: [{"file": "/media/practice/github-unwrapped/cover.jpg", "kind": "官方页面截图（静帧）", "sample_name": "年度回顾首屏", "source_url": "https://github.com/remotion-dev/github-unwrapped-2023/assets/73991323/0a907f4f-a591-4d98-8b38-c90581ccfb33", "source_page": "https://www.githubunwrapped.com/", "rights_holder": "GitHub / Remotion", "usage_basis": "画面取自官方仓库 README 中用于展示产品的截图；以介绍性引用方式使用，已署名并保留仓库回链，使用依据单独登记，不由代码许可推导", "attribution": "remotion-dev/github-unwrapped 官方 README", "permission_note": "本地仅存展示用副本；公开托管或商用分发前需向权利方单独确认"}]
updated_at: "2026-11-16"
verification_note: "已核对官方页面、仓库与公开说明；数字均为作者或公司自述，本站未复现任何一条产线。"
sort_weight: 303
demo_note: "该站在本环境探测时不可达（代理返回 502），不代表站点失效；如需核对请在可访问网络打开。"
related: ["mux-data-video", "heygen-stripe", "ds-release-649"]
---

# GitHub Unwrapped

个性化年度回顾应用。用户授权后读取 GitHub 数据，按个人贡献生成一支视频，再通过云函数并发渲染、缓存结果并对外提供下载。公开仓库包含应用源码、部署脚本与扩容思路。
