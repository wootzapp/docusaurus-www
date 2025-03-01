import {PlayStoreButton} from "../ui/play-store-button";
import useBaseUrl from '@docusaurus/useBaseUrl';

export function Experience() {
	return (
		<div className='container-custom mt-[300px] xl:mt-[400px] relative mb-28'>
			<div className='bg-brand-green-200 text-brand-white-100 flex flex-col md:flex-row py-10 rounded-3xl h-auto md:h-[500px] items-center px-5 md:px-10 relative'>
				<img src={useBaseUrl('img/pattern.png')} alt='Background pattern' className='absolute bottom-0 left-0' />

				<div className='flex flex-col space-y-4 sm:space-y-7 items-center md:items-start flex-1 order-2 md:order-1'>
					<h2 className='font-matter font-medium md:font-bold ~text-xl/5xl leading-snug text-xl sm:text-3xl md:text-5xl text-center md:text-left'>
						Experience a Browser That Works for You
					</h2>
					<p className='font-matter font-regular text-brand-white-700 ~text-xs/lg [@media(max-width:400px)]:text-[10px] tracking-wide text-center md:text-left'>
						Whether you're a user earning rewards on every click, a developer building cutting-edge extensions, or a partner looking to tap into a mobile-first,
						decentralized workforce, WootzApp is redefining AI data labeling and gig payments.
					</p>

					<PlayStoreButton bg_color='bg-brand-orange-300' />
				</div>

				<div className='flex-1 flex justify-center relative -mt-52 md:-top-32 order-1 md:order-2'>
					<img src={useBaseUrl('img/experience-img.png')} alt='Browser experience illustration' className='w-full max-w-md md:max-w-full' />
				</div>
			</div>
		</div>
	);
}
