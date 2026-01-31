---
id: getting-started/build
title: Build the Stack
sidebar_position: 2
---
W8-RL must be built in Docker before any run.

```bash
set -a; source .env; set +a
DOCKER_GID=$(stat -c '%g' /var/run/docker.sock) \
  UV_HTTP_TIMEOUT=300 docker compose -f docker-compose.ray.yml --profile standalone build
```

This builds:
- `ray-head` (Ray cluster + Ray Serve)
- `ray-worker` (evaluation + OpenHands)
- `android-world` (emulator + WootzApp)

:::caution Full rebuild required
After any code change, rebuild the **entire** stack. Do not rebuild individual containers.
:::
## Next Steps

- Read the Architecture overview: [Architecture Overview](../architecture/overview)
- Run a Design2Code task: [Design2Code Runs](../guides/design2code)
- Review troubleshooting: [Troubleshooting](../operations/troubleshooting)

