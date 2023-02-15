import React from 'react'
// import useWindowSize from 'react-use/lib/useWindowSize'
import { TitleText } from '../components'
import { TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';
import NavBar from '../components/Navbar';
import '../styles/globals.css'
import { motion } from 'framer-motion'
import Confetti from 'react-confetti'
const congratulationPage = () => {
  return (
    <>
{/*    
      <Confetti
      width={1500}
      height={800}
      
    /> */}
      <div className="bg-green-100 w-screen h-screen ">
    <NavBar />
    
   <TitleText
          title={<>Congratulations!</>}
          textStyles="text-center"
          />
 {/* <TypingText title="You are a Certified WMD Developer" textStyles="uppercase text-center text-6xl pt-12 sm:text-sm md:text-2xl " /> */}
 <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        You are a Certified WMD Developer
        </motion.p>

   </div>
   </>
  )
}

export default congratulationPage