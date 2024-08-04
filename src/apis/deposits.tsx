import { client } from "@/hooks/useClient";
import { Deposit, DepositFormData } from "@/types/crypto";

type DepositListResponse = {
    totalDepositAmount: number
    deposits: Deposit[]
}

type PostDepositResponse = {
    deposit: Deposit
}

export const fetchDeposits = async(): Promise<DepositListResponse> => {
    const response = await client.get('/crypto/v1/deposits');

    return {
        deposits: response.data?.deposits,
        totalDepositAmount: response.data?.totalDepositAmount
    }
}

export const postDeposit = async(formData: DepositFormData): Promise<PostDepositResponse> => {
    const response = await client.post('/crypto/v1/deposits', formData);

    return response.data?.deposit
}