import React, {useEffect, useState} from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import {chapters, type ChapterId} from "./chapter";

// Sticks under the navbar from lg up and marks the chapter currently in view.
export default function Contents() {
	const [active, setActive] = useState<ChapterId | null>(null);

	useEffect(() => {
		let frame = 0;
		const update = () => {
			frame = 0;
			const threshold = window.innerHeight * 0.35;
			let current: ChapterId | null = null;
			for (const chapter of chapters) {
				const element = document.getElementById(chapter.id);
				if (element && element.getBoundingClientRect().top <= threshold) current = chapter.id;
			}
			setActive(current);
		};
		const onScroll = () => {
			if (!frame) frame = window.requestAnimationFrame(update);
		};
		update();
		window.addEventListener("scroll", onScroll, {passive: true});
		window.addEventListener("resize", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
			if (frame) window.cancelAnimationFrame(frame);
		};
	}, []);

	return (
		<nav aria-label='Contents' className='z-30 border-y border-ed-canvas/15 bg-ed-ink text-ed-canvas lg:sticky lg:top-[var(--ifm-navbar-height)]'>
			<div className='ed-container flex items-center gap-6 overflow-x-auto py-3 lg:gap-8'>
				<span className='ed-eyebrow hidden shrink-0 text-ed-canvas/50 md:inline'>Contents</span>
				{chapters.map((chapter) => {
					const isActive = active === chapter.id;
					return (
						<Link
							key={chapter.id}
							to={`#${chapter.id}`}
							className={clsx(
								"ed-mono flex shrink-0 items-baseline gap-2 whitespace-nowrap text-[0.8125rem] transition-colors hover:text-ed-canvas hover:no-underline",
								isActive ? "text-ed-canvas" : "text-ed-canvas/60"
							)}
						>
							<span className='text-ed-accent'>{chapter.n}</span>
							<span className={clsx(isActive && "underline decoration-ed-accent underline-offset-[6px]")}>{chapter.label}</span>
						</Link>
					);
				})}
			</div>
		</nav>
	);
}
