---
title: File Glossary
sidebar_position: 3
---

## Core

- `w8_rl/rollout/env_actor.py` - EnvActor state machine and external API
- `w8_rl/rollout/env_master.py` - task assignment
- `w8_rl/rollout/inference_router.py` - batching + backend calls
- `w8_rl/rollout/policy_backend.py` - Gemini / local policy backends

## SkyRL

- `w8_rl/skyrl/env/ray_backed_env.py` - BaseTextEnv adapter
- `w8_rl/skyrl/stub_runner.py` - SkyRL evaluation runner

## OpenEnv

- `w8_rl/openenv/serve_app.py` - Ray Serve FastAPI deployment
- `w8_rl/openenv/session_manager.py` - session -> EnvActor routing
- `w8_rl/openenv/models.py` - OpenEnv models

## Tinker

- `w8_rl/tinker/env_adapter.py` - EnvActor adapter
- `w8_rl/tinker/renderer.py` - ObsRef &lt;-&gt; tokens
- `scripts/train_design2code_tinker.py` - GRPO training loop

## Tasks

- `tasks/` - per-task Dockerfiles and metadata

## Scripts

- `scripts/run_all_tasks.sh` - SWE-bench runner
- `scripts/run_design2code_skyrl.sh` - SkyRL evaluation
- `scripts/run_design2code_openenv.sh` - OpenEnv evaluation
- `scripts/run_design2code_tinker.sh` - Tinker rollout
- `scripts/train_design2code_tinker.sh` - Tinker training
