import Image from 'next/image'
import styles from './write.module.css'

const WritePage = () => {
  return (
    <div className={styles.container}>
       <input type='text' placeholder='Title' />
       <div className={styles.editor}>
        <button className={styles.button}>
          <Image src="/plus.png" alt='' width={16} height={16}/>
        </button>
       </div>
    </div>
  )
}

export default WritePage
