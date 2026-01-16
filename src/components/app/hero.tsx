import React from "react";



export default function Hero() {
	return (
		<div className='relative isolate overflow-hidden bg-brand-base text-brand-text-primary'>
			<div className='absolute inset-y-0 right-[-40%] size-[120%] rounded-full bg-gradient-to-br from-brand-surface via-brand-overlay to-brand-base blur-3xl opacity-70 pointer-events-none' />
			<div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent-100/40 to-transparent' />

			<div className='container-custom relative z-10 flex flex-col gap-16 py-[72px] lg:py-32'>
				<div className='max-w-3xl flex flex-col gap-6'>
					<span className='inline-flex w-fit items-center rounded-full border border-brand-accent-100/50 bg-brand-accent-100/10 px-5 py-2 text-sm font-bold uppercase tracking-widest text-brand-accent-100 shadow-sm backdrop-blur-sm'>
						The RL Environment Company
					</span>
					<h1 className='font-matter font-bold text-hero-sm sm:text-hero-md lg:text-hero-lg'>
						We Rewrote the Browser<br />To Build Your Gym.
					</h1>
					<p className='font-matter text-body text-brand-text-secondary lg:max-w-2xl'>
						We bring the environment and the rollout system. Our custom browser renderer and v8 async infrastructure deliver the rewards and throughput you need to train agents for real work.
					</p>
					<div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
						<a
							href='https://calendar.app.google.com/UCdRbHAHJYTwUEgF6'
							className='inline-flex items-center justify-center rounded-full border border-brand-border bg-brand-accent-100 px-4 py-2 text-btn font-matter font-semibold text-brand-base shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg'
						>
							Request Early Access
						</a>
						<a
							href='#example-environment'
							className='inline-flex items-center justify-center rounded-full border border-brand-border px-4 py-2 text-btn font-matter font-semibold text-brand-text-secondary transition hover:text-brand-text-primary'
						>
							See Demo
						</a>
					</div>
				</div>

				<div className='rounded-3xl border border-brand-border/60 bg-brand-surface/85 p-6 shadow-[0_32px_120px_-60px_rgba(12,10,9,0.8)] ring-1 ring-brand-overlay/30 sm:p-10'>
					<div className='flex flex-col gap-8'>
						<div className='flex flex-col gap-4'>
							<span className='inline-flex w-fit items-center gap-2 rounded-full border border-brand-border/60 bg-brand-base/30 px-4 py-1 text-xs uppercase tracking-[0.18em] text-brand-text-secondary'>
								Capabilities
							</span>
							<h2 className='font-matter text-subsection font-bold text-brand-text-primary sm:text-subsection-lg'>
								What You Can Build
							</h2>
						</div>

						<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
							<div className="flex flex-col gap-2 rounded-2xl border border-brand-border/40 bg-brand-surface/50 p-6 hover:bg-brand-surface/80 transition-colors">
								<h3 className="font-semibold text-brand-text-primary">Frontend Codegen</h3>
								<p className="text-sm text-brand-text-muted/80">Give your code generation models eyes. Our renderer generates visual and structural rewards, enabling agents to iterate on UI until it's pixel-perfect.</p>
							</div>
							<div className="flex flex-col gap-2 rounded-2xl border border-brand-border/40 bg-brand-surface/50 p-6 hover:bg-brand-surface/80 transition-colors">
								<h3 className="font-semibold text-brand-text-primary">Agents</h3>
								<p className="text-sm text-brand-text-muted/80">Train agents on the live web, not static snapshots. We handle the complexity of modern web apps—auth, popups, and dynamic DOMs—so you can focus on reasoning.</p>
							</div>
							<div className="flex flex-col gap-2 rounded-2xl border border-brand-border/40 bg-brand-surface/50 p-6 hover:bg-brand-surface/80 transition-colors">
								<h3 className="font-semibold text-brand-text-primary">Browser Games</h3>
								<p className="text-sm text-brand-text-muted/80">Turn any browser game into a reasoning gym. We expose internal game state and provide deterministic frame stepping for high-fidelity RL training.</p>
							</div>
							<div className="flex flex-col gap-2 rounded-2xl border border-brand-border/40 bg-brand-surface/50 p-6 hover:bg-brand-surface/80 transition-colors">
								<h3 className="font-semibold text-brand-text-primary">Deep Search Evals</h3>
								<p className="text-sm text-brand-text-muted/80">Evaluate long-horizon search capabilities. Let agents navigate the open web to find answers, with full trajectory replay and ground-truth validation.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
