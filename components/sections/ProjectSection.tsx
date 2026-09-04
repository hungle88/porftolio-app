import ProjectCard from '../project/ProjectCard';
import SectionHeader from '../ui/SectionHeader';

//need screenshots from cigna, evernorth and expresscripts
const projects = [
  {
    title: 'Cigna app',
    description: 'description 1 description 1 description 1 description 1',
    image: '/images/cigna.png',
    tags: ['React', 'Nx Monorepo'],
    liveUrl: '',
  },
  {
    title: 'Evernorth app',
    description: 'description 2 description 2 description 2 description 2',
    image: '/images/evernorth.png',
    tags: ['React'],
  },
  {
    title: 'express-script app',
    description: 'description 3 description 3 description 3 description 3',
    image: '/images/express-script.webp',
    tags: ['React'],
  },
  {
    title: 'evernorth mobile app',
    description: 'description 4 description 4 description 4 description 4',
    image: '/images/evernorth-mobile.png',
    tags: ['React Native'],
  },
];
function ProjectSection() {
  return (
    <section id='projects' className='py-24 relative'>
      <div
        className='absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 
rounded-full blur-3xl bg-primary/10'
      />
      <div className='w-[90%] max-w-6xl mx-auto space-y-12'>
        <SectionHeader
          title='Some of my latest'
          highlight='works'
          badge='Projects'
          description='A selection of projects I built and delivered.'
        />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10'>
          {projects.map((project, index) => (
            <ProjectCard {...project} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
