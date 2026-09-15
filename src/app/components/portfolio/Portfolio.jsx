import React from 'react'
import Navbar from '../navbar/Navbar'

const projects = [
  { id: 1, title: 'Tailwind-Alibaba', img: '/pro/ali1.jpg', live: 'https://yasamanmrz.github.io/Alibaba.TailwindCSS/src/index.html' },
  { id: 2, title: 'Accounting', img: '/pro/fi1.jpg', live: 'https://yasamanmrz.github.io/Finance/src/index.html' },
  { id: 3, title: 'XO Game', img: '/pro/xo1.jpg', live: 'https://yasamanmrz.github.io/TIC-TAC-TOE/src/index.html' },
  { id: 4, title: 'Quiz Test', img: '/pro/test2.jpg', live: 'https://quiz-test-liard.vercel.app/' },
  { id: 5, title: 'Weather App', img: '/pro/we6.jpg', live: 'https://weather-app-brown-eta-64.vercel.app/' },
  { id: 6, title: 'Elegant Shop', img: '/pro/cl1.jpg', live: 'https://shop-next-iota-six.vercel.app/' },
  { id: 7, title: 'Admin Dashboard', img: '/pro/dash2.jpg', live: 'https://admin-dashboard-aj7d.vercel.app/' },
  { id: 8, title: 'Parallax', img: '/pro/car3.jpg', live: 'https://yasamanmrz.github.io/Parallax-Forge/src/index.html' },
  { id: 9, title: 'other projects', img: '/pro/wo1.jpg', live: 'https://github.com/yasamanmrz' }
]

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-(--background)">
      <Navbar />
      <div className="w-full min-h-screen px-6 py-24 sm:px-10 md:px-16 lg:px-24 xl:px-40">
        <div className='relative flex items-center justify-center mb-20'>
          <span className='uppercase absolute text-6xl sm:text7xl lg:text-8xl font-extrabold text-(--surface-light) opacity-60 tracking-widest'>Works</span>
          <h1 className='relative uppercase text-3xl sm:text-4xl lg:text-5xl text-(--cream) font-extrabold'>My <span className='uppercase text-(--primary)'>Portfolio</span></h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projects.map((val) => {
            return (
              <a key={val.id} href={val.live} target='_blank' rel='noopener' className='group relative overflow-hidden rounded-lg'>
                <img src={val.img} alt={val.title} className='w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110' />
                <div className='absolute inset-0 flex items-center justify-center bg-(--background)/90 opacity-0 transition-all duration-500 group-hover:opacity-100'>
                  <div className='text-center translate-y-8 transition-transform duration-500 group-hover:translate-y-0'>
                    <h2 className='text-xl sm:text-2xl font-bold uppercase text-(--cream)'>{val.title}</h2>
                    <span className='inline-block mt-3 text-sm uppercase text-(--primary)'>
                      Live Demo
                    </span>
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </main>
  )
}
