---
title: Tinker Compatibility
sidebar_position: 3
---

W8-RL includes a Tinker adapter for token-based RL training using the Tinker Cookbook API.
It wraps EnvActor directly and runs inside `ray-worker`.

## How it works

- EnvActor provides `reset_external` / `step_external`
- `TinkerEnvAdapter` converts ObsRef to Tinker tokens
- GRPO training uses group rollouts and per-group advantage centering

## Run rollout (no training)

```bash
./scripts/run_design2code_tinker.sh \
  --task-dir tasks --limit 3 \
  --policy tinker \
  --model Qwen/Qwen3-4B-Instruct-2507 \
  --episodes 1 \
  --max-tokens 2048 \
  --max-total-tokens 3000000
```

## Run training

See [Tinker RL Training](../guides/tinker-training).
