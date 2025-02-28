"use client";
import {performanceData} from "@site/src/data";
import {useEffect, useState} from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";

export function Performance() {
	const [windowWidth, setWindowWidth] = useState(0); // Initially 0 to avoid SSR issues

	useEffect(() => {
		if (typeof window !== "undefined") {
			// Ensure it's client-side
			setWindowWidth(window.innerWidth);

			const handleResize = e => setWindowWidth(e.target.innerWidth);
			window.addEventListener("resize", handleResize);

			return () => window.removeEventListener("resize", handleResize);
		}
	}, []);

	return (
		<BrowserOnly fallback={<div>Loading...</div>}>
			{() => (
				<div className='min-h-screen bg-brand-black-100 pt-24 pb-28'>
					<div className='container flex flex-col justify-center gap-16'>
						<h2 className='text-brand-white-100 font-matter font-bold text-center max-w-3xl mx-auto ~text-2xl/4xl max-lg:max-w-md'>
							Built for High <span className='text-brand-orange-200'>Performance</span>, <span className='text-brand-orange-300'>Security</span>, and{" "}
							<span className='text-brand-green-100'>Scalability</span>
						</h2>

						<div className='flex gap-20 max-md:flex-col max-md:gap-10 max-md:items-center'>
							<div className='grid grid-cols-2 gap-x-5 gap-y-10 max-w-2xl mx-auto max-sm:grid-cols-1'>
								{performanceData.map((data, index) => {
									const res = index === 2 && windowWidth > 640 ? "col-span-2" : "";
									return (
										<div key={index} className={`flex flex-col gap-5 max-sm:gap-3 ${res}`}>
											<img src={data.img} alt='#' className=' ~size-16/24' />
											<h4 className='text-brand-white-100 font-matter font-bold max-md:text-xl text-2xl max-w-xs'>{data.head}</h4>
											<p className='~text-sm/lg text-brand-white-400 font-matter'>{data.para}</p>
										</div>
									);
								})}
							</div>

							<div className='max-w-xl max-h-full'>
								<img src='img/performance.png' alt='#' className='w-full' />
							</div>
						</div>
					</div>
				</div>
			)}
		</BrowserOnly>
	);
}
