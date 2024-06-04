import { Card, CardBody, Link } from "@nextui-org/react"

type Props = {
    message: string | null
}

const ErrorAlert: React.FC<Props> = ({ message }) => {
    return (
        <Card className="mt-16 max-w-xl px-6 py-3">
            <CardBody>
                <div className="flex align-center text-red-400 text-lg">
                    <i className='bx bx-sm bx-error-circle'></i>
                    <span className="ml-2">Oops. Something went wrong!</span>
                </div>
                <p className="mt-2">
                    { message ? message : "We are unable to display your data." }
                </p>
                <div className="text-default-500 mt-2">
                    Click here to go&nbsp;
                    <Link className="cursor-pointer">back</Link>,  or to&nbsp;
                    <Link className="cursor-pointer">refresh the page.</Link>
                </div>
            </CardBody>
        </Card>
    )
}

export default ErrorAlert