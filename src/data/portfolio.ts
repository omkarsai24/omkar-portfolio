// ── All editable content lives here ───────────────────────────────────
// Update this file to change what appears on the site — no UI edits needed.

export interface InfoCard {
  label: string;
  title: string;
  description: string;
}

export interface Principle {
  title: string;
  description: string;
}

export interface Skill {
  name: string;
  description: string;
}

export interface SkillGroup {
  category: string;
  items: Skill[];
}

export interface JourneyItem {
  title: string;
  description: string;
  tags: string[];
  period?: string; // add dates when you want them shown
}

export type ProjectCategory = 'web' | 'desktop' | 'backend' | 'ai' | 'systems';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  technologies: string[];
  status: string;
  featured?: boolean;
  github?: string; // add a URL when the repo is public
  demo?: string;   // add a URL when a live demo exists
}

export interface EducationItem {
  school: string;
  program: string;
  detail: string;
  period?: string;
}

export const aboutCards: InfoCard[] = [
  {
    label: 'EDUCATION',
    title: 'BS — Computer Science',
    description:
      'Pursuing a rigorous computer science education with a focus on software engineering fundamentals.',
  },
  {
    label: 'FOCUS',
    title: 'Software Engineering',
    description:
      'Full-stack development, desktop applications, developer tools, databases and modern software architecture.',
  },
  {
    label: 'CURRENTLY BUILDING',
    title: 'Developer Collaboration Platform',
    description:
      'A desktop environment where developers can collaborate, review code and hand off work in real time.',
  },
];

export const principles: Principle[] = [
  { title: 'BUILD', description: 'Turn ideas into working software.' },
  { title: 'LEARN', description: 'Understand how systems work instead of only using them.' },
  { title: 'ITERATE', description: 'Improve through experimentation and feedback.' },
  { title: 'SOLVE', description: 'Focus on real problems.' },
];

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    items: [
      { name: 'Java', description: 'OOP, application logic and JDBC-backed systems.' },
      { name: 'JavaScript', description: 'Core language of the web, used daily in projects.' },
      { name: 'TypeScript', description: 'Type-safe application and desktop development.' },
      { name: 'Python', description: 'Scripting, automation and AI experiments.' },
      { name: 'SQL', description: 'Schema design and querying relational data.' },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'HTML', description: 'Semantic, accessible document structure.' },
      { name: 'CSS', description: 'Layout, responsive design and modern styling.' },
      { name: 'React', description: 'Component architecture with hooks and TypeScript.' },
      { name: 'Tailwind CSS', description: 'Utility-first styling for fast, consistent UI.' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', description: 'APIs, tooling and real-time server logic.' },
      { name: 'Express.js', description: 'REST APIs, routing and middleware.' },
      { name: 'Java JDBC', description: 'Database connectivity for Java applications.' },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'MySQL', description: 'Relational modeling and queries.' },
      { name: 'Supabase', description: 'Postgres, auth and real-time subscriptions.' },
    ],
  },
  {
    category: 'Desktop',
    items: [
      { name: 'Electron', description: 'Cross-platform desktop applications.' },
      { name: 'Monaco Editor', description: 'The code editor that powers VS Code, embedded in apps.' },
      { name: 'TypeScript', description: 'Shared types across desktop main and renderer processes.' },
    ],
  },
  {
    category: 'Tools & Systems',
    items: [
      { name: 'Git', description: 'Version control and branching workflows.' },
      { name: 'GitHub', description: 'Code hosting, reviews and open source.' },
      { name: 'Docker', description: 'Containerized development environments.' },
      { name: 'Linux', description: 'Daily driver for development and servers.' },
      { name: 'Bash', description: 'Shell scripting and automation.' },
      { name: 'VS Code', description: 'Primary editor and debugging environment.' },
    ],
  },
  {
    category: 'Exploring',
    items: [
      { name: 'AI & LLMs', description: 'Prompting, AI-assisted tooling and agents.' },
      { name: 'Cloud', description: 'Deployment and managed infrastructure.' },
      { name: 'Real-time Collaboration', description: 'CRDTs, presence and shared editing.' },
    ],
  },
];

