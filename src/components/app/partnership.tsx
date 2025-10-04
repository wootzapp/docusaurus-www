import React from "react";

export function PartnerShip() {
	return (
		<section className='bg-brand-neutral-100 py-24 text-brand-base' id='delivery-formats'>
			<div className='container-custom flex flex-col gap-12'>
				<div className='mx-auto max-w-3xl text-center flex flex-col gap-4'>
					<span className='mx-auto inline-flex items-center gap-2 rounded-full border border-brand-neutral-300 px-4 py-1 text-xs uppercase tracking-[0.2em] text-brand-neutral-500'>
						Delivery formats
					</span>
					<h2 className='font-matter text-3xl font-semibold leading-tight sm:text-4xl'>
						Choose the integration path that fits your stack
					</h2>
					<p className='text-sm text-brand-neutral-500 sm:text-base'>
						Both formats deliver the same spec, reward logic, and validation artifacts. Pick the interface your RL infrastructure already speaks.
					</p>
				</div>

				<div className='mx-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-brand-neutral-300 bg-white shadow-sm shadow-brand-base/5'>
					<table className='w-full table-auto divide-y divide-brand-neutral-300 text-left text-sm'>
						<thead className='bg-brand-neutral-100 text-brand-base'>
							<tr>
								<th className='px-5 py-4 font-semibold'>Format</th>
								<th className='px-5 py-4 font-semibold'>What you get</th>
								<th className='px-5 py-4 font-semibold'>Where it fits</th>
							</tr>
						</thead>
						<tbody className='divide-y divide-brand-neutral-200 text-brand-base/80'>
							<tr>
								<td className='px-5 py-5 align-top font-matter font-semibold text-brand-base'>RL API (Dockerized)</td>
								<td className='px-5 py-5 align-top whitespace-normal leading-relaxed'>Self-contained service exposing `/reset` and `/step`. Your agent submits code, the environment runs tests/scorers, then returns reward plus check breakdown.</td>
								<td className='px-5 py-5 align-top whitespace-normal leading-relaxed'>RL training loops (PPO/GRPO/A2C), batch evaluation jobs, automated regression suites.</td>
							</tr>
							<tr>
								<td className='px-5 py-5 align-top font-matter font-semibold text-brand-base'>Verifiers-compatible package</td>
								<td className='px-5 py-5 align-top whitespace-normal leading-relaxed'>Python environment implementing the Verifiers interfaces: dataset, rubric(s), and interaction protocol (e.g., `MultiTurnEnv`). Loadable via `verifiers.load_environment` and trainable with GRPOTrainer.</td>
								<td className='px-5 py-5 align-top whitespace-normal leading-relaxed'>Enterprise evaluation stacks, Agent frameworks, or Prime Intellect workflows.<br /><a className='text-brand-accent-200 underline underline-offset-4' href='https://verifiers.readthedocs.io/en/latest/overview.html?utm_source=chatgpt.com'>verifiers.readthedocs.io</a></td>
							</tr>
						</tbody>
					</table>
				</div>

				<div className='mx-auto w-full max-w-4xl rounded-2xl border border-brand-border bg-brand-base px-6 py-8 text-brand-text-primary shadow-lg shadow-brand-base/20'>
					<p className='text-sm leading-relaxed text-brand-text-secondary'>
						Verifiers provides first-class primitives for custom interaction protocols, multi-criteria rewards (“rubrics”), and OpenAI-compatible model IO, plus a built-in GRPO trainer. Our packages adhere to these interfaces so you can drop them into existing pipelines without glue code. <a className='text-brand-text-primary underline underline-offset-4' href='https://verifiers.readthedocs.io/?utm_source=chatgpt.com'>Learn more</a>.
					</p>
				</div>
			</div>
		</section>
	);
}
