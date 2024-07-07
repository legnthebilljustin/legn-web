export type Deposit = {
    uuid?: string
    date: string
    fee: number
    depositAmount: number
    exchangeToken: string
    exchangePrice: number
    totalAmount: number
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