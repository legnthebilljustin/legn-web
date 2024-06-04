import { Card, CardBody } from "@nextui-org/react"
import React from "react"
import { convertToCurrency } from "@/utils/currency"

type Props = {
    creditLimit: number
    totalBalance: number
}

const CreditLimits: React.FC<Props> = ({ creditLimit, totalBalance }) => {

    return (
        <div className="container my-5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card className="p-4">
                    <CardBody className="text-center">
                        <p className="text-3xl dmsans-regular">{ convertToCurrency(creditLimit) }</p>
                        <small className="text-default-500 mt-2">Credit Limit</small>
                    </CardBody>
                </Card>
                <Card className="p-4">
                    <CardBody className="text-center">
                        <p className="text-3xl dmsans-regular">{ convertToCurrency(totalBalance) }</p>
                        <small className="text-default-500 mt-2">Total Amount Due</small>
                    </CardBody>
                </Card>
                <Card className="p-4">
                    <CardBody className="text-center">
                        <p className="text-3xl dmsans-regular">{ convertToCurrency(creditLimit - totalBalance) }</p>
                        <small className="text-default-500 mt-2">Available Credit</small>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default CreditLimits