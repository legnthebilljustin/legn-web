import FinancialOverview from "@/components/FinancialOverview";
import { AddDepositForm } from "@/feature/crypto";
import DepositsTable from "@/feature/crypto/components/DepositsTable";
import { depositsTestData } from "@/tests/data/cryptoTestData";

export default function Deposits() {
    return (
        <div className="container">
            <FinancialOverview amount={300000} label="Total Amount Deposited" />
            <AddDepositForm />
            {/* TODO: replace deposits with actual data and loader */}
            <DepositsTable deposits={depositsTestData} />
        </div>
    )
}