import { MdEdit } from "react-icons/md";

const ProfileInput = ({ label, type, value, canEdit }) => {
  return (
    <div className='bg-surface-dark border border-white rounded-lg flex justify-between py-2 px-4 my-8'>
      <div className='flex flex-col'>
        <label className='text-secondary'>{label}</label>
        <input
          type={type}
          value={value}
          readOnly
          className='bg-transparent outline-none border-none w-full cursor-default'
        />
      </div>

      {canEdit && (
        <button>
          <MdEdit />
        </button>
      )}
    </div>
  );
};

export default ProfileInput;
