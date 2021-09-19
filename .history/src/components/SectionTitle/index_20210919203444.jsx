export const SectionTitle = (props) => {
  return (
    <div className={`flex items-baseline justify-${props.position} mb-8`}>
      <h1 className={`lg:text-3xl sm:text-xl text-${props.color} font-bold `}>{props.title}</h1>
      <span className='ml-4 lg:text-xl sm:text-sm text-text-green'>{props.lead}</span>
    </div>
  );
};
