import React from "react";
import Section from "../editorial/section";
import Eyebrow from "../editorial/eyebrow";
import LayerTag, {type Layer} from "./layer-tag";

const steps: {label: string; copy: string; layer: Layer}[] = [
	{label: "Run", copy: "Run the existing agent or an authorized human workflow inside the configured environment.", layer: "hypervisor"},
	{label: "Observe", copy: "Observe supported runtime events, model/tool activity, and W8 browser states.", layer: "both"},
	{
		label: "Verify",
		copy: "Verify outcome evidence against expert-defined rubrics or machine-checkable state assertions where applicable.",
		layer: "browser",
	},
	{
		label: "Optimize",
		copy: "Package the result as an RL environment for a model lab, or train and evaluate a small model for an enterprise.",
		layer: "both",
	},
];

const rail = [
	{label: "Inputs", items: ["Existing agent", "Expert operator"]},
	{label: "Observation points", items: ["OpenShell execution layer", "W8 browser"]},
	{label: "Evidence + verifiers", items: ["Runtime events", "Browser states", "Rubrics · state checks"]},
	{label: "Products", items: ["RL environments · model labs", "Fine-tuned small models · enterprises"]},
];

export default function Learning() {
	return (
		<Section>
			<div className='flex flex-col gap-6'>
				<Eyebrow>Deterministic rewards</Eyebrow>
				<h2 className='ed-h2 m-0'>Deterministic rewards. First-class infrastructure.</h2>
				<p className='ed-lede m-0 max-w-[48rem] text-ed-graphite'>
					A trace records what an agent attempted. A verifier decides whether it worked. We build the verifier into the capture layer:{" "}
					<strong className='text-ed-ink'>browser-state checks from W8, runtime checks from the hypervisor</strong>. Visual and subjective
					criteria keep model or human grading.
				</p>
			</div>

			<ol className='m-0 mt-14 grid grid-cols-1 list-none gap-0 border-t border-ed-ink p-0 sm:grid-cols-2 lg:grid-cols-4'>
				{steps.map((step, index) => (
					<li
						key={step.label}
						className='flex flex-col gap-3 border-b border-ed-rule py-6 sm:pr-6 lg:border-b-0 lg:border-r lg:px-6 lg:first:pl-0 lg:last:border-r-0'
					>
						<span className='flex flex-wrap items-center justify-between gap-2'>
							<span className='ed-mono text-[0.8125rem] text-ed-accent-ink'>0{index + 1}</span>
							<LayerTag layer={step.layer} />
						</span>
						<span className='text-2xl font-medium tracking-[-0.01em]'>{step.label}</span>
						<span className='text-[0.9375rem] leading-relaxed text-ed-graphite'>{step.copy}</span>
					</li>
				))}
			</ol>

			<p className='ed-lede m-0 mt-12 max-w-[48rem] text-ed-graphite'>
				The same capture layer serves human experts demonstrating work and agents attempting work.{" "}
				<strong className='text-ed-ink'>The instrumented execution substrate stays constant across both.</strong>
			</p>

			<figure className='m-0 mt-14'>
				<div className='grid grid-cols-1 border border-ed-rule bg-ed-surface md:grid-cols-4'>
					{rail.map((stage, index) => (
						<div
							key={stage.label}
							className='relative flex flex-col gap-3 border-b border-ed-rule p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0'
						>
							<span className='ed-eyebrow text-ed-smoke'>{stage.label}</span>
							<ul className='m-0 flex list-none flex-col gap-1.5 p-0'>
								{stage.items.map((item) => (
									<li key={item} className='text-[0.9375rem] font-medium'>
										{item}
									</li>
								))}
							</ul>
							{index < rail.length - 1 ? (
								<span aria-hidden='true' className='ed-mono absolute right-4 top-5 text-ed-accent-ink md:-right-2.5 md:top-1/2 md:z-10 md:-translate-y-1/2 md:bg-ed-surface md:px-0.5'>
									<span className='md:hidden'>↓</span>
									<span className='hidden md:inline'>→</span>
								</span>
							) : null}
						</div>
					))}
				</div>
				<figcaption className='ed-mono mt-3 max-w-[52rem] text-[0.75rem] leading-relaxed text-ed-smoke'>
					We turn a captured trajectory into a resettable RL environment by adding explicit fixtures, reproducible resets, and validated reward implementations.
				</figcaption>
			</figure>
		</Section>
	);
}
