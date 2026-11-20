// All copy on /factory. The components in this folder render these strings; edit the words here.
// Figures that come from the research entries (preprint results, benchmark rates) are filled in by the components.
// Register: technical documentation, kept dense. Headings are noun phrases. Each line is one fact; no paragraphs.

export const meta = {
	title: "WootzApp Factory overview",
	description:
		"Continual learning for coding agents. Openrind Shell runs the agent in an OpenShell sandbox; the gateway records each session; sealed sessions train the next checkpoint with RFT and OPSD.",
};

export const hero = {
	docLeft: "WootzApp Factory",
	docRight: "Technical overview · Revised 2026-11-19",
	h1: "Openrind Shell.",
	h1Sub: "Engineered for continual learning.",
	lede: "Openrind Shell runs agents as native processes, keeps the project filesystem across sandbox replacement, and records model context under a signed session identity. On the Desktop deployment, Linux sandboxes run inside a VM. The gateway builds RFT + OPSD supervision from reviewed, eligible recorded sessions.",
	contrast: "",
	ctaPrimary: "Source, branch nemo",
	ctaSecondary: "Case study",
	spec: [
		{term: "Runtime", value: "Openrind Shell on OpenShell, branch nemo"},
		{term: "Harness", value: "Claude Code · Codex · OpenClaw · OpenHands"},
		{term: "Sandbox", value: "Linux; WSL2 VM on Windows, host Docker on Linux"},
		{term: "Workspace", value: "FUSE at /sandbox/work; PostgreSQL, 256 KiB chunks, one fenced writer"},
		{term: "Egress", value: "Default-deny; endpoint policy per binary at the OpenShell proxy"},
		{term: "Training", value: "RFT + OPSD; one offline optimizer step through Tinker"},
	],
};

export const workspace = {
	title: "Storing AI’s data trail:",
	titleSub: "A new kind of filesystem",
	lede: "Project files on a FUSE mount at /sandbox/work; one daemon serves every file operation.",
	pathH: "Data path",
	path: [
		["Agent processes", "Claude, git, compilers, editors, language servers issue POSIX syscalls."],
		["Linux VFS", "Routes syscalls to /sandbox/work."],
		["Kernel FUSE channel", "Supervisor-owned file descriptor."],
		["openrind-shell-fused", "Rust daemon, sandbox UID, Landlock + seccomp; HTTP CONNECT only, no direct dial."],
		["OpenShell local proxy", "Endpoint policy per binary; PostgreSQL TLS end to end over a raw CONNECT tunnel."],
		["PostgreSQL", "_openeral.fs_* tables: inode metadata, sparse 256 KiB chunks; commit barriers, fenced lease."],
	] as [string, string][],
	enforcesH: "What the runtime enforces",
	enforces: [
		"No /dev/fuse and no mount capability for the agent.",
		"TSYNC seccomp prelude denies mount and unmount.",
		"Daemon reaches PostgreSQL only through the proxy; needs a valid proxy environment to start.",
		"One writable daemon per workspace: advisory lock plus expiring, fenced lease.",
		"Committed data outlives daemon, container, and sandbox.",
	],
	survivesH: "After sandbox replacement",
	survives: [
		["Committed state", "The persistence test recreates the owner with the same workspace ID and checks hashes.", "kept"],
		["Live processes", "End with the sandbox.", "lost"],
		["Uncommitted bytes", "End with the sandbox.", "lost"],
		["Action history", "FUSE tables hold current state only.", "not kept"],
	] as [string, string, string][],
	noteLead: "Sources:",
	noteMid: "on branch nemo; the runtime entry",
};

export const training = {
	title: "Training objective",
	lede: "Rejection-sampling fine-tuning (RFT) and a recorded-session form of on-policy self-distillation (OPSD). Each retained turn takes one role at its recorded token positions.",
	// Schematic turn sequence for the strip: one cell per retained turn, coloured by its role.
	strip: [
		{role: "ce", label: "safe"},
		{role: "ctx", label: "context"},
		{role: "ctx", label: "context"},
		{role: "kl", label: "bad + hint"},
		{role: "ctx", label: "context"},
		{role: "ce", label: "safe"},
		{role: "ctx", label: "hint failed"},
		{role: "ce", label: "safe"},
	],
	stripCaption: "Schematic session: one cell per retained turn, coloured by its role. Loss lands only on the solid and dashed cells.",
	signals: [
		{role: "ce", k: "CE / RFT", v: "Safe turns from successful sessions: CE on the exact recorded tokens."},
		{role: "kl", k: "Hinted forward KL / OPSD", v: "Bad turns with validated hints: distribution targets from the frozen teacher."},
		{role: "ctx", k: "Context only", v: "All other retained turns: history, zero direct loss."},
		{role: "ctx", k: "Hint failed", v: "A bad turn whose hint fails validation: kept as context, no loss."},
	],
	figureTitle: "Teacher and student on shared recorded tokens",
	figureSub: 'Recorded continuation (schematic): recency_filter="24h"',
	teacherLabel: "Teacher",
	teacherMeta: "frozen · stop-gradient",
	teacher: "Recorded context",
	teacherExtra: "plus the validated hint",
	teacherHintLabel: "hint",
	teacherHint: "Use day, week, or month.",
	studentLabel: "Student",
	studentMeta: "trainable",
	student: "Recorded context",
	studentExtra: "with no hint",
	transfer: "Teacher → student · renormalized top-K forward KL approximation",
	figureCaption: "Same source weights; both teacher-force the saved continuation, bad call included. No replacement answer becomes a target.",
	lifecycleH: "Lifecycle",
	lifecycle: ["Versioned human review", "Sealed dataset", "Digest-bound training approval", "Offline update through Tinker", "Held-out checkpoint evaluation"],
	lifecycleNote: "Offline, on complete sessions with supported text and tool renderers. Unsupported or over-context sequences rejected. Eval and promotion separate.",
	note: "Renormalized top-K targets approximate forward KL; no full-vocabulary distillation.",
};

export const published = {
	title: "Research entries",
	lede: "Runtime, paper, benchmark, dataset. Full list:",
	allLink: "research index",
	readLink: "Entry",
};

export const close = {
	title: "Contact",
	body: "Write or book to run one. Experiments pin one agent profile, one task set, one baseline checkpoint; comparison on held-out tasks.",
	cta: "Calendar",
	emailSubject: "Factory research evaluation",
};
