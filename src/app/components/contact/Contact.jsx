import React from 'react'
import Navbar from '../navbar/Navbar'
import { FiGithub, FiInstagram, FiLinkedin, FiMail, FiPhoneCall, FiSend } from 'react-icons/fi'
import ContactInfo from './ContactInfo'
import Link from 'next/link'

export default function Contact() {
  return (
    <main className="min-h-screen bg-(--background)">
      <Navbar />
      <div className="w-full min-h-screen px-6 py-24 sm:px-10 md:px-16 lg:px-24 xl:px-40">
        <div className='relative flex items-center justify-center mb-12 sm:mb-16 lg:mb-20'>
          <span className='uppercase absolute text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-(--surface-light) opacity-60 tracking-widest'>Contact</span>
          <h1 className='relative uppercase text-3xl sm:text-4xl lg:text-5xl text-(--cream) font-extrabold'>Get In <span className='uppercase text-(--primary)'>Touch</span></h1>
        </div>
        <div className='w-full flex flex-col lg:flex-row'>
          <div className='w-full lg:w-1/3 p-4 sm:p-6 lg:p-10 flex flex-col gap-8'>
            <div className='w-full flex gap-3'>
              <div className='flex items-center justiify-center'>
                <FiMail size={35} className='text-(--primary)' />
              </div>
              <div>
                <h2 className='w-full text-(--primary) text-md'>Mail me :</h2>
                <p className='w-full text-(--primary-light) text-sm break-all'>yasamanmirzaei1997@gmail.com</p>
              </div>
            </div>
            <div className='w-full flex gap-3'>
              <div className='flex items-center justiify-center'>
                <FiPhoneCall size={35} className='text-(--primary)' />
              </div>
              <div>
                <h2 className='w-full text-(--primary) text-md'>Call me :</h2>
                <p className='w-full text-(--primary-light) text-sm'>09198784704</p>
              </div>
            </div>
            <div className='flex flex-wrap items-center justify-start gap-4 mt-5'>
               <Link className='bg-(--primary) rounded-full w-12 h-12 flex items-center justify-center' href='https://www.instagram.com/yasaman_dev?igsh=MWZkMGNmazlidTV3cQ=='><FiInstagram size={22} className='text-(--cream)'/></Link>
               <Link className='bg-(--primary) rounded-full w-12 h-12 flex items-center justify-center' href='https://www.linkedin.com/in/yasaman-mirzaei-b9499537b'><FiLinkedin size={22} className='text-(--cream)'/></Link>
               <Link className='bg-(--primary) rounded-full w-12 h-12 flex items-center justify-center' href='https://github.com/yasamanmrz'><FiGithub size={22} className='text-(--cream)'/></Link>
               <Link className='bg-(--primary) rounded-full w-12 h-12 flex items-center justify-center' href='https://t.me/Yasmrz1997'><FiSend size={22} className='text-(--cream)'/></Link>
            </div>
          </div>
          <div className='w-full lg:w-2/3 p-4 sm:p-6 lg:p-10'>
            <ContactInfo />
          </div>
        </div>
      </div>ّ
    </main>
  )
}
