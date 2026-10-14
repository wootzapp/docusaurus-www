import React from "react";
import Section from "../editorial/section";
import Eyebrow from "../editorial/eyebrow";
import EvidenceBars from "../editorial/evidence-bars";
import CtaLink from "../editorial/cta-link";
import SourceGap from "./source-gap";
import {links, study} from "@site/src/data/research";

export default function Benchmark() {
	return (
		<Section id='research' tone='surface'>
			<div className='grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-20'>
				<div className='flex flex-col gap-6'>
					<Eyebrow>
						Published research / {study.name} · {study.publishedShort}
					</Eyebrow>
					<h2 className='ed-h2 m-0'>{study.reduction} fewer recorded evidence gaps.</h2>
					<p className='ed-lede m-0 max-w-[38rem] text-ed-graphite'>
						We ran two verification pipelines on the same {study.tasks} browser-agent tasks: one reading screenshots; the other reading
						structured browser evidence captured by W8. We held task inputs, action histories, final answers, and scoring rubrics fixed.
					</p>
					<p className='m-0 text-[1.0625rem] font-semibold'>
						{study.tasks} tasks. {study.criteria} criteria. {study.reduction} fewer paired source-evidence gaps in the W8 recordings.
					</p>
					<div className='flex flex-col gap-3 sm:flex-row sm:flex-wrap'>
						<CtaLink href='/research'>Read the full study and per-task results</CtaLink>
						<CtaLink href={links.benchBranch} variant='secondary'>
							Source and reproduction
						</CtaLink>
					</div>
				</div>

				<div className='flex flex-col gap-8'>
					<table className='ed-table'>
						<thead>
							<tr>
								<th>Recorded representation</th>
								<th className='ed-num'>Criteria with loss</th>
								<th className='ed-num'>Rate</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Screenshots</td>
								<td className='ed-num'>
									{study.screenshotGaps} of {study.criteria}
								</td>
								<td className='ed-num font-semibold'>{study.screenshotRate}</td>
							</tr>
							<tr>
								<td>W8 DOM-diff Optimized</td>
								<td className='ed-num'>
									{study.domGaps} of {study.criteria}
								</td>
								<td className='ed-num font-semibold text-ed-accent-ink'>{study.domRate}</td>
							</tr>
						</tbody>
					</table>
					<EvidenceBars
						max={5}
						ticks={[0, 1, 2, 3, 4, 5]}
						unit='%'
						rows={[
							{label: "Screenshots", value: study.screenshotRateValue, display: study.screenshotRate},
							{label: "W8 DOM-diff Optimized", value: study.domRateValue, display: study.domRate, accent: true},
						]}
						caption='Criteria with asymmetric source-evidence loss, shared 0–5% scale. Lower is better.'
					/>
					<p className='m-0 border-l-2 border-ed-accent pl-4 text-[0.9375rem] leading-relaxed text-ed-graphite'>
						The metric counts criteria whose evidence is present in one recorded format and missing from the other. Agent success, verifier accuracy, and training lift are separate measurements. This comparison uses LLM-based grading; objective browser-state rewards are the subject of a planned benchmark.
					</p>
					<SourceGap />
				</div>
			</div>
		</Section>
	);
}
