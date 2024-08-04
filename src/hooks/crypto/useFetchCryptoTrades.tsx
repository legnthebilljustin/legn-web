import { fetchCryptoTrades } from "@/apis/cryptos"
import { useQuery } from "react-query"

export function useFetchCryptoTrades(cryptoUuid: string | undefined) {
    if (cryptoUuid === undefined || cryptoUuid === null) {
        throw new Error("useFetchCryptoTrades hook requires a valid cryptoUuid prop")
    }

    const { data, isLoading, isError } = useQuery({
        queryKey: ["fetchCryptoTrades"],
        queryFn: () => fetchCryptoTrades(cryptoUuid)
    })

    return {
        trades: data?.trades ?? [],
        isLoading, isError,
        fetchCryptoTradesError: "We are unable to retrieve your trades in this cryptocurrency."
    }
}