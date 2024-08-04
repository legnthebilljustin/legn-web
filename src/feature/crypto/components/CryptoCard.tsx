import { CryptoDetails } from "@/types/crypto"
import { Card, CardBody } from "@nextui-org/react"
// import Percentage from "./Percentage"
import { useNavigate } from "react-router-dom"

type Props = {
    crypto: CryptoDetails
}
export default function CryptoCard({ crypto }: Props) {
    const navigate = useNavigate()

    const toActiveTrades = () => {
        if (crypto?.uuid) {
            navigate(
                `/crypto/activeTrades/${crypto.uuid}`,
                {state: {
                    name: crypto.name,
                    percentage: 90
                }}
            )
        }
    }

    return (
        <Card className="my-1 mx-1 max-w-xs dmsans-regular"
            isPressable onClick={toActiveTrades}
        >
            <CardBody className="px-6">
                <div className="inline-flex align-baseline justify-between">
                    <small className="text-default-500">{ crypto.code }</small>
                    {/* <Percentage percent={90} /> */}
                    
                </div>
                <p className="text-md">{ crypto.name }</p>
            </CardBody>
        </Card>
    )
}