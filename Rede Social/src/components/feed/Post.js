import React from 'react';
import Comment from './Comment';

export default function Post({ post }){
    return (
        <article style={{ "maxWidth" : '700px' }} className='mx-auto my-3 border rounded-1'>
            <div className='text-start m-3'>
                <img src={post.user.image} className="rounded-circle" style={{'maxWidth':40, 'maxHeight':40}} />
                <span className='mx-2 fw-bold'>{post.user.name}</span>
            </div>
            <div>
                <img src={post.image} className="img-fluid" />
            </div>
            <div className='text-start m-3'>
                <div>
                    <i className="fa-regular fa-heart fs-4 me-2"></i>
                    <i className="fa-regular fa-comment-dots fs-4"></i>
                </div>
                <div>
                    <span className='d-block fw-bold'>{ post.likes == 1 ? `${post.likes} like` : `${post.likes} likes`}</span>
                    <span className='fw-bold'>{post.user.username}: </span>
                    <span>{post.text}</span>
                    { /* post.comments.map((comment, index)=> <Comment key={index} comment={comment} />) */ }
                    
                </div>
            </div>
        </article>);
}