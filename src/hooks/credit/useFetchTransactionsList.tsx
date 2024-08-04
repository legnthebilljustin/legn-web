import { client } from "@/hooks/useClient";
import { useCallback, useEffect, useState } from "react";

type Transactions = {
    uuid: string
    category: string
    date: string
    merchantName: string
    rewardPoints: number
    amount: number
}

type ReturnTypes = {
    transactions: Transactions[]
    isFetching: boolean
    didFetchFail: boolean
    error: string | null,
    refetch: () => void,
    runningBalance: number
    totalRewardPoints: number
}

export function useFetchTransactionsList(creditCardUuid?: string): ReturnTypes {
    const [transactions, setTransactions] = useState<Transactions[]>([])
    const [isFetching, setIsFetching] = useState(false)
    const [didFetchFail, setDidFetchFail] = useState(false)
    const [error, setError] = useState(null)
    const [runningBalance, setRunningBalance] = useState(0)
    const [totalRewardPoints, setTotalRewardPoints] = useState(0)

    const fetchTransactions = useCallback(async() => {
        if (creditCardUuid) {
            setIsFetching(true)
            try {
                const response = await client.get(`/credit/v1/transactions/afterBillingDate/${creditCardUuid}`)
                setTransactions(response.data.transactions)
                setRunningBalance(response.data.totalAmount)
                setTotalRewardPoints(response.data.totalRewardPoints)
            } catch (error: any) {
                setError(error.message)
                setDidFetchFail(true)
            } finally {
                setIsFetching(false)
            }
        }
    }, [creditCardUuid])

    useEffect(() => {
        fetchTransactions()
    }, [fetchTransactions])

    return {
        transactions,
        runningBalance,
        totalRewardPoints,
        isFetching,
        didFetchFail,
        error,
        refetch: fetchTransactions
    }
}