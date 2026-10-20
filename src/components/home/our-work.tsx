import React from "react";
import Link from "@docusaurus/Link";
import WorkList from "../work/work-list";
import useAnchor from "../editorial/use-anchor";
import {links} from "@site/src/data/research";

export default function OurWork() {
	useAnchor("research");
	return (
		<section id='research' className='scroll-mt-20 border-t border-ed-rule bg-ed-surface text-ed-ink'>
			<div className='ed-container py-16 sm:py-20 lg:py-24'>
				<div className='flex flex-wrap items-end justify-between gap-4 pb-8'>
					<h2 className='ed-h2 m-0'>Our work</h2>
					<Link to='/research' className='ed-link text-[0.9375rem] font-medium'>
						All work →
					</Link>
				</div>
				<WorkList />
				<p className='m-0 pt-8 text-[0.9375rem] text-ed-graphite'>
					For research and data partnerships:{" "}
					<a href={`mailto:${links.email}`} className='ed-link'>
						{links.email}
					</a>
				</p>
			</div>
		</section>
	);
}
