import { Card, CardBody } from "@nextui-org/react"

type Props = {
    error: string | any
}

export default function ErrorMessage({ error }: Props) {
    return (
        <Card className="bg-custom-red-danger">
            <CardBody>
                <div className="text-sm text-custom-red-dangertext">
                    <span className="mr-3">!</span>
                    { error }
                </div>
            </CardBody>
        </Card>
    )
}