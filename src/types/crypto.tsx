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