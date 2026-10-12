import { motion, useReducedMotion } from "framer-motion";
import { skills } from "../data";

export default function About() {
  const reduce = useReducedMotion();
  const rise = {
    initial: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  };

  return (
    <>
      <section id="about" className="mt-20 border-t border-ink px-5 md:px-10 lg:px-14">
        <div className="grid gap-y-10 py-8 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-2">
            <p className="label sticky top-16 text-vermilion">§01 — About</p>
          </div>

          <motion.div className="lg:col-span-6" {...rise}>
            <h2 className="font-display text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1] tracking-[-0.02em]">
              About me
            </h2>
            <p className="mt-5 max-w-[60ch] text-[1.0625rem] leading-[1.75] text-ink-2 first-letter:float-left first-letter:mr-3 first-letter:mt-[0.1em] first-letter:font-display first-letter:text-[4.25rem] first-letter:leading-[0.72] first-letter:font-black first-letter:text-indigo md:text-[1.125rem]">
              I build clean, responsive user interfaces with attention to accessibility
              and performance. I enjoy turning designs into functional webpages and
              creating delightful user experiences.
            </p>
          </motion.div>

          <motion.div className="lg:col-span-4" {...rise}>
            <div className="border-t border-rule pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <h3 className="font-display text-2xl font-bold">Quick bio</h3>
              <p className="mt-3 max-w-[46ch] text-[1rem] leading-[1.7] text-muted">
                I focus on building accessible, performant interfaces and enjoy working
                on projects that solve real user problems. Comfortable with modern
                workflows and version control.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="skills" className="px-5 md:px-10 lg:px-14">
        <div className="grid gap-y-6 border-t border-ink py-8 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-2">
            <p className="label text-vermilion">§02 — Skills</p>
          </div>

          <div className="lg:col-span-10">
            <h2 className="font-display text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1] tracking-[-0.02em]">
              Skills
            </h2>
            <ul className="mt-6">
              {skills.map((s, i) => (
                <motion.li
                  key={s.name}
                  initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex flex-wrap items-baseline gap-x-4 gap-y-1 border-t border-rule py-4 first:border-t-0 md:py-5"
                >
                  <span className="w-8 font-mono text-[11px] tabular-nums text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-[clamp(1.5rem,3.6vw,2.5rem)] font-bold leading-none tracking-[-0.02em] transition-colors duration-200 group-hover:text-indigo">
                    {s.name}
                  </span>
                  <span className="hidden h-0 flex-1 translate-y-[-0.15em] border-b border-dotted border-rule sm:block" />
                  <span className="label w-full text-muted sm:w-auto sm:text-right">
                    {s.note}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
