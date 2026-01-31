---
id: architecture/emulator-and-rewards
title: Emulator and Reward Flow
sidebar_position: 3
---
The emulator browser is the center of W8-RL.
All evaluation paths share the same reward flow.

## Reward flow

```text
Task container -> WootzApp browser -> ChromiumRL signals -> Reward bundle
```

EnvActor drives the browser through CDP and captures:
- screenshots
- DOM signals
- ChromiumRL metrics

These are combined into the reward bundle used by SkyRL, OpenEnv, and Tinker.

## Browser reset

The emulator is reset between tasks to avoid state bleed and CDP instability.
The scripts handle this automatically.
## Next Steps

- Read the Architecture overview: [Architecture Overview](../architecture/overview)
- Run a Design2Code task: [Design2Code Runs](../guides/design2code)
- Review troubleshooting: [Troubleshooting](../operations/troubleshooting)

