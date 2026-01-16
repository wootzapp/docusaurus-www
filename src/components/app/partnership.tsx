import React from "react";

const schedulerFeatures = [
	{
		title: "Short-Horizon Diversified (SHDS)",
		description: "Maximize task coverage by mixing easy and hard tasks with adaptive horizons. Prevents overfitting while maintaining throughput.",
	},
	{
		title: "Bandit-Time Scheduling",
		description: "Optimizes for reward-per-second using UCB scores and variance tracking. Perfect for high-efficiency training runs.",
	},
	{
		title: "GRPO Grouping",
		description: "Automatic task grouping ensures K trajectories per task for advantage computation, compatible with modern RL algorithms.",
	},
	{
		title: "Early Stop Policies",
		description: "DomProgress and visual hash monitoring prevent wasted compute on stuck or looped episodes.",
	},
];

export function PartnerShip() {
	return (
		<section className='sci-grid relative overflow-hidden bg-brand-neutral-100 py-[72px] text-brand-base lg:py-32' id='delivery-formats'>
			<div className='absolute inset-0 sci-scanlines sci-scanlines--soft pointer-events-none' />
			<div className='container-custom relative z-10 flex flex-col gap-12'>
				<div className='mx-auto max-w-3xl text-center flex flex-col gap-4'>
					<span className='sci-chip mx-auto inline-flex w-fit items-center rounded-full border-dashed px-5 py-2 text-xs font-bold uppercase tracking-[0.28em] text-brand-accent-100 shadow-sm font-mono'>
						Advanced Scheduling
					</span>
					<h2 className='font-matter text-section font-bold sm:text-section-lg'>
						Maximize Throughput with Smart Scheduling
					</h2>
					<p className='text-body-sm text-brand-neutral-500 sm:text-body'>
						Raw speed isn't enough. We provide the scheduling algorithms to make sure every GPU cycle counts.
					</p>
				</div>

				<div className='grid gap-5 md:gap-8 md:grid-cols-2'>
					{schedulerFeatures.map((feature) => (
						<div key={feature.title} className='relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-brand-neutral-300/80 bg-white/70 p-6 shadow-[0_24px_60px_-45px_rgba(31,19,13,0.35)] backdrop-blur sm:p-8'>
							<div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent-100/40 to-transparent' />
							<h3 className='font-mono text-subsection font-semibold text-brand-base'>{feature.title}</h3>
							<p className='text-body-sm text-brand-base/80'>
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
