import { Github, Linkedin, Mail } from 'lucide-react';
import { site } from '../config/site';
import { Container, Reveal, SectionHeading } from './ui/Section';

export default function Contact() {
  return (
    <Container id="contact" className="py-24 sm:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading index="08" label="CONTACT" title="Let's build something." />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-lg leading-relaxed text-muted">
              Have an interesting project, collaboration idea, internship opportunity or something
              worth building? My inbox is always open — I'll get back to you as soon as I can.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-indigo-500 hover:shadow-[0_0_30px_-8px_rgba(99,102,241,0.7)]"
              >
                <Mail size={16} aria-hidden="true" /> EMAIL ME
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-6 py-3 text-sm font-semibold transition-colors hover:border-accent/50"
              >
                <Github size={16} aria-hidden="true" /> GITHUB
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-6 py-3 text-sm font-semibold transition-colors hover:border-accent/50"
              >
                <Linkedin size={16} aria-hidden="true" /> LINKEDIN
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div
            aria-hidden="true"
            className="rounded-2xl border border-line bg-surface/90 font-mono text-sm shadow-xl shadow-stone-900/10"
          >
            <div className="flex items-center gap-2 border-b border-line px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-xs text-muted">contact.sh</span>
            </div>
            <div className="space-y-2.5 p-6 leading-7">
              <p className="text-muted">$ connection.request()</p>
              <p className="text-success">✓ message received</p>
              <p className="text-success">✓ developer notified</p>
              <p className="text-muted">
                $ awaiting_reply <span className="animate-blink text-cyan">▌</span>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Container>
  );
}
