"use client"

import React, { useEffect } from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostById, selectCurrentPost, selectCurrnetPostStatus } from '@/features/postsSlice';
import { notFound } from 'next/navigation'
import { parentPort } from 'worker_threads';



const BlogPost = ({params}:any) => {

  const dispatch = useDispatch();
  const currentPost = useSelector(selectCurrentPost);
  const currentPostStatus = useSelector(selectCurrnetPostStatus);


  // useEffect(() => {
  //     dispatch(fetchPostById(params.id))
  // }, [dispatch])
  if (currentPostStatus === 'idle') {
    dispatch(fetchPostById(params.id));
  }
 

 

  console.log(params)

  console.log("currentPostStatus", currentPostStatus)
  console.log("currentPost", currentPost)
  
  if (currentPostStatus === 'loading') {
    return <div>Loading Post...</div>;
  } else if (currentPostStatus === 'failed') {
    return notFound();
  } else if (currentPostStatus === 'idle') {
    return <div>Loading...</div>
  }



  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{currentPost?.title}</h1>
          <p className={styles.desc}>
            {currentPost?.desc}
          </p>
          <div className={styles.author}>
            <Image
              src={currentPost?.img}
              alt='author'
              width={40}
              height={40}
              className={styles.avator}
            />
            <span className={styles.username}>{currentPost.username}</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={currentPost.img}
            alt=''
            fill
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         {currentPost?.content}
        </p>
      </div>
    </div>
  )
}

export default BlogPost
