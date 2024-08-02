import Percentage from "./Percentage";

type Props = {
    percentage: number
}

export default function TradeOverview({ percentage }: Props) {
    return (
        <div className="container">
            <div className="text-center">
                <Percentage percent={percentage} classes="text-5xl" />
                <p className="text-gray-400 text-xs mb-4 mt-1">Overall Estimated Profit</p>
            </div>
        </div>
    );
}