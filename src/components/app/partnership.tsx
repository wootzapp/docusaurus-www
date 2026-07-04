import React from "react";

const schedulerFeatures = [
	{
		title: "Rubric-Scoped Subtasks",
		description: "Each workflow is broken into specific, non-overlapping checks so one upstream mistake does not poison every downstream reward.",
	},
	{
		title: "Process vs. Outcome",
		description: "We score how well the agent executed separately from whether the user-visible goal was actually completed.",
	},
	{
		title: "Failure Separation",
		description: "Reasoning errors and hallucinated actions are treated differently from environment blockers like login state or missing test data.",
	},
	{
		title: "Evidence Packaging",
		description: "Screenshots, DOM state, actions, rubrics, and privacy decisions travel together so the environment can be examined later.",
	},
];

export function PartnerShip() {
	return (
		<section className='sci-grid relative overflow-hidden bg-brand-neutral-100 py-[72px] text-brand-base lg:py-32' id='delivery-formats'>
			<div className='absolute inset-0 sci-scanlines sci-scanlines--soft pointer-events-none' />
			<div className='container-custom relative z-10 flex flex-col gap-12'>
				<div className='mx-auto max-w-3xl text-center flex flex-col gap-4'>
					<span className='sci-chip mx-auto inline-flex w-fit items-center rounded-full border-dashed px-5 py-2 text-xs font-bold uppercase tracking-[0.28em] text-brand-accent-100 shadow-sm font-mono'>
						Verifier Design
					</span>
					<h2 className='font-matter text-section font-bold sm:text-section-lg'>
						Reliable RL starts with reliable verifiers.
					</h2>
					<p className='text-body-sm text-brand-neutral-500 sm:text-body'>
						Browser-agent failures are subtle. W8-RL uses browser evidence and task-specific rubrics so models are not rewarded for plausible but wrong work.
					</p>
				</div>

				<div className='grid gap-5 md:gap-8 md:grid-cols-2'>
					{schedulerFeatures.map((feature) => (
						<div key={feature.title} className='relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-brand-neutral-300/80 bg-white/70 p-6 shadow-[0_24px_60px_-45px_rgba(31,19,13,0.35)] backdrop-blur sm:p-8'>
							<div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent-100/40 to-transparent' />
							<h3 className='font-mono text-subsection font-semibold text-brand-base'>{feature.title}</h3>
							<p className='text-body-sm text-brand-base/80'>
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
