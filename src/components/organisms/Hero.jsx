import Button from "../atoms/Button";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdVolumeOff } from "react-icons/md";

const Hero = ({ heroImg, title, synopsis, ageRating }) => {
  return (
    <section className='relative w-full h-[300px] md:h-[400px] lg:h-[470px] flex flex-col justify-end text-white mb-2'>
      <img
        src={heroImg}
        className='absolute w-full h-full object-cover z-0'
        alt={title}
      />

      <div className='absolute top-0 left-0 w-full h-full hero-overlay z-10 pointer-events-none'></div>

      <div className='absolute z-20 w-full bottom-5 md:bottom-10 lg:bottom-14 left-0 px-6 md:px-10 lg:px-14 flex flex-col gap-5 lg:gap-10'>
        <div className='flex flex-col items-start gap-3 lg:gap-5 md:max-w-[500px] lg:max-w-[668px]'>
          <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold'>
            {title}
          </h1>
          <p className='text-xs md:text-lg line-clamp-2 lg:line-clamp-none font-medium'>
            {synopsis}
          </p>
        </div>

        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-2 lg:gap-4'>
            <Button variant='primary' className='py-2 px-3 md:py-3.5 md:px-5'>
              Mulai
            </Button>
            <Button variant='secondary' className='gap-1'>
              <IoMdInformationCircleOutline />
              <span>Selengkapnya</span>
            </Button>
            <span className='bg-transparent border border-secondary py-2 px-3 md:py-3.5 md:px-4 rounded-3xl text-xs md:text-lg'>
              {ageRating}
            </span>
          </div>

          <button className='bg-transparent border border-secondary py-2 px-3 md:py-3.5 md:px-4 rounded-3xl cursor-pointer transition-all duration-200 active:scale-95'>
            <MdVolumeOff className='text-lg md:text-2xl' />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
