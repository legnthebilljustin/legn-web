import { useParams, useSearchParams } from "react-router-dom";
import { LoadingIndicator } from "@/components";
import ErrorAlert from "@/components/alerts/ErrorAlert";
import { SEARCH_PARAMS_KEYS } from "@/constants/keys";
import { TransactionFormData } from "@/types/credit/transaction";
import { RunningBalance, TransactionsList } from "@/feature/credit/components";
import AddTransactionForm from "@/feature/credit/forms/AddTransactionForm";

import { useFetchCategories, useFetchTransactionsList, useAddTransaction } from "@/hooks/credit";

export default function Transactions() {
    const { creditCardUuid } = useParams();
    const [searchParams] = useSearchParams();
    const cardName = searchParams.get(SEARCH_PARAMS_KEYS.CARD_NAME)

    const { categories, isFetchingCategories, isFetchCategoriesFail, fetchCategoriesError } = useFetchCategories() 
    const { 
        transactions, runningBalance, totalRewardPoints,
        isFetching, 
        didFetchFail, 
        error, 
        refetch 
    } = useFetchTransactionsList(creditCardUuid)
    const { isSubmitting, didSubmitFail, addTransaction } = useAddTransaction(refetch)

    const handleNewTransaction = (formData: TransactionFormData ) => {
        addTransaction(formData, creditCardUuid)
    }

    if (isFetching) {
        return <LoadingIndicator label="Getting your transactions..." />
    }

    if (isSubmitting) {
        return <LoadingIndicator label="Processing new transaction..." />
    }

    if (!isFetching && didFetchFail) {
        return <ErrorAlert message={error} />
    }

    if (!isSubmitting && didSubmitFail) {
        return <ErrorAlert message="Unable to create a new transaction." />
    }
 
    return (
        <div className="container px-3 py-6">
            { (!isFetchingCategories && isFetchCategoriesFail) &&
                <ErrorAlert message={fetchCategoriesError} />
            }
            <div className="flex justify-between mb-6">
                
                <div className="w-1/2text-xl">{ cardName }</div>
                <div className="w-1/2 text-blue-600 text-right">
                    <AddTransactionForm categories={categories} addTransaction={handleNewTransaction} />
                </div>
            </div>
            <RunningBalance balance={runningBalance} totalRewardPoints={totalRewardPoints} />
            <TransactionsList transactions={transactions} />
        </div>
    )
}