import {browserData} from "@site/src/data";
import React from "react";

export function Browsing() {
	return (
		<section className='bg-brand-neutral-100 text-brand-base'>
			<div className='container-custom flex flex-col gap-12 py-24'>
				<div className='mx-auto max-w-3xl text-center flex flex-col gap-4'>
					<span className='mx-auto inline-flex items-center gap-2 rounded-full border border-brand-neutral-300 px-4 py-1 text-xs uppercase tracking-[0.2em] text-brand-neutral-500'>
						Enterprise outcomes
					</span>
					<h2 className='font-matter text-3xl font-semibold leading-tight text-brand-base sm:text-4xl'>
						Operational certainty for teams that live in the browser
					</h2>
					<p className='text-sm text-brand-base sm:text-base'>
						Keep employees, contractors, and AI contributors productive in an environment that respects their habits while meeting your governance, security, and finance requirements.
					</p>
				</div>

				<div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
					{browserData.map((data) => (
						<div key={data.head} className='relative flex h-full flex-col gap-4 rounded-2xl border border-brand-neutral-300 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-base/10'>
							<span className='inline-flex w-fit items-center rounded-md bg-brand-accent-100/15 px-3 py-1 text-xs font-semibold text-brand-neutral-500'>
								{data.label}
							</span>
							<h3 className='font-matter text-xl font-semibold text-brand-base'>
								{data.head}
							</h3>
							<p className='text-sm text-brand-base sm:text-base'>
								{data.para}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
