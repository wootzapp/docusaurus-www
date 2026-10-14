import React, {type ReactNode} from "react";
import clsx from "clsx";
import {useNavbarSecondaryMenu} from "@docusaurus/theme-common/internal";
import type {Props} from "@theme/Navbar/MobileSidebar/Layout";
import {links} from "@site/src/data/research";

export default function NavbarMobileSidebarLayout({header, primaryMenu, secondaryMenu}: Props): ReactNode {
	const {shown: secondaryMenuShown} = useNavbarSecondaryMenu();
	return (
		<div className='navbar-sidebar bg-ed-canvas'>
			{header}
			<div
				className={clsx("navbar-sidebar__items", {
					"navbar-sidebar__items--show-secondary": secondaryMenuShown,
				})}
			>
<div className='navbar-sidebar__item menu'>
  {primaryMenu}

  <a
    href={links.booking}
    target='_blank'
    rel='noopener noreferrer'
    className='ed-btn ed-btn--primary mt-4 w-full'
  >
    Talk to us
  </a>
</div>

				<div className='navbar-sidebar__item menu'>{secondaryMenu}</div>
			</div>
		</div>
	);
}
