---
title: W8 DOM-diff Bench
slug: w8-domdiff-bench
date: 2026-10-01
kind: Benchmark
description: What screenshot recordings lose against structured browser state, measured on the same 100 agent runs.
subtitle: "w8-domdiff-bench: Browser Evidence Infrastructure for Agent Development"
byline: WootzApp Research
abstract: |
  Agent evaluation usually starts after the trajectory has been captured. We ask the earlier question: what did the recording fail to preserve?

  We ran the same 100 browser-agent tasks once and kept two records of each run: screenshots, and structured page state from W8, our Chromium-based browser. Across 639 audited rubric criteria, screenshots lacked the required evidence on 4.07% of criteria and W8 on 0.31%, 92.3% fewer gaps.
stats:
  - value: "100"
    label: Paired browser tasks
  - value: "639"
    label: Audited rubric criteria
  - value: "26 (4.07%)"
    label: Screenshot-side missing evidence
  - value: "2 (0.31%)"
    label: W8-side missing evidence
sources:
  - label: Technical report
    href: https://github.com/wootzapp/w8-domdiff-bench/blob/w8-reproducible/README.md
  - label: Results
    href: https://github.com/wootzapp/w8-domdiff-bench/tree/w8-reproducible/results
  - label: Verifier
    href: https://github.com/wootzapp/w8-domdiff-bench/tree/w8-reproducible/w8bench/verifier
  - label: Task set
    href: https://huggingface.co/datasets/WootzappLab/browser-agent-tasks
