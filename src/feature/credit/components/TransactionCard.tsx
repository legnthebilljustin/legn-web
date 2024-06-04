import { Card, CardBody } from "@nextui-org/react";
import { Transaction } from "@/types/credit/transaction"
import { convertToCurrency } from "@/utils/currency";
import { AMOUNT_LABEL, CATEGORY_LABEL, DATE_LABEL, MERCHANT_NAME_LABEL, REWARD_POINTS_LABEL } from "@/constants/labels";

type Props = {
    transaction: Transaction
}

const TransactionCard: React.FC<Props> = ({ transaction }) => {
    return (
        <Card className="my-1" key={transaction.uuid}>
            <CardBody className="px-8 dmsans-regular">
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 sm:grid-flow-col">
                <div className="sm:col-span-1">
                    <p>{transaction.date}</p>
                    <small className="text-default-500">{DATE_LABEL}</small>
                </div>
                <div className="sm:col-span-2">
                    <div className="shrink-0">
                        <p>{transaction.merchantName}</p>
                        <small className="text-default-500">{MERCHANT_NAME_LABEL}</small>
                    </div>
                </div>
                <div className="sm:col-span-1">
                    <p>{transaction.category}</p>
                    <small className="text-default-500">{CATEGORY_LABEL}</small>
                </div>
                <div className="sm:col-span-1 text-right">
                    <p>P {convertToCurrency(transaction.amount)}</p>
                    <small className="text-default-500">{AMOUNT_LABEL}</small>
                </div>
                <div className="sm:col-span-1 text-right">
                    <p>{transaction.rewardPoints}</p>
                    <small className="text-default-500">{REWARD_POINTS_LABEL}</small>
                </div>
            </div>
            </CardBody>
        </Card>
    )
}

export default TransactionCard