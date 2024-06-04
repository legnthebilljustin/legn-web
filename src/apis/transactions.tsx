import { client } from "@/hooks/useClient";
import { TransactionCategory } from "@/types/credit/transaction";

export const fetchTransactionCategories = async()
: Promise<TransactionCategory[]> => {
    const response = await client.get('/credit/v1/transactionCategories')
    return response.data
}