---
id: rewards/chromiumrl
title: ChromiumRL Signals
sidebar_position: 1
---
ChromiumRL exposes browser-engine signals that are not available in visual-only metrics.
These signals are captured via CDP while WootzApp renders the task page.

Typical signals:
- compositor stability
- layout timing
- CLS attribution
- touch target fidelity
- web vitals

The reward bundle combines:
- ChromiumRL metrics
- visual similarity
- semantic metrics (when enabled)
- ground-truth metrics for Design2Code

See `w8_rl/rewards/chromiumrl.py` and `w8_rl/rewards/composite.py` for details.
## Next Steps

- Read the Architecture overview: [Architecture Overview](../architecture/overview)
- Run a Design2Code task: [Design2Code Runs](../guides/design2code)
- Review troubleshooting: [Troubleshooting](../operations/troubleshooting)

