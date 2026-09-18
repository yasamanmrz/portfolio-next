import React from 'react'

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGit, FaGitSquare, FaGithub, } from "react-icons/fa";

import { SiNextdotjs } from "react-icons/si";

export default function MySkills() {
  return (
    <div className="grid grid-cols-2  lg:grid-cols-6 gap-8 justify-between">
      <div className='flex flex-col items-center justify-center gap-4 p-8'>
        <FaHtml5 className='text-8xl sm:text-7xl md:text-6xl text-(--cream)' />
        <h3 className='text-lg font-semibold text-(--primary-light)'>HTML</h3>
      </div>
      <div className='flex flex-col items-center justify-center gap-4 p-8'>
        <FaCss3Alt className='text-8xl sm:text-7xl md:text-6xl text-(--cream)' />
        <h3 className='text-lg font-semibold text-(--primary-light)'>CSS</h3>
      </div>
      <div className='flex flex-col items-center justify-center gap-4 p-8'>
        <FaJs className='text-8xl sm:text-7xl md:text-6xl text-(--cream)' />
        <h3 className='text-lg font-semibold text-(--primary-light)'>JAVASCRIPT</h3>
      </div>
      <div className='flex flex-col items-center justify-center gap-4 p-8'>
        <FaReact className='text-8xl sm:text-7xl md:text-6xl text-(--cream)' />
        <h3 className='text-lg font-semibold text-(--primary-light)'>REACT</h3>
      </div>
      <div className='flex flex-col items-center justify-center gap-4 p-8'>
        <SiNextdotjs className='text-8xl sm:text-7xl md:text-6xl text-(--cream)' />
        <h3 className='text-lg font-semibold text-(--primary-light)'>NEXT.JS</h3>
      </div>
      <div className='flex flex-col items-center justify-center gap-4 p-8'>
        <FaGitSquare className='text-8xl sm:text-7xl md:text-6xl text-(--cream)' />
        <h3 className='text-lg font-semibold text-(--primary-light)'>GIT</h3>
      </div>
    </div>
  )
}
