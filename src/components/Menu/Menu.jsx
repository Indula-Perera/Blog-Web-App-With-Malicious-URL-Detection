import React from "react";
import styles from "./Menu.module.css";
import Link from "next/link";
import Image from "next/image";
const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot "}</h2>
      <h1 className={styles.title}> Most Popular</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.Code}`}> Codes </span>
            <h3 className={styles.postTitle}>
              Barracuda Email Security Gateway Attack Timeline
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe - </span>
              <span className={styles.date}>13.09.2023</span>
            </div>
          </div>
        </Link>

        <Link href="/" className={styles.item}>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.Cyber}`}>
              {" "}
              Cyber Threat{" "}
            </span>
            <h3 className={styles.postTitle}>
              Barracuda Email Security Gateway Attack Timeline
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe - </span>
              <span className={styles.date}>13.09.2023</span>
            </div>
          </div>
        </Link>

        <Link href="/" className={styles.item}>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.Chat}`}>
              {" "}
              Chat GPT{" "}
            </span>
            <h3 className={styles.postTitle}>
              Barracuda Email Security Gateway Attack Timeline
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe - </span>
              <span className={styles.date}>13.09.2023</span>
            </div>
          </div>
        </Link>

        <Link href="/" className={styles.item}>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.Dark}`}>
              {" "}
              Dark Web{" "}
            </span>
            <h3 className={styles.postTitle}>
              Barracuda Email Security Gateway Attack Timeline
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe - </span>
              <span className={styles.date}>13.09.2023</span>
            </div>
          </div>
        </Link>
      </div>

      {/* Part ii */}

      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}> Categories</h1>
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
          className={`${styles.category} ${styles.Ai}`}
        >
          AI
        </Link>

        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.Chat}`}
        >
          Chat GPT
        </Link>

        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.Code}`}
        >
          Code
        </Link>

        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.Dark}`}
        >
          Dark Web
        </Link>

        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.Virus}`}
        >
          Virus
        </Link>
      </div>

      {/* Part iii */}

      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}> Editors Pick</h1>
    
    </div>
  );
};

export default Menu;
