import React from 'react'
import "./addPost.css"
import { useState } from 'react'

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const url = "http://localhost:8080/addPost";
  async function AddPost(e) {
    e.preventDefault();
    const newPost = {
      title,
      author,
      body
    }
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
          'content-type': 'application/json'
        }
      })
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }
    }
    catch (e) {
       console.error(e.message);
    }
  }
  return (
    <form id='add-post-form' onSubmit={(e) => { AddPost(e) }}>
      <label>
        title: <input value={title} onChange={(e) => { setTitle(e.target.value) }} />
      </label>
      <label>
        author: <input value={author} onChange={(e) => { setAuthor(e.target.value) }} />
      </label>
      <label>
        body: <input value={body} onChange={(e) => { setBody(e.target.value) }} />
      </label>
      <button>submit</button>
    </form>
  )
}

