import React, {type ReactNode} from "react";
import Link from "@docusaurus/Link";
import {LuArrowLeft, LuArrowUpRight} from "react-icons/lu";

type Stat = {value: string; label: string};
type Source = {label: string; href: string};

// Paper-style header for a research artifact page.
export default function PaperHeader({
	kind,
	date,
	title,
	subtitle,
	byline,
	abstract,
	stats,
	sources,
}: {
	kind: string;
	date?: string;
	title: string;
	subtitle?: string;
	byline?: string;
	abstract: ReactNode;
	stats: Stat[];
	sources: Source[];
}) {
	return (
		<section className='ed-hero-bg bg-ed-canvas text-ed-ink'>
			<div className='ed-container pb-14 pt-10 sm:pt-12 lg:pb-20'>
				<Link to='/research' className='ed-link inline-flex items-center gap-1.5 text-[0.9375rem]'>
					<LuArrowLeft aria-hidden='true' /> All work
				</Link>
				<div className='mt-10 flex max-w-[52rem] flex-col gap-5'>
					<div className='ed-mono flex flex-wrap gap-x-2 text-[0.8125rem] uppercase tracking-wider text-ed-smoke'>
						<span className='text-ed-accent-ink'>{kind}</span>
						{date ? <span>· {date}</span> : null}
					</div>
					<h1 className='ed-display ed-display--hero m-0'>{title}</h1>
					{subtitle ? <p className='m-0 text-[1.125rem] text-ed-graphite'>{subtitle}</p> : null}
					{byline ? <p className='ed-mono m-0 text-[0.875rem] text-ed-ink'>{byline}</p> : null}
					<div className='ed-lede flex flex-col gap-4 text-ed-graphite'>{abstract}</div>
					<ul className='m-0 flex list-none flex-wrap gap-2 p-0 pt-2'>
						{sources.map((source) => (
							<li key={source.href}>
								<a
									href={source.href}
									target='_blank'
									rel='noopener noreferrer'
									className='inline-flex items-center gap-1.5 rounded-full border border-ed-rule bg-ed-surface px-3.5 py-2 text-[0.875rem] font-medium text-ed-ink transition-colors hover:border-ed-ink'
								>
									{source.label}
									<LuArrowUpRight aria-hidden='true' className='text-ed-smoke' />
								</a>
							</li>
						))}
					</ul>
				</div>
				<dl className='m-0 mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-ed-ink pt-8 lg:grid-cols-4'>
					{stats.map((stat) => (
						<div key={stat.label} className='flex flex-col gap-2'>
							<dt className='order-2 text-[0.875rem] text-ed-smoke'>{stat.label}</dt>
							<dd className='order-1 m-0 text-[clamp(1.75rem,3.6vw,2.75rem)] font-medium leading-[1.05]'>{stat.value}</dd>
						</div>
					))}
				</dl>
			</div>
		</section>
	);
}
