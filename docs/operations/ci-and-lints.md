---
title: CI and Lints
sidebar_position: 3
---

W8-RL uses lint tests to enforce architecture contracts.
All lint runs must happen in Docker.

## Run lint suite

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
