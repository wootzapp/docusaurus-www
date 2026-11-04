---
title: W8 DOM-diff Bench
slug: w8-domdiff-bench
date: 2026-11-04T12:00:00Z
kind: Benchmark
description: What screenshots lose against W8 page state, measured on three recorded runs of 100 browser tasks.
subtitle: "Evidence Gaps in Browser-Agent Evaluation: A Paired Audit of Screenshots and DOM"
byline: WootzApp Research
abstract: |
  Most agent evaluation starts after the run is captured. We ask an earlier question: what did the recording fail to keep?

  We recorded 100 public-web tasks three times and kept two records of each run: screenshots, and page state from W8, our Chromium browser. On the 97 tasks with audits in all three runs, 619 rubric criteria per run, screenshots lacked required evidence on 61 criteria per run on average (9.85%). W8 lacked it on 13 (2.10%). That is a paired difference of 7.75 points and a relative reduction of 78.69%.

  One model inventories the evidence, a second adjudicates, and WootzApp staff review the findings. The counts measure whether evidence exists. Task success and verifier accuracy are measured apart.
stats:
  - value: "100"
    label: Browser tasks, recorded three times
  - value: "619"
    label: Matched rubric criteria per run
  - value: "9.85%"
    label: Screenshot losses · 61 per run
  - value: "2.10%"
    label: W8 losses · 13 per run
sources:
  - label: Paper
    href: https://github.com/wootzapp/w8-domdiff-bench/blob/w8-reproducible/README.md
  - label: Technical report
    href: https://github.com/wootzapp/w8-domdiff-bench/blob/w8-reproducible/docs/technical-report.md
  - label: Results
    href: https://github.com/wootzapp/w8-domdiff-bench/tree/w8-reproducible/results
  - label: Dataset
    href: https://huggingface.co/datasets/WootzappLab/browser-agent-tasks
