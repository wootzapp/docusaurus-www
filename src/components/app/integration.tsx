import React from "react";

export function Integration() {
	return (
		<section className='bg-white text-brand-base py-[72px] lg:py-32'>
			<div className='container-custom flex flex-col gap-12 items-center text-center'>
				<div className='flex flex-col gap-6 max-w-4xl'>
					<span className='inline-flex w-fit mx-auto items-center rounded-full border border-brand-neutral-400 bg-white px-5 py-2 text-sm font-bold uppercase tracking-widest text-brand-base shadow-sm'>
						Integrated with Infrastructure & Training Platforms
					</span>
					<h2 className='font-matter text-subsection font-bold text-brand-base sm:text-subsection-lg'>
						The Missing Layer for Agent Training
					</h2>
					<p className='font-matter text-body text-brand-base/80'>
						Training agents on static datasets fails in the real world. You need live, interactive environments. We provide the infrastructure to simulate millions of browser sessions in parallel—generating the dense, deterministic signals required to train SOTA agents.
					</p>
					<p className='font-matter text-body text-brand-base/80'>
						Bypass anti-bot protections and capture frame-perfect rendering events via our hardened CDP pipeline.
					</p>
				</div>

				<div className='w-full max-w-5xl overflow-hidden rounded-2xl shadow-2xl ring-1 ring-brand-overlay/30 aspect-video bg-black'>
					<iframe
						width='100%'
						height='100%'
						src='https://www.youtube.com/embed/OtjI9PznF2E?autoplay=1&mute=1&controls=0&loop=1&playlist=OtjI9PznF2E&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&fs=0&disablekb=1'
						title='Integrated with Infrastructure & Training Platforms'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
						className='w-full h-full'
					/>
				</div>
			</div>
		</section>
	);
}

export default Integration;
