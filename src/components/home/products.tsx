import React from "react";
import Section from "../editorial/section";
import Eyebrow from "../editorial/eyebrow";
import CtaLink from "../editorial/cta-link";
import useAnchor from "../editorial/use-anchor";
import LayerTag, {type Layer} from "./layer-tag";
import {links, study} from "@site/src/data/research";

type Advantage = {layer: Layer; copy: string};

type Product = {
	id: string;
	audience: string;
	title: string;
	copy: string;
	advantages: Advantage[];
	delivered: string;
	tagline: string;
	note?: string;
	cta: string;
};

// Every claim names the observation point that makes it possible.
const products: Product[] = [
	{
		id: "model-labs",
		audience: "For frontier model labs",
		title: "Datasets, evals, and environments from traces nobody else captures.",
		copy: "We record work traces from experts and agent traces from models inside our hypervisor and the W8 browser. Our team turns them into datasets, evals, and resettable environments that beat state-of-the-art models. Rewards read page state and the runtime record directly, so they score what the agent did, including the attempts the sandbox stopped.",
		advantages: [
			{
				layer: "browser",
				copy: "Exact values, control states, and off-screen content at every step, in a compact DOM-diff record.",
			},
			{
				layer: "browser",
				copy: `${study.reduction} fewer evidence gaps than screenshot recordings, across ${study.tasks} published tasks.`,
			},
			{
				layer: "hypervisor",
				copy: "Reward-hacking evidence. Denied egress, policy decisions, and workspace file changes are recorded below the agent, whether or not the agent logs them.",
			},
			{
				layer: "hypervisor",
				copy: "Model calls captured at the gateway, in one view with runtime and browser events.",
			},
			{
				layer: "both",
				copy: "Deterministic checks wherever the outcome is observable. Model judges cover visual and subjective criteria.",
			},
		],
		delivered: "Trace datasets, evals, and resettable environments with fixtures, task specifications, verifiers, and reward functions.",
		tagline: "Our data passes the quality gates of the world's leading frontier model labs.",
		cta: "Discuss data and environments",
	},
	{
		id: "enterprise",
		audience: "For enterprise AI teams",
		title: "Small models trained on what your agents actually do.",
		copy: "Your harness runs unchanged inside our hypervisor and produces agent traces from your real tasks. W8 verifies the browser outcomes. The team that builds data for frontier labs trains small models on the traces that verifiably succeeded.",
		advantages: [
			{
				layer: "hypervisor",
				copy: "No harness rewrite and no tracing SDK. Package it, configure the sandbox and gateway, and run it.",
			},
			{
				layer: "hypervisor",
				copy: "Training data from below the harness: processes, egress, policy decisions, and workspace changes alongside every model call.",
			},
			{
				layer: "browser",
				copy: "Browser tasks verified against DOM state, so the training set holds the runs that completed.",
			},
			{
				layer: "both",
				copy: "Rewards built into the capture layer: deterministic checks on browser and runtime state.",
			},
			{
				layer: "hypervisor",
				copy: "Routing between your small model and frontier models by verified task success, at the gateway where requests originate.",
			},
		],
		delivered: "Fine-tuned small models, evaluations built from your real tasks, and routing at your gateway.",
		tagline: "Your agent doesn't need to change. Your visibility does.",
		note: "“Almost nothing” means core agent logic stays as written. Setup covers image packaging, runtime configuration, credentials, and gateway routing.",
		cta: "Discuss a custom model",
	},
];

const legend: {layer: Layer; copy: string}[] = [
	{layer: "hypervisor", copy: "OpenShell-based execution layer. Observes the agent from below the harness."},
	{layer: "browser", copy: "Our own Chromium browser. Records the page state screenshots miss."},
];

export default function Products() {
	useAnchor("model-labs");
	useAnchor("enterprise");
	return (
		<Section id='products'>
			<div className='flex flex-col gap-6'>
				<Eyebrow>What we build / Two products, two observation points</Eyebrow>
				<h2 className='ed-h2 m-0 max-w-[64rem]'>Training data for frontier labs. Custom small models for enterprises.</h2>
				<ul className='m-0 flex list-none flex-col gap-3 p-0 md:flex-row md:gap-10'>
					{legend.map((item) => (
						<li key={item.layer} className='flex flex-wrap items-baseline gap-x-3 gap-y-1.5 text-[0.9375rem] text-ed-graphite'>
							<LayerTag layer={item.layer} />
							<span>{item.copy}</span>
						</li>
					))}
				</ul>
			</div>
			<div className='mt-14 grid grid-cols-1 gap-0 border border-ed-ink bg-ed-surface lg:grid-cols-2'>
				{products.map((product, index) => (
					<article
						key={product.id}
						id={product.id}
						className={
							index === 0
								? "flex scroll-mt-20 flex-col gap-5 border-b border-ed-ink p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10"
								: "flex scroll-mt-20 flex-col gap-5 p-6 sm:p-8 lg:p-10"
						}
					>
						<Eyebrow className='text-ed-accent-ink'>{product.audience}</Eyebrow>
						<h3 className='ed-h3 m-0'>{product.title}</h3>
						<p className='ed-body m-0 text-ed-graphite'>{product.copy}</p>
						<div className='flex flex-col gap-3'>
							<p className='ed-eyebrow m-0 text-ed-ink'>What the capture layer adds</p>
							<ul className='m-0 flex list-none flex-col border-t border-ed-rule p-0'>
								{product.advantages.map((item) => (
									<li key={item.copy} className='flex flex-col gap-2 border-b border-ed-rule py-3.5'>
										<LayerTag layer={item.layer} />
										<span className='text-[0.9375rem] leading-relaxed text-ed-ink'>{item.copy}</span>
									</li>
								))}
							</ul>
						</div>
						<p className='m-0 text-[0.9375rem] leading-relaxed text-ed-graphite'>
							<span className='font-semibold text-ed-ink'>Delivered as:</span> {product.delivered}
						</p>
						<p className='m-0 font-semibold'>{product.tagline}</p>
						{product.note ? <p className='ed-mono m-0 text-[0.75rem] leading-relaxed text-ed-smoke'>{product.note}</p> : null}
						<CtaLink href={links.booking} className='mt-auto w-fit'>
							{product.cta}
						</CtaLink>
					</article>
				))}
			</div>
			<p className='ed-body m-0 mt-8 text-ed-graphite'>
				<a href='#technology' className='ed-link'>
					How the hypervisor and W8 work →
				</a>
			</p>
		</Section>
	);
}
