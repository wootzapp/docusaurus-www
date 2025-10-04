export function BrowserPlatform() {
	return (
		<section className='bg-brand-base py-24 text-brand-text-primary'>
			<div className='container-custom flex flex-col gap-12'>
				<div className='max-w-3xl flex flex-col gap-4'>
					<span className='inline-flex w-fit items-center gap-2 rounded-full border border-brand-accent-100/40 bg-brand-surface/70 px-4 py-1 text-xs uppercase tracking-[0.2em] text-brand-text-secondary'>
						Enterprise browser platform
					</span>
					<h2 className='font-matter text-3xl font-semibold leading-tight sm:text-4xl'>
						Secure browsing that turns a global gig workforce into a single expert marketplace for RL environments
					</h2>
					<p className='text-sm text-brand-text-secondary sm:text-base'>
						WootzApp gives LLM cos a managed, Chromium-based browser with embedded automation—complete with zero-trust isolation, programmable task routing, RL environment generation, and instant global payouts.
					</p>
				</div>

				<div className='grid gap-6 md:grid-cols-3'>
					<div className='flex h-full flex-col gap-3 rounded-2xl border border-brand-border bg-brand-surface px-6 py-6 shadow-lg shadow-brand-base/25'>
						<span className='text-xs font-semibold uppercase tracking-[0.3em] text-brand-text-secondary'>Productivity</span>
						<h3 className='font-matter text-lg font-semibold text-brand-text-primary'>Embed AI data tasks directly in browser journeys</h3>
						<p className='text-sm text-brand-text-secondary'>
							Trigger labeling, validation, and review flows natively while contributors stay productive and data quality stays governed.
						</p>
					</div>

					<div className='flex h-full flex-col gap-3 rounded-2xl border border-brand-border bg-brand-surface px-6 py-6 shadow-lg shadow-brand-base/25'>
						<span className='text-xs font-semibold uppercase tracking-[0.3em] text-brand-text-secondary'>Automation</span>
						<h3 className='font-matter text-lg font-semibold text-brand-text-primary'>In-browser orchestration</h3>
						<p className='text-sm text-brand-text-secondary'>
							A programmable rules engine coordinates task routing, consensus validation, and reward triggers so operations run in real time without manual oversight.
						</p>
					</div>

					<div className='flex h-full flex-col gap-3 rounded-2xl border border-brand-border bg-brand-surface px-6 py-6 shadow-lg shadow-brand-base/25'>
						<span className='text-xs font-semibold uppercase tracking-[0.3em] text-brand-text-secondary'>Scale</span>
						<h3 className='font-matter text-lg font-semibold text-brand-text-primary'>Mobile-optimized performance</h3>
						<p className='text-sm text-brand-text-secondary'>
							Low-latency rendering and offline-aware sync let distributed teams contribute from any device while your infrastructure stays observant and compliant.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default BrowserPlatform;
