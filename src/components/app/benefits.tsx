import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export const partner = [
	{
		img: "img/benefit-1.png",
		head: "For Developers",
		para: "Access our open-source codebase on GitHub. Utilize detailed technical documentation and our SDK to build extensions that tap into a global, mobile-first audience.",
	},
	{
		img: "img/benefit-2.png",
		head: "For Partners",
		para: "Leverage our OEM partnerships that pre-install WootzApp on millions of devices—delivering zero user acquisition cost and instant global reach. Our platform is already live with five pilot AI partners deploying data workflows.",
	},
	{
		img: "img/benefit-3.png",
		head: "Distribution & Scale",
		para: "With an average of 5.2 hours of daily browser use and plans to reach 15M+ devices, our system offers unprecedented scale and cost efficiencies (as low as $0.10–$0.30 per label).",
	},
];

export function Benefits() {
	return (
		<div className='pt-16 container-custom text-brand-white-600 pb-24'>
			<h2 className='text-brand-black-100 font-matter ~text-2xl/4xl font-bold text-center max-w-4xl mx-auto leading-normal'>
				Developer & Partner
				<span className='text-brand-orange-200'> Benefits</span>
			</h2>

			<div className='grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-7 mt-5 md:mt-16 justify-center w-full'>
				{partner.map((e, index) => {
					return (
						<div key={index} className='text-center flex flex-col gap-3 md:gap-4 items-center'>
							<img src={useBaseUrl(e.img)} alt={`Benefit icon for ${e.head}`} className='max-w-3xl' />
							<h4 className='text-brand-black-100 font-matter ~text-xl/3xl font-bold leading-normal tracking-wide'>{e.head}</h4>
							<p className='text-brand-black-200 font-matter font-light ~text-sm/lg'>{e.para}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}
