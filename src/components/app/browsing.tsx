import { browserData } from "@site/src/data";
import React from "react";

export function Browsing() {
  return (
    <div className="relative">
      <img
        src="img/home-shade.png"
        alt="#"
        className="absolute bottom-0 left-0 size-52"
      />

      <div className="bg-brand-white-200">
        <div className="container pt-24 pb-28">
          <h2 className="text-brand-black-100 font-matter ~text-2xl/4xl font-bold text-center max-lg:max-w-md max-w-xl mx-auto leading-snug">
            Turn Your Daily{" "}
            <span className="text-brand-orange-200">Browsing</span> into Instant{" "}
            <span className="text-brand-green-100">Earnings</span>
          </h2>

          <div className="flex ~mt-10/20  gap-16 max-md:gap-12 items-center justify-center max-md:flex-col-reverse">
            <div className="max-md:max-w-[400px]  max-w-2xl basis-full">
              <img src="/img/earning.png" alt="#" />
            </div>

            <div className="flex flex-col gap-12 max-md:gap-8 ">
              {browserData.map((data, index) => {
                return (
                  <div key={index} className="flex flex-col gap-3">
                    <img src={data.img} alt="#" className="~size-14/20" />
                    <h4 className="text-brand-black-100 font-matter tracking-wide font-semibold ~text-base/xl">
                      {data.heading}
                    </h4>
                    <p className="text-brand-black-200 font-matter font-light max-w-xl ~text-sm/base">
                      {data.para}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
