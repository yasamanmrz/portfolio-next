import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <main className='min-h-screen bg-(--background) text-(--cream) flex items-center justify-center px-6'>
       <div className='text-center'>
          <p className='mb-4 text-sm uppercase tracking-[0.35em] text-(--primary-light)'>
            Page Not Found
          </p>
          <h1 className='text-[clamp(7rem,20vw,14rem)] leading-none font-bold tracking-tight text-(--primary)'>
            404
          </h1>
          <h2 className='mt-4 text-2xl smd:text-3xl'>
            This page does not exist
          </h2>
          <p className='mx-auto mt-4 max-w-md text-sm md:text-base leading-7 text-(--primary-light)'>
            The page you are looking for may have been moved, deleted, or the URL may be incorrect
          </p>
          <Link href='/' className='mt-8 inline-flex items-center rounded-lg bg-(--primary) px-6 py-3 font-semubold text-(--cream) transition-all duration-300 hover:opacity-80'>Back to Home</Link>
       </div>
    </main>
  )
}
