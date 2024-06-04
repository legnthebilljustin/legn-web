export type CardDetails = {
    uuid: string
    name: string
    bank: string
    creditLimit: number
    amountPerPoint: number
    totals: {
        amountSpent: number
        cashbacks: number
        transactions: number
        rewardPoints: number
        financeCharges: number
        treats: number
    }
}

export type CreditCard = {
    uuid: string
    bank: string
    name: string
    color: string
}

export type CreditCardFormData = {
    bank: string
    name: string
    creditLimit : number
    amountPerPoint: number
    color: string
    billingDate: number
}