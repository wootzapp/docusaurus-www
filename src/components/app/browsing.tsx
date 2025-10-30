import React from "react";

export function Browsing() {
	return (
		<section className='bg-white text-brand-base' id='what-we-do'>
			<div className='container-custom flex flex-col gap-10 py-24'>
				<div className='max-w-4xl flex flex-col gap-4'>
					<span className='inline-flex w-fit items-center gap-2 rounded-full border border-brand-neutral-300 px-4 py-1 text-xs uppercase tracking-[0.2em] text-brand-neutral-500'>
						The Wootzapp Browser
					</span>
					<h2 className='font-matter text-3xl font-semibold leading-tight sm:text-4xl'>
						A Purpose-Built IDE for Browser-Use RL
					</h2>
					<p className='text-base text-brand-base/80 sm:text-lg'>
						Wootzapp is a fully custom browser that records and transforms real enterprise UI sessions into structured, reusable RL environments. Think of it as a simulation IDE for building browser-use and computer-use training grounds.
					</p>
				</div>

				<div className='grid gap-8 md:grid-cols-2'>
					<div className='flex flex-col gap-4 rounded-2xl border border-brand-neutral-300 bg-brand-neutral-100/80 p-8 shadow-sm'>
						<h3 className='font-matter text-xl font-semibold text-brand-base'>Clone browser apps into training environments</h3>
						<p className='text-base text-brand-base/80'>
							No code required. Transform real enterprise UIs into browser-use RL environments that agents can learn from.
						</p>
						<ul className='flex flex-col gap-2 text-sm text-brand-base'>
							<li className='flex items-start gap-2'><span className='mt-1 h-1.5 w-1.5 rounded-full bg-brand-border/60' />Capture rich user traces across multi-step enterprise workflows</li>
							<li className='flex items-start gap-2'><span className='mt-1 h-1.5 w-1.5 rounded-full bg-brand-border/60' />Define golden states, goals, and reward signals visually</li>
							<li className='flex items-start gap-2'><span className='mt-1 h-1.5 w-1.5 rounded-full bg-brand-border/60' />Replay and test agents safely against realistic UIs</li>
						</ul>
					</div>

					<div className='flex flex-col gap-4 rounded-2xl border border-brand-neutral-300 bg-brand-neutral-100/80 p-8 shadow-sm'>
						<h3 className='font-matter text-xl font-semibold text-brand-base'>Built for human-in-the-loop authoring</h3>
						<p className='text-base text-brand-base/80'>
							The browser handles the complexity so domain experts can focus on curating high-quality computer-use workflows for agent training.
						</p>
						<ul className='flex flex-col gap-2 text-sm text-brand-base'>
							<li className='flex items-start gap-2'><span className='mt-1 h-1.5 w-1.5 rounded-full bg-brand-border/60' />Create browser-use RL environments from apps like Jira, Salesforce, Confluence</li>
							<li className='flex items-start gap-2'><span className='mt-1 h-1.5 w-1.5 rounded-full bg-brand-border/60' />Teach agents to navigate enterprise software safely and efficiently</li>
							<li className='flex items-start gap-2'><span className='mt-1 h-1.5 w-1.5 rounded-full bg-brand-border/60' />Simulate real-world computer-use workflows for alignment and training</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
