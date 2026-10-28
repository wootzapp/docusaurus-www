import React from "react";
import clsx from "clsx";

type Tone = "light" | "dark";

const tones: Record<Tone, {box: string; title: string; row: string; index: string; label: string; copy: string}> = {
	light: {
		box: "border-ed-ink bg-ed-surface",
		title: "border-ed-ink text-ed-ink",
		row: "border-ed-rule",
		index: "text-ed-accent-ink",
		label: "text-ed-ink",
		copy: "text-ed-graphite",
	},
	dark: {
		box: "border-ed-canvas/40",
		title: "border-ed-canvas/40 text-ed-canvas",
		row: "border-ed-canvas/20",
		index: "text-ed-accent",
		label: "text-ed-canvas",
		copy: "text-ed-canvas/75",
	},
};

// A titled, numbered ledger: 01, 02, … each with a label and one line.
export default function RowList({
	title,
	rows,
	tone = "light",
	className,
}: {
	title: string;
	rows: {label: string; copy: string}[];
	tone?: Tone;
	className?: string;
}) {
	const t = tones[tone];
	return (
		<div className={clsx("border", t.box, className)}>
			<p className={clsx("ed-eyebrow m-0 border-b px-5 py-3 sm:px-6", t.title)}>{title}</p>
			<ol className='m-0 flex list-none flex-col p-0'>
				{rows.map((row, index) => (
					<li key={row.label} className={clsx("grid grid-cols-[2.25rem_minmax(0,1fr)] gap-2 border-b px-5 py-4 last:border-b-0 sm:px-6", t.row)}>
						<span className={clsx("ed-mono text-[0.8125rem]", t.index)}>0{index + 1}</span>
						<div className='flex flex-col gap-1.5'>
							<span className={clsx("font-medium", t.label)}>{row.label}</span>
							<span className={clsx("text-[0.9375rem] leading-relaxed", t.copy)}>{row.copy}</span>
						</div>
					</li>
				))}
			</ol>
		</div>
	);
}
