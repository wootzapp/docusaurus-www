// Strings for § 03 on /factory, the CTF and cybersecurity case study. Facts from research/openrind-shell.md
// (sections "Data path", "Boundary", "Status", "CTF trace capture"), copy.ts, and the vetted gateway text: the run
// separates agent execution, Chromium, and challenge services; each challenge service runs the imported application
// with an HTTP proxy and a flag-judge endpoint; flag acceptance is independent of the agent's claim; the local writer
// emits three records into the workspace; the FUSE lane carries them to PostgreSQL and the persistence test recreates
// the owner sandbox with the same workspace ID and checks hashes; the runner uses its own model route and sends
// nothing through the managed gateway by itself. Each version 1 limit sits on the part it concerns.

export const ctfVisual = {
	title: "CTF & cybersecurity case study",
	lede: "A browser CTF run in the OpenShell sandbox: the flag verdict, three records, their route to PostgreSQL, and the separate gateway path.",
	nodes: {
		host: {title: "Host", text: "WSL2 VM on Windows; host Docker on Linux"},
		sandbox: {title: "OpenShell sandbox", chip: "shared UID", text: "agent: no /dev/fuse, no mount capability; Claude and the daemon share the UID"},
		agent: {title: "Agent execution", text: "Browser steps; flag submission.", chip: "own model route"},
		chromium: {title: "Chromium", text: "static Docker browser, live fixture\nDOM snapshots; screenshots by path, SHA-256, size", chip: "screenshots best effort"},
		challenge: "Challenge service",
		proxy: {title: "HTTP proxy", text: "method, path, status, duration"},
		app: {title: "Imported application", text: "Flag Command · GlacierXchange"},
		judge: {title: "Flag-judge endpoint", text: "Submitted flag against the expected flag.", chip: "independent of the agent's claim"},
		work: "/sandbox/work",
		events: {title: "events.jsonl", text: "model requests, responses, retries, failures; browser setup; step events"},
		traj: {title: "trajectory.json", text: "actions, observations, timings, submissions, judge acceptance"},
		chal: {title: "challenge-events.jsonl", text: "HTTP method, path, status, duration; judge submissions; no bodies"},
		daemon: {title: "FUSE daemon", text: "openrind-shell-fused;\nLandlock + seccomp; HTTP CONNECT only;\noff by default; enabled for the persistence test"},
		shellProxy: {title: "OpenShell proxy", text: "default-deny egress; endpoint policy per binary"},
		postgres: {title: "PostgreSQL", text: "_openeral.fs_* tables; 256 KiB chunks; one fenced writer"},
		persistence: {title: "Persistence test", text: "owner sandbox recreated; same workspace ID; file hashes match"},
		production: "Production path",
		gateway: {title: "Gateway", text: "signed conversation context per model call"},
		trainer: {title: "Trainer", text: "RFT + OPSD through Tinker"},
	},
	edges: {
		steps: "browser steps",
		http: "HTTP",
		flag: "submitted flag",
		acceptance: "acceptance",
		judgeEvents: "HTTP + judge events",
		writer: "local writer",
		fileOps: "each file operation",
		connect: "HTTP CONNECT",
		tls: "TLS end to end",
		committed: "committed records",
		sealed: "sealed sessions",
		none: ["nothing through the gateway", "by itself; no OPSD dataset"],
		noneLong: "nothing through the gateway by itself; no OPSD dataset",
	},
	label:
		"CTF run: agent execution inside the OpenShell sandbox drives Chromium, a static Docker browser on the host, against a challenge service with an HTTP proxy, imported application, and flag-judge endpoint; the local writer puts trajectory.json, challenge-events.jsonl, and events.jsonl in /sandbox/work, from where the FUSE daemon, the OpenShell proxy, and PostgreSQL keep them; the persistence test recreates the owner sandbox and checks hashes; the gateway and trainer path receives nothing from this runner by itself.",
	link: {label: "Evidence formats", href: "/research/openrind-shell#ctf-trace-capture"},
};
