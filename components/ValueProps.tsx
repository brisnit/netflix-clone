import { valueProps } from "@/lib/data";
import { containerClass, sectionGapClass, sectionTitleClass } from "@/lib/styles";

export function ValueProps() {
  return (
    <section className={`${containerClass} ${sectionGapClass}`}>
      <h2 className={sectionTitleClass}>More Reasons to Join</h2>
      <div className="mt-3 grid grid-cols-1 gap-2 l:mt-4 l:grid-cols-2 l:gap-3 xl:grid-cols-4 xl:gap-4">
        {valueProps.map((prop) => (
          <div key={prop.title} className="value-prop-card relative overflow-hidden rounded-2xl">
            <div className="flex flex-col gap-2 px-4 pb-20 pt-6 m:pb-24 l:gap-3 l:px-6 xl:gap-4 xl:px-4 xl:pb-32">
              <h3 className="text-[20px] font-medium xl:text-[24px]">{prop.title}</h3>
              <p className="text-[16px] text-white/70">{prop.body}</p>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={prop.icon}
              alt=""
              aria-hidden="true"
              className="absolute bottom-2 right-1 size-[63px] l:bottom-3 l:right-2 l:size-[72px] xl:bottom-4 xl:right-3"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
