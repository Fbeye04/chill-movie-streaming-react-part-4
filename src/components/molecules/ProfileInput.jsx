import { useRef } from "react";
import { MdEdit } from "react-icons/md";
import { useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";

const ProfileInput = ({
  label,
  type,
  value,
  canEdit,
  placeholder,
  onChange,
  isEditing,
  onEditClick,
}) => {
  const inputRef = useRef(null);

  const handleEditClick = () => {
    onEditClick();
    inputRef.current.focus();
  };

  const isReadOnly = !(canEdit && isEditing);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='bg-surface-dark border border-white rounded-lg flex justify-between py-2 px-4 my-8'>
      <div className='flex flex-col flex-1 pr-4'>
        <label className='text-secondary'>{label}</label>
        <input
          type={type === "password" && showPassword ? "text" : type}
          value={value}
          onChange={onChange}
          readOnly={isReadOnly}
          placeholder={placeholder}
          ref={inputRef}
          className='bg-transparent outline-none border-none w-full cursor-default'
        />
      </div>

      <div className='flex'>
        {type === "password" && (
          <button
            type='button'
            className='text-secondary text-2xl'
            onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
          </button>
        )}

        {canEdit && (
          <button onClick={handleEditClick} className='text-white ml-2'>
            <MdEdit />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfileInput;
