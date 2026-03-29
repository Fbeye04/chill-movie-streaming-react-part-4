const TextArea = ({ title, name, id, placeholder, ...props }) => {
  return (
    <div className='flex flex-col gap-2 px-7 mt-5'>
      <label className='text-sm md:text-xl'>{title}</label>
      <textarea
        name={name}
        id={id}
        placeholder={placeholder}
        {...props}
        className='bg-primary border-2 border-border-light rounded-lg h-40 p-3 focus:outline-none focus:border-brand-primary transition-colors resize-none text-sm md:text-xl'></textarea>
    </div>
  );
};

export default TextArea;
