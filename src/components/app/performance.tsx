export function Performance() {
	return (
		<section className='bg-brand-neutral-100 py-24 text-brand-base' id='why-us'>
			<div className='container-custom flex flex-col gap-12'>
				<div className='max-w-3xl flex flex-col gap-4 text-center md:text-left'>
					<span className='mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-brand-neutral-300 px-4 py-1 text-xs uppercase tracking-[0.2em] text-brand-neutral-500 md:mx-0'>
						Why enterprises use us
					</span>
					<h2 className='font-matter text-3xl font-semibold leading-tight sm:text-4xl'>
						Training and evaluation stacks learn "design sense" without bespoke scripting
					</h2>
				</div>

				<div className='grid gap-6 md:grid-cols-2 xl:grid-cols-4'>
					{[
						{
							head: "Design-first training",
							copy: "Models internalize layout systems, grid rules, tokens, and a11y—mirroring how design leads review real work.",
						},
						{
							head: "Human scale, managed",
							copy: "Our mobile browser activates qualified contributors globally. We handle vetting, consensus, and versioned policy.",
						},
						{
							head: "Verifiable rewards",
							copy: "Executable tests and scorers prevent reward hacking and satisfy governance teams.",
						},
						{
							head: "Plug-and-play delivery",
							copy: "Consume environments as Dockerized RL APIs or Verifiers-compatible packages—no integration lift.",
						},
					].map((item) => (
						<article key={item.head} className='flex h-full flex-col gap-3 rounded-2xl border border-brand-neutral-300 bg-white p-6 shadow-sm'>
							<h3 className='font-matter text-lg font-semibold text-brand-base'>{item.head}</h3>
							<p className='text-sm text-brand-base/80 sm:text-base'>{item.copy}</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
