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
    uuid?: string
    entryPrice: number
    amountUSD: number
    fee: number
    finalCryptoAmount: number
    tradeDate: string
}

export type DepositFormData = {
    depositAmount: number
    exchangeToken: string
    exchangePrice: number
    fee: number
    totalAmount: number
    depositDate: string
}

export type TradeFormDataType = {
    entryPrice: number
    amountUSD: number
    fee: number
    finalCryptoAmount: number
    tradeDate: string
}