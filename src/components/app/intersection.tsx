import React from "react";

const tailoredValue = [
	{
		head: "Sensitive surfaces",
		copy: "Fields, documents, and records are tagged before they become environment evidence.",
	},
	{
		head: "Rubric criteria",
		copy: "Process checks stay specific and non-overlapping so failures do not cascade.",
	},
	{
		head: "Outcome evidence",
		copy: "The final browser state proves whether the user's request was actually completed.",
	},
	{
		head: "Privacy ledger",
		copy: "Retained snapshots, redactions, and delivery constraints are attached to the environment.",
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
							Example environment (enterprise workflow)
						</span>
						<p className='text-body-sm text-brand-base sm:text-body'>
							A claims, ERP, or card-operations workflow becomes a W8-RL package: approved screens, sanitized browser evidence, rubric-scored process checks, and outcome labels tied to the final browser state.
						</p>
						<ul className='flex flex-col gap-2 text-body-sm text-brand-base'>
							<li className='flex items-start gap-2'><span className='mt-1 h-1.5 w-1.5 rounded-full bg-brand-border/60' />Ship as privacy-reviewed RL APIs or verifier-ready packages.</li>
							<li className='flex items-start gap-2'><span className='mt-1 h-1.5 w-1.5 rounded-full bg-brand-border/60' />Scorecards separate agent mistakes from environment blockers.</li>
							<li className='flex items-start gap-2'><span className='mt-1 h-1.5 w-1.5 rounded-full bg-brand-border/60' />Every drop includes task specs, rubrics, and artifact decisions.</li>
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
