import { JustifyBetweenContainer, LoadingIndicator } from "@/components";
import { AddTradesForm, TradeOverview } from "@/feature/crypto";
import TradesList from "@/feature/crypto/components/TradesList";
import { useFetchCryptoTrades } from "@/hooks";
import { Divider } from "@nextui-org/react";
import { useLocation, useParams } from "react-router-dom";

export default function ActiveTrades() {
    const { cryptoUuid } = useParams();
    const location = useLocation();
    const { name, percentage } = location.state || {}

    const { trades, isLoading, isError } = useFetchCryptoTrades(cryptoUuid)

    return (
        <div className="flex justify-center">
            <div className="container py-5 px-2 max-w-md">
                <JustifyBetweenContainer>
                    <div className="text-lg dmsans-medium">{ name }</div>
                    <AddTradesForm />
                </JustifyBetweenContainer>
                { percentage && <TradeOverview percentage={percentage}/>}
                <Divider className="mb-4" />
                { isLoading ? <LoadingIndicator label="Fetching your active trades..." /> 
                    : <TradesList trades={trades} />
                }
            </div>
        </div>
    )
}