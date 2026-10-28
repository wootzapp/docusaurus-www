import React from "react";
import Section from "../editorial/section";
import Eyebrow from "../editorial/eyebrow";
import LayerTag, {type Layer} from "./layer-tag";

const steps: {title: string; copy: string; layer?: Layer}[] = [
	{title: "Capture", copy: "The hypervisor and W8 record each run below the harness and inside the page.", layer: "both"},
	{title: "Engineer", copy: "Our team builds datasets, evals, and environments.", layer: "team"},
	{title: "Deliver", copy: "To frontier labs, or as a small model for your team."},
];

// Open timeline: large numerals on a connecting rule, no cards.
export default function HowItWorks() {
	return (
		<Section id='how' rule={false}>
			<div className='grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,2fr)] lg:gap-16'>
				<div className='flex flex-col gap-5'>
					<Eyebrow>How it works</Eyebrow>
					<h2 className='ed-h2 m-0'>From trace to training data.</h2>
				</div>
				<ol className='relative m-0 grid list-none grid-cols-1 gap-10 p-0 sm:grid-cols-3 sm:gap-8'>
					<span aria-hidden='true' className='absolute left-0 right-0 top-[2.25rem] hidden h-px bg-ed-ink/20 sm:block' />
					{steps.map((step, index) => (
						<li key={step.title} className='relative flex flex-col gap-4'>
							<span className='relative flex items-center gap-3'>
								<span className='bg-ed-canvas pr-3 text-[4.5rem] font-normal leading-none tracking-[-0.02em] text-ed-accent-ink'>
									{index + 1}
								</span>
							</span>
							<h3 className='m-0 text-[1.5rem] font-medium'>{step.title}</h3>
							<p className='m-0 text-[1rem] leading-relaxed text-ed-graphite'>{step.copy}</p>
							{step.layer ? <LayerTag layer={step.layer} /> : null}
						</li>
					))}
				</ol>
			</div>
		</Section>
	);
}