export const journey: JourneyItem[] = [
  {
    title: 'Education & Foundations',
    description: 'Started formal computer science education — programming fundamentals, data structures and problem solving.',
    tags: ['Computer Science', 'Problem Solving'],
  },
  {
    title: 'Java + MySQL',
    description: 'Built core applications with Java and connected them to relational databases through JDBC.',
    tags: ['Java', 'MySQL', 'JDBC'],
  },
  {
    title: 'Web Development',
    description: 'Moved into the browser — semantic HTML, modern CSS and interactive UI with JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Backend Development',
    description: 'Designed and built REST APIs with Node.js and Express, with authentication and data persistence.',
    tags: ['Node.js', 'Express.js', 'Supabase'],
  },
  {
    title: 'Linux & Systems',
    description: 'Switched to Linux as a daily environment and learned shell scripting, processes and system tooling.',
    tags: ['Linux', 'Bash', 'Git'],
  },
  {
    title: 'Full-Stack Development',
    description: 'Combined frontend and backend skills into complete applications with React, TypeScript and Supabase.',
    tags: ['React', 'TypeScript', 'Full-Stack'],
  },
  {
    title: 'Electron + TypeScript',
    description: 'Started building desktop applications — including embedding the Monaco editor for in-app coding.',
    tags: ['Electron', 'TypeScript', 'Monaco Editor'],
  },
  {
    title: 'Developer Tools',
    description: 'Grew a focused interest in tooling that makes developers faster — editors, workflows and automation.',
    tags: ['DX', 'Tooling', 'Automation'],
  },
  {
    title: 'AI Exploration',
    description: 'Exploring how LLMs and AI-assisted workflows can be integrated into real developer tools.',
    tags: ['AI', 'LLMs'],
  },
  {
    title: 'Developer Collaboration Platform',
    description: 'Currently building the main project — a shared development environment with live collaboration, code review and handoff. In progress.',
    tags: ['Electron', 'Node.js', 'Supabase', 'Real-time'],
  },
];

export const projects: Project[] = [
  {
    id: 'devcollab',
    title: 'Developer Collaboration & Secure Project Handoff Platform',
    description:
      'A collaborative desktop development environment where developers connect, share a live workspace, review code with embedded Monaco editor, manage permissions, and execute secure project handoffs.',
    category: 'desktop',
    technologies: ['Electron', 'TypeScript', 'React', 'Monaco Editor', 'Node.js', 'Supabase'],
    status: 'In Progress',
    featured: true,
    github: 'https://github.com/omkarsai24',
  },
  {
    id: 'drone-crowd-density',
    title: 'AI-Powered Drone for Crowd Density Monitoring',
    description:
      'AI-enabled drone surveillance system for crowd-density monitoring and early stampede-risk detection using OpenCV and deep learning computer vision analytics.',
    category: 'ai',
    technologies: ['Python', 'OpenCV', 'Computer Vision', 'AI Analytics'],
    status: 'Completed',
    github: 'https://github.com/omkarsai24',
  },
  {
    id: 'student-management',
    title: 'Student Management System',
    description:
      'A full-stack CRUD application for student registration, search, record updates, and deletion built with REST APIs and normalized MySQL relational database.',
    category: 'backend',
    technologies: ['Node.js', 'Express.js', 'MySQL', 'JavaScript', 'REST APIs'],
    status: 'Completed',
    github: 'https://github.com/omkarsai24',
  },
  {
    id: 'data-analysis-python',
    title: 'Data Analysis & Insights Using Python',
    description:
      'Exploratory data analysis including data cleaning, statistical modeling, data visualization, and trend identification with summary statistics.',
    category: 'ai',
    technologies: ['Python', 'Statistics', 'Data Analysis', 'Matplotlib'],
    status: 'Completed',
    github: 'https://github.com/omkarsai24',
  },
  {
    id: 'auth-system',
    title: 'Authentication & Access Control Backend',
    description:
      'A reusable authentication backend with secure password hashing, session handling, protected routes, and role-based access control.',
    category: 'backend',
    technologies: ['Node.js', 'Express.js', 'Supabase', 'TypeScript'],
    status: 'Completed',
    github: 'https://github.com/omkarsai24',
  },
  {
    id: 'linux-shell',
    title: 'Linux Systems & Automation Utilities',
    description:
      'Shell scripts and small Linux utilities for automation, file batch processing, Git workflows, and developer tooling improvements.',
    category: 'systems',
    technologies: ['Linux', 'Bash', 'Git', 'Shell Scripting'],
    status: 'Ongoing',
    github: 'https://github.com/omkarsai24',
  },
];

export const education: EducationItem[] = [
  {
    school: 'CR Rao AIMSCS',
    program: 'Bachelor of Technology (B.Tech) – Computer Science Engineering',
    detail:
      'Pursuing B.Tech in CSE with a strong focus on Data Structures, Algorithms, Systems, and Software Engineering.',
    period: 'Expected 2028',
  },
  {
    school: 'Indian Institute of Technology Madras (IIT Madras)',
    program: 'Bachelor of Science (BS) – Data Science (Online Degree)',
    detail:
      'Rigorous foundation in Statistics, Machine Learning, Database Management Systems, Data Analysis, and Artificial Intelligence.',
    period: 'Expected 2028',
  },
];
