---
id: guides/design2code
title: Design2Code Runs
sidebar_position: 1
---
:::note Docker-only execution
All commands run inside Docker containers. Use the provided scripts.
:::note

Design2Code tasks are HTML generation tasks evaluated in the emulator browser.
All reward paths use **EnvActor + ChromiumRL**, and **Design2Code requires a SUBMIT action**.

## Required action format

Design2Code expects HTML submission:

```json
{"type": "submit", "content": "<html>...</html>"}
```

SkyRL and Tinker wrap this as:

```text
<action>{"type":"submit","content":"..."}</action>
```

OpenEnv sends the structured action fields directly.

## SkyRL run (OpenHands)

Run the command below from the repo root in Docker:
```bash
./scripts/run_design2code_skyrl.sh design2code_0000 \
  --episodes 3 \
  --policy openhands
```

Outputs:
- `/home/ray/app/output/skyrl_results.jsonl`
- `/home/ray/app/output/skyrl_results.steps.jsonl`
- `/home/ray/app/output/skyrl_results.steps.csv`

## OpenEnv run (OpenHands)

Run the command below from the repo root in Docker:
```bash
./scripts/run_design2code_openenv.sh design2code_0000 --use-openhands --episodes 3
```

Outputs:
- `/home/ray/app/output/openenv_results.jsonl`
- `/home/ray/app/output/openenv_results.steps.jsonl`
- `/home/ray/app/output/openenv_results.steps.csv`
- `/home/ray/app/output/openenv_results.episode0.generated.html`

## Tinker run (rollout only)

Run the command below from the repo root in Docker:
```bash
./scripts/run_design2code_tinker.sh --task-dir tasks --limit 12 \
  --policy tinker \
  --model Qwen/Qwen3-4B-Instruct-2507 \
  --episodes 3 \
  --max-tokens 4096 \
  --max-total-tokens 3000000
```

Outputs:
- `/home/ray/app/output/tinker_results.jsonl`
- `/home/ray/app/output/tinker_summary.json`

## Reward bundle (all paths)

For each episode, the reward bundle includes:
- visual similarity
- ChromiumRL metrics
- semantic metrics (when available)
- ground-truth metrics (Design2Code evaluator)
- combined score

Reward curves are written as `*.steps.jsonl` and `*.steps.csv`.
## Next Steps

- Read the Architecture overview: [Architecture Overview](../architecture/overview)
- Run a Design2Code task: [Design2Code Runs](../guides/design2code)
- Review troubleshooting: [Troubleshooting](../operations/troubleshooting)
