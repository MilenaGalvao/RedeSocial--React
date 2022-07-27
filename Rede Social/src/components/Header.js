import React from 'react';

function Header({ username, setUsername }){
    const [user, setUser] = React.useState("");

    function handleChangeUser(event){
        setUser(event.target.value);
    }

    function handleClickLogin(){
        setUsername(user);
        setUser("");
    }

    function handleClickDeslogar(){
        setUsername("");
    }
    
    return (
        <div>
            {!username &&
                <>
                    <h1>Faça o login</h1>
                    <input type="text" placeholder='Digite seu usuario' onChange={handleChangeUser} />
                    <button onClick={handleClickLogin}>Login</button>
                </>
            }
            {username &&
                <>
                    <h1>Bem vindo, {username}</h1>
                    <button onClick={handleClickDeslogar}>Deslogar</button>
                </>

            }
        </div>
    );
}

export default Header;