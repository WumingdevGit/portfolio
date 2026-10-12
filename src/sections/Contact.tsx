import { motion, useReducedMotion } from "framer-motion";
import { links } from "../data";
import { media } from "../media";

const actions = [
  { label: "Email Me", href: `${links.email}?subject=Frontend%20Developer%20Opportunity`, mail: true },
  { label: "GitHub", href: links.github },
  { label: "LinkedIn", href: links.linkedin },
  { label: "Download CV", href: links.cv },
];

export default function Contact() {
  const reduce = useReducedMotion();

  const rows = [
    { k: "Email", v: links.email, href: `mailto:${links.email}` },
    { k: "Location", v: "Nigeria" },
    { k: "Available for", v: "Frontend Development / Freelance" },
  ];

  return (
    <section id="contact" className="relative mt-20 overflow-hidden bg-ink text-paper">
      <img
        src={media.band}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-45 mix-blend-luminosity"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/95 to-ink/85" />
      <div className="absolute inset-x-0 top-0 h-px bg-paper/25" />

      <div className="relative px-5 py-16 md:px-10 md:py-20 lg:px-14">
        <div className="grid gap-y-12 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-7">
            <p className="label text-vermilion">§04 — Contact</p>
            <motion.h2
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 max-w-[12ch] font-display text-[clamp(2.5rem,7vw,5.5rem)] font-black uppercase leading-[0.88] tracking-[-0.03em]"
            >
              Let's work together
            </motion.h2>
            <p className="mt-6 max-w-[58ch] text-[1.0625rem] leading-[1.7] text-paper/80">
              I'm available for frontend development, UI implementation, and freelance
              projects. Send a message and I'll get back within 2 business days.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {actions.map((a) => (
                <a
                  key={a.label}
                  href={a.mail ? `mailto:${a.href}` : a.href}
                  target={a.mail ? undefined : "_blank"}
                  rel={a.mail ? undefined : "noopener noreferrer"}
                  className="group inline-flex items-center gap-3 border border-paper/40 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-paper transition-colors duration-200 hover:border-paper hover:bg-paper hover:text-ink"
                >
                  {a.label}
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <div className="border-t border-paper/25 pt-6">
              <h3 className="font-display text-2xl font-bold">Contact</h3>
              <dl className="mt-5">
                {rows.map((r) => (
                  <div
                    key={r.k}
                    className="flex flex-col gap-1 border-b border-paper/15 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                  >
                    <dt className="label text-paper/70">{r.k}</dt>
                    <dd className="break-words text-right text-[0.95rem] font-medium text-paper">
                      {r.href ? (
                        <a
                          href={r.href}
                          className="border-b border-vermilion pb-0.5 transition-opacity hover:opacity-70"
                        >
                          {r.v}
                        </a>
                      ) : (
                        r.v
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
              <a
                href="cv.html"
                className="mt-6 inline-flex items-center gap-3 border border-paper/40 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors duration-200 hover:bg-paper hover:text-ink"
              >
                Download CV
                <span>↓</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
