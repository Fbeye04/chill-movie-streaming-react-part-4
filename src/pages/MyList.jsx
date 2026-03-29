import { IoMdFilm } from "react-icons/io";
import { Link } from "react-router-dom";
import useFetchMovies from "../hooks/useFetchMovies";
import MovieCard from "../components/molecules/MovieCard";
import SkeletonLoader from "../components/molecules/SkeletonLoader";

const MyList = () => {
  const { movies, isLoading } = useFetchMovies();

  const myMovies = movies.filter((movie) => movie.isMyList === true);

  return (
    <main className='flex-1 flex flex-col'>
      {isLoading ? (
        <>
          <SkeletonLoader variant='portrait' />
        </>
      ) : (
        <>
          <section className='text-white w-full flex-1 flex flex-col items-start p-5 md:py-5 lg:py-10 md:px-10 lg:px-20 lg:gap-8'>
            <h3 className='text-xl lg:text-3xl font-bold mb-5'>Daftar Saya</h3>

            {myMovies.length > 0 ? (
              <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6 w-full mt-5 justify-items-center'>
                {myMovies.map((movie) => (
                  <MovieCard key={movie.id} variant='grid' {...movie} />
                ))}
              </div>
            ) : (
              <div className='w-full flex-1 flex flex-col justify-center items-center gap-4'>
                <div className='bg-zinc-800 rounded-full p-4 w-fit'>
                  <IoMdFilm className='text-gray-500 text-5xl lg:text-7xl' />
                </div>

                <div className='text-center'>
                  <h2 className='text-white font-bold text-xl lg:text-2xl'>
                    Belum ada film di daftar saya
                  </h2>
                  <p className='text-gray-500 lg:text-xl'>
                    Tambahkan film dan acara TV favorit anda di sini agar mudah
                    ditemukan nanti
                  </p>
                </div>

                <Link
                  to='/home'
                  className='bg-white text-black lg:text-xl font-extrabold rounded-lg py-2 px-4 mt-4 transition-all duration-200 active:scale-95'>
                  Jelajahi Film
                </Link>
              </div>
            )}
          </section>
        </>
      )}
    </main>
  );
};

export default MyList;
