import { TradeDetails } from "@/types/crypto"
import { Card, CardBody } from "@nextui-org/react"
import TradeProperty from "./TradeProperty"
import { centsToFiat } from "@/utils/currency"

type Props = {
    trades: TradeDetails[]
}

export default function TradesList({ trades }: Props) {

    const handleConversion = (data: number) => {
        return `$ ${centsToFiat(data)}` 
    }

    if (trades && trades.length > 0) {
        return (
            <>
                {trades.map((trade: TradeDetails, index) => (
                    <Card className="my-1" key={index}>
                        <CardBody className="py-4 px-4">
                            <TradeProperty label="Trade ID" value={trade?.uuid} />
                            <TradeProperty label="Entry Price" 
                                value={trade?.entryPrice ? handleConversion(trade.entryPrice) : false} />
                            <TradeProperty label="Purchased Amount" 
                                value={trade?.amountUSD ? handleConversion(trade.amountUSD) : false} />
                            <TradeProperty label="Fee" value={trade?.fee} />
                            <TradeProperty label="Received" value={trade?.finalCryptoAmount} />
                            <TradeProperty label="Date" value={trade?.tradeDate} />
                        </CardBody>
                    </Card>
                ))}
            </>
        )
    }

    return null
}