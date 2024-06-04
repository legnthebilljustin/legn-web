import { convertToCurrency, convertToNumber } from "@/utils/currency"

type Props = {
    balance: number,
    totalRewardPoints: number
}

const RunningBalance: React.FC<Props> = ({ balance, totalRewardPoints }) => {

    return (
        <div className="container px-3 pb-8 text-center dmsans-regular">
            <p className="text-5xl mb-2 dmsans-regular">Php { convertToCurrency(balance) }</p>
            <small className="text-default-500 text-lg">Running Balance</small>

            <p className="text-4xl dmsans-regular mt-8">{ convertToNumber(totalRewardPoints) }</p>
            <small className="text-default-500 text-md">Estimated Reward Points Earned</small>
        </div>
    )
}

export default RunningBalance