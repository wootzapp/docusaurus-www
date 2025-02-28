import { PlayStoreButton } from "../ui/play-store-button";

export function Experience() {
  return (
    <div className="container mt-[300px] xl:mt-[400px] relative mb-20">
      <div className="bg-brand-green-200 text-brand-white-100 flex flex-col md:flex-row py-10 rounded-3xl h-auto md:h-[500px] items-center px-5 md:px-10 relative">
        <img
          src="img/pattern.png"
          alt="#"
          className="absolute bottom-0 left-0"
        />

        <div className="flex flex-col space-y-7 max-sm:space-y-4 items-start flex-1 order-2 md:order-1 max-md:items-center">
          <h2 className="font-matter font-bold ~text-xl/5xl leading-snug max-md:font-medium max-md:text-3xl max-md:text-center max-sm:text-xl">
            Experience a Browser That Works for You
          </h2>
          <p className="font-matter font-regular text-brand-white-700 ~text-xs/lg [@media(max-width:400px)]:text-[10px] tracking-wide max-md:text-center">
            Whether you’re a user earning rewards on every click, a developer
            building cutting-edge extensions, or a partner looking to tap into a
            mobile-first, decentralized workforce, WootzApp is redefining AI
            data labeling and gig payments.
          </p>

          <PlayStoreButton bg_color="bg-brand-orange-300" />
        </div>

        <div className="flex-1 flex justify-center relative -mt-52 md:-top-32 order-1 md:order-2">
          <img
            src="img/card.png"
            alt="#"
            className="w-full max-w-md md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
}
