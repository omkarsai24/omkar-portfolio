import {
  BookOpen,
  Crosshair,
  GraduationCap,
  Hammer,
  Repeat,
  Target,
  Wrench,
} from 'lucide-react';
import { aboutCards, principles } from '../data/portfolio';
import { Container, Reveal, SectionHeading } from './ui/Section';

const CARD_ICONS = [GraduationCap, Crosshair, Wrench];
const PRINCIPLE_ICONS = [Hammer, BookOpen, Repeat, Target];

export default function About() {
  return (
    <Container id="about" className="py-24 sm:py-32">
      <SectionHeading index="01" label="ABOUT" title="A developer who likes building things." />

      <Reveal delay={0.1}>
        <div className="mt-10 max-w-3xl space-y-5 leading-relaxed text-muted">
          <p>
            I'm Omkar — a computer science student and software developer who enjoys turning ideas
            into working software. Instead of stopping at tutorials, I focus on building complete
            applications: web apps, desktop tools, backend systems and developer utilities.
          </p>
          <p>
            Right now I'm going deep into full-stack development with TypeScript, building a desktop
            collaboration platform with Electron, and exploring how AI can make developers more
            productive. I care about how systems work, not just how to use them.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        {aboutCards.map((card, i) => {
          const Icon = CARD_ICONS[i];
          return (
            <Reveal key={card.label} delay={0.1 + i * 0.08}>
              <div className="glow-card h-full rounded-2xl border border-line bg-surface/60 p-6">
                <Icon size={22} className="text-cyan" aria-hidden="true" />
                <p className="mt-5 font-mono text-[11px] tracking-[0.25em] text-muted">{card.label}</p>
                <h3 className="mt-2 font-semibold text-ink">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{card.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-24">
        <h3 className="text-center text-2xl font-bold sm:text-3xl">
          Build. Break. Learn. <span className="text-gradient">Improve.</span>
        </h3>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {principles.map((p, i) => {
          const Icon = PRINCIPLE_ICONS[i];
          return (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-line bg-surface/40 p-6 text-center">
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <h4 className="mt-4 font-mono text-sm font-semibold tracking-widest">{p.title}</h4>
                <p className="mt-2 text-sm text-muted">{p.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Container>
  );
}
