import React from "react";

const realtimeNarrative = [
	{
		title: "Private systems hold the scarce signal",
		copy: "Real workflows, business logic, edge cases, and operational context do not show up in public corpora.",
	},
	{
		title: "Privacy is what makes the signal movable",
		copy: "Data owners need to see what is retained, redacted, constrained, and documented before an asset can move downstream.",
	},
	{
		title: "Rewards have to be designed around the asset",
		copy: "W8 packages approved evidence into task specs, reward traces, rollouts, and environments where process quality and outcome success are scored separately.",
	},
];

export function BrowserPlatform() {
	return (
		<section className='sci-grid relative overflow-hidden bg-[#f4e2d1] py-[72px] text-brand-base lg:py-32'>
			<div className='absolute inset-0 sci-scanlines sci-scanlines--soft pointer-events-none' />
			<div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent-100/35 to-transparent' />
			<div className='container-custom relative z-10'>
				<div className='grid gap-8 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:items-stretch'>
					<div className='relative flex min-h-full flex-col justify-between gap-8 overflow-hidden rounded-2xl border border-brand-neutral-300/80 bg-white/75 p-6 shadow-[0_28px_80px_-55px_rgba(31,19,13,0.45)] backdrop-blur sm:p-8'>
						<div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent-100/60 to-transparent' />
						<div className='flex flex-col gap-5'>
							<span className='sci-chip inline-flex w-fit items-center rounded-full border-dashed bg-brand-base/90 px-5 py-2 text-xs font-bold uppercase tracking-[0.24em] text-brand-accent-200 shadow-sm font-mono'>
								Data Layer
							</span>
							<h2 className='font-matter text-section font-bold text-brand-base sm:text-section-lg'>
								The hardest part of RL is the data layer.
							</h2>
							<p className='text-body text-brand-base/80'>
								Training loops, inference servers, and orchestration are becoming commoditized. What still determines RL quality is the private data asset: realistic systems, privacy-reviewed evidence, replayable trajectories, and reliable rewards.
							</p>
						</div>
						<div className='rounded-xl border border-brand-neutral-300/80 bg-brand-neutral-100/80 p-5'>
							<p className='font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brand-accent-100'>
								W8-RL output
							</p>
							<p className='mt-3 text-body-sm text-brand-base/82'>
								Every environment ships with documentation of what was kept, what was removed, and why the asset is usable downstream.
							</p>
						</div>
					</div>

					<div className='grid gap-4'>
						<div className='relative overflow-hidden rounded-2xl border border-brand-neutral-300/80 bg-brand-base p-6 text-brand-text-primary shadow-[0_26px_70px_-55px_rgba(31,19,13,0.95)] sm:p-8'>
							<div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent-100/60 to-transparent' />
							<p className='max-w-3xl text-body text-brand-text-secondary'>
								Our forked browser renderer captures the verifier evidence RL needs: screenshots, DOM state, actions, outcomes, and replayable trajectories. W8 controls what leaves the enterprise boundary.
							</p>
						</div>
						<div className='grid gap-4 md:grid-cols-3'>
							{realtimeNarrative.map((entry, index) => (
								<article key={entry.title} className='relative flex min-h-full flex-col gap-4 overflow-hidden rounded-2xl border border-brand-neutral-300/80 bg-white/80 p-5 shadow-[0_22px_60px_-45px_rgba(31,19,13,0.35)] backdrop-blur sm:p-6'>
									<div className='font-mono text-xs font-bold text-brand-accent-100'>
										{(index + 1).toString().padStart(2, '0')}
									</div>
									<h3 className='font-matter text-body font-bold text-brand-base'>
										{entry.title}
									</h3>
									<p className='text-body-sm leading-relaxed text-brand-base/78'>
										{entry.copy}
									</p>
								</article>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default BrowserPlatform;
