import Hero from "../components/organisms/Hero";
import MovieSection from "../components/organisms/MovieSection";
import useFetchMovies from "../hooks/useFetchMovies";
import SkeletonLoader from "../components/molecules/SkeletonLoader";

const Film = () => {
  const { movies, isLoading } = useFetchMovies();

  const heroData = movies.find((movie) => movie.id === 5);
  const onlyFilm = movies.filter((item) => item.type === "Movie");
  const continueWatching = onlyFilm.slice(0, 10);
  const topRating = onlyFilm.filter((movie) => movie.rating >= 4.5);
  const trending = onlyFilm.filter((movie) => movie.isTrending === true);
  const newReleases = onlyFilm.filter((movie) => movie.isNewRelease === true);

  return (
    <main className='overflow-x-hidden'>
      {heroData && (
        <Hero
          heroImg={heroData.backdrop}
          title={heroData.title}
          synopsis={heroData.synopsis}
          ageRating={heroData.ageRating}
        />
      )}

      {isLoading ? (
        <>
          <SkeletonLoader variant='landscape' />
          <SkeletonLoader variant='portrait' />
          <SkeletonLoader variant='portrait' />
          <SkeletonLoader variant='portrait' />
        </>
      ) : (
        <>
          <MovieSection
            section='Melanjutkan Tonton Film'
            dataMovies={continueWatching}
            variant='landscape'
          />
          <MovieSection
            section='Top Rating Film Hari ini'
            dataMovies={topRating}
            variant='portrait'
          />
          <MovieSection
            section='Film Trending'
            dataMovies={trending}
            variant='portrait'
          />
          <MovieSection
            section='Rilis Baru'
            dataMovies={newReleases}
            variant='portrait'
          />
        </>
      )}
    </main>
  );
};

export default Film;
