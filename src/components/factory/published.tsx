import React from "react";
import Link from "@docusaurus/Link";
import Spec from "./spec";
import {useResearchEntries} from "../work/entries";
import {published} from "./copy";

// Research entries as a reference list: one hairline row per entry with its figures inline. The same markdown as
// /research (research/*.md); this page shows no stat tiles.

export default function Published() {
	const entries = useResearchEntries();
	return (
		<Spec
			id='published'
			tone='canvas'
			title={published.title}
			lede={
				<>
					{published.lede}{" "}
					<Link to='/research' className='ed-link'>
						{published.allLink}
					</Link>
					.
				</>
			}
		>
			<ol className='m-0 list-none border-t border-ed-ink p-0'>
				{entries.map((entry, index) => (
					<li key={entry.permalink} className='grid gap-x-6 gap-y-1.5 border-b border-ed-rule py-4 sm:grid-cols-[3rem_minmax(0,1fr)_auto] sm:items-baseline'>
						<span className='ed-mono text-[0.75rem] text-ed-accent-ink'>{String(index + 1).padStart(2, "0")}</span>
						<div className='min-w-0'>
							<div className='flex flex-wrap items-baseline gap-x-3 gap-y-1'>
								<Link to={entry.permalink} className='text-[1rem] font-medium text-ed-ink underline decoration-ed-rule underline-offset-[5px] hover:decoration-ed-ink'>
									{entry.title}
								</Link>
								<span className='ed-mono text-[0.6875rem] uppercase tracking-[0.08em] text-ed-smoke'>
									{entry.kind}
									{entry.dateShort ? ` · ${entry.dateShort}` : ""}
								</span>
							</div>
							<p className='ed-mono m-0 mt-1 text-[0.75rem] leading-relaxed text-ed-graphite'>
								{entry.stats
									.slice(0, 2)
									.map((stat) => `${stat.value} ${/^[A-Z][a-z]/.test(stat.label) ? stat.label[0].toLowerCase() + stat.label.slice(1) : stat.label}`)
									.join(" · ")}
								{entry.result ? <span className='text-ed-accent-ink'>{entry.stats.length ? " · " : ""}{entry.result}</span> : null}
							</p>
						</div>
						<Link to={entry.permalink} className='ed-link text-[0.8125rem] font-medium'>
							{published.readLink} →
						</Link>
					</li>
				))}
			</ol>
		</Spec>
	);
}
