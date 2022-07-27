import React from 'react';

export default function Comment({comment}){
    return (
        <div>
            <span className='fw-bold'>{comment.user.username}: </span>
            <span>{comment.text}</span>
        </div>);
}