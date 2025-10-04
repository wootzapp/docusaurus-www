import React from "react";

const highlights = [
	{
		head: "Design-literate environments",
		copy: "Reward suites teach hierarchy, rhythm, accessibility, and component discipline—far beyond raw HTML tags.",
	},
	{
		head: "Dual delivery formats",
		copy: "Choose Dockerized RL APIs for agents or Verifiers-compatible packages for enterprise eval and training stacks.",
	},
	{
		head: "Human-scale coverage",
		copy: "We mobilize vetted designers and engineers globally to build and validate environments in hours, not weeks.",
	},
];

export default function Hero() {
	return (
		<div className='relative isolate overflow-hidden bg-brand-base text-brand-text-primary'>
			<div className='absolute inset-y-0 right-[-40%] size-[120%] rounded-full bg-gradient-to-br from-brand-surface via-brand-overlay to-brand-base blur-3xl opacity-70 pointer-events-none' />
			<div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent-100/40 to-transparent' />

			<div className='container-custom relative z-10 flex flex-col gap-16 py-24 lg:py-32'>
				<div className='max-w-3xl flex flex-col gap-6'>
					<span className='inline-flex w-fit items-center gap-2 rounded-full border border-brand-accent-100/40 bg-brand-surface/70 px-4 py-1 text-xs uppercase tracking-[0.2em] text-brand-text-secondary'>
						Teach design to codegen
					</span>
					<h1 className='font-matter text-4xl leading-tight sm:text-5xl lg:text-6xl'>
						High-quality RL environments for HTML/CSS — produced at human scale
					</h1>
					<p className='font-matter text-base text-brand-text-secondary sm:text-lg lg:max-w-2xl'>
						Most codegen models can emit markup. Very few can design. We build the reinforcement-learning environments that teach structure, rhythm, tokens, responsiveness, and accessibility—so your models learn design sense, not just syntax.
					</p>
					<div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
						<a
							href='#delivery-formats'
							className='inline-flex items-center justify-center rounded-lg border border-brand-border bg-brand-accent-100 px-6 py-3 text-sm font-matter font-semibold text-brand-base shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg'
						>
							See sample environment
						</a>
						<a
							href='#get-started'
							className='inline-flex items-center justify-center rounded-lg border border-brand-border px-6 py-3 text-sm font-matter font-semibold text-brand-text-secondary transition hover:text-brand-text-primary'
						>
							Book a technical walkthrough
						</a>
					</div>
				</div>

				<div className='grid gap-4 sm:grid-cols-3'>
					{highlights.map((item) => (
						<div key={item.head} className='rounded-xl border border-brand-border bg-brand-surface/80 p-6'>
							<p className='text-sm font-semibold text-brand-text-primary'>{item.head}</p>
							<p className='mt-2 text-sm text-brand-text-muted'>{item.copy}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
