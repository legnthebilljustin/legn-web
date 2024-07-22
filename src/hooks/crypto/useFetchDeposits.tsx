import { fetchDeposits } from "@/apis/deposits"
import { Deposit } from "@/types/crypto"
import { useQuery } from "react-query"

type ReturnTypes = {
    deposits: Deposit[],
    totalDepositAmount: number
    isFetchingDeposits: boolean,
    isFetchDepositsFail: boolean,
    fetchDepositsError: string
}

export function useFetchDeposits(): ReturnTypes {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["fetchDeposits"],
        queryFn: () => fetchDeposits()
    })

    return {
        deposits: data?.deposits ?? [],
        totalDepositAmount: data?.totalDepositAmount ?? 0,
        isFetchingDeposits: isLoading,
        isFetchDepositsFail: isError,
        fetchDepositsError: "We are unable to retrieve your deposits record at this time."
    }
}