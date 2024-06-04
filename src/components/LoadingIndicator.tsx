import { Spinner } from "@nextui-org/react";

type Props = {
    label: string
}

export default function LoadingIndicator({label}: Props) {
    return (
        <div className="text-center mt-12">
            <Spinner label={label} color="primary" />
        </div>
    )
}