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
        <div className={styles.imageContainer}>
          <Image src="/code.jpg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.Code}`}>
            {" "}
            Codes{" "}
          </span>
          <h3 className={styles.postTitle}>Barracuda Email Security Gateway Attack Timeline</h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe - </span>
            <span className={styles.date}>13.09.2023</span>
          </div>
        </div>
        </Link>
        
        <Link href="/" className={styles.item}>
        <div className={styles.imageContainer}>
          <Image src="/mail.jpg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.Cyber}`}>
            {" "}
            Cyber Threat{" "}
          </span>
          <h3 className={styles.postTitle}>Barracuda Email Security Gateway Attack Timeline</h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe - </span>
            <span className={styles.date}>13.09.2023</span>
          </div>
        </div>
        </Link>
               
        <Link href="/" className={styles.item}>
        <div className={styles.imageContainer}>
          <Image src="/chatgpt.png" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.Chat}`}>
            {" "}
            Chat GPT{" "}
          </span>
          <h3 className={styles.postTitle}>Barracuda Email Security Gateway Attack Timeline</h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe - </span>
            <span className={styles.date}>13.09.2023</span>
          </div>
        </div>
        </Link>

        
        <Link href="/" className={styles.item}>
        <div className={styles.imageContainer}>
          <Image src="/dark.jpg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.Dark}`}>
            {" "}
            Dark Web{" "}
          </span>
          <h3 className={styles.postTitle}>Barracuda Email Security Gateway Attack Timeline</h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe - </span>
            <span className={styles.date}>13.09.2023</span>
          </div>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
