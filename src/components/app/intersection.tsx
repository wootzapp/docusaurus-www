import React from "react";

const tailoredValue = [
	{
		head: "Responsive layout",
		copy: "Models practice grids, breakpoints, and spacing with human review loops built in.",
	},
	{
		head: "Design tokens",
		copy: "Reward functions enforce typography, color, and component tokens your systems rely on.",
	},
	{
		head: "Accessibility",
		copy: "Specs demand semantic structure, focus states, and motion-safe defaults across viewports.",
	},
	{
		head: "Reusable modules",
		copy: "Environment DSL keeps cards, rails, and promos composable instead of one-off markup.",
	},
];

export function Intersection() {
	return (
		<section className='sci-grid relative overflow-hidden bg-brand-neutral-100 py-[72px] text-brand-base lg:py-32' id='example-environment'>
			<div className='absolute inset-0 sci-scanlines sci-scanlines--soft pointer-events-none' />
			<div className='container-custom relative z-10 flex flex-col gap-12'>
				<div className='grid gap-5 md:gap-8 lg:grid-cols-2'>
					<div className='relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-brand-neutral-300/80 bg-white/70 p-6 shadow-[0_24px_60px_-45px_rgba(31,19,13,0.35)] backdrop-blur sm:p-8'>
						<div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent-100/40 to-transparent' />
						<span className='sci-chip inline-flex w-fit items-center rounded-full border-dashed px-5 py-2 text-xs font-bold uppercase tracking-[0.28em] text-brand-accent-100 shadow-sm font-mono'>
							Example environment (news homepage)
						</span>
						<p className='text-body-sm text-brand-base sm:text-body'>
							Spec locks in grid (`2fr 1fr`), hero ratios, section order, tokens, and policy boundaries. Reward suites check structure, semantics, responsiveness, accessibility, and compliance.
						</p>
						<ul className='flex flex-col gap-2 text-body-sm text-brand-base'>
							<li className='flex items-start gap-2'><span className='mt-1 h-1.5 w-1.5 rounded-full bg-brand-border/60' />Ship as Dockerized RL APIs or Verifiers-ready packages.</li>
							<li className='flex items-start gap-2'><span className='mt-1 h-1.5 w-1.5 rounded-full bg-brand-border/60' />Scorecards surface structure, token, and accessibility deltas.</li>
							<li className='flex items-start gap-2'><span className='mt-1 h-1.5 w-1.5 rounded-full bg-brand-border/60' />Every drop includes spec, DSL, and policy versions for audit trails.</li>
						</ul>
					</div>

					<div className='relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-brand-neutral-300/80 bg-white/70 p-6 shadow-[0_24px_60px_-45px_rgba(31,19,13,0.35)] backdrop-blur sm:p-8'>
						<div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent-100/40 to-transparent' />
						<div className='grid gap-5 sm:grid-cols-2'>
							{tailoredValue.map((item) => (
								<div key={item.head} className='relative flex h-full flex-col gap-2 rounded-xl border border-brand-neutral-200/80 bg-white/90 p-5 text-left shadow-sm shadow-brand-base/5 sm:p-6'>
									<h3 className='font-mono text-body font-semibold text-brand-base'>
										{item.head}
									</h3>
									<p className='text-body-sm text-brand-base/80'>
										{item.copy}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
