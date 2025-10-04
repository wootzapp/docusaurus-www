import React from "react";

export function Browsing() {
	return (
		<section className='bg-white text-brand-base' id='what-we-do'>
			<div className='container-custom flex flex-col gap-10 py-24'>
				<div className='max-w-4xl flex flex-col gap-4'>
					<span className='inline-flex w-fit items-center gap-2 rounded-full border border-brand-neutral-300 px-4 py-1 text-xs uppercase tracking-[0.2em] text-brand-neutral-500'>
						What we do
					</span>
					<h2 className='font-matter text-3xl font-semibold leading-tight sm:text-4xl'>
						We convert expert human judgment into reinforcement-learning environments for frontend codegen
					</h2>
					<p className='text-base text-brand-base/80 sm:text-lg'>
						Design students and professional developers use our mobile browser to annotate real interfaces, capture structured specs, and score generated code. We synthesize those judgments into environments that any team can train or evaluate with.
					</p>
				</div>

				<div className='grid gap-8 md:grid-cols-2'>
					<div className='flex flex-col gap-4 rounded-2xl border border-brand-neutral-300 bg-brand-neutral-100/80 p-8 shadow-sm'>
						<h3 className='font-matter text-xl font-semibold text-brand-base'>Fully packaged RL environments</h3>
						<p className='text-base text-brand-base/80'>
							Each environment ships with verifiable reward logic, structured specs, and stable interfaces so your teams can plug it directly into training or evaluation pipelines.
						</p>
						<ul className='flex flex-col gap-2 text-sm text-brand-base'>
							<li className='flex items-start gap-2'><span className='mt-1 h-1.5 w-1.5 rounded-full bg-brand-border/60' />Reward suites grounded in human rubric design</li>
							<li className='flex items-start gap-2'><span className='mt-1 h-1.5 w-1.5 rounded-full bg-brand-border/60' />Structured specs for layout, tokens, a11y, and policy</li>
							<li className='flex items-start gap-2'><span className='mt-1 h-1.5 w-1.5 rounded-full bg-brand-border/60' />Standard `/reset` + `/step` or Verifiers protocol bindings</li>
						</ul>
					</div>

					<div className='flex flex-col gap-4 rounded-2xl border border-brand-neutral-300 bg-brand-neutral-100/80 p-8 shadow-sm'>
						<h3 className='font-matter text-xl font-semibold text-brand-base'>Specialized for frontend design sense</h3>
						<p className='text-base text-brand-base/80'>
							We focus exclusively on layout, tokens, responsiveness, accessibility, and component reuse—everything a designer critiques in code.
						</p>
						<ul className='flex flex-col gap-2 text-sm text-brand-base'>
							<li className='flex items-start gap-2'><span className='mt-1 h-1.5 w-1.5 rounded-full bg-brand-border/60' />Grid and spacing discipline with tolerance windows</li>
							<li className='flex items-start gap-2'><span className='mt-1 h-1.5 w-1.5 rounded-full bg-brand-border/60' />Token usage, contrast, and typographic rhythm</li>
							<li className='flex items-start gap-2'><span className='mt-1 h-1.5 w-1.5 rounded-full bg-brand-border/60' />Accessibility expectations baked into DSL checks</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
