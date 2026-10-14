import React, {type ReactNode} from "react";
import clsx from "clsx";

export default function Eyebrow({children, className}: {children: ReactNode; className?: string}) {
	// Default to smoke only when the caller does not pass its own text color.
	const hasColor = /\btext-ed-/.test(className ?? "");
	return <p className={clsx("ed-eyebrow m-0", !hasColor && "text-ed-smoke", className)}>{children}</p>;
}
