import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Work from "./sections/Work";
import Contact from "./sections/Contact";
import { links } from "./data";

const nav = [
  { id: "about", n: "01", label: "About" },
  { id: "skills", n: "02", label: "Skills" },
  { id: "work", n: "03", label: "Work" },
  { id: "contact", n: "04", label: "Contact" },
];

function Rail() {
  return (
    <div className="fixed inset-y-0 left-0 z-40 hidden w-16 flex-col items-center justify-between border-r border-rule bg-paper py-5 lg:flex">
      <a
        href="#index"
        className="flex h-9 w-9 items-center justify-center border border-ink font-display text-[15px] font-bold leading-none transition-colors duration-200 hover:bg-ink hover:text-paper"
        aria-label="Back to top"
      >
        MO
      </a>

      <nav className="flex flex-col items-center gap-5">
        {nav.map((n) => (
          <a
            key={n.id}
            href={`#${n.id}`}
            className="font-mono text-[10px] tabular-nums tracking-[0.1em] text-muted transition-colors duration-200 hover:text-vermilion"
          >
            {n.n}
          </a>
        ))}
      </nav>

      <p className="label max-h-[55vh] rotate-180 overflow-hidden whitespace-nowrap text-muted [writing-mode:vertical-rl]">
        Matthew Oluwanifemi
      </p>
    </div>
  );
}

function Masthead({
  onCopy,
  dark,
  onToggle,
}: {
  onCopy: () => void;
  dark: boolean;
  onToggle: () => void;
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-rule bg-paper/95 backdrop-blur-[2px]">
      <div className="flex h-12 items-center justify-between gap-4 px-5 md:px-10 lg:px-14">
        <div className="label flex min-w-0 items-center gap-3 text-muted">
          <span className="h-2 w-2 shrink-0 rounded-full bg-vermilion" />
          <span className="truncate text-ink">Matthew Oluwanifemi</span>
          <span className="hidden shrink-0 sm:inline">— Portfolio</span>
        </div>

        <div className="flex shrink-0 items-center gap-5">
          <nav className="hidden items-center gap-5 md:flex">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="label border-b border-transparent pb-0.5 text-muted transition-colors duration-200 hover:border-vermilion hover:text-ink"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="label hidden border-b border-ink pb-0.5 text-ink transition-colors duration-200 hover:border-vermilion hover:text-vermilion sm:inline"
          >
            WumingdevGit
          </a>
          <button
            onClick={onCopy}
            className="label hidden border-b border-ink pb-0.5 text-ink transition-colors duration-200 hover:border-vermilion hover:text-vermilion sm:block"
          >
            Copy link
          </button>

          <button
            type="button"
            onClick={onToggle}
            aria-pressed={dark}
            aria-label={dark ? "Switch to day mode" : "Switch to night mode"}
            title="Day / night"
            className="group flex items-center gap-2 border border-rule px-2.5 py-1.5 transition-colors duration-300 hover:border-ink hover:bg-paper-2"
          >
            <motion.svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-3.5 w-3.5 text-vermilion"
              animate={{ rotate: dark ? 180 : 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <circle
                cx="12"
                cy="12"
                r="8.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <path d="M12 3.5a8.5 8.5 0 0 1 0 17z" fill="currentColor" />
            </motion.svg>
            <span className="label">{dark ? "Night" : "Day"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default function App() {
  const [toast, setToast] = useState<string | null>(null);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const [dark, setDark] = useState(
    () =>
      typeof document !== "undefined" &&
      document.documentElement.classList.contains("dark")
  );

  const onToggle = useCallback(() => {
    const root = document.documentElement;
    const next = !root.classList.contains("dark");
    root.classList.add("theme-anim");
    root.classList.toggle("dark", next);
    try {
      localStorage.setItem("mo-theme", next ? "dark" : "light");
    } catch {
      /* storage blocked — the mode still applies for this visit */
    }
    setDark(next);
    window.setTimeout(() => root.classList.remove("theme-anim"), 620);
  }, []);

  const onCopy = useCallback(async () => {
    const url = window.location.href;
    let ok = false;
    try {
      await navigator.clipboard.writeText(url);
      ok = true;
    } catch {
      try {
        const ta = document.createElement("textarea");
        ta.value = url;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        ok = document.execCommand("copy");
        document.body.removeChild(ta);
      } catch {
        ok = false;
      }
    }
    setToast(ok ? "Link copied to clipboard" : "Copy blocked — copy it from the address bar");
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setToast(null), 2600);
  }, []);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Rail />

      <div className="lg:pl-16">
        <Masthead onCopy={onCopy} dark={dark} onToggle={onToggle} />

        <main>
          <Hero onCopy={onCopy} />
          <About />
          <Work />
          <Contact />
        </main>

        <footer className="border-t border-ink px-5 py-7 md:px-10 lg:px-14">
          <div className="label flex flex-col gap-3 text-muted sm:flex-row sm:items-center sm:justify-between">
            <span>
              © Matthew Oluwanifemi — Frontend Developer · Last updated: 2026
            </span>
            <span className="text-ink">Built with React, Vite &amp; Tailwind CSS</span>
          </div>
        </footer>
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-5 left-5 z-50 flex items-center gap-3 border border-ink bg-ink px-4 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-paper shadow-[0_16px_40px_rgba(20,17,13,0.3)] lg:left-24"
          >
            <span className="h-2 w-2 rounded-full bg-vermilion" />
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
