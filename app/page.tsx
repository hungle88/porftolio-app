import Image from 'next/image';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectSection from '@/components/sections/ProjectSection';
import ExperienceSection from '@/components/sections/ExperienceSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ExperienceSection />
    </div>
  );
}
