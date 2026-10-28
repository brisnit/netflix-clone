"use client";

import { useId, useState } from "react";
import { CircleX } from "lucide-react";
import { hero } from "@/lib/data";
import { ChevronRightIcon } from "./icons";
import { usePrototype } from "./PrototypeProvider";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Email capture used in the hero and above the footer.
 * Purely local: submit is always prevented and the value is never stored or sent.
 */
export function EmailForm({ variant }: { variant: "hero" | "footer" }) {
  const id = useId();
  const { notify } = usePrototype();
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  const validate = (value: string) => {
    if (!value.trim()) return "Email is required.";
    if (!EMAIL_PATTERN.test(value.trim())) return "Please enter a valid email address.";
    return null;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = validate(email);
    setError(message);
    if (!message) notify("Prototype only — no account was created and nothing was sent.");
  };

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      aria-label="Sign up or restart your membership with Netflix."
      className={`flex flex-col ${variant === "footer" ? "mx-auto w-full l:max-w-[643px] xl:max-w-[783px]" : ""}`}
    >
      <h3 className={`text-[16px] leading-6 ${variant === "footer" ? "text-left m:text-center" : "text-center"}`}>
        {hero.ctaPrompt}
      </h3>
      <div
        className={`flex flex-col pt-4 m:flex-row m:items-start ${variant === "hero" ? "items-center" : "items-start"}`}
      >
        <div className="w-full m:flex-1">
          <div className="relative isolate h-12 w-full m:h-14">
            <input
              id={id}
              type="email"
              name="email"
              autoComplete="email"
              placeholder=" "
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError(validate(e.target.value));
              }}
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? `${id}-error` : undefined}
              className="peer h-full w-full rounded-[4px] bg-transparent px-4 pb-1 pt-5 text-[16px] leading-6 text-white outline-none m:pb-2 m:pt-6"
            />
            <label
              htmlFor={id}
              className="pointer-events-none absolute inset-x-4 top-1/2 -translate-y-1/2 truncate text-left text-[16px] leading-6 text-white/70 transition-all duration-200 peer-focus:top-1 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:leading-[1.5] peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:leading-[1.5] m:peer-focus:top-2 m:peer-[:not(:placeholder-shown)]:top-2"
            >
              Email address
            </label>
            <div
              aria-hidden="true"
              className={`pointer-events-none absolute inset-0 -z-10 rounded-[4px] border bg-[rgba(22,22,22,0.7)] peer-focus:outline-2 peer-focus:outline-offset-2 peer-focus:outline-white ${
                error ? "border-[rgb(235,57,66)]" : "border-[rgba(128,128,128,0.7)]"
              }`}
            />
          </div>
          {error && (
            <p
              id={`${id}-error`}
              className="mt-1.5 flex items-center gap-1 text-left text-[13px] text-[rgb(235,57,66)]"
            >
              <CircleX size={16} aria-hidden="true" />
              {error}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="nf-ease relative mt-4 flex min-h-12 shrink-0 items-center justify-center whitespace-nowrap rounded-[4px] bg-nf-red px-4 text-[18px] font-medium leading-6 text-white hover:bg-nf-red-hover m:ml-2 m:mt-0 m:min-h-14 m:px-6 xl:text-[24px]"
        >
          Get Started
          <ChevronRightIcon className="ml-2 m:ml-3" />
        </button>
      </div>
    </form>
  );
}
