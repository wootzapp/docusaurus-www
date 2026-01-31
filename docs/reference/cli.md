---
title: CLI and Scripts
sidebar_position: 1
---

All commands must run in Docker. Use the provided scripts.

## Core scripts

- `./scripts/run_all_tasks.sh` (SWE-bench-verified)
- `./scripts/run_design2code_skyrl.sh`
- `./scripts/run_design2code_openenv.sh`
- `./scripts/run_design2code_tinker.sh`
- `./scripts/train_design2code_tinker.sh`
- `./scripts/run_lint.sh`

## run_all_tasks.sh

```bash
./scripts/run_all_tasks.sh --task django__django-10914
./scripts/run_all_tasks.sh --limit 5
./scripts/run_all_tasks.sh --avd-rehydrate
./scripts/run_all_tasks.sh --avd-cold-boot
```

## run_design2code_skyrl.sh

```bash
./scripts/run_design2code_skyrl.sh design2code_0000 \
  --episodes 3 \
  --policy openhands
```

## run_design2code_openenv.sh

```bash
./scripts/run_design2code_openenv.sh design2code_0000 --use-openhands --episodes 3
```

## run_design2code_tinker.sh

```bash
./scripts/run_design2code_tinker.sh --task-dir tasks --limit 12 \
  --policy tinker \
  --model Qwen/Qwen3-4B-Instruct-2507 \
  --episodes 3 \
  --max-tokens 4096 \
  --max-total-tokens 3000000
```
