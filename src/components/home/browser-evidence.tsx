import React from "react";
import CtaLink from "../editorial/cta-link";
import Eyebrow from "../editorial/eyebrow";
import Specimen from "../editorial/specimen";
import useAnchor from "../editorial/use-anchor";
import {links, taskTwo, taskResultsUrl} from "@site/src/data/research";

const points = [
	{
		title: "Read what pixels miss.",
		copy: "Preserve exact values, control states, and additional page content when available to the browser capture.",
	},
	{
		title: "Connect an action to a state.",
		copy: "Inspect ordered page states before and after each interaction, independent of the agent's final answer.",
	},
	{
		title: "Make verification inspectable.",
		copy: "Evaluate recorded evidence against task-specific criteria, with deterministic state checks where ground truth can be expressed objectively.",
	},
	{
		title: "Prepare stronger learning signals.",
		copy: "Retain the evidence needed to audit trajectories, failures, and candidate RL rewards.",
	},
];

function FrameVersusPage() {
	return (
		<figure className='m-0 flex flex-col gap-3'>
			<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
				<Specimen title='Frame · screenshot10.png' label='Audit summary' kind='recorded'>
					<div className='flex flex-col gap-2'>
						<div className='border border-ed-rule bg-ed-canvas px-3 py-6 text-center text-[0.75rem] text-ed-smoke'>Gallery</div>
						<div className='border border-ed-rule bg-ed-canvas px-3 py-3 text-center text-[0.75rem] text-ed-smoke'>Description</div>
						<div className='border-t-2 border-dashed border-ed-accent pt-2 text-[0.75rem] text-ed-accent-ink'>viewport ends</div>
						<p className='m-0 text-[0.75rem] text-ed-smoke'>developer · release date — not in frame</p>
					</div>
				</Specimen>
				<Specimen title='Page · dom_model10.txt' label='Recorded excerpt' kind='recorded'>
					<ul className='m-0 flex list-none flex-col gap-1 p-0'>
						{taskTwo.dom.map((line) => (
							<li key={line} className='ed-mark w-fit text-ed-ink'>
								{line}
							</li>
						))}
					</ul>
				</Specimen>
			</div>
			<figcaption className='ed-mono text-[0.75rem] leading-relaxed text-ed-smoke'>
				Task {taskTwo.id}, {taskTwo.title}.{" "}
				<a href={taskResultsUrl(taskTwo.id, taskTwo.title)} target='_blank' rel='noopener noreferrer' className='ed-link'>
					Evidence audit ↗
				</a>{" "}
				DOM-diff Optimized is a compact per-state representation. W8 keeps screenshots for visual, canvas, and geometry-dependent criteria.
			</figcaption>
		</figure>
	);
}

export default function BrowserEvidence() {
	useAnchor("browser");
	return (
		<div id='browser' className='grid grid-cols-1 scroll-mt-20 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-20'>
			<div className='flex flex-col gap-6'>
				<Eyebrow className='text-ed-accent-ink'>02 / W8 Browser-Native Evidence</Eyebrow>
				<h3 className='ed-h3 m-0 max-w-[30rem]'>A screenshot records the frame. We record the page.</h3>
				<p className='ed-body m-0 max-w-[36rem] text-ed-graphite'>
					A screenshot can miss a value outside the viewport, lose the relationship between a label and a field, or fail to preserve the
					state needed for a rubric check.
				</p>
				<p className='ed-body m-0 max-w-[36rem] text-ed-graphite'>
					W8 is built on custom Chromium infrastructure. Its <strong className='text-ed-ink'>DOM-diff Optimized</strong> recording preserves
					compact structured browser states: content, controls, relationships, and scroll context, alongside screenshots and executed
					actions.
				</p>
				<ul className='m-0 flex list-none flex-col p-0'>
					{points.map((point) => (
						<li key={point.title} className='border-t border-ed-rule py-4 text-[0.9375rem] leading-relaxed text-ed-graphite'>
							<strong className='font-semibold text-ed-ink'>{point.title}</strong> {point.copy}
						</li>
					))}
				</ul>
				<p className='m-0 text-[1.0625rem] font-semibold'>
					Richer evidence for the judge. Explicit state checks where a criterion allows them.
				</p>
				<CtaLink href={links.benchRepo} variant='text' className='w-fit'>
					Inspect W8 DOM-diff
				</CtaLink>
			</div>
			<div className='lg:pt-12'>
				<FrameVersusPage />
			</div>
		</div>
	);
}
