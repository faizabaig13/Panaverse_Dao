'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';
import Link from 'next/link';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-extrabold md:text-[64px] text-[44px] text-red-300">
       Web 3.0 & Metaverse Developer
        </h4>
        <button type="button" className="flex items-center h-fit py-4 px-6 bg-red-300 rounded-[32px] gap-[12px]">
  <Link href="https://www.piaic.org/">
          <span className="font-normal text-[16px] text-white">
            Apply  Now !
          </span>
          </Link>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
           Panaverse DAO
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
          Made with 🖤 By Faiza Baig
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
            // eslint-disable-next-line react/jsx-key
            // eslint-disable-next-line react/jsx-no-comment-textnodes
            // eslint-disable-next-line react/jsx-key
            // eslint-disable-next-line react/jsx-no-comment-textnodes
            // eslint-disable-next-line react/jsx-key
            <div className="w-[70px] h-[70px] p-[21px] rounded-full bg-red-100">
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
       </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
