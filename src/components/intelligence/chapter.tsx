import React, {type ReactNode} from "react";
import clsx from "clsx";
import useAnchor from "../editorial/use-anchor";

// The seven numbered chapters of the brief. The contents strip and the chapters share this list.
export const chapters = [
	{n: "01", id: "compliance", label: "Compliance"},
	{n: "02", id: "how-we-work", label: "How we work"},
	{n: "03", id: "ownership", label: "Ownership"},
	{n: "04", id: "workflows", label: "Workflows"},
	{n: "05", id: "security", label: "Security"},
	{n: "06", id: "questions", label: "Questions"},
	{n: "07", id: "research", label: "Research"},
] as const;

export type ChapterId = (typeof chapters)[number]["id"];

export type ChapterTone = "surface" | "canvas" | "tint" | "ink";

// Background, spine, and text colours per tone. The page alternates tones so no two chapters look alike.
const tones: Record<ChapterTone, {section: string; spine: string; numeral: string; label: string; lede: string}> = {
	surface: {section: "border-ed-rule bg-ed-surface text-ed-ink", spine: "lg:border-ed-rule", numeral: "text-ed-accent-ink", label: "text-ed-smoke", lede: "text-ed-graphite"},
	canvas: {section: "border-ed-rule bg-ed-canvas text-ed-ink", spine: "lg:border-ed-rule", numeral: "text-ed-accent-ink", label: "text-ed-smoke", lede: "text-ed-graphite"},
	tint: {section: "border-ed-ink/20 bg-ed-accent-tint text-ed-ink", spine: "lg:border-ed-ink/20", numeral: "text-ed-accent-ink", label: "text-ed-smoke", lede: "text-ed-graphite"},
	ink: {section: "border-ed-canvas/15 bg-ed-ink text-ed-canvas", spine: "lg:border-ed-canvas/20", numeral: "text-ed-accent", label: "text-ed-canvas/60", lede: "text-ed-canvas/75"},
};

// One chapter: a numeral gutter with a vertical spine on the left, the title and lede side by side on the right.
export default function Chapter({
	id,
	title,
	lede,
	kicker,
	tone = "surface",
	titleClassName,
	className,
	children,
}: {
	id: ChapterId;
	title: ReactNode;
	lede?: ReactNode;
	kicker?: ReactNode;
	tone?: ChapterTone;
	titleClassName?: string;
	className?: string;
	children: ReactNode;
}) {
	useAnchor(id);
	const chapter = chapters.find((item) => item.id === id)!;
	const t = tones[tone];
	return (
		<section id={id} className={clsx("scroll-mt-20 border-t lg:scroll-mt-28", t.section, className)}>
			<div className='ed-container lg:grid lg:grid-cols-[6.5rem_minmax(0,1fr)]'>
				<div className={clsx("pt-10 lg:border-r lg:py-16", t.spine)}>
					<div className='flex items-baseline gap-3 lg:sticky lg:top-32 lg:flex-col lg:items-start lg:gap-2'>
						<span className={clsx("ed-mono text-[1.5rem] leading-none lg:text-[2rem]", t.numeral)}>{chapter.n}</span>
						<span className={clsx("ed-eyebrow", t.label)}>{chapter.label}</span>
					</div>
				</div>
				<div className='pb-12 pt-6 lg:py-16 lg:pl-12'>
					<header className='grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-10'>
						<h2 className={clsx("m-0 lg:col-span-7", titleClassName ?? "ed-h2")}>{title}</h2>
						{lede || kicker ? (
							<div className='flex flex-col gap-4 lg:col-span-5 lg:pt-2'>
								{kicker ? <span className={clsx("ed-eyebrow", t.label)}>{kicker}</span> : null}
								{lede ? <p className={clsx("m-0 text-[1.0625rem] leading-relaxed", t.lede)}>{lede}</p> : null}
							</div>
						) : null}
					</header>
					<div className='mt-10 lg:mt-12'>{children}</div>
				</div>
			</div>
		</section>
	);
}
