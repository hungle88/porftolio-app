import HeroSection from '../components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectSection from '@/components/sections/ProjectSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';
import { Toaster } from 'react-hot-toast';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
      <Toaster/>
    </div>
  );
}
