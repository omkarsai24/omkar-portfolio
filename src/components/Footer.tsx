import { site } from '../config/site';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
        <div>
          <p className="font-mono text-sm font-semibold tracking-widest">{site.shortName}</p>
          <p className="mt-1 text-sm text-muted">{site.role}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center justify-center gap-5 text-sm text-muted">
            <li>
              <a className="transition-colors hover:text-ink" href={site.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-ink" href={site.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-ink" href={`mailto:${site.email}`}>
                Email
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-ink" href={site.resume} download>
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <p className="font-mono text-xs text-muted/70">
          Built with React + TypeScript · {year}
        </p>
      </div>
    </footer>
  );
}
