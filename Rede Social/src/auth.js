import React from 'react';

export const UserContext = React.createContext();

export default function AuthContext({children}){
    const [currentUser, setCurrentUser] = React.useState("");
    
    return (
        <UserContext.Provider value={{currentUser, setCurrentUser}}>
            {children}
        </UserContext.Provider>);
}