export function Experience() {
	return (
		<section className='bg-brand-base py-24 text-brand-text-primary' id='get-started'>
			<div className='container-custom'>
				<div className='grid gap-8 lg:grid-cols-2'>
					<div className='flex flex-col gap-5 rounded-3xl border border-brand-border bg-brand-surface/70 p-8 shadow-lg shadow-brand-base/30'>
						<span className='inline-flex w-fit items-center gap-2 rounded-full border border-brand-accent-100/40 bg-brand-surface/60 px-4 py-1 text-xs uppercase tracking-[0.2em] text-brand-text-secondary'>
							Integrations
						</span>
						<h2 className='font-matter text-3xl font-semibold leading-tight sm:text-4xl'>
							Drop environments into your training and evaluation pipelines
						</h2>
						<p className='text-sm text-brand-text-secondary sm:text-base'>
							Run training loops with our HTTP RL API or Verifiers’{' '}
							<a className='text-brand-text-primary underline underline-offset-4' href='https://verifiers.readthedocs.io/?utm_source=chatgpt.com'>GRPOTrainer</a>. Detailed guides cover evaluation flows, scoring, and environment publishing.
						</p>
						<ul className='flex flex-col gap-3 text-sm text-brand-text-secondary sm:text-base'>
							<li className='flex items-start gap-3'>
								<span className='mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-accent-200' />
								Ecosystem: compatible with Prime Intellect’s Environments Hub, CLI, and Prime-RL workflows.
							</li>
						</ul>
						<div>
							<a className='mt-4 inline-flex items-center justify-center rounded-lg border border-brand-border bg-brand-accent-100 px-4 py-2 text-sm font-matter font-semibold text-brand-base shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg' href='https://docs.primeintellect.ai/tutorials-environments/environments?utm_source=chatgpt.com'>Explore docs</a>
						</div>
					</div>

					<div className='flex flex-col gap-6 rounded-3xl border border-brand-border bg-brand-surface/50 p-8 shadow-lg shadow-brand-base/30'>
						<span className='inline-flex w-fit items-center gap-2 rounded-full border border-brand-accent-100/40 bg-brand-surface/60 px-4 py-1 text-xs uppercase tracking-[0.2em] text-brand-text-secondary'>
							Get started
						</span>
						<p className='text-sm text-brand-text-secondary sm:text-base'>
							Pick the next step that unblocks your team.
						</p>
						<ul className='flex flex-col gap-3 text-sm text-brand-text-secondary sm:text-base'>
							<li className='flex items-start gap-3'><span className='mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-accent-200' />See a sample environment (Dockerized RL API + Verifiers package)</li>
							<li className='flex items-start gap-3'><span className='mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-accent-200' />Book a technical walkthrough covering reward design, governance, and integrations</li>
							<li className='flex items-start gap-3'><span className='mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-accent-200' />Pilot on your design system (tokens, components, layout rules)</li>
						</ul>
						<div className='flex flex-col gap-3 sm:flex-row'>
							<a className='inline-flex items-center justify-center rounded-lg border border-brand-border bg-brand-accent-100 px-6 py-3 text-sm font-matter font-semibold text-brand-base shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg' href='mailto:founders@wootzapp.com'>Contact us</a>
							<a className='inline-flex items-center justify-center rounded-lg border border-brand-border px-6 py-3 text-sm font-matter font-semibold text-brand-text-secondary transition hover:text-brand-text-primary' href='https://cal.com'>Schedule a walkthrough</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
