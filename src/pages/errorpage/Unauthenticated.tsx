import { useNavigate } from "react-router-dom"

const Unauthenticated: React.FC = () => {
    const navigate = useNavigate()

    const handleGoToLogin = () => {
        localStorage.clear()
        navigate("/login", { replace: true })
    }

    return (
        <div className="mt-48 text-center">
            <div className="text-3xl font-medium">
                Login required.
            </div>
            <div className="text-base mt-4 text-gray-400">
                You must be logged in to view the requested page. To login, please click the link below.
            </div>
            <div className="mt-4">
                <a onClick={handleGoToLogin} className="mt-4 text-blue-500">Click here to log in.</a>
            </div>
        </div>
    )
}

export default Unauthenticated