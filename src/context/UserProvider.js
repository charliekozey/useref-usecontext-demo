import React, { useState } from 'react'; 
import UserContext from './UserContext'; 

const UserProvider = ({ children }) => { 
    
    const [currentUser, setCurrentUser] = useState({username: "billy", email: "billy@billy.com"})
    const num = 10

    return ( 
        <UserContext.Provider value={{ currentUser, setCurrentUser, num }}> 
            {children} 
        </UserContext.Provider> 
    ); 
}; 

export default UserProvider;