import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { projects } from "../data";

export default function Work() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);
  const [overLink, setOverLink] = useState(false);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 260, damping: 30, mass: 0.6 });
  const y = useSpring(my, { stiffness: 260, damping: 30, mass: 0.6 });

  const canHover =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const showPreview = canHover && !reduce && active !== null && !overLink;

  return (
    <section
      id="work"
      className="mt-16 border-t border-ink px-5 md:px-10 lg:px-14"
      onMouseLeave={() => {
        setActive(null);
        setOverLink(false);
      }}
    >
      <div className="grid gap-y-6 py-8 lg:grid-cols-12 lg:gap-x-10">
        <div className="lg:col-span-2">
          <p className="label text-vermilion">§03 — Selected work</p>
        </div>
        <div className="lg:col-span-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1] tracking-[-0.02em]">
              Projects
            </h2>
            <p className="label text-muted">
              {String(projects.length).padStart(2, "0")} entries · live sites &amp; source
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-ink">
        {projects.map((p, i) => (
          <motion.article
            key={p.id}
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setActive(i)}
            onMouseMove={(e) => {
              const flip = e.clientX > window.innerWidth / 2;
              mx.set(flip ? e.clientX - 416 - 28 : e.clientX + 28);
              my.set(Math.max(8, e.clientY - 140));
            }}
            onFocus={() => setActive(i)}
            onBlur={() => setActive(null)}
            className="group block border-b border-rule py-8 transition-colors duration-300 hover:bg-paper-2/60 md:py-10"
          >
            <div className="flex flex-col gap-6 md:flex-row md:gap-10">
              <div className="flex items-start gap-4 md:w-40 md:shrink-0">
                <span className="font-mono text-[11px] tabular-nums text-vermilion">
                  {p.id}
                </span>
                <span className="label text-muted md:leading-[1.6]">
                  {p.plate.split("—")[0]}
                </span>
              </div>

              <div className="flex-1">
                <h3 className="max-w-[24ch] font-display text-[clamp(1.75rem,4.4vw,3.25rem)] font-bold leading-[1.02] tracking-[-0.025em] transition-transform duration-300 group-hover:translate-x-2 group-hover:text-indigo">
                  {p.title}
                </h3>
                <p className="mt-4 max-w-[64ch] text-[1rem] leading-[1.7] text-ink-2">
                  {p.description}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setOverLink(true)}
                    onMouseLeave={() => setOverLink(false)}
                    className="inline-flex items-center gap-2 border-b border-vermilion pb-1 font-mono text-[11px] uppercase tracking-[0.2em] text-ink hover:text-vermilion"
                  >
                    View live project
                    <span aria-hidden="true">→</span>
                  </a>
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setOverLink(true)}
                    onMouseLeave={() => setOverLink(false)}
                    className="inline-flex items-center gap-2 border-b border-ink/40 pb-1 font-mono text-[11px] uppercase tracking-[0.2em] text-ink hover:border-vermilion hover:text-vermilion"
                  >
                    GitHub
                    <span aria-hidden="true">↗</span>
                  </a>
                  {p.tags.map((t) => (
                    <span key={t} className="label text-muted">
                      {t}
                    </span>
                  ))}
                </div>

                <img
                  src={p.image}
                  alt=""
                  className="mt-6 h-44 w-full object-cover md:hidden"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {showPreview && active !== null && (
          <motion.div
            key="preview"
            style={{ x, y }}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none fixed left-0 top-0 z-50 hidden lg:block"
            aria-hidden="true"
          >
            <div>
              <div className="w-[26rem] border-4 border-paper bg-paper shadow-[0_24px_60px_rgba(20,17,13,0.35)]">
                <img
                  src={projects[active].image}
                  alt=""
                  className="h-[15rem] w-full object-cover"
                />
                <p className="label flex items-center justify-between px-3 py-2 text-muted">
                  <span>{projects[active].plate}</span>
                  <span className="text-vermilion">{projects[active].id}</span>
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}