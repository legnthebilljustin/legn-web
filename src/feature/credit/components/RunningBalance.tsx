import FinancialOverview from "@/components/FinancialOverview"
import { convertToNumber } from "@/utils/currency"

type Props = {
    balance: number,
    totalRewardPoints: number
}

const RunningBalance: React.FC<Props> = ({ balance, totalRewardPoints }) => {

    return (
        <div className="container px-3 pb-8 text-center dmsans-regular">
            <FinancialOverview amount={balance} label="Running Balance" />

            <p className="text-4xl dmsans-regular mt-8">{ convertToNumber(totalRewardPoints) }</p>
            <small className="text-default-500 text-md">Estimated Reward Points Earned</small>
        </div>
    )
}

export default RunningBalance