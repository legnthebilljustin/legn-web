import { PropsWithChildren, useEffect } from "react";
import { useAuth } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

// this will allow us to have children in this component
type ProtectedRouteProps = PropsWithChildren

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
    const user = useAuth()
    const navigate = useNavigate();

    useEffect(() => {
        if (user === null) {
            /**
             * replace will replace the entire history,
             * preventing the user from pressing "back"
             */
            navigate("/login", { replace: true })
        }
    }, [navigate, user])
    
    return children
}