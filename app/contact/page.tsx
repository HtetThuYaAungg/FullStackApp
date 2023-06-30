"use client"

import React, { FormEvent, useState } from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { Button } from '@/components'

const Contact = () => {


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message:""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
    const name = e.target.name;
  
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: e.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault();
    const { name, email, message } = formData
    console.log({
      name,
      email,
      message
    })
    setFormData({ name: '', email: '',message:'' });
  }

  return (
    <div className={styles.container}>
      <h1 className={`${styles.gradient} ${styles.title}`}>Let keep in Touch</h1>
      <div className={styles.contact}>
        <div className={styles.imageContainer}>
          <Image
            src="/contact.png"
            alt='contact'
            fill
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <div className=' justify-between items-center'>
          <label htmlFor="name" className='text-lg sm:text-xl font-bold mr-6'>Name : </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
              onChange={handleChange}
              className={styles.input}
          />
          </div>
          <div className=' justify-between items-center'>
          <label htmlFor="email" className='text-lg sm:text-xl font-bold mr-6'>E-mail : </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
              onChange={handleChange}
              className={styles.input}
          />
        </div>
          <div className='justify-between items-center'>
          <label htmlFor="message" className=' text-lg sm:text-xl font-bold mr-1.5'>Message : </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
              onChange={handleChange}
              className={styles.textarea}
          />
         </div>
          <Button
            title='Submit'
            btnType='submit'
            buttonStyles='m-2 w-[300px] bg-gradient-to-r from-green-500 to-gray-500 rounded-lg hover:opacity-50 text-opacity-100 transition-opacity duration-300'
            textStyles='text-black text-[14px] leading-[17px] font-bold p-2'
            buttonIcon=''
           handleClick={handleSubmit}
          />

        </form>
      </div>
    </div>
  )
}

export default Contact
