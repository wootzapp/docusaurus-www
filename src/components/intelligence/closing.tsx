import React from "react";
import CtaLink from "../editorial/cta-link";
import {links} from "@site/src/data/research";

export default function Closing() {
	return (
		<section className='bg-ed-ink text-ed-canvas'>
			<div className='ed-container lg:grid lg:grid-cols-[6.5rem_minmax(0,1fr)]'>
				<div className='hidden lg:block lg:border-r lg:border-ed-canvas/20' aria-hidden='true' />
				<div className='flex flex-col gap-10 py-20 lg:py-28 lg:pl-12'>
					<h2 className='ed-statement m-0'>
						Start with one workflow.
						<br />
						<span className='text-ed-accent'>Own the model that comes out of it.</span>
					</h2>
					<div className='flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8'>
						<CtaLink href={links.booking} variant='inverse'>
							Talk to us
						</CtaLink>
						<p className='ed-mono m-0 text-[0.8125rem] text-ed-canvas/60'>W8 Intelligence. Built with your team, run inside your perimeter.</p>
					</div>
				</div>
			</div>
		</section>
	);
}
