---
title: Environment Variables
sidebar_position: 2
---

Common environment variables used across W8-RL.

## Docker / Ray

- `DOCKER_GID` - Docker socket group id (required if running compose directly)
- `RAY_ADDRESS` - Ray cluster address (e.g., `ray://ray-head:10001`)

## Emulator / CDP

- `W8RL_CDP_URL` or `CDP_URL` - CDP websocket URL (default `ws://android-world:9224`)
- `W8RL_ADB_HOST` or `ADB_HOST` - ADB host (default `container:android-world`)

## OpenEnv

- `W8RL_OPENENV_RAY_TIMEOUT_S` - Ray call timeout for OpenEnv endpoints (default 30)
- `W8RL_TASK_TYPE` - OpenEnv task selector (e.g., `design2code`)
- `W8RL_D2C_OFFICIAL_EVAL` - enable Design2Code official eval mode

## OpenHands

- `GOOGLE_APPLICATION_CREDENTIALS` - path to GCP service account JSON
- `W8RL_OPENHANDS_CORO_TIMEOUT_S` - OpenHands coroutine timeout (default 120)

## Tinker

- `TINKER_API_KEY` - required for real Tinker API runs
- `W8RL_TINKER_RAY_TIMEOUT_S` - Ray timeout for Tinker calls
- `W8RL_D2C_GROUND_TRUTH` - enable ground-truth metrics
- `W8RL_D2C_INLINE_IMAGES` - inline reference images

## HuggingFace cache

- `HF_HOME` - tokenizer/model cache path
- `HF_HUB_ENABLE_HF_TRANSFER` - enable hf_transfer fast download
