"use client";

import { useId } from "react";
import { languages } from "@/lib/data";
import { CaretDownIcon, LanguageIcon } from "./icons";
import { usePrototype } from "./PrototypeProvider";

/**
 * Native <select> over a styled chrome layer, as Netflix does.
 * `compact` collapses to icon + caret below 600px (header only).
 */
export function LanguageSelect({ compact = false }: { compact?: boolean }) {
  const id = useId();
  const { language, setLanguage } = usePrototype();

  return (
    <div className="relative isolate inline-flex h-8">
      <label htmlFor={id} className="sr-only">
        Select Language
      </label>
      <LanguageIcon className="pointer-events-none absolute left-3 top-2 z-[1] text-white" />
      <select
        id={id}
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className={`h-8 cursor-pointer appearance-none bg-transparent py-1.5 pl-[34px] pr-9 text-[16px] leading-5 text-white outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
          compact ? "w-[62px] text-transparent m:w-auto m:text-white" : ""
        }`}
      >
        {languages.map((l) => (
          <option key={l.value} value={l.value} lang={l.value.slice(0, 2)} className="bg-white text-black">
            {l.label}
          </option>
        ))}
      </select>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-end rounded-[4px] border border-[rgba(128,128,128,0.7)] bg-[rgba(22,22,22,0.7)] pr-3 pt-0.5"
      >
        <CaretDownIcon className="text-white" />
      </div>
    </div>
  );
}
