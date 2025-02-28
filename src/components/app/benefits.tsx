export const partner = [
  {
    img: "img/benefits.png",
    head: "For Developers",
    para: "Access our open-source codebase on GitHub. Utilize detailed technical documentation and our SDK to build extensions that tap into a global, mobile-first audience.",
  },

  {
    img: "img/benefits.png",
    head: "For Partners",
    para: "Leverage our OEM partnerships that pre-install WootzApp on millions of devices—delivering zero user acquisition cost and instant global reach. Our platform is already live with five pilot AI partners deploying data workflows.",
  },
  {
    img: "img/benefits.png",
    head: "Distribution & Scale",
    para: "With an average of 5.2 hours of daily browser use and plans to reach 15M+ devices, our system offers unprecedented scale and cost efficiencies (as low as $0.10–$0.30 per label).",
  },
];

export function Benefits() {
  return (
    <div className="pt-16 container text-brand-white-600 pb-24">
      <h2 className="text-brand-black-100 font-matter ~text-2xl/4xl font-bold text-center max-w-4xl mx-auto leading-normal">
        Developer & Partner
        <span className="text-brand-orange-200"> Benefits</span>
      </h2>

      <div className="grid grid-cols-3 gap-7 max-md:gap-10 mt-16 max-md:mt-5 justify-center max-lg:grid-cols-2 max-md:grid-cols-1 max-md:w-full">
        {partner.map((e) => {
          return (
            <div className="text-center flex flex-col gap-4 items-center max-md:gap-3">
              <img src={e.img} alt="#" className="max-w-3xl" />
              <h4 className="text-brand-black-100 font-matter ~text-xl/3xl font-bold leading-normal tracking-wide">
                {e.head}
              </h4>
              <p className="text-brand-black-200 font-matter font-light ~text-sm/lg">
                {e.para}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
