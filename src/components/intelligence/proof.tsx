import React from "react";
import Link from "@docusaurus/Link";
import Chapter from "./chapter";
import WorkCards from "../work/work-cards";
import Boundary from "./boundary";
import {useResearchEntries} from "../work/entries";

// The research entries from /research as exhibit cells, then the runtime they run on.
export default function Proof() {
	const entries = useResearchEntries();
	return (
		<Chapter
			id='research'
			tone='canvas'
			className='ed-grid-bg'
			title='Built on research we publish.'
			lede={
				<>
					Our benchmark, dataset, runtime, and training study are public. Each cell shows two figures from the entry and links to the
					write-up, data, and code.{" "}
					<Link to='/research' className='ed-link whitespace-nowrap'>
						All work →
					</Link>
				</>
			}
		>
			<WorkCards entries={entries} />
			<div className='mt-16 lg:mt-20'>
				<Boundary />
			</div>
		</Chapter>
	);
}
