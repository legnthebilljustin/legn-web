import { CryptoCard } from "@/feature/crypto";
import { savedCryptoTestData } from "@/tests/data/cryptoTestData";
import { CryptoDetails } from "@/types/crypto";

export default function Trades() {

    const savedCryptos = savedCryptoTestData

    return (
        <div className="container">
            <div className="my-6 grid grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
                {savedCryptos.map((crypto: CryptoDetails) => (
                    <CryptoCard crypto={crypto} />
                ))}
            </div>
        </div>
    )
}