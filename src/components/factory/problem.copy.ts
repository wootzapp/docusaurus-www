// Copy for § 01 on /factory. The figure draws the path from a production run to a checkpoint as four artifacts joined
// by arrows; the requirements are numbered ticks across those arrows, and the grid beneath keys each number to its
// requirement and mechanism. The last requirement sits on the dashed next-cycle curl out of the checkpoint. The section
// stands on its own and names no other section.
// Facts: copy.ts (problem, stages, record, training), src/data/research.ts (evidenceGroups), and the vetted gateway
// notes. Requirements are noun phrases; mechanisms are one fact each, at most 22 words.

export type Gate = {req: string; mech: string; tag?: string};
export type Step = {name: string; sub: string; gates: Gate[]};

export const problemCopy = {
	title: "More than a token gateway.",
	subtitle: "Deeper integration for trace capture.",
	lede: "Production agents produce experience; a model proxy keeps the prompts, completions, and the tool calls and results the model saw. Eight requirements sit between a run and a checkpoint; each gate names the mechanism that meets it.",
	legend: {
		node: "Artifact on the path",
		gate: "Requirement, numbered; mechanism beneath",
		flow: "Direction of one cycle",
		next: "Next cycle, dashed",
	},
	// Under the next-cycle label; from the approved stage copy.
	loop: "new sessions, new seal, new checkpoint",
	// Each step is an artifact on the path plus the gates on the arrow that leaves it, numbered in order. The last step's
	// gate is the eighth; it sits on the next-cycle curl.
	steps: [
		{
			name: "Production run",
			sub: "Model proxy: prompts in, completions out, tool calls and results the model saw",
			gates: [
				{req: "One workspace for the run and the record", mech: "The agent runs in the sandbox that is recorded; committed workspace state persists in PostgreSQL."},
				{req: "Processes, files, egress, page state on record", mech: "The hypervisor below the harness logs processes, file changes, and egress with each allow or deny; the W8 browser keeps page state."},
				{req: "Turn roles at recorded token positions", mech: "The gateway records each model call under a signed context; turn selection assigns CE, KL, or context roles."},
			],
		},
		{
			name: "Session record",
			sub: "Record: gateway, hypervisor, W8",
			gates: [
				{req: "Outcome evidence for reward", mech: "Execution outcomes score runs; a paired audit measures which evidence each record lacks."},
				{req: "Review and provenance", mech: "Versioned human review; approval bound to the sealed dataset's SHA-256 digest."},
			],
		},
		{
			name: "Sealed dataset",
			sub: "Reviewed sessions under one SHA-256 digest",
			gates: [
				{req: "Targets on the agent's distribution", mech: "RFT + OPSD supervise the recorded tokens; a validated hint moves the teacher's targets over those same tokens."},
				{req: "Weights for the promoted checkpoint", mech: "Training-state and sampler checkpoints saved each cycle."},
			],
		},
		{
			name: "Checkpoint",
			sub: "One offline step on an isolated worker through Tinker: rejection-sampling fine-tuning (RFT) + on-policy self-distillation (OPSD)",
			gates: [{tag: "Next cycle", req: "Retention as the task mix drifts", mech: "Each cycle seals new sessions and yields a new checkpoint; retention re-runs are proposed."}],
		},
	] as Step[],
	caption: "Schematic. Numbered ticks are the gates on the path; the grid beneath keys each to its requirement and mechanism. One pass per cycle.",
};
