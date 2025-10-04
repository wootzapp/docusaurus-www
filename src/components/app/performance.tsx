import {performanceData} from "@site/src/data";

export function Performance() {
	return (
		<section className='bg-brand-overlay py-24 text-brand-text-primary'>
			<div className='container-custom flex flex-col gap-14'>
				<div className='mx-auto max-w-3xl text-center flex flex-col gap-4'>
					<span className='mx-auto inline-flex items-center gap-2 rounded-full border border-brand-accent-100/40 bg-brand-surface/70 px-4 py-1 text-xs uppercase tracking-[0.2em] text-brand-text-secondary'>
						Platform architecture
					</span>
					<h2 className='font-matter text-3xl font-semibold leading-tight sm:text-4xl'>
						Built for performance, security, and uncompromising scale
					</h2>
					<p className='text-sm text-brand-text-secondary sm:text-base'>
						The WootzApp browser is engineered as an enterprise control plane: isolate every session, orchestrate complex data workflows, and instrument the edge without sacrificing user velocity.
					</p>
				</div>

				<div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
					{performanceData.map((item) => (
						<article key={item.head} className='flex h-full flex-col gap-4 rounded-2xl border border-brand-border bg-brand-surface p-6'>
							<span className='w-fit rounded-md bg-brand-accent-100/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-text-muted'>
								{item.tag}
							</span>
							<h3 className='font-matter text-xl font-semibold text-brand-text-primary'>
								{item.head}
							</h3>
							<p className='text-sm text-brand-text-muted sm:text-base'>
								{item.para}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
