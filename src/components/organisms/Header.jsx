import Logo from "../atoms/Logo";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import AvatarProfile from "../../assets/avatar.png";
import { IoMdPerson } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import { IoMdExit } from "react-icons/io";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className='py-4 px-6 md:py-5 md:px-10 lg:px-20 flex justify-between items-center md:gap-12 sticky top-0 w-full z-50 bg-primary backdrop-blur-sm'>
      <div className='flex gap-3 lg:gap-20 items-center'>
        <Logo textCustom='hidden lg:flex lg:text-3xl' imgCustom='w-5 md:w-7' />

        <nav>
          <ul className='flex gap-4 lg:gap-20 text-white list-none'>
            <li className='cursor-pointer hover:text-blue-500 transition-colors'>
              <NavLink
                to='/home/series'
                className='text-xs md:text-lg font-medium'>
                Series
              </NavLink>
            </li>
            <li className='cursor-pointer hover:text-blue-500 transition-colors'>
              <NavLink
                to='/home/film'
                className='text-xs md:text-lg font-medium'>
                Film
              </NavLink>
            </li>
            <li className='cursor-pointer hover:text-blue-500 transition-colors'>
              <NavLink
                to='/home/my-list'
                className='text-xs md:text-lg font-medium'>
                Daftar Saya
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div
        className='relative flex items-center gap-1 md:gap-2 cursor-pointer'
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        <img
          src={AvatarProfile}
          className='w-6 md:w-10 rounded-full'
          alt='avatar profile'
        />
        <MdOutlineKeyboardArrowDown className='text-white text-2xl md:text-4xl ' />

        {isDropdownOpen && (
          <div className='absolute top-full right-0 mt-2 w-48 bg-primary rounded-lg shadow-xl overflow-hidden z-50'>
            <Link
              to='/home/profil'
              className='flex items-center gap-3 px-4 py-3 text-white hover:text-blue-700 transition-colors text-sm'>
              <IoMdPerson />
              <span>Profil Saya</span>
            </Link>

            <Link
              to='#'
              className='flex items-center gap-3 px-4 py-3 text-white hover:text-blue-700 transition-colors text-sm'>
              <IoMdStar />
              <span>Ubah Premium</span>
            </Link>

            <Link
              to='/'
              className='flex items-center gap-3 px-4 py-3 text-white hover:text-blue-700 transition-colors text-sm'>
              <IoMdExit />
              <span>Keluar</span>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
