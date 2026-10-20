import Layout from "@theme/Layout";
import Eyebrow from "../../components/editorial/eyebrow";
import WorkList from "../../components/work/work-list";
import {NextMeasurements} from "../../components/research/sections";
import {links} from "@site/src/data/research";

export default function ResearchIndexPage() {
	return (
		<Layout title='Our work' description='Benchmarks, datasets, and open-source infrastructure from WootzApp Research.'>
			<main className='ed-page'>
				<section className='ed-hero-bg bg-ed-canvas text-ed-ink'>
					<div className='ed-container pb-12 pt-14 sm:pt-16 lg:pb-16 lg:pt-20'>
						<div className='flex max-w-[48rem] flex-col gap-5'>
							<Eyebrow>WootzApp Research</Eyebrow>
							<h1 className='ed-display ed-display--hero m-0'>Our work</h1>
							<p className='ed-lede m-0 text-ed-graphite'>
								Benchmarks, datasets, and open-source infrastructure. Each entry links to its full write-up, data, and code.
							</p>
						</div>
					</div>
				</section>
				<section className='bg-ed-surface text-ed-ink'>
					<div className='ed-container py-14 lg:py-20'>
						<WorkList size='large' />
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
	);
}
