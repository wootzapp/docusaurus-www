import React, {type ReactNode} from "react";
import {LuTerminal, LuScanSearch} from "react-icons/lu";
import CtaLink from "../editorial/cta-link";
import Eyebrow from "../editorial/eyebrow";
import TraceDiagram from "./trace-diagram";
import {links} from "@site/src/data/research";

// The two observation points, stated precisely.
const layers: {icon: ReactNode; name: string; copy: string}[] = [
	{
		icon: <LuTerminal />,
		name: "Hypervisor",
		copy: "Runs your agent as is. Records each process, network call, allow or deny, and file change below the harness.",
	},
	{
		icon: <LuScanSearch />,
		name: "W8 browser engine",
		copy: "Our Chromium engine records the whole page at each step: exact values, control states, and content off screen.",
	},
];

export default function Hero() {
	return (
		<section className='ed-hero-bg bg-ed-canvas text-ed-ink'>
			<div className='ed-container pb-14 pt-12 sm:pt-16 lg:pb-20 lg:pt-20'>
				<div className='grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-16'>
					<div className='flex flex-col gap-7'>
						<Eyebrow>Agent traces · Work traces</Eyebrow>
						<div className='flex flex-col gap-4'>
							<h1 className='ed-display ed-display--hero m-0'>
								The hypervisor
								<br />
								for RL.
							</h1>
							<p className='ed-subhead m-0 text-ed-accent-ink'>Ground truth others can&apos;t trace.</p>
						</div>
						<ul className='m-0 flex max-w-[38rem] list-none flex-col gap-4 p-0'>
							{layers.map((layer) => (
								<li key={layer.name} className='flex gap-4'>
									<span className='ed-icon ed-icon--accent'>{layer.icon}</span>
									<span className='flex flex-col gap-0.5'>
										<span className='text-[1.0625rem] font-medium'>{layer.name}</span>
										<span className='text-[0.9375rem] leading-relaxed text-ed-graphite'>{layer.copy}</span>
									</span>
								</li>
							))}
						</ul>
						<p className='ed-mono m-0 text-[0.9375rem] text-ed-accent-ink'>A model proxy sees none of this.</p>
						<p className='m-0 max-w-[38rem] text-[1.0625rem] font-medium'>
							Our team turns both records into training data for frontier labs and small models for enterprises.
						</p>
						<div className='flex flex-col gap-3 sm:flex-row'>
							<CtaLink href={links.booking}>Talk to us</CtaLink>
							<CtaLink href='#how' variant='secondary'>
								See how it works
							</CtaLink>
						</div>
					</div>
					<TraceDiagram />
				</div>
			</div>
		</section>
	);
}
