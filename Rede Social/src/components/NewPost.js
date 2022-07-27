import React from 'react';
import { PostContext } from '../App';

function NewPost({username}){
    const dispatch = React.useContext(PostContext)

    const [conteudo, setConteudo] = React.useState("");
    const imagem = React.useRef();

    function handleChangeConteudo(event){
        setConteudo(event.target.value);
    }

    function handleClickNewPost(){
        const newPost = {
            conteudo: conteudo,
            image: imagem.current.files[0],
            username: username,
            data: new Date(),
            likes: 0
        }

        dispatch({ type: "CRIAR_POST", payload: newPost })

        setConteudo("");
        imagem.current.value = "";
    }

    return <div>
        <h1>Digite o seu Post</h1>
        <div style={{ display: 'block'}}>
            <input value={conteudo} type="text" onChange={handleChangeConteudo} placeholder='O que você está pensando?' style={{ width: '400px' }}/>
            <input type="file" ref={imagem} />
        </div>
        <button onClick={handleClickNewPost}>Enviar Post</button>
    </div>;
}

export default NewPost;