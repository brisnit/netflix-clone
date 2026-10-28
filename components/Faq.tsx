"use client";

import { useId, useState } from "react";
import { faqs } from "@/lib/data";
import { containerClass, sectionGapClass, sectionTitleClass } from "@/lib/styles";
import { PlusIcon } from "./icons";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();

  return (
    <section className={`${containerClass} ${sectionGapClass}`}>
      <h2 className={sectionTitleClass}>Frequently Asked Questions</h2>
      <ul className="mt-4 flex flex-col">
        {faqs.map((faq, i) => {
          const open = openIndex === i;
          const buttonId = `${baseId}-q-${i}`;
          const panelId = `${baseId}-a-${i}`;
          return (
            <li key={faq.question} className="mb-2">
              <h3 className="nf-ease flex bg-nf-gray text-[18px] hover:bg-nf-gray-hover l:text-[24px]">
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  {faq.question}
                  <span className="ml-3 flex shrink-0">
                    <PlusIcon
                      size={24}
                      className={`transition-transform duration-[250ms] l:hidden ${open ? "rotate-45" : ""}`}
                    />
                    <PlusIcon
                      size={36}
                      className={`hidden transition-transform duration-[250ms] l:block ${open ? "rotate-45" : ""}`}
                    />
                  </span>
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={`grid bg-nf-gray text-[18px] transition-[grid-template-rows] duration-[250ms] ease-[cubic-bezier(0.32,0.94,0.6,1)] l:text-[24px] ${
                  open ? "mt-px grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden" inert={!open}>
                  <div className="p-6">
                    {faq.answer.map((paragraph, j) => (
                      <span key={j}>
                        {j > 0 && (
                          <>
                            <br />
                            <br />
                          </>
                        )}
                        {paragraph}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
