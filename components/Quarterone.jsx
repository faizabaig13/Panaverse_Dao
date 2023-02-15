import React from 'react'
import Link from 'next/link'
const Quarterone = () => {
  return (
<>
<div className='bg-white w-2/3 max-h-5/6 h-5/6 mx-auto p-5'>
<h1 className='font-bold text-3xl'>Quarter I (Core)</h1>
<p className='text-black/50 mt-2 mb-12'>CS-101: Object-Oriented Programming using TypeScript</p>

<h1 className='font-bold text-3xl'>Quarter II (Core)</h1>
<p className='text-black/50 mt-2 mb-12'>W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform
</p>


<h1 className='font-bold text-3xl'>Quarter III (Core)</h1>
<p className='text-black/50 mt-2 mb-12'>$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development

</p>



<h1 className='font-bold text-3xl'>Quarter IV</h1>
<p className='text-black/50 mt-2 mb-12'>W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps
</p>


<h1 className='font-bold text-3xl'>Quarter V</h1>
<p className='text-black/50 mt-2 mb-12'>MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences
</p>
<div className='w-100 flex justify-between'>
<button className='bg-red-300 text-white font-extralight p-4 mt-12'>  <Link href="/Syllabus"> View Syllabus</Link></button>
{/* <button className='bg-red-300 text-white font-extralight p-4 mt-12'><Link href="congratulationPage">Course Completed</Link></button> */}
</div>

</div>
</>
  )
}

export default Quarterone