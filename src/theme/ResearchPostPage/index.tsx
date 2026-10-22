import React, {type ReactNode} from "react";
import {HtmlClassNameProvider} from "@docusaurus/theme-common";
import {BlogPostProvider, useBlogPost} from "@docusaurus/plugin-content-blog/client";
import type {Props} from "@theme/BlogPostPage";
import Layout from "@theme/Layout";
import MDXContent from "@theme/MDXContent";
import TOC from "@theme/TOC";
import ContentVisibility from "@theme/ContentVisibility";
import BlogPostPageMetadata from "@theme/BlogPostPage/Metadata";
import PaperHeader from "@site/src/components/work/paper-header";
import Citation from "@site/src/components/work/citation";
import {toResearchEntry} from "@site/src/components/work/entries";

// Entry template for /research/<slug>: the paper header comes from the file's front matter, the body is its markdown.
function ResearchPostPageContent({children}: {children: ReactNode}): ReactNode {
	const {metadata, toc} = useBlogPost();
	const entry = toResearchEntry(metadata);
	const {hide_table_of_contents: hideToc, toc_min_heading_level: minLevel, toc_max_heading_level: maxLevel} = metadata.frontMatter;
	const showToc = !hideToc && toc.length > 0;
	return (
		<Layout>
			<main className='ed-page'>
				<PaperHeader
					kind={entry.kind}
					date={entry.dateLong}
					title={entry.title}
					subtitle={entry.subtitle}
					byline={entry.byline}
					abstract={entry.abstract.map((paragraph) => (
						<p key={paragraph} className='m-0'>
							{paragraph}
						</p>
					))}
					stats={entry.stats}
					sources={entry.sources}
				/>
				<section className='bg-ed-canvas text-ed-ink'>
					<div className='ed-container grid grid-cols-1 gap-8 pb-16 pt-10 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16 lg:pb-24 lg:pt-14'>
						<aside className='hidden lg:sticky lg:top-24 lg:block lg:self-start'>
							{showToc ? (
								<div className='ed-toc flex flex-col gap-3 border-t border-ed-rule pt-4'>
									<p className='ed-eyebrow m-0 text-ed-smoke'>Contents</p>
									<TOC toc={toc} minHeadingLevel={minLevel} maxHeadingLevel={maxLevel} />
								</div>
							) : null}
						</aside>
						<article className='ed-prose min-w-0 max-w-[48rem]'>
							<ContentVisibility metadata={metadata} />
							<div className='markdown'>
								<MDXContent>{children}</MDXContent>
							</div>
						</article>
					</div>
				</section>
				{entry.citation ? <Citation bibtex={entry.citation} /> : null}
			</main>
		</Layout>
	);
}

export default function ResearchPostPage(props: Props): ReactNode {
	const BlogPostContent = props.content;
	return (
		<BlogPostProvider content={props.content} isBlogPostPage>
			<HtmlClassNameProvider className='research-wrapper research-post-page'>
				<BlogPostPageMetadata />
				<ResearchPostPageContent>
					<BlogPostContent />
				</ResearchPostPageContent>
			</HtmlClassNameProvider>
		</BlogPostProvider>
	);
}
