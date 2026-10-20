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
	benchResults: "https://github.com/wootzapp/w8-domdiff-bench/blob/w8-reproducible/results.md",
	benchVerifier: "https://github.com/wootzapp/w8-domdiff-bench/tree/w8-reproducible/verifier",
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

// GitHub heading anchor for "## Task N — Title" in results.md.
export function taskResultsUrl(id: number, title: string): string {
	const slug = `task ${id} — ${title}`
		.toLowerCase()
		.replace(/[^a-z0-9 -]/g, "")
		.replace(/ /g, "-");
	return `${links.benchResults}#${slug}`;
}

// Recorded excerpts. Wording follows the per-task evidence audits in results.md.
export const taskTwo = {
	id: 2,
	title: "Xbox cross-site research",
	criterion: "Report the publisher, developer, and release date",
	screenshot: [
		{key: "screenshot9.png", value: "product page visible"},
		{key: "screenshot10.png", value: "stops at Gallery / Description"},
		{key: "developer field", value: "not in frame"},
		{key: "release date", value: "not in frame"},
	],
	// Verbatim values quoted in the Task 2 audit for dom_model10.txt.
	dom: ["Developed by → Tiburon", "Release date → 8/13/2026"],
	scores: {screenshot: "0/5", dom: "3/5"},
	note: "The publisher label–value relationship remained ambiguous in both records.",
};

export const taskExamples = [
	{
		id: 2,
		title: "Xbox cross-site research",
		copy: "The screenshot sequence stopped before the developer and release-date fields. W8's structured state preserved Developed by → Tiburon and Release date → 8/13/2026. The publisher relationship stayed ambiguous, even in DOM evidence.",
	},
	{
		id: 19,
		title: "GitHub release research",
		copy: "The screenshot showed only “released this last week”. The structured state preserved the exact timestamp, 02 Sep 17:40, which matched the agent's final answer.",
	},
	{
		id: 18,
		title: "GitHub issue search",
		copy: "Screenshots rendered issue dates as relative times. The structured state preserved the exact opened dates.",
	},
	{
		id: 5,
		title: "George H. W. Bush Foundation event lookup",
		copy: "A second event sat outside the screenshot viewport. The structured state preserved it, supporting the chronological comparison the rubric asked for.",
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

// Browser Agent Tasks dataset, counted from tasks.jsonl on Hugging Face (Sep 30 2026 revision).
export const tasksDataset = {
	name: "Browser Agent Tasks",
	tasks: 100,
	sites: 90,
	categories: 99,
	format: "JSONL",
	fields: [
		{name: "task_id", type: "string", description: "Stable identifier"},
		{name: "category", type: "string", description: "Task family"},
		{name: "instruction", type: "string", description: "Complete instruction given to the browser agent"},
		{name: "start_url", type: "string", description: "Suggested public starting page"},
		{name: "stopping_condition", type: "string", description: "When the agent must stop"},
		{name: "constraints", type: "list<string>", description: "Safety and scope restrictions"},
	],
	// Verbatim record browser_task_002; the same task as the Task 2 evidence example.
	sample: {
		task_id: "browser_task_002",
		category: "cross-site research",
		instruction:
			"On Xbox.com, find a game listed under the “Best sellers” section. Open its product page and report the game’s publisher, developer, and release date.",
		start_url: "https://www.xbox.com/",
		stopping_condition: "Stop after opening the product page and recording the publisher, developer, and release date.",
		constraints: ["Do not sign in.", "Do not buy or download anything."],
	},
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
		line: "Multi-step public-web tasks with instructions, stopping conditions, and scope constraints. The task set behind W8 DOM-diff Bench.",
		meta: [`${tasksDataset.tasks} tasks`, `${tasksDataset.sites} sites`, "JSONL"],
		result: `${tasksDataset.categories} task categories`,
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
