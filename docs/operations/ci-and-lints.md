---
id: operations/ci-and-lints
title: CI and Lints
sidebar_position: 3
---
:::note Docker-only execution
All commands run inside Docker containers. Use the provided scripts.
:::note

W8-RL uses lint tests to enforce architecture contracts.
All lint runs must happen in Docker.

## Run lint suite

Run the command below from the repo root in Docker:
```bash
./scripts/run_lint.sh
```

This script:
1) rebuilds the full Docker stack
2) runs `pytest tests/lint -v` inside `ray-worker`

## Why lint tests matter

Lint tests enforce:
- OpenEnv HTTP contracts
- SkyRL BaseTextEnv signatures
- EnvActor external API
- Tinker training guards
- docker-only execution rules
## Next Steps

- Read the Architecture overview: [Architecture Overview](../architecture/overview)
- Run a Design2Code task: [Design2Code Runs](../guides/design2code)
- Review troubleshooting: [Troubleshooting](../operations/troubleshooting)

