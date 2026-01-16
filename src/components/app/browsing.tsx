import React from "react";

export function Browsing() {
	return (
		<section className='bg-white text-brand-base' id='what-we-do'>
			<div className='container-custom flex flex-col gap-10 py-[72px] lg:py-32'>
				<div className='max-w-4xl flex flex-col gap-4'>
					<span className='inline-flex w-fit items-center rounded-full border border-brand-neutral-400 bg-white px-5 py-2 text-sm font-bold uppercase tracking-widest text-brand-base shadow-sm'>
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
					<div className='flex flex-col gap-4 rounded-2xl border border-brand-neutral-300 bg-brand-neutral-100/50 p-6 sm:p-8 shadow-sm'>
						<h3 className='font-matter text-subsection font-bold text-brand-base'>Pluggable Scheduling</h3>
						<ul className='flex flex-col gap-4 text-body-sm text-brand-base'>
							<li>
								<span className="font-bold text-brand-base">SHDS</span>: <span className="text-brand-base/80">Short-Horizon Diversified Scheduler for coverage</span>
							</li>
							<li>
								<span className="font-bold text-brand-base">Bandit-Time</span>: <span className="text-brand-base/80">Optimize reward/sec via UCB</span>
							</li>
							<li>
								<span className="font-bold text-brand-base">GRPO</span>: <span className="text-brand-base/80">Automatic K-rollout grouping for advantage</span>
							</li>
						</ul>
					</div>

					<div className='flex flex-col gap-4 rounded-2xl border border-brand-neutral-300 bg-brand-neutral-100/50 p-6 sm:p-8 shadow-sm'>
						<h3 className='font-matter text-subsection font-bold text-brand-base'>Emulator-Centric Control</h3>
						<ul className='flex flex-col gap-4 text-body-sm text-brand-base'>
							<li>
								<span className="font-bold text-brand-base">Userspace Reboot</span>: <span className="text-brand-base/80">10s resets (kernel stays hot)</span>
							</li>
							<li>
								<span className="font-bold text-brand-base">Browser-Owned CDP</span>: <span className="text-brand-base/80">Disconnects are state transitions</span>
							</li>
							<li>
								<span className="font-bold text-brand-base">Direct Injection</span>: <span className="text-brand-base/80">DOM signals bypass the wire</span>
							</li>
						</ul>
					</div>

					<div className='flex flex-col gap-4 rounded-2xl border border-brand-neutral-300 bg-brand-neutral-100/50 p-6 sm:p-8 shadow-sm'>
						<h3 className='font-matter text-subsection font-bold text-brand-base'>WebGym-Style Async</h3>
						<ul className='flex flex-col gap-4 text-body-sm text-brand-base'>
							<li>
								<span className="font-bold text-brand-base">No Barriers</span>: <span className="text-brand-base/80">Zero blocking on step/episode boundaries</span>
							</li>
							<li>
								<span className="font-bold text-brand-base">Per-Node Routing</span>: <span className="text-brand-base/80">Local screenshot loading</span>
							</li>
							<li>
								<span className="font-bold text-brand-base">Op Queues</span>: <span className="text-brand-base/80">Navigation/Screenshot isolation</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
