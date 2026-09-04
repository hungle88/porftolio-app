interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
}
function SectionHeader({
  badge,
  title,
  highlight,
  description,
}: SectionHeaderProps) {
  return (
    <div className='max-w-2xl mx-auto text-center space-y-4'>
      {badge && (
        <span
          className='inline-block text-sm text-primary
                bg-primary/10 px-4 py-1.5rounded-full border border-border'
        >
          {badge}
        </span>
      )}
      <h2 className='text-3xl md:text-4xl font-boldtext-text leading-tight'>
        {title} {highlight && <span className='text-primary'>{highlight}</span>}
      </h2>
      {description && (
        <p className='text-gray-400 max-w-xl mx-auto'>{description}</p>
      )}
    </div>
  );
}

export default SectionHeader;
