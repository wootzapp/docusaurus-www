import React from "react";
import CtaLink from "../editorial/cta-link";
import {close} from "./copy";
import {links} from "@site/src/data/research";

export default function FactoryClose() {
	return (
		<section className='bg-ed-ink text-ed-canvas'>
			<div className='ed-container grid gap-8 border-t-2 border-ed-canvas py-14 lg:grid-cols-12 lg:gap-12 lg:py-20'>
				<div className='lg:col-span-7'>
					<h2 className='m-0 text-[clamp(1.75rem,3vw,2.75rem)] font-normal leading-[1.1] tracking-[-0.03em] [text-wrap:balance]'>{close.title}</h2>
					<p className='m-0 mt-5 max-w-[34rem] text-[1rem] leading-relaxed text-ed-canvas/70'>{close.body}</p>
				</div>
				<div className='flex flex-col items-start gap-4 lg:col-span-5 lg:items-end lg:justify-center'>
					<CtaLink href={links.booking} variant='inverse'>
						{close.cta}
					</CtaLink>
					<a
						className='ed-mono text-[0.8125rem] text-ed-canvas/70 hover:text-ed-canvas'
						href={`mailto:${links.email}?subject=${encodeURIComponent(close.emailSubject)}`}
					>
						{links.email}
					</a>
				</div>
			</div>
		</section>
	);
}
