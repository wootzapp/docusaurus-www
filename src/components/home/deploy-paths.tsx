import React from "react";
import Section from "../editorial/section";
import Eyebrow from "../editorial/eyebrow";
import CtaLink from "../editorial/cta-link";
import useAnchor from "../editorial/use-anchor";
import {links} from "@site/src/data/research";

export default function DeployPaths() {
	useAnchor("enterprise");
	useAnchor("model-labs");
	return (
		<Section tone='surface'>
			<div className='flex flex-col gap-6'>
				<Eyebrow>One engine / Two ways to deploy it</Eyebrow>
				<h2 className='ed-h2 m-0'>Run it privately. Or train from the world.</h2>
			</div>
			<div className='mt-14 grid grid-cols-1 gap-0 border border-ed-ink lg:grid-cols-2'>
				<article
					id='enterprise'
					className='flex scroll-mt-20 flex-col gap-5 border-b border-ed-ink p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10'
				>
					<Eyebrow className='text-ed-accent-ink'>For enterprise AI teams</Eyebrow>
					<h3 className='ed-h3 m-0'>Bring your production harness. Change almost nothing.</h3>
					<p className='ed-body m-0 text-ed-graphite'>
						Train and evaluate with data from your own applications, agents, and employees&apos; authorized workflows—under your security
						controls. Keep your core agent logic and your preferred post-training stack. Improve the evidence your models learn from.
					</p>
					<p className='m-0 font-semibold'>Private capture. Richer evaluations. Better-defined rewards.</p>
					<p className='ed-mono m-0 text-[0.75rem] leading-relaxed text-ed-smoke'>
						“Almost nothing” means core agent logic stays as written. Setup covers image packaging, runtime configuration, credentials, and gateway routing.
					</p>
					<CtaLink href={links.booking} className='mt-auto w-fit'>
						Bring your harness
					</CtaLink>
				</article>
				<article id='model-labs' className='flex scroll-mt-20 flex-col gap-5 p-6 sm:p-8 lg:p-10'>
					<Eyebrow className='text-ed-accent-ink'>For frontier model labs</Eyebrow>
					<h3 className='ed-h3 m-0'>Get the work behind the transcript.</h3>
					<p className='ed-body m-0 text-ed-graphite'>
						We use the same instrumented execution environment to collect{" "}
						<strong className='text-ed-ink'>authorized real-user demonstrations and agent trajectories</strong> for licensing, and to
						engineer domain-specific RL tasks with explicit evaluation criteria.
					</p>
					<p className='ed-body m-0 text-ed-graphite'>
						The product is ground-truth-rich computer-use data and environments. The moat is the infrastructure that captures the execution
						and browser evidence behind them.
					</p>
					<p className='m-0 font-semibold'>Expert work. Privileged capture. Auditable learning signals.</p>
					<CtaLink href={links.booking} className='mt-auto w-fit'>
						Discuss training data and RL environments
					</CtaLink>
				</article>
			</div>
		</Section>
	);
}
