import { Transaction } from "@/types/credit/transaction";
import TransactionCard from "./TransactionCard";

type Props = {
    transactions: Transaction[]
}

const TransactionsList: React.FC<Props> = ({ transactions }) => {

    return (
        <>
            {transactions.map((transaction: Transaction) => (
                <TransactionCard transaction={transaction} key={transaction.uuid} />
            ))}
        </>
    )
}

export default TransactionsList