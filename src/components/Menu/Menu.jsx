import React from 'react'
import styles from "./Menu.module.css"
import Link from 'next/link'
import Image from 'next/image'
const Menu = () => {
  return (
    <div className={styles.container}> 
    <h2>{"What's hot "}</h2>
    <h1> Most Popular</h1>
    <div className={styles.items}>
      <Link href="/" className={styles.item}></Link>
      <div className={styles.imageContainer}>
        <Image src="/mail.jpg" alt="" fill className={styles.image}/>
      </div>
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.Cyber}`}> Cyber Threat </span>
        
      </div>
    </div>
    </div>
  )
}

export default Menu
