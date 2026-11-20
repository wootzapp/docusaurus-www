// Strings for Figure 1 on /factory (session-figure.tsx): the recorded session and its capture points in one drawing.
// Labels come from the approved copy (hero spec, stages, the former Capture points section) and from
// src/data/research.ts (evidenceGroups). The ledger values in session-figure.tsx are illustrative; the caption says so.

export const sessionFigure = {
	barTitle: "One recorded session",
	boundaryLabel: "Shell boundary · egress default-deny · mount denied",
	exitsLabel: "Exits: model calls via gateway · PostgreSQL via OpenShell proxy",
	columns: ["Run", "Record", "Verify", "Train", "Serve"] as const,
	// Right side of the Record column head: the three capture layers of the full record.
	recordLayers: "gateway + hypervisor + W8",
	// Edge label of the dashed frame around the model layer.
	proxyLabel: "Model proxy sees",
	// Divider above the hypervisor and W8 groups. Source: § 01, "A proxy trace holds model I/O; processes, files,
	// and egress are missing."
	beyondLabel: "Hypervisor and W8",
	// Row keys in the Record column, one per capture layer; the legend line under the panel uses the same words.
	layers: {gateway: "gateway", hypervisor: "hypervisor", browser: "W8"},
	checkpointLabel: "checkpoint",
	// Lead word of the legend line: each Record key followed by what that layer keeps (the evidenceGroups rows).
	legendLead: "Layer keys",
	caption:
		"Schematic; values illustrative. One session, run to promoted checkpoint. Record lists the session's events by capture layer; the dashed frame is all a model proxy sees. Static under reduced motion.",
	// Footnotes, one sentence each, numbered by the superscript markers inside the figure: 1 on the signed context
	// row, 2 on the Run column heading (human work is a second source of runs), 3 on the Exits label, 4 on the session row.
	notes: [
		{text: "Signed conversation context binds each managed model call to workspace, sandbox, and agent."},
		{text: "Desktop recorder: input events paired with before/after frames and display-relative coordinates. Separate path."},
		{
			text: "CTF runner: trajectory.json, events.jsonl, challenge-events.jsonl; separate model route, outside the gateway.",
			link: {label: "Formats", href: "/research/openrind-shell#ctf-trace-capture"},
		},
		{text: "Capture is best effort. Incomplete sessions excluded from training."},
	] as {text: string; link?: {label: string; href: string}}[],
};
