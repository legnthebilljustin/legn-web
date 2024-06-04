import { STORAGE_KEYS } from "@/constants/keys";
import { setAuthorizationHeader } from "@/hooks/useClient";
import { User } from "@/types/UserType";
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

type AuthProviderProps = PropsWithChildren & {
    isSignedIn?: boolean
}

type AuthContextType = {
    user: User | null
    updateUser: (user: User | null) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
    const context = useContext(AuthContext)

    if (context === undefined) {
        throw new Error("useAuth must be used within the AuthProvider")
    }

    return context
}

export default function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        const token = localStorage.getItem(STORAGE_KEYS.TOKEN);
        if (token) {
            setAuthorizationHeader(token)
        }
    }, [])
    
    const updateUser = (newUser: User | null) => {
        if (newUser && newUser.token) {
            setToken(newUser.token)
        }
        setUser(newUser);
    }

    return <AuthContext.Provider value={{ user, updateUser }}>{ children }</AuthContext.Provider>
}

const setToken = (userToken: string) => {
    localStorage.setItem(STORAGE_KEYS.TOKEN, userToken);
    return;
}
