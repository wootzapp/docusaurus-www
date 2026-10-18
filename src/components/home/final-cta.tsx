import React from "react";
import CtaLink from "../editorial/cta-link";
import {links} from "@site/src/data/research";

// Solid accent band to close the page.
export default function FinalCta() {
	return (
		<section className='bg-ed-accent text-ed-ink'>
			<div className='ed-container flex flex-col items-start gap-10 py-20 sm:py-28 lg:flex-row lg:items-end lg:justify-between lg:py-32'>
				<h2 className='ed-display m-0 max-w-[52rem]'>What your agent did matters more than what it said.</h2>
				<CtaLink href={links.booking} className='shrink-0'>
					Talk to us
				</CtaLink>
			</div>
		</section>
	);
}
