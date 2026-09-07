import { FileCode2, Folder, GitBranch, MessageSquare, ShieldCheck, Users } from 'lucide-react';
import { Container, Reveal, SectionHeading } from './ui/Section';

const EXPLORER = [
  { name: 'src/', dir: true },
  { name: '  components/', dir: true },
  { name: '  pages/', dir: true },
  { name: '  utils/', dir: true },
  { name: 'main.ts', dir: false },
  { name: 'review.ts', dir: false },
  { name: 'package.json', dir: false },
];

const CONCEPTS = [
  'Code review',
  'Comments',
  'Permissions',
  'Project history',
  'Live communication',
  'Handoff',
];

export default function FeaturedProject() {
  return (
    <Container id="projects" className="py-24 sm:py-32">
      <SectionHeading index="04" label="FEATURED PROJECT" title="Developer Collaboration Platform" />

      <Reveal delay={0.1}>
        <p className="mt-6 max-w-3xl leading-relaxed text-muted">
          A collaborative development environment designed to help developers work together, review
          code, share projects and seamlessly hand off development work. Two developers connect to
          the same workspace — one writes code while the other reviews, comments and suggests
          changes based on their permissions.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-2">
          {CONCEPTS.map((c) => (
            <span
              key={c}
              className="rounded-full border border-line bg-surface px-3 py-1 font-mono text-[11px] text-muted"
            >
              {c}
            </span>
          ))}
          <span className="flex items-center gap-1.5 rounded-full border border-success/30 px-3 py-1 font-mono text-[11px] text-success">
            <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
            CURRENTLY BUILDING
          </span>
        </div>
      </Reveal>

      <Reveal delay={0.2} className="mt-12">
        <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-xl shadow-stone-900/10">
          {/* Window bar */}
          <div className="flex flex-wrap items-center gap-3 border-b border-line bg-bg/60 px-4 py-3">
            <span className="flex gap-1.5" aria-hidden="true">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            </span>
            <span className="flex items-center gap-2 font-mono text-xs text-muted">
              <GitBranch size={13} aria-hidden="true" /> devcollab — main
            </span>
            <div className="ml-auto flex flex-wrap items-center gap-2 font-mono text-[10px]">
              <span className="flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-muted">
                <Users size={11} aria-hidden="true" />
                <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
                USER A · ONLINE
              </span>
              <span className="flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-muted">
                <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-cyan" aria-hidden="true" />
                USER B · REVIEWING
              </span>
              <span className="flex items-center gap-1.5 rounded-full border border-success/30 px-2.5 py-1 text-success">
                <ShieldCheck size={11} aria-hidden="true" /> WRITE ACCESS
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-[210px_1fr]">
            {/* Explorer */}
            <aside className="hidden border-r border-line p-4 md:block" aria-hidden="true">
              <p className="font-mono text-[11px] tracking-widest text-muted">EXPLORER</p>
              <ul className="mt-3 space-y-1.5 font-mono text-xs text-muted">
                {EXPLORER.map((f) => (
                  <li key={f.name} className="flex items-center gap-2">
                    {f.dir ? (
                      <Folder size={12} className="text-accent" />
                    ) : (
                      <FileCode2 size={12} className="text-cyan" />
                    )}
                    {f.name}
                  </li>
                ))}
              </ul>
            </aside>

            {/* Editor */}
            <div className="relative">
              <div className="flex border-b border-line" aria-hidden="true">
                <span className="flex items-center gap-2 border-b-2 border-accent bg-bg/40 px-4 py-2 font-mono text-xs text-ink">
                  <FileCode2 size={12} /> main.ts
                </span>
                <span className="flex items-center gap-2 px-4 py-2 font-mono text-xs text-muted">
                  <FileCode2 size={12} /> review.ts
                </span>
              </div>

              <div className="overflow-x-auto p-5 font-mono text-[13px] leading-7">
                <pre className="min-w-[460px]">
                  <code>
                    <span className="block">
                      <span className="mr-4 inline-block w-5 select-none text-right text-slate-400">1</span>
                      <span className="text-indigo-600 font-medium">export function</span>{' '}
                      <span className="text-cyan font-medium">collaborate</span>
                      <span className="text-slate-800">() {'{'}</span>
                    </span>
                    <span className="block">
                      <span className="mr-4 inline-block w-5 select-none text-right text-slate-400">2</span>
                      <span className="text-slate-800">{'  '}const team = [</span>
                      <span className="text-emerald-700">&quot;USER_A&quot;</span>
                      <span className="text-slate-800">, </span>
                      <span className="text-emerald-700">&quot;USER_B&quot;</span>
                      <span className="text-slate-800">];</span>
                    </span>
                    <span className="block">
                      <span className="mr-4 inline-block w-5 select-none text-right text-slate-400">3</span>
                      <span className="text-slate-800">{'  '}return team.map(dev =&gt; dev.build());</span>
                    </span>
                    <span className="block">
                      <span className="mr-4 inline-block w-5 select-none text-right text-slate-400">4</span>
                      <span className="text-slate-800">{'}'}</span>
                    </span>
                  </code>
                </pre>
              </div>

              {/* Review comment */}
              <div className="mx-5 mb-5 flex gap-3 rounded-xl border border-accent/30 bg-accent/5 p-4 lg:absolute lg:right-6 lg:top-20 lg:mx-0 lg:w-72">
                <MessageSquare size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <p className="font-mono text-[10px] tracking-widest text-accent">REVIEW · USER B · main.ts:2</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink/90">
                    &quot;Consider extracting this into a reusable function.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom terminal */}
          <div className="border-t border-line bg-bg/60 px-4 py-3 font-mono text-xs leading-6">
            <p className="text-muted">$ npm run collab</p>
            <p className="text-success">✓ session active — 2 collaborators connected · changes syncing</p>
          </div>
        </div>
      </Reveal>
    </Container>
  );
}
