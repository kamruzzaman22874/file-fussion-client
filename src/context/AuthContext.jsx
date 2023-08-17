'use client'
import { createContext } from "react";

export const UserContext = createContext(null)
const AuthContext = ({children}) => {
    const user = "Rakib"
    const authInformation = {
        user
    }
    return (
        <UserContext.Provider value={authInformation}>
        {children}
      </UserContext.Provider>
    );
};

export default AuthContext;