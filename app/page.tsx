import Image from 'next/image';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
    </div>
  );
}
