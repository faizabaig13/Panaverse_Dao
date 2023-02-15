import React from 'react'
import '../styles/globals.css'
import { zoomIn } from '../utils/motion';
import { motion } from 'framer-motion';
import '../styles/globals.css'
import { Navbar } from '../components';
import Link from 'next/link';
const SyllabusThree = () => {
  return (
  <>
  <div className="bg-green-100 container h-auto w-full max-w-full">
<Navbar />
  <h1 className='text-black text-4xl font-bold text-center p-10'>Quarter III Syllabus</h1>
<div className='bg-white w-2/3 h-auto mx-auto p-5 container'>
<div className='container text-center'>
<h1>Quarter III (Core)</h1>
$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development
<h1>Duration: 13 Weeks</h1>

<h1 className='text-left mt-5 font-extrabold'>Earn While You Learn Projects
<br/>
<br/>
Build Full-Stack Next.js 13 Jamstack Templates


</h1>
<p className='text-left mb-12 font-extralight'>You will be assigned to build a template which we will sell on Theme Forest and Panaverse DAO marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens. 
</p>

<h1 className='text-left mt-5 font-extrabold'>The Template Standard</h1>
<Link href='https://github.com/panaverse/panaverse-template-standard 
' className='text-red-400 underline lg:text-sm sm:text-xs sm:w-5'>Click Here to View!</Link>


<h1 className='text-left mt-5 font-extrabold'>
Build QraphQL APIs 

</h1>
<p className='text-left font-extralight'>

<br />
You will be assigned to build APIs for which you will sell subscriptions on the Panaverse DAO Marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens. 
  </p>
</div>
<button className='bg-red-300 text-white font-extralight p-4 mt-12'><Link href="SyllabusFour">View Quarter Four Syllabus</Link></button>
    </div>
</div>
  </>
  )
}

export default SyllabusThree