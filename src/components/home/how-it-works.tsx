import React, {type ReactNode} from "react";
import {LuScanSearch, LuWrench, LuPackage} from "react-icons/lu";
import Section from "../editorial/section";
import Eyebrow from "../editorial/eyebrow";
import LayerTag, {type Layer} from "./layer-tag";

const steps: {icon: ReactNode; title: string; copy: string; layer?: Layer}[] = [
	{icon: <LuScanSearch />, title: "Capture", copy: "The hypervisor and W8 record every run.", layer: "both"},
	{icon: <LuWrench />, title: "Engineer", copy: "Our team builds datasets, evals, and environments.", layer: "team"},
	{icon: <LuPackage />, title: "Deliver", copy: "To frontier labs, or as a small model for your team."},
];

export default function HowItWorks() {
	return (
		<Section id='how'>
			<div className='flex flex-col gap-5'>
				<Eyebrow>How it works</Eyebrow>
				<h2 className='ed-h2 m-0'>From trace to training data.</h2>
			</div>
			<ol className='relative m-0 mt-12 grid list-none grid-cols-1 gap-5 p-0 md:grid-cols-3 md:gap-6'>
				<span aria-hidden='true' className='absolute left-8 right-8 top-[2.75rem] hidden h-px bg-ed-rule md:block' />
				{steps.map((step, index) => (
					<li key={step.title} className='ed-card relative flex flex-col gap-4 p-6 sm:p-7'>
						<div className='flex items-center justify-between gap-3'>
							<span className='ed-icon ed-icon--accent'>{step.icon}</span>
							<span className='ed-mono text-[0.8125rem] text-ed-smoke'>0{index + 1}</span>
						</div>
						<h3 className='m-0 text-[1.5rem] font-semibold'>{step.title}</h3>
						<p className='m-0 text-[1rem] leading-relaxed text-ed-graphite'>{step.copy}</p>
						{step.layer ? <LayerTag layer={step.layer} className='mt-auto' /> : null}
					</li>
				))}
			</ol>
		</Section>
	);
}
