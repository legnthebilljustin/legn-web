import { client } from "@/hooks/useClient";
import { TradeFormDataType } from "@/types/crypto";

export const postTrade = async(formData: TradeFormDataType) => {
    const response = await client.post('/crypto/v1/trades', formData)
    return response.data
}