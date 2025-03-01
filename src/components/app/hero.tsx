import {PlayStoreButton} from "../ui/play-store-button";
import React from "react";
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Hero() {
	return (
		<div className='relative w-full h-full'>
			<div className='absolute -top-32 md:-top-16'>
				<img src={useBaseUrl('img/home-shade.png')} className='object-cover h-[170px]' alt='Top decoration' />
			</div>
			<div className='absolute w-full h-full'>
				<img src={useBaseUrl('img/mobile_vector.png')} className='md:hidden object-cover w-full h-full' alt='Mobile background vector' />
				<img src={useBaseUrl('img/desktop_vector.png')} className='hidden md:block object-cover w-full h-full' alt='Desktop background vector' />
			</div>

			<div className='container-custom relative z-10'>
				<div className='flex flex-col md:flex-row justify-between pt-16 xl:gap-0 gap-10'>
					<div className='basis-full flex flex-col gap-6 justify-start items-center md:items-start text-center md:text-left mt-0 lg:mt-24'>
						<h1 className='text-3xl sm:text-4xl lg:text-6xl xl:text-6xl leading-normal lg:leading-snug xl:leading-relaxed font-bold font-matter xl:max-w-xl [@media(max-width:425px)]:text-3xl'>
							<span className='bg-gradient-to-r from-brand-orange-200 to-orange-300 bg-clip-text text-transparent mr-2'>WootzApp</span>
							<span>-</span> The Crypto Browser that Pays You
						</h1>

						<p className='font-matter text-brand-black-200 ~text-base/lg max-w-2xl'>
							A lightweight, Chromium‑based mobile browser that lets you earn crypto and stablecoins while you surf—no extra apps, no extra hassle.
						</p>

						<PlayStoreButton />
					</div>

					<div className='contain-inline-size basis-full flex flex-col items-center md:items-end gap-10 relative w-full'>
						<img src={useBaseUrl('img/twitter-img.png')} alt='Twitter testimonial' className='w-full mx-auto md:mx-0 max-w-[450px] lg:max-w-[500px]' />
						<img src={useBaseUrl('img/hero-img.png')} alt='Application screenshot' className='w-full mx-auto md:mx-0 max-w-[520px] md:max-w-[450px] lg:max-w-[600px]' />
						<img src={useBaseUrl('img/arrow.png')} alt='Decorative arrow' className='absolute -left-10 top-28 hidden md:block' />
					</div>
				</div>
			</div>
		</div>
	);
}
