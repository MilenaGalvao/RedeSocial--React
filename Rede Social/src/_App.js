import React from 'react';
import Header from './components/Header';
import NewPost from './components/NewPost';
import Feed from './components/Feed';
import reducer from './reducer';

export const UserContext = React.createContext();
export const PostContext = React.createContext();

function App(){
    const [state, dispatch] = React.useReducer(reducer, { posts: []});
    const [username, setUsername] = React.useState("thyagoquintas");

    return (
    <UserContext.Provider value={username}>
        <Header username={username} setUsername={setUsername} />
        <PostContext.Provider value={dispatch}>
            {username && <NewPost username={username} />}
            <Feed posts={state.posts} />
        </PostContext.Provider>
    </UserContext.Provider>);

}

export default App;