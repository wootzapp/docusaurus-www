import React from "react";

const realtimeNarrative = [
	"Private data assets and enterprise workflows hold the signal model labs need.",
	"Enterprise data owners need control over what leaves their boundary.",
	"The browser captures the evidence a verifier needs: screenshots, DOM state, actions, and outcomes.",
	"W8 converts that evidence into privacy-reviewed RL assets and pipelines.",
	"Rewards, rollouts, and outcome labels are designed around the asset.",
	"Every environment ships with documentation of what was retained and why.",
];

export function BrowserPlatform() {
	return (
		<section className='sci-grid relative overflow-hidden bg-brand-base py-[72px] text-brand-text-primary lg:py-32'>
			<div className='absolute inset-0 sci-scanlines sci-scanlines--strong pointer-events-none' />
			<div className='container-custom relative z-10 flex flex-col gap-12'>
				<div className='terminal-window'>
					<div className='terminal-header justify-start'>
						<span className='terminal-title'>Our Stance</span>
					</div>
					<div className="terminal-body grid gap-12 p-6 sm:p-10 lg:grid-cols-2">
						<div className="flex flex-col justify-center gap-6">
							<h2 className='font-mono text-subsection font-semibold tracking-[0.04em] text-brand-text-primary sm:text-subsection-lg'>
								We Own RL From<br />The Data Layer
							</h2>
							<p className='font-matter text-body text-brand-text-secondary'>
								Training pipelines are becoming commoditized. The hard part is the private data asset, the evidence capture, the reward design, and the privacy-reviewed pipeline around it. Our browser captures the evidence a verifier needs while W8 controls what leaves the enterprise boundary.
							</p>
						</div>

						<div className='flex flex-col gap-4'>
							{realtimeNarrative.map((entry, index) => (
								<div key={entry} className='sci-chip flex gap-4 rounded-xl p-4 transition hover:border-brand-accent-200/60'>
									<div className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-accent-100/10 text-sm font-bold text-brand-accent-200 ring-1 ring-brand-accent-100/20'>
										{(index + 1).toString().padStart(2, '0')}
									</div>
									<p className='text-sm text-brand-text-secondary'>
										{entry}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className='grid gap-5 md:gap-8 md:grid-cols-3'>
					<div className='sci-panel flex h-full flex-col gap-3 rounded-2xl p-6 sm:p-8'>
						<span className='font-mono text-xs font-semibold uppercase tracking-[0.3em] text-brand-text-secondary'>The Asset</span>
						<h3 className='font-matter text-subsection font-bold text-brand-text-primary'>Private Signal, Made Usable</h3>
						<p className='text-body-sm text-brand-text-secondary'>
							Codebases, workflows, and operational data become trainable RL assets only after useful behavior is captured, sanitized, and documented.
						</p>
					</div>

					<div className='sci-panel flex h-full flex-col gap-3 rounded-2xl p-6 sm:p-8'>
						<span className='font-mono text-xs font-semibold uppercase tracking-[0.3em] text-brand-text-secondary'>The Pipeline</span>
						<h3 className='font-matter text-subsection font-bold text-brand-text-primary'>W8 Controls the Pipeline</h3>
						<p className='text-body-sm text-brand-text-secondary'>
							W8 maps enterprise boundaries, captures approved evidence, redacts or constrains sensitive fields, and packages repeatable RL environments with reward traces.
						</p>
					</div>

					<div className='sci-panel flex h-full flex-col gap-3 rounded-2xl p-6 sm:p-8'>
						<span className='font-mono text-xs font-semibold uppercase tracking-[0.3em] text-brand-text-secondary'>The Verifier</span>
						<h3 className='font-matter text-subsection font-bold text-brand-text-primary'>Defensible Training Signal</h3>
						<p className='text-body-sm text-brand-text-secondary'>
							Model labs can train on enterprise-grade workflows while data owners retain IP, privacy posture, and documentation of what was delivered.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default BrowserPlatform;
