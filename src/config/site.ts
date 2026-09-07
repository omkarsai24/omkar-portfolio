// ── Central configuration ─────────────────────────────────────────────
// Replace the placeholder values below with your real links.
// These are the ONLY values you need to touch to personalize the site.

export const site = {
  name: 'Omkar Sai Ravinuthala',
  shortName: 'OMKAR SAI',
  role: 'Software Developer',
  tagline: 'Building software that solves real problems.',
  email: 'omkarsai.r@gmail.com',
  github: 'https://github.com/omkarsai24',
  linkedin: 'https://www.linkedin.com/in/omkarsai24',
  resume: '/resume.pdf',
  siteUrl: import.meta.env.VITE_SITE_URL ?? 'https://omkar-portfolio-zeta-gilt.vercel.app',
} as const;

export const githubUsername: string =
  import.meta.env.VITE_GITHUB_USERNAME ?? 'omkarsai24';
