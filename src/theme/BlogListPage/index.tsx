import React, {type ReactNode} from "react";
import clsx from "clsx";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {PageMetadata, HtmlClassNameProvider, ThemeClassNames} from "@docusaurus/theme-common";
import {BlogPostProvider} from "@docusaurus/plugin-content-blog/client";
import type {Props} from "@theme/BlogListPage";
import Layout from "@theme/Layout";
import BlogListPaginator from "@theme/BlogListPaginator";
import SearchMetadata from "@theme/SearchMetadata";
import BlogListPageStructuredData from "@theme/BlogListPage/StructuredData";
import Eyebrow from "@site/src/components/editorial/eyebrow";
import {ListRow} from "../BlogPostItem";

function BlogListPageMetadata(props: Props): ReactNode {
	const {metadata} = props;
	const {
		siteConfig: {title: siteTitle},
	} = useDocusaurusContext();
	const {blogDescription, blogTitle, permalink} = metadata;
	const title = permalink === "/" ? siteTitle : blogTitle;
	return (
		<>
			<PageMetadata title={title} description={blogDescription} />
			<SearchMetadata tag='blog_posts_list' />
		</>
	);
}

// Index: the tagline on the dotted band, then a numbered list. Numbers count from the oldest post, so they stay stable.
function BlogListPageContent(props: Props): ReactNode {
	const {metadata, items} = props;
	const {blogTitle, blogDescription, totalCount, page, postsPerPage} = metadata;
	const first = totalCount - (page - 1) * postsPerPage;
	return (
		<Layout>
			<main className='ed-page'>
				<section className='ed-hero-bg bg-ed-canvas text-ed-ink'>
					<div className='ed-container pb-10 pt-14 lg:pb-12 lg:pt-20'>
						<Eyebrow>{blogTitle}</Eyebrow>
						<h1 className='ed-h2 m-0 mt-5 max-w-[40rem]'>{blogDescription}</h1>
						<div className='ed-mono mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[0.8125rem] text-ed-smoke'>
							<span>
								{totalCount} {totalCount === 1 ? "post" : "posts"}
							</span>
							<a href={useBaseUrl("/blog/rss.xml")} className='hover:text-ed-accent-ink'>
								RSS ↗
							</a>
						</div>
					</div>
				</section>
				<section className='bg-ed-canvas text-ed-ink'>
					<div className='ed-container pb-16 lg:pb-24'>
						<div className='border-t border-ed-ink'>
							{items.map(({content: BlogPostContent}, index) => (
								<BlogPostProvider key={BlogPostContent.metadata.permalink} content={BlogPostContent}>
									<ListRow number={first - index}>
										<BlogPostContent />
									</ListRow>
								</BlogPostProvider>
							))}
						</div>
						<div className='pt-8'>
							<BlogListPaginator metadata={metadata} />
						</div>
					</div>
				</section>
			</main>
		</Layout>
	);
}

export default function BlogListPage(props: Props): ReactNode {
	return (
		<HtmlClassNameProvider className={clsx(ThemeClassNames.wrapper.blogPages, ThemeClassNames.page.blogListPage)}>
			<BlogListPageMetadata {...props} />
			<BlogListPageStructuredData {...props} />
			<BlogListPageContent {...props} />
		</HtmlClassNameProvider>
	);
}
