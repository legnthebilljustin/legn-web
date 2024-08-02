import { client } from "@/hooks/useClient"
import { CryptoDetails, TradeDetails } from "@/types/crypto";

type CryptoListResponse = {
    cryptos: CryptoDetails[]
}

type CryptoTradesListResponse = {
    uuid: string
    name: string
    code: string
    trades: TradeDetails[]
}

export const fetchCryptos = async(): Promise<CryptoListResponse> => {
    const response = await client.get('/crypto/v1/cryptos');

    return response.data
}

export const postCrypto = async(formData: any) => {
    const response = await client.get('/crypto/v1/cryptos', formData);

    return response.data?.crypto
}

export const fetchCryptoTrades = async(cryptoUuid: string): Promise<CryptoTradesListResponse> => {
    const response = await client.get(`/crypto/v1/cryptos/${cryptoUuid}`)
    return response.data?.crypto
}