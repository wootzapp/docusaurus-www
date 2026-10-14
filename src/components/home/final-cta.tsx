import React from "react";
import CtaLink from "../editorial/cta-link";
import {links} from "@site/src/data/research";

export default function FinalCta() {
	return (
		<section className='border-t border-ed-rule bg-ed-canvas text-ed-ink'>
			<div className='ed-container flex flex-col gap-10 py-20 sm:py-28 lg:py-40'>
				<h2 className='ed-display m-0 max-w-[68rem]'>What your agent did matters more than what it said.</h2>
				<p className='ed-lede m-0 max-w-[40rem] font-medium'>Bring the harness. Bring the hard tasks. We&apos;ll show you the missing evidence.</p>
				<div className='flex flex-col gap-3 sm:flex-row'>
					<CtaLink href={links.booking}>Talk to engineering</CtaLink>
					<CtaLink href='/research' variant='secondary'>
						Read the research
					</CtaLink>
				</div>
			</div>
		</section>
	);
}
