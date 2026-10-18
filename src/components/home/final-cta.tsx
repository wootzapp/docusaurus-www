import React from "react";
import CtaLink from "../editorial/cta-link";
import {links} from "@site/src/data/research";

export default function FinalCta() {
	return (
		<section className='ed-hero-bg border-t border-ed-rule bg-ed-canvas text-ed-ink'>
			<div className='ed-container flex flex-col items-start gap-10 py-20 sm:py-28 lg:py-36'>
				<h2 className='ed-display m-0 max-w-[60rem]'>What your agent did matters more than what it said.</h2>
				<CtaLink href={links.booking}>Talk to us</CtaLink>
			</div>
		</section>
	);
}
