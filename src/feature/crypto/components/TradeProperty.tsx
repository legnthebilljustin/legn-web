import { JustifyBetweenContainer } from "@/components"

type Props = {
    label: string
    value: any
}

export default function TradeProperty({ label, value }: Props) {
    return (
        <JustifyBetweenContainer>
            <div className="text-xs text-default-400">{ label || "?" }</div>
            <div className="text-sm dmsans-regular">{ value || "?" }</div>
        </JustifyBetweenContainer>
    )
}