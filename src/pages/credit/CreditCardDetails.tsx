
import { Link, useParams } from "react-router-dom"
import { Button } from "@nextui-org/react";
import LoadingIndicator from "@/components/LoadingIndicator.tsx";
import ErrorAlert from "@/components/alerts/ErrorAlert.tsx";
import { SEARCH_PARAMS_KEYS } from "@/constants/keys.tsx";
import { useQuery } from "react-query";
import { fetchCardDetails } from "@/apis/creditCards.tsx";

import { CreditLimits, TotalRecords, PreviousStatements } from "@/feature/credit/components/";

export default function CreditCardDetails() {
    const { creditCardUuid } = useParams();
    const { data: cardDetails, isLoading, isError } = useQuery({
        queryKey: ["cardDetails", creditCardUuid],
        queryFn: () => fetchCardDetails(creditCardUuid)
    })
    if (isLoading) {
        return <LoadingIndicator label="Getting your card's information..." />
    }

    if (isError) {
        return <ErrorAlert message="We are unable to display your card's details. Rest assured we are looking into this issue." />
    }

    if (!isLoading && !isError && cardDetails) {
        const { amountSpent, cashbacks, financeCharges, rewardPoints, transactions, treats } = cardDetails.totals
        return (
            <div className="mt-8 px-3">
                <div className="container">
                    <div className="flex justify-between">
                        <div className="w-1/2 text-xl dmsans-bold">{cardDetails.name}</div>
                        <div className="w-1/2 text-blue-600 text-right">
                            <Link to={{
                                pathname: `/creditCardTransactions/${creditCardUuid}`,
                                search: `?${SEARCH_PARAMS_KEYS.CARD_NAME}=${encodeURIComponent(cardDetails?.name)}`
                            }}>
                                <Button color="primary" variant="flat" size="sm">
                                    View Transactions
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                
                <CreditLimits creditLimit={cardDetails.creditLimit} totalBalance={0}/>
                <TotalRecords
                    amountSpent={amountSpent}
                    transactions={transactions}
                    rewardPoints={rewardPoints}
                    cashbacks={cashbacks}
                    treats={treats}
                    financeCharges={financeCharges}
                    discounts={0}
                />
                
                <div className="text-md mt-6 mb-4">Previous Statement of Accounts</div>
                <PreviousStatements creditCardUuid={creditCardUuid} />
            </div>
        )
    }

    
}