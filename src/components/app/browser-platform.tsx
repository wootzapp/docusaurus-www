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
		<section className='sci-grid relative overflow-hidden bg-brand-base py-[72px] text-brand-text-primary lg:py-32'>
			<div className='absolute inset-0 sci-scanlines sci-scanlines--strong pointer-events-none' />
			<div className='container-custom relative z-10 flex flex-col gap-12'>
				<div className='terminal-window'>
					<div className='terminal-header justify-start'>
						<span className='terminal-title'>Our Stance</span>
					</div>
					<div className="terminal-body grid gap-12 p-6 sm:p-10 lg:grid-cols-2">
						<div className="flex flex-col justify-center gap-6">
							<h2 className='font-mono text-subsection font-semibold tracking-[0.04em] text-brand-text-primary sm:text-subsection-lg'>
								We Build Environments,<br />Not Models
							</h2>
							<p className='font-matter text-body text-brand-text-secondary'>
								We are a software company that builds the gymnasium. You build the athlete.
								Standard browsers are black boxes. We rewrote the renderer and network stack to generate deterministic, browser-native rewards no one else can.
							</p>
						</div>

						<div className='flex flex-col gap-4'>
							{realtimeNarrative.map((entry, index) => (
								<div key={entry} className='sci-chip flex gap-4 rounded-xl p-4 transition hover:border-brand-accent-200/60'>
									<div className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-accent-100/10 text-sm font-bold text-brand-accent-200 ring-1 ring-brand-accent-100/20'>
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
					<div className='sci-panel flex h-full flex-col gap-3 rounded-2xl p-6 sm:p-8'>
						<span className='font-mono text-xs font-semibold uppercase tracking-[0.3em] text-brand-text-secondary'>The Gym</span>
						<h3 className='font-matter text-subsection font-bold text-brand-text-primary'>You Train, We Grade</h3>
						<p className='text-body-sm text-brand-text-secondary'>
							Models are dropped into our environments and tasked with objectives like building features or debugging. We grade their work based on success.
						</p>
					</div>

					<div className='sci-panel flex h-full flex-col gap-3 rounded-2xl p-6 sm:p-8'>
						<span className='font-mono text-xs font-semibold uppercase tracking-[0.3em] text-brand-text-secondary'>The Infra</span>
						<h3 className='font-matter text-subsection font-bold text-brand-text-primary'>We Bring the Rollout</h3>
						<p className='text-body-sm text-brand-text-secondary'>
							We provide the rollout system because we own the browser. Our v8 architecture delivers the 10s resets and async inference needed for scale.
						</p>
					</div>

					<div className='sci-panel flex h-full flex-col gap-3 rounded-2xl p-6 sm:p-8'>
						<span className='font-mono text-xs font-semibold uppercase tracking-[0.3em] text-brand-text-secondary'>The Goal</span>
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
