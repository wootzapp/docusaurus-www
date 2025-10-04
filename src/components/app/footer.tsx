import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

function BaseUrlLink({href, children, ...props}: {href: string; children: React.ReactNode; [key: string]: any}) {
	const resolvedHref = href.startsWith("/") ? useBaseUrl(href) : href;
	return (
		<a href={resolvedHref} {...props}>
			{children}
		</a>
	);
}

// JSON object containing footer links
const footerLinks = {
  necessary: [
    {
      label: "Privacy",
      href: "/privacy",
    },
    {
      label: "Twitter",
      href: "https://x.com/WootzApp/status/1794753728047915314",
    },
    {
      label: "Github",
      href: "https://github.com/wootzapp/wootz-browser",
    },
  ],
};

export function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<footer className='bg-slate-950 py-16 text-white'>
			<div className='container-custom flex flex-col gap-12 md:flex-row md:justify-between'>
				<div className='flex flex-col gap-4'>
					<span className='text-2xl font-semibold tracking-wide'>WootzApp</span>
					<p className='max-w-xs text-sm text-white/60'>
						{`© ${currentYear} WootzApp Inc. All rights reserved.`}
					</p>
				</div>

				<div className='flex flex-col gap-4 max-w-sm'>
					<h3 className='text-sm font-semibold uppercase tracking-[0.2em] text-white/60'>Contact</h3>
					<p className='text-sm text-white/60'>
						For technical documentation, partnership inquiries, or investor information please reach out.
					</p>
					<a href='mailto:founders@wootzapp.com' className='text-sm font-medium text-white hover:underline'>
						founders@wootzapp.com
					</a>
				</div>

				<div className='flex flex-col gap-4'>
					<h3 className='text-sm font-semibold uppercase tracking-[0.2em] text-white/60'>Necessary links</h3>
					<div className='flex flex-col gap-2 text-sm text-white/70'>
						{footerLinks.necessary.map((link, index) => (
							<BaseUrlLink key={index} href={link.href} className='hover:text-white'>
								{link.label}
							</BaseUrlLink>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
