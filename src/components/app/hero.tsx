import React from "react";

const realtimeNarrative = [
	"Building computer-use or browser-use RL environments is brutally time-consuming.",
	"The challenge isn't infrastructure — it's the human cost of creating and curating realistic workflows, edge cases, and verifiable task logic.",
	"Existing tools weren't made for this kind of authoring.",
	"We rebuilt the browser from the ground up to solve this: Wootzapp turns human feedback into live RL environments.",
	"Because we own the browser, every label and correction updates the environment in real time.",
	"The feedback loop closes instantly: annotations become specs, specs become reward logic, and rewards become trainable environments.",
];

const realtimeSignals = ["Human-guided authoring", "Visual workflow IDE", "Production-safe clones"];

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

			<div className='container-custom relative z-10 flex flex-col gap-16 py-24 lg:py-32'>
				<div className='max-w-3xl flex flex-col gap-6'>
					<span className='inline-flex w-fit items-center gap-2 rounded-full border border-brand-accent-100/40 bg-brand-surface/70 px-4 py-1 text-xs uppercase tracking-[0.2em] text-brand-text-secondary'>
						Human-Curated Browser-Use RL Environments
					</span>
					<h1 className='font-matter text-4xl leading-tight sm:text-5xl lg:text-6xl'>
						The Browser for Browser-Use RL Environments
					</h1>
					<p className='font-matter text-base text-brand-text-secondary sm:text-lg lg:max-w-2xl'>
						Purpose-built to let humans teach agents how to use software — by building computer-use RL environments from real workflows.
					</p>
					<div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
						<a
							href='#get-started'
							className='inline-flex items-center justify-center rounded-lg border border-brand-border bg-brand-accent-100 px-6 py-3 text-sm font-matter font-semibold text-brand-base shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg'
						>
							Request Early Access
						</a>
						<a
							href='#example-environment'
							className='inline-flex items-center justify-center rounded-lg border border-brand-border px-6 py-3 text-sm font-matter font-semibold text-brand-text-secondary transition hover:text-brand-text-primary'
						>
							See Demo
						</a>
					</div>
				</div>

				<div className='rounded-3xl border border-brand-border/60 bg-brand-surface/85 p-6 shadow-[0_32px_120px_-60px_rgba(12,10,9,0.8)] ring-1 ring-brand-overlay/30 sm:p-10'>
					<div className='grid gap-8 lg:grid-cols-2 lg:items-start'>
						<div className='relative flex flex-col gap-6 rounded-2xl border border-brand-border/40 bg-gradient-to-br from-brand-base/55 via-brand-overlay/45 to-brand-surface/95 p-6 sm:p-8'>
							<span className='inline-flex w-fit items-center gap-2 rounded-full border border-brand-border/60 bg-brand-base/30 px-4 py-1 text-xs uppercase tracking-[0.18em] text-brand-text-secondary'>
								Why Model Labs Choose Us
							</span>
							<h2 className='font-matter text-2xl font-semibold leading-snug text-brand-text-primary sm:text-3xl'>
								RL Isn't Held Back by Infra — It's Held Back by People Time
							</h2>
							<p className='text-sm text-brand-text-muted/80 sm:text-base'>
								We give humans the tools to build environments 10x faster.
							</p>
							<div className='flex flex-wrap gap-2'>
								{realtimeSignals.map((signal) => (
									<span
										key={signal}
										className='inline-flex items-center gap-2 rounded-full border border-brand-border/30 bg-brand-surface/70 px-3 py-1 text-xs font-matter text-brand-text-secondary shadow-sm shadow-brand-base/10'
									>
										<span className='size-1.5 rounded-full bg-brand-accent-100' />
										{signal}
									</span>
								))}
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
											<p className='font-matter text-[0.95rem] leading-relaxed text-brand-text-muted sm:text-base lg:text-lg'>
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
