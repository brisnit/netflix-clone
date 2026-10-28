"use client";

import { adsBanner } from "@/lib/data";
import { containerClass } from "@/lib/styles";
import { usePrototype } from "./PrototypeProvider";

export function AdsBanner() {
  const { notify } = usePrototype();

  return (
    <div className={`${containerClass} relative z-[2] -mt-5 mb-14 m:-mt-8 l:mb-16`}>
      <div className="relative flex justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/popcorn.svg"
          alt=""
          aria-hidden="true"
          className="absolute left-0 top-[-63px] z-[2] h-[100px] w-24 scale-[0.7] object-contain object-top m:top-[-18px] m:scale-[0.8]"
        />
        <div className="ads-card relative z-[1] flex flex-1 overflow-hidden rounded-2xl m:ml-[100px]">
          <div className="flex w-full flex-col items-start justify-between gap-4 px-4 py-8 m:flex-row m:items-center m:gap-4 m:px-6 m:py-3 l:py-[14.08px] xl:px-8 xl:py-4">
            <div>
              <h3 className="text-[20px] font-medium">{adsBanner.title}</h3>
              <p className="text-[16px]">{adsBanner.body}</p>
            </div>
            <button
              type="button"
              onClick={() => notify("Plan details aren't available in this prototype.")}
              className="nf-ease relative flex min-h-10 shrink-0 items-center justify-center rounded-[4px] bg-[rgba(128,128,128,0.4)] px-4 py-1.5 font-medium leading-4 text-white hover:bg-[rgba(128,128,128,0.3)]"
            >
              {adsBanner.cta}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
