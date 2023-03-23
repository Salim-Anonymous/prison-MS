import { createContext, useState } from "react";

interface AuthContextValue {
    isLoggedIn: boolean;
    token: string | null;
    login: (token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextValue>({
    isLoggedIn: false,
    token: null,
    login: () => {},
    logout: () => {},
});

interface AuthProviderProps {
    children: React.ReactNode;
}

function AuthProvider(props:AuthProviderProps){
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
    const [token, setToken] = useState<string|null>(localStorage.getItem("token"));

    const login = (token: string) => {
        setIsLoggedIn(true);
        console.log("login")
        setToken(token);
        localStorage.setItem("token", token);
    }

    const logout = () => {
        setIsLoggedIn(false);
        setToken(null);
        localStorage.removeItem("token");
    }

    const contextValue: AuthContextValue = {
        isLoggedIn: isLoggedIn,
        token: token,
        login: login,
        logout: logout
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );

}

export { AuthContext, AuthProvider };