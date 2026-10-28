---
id: intro
title: W8-RL Overview
slug: /
sidebar_position: 1
---
W8-RL is a rollout framework for web-agent RL, distributed with Ray. It uses a real browser (WootzApp) to produce **ChromiumRL visual and semantic rewards**. It runs in Docker only.

W8-RL offers **three ways in**, all on the same EnvActor core:

- **SkyRL** (BaseTextEnv interface, Ray-backed)
- **OpenEnv** (HTTP via Ray Serve + FastAPI)
- **Tinker** (token-based RL training via Tinker Cookbook)

All paths share the same execution core:

```text
Task container -> EnvActor -> emulator browser -> ChromiumRL signals -> reward bundle
```

:::caution Docker-only execution
Everything must run in Docker. Do not run Python or tests on the host.
Use the provided scripts or `docker compose run`.
:::

For a quick start, see [Getting Started](getting-started/quickstart).

## Tested with

- Ray 2.40.0
- Docker 24+

## W8-RL Differentiators

What W8-RL does well:

| Capability | W8-RL Approach | Benefit |
|------------|----------------|---------|
| **Async rollouts** | FairScheduler with no synchronization barriers | No GPU idle time from slow rollouts |
| **Queue scheduling** | Per-environment OperationDispatcher with separate queues by operation type | Handles long-tail latency; navigation can't block screenshots |
| **Batch collection** | Timeout OR batch_size triggers | Smooth GPU use without CPU spikes |
| **CDP resilience** | 8-state connection machine with automatic reconnection | Survives flaky browser connections |
| **Browser isolation** | Full emulator pool with per-rollout isolation | No cross-talk between parallel rollouts |
| **ChromiumRL signals** | Paint time, CLS, LCP, FCP from browser internals | Rewards that see performance as well as looks |
| **GPU pipelining** | `screenshot_queue_size=4` streams observations | Overlaps screenshot capture with inference |
| **GRPO grouping** | K trajectories per task with relative advantage | Lower variance within task groups |

### Long-Tail Latency Handling

Browser runs have long-tail latency. Some rollouts take far longer than others while GPUs sit idle. W8-RL handles this in three ways:

1. **Per-task timeout**: stuck rollouts get killed.
2. **Non-blocking threads**: while one rollout hangs, other threads use the GPU.
3. **Intervention only when needed**: a person steps in only when all threads finish while a few hang, or when one thread runs far too long.

## Improvement Roadmap

Planned work:

| Gap | Priority | Approach | Status |
|-----|----------|----------|--------|
| **Difficulty-aware horizons** | High | `max_steps = 10 * ceil(difficulty/3)` based on rubric fact count | **Implemented** |
| **Action repetition detection** | High | Perceptual hash (imagehash.phash); terminate after 3 consecutive repeats | **Implemented** |
| **Rubric-based evaluation** | Medium | LLM-generated fact groups with partial credit scoring | **Implemented** |
| **Episode memory** | Medium | Ray Actor-based KV store for cross-step information synthesis | Planned |
| **Task decomposition** | Deferred | Generate subtasks from fact group subsets for denser rewards | Research |
| **Task scale expansion** | Deferred | Aggregate benchmarks + synthetic generation (target: 100K+ tasks) | Research |

### Difficulty Classification

Tasks are grouped by fact count, the number of criteria in the rubric:

```
tasks/difficulty/
├── 1/              # Trivial (1 fact, max 10 steps)
├── 2-3/            # Easy (max 10 steps)
├── 4-6/            # Medium (max 20 steps)
└── 7+/             # Hard (max 30 steps)
```

This allows glob-based sharding (`tasks/difficulty/[1-3]/**/*.json`) and sets the step budget per tier.

## Next Steps

- Read the Architecture overview: [Architecture Overview](./architecture/overview)
- Run a Design2Code task: [Design2Code Runs](./guides/design2code)
- Review troubleshooting: [Troubleshooting](./operations/troubleshooting)
