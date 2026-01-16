import React from "react";

const realtimeNarrative = [
	"We build RL environments. You train the models.",
	"Standard browsers are black boxes. We rewrote the renderer and network stack.",
	"This lets us generate deterministic, browser-native rewards no one else can.",
	"To drive this custom browser, we built the v8 Async Rollout System.",
	"Userspace reboots in 10s. Zero synchronous barriers.",
	"Our goal: Enable the automation of all valuable work in the economy.",
];

type ArrowIconProps = {
	className?: string;
};

const ArrowIcon = ({ className = "" }: ArrowIconProps) => (
	<svg
		aria-hidden
		viewBox='0 0 24 24'
		fill='none'
		className={`h-6 w-6 sm:h-8 sm:w-8 ${className}`.trim()}
	>
		<path
			d='M12 3v14M5 10l7 7 7-7'
			stroke='currentColor'
			strokeWidth={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);

const EndIcon = ({ className = "" }: ArrowIconProps) => (
	<svg
		aria-hidden
		viewBox='0 0 24 24'
		fill='none'
		className={`h-6 w-6 sm:h-8 sm:w-8 ${className}`.trim()}
	>
		<circle cx={12} cy={12} r={5} stroke='currentColor' strokeWidth={1.5} fill='currentColor' />
	</svg>
);

export default function Hero() {
	return (
		<div className='relative isolate overflow-hidden bg-brand-base text-brand-text-primary'>
			<div className='absolute inset-y-0 right-[-40%] size-[120%] rounded-full bg-gradient-to-br from-brand-surface via-brand-overlay to-brand-base blur-3xl opacity-70 pointer-events-none' />
			<div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent-100/40 to-transparent' />

			<div className='container-custom relative z-10 flex flex-col gap-16 py-[72px] lg:py-32'>
				<div className='max-w-3xl flex flex-col gap-6'>
					<span className='inline-flex w-fit items-center gap-2 rounded-full border border-brand-accent-100/40 bg-brand-surface/70 px-4 py-1 text-xs uppercase tracking-[0.2em] text-brand-text-secondary'>
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
					<div className='grid gap-8 lg:grid-cols-2 lg:items-start'>
						<div className='relative flex flex-col gap-6 rounded-2xl border border-brand-border/40 bg-gradient-to-br from-brand-base/55 via-brand-overlay/45 to-brand-surface/95 p-6 sm:p-8'>
							<span className='inline-flex w-fit items-center gap-2 rounded-full border border-brand-border/60 bg-brand-base/30 px-4 py-1 text-xs uppercase tracking-[0.18em] text-brand-text-secondary'>
								Capabilities
							</span>
							<h2 className='font-matter text-subsection font-bold text-brand-text-primary sm:text-subsection-lg'>
								What You Can Build
							</h2>
							<div className="grid gap-6 sm:grid-cols-2">
								<div className="flex flex-col gap-1">
									<h3 className="font-semibold text-brand-text-primary">SOTA Web Agents</h3>
									<p className="text-sm text-brand-text-muted/80">Navigate complex, JS-heavy sites.</p>
								</div>
								<div className="flex flex-col gap-1">
									<h3 className="font-semibold text-brand-text-primary">Resilient Scrapers</h3>
									<p className="text-sm text-brand-text-muted/80">Adapt to layout changes automatically.</p>
								</div>
								<div className="flex flex-col gap-1">
									<h3 className="font-semibold text-brand-text-primary">Auto-QA Systems</h3>
									<p className="text-sm text-brand-text-muted/80">Self-healing tests that verify flows.</p>
								</div>
								<div className="flex flex-col gap-1">
									<h3 className="font-semibold text-brand-text-primary">Process Automation</h3>
									<p className="text-sm text-brand-text-muted/80">Execute tedious workflows end-to-end.</p>
								</div>
							</div>
						</div>

						<div className='relative overflow-hidden rounded-2xl bg-brand-base/15 p-6 sm:p-8'>
							<div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_70%)]' />
							<div className='absolute left-5 top-10 bottom-10 hidden w-px bg-brand-accent-100/25 lg:block' />
							<div className='relative flex flex-col gap-6'>
								{realtimeNarrative.map((entry, index) => (
									<React.Fragment key={entry}>
										<div className='relative flex items-start gap-4'>
											<span className='relative z-10 mt-1 flex size-8 items-center justify-center rounded-full bg-brand-accent-100/20 text-brand-accent-100 ring-1 ring-brand-accent-100/40'>
												{index < realtimeNarrative.length - 1 ? <ArrowIcon className='text-brand-accent-100' /> : <EndIcon className='text-brand-accent-100' />}
											</span>
											<p className='font-matter text-body-sm text-brand-text-muted sm:text-body'>
												{entry}
											</p>
										</div>
										{index < realtimeNarrative.length - 1 && (
											<ArrowIcon className='mx-6 text-brand-accent-100/70 lg:hidden' />
										)}
									</React.Fragment>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
