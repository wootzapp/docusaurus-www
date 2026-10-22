import React from "react";
import Section from "../editorial/section";
import Eyebrow from "../editorial/eyebrow";
import {study} from "@site/src/data/research";

const nextStudies = [
	{
		title: "Runtime evidence coverage",
		copy: "Run the same unchanged harness in SDK-only and OpenShell-based conditions. Measure which model, process, tool, egress and policy events are visible under a published attack/failure corpus; report false positives, event loss, and integration work.",
		status: "Protocol in preparation.",
	},
	{
		title: "Browser-state checks vs model judges",
		copy: "Create a human-reviewed, task-specific held-out set with exact browser outcomes. Compare DOM-based deterministic checks, screenshot judges and DOM-assisted judges on agreement, false positives, false negatives, inference cost and latency.",
		status: `Next benchmark. Separate from the ${study.reduction} evidence study.`,
	},
	{
		title: "Optimization impact",
		copy: "Run matched model/routing/training experiments with and without W8-derived evidence. Score actual task success, regression rate, and cost per verified completion.",
		status: "Future controlled study.",
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
