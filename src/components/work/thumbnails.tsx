import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import {study, taskNineteen, tasksDataset} from "@site/src/data/research";
import type {ResearchEntry} from "./entries";

// Small visuals for the research list. Decorative: the row text carries the meaning.
// An entry picks one with `thumbnail:` in its front matter: an image path under /static, or a name from `named` below.
// Without it, the first two stats of the entry are drawn.

function BenchThumb() {
	return (
		<div className='flex h-full flex-col justify-center gap-3 bg-ed-ink px-4 text-ed-canvas'>
			{[
				{label: "Screenshots", value: study.screenshotRateValue, display: study.screenshotRate, accent: false},
				{label: "W8 browser", value: study.domRateValue, display: study.domRate, accent: true},
			].map((row) => (
				<div key={row.label} className='flex flex-col gap-1'>
					<div className='ed-mono flex justify-between text-[0.625rem] uppercase tracking-wider text-ed-canvas/70'>
						<span>{row.label}</span>
						<span className={row.accent ? "text-ed-accent" : ""}>{row.display}</span>
					</div>
					<div className='h-1.5 overflow-hidden rounded-full bg-white/10'>
						<div
							className={row.accent ? "h-full rounded-full bg-ed-accent" : "h-full rounded-full bg-ed-canvas"}
							style={{width: `${Math.max((row.value / 25) * 100, 3)}%`}}
						/>
					</div>
				</div>
			))}
			<div className='ed-mono truncate text-[0.625rem] text-ed-accent'>{taskNineteen.domText.replace("ethche ", "")}</div>
		</div>
	);
}

function TasksThumb() {
	const {sample} = tasksDataset;
	return (
		<div className='relative h-full bg-ed-accent-tint p-3'>
			<div className='absolute left-5 right-2 top-2 h-[70%] rounded-lg border border-ed-ink/10 bg-white/60' />
			<div className='absolute left-4 right-3 top-3.5 h-[70%] rounded-lg border border-ed-ink/10 bg-white/80' />
			<div className='ed-mono absolute bottom-2.5 left-2.5 right-4 top-5 flex flex-col gap-1 rounded-lg border border-ed-ink/15 bg-white p-2 text-[0.625rem] leading-tight text-ed-graphite'>
				<span className='text-ed-accent-ink'>{sample.task_id}</span>
				<span className='truncate text-ed-ink'>{sample.category}</span>
				<span className='truncate'>{new URL(sample.start_url).host}</span>
				<span className='mt-auto truncate text-ed-smoke'>{sample.constraints[0]}</span>
			</div>
		</div>
	);
}

function ShellThumb() {
	const steps = ["agent", "/sandbox/work", "FUSE daemon", "proxy"];
	return (
		<div className='flex h-full flex-col justify-center gap-1.5 bg-ed-canvas px-3'>
			{steps.map((step, index) => (
				<div key={step} className='flex items-center gap-2'>
					<span
						className={
							index === 2
								? "ed-mono rounded-md bg-ed-ink px-2 py-0.5 text-[0.625rem] text-ed-canvas"
								: "ed-mono rounded-md border border-ed-ink/20 bg-white px-2 py-0.5 text-[0.625rem] text-ed-ink"
						}
					>
						{step}
					</span>
					{index < steps.length - 1 ? <span className='h-px flex-1 bg-ed-accent' /> : null}
				</div>
			))}
		</div>
	);
}

// Mean tasks solved out of 26 (Table 4 of "Let Execution Do the Teaching"): base model, then the strongest configuration.
function LedtThumb() {
	const tasks = 26;
	const rows = [
		{label: "Base · first round", value: 0.5, accent: false},
		{label: "Base · two rounds", value: 4.5, accent: false},
		{label: "Trained · first round", value: 11.75, accent: true},
		{label: "Trained · two rounds", value: 16, accent: true},
	];
	return (
		<div className='flex h-full flex-col justify-center gap-1.5 bg-ed-canvas px-4'>
			{rows.map((row) => (
				<div key={row.label} className='flex items-center gap-2'>
					<div className='h-2 flex-1 overflow-hidden rounded-full bg-ed-ash'>
						<div className={row.accent ? "h-full rounded-full bg-ed-accent" : "h-full rounded-full bg-ed-ink/70"} style={{width: `${(row.value / tasks) * 100}%`}} />
					</div>
					<span className='ed-mono w-8 text-right text-[0.625rem] text-ed-smoke'>{row.value}</span>
				</div>
			))}
			<span className='ed-mono mt-1 text-[0.625rem] text-ed-smoke'>tasks solved of {tasks}</span>
		</div>
	);
}

function DefaultThumb({entry}: {entry: ResearchEntry}) {
	const stats = entry.stats.slice(0, 2);
	return (
		<div className='flex h-full flex-col justify-center gap-2.5 bg-ed-canvas px-4'>
			{stats.length ? (
				stats.map((stat) => (
					<div key={stat.label} className='flex flex-col leading-tight'>
						<span className='text-[1.125rem] font-medium text-ed-ink'>{stat.value}</span>
						<span className='ed-mono truncate text-[0.625rem] uppercase tracking-wider text-ed-smoke'>{stat.label}</span>
					</div>
				))
			) : (
				<span className='ed-mono text-[0.6875rem] uppercase tracking-wider text-ed-accent-ink'>{entry.kind}</span>
			)}
		</div>
	);
}

const named: Record<string, () => React.JSX.Element> = {
	bench: BenchThumb,
	tasks: TasksThumb,
	shell: ShellThumb,
	ledt: LedtThumb,
};

export default function Thumbnail({entry}: {entry: ResearchEntry}) {
	const key = entry.thumbnail ?? "";
	const image = useBaseUrl(key);
	if (key.startsWith("/")) return <img src={image} alt='' className='h-full w-full object-cover' loading='lazy' />;
	const Named = named[key];
	return Named ? <Named /> : <DefaultThumb entry={entry} />;
}
