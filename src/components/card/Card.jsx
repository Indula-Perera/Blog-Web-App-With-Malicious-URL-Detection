import Image from "next/image"
import styles from "./card.module.css"


const card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/mail.jpg" alt="" fill/>
      </div>

      <div className={styles.textContainer}></div>
    </div>
  )
}

export default card
