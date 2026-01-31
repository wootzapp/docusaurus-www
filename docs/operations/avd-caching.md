---
title: AVD Snapshot Caching
sidebar_position: 2
---

AVD snapshot caching allows faster emulator startup by reusing saved snapshots.

## Modes

The SWE-bench runner supports two explicit modes:

- `--avd-rehydrate` (default): rehydrate + snapshot (fast quickboot if available)
- `--avd-cold-boot`: cold boot (no rehydrate, no snapshot, wipe data)

## Examples

```bash
# Fast mode (default)
./scripts/run_all_tasks.sh --task django__django-10914 --avd-rehydrate

# Cold boot
./scripts/run_all_tasks.sh --task django__django-10914 --avd-cold-boot
```

When rehydrate is enabled, the emulator uses existing snapshots when available.
