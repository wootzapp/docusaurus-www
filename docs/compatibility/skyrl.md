---
title: SkyRL Compatibility
sidebar_position: 1
---
:::note Docker-only execution
All commands run inside Docker containers. Use the provided scripts.
:::

W8-RL supports SkyRL via a Ray-backed BaseTextEnv adapter.
SkyRL runs in **external-policy mode only**.

## What this means

- The SkyRL policy generates actions.
- The adapter calls `EnvActor.step_external(action, epoch, step_id)`.
- The emulator browser produces ChromiumRL rewards.

There is no InferenceRouter policy in this path.

## Action format

SkyRL actions must be wrapped in action tags and include a `submit` action for Design2Code:

```text
<action>{"type":"submit","content":"<html>...</html>"}</action>
```

## Run SkyRL path

Run the command below from the repo root in Docker:
```bash
./scripts/run_design2code_skyrl.sh design2code_0000 --episodes 1 --policy openhands
```

## Guarantees

- Uses Ray (distributed) for scale-out
- Uses EnvActor + emulator browser for reward
- Compatible with SkyRL BaseTextEnv expectations
## Next Steps

- Read the Architecture overview: [Architecture Overview](../architecture/overview)
- Run a Design2Code task: [Design2Code Runs](../guides/design2code)
- Review troubleshooting: [Troubleshooting](../operations/troubleshooting)

