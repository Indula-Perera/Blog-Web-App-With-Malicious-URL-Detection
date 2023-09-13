import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
         <b >Hey! This Is Cyber Blog </b> Discover New Cyber Things And News. 
      </h1>

      <div className={styles.post}>
          <div className={styles.imgContainer}>
            <Image src="/mail.jpg" alt="" fill className={styles.image}/>
          </div>

          <div className={styles.textContainer}>
            <h1 className={styles.postTitle}>  Barracuda Email Security Gateway Attack Timeline</h1>
            <p className={styles.postDesc}>
            When a product, that has the word &lsquo;Security&apos; in its name, becomes the target of a zero-day attack which ends up compromising several other businesses, it is certainly an event to be studied and learn from. Hence, we created this timeline that covers everything that happened in the Barracuda Email Security Gateway Appliances Attack.  

            We have created this educational timeline that covers the cyber incident as it unfolded in a chronological order. In this timeline, we’ve categorised the data as: The Incident, the Impact it had on the business and its many customers, and the actions taken by Barracuda and the government. 
            </p>
            <button className={styles.button}>Read More</button>
          </div>


      </div>
    </div>
  );
};

export default Featured;
