// Figures and links shared by the homepage and the research thumbnails. The research entries themselves are markdown files in /research.
// Figures come from the w8-domdiff-bench technical report (branch w8-reproducible; audit synced Oct 26 2026, README revised Oct 27 2026).
// Do not edit a number here without changing the published report first.

export const links = {
	booking: "https://calendar.app.google/jjLE5C9TczR2vhHe9",
	email: "founders@wootzapp.com",
	benchRepo: "https://github.com/wootzapp/w8-domdiff-bench",
	benchBranch: "https://github.com/wootzapp/w8-domdiff-bench/tree/w8-reproducible",
	benchReport: "https://github.com/wootzapp/w8-domdiff-bench/blob/w8-reproducible/README.md",
	benchTechnicalReport: "https://github.com/wootzapp/w8-domdiff-bench/blob/w8-reproducible/docs/technical-report.md",
	benchMetric:
		"https://github.com/wootzapp/w8-domdiff-bench/blob/w8-reproducible/docs/technical-report.md#paired-source-evidence-loss",
	benchLimits: "https://github.com/wootzapp/w8-domdiff-bench/blob/w8-reproducible/docs/technical-report.md#scope-and-limitations",
	benchExamples:
		"https://github.com/wootzapp/w8-domdiff-bench/blob/w8-reproducible/docs/technical-report.md#source-evidence-gaps-by-task-and-criterion",
	benchCategories: "https://github.com/wootzapp/w8-domdiff-bench/blob/w8-reproducible/docs/evidence-categories.md",
	benchSummary: "https://github.com/wootzapp/w8-domdiff-bench/blob/w8-reproducible/results/summary.json",
	benchEvaluations: "https://huggingface.co/datasets/WootzappLab/browser-agent-tasks/tree/main/evaluation",
	benchResults: "https://github.com/wootzapp/w8-domdiff-bench/tree/w8-reproducible/results",
	benchVerifier: "https://github.com/wootzapp/w8-domdiff-bench/tree/w8-reproducible/w8bench/verifier",
	dataset: "https://huggingface.co/datasets/WootzappLab/browser-agent-tasks",
	openrindRepo: "https://github.com/openrind/openrind-shell",
	openrindBranch: "https://github.com/openrind/openrind-shell/tree/nemo",
	openrindArchitecture: "https://github.com/openrind/openrind-shell/blob/nemo/ARCHITECTURE.md",
	twitter: "https://x.com/wootzapp",
};

export const study = {
	name: "W8 DOM-diff Bench",
	published: "October 27, 2026",
	publishedShort: "Oct 2026",
	tasks: 100,
	criteria: 642,
	screenshotGaps: 151,
	domGaps: 5,
	screenshotRate: "23.52%",
	domRate: "0.78%",
	screenshotRateValue: 23.52,
	domRateValue: 0.78,
	reduction: "96.7%",
	// Sensitivity view from the same audit: primary URL-category losses removed, all 642 criteria retained.
	nonUrl: {screenshotGaps: 34, screenshotRate: "5.30%", screenshotRateValue: 5.3, reduction: "85.3%"},
	affectedCriteria: 154,
	affectedTasks: 91,
};

// Paired recordings for one task in the published dataset.
export function taskDataUrl(id: number, run: "dom" | "ss"): string {
	return `${links.dataset}/tree/main/trajectories/data-${run}/task_${String(id).padStart(2, "0")}`;
}

// Task 19, verbatim from the published recordings (data-ss/task_19/screenshot0.png, data-dom/task_19/dom_model0.txt).
// It is the Task 19 C3 "Exact text and values" finding in the technical report's criterion table.
export const taskNineteen = {
	id: 19,
	title: "GitHub release research",
	criterion: "Report the release date of the latest pytorch/pytorch release",
	screenshotFile: "screenshot0.png",
	screenshotImage: "/img/research/task19-screenshot.png",
	screenshotText: "ethche released this 2 weeks ago",
	domFile: "dom_model0.txt",
	domText: "ethche released this 02 Sep 17:40",
};

// Browser Agent Tasks dataset, counted from the Hugging Face repository (Oct 27 2026 revision).
export const tasksDataset = {
	name: "Browser Agent Tasks",
	tasks: 100,
	sites: 90,
	categories: 99,
	screenshots: 465,
	domStates: 465,
	evaluations: 100,
	// Verbatim record browser_task_019: the exact release date task (criterion C3 in the report).
	sample: {
		task_id: "browser_task_019",
		category: "github release research",
		instruction:
			"Find the latest release of pytorch/pytorch. Report the release tag, release date, and the first three highlight bullets from the release notes in their displayed order.",
		start_url: "https://github.com/pytorch/pytorch/releases",
		stopping_condition: "Stop after the latest release metadata and first three highlights have been recorded.",
		constraints: ["Do not sign in.", "Do not create issues or modify repository content."],
	},
};

// What reaches the training set, by capture point. `proxy: true` marks evidence that passes through a model proxy.
export type EvidenceGroup = {
	label: string;
	layer?: "hypervisor" | "browser";
	via?: string;
	rows: {label: string; proxy: boolean}[];
};

export const evidenceGroups: EvidenceGroup[] = [
	{
		label: "Model layer",
		via: "via gateway",
		rows: [
			{label: "Prompts in", proxy: true},
			{label: "Completions out", proxy: true},
			{label: "Tool calls and results in the model's context", proxy: true},
		],
	},
	{
		label: "Below the harness",
		layer: "hypervisor",
		rows: [
			{label: "Processes", proxy: false},
			{label: "Network egress, including denied attempts", proxy: false},
			{label: "Policy decisions", proxy: false},
			{label: "File changes", proxy: false},
		],
	},
	{
		label: "Inside the page",
		layer: "browser",
		rows: [
			{label: "Full DOM state at every step", proxy: false},
			{label: "Exact values and control states", proxy: false},
			{label: "Off-screen content", proxy: false},
		],
	},
];
