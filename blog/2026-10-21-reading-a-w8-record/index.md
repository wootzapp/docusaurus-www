---
slug: reading-a-w8-record
title: Reading a W8 DOM-diff record
description: What one recorded browser state holds, shown on the task where the screenshot kept "2 weeks ago" and W8 kept the timestamp.
authors: [wootzapp]
tags: [w8, evidence, benchmark]
---

We recorded each task in W8 DOM-diff Bench twice: once as screenshots, once as W8 DOM-diff Optimized states. This post opens one pair, Task 19, and reads what each record kept.

<!-- truncate -->

## The task

Task 19 sends the agent to the pytorch/pytorch releases page and asks for the latest release's tag, date, and first three highlights. This is the row from the published task set:

```json
{
  "task_id": "browser_task_019",
  "category": "github release research",
  "instruction": "Find the latest release of pytorch/pytorch. Report the release tag, release date, and the first three highlight bullets from the release notes in their displayed order.",
  "start_url": "https://github.com/pytorch/pytorch/releases",
  "stopping_condition": "Stop after the latest release metadata and first three highlights have been recorded.",
  "constraints": ["Do not sign in.", "Do not create issues or modify repository content."]
}
```

## Two recordings of the same step

### The screenshot run

![The release line as the screenshot run captured it](./screenshot0-release-line.png)

The frame shows the release line as GitHub renders it: `released this 2 weeks ago`. The exact date sits in a tooltip, outside the frame.

### The W8 run

The same step in `dom_model0.txt`. The timestamp is in the page's markup, so the record holds it:

```text
- PyTorch 2.14.0 Release
- ethche released this 02 Sep 17:40
- 02 Sep 17:40
- v2.14.0
- 2b3ec34
```

The record keeps the interactive elements, each with a stable id the agent can act on:

```text
[19] link "Latest"
[20] button "Compare" control_state=expanded=false
[370] link "v2.14.0"
[373] link "2b3ec34"
```

## What each record kept

| Criterion | Screenshot run | W8 run |
| --- | --- | --- |
| Release tag | `v2.14.0` | `v2.14.0` |
| Commit | `2b3ec34` | `2b3ec34` |
| Release date | "2 weeks ago" | `02 Sep 17:40` |

Both records answer two of the three criteria. On the third, the screenshot holds a relative date and W8 holds the exact one. That is why Task 19 is the exact release date finding (criterion C3) in the technical report.

:::note
Across the full benchmark, screenshots lacked required evidence on 151 of 642 audited criteria (23.52%). W8 records lacked it on 5 (0.78%). URLs account for 117 of the screenshot losses. Set that category aside and screenshots lose evidence on 34 criteria (5.30%). The counts, the method, and the recordings are on the [benchmark page](/research/w8-domdiff-bench).
:::

> We built `w8-core`, our custom Chromium-based browser infrastructure, DOM-diff Optimized, a compact structured representation of captured page states, and `w8-domdiff-bench`, a paired evaluation suite for browser-agent evidence.
>
> — from the abstract of the technical report

## Read the records yourself

The task set and both recordings of each task are on Hugging Face.

```python
from datasets import load_dataset

tasks = load_dataset("WootzappLab/browser-agent-tasks", split="train")
task = next(t for t in tasks if t["task_id"] == "browser_task_019")
print(task["instruction"])
```

- [Screenshot run of Task 19](https://huggingface.co/datasets/WootzappLab/browser-agent-tasks/tree/main/trajectories/data-ss/task_19)
- [W8 run of Task 19](https://huggingface.co/datasets/WootzappLab/browser-agent-tasks/tree/main/trajectories/data-dom/task_19)
- [Technical report](https://github.com/wootzapp/w8-domdiff-bench/blob/w8-reproducible/README.md)
