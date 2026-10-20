import React from "react";
import {study, taskNineteen, tasksDataset} from "@site/src/data/research";

// Small visuals drawn from each artifact's real content. Decorative: the row text carries the meaning.

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
							style={{width: `${Math.max((row.value / 5) * 100, 3)}%`}}
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

export const thumbnails = {
	"w8-domdiff-bench": BenchThumb,
	"browser-agent-tasks": TasksThumb,
	"openrind-shell": ShellThumb,
};
