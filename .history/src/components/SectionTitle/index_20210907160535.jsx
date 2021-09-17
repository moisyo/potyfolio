export const SectionTitle = (props) => {
  return (
    <div className={`flex items-baseline justify-${props.position} mb-8`}>
      <h1 className='text-3xl text- font-bold'>{props.title}</h1>
      <span className='ml-4 text-xl text-text-green'>{props.lead}</span>
    </div>
  );
};
