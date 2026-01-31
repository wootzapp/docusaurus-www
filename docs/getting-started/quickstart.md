---
title: Quickstart
sidebar_position: 3
---

## Design2Code via SkyRL (OpenHands)

```bash
./scripts/run_design2code_skyrl.sh design2code_0000 \
  --episodes 1 \
  --policy openhands
```

## Design2Code via OpenEnv (OpenHands)

```bash
./scripts/run_design2code_openenv.sh design2code_0000 --use-openhands
```

## Design2Code via Tinker (rollout only)

```bash
./scripts/run_design2code_tinker.sh --task-dir tasks --limit 3 \
  --policy tinker \
  --model Qwen/Qwen3-4B-Instruct-2507 \
  --episodes 1 \
  --max-tokens 2048 \
  --max-total-tokens 3000000
```

Outputs are written under `/home/ray/app/output/` in the container.
