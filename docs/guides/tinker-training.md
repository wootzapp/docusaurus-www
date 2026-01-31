---
title: Tinker RL Training
sidebar_position: 3
---

Tinker training performs real gradient updates using GRPO-style group rollouts.
All training runs inside `ray-worker` and uses EnvActor + emulator rewards.

## 1) Quick sanity run

```bash
./scripts/train_design2code_tinker.sh \
  --task-dir tasks \
  --limit 2 \
  --group-size 2 \
  --groups-per-batch 1 \
  --num-steps 1 \
  --max-tokens 1024 \
  --max-total-tokens 3000000 \
  --model Qwen/Qwen3-4B-Instruct-2507
```

## 2) Budgeted training template

```bash
./scripts/train_design2code_tinker.sh \
  --task-dir tasks \
  --limit 12 \
  --model Qwen/Qwen3-4B-Instruct-2507 \
  --learning-rate 4e-5 \
  --lora-rank 32 \
  --group-size 4 \
  --groups-per-batch 2 \
  --max-tokens 4096 \
  --num-steps 10 \
  --max-total-tokens 3000000
```

## Outputs

- `/home/ray/app/output/tinker_train/` (metrics, checkpoints)
- `/home/ray/app/output/tinker_train/trained_sampler_path.txt`

## Evaluate the trained model

Tinker uses a sampler path, not the raw model ID. Use the sampler path from training:

```bash
./scripts/run_design2code_tinker.sh \
  --task-dir tasks \
  --limit 12 \
  --policy tinker \
  --model $(cat /home/ray/app/output/tinker_train/trained_sampler_path.txt) \
  --tokenizer-model Qwen/Qwen3-4B-Instruct-2507 \
  --episodes 3 \
  --max-tokens 4096 \
  --max-total-tokens 3000000
```

## Tokenizer cache

Use a persistent cache to avoid repeated downloads:

```bash
export HF_HOME=/home/ray/.cache/huggingface
```

If `HF_HUB_ENABLE_HF_TRANSFER=1` is set, `hf_transfer` must be installed. Otherwise unset the flag.
