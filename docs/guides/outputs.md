---
title: Outputs and Reward Curves
sidebar_position: 4
---
All outputs are written inside containers under `/home/ray/app/output/`.

## SkyRL

- `skyrl_results.jsonl`
- `skyrl_results.steps.jsonl`
- `skyrl_results.steps.csv`

## OpenEnv

- `openenv_results.jsonl`
- `openenv_results.steps.jsonl`
- `openenv_results.steps.csv`
- `openenv_results.episode0.generated.html`

## Tinker

- `tinker_results.jsonl`
- `tinker_summary.json`
- `tinker_train/` (training metrics + checkpoints)

## Reward curves

Reward curves are written as `*.steps.jsonl` and `*.steps.csv`.
These contain per-step reward values and are suitable for plotting.
## Next Steps

- Read the Architecture overview: [Architecture Overview](../architecture/overview)
- Run a Design2Code task: [Design2Code Runs](../guides/design2code)
- Review troubleshooting: [Troubleshooting](../operations/troubleshooting)

