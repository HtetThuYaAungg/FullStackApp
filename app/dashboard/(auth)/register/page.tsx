"use client"

import React, { FormEvent,useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Register = () => {

  const [err, setErr] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLFormElement | HTMLButtonElement;

  const name = (target.querySelector<HTMLInputElement>('[name="name"]') as HTMLInputElement).value;
  const email = (target.querySelector<HTMLInputElement>('[name="email"]') as HTMLInputElement).value;
  const password = (target.querySelector<HTMLInputElement>('[name="password"]') as HTMLInputElement).value;
  
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,email,password,
        })

      });
      res.status === 201 && router.push("/dashboard/login?success==Account has been created")
      // Handle the response
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type='text' placeholder='username' name='name' className={styles.input} required/>
        <input type='email' placeholder='email' name='email' className={styles.input} required/>
        <input type='password' placeholder='password' name='password' className={styles.input} required />
        <button className={styles.button}>Register</button>
      </form>
      {err && "Something went wrong!"}
      <Link href='/dashboard/login'>Login with existing account?</Link>
    </div>
  )
}

export default Register
