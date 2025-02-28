import { headerData } from "@site/src/data";

export const Header = () => {
  return (
    <div className="flex justify-between container items-center py-5">
      <img src="/img/Logo.png" alt="" className="max-md:hidden max-xl:w-60" />

      <img src="/img/mobile-logo.png" alt="#" className="md:hidden w-44" />

      <div className="hidden md:flex gap-10">
        {headerData.map((data) => {
          return (
            <a
              className="font-matter font-normal text-brand-black-200 hover:text-inherit hover:no-underline ~text-base/xl"
              key={data}
              href="#"
            >
              {data}
            </a>
          );
        })}
      </div>

      <button
        className="hidden md:inline-block px-4 py-2 md:px-7 md:py-3 text-brand-black-100 ~text-sm/lg font-matter font-medium bg-brand-green-100 rounded-md transition-all duration-150 hover:opacity-95 
    shadow-[0_10px_0_#66912D] cursor-pointer"
      >
        Get Started
      </button>

      <button className="md:hidden p-2 focus:outline-none">
        <img src="img/menu.png" alt="#" />
      </button>
    </div>
  );
};
