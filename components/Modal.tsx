"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  label: string;
  children: React.ReactNode;
};

/** Dialog chrome matching Netflix's title-modal: #161616 panel, 669px max, sticky round close button. */
export function Modal({ open, onClose, label, children }: ModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKey);
      previous?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={label}
        className="relative flex max-h-full w-full max-w-[669px] overflow-y-auto rounded-lg border border-[rgba(128,128,128,0.4)] bg-nf-modal text-white/70 shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
      >
        <div className="absolute right-0 top-0 z-10 px-4">
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="my-4 inline-flex size-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
          >
            <X size={24} strokeWidth={1.75} />
          </button>
        </div>
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
