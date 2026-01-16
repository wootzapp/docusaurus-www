export function BrowserPlatform() {
	return (
		<section className='bg-brand-base py-[72px] lg:py-32 text-brand-text-primary'>
			<div className='container-custom flex flex-col gap-12'>
				<div className='max-w-3xl flex flex-col gap-4'>
					<span className='inline-flex w-fit items-center gap-2 rounded-full border border-brand-accent-100/40 bg-brand-surface/70 px-4 py-1 text-xs uppercase tracking-[0.2em] text-brand-text-secondary'>
						Our Stance
					</span>
					<h2 className='font-matter text-section font-bold sm:text-section-lg'>
						We Don't Compete on Models. We Build Environments.
					</h2>
					<p className='text-body-sm text-brand-text-secondary sm:text-body'>
						We are a software company that builds RL environments and sells them to leading AI labs. We don't train models directly. Instead, we provide the ground-truth grading and rollout infrastructure—from the renderer to the network stack—that standard web drivers simply cannot match.
					</p>
				</div>

				<div className='grid gap-5 md:gap-8 md:grid-cols-3'>
					<div className='flex h-full flex-col gap-3 rounded-2xl border border-brand-border bg-brand-surface p-6 sm:p-8 shadow-lg shadow-brand-base/25'>
						<span className='text-xs font-semibold uppercase tracking-[0.3em] text-brand-text-secondary'>The Gym</span>
						<h3 className='font-matter text-subsection font-bold text-brand-text-primary'>You Train, We Grade</h3>
						<p className='text-body-sm text-brand-text-secondary'>
							Models are dropped into our environments and tasked with objectives like building features or debugging. We grade their work based on success.
						</p>
					</div>

					<div className='flex h-full flex-col gap-3 rounded-2xl border border-brand-border bg-brand-surface p-6 sm:p-8 shadow-lg shadow-brand-base/25'>
						<span className='text-xs font-semibold uppercase tracking-[0.3em] text-brand-text-secondary'>The Infra</span>
						<h3 className='font-matter text-subsection font-bold text-brand-text-primary'>We Bring the Rollout</h3>
						<p className='text-body-sm text-brand-text-secondary'>
							We provide the rollout system because we own the browser. Our v8 architecture delivers the 10s resets and async inference needed for scale.
						</p>
					</div>

					<div className='flex h-full flex-col gap-3 rounded-2xl border border-brand-border bg-brand-surface p-6 sm:p-8 shadow-lg shadow-brand-base/25'>
						<span className='text-xs font-semibold uppercase tracking-[0.3em] text-brand-text-secondary'>The Goal</span>
						<h3 className='font-matter text-subsection font-bold text-brand-text-primary'>Automate Everything</h3>
						<p className='text-body-sm text-brand-text-secondary'>
							Our current focus is automating software engineering, but our long-term goal is to enable the automation of all valuable work in the economy.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default BrowserPlatform;
