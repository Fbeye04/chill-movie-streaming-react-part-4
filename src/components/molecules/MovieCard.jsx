import { MdStar } from "react-icons/md";
import Label from "../atoms/Label";
import { MdOutlineDelete } from "react-icons/md";
import HoverMovieCard from "./HoverMovieCard";
import useMovieStore from "../../store/movieStore";
import Button from "../atoms/Button";

const MovieCard = ({
  id,
  image,
  backdrop,
  title,
  rating,
  label,
  labelVariant,
  variant,
  genre,
  duration,
  ageRating,
  isMyList,
}) => {
  const { toggleMyList } = useMovieStore();
  const isLandscape = variant === "landscape";

  const displayImage = isLandscape ? backdrop : image;

  const cardStyle = {
    portrait: "w-[150px] md:w-[200px] lg:w-[234px] aspect-[2/3]",
    landscape: "w-[309px] lg:w-[302px] aspect-video",
    grid: "w-full aspect-[2/3]",
  };

  return (
    <div
      className={`relative text-white shrink-0 group z-10 hover:z-50 ${cardStyle[variant]}`}>
      <div className='w-full h-full relative'>
        <img
          src={displayImage}
          className='object-cover w-full h-full rounded-lg '
          alt={`${title}`}
          loading='lazy'
        />

        {isLandscape && (
          <div className='absolute bottom-0 left-0 w-full p-3 md:p-4 poster-overlay flex justify-between items-end'>
            <h6 className='text-sm lg:text-lg'>{title}</h6>

            <div className='flex items-center gap-1'>
              <MdStar />
              <span className='text-xs md:text-sm'>{rating}/5</span>
            </div>
          </div>
        )}

        {label && <Label variant={labelVariant}>{label}</Label>}
      </div>

      {variant === "grid" ? (
        <div className='absolute inset-0 bg-black/70 flex justify-center items-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50'>
          <Button variant='danger' onClick={() => toggleMyList(id)}>
            <MdOutlineDelete className='text-white text-base md:text-xl font-bold' />
          </Button>
        </div>
      ) : (
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 hidden lg:block invisible group-hover:visible opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out pointer-events-none group-hover:pointer-events-auto'>
          <HoverMovieCard
            id={id}
            title={title}
            backdrop={backdrop}
            rating={rating}
            genre={genre}
            duration={duration}
            ageRating={ageRating}
            isMyList={isMyList}
          />
        </div>
      )}
    </div>
  );
};

export default MovieCard;
