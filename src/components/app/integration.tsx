import React from "react";

export function Integration() {
	return (
		<section className='sci-grid relative overflow-hidden bg-brand-neutral-100 py-[72px] text-brand-base lg:py-32'>
			<div className='absolute inset-0 sci-scanlines sci-scanlines--soft pointer-events-none' />
			<div className='container-custom relative z-10 flex flex-col items-center gap-12 text-center'>
				<div className='flex flex-col gap-6 max-w-4xl'>
					<span className='sci-chip mx-auto inline-flex w-fit items-center rounded-full border-dashed px-5 py-2 text-xs font-bold uppercase tracking-[0.28em] text-brand-accent-100 shadow-sm backdrop-blur-sm font-mono'>
						Deployment With Privacy Boundaries
					</span>
					<h2 className='font-matter text-subsection font-bold text-brand-base sm:text-subsection-lg'>
						Fits the way enterprise data owners already work.
					</h2>
					<p className='font-matter text-body text-brand-base/80'>
						RL starts with the data assets and pipelines. WootzApp works with enterprise teams, IT services providers, and model labs to package enterprise workflows into W8-RL environments with privacy-reviewed browser evidence, rewards, and rollout infrastructure.
					</p>
					<p className='font-matter text-body text-brand-base/80'>
						Deploy the workflow capture where the data owner is comfortable: controlled staging, VPC, on-prem, or a managed review path with explicit artifact boundaries.
					</p>
				</div>

				<div className='terminal-window w-full max-w-5xl overflow-hidden'>
					<div className='aspect-video w-full'>
						<iframe
							width='100%'
							height='100%'
							src='https://www.youtube.com/embed/OtjI9PznF2E?autoplay=1&mute=1&controls=0&loop=1&playlist=OtjI9PznF2E&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&fs=0&disablekb=1'
							title='WootzApp privacy-preserving browser workflow demo'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
							className='h-full w-full'
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Integration;
