import { JustifyBetweenContainer } from "@/components"
import { TradeDetails } from "@/types/crypto"
import { Card, CardBody } from "@nextui-org/react"
import TradeProperty from "./TradeProperty"

const labels = [
    "Trade ID", "Entry Price", "Purchased Amount",
    "Fee", "Received", "Date"
]

type Props = {
    trades: TradeDetails[]
}

export default function TradesList({ trades }: Props) {

    if (trades && trades.length > 0) {
        return (
            <>
                {trades.map((trade: TradeDetails) => (
                    <Card className="my-1">
                        <CardBody className="py-4 px-4">
                            <JustifyBetweenContainer>
                                <TradeProperty label="Trade ID" value={trade?.uuid} />
                            </JustifyBetweenContainer>
                            <JustifyBetweenContainer>
                                <TradeProperty label="Entry Price" value={trade?.entryPrice} />
                            </JustifyBetweenContainer>
                            <JustifyBetweenContainer>
                                <TradeProperty label="Purchased Amount" value={trade?.purchasedAmount} />
                            </JustifyBetweenContainer>
                            <JustifyBetweenContainer>
                                <TradeProperty label="Fee" value={trade?.fee} />
                            </JustifyBetweenContainer>
                            <JustifyBetweenContainer>
                                <TradeProperty label="Received" value={trade?.finalCryptoAmount} />
                            </JustifyBetweenContainer>
                            <JustifyBetweenContainer>
                                <TradeProperty label="Date" value={trade?.purchaseDate} />
                            </JustifyBetweenContainer>
                        </CardBody>
                    </Card>
                ))}
            </>
        )
    }
    return (
        <>
        </>
    )
}