result: "9.85% → 2.10% missing evidence"
facts: [100 tasks, 3 runs, 619 criteria per run]
thumbnail: bench
citation: |
  @techreport{wootzapp2026w8domdiffbench,
    title       = {Evidence Gaps in Browser-Agent Evaluation: A Paired Audit of Screenshots and DOM},
    author      = {{WootzApp}},
    institution = {WootzApp},
    year        = {2026},
    month       = nov,
    note        = {Revised November 4, 2026. Branch w8-reproducible.},
    url         = {https://github.com/wootzapp/w8-domdiff-bench}
  }
---

## 78.69% fewer evidence losses than screenshots

A required value can sit outside the captured viewport. A list can end past the last frame. A control's state can be hard to read from pixels. In each case a screenshot verifier works from partial evidence. On the same runs and the same frozen rubrics, W8's DOM-diff Optimized record kept the required evidence far more often.

| Recorded run | Tasks | Criteria | Screenshot losses | W8 DOM losses |
| :--- | ---: | ---: | ---: | ---: |
| run_1 | 97 | 619 | 51 (8.24%) | **16 (2.58%)** |
| run_2 | 97 | 619 | 62 (10.02%) | **15 (2.42%)** |
| run_3 | 97 | 619 | 70 (11.31%) | **8 (1.29%)** |
| Mean per run | 97 | 619 | 61.00 (9.85%) | **13.00 (2.10%)** |
| Listed access-blocked tasks excluded, mean | 88 | 572 | 60.00 (10.49%) | **11.00 (1.92%)** |

<Caption>Exhibit 1 — Criteria with evidence missing on one side, per run and on average. Lower is better. The matched panel is the 97 tasks with a paired audit in all three runs. The last row is an exploratory subset, defined after the recordings were inspected.</Caption>

<EvidenceBars
  max={15}
  ticks={[0, 5, 10, 15]}
  unit='%'
  rows={[
    {label: "Screenshot recording, mean of three runs", value: 9.85, display: "9.85%", detail: "61/619"},
    {label: "W8 DOM-diff Optimized, mean of three runs", value: 2.1, display: "2.10%", detail: "13/619", accent: true},
  ]}
  caption='Shared 0–15% axis. 95% intervals: screenshots 6.59–13.48%, W8 0.88–3.62%. Intervals resample tasks, then runs within tasks, with audit labels held fixed.'
/>

Paired difference: 7.75 points (95% interval 4.07–11.71). Relative reduction from the mean counts: (61 − 13) / 61 = 78.69% (57.25–91.62%).

## Where evidence disappeared

Each confirmed loss gets one primary type. The counts below are means per run on the matched panel, so they can be fractions. Across the three runs the audits flag 219 run-and-criterion observations, covering 118 distinct criteria across 49 tasks.

| Loss type | Screenshot | W8 DOM |
| :--- | ---: | ---: |
| Exact text and values | 25.00 | 5.67 |
| URLs | 0.33 | 1.00 |
| Control states | 0.67 | 0.67 |
| Table entries | 19.00 | 0.00 |
| Label–value links | 3.33 | 4.00 |
| Capture omissions | 12.67 | 1.67 |
| **All types** | **61.00** | **13.00** |

<Caption>Exhibit 2 — Mean losses by type per run. Paired outcomes per criterion, mean per run: 60 screenshot only, 12 W8 only, 1 both, 546 neither. Rows are rounded on their own; totals use unrounded counts.</Caption>

The URL row is small on both sides because of the audit rule. The task's start URL and the executed action history are shared inputs, credited to both records. An absent address bar alone is no loss. A page field that holds a URL still counts, and that is where the W8 side loses one.

### Five findings from the saved audits

Each one links to the saved audit record in the published dataset. The first is reproduced from the recordings themselves.

<RecordPair />

- **run_1, task_08, C2, publication date.** The W8 record holds “dgozman released this 14 Oct 11:51”, and the releases list one step earlier holds “v1.64.1 Latest Oct 14, 2026”. The screenshots show “released this 2 weeks ago”. [Audit](https://huggingface.co/datasets/WootzappLab/browser-agent-tasks/blob/main/evaluations/run_1/task_08/batch_01/evidence_audit.json) · [Screenshot run](https://huggingface.co/datasets/WootzappLab/browser-agent-tasks/tree/main/trajectories/run_1/data-ss/task_08) · [W8 run](https://huggingface.co/datasets/WootzappLab/browser-agent-tasks/tree/main/trajectories/run_1/data-dom/task_08)
- **run_1, task_35, C2 to C4, a cropped row.** The W8 record holds the Linux/amd64 size row for the third Docker tag. The screenshots crop that row. One capture gap, three affected criteria. [Audit](https://huggingface.co/datasets/WootzappLab/browser-agent-tasks/blob/main/evaluations/run_1/task_35/batch_01/evidence_audit.json)
- **task_37, C4, all three runs, a loss on each side.** The W8 record keeps availability checkmarks where the screenshots show hollow boxes. The screenshots keep “Golden Gate” capitalized where the W8 record lowercases it. Each side loses a different required item. [Audit](https://huggingface.co/datasets/WootzappLab/browser-agent-tasks/blob/main/evaluations/run_1/task_37/batch_01/evidence_audit.json)
- **run_1, task_02, C2, a label without its value.** The screenshot links “Published by” to “Microsoft Studios”. The W8 record drops that link. A W8 loss. [Audit](https://huggingface.co/datasets/WootzappLab/browser-agent-tasks/blob/main/evaluations/run_1/task_02/batch_01/evidence_audit.json)
- **run_1, task_48, C0, a checked box.** The screenshots show the Accounts checkbox checked. The W8 record lists the control without its state. A W8 loss. [Audit](https://huggingface.co/datasets/WootzappLab/browser-agent-tasks/blob/main/evaluations/run_1/task_48/batch_01/evidence_audit.json)

[The full criterion table, with citations into the saved audits](https://github.com/wootzapp/w8-domdiff-bench/blob/w8-reproducible/docs/technical-report.md#source-evidence-gaps-by-task-and-criterion)

## Verifier misses are a separate count

Fewer source losses do not mean fewer grader mistakes. On the matched panel the audits flag 54.67 screenshot verifier misses per run (8.83%) and 63.33 DOM verifier misses (10.23%). A miss is available evidence that a verifier overlooked or misread. The two counts measure different things: what the record kept, and what the grader did with it. Neither is a verifier accuracy score. That would need independent correctness labels.

## Same run. Same rubric. Different evidence.

1. **Record three times.** The acting model, gpt-5.6, works from W8's DOM text and executable references. Each task runs three times. Each run yields a list of actions and the browser states between them, with a screenshot at each state.
2. **Keep both views.** Screenshots and DOM-diff Optimized come from the same run, aligned by action step.
3. **Freeze the rubric.** Both verifiers get the same task, action history, final answer, frozen rubric, and scoring controls. One frozen rubric serves all three runs of a task.
4. **Score both.** A screenshot verifier and a DOM verifier judge the same criteria from their own evidence.
5. **Audit the sources.** One model inventories the evidence for each criterion. A second model adjudicates. WootzApp staff review the findings.
6. **Count one-sided gaps, then average.** A criterion counts against a record only when the evidence is missing there and present in the other. Counts are averaged over the three runs on the matched panel.

| Role | Model or reviewer |
| :--- | :--- |
| Browser-action generation, from DOM text | gpt-5.6 |
| Rubric generation and evidence judging, both verifiers | gpt-5.2 |
| Action and validity judging, both verifiers | gpt-5.6-terra |
| Evidence inventory | gpt-5.6-sol |
| Adjudication | gemini-3.1-pro-preview |
| Internal review | WootzApp employees |

<Caption>Exhibit 3 — Roles in the reported workflow, from the paper. Each audit records the requested and returned model IDs, the settings, and the source fingerprints.</Caption>

[Read the exact metric definition](https://github.com/wootzapp/w8-domdiff-bench/blob/w8-reproducible/README.md#appendix-a-formal-definitions-and-equations)

:::note[Scope of the metric]

The metric covers one-sided evidence loss. It does not cover evidence missing from both records. Agent success, answer correctness, verifier accuracy, and training gains are measured apart.

The intervals resample tasks, then runs within tasks, with the audit labels held fixed. They do not cover annotation error. The findings are model-generated, with internal review as a separate role. The matched panel covers 97 of the 100 tasks. Three tasks have a run with no captured state; they stay out of the panel and are never counted as zero loss. The access-blocker subset was defined after the recordings were inspected and is exploratory.

:::

## Smaller representation, richer context

The model-facing W8 record of one captured state averages 5.25 KiB across the 2,592 states in all 300 retained recordings. The paper sets it beside the two denser forms W8 keeps for each state.

| Record | File | Mean size per state |
| :--- | :--- | ---: |
| DOM-diff Optimized | `dom_model.txt`, compact model-facing text | **5.25 KiB** |
| Text-dense DOM | `dom_full.txt`, detailed readable text | 47.26 KiB |
| Full DOM | `dom.json`, structured snapshot | 206.45 KiB |

<EvidenceBars
  max={210}
  ticks={[0, 50, 100, 150, 200]}
  rows={[
    {label: "DOM-diff Optimized", value: 5.25, display: "5.25 KiB", accent: true},
    {label: "Text-dense DOM", value: 47.26, display: "47.26 KiB"},
    {label: "Full DOM snapshot", value: 206.45, display: "206.45 KiB"},
  ]}
  caption='Exhibit 4 — Mean stored size per state, KiB (1 KiB = 1,024 bytes), over 2,592 captured states. Files are weighted equally. Token counts depend on the tokenizer.'
/>

> This compares stored size per state. Evidence kept, task success, token use, verifier cost, and training time are measured apart.

## A better reward starts with a better record

A model judge cannot recover a value that was never saved. A deterministic checker needs the relevant state captured in the first place.

W8's record cuts missing browser evidence by a measured amount. The audit shows where DOM text falls short too: label–value links, control states, and some exact values. The next step is to turn the preserved evidence into **task-specific checks** for state and outcome changes. Screenshots and human or model judgment stay where visual criteria demand them.

| Step | Status |
| :--- | :--- |
| Evidence capture | Measured on three runs, 619 criteria each |
| Renderer and policy ablations | Future work in the paper |
| Criterion checks | Next engineering step |
| Trusted rewards | Next engineering step |
| Evaluations and training | Next engineering step |

## Inspect the evidence. Reproduce the result.

- [Paper: method, results, and appendices](https://github.com/wootzapp/w8-domdiff-bench/blob/w8-reproducible/README.md)
- [Technical report: pipeline, equations, and the criterion table](https://github.com/wootzapp/w8-domdiff-bench/blob/w8-reproducible/docs/technical-report.md)
- [Results index, summary.json, and the category table](https://github.com/wootzapp/w8-domdiff-bench/tree/w8-reproducible/results)
- [The six loss types](https://github.com/wootzapp/w8-domdiff-bench/blob/w8-reproducible/docs/evidence-categories.md)
- [Recorded-run aggregator: recompute the means offline, no model calls](https://github.com/wootzapp/w8-domdiff-bench/blob/w8-reproducible/w8bench/verifier/aggregate_runs.py)
- [Saved evaluations: frozen rubrics, verifier results, and audits](https://huggingface.co/datasets/WootzappLab/browser-agent-tasks/tree/main/evaluations)
- [Browser Agent Tasks dataset](/research/browser-agent-tasks)
- [Openrind Shell OpenShell runtime source](https://github.com/openrind/openrind-shell/tree/nemo)

Bring a workflow where your traces or screenshots fail to explain what happened. We will compare the evidence the harness emits with what the runtime and the browser can keep. [Discuss a benchmark run](https://calendar.app.google/jjLE5C9TczR2vhHe9).
