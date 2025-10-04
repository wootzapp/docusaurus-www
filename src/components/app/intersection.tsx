import React from "react";

const insights = [
	{
		title: "Explosive market growth",
		detail: "$27B projected AI labeling spend",
		description: "Enterprises are investing aggressively in high-quality data, yet the tooling required to deliver at scale remains fragmented and manual.",
	},
	{
		title: "Mobile-first advantage",
		detail: "95% mobile-only contributors",
		description: "WootzApp activates mobile devices as compliant workstations, reaching talent pools traditional desktop platforms miss.",
	},
	{
		title: "Instant payouts & lower costs",
		detail: "Minutes to settle rewards",
		description: "Stablecoin rails remove lag and fees, aligning incentives while keeping finance teams in control.",
	},
	{
		title: "Strategic distribution",
		detail: "OEM partners pre-install",
		description: "Zero-CAC expansion through device manufacturers delivers immediate scale and predictable supply.",
	},
];

export function Intersection() {
	return (
		<section className='bg-slate-100 py-24 text-slate-900'>
			<div className='container-custom flex flex-col gap-12'>
				<div className='mx-auto max-w-3xl text-center flex flex-col gap-4'>
					<span className='mx-auto inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-1 text-xs uppercase tracking-[0.2em] text-slate-500'>
						Market alignment
					</span>
					<h2 className='font-matter text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl'>
						Where AI data, decentralization, and enterprise rigor converge
					</h2>
					<p className='text-sm text-slate-600 sm:text-base'>
						We purpose-built WootzApp to match macro trends shaping AI delivery—pairing compliant infrastructure with global reach.
					</p>
				</div>

				<div className='grid gap-6 md:grid-cols-2 xl:grid-cols-4'>
					{insights.map((item) => (
						<div key={item.title} className='flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
							<span className='text-xs font-semibold uppercase tracking-[0.2em] text-slate-500'>
								{item.detail}
							</span>
							<h3 className='font-matter text-xl font-semibold text-slate-900'>
								{item.title}
							</h3>
							<p className='text-sm text-slate-600 sm:text-base'>
								{item.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
