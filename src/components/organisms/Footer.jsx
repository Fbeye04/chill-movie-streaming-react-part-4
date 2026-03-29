import Logo from "../atoms/Logo";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Footer = () => {
  const genres = [
    "Aksi",
    "Anak-anak",
    "Anime",
    "Britania",
    "Drama",
    "Fantasi Ilmiah & Fantasi",
    "Kejahatan",
    "KDrama",
    "Komedi",
    "Petualangan",
    "Perang",
    "Romantis",
    "Sains & Alam",
    "Thriller",
  ];

  const helps = ["FAQ", "Kontak Kami", "Privasi", "Syarat & Ketentuan"];

  const [isGenreOpen, setIsGenreOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  return (
    <footer className='flex flex-col lg:flex-row lg:justify-between p-5 md:py-14 md:px-10 border-t border-border-light'>
      <div className='flex flex-col gap-5 md:gap-6 mb-10'>
        <Logo />
        <p className='text-secondary text-sm md:text-lg'>
          @2023 Chill All Rights Reserved.
        </p>
      </div>

      <div>
        <div
          className='text-white mb-3 flex justify-between items-center cursor-pointer lg:cursor-default'
          onClick={() => setIsGenreOpen(!isGenreOpen)}>
          <h3 className='font-bold text-lg'>Genre</h3>
          {isGenreOpen ? (
            <MdKeyboardArrowDown className='lg:hidden' />
          ) : (
            <MdKeyboardArrowRight className='lg:hidden' />
          )}
        </div>

        <ul
          className={`
          ${
            isGenreOpen ? "grid grid-cols-2 gap-4" : "hidden"
          } lg:grid lg:grid-cols-4 gap-x-6 gap-y-3 text-secondary`}>
          {genres.map((item, index) => (
            <li
              key={index}
              className='hover:text-blue-500 transition-colors cursor-pointer'>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className='mt-4 lg:mt-0'>
        <div
          className='text-white mb-3 flex justify-between items-center cursor-pointer lg:cursor-default'
          onClick={() => setIsHelpOpen(!isHelpOpen)}>
          <h3 className='font-bold text-lg'>Bantuan</h3>
          {isHelpOpen ? (
            <MdKeyboardArrowDown className='lg:hidden' />
          ) : (
            <MdKeyboardArrowRight className='lg:hidden' />
          )}
        </div>

        <ul
          className={`${isHelpOpen ? "flex" : "hidden"} lg:flex flex-col gap-3 text-secondary`}>
          {helps.map((item, index) => (
            <li
              key={index}
              className='hover:text-blue-500 transition-colors cursor-pointer'>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
