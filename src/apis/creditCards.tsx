import { client } from "@/hooks/useClient"
import { CardDetails, CreditCard, CreditCardFormData } from "@/types/credit/card";

const CREDIT_BASE_URL = '/credit/v1/cards'

export const fetchCreditCards = async()
: Promise<CreditCard[] | []> => {
    const response = await client.get(`${CREDIT_BASE_URL}`)
    return response.data;
}

export const fetchCardDetails = async(creditCardUuid?: string)
: Promise<CardDetails> => {
    const response = await client.get(`${CREDIT_BASE_URL}/${creditCardUuid}`)
    return response.data;
}

export const addCreditCard = async(formData: CreditCardFormData) => {
    const response = await client.post(`${CREDIT_BASE_URL}`, formData)
    return response.data
}