import React from "react";
import Chapter from "./chapter";
import LayerTag, {type Layer} from "../home/layer-tag";

type Step = {title: string; copy: string; layer: Layer; yours: string; ours: string};

const steps: Step[] = [
	{
		title: "Discover",
		copy: "Pick one workflow with your team. Define the first eval and the outcome it scores.",
		layer: "team",
		yours: "Names the workflow and the experts who define a correct run.",
		ours: "Writes the first eval with those experts.",
	},
	{
		title: "Capture",
		copy: "Your harness runs inside the hypervisor and W8. Agent runs and expert work become ground truth.",
		layer: "both",
		yours: "Runs the workflow as it does today.",
		ours: "Installs the hypervisor under your harness and W8 behind your browser agents.",
	},
	{
		title: "Train",
		copy: "Checked runs become evals, environments, and a small model trained on your work.",
		layer: "team",
		yours: "Approves each run that enters training.",
		ours: "Builds them and runs the training.",
	},
	{
		title: "Run",
		copy: "The model serves inside your walls, with frontier fallback at your gateway. New checked runs keep improving it.",
		layer: "both",
		yours: "Approves each model that ships and owns the gateway.",
		ours: "Hands over the runbooks and stays for the retraining rounds.",
	},
];

// The dark chapter: a timeline with oversized accent numerals and the split of work at each step.
export default function HowWeWork() {
	return (
		<Chapter
			id='how-we-work'
			tone='ink'
			title='Embedded with your team, from the first eval to the model in production.'
			lede='Our engineers join at the first eval and stay until the model ships. Each engagement goes live and gets measured there.'
		>
			<ol className='m-0 list-none border-t border-ed-canvas/30 p-0'>
				{steps.map((step, index) => (
					<li
						key={step.title}
						className='grid grid-cols-[4rem_minmax(0,1fr)] gap-x-4 gap-y-6 border-b border-ed-canvas/15 py-8 lg:grid-cols-[6rem_minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-x-10 lg:py-10'
					>
						<span className='ed-mono text-[2.5rem] leading-none tracking-[-0.04em] text-ed-accent lg:text-[3.5rem]'>{String(index + 1).padStart(2, "0")}</span>
						<div className='flex flex-col gap-3'>
							<h3 className='m-0 text-[1.5rem] font-medium leading-tight tracking-[-0.02em] text-ed-canvas'>{step.title}</h3>
							<p className='m-0 text-[1rem] leading-relaxed text-ed-canvas/75'>{step.copy}</p>
							<LayerTag layer={step.layer} tone='dark' />
						</div>
						<div className='col-span-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-1 lg:col-start-3'>
							<div className='flex flex-col gap-1.5 border-l border-ed-accent/60 pl-4'>
								<span className='ed-eyebrow text-ed-canvas/60'>Your team</span>
								<p className='m-0 text-[0.9375rem] leading-relaxed text-ed-canvas/85'>{step.yours}</p>
							</div>
							<div className='flex flex-col gap-1.5 border-l border-ed-canvas/40 pl-4'>
								<span className='ed-eyebrow text-ed-canvas/60'>WootzApp</span>
								<p className='m-0 text-[0.9375rem] leading-relaxed text-ed-canvas/85'>{step.ours}</p>
							</div>
						</div>
					</li>
				))}
			</ol>
		</Chapter>
	);
}
