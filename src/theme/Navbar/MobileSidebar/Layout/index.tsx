import React, {type ReactNode} from "react";
import clsx from "clsx";
import {useNavbarSecondaryMenu} from "@docusaurus/theme-common/internal";
import type {Props} from "@theme/Navbar/MobileSidebar/Layout";

export default function NavbarMobileSidebarLayout({header, primaryMenu, secondaryMenu}: Props): ReactNode {
	const {shown: secondaryMenuShown} = useNavbarSecondaryMenu();
	return (
		<div className='navbar-sidebar bg-brand-home_bg'>
			{header}
			<div
				className={clsx("navbar-sidebar__items", {
					"navbar-sidebar__items--show-secondary": secondaryMenuShown,
				})}
			>
<div className='navbar-sidebar__item menu'>
  {primaryMenu}

  <div className='relative group mt-3'>
    <div className='bg-brand-border/80 rounded-md absolute inset-0 translate-y-[2px]'></div>
    <a
      href="https://calendar.app.google/jjLE5C9TczR2vhHe9"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full hover:no-underline"
    >
      <button className='relative py-2 text-brand-base text-xs font-mono font-semibold tracking-[0.16em] bg-brand-accent-100 rounded-md transition-transform duration-150 -translate-y-1 active:-translate-y-0.5 cursor-pointer border-[1.5px] border-brand-accent-200/70 shadow-[0_12px_30px_-20px_rgba(242,139,50,0.8)] w-full'>
        Get Started
      </button>
    </a>
  </div>
</div>

				<div className='navbar-sidebar__item menu'>{secondaryMenu}</div>
			</div>
		</div>
	);
}
