import {
  Braces,
  Code2,
  Database,
  Layout,
  Monitor,
  Server,
  Sparkles,
  Wrench,
} from 'lucide-react';
import { skillGroups } from '../data/portfolio';
import { Container, Reveal, SectionHeading } from './ui/Section';

const GROUP_ICONS = [Braces, Layout, Server, Database, Monitor, Wrench, Sparkles];

export default function Skills() {
  return (
    <Container id="skills" className="py-24 sm:py-32">
      <SectionHeading index="02" label="TECHNICAL STACK" title="Tools I use to build." />

      <div className="mt-14 space-y-12">
        {skillGroups.map((group, gi) => {
          const Icon = GROUP_ICONS[gi] ?? Code2;
          return (
            <Reveal key={group.category}>
              <div className="flex items-center gap-3">
                <Icon size={18} className="text-cyan" aria-hidden="true" />
                <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-muted">
                  {group.category}
                </h3>
                <span className="h-px flex-1 bg-line" aria-hidden="true" />
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="glow-card group rounded-xl border border-line bg-surface/60 p-5"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-ink">{skill.name}</h4>
                      <Code2
                        size={16}
                        className="text-muted transition-colors group-hover:text-cyan"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="mt-1.5 font-mono text-[11px] uppercase tracking-widest text-muted/70">
                      {group.category}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{skill.description}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          );
        })}
      </div>
    </Container>
  );
}
