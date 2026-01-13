import React, { useEffect, useState } from 'react'
import './comments.css'
import fetchHelper from './fetchHelper';

export default function Comments(props) {
    const { postId } = props;
    const [comments, setComments] = useState({ commentsSuccess: true, commentsList: null })
    const { commentsSuccess, commentsList } = comments
    useEffect(() => {
        (async function () {
          
            try {
                const commentsList = await fetchHelper(`https:/jsonplaceholder.typicode.com/comments?postId=${postId}`)
                setComments({ commentsList, commentsSuccess: true })
            }
            catch (e) {
                setComments({ commentsList: e.message, commentsSuccess: false })
            }
        }())
          // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>

            <h3>Comments</h3>
            {commentsSuccess ? <ul id='main-comment-ul'> {commentsList?.map(comment =>
                <li key={comment.id}>
                    <ul className='comment-ul'>
                        <li> <span>Name:</span>{comment.name}</li>
                        <li><span>Email:</span>{comment.email}</li>
                        <li><span>Comment:</span>{comment.body}</li>
                    </ul>
                </li>

            )} </ul> : <p className='error'>oops...something went wrong {commentsList}</p>}

        </>
    )
}
