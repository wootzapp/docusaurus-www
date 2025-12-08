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
		<section className='bg-white py-[72px] lg:py-32 text-brand-base' id='example-environment'>
			<div className='container-custom flex flex-col gap-12'>
				<div className='grid gap-5 md:gap-8 lg:grid-cols-2'>
					<div className='flex flex-col gap-6 rounded-2xl border border-brand-neutral-300 bg-brand-neutral-100 p-6 sm:p-8 shadow-sm shadow-brand-base/5'>
						<span className='inline-flex w-fit items-center gap-2 rounded-full border border-brand-neutral-300 px-4 py-1 text-xs uppercase tracking-[0.2em] text-brand-neutral-500'>
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

					<div className='flex flex-col gap-4 rounded-2xl border border-brand-neutral-300 bg-brand-neutral-100 p-6 sm:p-8 shadow-sm shadow-brand-base/5'>
						<div className='grid gap-5 sm:grid-cols-2'>
							{tailoredValue.map((item) => (
								<div key={item.head} className='flex h-full flex-col gap-2 rounded-xl border border-brand-neutral-200 bg-white/90 p-5 sm:p-6 text-left shadow-sm shadow-brand-base/5'>
									<h3 className='font-matter text-body font-bold text-brand-base'>
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
