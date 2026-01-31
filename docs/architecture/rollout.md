---
title: Rollout Algorithms
sidebar_position: 2
---

W8-RL provides multiple rollout schedulers to maximize throughput and task diversity.
These are configured at runtime via `--scheduler-type` and `--horizon-policy`.

## Schedulers

- **FIFO**: baseline queue
- **SHDS**: short-horizon diversified scheduler
- **GRPO**: group-based sampling

## Horizon policies

- **Fixed**: constant `max_steps`
- **Bucketed**: different `max_steps` per difficulty bucket

## Early stop

Early stop policies terminate hopeless episodes early based on browser signals.
This increases throughput without reducing signal quality.

## Where it lives

- `w8_rl/rollout/schedulers/`
- `w8_rl/rollout/horizon.py`
- `w8_rl/rollout/early_stop.py`

## Example

```bash
python -m w8_rl.rollout.coordinator_main \
  --scheduler-type shds \
  --horizon-policy bucketed \
  --max-episodes 10
```

All rollout execution still runs inside Docker.
