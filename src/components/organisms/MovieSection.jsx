import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import MovieCard from "../molecules/MovieCard";
import { useState, useRef, useEffect } from "react";

const MovieSection = ({ section, dataMovies, variant }) => {
  // desktop slide position
  const [translateX, setTranslateX] = useState(0);
  // screen status
  const [isDesktop, setIsDesktop] = useState(false);
  // container slider measuring tool
  const containerRef = useRef(null);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    // check once after the web is first opened
    checkScreen();

    // screen monitoring to see if the screen changes size
    window.addEventListener("resize", checkScreen);
    // remove screen monitoring if there is a page change
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handleSlide = (direction) => {
    // the measuring tool will only work if the container slider is present and when the screen is in desktop mode.
    if (containerRef.current && isDesktop) {
      // window Width (visible on screen)
      const containerWidth = containerRef.current.clientWidth;

      // total width of slider and poster
      const scrollWidth = containerRef.current.scrollWidth;

      // sliding distance of each change
      const slideAmount = 500;

      if (direction === "left") {
        // prev position + 500
        setTranslateX((prev) => Math.min(prev + slideAmount, 0));
      } else {
        // right end limit (remaining slider)
        // given a minus because we play on the negative axis.
        const maxScroll = -(scrollWidth - containerWidth);

        // prev position - 500
        setTranslateX((prev) => Math.max(prev - slideAmount, maxScroll));
      }
    }
  };

  return (
    <section className='text-white w-full flex flex-col items-start p-5 md:py-5 lg:py-10 md:px-10 lg:px-20 lg:gap-8 relative z-0 hover:z-50 transition-all duration-300'>
      <h3 className='text-xl lg:text-3xl font-bold mb-5'>{section}</h3>

      <div className='relative w-full lg:group'>
        {/* Only appears if you have swiped (translateX < 0) */}
        {translateX < 0 && (
          <button
            type='button'
            onClick={() => handleSlide("left")}
            className='hidden lg:block absolute -left-12 top-1/2 -translate-y-1/2 text-4xl text-primary z-40 cursor-pointer hover:scale-110 transition-transform shadow-lg bg-white rounded-full'>
            <BsFillArrowLeftCircleFill />
          </button>
        )}

        <button
          type='button'
          onClick={() => handleSlide("right")}
          className='hidden lg:block absolute -right-12 top-1/2 -translate-y-1/2 text-4xl text-primary z-40 cursor-pointer hover:scale-110 transition-transform shadow-lg bg-white rounded-full'>
          <BsFillArrowRightCircleFill />
        </button>

        {/* Hybrid navigation */}
        <div className='w-full overflow-x-auto px-4 pb-4 lg:overflow-visible lg:px-0 scrollbar-hide'>
          <div
            ref={containerRef}
            className='flex gap-4 md:gap-6 lg:transition-transform lg:duration-500 lg:ease-out'
            style={{
              transform: isDesktop ? `translateX(${translateX}px)` : "none",
            }}>
            {dataMovies.map((item) => (
              <MovieCard key={item.id} variant={variant} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieSection;
