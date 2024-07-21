export type Deposit = {
    uuid?: string
    fee: number
    depositAmount: number
    exchangeToken: string
    exchangePrice: number
    totalAmount: number
    depositDate: string
}

export type CryptoDetails = {
    uuid: string
    name: string
    code: string
}

export type TradeDetails = {
    uuid: string
    entryPrice: number
    purchasedAmount: number
    fee: number
    finalCryptoAmount: number
    purchaseDate: string
}

export type DepositFormData = {
    depositAmount: number
    exchangeToken: string
    exchangePrice: number
    fee: number
    totalAmount: number
    depositDate: string
}