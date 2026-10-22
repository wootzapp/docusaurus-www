---
title: Let Execution Do the Teaching
slug: let-execution-do-the-teaching
date: 2026-09-23
dateLabel: September 2026
kind: Preprint
description: "Post-training a coding model with execution as the grader: compiler errors and failing tests build the repair practice, and executable checks score every answer."
subtitle: How far can we push a coding model when execution, not humans, does the grading?
byline: Abhishek Mishra and Sandeep Srinivasa
abstract: |
  Improving a coding model is a sequence of decisions: find the limiting behaviour, create useful practice, and decide which attempts deserve reinforcement. This study grounds all three in execution. Starting from GLM-4.7-Flash, it combines whole-file supervised fine-tuning, targeted C++ repair curricula, group-relative reinforcement learning, and verifiers that turn program behaviour into structured rewards.

  The strongest reported configuration reaches 45.2% success in the first test round and 61.5% within two rounds, from 1.9% and 17.3% for the base model. That configuration uses a selected cohort of four evaluation trials and shares six tasks with the training set; the scope note below carries the full qualifications.
stats:
  - value: "26"
    label: C++ tasks in Fixed26
  - value: "104"
    label: Task-trial trajectories per configuration
  - value: 45.2%
    label: First-round success, strongest configuration
  - value: 61.5%
    label: Completion within two rounds
sources:
  - label: Study
    href: https://github.com/wootzapp/let-execution-do-the-teaching/blob/main/study.md
  - label: Repository
    href: https://github.com/wootzapp/let-execution-do-the-teaching
