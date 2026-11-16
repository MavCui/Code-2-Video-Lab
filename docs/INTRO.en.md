# Introduction · Why Code-2-Video-Lab exists

## A problem

By 2026, generating video with code is no longer surprising. One prompt yields a 30-second clip; an open-source framework renders HTML into MP4; an agent runs storyboard, assets, editing, and mixing in a few hours. The tools keep getting better. **Our judgment hasn't kept up.**

The hard part isn't "can it be made." It's these questions:

- The same prompt, two models, a 1.76× price gap — and the faster one is the more expensive one. That fact lives inside a few hundred characters of a tweet.
- A README says "10 minutes to a launch video," but never says whether those 10 minutes are generation time or end-to-end time including retakes.
- 131 agents and 10.1B tokens produced 5 minutes 26 seconds. Impressive — and completely unusable as a benchmark, because the task isn't comparable to anything else.
- A framework is Apache-2.0, but can its official sample film be reposted? Those were never the same question.

The information isn't missing. It's scattered across GitHub, X, shared docs, and newsletters. What's missing is **putting it on one consistent basis, and labeling who said each number**.

That's what this lab is for.

## What it is

A static content site that puts four kinds of things from the code-to-video pipeline into one gallery:

1. **Projects** — open-source tools and frameworks. What matters is the route: React frame-by-frame, single-file `frame(t)`, HTML plus headless browser, Rust/GPU, Blender plus Python.
2. **Web cases** — 100 single-file HTML pages. They aren't video, but they prove something: a piece of code can grow an interactive visual with no render farm. That's the other end of the "code as image" spectrum.
3. **Works** — AI-made videos that actually shipped, with production details the author disclosed: hours, dollars, settings, comparison cuts.
4. **Case studies** — 24 cases where you can do the math. Each answers: how long, how much, how many tokens or quota, and on what pipeline.

All four share one industry taxonomy, one tech-tag vocabulary, one filter. What you find depends on what you're asking.

## Three design decisions

**One: evidence over content.**

Most project lists answer "what does this do." Every entry here also answers "why should you believe me." So every detail page carries:

- A verification note: what was read, what wasn't, whether anything was run.
- Code license and media usage basis as two separate tables, neither derived from the other.
- Case studies add a "sources and evidence gaps" section: whatever the author didn't state is written down as "not stated."

This isn't rigor for its own sake. **The most common failure in this field is treating an anecdote as a benchmark.** A 25-second A/B test becomes "model X is 1.76× more expensive," and what gets dropped on the way is exactly the part that made it true: same scene, same resolution, retries unknown.

**Two: a preview is not decoration.**

If a video project's hero image is a carefully chosen still, it's a poster, not a preview. So:

- Where an original clip exists, a 5-second silent loop plays on the detail page (57 entries).
- Web cases aren't recordings — they run. One click loads the author's hosted page in a sandboxed iframe, and you can play with it.
- Where no usable clip exists, the entry stays a still. Two works share the same thread-level intro video that has nothing to do with their subject; rather than pad the page with a mismatched clip, they get none.

**Three: the rules live in code.**

"No implied testing," "license doesn't imply media rights," "every asset needs its own source record" — written in a document, these get forgotten by the third update. So they live in `scripts/validate.mjs`:

- Missing required fields, missing assets, first media record not matching the cover, affirmative "we tested it" wording — **build fails**.
- A third-party link that doesn't respond — **never blocks**; it goes to a manual review file, split into confirmed failures and "undeterminable from this network."

The credibility of a content site depends on whether it holds the line when nobody is watching.

## What it is not

- **Not a video generation tool.** No model calls, no render pipeline.
- **Not a leaderboard.** No cross-case cost ranking, because the tasks aren't comparable.
- **Not a crawler.** Content is maintained by hand; the last pass was 2026-11-16.
- **Not exhaustive.** From 631 collected cases, 31 works and 24 studies were kept — the bar being a real preview, complete sourcing, and a distinct route.

## Numbers

| | |
|---|---|
| Entries | 178 (12 projects + 100 web cases + 31 works + 24 studies + 10 production cases + 1 report) |
| Preview assets | 244 (185 stills + 59 motion clips) |
| Industries | 9 |
| Tech tags | 44 |
| Build gate | 4 blocking categories + 1 manual-review category |

## What's next

Today the site helps you see the current state. The next step is reproducibility: a manifest per project — commit, engine version, seed, parameters, artifacts — so "how was this film made" is not just readable but re-runnable.

Until then, making what's already public readable, traceable, and judgeable is worth doing on its own.

---

Site code is MIT. Preview media belongs to the original authors and is used as introductory citation only.
