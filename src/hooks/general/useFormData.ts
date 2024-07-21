
import { ChangeEvent, useCallback, useEffect, useState } from "react"

type formDataMap = Record<string, any>
type ChangeEventMap = ChangeEvent<HTMLInputElement>

type Props = {
    formDataProp: formDataMap,
}

type ReturnType = {
    formData: formDataMap
    handleInputChange: (event: ChangeEventMap) => void
    handleNumberInputChange: (event: ChangeEventMap) => void
    clearFormData: () => void
}

export function useFormData({ formDataProp }: Props): ReturnType {
    if (!formDataProp) {
        throw new Error("Invalid formData prop passed to the hook.") 
    }

    const [formData, setFormData] = useState<formDataMap>(formDataProp)

    useEffect(() => {
        setFormData(formDataProp)
    }, [formDataProp])

    const handleInputChange = useCallback((event: ChangeEventMap) => {
        const { name, value } = event.target

        if (name === undefined || value === undefined) {
            throw new Error("Input element is missing `name` or `value` attribute")
        }

        setFormData((prevData: any) => ({
            ...prevData,
            [name]: value
        }))
    }, [setFormData])

    const handleNumberInputChange = useCallback((event: ChangeEventMap) => {
        const { name, value } = event.target

        if (name === undefined || value === undefined) {
            throw new Error("Input element is missing `name` or `value` attribute")
        }

        if (value === "") {
            throw new Error("Input element cannot have an empty value.")
        }

        setFormData((prevData: any) => ({
            ...prevData,
            [name]: parseFloat(value)
        }))
        
    }, [setFormData])

    const clearFormData = useCallback(() => {
        setFormData(formDataProp)
    }, [setFormData])

    return {
        formData,
        handleInputChange,
        handleNumberInputChange,
        clearFormData
    }
}