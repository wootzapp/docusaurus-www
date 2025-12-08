const rewardAreas = [
	{
		title: "Data visualization",
		description: "verify chart accuracy, axis scaling, and style.",
	},
	{
		title: "Automation scripts",
		description: "confirm DOM interaction, form fills, and task completion.",
	},
	{
		title: "Markdown & LaTeX rendering",
		description: "measure readability, formatting, and structure.",
	},
	{
		title: "Simulation & game logic",
		description: "reward interactive correctness and frame behavior.",
	},
	{
		title: "Notebook workflows",
		description: "check plot alignment, execution flow, and output coherence.",
	},
];

export function BeyondDesign() {
	return (
		<section className='bg-brand-base py-[72px] lg:py-32 text-brand-text-primary'>
			<div className='container-custom grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]'>
				<div className='flex flex-col gap-6'>
					<span className='inline-flex w-fit items-center gap-2 rounded-full border border-brand-accent-100/40 bg-brand-surface/60 px-4 py-1 text-xs uppercase tracking-[0.2em] text-brand-text-secondary'>
						Beyond Design
					</span>
					<h2 className='font-matter text-section font-bold sm:text-section-lg'>
						Our browser doesn't just teach models to design — it can train them on any code that renders.
					</h2>
					<p className='text-body-sm text-brand-text-secondary sm:text-body'>
						By running real code inside a real browser, we can turn human judgment into reward signals for more than HTML and CSS.
					</p>
					<div className='flex flex-col gap-3 rounded-2xl border border-brand-border bg-brand-surface/60 p-6 sm:p-8'>
						<h3 className='font-matter text-subsection font-bold text-brand-text-primary'>Expanding the Reward Space</h3>
						<p className='text-body-sm text-brand-text-secondary sm:text-body'>
							Because our browser runs the actual code, we can define rewards for scenarios where correctness depends on the rendered result.
						</p>
					</div>
					<p className='text-body-sm text-brand-text-secondary sm:text-body'>
						Every rendered result becomes a measurable event. That’s how we turn the browser into the universal interface for human feedback in codegen RL.
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
