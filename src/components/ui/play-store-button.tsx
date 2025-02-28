import { twMerge } from "tailwind-merge";

export function PlayStoreButton({ bg_color }: { bg_color?: string }) {
  return (
    <button
      className={twMerge(
        "px-4 py-2 md:px-6 md:py-3 text-brand-black-100 font-matter font-medium bg-brand-white-100 rounded-md transition-all duration-150 hover:opacity-95 border-l-2 border-t-2 border-brand-orange-100 border-r-2 border-b-[10px] flex items-center cursor-pointer gap-3 md:gap-5",
        bg_color
      )}
    >
      <span className="text-xs md:text-sm lg:text-base font-matter text-brand-black-100">
        Download On Play Store
      </span>
      <img
        src="img/playstore.png"
        className="w-6 h-6 md:w-8 md:h-8"
        alt="Play Store"
      />
    </button>
  );
}
