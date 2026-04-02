import Hero from "../components/organisms/Hero";
import MovieSection from "../components/organisms/MovieSection";
import ReviewSection from "../components/organisms/ReviewSection";
import useFetchMovies from "../hooks/useFetchMovies";
import SkeletonLoader from "../components/molecules/SkeletonLoader";

const Dashboard = () => {
  const { movies, isLoading } = useFetchMovies();

  const heroData = movies.find((movie) => movie.id === 13);
  const continueWatching = movies.slice(0, 10);
  const topRating = movies.filter((movie) => movie.rating >= 4.5);
  const trending = movies.filter((movie) => movie.isTrending === true);
  const newReleases = movies.filter((movie) => movie.isNewRelease === true);

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
            section='Melanjutkan Tonton Film'
            dataMovies={continueWatching}
            variant='landscape'
          />
          <MovieSection
            section='Top Rating Film dan Series Hari ini'
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

      <ReviewSection />
    </main>
  );
};

export default Dashboard;
