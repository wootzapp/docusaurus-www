import React from "react";
import Section from "../editorial/section";
import Eyebrow from "../editorial/eyebrow";
import CtaLink from "../editorial/cta-link";
import {links} from "@site/src/data/research";

export default function FactoryPilot() {
	return (
		<Section id='factory-pilot' tone='canvas' className='font-sans-ed' innerClassName='!py-10 sm:!py-12'>
			<div className='flex max-w-[48rem] flex-col items-start gap-3'>
				<Eyebrow>Proposed evaluation protocol</Eyebrow>
				<h2 className='ed-h2 m-0'>Evaluate on held-out executions.</h2>
				<p id='factory-evaluation' className='m-0 scroll-mt-24 text-[0.9375rem] leading-relaxed text-ed-graphite'>
					Pin implementation, harness, and task-set revisions, training-dataset digests, and both checkpoint IDs. Compare baseline and candidate on held-out tasks with matched permissions and budgets. Predeclare executable acceptance checks and promotion thresholds; count failed attempts in cost per accepted task. Re-run prior tasks for retention and report uncertainty over repeated trials.
				</p>
				<ul className='m-0 flex list-none flex-wrap gap-x-6 gap-y-2 p-0 text-[0.875rem] font-medium'>
					<li>Task completion</li>
					<li>Cost per accepted task</li>
					<li>Skill retention</li>
				</ul>
			</div>
			<div className='mt-5 flex flex-wrap items-center gap-x-6 gap-y-2'>
				<CtaLink href={links.booking} variant='text' className='min-h-11 py-2'>Discuss an experiment</CtaLink>
				<a className='ed-link inline-flex min-h-11 items-center py-2 text-[0.9375rem]' href={`mailto:${links.email}?subject=Factory%20research%20evaluation`}>{links.email}</a>
			</div>
		</Section>
	);
}
