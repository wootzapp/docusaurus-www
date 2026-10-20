// Single source of truth for published research figures and outbound links.
// Figures come from the w8-domdiff-bench technical report (branch w8-reproducible, Oct 1 2026).
// Do not edit a number here without changing the published report first.

export const links = {
	booking: "https://calendar.app.google/jjLE5C9TczR2vhHe9",
	email: "founders@wootzapp.com",
	benchRepo: "https://github.com/wootzapp/w8-domdiff-bench",
	benchBranch: "https://github.com/wootzapp/w8-domdiff-bench/tree/w8-reproducible",
	benchReport: "https://github.com/wootzapp/w8-domdiff-bench/blob/w8-reproducible/README.md",
	benchMetric:
		"https://github.com/wootzapp/w8-domdiff-bench/blob/w8-reproducible/README.md#42-measuring-evidence-preservation",
	benchLimits: "https://github.com/wootzapp/w8-domdiff-bench/blob/w8-reproducible/README.md#6-capabilities-and-boundaries",
	benchExamples:
		"https://github.com/wootzapp/w8-domdiff-bench/blob/w8-reproducible/README.md#53-preserving-the-details-agents-need",
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
	published: "October 1, 2026",
	publishedShort: "Oct 2026",
	tasks: 100,
	criteria: 639,
	screenshotGaps: 26,
	domGaps: 2,
	screenshotRate: "4.07%",
	domRate: "0.31%",
	screenshotRateValue: 4.07,
	domRateValue: 0.31,
	reduction: "92.3%",
};

export const gapCategories = [
	{label: "Exact text and values", screenshot: 11, dom: 0},
	{label: "URLs", screenshot: 3, dom: 0},
	{label: "Control states", screenshot: 1, dom: 0},
	{label: "Table entries", screenshot: 1, dom: 0},
	{label: "Label–value relationships", screenshot: 0, dom: 1},
	{label: "Capture omissions", screenshot: 10, dom: 1},
];

// Separate historical sample. Never merge with the 100-task study.
export const storageSample = {
	states: 650,
	rows: [
		{label: "W8 DOM-diff Optimized", value: 4.84, display: "4.84 KiB"},
		{label: "Detailed readable text", value: 44.88, display: "44.88 KiB"},
		{label: "Structured snapshots", value: 191.32, display: "191.32 KiB"},
	],
};

// Paired recordings for one task in the published dataset.
export function taskDataUrl(id: number, run: "dom" | "ss"): string {
	return `${links.dataset}/tree/main/trajectories/data-${run}/task_${String(id).padStart(2, "0")}`;
}

// Task 19, verbatim from the published recordings (data-ss/task_19/screenshot0.png, data-dom/task_19/dom_model0.txt).
// It is the "Exact release date" row of Table 4 in the technical report.
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

// Table 4 of the technical report: preserved information from Tasks 19, 24, and 75.
export const taskExamples = [
	{
		id: 19,
		title: "Exact release date",
		copy: `The exact release date is explicit in the structured state (“${taskNineteen.domText.replace("ethche released this ", "")}”). The screenshot record shows only a relative date (“${taskNineteen.screenshotText.replace("ethche released this ", "")}”).`,
	},
	{
		id: 24,
		title: "Complete ranked list",
		copy: "Structured states preserve ranks 1–30. The captured screenshot frames cover ranks 1–29.",
	},
	{
		id: 75,
		title: "Exact endpoint URL",
		copy: "The exact endpoint URL is explicit in the structured header. It is not visible in the captured screenshot frames.",
	},
];

// Technical report metadata, as published in the w8-domdiff-bench README.
export const report = {
	title: "w8-domdiff-bench: Browser Evidence Infrastructure for Agent Development",
	byline: "WootzApp Research",
	type: "Technical report",
	license: "AGPL-3.0",
};

export const citation = `@techreport{wootzapp2026w8domdiffbench,
  title       = {w8-domdiff-bench: Browser Evidence Infrastructure for Agent Development},
  author      = {{WootzApp Research}},
  institution = {WootzApp},
  year        = {2026},
  month       = oct,
  url         = {https://github.com/wootzapp/w8-domdiff-bench}
}`;

// Browser Agent Tasks dataset, counted from the Hugging Face repository (Sep 30 2026 revision).
export const tasksDataset = {
	name: "Browser Agent Tasks",
	tasks: 100,
	sites: 90,
	categories: 99,
	screenshots: 465,
	domStates: 465,
	format: "JSONL",
	fields: [
		{name: "task_id", type: "string", description: "Stable identifier"},
		{name: "category", type: "string", description: "Task family"},
		{name: "instruction", type: "string", description: "Complete instruction given to the browser agent"},
		{name: "start_url", type: "string", description: "Suggested public starting page"},
		{name: "stopping_condition", type: "string", description: "When the agent must stop"},
		{name: "constraints", type: "list<string>", description: "Safety and scope restrictions"},
	],
	// Verbatim record browser_task_019: the Table 4 "Exact release date" task.
	sample: {
		task_id: "browser_task_019",
		category: "github release research",
		instruction:
			"Find the latest release of pytorch/pytorch. Report the release tag, release date, and the first three highlight bullets from the release notes in their displayed order.",
		start_url: "https://github.com/pytorch/pytorch/releases",
		stopping_condition: "Stop after the latest release metadata and first three highlights have been recorded.",
		constraints: ["Do not sign in.", "Do not create issues or modify repository content."],
	},
	// Per-task folders under trajectories/, one for each recording of the same run.
	runs: [
		{folder: "data-ss/task_NN", files: "screenshotN.png, final_answer.json, task_data.json, web_surfer.log"},
		{folder: "data-dom/task_NN", files: "dom_modelN.txt, final_answer.json, task_data.json, web_surfer.log"},
	],
};

// Our work: each entry has a homepage row and a full page.
export type WorkEntry = {
	slug: "w8-domdiff-bench" | "browser-agent-tasks" | "openrind-shell";
	name: string;
	kind: string;
	date?: string;
	line: string;
	meta: string[];
	result: string;
};

export const work: WorkEntry[] = [
	{
		slug: "w8-domdiff-bench",
		name: "W8 DOM-diff Bench",
		kind: "Benchmark",
		date: study.publishedShort,
		line: `What screenshot recordings lose against structured browser state, measured on the same ${study.tasks} agent runs.`,
		meta: [`${study.tasks} tasks`, `${study.criteria} criteria`, "Paired evaluation"],
		result: `${study.screenshotRate} → ${study.domRate} missing evidence`,
	},
	{
		slug: "browser-agent-tasks",
		name: "Browser Agent Tasks",
		kind: "Dataset",
		date: "Sep 2026",
		line: "Public-web browser tasks with paired screenshot and W8 recordings of each run. The data behind W8 DOM-diff Bench.",
		meta: [`${tasksDataset.tasks} tasks`, `${tasksDataset.sites} sites`, "Paired runs"],
		result: `${tasksDataset.screenshots + tasksDataset.domStates} recorded browser states`,
	},
	{
		slug: "openrind-shell",
		name: "Openrind Shell",
		kind: "Open-source runtime",
		line: "Runs coding agents in an isolated OpenShell sandbox, with the project filesystem on a PostgreSQL-backed FUSE mount.",
		meta: ["OpenShell", "FUSE", "PostgreSQL"],
		result: "All /sandbox/work I/O through one daemon",
	},
];
