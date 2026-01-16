import React from "react";

export function Browsing() {
	return (
		<section className='bg-white text-brand-base' id='what-we-do'>
			<div className='container-custom flex flex-col gap-10 py-[72px] lg:py-32'>
				<div className='max-w-4xl flex flex-col gap-4'>
					<span className='inline-flex w-fit items-center gap-2 rounded-full border border-brand-neutral-300 px-4 py-1 text-xs uppercase tracking-[0.2em] text-brand-neutral-500'>
						The Async Rollout System
					</span>
					<h2 className='font-matter text-section font-bold sm:text-section-lg'>
						Zero Barriers. Max Throughput.
					</h2>
					<p className='text-body text-brand-base/80'>
						Why do we build our own browser? To remove the synchronous barriers that slow down training. We rewrote the renderer and network stack to deliver the 10s resets and async inference needed to keep your GPUs fully fed.
					</p>
				</div>

				<div className='grid gap-5 md:gap-8 md:grid-cols-2'>
					<div className='flex flex-col gap-4 rounded-2xl border border-brand-neutral-300 bg-brand-neutral-100/80 p-6 sm:p-8 shadow-sm'>
						<h3 className='font-matter text-subsection font-bold text-brand-base'>WebGym-Style Semantics</h3>
						<p className='text-body-sm text-brand-base/80 sm:text-body'>
							We've removed the barriers that slow down training.
						</p>
						<ul className='flex flex-col gap-2 text-body-sm text-brand-base'>
							<li className='flex items-start gap-2'><span className='mt-1 h-1.5 w-1.5 rounded-full bg-brand-border/60' />No step barriers: Envs wait only on their own actions</li>
							<li className='flex items-start gap-2'><span className='mt-1 h-1.5 w-1.5 rounded-full bg-brand-border/60' />No episode barriers: Immediate slot reassignment</li>
							<li className='flex items-start gap-2'><span className='mt-1 h-1.5 w-1.5 rounded-full bg-brand-border/60' />Queue separation: Nav and screenshots don't block each other</li>
						</ul>
					</div>

					<div className='flex flex-col gap-4 rounded-2xl border border-brand-neutral-300 bg-brand-neutral-100/80 p-6 sm:p-8 shadow-sm'>
						<h3 className='font-matter text-subsection font-bold text-brand-base'>Legit Infrastructure</h3>
						<p className='text-body-sm text-brand-base/80 sm:text-body'>
							Built for scale, fault tolerance, and efficiency.
						</p>
						<ul className='flex flex-col gap-2 text-body-sm text-brand-base'>
							<li className='flex items-start gap-2'><span className='mt-1 h-1.5 w-1.5 rounded-full bg-brand-border/60' />Per-node routing keeps screenshots local to the GPU</li>
							<li className='flex items-start gap-2'><span className='mt-1 h-1.5 w-1.5 rounded-full bg-brand-border/60' />CDP disconnects handled as state transitions, not crashes</li>
							<li className='flex items-start gap-2'><span className='mt-1 h-1.5 w-1.5 rounded-full bg-brand-border/60' />Reference-based transport minimizes serialization overhead</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
