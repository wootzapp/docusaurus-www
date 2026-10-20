import React from "react";
import Link from "@docusaurus/Link";
import {links} from "@site/src/data/research";

const footerColumns = [
	{
		title: "Technology",
		links: [
			{label: "Agent Hypervisor", href: "/#hypervisor"},
			{label: "W8 browser evidence", href: "/#browser"},
			{label: "Docs", href: "/docs/intro"},
		],
	},
	{
		title: "Research",
		links: [
			{label: "Our work", href: "/research"},
			{label: "W8 DOM-diff Bench", href: "/research/w8-domdiff-bench"},
			{label: "Technical report", href: links.benchReport},
			{label: "Per-task results", href: links.benchResults},
		],
	},
	{
		title: "Products",
		links: [
			{label: "Data and environments", href: "/#model-labs"},
			{label: "Enterprise models", href: "/#enterprise"},
		],
	},
	{
		title: "Open source",
		links: [
			{label: "w8-domdiff-bench", href: links.benchRepo},
			{label: "openrind-shell", href: links.openrindRepo},
			{label: "Browser Agent Tasks", href: links.dataset},
		],
	},
	{
		title: "Company",
		links: [
			{label: "Talk to us", href: links.booking},
			{label: "Twitter", href: links.twitter},
			{label: "Data rights", href: "/docs/important/privacy"},
		],
	},
];

export function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<footer className='border-t border-ed-ink bg-ed-canvas font-sans-ed text-ed-ink'>
			<div className='ed-container flex flex-col gap-14 py-16 lg:py-20'>
				<div className='grid grid-cols-1 gap-12 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,2.6fr)] xl:gap-16'>
					<div className='flex flex-col gap-4'>
						<span className='text-2xl font-semibold tracking-[-0.01em]'>WootzApp</span>
						<p className='m-0 max-w-xs text-[0.9375rem] leading-relaxed text-ed-graphite'>The hypervisor for RL. Ground truth others can&apos;t trace.</p>
						<a href={`mailto:${links.email}`} className='ed-link w-fit text-[0.9375rem]'>
							{links.email}
						</a>
					</div>
					<nav aria-label='Footer' className='grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5'>
						{footerColumns.map((column) => (
							<div key={column.title} className='flex flex-col gap-4'>
								<p className='ed-eyebrow m-0 text-ed-smoke'>{column.title}</p>
								<ul className='m-0 flex list-none flex-col gap-2.5 p-0'>
									{column.links.map((link) => (
										<li key={link.label}>
											<Link
												to={link.href}
												{...(link.href.startsWith("http") ? {target: "_blank", rel: "noopener noreferrer"} : {})}
												className='text-[0.9375rem] text-ed-ink hover:text-ed-accent-ink hover:no-underline'
											>
												{link.label}
											</Link>
										</li>
									))}
								</ul>
							</div>
						))}
					</nav>
				</div>
				<div className='flex flex-col gap-2 border-t border-ed-rule pt-6 text-[0.8125rem] text-ed-smoke sm:flex-row sm:justify-between'>
					<span>© {currentYear} WootzApp Inc. All rights reserved.</span>
					<span>Built on NVIDIA OpenShell. No NVIDIA endorsement implied.</span>
				</div>
			</div>
		</footer>
	);
}
