import { Card, CardBody } from "@nextui-org/react";
import { convertToCurrency } from "@/utils/currency";

type Props = {
    amountSpent: number
    transactions: number
    rewardPoints: number
    cashbacks: number
    treats: number
    financeCharges: number,
    discounts: number
}

const TotalRecords: React.FC<Props> = ({
    amountSpent, transactions, rewardPoints, cashbacks, treats, financeCharges, discounts
}) => {
    return (
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <Card>
                    <CardBody className="px-6 text-right">
                        <p className="text-lg dmsans-medium">Php { convertToCurrency(amountSpent) }</p>
                        <small className="text-default-500">Amount Spent</small>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody className="px-6 text-right">
                        <p className="text-lg dmsans-medium">{ transactions }</p>
                        <small className="text-default-500">Transactions</small>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody className="px-6 text-right">
                        <p className="text-lg dmsans-medium">{ rewardPoints }</p>
                        <small className="text-default-500">Reward Points</small>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody className="px-6 text-right">
                        <p className="text-lg dmsans-medium">{ convertToCurrency(cashbacks) }</p>
                        <small className="text-default-500">Cashbacks</small>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody className="px-6 text-right">
                        <p className="text-lg dmsans-medium">{ convertToCurrency(treats) }</p>
                        <small className="text-default-500">Treats</small>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody className="px-6 text-right">
                        <p className="text-lg dmsans-medium">{ convertToCurrency(financeCharges) }</p>
                        <small className="text-default-500">Finance Charges</small>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody className="px-6 text-right">
                        <p className="text-lg dmsans-medium">{ convertToCurrency(discounts) }</p>
                        <small className="text-default-500">Discounts</small>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}

export default TotalRecords