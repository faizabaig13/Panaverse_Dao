
'use client';
import { motion } from 'framer-motion';
import {AiOutlineClose} from 'react-icons/ai'
import {FaBars} from 'react-icons/fa'
import styles from '../styles';
import Image from 'next/image';
import Link from 'next/link';

import { useState } from 'react';
import { navVariants } from '../utils/motion';
// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
// import { Link } from 'react-scroll';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
   
   <div className="absolute w-[100%] inset-0 gradient-01 h-[200%]" />
      <nav className="backdrop-blur-lg bg-white/40 w-full fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
              <div className='flex'>
              <Image src='/Logo.png' width={50} height={50}/>
              <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white bg-red-400 mt-4 p-3 rounded-full">
Panaverse DAO
      </h2>
      </div>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-green-800 font-extrabold text-2xl rounded-md outline-none focus:outline-none focus:border-none "
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
             <AiOutlineClose className='ease-in duration-300' />
                  ) : (
                   <FaBars className='ease-in duration-300' />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0   ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
              <Link href="/aboutPage">
                <li className="pb-6 text-lg text-green-900 py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:text-green-500 ease-in duration-300 cursor-pointer">
  About
                </li>
                </Link>
                {/* <Link activeClass="active" to="about" spy={true} smooth={true}>About Us</Link> */}
                <Link href="/blog">
                <li className="pb-6 text-lg text-green-900 py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:text-green-500 ease-in duration-300 cursor-pointer">
        Blog
                </li>
                </Link>
                <Link href="/Syllabus">
                <li className="pb-6 text-lg text-green-900 py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:text-green-500 ease-in duration-300 cursor-pointer">
        Syllabus
                </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>

     </motion.nav>
  );
}

export default NavBar;