import { CryptoDetails } from "@/types/crypto"
import { Card, CardBody } from "@nextui-org/react"
import Percentage from "./Percentage"

type Props = {
    crypto: CryptoDetails
}
export default function CryptoCard({ crypto }: Props) {
    return (
        <Card className="my-1 mx-1 max-w-xs dmsans-regular">
            <CardBody className="px-6">
                <div className="inline-flex align-baseline justify-between">
                    <small className="text-default-500">{ crypto.code }</small>
                    <Percentage percent={90} />
                    
                </div>
                <p className="text-md">{ crypto.name }</p>
            </CardBody>
        </Card>
    )
}