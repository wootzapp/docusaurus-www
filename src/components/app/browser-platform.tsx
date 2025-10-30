export function BrowserPlatform() {
	return (
		<section className='bg-brand-base py-24 text-brand-text-primary'>
			<div className='container-custom flex flex-col gap-12'>
				<div className='max-w-3xl flex flex-col gap-4'>
					<span className='inline-flex w-fit items-center gap-2 rounded-full border border-brand-accent-100/40 bg-brand-surface/70 px-4 py-1 text-xs uppercase tracking-[0.2em] text-brand-text-secondary'>
						Our Stand
					</span>
					<h2 className='font-matter text-3xl font-semibold leading-tight sm:text-4xl'>
						This Is a Human Ops Problem
					</h2>
					<p className='text-sm text-brand-text-secondary sm:text-base'>
						We believe the next leap in agent performance won't come from better GPUs or simulators — it will come from helping humans build better training environments. Our approach? A new kind of browser, designed from scratch to let domain experts author, simulate, and replay enterprise workflows for agent learning.
					</p>
				</div>

				<div className='grid gap-6 md:grid-cols-3'>
					<div className='flex h-full flex-col gap-3 rounded-2xl border border-brand-border bg-brand-surface px-6 py-6 shadow-lg shadow-brand-base/25'>
						<span className='text-xs font-semibold uppercase tracking-[0.3em] text-brand-text-secondary'>Not Infra</span>
						<h3 className='font-matter text-lg font-semibold text-brand-text-primary'>Not Evaluators</h3>
						<p className='text-sm text-brand-text-secondary'>
							We're not another infra layer or benchmarking suite. Wootzapp is for the humans who teach agents — the product leads, QA engineers, operators, and domain specialists.
						</p>
					</div>

					<div className='flex h-full flex-col gap-3 rounded-2xl border border-brand-border bg-brand-surface px-6 py-6 shadow-lg shadow-brand-base/25'>
						<span className='text-xs font-semibold uppercase tracking-[0.3em] text-brand-text-secondary'>Purpose-Built</span>
						<h3 className='font-matter text-lg font-semibold text-brand-text-primary'>Human-Centric RL Authoring</h3>
						<p className='text-sm text-brand-text-secondary'>
							We give them 10x better tools to build browser-use RL environments from real apps — with visual authoring, replay testing, and real-time feedback loops.
						</p>
					</div>

					<div className='flex h-full flex-col gap-3 rounded-2xl border border-brand-border bg-brand-surface px-6 py-6 shadow-lg shadow-brand-base/25'>
						<span className='text-xs font-semibold uppercase tracking-[0.3em] text-brand-text-secondary'>From Scratch</span>
						<h3 className='font-matter text-lg font-semibold text-brand-text-primary'>A custom browser</h3>
						<p className='text-sm text-brand-text-secondary'>
							Not a Chrome extension or scraper. Wootzapp is engineered from the ground up specifically for authoring browser-use and computer-use RL environments.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default BrowserPlatform;
