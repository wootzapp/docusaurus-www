import React, {type ReactNode} from "react";
import {LuDatabase, LuCpu, LuScanSearch, LuTerminal, LuCircleCheck, LuPackageCheck, LuRoute} from "react-icons/lu";
import Section from "../editorial/section";
import Eyebrow from "../editorial/eyebrow";
import CtaLink from "../editorial/cta-link";
import useAnchor from "../editorial/use-anchor";
import LayerTag, {type Layer} from "./layer-tag";
import {links} from "@site/src/data/research";

type Product = {
	id: string;
	icon: ReactNode;
	audience: string;
	title: string;
	line: string;
	points: {icon: ReactNode; label: string; layer: Layer}[];
	cta: string;
};

// Three points per product, each tied to the layer that makes it possible.
const products: Product[] = [
	{
		id: "model-labs",
		icon: <LuDatabase />,
		audience: "For frontier model labs",
		title: "Datasets, evals, and RL environments.",
		line: "Built from traces nobody else captures. Accepted by frontier-lab quality gates.",
		points: [
			{icon: <LuScanSearch />, label: "Full page state, every step", layer: "browser"},
			{icon: <LuTerminal />, label: "Runtime truth below the agent", layer: "hypervisor"},
			{icon: <LuCircleCheck />, label: "Deterministic rewards", layer: "both"},
		],
		cta: "Discuss data and environments",
	},
	{
		id: "enterprise",
		icon: <LuCpu />,
		audience: "For enterprise AI teams",
		title: "Small models trained on your agents' real work.",
		line: "Bring your production harness. Change almost nothing.",
		points: [
			{icon: <LuPackageCheck />, label: "No harness rewrite", layer: "hypervisor"},
			{icon: <LuCircleCheck />, label: "Only verified runs in training", layer: "browser"},
			{icon: <LuRoute />, label: "Frontier fallback at your gateway", layer: "hypervisor"},
		],
		cta: "Discuss a custom model",
	},
];

export default function Products() {
	useAnchor("model-labs");
	useAnchor("enterprise");
	return (
		<Section id='products' tone='surface'>
			<div className='flex flex-col gap-5'>
				<Eyebrow>What we build</Eyebrow>
				<h2 className='ed-h2 m-0 max-w-[50rem]'>Two products. One capture layer.</h2>
			</div>
			<div className='mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6'>
				{products.map((product) => (
					<article key={product.id} id={product.id} className='ed-card flex scroll-mt-24 flex-col gap-6 bg-ed-canvas p-6 sm:p-8 lg:p-10'>
						<div className='flex items-center gap-3'>
							<span className='ed-icon ed-icon--accent'>{product.icon}</span>
							<Eyebrow className='text-ed-accent-ink'>{product.audience}</Eyebrow>
						</div>
						<div className='flex flex-col gap-3'>
							<h3 className='ed-h3 m-0'>{product.title}</h3>
							<p className='ed-body m-0 text-ed-graphite'>{product.line}</p>
						</div>
						<ul className='m-0 flex list-none flex-col gap-2.5 p-0'>
							{product.points.map((point) => (
								<li key={point.label} className='flex items-center gap-3 rounded-xl border border-ed-rule bg-ed-surface px-4 py-3'>
									<span className='text-lg text-ed-ink' aria-hidden='true'>
										{point.icon}
									</span>
									<span className='flex-1 text-[0.9375rem] font-medium'>{point.label}</span>
									<LayerTag layer={point.layer} className='hidden sm:inline-flex' />
								</li>
							))}
						</ul>
						<CtaLink href={links.booking} className='mt-auto w-fit'>
							{product.cta}
						</CtaLink>
					</article>
				))}
			</div>
		</Section>
	);
}
