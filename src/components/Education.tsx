import { FileDown, GraduationCap } from 'lucide-react';
import { education } from '../data/portfolio';
import { site } from '../config/site';
import { Container, Reveal, SectionHeading } from './ui/Section';

export default function Education() {
  return (
    <Container id="education" className="py-24 sm:py-32">
      <SectionHeading index="07" label="EDUCATION" title="Education." />

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {education.map((edu) => (
          <Reveal key={edu.school}>
            <div className="glow-card h-full rounded-2xl border border-line bg-surface/60 p-7">
              <GraduationCap size={24} className="text-cyan" aria-hidden="true" />
              <h3 className="mt-5 text-xl font-bold">{edu.school}</h3>
              <p className="mt-1 font-mono text-sm text-accent">{edu.program}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{edu.detail}</p>
              <p className="mt-4 font-mono text-xs text-muted/70">{edu.period ?? 'In progress'}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16">
        <div className="relative overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-accent/15 via-surface to-cyan/10 p-10 text-center sm:p-14">
          <h3 className="text-2xl font-bold sm:text-3xl">Want the complete story?</h3>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            Explore my experience, education, technical skills and projects in more detail.
          </p>
          <a
            href={site.resume}
            download
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-indigo-500 hover:shadow-[0_0_30px_-8px_rgba(99,102,241,0.7)]"
          >
            <FileDown size={16} aria-hidden="true" /> DOWNLOAD RESUME
          </a>
        </div>
      </Reveal>
    </Container>
  );
}
