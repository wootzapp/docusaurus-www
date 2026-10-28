---
title: W8 DOM-diff Bench
slug: w8-domdiff-bench
date: 2026-10-27T12:00:00Z
kind: Benchmark
description: What screenshots lose against W8 page state, measured on the same 100 agent runs and 642 audited rubric criteria.
subtitle: "w8-domdiff-bench: Browser Evidence Infrastructure for Agent Development"
byline: WootzApp Research
abstract: |
  Most agent evaluation starts after the run is captured. We ask an earlier question: what did the recording fail to keep?

  We ran 100 browser-agent tasks once and kept two records of each run: screenshots, and page state from W8, our Chromium browser. Across 642 audited rubric criteria, screenshots lacked required evidence on 151 (23.52%) and W8 on 5 (0.78%). URLs drive most of the gap: they account for 117 of the 151 screenshot losses. Set that category aside and screenshots lose evidence on 34 criteria (5.30%). W8 stays at 5.

  A model produced the audit findings and WootzApp staff checked each one. The findings measure whether evidence exists. Task success and answer correctness are separate measurements.
stats:
  - value: "100"
    label: Paired browser tasks
  - value: "642"
    label: Audited rubric criteria
  - value: "23.52%"
    label: Screenshot losses · 151 criteria
  - value: "0.78%"
    label: W8 losses · 5 criteria
sources:
  - label: Technical report
    href: https://github.com/wootzapp/w8-domdiff-bench/blob/w8-reproducible/docs/technical-report.md
  - label: Results
    href: https://github.com/wootzapp/w8-domdiff-bench/tree/w8-reproducible/results
  - label: Verifier
    href: https://github.com/wootzapp/w8-domdiff-bench/tree/w8-reproducible/w8bench/verifier
  - label: Task set
    href: https://huggingface.co/datasets/WootzappLab/browser-agent-tasks
