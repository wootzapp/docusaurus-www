import React from "react";
import CodeBlock from "@theme/CodeBlock";

const capabilities = [
	{
		head: "Custom extension framework",
		para: "Built on an enhanced Manifest V3, our API enables developers to create mobile-first extensions and deploy complex workflows in minutes—not weeks.",
	},
	{
		head: "Robust API & SDK",
		para: "The toolkit integrates with native orchestration, automating validation, reward distribution, and secure data collection from day one.",
	},
];

export function PartnerShip() {
	return (
		<section className='bg-brand-neutral-100 py-24 text-brand-base'>
			<div className='container-custom flex flex-col gap-12'>
				<div className='mx-auto max-w-3xl text-center flex flex-col gap-4'>
					<span className='mx-auto inline-flex items-center gap-2 rounded-full border border-brand-neutral-300 px-4 py-1 text-xs uppercase tracking-[0.2em] text-brand-neutral-500'>
						Extensibility
					</span>
					<h2 className='font-matter text-3xl font-semibold leading-tight sm:text-4xl'>
						A platform built on extensibility and global partnerships
					</h2>
					<p className='text-sm text-brand-neutral-500 sm:text-base'>
						At the heart of WootzApp is a mobile-first extension system that lets AI companies design custom, iterative workflows while developers ship secure, governed experiences.
					</p>
				</div>

				<div className='grid gap-6 md:grid-cols-2'>
					{capabilities.map((item) => (
						<div key={item.head} className='rounded-2xl border border-brand-neutral-300 bg-white/90 p-6 text-left shadow-sm shadow-brand-base/5'>
							<h3 className='font-matter text-xl font-semibold text-brand-base'>
								{item.head}
							</h3>
							<p className='mt-2 text-sm text-brand-neutral-500 sm:text-base'>
								{item.para}
							</p>
						</div>
					))}
				</div>

				<div className='grid gap-6 lg:grid-cols-[1.1fr,1fr] lg:items-start'>
					<div className='rounded-2xl border border-brand-neutral-300 bg-white/90 p-6 shadow-sm shadow-brand-base/5'>
						<h3 className='font-matter text-xl font-semibold text-brand-base'>
							Technical superiority—code comparison
						</h3>
						<p className='mt-2 text-sm text-brand-neutral-500 sm:text-base'>
							Contrast traditional platforms that rely on manual setup with the declarative approach embedded in WootzApp extensions.
						</p>
						<ul className='mt-4 flex flex-col gap-2 text-sm text-brand-neutral-500'>
							<li className='flex items-start gap-2'>
								<span className='mt-1 h-1.5 w-1.5 rounded-full bg-brand-neutral-400' />
								<span>Declarative configuration replaces bespoke scripting.</span>
							</li>
							<li className='flex items-start gap-2'>
								<span className='mt-1 h-1.5 w-1.5 rounded-full bg-brand-neutral-400' />
								<span>Extensions inherit security policies and auditing automatically.</span>
							</li>
							<li className='flex items-start gap-2'>
								<span className='mt-1 h-1.5 w-1.5 rounded-full bg-brand-neutral-400' />
								<span>Reward logic, consensus, and monitoring APIs are first-class.</span>
							</li>
						</ul>
					</div>
					<div className='rounded-2xl border border-brand-border bg-brand-overlay text-brand-text-primary'>
						<CodeBlock language='typescript' className='terminal-code max-h-[460px] overflow-auto rounded-2xl text-sm'>
{`// Traditional Platforms (e.g., Scale AI, LabelBox)
class TraditionalPlatform {
  async deployTask(config) {
    await this.setupProject(); // 1-2 weeks
    await this.trainWorkers(); // 1 week
    await this.setupValidation(); // Manual
  }
}

// WootzApp's Instant Extension System
interface WootzExtension {
  components: {
    selector?: Component;
    validator?: Component;
  };
  validation: {
    rules: ValidationRule[];
    consensus: number;
  };
  rewards: {
    baseAmount: number;
    bonusConditions: Condition[];
  };
}

async function deployWorkflow(extension: WootzExtension) {
  const deployment = await wootzapp.deploy(extension);
  return deployment.monitor();
}`}
						</CodeBlock>
					</div>
					</div>
				</div>
			</section>
	);
}
