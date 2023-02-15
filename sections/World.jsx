'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| Where we are?" textStyles="text-center" />
      <TitleText
        title={(
          <>
          Where We Are!
          </>
        )}
        textStyles="text-center font-bold"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        <div className="absolute top-1/4 bottom-20 right-20 w-[90px] h-[40px] p-[9px] text-cneter rounded-full bg-red-300 text-white font-thin">
          Karachi
        </div>

        <div className="absolute top-10 left-20 w-[90px] h-[40px] p-[9px] rounded-full bg-red-300 text-white font-thin">
         Lahore
        </div>

        <div className="absolute top-1/2 left-[40%] w-[90px] h-[40px] p-[10px] rounded-full bg-red-300 text-white font-thin">
       Islamabad
        </div>
        <div className="absolute top-3/4 left-[45%] w-[90px] h-[40px] p-[9px] rounded-full bg-red-300 text-white font-thin">
   Peshawar
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;