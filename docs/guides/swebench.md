---
title: SWE-bench-verified Runs
sidebar_position: 2
---

SWE-bench-verified tasks are run via the Ray rollout path.
Each task is a dedicated Docker container defined in `tasks/<instance_id>/`.

## Run a single task

```bash
./scripts/run_all_tasks.sh --task django__django-10914
```

## Run N tasks

```bash
./scripts/run_all_tasks.sh --limit 5
```

## Two-phase task build

The `tasks/` directory is populated by a build step:

```bash
python -m w8_rl.cli build --limit 10
```

Only tasks with a Dockerfile are runnable. See `tasks/README.md` for details.
