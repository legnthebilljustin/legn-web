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

/**
 * maybe this can be deleted?
 * this is a duplicate of InputWithValidation but with added type, step and min
 */
export default function NumberInputWithValidation({
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
        type="number"
        step="0.01"
        min="0"
    />
}