import { motion, useReducedMotion } from 'framer-motion';
import { journey } from '../data/portfolio';
import { Container, Reveal, SectionHeading } from './ui/Section';

export default function Journey() {
  const reduce = useReducedMotion();
  return (
    <Container id="journey" className="py-24 sm:py-32">
      <SectionHeading
        index="03"
        label="JOURNEY"
        title="Learning by building."
        description="A timeline of technologies and ideas I'm exploring — each step tied to something I've built or am building."
      />

      <div className="relative mt-16 max-w-3xl">
        <motion.span
          aria-hidden="true"
          className="absolute left-[7px] top-1 h-full w-px origin-top bg-gradient-to-b from-accent via-cyan/50 to-transparent"
          initial={reduce ? false : { scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
        <ol className="space-y-10">
          {journey.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <li className="relative pl-10">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-accent bg-bg"
                />
                <p className="font-mono text-xs text-cyan">{item.period ?? '—'}</p>
                <h3 className="mt-1.5 text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line bg-surface px-3 py-1 font-mono text-[11px] text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </Container>
  );
}
