import styles from './loginPage.module.css'

const LoginPage = () => {
  return (
    <div className={styles.container}>
       <div className={styles.wrapper}>

        <div className={styles.socialButton}> Sign in width Google </div>
        <div className={styles.socialButton}> Sign in width Github </div>
        <div className={styles.socialButton}> Sign in width Facebook </div>
      
      </div>
    </div>
  )
}

export default LoginPage
