'use client'

import Link from 'next/link'
import React, { useState } from 'react'

import { FiHome, FiUser, FiCode, FiBriefcase, FiMail, FiMenu, FiX, } from 'react-icons/fi'

const navItem = [
  { label: 'Home', href: '/', icon: FiHome },
  { label: 'About', href: '/about', icon: FiUser },
  { label: 'Portfolio', href: '/portfolio', icon: FiBriefcase },
  { label: 'Contact', href: '/contact', icon: FiMail }
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleNavClick = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <header className='fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b border-(--border) bg-(--background) px-5 md:hidden'>
        <Link href='/' onClick={handleNavClick} className='text-xl font-bold tracking-wider text-(--cream)'>YS<span className='text-primary'>.</span></Link>
        <button type='button' onClick={() => setMenuOpen(!menuOpen)} className='flex h-11 w-11 items-center justify-center rounded-lg text-(--cream) transition hover:bg-surface' aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          {menuOpen ? (<FiX />) : (<FiMenu />)}
        </button>
      </header>
      <div className={`fixed inset-0 z-40 bg-(--background) pt-24 transition-all duration-300 md:hidden ${menuOpen ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'}`}>
        <nav className="flex flex-col px-6">
          {navItem.map((item) => {
            const Icon = item.icon
            return (
              <Link key={item.href} href={item.href} onClick={handleNavClick} className="flex items-center gap-4 border-b border-(--border) py-5 text-lg text-(--cream) transition-colors hover:text-(--primary)"> <Icon size={20} /><span>{item.label}</span></Link>
            )
          })}
        </nav>
      </div>
      {/* Desktop Navigation */}
      <nav className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 md:flex">
        <div className="flex flex-col items-end gap-4">
          {navItem.map((item) => {
            const Icon = item.icon
            return (
              <Link key={item.href} href={item.href} className=" group flex h-12 w-12 items-center justify-end overflow-hidden rounded-full border border-(--border) bg-(--background) text-(--cream) transition-all duration-300 ease-out hover:w-32 hover:border-(--primary) hover:bg-(--primary) hover:text-(--background)">
                <span className=" mr-3 whitespace-nowrap text-sm font-medium opacity-0 transition-all duration-200 group-hover:opacity-100">{item.label}</span>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center"><Icon size={20} /></span>
              </Link>
            )
          })}
        </div>
      </nav>
    </>
  )
}
