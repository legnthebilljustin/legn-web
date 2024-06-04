import { Statement } from "@/types/credit/statements"
import { convertToCurrency } from "@/utils/currency"
import { Card, CardBody } from "@nextui-org/react"

type Props = {
    statement: Statement
    openStatementDetails: (statementUuid: string) => void
}

const StatementCard: React.FC<Props> = ({ statement, openStatementDetails }) => {
    const { uuid, amountDue, statementDate, dueDate } = statement
    const handleClick = () => {
        openStatementDetails(uuid)
    }

    return (
        <Card className="w-52" isPressable onClick={handleClick}>
            <CardBody className="p-6">
                <p className="text-xl dmsans-bold mb-4">April 2024</p>
                <div className="text-right">
                    <small className="text-default-400">Statement Date</small>
                    <p className="text-md mb-3">{ statementDate }</p>

                    <small className="text-default-400">Amount Due</small>
                    <p className="text-md mb-3 dmsans-regular">{ convertToCurrency(amountDue) }</p>

                    <small className="text-default-400">Due Date</small>
                    <p className="text-md mb-3 dmsans-regular">{ dueDate }</p>
                </div>
            </CardBody>
        </Card>
    )

}

export default StatementCard;