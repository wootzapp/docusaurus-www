import React from "react";

export function Browsing() {
	return (
		<section className='sci-grid relative overflow-hidden bg-brand-neutral-100 text-brand-base' id='what-we-do'>
			<div className='absolute inset-0 sci-scanlines sci-scanlines--soft pointer-events-none' />
			<div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent-100/30 to-transparent' />
			<div className='container-custom relative z-10 flex flex-col gap-10 py-[72px] lg:py-32'>
				<div className='max-w-4xl flex flex-col gap-4'>
					<span className='sci-chip inline-flex w-fit items-center rounded-full border-dashed px-5 py-2 text-xs font-bold uppercase tracking-[0.28em] text-brand-accent-100 shadow-sm font-mono'>
						The Async Rollout System
					</span>
					<h2 className='font-matter text-section font-bold sm:text-section-lg'>
						v8 Architecture: The Rollout Engine for SWE-RL
					</h2>
					<p className='text-body text-brand-base/80'>
						A fully async, emulator-centric rollout system designed to saturate GPUs. Features pluggable scheduling algorithms, userspace reboots, and per-node inference routing.
					</p>
				</div>

				<div className='grid gap-5 md:gap-8 md:grid-cols-2 lg:grid-cols-3'>
					<div className='relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-brand-neutral-300/80 bg-white/70 p-6 shadow-[0_24px_60px_-45px_rgba(31,19,13,0.35)] backdrop-blur sm:p-8'>
						<div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent-100/40 to-transparent' />
						<h3 className='font-matter text-subsection font-bold text-brand-base'>Pluggable Scheduling</h3>
						<ul className='flex flex-col gap-4 text-body-sm text-brand-base'>
							<li>
								<span className="font-bold text-brand-base font-mono">SHDS</span>: <span className="text-brand-base/80">Short-Horizon Diversified Scheduler for coverage</span>
							</li>
							<li>
								<span className="font-bold text-brand-base font-mono">Bandit-Time</span>: <span className="text-brand-base/80">Optimize reward/sec via UCB</span>
							</li>
							<li>
								<span className="font-bold text-brand-base font-mono">GRPO</span>: <span className="text-brand-base/80">Automatic K-rollout grouping for advantage</span>
							</li>
						</ul>
					</div>

					<div className='relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-brand-neutral-300/80 bg-white/70 p-6 shadow-[0_24px_60px_-45px_rgba(31,19,13,0.35)] backdrop-blur sm:p-8'>
						<div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent-100/40 to-transparent' />
						<h3 className='font-matter text-subsection font-bold text-brand-base'>Emulator-Centric Control</h3>
						<ul className='flex flex-col gap-4 text-body-sm text-brand-base'>
							<li>
								<span className="font-bold text-brand-base font-mono">Userspace Reboot</span>: <span className="text-brand-base/80">10s resets (kernel stays hot)</span>
							</li>
							<li>
								<span className="font-bold text-brand-base font-mono">Browser-Owned CDP</span>: <span className="text-brand-base/80">Disconnects are state transitions</span>
							</li>
							<li>
								<span className="font-bold text-brand-base font-mono">Direct Injection</span>: <span className="text-brand-base/80">DOM signals bypass the wire</span>
							</li>
						</ul>
					</div>

					<div className='relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-brand-neutral-300/80 bg-white/70 p-6 shadow-[0_24px_60px_-45px_rgba(31,19,13,0.35)] backdrop-blur sm:p-8'>
						<div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent-100/40 to-transparent' />
						<h3 className='font-matter text-subsection font-bold text-brand-base'>WebGym-Style Async</h3>
						<ul className='flex flex-col gap-4 text-body-sm text-brand-base'>
							<li>
								<span className="font-bold text-brand-base font-mono">No Barriers</span>: <span className="text-brand-base/80">Zero blocking on step/episode boundaries</span>
							</li>
							<li>
								<span className="font-bold text-brand-base font-mono">Per-Node Routing</span>: <span className="text-brand-base/80">Local screenshot loading</span>
							</li>
							<li>
								<span className="font-bold text-brand-base font-mono">Op Queues</span>: <span className="text-brand-base/80">Navigation/Screenshot isolation</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
