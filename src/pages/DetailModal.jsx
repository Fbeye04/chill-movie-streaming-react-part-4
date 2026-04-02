import Button from "../components/atoms/Button";
import { IoMdAdd, IoMdCheckmark, IoMdArrowBack } from "react-icons/io";
import { MdVolumeOff } from "react-icons/md";
import MovieCard from "../components/molecules/MovieCard";
import useFetchMovies from "../hooks/useFetchMovies";
import { useNavigate, useParams } from "react-router-dom";
import useMovieStore from "../store/movieStore";

const DetailModal = () => {
  const { movies } = useFetchMovies();
  const navigate = useNavigate();
  const { id } = useParams();
  const { toggleMyList } = useMovieStore();

  const filmMatching = movies.find((item) => item.id === Number(id));

  return (
    <main className='bg-primary text-white min-h-screen'>
      <div className='relative w-full h-[300px] md:h-[400px] lg:h-[500px]'>
        <img
          src={filmMatching.backdrop}
          className='w-full h-full object-cover'
          alt='Gambar Pop up Detail'
        />

        <div className='absolute inset-0 hero-overlay z-10'></div>

        <Button
          variant='secondary'
          onClick={() => navigate(-1)}
          className='absolute top-6 lg:top-10 left-10 lg:left-20 z-40'>
          <IoMdArrowBack />
        </Button>

        <div className='absolute bottom-10 left-0 z-10 w-full px-10 lg:px-20'>
          <h2 className='text-2xl lg:text-5xl mb-5 font-semibold'>
            {filmMatching.title}
          </h2>

          <div className='flex justify-between'>
            <div className='flex gap-4'>
              <Button variant='primary' className='lg:py-2.5 lg:px-10'>
                Mulai
              </Button>
              <Button
                variant='transparent'
                onClick={() => toggleMyList(filmMatching.id)}>
                {filmMatching.isMyList ? (
                  <IoMdCheckmark className='text-lg md:text-xl' />
                ) : (
                  <IoMdAdd className='text-lg md:text-xl' />
                )}
              </Button>
            </div>

            <Button variant='transparent'>
              <MdVolumeOff className='text-lg md:text-xl' />
            </Button>
          </div>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row items-start py-6 px-10 lg:px-20'>
        <div className='w-full lg:w-1/2'>
          <div className='flex items-center gap-4 text-secondary'>
            <span>{filmMatching.releaseYear}</span>
            <span>{filmMatching.duration}</span>
            <span className='bg-transparent border border-secondary py-2 px-3 md:py-3.5 md:px-4 rounded-3xl text-xs md:text-lg'>
              {filmMatching.ageRating}
            </span>
          </div>

          <p className='mt-4'>{filmMatching.synopsis}</p>
        </div>

        <div className='w-full lg:w-1/2 pt-2 px-0 lg:p-2.5'>
          <div className='flex items-start mb-1'>
            <span className='w-28 shrink-0 text-secondary'>Cast</span>
            <span className='text-secondary mr-2'>:</span>
            <span>{filmMatching.cast?.join(", ")}</span>
          </div>
          <div className='flex items-start mb-1'>
            <span className='w-28 shrink-0 text-secondary'>Genre</span>
            <span className='text-secondary mr-2'>:</span>
            <span>{filmMatching.genre}</span>
          </div>
          <div className='flex items-start'>
            <span className='w-28 shrink-0 text-secondary'>Pembuat film</span>
            <span className='text-secondary mr-2'>:</span>
            <span>{filmMatching.filmmaker}</span>
          </div>
        </div>
      </div>

      <div className='py-6 px-10 lg:px-20'>
        <h3 className='text-2xl font-bold'>Rekomendasi Serupa</h3>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-7 justify-items-center'>
          {movies.slice(0, 6).map((movie) => (
            <MovieCard key={movie.id} variant='grid' {...movie} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default DetailModal;
