import Image from "next/image"
import Styles from "./themeToggle.module.css"

const ThemeToggle = () => {
  return (
    <div className={Styles.container}>
      <Image src="/moon.png" alt="" width={14} height={14}/>
      <div className={Styles.ball}></div>
      <Image src="/sun.png" alt="" width={14} height={14}/>
    </div>
  )
}

export default ThemeToggle
