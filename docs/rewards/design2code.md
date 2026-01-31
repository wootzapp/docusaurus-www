---
title: Design2Code Rewards
sidebar_position: 2
---
Design2Code rewards combine browser-based metrics and ground-truth evaluation.

Components include:
- visual similarity (SSIM/CLIP)
- semantic structure
- ChromiumRL signals
- ground-truth evaluator (when reference HTML is available)

When reference HTML is unavailable, the system falls back to visual-only metrics.

See `w8_rl/rewards/design2code_eval.py` and `w8_rl/rewards/ground_truth.py`.
## Next Steps

- Read the Architecture overview: [Architecture Overview](../architecture/overview)
- Run a Design2Code task: [Design2Code Runs](../guides/design2code)
- Review troubleshooting: [Troubleshooting](../operations/troubleshooting)

