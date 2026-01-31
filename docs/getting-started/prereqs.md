---
title: Prerequisites
sidebar_position: 1
---

## Required

- Docker (BuildKit enabled), x86_64 host, 16GB+ RAM
- GCP service account JSON (for Gemini/OpenHands)
- WootzApp APK (ChromiumRL-enabled browser)

## Files to place

```bash
mkdir -p secrets
cp /path/to/service-account.json secrets/gcp-service-account.json
cp /path/to/WootzApp-x86_64.apk android_world/docker_setup/apks/
```

## Docker socket permissions

If you run `docker compose` manually, export the Docker socket GID first:

```bash
export DOCKER_GID=$(stat -c '%g' /var/run/docker.sock)
```

The scripts do this automatically. Prefer scripts.
