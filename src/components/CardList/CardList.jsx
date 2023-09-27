import React from 'react'
import styles from "./CardList.module.css"
import Card from '../card/card'
import Pagination from '../pagination/Pagination'

const getData = async (page) =>{
  const res = await fetch (`http://localhost:3000//api/posts?page=${page}`,{
    cache: "no-store",
  });

  if(!res.ok){
    throw new Error("Failed");
  }
  return res.json();

};




const CardList = async ({page}) => {

  const data = await getData (page)

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.post}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>

      </div>

      <Pagination/>
    </div>
  )
}

export default CardList
