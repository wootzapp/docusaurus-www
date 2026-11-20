import React from "react";
import CtaLink from "../editorial/cta-link";
import SessionFigure from "./session-figure";
import {hero} from "./copy";
import {links} from "@site/src/data/research";

// Datasheet-style header: the document row, the title, the abstract line, and the spec list. Figure 1 follows in
// the same band.

export default function FactoryHero() {
	return (
		<section className='bg-ed-canvas text-ed-ink'>
			<div className='ed-container pt-6 lg:pt-8'>
				<div className='ed-eyebrow flex items-center justify-between gap-4 border-y border-ed-ink py-3 text-ed-smoke'>
					<span>{hero.docLeft}</span>
					<span className='hidden sm:inline'>{hero.docRight}</span>
				</div>
				<div className='grid gap-10 py-10 lg:grid-cols-12 lg:gap-12 lg:py-14'>
					<div className='flex flex-col items-start lg:col-span-7'>
						<h1 className='m-0 max-w-[18ch] text-[clamp(2.25rem,4vw,3.5rem)] font-normal leading-[1.05] tracking-[-0.035em] [text-wrap:balance]'>
							{hero.h1}
							<br />
							<span className='text-ed-accent-ink'>{hero.h1Sub}</span>
						</h1>
						<p className='m-0 mt-5 max-w-[38rem] text-[1.0625rem] leading-relaxed text-ed-graphite'>{hero.lede}</p>
						{hero.contrast ? (
							<p className='ed-mono m-0 mt-5 max-w-[38rem] text-[0.8125rem] leading-relaxed text-ed-accent-ink'>{hero.contrast}</p>
						) : null}
						<div className='mt-7 flex flex-wrap items-center gap-x-6 gap-y-3'>
							<CtaLink href={links.openrindBranch}>{hero.ctaPrimary}</CtaLink>
							<CtaLink href='#ctf' variant='text'>
								{hero.ctaSecondary}
							</CtaLink>
						</div>
					</div>
					<dl className='m-0 border-t border-ed-ink text-[0.875rem] leading-relaxed lg:col-span-5'>
						{hero.spec.map((row) => (
							<div key={row.term} className='grid grid-cols-[6rem_minmax(0,1fr)] gap-4 border-b border-ed-rule py-3'>
								<dt className='ed-eyebrow pt-0.5 text-ed-smoke'>{row.term}</dt>
								<dd className='m-0 text-ed-ink'>{row.value}</dd>
							</div>
						))}
					</dl>
				</div>
				<SessionFigure className='pb-14 lg:pb-20' />
			</div>
		</section>
	);
}
