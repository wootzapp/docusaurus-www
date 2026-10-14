import React from "react";
import Section from "../editorial/section";
import Eyebrow from "../editorial/eyebrow";
import CtaLink from "../editorial/cta-link";
import {links, study} from "@site/src/data/research";

const planned = [
	{
		title: "Hypervisor capture completeness vs SDK traces",
		copy: "How much execution evidence does the OpenShell-based layer preserve beyond what SDK traces report?",
	},
	{
		title: "State-based rewards vs LLM judges",
		copy: "How accurately can objective browser-state checks replace subjective screenshot judgments?",
	},
];

export default function ResearchIndex() {
	return (
		<Section>
			<div className='grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-20'>
				<div className='flex flex-col gap-6'>
					<Eyebrow>Research / Published and planned</Eyebrow>
					<h2 className='ed-h2 m-0'>Show the missing evidence.</h2>
					<p className='ed-body m-0 text-ed-graphite'>
						Our first published study measures where screenshots lose criterion-relevant browser evidence, using paired trajectories
						and a frozen evaluation protocol.
					</p>
					<p className='ed-body m-0 text-ed-graphite'>
						The planned studies ask three questions. How much execution evidence does the hypervisor preserve beyond SDK traces? How accurately
						can objective browser-state checks replace subjective screenshot judgments? Does that improve model training per dollar?
					</p>
					<p className='ed-body m-0 font-semibold'>Each answer ships with artifacts and a controlled benchmark.</p>
					<CtaLink href='/research' className='w-fit'>
						Explore WootzApp research
					</CtaLink>
				</div>

				<ol className='m-0 flex list-none flex-col border-t border-ed-ink p-0'>
					<li className='flex flex-col gap-4 border-b border-ed-rule py-7'>
						<div className='flex items-center justify-between gap-4'>
							<span className='ed-mono text-[0.8125rem] text-ed-smoke'>01</span>
							<span className='ed-eyebrow bg-ed-ink px-2 py-1 text-[0.75rem] text-ed-canvas'>Published · {study.publishedShort}</span>
						</div>
						<h3 className='ed-h3 m-0'>Browser evidence fidelity: screenshots vs W8 DOM-diff Optimized</h3>
						<p className='m-0 text-[0.9375rem] leading-relaxed text-ed-graphite'>
							{study.tasks} tasks, {study.criteria} criteria. Screenshots lacked criterion-relevant source evidence on {study.screenshotRate} of
							audited criteria; W8 records on {study.domRate}.
						</p>
						<div className='flex flex-wrap gap-x-5 gap-y-2 text-[0.875rem]'>
							<a href={links.benchBranch} target='_blank' rel='noopener noreferrer' className='ed-link'>
								Code ↗
							</a>
							<a href={links.dataset} target='_blank' rel='noopener noreferrer' className='ed-link'>
								Dataset ↗
							</a>
							<a href={links.benchResults} target='_blank' rel='noopener noreferrer' className='ed-link'>
								Per-task results ↗
							</a>
							<a href={links.benchLimits} target='_blank' rel='noopener noreferrer' className='ed-link'>
								Limitations ↗
							</a>
						</div>
					</li>
					{planned.map((item, index) => (
						<li key={item.title} className='flex flex-col gap-4 border-b border-ed-rule py-7'>
							<div className='flex items-center justify-between gap-4'>
								<span className='ed-mono text-[0.8125rem] text-ed-smoke'>0{index + 2}</span>
								<span className='ed-eyebrow border border-ed-rule px-2 py-1 text-[0.75rem] text-ed-smoke'>Planned benchmark</span>
							</div>
							<h3 className='ed-h3 m-0 text-ed-graphite'>{item.title}</h3>
							<p className='m-0 text-[0.9375rem] leading-relaxed text-ed-smoke'>{item.copy}</p>
						</li>
					))}
				</ol>
			</div>
		</Section>
	);
}
