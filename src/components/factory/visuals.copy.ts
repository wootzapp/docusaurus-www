// Strings for the replacement drawing in § 02 on /factory. Facts come from copy.ts and research/openrind-shell.md.
// A comment marked [infer] sits above any line that joins two of those facts.

export const workspaceVisual = {
	old: {title: "Sandbox n", text: "× live processes\n× uncommitted bytes\ncommitted writes", accent: "committed writes"},
	next: {title: "Sandbox n+1", text: "same workspace ID\ncommitted state at\n/sandbox/work"},
	postgres: {title: "PostgreSQL", text: "_openeral.fs_* tables hold committed state: the current state, no action history."},
	edges: {replace: "replaced by", commit: "commit", restore: "committed state"},
	legend: [
		{kind: "cross", text: "ends with the sandbox"},
		{kind: "accent", text: "crosses the replacement, through PostgreSQL"},
		{kind: "store", text: "durable store"},
	],
	caption: "The persistence test recreates the owning sandbox with the same workspace ID and checks hashes.",
	label: "Sandbox replacement: committed state crosses from sandbox n to sandbox n+1 through PostgreSQL; live processes and uncommitted bytes end with sandbox n; no action history is kept.",
};

