import Image from 'next/image';
import { LuCode, LuDatabase, LuRocket } from 'react-icons/lu';

function AboutSection() {
  return (
    <section id='about' className='py-24 overflow-hidden relative'>
      <div
        className='absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 
        rounded-full blur-3xl bg-primary/10'
      />
      <div
        className='w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16
    items-center'
      >
        <div data-aos="fade-right" data-aos-delay="100" data-aos-anchor-placement="top-center" className='flex justify-center lg:justify-start'>
          <div
            className='relative w-85 h-85 md:w-120 md:h-120 
            rounded-2xl
            bg-surface/80 backdrop-blur-md
        border border-border
        flex items-center justify-center'
          >
            <div
              className='absolute inset-0 rounded-2xl bg-primary/10
blur-2xl'
            />
            <div className='w-[85%] h-[85%] relative'>
              <Image
                fill
                src='/images/photo-crossed-arms.png'
                alt='About me'
                className='z-10 object-cover rounded-xl'
              />
            </div>
          </div>
        </div>

        <div className='space-y-6' data-aos="fade-left" data-aos-delay="100" data-aos-anchor-placement="top-center">
          <span
            className='text-sm text-primary bg-primary/10 px-4 py-1.5
            rounded-full border border-border inline-block'
          >
            About Me
          </span>
          <h2
            className='text-3xl md:text-4xl font-bold text-text 
          leading-tight'
          >
            I build scalable and user-focues web applications
          </h2>
          <p className='text-gray-300 max-w-xl'>
            I’m a Frontend Engineer with 5+ years of experience building
            responsive, accessible, and scalable web applications.
          </p>
          <p className='text-gray-300 max-w-xl'>
            I specialize in React, TypeScript, and JavaScript, with experience
            delivering enterprise features across healthcare, checkout,
            payments, and customer-facing applications.
          </p>
          <p className='text-gray-300 max-w-xl'>
            I enjoy turning complex requirements into clean, intuitive user
            experiences with a strong focus on performance, accessibility, and
            maintainable code.
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4'>
            <div
              className='p-4 rounded-xl bg-surface border border-border
             text-center'
            >
              <LuCode className='mx-auto mb-2 text-primary w-6 h-6' />
              <p className='text-text text-sm'>Clean code</p>
            </div>
            <div
              className='p-4 rounded-xl bg-surface border border-border
             text-center'
            >
              <LuDatabase className='mx-auto mb-2 text-primary w-6 h-6' />
              <p className='text-text text-sm'>Accessibility</p>
            </div>

            <div
              className='p-4 rounded-xl bg-surface border border-border
             text-center'
            >
              <LuRocket className='mx-auto mb-2 text-primary w-6 h-6' />
              <p className='text-text text-sm'>Performance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
