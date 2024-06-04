import { client } from "@/hooks/useClient"
import { PaginatedStatementsResponse, Statement } from "@/types/credit/statements";
import { Transaction } from "@/types/credit/transaction";

export const fetchStatements = async(creditCardUuid?: string)
: Promise<PaginatedStatementsResponse<Statement>> => {
    const { data } = await client.get(`/credit/v1/statements/statementsByCard/${creditCardUuid}`)

    return data.paginated;
}

export const fetchStatementTransactionsAndPayments = async(statementUuid: string): Promise<Transaction[]> => {
    const { data } = await client.get(`/credit/v1/statements/transactionsAndPayments/${statementUuid}`)
    
    return data.transactions;
}