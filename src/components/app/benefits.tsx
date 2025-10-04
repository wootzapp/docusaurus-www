import React from "react";

const learningOutcomes = [
	{
		head: "Responsive layout",
		para: "Grid and flex orchestration, breakpoint strategy, spacing discipline, and content reflow expectations.",
	},
	{
		head: "Typography & tokens",
		para: "Scale, contrast, semantic roles, and consistent variable usage tied to design systems.",
	},
	{
		head: "Visual hierarchy",
		para: "Clear hero-to-module relationships, metadata handling, and narrative structure in markup.",
	},
	{
		head: "Accessibility by default",
		para: "Landmarks, focus management, motion preferences, alt text, and keyboard-safe interactions.",
	},
	{
		head: "Componentization",
		para: "Card schemas, semantic reuse, state separation, and constraints that avoid inline sprawl.",
	},
];

export function Benefits() {
	return (
		<section className='bg-brand-neutral-200 py-24 text-brand-base'>
			<div className='container-custom flex flex-col gap-12'>
				<div className='mx-auto max-w-3xl text-center flex flex-col gap-4'>
					<span className='mx-auto inline-flex items-center gap-2 rounded-full border border-brand-neutral-300 px-4 py-1 text-xs uppercase tracking-[0.2em] text-brand-neutral-500'>
						Tailored value
					</span>
					<h2 className='font-matter text-3xl font-semibold leading-tight text-brand-base sm:text-4xl'>
						Designed for builders, decision makers, and operators alike
					</h2>
				</div>

				<div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
					{learningOutcomes.map((item) => (
						<div key={item.head} className='flex h-full flex-col gap-3 rounded-2xl border border-brand-neutral-300 bg-white/95 p-6 text-left shadow-sm shadow-brand-base/5'>
							<h3 className='font-matter text-lg font-semibold text-brand-base'>
								{item.head}
							</h3>
							<p className='text-sm text-brand-base/80 sm:text-base'>
								{item.para}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
