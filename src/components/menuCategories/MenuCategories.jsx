import React from 'react'
import styles from "./menuCategories.module.css"
import Link from 'next/link'

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
    <Link
      href="/blog?cat=style"
      className={`${styles.categoryItem} ${styles.Cyber}`}
    >
      {" "}
      Cyber Threat{" "}
    </Link>
    <Link
      href="/blog?cat=style"
      className={`${styles.categoryItem} ${styles.Ai}`}
    >
      AI
    </Link>

    <Link
      href="/blog?cat=style"
      className={`${styles.categoryItem} ${styles.Chat}`}
    >
      Chat GPT
    </Link>

    <Link
      href="/blog?cat=style"
      className={`${styles.categoryItem} ${styles.Code}`}
    >
      Code
    </Link>

    <Link
      href="/blog?cat=style"
      className={`${styles.categoryItem} ${styles.Dark}`}
    >
      Dark Web
    </Link>

    <Link
      href="/blog?cat=style"
      className={`${styles.categoryItem} ${styles.Virus}`}
    >
      Virus
    </Link>
  </div>
  )
}

export default MenuCategories
