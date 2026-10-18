import React, {type ReactNode} from "react";
import {LuFileText, LuTable, LuGitBranch, LuDatabase, LuTerminal, LuArrowUpRight, LuShieldCheck} from "react-icons/lu";
import Section from "../editorial/section";
import Eyebrow from "../editorial/eyebrow";
import CtaLink from "../editorial/cta-link";
import EvidenceBars from "../editorial/evidence-bars";
import {links, study} from "@site/src/data/research";

const sources: {icon: ReactNode; label: string; detail: string; href: string}[] = [
	{icon: <LuFileText />, label: "Technical report", detail: "Method and metric definitions", href: links.benchReport},
	{icon: <LuTable />, label: "Per-task results", detail: `All ${study.tasks} task audits`, href: links.benchResults},
	{icon: <LuGitBranch />, label: "Verifier and reproduction", detail: "w8-domdiff-bench", href: links.benchBranch},
	{icon: <LuDatabase />, label: "Trajectory dataset", detail: "Hugging Face", href: links.dataset},
	{icon: <LuTerminal />, label: "Hypervisor runtime", detail: "openrind-shell", href: links.openrindBranch},
];

export default function ResearchBlock() {
	return (
		<Section id='research' rule={false}>
			<div className='grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-6'>
				<div className='ed-card flex flex-col gap-7 p-6 sm:p-8 lg:p-10'>
					<div className='flex flex-col gap-4'>
						<Eyebrow>
							Published research · {study.name} · {study.publishedShort}
						</Eyebrow>
						<h2 className='ed-h2 m-0'>{study.reduction} fewer recorded evidence gaps.</h2>
						<p className='ed-body m-0 max-w-[36rem] text-ed-graphite'>
							The same {study.tasks} browser-agent tasks, scored twice: once from screenshots, once from W8 browser evidence.
						</p>
					</div>
					<EvidenceBars
						max={5}
						ticks={[0, 1, 2, 3, 4, 5]}
						unit='%'
						rows={[
							{
								label: "Screenshots",
								value: study.screenshotRateValue,
								display: study.screenshotRate,
								detail: `${study.screenshotGaps}/${study.criteria}`,
							},
							{
								label: "W8 browser",
								value: study.domRateValue,
								display: study.domRate,
								detail: `${study.domGaps}/${study.criteria}`,
								accent: true,
							},
						]}
						caption='Criteria with asymmetric source-evidence loss. Lower is better.'
					/>
					<p className='m-0 border-l-2 border-ed-accent pl-4 text-[0.875rem] leading-relaxed text-ed-graphite'>
						The metric counts evidence present in one format and missing from the other. Agent success and training lift are separate
						measurements.
					</p>
					<CtaLink href='/research' className='mt-auto w-fit'>
						Read the full study
					</CtaLink>
				</div>

				<div className='flex flex-col gap-5 lg:gap-6'>
					<div className='ed-card flex flex-col p-3 sm:p-4'>
						<p className='ed-eyebrow m-0 px-3 pb-2 pt-2 text-ed-smoke'>Inspect and reproduce</p>
						<ul className='m-0 flex list-none flex-col p-0'>
							{sources.map((source) => (
								<li key={source.label}>
									<a
										href={source.href}
										target='_blank'
										rel='noopener noreferrer'
										className='group flex items-center gap-3 rounded-xl px-3 py-3 text-ed-ink transition-colors hover:bg-ed-canvas'
									>
										<span className='ed-icon h-10 w-10 text-lg'>{source.icon}</span>
										<span className='flex flex-1 flex-col leading-tight'>
											<span className='text-[0.9375rem] font-semibold'>{source.label}</span>
											<span className='ed-mono text-[0.75rem] text-ed-smoke'>{source.detail}</span>
										</span>
										<LuArrowUpRight aria-hidden='true' className='text-ed-smoke transition-colors group-hover:text-ed-accent-ink' />
									</a>
								</li>
							))}
						</ul>
					</div>
					<div className='ed-card flex items-center gap-4 bg-ed-ink p-6 text-ed-canvas'>
						<span className='ed-icon h-11 w-11 bg-white/10 text-ed-accent'>
							<LuShieldCheck />
						</span>
						<span className='flex flex-col leading-snug'>
							<span className='text-[1.0625rem] font-semibold'>Frontier-lab quality gates</span>
							<span className='text-[0.875rem] text-ed-canvas/75'>Our data passes them.</span>
						</span>
					</div>
				</div>
			</div>
		</Section>
	);
}
