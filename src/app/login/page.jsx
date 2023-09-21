"use client"

import Image from 'next/image'
import styles from './loginPage.module.css'
import { signIn, useSession } from 'next-auth/react'

const LoginPage = () => {

  const {data, status} = useSession();
  
  console.log(data, status)

  return (
    <div className={styles.container}>
       <div className={styles.wrapper}>

        <div className={styles.socialButton} onClick={() => signIn("google")}> <Image src="/google.png" alt='' width={30} height={30} className={styles.img}/> Sign in with Google </div>
        <div className={styles.socialButton}> <Image src="/github.png" alt='' width={30} height={30} className={styles.img}/>Sign in with Github </div>
        <div className={styles.socialButton}> <Image src="/facebook.png" alt='' width={30} height={30} className={styles.img}/>Sign in with Facebook </div>
      
      </div>
    </div>
  )
}

export default LoginPage
