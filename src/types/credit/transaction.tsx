export type Transaction = {
    uuid: string
    merchantName: string,
    category: string,
    amount: number
    rewardPoints: number
    date: string
}

export type TransactionCategory = {
    uuid: string
    name: string
}

export type TransactionFormData = {
    merchantName: string
    category: string
    amount: number
    date: string
}