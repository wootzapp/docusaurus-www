
import React from "react";

export function Intersection() {
	return (
		<section className='bg-white py-24 text-brand-base' id='example-environment'>
			<div className='container-custom flex flex-col gap-12'>
				<div className='grid gap-8 lg:grid-cols-2'>
					<div className='flex flex-col gap-4 rounded-2xl border border-brand-neutral-300 bg-brand-neutral-100 p-8 shadow-sm shadow-brand-base/5'>
						<span className='inline-flex w-fit items-center gap-2 rounded-full border border-brand-neutral-300 px-4 py-1 text-xs uppercase tracking-[0.2em] text-brand-neutral-500'>
							Example environment (news homepage)
						</span>
						<p className='text-sm text-brand-base sm:text-base'>
							Human spec encodes grid (`2fr 1fr`), gap tolerances, hero ratios, section order, token requirements, and policy boundaries. The reward suite evaluates structure, semantics, responsiveness, a11y, and policy compliance (e.g., no external CSS).
						</p>
						<ul className='flex flex-col gap-2 text-sm text-brand-base'>
							<li className='flex items-start gap-2'><span className='mt-1 h-1.5 w-1.5 rounded-full bg-brand-border/60' />Delivered as Dockerized RL API or Verifiers-compatible package.</li>
							<li className='flex items-start gap-2'><span className='mt-1 h-1.5 w-1.5 rounded-full bg-brand-border/60' />Reward breakdown highlights structural, token, and accessibility deltas.</li>
							<li className='flex items-start gap-2'><span className='mt-1 h-1.5 w-1.5 rounded-full bg-brand-border/60' />Auditable spec, DSL, and policy versions included with each release.</li>
						</ul>
					</div>

					<div className='flex flex-col gap-4 rounded-2xl border border-brand-neutral-300 bg-brand-neutral-100 p-8 shadow-sm shadow-brand-base/5'>
						<span className='inline-flex w-fit items-center gap-2 rounded-full border border-brand-neutral-300 px-4 py-1 text-xs uppercase tracking-[0.2em] text-brand-neutral-500'>
							Outcomes we optimize
						</span>
						<ul className='flex flex-col gap-2 text-sm text-brand-base'>
							<li className='flex items-start gap-2'><span className='mt-1 h-1.5 w-1.5 rounded-full bg-brand-border/60' />Lower cost per environment versus in-house scripting or one-off crowd efforts.</li>
							<li className='flex items-start gap-2'><span className='mt-1 h-1.5 w-1.5 rounded-full bg-brand-border/60' />Higher reward fidelity through human-grounded, test-driven scorers.</li>
							<li className='flex items-start gap-2'><span className='mt-1 h-1.5 w-1.5 rounded-full bg-brand-border/60' />Faster iteration: new tasks become new environments in hours, not weeks.</li>
							<li className='flex items-start gap-2'><span className='mt-1 h-1.5 w-1.5 rounded-full bg-brand-border/60' />Compliance and auditability with versioned specs, tests, and policy snapshots.</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
