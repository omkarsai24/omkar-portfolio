import { useMemo } from 'react';
import { ArrowUpRight, FolderGit2, Github, UserPlus, Users } from 'lucide-react';
import { githubUsername, site } from '../config/site';
import { Container, Reveal, SectionHeading } from './ui/Section';

const LEVEL_COLORS = ['bg-[#EAE4D8]', 'bg-accent/30', 'bg-accent/60', 'bg-cyan'];

/** Deterministic pseudo-random activity levels for the placeholder graph. */
function levelFor(i: number) {
  const r = ((i * 9301 + 49297) % 233280) / 233280;
  return r < 0.42 ? 0 : r < 0.68 ? 1 : r < 0.88 ? 2 : 3;
}

function ContributionGraph() {
  const days = useMemo(() => Array.from({ length: 26 * 7 }, (_, i) => levelFor(i)), []);
  return (
    <div role="img" aria-label="Illustrative contribution activity graph" className="overflow-x-auto">
      <div className="grid min-w-[540px] grid-flow-col grid-rows-7 gap-[3px]">
        {days.map((level, i) => (
          <span key={i} className={`aspect-square w-full rounded-[2px] ${LEVEL_COLORS[level]}`} />
        ))}
      </div>
    </div>
  );
}

const STATS = [
  { Icon: FolderGit2, label: 'Repositories' },
  { Icon: Users, label: 'Followers' },
  { Icon: UserPlus, label: 'Following' },
];

const LANGUAGES = ['TypeScript', 'Java', 'Python', 'SQL', 'Bash'];

export default function GitHubSection() {
  return (
    <Container id="github" className="py-24 sm:py-32">
      <SectionHeading
        index="06"
        label="OPEN SOURCE"
        title="Code tells the story."
        description="Most of what I learn ends up as code. Here's my GitHub corner — wire up the public API later to show live numbers."
      />

      <Reveal delay={0.1} className="mt-12">
        <div className="overflow-hidden rounded-2xl border border-line bg-surface/60">
          {/* Profile row */}
          <div className="flex flex-col gap-6 border-b border-line p-6 sm:flex-row sm:items-center sm:p-8">
            <div
              aria-hidden="true"
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-cyan font-mono text-lg font-bold text-white"
            >
              OS
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold">Omkar Sai Ravinuthala</h3>
              <p className="font-mono text-sm text-muted">@{githubUsername}</p>
              <p className="mt-2 text-sm text-muted">
                Building developer tools, desktop apps and full-stack projects in public.
              </p>
            </div>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-bg px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent/50"
            >
              <Github size={15} aria-hidden="true" /> View Profile
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>

          {/* Stats — placeholders until the GitHub API is connected */}
          <div className="grid grid-cols-3 divide-x divide-line border-b border-line text-center">
            {STATS.map(({ Icon, label }) => (
              <div key={label} className="p-5">
                <Icon className="mx-auto text-muted" size={18} aria-hidden="true" />
                <p className="mt-2 font-mono text-2xl font-bold text-muted">—</p>
                <p className="mt-1 text-xs text-muted">{label}</p>
              </div>
            ))}
          </div>

          {/* Activity graph */}
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="font-mono text-xs tracking-widest text-muted">CONTRIBUTION ACTIVITY</p>
              <div className="flex items-center gap-3 font-mono text-[10px] text-muted">
                LOW
                <span className="flex gap-1" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-[2px] bg-accent/30" />
                  <span className="h-2.5 w-2.5 rounded-[2px] bg-accent/60" />
                  <span className="h-2.5 w-2.5 rounded-[2px] bg-cyan" />
                </span>
                HIGH
              </div>
            </div>
            <div className="mt-4">
              <ContributionGraph />
            </div>
          </div>

          {/* Languages */}
          <div className="border-t border-line p-6 sm:p-8">
            <p className="font-mono text-xs tracking-widest text-muted">LANGUAGES I WORK WITH</p>
            <div className="mt-4 flex h-2.5 overflow-hidden rounded-full">
              {LANGUAGES.map((lang, i) => (
                <span
                  key={lang}
                  title={lang}
                  className={i === 0 ? 'bg-accent' : i === 1 ? 'bg-cyan' : i === 2 ? 'bg-success' : i === 3 ? 'bg-indigo-300' : 'bg-slate-600'}
                  style={{ width: `${[38, 24, 16, 12, 10][i]}%` }}
                />
              ))}
            </div>
            <div className="mt-3 flex flex-wrap gap-4">
              {LANGUAGES.map((lang, i) => (
                <span key={lang} className="flex items-center gap-1.5 font-mono text-[11px] text-muted">
                  <span
                    aria-hidden="true"
                    className={`h-2 w-2 rounded-full ${i === 0 ? 'bg-accent' : i === 1 ? 'bg-cyan' : i === 2 ? 'bg-success' : i === 3 ? 'bg-indigo-300' : 'bg-slate-600'}`}
                  />
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </Container>
  );
}
