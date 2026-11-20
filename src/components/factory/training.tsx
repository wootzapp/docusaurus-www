import React from "react";
import clsx from "clsx";
import Spec, {Note, Sub} from "./spec";
import {training} from "./copy";

// § 04. RFT + OPSD as implemented in the gateway. Claim sources: gateway README "What is OPSD?", HALOOP.md 1147–1340,
// halo-loop/services/opsd/{pipeline,store,tinker_runtime,worker}.py. The turn strip and the tool-error example are
// schematic (README 871–878).

const roleClass: Record<string, string> = {
	ce: "bg-ed-accent border-ed-accent",
	kl: "border-ed-accent border-dashed",
	ctx: "border-ed-canvas/30",
};


export default function Training() {
	return (
		<Spec id='training' n='04' title={training.title} tone='ink' lede={training.lede} layout='stack'>
			<figure className='m-0' aria-label={training.stripCaption}>
				<div className='flex gap-1.5'>
					{training.strip.map((turn, index) => (
						<div key={index} className='flex min-w-0 flex-1 flex-col gap-1.5'>
							<div className={clsx("h-9 border", roleClass[turn.role])} />
							<span className='ed-mono hidden truncate text-[0.625rem] uppercase tracking-[0.06em] text-ed-canvas/55 sm:block'>{turn.label}</span>
						</div>
					))}
				</div>
			</figure>

			<dl className='m-0 mt-8 grid gap-6 border-t border-ed-canvas/30 pt-5 sm:grid-cols-2 lg:grid-cols-4'>
				{training.signals.map((s) => (
					<div key={s.k} className='grid grid-cols-[1.25rem_minmax(0,1fr)] gap-x-3'>
						<span aria-hidden='true' className={clsx("mt-1 h-3.5 w-3.5 border", roleClass[s.role])} />
						<div>
							<dt className='ed-mono text-[0.75rem] font-medium uppercase tracking-[0.08em] text-ed-accent'>{s.k}</dt>
							<dd className='m-0 mt-1.5 text-[0.9375rem] leading-relaxed text-ed-canvas/75'>{s.v}</dd>
						</div>
					</div>
				))}
			</dl>

			<div className='mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]'>
				<figure className='m-0 border border-ed-canvas/25 p-5 sm:p-6' aria-labelledby='distillation-title'>
					<div className='flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2'>
						<h3 id='distillation-title' className='m-0 text-[1.0625rem] font-medium'>
							{training.figureTitle}
						</h3>
						<span className='ed-mono text-[0.75rem] text-ed-canvas/55'>{training.figureSub}</span>
					</div>
					<div className='mt-5 grid items-stretch gap-3 sm:grid-cols-[minmax(0,1fr)_2rem_minmax(0,1fr)]'>
						<div className='border border-ed-canvas/25 border-t-2 border-t-ed-accent p-4'>
							<p className='m-0 flex flex-wrap items-baseline justify-between gap-x-4 text-[0.9375rem] font-medium text-ed-accent'>
								{training.teacherLabel} <span className='ed-mono text-[0.6875rem] font-normal text-ed-canvas/55'>{training.teacherMeta}</span>
							</p>
							<p className='m-0 mt-3 text-[0.875rem] leading-relaxed text-ed-canvas/75'>
								{training.teacher} <span className='text-ed-canvas'>{training.teacherExtra}</span>
							</p>
							<p className='ed-mono m-0 mt-2 text-[0.8125rem] text-ed-accent'>
								<span className='text-ed-canvas/55'>{training.teacherHintLabel}: </span>
								{training.teacherHint}
							</p>
						</div>
						<div aria-hidden='true' className='flex items-center justify-center text-[1.25rem] text-ed-accent'>
							<span className='sm:hidden'>↓</span>
							<span className='hidden sm:inline'>→</span>
						</div>
						<div className='border border-ed-canvas/25 border-t-2 border-t-ed-canvas/60 p-4'>
							<p className='m-0 flex flex-wrap items-baseline justify-between gap-x-4 text-[0.9375rem] font-medium text-ed-canvas'>
								{training.studentLabel} <span className='ed-mono text-[0.6875rem] font-normal text-ed-canvas/55'>{training.studentMeta}</span>
							</p>
							<p className='m-0 mt-3 text-[0.875rem] leading-relaxed text-ed-canvas/75'>
								{training.student} <span className='text-ed-canvas'>{training.studentExtra}</span>
							</p>
						</div>
					</div>
					<p className='ed-mono m-0 mt-4 text-[0.75rem] text-ed-accent'>{training.transfer}</p>
				</figure>

				<div className='flex flex-col gap-8'>
					<div>
						<Sub tone='dark'>{training.lifecycleH}</Sub>
						<ol className='m-0 flex list-none flex-col gap-1.5 p-0'>
							{training.lifecycle.map((step, index) => (
								<li key={step} className='ed-mono flex items-center gap-3 text-[0.75rem] text-ed-canvas/80'>
									<span className='flex h-5 w-5 shrink-0 items-center justify-center border border-ed-accent text-ed-accent'>{index + 1}</span>
									{step}
								</li>
							))}
						</ol>
						<p className='m-0 mt-3 text-[0.875rem] leading-relaxed text-ed-canvas/65'>{training.lifecycleNote}</p>
					</div>
				</div>
			</div>
		</Spec>
	);
}
