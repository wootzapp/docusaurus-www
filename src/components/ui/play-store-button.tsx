import React from "react";
import { twMerge } from "tailwind-merge";
import useBaseUrl from "@docusaurus/useBaseUrl";

export function PlayStoreButton({ bg_color }: { bg_color?: string }) {
	return (
		<a
			href="https://play.google.com/store/apps/details?id=com.wootzapp.web"
			target="_blank"
			rel="noreferrer"
		>
			<div
				className={twMerge(
					"bg-brand-orange-100 border-[1.5px] border-brand-orange-100 relative top-[2px] rounded-md w-auto inline-block text-center group",
					bg_color
				)}
			>
				<div className="relative text-center w-auto bg-white text-brand-black-100 rounded-md text-sm md:text-base font-medium border-[1.5px] border-brand-orange-100 px-4 py-2 md:px-6 md:py-3 -translate-y-1 hover:-translate-y-1.5 active:-translate-y-0.5 mx-[-1.5px] flex items-center gap-3 md:gap-5 transition-all duration-150 cursor-pointer">
					<span className="font-matter">Download on Play Store</span>
					<img
						src={useBaseUrl("img/playstore.png")}
						className="w-6 h-6 md:w-8 md:h-8 transform transition-transform duration-200 group-hover:scale-110"
						alt="Play Store"
					/>
				</div>
			</div>
		</a>
	);
}

export default PlayStoreButton;
