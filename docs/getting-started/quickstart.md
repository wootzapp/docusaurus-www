---
id: getting-started/quickstart
title: Quickstart
sidebar_position: 3
---
:::note Docker-only execution
All commands run inside Docker containers. Use the provided scripts.
:::note

## Design2Code via SkyRL (OpenHands)

Run the command below from the repo root in Docker:
```bash
./scripts/run_design2code_skyrl.sh design2code_0000 \
  --episodes 1 \
  --policy openhands
```

## Design2Code via OpenEnv (OpenHands)

Run the command below from the repo root in Docker:
```bash
./scripts/run_design2code_openenv.sh design2code_0000 --use-openhands
```

## Design2Code via Tinker (rollout only)

Run the command below from the repo root in Docker:
```bash
./scripts/run_design2code_tinker.sh --task-dir tasks --limit 3 \
  --policy tinker \
  --model Qwen/Qwen3-4B-Instruct-2507 \
  --episodes 1 \
  --max-tokens 2048 \
  --max-total-tokens 3000000
```

Outputs are written under `/home/ray/app/output/` in the container.
## Next Steps

- Read the Architecture overview: [Architecture Overview](../architecture/overview)
- Run a Design2Code task: [Design2Code Runs](../guides/design2code)
- Review troubleshooting: [Troubleshooting](../operations/troubleshooting)

