import { ErrorMessage, LoadingIndicator } from "@/components";
import { CryptoList } from "@/feature/crypto";
import { useFetchCryptos } from "@/hooks";


export default function CryptoDashboard() {
    const { cryptos, isFetchingCryptos, isFetchCryptoFail, fetchCryptoError } = useFetchCryptos()
    
    if (isFetchingCryptos) {
        return <LoadingIndicator label="Fetching your saved cryptocurrencies..." />
    }
    
    else if (isFetchCryptoFail) {
        return <ErrorMessage error={fetchCryptoError} />
    }

    return (
        <>
            <CryptoList cryptos={cryptos} />
        </>
    )
}