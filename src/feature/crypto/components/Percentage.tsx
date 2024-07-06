type Props = {
    percent: number
}

export default function Percentage({ percent }: Props) {
    const green = "text-green-400"
    const red = "text-red-600"

    const textColor = percent >= 0 ? green : red;
    return (
        <div className={`dmsans-medium ${textColor}`}>{ percent }%</div>
    )
}