"use client";

import Link from "next/link";
import Styles from "./AulthLink.module.css"
import { useState } from "react";
import { signOut } from "next-auth/react";

const AulthLink = () => {


  const [open,setOpen] = useState(false)



  const status ="authenticated";
  return (
   <>
   {status === "notauthenticated" ? (
    <Link href="/login" className={Styles.link}>Login</Link>
   ): (
    <>
    <Link href="/Write"  className={Styles.link}>Write</Link>
    <span className={Styles.link} onClick={signOut}>Logout</span>
    
    </>

   )}
   <div className={Styles.burger} onClick={()=> setOpen (!open) }>
      <div className={Styles.line}></div>
      <div className={Styles.line}></div>
      <div className={Styles.line}></div>
   </div>
    {open && (
      <div className={Styles.responsiveMenu}>

  	    <Link href="/"> Home </Link>
        <Link href="/"> Check URL </Link>
        <Link href="/"> Contact </Link>
        <Link href="/"> About </Link>

        {status === "notauthenticated" ? (
    <Link href="/login">Login</Link>
   ): (
    <>
    <Link href="/Write">Write</Link>
    <span className={Styles.link}>Logout</span>
    
    </>

   )}
      </div>
    )}

   </>
  )
}

export default AulthLink