result: "4.07% → 0.31% missing evidence"
facts: [100 tasks, 639 criteria, Paired evaluation]
thumbnail: bench
citation: |
  @techreport{wootzapp2026w8domdiffbench,
    title       = {w8-domdiff-bench: Browser Evidence Infrastructure for Agent Development},
    author      = {{WootzApp Research}},
    institution = {WootzApp},
    year        = {2026},
    month       = oct,
    url         = {https://github.com/wootzapp/w8-domdiff-bench}
  }
---

## 92.3% fewer evidence gaps than screenshot recordings

When a required value falls outside the captured viewport, when an endpoint is hidden in a structured field, or when an important control isn't legible, a screenshot-based verifier can only reason from incomplete evidence. Our DOM-diff Optimized representation preserved the required source evidence more often in the audited paired comparison.

| Representation | Missing-evidence criteria | Rate |
| :--- | ---: | ---: |
| Screenshot recording | 26 of 639 | 4.07% |
| W8 DOM-diff Optimized | 2 of 639 | **0.31%** |

<Caption>Exhibit 1 — Criteria with asymmetric missing source evidence. Lower is better.</Caption>

<EvidenceBars
  max={5}
  ticks={[0, 1, 2, 3, 4, 5]}
  unit='%'
  rows={[
    {label: "Screenshot recording", value: 4.07, display: "4.07%", detail: "26/639"},
    {label: "W8 DOM-diff Optimized", value: 0.31, display: "0.31%", detail: "2/639", accent: true},
  ]}
  caption='Shared 0–5% axis. Published October 1, 2026.'
/>

Relative reduction: (26 − 2) / 26 = 92.3%.

## Where evidence disappeared

Each confirmed gap is assigned one primary category, so counts sum without double counting.

| Source-evidence gap category | Screenshot | W8 DOM |
| :--- | ---: | ---: |
| Exact text and values | 11 | 0 |
| URLs | 3 | 0 |
| Control states | 1 | 0 |
| Table entries | 1 | 0 |
| Label–value relationships | 0 | 1 |
| Capture omissions | 10 | 1 |
| **Total** | **26** | **2** |

<Caption>Exhibit 2 — Source-evidence gaps by category.</Caption>

### Preserved details

Three rows of Table 4 in the report, with links to both recordings of each task in the published dataset. Task 19 is reproduced from the recordings themselves.

<TaskNineteenPair />

- **Task 19, exact release date.** The exact release date is explicit in the structured state (“02 Sep 17:40”). The screenshot record shows only a relative date (“2 weeks ago”). [Screenshot run](https://huggingface.co/datasets/WootzappLab/browser-agent-tasks/tree/main/trajectories/data-ss/task_19) · [W8 run](https://huggingface.co/datasets/WootzappLab/browser-agent-tasks/tree/main/trajectories/data-dom/task_19)
- **Task 24, complete ranked list.** Structured states preserve ranks 1–30. The captured screenshot frames cover ranks 1–29. [Screenshot run](https://huggingface.co/datasets/WootzappLab/browser-agent-tasks/tree/main/trajectories/data-ss/task_24) · [W8 run](https://huggingface.co/datasets/WootzappLab/browser-agent-tasks/tree/main/trajectories/data-dom/task_24)
- **Task 75, exact endpoint URL.** The exact endpoint URL is explicit in the structured header. It is not visible in the captured screenshot frames. [Screenshot run](https://huggingface.co/datasets/WootzappLab/browser-agent-tasks/tree/main/trajectories/data-ss/task_75) · [W8 run](https://huggingface.co/datasets/WootzappLab/browser-agent-tasks/tree/main/trajectories/data-dom/task_75)

[Table 4 in the technical report](https://github.com/wootzapp/w8-domdiff-bench/blob/w8-reproducible/README.md#53-preserving-the-details-agents-need)

## Same run. Same rubric. Different evidence.

1. **Record once.** Each task produces a trajectory of actions and ordered browser states.
2. **Preserve both views.** Capture screenshots and DOM-diff Optimized from the same execution.
3. **Freeze the rubric.** Both verifier pathways receive the same task, action history, final answer and frozen rubric.
4. **Audit the sources.** Review whether each criterion's required information actually exists in each representation.
5. **Count asymmetric omissions.** A criterion counts against a representation only when required evidence is missing there and present in the other.

[Read the exact metric definition](https://github.com/wootzapp/w8-domdiff-bench/blob/w8-reproducible/README.md#42-measuring-evidence-preservation)

:::note[Scope of the metric]

The metric covers asymmetric evidence loss. Evidence missing from both representations, agent success, human agreement with judge scores, downstream learning gains, and performance on visual tasks are separate measurements.

The audit and scoring pipeline use model-based components and manual source review. **The study measures evidence preservation.** Deterministic checks versus LLM graders is the next benchmark.

:::

## Smaller representation, richer context

In a **separate historical sample of 650 recorded states**, DOM-diff Optimized averaged 4.84 KiB of stored text per state, versus 44.88 KiB for detailed readable DOM text and 191.32 KiB for structured snapshots.

<EvidenceBars
  max={200}
  ticks={[0, 50, 100, 150, 200]}
  rows={[
    {label: "W8 DOM-diff Optimized", value: 4.84, display: "4.84 KiB", accent: true},
    {label: "Detailed readable text", value: 44.88, display: "44.88 KiB"},
    {label: "Structured snapshots", value: 191.32, display: "191.32 KiB"},
  ]}
  caption='Exhibit 3 — Mean stored size per state, KiB. Historical 650-state sample.'
/>

> This compares stored size per state. Inference-token usage, verifier cost, and training time are separate measurements. The sample is separate from the 100-task evidence-loss study.

## A better reward starts with a better record

A model judge cannot recover an exact value that was never saved. A deterministic checker also needs the relevant state to have been captured in the first place.

W8's work establishes a measurable reduction in missing browser source evidence. The next engineering step is to turn that evidence into **task-specific checks** for observable state and outcome changes, while retaining screenshot and human/model judgment when visual or subjective criteria demand it.

| Step | Status |
| :--- | :--- |
| Evidence capture | Measured |
| Criterion checks | Next engineering step |
| Trusted rewards | Next engineering step |
| Evaluations and training | Next engineering step |

## Inspect the evidence. Reproduce the result.

- [Technical report and metric definitions](https://github.com/wootzapp/w8-domdiff-bench/blob/w8-reproducible/README.md)
- [Published results and summary.json](https://github.com/wootzapp/w8-domdiff-bench/tree/w8-reproducible/results)
- [Verifier, scripts, and comparison instructions](https://github.com/wootzapp/w8-domdiff-bench/tree/w8-reproducible/w8bench/verifier)
- [Browser Agent Tasks dataset on Hugging Face](/research/browser-agent-tasks)
- [Openrind Shell OpenShell runtime source](https://github.com/openrind/openrind-shell/tree/nemo)

Bring a workflow where existing traces or screenshots fail to explain what happened. We'll compare the evidence the harness emits with what the execution environment and browser can preserve. [Discuss a benchmark run](https://calendar.app.google/jjLE5C9TczR2vhHe9).
