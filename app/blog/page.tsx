"use client"

import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import {  fetchPostsData } from '@/app/api'
import { PostProps } from '@/types'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, selectPosts, selectPstsStatus } from '@/features/postsSlice'

const Blog = () => {

  // const [allPosts, setAllPosts] = useState<PostProps[]>([]);
  
  // const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const postsStatus = useSelector(selectPstsStatus);

  // useEffect(() => {
  //   dispatch(fetchPosts())
  // }, [dispatch])
  if (postsStatus === 'idle') {
    dispatch(fetchPosts());
  }
 
 

  console.log("postsStatus",postsStatus)
  console.log("posts", posts)
  
  if (postsStatus === 'loading') {
    return <div>Loading Posts...</div>;
  } else if (postsStatus === 'failed') {
    return <div>Network Error....</div>;
  }

  // const getPosts = async () => {
  //   setLoading(true);
  //   try {
  //     const posts = await fetchPostsData();
  //     setAllPosts(posts);
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  // useEffect(() => {
  //   getPosts();
  // })

 

  

  return (
    <div className={styles.mainContainer}>
      {posts.map((post:PostProps) => (
           <Link href={`blog/${post._id}`} className={styles.container} key={post._id}>
           <div className={styles.imgContainer}>
             <Image
               src={post.img}
               alt=''
               width={400}
               height={250}
               className={styles.img}
             />
           </div>
           <div className={styles.content}>
               <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.desc}>{post.desc}</p>
            <p>{post.content}</p>
            <p>{post.username}</p>
           </div>
         </Link>
      ))}
    
    </div>
  )
}

export default Blog
