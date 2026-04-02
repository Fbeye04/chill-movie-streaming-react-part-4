import { IoMdPlay, IoMdAdd, IoMdCheckmark } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import useMovieStore from "../../store/movieStore";
import { useNavigate } from "react-router-dom";

const HoverMovieCard = ({
  id,
  title,
  backdrop,
  genre,
  duration,
  ageRating,
  isMyList,
}) => {
  const { toggleMyList } = useMovieStore();
  const navigate = useNavigate();

  return (
    <div className='bg-primary rounded-2xl w-[350px] shadow-hover-card flex flex-col overflow-hidden'>
      <img
        src={backdrop}
        className='w-full h-1/2 object-cover rounded-t-2xl'
        alt={title}
      />

      <div className='flex flex-col justify-between flex-1 lg:gap-4 md:p-7 w-full'>
        <div className='flex justify-between items-center'>
          <div className='flex lg:gap-4'>
            <button className='bg-white rounded-full p-2 cursor-pointer transition-all duration-200 active:scale-95'>
              <IoMdPlay className='text-primary lg:text-2xl' />
            </button>

            <button
              onClick={() => toggleMyList(id)}
              className='bg-primary border p-2 rounded-full cursor-pointer transition-all duration-200 active:scale-95'>
              {isMyList ? (
                <IoMdCheckmark className='lg:text-2xl' />
              ) : (
                <IoMdAdd className='lg:text-2xl' />
              )}
            </button>
          </div>

          <button
            onClick={() => navigate(`/home/detail/${id}`)}
            className='bg-primary border p-2 rounded-full cursor-pointer transition-all duration-200 active:scale-95'>
            <MdOutlineKeyboardArrowDown className='lg:text-2xl' />
          </button>
        </div>

        <div className='flex items-center justify-start lg:gap-4'>
          <span className='bg-[#CDF1FF4D] text-secondary lg:text-lg font-bold lg:py-1 lg:px-3 rounded-3xl'>
            {ageRating}
          </span>
          <span className='font-bold lg:text-lg'>{duration}</span>
        </div>

        <div className='flex justify-between lg:text-lg text-secondary'>
          {genre}
        </div>
      </div>
    </div>
  );
};

export default HoverMovieCard;
