import React from 'react';
import Post from './Post';

function Feed({posts}){
    const feed = posts.map((post, index)=>{
        return (<Post key={index} {...post} />)
    });
    
    
    return <>{feed}</>;
}

export default Feed;