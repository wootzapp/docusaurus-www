import {PlayStoreButton} from "../ui/play-store-button";

const commitments = [
	{
		title: "Verified devices",
		copy: "Hardware attestation and policy compliance checks before every session starts.",
	},
	{
		title: "Human-in-the-loop quality",
		copy: "Consensus workflows and reviewer escalations configurable per dataset.",
	},
	{
		title: "Finance visibility",
		copy: "Real-time payout status, variance alerts, and export-ready ledgers.",
	},
];

export function Experience() {
	return (
		<section className='bg-slate-950 py-24 text-white'>
			<div className='container-custom'>
				<div className='relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 px-8 py-14 sm:px-12 lg:px-16'>
					<div className='grid gap-12 lg:grid-cols-[1.2fr,1fr] lg:items-center'>
						<div className='flex flex-col gap-6'>
							<span className='inline-flex w-fit items-center gap-2 rounded-full border border-white/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-white/60'>
								Customer experience
							</span>
							<h2 className='font-matter text-3xl font-semibold leading-tight sm:text-4xl'>
								Experience a browser that accelerates enterprise delivery
							</h2>
							<p className='text-sm text-white/70 sm:text-base'>
								From onboarding new regions to scaling AI validation teams, WootzApp provides the trust rails, automation hooks, and financial tooling required by modern enterprises.
							</p>
							<div>
								<PlayStoreButton />
							</div>
						</div>

						<ul className='flex flex-col gap-6'>
							{commitments.map((item) => (
								<li key={item.title} className='rounded-2xl border border-white/10 bg-white/5 p-6'>
									<p className='font-matter text-lg font-semibold text-white'>{item.title}</p>
									<p className='mt-2 text-sm text-white/70 sm:text-base'>{item.copy}</p>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
