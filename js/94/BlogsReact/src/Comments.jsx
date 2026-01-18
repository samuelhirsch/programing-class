import React, { useEffect, useState } from 'react'
import './comments.css'
import fetchHelper from './fetchHelper';

export default function Comments(props) {
    const { postId } = props;
    const [loading, setLoading] = useState(false)
    const [comments, setComments] = useState({ commentsSuccess: true, commentsList: null })
    const { commentsSuccess, commentsList } = comments
    useEffect(() => {
        (async function () {

            try {
                setLoading(true)
                const commentsList = await fetchHelper(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
                setComments({ commentsList, commentsSuccess: true })
            }
            catch (e) {
                setComments({ commentsList: e.message, commentsSuccess: false })
            }
            finally {
                setLoading(false)
            }
        }())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>

            <h3>Comments</h3>
            {loading && <p id='loading'>{loading && "loading..."}</p>}
            {commentsSuccess&&commentsList &&<ul id='main-comment-ul'> {commentsList?.map(comment =>
                <li key={comment.id}>
                    <ul className='comment-ul'>
                        <li> <span>Name:</span>{comment.name}</li>
                        <li><span>Email:</span>{comment.email}</li>
                        <li><span>Comment:</span>{comment.body}</li>
                    </ul>
                </li>

            )} </ul> }
            {commentsSuccess===false?<p className='error'>oops...something went wrong {commentsList}</p>:null}

        </>
    )
}
