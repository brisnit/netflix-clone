"use client";

import { Modal } from "./Modal";
import { ChevronRightIcon } from "./icons";
import type { Title } from "@/lib/data";

export function TitleModal({
  title,
  onClose,
  onGetStarted,
}: {
  title: Title | null;
  onClose: () => void;
  onGetStarted: () => void;
}) {
  return (
    <Modal open={title !== null} onClose={onClose} label={title?.name ?? "Title preview"}>
      {title && (
        <>
          {/* 16:9 artwork with logo overlay */}
          <div className="relative pb-[56.25%]">
            <div
              className="absolute inset-0 bg-cover bg-[50%_0%] bg-no-repeat"
              style={{ backgroundImage: `url("${title.backdrop}")` }}
            />
            <div className="title-modal-shade absolute inset-0" />
            <div className="absolute inset-x-4 bottom-0 m:inset-x-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={title.logo} alt={title.name} className="max-w-[70%] m:max-w-[60%]" />
            </div>
          </div>

          <div className="px-4 pb-6 pt-4 m:px-10 m:pb-10">
            <ul className="mb-4 flex flex-wrap gap-2 m:mb-3">
              {title.tags.map((tag) => (
                <li key={tag}>
                  <span className="flex items-center justify-center rounded-[2px] bg-nf-gray-hover px-1 py-[3px] text-[10px] font-medium leading-[10px] text-white/70 m:rounded-[4px] m:text-[14px] m:leading-[21px]">
                    {tag}
                  </span>
                </li>
              ))}
            </ul>
            <p className="pt-4 text-[14px] text-white m:text-[16px]">{title.synopsis}</p>

            <div className="pt-6 m:pt-10">
              <button
                type="button"
                onClick={onGetStarted}
                className="nf-ease inline-flex min-h-10 w-full items-center justify-center rounded-[4px] bg-nf-red px-4 py-1.5 font-medium leading-4 text-white hover:bg-nf-red-hover m:min-h-12 m:w-auto m:py-2 m:text-[18px] m:leading-[18px]"
              >
                Get Started
                <ChevronRightIcon className="ml-2" />
              </button>
            </div>
          </div>
        </>
      )}
    </Modal>
  );
}