result: 45.2% first-round, 61.5% within two rounds
facts: [26 C++ tasks, GRPO + LoRA, GLM-4.7-Flash]
thumbnail: ledt
citation: |
  @misc{mishra2026execution,
    title  = {Let Execution Do the Teaching},
    author = {Mishra, Abhishek and Srinivasa, Sandeep},
    year   = {2026},
    month  = sep,
    note   = {Preprint},
    url    = {https://github.com/wootzapp/let-execution-do-the-teaching/blob/main/study.md}
  }
---

## Results

Mean tasks solved, out of 26. Each configuration ran the full suite four times. First round counts tasks that pass their first test round; two rounds counts tasks solved by the end of the second round, after test feedback.

<EvidenceBars
  max={26}
  ticks={[0, 13, 26]}
  rows={[
    {label: "GLM-4.7-Flash base · first round", value: 0.5, display: "0.5"},
    {label: "GLM-4.7-Flash base · two rounds", value: 4.5, display: "4.5"},
    {label: "Phone Number, iter 14 · first round", value: 11.25, display: "11.25", accent: true},
    {label: "Phone Number, iter 14 · two rounds", value: 15.25, display: "15.25", accent: true},
    {label: "Generalized C++, iter 14 · first round", value: 11.75, display: "11.75", accent: true},
    {label: "Generalized C++, iter 14 · two rounds", value: 16, display: "16", accent: true},
  ]}
  caption='Exhibit 1 — Figure 2 of the study. Generalized C++ is the selected best-four cohort.'
/>

| Configuration | Prompt contract | First round | Two rounds | Recovery |
| :--- | :--- | ---: | ---: | ---: |
| GLM-4.7-Flash base | original prompts | 0.50 (1.9%) | 4.50 (17.3%) | 16/102 (15.7%) |
| Luna reference | original prompts, separately hosted | 6.25 (24.0%) | 16.75 (64.4%) | 42/79 (53.2%) |
| SFT v5 | fixed26-contract | 6.00 (23.1%) | 10.25 (39.4%) | 17/80 (21.2%) |
| Synth v1, epoch 50 | fixed26-contract-v2 | 9.50 (36.5%) | 12.00 (46.2%) | 10/66 (15.2%) |
| Execution-midband RL v1 | fixed26-contract-v2 | 8.25 (31.7%) | 13.00 (50.0%) | 19/71 (26.8%) |
| Execution-midband RL v2 | fixed26-contract-v2 | 10.50 (40.4%) | 14.50 (55.8%) | 16/62 (25.8%) |
| Phone Number, iter 14 | fixed26-contract-v2 | 11.25 (43.3%) | 15.25 (58.7%) | 16/59 (27.1%) |
| **Generalized C++, iter 14 (selected cohort)** | fixed26-contract-v2 | **11.75 (45.2%)** | **16.00 (61.5%)** | 17/57 (29.8%) |

<Caption>Exhibit 2 — Release-reported means out of 26 and conditional recovery (Table 4). Recovery is the share of first-round failures solved in round two. The selected cohort is the best four of the Generalized C++ trials; six of its training tasks are in Fixed26. 95% task-bootstrap intervals: Phone Number 7.5–15 first round and 11–19.25 two rounds; Generalized C++ 8–15.5 and 11.75–20.</Caption>

## Method

Execution checks both the exercise and the answer. For the phone-number validation exercise, the verifier compiles each candidate against the required C++17 interface and runs twelve Boolean checks in four groups: valid-input behaviour, formatting and rejection rules, boundary cases, and combined interface checks. The twelve outcomes become one reward:

```text
R = (1/12) · Σ (2bₖ − 1),  k = 1 … 12
```

All twelve passing gives +1, ten passing gives +2/3, none passing gives −1. The verifier writes the twelve outcomes to the test log, and the reward parser accepts them only when the harness's completion marker, carrying a fresh random token for the run, follows them directly.

1. **Construct.** Compiler diagnostics and failing tests name the failure. The task builder turns each one into a repair exercise and validates the exercise with a reference solution and faulty controls before it is used.
2. **Train.** A whole-file supervised warm start, then GRPO: sample candidate programs, compile and test them, score the behaviour, and update a LoRA adapter on the relative rewards.
3. **Evaluate.** Saved checkpoints run the 26 C++ tasks of Fixed26 through Aider, four trials each: 104 task-trial trajectories per configuration, scored on first-round success and completion within two rounds.

## Training record

The phone-number validation run, as recorded (Table 7).

| Setting | Recorded value |
| :--- | :--- |
| Base model and adaptation | GLM-4.7-Flash; LoRA rank 16, alpha 32 |
| Hardware | 8 × H100 80 GB; BF16; tensor parallel 4; expert parallel 8 |
| Rollout and batch | 8 prompts × 32 samples; global batch 256; 20 GRPO updates |
| Optimization | Learning rate 3 × 10⁻⁵; warmup fraction 0.1; KL coefficient 0.1 |
| Scored checkpoint | Phone Number adapter, iteration 14 |

## Task-level outcomes

First-round successes out of four trials (Table 5).

| Task | Synth v1 | Phone Number |
| :--- | ---: | ---: |
| Phone Number | 1 / 4 | 4 / 4 |
| Parallel Letter Frequency | 0 / 4 | 3 / 4 |
| Gigasecond | 3 / 4 | 0 / 4 |
| Sublist | 3 / 4 | 1 / 4 |

<Caption>Exhibit 3 — Phone Number and Parallel Letter Frequency improve across the training lineage; Gigasecond and Sublist decline.</Caption>

:::note[Scope of the results]

- These are development-suite evaluations with prompt contracts that differ between configurations; the comparisons combine model updates with changes to the evaluation setup.
- The Generalized C++ result uses a selected best-four cohort and has six training task IDs in common with Fixed26.
- Luna is a separately hosted reference evaluation under its own setup.
- Task-level results include regressions as well as gains; the intervals above show the variation across this small suite.

:::

## Artifacts

Adapters, datasets, and evaluation archives, hosted under WootzappLab on Hugging Face. The repositories are private at the time of writing; [Appendix B.3 of the study](https://github.com/wootzapp/let-execution-do-the-teaching/blob/main/study.md#b3-data-and-model-artifacts) lists them.

- Phone-number validation adapter and run archive (model)
- Multi-task C++ adapter and selected evaluations (model)
- Supervised training dataset, Synth v1 (dataset)
- Checkpoint evaluation archive, Synth v1 (dataset)

Run manifests identify the datasets, adapters, evaluation archives, and launch configurations behind each reported experiment, and the repository includes audit scripts that recompute the SFT v5 and Phone Number results.
