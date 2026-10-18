import React, {type ReactNode} from "react";
import Link from "@docusaurus/Link";
import {LuFileText, LuTable, LuGitBranch, LuDatabase, LuTerminal, LuArrowUpRight, LuShieldCheck} from "react-icons/lu";
import Eyebrow from "../editorial/eyebrow";
import EvidenceBars from "../editorial/evidence-bars";
import useAnchor from "../editorial/use-anchor";
import {links, study} from "@site/src/data/research";

const sources: {icon: ReactNode; label: string; href: string}[] = [
	{icon: <LuFileText />, label: "Technical report", href: links.benchReport},
	{icon: <LuTable />, label: "Per-task results", href: links.benchResults},
	{icon: <LuGitBranch />, label: "Verifier and reproduction", href: links.benchBranch},
	{icon: <LuDatabase />, label: "Trajectory dataset", href: links.dataset},
	{icon: <LuTerminal />, label: "openrind-shell", href: links.openrindBranch},
];

// Flat, number-led layout: no cards, so it reads differently from the blocks around it.
export default function ResearchBlock() {
	useAnchor("research");
	return (
		<section id='research' className='scroll-mt-20 border-y border-ed-rule bg-ed-surface text-ed-ink'>
			<div className='ed-container py-16 sm:py-20 lg:py-24'>
				<Eyebrow>
					Published research · {study.name} · {study.publishedShort}
				</Eyebrow>
				<div className='mt-8 grid grid-cols-1 items-end gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-20'>
					<div className='flex flex-col gap-4'>
						<p className='m-0 text-[clamp(4.5rem,12vw,9rem)] font-semibold leading-[0.95] tracking-[-0.02em] text-ed-accent-ink'>
							{study.reduction}
						</p>
						<p className='ed-h3 m-0 max-w-[26rem]'>fewer recorded evidence gaps than screenshots.</p>
						<p className='m-0 max-w-[30rem] text-[0.9375rem] leading-relaxed text-ed-graphite'>
							The same {study.tasks} browser-agent tasks and {study.criteria} criteria, scored once from screenshots and once from W8.
						</p>
					</div>
					<div className='flex flex-col gap-5'>
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
							caption='Criteria with asymmetric source-evidence loss. Lower is better. Agent success and training lift are separate measurements.'
						/>
					</div>
				</div>

				<div className='mt-12 flex flex-col gap-6 border-t border-ed-rule pt-8 lg:flex-row lg:items-center lg:justify-between'>
					<ul className='m-0 flex list-none flex-wrap gap-2 p-0'>
						{sources.map((source) => (
							<li key={source.label}>
								<a
									href={source.href}
									target='_blank'
									rel='noopener noreferrer'
									className='inline-flex items-center gap-2 rounded-full border border-ed-rule bg-ed-canvas px-3.5 py-2 text-[0.875rem] font-medium text-ed-ink transition-colors hover:border-ed-ink'
								>
									<span aria-hidden='true' className='text-ed-smoke'>
										{source.icon}
									</span>
									{source.label}
									<LuArrowUpRight aria-hidden='true' className='text-ed-smoke' />
								</a>
							</li>
						))}
					</ul>
					<div className='flex flex-wrap items-center gap-x-6 gap-y-3'>
						<span className='inline-flex items-center gap-2 text-[0.9375rem] font-semibold'>
							<LuShieldCheck aria-hidden='true' className='text-ed-accent-ink' />
							Passes frontier-lab quality gates
						</span>
						<Link to='/research' className='ed-link text-[0.9375rem] font-medium'>
							Full study →
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
