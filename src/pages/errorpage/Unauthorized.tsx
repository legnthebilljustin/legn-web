const Unauthorized: React.FC = () => {
    return (
        <div className="mt-48 text-center">
            <div className="text-3xl font-medium">
                Unauthorized access.
            </div>
            <div className="text-base mt-4 text-gray-400">
                We are sorry to inform you that you do not have sufficient privileges to access this resource.
            </div>
        </div>
    )
}

export default Unauthorized