---
id: guides/swebench
title: SWE-bench-verified Runs
sidebar_position: 2
---
:::note Docker-only execution
All commands run inside Docker containers. Use the provided scripts.
:::note

SWE-bench-verified tasks are run via the Ray rollout path.
Each task is a dedicated Docker container defined in `tasks/<instance_id>/`.

## Run a single task

Run the command below from the repo root in Docker:
```bash
./scripts/run_all_tasks.sh --task django__django-10914
```

## Run N tasks

Run the command below from the repo root in Docker:
```bash
./scripts/run_all_tasks.sh --limit 5
```

## Two-phase task build

The `tasks/` directory is populated by a build step:

```bash
python -m w8_rl.cli build --limit 10
```

Only tasks with a Dockerfile are runnable. See `tasks/README.md` for details.
## Next Steps

- Read the Architecture overview: [Architecture Overview](../architecture/overview)
- Run a Design2Code task: [Design2Code Runs](../guides/design2code)
- Review troubleshooting: [Troubleshooting](../operations/troubleshooting)

