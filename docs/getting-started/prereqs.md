---
title: Prerequisites
sidebar_position: 1
---
:::note Docker-only execution
All commands run inside Docker containers. Use the provided scripts.
:::

## Required

- Docker (BuildKit enabled), x86_64 host, 16GB+ RAM
- GCP service account JSON (for Gemini/OpenHands)
- WootzApp APK (ChromiumRL-enabled browser)

## Files to place

Run the command below from the repo root in Docker:
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
## Next Steps

- Read the Architecture overview: [Architecture Overview](../architecture/overview)
- Run a Design2Code task: [Design2Code Runs](../guides/design2code)
- Review troubleshooting: [Troubleshooting](../operations/troubleshooting)


