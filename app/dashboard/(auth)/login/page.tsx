"use client"

import React, { FormEvent,useState } from 'react'
import styles from './page.module.css'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const Login = () => {

  const session = useSession();

  const router = useRouter()

  if (session.status === "loading") {
    return <p>Loading...</p>
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLFormElement | HTMLButtonElement;

  const email = (target.querySelector<HTMLInputElement>('[name="email"]') as HTMLInputElement).value;
    const password = (target.querySelector<HTMLInputElement>('[name="password"]') as HTMLInputElement).value;
    
    signIn("credentials",{email,password});
  

  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        {/* <input type='text' placeholder='username' name='name' className={styles.input} required/> */}
        <input type='email' placeholder='email' name='email' className={styles.input} required/>
        <input type='password' placeholder='password' name='password' className={styles.input} required />
        <button className={styles.button}>Login</button>
      </form>
      <div className='flex gap-2 p-4 items-center justify-center'>
        <button onClick={() => signIn("google")} className=' p-3 rounded-md border-2 border-gray-500 border-solid'>Login with google</button>
        <span><Link href='/dashboard/register'>Create new account?</Link></span>
      </div>
    
    </div>
  )
}

export default Login
