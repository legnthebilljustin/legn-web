import { CryptoDetails, Deposit, TradeDetails } from "@/types/crypto";

export const depositsTestData: Deposit[] = [
    {
        uuid: "123n1jk2n3k1",
        depositAmount: 50000,
        exchangeToken: "USDT",
        exchangePrice: 5059,
        fee: 2500,
        totalAmount: 988,
        date: "2024-02-23"
    },
    {
        uuid: "1t352adn3k1",
        depositAmount: 502400,
        exchangeToken: "USDT",
        exchangePrice: 5254,
        fee: 2500,
        totalAmount: 241231,
        date: "2024-02-12"
    },
]

export const savedCryptoTestData: CryptoDetails[] = [
    {
        uuid: "9q82hndjksanjkwndjwd",
        name: "Bitcoin",
        code: "BTC"
    },
    {
        uuid: "15t3m1qinekjawd23raw",
        name: "Ethereum",
        code: "ETH"
    },
    {
        uuid: "15314awgwa245rtgqa",
        name: "Cardano",
        code: "ADA"
    },
    {
        uuid: "9q82hndjksanjkwndjwd",
        name: "Bitcoin",
        code: "BTC"
    },
    {
        uuid: "15t3m1qinekjawd23raw",
        name: "Ethereum",
        code: "ETH"
    },
    {
        uuid: "15314awgwa245rtgqa",
        name: "Cardano",
        code: "ADA"
    },
]

export const tradesTestData: TradeDetails[] = [
    {
        uuid: "892u1892u31321",
        entryPrice: 10000,
        purchasedAmount: 1000000,
        fee: 0.001209,
        finalCryptoAmount: 1.3212421,
        purchaseDate: "2024-02-03",
    },
    {
        uuid: "892u1892u31321",
        entryPrice: 10000,
        purchasedAmount: 1000000,
        fee: 0.001209,
        finalCryptoAmount: 1.3212421,
        purchaseDate: "2024-02-03",
    },
    {
        uuid: "892u1892u31321",
        entryPrice: 10000,
        purchasedAmount: 1000000,
        fee: 0.001209,
        finalCryptoAmount: 1.3212421,
        purchaseDate: "2024-02-03",
    },
    {
        uuid: "892u1892u31321",
        entryPrice: 10000,
        purchasedAmount: 1000000,
        fee: 0.001209,
        finalCryptoAmount: 1.3212421,
        purchaseDate: "2024-02-03",
    },
]