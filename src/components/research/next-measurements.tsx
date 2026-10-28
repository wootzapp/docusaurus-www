import React from "react";
import Section from "../editorial/section";
import Eyebrow from "../editorial/eyebrow";
import {study} from "@site/src/data/research";

const nextStudies = [
	{
		title: "Runtime evidence coverage",
		copy: "Run the same harness two ways: SDK only, and inside OpenShell. Count which model, process, tool, network, and policy events each one sees under a published set of attacks and failures. Report false positives, lost events, and the setup work.",
		status: "Protocol in progress.",
	},
	{
		title: "Browser-state checks against model judges",
		copy: "Build a held-out task set with exact browser outcomes, reviewed by people. Compare three graders: DOM checks, screenshot judges, and judges with DOM access. Score agreement, false alarms, misses, cost, and latency.",
		status: `Next benchmark. Separate from the ${study.reduction} evidence study.`,
	},
	{
		title: "Training impact",
		copy: "Run matched model, routing, and training experiments with and without W8 evidence. Score task success, regression rate, and cost per checked completion.",
		status: "Planned controlled study.",
	},
];

// Closing block of the research index: the studies in preparation.
export default function NextMeasurements() {
	return (
		<Section>
			<div className='flex flex-col gap-6'>
				<Eyebrow>The measurements we&apos;re building next</Eyebrow>
				<h2 className='ed-h2 m-0 max-w-[48rem]'>Separate questions deserve separate benchmarks.</h2>
			</div>
			<div className='mt-14 grid grid-cols-1 gap-0 border-t border-ed-ink lg:grid-cols-3'>
				{nextStudies.map((item) => (
					<article key={item.title} className='flex flex-col gap-4 border-b border-ed-rule py-7 lg:border-b-0 lg:border-r lg:px-7 lg:first:pl-0 lg:last:border-r-0'>
						<h3 className='ed-h3 m-0'>{item.title}</h3>
						<p className='m-0 text-[0.9375rem] leading-relaxed text-ed-graphite'>{item.copy}</p>
						<p className='ed-mono m-0 mt-auto text-[0.8125rem] text-ed-accent-ink'>Status: {item.status}</p>
					</article>
				))}
			</div>
		</Section>
	);
}
