import { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
    isLoggedIn: boolean;
    login: (email: string, password: string) => void;
    logout: () => void;
    googleLogin: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return localStorage.getItem("isLoggedIn") === "true";
    });

    const login = (email: string, password: string) => {
        // Simple demo login - in real app, call API
        if (email && password) {
            setIsLoggedIn(true);
            localStorage.setItem("isLoggedIn", "true");
        }
    };

    const googleLogin = () => {
        // Simple demo login - in real app, call API
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");
    };

    const logout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem("isLoggedIn");
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout, googleLogin }}>
            {children}
        </AuthContext.Provider>
    );
};