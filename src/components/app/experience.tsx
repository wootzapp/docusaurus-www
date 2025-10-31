export function Experience() {
	return (
		<section className='bg-brand-base py-24 text-brand-text-primary' id='get-started'>
			<div className='container-custom'>
				<div className='mx-auto max-w-4xl flex flex-col gap-8 text-center'>
					<div className='flex flex-col gap-5'>
						<span className='mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-brand-accent-100/40 bg-brand-surface/60 px-4 py-1 text-xs uppercase tracking-[0.2em] text-brand-text-secondary'>
							Call to Action
						</span>
						<h2 className='font-matter text-3xl font-semibold leading-tight sm:text-4xl'>
							Bring Browser-Use RL to Life
						</h2>
						<p className='text-sm text-brand-text-secondary sm:text-base lg:text-lg'>
							Let humans teach agents in environments that actually reflect how work gets done. Wootzapp is how you build them.
						</p>
					</div>

					<div className='flex flex-col gap-4 sm:flex-row sm:justify-center'>
						<a className='inline-flex items-center justify-center rounded-lg border border-brand-border bg-brand-accent-100 px-8 py-4 text-base font-matter font-semibold text-brand-base shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg hover:text-brand-surface hover:no-underline' href='https://calendar.app.google.com/UCdRbHAHJYTwUEgF6'>Request Early Access</a>
						<a className='inline-flex items-center justify-center rounded-lg border border-brand-border px-8 py-4 text-base font-matter font-semibold text-brand-text-secondary transition hover:text-brand-text-primary hover:no-underline' href='https://calendar.app.google.com/UCdRbHAHJYTwUEgF6'>Talk to Us</a>
					</div>

					<div className='mt-8 rounded-2xl border border-brand-border bg-brand-surface/50 p-6'>
						<p className='text-sm text-brand-text-secondary'>
							Wootzapp — The Browser Built for Human-Guided Browser-Use RL
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
