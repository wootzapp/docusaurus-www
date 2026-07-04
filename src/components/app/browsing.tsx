import React from "react";

export function Browsing() {
	return (
		<section className='sci-grid relative overflow-hidden bg-brand-neutral-100 text-brand-base' id='what-we-do'>
			<div className='absolute inset-0 sci-scanlines sci-scanlines--soft pointer-events-none' />
			<div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent-100/30 to-transparent' />
			<div className='container-custom relative z-10 flex flex-col gap-10 py-[72px] lg:py-32'>
				<div className='max-w-4xl flex flex-col gap-4'>
					<span className='sci-chip inline-flex w-fit items-center rounded-full border-dashed px-5 py-2 text-xs font-bold uppercase tracking-[0.28em] text-brand-accent-100 shadow-sm font-mono'>
						The W8 Privacy Pipeline
					</span>
					<h2 className='font-matter text-section font-bold sm:text-section-lg'>
						W8-RL makes private enterprise data usable for RL without losing control.
					</h2>
					<p className='text-body text-brand-base/80'>
						W8 assesses, sanitizes, documents, and packages sensitive systems so useful signal can move into model-training pipelines as defensible RL assets.
					</p>
				</div>

				<div className='grid gap-5 md:gap-8 md:grid-cols-2 lg:grid-cols-3'>
					<div className='relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-brand-neutral-300/80 bg-white/70 p-6 shadow-[0_24px_60px_-45px_rgba(31,19,13,0.35)] backdrop-blur sm:p-8'>
						<div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent-100/40 to-transparent' />
						<h3 className='font-matter text-subsection font-bold text-brand-base'>Privacy Assessment</h3>
						<ul className='flex flex-col gap-4 text-body-sm text-brand-base'>
							<li>
								<span className="font-bold text-brand-base font-mono">Sensitive surfaces</span>: <span className="text-brand-base/80">Fields, screens, records, source areas, and documents are identified before capture.</span>
							</li>
							<li>
								<span className="font-bold text-brand-base font-mono">Approved scope</span>: <span className="text-brand-base/80">Only agreed systems and workflows become tasks, rubrics, and rollout environments.</span>
							</li>
							<li>
								<span className="font-bold text-brand-base font-mono">Artifact policy</span>: <span className="text-brand-base/80">Each exported artifact has an explicit retention and redaction posture.</span>
							</li>
						</ul>
					</div>

					<div className='relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-brand-neutral-300/80 bg-white/70 p-6 shadow-[0_24px_60px_-45px_rgba(31,19,13,0.35)] backdrop-blur sm:p-8'>
						<div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent-100/40 to-transparent' />
						<h3 className='font-matter text-subsection font-bold text-brand-base'>Signal-Preserving Engineering</h3>
						<ul className='flex flex-col gap-4 text-body-sm text-brand-base'>
							<li>
								<span className="font-bold text-brand-base font-mono">Screenshots</span>: <span className="text-brand-base/80">Visual reality is captured where it adds verifier value.</span>
							</li>
							<li>
								<span className="font-bold text-brand-base font-mono">DOM state</span>: <span className="text-brand-base/80">Structured browser state supports precise checks while sensitive fields are constrained.</span>
							</li>
							<li>
								<span className="font-bold text-brand-base font-mono">Trajectory replay</span>: <span className="text-brand-base/80">Actions, observations, and outcomes remain inspectable.</span>
							</li>
						</ul>
					</div>

					<div className='relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-brand-neutral-300/80 bg-white/70 p-6 shadow-[0_24px_60px_-45px_rgba(31,19,13,0.35)] backdrop-blur sm:p-8'>
						<div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent-100/40 to-transparent' />
						<h3 className='font-matter text-subsection font-bold text-brand-base'>Documented Delivery</h3>
						<ul className='flex flex-col gap-4 text-body-sm text-brand-base'>
							<li>
								<span className="font-bold text-brand-base font-mono">Process reward</span>: <span className="text-brand-base/80">How well did the agent execute the workflow?</span>
							</li>
							<li>
								<span className="font-bold text-brand-base font-mono">Outcome label</span>: <span className="text-brand-base/80">Did the user-visible goal actually get completed?</span>
							</li>
							<li>
								<span className="font-bold text-brand-base font-mono">Privacy ledger</span>: <span className="text-brand-base/80">What was retained, removed, and delivered is documented.</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
