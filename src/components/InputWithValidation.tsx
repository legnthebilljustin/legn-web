import { Input } from "@nextui-org/react"

type Props = {
    label: string
    name: string
    value: any
    validationError: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    [propName: string]: any
    isRequired?: boolean
}

export default function InputWithValidation({
    isRequired, label, name, value, validationError, onChange, dynamicProps
}: Props) {
    return <Input
        label={label}
        name={name}
        value={value}
        variant={validationError ? "bordered" : "flat" }
        isInvalid={!!validationError}
        errorMessage={validationError}
        onChange={onChange}
        isRequired={isRequired}
        {...dynamicProps}
    />
}