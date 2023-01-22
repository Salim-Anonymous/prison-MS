import React from 'react'

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const [admin, setAdmin] = React.useState({
        isAdmin: false,
    })
    
    return <AuthContext.Provider value={{admin,setAdmin}}>
        {children}
    </AuthContext.Provider>
}

export default AuthContext