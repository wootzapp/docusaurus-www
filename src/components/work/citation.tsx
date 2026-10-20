import React, {useState} from "react";
import {LuCopy, LuCheck} from "react-icons/lu";

// BibTeX block with a copy button.
export default function Citation({bibtex}: {bibtex: string}) {
	const [copied, setCopied] = useState(false);
	const copy = async () => {
		try {
			await navigator.clipboard.writeText(bibtex);
			setCopied(true);
			setTimeout(() => setCopied(false), 1800);
		} catch {
			setCopied(false);
		}
	};
	return (
		<section id='citation' className='scroll-mt-20 border-t border-ed-rule bg-ed-canvas text-ed-ink'>
			<div className='ed-container py-16 sm:py-20'>
				<div className='flex flex-wrap items-end justify-between gap-4'>
					<h2 className='ed-h3 m-0'>Citation</h2>
					<button
						type='button'
						onClick={copy}
						className='ed-btn ed-btn--secondary cursor-pointer'
						aria-live='polite'
					>
						{copied ? <LuCheck aria-hidden='true' /> : <LuCopy aria-hidden='true' />}
						<span>{copied ? "Copied" : "Copy BibTeX"}</span>
					</button>
				</div>
				<pre className='ed-mono m-0 mt-6 overflow-x-auto rounded-2xl border border-ed-rule bg-ed-surface p-6 text-[0.8125rem] leading-relaxed text-ed-ink'>
					{bibtex}
				</pre>
			</div>
		</section>
	);
}
