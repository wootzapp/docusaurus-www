import React, {type ReactNode} from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";

type Variant = "primary" | "secondary" | "inverse" | "outline" | "text";

export default function CtaLink({
	href,
	variant = "primary",
	className,
	children,
}: {
	href: string;
	variant?: Variant;
	className?: string;
	children: ReactNode;
}) {
	const external = /^(https?:|mailto:)/.test(href);
	const arrow = href.startsWith("http") ? "↗" : "→";
	return (
		<Link
			to={href}
			{...(external && href.startsWith("http") ? {target: "_blank", rel: "noopener noreferrer"} : {})}
			className={clsx(variant === "text" ? "ed-link inline-flex items-center gap-1.5 text-[0.9375rem] font-medium" : ["ed-btn", `ed-btn--${variant}`], className)}
		>
			<span>{children}</span>
			<span aria-hidden='true'>{arrow}</span>
		</Link>
	);
}
