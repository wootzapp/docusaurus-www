import React from "react";
import clsx from "clsx";

export type Layer = "hypervisor" | "browser" | "both" | "team";

type Single = Exclude<Layer, "both">;
type Tone = "light" | "dark";

const labels: Record<Single, string> = {
	hypervisor: "Hypervisor",
	browser: "W8 browser",
	team: "WootzApp team",
};

const styles: Record<Tone, Record<Single, string>> = {
	light: {
		hypervisor: "border-ed-ink text-ed-ink",
		browser: "border-ed-accent-ink text-ed-accent-ink",
		team: "border-ed-ink bg-ed-ink text-ed-canvas",
	},
	dark: {
		hypervisor: "border-ed-canvas/70 text-ed-canvas",
		browser: "border-ed-accent text-ed-accent",
		team: "border-ed-canvas bg-ed-canvas text-ed-ink",
	},
};

function Chip({layer, tone}: {layer: Single; tone: Tone}) {
	return (
		<span
			className={clsx(
				"ed-eyebrow inline-block whitespace-nowrap rounded-full border px-2.5 py-1 text-[0.75rem] leading-none",
				styles[tone][layer]
			)}
		>
			{labels[layer]}
		</span>
	);
}

// Names what produces a claim: one of the two observation points, or the team.
export default function LayerTag({layer, tone = "light", className}: {layer: Layer; tone?: Tone; className?: string}) {
	return (
		<span className={clsx("inline-flex flex-wrap gap-1.5", className)}>
			{layer === "both" ? (
				<>
					<Chip layer='hypervisor' tone={tone} />
					<Chip layer='browser' tone={tone} />
				</>
			) : (
				<Chip layer={layer} tone={tone} />
			)}
		</span>
	);
}
