---
title: Troubleshooting
sidebar_position: 1
---

## PermissionError on Docker socket

If you see:

```
PermissionError: [Errno 13] Permission denied: /var/run/docker.sock
```

Set the Docker GID and re-run:

```bash
export DOCKER_GID=$(stat -c '%g' /var/run/docker.sock)
```

## Ray dashboard missing

The Ray dashboard is served by `ray-head` on port 8265. Ensure `ray-head` is running.

## Stale container code

Always rebuild the full stack after code changes:

```bash
docker compose -f docker-compose.ray.yml --profile standalone build
```

## OpenEnv step hangs

OpenEnv has a Ray timeout for all actor calls. If a step hangs, check:
- Ray connectivity (`RAY_ADDRESS`)
- SessionManager actor health
- task container health