result: "23.52% → 0.78% missing evidence"
facts: [100 tasks, 642 criteria, Paired evaluation]
thumbnail: bench
citation: |
  @techreport{wootzapp2026w8domdiffbench,
    title       = {w8-domdiff-bench: Browser Evidence Infrastructure for Agent Development},
    author      = {{WootzApp Research}},
    institution = {WootzApp},
    year        = {2026},
    month       = oct,
    note        = {Revised October 27, 2026. Branch w8-reproducible.},
    url         = {https://github.com/wootzapp/w8-domdiff-bench}
  }
---

## 96.7% fewer evidence losses than screenshot recordings

A required value can sit outside the captured viewport. The page identity can live in the address bar. A control's state can be hard to read from pixels. In each case a screenshot verifier works from partial evidence. On the same 100 runs and the same frozen rubrics, W8's DOM-diff Optimized record kept the required evidence far more often.

| Analysis | Tasks | Criteria | Screenshot losses | W8 DOM losses |
| :--- | ---: | ---: | ---: | ---: |
| All loss categories | 100 | 642 | 151 (23.52%) | **5 (0.78%)** |
| URL category excluded | 100 | 642 | 34 (5.30%) | **5 (0.78%)** |
| Listed access-blocked tasks excluded | 88 | 575 | 125 (21.74%) | **5 (0.87%)** |
| Both exclusions | 88 | 575 | 32 (5.57%) | **5 (0.87%)** |

<Caption>Exhibit 1 — Criteria with evidence missing on one side, by analysis choice. Lower is better. Each exclusion keeps each audited criterion of its cohort in the denominator.</Caption>

<EvidenceBars
  max={25}
  ticks={[0, 5, 10, 15, 20, 25]}
  unit='%'
  rows={[
    {label: "Screenshot recording", value: 23.52, display: "23.52%", detail: "151/642"},
    {label: "Screenshot recording, URL losses excluded", value: 5.3, display: "5.30%", detail: "34/642"},
    {label: "W8 DOM-diff Optimized", value: 0.78, display: "0.78%", detail: "5/642", accent: true},
  ]}
  caption='Shared 0–25% axis. Exploratory 95% Wilson intervals: screenshots 20.40–26.95%, W8 0.33–1.81%. Audit synced October 26, 2026.'
/>

Relative reduction: (151 − 5) / 151 = 96.7% across all categories. Without URL losses: (34 − 5) / 34 = 85.3%.

## Why URLs dominate the screenshot side

The screenshot capture omits the browser's address bar. A missing URL counts as a loss only when two things hold: the rubric requires the exact website, page, record, or endpoint, and the W8 record has that URL. Visible branding does not count. URLs in the shared action history do not count either. The evidence has to be inside the record itself.

Under that rule, URLs account for 117 of the 151 screenshot losses (77.5%) and none of the 5 W8 losses. The URL-excluded rows above recalculate the saved findings with the same rubric and the same audit. They describe the non-URL losses across the full audited set.

## Where evidence disappeared

Each confirmed loss gets one primary type, so the columns add up without double counting. Two criteria lose different items on both sides. So the 151 and the 5 cover 154 distinct criteria across 91 tasks.

| Loss type | Screenshot | W8 DOM |
| :--- | ---: | ---: |
| Exact text and values | 16 | 1 |
| URLs | 117 | 0 |
| Control states | 0 | 1 |
| Table entries | 4 | 0 |
| Label–value links | 0 | 3 |
| Capture omissions | 14 | 0 |
| **All categories** | **151** | **5** |
| Non-URL subtotal | 34 | 5 |

<Caption>Exhibit 2 — Losses by type across all 100 tasks. Paired outcomes per criterion: 149 screenshot only, 3 W8 only, 2 both, 488 neither.</Caption>

### Six findings from the criterion table

Each one links to the saved audit record in the published dataset. Task 19 is reproduced from the recordings themselves.

<TaskNineteenPair />

- **Task 19, C3, exact release date.** The W8 record ties the timestamp “02 Sep 17:40” to the latest release. The screenshots keep only “released this 2 weeks ago”. [Audit](https://huggingface.co/datasets/WootzappLab/browser-agent-tasks/blob/main/evaluation/task_19/20261021T040737Z/evidence_audit.json#L1112) · [Screenshot run](https://huggingface.co/datasets/WootzappLab/browser-agent-tasks/tree/main/trajectories/data-ss/task_19) · [W8 run](https://huggingface.co/datasets/WootzappLab/browser-agent-tasks/tree/main/trajectories/data-dom/task_19)
- **Task 24, C0 to C2, the thirtieth story.** Screenshots of the Hacker News front page stop at rank 29. The W8 record keeps story 30, its cbc.ca domain, and the “More” link after it. One capture gap, three affected criteria. [Audit](https://huggingface.co/datasets/WootzappLab/browser-agent-tasks/blob/main/evaluation/task_24/20261021T040737Z/evidence_audit.json#L579)
- **Task 75, C0, exact endpoint URL.** The W8 record ties the Black Lotus card response to the exact Scryfall API URL. Neither screenshot shows that URL. [Audit](https://huggingface.co/datasets/WootzappLab/browser-agent-tasks/blob/main/evaluation/task_75/20261021T040737Z/evidence_audit.json#L623)
- **Task 66, C1, rendered notation.** The screenshot shows the Fibonacci recurrence with rendered subscripts. The W8 record flattens it to plain text. A W8 loss. [Audit](https://huggingface.co/datasets/WootzappLab/browser-agent-tasks/blob/main/evaluation/task_66/20261021T040737Z/evidence_audit.json#L720)
- **Task 02, C2, a label without its value.** The screenshot links “Published by” to “Electronic Arts”. The final W8 record shows the label without the value. A W8 loss. [Audit](https://huggingface.co/datasets/WootzappLab/browser-agent-tasks/blob/main/evaluation/task_02/20261021T040737Z/evidence_audit.json#L1199)
- **Task 56, C1, unchecked filters.** The screenshots show the “5 years” radio button and the “Review” checkbox empty. The W8 record lists the labels without their states. A W8 loss, on a criterion where the screenshots lack the results-page URL too. [Audit](https://huggingface.co/datasets/WootzappLab/browser-agent-tasks/blob/main/evaluation/task_56/20261021T040737Z/evidence_audit.json#L1254)

[All 154 findings, with citations into the saved audits](https://github.com/wootzapp/w8-domdiff-bench/blob/w8-reproducible/docs/technical-report.md#source-evidence-gaps-by-task-and-criterion)

## Same run. Same rubric. Different evidence.

1. **Record once.** The acting model works from W8's DOM text and executable references. Each task yields one run: a list of actions and the browser states between them. W8 records a screenshot at each state as well.
2. **Keep both views.** Screenshots and DOM-diff Optimized come from the same run, aligned by action step.
3. **Freeze the rubric.** Both verifiers get the same task, action history, final answer, frozen rubric, and scoring controls.
4. **Score both.** A screenshot verifier and a DOM verifier judge the same criteria from their own evidence.
5. **Audit the sources.** A second model checks whether each criterion's required facts exist in each record. WootzApp staff verify each finding.
6. **Count one-sided gaps.** A criterion counts against a record only when the evidence is missing there and present in the other.

| Role | Model or reviewer |
| :--- | :--- |
| Browser-action generation | gpt-5.2 |
| Rubric generation and evidence judging, both verifiers | gpt-5.2 |
| Action and validity judging, both verifiers | o4-mini |
| Evidence audit and adjudication | gpt-5.6-sol |
| Verification of audit findings | Internal WootzApp employees |

<Caption>Exhibit 3 — Models and reviewers, from the report's provenance table. Each evaluation's run manifest records its exact setup.</Caption>

[Read the exact metric definition](https://github.com/wootzapp/w8-domdiff-bench/blob/w8-reproducible/docs/technical-report.md#paired-source-evidence-loss)

:::note[Scope of the metric]

The metric covers one-sided evidence loss. It does not cover evidence missing from both records. Agent success, answer correctness, training gains, and visual tasks are measured apart.

The confidence intervals are exploratory. They assume independent criteria. They do not adjust for correlation within a task or for audit error. The report lists 12 tasks with website access blockers and 12 recorded execution failures. Those two sets overlap, and both are separate from evidence loss. The full set stays at 642 criteria.

:::

## Smaller representation, richer context

The model-facing W8 record of one captured state averages 5.87 KiB in the evaluated set. The report sets it beside the two denser forms W8 keeps for each state.

| Record | File | Mean size per state |
| :--- | :--- | ---: |
| DOM-diff Optimized | `dom_model.txt`, compact model-facing text | **5.87 KiB** |
| Text-dense DOM | `dom_full.txt`, detailed readable text | 44.88 KiB |
| Full DOM | `dom.json`, structured snapshot | 191.32 KiB |

<EvidenceBars
  max={200}
  ticks={[0, 50, 100, 150, 200]}
  rows={[
    {label: "DOM-diff Optimized", value: 5.87, display: "5.87 KiB", accent: true},
    {label: "Text-dense DOM", value: 44.88, display: "44.88 KiB"},
    {label: "Full DOM snapshot", value: 191.32, display: "191.32 KiB"},
  ]}
  caption='Exhibit 4 — Reported mean stored size per state, KiB (1 KiB = 1,024 bytes). Token counts depend on the tokenizer.'
/>

> This compares stored size per state. Evidence kept, task success, token use, verifier cost, and training time are measured apart.

## A better reward starts with a better record

A model judge cannot recover a value that was never saved. A deterministic checker needs the relevant state captured in the first place.

W8's record cuts missing browser evidence by a measured amount. The audit shows where DOM text falls short too: rendered notation, control states, and label–value links. The next step is to turn the preserved evidence into **task-specific checks** for state and outcome changes. Screenshots and human or model judgment stay where visual criteria demand them.

| Step | Status |
| :--- | :--- |
| Evidence capture | Measured on 642 criteria |
| Cross-model and cross-representation ablation | Planned in the report |
| Criterion checks | Next engineering step |
| Trusted rewards | Next engineering step |
| Evaluations and training | Next engineering step |

## Inspect the evidence. Reproduce the result.

- [Technical report: method, definitions, and the 154 findings](https://github.com/wootzapp/w8-domdiff-bench/blob/w8-reproducible/docs/technical-report.md)
- [Results index and summary.json](https://github.com/wootzapp/w8-domdiff-bench/tree/w8-reproducible/results)
- [The six loss types](https://github.com/wootzapp/w8-domdiff-bench/blob/w8-reproducible/docs/evidence-categories.md)
- [Verifier, audit scripts, and how to run the comparison](https://github.com/wootzapp/w8-domdiff-bench/tree/w8-reproducible/w8bench/verifier)
- [Saved evaluations: frozen rubrics, verifier results, and audits](https://huggingface.co/datasets/WootzappLab/browser-agent-tasks/tree/main/evaluation)
- [Browser Agent Tasks dataset](/research/browser-agent-tasks)
- [Openrind Shell OpenShell runtime source](https://github.com/openrind/openrind-shell/tree/nemo)

Bring a workflow where your traces or screenshots fail to explain what happened. We will compare the evidence the harness emits with what the runtime and the browser can keep. [Discuss a benchmark run](https://calendar.app.google/jjLE5C9TczR2vhHe9).
