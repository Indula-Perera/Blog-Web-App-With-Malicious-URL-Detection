import React from 'react'
import styles from "./CardList.module.css"
import Card from '../card/card'
import Pagination from '../pagination/Pagination'
const CardList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Recent Posts</div>
      <div className={styles.post}>
        <Card/>

      </div>

      <Pagination/>
    </div>
  )
}

export default CardList
