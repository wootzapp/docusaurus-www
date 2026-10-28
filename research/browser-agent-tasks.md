---
title: Browser Agent Tasks
slug: browser-agent-tasks
date: 2026-10-27T09:00:00Z
kind: Dataset
description: Public-web browser tasks with paired screenshot and W8 recordings of each run, the raw recordings, and the saved evaluations behind W8 DOM-diff Bench.
subtitle: WootzappLab/browser-agent-tasks on Hugging Face
byline: WootzApp Research
abstract: |
  100 multi-step public-web tasks, each with its paired recordings: the screenshot run and the W8 run of the same task, with final answers and agent logs. Each task states the instruction, a public starting page, when to stop, and what the agent must leave untouched.

  This is the data behind W8 DOM-diff Bench. The October 2026 revision adds the raw recordings and the saved evaluations: a frozen rubric, both verifier results, and the evidence audit for every task.
stats:
  - value: "100"
    label: Tasks
  - value: "90"
    label: Distinct sites
  - value: "930"
    label: Recorded browser states, 465 per side
  - value: "100"
    label: Saved evaluation runs
sources:
  - label: Hugging Face
    href: https://huggingface.co/datasets/WootzappLab/browser-agent-tasks
result: 930 recorded browser states
facts: [100 tasks, 90 sites, Paired runs, Saved audits]
thumbnail: tasks
---

## Layout

`tasks.jsonl` holds one task per line. Under `trajectories/`, each task has one folder per recording. `recordings/` keeps the raw collection artifacts, and `evaluation/` keeps the saved comparison for each task.

| Path | Contents |
| :--- | :--- |
| `tasks.jsonl` | 100 task definitions |
| `trajectories/data-ss/task_NN` | `screenshotN.png`, `final_answer.json`, `task_data.json`, `web_surfer.log` |
| `trajectories/data-dom/task_NN` | `dom_modelN.txt`, `final_answer.json`, `task_data.json`, `web_surfer.log` |
| `recordings/<run-id>/` | Raw collection: `manifest.json`, `decisions.jsonl`, `trajectory.jsonl`, and one `steps/step_NNN/` per captured state with `dom.json`, `dom_full.txt`, `dom_model.txt`, and `screenshot.png` |
| `evaluation/task_NN/<run-id>/` | `frozen_rubric.json`, `run_manifest.json`, `evidence_audit.json`, and the screenshot and DOM verifier results |
| `EVALUATIONS.md`, `EVIDENCE-CATEGORIES.md`, `RECORDINGS.md` | Aggregate findings, the six loss categories, and the recording layout |

The benchmark built on these recordings is [W8 DOM-diff Bench](/research/w8-domdiff-bench).

## Task schema

Six fields per task.

| Field | Type | Description |
| :--- | :--- | :--- |
| `task_id` | string | Stable identifier |
| `category` | string | Task family |
| `instruction` | string | Complete instruction given to the browser agent |
| `start_url` | string | Suggested public starting page |
| `stopping_condition` | string | When the agent must stop |
| `constraints` | `list<string>` | Safety and scope restrictions |

## Example: one task, both recordings

This is the exact release date finding in the W8 DOM-diff Bench report (Task 19, criterion C3). The screenshot run shows a relative date; the W8 run keeps the exact timestamp.

```json title="tasks.jsonl · browser_task_019"
{
  "task_id": "browser_task_019",
  "category": "github release research",
  "instruction": "Find the latest release of pytorch/pytorch. Report the release tag, release date, and the first three highlight bullets from the release notes in their displayed order.",
  "start_url": "https://github.com/pytorch/pytorch/releases",
  "stopping_condition": "Stop after the latest release metadata and first three highlights have been recorded.",
  "constraints": [
    "Do not sign in.",
    "Do not create issues or modify repository content."
  ]
}
```

<TaskNineteenPair />

## Load the tasks

```python
from datasets import load_dataset

tasks = load_dataset(
    "WootzappLab/browser-agent-tasks",
    split="train",
)
```

## Collection

Tasks ran in W8 through agent-browser. The recorder captured an initial state and one state after every executed action. The acting model worked from the DOM observations; screenshots were stored for the screenshot verifier and for inspection.

## Scope

Every task runs on the public web. Agents do not sign in, purchase, submit irreversible forms, or start navigation. The dataset is published under the Apache 2.0 license.
