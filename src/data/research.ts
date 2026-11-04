// Figures and links shared by the homepage and the research thumbnails. The research entries themselves are markdown files in /research.
// Figures come from the w8-domdiff-bench paper and technical report (branch w8-reproducible; analysis of November 3, 2026, README revised November 4, 2026).
// Do not edit a number here without changing the published report first.

export const links = {
	booking: "https://calendar.app.google/jjLE5C9TczR2vhHe9",
	email: "founders@wootzapp.com",
	benchRepo: "https://github.com/wootzapp/w8-domdiff-bench",
	benchBranch: "https://github.com/wootzapp/w8-domdiff-bench/tree/w8-reproducible",
	benchReport: "https://github.com/wootzapp/w8-domdiff-bench/blob/w8-reproducible/README.md",
	benchTechnicalReport: "https://github.com/wootzapp/w8-domdiff-bench/blob/w8-reproducible/docs/technical-report.md",
	benchMetric: "https://github.com/wootzapp/w8-domdiff-bench/blob/w8-reproducible/README.md#appendix-a-formal-definitions-and-equations",
	benchLimits: "https://github.com/wootzapp/w8-domdiff-bench/blob/w8-reproducible/README.md#8-limitations",
	benchExamples: "https://github.com/wootzapp/w8-domdiff-bench/blob/w8-reproducible/README.md#63-types-of-losses",
	benchCriterionTable:
		"https://github.com/wootzapp/w8-domdiff-bench/blob/w8-reproducible/docs/technical-report.md#source-evidence-gaps-by-task-and-criterion",
	benchCategories: "https://github.com/wootzapp/w8-domdiff-bench/blob/w8-reproducible/docs/evidence-categories.md",
	benchSummary: "https://github.com/wootzapp/w8-domdiff-bench/blob/w8-reproducible/results/summary.json",
	benchAggregator: "https://github.com/wootzapp/w8-domdiff-bench/blob/w8-reproducible/w8bench/verifier/aggregate_runs.py",
	benchEvaluations: "https://huggingface.co/datasets/WootzappLab/browser-agent-tasks/tree/main/evaluations",
	benchResults: "https://github.com/wootzapp/w8-domdiff-bench/tree/w8-reproducible/results",
	benchVerifier: "https://github.com/wootzapp/w8-domdiff-bench/tree/w8-reproducible/w8bench/verifier",
	dataset: "https://huggingface.co/datasets/WootzappLab/browser-agent-tasks",
	openrindRepo: "https://github.com/openrind/openrind-shell",
	openrindBranch: "https://github.com/openrind/openrind-shell/tree/nemo",
	openrindArchitecture: "https://github.com/openrind/openrind-shell/blob/nemo/ARCHITECTURE.md",
	twitter: "https://x.com/wootzapp",
};

// Matched panel: the 97 tasks with a paired audit in all three recorded runs, 619 criteria per run. Counts are means per run.
export const study = {
	name: "W8 DOM-diff Bench",
	published: "November 4, 2026",
	publishedShort: "Nov 2026",
	tasks: 100,
	runs: 3,
	matchedTasks: 97,
	criteria: 619,
	screenshotGaps: 61,
	domGaps: 13,
	screenshotRate: "9.85%",
	domRate: "2.10%",
	screenshotRateValue: 9.85,
	domRateValue: 2.1,
	screenshotInterval: "6.59–13.48%",
	domInterval: "0.88–3.62%",
	difference: "7.75 points",
	differenceInterval: "4.07–11.71",
	reduction: "78.69%",
	reductionInterval: "57.25–91.62%",
	perRun: [
		{run: "run_1", screenshot: "51 (8.24%)", dom: "16 (2.58%)"},
		{run: "run_2", screenshot: "62 (10.02%)", dom: "15 (2.42%)"},
		{run: "run_3", screenshot: "70 (11.31%)", dom: "8 (1.29%)"},
	],
	// Exploratory subset: nine listed access-blocked tasks removed, defined after the recordings were inspected.
	subset: {tasks: 88, criteria: 572, screenshotGaps: 60, screenshotRate: "10.49%", domGaps: 11, domRate: "1.92%", reduction: "81.67%"},
	// Available evidence a verifier overlooked or misread, mean per run on the matched panel. A separate count from source loss.
	verifierMisses: {screenshot: "54.67 (8.83%)", dom: "63.33 (10.23%)"},
	affected: {observations: 219, criteria: 118, tasks: 49},
	sizes: {states: 2592, recordings: 300, domModel: 5.25, domFull: 47.26, domJson: 206.45},
};

// Paired records for one task in one recorded run of the published dataset.
export function taskDataUrl(task: string, run: "dom" | "ss", runName = "run_1"): string {
	return `${links.dataset}/tree/main/trajectories/${runName}/data-${run}/${task}`;
}

// The specimen pair shown on the homepage, the benchmark entry, the dataset entry, and the blog post.
// run_1 task_08, criterion C2, verbatim from the published recordings (data-ss/task_08/screenshot2.png, data-dom/task_08/dom_model2.txt).
// It is the "publication date" example in Table 4 of the paper: the DOM record holds the timestamp, the screenshots a relative age.
export const specimen = {
	task: "task_08",
	run: "run_1",
	title: "software release research",
	release: "Playwright v1.64.1",
	criterion: "Record release metadata (tag and publication date)",
	criterionIndex: 2,
	recorded: "October 29, 2026",
	screenshotFile: "screenshot2.png",
	screenshotImage: "/img/research/task08-screenshot.png",
	screenshotText: "dgozman released this 2 weeks ago",
	domFile: "dom_model2.txt",
	domText: "dgozman released this 14 Oct 11:51",
	domListFile: "dom_model1.txt",
	domListText: "v1.64.1 Latest Oct 14, 2026",
	auditUrl: `${links.dataset}/blob/main/evaluations/run_1/task_08/batch_01/evidence_audit.json`,
};

// Browser Agent Tasks dataset, counted from the Hugging Face repository (November 4, 2026 revision).
export const tasksDataset = {
	name: "Browser Agent Tasks",
	tasks: 100,
	sites: 90,
	categories: 7,
	runs: 3,
	recordings: 300,
	pairs: 296,
	pairsPerRun: [100, 99, 97],
	states: 2592,
	// Verbatim record browser_task_008: the specimen task above.
	sample: {
		task_id: "browser_task_008",
		task_name: "software release research",
		category: "linked-page research",
		instruction:
			"Go to the GitHub repository for Microsoft Playwright at https://github.com/microsoft/playwright. Open the Releases page and identify the newest non-preview release. Report its release tag, publication date, and three changes from the release notes. Verify one of those changes using the official Playwright documentation.",
		start_url: "https://github.com/microsoft/playwright",
		stopping_condition: "Stop after the release metadata, three release-note changes, and one documentation verification have been recorded.",
		constraints: ["Do not sign in.", "Do not create issues, comments, pull requests, or file changes."],
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
			{label: "Tool calls and results the model saw", proxy: true},
		],
	},
	{
		label: "Below the harness",
		layer: "hypervisor",
		rows: [
			{label: "Processes", proxy: false},
			{label: "Network calls, including denied ones", proxy: false},
			{label: "Each allow or deny", proxy: false},
			{label: "File changes", proxy: false},
		],
	},
	{
		label: "Inside the page",
		layer: "browser",
		rows: [
			{label: "The whole page at each step", proxy: false},
			{label: "Exact values and control states", proxy: false},
			{label: "Content off screen", proxy: false},
		],
	},
];
