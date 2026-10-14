import React, {type ReactNode} from "react";
import clsx from "clsx";
import useAnchor from "./use-anchor";

type Tone = "canvas" | "surface" | "ink";

const toneClasses: Record<Tone, string> = {
	canvas: "bg-ed-canvas text-ed-ink",
	surface: "bg-ed-surface text-ed-ink",
	ink: "bg-ed-ink text-ed-canvas",
};

export default function Section({
	id,
	tone = "canvas",
	rule = true,
	className,
	innerClassName,
	children,
}: {
	id?: string;
	tone?: Tone;
	rule?: boolean;
	className?: string;
	innerClassName?: string;
	children: ReactNode;
}) {
	useAnchor(id);
	return (
		<section
			id={id}
			className={clsx(toneClasses[tone], rule && tone !== "ink" && "border-t border-ed-rule", "scroll-mt-20", className)}
		>
			<div className={clsx("ed-container py-16 sm:py-20 lg:py-28", innerClassName)}>{children}</div>
		</section>
	);
}
