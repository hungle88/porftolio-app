import HeroSection from '../components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectSection from '@/components/sections/ProjectSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';
import { Toaster } from 'react-hot-toast';
import AnimationLayout from '@/components/layouts/AnimationLayout';

export default function Home() {
  return (
    <div>
      <AnimationLayout>
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
        <Toaster />
      </AnimationLayout>
    </div>
  );
}
