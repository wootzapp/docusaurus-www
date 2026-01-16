export function Experience() {
	return (
		<section className='bg-brand-base py-[72px] lg:py-32 text-brand-text-primary' id='get-started'>
			<div className='container-custom'>
				<div className='mx-auto max-w-4xl flex flex-col gap-8 text-center'>
					<div className='flex flex-col gap-5'>
						<span className='mx-auto inline-flex w-fit items-center rounded-full border border-brand-accent-100/50 bg-brand-accent-100/10 px-5 py-2 text-sm font-bold uppercase tracking-widest text-brand-accent-100 shadow-sm backdrop-blur-sm'>
							Validation
						</span>
						<h2 className='font-matter text-section font-bold sm:text-section-lg'>
							Validate Before You Train
						</h2>
						<p className='text-body-sm text-brand-text-secondary sm:text-body'>
							80% of rollout bugs are systems issues. Run our scorecard to verify throughput, latency, and reliability before you launch a training run.
						</p>
					</div>

					<div className='flex flex-col gap-4 sm:flex-row sm:justify-center'>
						<a className='inline-flex items-center justify-center rounded-full border border-brand-border bg-brand-accent-100 px-6 py-3 text-btn font-matter font-semibold text-brand-base shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg hover:text-brand-surface hover:no-underline' href='https://github.com/wootzapp/wootz-browser'>View Scorecard</a>
						<a className='inline-flex items-center justify-center rounded-full border border-brand-border px-6 py-3 text-btn font-matter font-semibold text-brand-text-secondary transition hover:text-brand-text-primary hover:no-underline' href='mailto:founders@wootzapp.com'>Partner With Us</a>
					</div>

					<div className='mt-8 rounded-2xl border border-brand-border bg-brand-surface/50 p-6 sm:p-8'>
						<p className='text-body-sm text-brand-text-secondary'>
							WootzApp — The Rollout Infrastructure for SWE-RL
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
