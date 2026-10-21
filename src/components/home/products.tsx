import React, {type ReactNode} from "react";
import clsx from "clsx";
import {LuDatabase, LuCpu, LuScanSearch, LuTerminal, LuCircleCheck, LuPackageCheck, LuRoute} from "react-icons/lu";
import Eyebrow from "../editorial/eyebrow";
import CtaLink from "../editorial/cta-link";
import useAnchor from "../editorial/use-anchor";
import LayerTag, {type Layer} from "./layer-tag";
import {links} from "@site/src/data/research";

type Product = {
	id: string;
	dark: boolean;
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
		dark: true,
		icon: <LuDatabase />,
		audience: "For frontier model labs",
		title: "Datasets, evals, and RL environments.",
		line: "Recorded below the harness and inside the browser, past the point where a model proxy stops. Accepted by frontier-lab quality gates.",
		points: [
			{icon: <LuScanSearch />, label: "Full page state, every step", layer: "browser"},
			{icon: <LuTerminal />, label: "Processes, egress, and file changes", layer: "hypervisor"},
			{icon: <LuCircleCheck />, label: "Rewards read runtime and page state", layer: "both"},
		],
		cta: "Discuss data and environments",
	},
	{
		id: "enterprise",
		dark: false,
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

// Full-bleed split panels: one dark, one tinted.
export default function Products() {
	useAnchor("products");
	useAnchor("model-labs");
	useAnchor("enterprise");
	return (
		<section id='products' className='grid grid-cols-1 lg:grid-cols-2'>
			{products.map((product, index) => (
				<article
					key={product.id}
					id={product.id}
					className={clsx(
						"flex scroll-mt-16 px-4 py-16 sm:px-6 sm:py-20 lg:py-28",
						product.dark ? "bg-ed-ink text-ed-canvas" : "bg-ed-accent-tint text-ed-ink",
						index === 0 ? "lg:justify-end lg:pl-8 lg:pr-16" : "lg:pl-16 lg:pr-8"
					)}
				>
					<div className='flex w-full max-w-[34rem] flex-col gap-7'>
						<div className='flex items-center gap-3'>
							<span className={clsx("ed-icon", product.dark ? "bg-white/10 text-ed-accent" : "bg-white text-ed-accent-ink")}>{product.icon}</span>
							<Eyebrow className={product.dark ? "text-ed-accent" : "text-ed-accent-ink"}>{product.audience}</Eyebrow>
						</div>
						<div className='flex flex-col gap-4'>
							<h2 className='ed-h2 m-0'>{product.title}</h2>
							<p className={clsx("ed-lede m-0", product.dark ? "text-ed-canvas/75" : "text-ed-graphite")}>{product.line}</p>
						</div>
						<ul className={clsx("m-0 flex list-none flex-col border-t p-0", product.dark ? "border-white/15" : "border-ed-ink/15")}>
							{product.points.map((point) => (
								<li
									key={point.label}
									className={clsx("flex items-center gap-3 border-b py-4", product.dark ? "border-white/15" : "border-ed-ink/15")}
								>
									<span className={clsx("text-lg", product.dark ? "text-ed-accent" : "text-ed-accent-ink")} aria-hidden='true'>
										{point.icon}
									</span>
									<span className='flex-1 text-[1rem] font-medium'>{point.label}</span>
									<LayerTag layer={point.layer} tone={product.dark ? "dark" : "light"} className='hidden sm:inline-flex' />
								</li>
							))}
						</ul>
						<CtaLink href={links.booking} variant={product.dark ? "inverse" : "primary"} className='w-fit'>
							{product.cta}
						</CtaLink>
					</div>
				</article>
			))}
		</section>
	);
}
