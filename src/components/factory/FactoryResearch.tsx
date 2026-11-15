import React from "react";
import Section from "../editorial/section";
import Eyebrow from "../editorial/eyebrow";
import CtaLink from "../editorial/cta-link";
import {useResearchEntries} from "../work/entries";
import {links, study} from "../../data/research";

export default function FactoryResearch() {
	const trainingEntry = useResearchEntries().find((entry) => entry.permalink === "/research/let-execution-do-the-teaching");
	const trainingSetup = trainingEntry?.stats.filter((stat) => stat.label === "C++ tasks in Fixed26" || stat.label === "Task-trial runs per setup") ?? [];
	const trainingStudy = trainingEntry?.sources.find((source) => source.label === "Study");

	return (
		<Section id='factory-research' tone='surface' className='font-sans-ed' innerClassName='!py-10 sm:!py-12'>
			<header className='flex max-w-[48rem] flex-col gap-3'>
				<Eyebrow>03 / Research evidence</Eyebrow>
				<h2 className='ed-h2 m-0'>Complementary studies.</h2>
				<p className='m-0 text-[0.9375rem] leading-relaxed text-ed-graphite'>
					Openrind Shell is the implemented runtime. These complementary DOM-diff and GRPO studies do not measure end-to-end Factory quality.
				</p>
			</header>

			<div className='mt-6 grid border-y border-ed-rule md:grid-cols-2'>
				<article aria-labelledby='factory-domdiff-title' className='flex min-w-0 flex-col gap-3 border-b border-ed-rule py-5 md:border-b-0 md:border-r md:pr-6'>
					<Eyebrow>DOM-diff / Paired audit</Eyebrow>
					<h3 id='factory-domdiff-title' className='ed-h3 m-0'>{study.name}</h3>
					<p className='m-0 text-[0.9375rem] leading-relaxed text-ed-graphite'>
						Missing-evidence rate: rubric criteria lacking required evidence in one record but present in its paired record, averaged across runs.
					</p>
					<dl className='m-0 grid grid-cols-2 gap-4'>
						<div>
							<dt className='text-[0.875rem] text-ed-smoke'>Screenshots</dt>
							<dd className='m-0 mt-1 text-[1.5rem] font-medium tabular-nums'>{study.screenshotRate}</dd>
						</div>
						<div>
							<dt className='text-[0.875rem] text-ed-smoke'>W8 DOM-diff</dt>
							<dd className='m-0 mt-1 text-[1.5rem] font-medium tabular-nums'>{study.domRate}</dd>
						</div>
					</dl>
					<p className='m-0 text-[0.875rem] leading-relaxed text-ed-smoke'>
						{study.matchedTasks} matched tasks · {study.runs} runs · {study.criteria} criteria/run
					</p>
					<div className='mt-auto flex flex-wrap gap-x-5'>
						<CtaLink href='/research/w8-domdiff-bench' variant='text' className='min-h-11 py-2'>Benchmark</CtaLink>
						<CtaLink href={links.benchReport} variant='text' className='min-h-11 py-2'>Report</CtaLink>
					</div>
				</article>

				<article aria-labelledby='factory-training-title' className='flex min-w-0 flex-col gap-3 py-5 md:pl-6'>
					<Eyebrow>GRPO / Execution grading</Eyebrow>
					<h3 id='factory-training-title' className='ed-h3 m-0'>{trainingEntry?.title ?? "Let Execution Do the Teaching"}</h3>
					<p className='m-0 text-[0.9375rem] leading-relaxed text-ed-graphite'>
						Compiler and test outcomes supply rewards for GRPO updates to a LoRA adapter. Fixed26 is a C++ development suite; selected trials and training overlap limit interpretation.
					</p>
					{trainingSetup.length ? (
						<dl className='m-0 grid grid-cols-2 gap-4'>
							{trainingSetup.map((stat) => (
								<div key={stat.label} className='flex min-w-0 flex-col gap-1'>
									<dt className='order-2 text-[0.875rem] leading-relaxed text-ed-smoke'>{stat.label}</dt>
									<dd className='order-1 m-0 text-[1.5rem] font-medium leading-tight tabular-nums'>{stat.value}</dd>
								</div>
							))}
						</dl>
					) : null}
					<div className='mt-auto flex flex-wrap gap-x-5'>
						<CtaLink href='/research/let-execution-do-the-teaching' variant='text' className='min-h-11 py-2'>Method</CtaLink>
						{trainingStudy ? <CtaLink href={trainingStudy.href} variant='text' className='min-h-11 py-2'>Study</CtaLink> : null}
					</div>
				</article>
			</div>
		</Section>
	);
}
