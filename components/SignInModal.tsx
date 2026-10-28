"use client";

import { Modal } from "./Modal";
import { NetflixLogo } from "./icons";

export function SignInModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Modal open={open} onClose={onClose} label="Sign In">
      <div className="px-4 pb-6 pt-8 m:px-10 m:pb-10">
        <NetflixLogo className="h-6 w-[89px]" />
        <h2 className="mt-6 text-[24px] font-bold text-white m:text-[32px]">Sign In</h2>
        <p className="mt-4 text-[16px] text-white">
          This is a design prototype, so signing in is turned off.
        </p>
        <p className="mt-2 text-sm">
          No account is created, and nothing you type on this page is stored or sent anywhere.
        </p>
        <button
          type="button"
          onClick={onClose}
          className="nf-ease mt-8 inline-flex min-h-10 items-center justify-center rounded-[4px] bg-nf-red px-4 py-1.5 font-medium leading-4 text-white hover:bg-nf-red-hover"
        >
          Got it
        </button>
      </div>
    </Modal>
  );
}
