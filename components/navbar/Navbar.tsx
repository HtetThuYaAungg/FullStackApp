"use client"

import { navLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import Button from '../btn/Button'
import DarkmodeToggle from '../darkmode/DarkmodeToggle'
import { signOut, useSession } from 'next-auth/react'

const Navbar = () => {

  const handleSubmit = () => {
    signOut()
    console.log("clicked")
  }

  const session = useSession();

  console.log("status", session.status)

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Test</Link>
      <div className={styles.link}>
        <DarkmodeToggle/>
        {navLinks.map((navLink) => (
              <Link href={navLink.url} key={navLink.id}>{navLink.title}</Link>
          ))}
      {/* <button className={styles.logout} onClick={()=>console.log("logout")}>
        Logout
        </button> */}
        {session.status == "authenticated" && (
        <Button
          title='Logout'
          buttonStyles='py-0 sm:py-2 pr-2 pl-2 items-center border-none bg-red-600 hover:bg-red-300 cursor-pointer rounded-md sm:rounded-lg'
          textStyles='hover:text-black text-xs sm:text-md sm:font-bold text-white'
          handleClick={handleSubmit}
          />
        )}

      </div>
        
    </div>
  )
}

export default Navbar
