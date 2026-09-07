import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FileDown, Menu, X } from 'lucide-react';
import { site } from '../config/site';

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'journey', label: 'Journey' },
  { id: 'projects', label: 'Projects' },
  { id: 'github', label: 'GitHub' },
  { id: 'contact', label: 'Contact' },
] as const;


export default function Navbar({ active }: { active: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 transition-all duration-300 sm:px-6 ${
          scrolled
            ? 'border-line bg-bg/85 shadow-lg shadow-stone-900/5 backdrop-blur-md'
            : 'border-transparent bg-transparent'
        }`}
      >
        <a href="#home" className="font-mono text-sm font-semibold tracking-widest">
          OMKAR<span className="text-cyan"> SAI</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? 'true' : undefined}
                className={`relative block rounded-md px-3 py-2 text-sm transition-colors ${
                  active === l.id ? 'text-ink' : 'text-muted hover:text-ink'
                }`}
              >
                {active === l.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-md bg-surface"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={site.resume}
            download
            className="hidden items-center gap-2 rounded-lg border border-line bg-surface px-4 py-2 text-sm font-medium transition-colors hover:border-accent/50 sm:flex"
          >
            <FileDown size={15} aria-hidden /> Resume
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="rounded-lg border border-line bg-surface p-2 lg:hidden"
          >
            {open ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-6xl rounded-2xl border border-line bg-surface/95 p-3 backdrop-blur-md lg:hidden"
          >
            <ul className="flex flex-col">
              {LINKS.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-4 py-3 text-sm ${
                      active === l.id
                        ? 'bg-bg text-ink'
                        : 'text-muted hover:bg-bg hover:text-ink'
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={site.resume}
              download
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg border border-line bg-bg px-4 py-3 text-sm font-medium"
            >
              <FileDown size={15} aria-hidden /> Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
