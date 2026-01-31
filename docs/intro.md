---
id: intro
title: W8-RL Overview
sidebar_position: 1
---
W8-RL is a Ray-distributed rollout framework for web-agent RL. It uses a real browser (WootzApp) to generate **ChromiumRL visual + semantic rewards** and runs entirely in Docker.

W8-RL exposes **three compatibility paths** on top of the same EnvActor core:

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

If you want a quick start, see [Getting Started](getting-started/quickstart).

## Tested with

- Ray 2.40.0
- Docker 24+

## W8-RL Differentiators

What W8-RL does well compared to other web-agent RL systems:

| Capability | W8-RL Approach | Benefit |
|------------|----------------|---------|
| **Async rollouts** | FairScheduler with no synchronization barriers | Eliminates GPU idle time from straggler rollouts |
| **Queue scheduling** | Per-environment OperationDispatcher with separate queues by operation type | Handles long-tail latency; navigation can't block screenshots |
| **Batch collection** | Timeout OR batch_size triggers | Smooth GPU utilization without CPU spikes |
| **CDP resilience** | 8-state connection machine with automatic reconnection | Production-grade reliability for flaky browser connections |
| **Browser isolation** | Full emulator pool with per-rollout isolation | No cross-contamination between parallel trajectories |
| **ChromiumRL signals** | Paint time, CLS, LCP, FCP from browser internals | Performance-aware rewards beyond visual similarity |
| **GPU pipelining** | `screenshot_queue_size=4` streams observations | Overlaps screenshot capture with inference |
| **GRPO grouping** | K trajectories per task with relative advantage | Variance reduction within task groups |

### Long-Tail Latency Handling

Browser simulations have brutal long-tail latency—some rollouts take far longer than others while GPUs sit idle waiting. W8-RL addresses this:

1. **Per-task timeout**: Stuck rollouts get killed, not waited on
2. **Non-blocking threads**: While one rollout hangs, other threads utilize the GPU
3. **Intervention only when needed**: Manual intervention only when (a) all threads finish while few still hang, or (b) one thread takes unexpectedly long

## Improvement Roadmap

Planned enhancements based on research analysis:

| Gap | Priority | Approach | Status |
|-----|----------|----------|--------|
| **Difficulty-aware horizons** | High | `max_steps = 10 * ceil(difficulty/3)` based on rubric fact count | **Implemented** |
| **Action repetition detection** | High | Perceptual hash (imagehash.phash); terminate after 3 consecutive repeats | **Implemented** |
| **Rubric-based evaluation** | Medium | LLM-generated fact groups with partial credit scoring | **Implemented** |
| **Episode memory** | Medium | Ray Actor-based KV store for cross-step information synthesis | Planned |
| **Task decomposition** | Deferred | Generate subtasks from fact group subsets for denser rewards | Research |
| **Task scale expansion** | Deferred | Aggregate benchmarks + synthetic generation (target: 100K+ tasks) | Research |

### Difficulty Classification

Tasks are organized by fact count (total evaluation criteria in rubric):

```
tasks/difficulty/
├── 1/              # Trivial (1 fact, max 10 steps)
├── 2-3/            # Easy (max 10 steps)
├── 4-6/            # Medium (max 20 steps)
└── 7+/             # Hard (max 30 steps)
```

This enables glob-based parallel sharding (`tasks/difficulty/[1-3]/**/*.json`) and natural horizon control.

## Next Steps

- Read the Architecture overview: [Architecture Overview](../architecture/overview)
- Run a Design2Code task: [Design2Code Runs](../guides/design2code)
- Review troubleshooting: [Troubleshooting](../operations/troubleshooting)
