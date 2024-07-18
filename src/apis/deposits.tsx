import { client } from "@/hooks/useClient";
import { Deposit } from "@/types/crypto";

type DepositListResponse = {
    totalDepositAmount: number
    deposits: Deposit[]
}

export const fetchDeposits = async(): Promise<DepositListResponse> => {
    const response = await client.get('/crypto/v1/deposits');

    return {
        deposits: response.data.deposits,
        totalDepositAmount: response.data.totalDepositAmount
    }
}