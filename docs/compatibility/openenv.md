---
title: OpenEnv Compatibility
sidebar_position: 2
---
:::note Docker-only execution
All commands run inside Docker containers. Use the provided scripts.
:::

W8-RL implements OpenEnv as a FastAPI server deployed inside Ray Serve.
This preserves the OpenEnv HTTP contract while still using Ray for scale-out.

## Key points

- Server runs in `ray-head` (Ray Serve)
- Client runs in `ray-worker`
- Single-session per server instance (OpenEnv client compatibility)
- Scale-out is achieved by running multiple server instances

## Endpoints

- `POST /reset`
- `POST /step` (HTTP)
- `GET /state`
- `POST /close`
- WebSocket `/step` (streaming)

## Run OpenEnv path

Run the command below from the repo root in Docker:
```bash
./scripts/run_design2code_openenv.sh design2code_0000 --use-openhands
```

## openenv.yaml

The environment manifest is located at:

```text
w8_rl/openenv/openenv.yaml
```

It follows the OpenEnv echo_env schema and points to `server.app:app`.
## Next Steps

- Read the Architecture overview: [Architecture Overview](../architecture/overview)
- Run a Design2Code task: [Design2Code Runs](../guides/design2code)
- Review troubleshooting: [Troubleshooting](../operations/troubleshooting)


