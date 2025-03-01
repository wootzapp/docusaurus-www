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
						<div className='bg-[#66912D] rounded-md absolute inset-0 translate-y-[2px]'></div>
						<button className='relative py-2 text-brand-black-100 text-base font-matter font-medium bg-brand-green-100 rounded-md transition-transform duration-150 -translate-y-1 active:-translate-y-0.5 cursor-pointer border-[1.5px] border-[#66912D] w-full'>
							Get Started
						</button>
					</div>
				</div>
				<div className='navbar-sidebar__item menu'>{secondaryMenu}</div>
			</div>
		</div>
	);
}
