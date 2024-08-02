import { CryptoDetails } from "@/types/crypto"
import CryptoCard from "./CryptoCard"

type Props = {
    cryptos: CryptoDetails[]
}

export default function CryptoList({ cryptos }: Props) {
    return (
        <div className="container">
            <div className="my-6 grid grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
                {cryptos.map((crypto: CryptoDetails) => (
                    <CryptoCard crypto={crypto} />
                ))}
            </div>
        </div>
    )
}