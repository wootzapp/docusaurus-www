import React from "react";

export const partner = [
	{
		label: "For developers",
		head: "Ship extensions with enterprise guardrails",
		para: "Build against an API surface that handles authentication, sandboxing, and reward logic out of the box so you can focus on workflow innovation.",
	},
	{
		label: "For partners",
		head: "Deploy AI labeling programs in record time",
		para: "Tap into a mobile-first contributor base with pre-configured quality controls and monitoring, backed by OEM distribution.",
	},
	{
		label: "For operations",
		head: "Scale with predictable economics",
		para: "Drive cost-per-label down to cents with automated routing, consensus, and payouts that keep global teams aligned.",
	},
];

export function Benefits() {
	return (
		<section className='bg-slate-50 py-24 text-slate-900'>
			<div className='container-custom flex flex-col gap-12'>
				<div className='mx-auto max-w-3xl text-center flex flex-col gap-4'>
					<span className='mx-auto inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-1 text-xs uppercase tracking-[0.2em] text-slate-500'>
						Tailored value
					</span>
					<h2 className='font-matter text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl'>
						Designed for builders, decision makers, and operators alike
					</h2>
				</div>

				<div className='grid gap-6 md:grid-cols-3'>
					{partner.map((item) => (
						<div key={item.head} className='flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm'>
							<span className='text-xs font-semibold uppercase tracking-[0.2em] text-slate-500'>
								{item.label}
							</span>
							<h3 className='font-matter text-xl font-semibold text-slate-900'>
								{item.head}
							</h3>
							<p className='text-sm text-slate-600 sm:text-base'>
								{item.para}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
