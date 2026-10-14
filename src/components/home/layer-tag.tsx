import React from "react";
import clsx from "clsx";

export type Layer = "hypervisor" | "browser" | "both";

const labels: Record<Exclude<Layer, "both">, string> = {
	hypervisor: "Hypervisor",
	browser: "W8 browser",
};

function Chip({layer}: {layer: Exclude<Layer, "both">}) {
	return (
		<span
			className={clsx(
				"ed-eyebrow inline-block whitespace-nowrap border px-1.5 py-0.5 text-[0.75rem] leading-none",
				layer === "hypervisor" ? "border-ed-ink text-ed-ink" : "border-ed-accent-ink text-ed-accent-ink"
			)}
		>
			{labels[layer]}
		</span>
	);
}

// Names the observation point that produces a claim.
export default function LayerTag({layer, className}: {layer: Layer; className?: string}) {
	return (
		<span className={clsx("inline-flex flex-wrap gap-1.5", className)}>
			{layer === "both" ? (
				<>
					<Chip layer='hypervisor' />
					<Chip layer='browser' />
				</>
			) : (
				<Chip layer={layer} />
			)}
		</span>
	);
}
