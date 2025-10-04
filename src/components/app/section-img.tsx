import React from "react";

const steps = [
	{
		step: "01",
		title: "Human design capture",
		description: "Contributors use our purpose-built mobile browser to inspect live pages, record hierarchy, grids, spacing, tokens, breakpoints, and accessibility expectations.",
		bullets: [
			"Outputs a structured spec describing layout + components",
			"Generates a checks DSL for automated validation",
			"Tracks provenance, reviewer consensus, and policy version",
		],
	},
	{
		step: "02",
		title: "Automated packaging",
		description: "We synthesize each spec into executable tests, scorers, and environment scaffolding so agents can interact safely.",
		bullets: [
			"Produces reward functions aligned with the human rubric",
			"Supports Dockerized /reset + /step services",
			"Optionally emits a Verifiers-compatible dataset + rubric + protocol",
		],
	},
	{
		step: "03",
		title: "Scale & governance",
		description: "Qualification, consensus, auditing, and rollout are handled end-to-end, giving you consistent, compliant environments across thousands of tasks.",
		bullets: [
			"Role-based contributor gating and skill progression",
			"Versioned policy + reward history for audit",
			"Centralized SLA monitoring and issue remediation",
		],
	},
];

export function SectionImg() {
	return (
		<section className='bg-white py-24 text-brand-base'>
			<div className='container-custom flex flex-col gap-12'>
				<div className='max-w-3xl text-left flex flex-col gap-4'>
					<span className='inline-flex w-fit items-center gap-2 rounded-full border border-brand-neutral-300 px-4 py-1 text-xs uppercase tracking-[0.2em] text-brand-neutral-500'>
						Operating pillars
					</span>
					<h2 className='font-matter text-3xl font-semibold leading-tight text-brand-base sm:text-4xl'>
						A unified control surface for security, data, and finance teams
					</h2>
					<p className='text-sm text-brand-neutral-500 sm:text-base'>
						Designed with enterprise rigor, WootzApp aligns stakeholders across the organization with shared telemetry and automation hooks.
					</p>
				</div>

				<div className='grid gap-6 lg:grid-cols-3'>
					{steps.map((pillar) => (
						<article key={pillar.title} className='flex h-full flex-col gap-4 rounded-2xl border border-brand-neutral-300 bg-brand-neutral-100 p-6 shadow-sm shadow-brand-base/5'>
							<span className='text-xs font-semibold uppercase tracking-[0.3em] text-brand-neutral-500'>{pillar.step}</span>
							<h3 className='font-matter text-xl font-semibold text-brand-base'>
								{pillar.title}
							</h3>
							<p className='text-sm text-brand-base sm:text-base'>
								{pillar.description}
							</p>
							<ul className='flex flex-col gap-2 text-sm text-brand-base'>
								{pillar.bullets.map((bullet) => (
									<li key={bullet} className='flex items-start gap-2'>
										<span className='mt-1 h-1.5 w-1.5 rounded-full bg-brand-border/60' />
										<span>{bullet}</span>
									</li>
								))}
							</ul>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
