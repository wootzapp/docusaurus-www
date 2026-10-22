import {usePluginData} from "@docusaurus/useGlobalData";

// A research entry is a markdown file in /research. Its front matter carries the paper-style metadata; this module turns
// that front matter into one typed shape used by the list rows, the thumbnails and the page header.

export type Stat = {value: string; label: string};
export type Source = {label: string; href: string};

export type ResearchEntry = {
	permalink: string;
	title: string;
	kind: string;
	date: Date;
	dateShort?: string;
	dateLong?: string;
	description: string;
	subtitle?: string;
	byline?: string;
	abstract: string[];
	stats: Stat[];
	sources: Source[];
	result?: string;
	facts: string[];
	thumbnail?: string;
	citation?: string;
};

export type EntryMetadata = {
	permalink: string;
	title: string;
	date: string | Date;
	description?: string;
	frontMatter: Record<string, unknown>;
};

const shortDate = new Intl.DateTimeFormat("en-US", {month: "short", year: "numeric", timeZone: "UTC"});
const longDate = new Intl.DateTimeFormat("en-US", {month: "long", day: "numeric", year: "numeric", timeZone: "UTC"});

function text(value: unknown): string | undefined {
	return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

function strings(value: unknown): string[] {
	return Array.isArray(value) ? value.map((item) => String(item).trim()).filter(Boolean) : [];
}

function isRecord(value: unknown): value is Record<string, unknown> {
	return typeof value === "object" && value !== null;
}

export function toResearchEntry(meta: EntryMetadata): ResearchEntry {
	const fm = meta.frontMatter;
	const date = new Date(meta.date);
	const hideDate = fm.hideDate === true;
	const stats = Array.isArray(fm.stats)
		? fm.stats.filter(isRecord).map((stat) => ({value: String(stat.value ?? ""), label: String(stat.label ?? "")}))
		: [];
	const sources = Array.isArray(fm.sources)
		? fm.sources.filter(isRecord).map((source) => ({label: String(source.label ?? ""), href: String(source.href ?? "")}))
		: [];
	return {
		permalink: meta.permalink,
		title: meta.title,
		kind: text(fm.kind) ?? "Research",
		date,
		dateShort: hideDate ? undefined : shortDate.format(date),
		dateLong: hideDate ? undefined : (text(fm.dateLabel) ?? longDate.format(date)),
		description: text(fm.description) ?? meta.description ?? "",
		subtitle: text(fm.subtitle),
		byline: text(fm.byline),
		abstract: (text(fm.abstract) ?? "")
			.split(/\n\s*\n/)
			.map((paragraph) => paragraph.replace(/\s+/g, " ").trim())
			.filter(Boolean),
		stats,
		sources,
		result: text(fm.result),
		facts: strings(fm.facts),
		thumbnail: text(fm.thumbnail),
		citation: text(fm.citation),
	};
}

// Entries for the homepage, from the research-entries plugin (plugins/research-entries.ts). Newest first.
export function useResearchEntries(): ResearchEntry[] {
	const data = usePluginData("research-entries") as {entries?: EntryMetadata[]} | undefined;
	return (data?.entries ?? []).map(toResearchEntry);
}
