const data = [
  {
    head: "Custom Extension Framework",
    para: "Built on an enhanced Manifest V3, our API enables developers to create mobile-first extensions. Deploy custom AI data workflows in minutes—not weeks.",
    img: "/img/extension.png",
  },

  {
    head: "Robust API & SDK",
    para: "Our comprehensive toolkit integrates seamlessly with our native in‑browser task orchestration, automating validation, rewards distribution, and secure data collection.",
    img: "/img/sdk.png",
  },
];

export function PartnerShip() {
  return (
    <div className="min-h-screen pt-24 relative pb-16">
      <img
        src="img/partnership-shadow.png"
        alt="#"
        className="absolute -top-10 -right-44"
      />

      <div className="container">
        <div className="flex flex-col gap-4 items-center text-center">
          <h2 className="text-brand-black-100 font-matter ~text-xl/4xl font-bold text-center max-w-2xl mx-auto">
            A Platform Built on Extensibility and
            <span className="text-brand-orange-200 block">
              Global Partnerships
            </span>
          </h2>
          <p className="text-brand-black-200 font-matter font-light max-w-4xl ~text-sm/lg">
            At the heart of WootzApp is our unique extension system—a
            first-of-its-kind solution on mobile. This allows AI companies to
            design custom, iterative, non-standard labeling workflows, while
            enabling developers to rapidly deploy and iterate on tasks.
          </p>
        </div>

        <div className="flex flex-col mt-16">
          <div className="flex max-md:gap-6 md:gap-6 lg:gap-8 xl:gap-10 max-md:flex-col">
            {data.map((e) => {
              return (
                <div className="flex bg-brand-white-100 p-5 gap-4 rounded-md basis-full z-10 max-lg:gap-3">
                  <img
                    src={e.img}
                    alt="#"
                    className="object-cover ~size-14/20"
                  />
                  <div className="flex gap-4 flex-col justify-start max-md:gap-3">
                    <h4 className="text-brand-black-100 font-matter ~text-base/xl font-semibold max-w-3xl leading-normal tracking-wide">
                      {e.head}
                    </h4>
                    <p className="text-brand-black-200 font-matter font-med max-w-lg ~text-xs/base">
                      {e.para}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center mt-14 max-md:mt-5 justify-center gap-16 max-lg:gap-10 max-md:flex-col-reverse max-md:gap-5">
            <div className="max-w-2xl flex-1 max-md:max-w-md">
              <img src="img/hero-img.png" alt="#" className="w-full" />
            </div>

            <div className="bg-brand-white-500 rounded-md max-w-3xl flex-1 w-full max-md:max-w-xl">
              <img
                src="img/preview.png"
                alt="#"
                className="w-full max-md:hidden"
              />

              <img
                src="img/preview-mobile.png"
                alt="#"
                className="w-full md:hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
