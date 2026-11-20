import React, {type ReactNode} from "react";
import clsx from "clsx";
import useAnchor from "../editorial/use-anchor";

// Layout for /factory: a numbered technical section under a 2px rule. Two layouts alternate down the page:
// "split" keeps the number and title in the left third with the body beside it; "stack" puts the header across the
// top and gives the body the full width, for diagrams that need it.

export type SpecTone = "surface" | "canvas" | "tint" | "ink";

const tones: Record<SpecTone, {section: string; rule: string; number: string; lede: string}> = {
	surface: {section: "bg-ed-surface text-ed-ink", rule: "border-ed-ink", number: "text-ed-accent-ink", lede: "text-ed-graphite"},
	canvas: {section: "bg-ed-canvas text-ed-ink", rule: "border-ed-ink", number: "text-ed-accent-ink", lede: "text-ed-graphite"},
	tint: {section: "bg-ed-accent-tint text-ed-ink", rule: "border-ed-ink", number: "text-ed-accent-ink", lede: "text-ed-graphite"},
	ink: {section: "bg-ed-ink text-ed-canvas", rule: "border-ed-canvas", number: "text-ed-accent", lede: "text-ed-canvas/70"},
};

export default function Spec({
	id,
	n,
	title,
	lede,
	tone = "surface",
	layout = "split",
	className,
	children,
}: {
	id: string;
	n?: string;
	title: ReactNode;
	lede?: ReactNode;
	tone?: SpecTone;
	layout?: "split" | "stack";
	className?: string;
	children: ReactNode;
}) {
	useAnchor(id);
	const t = tones[tone];
	const split = layout === "split";
	return (
		<section id={id} className={clsx(t.section, "scroll-mt-20", className)}>
			<div className='ed-container'>
				<div className={clsx("border-t-2 py-12 lg:py-20", t.rule, split ? "grid gap-8 lg:grid-cols-12 lg:gap-12" : "flex flex-col gap-8 lg:gap-10")}>
					<header className={clsx("flex flex-col gap-4", split ? "lg:col-span-4" : "lg:flex-row lg:items-end lg:justify-between lg:gap-12")}>
						<div className='flex flex-col gap-4'>
							{n ? <span className={clsx("ed-eyebrow", t.number)}>§ {n}</span> : null}
							<h2 className='m-0 text-[clamp(1.75rem,2.6vw,2.5rem)] font-normal leading-[1.1] tracking-[-0.03em] [text-wrap:balance]'>{title}</h2>
						</div>
						{lede ? <p className={clsx("m-0 max-w-[26rem] text-[1rem] leading-relaxed", t.lede, !split && "lg:max-w-[30rem] lg:pb-1")}>{lede}</p> : null}
					</header>
					<div className={clsx("min-w-0", split && "lg:col-span-8")}>{children}</div>
				</div>
			</div>
		</section>
	);
}

// A mono footnote under a block: sources, scope, or a one-line qualifier.
export function Note({children, tone = "light", className}: {children: ReactNode; tone?: "light" | "dark"; className?: string}) {
	return (
		<p className={clsx("ed-mono m-0 text-[0.75rem] leading-relaxed", tone === "dark" ? "text-ed-canvas/55" : "text-ed-smoke", className)}>
			{children}
		</p>
	);
}

// A small heading inside a section body.
export function Sub({children, tone = "light", className}: {children: ReactNode; tone?: "light" | "dark"; className?: string}) {
	return (
		<h3 className={clsx("ed-eyebrow m-0 mb-3", tone === "dark" ? "text-ed-canvas/60" : "text-ed-smoke", className)}>{children}</h3>
	);
}
