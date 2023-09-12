import Link from "next/link";
import Styles from "./AulthLink.module.css"

const AulthLink = () => {
  const status ="notauthenticated";
  return (
   <>
   {status === "notauthenticated" ? (
    <Link href="/login">Login</Link>
   ): (
    <>
    <Link href="/Write">Write</Link>
    <span className={Styles.link}>Logout</span>
    
    </>

   )}
   </>
  )
}

export default AulthLink
