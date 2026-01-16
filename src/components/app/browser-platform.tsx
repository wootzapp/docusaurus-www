import React from "react";

const realtimeNarrative = [
	"We provide the gymnasium. You build the athlete.",
	"Standard browsers are black boxes. We rewrote the renderer and network stack.",
	"This lets us generate deterministic, browser-native rewards no one else can.",
	"To drive this custom browser, we built the v8 Async Rollout System.",
	"Userspace reboots in 10s. Zero synchronous barriers.",
	"Our goal: Simulate and automate every task in the knowledge economy.",
];

export function BrowserPlatform() {
	return (
		<section className='bg-brand-base py-[72px] lg:py-32 text-brand-text-primary'>
			<div className='container-custom flex flex-col gap-12'>
				<div className='rounded-3xl border border-brand-border/60 bg-brand-surface/85 p-6 shadow-[0_32px_120px_-60px_rgba(12,10,9,0.8)] ring-1 ring-brand-overlay/30 sm:p-10'>
					<div className="grid gap-12 lg:grid-cols-2">
						<div className="flex flex-col justify-center gap-6">
							<span className='inline-flex w-fit items-center rounded-full border border-brand-accent-100/50 bg-brand-accent-100/10 px-5 py-2 text-sm font-bold uppercase tracking-widest text-brand-accent-100 shadow-sm backdrop-blur-sm'>
								Our Stance
							</span>
							<h2 className='font-matter text-subsection font-bold text-brand-text-primary sm:text-subsection-lg'>
								We Build Environments,<br />Not Models
							</h2>
							<p className='font-matter text-body text-brand-text-secondary'>
								We are a software company that builds the gymnasium. You build the athlete.
								Standard browsers are black boxes. We rewrote the renderer and network stack to generate deterministic, browser-native rewards no one else can.
							</p>
						</div>

						<div className='flex flex-col gap-4'>
							{realtimeNarrative.map((entry, index) => (
								<div key={entry} className='relative flex gap-4 rounded-xl border border-brand-border/30 bg-brand-surface/40 p-4 transition hover:bg-brand-surface/60'>
									<div className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-accent-100/10 text-sm font-bold text-brand-accent-100 ring-1 ring-brand-accent-100/20'>
										{(index + 1).toString().padStart(2, '0')}
									</div>
									<p className='text-sm text-brand-text-secondary'>
										{entry}
									</p>
								</div>
							))}
						</div>
					</div>
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
							We're starting with the hardest problem: software engineering. But our infrastructure is built to scale until every task in the knowledge economy can be simulated, graded, and automated.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default BrowserPlatform;
