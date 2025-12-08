import React from "react";

export function PartnerShip() {
	return (
		<section className='bg-brand-neutral-100 py-[72px] lg:py-32 text-brand-base' id='delivery-formats'>
			<div className='container-custom flex flex-col gap-12'>
				<div className='mx-auto max-w-3xl text-center flex flex-col gap-4'>
					<span className='mx-auto inline-flex items-center gap-2 rounded-full border border-brand-neutral-300 px-4 py-1 text-xs uppercase tracking-[0.2em] text-brand-neutral-500'>
						Who It's For
					</span>
					<h2 className='font-matter text-section font-bold sm:text-section-lg'>
						For People Training Agents to Use Software, Not Just Chat
					</h2>
					<p className='text-body-sm text-brand-neutral-500 sm:text-body'>
						If you're building enterprise copilots or autonomous agents that need to interact with real software, Wootzapp gives you the human-in-the-loop tools to show them how — accurately and safely.
					</p>
				</div>

				<div className='grid gap-5 md:gap-8 md:grid-cols-2 lg:grid-cols-4'>
					<div className='flex flex-col gap-4 rounded-2xl border border-brand-neutral-300 bg-white p-6 sm:p-8 shadow-sm'>
						<h3 className='font-matter text-subsection font-bold text-brand-base'>Create Browser-Use RL Environments</h3>
						<p className='text-body-sm text-brand-base/80'>
							Transform apps like Jira, Salesforce, or Confluence into structured browser-use training environments for agent learning.
						</p>
					</div>

					<div className='flex flex-col gap-4 rounded-2xl border border-brand-neutral-300 bg-white p-6 sm:p-8 shadow-sm'>
						<h3 className='font-matter text-subsection font-bold text-brand-base'>Teach Agents to Navigate Software</h3>
						<p className='text-body-sm text-brand-base/80'>
							Build training grounds where agents learn to use enterprise software safely and efficiently, without production access.
						</p>
					</div>

					<div className='flex flex-col gap-4 rounded-2xl border border-brand-neutral-300 bg-white p-6 sm:p-8 shadow-sm'>
						<h3 className='font-matter text-subsection font-bold text-brand-base'>Simulate Computer-Use Workflows</h3>
						<p className='text-body-sm text-brand-base/80'>
							Create realistic computer-use RL environments that capture real-world workflows for alignment and training.
						</p>
					</div>

					<div className='flex flex-col gap-4 rounded-2xl border border-brand-neutral-300 bg-white p-6 sm:p-8 shadow-sm'>
						<h3 className='font-matter text-subsection font-bold text-brand-base'>Run Task-Level Evaluations</h3>
						<p className='text-body-sm text-brand-base/80'>
							Test agent capabilities on real UI tasks without modifying production systems or writing complex test harnesses.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
