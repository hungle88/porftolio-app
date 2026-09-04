import React from 'react';
import DotGrid from '../hero/background';

function HeroSection() {
  return (
    <section
      id='home'
      className='relative min-h-screen overflow-hidden flex items-center pt-30 py-10'
    >
      <div
        className='absolute top-1/4 left-1/3 -translate-x-1/2 w-80 h-80 
        rounded-full blur-3xl bg-primary/10'
      />
      <div className='inset-0 absolute'>
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor='#2F293A'
          activeColor='#5227FF'
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
    </section>
  );
}

export default HeroSection;
