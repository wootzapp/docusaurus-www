const rewardAreas = [
	{
		title: "Rubric-Scoped Evidence",
		description: "Screenshots and DOM state are grouped against specific checks so subtle failures can be caught without noisy context.",
	},
	{
		title: "Process Reward",
		description: "Execution quality is scored separately: incomplete subtasks, hallucinated actions, and side effects are not hidden by a lucky final state.",
	},
	{
		title: "Outcome Label",
		description: "The final user-visible goal is checked independently from the agent's intermediate process.",
	},
	{
		title: "Failure Separation",
		description: "Agent reasoning errors are separated from environment blockers like login state, missing inventory, or unavailable test data.",
	},
	{
		title: "Privacy Ledger",
		description: "Retained, redacted, and constrained artifacts are documented alongside the environment.",
	},
];

export function BeyondDesign() {
	return (
		<section className='sci-grid relative overflow-hidden bg-brand-base py-[72px] text-brand-text-primary lg:py-32'>
			<div className='absolute inset-0 sci-scanlines sci-scanlines--strong pointer-events-none' />
			<div className='container-custom relative z-10 grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]'>
				<div className='flex flex-col gap-6'>
					<span className='sci-chip inline-flex w-fit items-center rounded-full border-dashed border-brand-accent-200/60 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent-100 shadow-[0_0_30px_-20px_rgba(242,139,50,0.9)] backdrop-blur-sm font-mono'>
						Browser Evidence
					</span>
					<h2 className='font-matter text-section font-bold sm:text-section-lg'>
						Browser evidence makes privacy-reviewed RL inspectable.
					</h2>
					<p className='text-body-sm text-brand-text-secondary sm:text-body'>
						Reliable RL starts with reliable verifiers. Browser evidence shows what actually happened: what was visible, what changed, what was submitted, and whether the user outcome was satisfied.
					</p>
					<div className='sci-panel glow-box flex flex-col gap-3 rounded-2xl p-6 sm:p-8'>
						<h3 className='font-matter text-subsection font-bold text-brand-text-primary'>Private enterprise data, packaged as a gym.</h3>
						<p className='text-body-sm text-brand-text-secondary sm:text-body'>
							W8-RL uses the renderer fork to preserve verifier evidence while documenting what sensitive fields were removed, constrained, or kept inside the deployment.
						</p>
					</div>
					<p className='text-body-sm text-brand-text-secondary sm:text-body'>
						Process rewards, outcome labels, failure separation, and privacy decisions travel with every environment.
					</p>
				</div>

				<div className='flex flex-col gap-5'>
					{rewardAreas.map((area) => (
						<article key={area.title} className='sci-chip flex flex-col gap-2 rounded-2xl p-6 shadow-lg shadow-brand-base/30'>
							<h4 className='font-mono text-subsection font-semibold text-brand-text-primary'>{area.title}</h4>
							<p className='text-body-sm text-brand-text-secondary sm:text-body'>{area.description}</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
