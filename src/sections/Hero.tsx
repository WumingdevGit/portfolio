import { motion, useReducedMotion } from "framer-motion";
import { skills } from "../data";
import { media } from "../media";

function RegMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`h-4 w-4 text-vermilion ${className}`}
    >
      <path d="M12 0v9M12 15v9M0 12h9M15 12h9" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export default function Hero({ onCopy }: { onCopy: () => void }) {
  const reduce = useReducedMotion();
  const line = (i: number) => ({
    initial: reduce ? { y: 0 } : { y: "112%" },
    animate: { y: 0 },
    transition: { duration: 0.95, delay: 0.08 + i * 0.12, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section id="index" className="px-5 pt-8 md:px-10 md:pt-12 lg:px-14">
      <div className="label flex items-center justify-between border-b border-rule pb-3 text-muted">
        <span>§00 — Index</span>
        <span className="hidden sm:inline">Portfolio folio / 2026</span>
        <span className="text-vermilion">Open to work</span>
      </div>

      <h1 className="mt-7 font-display text-[clamp(2.75rem,12vw,10rem)] font-black uppercase leading-[0.82] tracking-[-0.035em]">
        <span className="block overflow-hidden pb-[0.04em]">
          <motion.span className="block" {...line(0)}>
            Matthew
          </motion.span>
        </span>
        <span className="block overflow-hidden pb-[0.06em] text-indigo">
          <motion.span className="block" {...line(1)}>
            Oluwanifemi
          </motion.span>
        </span>
      </h1>

      <div className="mt-8 grid gap-y-10 border-t border-rule pt-7 lg:grid-cols-12 lg:gap-x-10">
        <div className="lg:col-span-6 xl:col-span-5">
          <p className="max-w-[22ch] text-[clamp(1.15rem,2.2vw,1.6rem)] font-semibold uppercase leading-[1.25] tracking-[0.02em]">
            Frontend Developer <span className="text-vermilion">—</span> HTML · CSS ·
            JavaScript · React
          </p>

          <div className="mt-7 border-t border-rule pt-4">
            <p className="label text-muted">Disciplines</p>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[12px] uppercase tracking-[0.12em] text-ink-2">
              {skills.map((s) => (
                <li key={s.name} className="flex items-center gap-2">
                  <span className="h-[3px] w-[3px] bg-vermilion" />
                  {s.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <button
              onClick={onCopy}
              className="group inline-flex items-center gap-3 border border-ink bg-ink px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-paper transition-colors duration-200 hover:bg-indigo hover:border-indigo"
            >
              Copy link
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </button>
            <a
              href="cv.html"
              className="inline-flex items-center gap-3 border border-ink/30 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink transition-colors duration-200 hover:border-ink hover:bg-paper-2"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="relative lg:col-span-6 lg:col-start-7">
          <div className="relative lg:-mr-14">
            <div className="absolute -left-3 -top-3 z-10 hidden md:block">
              <RegMark />
            </div>
            <div className="absolute -bottom-3 -right-3 z-10 hidden md:block">
              <RegMark />
            </div>
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-indigo sm:aspect-[16/10] lg:aspect-[4/5]">
              <img
                src={media.avatar}
                alt="Matthew Oluwanifemi"
                className="h-full w-full object-cover object-[50%_28%] opacity-95 mix-blend-luminosity"
                loading="eager"
              />
              <div className="absolute inset-0 bg-indigo/15 mix-blend-multiply" />
              {/* fixed black scrim: reads correctly on the plate in both modes */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>
          <p className="label mt-3 flex flex-wrap justify-between gap-2 text-muted">
            <span>Plate 00 — Matthew Oluwanifemi</span>
            <span className="text-ink">Frontend Developer</span>
          </p>
        </div>
      </div>
    </section>
  );
}
