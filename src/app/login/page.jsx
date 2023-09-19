import Image from 'next/image'
import styles from './loginPage.module.css'

const LoginPage = () => {
  return (
    <div className={styles.container}>
       <div className={styles.wrapper}>

        <div className={styles.socialButton}> <Image src="/google.png" alt='' width={20} height={20}/> Sign in width Google </div>
        <div className={styles.socialButton}> <Image src="/github.png" alt='' width={20} height={20}/>Sign in width Github </div>
        <div className={styles.socialButton}> <Image src="/facebook.png" alt='' width={20} height={20}/>Sign in width Facebook </div>
      
      </div>
    </div>
  )
}

export default LoginPage
