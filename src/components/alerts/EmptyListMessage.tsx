type Props = {
    message: string
}
const EmptyListMessage: React.FC<Props> = ({ message }) => {
    return (
        <div className="text-center pt-4 dmsans-regular text-gray-500">
            { message }
        </div>
    );
}

export default EmptyListMessage;