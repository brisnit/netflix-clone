"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { SignInModal } from "./SignInModal";

type PrototypeContextValue = {
  language: string;
  setLanguage: (value: string) => void;
  notify: (message: string) => void;
  openSignIn: () => void;
};

const PrototypeContext = createContext<PrototypeContextValue | null>(null);

export function usePrototype() {
  const ctx = useContext(PrototypeContext);
  if (!ctx) throw new Error("usePrototype must be used inside <PrototypeProvider>");
  return ctx;
}

/** Holds local-only UI state. Nothing here is persisted or sent anywhere. */
export function PrototypeProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState("en-US");
  const [toast, setToast] = useState<string | null>(null);
  const [signInOpen, setSignInOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const notify = useCallback((message: string) => {
    setToast(message);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(null), 3200);
  }, []);

  useEffect(() => () => clearTimeout(timer.current), []);

  useEffect(() => {
    document.documentElement.lang = language.slice(0, 2);
  }, [language]);

  return (
    <PrototypeContext.Provider
      value={{ language, setLanguage, notify, openSignIn: () => setSignInOpen(true) }}
    >
      {children}
      <SignInModal open={signInOpen} onClose={() => setSignInOpen(false)} />
      <div
        role="status"
        aria-live="polite"
        className="pointer-events-none fixed inset-x-0 bottom-6 z-[1100] flex justify-center px-6"
      >
        {toast && (
          <div className="rounded-[4px] border border-[rgba(128,128,128,0.4)] bg-nf-modal px-4 py-3 text-sm text-white shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
            {toast}
          </div>
        )}
      </div>
    </PrototypeContext.Provider>
  );
}
