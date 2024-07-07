import { PropsWithChildren } from "react"

type Props =  PropsWithChildren & {

}

export default function JustifyBetweenContainer({ children }: Props) {
    return (
        <div className="inline-flex justify-between w-full">
            { children }
        </div>
    )
}