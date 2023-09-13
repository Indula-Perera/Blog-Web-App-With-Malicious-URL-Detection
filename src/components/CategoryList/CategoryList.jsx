import React from "react";
import styles from "./CategoryList.module.css";
import Link from "next/link";
import Image from "next/image";
const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.Cyber}`}
        >
          <Image
            src="/Cyber.jpg"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Cyber Threat
        </Link>

        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.Ai}`}
        >
          <Image
            src="/Ai.jpg"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          AI
        </Link>

        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.Chat}`}
        >
          <Image
            src="/chatgpt.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Chat GPT
        </Link>

        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.Dark}`}
        >
          <Image
            src="/dark.jpg"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Dark Web
        </Link>

        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.Code}`}
        >
          <Image
            src="/code.jpg"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Code
        </Link>

        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.Virus}`}
        >
          <Image
            src="/Virus.jpg"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Virus
        </Link>


      </div>
    </div>
  );
};

export default CategoryList;
