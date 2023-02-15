'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { startingFeatures } from '../constants';
import { StartSteps, TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

const AboutPanaverse = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/get-started.png"
          alt="get-started"
          className="w-[150%] h-[150%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="Panaverse Plan" />
        {/* <TitleText title={<>The Program in a Nutshell: Earn While You Learn</>}  className="text-3xl"/> */}
        <h1 className='text-red-400 text-5xl font-semibold'>The Program in a Nutshell: Earn While You Learn</h1>
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
 <p>
 In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the programs beginning. It resembles a cross between a corporate venture and an educational project.

 </p>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default AboutPanaverse;