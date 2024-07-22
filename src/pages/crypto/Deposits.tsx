import FinancialOverview from "@/components/FinancialOverview";
import { AddDepositForm } from "@/feature/crypto";
import DepositsTable from "@/feature/crypto/components/DepositsTable";
import { useFetchDeposits } from "@/hooks";
import { LoadingIndicator } from "@/components";
import ErrorAlert from "@/components/alerts/ErrorAlert";

export default function Deposits() {
    const {
        deposits,
        totalDepositAmount,
        isFetchingDeposits,
        isFetchDepositsFail,
        fetchDepositsError
    } = useFetchDeposits()


    if (isFetchingDeposits) {
        return <LoadingIndicator label="Fetching your deposits..." />
    }

    else if (!isFetchingDeposits && isFetchDepositsFail) {
        return <ErrorAlert message={fetchDepositsError} />
    }

    return (
        <div className="container">
            <FinancialOverview amount={totalDepositAmount} label="Total Amount Deposited" />
            <AddDepositForm />
            <DepositsTable deposits={deposits} />
        </div>
    )
    
}