import React from 'react'
import styles from "./Blog.module.css";
import PostCard from '@/components/postCard/PostCard';

const BlogPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.post}>
        <PostCard />
        </div>
        <div className={styles.post}>
        <PostCard />
        </div>
        <div className={styles.post}>
        <PostCard />
        </div>
        <div className={styles.post}>
        <PostCard />
        </div>
    </div>
  )
}

export default BlogPage