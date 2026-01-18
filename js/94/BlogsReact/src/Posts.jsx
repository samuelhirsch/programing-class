import React, { useEffect, useState } from 'react'
import Header from './header'
import { useParams } from 'react-router'
import Comments from './Comments'
import Button from './Button'
import fetchHelper from './fetchHelper'

export default function Posts() {
  const { userId } = useParams()
  const [posts, setPostList] = useState({ postSuccess: true, PostsList: null })
  const [postIdListForComments, setPostIdForComments] = useState([])
  const [loading, setLoading] = useState(false)
  const { postSuccess, postsList } = posts

  useEffect(() => {
    (async function () {

      try {
        setLoading(true);
        const postsList = await fetchHelper(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        setPostList({ postsList, postSuccess: true })
      }
      catch (e) {
        setPostList({ postsList: e.message, postSuccess: false })
      }
      finally {
        setLoading(false)
      }
    }())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function setComments(postId) {
    if (postIdListForComments.some((id) => id === postId)) {
      const newList = postIdListForComments.filter((id) => id !== postId)
      setPostIdForComments(newList)
    }
    else {
      const newList = [...postIdListForComments, postId]
      setPostIdForComments(newList)
    }
  }


  function post(post) {
    const checkComments = postIdListForComments.some((id) => id === post.id)
    return (<li className={`post-li ${checkComments ? "post-show-comments" : ""}`} key={post.id}>
      <h3>Title: {post.title} </h3> {post.body}
      <Button setComments={setComments} postId={post.id} comments={checkComments} />
      <div id='Comments-div'>
        {checkComments ? <Comments postId={post.id} /> : null}</div ></li>)

  }
  return (
    <>
      <div id="posts-div">
        <Header headerId="post-header" h2text="Posts&Comments" button={true} />
        {loading && "loading..."}
        {postSuccess ? <ul id='main-users-ul' className='main-ul'>{postsList?.map(post)} </ul>

          : <p className='error'>oops...something went wrong {postsList}</p>
        }
      </div>
    </>
  )
}
