import React from "react";
import clsx from "clsx";

export type Layer = "hypervisor" | "browser" | "both" | "team";

type Single = Exclude<Layer, "both">;

const labels: Record<Single, string> = {
	hypervisor: "Hypervisor",
	browser: "W8 browser",
	team: "WootzApp team",
};

const styles: Record<Single, string> = {
	hypervisor: "border-ed-ink text-ed-ink",
	browser: "border-ed-accent-ink text-ed-accent-ink",
	team: "border-ed-ink bg-ed-ink text-ed-canvas",
};

function Chip({layer}: {layer: Single}) {
	return (
		<span className={clsx("ed-eyebrow inline-block whitespace-nowrap border px-1.5 py-0.5 text-[0.75rem] leading-none", styles[layer])}>
			{labels[layer]}
		</span>
	);
}

// Names what produces a claim: one of the two observation points, or the team.
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
