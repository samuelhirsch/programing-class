import React from 'react'
import './button.css'

export default function Button(props) {
    const { setComments, postId, postIdList,comments } = props
    
    return (
        <button className={comments?'commentsshow':""} 
        onClick={() => setComments(postId)}>{comments ? "Hide " : "Show "}comments</button>
    )
}
