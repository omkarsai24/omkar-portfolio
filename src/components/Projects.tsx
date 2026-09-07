import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { projects, type ProjectCategory } from '../data/portfolio';
import { Container, Reveal, SectionHeading } from './ui/Section';

const FILTERS: { key: 'all' | ProjectCategory; label: string }[] = [
  { key: 'all', label: 'ALL' },
  { key: 'web', label: 'WEB' },
  { key: 'desktop', label: 'DESKTOP' },
  { key: 'backend', label: 'BACKEND' },
  { key: 'ai', label: 'AI' },
  { key: 'systems', label: 'SYSTEMS' },
];

const SYMBOLS: Record<ProjectCategory, string> = {
  web: '</>',
  desktop: '▣',
  backend: '{}',
  ai: '✦',
  systems: '$_',
};

export default function Projects() {
  const [filter, setFilter] = useState<'all' | ProjectCategory>('all');
  const visible = projects.filter((p) => filter === 'all' || p.category === filter);

  return (
    <Container className="pb-24 pt-6 sm:pb-32">
      <SectionHeading index="05" label="PROJECTS" title="More things I'm building." />

      <Reveal delay={0.1} className="mt-8">
        <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              aria-pressed={filter === f.key}
              className={`rounded-full border px-4 py-2 font-mono text-xs transition-colors ${
                filter === f.key
                  ? 'border-accent bg-accent/15 text-ink'
                  : 'border-line bg-surface text-muted hover:border-accent/40 hover:text-ink'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </Reveal>

      <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => {
            const number = String(projects.indexOf(project) + 1).padStart(2, '0');
            return (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="glow-card group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface/60"
              >
                <div className="relative flex h-36 items-center justify-center overflow-hidden border-b border-line bg-gradient-to-br from-accent/10 via-transparent to-cyan/10">
                  <span
                    aria-hidden="true"
                    className="font-mono text-4xl text-muted/40 transition-transform duration-500 group-hover:scale-125"
                  >
                    {SYMBOLS[project.category]}
                  </span>
                  <span className="absolute left-4 top-4 font-mono text-xs text-muted">{number}</span>
                  <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-line bg-bg/70 px-2.5 py-1 font-mono text-[10px] text-muted">
                    <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
                    {project.status}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold text-ink transition-colors group-hover:text-cyan">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[10px] text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} source code on GitHub`}
                        className="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
                      >
                        <Github size={15} aria-hidden="true" /> Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} live demo`}
                        className="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
                      >
                        Live
                        <ArrowUpRight
                          size={15}
                          className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </Container>
  );
}
