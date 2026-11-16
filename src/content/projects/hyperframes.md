---
id: hyperframes
slug: hyperframes
status: published
name: HyperFrames
subtitle: 用 HTML / CSS 写可逐帧定位的视频
one_liner: 把 HTML、CSS 与可 seek 的动画写成时间轨道，由无头 Chrome 按帧渲染、FFmpeg 编码成确定性 MP4。
primary_category: "数据与工具"
tags:
  scenario: ["数据与工具", "品牌与营销"]
  tech: [HTML, CSS, GSAP, FFmpeg]
  type: [框架]
  media_status: [官方样片]
card_tags: [HTML / CSS, 框架, 品牌与营销]
cover:
  file: /media/hyperframes/bold-poster.png
  alt: HyperFrames 官方设计模板 Bold Poster 的 16:9 画面，红黑大字排版与纸白色背景
preview_motion: "/media/hyperframes/preview.mp4"
media_records:
  - file: /media/hyperframes/bold-poster.png
    kind: 官方设计模板画面（静帧）
    sample_name: Bold Poster 设计模板
    source_url: https://static.heygen.ai/hyperframes-oss/docs/images/design-templates/bold-poster.png
    source_page: https://github.com/heygen-com/hyperframes
    rights_holder: HeyGen / HyperFrames 项目
    usage_basis: 官方公开 README 中用于展示框架输出效果的图片；本站以介绍性引用方式使用，保留署名与来源回链；使用依据单独登记，不由仓库代码许可推导
    attribution: HyperFrames 官方 README「Design Templates」
    permission_note: 本地仅存展示用副本；若改为公开托管或商用分发，需向权利方单独确认
  - file: /media/hyperframes/cobalt-grid.png
    kind: 官方设计模板画面（静帧）
    sample_name: Cobalt Grid 设计模板
    source_url: https://static.heygen.ai/hyperframes-oss/docs/images/design-templates/cobalt-grid.png
    source_page: https://github.com/heygen-com/hyperframes
    rights_holder: HeyGen / HyperFrames 项目
    usage_basis: 官方公开 README 中用于展示框架输出效果的图片；本站以介绍性引用方式使用，保留署名与来源回链；使用依据单独登记，不由仓库代码许可推导
    attribution: HyperFrames 官方 README「Design Templates」
    permission_note: 本地仅存展示用副本；若改为公开托管或商用分发，需向权利方单独确认
  - file: /media/hyperframes/studio-preview.gif
    kind: 官方演示动图（截取压缩）
    sample_name: HyperFrames Studio 桌面应用演示
    source_url: https://github.com/user-attachments/assets/f6ff9fae-f33d-4f68-bd54-f3ed4ba6473b
    source_page: https://github.com/heygen-com/hyperframes
    rights_holder: HeyGen / HyperFrames 项目
    usage_basis: 官方 README 首屏的 Studio 应用演示动图；本站抽取 12 帧并缩小尺寸作为展示用副本，保留署名与来源回链；使用依据单独登记，不由仓库代码许可推导
    attribution: HyperFrames 官方 README 首屏演示
    permission_note: 为便于加载已抽帧压缩；若改为公开托管或商用分发，需向权利方单独确认
  - file: /media/hyperframes/preview.mp4
    kind: 原视频片段（5 秒静音循环）
    sample_name: HyperFrames Studio 应用演示 动态预览
    source_url: https://github.com/user-attachments/assets/f6ff9fae-f33d-4f68-bd54-f3ed4ba6473b
    source_page: https://github.com/heygen-com/hyperframes
    rights_holder: HeyGen / HyperFrames 项目
    usage_basis: 由官方 README 的 Studio 演示动图转为 5 秒静音循环，用于站内动态预览；以介绍性引用方式使用，已署名并保留来源回链，使用依据单独登记，不由仓库代码许可推导
    attribution: HyperFrames 官方 README 首屏演示
    permission_note: 本地仅存展示用副本；公开托管或商用分发前需向权利方单独确认
code_license:
  spdx: Apache-2.0
  source: https://github.com/heygen-com/hyperframes/blob/main/LICENSE
  note: 仅覆盖仓库代码；不覆盖生成媒体、官方设计模板图、外部模型与 Pro 服务，也不自动决定视频或截图能否被本站使用
