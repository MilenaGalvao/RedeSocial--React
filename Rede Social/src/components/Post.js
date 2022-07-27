import React from 'react';
import { UserContext } from '../App';

function Post({username, image, data, conteudo, likes}){
    const currentUser = React.useContext(UserContext);
    const isSameUser = username === currentUser;

    return (<div>
        <h2><span style={ { color : isSameUser && 'green' } }>{username}</span> - {data.toLocaleString('pt-br')}</h2>
        <img src={URL.createObjectURL(image)} alt={conteudo} style={{width:300, height:200, objectFit: 'cover' }}/>
        <p>{conteudo}</p>
        <button>Likes ({likes})</button>
    </div>)
}

export default Post;