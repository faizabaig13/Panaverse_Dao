import React from 'react'
import { zoomIn } from '../utils/motion';
import { motion } from 'framer-motion';
import '../styles/globals.css'
import { Navbar } from '../components';
import Link from 'next/link';
const Syllabus = () => {
  return (

<div className="bg-green-100 container h-auto w-full max-w-full">
<Navbar />
  <h1 className='text-black text-4xl font-bold text-center p-10'>Detailed Course Syllabus</h1>
<div className='bg-white w-2/3 h-auto mx-auto p-5 container'>
<div className='container text-center'>
<h1>Quarter I (Core)</h1>
CS-101: Object-Oriented Programming using TypeScript
<h1>Duration: 13 Weeks</h1>

<h1 className='text-left mt-5 font-extrabold'>Course Description: 

</h1>
<p className='text-left mb-12 font-extralight'>We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users. </p>

<h1 className='text-left mt-5 font-extrabold'>Course Outline: </h1>
 
<h1 className='text-left font-extrabold mt-6'>1.HTML and CSS (Homework) </h1>

<p className='text-left font-extralight'>
  
Learn HTML by Hira Khan (Watch Recorded Videos)
<br />
<Link href='https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6 ' className='text-red-400 underline lg:text-sm sm:text-xs sm:w-5'>Click Here to View!</Link>


  </p>
  <p  className='text-left mb-12 font-extralight'>
  <br />
Learn CSS Intro by Hira Khan (Watch Recorded Videos)
<br />
<Link href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob" className='text-red-400 underline lg:text-sm sm:text-xs sm:w-5'>Click Here to View!</Link>


  </p>



  <h1 className='text-left font-extrabold mt-6'>1.Web 3.0 and Metaverse Theory </h1>
  <p className='text-left font-extralight'>
  
  Introduction to Panaverse DAO

<br />
<Link href='https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing' className='text-red-400 underline lg:text-sm sm:text-xs sm:w-5' >Click Here to View!</Link>
  </p>


  <p className='text-left font-extralight'>
  
  Web 3.0 User Guide


<br />
<Link href='https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing' className='text-red-400 underline lg:text-sm sm:text-xs sm:w-5'>Click Here to View!
</Link>
  </p>



  <h1 className='text-left font-extrabold mt-6'>Complete Web 3 Assignments included in the Web 3 User Guide
 </h1>

 <p className='text-left font-extralight'>
  
  Web 3.0 User Guide
<br />
Virtual and Augmented  Metaverse User Guide

<br />
<Link href='https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing ' className='text-red-400 underline lg:text-sm sm:text-xs sm:w-5'>Click Here to View!

</Link> 
  </p>


  <h1 className='text-left font-extrabold mt-6'>3.Fundamentals of Typescript </h1>

  <h1 className='text-left font-extrabold mt-6'>TypeScript Presentation</h1>.
  <p className='text-left font-extralight'>
<Link href='https://docs.google.com/presentation/d/1-7Kb3laJjJ68mOTF9v0fHImk5vTol0CeE43Sg8hoUXQ/edit?usp=sharing ' className='text-red-400 underline lg:text-sm sm:text-xs sm:w-5'>Click Here to View!
</Link>
  </p>


  <h1 className='text-left font-extrabold mt-6'>Getting Started Exercises with TypeScript and Node.js
</h1>.
  <p className='text-left font-extralight'>
<Link href='https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md ' className='text-red-400 underline lg:text-sm sm:text-xs sm:w-5'>Click Here to View!
</Link>
  </p>

  <h1 className='text-left font-extrabold mt-6'>Fundamentals of JavaScript and Node.js Quiz
<br/>
<br/>
Topics Covered in the Quiz:


</h1>.

<p className='text-left font-extralight'>
A. Background of JavaScript and How to use JavaScript in Browser
<br />
B. Variables, Primitive data types Analyzing and modifying data types, and Operators (Chapter 2 of JavaScript from Beginner to Professional)


C.Intro to Node.js, .mjs files, Modules, NPM, import, export, and using external modules with npm:
<br/>
<br/>
<Link href="https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing" className='text-red-400 underline lg:text-sm sm:text-xs sm:w-5'>Click Here to View</Link>

<br/>
<br/>
D.How to accept user input in your Node.js JavaScript programs, this will allow us to create interactive Node.js console programs using prompt-sync library. The last example in this presentation shows you how to use prompt-sync library in your Node.js programs:
<br/>
<br/>
<Link href="https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing"className='text-red-400 underline lg:text-sm sm:text-xs sm:w-5'>Click Here to View</Link>
<br />
<span className='text-red-500 font-extrabold'>
Note: After this point, we will do all our class work and exercises using Node.js in .mjs files. We will also be able to develop interactive Node.js console programs which will greatly help the students to learn.
  
</span>
<br />
<br />
E.Using Arrays and Objects in Node.js Programs (chapter 3 of JavaScript from Beginner to Professional)


<br />
<br />
F.Using if and if else statements, else if statements, Conditional ternary operators, and switch statements in Node.js programs (chapter 4 of JavaScript from Beginner to Professional)

<br />
<br />
G.Using while loop, do while loop, for loop, for in, and for of loop in Node.js (chapter 5 of JavaScript from Beginner to Professional)
<br />
<br />
H.Using Basic functions, Function arguments, Return, Variable scope in functions, Recursive functions, Nested functions, Anonymous functions, and Function callbacks in Node.js (chapter 6 of JavaScript from Beginner to Professional)
<br />
<br />
I.Using Concurrency, Callbacks, Promises, async / await, and Event loop (chapter 13 of JavaScript from Beginner to Professional)
<br />
<br />
J.JavaScript promises, mastering the asynchronous
<br/>
<br/>
<Link href="https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript"className='text-red-400 underline lg:text-sm sm:text-xs sm:w-5'>Click Here to View</Link>
<br />
<br />
K.New JavaScript Features in ECMAScript 2022 and 2021
<br/>
<br/>
<Link href="https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg 
"className='text-red-400 underline lg:text-sm sm:text-xs sm:w-5'>Click Here to View</Link>
  </p>
<br/>
<h1 className='text-left font-extrabold mt-6'>4. Object-Oriented Programming with TypeScript</h1>
<p className='text-left font-extralight'>

Chapters 1-11 of Learning TypeScript: Enhance Your Web Development Skills Using Type-Safe JavaScript
<br />
<br />
<Link href="https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1"className='text-red-400 underline lg:text-sm sm:text-xs sm:w-5'>Click here to View Link!</Link>

<br/>
<br />
Learning Repository
<br/>
<br/>
<Link href="https://github.com/panaverse/learn-typescript"className='text-red-400 underline lg:text-sm sm:text-xs sm:w-5'>Click here to View Link!</Link>

<br/>
<br />
In Class Companion projects and articles for Learning TypeScript
<br/>
<br/>
<Link href="https://www.learningtypescript.com/ "className='text-red-400 underline lg:text-sm sm:text-xs sm:w-5'>Click here to View Link!</Link>

<br/>
<br />
Homework Project
<br/>
<br/>
<Link href="https://github.com/panaverse/typescript-node-projects"className='text-red-400 underline lg:text-sm sm:text-xs sm:w-5'>Click here to View Link!</Link>

<br />
<br />
Fundamentals of TypeScript Quiz

TypeScript Professional Proficiency Quiz

  </p>
  <h1 className='text-left font-extrabold mt-6'>5. TypeScript for React</h1>
  <p className='text-left font-extralight'>

  Minimal TypeScript Crash Course For React
With Interactive Code Exercises
<br />
<br />
<Link href="https://profy.dev/article/react-typescript"className='text-red-400 underline lg:text-sm sm:text-xs sm:w-5'>Click Here!</Link>
  </p>
  <h1 className='text-left font-extrabold mt-6'>1.Fundamentals of Version Control with Git Quiz
  <p className='text-left font-extralight'>
  Version Control using Git and GitHub By Sir Zeeshan Hanif (Watch Recorded Videos)
<br />
<br />
<Link href="https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF "className='text-red-400 underline lg:text-sm sm:text-xs sm:w-5'>Click Here to View!</Link>
<br />
<br />
Chapters 1, 2, 3, and 4 Learn Version Control with Git: A step-by-step course for the complete beginner by Tobias Günther 
<br />
<br />
We will also cover these readings:
<br />
<br />
<Link href="https://help.github.com/articles/markdown-basics/ 

"className='text-red-400 underline lg:text-sm sm:text-xs sm:w-5'>Click Here to View!</Link>
<br />
<br />
<Link href="http://stackoverflow.com/questions/5009600/difference-between-fork-and-branch-on-github 
 "className='text-red-400 underline lg:text-sm sm:text-xs sm:w-5'>Click Here to View!</Link>
 <br />
<br />
<Link href="http://stackoverflow.com/questions/3329943/git-branch-fork-fetch-merge-rebase-and-clone- "className='text-red-400 underline lg:text-sm sm:text-xs sm:w-5'>Click Here to View!</Link>
<br />
<br />
<Link href="what-are-the-differences"className='text-red-400 underline lg:text-sm sm:text-xs sm:w-5'>Click Here to View!</Link>
<br />
<br />
<Link href="https://git-scm.com/book/en/v2/Git-Branching-Rebasing 
"className='text-red-400 underline lg:text-sm sm:text-xs sm:w-5'>Click Here to View!</Link>
<br />
<br />
<Link href="http://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#Tracking-Branches 
 "className='text-red-400 underline lg:text-sm sm:text-xs sm:w-5'>Click Here to View!</Link>
 <br />
<br />
For practice: 
<br />
<br />
<Link href="https://try.github.io/levels/1/challenges/1 
 "className='text-red-400 underline lg:text-sm sm:text-xs sm:w-5'>Click Here to View!</Link>
<br />
<br />
Homework:
<br />
<br />
<Link href="https://www.datacamp.com/courses/introduction-to-git-for-data-science  
 
 "className='text-red-400 underline lg:text-sm sm:text-xs sm:w-5'>Click Here to View!</Link>
<br />
<br />

Git Cheatsheet
<br />
<br />
<Link href="https://www.kdnuggets.com/2022/11/git-data-science-cheatsheet.html 
 "className='text-red-400 underline lg:text-sm sm:text-xs sm:w-5'>Click Here to View!</Link>
 <br />
 <br />
<span className='font-extrabold'>Git Quiz</span>
<br />
<br />
Total Questions: 60, Total Time: 75 minutes



<br />
 <br />
<span className='font-extrabold'>2.TypeScript Proficiency Quiz</span>
<br />
<br />
Total Questions: 63 <br/>
Duration: 120 minutes 
  </p>
</h1>
  
</div>
<div className='w-100 flex justify-between'>
<button className='bg-red-300 text-white font-extralight p-4 mt-12'><Link href="SyllabusTwo">View Quarter Two Syllabus</Link></button>

</div>
    </div>
</div>
  )
}

export default Syllabus