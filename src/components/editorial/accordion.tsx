import React, {type ReactNode} from "react";

export default function Accordion({items}: {items: {question: string; answer: ReactNode}[]}) {
	return (
		<div>
			{items.map((item) => (
				<details key={item.question} className='ed-accordion'>
					<summary>{item.question}</summary>
					<div className='ed-body max-w-3xl pb-6 text-ed-graphite'>{item.answer}</div>
				</details>
			))}
		</div>
	);
}
