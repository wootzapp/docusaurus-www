import {browserData} from "@site/src/data";
import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

function BaseUrlImage({src, alt, ...props}: {src: string; alt: string; [x: string]: any}) {
  const url = useBaseUrl(src);
  return <img src={url} alt={alt} {...props} />;
}

export function Browsing() {
  return (
    <div className='relative'>
      <BaseUrlImage src="img/home-shade.png" alt="Background shade" className="absolute bottom-0 left-0 size-52" />

      <div className=''>
        <div className='container-custom pt-24 pb-28'>
          <h2 className='text-brand-black-100 font-matter ~text-2xl/5xl font-bold text-center max-w-2xl mx-auto tracking-normal leading-relaxed'>
            Turn Your Daily <span className='text-brand-orange-200'>Browsing</span> into Instant <span className='text-brand-green-100'>Earnings</span>
          </h2>

          <div className='flex ~mt-10/20 gap-12 md:gap-16 items-center justify-center md:flex-row flex-col-reverse'>
            <div className='basis-full max-w-[400px] md:max-w-2xl'>
              <BaseUrlImage src="img/earning.png" alt="Earnings illustration" />
            </div>

            <div className='flex flex-col gap-8 md:gap-12'>
              {browserData.map((data, index) => (
                <div key={index} className='flex flex-col gap-3'>
                  <BaseUrlImage src={data.img} alt={`Icon for ${data.heading}`} className="~size-14/20" />
                  <h4 className='text-brand-black-100 font-matter tracking-wide font-semibold ~text-base/xl'>{data.heading}</h4>
                  <p className='text-brand-black-200 font-matter font-light max-w-xl ~text-sm/base'>{data.para}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
