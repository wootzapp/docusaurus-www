import React, {type ReactNode} from "react";

// A caption under a table or figure in markdown: <Caption>Exhibit 1 — …</Caption>
export default function Caption({children}: {children: ReactNode}) {
	return <span className='ed-caption'>{children}</span>;
}
