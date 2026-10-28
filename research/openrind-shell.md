---
title: Openrind Shell
slug: openrind-shell
date: 2026-03-19
hideDate: true
kind: Open-source runtime
description: Runs coding agents in an OpenShell sandbox. Project files live on a FUSE mount backed by PostgreSQL.
subtitle: openrind/openrind-shell · branch nemo
byline: WootzApp Research
abstract: |
  Openrind Shell runs Claude Code in an isolated OpenShell sandbox. The project filesystem lives in PostgreSQL. Project files sit on a FUSE mount at /sandbox/work, so each file operation passes through one daemon. OpenShell supervises that daemon and keeps it behind its default-deny network policy.
stats:
  - value: FUSE
    label: Project filesystem at /sandbox/work
  - value: 256 KiB
    label: Sparse file chunks in PostgreSQL
  - value: 1 writer
    label: Per workspace, lease-fenced
  - value: Default-deny
    label: Network policy for the daemon
sources:
  - label: GitHub
    href: https://github.com/openrind/openrind-shell/tree/nemo
  - label: ARCHITECTURE.md
    href: https://github.com/openrind/openrind-shell/blob/nemo/ARCHITECTURE.md
result: All /sandbox/work I/O through one daemon
facts: [OpenShell, FUSE, PostgreSQL]
thumbnail: shell
---

## Data path

From the agent's syscall to a committed row, as described in ARCHITECTURE.md on branch nemo.

1. **Agent processes** (Claude, git, compilers, editors, language servers) issue POSIX syscalls.
2. **Linux VFS** routes them to `/sandbox/work`.
3. **Kernel FUSE channel**, on a supervisor-owned file descriptor.
4. **openrind-shell-fused** runs as the sandbox UID under Landlock and seccomp. It speaks HTTP CONNECT only, with no direct-dial fallback.
5. **OpenShell local proxy** applies endpoint policy per binary. It carries PostgreSQL TLS end to end through a raw CONNECT tunnel.
6. **PostgreSQL** stores the data in the `_openeral.fs_*` namespace.

## Boundary

What the runtime enforces:

- The agent receives neither `/dev/fuse` nor mount capability.
- After the supervisor installs its TSYNC seccomp prelude, mount and unmount are denied.
- The FUSE daemon reaches PostgreSQL only through the OpenShell proxy. It needs a valid proxy environment to start.
- One writable daemon per workspace, enforced by a PostgreSQL advisory lock and an expiring, fenced lease.
- Committed data survives daemon, container, and sandbox replacement.

## Status

Version 1 scope:

- The FUSE feature is an OpenShell patch, off by default, pinned under `vendor/openshell`. It waits on an upstream OpenShell release.
- Claude and the daemon share the sandbox UID. Planned hardening: a separate storage UID and a secret channel run by the supervisor.
- Built on NVIDIA OpenShell; no NVIDIA endorsement implied.
