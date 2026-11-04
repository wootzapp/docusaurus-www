---
title: Browser Agent Tasks
slug: browser-agent-tasks
date: 2026-11-04T09:00:00Z
kind: Dataset
description: 100 public-web browser tasks recorded three times, each with a screenshot run and a W8 run, plus the frozen rubrics, verifier results, and evidence audits behind W8 DOM-diff Bench.
subtitle: WootzappLab/browser-agent-tasks on Hugging Face
byline: WootzApp Research
abstract: |
  100 multi-step tasks on the public web, each recorded three times. Each run has two records of the same execution: the screenshot run and the W8 run, with final answers and agent logs. Each task states the instruction, a public start page, when to stop, and what the agent must leave alone.

  This is the data behind W8 DOM-diff Bench. The November 2026 release holds 300 retained recordings, 296 prepared pairs, and the saved evaluation for each pair: a frozen rubric, both verifier results, and the evidence audit.
stats:
  - value: "100"
    label: Tasks
  - value: "3"
    label: Recorded runs per task
  - value: "300"
    label: Retained recordings
  - value: "2,592"
    label: Captured browser states
sources:
  - label: Hugging Face
    href: https://huggingface.co/datasets/WootzappLab/browser-agent-tasks
result: 300 recordings, 296 prepared pairs
facts: [100 tasks, 90 sites, 3 runs, Saved audits]
thumbnail: tasks
---

## Layout

`tasks.jsonl` holds one task per line. Under `trajectories/`, each run has one folder per task and per record. `recordings/` keeps the raw collection files per run. `evaluations/` keeps the saved comparison for each task and run.

| Path | Contents |
| :--- | :--- |
| `tasks.jsonl` | 100 tasks |
| `trajectories/run_N/data-ss/task_NN` | `screenshotN.png`, `final_answer.json`, `task_data.json`, `web_surfer.log` |
| `trajectories/run_N/data-dom/task_NN` | `dom_modelN.txt`, `final_answer.json`, `task_data.json`, `web_surfer.log` |
| `trajectories/run_N/pairs.jsonl` | One loadable record per prepared pair: metadata, answers, the shared log, the DOM text, and screenshot paths with checksums |
| `recordings/run_N/<task>/` | Raw collection: `manifest.json`, `decisions.jsonl`, `trajectory.jsonl`, and one `steps/step_NNN/` per captured state |
| `evaluations/run_N/task_NN/batch_01/` | `frozen_rubric.json`, `run_manifest.json`, `evidence_audit.json`, and both verifier results |
| `manifests/`, `results/` | Run manifests, `summary.json`, and the category table |
| `EVALUATIONS.md`, `EVIDENCE-CATEGORIES.md`, `RECORDINGS.md` | The findings, the six loss types, and the recording layout |

The three runs hold 100, 99, and 97 prepared pairs. The benchmark built on these recordings is [W8 DOM-diff Bench](/research/w8-domdiff-bench).

## Task schema

Seven fields per task.

| Field | Type | Description |
| :--- | :--- | :--- |
| `task_id` | string | Stable identifier |
| `task_name` | string | Short title |
| `category` | string | Main operation: record lookup, reference lookup, search and filtering, ranking, comparison, linked-page research, or data analysis |
| `instruction` | string | The full instruction given to the agent |
| `start_url` | string | Suggested public starting page |
| `stopping_condition` | string | When the agent must stop |
| `constraints` | `list<string>` | Safety and scope restrictions |

## Example: one task, both records

This is the publication date finding in the W8 DOM-diff Bench paper (run_1, task_08, criterion C2). The screenshot run shows a relative age. The W8 run keeps the timestamp.

```json title="tasks.jsonl · browser_task_008"
{
  "task_id": "browser_task_008",
  "task_name": "software release research",
  "category": "linked-page research",
  "instruction": "Go to the GitHub repository for Microsoft Playwright at https://github.com/microsoft/playwright. Open the Releases page and identify the newest non-preview release. Report its release tag, publication date, and three changes from the release notes. Verify one of those changes using the official Playwright documentation.",
  "start_url": "https://github.com/microsoft/playwright",
  "stopping_condition": "Stop after the release metadata, three release-note changes, and one documentation verification have been recorded.",
  "constraints": [
    "Do not sign in.",
    "Do not create issues, comments, pull requests, or file changes."
  ]
}
```

<RecordPair />

## Load the tasks

```python
from datasets import load_dataset

tasks = load_dataset("WootzappLab/browser-agent-tasks", split="test")
pairs = load_dataset("WootzappLab/browser-agent-tasks", "trajectory_pairs", split="test")
```

## Collection

Tasks ran in W8 through agent-browser. The recorder captured a first state and one state after each action. The acting model, gpt-5.6, worked from the DOM text. Screenshots were stored for the screenshot verifier and for people to inspect. Three tasks have a run with no captured state. They stay in the release and out of the matched comparison.

## Scope

Every task runs on the public web. Agents do not sign in, buy anything, submit forms they cannot undo, or start navigation. The dataset is published under the Apache 2.0 license.
