import Menu from '@/components/menu/Menu'
import styles from './singlePage.module.css'
import Image from 'next/image'
import Comments from '@/components/comments/Comments'

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Barracuda Email Security Gateway Attack Timeline.</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
            <Image src="/mail.jpg" alt='' fill className={styles.avatar}/>  
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>15.09.2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/mail.jpg" alt='' fill className={styles.image}/>
          
        </div>
      </div>
      <div className={styles.content}>
      <div className={styles.post}>

        <div className={styles.description}>

          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit vero aspernatur minus in, quos ad temporibus ullam eos dolor sint fugit quo praesentium modi illo reiciendis totam veniam nisi est?</p>

          <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
          
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit vero aspernatur minus in, quos ad temporibus ullam eos dolor sint fugit quo praesentium modi illo reiciendis totam veniam nisi est?</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit vero aspernatur minus in, quos ad temporibus ullam eos dolor sint fugit quo praesentium modi illo reiciendis totam veniam nisi est?</p>
       
        </div>
        <div className={styles.comment}>
          <Comments/>
        </div>
      </div>
      <Menu/>
      </div>
    </div>
  )
}

export default SinglePage
