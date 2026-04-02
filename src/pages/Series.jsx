import Hero from "../components/organisms/Hero";
import MovieSection from "../components/organisms/MovieSection";
import useFetchMovies from "../hooks/useFetchMovies";
import SkeletonLoader from "../components/molecules/SkeletonLoader";

const Series = () => {
  const { movies, isLoading } = useFetchMovies();

  const onlySeries = movies.filter((item) => item.type === "Series");
  const heroData = movies.find((movie) => movie.id === 31);
  const continueWatching = onlySeries.slice(0, 10);
  const topRating = onlySeries.filter((movie) => movie.rating >= 4.5);
  const trending = onlySeries.filter((movie) => movie.isTrending === true);
  const newReleases = onlySeries.filter((movie) => movie.isNewRelease === true);

  return (
    <main className='overflow-x-hidden'>
      {heroData && (
        <Hero
          id={heroData.id}
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
            section='Melanjutkan Tonton Series'
            dataMovies={continueWatching}
            variant='landscape'
          />
          <MovieSection
            section='Top Rating Series Hari Ini'
            dataMovies={topRating}
            variant='portrait'
          />
          <MovieSection
            section='Series Trending'
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

export default Series;