links:
  website: https://hyperframes.heygen.com/introduction
  github: https://github.com/heygen-com/hyperframes
  demo: https://hyperframes.studio/
overview: HyperFrames 是一个把网页技术变成视频渲染管线的开源框架。输入是 HTML、CSS、媒体素材，以及用 data attributes 描述的轨道与时间；GSAP、CSS、Lottie、Three.js、WAAPI 等动画适配器只要能 seek，就能被纳入同一条时间线。渲染时由无头 Chrome 按帧定位画面，再交给 FFmpeg 编码成 MP4。它既可以在本地用 CLI 跑，也可以由 AI 编码 Agent 通过官方 Skills 调用，或作为 Studio 桌面应用与 AWS Lambda 渲染的底层引擎。面向的任务是产品发布片、品牌动效、数据卡片与批量模板化视频，而不是一次性生成自然场景素材。
limitations:
  - 页面展示的是官方设计模板与精选样片，不代表任意输入都能达到同样效果。
  - 本站仅核对官方 README 与文档页面，未部署 CLI、未运行渲染，因此不提供任何运行验证结论。
  - /slideshow 输出的是可导航演示，不是 MP4；/reverse-any-video、/style-sampling 等标记为 Pro，不属于开源引擎的免费能力。
  - Studio Pro 使用的 HeyGen 视频、图像、语音、音乐模型属于外部付费服务，与开源框架分开核算。
  - 代码许可为 Apache-2.0，仅覆盖仓库代码；预览图与生成媒体的使用依据另行登记，不能由 LICENSE 自动推导。
author: HeyGen / HyperFrames 团队
published_at: null
updated_at: "2026-11-09"
verification_note: 已核对官方 README 与文档入口，未运行代码、未复现样片
source_note: 官方 README（2026-11-09 读取）；核验条目底表第 1 条
selection_note: 代表性上它把「代码直接定义画面与时间」这条路线做成可复用工程；预览质量上官方提供 1600×900 设计模板画面与演示动图；来源完整度上官网、文档、仓库、许可与入口链接齐备。三项均满足，未参考证据等级排序。
related: ["remotion", "openfilm", "video-shotcraft"]
sort_weight: 10
---

> 以下是本站基于官方 README 与文档整理的分析与判断，不代表作者原始结论。本站未运行代码、未复现样片。

### 怎么工作

输入分三层：页面层的 HTML/CSS 与媒体素材，时间层的 data attributes 轨道描述，动画层的 GSAP、CSS、Lottie、Three.js、WAAPI 等可 seek 适配器。关键在于「任意时刻都能被定位」：无头 Chrome 按帧号渲染对应状态，FFmpeg 负责编码，因此同一时间点不应受访问顺序影响。入口也分三种：本地 CLI、Agent Skills（`npx hyperframes skills update` 后由编码 Agent 调用）、以及 Studio 桌面应用与 Catalog 组件库；渲染侧还提供 AWS Lambda 路线。

### 特点在哪里

与「代码剪辑实拍」不同，它把画面本身写成代码；与「代码先生成控制信号再交给视频模型」也不同，最终 MP4 仍由确定性的网页渲染得到。比较值得注意的不是安装步骤，而是它把设计体系带进了视频：README 中的 frame.md 把网页设计约束转写成面向画面的约束，Catalog 则把常见镜头做成可复用组件。相比只看模板数量，这种「设计 tokens → 画面约束 → 可 seek 组件」的链路更值得研究。

### 适合做什么

更适合符号、文字、数据、版式与时序要求明确的场景：品牌动效、产品发布片、数据卡片、批量模板化变体，以及由 Agent 驱动的结构化产片。官方样片里的海报式排版正好说明这类优势。若需要自然场景质感、真人口播或复杂物理外观，生成模型或实拍素材更合适；代码负责精确结构，模型负责外观，两者不改变分工。

### 值得借鉴什么

第一，工作流知识与渲染底座可以解耦：brag-slim 去掉 HyperFrames 与捆绑资产后仍保留创意规则，说明 Skills、镜头配方与引擎可以独立演进。第二，确定性应当被当成工程约束：避免 `Date.now`、未固定随机种子与未就绪的字体纹理，做正序／逆序抽帧比对。第三，免费与 Pro、引擎与生成模型要分开核算，避免把开放代码误读为全流程免费。第四，视频的观看尺寸不是网页尺寸，字号、安全区与竖版重构都要单独设计。
