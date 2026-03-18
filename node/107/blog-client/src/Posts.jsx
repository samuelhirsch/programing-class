import React, { useState } from 'react'
import { useEffect } from 'react'

export default function Posts() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('http://localhost:8080/posts');
        if (!response.ok) {
          throw new Error(`${response.status} - ${response.statusText}`);
        }
        const receviedPosts = await response.json();
        setPosts(receviedPosts);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <>
      <h2>Posts</h2>
      {posts?.map((post) => (<div><h2>{post.title}</h2><div>{post.author}</div>
        <div>{post.date}</div><div>{post.body}</div></div>))}

      </>
        )
}
