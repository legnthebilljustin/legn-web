import { JustifyBetweenContainer } from "@/components";
import { AddTradesForm, TradeOverview } from "@/feature/crypto";
import TradesList from "@/feature/crypto/components/TradesList";
import { tradesTestData } from "@/tests/data/cryptoTestData";
import { Divider } from "@nextui-org/react";

export default function ActiveTrades() {
    return (
        <div className="flex justify-center">
            <div className="container py-5 px-2 max-w-md">
                <JustifyBetweenContainer>
                    <div className="text-lg dmsans-medium">Bitcoin</div>
                    <AddTradesForm />
                </JustifyBetweenContainer>
                <TradeOverview />
                <Divider className="mb-4" />
                <TradesList trades={tradesTestData} />
            </div>
        </div>
    )
}