---
title: Emulator and Reward Flow
sidebar_position: 3
---

The emulator browser is the center of W8-RL.
All evaluation paths share the same reward flow.

## Reward flow

```
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
