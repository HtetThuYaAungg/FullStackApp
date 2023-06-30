import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <p> Full Stack Next App 2023 </p>
      <span> All right served &copy;</span> 
      <div className={styles.social}>
      <Image
        src='/1.png' 
        alt="facebook"
          width={15}
          height={15}
          className={styles.icons}
        />
        <Image
        src='/2.png' 
        alt="facebook"
         width={15}
          height={15}
          className={styles.icons}
        />
        <Image
        src='/3.png' 
        alt="facebook"
         width={15}
          height={15}
          className={styles.icons}
        />
        <Image
        src='/4.png' 
        alt="facebook"
         width={15}
          height={15}
          className={styles.icons}
      />
      </div>
     
    </div>  
  )
}

export default Footer
