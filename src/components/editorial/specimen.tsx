import React, {type ReactNode} from "react";
import clsx from "clsx";

// An evidence block. Every specimen states whether it is illustrative or recorded.
export default function Specimen({
	title,
	label,
	kind,
	children,
	footer,
	className,
}: {
	title: string;
	label: string;
	kind: "illustrative" | "recorded";
	children: ReactNode;
	footer?: ReactNode;
	className?: string;
}) {
	return (
		<div className={clsx("ed-specimen flex min-w-0 flex-col", className)}>
			<div className='flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border-b border-ed-rule px-4 py-2.5'>
				<span className='text-ed-ink'>{title}</span>
				<span
					className={clsx(
						"ed-eyebrow whitespace-nowrap text-[0.75rem]",
						kind === "recorded" ? "text-ed-accent-ink" : "text-ed-smoke"
					)}
				>
					{label}
				</span>
			</div>
			<div className='flex-1 overflow-x-auto px-4 py-3 text-ed-graphite'>{children}</div>
			{footer ? <div className='border-t border-ed-rule px-4 py-2.5 text-[0.75rem] text-ed-smoke'>{footer}</div> : null}
		</div>
	);
}
