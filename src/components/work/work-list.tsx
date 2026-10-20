import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import {LuArrowRight} from "react-icons/lu";
import {work} from "@site/src/data/research";
import {thumbnails} from "./thumbnails";

// One row per research artifact: visual, name, what it measures, one result, link to its page.
export default function WorkList({size = "default"}: {size?: "default" | "large"}) {
	return (
		<ul className='m-0 flex list-none flex-col border-t border-ed-ink p-0'>
			{work.map((entry) => {
				const Thumb = thumbnails[entry.slug];
				return (
					<li key={entry.slug} className='border-b border-ed-rule'>
						<Link
							to={`/research/${entry.slug}`}
							className='group grid grid-cols-1 gap-5 py-6 text-ed-ink hover:no-underline sm:grid-cols-[11rem_minmax(0,1fr)] sm:items-center sm:gap-7 lg:grid-cols-[12rem_minmax(0,1fr)_auto] lg:gap-10'
						>
							<div
								aria-hidden='true'
								className={clsx(
									"overflow-hidden rounded-xl border border-ed-rule transition-transform group-hover:-translate-y-0.5",
									size === "large" ? "h-32" : "h-28"
								)}
							>
								<Thumb />
							</div>
							<div className='flex min-w-0 flex-col gap-2'>
								<div className='ed-mono flex flex-wrap items-center gap-x-2 text-[0.75rem] uppercase tracking-wider text-ed-smoke'>
									<span className='text-ed-accent-ink'>{entry.kind}</span>
									{entry.date ? <span>· {entry.date}</span> : null}
								</div>
								<span className={clsx("font-semibold underline decoration-ed-rule underline-offset-[6px] group-hover:decoration-ed-ink", size === "large" ? "text-[1.75rem]" : "text-[1.5rem]")}>
									{entry.name}
								</span>
								<p className='m-0 max-w-[40rem] text-[1rem] leading-relaxed text-ed-graphite'>{entry.line}</p>
								<div className='flex flex-wrap gap-1.5 pt-1'>
									{entry.meta.map((item) => (
										<span key={item} className='ed-mono rounded-full bg-ed-canvas px-2.5 py-1 text-[0.75rem] text-ed-graphite'>
											{item}
										</span>
									))}
								</div>
							</div>
							<div className='flex items-center justify-between gap-6 sm:col-span-2 lg:col-span-1 lg:flex-col lg:items-end lg:justify-center lg:gap-3'>
								<span className='text-[1.125rem] font-semibold leading-snug text-ed-ink lg:max-w-[15rem] lg:text-right'>{entry.result}</span>
								<span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ed-rule text-ed-smoke transition-colors group-hover:border-ed-ink group-hover:bg-ed-ink group-hover:text-ed-canvas'>
									<LuArrowRight aria-hidden='true' />
								</span>
							</div>
						</Link>
					</li>
				);
			})}
		</ul>
	);
}
