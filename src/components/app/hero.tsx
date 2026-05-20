import React from "react";



export default function Hero() {
	return (
		<div className='sci-grid relative isolate overflow-hidden bg-brand-base text-brand-text-primary'>
			<div className='absolute inset-0 sci-scanlines pointer-events-none' />
			<div className='hero-aurora pointer-events-none' />
			<div className='hero-aurora hero-aurora--two pointer-events-none' />
			<div className='hero-aurora hero-aurora--three pointer-events-none' />
			<div className='hero-beam pointer-events-none' />
			<div className='hero-beam hero-beam--low pointer-events-none' />
			<div className='hero-beam hero-beam--fast pointer-events-none' />
			<div className='absolute -top-32 right-[-10%] size-[360px] rounded-full sci-orb sci-float pointer-events-none' />
			<div className='absolute bottom-[-30%] left-[-15%] size-[420px] rounded-full sci-orb opacity-60 pointer-events-none' />
			<div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent-100/40 to-transparent' />
			<div className='absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-accent-200/30 to-transparent' />

			<div className='container-custom relative z-10 flex flex-col gap-16 py-[72px] lg:py-32'>
				<div className='max-w-3xl flex flex-col gap-6'>
					<span className='reveal inline-flex w-fit items-center rounded-full border border-brand-base/20 bg-brand-neutral-100/80 px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] text-brand-base shadow-sm backdrop-blur-sm font-mono'>
						The RL Environment Company
					</span>
					<h1 className='reveal reveal-delay-1 font-matter font-bold text-hero-sm text-brand-base sm:text-hero-md lg:text-hero-lg'>
						We Rewrote the Browser<br />To Build Your Gym.
					</h1>
					<p className='reveal reveal-delay-2 font-matter text-body text-brand-base/80 lg:max-w-2xl'>
						We bring the environment and the rollout system. Our custom browser renderer and W8 async infrastructure deliver the rewards and throughput you need to train agents for real work.
					</p>
					<div className='reveal reveal-delay-3 flex flex-col gap-3 sm:flex-row sm:items-center'>
						<a
							href='https://calendar.app.google/jjLE5C9TczR2vhHe9'
							className='inline-flex items-center justify-center rounded-md border border-brand-accent-200/60 bg-brand-accent-100 px-4 py-2 text-btn font-mono font-semibold tracking-[0.16em] text-brand-base shadow-[0_12px_35px_-18px_rgba(242,139,50,0.7)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_45px_-18px_rgba(242,139,50,0.85)]'
						>
							Request Early Access
						</a>
						<a
							href='#example-environment'
							className='inline-flex items-center justify-center rounded-md border border-brand-border px-4 py-2 text-btn font-mono font-semibold tracking-[0.16em] text-brand-base transition hover:text-brand-base hover:border-brand-accent-200/60'
						>
							See Demo
						</a>
					</div>
				</div>

				<div className='terminal-window glow-box'>
					<div className='terminal-header justify-start'>
						<span className='terminal-title'>Capabilities</span>
					</div>
					<div className='terminal-body flex flex-col gap-8 p-6 sm:p-10'>
						<div className='flex flex-col gap-4'>
							<h2 className='font-mono text-subsection font-semibold tracking-[0.04em] text-brand-text-primary sm:text-subsection-lg'>
								What You Can Build
							</h2>
						</div>

						<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
							<div className="sci-chip flex flex-col gap-2 rounded-2xl p-6 transition-colors hover:border-brand-accent-200/60">
								<h3 className="font-mono text-sm font-semibold text-brand-text-primary">Frontend Codegen</h3>
								<p className="text-sm text-brand-text-muted/80">Give your code generation models eyes. Our renderer generates visual and structural rewards, enabling agents to iterate on UI until it's pixel-perfect.</p>
							</div>
							<div className="sci-chip flex flex-col gap-2 rounded-2xl p-6 transition-colors hover:border-brand-accent-200/60">
								<h3 className="font-mono text-sm font-semibold text-brand-text-primary">Agents</h3>
								<p className="text-sm text-brand-text-muted/80">Train agents on the live web, not static snapshots. We handle the complexity of modern web apps—auth, popups, and dynamic DOMs—so you can focus on reasoning.</p>
							</div>
							<div className="sci-chip flex flex-col gap-2 rounded-2xl p-6 transition-colors hover:border-brand-accent-200/60">
								<h3 className="font-mono text-sm font-semibold text-brand-text-primary">Browser Games</h3>
								<p className="text-sm text-brand-text-muted/80">Turn any browser game into a reasoning gym. We expose internal game state and provide deterministic frame stepping for high-fidelity RL training.</p>
							</div>
							<div className="sci-chip flex flex-col gap-2 rounded-2xl p-6 transition-colors hover:border-brand-accent-200/60">
								<h3 className="font-mono text-sm font-semibold text-brand-text-primary">Deep Search Evals</h3>
								<p className="text-sm text-brand-text-muted/80">Evaluate long-horizon search capabilities. Let agents navigate the open web to find answers, with full trajectory replay and ground-truth validation.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
