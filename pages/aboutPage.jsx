/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
'use client';
import '../styles/globals.css'
import { motion } from 'framer-motion';
import { Footer, TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import NavBar from '../components/Navbar';

const About = () => (
  <>

 <div className="bg-green-100 container h-screen w-full max-w-full">
 <NavBar/>
  <section className={`${styles.paddings} relative`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      {/* <TypingText title="A One and Quarter Years Panaverse DAO Earn as you Learn Program" textStyles="text-center" /> */}

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-red-200 text-lg">Getting Ready for the Next Generation of the Internet
</span> 
{' '}
        <span className="font-extrabold text-red-200 text-lg">
        Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient 
        Computing/IoT, Network Automation, and Bioinformatics Technologies 


        </span>{' '}
        <span className="font-extrabold text-red-200 text-lg">VR</span> devices you can
        The internet is without a doubt the most important technological development in human history. Web3, 3D Metaverse, AI, IoT, Cloud, and Edge technologies expand the internet as we know it by introducing novel features and advancements. Metaverse will make use of all aspects of modern technology, including 3D, VR, AR, AI, blockchain, cloud and edge computing, voice computing, ambient computing, and more.

      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
  {/* <Footer /> */}
  </div>
  </>
);

export default About;