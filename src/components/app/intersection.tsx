import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

export function Intersection() {
	return (
		<div className='h-auto bg-brand-white-200 pt-16 pb-20'>
			<div className='container-custom'>
				<h2 className='text-brand-black-100 font-matter ~text-2xl/4xl font-bold text-center max-w-lg mx-auto'>
					At the Intersection of <span className='text-brand-orange-200'>AI</span> Data and <span className='text-brand-green-100'>Decentralization</span>
				</h2>

				<div className='grid xl:grid-cols-[1fr_2fr_1fr] gap-10 mt-16 md:grid-cols-2 grid-cols-1'>
					{/* Left Column */}
					<div className='flex flex-col justify-between gap-5'>
						<div className='flex flex-col gap-3 max-w-sm md:max-w-full'>
							<img src={useBaseUrl("img/growth.png")} alt='Growth icon' className='md:size-20 size-12' />
							<h4 className='text-brand-black-100 font-matter tracking-wide font-semibold ~text-base/xl'>
								Explosive Market Growth
							</h4>
							<p className='text-brand-black-200 font-matter font-regular ~text-sm/lg'>
								The AI data labeling market is projected to reach $27B, with AI companies spending billions annually on data—only a fraction of which is currently efficient.
							</p>
						</div>

						<div className='flex flex-col gap-3 max-w-sm md:max-w-full'>
							<img src={useBaseUrl("img/int-mobile.png")} alt='Mobile icon' className='md:size-20 size-12' />
							<h4 className='text-brand-black-100 font-matter tracking-wide font-semibold ~text-base/xl'>
								Mobile-First Advantage
							</h4>
							<p className='text-brand-black-200 font-matter font-regular ~text-sm/lg'>
								With 95% of emerging market users being mobile-only, traditional desktop-based workflows are no longer sufficient.
							</p>
						</div>
					</div>

					{/* Center Column */}
					<div className='flex items-center justify-center max-w-2xl md:max-w-md'>
						<img src={useBaseUrl("img/intersection.png")} alt='Intersection diagram' className='w-full' />
					</div>

					{/* Right Column */}
					<div className='flex flex-col gap-5 items-start lg:items-end justify-between'>
						<div className='flex flex-col gap-3 max-w-sm md:max-w-full'>
							<img src={useBaseUrl("img/payout.png")} alt='Payout icon' className='md:size-20 size-12' />
							<h4 className='text-brand-black-100 font-matter tracking-wide font-semibold ~text-base/xl'>
								Instant Payouts & Lower Costs
							</h4>
							<p className='text-brand-black-200 font-matter font-regular ~text-sm/lg'>
								Our model uses stable coin payments that settle in minutes, drastically reducing transaction fees and delays compared to traditional gig platforms.
							</p>
						</div>

						<div className='flex flex-col gap-3 max-w-sm md:max-w-full'>
							<img src={useBaseUrl("img/int-discuss.png")} alt='Discussion icon' className='md:size-20 size-12' />
							<h4 className='text-brand-black-100 font-matter tracking-wide font-semibold ~text-base/xl'>
								Strategic Distribution
							</h4>
							<p className='text-brand-black-200 font-matter font-regular ~text-sm/lg'>
								OEM partnerships provide pre-installation on millions of devices, ensuring a zero-CAC, rapidly scalable user base.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
