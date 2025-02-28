export function Intersection() {
  return (
    <div className="h-auto bg-brand-white-200 pt-16 pb-20">
      <div className="container">
        <h2 className="text-brand-black-100 font-matter ~text-2xl/4xl font-bold text-center max-w-lg mx-auto">
          At the Intersection of
          <span className="text-brand-orange-200"> AI</span> Data and
          <span className="text-brand-green-100"> Decentralization</span>
        </h2>
        <div className="grid grid-cols-[1fr_2fr_1fr] gap-10 mt-16 max-lg:grid-cols-2 max-md:grid-cols-1">
          <div className="flex flex-col justify-between gap-5">
            <div className="flex flex-col gap-3 max-w-sm max-md:max-w-full">
              <img src="/img/growth.png" alt="#" className="size-20" />
              <h4 className="text-brand-black-100 font-matter tracking-wide font-semibold ~text-base/xl">
                Explosive Market Growth
              </h4>
              <p className="text-brand-black-200 font-matter font-regular ~text-sm/lg">
                The AI data labeling market is projected to reach $27B, with AI
                companies spending billions annually on data—only a fraction of
                which is currently efficient.
              </p>
            </div>

            <div className="flex flex-col gap-3 max-w-sm ax-md:max-w-full">
              <img src="/img/int-mobile.png" alt="#" className="size-20" />
              <h4 className="text-brand-black-100 font-matter tracking-wide font-semibold ~text-base/xl">
                Mobile-First Advantage
              </h4>
              <p className="text-brand-black-200 font-matter font-regular ~text-sm/lg">
                With 95% of emerging market users being mobile-only, traditional
                desktop-based workflows are no longer sufficient.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center max-w-2xl max-md:max-w-md">
            <img src="img/benefits.png" alt="#" className="w-full" />
          </div>

          <div className="flex flex-col gap-5 items-end justify-between max-lg:items-start">
            <div className="flex flex-col gap-3 max-w-sm ax-md:max-w-full">
              <img src="/img/payout.png" alt="" className="size-20" />
              <h4 className="text-brand-black-100 font-matter tracking-wide font-semibold ~text-base/xl">
                Instant Payouts & Lower Costs
              </h4>
              <p className="text-brand-black-200 font-matter font-regular ~text-sm/lg">
                Our model uses stable coin payments that settle in minutes,
                drastically reducing transaction fees and delays compared to
                traditional gig platforms.
              </p>
            </div>

            <div className="flex flex-col gap-3 max-w-sm ax-md:max-w-full">
              <img src="/img/int-discuss.png" alt="#" className="size-20" />
              <h4 className="text-brand-black-100 font-matter tracking-wide font-semibold ~text-base/xl">
                Strategic Distribution
              </h4>
              <p className="text-brand-black-200 font-matter font-regular ~text-sm/lg">
                OEM partnerships provide pre-installation on millions of
                devices, ensuring a zero-CAC, rapidly scalable user base.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
