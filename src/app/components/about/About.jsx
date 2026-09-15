import React from 'react'
import Navbar from '../navbar/Navbar'
import { FiDownload } from 'react-icons/fi'
import MySkills from './MySkills'
import Image from 'next/image'


export default function About() {
  return (
    <main className="min-h-screen bg-(--background)">
      <Navbar />
      <div className="w-full min-h-screen px-6 py-24 sm:px-10 md:px-16 lg:px-24 xl:px-40">
        <div className='relative flex items-center justify-center mb-10'>
          <span className='uppercase absolute text-6xl sm:text7xl lg:text-8xl font-extrabold text-(--surface-light) opacity-60'>Resume</span>
          <h1 className='relative uppercase text-3xl sm:text-4xl lg:text-5xl text-(--cream) font-extrabold'>About <span className='uppercase text-(--primary)'>me</span></h1>
        </div>
        <div className='w-full'>
          <div className='w-full flex'>
          <div className='w-full lg:w-1/2 flex flex-col p-5 mb-5'>
            <h2 className='uppercase text-lg sm:text-2xl font-semibold text-(--beige) mb-7'>Personal Infos</h2>
            <div className='flex justify-between'>
              <div className='space-y-3'>
                <p className='text-md text-(--primary)'>First Name: <span className='text-(--primary-light) text-sm'>Yasaman</span></p>
                <p className='text-md text-(--primary)'>Last Name: <span className='text-(--primary-light) text-sm'>Mirzaei</span></p>
                <p className='text-md text-(--primary)'>Age: <span className='text-(--primary-light) text-sm'>29 years old</span></p>
                <p className='text-md text-(--primary)'>Languages: <span className='text-(--primary-light) text-sm'>Persian, English</span></p>
                <p className='text-md text-(--primary)'>Address: <span className='text-(--primary-light) text-sm'>Tehran</span></p>
                <p className='text-md text-(--primary)'>Nationality: <span className='text-(--primary-light) text-sm'>Iran</span></p>
                <p className='text-md text-(--primary)'>Email: <span className='text-(--primary-light) text-sm'>yasamanmirzaei1997@gmail.com</span></p>
                <p className='text-md text-(--primary)'>Education: <span className='text-(--primary-light) text-sm'>Bachelor of Science (B.Sc.) in Computer Engineering — In Progress<br/>Trained in Front-End Development at Parnian School</span></p>
              </div>
              <div className='space-y-3'>
              
              </div>
            </div>
            <div className="mt-12">
              <a href="/Yasaman-Mirzaei-CV.pdf" download className="inline-flex items-center gap-2 rounded-md bg-(--primary) px-6 py-3 text-sm font-semibold uppercase text-(--background) transition-all duration-300 hover:bg-(--primary-light)">
                Download CV
                <FiDownload size={18} />
              </a>
            </div>
          </div>
          <div className='hidden lg:flex lg:w-1/2 items-center justify-end'>
               <Image src='/yasaman.png' alt="Yasaman" width={800} height={1200} className="object-cover w-full max-w-lg"/>
          </div>
          </div>
          <div className='w-full border-t border-(--border) p-5'>
              <h2 className='uppercase text-lg sm:text-2xl font-semibold text-(--beige) mb-7'>my skills</h2>
               <MySkills />
          </div>
        </div>
      </div>
    </main>
  )
}
