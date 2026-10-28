import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import {LuArrowRight} from "react-icons/lu";
import type {ResearchEntry, Stat} from "./entries";

// Industry-facing view of the research entries: one bordered grid of exhibit cells, each with the entry's first two
// stats as headline figures and its result line. Same markdown as /research (see research/*.md).

function figuresFor(entry: ResearchEntry): {figures: Stat[]; outcome?: string} {
	const figures = entry.stats.slice(0, 2);
	if (figures.length) return {figures, outcome: entry.result};
	if (entry.result) return {figures: [{value: entry.result, label: "Result"}]};
	return {figures: []};
}

export default function WorkCards({entries, limit = 4, className}: {entries: ResearchEntry[]; limit?: number; className?: string}) {
	return (
		<ol className={clsx("m-0 grid list-none grid-cols-1 border-l border-t border-ed-rule p-0 sm:grid-cols-2 lg:grid-cols-4", className)}>
			{entries.slice(0, limit).map((entry, index) => {
				const {figures, outcome} = figuresFor(entry);
				return (
					<li key={entry.permalink} className='flex border-b border-r border-ed-rule'>
						<Link
							to={entry.permalink}
							className='group flex w-full flex-col gap-5 bg-ed-surface p-6 text-ed-ink transition-colors hover:bg-ed-accent-tint hover:text-ed-ink hover:no-underline lg:p-7'
						>
							<div className='ed-eyebrow flex flex-wrap gap-x-2 text-ed-smoke'>
								<span className='text-ed-accent-ink'>{String(index + 1).padStart(2, "0")}</span>
								<span>{entry.kind}</span>
								{entry.dateShort ? <span>· {entry.dateShort}</span> : null}
							</div>
							{figures.length ? (
								<dl className='m-0 flex flex-col gap-5'>
									{figures.map((stat) => (
										<div key={stat.label} className='flex flex-col gap-1.5'>
											<dt className='order-2 text-[0.8125rem] leading-snug text-ed-smoke'>{stat.label}</dt>
											<dd className='order-1 m-0 break-words text-[clamp(1.875rem,2.4vw,2.5rem)] font-medium leading-none tracking-[-0.02em] tabular-nums'>
												{stat.value}
											</dd>
										</div>
									))}
								</dl>
							) : entry.facts.length ? (
								<div className='flex flex-wrap gap-1.5'>
									{entry.facts.map((fact) => (
										<span key={fact} className='ed-mono border border-ed-rule px-2 py-1 text-[0.75rem] text-ed-graphite'>
											{fact}
										</span>
									))}
								</div>
							) : null}
							<h3 className='ed-h3 m-0 border-t border-ed-rule pt-5'>{entry.title}</h3>
							{outcome ? <p className='ed-mono m-0 text-[0.8125rem] leading-relaxed text-ed-accent-ink'>{outcome}</p> : null}
							<span className='mt-auto inline-flex items-center gap-2 pt-2 text-[0.9375rem] font-medium underline decoration-ed-rule underline-offset-[5px] group-hover:decoration-ed-ink'>
								Read the work
								<LuArrowRight aria-hidden='true' className='transition-transform group-hover:translate-x-0.5' />
							</span>
						</Link>
					</li>
				);
			})}
		</ol>
	);
}
