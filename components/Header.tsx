"use client";

import { containerClass } from "@/lib/styles";
import { NetflixLogo } from "./icons";
import { LanguageSelect } from "./LanguageSelect";
import { usePrototype } from "./PrototypeProvider";

export function Header() {
  const { openSignIn } = usePrototype();

  return (
    <header className={`${containerClass} absolute inset-x-0 top-0 z-10`}>
      <div className="flex h-20 items-center justify-between xl:h-[88px]">
        <a href="#" aria-label="Netflix" onClick={(e) => e.preventDefault()} className="shrink-0">
          <NetflixLogo className="h-6 w-[89px] l:h-10 l:w-[148px]" />
        </a>
        <div className="flex items-center gap-3 p-[3px]">
          <LanguageSelect compact />
          <button
            type="button"
            onClick={openSignIn}
            className="nf-ease relative flex min-h-8 items-center justify-center rounded-[4px] bg-nf-red px-4 py-1 text-[14px] font-medium leading-[14px] text-white hover:bg-nf-red-hover"
          >
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}
