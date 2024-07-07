import { Chip } from "@nextui-org/react";
import Percentage from "./Percentage";

type Props = {

}

export default function TradeOverview() {
    return (
        <div className="container">
            <div className="text-center">
                <Percentage percent={90} classes="text-5xl" />
                <p className="text-gray-400 text-xs mb-4 mt-1">Overall Estimated Profit</p>
            </div>
        </div>
    );
}