const SelectInput = ({ label, name, id, placeholder, option, ...props }) => {
  return (
    <div className='flex flex-col gap-2 px-7 mt-5'>
      <label htmlFor={id} className='text-lg'>
        {label}
      </label>

      <div className='border-2 border-border-light bg-primary rounded-lg px-3 focus-within:border-brand-primary transition-colors'>
        <select
          name={name}
          id={id}
          {...props}
          className='w-full bg-primary outline-none py-3 cursor-pointer'>
          <option value=''>{placeholder}</option>
          {option.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectInput;
