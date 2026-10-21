import React, {type ReactNode} from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import {HtmlClassNameProvider, ThemeClassNames} from "@docusaurus/theme-common";
import {BlogPostProvider, useBlogPost} from "@docusaurus/plugin-content-blog/client";
import type {Props} from "@theme/BlogPostPage";
import Layout from "@theme/Layout";
import BlogPostItem from "@theme/BlogPostItem";
import BlogPostPaginator from "@theme/BlogPostPaginator";
import BlogPostPageMetadata from "@theme/BlogPostPage/Metadata";
import BlogPostPageStructuredData from "@theme/BlogPostPage/StructuredData";
import TOC from "@theme/TOC";
import ContentVisibility from "@theme/ContentVisibility";
import {readingLabel, stamp, TagPills} from "../BlogPostItem";

const grid = "grid grid-cols-1 gap-8 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16";

function Spec({label, children}: {label: string; children: ReactNode}): ReactNode {
	return (
		<div className='flex flex-col gap-1 border-t border-ed-rule py-3'>
			<dt className='ed-eyebrow text-ed-smoke'>{label}</dt>
			<dd className='ed-mono m-0 text-[0.875rem] text-ed-ink'>{children}</dd>
		</div>
	);
}

// Post page: title and lede on the dotted band; below it, a metadata rail beside the article.
function BlogPostPageContent({children}: {children: ReactNode}): ReactNode {
	const {metadata, toc} = useBlogPost();
	const {title, description, date, readingTime, authors, tags, nextItem, prevItem, frontMatter} = metadata;
	const {hide_table_of_contents: hideToc, toc_min_heading_level: minLevel, toc_max_heading_level: maxLevel} = frontMatter;
	const showToc = !hideToc && toc.length > 0;
	const reading = readingLabel(readingTime);
	return (
		<Layout>
			<main className='ed-page'>
				<section className='ed-hero-bg bg-ed-canvas text-ed-ink'>
					<div className={clsx("ed-container pb-10 pt-12 lg:pb-14 lg:pt-16", grid)}>
						<div>
							<Link to='/blog' className='ed-eyebrow inline-flex items-center gap-2 text-ed-ink hover:text-ed-accent-ink hover:no-underline'>
								← Blog
							</Link>
						</div>
						<div className='flex max-w-[45rem] flex-col gap-6'>
							<h1 className='m-0 text-[clamp(2.25rem,4.2vw,3.5rem)] font-normal leading-[1.02] tracking-[-0.035em] [text-wrap:balance]'>{title}</h1>
							{description ? <p className='ed-lede m-0 text-ed-graphite'>{description}</p> : null}
						</div>
					</div>
				</section>

				<section className='bg-ed-canvas text-ed-ink'>
					<div className={clsx("ed-container pb-16 pt-10 lg:pb-24 lg:pt-12", grid)}>
						<aside className='lg:sticky lg:top-24 lg:self-start'>
							<dl className='m-0 grid grid-cols-2 gap-x-6 sm:grid-cols-4 lg:grid-cols-1'>
								<Spec label='Published'>
									<time dateTime={date}>{stamp(date)}</time>
								</Spec>
								{authors.length ? (
									<Spec label={authors.length > 1 ? "Authors" : "Author"}>
										{authors.map((author, index) => {
											const href = author.page?.permalink ?? author.url;
											return (
												<React.Fragment key={author.key ?? author.name ?? index}>
													{index > 0 ? ", " : null}
													{href ? (
														<Link to={href} className='text-ed-ink hover:text-ed-accent-ink hover:no-underline'>
															{author.name}
														</Link>
													) : (
														author.name
													)}
												</React.Fragment>
											);
										})}
									</Spec>
								) : null}
								{reading ? <Spec label='Reading time'>{reading}</Spec> : null}
								{tags.length ? (
									<Spec label='Tags'>
										<TagPills />
									</Spec>
								) : null}
							</dl>
							{showToc ? (
								<div className='ed-blog-aside hidden flex-col gap-3 border-t border-ed-rule pt-4 lg:flex'>
									<p className='ed-eyebrow m-0 text-ed-smoke'>Contents</p>
									<TOC toc={toc} minHeadingLevel={minLevel} maxHeadingLevel={maxLevel} />
								</div>
							) : null}
						</aside>
						<div className='min-w-0 max-w-[45rem]'>
							<ContentVisibility metadata={metadata} />
							<BlogPostItem>{children}</BlogPostItem>
							{nextItem || prevItem ? <BlogPostPaginator nextItem={nextItem} prevItem={prevItem} /> : null}
						</div>
					</div>
				</section>
			</main>
		</Layout>
	);
}

export default function BlogPostPage(props: Props): ReactNode {
	const BlogPostContent = props.content;
	return (
		<BlogPostProvider content={props.content} isBlogPostPage>
			<HtmlClassNameProvider className={clsx(ThemeClassNames.wrapper.blogPages, ThemeClassNames.page.blogPostPage)}>
				<BlogPostPageMetadata />
				<BlogPostPageStructuredData />
				<BlogPostPageContent>
					<BlogPostContent />
				</BlogPostPageContent>
			</HtmlClassNameProvider>
		</BlogPostProvider>
	);
}
