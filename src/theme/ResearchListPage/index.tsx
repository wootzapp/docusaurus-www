import React, {type ReactNode} from "react";
import {PageMetadata, HtmlClassNameProvider} from "@docusaurus/theme-common";
import type {Props} from "@theme/BlogListPage";
import Layout from "@theme/Layout";
import SearchMetadata from "@theme/SearchMetadata";
import Eyebrow from "@site/src/components/editorial/eyebrow";
import WorkList from "@site/src/components/work/work-list";
import NextMeasurements from "@site/src/components/research/next-measurements";
import {toResearchEntry} from "@site/src/components/work/entries";
import {links} from "@site/src/data/research";

// Index template for /research: one row per markdown file in /research, newest first.
export default function ResearchListPage(props: Props): ReactNode {
	const {metadata, items} = props;
	const entries = items.map(({content}) => toResearchEntry(content.metadata));
	return (
		<HtmlClassNameProvider className='research-wrapper research-list-page'>
			<PageMetadata title={metadata.blogTitle} description={metadata.blogDescription} />
			<SearchMetadata tag='research_list' />
			<Layout>
				<main className='ed-page'>
					<section className='ed-hero-bg bg-ed-canvas text-ed-ink'>
						<div className='ed-container pb-12 pt-14 sm:pt-16 lg:pb-16 lg:pt-20'>
							<div className='flex max-w-[48rem] flex-col gap-5'>
								<Eyebrow>WootzApp Research</Eyebrow>
								<h1 className='ed-display ed-display--hero m-0'>{metadata.blogTitle}</h1>
								<p className='ed-lede m-0 text-ed-graphite'>
									Preprints, benchmarks, datasets, and open-source infrastructure. Each entry links to its full write-up, data, and code.
								</p>
							</div>
						</div>
					</section>
					<section className='bg-ed-surface text-ed-ink'>
						<div className='ed-container py-14 lg:py-20'>
							<WorkList entries={entries} size='large' />
							<p className='m-0 pt-8 text-[0.9375rem] text-ed-graphite'>
								For research and data partnerships:{" "}
								<a href={`mailto:${links.email}`} className='ed-link'>
									{links.email}
								</a>
							</p>
						</div>
					</section>
					<NextMeasurements />
				</main>
			</Layout>
		</HtmlClassNameProvider>
	);
}
