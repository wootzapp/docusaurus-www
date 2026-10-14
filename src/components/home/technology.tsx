import React from "react";
import Section from "../editorial/section";
import Eyebrow from "../editorial/eyebrow";
import Hypervisor from "./hypervisor";
import BrowserEvidence from "./browser-evidence";
import LayerTag, {type Layer} from "./layer-tag";

// How a trace is captured, and what the team turns it into.
const capture: {title: string; copy: string; layer: Layer}[] = [
	{
		title: "Captured below the harness",
		copy: "The hypervisor records processes, egress, policy decisions, and workspace file changes from outside the agent. What the agent logs is one input among several.",
		layer: "hypervisor",
	},
	{
		title: "Recorded inside the page",
		copy: "W8 stores page state at every step as a DOM-diff, with exact values, control states, and off-screen content.",
		layer: "browser",
	},
	{
		title: "Engineered by our team",
		copy: "Our researchers and engineers turn raw traces into datasets, evals, and resettable environments, with task specifications, verifiers, and rewards built on browser and runtime state.",
		layer: "team",
	},
	{
		title: "Through frontier quality gates",
		copy: "Every delivery is checked against explicit task criteria. Our data passes the quality gates of the world's leading frontier model labs.",
		layer: "team",
	},
];

export default function Technology() {
	return (
		<Section id='technology'>
			<div className='flex flex-col gap-6'>
				<Eyebrow>From trace to training data</Eyebrow>
				<h2 className='ed-h2 m-0 max-w-[58rem]'>Captured by our infrastructure. Engineered by our team.</h2>
				<div className='ed-lede flex max-w-[48rem] flex-col gap-4 text-ed-graphite'>
					<p className='m-0'>
						<strong className='text-ed-ink'>Agent traces</strong> come from AI agents running your tasks.{" "}
						<strong className='text-ed-ink'>Work traces</strong> come from experts doing the same work. Both are recorded below the
						harness and inside the browser, where nobody else captures them.
					</p>
					<p className='m-0'>
						Our team and infrastructure turn these traces into{" "}
						<strong className='text-ed-ink'>datasets, evals, and environments that beat state-of-the-art models</strong>.
					</p>
				</div>
			</div>
			<ul className='m-0 mt-14 grid list-none grid-cols-1 gap-0 border-t border-ed-ink p-0 sm:grid-cols-2 lg:grid-cols-4'>
				{capture.map((item) => (
					<li
						key={item.title}
						className='flex flex-col gap-3 border-b border-ed-rule py-6 sm:odd:pr-6 sm:even:pl-6 lg:border-b-0 lg:border-r lg:px-6 lg:odd:pr-6 lg:even:pl-6 lg:first:pl-0 lg:last:border-r-0'
					>
						<LayerTag layer={item.layer} />
						<h3 className='m-0 text-[1.1875rem] font-semibold leading-snug'>{item.title}</h3>
						<p className='m-0 text-[0.9375rem] leading-relaxed text-ed-graphite'>{item.copy}</p>
					</li>
				))}
			</ul>
			<div className='mt-16 flex flex-col gap-20 border-t border-ed-ink pt-16 lg:mt-24 lg:gap-28 lg:pt-20'>
				<Hypervisor />
				<div className='border-t border-ed-rule pt-16 lg:pt-20'>
					<BrowserEvidence />
				</div>
			</div>
		</Section>
	);
}
