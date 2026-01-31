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
  docs: [
    {
      label: "W8-RL Docs",
      href: "/docs/intro",
    },
  ],
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
		<footer className='sci-grid relative overflow-hidden bg-brand-base py-[72px] text-brand-text-primary lg:py-32'>
			<div className='absolute inset-0 sci-scanlines sci-scanlines--strong pointer-events-none' />
			<div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent-100/40 to-transparent' />
			<div className='container-custom relative z-10 flex flex-col gap-12 md:flex-row md:justify-between'>
				<div className='flex flex-col gap-4'>
					<span className='text-subsection font-bold tracking-wide'>WootzApp</span>
					<p className='max-w-xs text-body-sm text-brand-text-muted'>
						{`© ${currentYear} WootzApp Inc. All rights reserved.`}
					</p>
				</div>

				<div className='flex max-w-sm flex-col gap-4'>
					<h3 className='font-mono text-body-sm font-bold uppercase tracking-[0.2em] text-brand-accent-200'>Contact</h3>
					<p className='text-body-sm text-brand-text-muted'>
						For technical documentation, partnership inquiries, or investor information please reach out.
					</p>
					<a href='mailto:founders@wootzapp.com' className='font-mono text-body-sm font-semibold text-brand-accent-200 hover:underline'>
						founders@wootzapp.com
					</a>
				</div>

				<div className='flex flex-col gap-4'>
					<h3 className='font-mono text-body-sm font-bold uppercase tracking-[0.2em] text-brand-text-muted'>Documentation</h3>
					<div className='flex flex-col gap-2 text-body-sm text-brand-text-secondary'>
						{footerLinks.docs.map((link, index) => (
							<BaseUrlLink key={index} href={link.href} className='hover:text-brand-text-primary'>
								{link.label}
							</BaseUrlLink>
						))}
					</div>
				</div>

				<div className='flex flex-col gap-4'>
					<h3 className='font-mono text-body-sm font-bold uppercase tracking-[0.2em] text-brand-text-muted'>Necessary links</h3>
					<div className='flex flex-col gap-2 text-body-sm text-brand-text-secondary'>
						{footerLinks.necessary.map((link, index) => (
							<BaseUrlLink key={index} href={link.href} className='hover:text-brand-text-primary'>
								{link.label}
							</BaseUrlLink>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
