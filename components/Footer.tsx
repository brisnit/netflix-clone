"use client";

import { footerLinks, footerPhone } from "@/lib/data";
import { containerClass, sectionGapClass } from "@/lib/styles";
import { EmailForm } from "./EmailForm";
import { LanguageSelect } from "./LanguageSelect";

const ignoreClick = (e: React.MouseEvent) => e.preventDefault();

export function Footer() {
  return (
    <>
      <div className={`${containerClass} ${sectionGapClass} pb-5`}>
        <EmailForm variant="footer" />
      </div>

      <footer className={`${containerClass} pb-24 text-white/70`}>
        <p className="p-[3px] text-[16px]">
          Questions? Call{" "}
          <a href="#" onClick={ignoreClick} className="rounded-[2px] underline">
            {footerPhone}
          </a>
        </p>

        <ul className="-ml-2 mr-1 mb-3.5 mt-[28px] flex flex-wrap text-[14px] leading-[21px]">
          {footerLinks.map((link) => (
            <li
              key={link}
              className="ml-3 mt-3 w-[calc(100%-12px)] m:w-[calc(50%-12px)] l:w-[calc(33.333%-12px)] xl:w-[calc(25%-12px)]"
            >
              <a href="#" onClick={ignoreClick} className="inline-block rounded-[2px] underline">
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-[54px] flex p-[3px]">
          <LanguageSelect />
        </div>

        <p className="mt-9 text-[13px] leading-[19.5px] text-white/50">
          Unofficial design prototype for demonstration only. Not affiliated with or endorsed by Netflix.
        </p>
      </footer>
    </>
  );
}
