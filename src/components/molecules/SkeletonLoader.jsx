import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoader = ({ variant = "portrait" }) => {
  const cardSize =
    variant === "landscape"
      ? "w-[309px] lg:w-[302px] aspect-video"
      : "w-[150px] md:w-[200px] lg:w-[234px] aspect-[2/3]";

  const dummyData = [1, 2, 3, 4, 5];

  return (
    <div className='flex flex-col gap-4 lg:gap-8 p-5 md:py-5 lg:py-10 md:px-10 lg:px-20'>
      <Skeleton
        width={300}
        height={40}
        baseColor='#27272a'
        highlightColor='#3f3f46'
      />

      <div className='flex gap-4 overflow-hidden'>
        {dummyData.map((number) => (
          <div key={number} className={`shrink-0 ${cardSize}`}>
            <Skeleton
              height='100%'
              borderRadius={8}
              baseColor='#27272a'
              highlightColor='#3f3f46'
              containerClassName='block w-full h-full'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonLoader;
