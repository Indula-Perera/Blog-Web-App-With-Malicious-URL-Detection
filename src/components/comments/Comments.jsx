"use client"

import Link from 'next/link';
import styles from './comments.module.css'
import Image from 'next/image';
import useSWR from 'swr';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import toast from "react-hot-toast";



const fetcher = async (url) => {
    const res = await fetch(url);

    const data = await res.json();

    if (!res.ok) {
        const error = new Error(data.message);
        throw error;
    }

    return data;
}


const Comments = ({ postSlug }) => {
    
    const [desc,setDesc] = useState("")
    const { data, mutate, isLoading } = useSWR(`/api/comments?postSlug=${postSlug}`, fetcher);

    


    const { data: session } = useSession();

    const handleSubmit = async () =>{
       await fetch("/api/comments",{ method: "POST",
        body: JSON.stringify({desc, postSlug}),
    });
    toast.success("comment added");
    mutate();
    }




    const handleDeleteComment = async (commentId) => {
        try {
          await fetch("http://localhost:3000/api/deletecmt", {
            method: "POST",
            body: JSON.stringify({ commentId }),
          });
          toast.success("Comment deleted");
          mutate();
        } catch (error) {
          toast.error("Failed to delete comment");
          console.error(error);
        }
      };

      const numComments = data ? data.length : 0;

      function formatDate(dateString) {
        const dateObj = new Date(dateString);
        const day = dateObj.getDate();
        const month = dateObj.getMonth() + 1; // Adding 1 because months are 0-indexed
        const year = dateObj.getFullYear();
        const hours = dateObj.getHours();
        const minutes = dateObj.getMinutes();
    
        // Add leading zeros if needed
        const formattedDate = `${day < 10 ? "0" : ""}${day}/${
          month < 10 ? "0" : ""
        }${month}/${year} - ${hours < 10 ? "0" : ""}${hours}:${
          minutes < 10 ? "0" : ""
        }${minutes}`;
    
        return formattedDate;
      }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments ({numComments})</h1>
            {session ? (
                <div className={styles.write}>
                    <textarea placeholder='write a comment...' className={styles.input} onChange={(e)=> setDesc(e.target.value)} />
                    <button className={styles.button} onClick={handleSubmit}>Send</button>
                </div>
            ) : (
                <Link href="/login">Login to write a comment</Link>
            )}
            
            <div className={styles.comments}>
                {isLoading ? "loading" : data?.map(item => (

                    <div className={styles.comment} key={item._id}>
                        <div className={styles.user}>
                            {item?.user?.image && <Image 
                            src={item.user.image} 
                            alt='' 
                            width={50} 
                            height={50} 
                            className={styles.image} />}
                            <div className={styles.userInfo}>
                                <span className={styles.username}>{item.user.name} </span>
                                <span className={styles.date}> {formatDate(item?.createdAt)}</span>
                            </div>
                        </div>
                        <div className={styles.commentpara}>



                <p className={styles.desc}>{item.desc}</p>
                
                {session && item.userEmail === session.user.email && (
                  <Image
                    src="/trash.svg"
                    alt=""
                    width={15}
                    height={25}
                    className={styles.deleteButton}
                    onClick={() => handleDeleteComment(item.id)}
                  ></Image>
                )}
              </div>
                    </div>))}

            </div>
        </div>
    )
}

export default Comments
