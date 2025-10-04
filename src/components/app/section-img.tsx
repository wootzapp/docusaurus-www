import React from "react";

const pillars = [
	{
		title: "Governance by design",
		description: "Granular policies, SAML/SCIM provisioning, and full audit trails live inside the browser so compliance teams stay ahead of every session.",
		bullets: ["Role-based policy templates", "Session recording & export", "Data residency controls"],
	},
	{
		title: "Workflow intelligence",
		description: "Declarative playbooks connect your data sources, AI labeling steps, and quality gates without bouncing contributors between tools.",
		bullets: ["Dynamic task routing", "Automated consensus validation", "Observability dashboards"],
	},
	{
		title: "Delivery operations",
		description: "Native payout rails, dispute handling, and financial reconciliation mean every completed task is ready for the general ledger.",
		bullets: ["Stablecoin and fiat settlement", "Automated compliance checks", "Finance system webhooks"],
	},
];

export function SectionImg() {
	return (
		<section className='bg-white py-24 text-slate-900'>
			<div className='container-custom flex flex-col gap-12'>
				<div className='max-w-3xl text-left flex flex-col gap-4'>
					<span className='inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 px-4 py-1 text-xs uppercase tracking-[0.2em] text-slate-500'>
						Operating pillars
					</span>
					<h2 className='font-matter text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl'>
						A unified control surface for security, data, and finance teams
					</h2>
					<p className='text-sm text-slate-600 sm:text-base'>
						Designed with enterprise rigor, WootzApp aligns stakeholders across the organization with shared telemetry and automation hooks.
					</p>
				</div>

				<div className='grid gap-6 lg:grid-cols-3'>
					{pillars.map((pillar) => (
						<article key={pillar.title} className='flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6'>
							<h3 className='font-matter text-xl font-semibold text-slate-900'>
								{pillar.title}
							</h3>
							<p className='text-sm text-slate-600 sm:text-base'>
								{pillar.description}
							</p>
							<ul className='flex flex-col gap-2 text-sm text-slate-600'>
								{pillar.bullets.map((bullet) => (
									<li key={bullet} className='flex items-start gap-2'>
										<span className='mt-1 h-1.5 w-1.5 rounded-full bg-slate-400' />
										<span>{bullet}</span>
									</li>
								))}
							</ul>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
