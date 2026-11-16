---
num: "05"
slug: 3492-char-anime-prompt
status: "published"
title: "3,492 字符的提示词，把“日式手绘动画”翻译成一条渲染管线"
title_main: "3,492 字符的提示词"
title_sub: "把“日式手绘动画”翻译成一条渲染管线"
tag: "提示词即管线"
one_liner: "它示范的不是“提示词写得好”，而是把审美要求逐条翻译成可执行的渲染参数。"
industry: "艺术与实验"
tech: ["Three.js", "FFmpeg", "代码渲染"]
cover: {"file": "/media/studies/3492-char-anime-prompt/cover.jpg", "alt": "3,492 字符的提示词 案例对照画面", "fit": "cover"}
hint: "看哪里。看人物线条的抖动与色块边缘——这是“逐帧渲染 + 手绘笔触 pass”的痕迹，不是视频模型插帧的平滑感。"
caption: "图 5｜成片中的一段对峙镜头。来源：@anstapnever 原帖视频封面帧。"
meta: [{"k": "核心定位", "v": "用超长提示词锁定画风与工艺：明确排除 3D 与视频模型，指定 three.js + headless Chrome + ffmpeg。"}, {"k": "适用场景", "v": "要“像动画电影”的手绘质感、且不接受视频模型的团队。"}, {"k": "必备输入", "v": "3,492 字符提示词（公开）；three.js（WebGL2）、Chrome headless 逐帧渲染、ffmpeg 编码；管弦配乐。"}, {"k": "标准流程", "v": "提示词锁定风格与工艺 → 六个部门（城市、天空等）并行产出 → headless 逐帧渲染 → ffmpeg 编码为 1920×1080 / 24fps。"}, {"k": "AI职责", "v": "画面、渲染脚本、编码参数全部由模型决定；人给提示词与验收。"}, {"k": "关键指标", "v": "目标：78 秒 1080p24 成片。实际：六个并行部门、14.2K 播放；模型归属为作者自述的 Fable 5.5，未独立复现。"}]
cost_table: []
cost_note: ""
take: [{"k": "可以迁移的", "v": "把“像某种风格”改写成“用什么渲染、几层 pass、什么编码”，是可复用的提示词结构。"}, {"k": "成立的条件", "v": "团队要能接受逐帧渲染的等待，并具备 headless 渲染环境。"}, {"k": "不能外推的", "v": "复杂角色表演与长镜头调度仍需人工介入；78 秒是短片尺度。"}]
body: ["这份提示词最硬的部分是“禁止项”。它明确写了不要 3D 动画、不要动态插画、不要网页风格图形，并且指定在浏览器里用 WebGL2 逐帧渲染、加一层手绘笔触 pass 和一层墨水 pass、最后用 ffmpeg 编码。这已经不是审美描述，而是工艺规范——模型拿到的是可执行参数，不是形容词。", "为什么值得把提示词写到三千字。因为“像日本动画”这句话本身不可执行。拆到渲染层之后，判断标准变成了分辨率、帧率、笔触层数、编码器，人可以逐项验收，模型也可以逐项对齐。这是把主观要求转成可检查对象的标准动作。", "六个部门并行，说明它复用了同一套镜头契约。城市、天空等部门各自产出，但共享同一套画风与相机规范。这套规范藏在提示词里，也是它能被复用的部分。"]
demo: {"label": "X 原帖（1:18，2026-11-09，14.2K 播放，提示词 3,492 字符公开）", "url": "https://x.com/anstapnever/status/2119772039037014524", "type": "Demo 类型：单条成片（无对照版本）"}
sources: [{"text": "原帖（含成片）：https://x.com/anstapnever/status/2119772039037014524", "links": ["https://x.com/anstapnever/status/2119772039037014524"]}, {"text": "提示词（3,492 字符，公开）：https://jasonzhu.ai/en/prompts/claude-opus-5-5/2119772039037014524", "links": ["https://jasonzhu.ai/en/prompts/claude-opus-5-5/2119772039037014524"]}, {"text": "发布时间与互动数据：2026-11-09（UTC+8）；14.2K 播放 / 245 赞，快照 2026-11-16", "links": []}, {"text": "证据缺口：渲染耗时、硬件、六部门具体分工未披露；模型版本为作者自述。", "links": []}, {"text": "记录版本：原帖与媒体快照 2026-11-16；模型归属以作者自述为准，未独立复现。", "links": []}]
source_doc: {"name": "C2V_案例精读_24例_证据版", "url": "https://www.workbuddy.cn/space/d/brjgW58OaD25LBl8vBeJQl", "section": "提示词即管线"}
license: {"spdx": "未声明（作者保留权利）", "source": "https://x.com/anstapnever/status/2119772039037014524", "note": "作品本身未附开源许可文件；本栏只记录作品的权利状态，不推断任何画面或素材的使用权限。"}
media_records: [{"file": "/media/studies/3492-char-anime-prompt/cover.jpg", "kind": "案例精读内嵌截图（静帧）", "sample_name": "3,492 字符的提示词 案例对照画面", "source_url": "https://x.com/anstapnever/status/2119772039037014524", "source_page": "https://www.workbuddy.cn/space/d/brjgW58OaD25LBl8vBeJQl", "rights_holder": "原作者（X 账号）", "usage_basis": "画面取自作者 X 原帖视频帧，经案例精读文档整理并内嵌；本站以介绍性引用方式使用，已署名并保留原帖回链，使用依据单独登记，不由代码或作品许可推导", "attribution": "3,492 字符的提示词 · X 原帖作者", "permission_note": "本地仅存展示用副本；公开托管或商用分发前需向原作者单独确认"}, {"file": "/media/studies/3492-char-anime-prompt/preview.mp4", "kind": "原视频片段（5 秒静音循环）", "sample_name": "3,492 字符的提示词，把“日式手绘动画”翻译成一条渲染管线 动态预览", "source_url": "https://x.com/anstapnever/status/2119772039037014524", "source_page": "https://www.workbuddy.cn/space/d/brjgW58OaD25LBl8vBeJQl", "rights_holder": "原作者（X 账号）", "usage_basis": "由作者原帖视频或官方影片截取 5 秒、静音、缩放后用于站内动态预览；以介绍性引用方式使用，已署名并保留原始来源回链，使用依据单独登记，不由代码或作品许可推导", "attribution": "3,492 字符的提示词 · X 原帖作者", "permission_note": "本地仅存展示用副本；公开托管或商用分发前需向原作者单独确认"}]
updated_at: "2026-11-16"
verification_note: "数据与画面均来自案例精读文档及其标注的 X 原帖，作者自述口径；本站未独立复现任何一条链路。"
sort_weight: 205
related: ["cathedral-of-ice", "attention-131-agents", "83s-threejs-39-shots"]
preview_motion: "/media/studies/3492-char-anime-prompt/preview.mp4"
---
