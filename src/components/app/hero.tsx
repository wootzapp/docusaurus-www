import React from "react";
import {PlayStoreButton} from "../ui/play-store-button";

const metrics = [
	{
		label: "Global device reach",
		value: "15M+",
		description: "Target install base across OEM partners",
	},
	{
		label: "Workflow latency",
		value: "<200ms",
		description: "Average trigger-to-task launch time",
	},
	{
		label: "Settlement speed",
		value: "5 minutes",
		description: "Stablecoin rewards reconciliation",
	},
];

export default function Hero() {
	return (
		<div className='relative isolate overflow-hidden bg-brand-base text-brand-text-primary'>
			<div className='absolute inset-y-0 right-[-40%] size-[120%] rounded-full bg-gradient-to-br from-brand-surface via-brand-overlay to-brand-base blur-3xl opacity-70 pointer-events-none' />
			<div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent-100/40 to-transparent' />

			<div className='container-custom relative z-10 flex flex-col gap-16 py-24 lg:py-32'>
				<div className='max-w-3xl flex flex-col gap-6'>
					<span className='inline-flex w-fit items-center gap-2 rounded-full border border-brand-accent-100/40 bg-brand-surface/70 px-4 py-1 text-xs uppercase tracking-[0.2em] text-brand-text-secondary'>
						Enterprise Browser Platform
					</span>
					<h1 className='font-matter text-4xl leading-tight sm:text-5xl lg:text-6xl'>
						Secure browsing that turns distributed teams into a compliant AI workforce
					</h1>
					<p className='font-matter text-base text-brand-text-secondary sm:text-lg lg:max-w-2xl'>
						WootzApp gives enterprises a managed, Chromium-based browser with embedded automation—complete with zero-trust isolation, programmable task routing, and instant global payouts.
					</p>
					<ul className='grid gap-3 text-sm text-brand-text-secondary sm:grid-cols-2 sm:text-base'>
						<li className='rounded-md border border-brand-border bg-brand-surface px-4 py-3'>
							<span className='font-semibold text-brand-text-primary'>Governed access</span>
							<p className='mt-1 text-sm text-brand-text-muted'>Apply policy, identity, and observability controls without disrupting user experience.</p>
						</li>
						<li className='rounded-md border border-brand-border bg-brand-surface px-4 py-3'>
							<span className='font-semibold text-brand-text-primary'>Integrated workflows</span>
							<p className='mt-1 text-sm text-brand-text-muted'>Launch AI data tasks natively inside browsing sessions with automated validation.</p>
						</li>
						<li className='rounded-md border border-brand-border bg-brand-surface px-4 py-3 sm:col-span-2 lg:col-span-1'>
							<span className='font-semibold text-brand-text-primary'>Financial operations</span>
							<p className='mt-1 text-sm text-brand-text-muted'>Trigger compliant payouts and audit logs in real time across global contributor networks.</p>
						</li>
					</ul>
					<div className='mt-4'>
						<PlayStoreButton />
					</div>
				</div>

				<div className='grid gap-4 sm:grid-cols-3'>
					{metrics.map((metric) => (
						<div key={metric.label} className='rounded-xl border border-brand-border bg-brand-surface p-6'>
							<p className='text-xs uppercase tracking-[0.2em] text-brand-text-muted'>{metric.label}</p>
							<p className='mt-3 font-matter text-3xl font-semibold text-brand-text-primary'>{metric.value}</p>
							<p className='mt-2 text-sm text-brand-text-muted'>{metric.description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
