import { centsToFiat } from "@/utils/currency"

type Props = {
    amount: number
    label: string
}

export default function FinancialOverview({ amount, label }: Props) {
    return (
        <div className="text-center mt-3">
            <p className="text-5xl mb-2 dmsans-regular">Php { centsToFiat(amount) }</p>
            <small className="text-default-500 text-lg">{ label }</small>
        </div>
    )
}