export function Experience() {
	return (
		<section className='sci-grid relative overflow-hidden bg-brand-base py-[72px] text-brand-text-primary lg:py-32' id='get-started'>
			<div className='absolute inset-0 sci-scanlines sci-scanlines--strong pointer-events-none' />
			<div className='container-custom relative z-10'>
				<div className='mx-auto flex max-w-4xl flex-col gap-8 text-center'>
					<div className='flex flex-col gap-5'>
						<span className='sci-chip mx-auto inline-flex w-fit items-center rounded-full border-dashed px-5 py-2 text-xs font-bold uppercase tracking-[0.28em] text-brand-accent-200 shadow-sm backdrop-blur-sm font-mono'>
							Start A Privacy Program
						</span>
						<h2 className='font-matter text-section font-bold sm:text-section-lg'>
							Build W8-RL environments without losing control of private data.
						</h2>
						<p className='text-body-sm text-brand-text-secondary sm:text-body'>
							Bring us a private browser workflow. We will help map sensitive boundaries, capture the evidence, build process and outcome verification, and package the environment for model training.
						</p>
					</div>

					<div className='flex flex-col gap-4 sm:flex-row sm:justify-center'>
						<a className='inline-flex items-center justify-center rounded-md border border-brand-accent-200/60 bg-brand-accent-100 px-6 py-3 text-btn font-mono font-semibold tracking-[0.16em] text-brand-base shadow-[0_12px_35px_-18px_rgba(242,139,50,0.7)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_45px_-18px_rgba(242,139,50,0.85)] hover:text-brand-base hover:no-underline' href='/private'>See Forward Deployed Programs</a>
						<a className='inline-flex items-center justify-center rounded-md border border-brand-border px-6 py-3 text-btn font-mono font-semibold tracking-[0.16em] text-brand-text-secondary transition hover:text-brand-text-primary hover:border-brand-accent-200/60 hover:no-underline' href='mailto:founders@wootzapp.com'>Talk to WootzApp</a>
					</div>

					<div className='sci-panel mt-8 rounded-2xl p-6 sm:p-8'>
						<p className='text-body-sm text-brand-text-secondary'>
							WootzApp W8 - The privacy pipeline for browser-based RL.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
