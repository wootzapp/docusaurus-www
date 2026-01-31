---
title: SkyRL Compatibility
sidebar_position: 1
---

W8-RL supports SkyRL via a Ray-backed BaseTextEnv adapter.
SkyRL runs in **external-policy mode only**.

## What this means

- The SkyRL policy generates actions.
- The adapter calls `EnvActor.step_external(action, epoch, step_id)`.
- The emulator browser produces ChromiumRL rewards.

There is no InferenceRouter policy in this path.

## Action format

SkyRL actions must be wrapped in `<action>...</action>` and include a `submit` action for Design2Code:

```
<action>{"type":"submit","content":"<html>...</html>"}</action>
```

## Run SkyRL path

```bash
./scripts/run_design2code_skyrl.sh design2code_0000 --episodes 1 --policy openhands
```

## Guarantees

- Uses Ray (distributed) for scale-out
- Uses EnvActor + emulator browser for reward
- Compatible with SkyRL BaseTextEnv expectations
