---
id: "fframes"
slug: "fframes"
status: "published"
name: "fframes"
subtitle: "Rust 函数返回 SVG 树"
one_liner: "每一帧都是 Rust 函数返回的 SVG 树，由 GPU 渲染并配原生预览，附带多类图形与 3D 样例。"
primary_category: "数据与工具"
tags: {"scenario": ["数据与工具", "艺术与实验"], "tech": ["Rust", "SVG", "3D", "FFmpeg"], "type": ["框架"], "media_status": ["官方样片"]}
card_tags: ["Rust", "SVG", "GPU 渲染"]
cover: {"file": "/media/fframes/robot-arm.jpg", "alt": "fframes 官方样例：机器人臂 3D 场景"}
preview_motion: null
media_records: [{"file": "/media/fframes/robot-arm.jpg", "kind": "官方样片画面（静帧）", "sample_name": "官方样例：机器人臂 3D 场景", "source_url": "https://raw.githubusercontent.com/dmtrKovalenko/fframes/main/examples/_previews/arm.jpg", "source_page": "https://github.com/dmtrKovalenko/fframes", "rights_holder": "Dmitry Kovalenko / fframes 项目", "usage_basis": "官方公开README 样例列表中用于展示项目效果的素材；本站以介绍性引用方式使用，已署名并保留来源回链；使用依据单独登记，不由仓库代码许可推导", "attribution": "fframes 官方 README 样例区", "permission_note": "本地仅存展示用副本；公开托管或商用分发前需向权利方单独确认"}, {"file": "/media/fframes/benchmark.jpg", "kind": "官方文档截图（静帧）", "sample_name": "官方性能对照画面：100,000 TEXT NODES", "source_url": "https://raw.githubusercontent.com/dmtrKovalenko/fframes/main/examples/_previews/fframes-intro.jpg", "source_page": "https://github.com/dmtrKovalenko/fframes", "rights_holder": "Dmitry Kovalenko / fframes 项目", "usage_basis": "官方公开README 样例列表中用于展示项目效果的素材；本站以介绍性引用方式使用，已署名并保留来源回链；使用依据单独登记，不由仓库代码许可推导", "attribution": "fframes 官方 README 样例区", "permission_note": "本地仅存展示用副本；公开托管或商用分发前需向权利方单独确认"}]
code_license: {"spdx": "MIT", "source": "https://github.com/dmtrKovalenko/fframes/blob/main/LICENSE.txt", "note": "仅覆盖仓库代码；不覆盖官方预览图、样片、生成媒体与第三方服务，也不自动决定视频或截图能否被本站使用。编码器依赖（FFmpeg / libx264）需单独核；作者给出的速度倍数不是本站独立基准。"}
links: {"website": "https://fframes.studio", "github": "https://github.com/dmtrKovalenko/fframes"}
overview: "fframes 走的是原生路线：每帧是一个 Rust 函数返回的 SVG 树，用 svgr! 宏书写，实现 Video trait 时声明帧率与尺寸，由 GPU 渲染并交给编码器。它带原生预览窗口，仓库里给出产品片、机器人臂、字幕、播客、会议片头与着色器等样例，适合看「不用浏览器也能做代码视频」这条路径。"
limitations: ["官方素材是样例预览静帧，不是完整成片，本站未播放视频。", "本站仅核对官方 README，未运行代码、未做性能压测。", "MIT 只覆盖主项目，FFmpeg / libx264 等编码依赖需单独核许可。", "作者给出的速度倍数不是本站独立基准，不能据此做框架排名。", "需要 Rust 工具链与编码器构建环境，本站未验证安装流程。"]
author: "Dmitry Kovalenko / fframes 项目"
published_at: null
updated_at: "2026-11-09"
verification_note: "已核对官方 README / 项目页与许可文件，未运行代码、未复现样片"
source_note: "官方 README / 项目页（2026-11-09 读取）；核验条目底表「fframes」条目"
selection_note: "代表性上补齐了浏览器之外的原生 Rust / GPU 渲染路线；预览质量上有多张官方样例画面；来源完整度上仓库、官网、文档与 MIT 许可可核。"
related: ["math-to-manim", "hyperframes", "sensenova-code2video"]
sort_weight: 90
---

> 以下是本站基于官方 README 与项目页整理的分析与判断，不代表作者原始结论。本站未运行代码、未复现样片。

### 怎么工作

用 Rust 定义 Video 实现，声明 FPS、尺寸与每帧函数；函数通过 svgr! 宏返回一棵 SVG 树，渲染器按帧求值、GPU 绘制并编码。仓库提供原生预览，让改代码与看画面之间的循环不依赖浏览器刷新。

### 特点在哪里

与 HTML / React 路线相比，它把绘图约束在 Rust 的纯函数与 SVG 树上，帧描述天然更接近「给定 t 就得到确定画面」；代价是可复用的设计组件生态较小，且要自己处理文字排版与媒体混合。机器人臂一类的样例也说明它偏向几何与图形密集的画面。

### 适合做什么

原生性能敏感、几何或着色器密集、需要 3D 轨迹与机器人回放的图形任务，以及希望把渲染嵌入非浏览器环境的项目。若目标是大量文字排版与品牌模板，网页技术栈更省事。

### 值得借鉴什么

纯函数帧描述与原生预览，都是缩短迭代的有效手段；性能声明要在自己的文字、媒体与 3D 场景里重测，不照搬作者倍数。编码器依赖的许可与构建条件也要单独登记。
