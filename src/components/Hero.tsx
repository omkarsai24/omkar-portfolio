import { useEffect, useMemo, useState } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { site } from '../config/site';

const TERM_LINES = [
  { kind: 'cmd', text: 'whoami' },
  { kind: 'out', text: 'omkar — software developer' },
  { kind: 'cmd', text: './start --mode build' },
  { kind: 'out', text: '> building software that solves real problems' },
  { kind: 'out', text: '> learning continuously' },
  { kind: 'out', text: '> exploring AI + developer tools' },
  { kind: 'ok', text: 'status: ONLINE' },
] as const;

function Terminal() {
  const reduce = useReducedMotion();
  const [tick, setTick] = useState(0);
  const total = useMemo(
    () => TERM_LINES.reduce((sum, line) => sum + line.text.length + 4, 0),
    []
  );

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setTick((t) => (t >= total + 80 ? 0 : t + 1));
    }, 40);
    return () => window.clearInterval(id);
  }, [reduce, total]);

  let budget = tick;
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden rounded-2xl border border-line bg-surface/90 shadow-xl shadow-stone-900/10 backdrop-blur"
    >
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-muted">omkar@dev: ~/portfolio</span>
      </div>
      <div className="min-h-[240px] p-5 font-mono text-[13px] leading-7">
        {TERM_LINES.map((line, i) => {
          const start = budget;
          const visible = reduce
            ? line.text.length
            : Math.max(0, Math.min(line.text.length, start));
          budget = start - line.text.length - 4;
          const typing = !reduce && start >= 0 && visible < line.text.length;
          return (
            <p
              key={i}
              className={
                line.kind === 'cmd' ? 'text-ink' : line.kind === 'ok' ? 'text-success' : 'text-muted'
              }
            >
              {line.kind === 'cmd' && <span className="mr-2 text-cyan">$</span>}
              {line.kind === 'ok' && <span className="mr-2">✓</span>}
              <span>{line.text.slice(0, visible)}</span>
              {typing && <span className="animate-blink text-cyan">▌</span>}
            </p>
          );
        })}
      </div>
    </div>
  );
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const SOCIALS = [
  { href: site.github, label: 'GitHub', Icon: Github },
  { href: site.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { href: `mailto:${site.email}`, label: 'Email', Icon: Mail },
];

export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-40 h-[300px] w-[300px] rounded-full bg-cyan/10 blur-[100px]"
      />

      <motion.div
        variants={container}
        initial={reduce ? false : 'hidden'}
        animate="show"
        className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2"
      >
        <div>
          <motion.p
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-2 font-mono text-xs tracking-widest text-muted"
          >
            <span className="animate-pulse-dot h-2 w-2 rounded-full bg-success" aria-hidden="true" />
            AVAILABLE FOR OPPORTUNITIES
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-8 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Building <span className="text-gradient">software</span> that solves real problems.
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Software developer exploring full-stack engineering, desktop applications, developer
            tools, AI and modern software architecture.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-indigo-500 hover:shadow-[0_0_30px_-8px_rgba(99,102,241,0.7)]"
            >
              View My Work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href={site.resume}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-6 py-3 text-sm font-semibold transition-colors hover:border-accent/50"
            >
              <Download size={16} aria-hidden="true" /> Download Resume
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-3">
            {SOCIALS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                className="rounded-lg border border-line bg-surface p-2.5 text-muted transition-colors hover:border-accent/50 hover:text-ink"
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div variants={item}>
          <Terminal />
        </motion.div>
      </motion.div>
    </section>
  );
}
