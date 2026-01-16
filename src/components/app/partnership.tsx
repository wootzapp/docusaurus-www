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
		<section className='bg-brand-neutral-100 py-[72px] lg:py-32 text-brand-base' id='delivery-formats'>
			<div className='container-custom flex flex-col gap-12'>
				<div className='mx-auto max-w-3xl text-center flex flex-col gap-4'>
					<span className='mx-auto inline-flex w-fit items-center rounded-full border border-brand-neutral-400 bg-white px-5 py-2 text-sm font-bold uppercase tracking-widest text-brand-base shadow-sm'>
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
						<div key={feature.title} className='flex flex-col gap-4 rounded-2xl border border-brand-neutral-300 bg-white p-6 sm:p-8 shadow-sm'>
							<h3 className='font-matter text-subsection font-bold text-brand-base'>{feature.title}</h3>
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
