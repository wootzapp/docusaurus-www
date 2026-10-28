import React from "react";
import CtaLink from "../editorial/cta-link";
import LayerTag, {type Layer} from "../home/layer-tag";
import {links} from "@site/src/data/research";

// The three things that build the model: two recorders and the embedded team.
const builders: {layer: Layer; copy: string}[] = [
	{layer: "hypervisor", copy: "Runs your harness as is. Records each process, network call, allow or deny, and file change."},
	{layer: "browser", copy: "Records the whole page at each step: exact values, control states, and content off screen."},
	{layer: "team", copy: "Writes the first eval with your engineers, trains the model, and stays until it goes live."},
];

export default function IntelligenceHero() {
	return (
		<section className='intel-ledger bg-ed-ink text-ed-canvas'>
			<div className='ed-container pt-6 lg:pt-8'>
				<div className='ed-eyebrow flex items-center justify-between gap-4 border-b border-ed-canvas/20 pb-4 text-ed-canvas/60'>
					<span>W8 Intelligence</span>
					<span className='hidden sm:inline'>For enterprises · WootzApp</span>
				</div>
				<h1 className='intel-display m-0 mt-10 lg:mt-14'>
					The right AI
					<br />
					is built <span className='text-ed-accent'>in-house.</span>
				</h1>
				<div className='mt-12 grid grid-cols-1 gap-12 pb-16 lg:mt-16 lg:grid-cols-12 lg:gap-10 lg:pb-20'>
					<div className='flex flex-col gap-7 lg:col-span-7'>
						<p className='ed-subhead m-0 max-w-[36rem]'>Ground truth from your own work. Our team embedded in yours.</p>
						<p className='ed-lede m-0 max-w-[36rem] text-ed-canvas/70'>
							The hypervisor and W8 record the work your people and agents do today. Our engineers sit with yours. Together we turn
							checked runs into evals, environments, and a model that runs inside your walls.
						</p>
						<div className='flex flex-col gap-3 sm:flex-row'>
							<CtaLink href={links.booking} variant='inverse'>
								Talk to us
							</CtaLink>
							<CtaLink href='#how-we-work' variant='outline'>
								How we work
							</CtaLink>
						</div>
					</div>
					<aside className='flex flex-col gap-4 lg:col-span-5' aria-label='What builds the model'>
						<span className='ed-eyebrow text-ed-canvas/60'>What builds it</span>
						<ul className='m-0 list-none border-t border-ed-canvas/30 p-0'>
							{builders.map((item) => (
								<li key={item.layer} className='grid grid-cols-[8.5rem_minmax(0,1fr)] items-start gap-4 border-b border-ed-canvas/15 py-4'>
									<LayerTag layer={item.layer} tone='dark' />
									<p className='m-0 text-[0.9375rem] leading-relaxed text-ed-canvas/75'>{item.copy}</p>
								</li>
							))}
						</ul>
						<p className='ed-mono m-0 text-[0.8125rem] text-ed-accent'>A model proxy sees what the model said. These see what the agent did.</p>
					</aside>
				</div>
			</div>
		</section>
	);
}
