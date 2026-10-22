import React, {type ComponentProps} from "react";
import MDXComponents from "@theme-original/MDXComponents";
import EvidenceBars from "@site/src/components/editorial/evidence-bars";
import Specimen from "@site/src/components/editorial/specimen";
import Caption from "@site/src/components/editorial/caption";
import TaskNineteenPair from "@site/src/components/work/task-nineteen-pair";

// Wide tables scroll sideways on narrow screens instead of widening the page.
function Table(props: ComponentProps<"table">) {
	return (
		<div className='ed-table-scroll'>
			<table {...props} />
		</div>
	);
}

// Available in every markdown file (research entries, blog posts, docs) without an import.
export default {
	...MDXComponents,
	table: Table,
	EvidenceBars,
	Specimen,
	Caption,
	TaskNineteenPair,
};
