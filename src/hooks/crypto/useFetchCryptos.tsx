import { fetchCryptos } from "@/apis/cryptos";
import { CryptoDetails } from "@/types/crypto";
import { useQuery } from "react-query";

type ReturnTypes = {
    cryptos: CryptoDetails[],
    isFetchingCryptos: boolean
    isFetchCryptoFail: boolean
    fetchCryptoError: string
}


export function useFetchCryptos(): ReturnTypes {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["fetchCryptosList"],
        queryFn: () => fetchCryptos()
    })

    return {
        cryptos: data?.cryptos ?? [],
        isFetchingCryptos: isLoading,
        isFetchCryptoFail: isError,
        fetchCryptoError: "We are unable to retrieve your cryptocurrencies."
    }
}