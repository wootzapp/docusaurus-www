import React, {type ReactNode} from "react";
import Link from "@docusaurus/Link";
import {LuArrowRight} from "react-icons/lu";
import {useBlogPost} from "@docusaurus/plugin-content-blog/client";
import type {Props} from "@theme/BlogPostItem";
import BlogPostItemContainer from "@theme/BlogPostItem/Container";
import BlogPostItemContent from "@theme/BlogPostItem/Content";

// 2021-08-26T00:00:00.000Z -> 2021.08.26
export function stamp(date: string): string {
	return date.slice(0, 10).replace(/-/g, ".");
}

export function readingLabel(minutes: number | undefined): string | null {
	if (typeof minutes !== "number") return null;
	return `${Math.max(1, Math.ceil(minutes))} min read`;
}

export function TagPills({className}: {className?: string}): ReactNode {
	const {metadata} = useBlogPost();
	if (!metadata.tags.length) return null;
	return (
		<ul className={`m-0 flex list-none flex-wrap gap-1.5 p-0 ${className ?? ""}`}>
			{metadata.tags.map((tag) => (
				<li key={tag.permalink}>
					<Link
						to={tag.permalink}
						className='ed-mono inline-block rounded-full border border-ed-rule px-2.5 py-1 text-[0.75rem] text-ed-graphite hover:border-ed-ink hover:text-ed-ink hover:no-underline'
					>
						{tag.label}
					</Link>
				</li>
			))}
		</ul>
	);
}

// Index row: a mono number and date on the left, the post on the right, an arrow on hover.
export function ListRow({number, children}: {number?: number; children: ReactNode}): ReactNode {
	const {metadata} = useBlogPost();
	const {permalink, title, date, readingTime, description} = metadata;
	const reading = readingLabel(readingTime);
	return (
		<BlogPostItemContainer className='group grid grid-cols-[5.25rem_minmax(0,1fr)] gap-x-4 gap-y-3 border-b border-ed-rule py-8 sm:grid-cols-[6rem_minmax(0,1fr)_auto] sm:gap-x-8'>
			<div className='ed-mono flex flex-col gap-1.5 text-[0.8125rem] text-ed-smoke'>
				{typeof number === "number" ? (
					<span className='text-[1.75rem] leading-none tracking-[-0.02em] text-ed-ink'>{String(number).padStart(2, "0")}</span>
				) : null}
				<time dateTime={date}>{stamp(date)}</time>
			</div>
			<div className='flex min-w-0 flex-col gap-2.5'>
				<h2 className='m-0 text-[clamp(1.5rem,2.4vw,2rem)] font-normal leading-[1.15] tracking-[-0.025em]'>
					<Link to={permalink} className='text-ed-ink hover:text-ed-accent-ink hover:no-underline'>
						{title}
					</Link>
				</h2>
				{description ? (
					<p className='m-0 max-w-[44rem] text-[1.0625rem] leading-relaxed text-ed-graphite'>{description}</p>
				) : (
					<div className='ed-blog-excerpt max-w-[44rem] text-[1.0625rem] leading-relaxed text-ed-graphite'>
						<BlogPostItemContent>{children}</BlogPostItemContent>
					</div>
				)}
				<div className='flex flex-wrap items-center gap-x-4 gap-y-2 pt-1'>
					{reading ? <span className='ed-mono text-[0.8125rem] text-ed-smoke'>{reading}</span> : null}
					<TagPills />
				</div>
			</div>
			<Link
				to={permalink}
				aria-label={`Read ${title}`}
				className='hidden h-10 w-10 items-center justify-center self-center rounded-full border border-ed-rule text-ed-smoke transition-colors hover:no-underline group-hover:border-ed-ink group-hover:bg-ed-ink group-hover:text-ed-canvas sm:flex'
			>
				<LuArrowRight aria-hidden='true' />
			</Link>
		</BlogPostItemContainer>
	);
}

// Post view: the article body only. The page component renders the title band and the metadata rail.
function PostView({children}: {children: ReactNode}): ReactNode {
	return (
		<BlogPostItemContainer className='ed-prose'>
			<BlogPostItemContent>{children}</BlogPostItemContent>
		</BlogPostItemContainer>
	);
}

export default function BlogPostItem({children}: Props): ReactNode {
	const {isBlogPostPage} = useBlogPost();
	return isBlogPostPage ? <PostView>{children}</PostView> : <ListRow>{children}</ListRow>;
}
