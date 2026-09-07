import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Journey from './components/Journey';
import FeaturedProject from './components/FeaturedProject';
import Projects from './components/Projects';
import GitHubSection from './components/GitHubSection';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import { useActiveSection } from './hooks/useActiveSection';

const NAV_IDS = ['home', 'about', 'skills', 'journey', 'projects', 'github', 'contact'] as const;

export default function App() {
  const active = useActiveSection(NAV_IDS);

  return (
    <div className="relative min-h-screen bg-bg text-ink">
      <div aria-hidden="true" className="bg-grid pointer-events-none fixed inset-0" />
      <div aria-hidden="true" className="bg-noise pointer-events-none fixed inset-0 opacity-[0.02]" />
      <CursorGlow />
      <Navbar active={active} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Journey />
        <FeaturedProject />
        <Projects />
        <GitHubSection />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
