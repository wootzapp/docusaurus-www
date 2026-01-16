const rewardAreas = [
	{
		title: "Sample Efficiency",
		description: "Reach target scores with 4x fewer samples using our dense rewards.",
	},
	{
		title: "Reward Gradient",
		description: "Monotonic rewards that don't plateau, guiding models through near-misses.",
	},
	{
		title: "Dense Signals",
		description: "Feedback on every render, not just sparse pass/fail flags.",
	},
	{
		title: "Determinism",
		description: "Locked viewports, fonts, and time for reproducible grading.",
	},
	{
		title: "Scale",
		description: "Run 1000s of concurrent environments with minimal overhead.",
	},
];

export function BeyondDesign() {
	return (
		<section className='bg-brand-base py-[72px] lg:py-32 text-brand-text-primary'>
			<div className='container-custom grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]'>
				<div className='flex flex-col gap-6'>
					<span className='inline-flex w-fit items-center rounded-full border border-brand-accent-100/50 bg-brand-accent-100/10 px-5 py-2 text-sm font-bold uppercase tracking-widest text-brand-accent-100 shadow-sm backdrop-blur-sm'>
						ChromiumRL Signals
					</span>
					<h2 className='font-matter text-section font-bold sm:text-section-lg'>
						Rewards from the Metal Up
					</h2>
					<p className='text-body-sm text-brand-text-secondary sm:text-body'>
						Because we own the renderer, we can grade layout stability, paint events, and network purity—signals impossible to get from Selenium or Playwright.
					</p>
					<div className='flex flex-col gap-3 rounded-2xl border border-brand-border bg-brand-surface/60 p-6 sm:p-8'>
						<h3 className='font-matter text-subsection font-bold text-brand-text-primary'>Proof of Superiority</h3>
						<p className='text-body-sm text-brand-text-secondary sm:text-body'>
							Our rewards show higher monotonicity and better near-miss separation than standard pass/fail tests. We don't just tell you if you failed—we tell you by how much.
						</p>
					</div>
					<p className='text-body-sm text-brand-text-secondary sm:text-body'>
						Every pixel, every DOM node, and every network request is part of the grade.
					</p>
				</div>

				<div className='flex flex-col gap-5'>
					{rewardAreas.map((area) => (
						<article key={area.title} className='flex flex-col gap-2 rounded-2xl border border-brand-border bg-brand-surface/70 p-6 shadow-lg shadow-brand-base/20'>
							<h4 className='font-matter text-subsection font-bold text-brand-text-primary'>{area.title}</h4>
							<p className='text-body-sm text-brand-text-secondary sm:text-body'>{area.description}</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
