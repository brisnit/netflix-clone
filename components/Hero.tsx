import { hero, heroImage } from "@/lib/data";
import { EmailForm } from "./EmailForm";
import { Header } from "./Header";

export function Hero() {
  return (
    <section className="relative z-[1] mx-auto h-[664px] max-w-[1920px] overflow-hidden l:h-[760px] xl:h-[888px]">
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={heroImage.src}
          srcSet={heroImage.srcSet}
          sizes="100vw"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-gradient absolute inset-0 z-[2]" />
      </div>

      <Header />

      {/* Copy is vertically centred between the header and the curve */}
      <div className="absolute inset-x-0 bottom-[132px] top-[68px] z-[3] flex flex-col justify-center px-8">
        <div className="mx-auto w-full text-center m:max-w-[432px] l:max-w-[508px] xl:max-w-[588px]">
          <h1 className="mb-2 text-[32px] font-bold leading-[1.25] l:text-[40px] xl:mb-4 xl:text-[56px]">
            {hero.headline}
          </h1>
          <p className="mb-4 text-[16px] l:mb-6 xl:mb-8 xl:text-[20px] xl:font-medium">{hero.subhead}</p>
          <EmailForm variant="hero" />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-[2] h-[100px] overflow-hidden" aria-hidden="true">
        <div className="hero-curve" />
      </div>
    </section>
  );
}
