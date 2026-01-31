---
title: Architecture Overview
sidebar_position: 1
---
:::note Docker-only execution
All commands run inside Docker containers. Use the provided scripts.
:::

W8-RL is built around Ray actors and a real emulator browser.

## Core components

- **EnvActor**: owns a single environment instance and the browser CDP connection
- **EnvMaster**: assigns tasks to EnvActors
- **InferenceRouter**: batches observations for model inference (Ray rollout path)
- **PolicyBackend**: Gemini or local policy backend
- **Task containers**: per-task Docker containers (Design2Code / SWE-bench)
- **android-world**: emulator + WootzApp browser

## Deployment layout (Docker)

```text
ray-head
  - Ray cluster coordinator
  - Ray Serve (OpenEnv server)

ray-worker
  - SkyRL + OpenHands client
  - Tinker training
  - Task execution scripts

android-world
  - Android emulator
  - WootzApp browser with ChromiumRL

Task containers
  - per-task web server or repo under test
```

All execution happens inside Docker containers.
## Next Steps

- Read the Architecture overview: [Architecture Overview](../architecture/overview)
- Run a Design2Code task: [Design2Code Runs](../guides/design2code)
- Review troubleshooting: [Troubleshooting](../operations/troubleshooting)


