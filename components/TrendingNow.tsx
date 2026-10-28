"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { trending, type Title } from "@/lib/data";
import { containerClass, sectionGapClass, sectionTitleClass } from "@/lib/styles";
import { ChevronRightIcon } from "./icons";
import { TitleModal } from "./TitleModal";
import { usePrototype } from "./PrototypeProvider";

export function TrendingNow() {
  const listRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [selected, setSelected] = useState<Title | null>(null);
  const { notify } = usePrototype();

  const updateArrows = useCallback(() => {
    const el = listRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 1);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, [updateArrows]);

  const page = (direction: 1 | -1) => {
    const el = listRef.current;
    if (!el) return;
    const item = el.firstElementChild as HTMLElement | null;
    const itemWidth = item?.offsetWidth ?? el.clientWidth;
    const perPage = Math.max(1, Math.floor(el.clientWidth / itemWidth));
    el.scrollBy({ left: direction * perPage * itemWidth, behavior: "smooth" });
  };

  return (
    <section className={`${containerClass} ${sectionGapClass}`}>
      <h2 className={sectionTitleClass}>Trending Now</h2>
      <div className="relative mt-3 flex l:mt-4">
        {canPrev && <ArrowButton direction={-1} onClick={() => page(-1)} />}
        <ul
          ref={listRef}
          onScroll={updateArrows}
          className="no-scrollbar relative flex w-full overflow-x-auto overflow-y-hidden rounded-lg"
        >
          {trending.map((title) => (
            <li
              key={title.rank}
              className="flex w-[132px] shrink-0 px-2.5 py-[4.8px] l:w-[184px] l:px-[22px] l:py-[6.4px] xl:w-56 xl:py-2"
            >
              <button
                type="button"
                onClick={() => setSelected(title)}
                aria-label={`${title.rank}. ${title.name}`}
                className="relative w-full transition-transform duration-200 ease-in-out hover:scale-105"
              >
                <div className="relative aspect-[1/1.4] w-full rounded-lg bg-[#232323]">
                  <span
                    className="absolute inset-0 z-[2] rounded-lg bg-cover bg-center"
                    style={{ backgroundImage: `url("${title.poster}")` }}
                  />
                </div>
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-[-10px] z-[2] text-[64px] l:left-[-22px] l:text-[80px] xl:text-[100px]"
                >
                  <span className="relative">
                    <span className="rank-numeral" data-rank={title.rank}>
                      {title.rank}
                    </span>
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
        {canNext && <ArrowButton direction={1} onClick={() => page(1)} />}
      </div>

      <TitleModal
        title={selected}
        onClose={() => setSelected(null)}
        onGetStarted={() => {
          setSelected(null);
          notify("Prototype only — sign-up isn't available.");
        }}
      />
    </section>
  );
}

function ArrowButton({ direction, onClick }: { direction: 1 | -1; onClick: () => void }) {
  const isNext = direction === 1;
  return (
    <div
      className={`absolute inset-y-0 z-[3] flex w-9 items-center justify-center bg-black ${
        isNext ? "right-0 pl-3" : "left-0 pr-3"
      }`}
    >
      <button
        type="button"
        onClick={onClick}
        aria-label={isNext ? "Next" : "Previous"}
        className="flex h-[120px] w-6 items-center rounded-lg bg-white/10 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
      >
        <ChevronRightIcon className={isNext ? "" : "rotate-180"} />
      </button>
    </div>
  );
}
