type Props = {
    percent: number
    classes?: string
}

export default function Percentage({ percent, classes = "" }: Props) {
    const green = "text-green-400"
    const red = "text-red-600"

    const textColor = percent >= 0 ? green : red;
    return (
        <div className={`dmsans-medium ${textColor} ${classes}`}>{ percent }%</div>
    )
}