---
title: W8-RL Overview
sidebar_position: 1
---

W8-RL is a Ray-distributed rollout framework for web-agent RL. It uses a real browser (WootzApp) to generate **ChromiumRL visual + semantic rewards** and runs entirely in Docker.

W8-RL exposes **three compatibility paths** on top of the same EnvActor core:

- **SkyRL** (BaseTextEnv interface, Ray-backed)
- **OpenEnv** (HTTP via Ray Serve + FastAPI)
- **Tinker** (token-based RL training via Tinker Cookbook)

All paths share the same execution core:

```
Task container -> EnvActor -> emulator browser -> ChromiumRL signals -> reward bundle
```

:::caution Docker-only execution
Everything must run in Docker. Do not run Python or tests on the host.
Use the provided scripts or `docker compose run`.
:::

If you want a quick start, see [Getting Started](getting-started/quickstart).
