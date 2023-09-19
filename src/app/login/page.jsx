import Image from 'next/image'
import styles from './loginPage.module.css'

const LoginPage = () => {
  return (
    <div className={styles.container}>
       <div className={styles.wrapper}>

        <div className={styles.socialButton}> <Image src="/google.png" alt='' width={30} height={30} className={styles.img}/> Sign in with Google </div>
        <div className={styles.socialButton}> <Image src="/github.png" alt='' width={30} height={30} className={styles.img}/>Sign in with Github </div>
        <div className={styles.socialButton}> <Image src="/facebook.png" alt='' width={30} height={30} className={styles.img}/>Sign in with Facebook </div>
      
      </div>
    </div>
  )
}

export default LoginPage
