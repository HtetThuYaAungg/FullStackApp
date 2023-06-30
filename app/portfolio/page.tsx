

import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href="/portfolio/illustrations" className={styles.link}>
          <span className={styles.imageTitle}>Illustrations</span>
        </Link>
        <Link href="/portfolio/websites" className={styles.link}>
          <span className={styles.imageTitle}>websites</span>
        </Link>
        <Link href="/portfolio/applications" className={styles.link}>
          <span className={styles.imageTitle}>Applications</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio
